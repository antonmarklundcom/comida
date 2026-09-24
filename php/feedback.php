<?php
/**
 * "¿La hiciste?" recipe feedback. Stored privately (state_dir/feedback.jsonl, outside public_html)
 * so the kitchen can improve recipes. Never displayed on the site (AGENTS.md rule 5: no review counts).
 * No personal data is collected: recipe slug, answer, optional short comment, date.
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function out(bool $ok, int $status = 200): never { http_response_code($status); echo json_encode(['ok' => $ok]); exit; }
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(false, 405);
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 4096) out(false, 413);
$recipe = (string)($_POST['receta'] ?? '');
$vote = (string)($_POST['voto'] ?? '');
$comment = mb_substr(trim(preg_replace('/\s+/u', ' ', (string)($_POST['comentario'] ?? '')) ?? ''), 0, 500, 'UTF-8');
if (!preg_match('/^[a-z0-9-]{2,60}$/', $recipe) || !in_array($vote, ['salio-bien', 'ajuste', 'no-salio'], true)) out(false, 422);
if (($_POST['website'] ?? '') !== '') out(false, 400);
$configPath = getenv('COMIDA_CONFIG_PATH') ?: dirname(__DIR__, 2) . '/comida-private/config.php';
$config = is_readable($configPath) ? (require $configPath) : null;
$dir = is_array($config) ? (string)($config['state_dir'] ?? '') : '';
if ($dir === '' || !is_dir($dir) || !is_writable($dir)) out(false, 503);
// One vote per IP and recipe per day keeps the file honest without storing the IP itself.
$marker = rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . 'fb-' . hash('sha256', ($config['rate_salt'] ?? 'comida') . '|' . ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . $recipe . '|' . gmdate('Y-m-d'));
if (is_file($marker)) out(true);
touch($marker);
$line = json_encode(['date' => gmdate('c'), 'receta' => $recipe, 'voto' => $vote, 'comentario' => $comment], JSON_UNESCAPED_UNICODE) . "\n";
file_put_contents(rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . 'feedback.jsonl', $line, FILE_APPEND | LOCK_EX);
out(true);
