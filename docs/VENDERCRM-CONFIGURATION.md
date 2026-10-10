# VenderCRM server configuration

New setup uses VENDERCRM_URL=https://crm.clientes.com.py (HTTPS base origin, never an API path) and VENDERCRM_API_KEY (matching site's private secret). The handler appends /api/v1/leads once. Never commit credentials or expose them to client JavaScript.

Preferred persistent file is ../private/vendercrm.php relative to the actual document root. It must physically remain outside that root, including symlink resolution. Optional VENDERCRM_CONFIG_FILE selects an absolute persistent file elsewhere. The file returns the same two uppercase names:

```php
<?php
return ['VENDERCRM_URL' => 'https://crm.clientes.com.py', 'VENDERCRM_API_KEY' => '']; // fill privately
```

Complete canonical env/private pairs override legacy transport settings. Partial canonical pairs fail validation and never borrow legacy values. Conflicting canonical env/private pairs fail validation; remove obsolete duplicate canonical settings. With no canonical source the existing effective loader remains intact.

The existing COMIDA_CONFIG_PATH/comida-private config still supplies state_dir, rate_salt, rate_max, timeout and api_key_<form>. A canonical pair overlays only crm_url/api_key; per-form keys remain intentional overrides. Canonical errors retain 503 with WhatsApp fallback. Build copies php/lib into dist/comida/php/lib automatically.

The persistent file must survive uploads and builds, outside generated dist/public_html. Document-root layout must be verified on actual hosting first. PHP file updates normally apply next request; worker environment/OPcache changes may require restart. Deploy changed helper and adapter code together. Website admin is separate from Hostinger runtime configuration and CRM /sites routing/activation. No production installation or delivery is claimed.
