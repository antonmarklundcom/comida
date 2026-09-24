# PHP lead handler tests (`php/lead-forward.php`)

## Local, automated (runs on this laptop with PHP 8.1+)

```
node engine/build-site.mjs --site=comida
node scripts/php-handler-test.mjs
```

The script lints the handler, starts a mock VenderCRM (`scripts/fixtures/mock-crm.php`) and three PHP servers, and checks 16 cases, including the five below. Result on 2026-09-24: **16/16 passed** (PHP 8.3.33 at `C:/php/php.exe`).

## Live CRM check from the laptop (2026-09-24)

One real lead was sent through the handler to `https://crm.clientes.com.py/api/v1/leads` with the comida site key: **HTTP 200, accepted**, redirect to `/gracias/?estado=recibida`. Contact name "PRUEBA comida.com.py (test de integración)", phone +595992279599 (delete it in the CRM). Local PHP on Windows needed `-d curl.cainfo=<ca-bundle.crt>`; Hostinger PHP ships its own CA bundle.

## On Hostinger, after upload (manual, the five required cases)

Prerequisites: the private config exists at `domains/comida.com.py/comida-private/config.php` (next to `public_html`), the site key comes from VenderCRM → **Sitios**, and `state_dir` exists and is writable.

| # | Case | How | Expected |
|---|---|---|---|
| 1 | Success | Submit `/presupuesto/` with your own WhatsApp number | Redirect to `/gracias/?estado=recibida` with the green "Recibimos tu solicitud" box. VenderCRM → Contactos shows the contact with the phone as `+595…`; the deal appears if the site has a default stage. |
| 2 | Rejected payload | Temporarily set a wrong `api_key` in the private config and submit | The form shows "No pudimos registrar tu solicitud" and a WhatsApp button whose prefilled text contains the brief. PHP error log line `comida lead-forward: CRM status 401`. Restore the key. |
| 3 | Upstream timeout | Temporarily set `crm_url` to `https://10.255.255.1` and `timeout` to 3 | After about 3 seconds, the WhatsApp fallback appears. Log line with `curl 28`. Restore. |
| 4 | Duplicate | Double-click "Enviar solicitud", or press it again after a slow answer, on the same page | One contact and one submission in VenderCRM (the repeat carries the same `idempotency_key` and gets 200). Reloading the page and sending again is a new submission: it is recorded and attaches to the same contact, because the phone is the identity. |
| 5 | Missing config | Temporarily rename the private config file | WhatsApp fallback, HTTP 503, log line `private config missing or incomplete`. Restore the file name. |

Also check once: `https://comida.com.py/php/` gives 403 or 404 (no listing), `https://comida.com.py/php/lead-forward.php` opened in the browser (GET) gives 405, and `https://www.comida.com.py/` redirects to `https://comida.com.py/`.
