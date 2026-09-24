<?php
/**
 * comida.com.py lead forwarder: site form -> VenderCRM POST /api/v1/leads.
 *
 * Rules (plan/04 §5, plan/08 #14):
 * - The CRM key never lives in this file or anywhere under public_html. It is read from
 *   the private config file at COMIDA_PRIVATE_CONFIG (absolute path, outside public_html),
 *   documented in README.md.
 * - Success ("ok": true, redirect to /gracias/?estado=recibida) ONLY when VenderCRM answers
 *   201 (created) or 200 (idempotent replay). Anything else returns the WhatsApp fallback
 *   with the brief encoded, so the visitor never loses the enquiry.
 * - No public log file. Failures go to the server's PHP error log without phone numbers.
 */
declare(strict_types=1);

// Private config lives OUTSIDE public_html. On Hostinger this file is at
// /home/<user>/domains/comida.com.py/public_html/php/lead-forward.php, so the default below resolves to
// /home/<user>/domains/comida.com.py/comida-private/config.php (next to public_html, never web-served).
// Override with the COMIDA_CONFIG_PATH environment variable if the config lives elsewhere.
define('COMIDA_PRIVATE_CONFIG', dirname(__DIR__, 2) . '/comida-private/config.php');
const COMIDA_WHATSAPP = '595992279599';
const COMIDA_MAX_BYTES = 16384;
const COMIDA_RATE_MAX = 6;          // submissions per window per IP
const COMIDA_RATE_WINDOW = 600;     // seconds
const COMIDA_FORMS = ['cliente', 'proveedor', 'viandas'];

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function respond(bool $ok, array $extra = [], int $status = 200): never {
    global $wantsJson;
    http_response_code($status);
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    $payload = array_merge(['ok' => $ok], $extra);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    } else {
        // Without JavaScript: redirect to the confirmation page or straight to WhatsApp.
        header('Location: ' . ($ok ? ($payload['redirect'] ?? '/gracias/?estado=recibida') : ($payload['whatsapp'] ?? '/contacto/')), true, 303);
    }
    exit;
}

function clean(mixed $value, int $max): string {
    if (!is_string($value)) return '';
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? '');
    return mb_substr($value, 0, $max, 'UTF-8');
}

function clean_list(mixed $value, array $allowed): array {
    if (!is_array($value)) return [];
    $out = [];
    foreach ($value as $item) {
        $item = clean($item, 60);
        if ($item !== '' && in_array($item, $allowed, true)) $out[] = $item;
    }
    return array_values(array_unique($out));
}

/** Paraguayan mobile to +5959XXXXXXXX, or '' when it is not one. */
function normalize_phone(string $raw): string {
    $digits = preg_replace('/\D+/', '', $raw) ?? '';
    if (str_starts_with($digits, '595')) $digits = substr($digits, 3);
    if (str_starts_with($digits, '0')) $digits = substr($digits, 1);
    return preg_match('/^9\d{8}$/', $digits) ? '+595' . $digits : '';
}

function whatsapp_link(array $lines): string {
    return 'https://wa.me/' . COMIDA_WHATSAPP . '?text=' . rawurlencode(implode("\n", $lines));
}

function brief_lines(string $form, array $f): array {
    $lines = [$form === 'proveedor'
        ? 'Hola, quiero presentar mi servicio en comida.com.py.'
        : ($form === 'viandas' ? 'Hola, quiero consultar por viandas desde comida.com.py.' : 'Hola, quiero pedir un presupuesto desde comida.com.py.')];
    $labels = ['ocasion' => 'Ocasión', 'fecha' => 'Fecha', 'zona' => 'Zona', 'personas' => 'Personas',
        'presupuesto' => 'Presupuesto orientativo', 'nombre' => 'Nombre', 'empresa' => 'Empresa', 'negocio' => 'Negocio',
        'capacidad' => 'Capacidad', 'plan' => 'Plan', 'frecuencia' => 'Frecuencia', 'mensaje' => 'Mensaje'];
    foreach ($labels as $key => $label) {
        if (!empty($f[$key])) $lines[] = $label . ': ' . $f[$key];
    }
    if (!empty($f['flexible'])) $lines[] = 'Fecha flexible';
    if (!empty($f['formatos'])) $lines[] = 'Formatos: ' . implode(', ', $f['formatos']);
    if (!empty($f['zonas'])) $lines[] = 'Zonas: ' . implode(', ', $f['zonas']);
    return $lines;
}

function state_path(array $config, string $name): ?string {
    $dir = $config['state_dir'] ?? '';
    if (!is_string($dir) || $dir === '' || !is_dir($dir) || !is_writable($dir)) return null;
    return rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . $name;
}

/** File-based sliding window. Returns false when the IP is over the limit. */
function rate_ok(array $config): bool {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $path = state_path($config, 'rl-' . hash('sha256', ($config['rate_salt'] ?? 'comida') . '|' . $ip) . '.json');
    if ($path === null) return true; // no writable state dir: do not block real people
    $fh = fopen($path, 'c+');
    if ($fh === false) return true;
    flock($fh, LOCK_EX);
    $now = time();
    $hits = json_decode((string)stream_get_contents($fh), true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], static fn($t) => is_int($t) && $t > $now - COMIDA_RATE_WINDOW));
    $allowed = count($hits) < (int)($config['rate_max'] ?? COMIDA_RATE_MAX);
    if ($allowed) $hits[] = $now;
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);
    return $allowed;
}

// ---- request guards -------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, ['error' => 'method'], 405);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > COMIDA_MAX_BYTES) {
    respond(false, ['error' => 'size', 'whatsapp' => whatsapp_link(['Hola, quiero hacer una consulta desde comida.com.py.'])], 413);
}

$form = clean($_POST['form'] ?? '', 20);
if (!in_array($form, COMIDA_FORMS, true)) respond(false, ['error' => 'form'], 400);

// Honeypot: bots fill it. Answer like a failure without contacting the CRM.
if (clean($_POST['website'] ?? '', 200) !== '') respond(false, ['error' => 'rejected'], 400);

// ---- allowlisted fields ---------------------------------------------------
$zones = ['Asunción', 'Luque', 'San Lorenzo', 'Fernando de la Mora', 'Lambaré', 'Villa Elisa', 'Capiatá', 'Ñemby', 'Mariano Roque Alonso', 'Otra zona'];
$f = [
    'nombre' => clean($_POST['nombre'] ?? '', 120),
    'email' => clean($_POST['email'] ?? '', 200),
    'source' => clean($_POST['source'] ?? '', 120),
];
$phone = normalize_phone(clean($_POST['whatsapp'] ?? '', 30));

if ($form === 'proveedor') {
    $f['negocio'] = clean($_POST['negocio'] ?? '', 120);
    $f['formatos'] = clean_list($_POST['formatos'] ?? [], ['Bocaditos', 'Buffet', 'Menú servido', 'Coffee break', 'Asado', 'Viandas', 'Chef a domicilio']);
    $f['zonas'] = clean_list($_POST['zonas'] ?? [], $zones);
    $cap = filter_var($_POST['capacidad'] ?? '', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 5000]]);
    $f['capacidad'] = $cap === false ? '' : (string)$cap;
    $f['mensaje'] = clean($_POST['mensaje'] ?? '', 1000);
    $required = ['nombre', 'negocio'];
} elseif ($form === 'viandas') {
    $f['zona'] = in_array($z = clean($_POST['zona'] ?? '', 60), $zones, true) ? $z : '';
    $f['plan'] = clean($_POST['plan'] ?? '', 60);
    $f['frecuencia'] = clean($_POST['frecuencia'] ?? '', 60);
    $f['mensaje'] = clean($_POST['mensaje'] ?? '', 1000);
    $required = ['nombre', 'zona'];
} else {
    $f['ocasion'] = preg_match('/^[a-z0-9-]{1,40}$/', $o = clean($_POST['ocasion'] ?? '', 40)) ? $o : '';
    $date = clean($_POST['fecha'] ?? '', 10);
    $f['fecha'] = preg_match('/^\d{4}-\d{2}-\d{2}$/', $date) ? $date : '';
    $f['flexible'] = clean($_POST['flexible'] ?? '', 3) === 'si' ? 'si' : '';
    $f['zona'] = in_array($z = clean($_POST['zona'] ?? '', 60), $zones, true) ? $z : '';
    $guests = filter_var($_POST['personas'] ?? '', FILTER_VALIDATE_INT, ['options' => ['min_range' => 1, 'max_range' => 2000]]);
    $f['personas'] = $guests === false ? '' : (string)$guests;
    $f['presupuesto'] = clean($_POST['presupuesto'] ?? '', 80);
    $f['empresa'] = clean($_POST['empresa'] ?? '', 120);
    $required = ['nombre', 'ocasion', 'zona', 'personas'];
}
if ($f['email'] !== '' && !filter_var($f['email'], FILTER_VALIDATE_EMAIL)) $f['email'] = '';

$fallback = whatsapp_link(brief_lines($form, $f));
foreach ($required as $key) {
    if (empty($f[$key])) respond(false, ['error' => 'invalid', 'field' => $key, 'whatsapp' => $fallback], 422);
}
if ($phone === '') respond(false, ['error' => 'invalid', 'field' => 'whatsapp', 'whatsapp' => $fallback], 422);
if (clean($_POST['consent'] ?? '', 3) !== 'si') respond(false, ['error' => 'invalid', 'field' => 'consent', 'whatsapp' => $fallback], 422);

// ---- private config ---------------------------------------------------------
$configPath = getenv('COMIDA_CONFIG_PATH') ?: COMIDA_PRIVATE_CONFIG;
$config = is_readable($configPath) ? (require $configPath) : null;
if (!is_array($config) || empty($config['crm_url']) || empty($config['api_key'])) {
    error_log('comida lead-forward: private config missing or incomplete');
    respond(false, ['error' => 'config', 'whatsapp' => $fallback], 503);
}
if (!rate_ok($config)) respond(false, ['error' => 'rate', 'whatsapp' => $fallback], 429);

// Supplier and viandas leads may use their own VenderCRM site key so the CRM routes them
// to their own pipeline; they fall back to the main key.
$apiKey = (string)($config['api_key_' . $form] ?? $config['api_key']);

// ---- payload (VenderCRM contract: phone + idempotency_key required, no routing fields) --------------------------
$attr = [];
if (!empty($_COOKIE['vc_attr'])) {
    $decoded = json_decode((string)$_COOKIE['vc_attr'], true);
    if (is_array($decoded)) $attr = $decoded;
}
$pick = static function (string $key) use ($attr): string {
    $v = clean($_POST[$key] ?? '', 200);
    return $v !== '' ? $v : clean($attr[$key] ?? '', 200);
};
$fields = array_filter(array_diff_key($f, ['nombre' => 1, 'email' => 1, 'source' => 1]), static fn($v) => $v !== '' && $v !== []);
$fields['tipo'] = $form;
foreach (['formatos', 'zonas'] as $k) if (isset($fields[$k])) $fields[$k] = implode(', ', $fields[$k]);

$payload = [
    'phone' => $phone,
    // One key per filled-in form (set by forms.js when the form loads): double clicks and retries of the same
    // submission share it, a new submission gets a new one (VenderCRM drops a reused key as a duplicate).
    'idempotency_key' => preg_match('/^[A-Za-z0-9-]{16,64}$/', $idem = clean($_POST['idem'] ?? '', 64)) ? $form . '-' . $idem : $form . '-' . bin2hex(random_bytes(16)),
    'name' => $f['nombre'],
    'email' => $f['email'],
    'message' => implode("\n", array_slice(brief_lines($form, $f), 1)),
    'source' => mb_substr('comida.com.py:' . $form . ($f['source'] !== '' ? ':' . $f['source'] : ''), 0, 100, 'UTF-8'),
    'page_url' => clean($attr['landing_page'] ?? '', 2000),
    'referrer' => clean($attr['referrer'] ?? '', 2000),
    'fields' => $fields,
];
foreach (['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as $k) $payload[$k] = $pick($k);
$payload = array_filter($payload, static fn($v) => $v !== '' && $v !== null && $v !== []);

// ---- forward -------------------------------------------------------------------------------------
$ch = curl_init(rtrim((string)$config['crm_url'], '/') . '/api/v1/leads');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 4,
    CURLOPT_TIMEOUT => (int)($config['timeout'] ?? 10),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json', 'X-Api-Key: ' . $apiKey],
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
]);
$response = curl_exec($ch);
$status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_errno($ch);
curl_close($ch);

// VenderCRM contract (vendercrm-lead-endpoints.md, 2026-09-23): 200/201 = accepted, contact and deal exist.
$persisted = ($status === 201 || $status === 200) && $curlError === 0;
if ($persisted) {
    respond(true, ['redirect' => $form === 'proveedor' ? '/gracias/?estado=recibida&tipo=proveedor' : '/gracias/?estado=recibida']);
}

// Log status and the CRM's error body (it names the invalid field), never the visitor's data.
error_log(sprintf('comida lead-forward: CRM status %d curl %d body %s', $status, $curlError, is_string($response) ? mb_substr($response, 0, 300) : ''));
respond(false, ['error' => $curlError === 28 ? 'timeout' : ($curlError ? 'network' : 'upstream'), 'whatsapp' => $fallback], 502);
