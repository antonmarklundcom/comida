# comida.com.py

Paraguayan food site: recipes, meat-cut guides and practical guides for traffic, plus a catering referral service (and a viandas line behind a partner gate) for revenue. Static HTML/CSS/vanilla JS plus one PHP handler, hosted on Hostinger. Node runs only on the laptop, as build tooling.

## Commands

```
node engine/build-site.mjs --site=comida     # build to dist/comida.com.py
node engine/verify.mjs --site=comida         # independent verifier (links, SEO, schema, forbidden words, encoding)
node engine/verify.test.mjs                  # mutation tests: the verifier must reject 15 broken builds
node scripts/check-duplicates.mjs            # no substantive paragraph may repeat across pages
node scripts/validate-content.mjs            # schema, length and voseo checks for content modules
node scripts/php-handler-test.mjs            # PHP handler end-to-end against a mock VenderCRM (needs PHP 8.1+)
node scripts/qa-gate.mjs --report            # pre-deploy gate; writes docs/log/qa-report.md
powershell -File deploy/make-zip.ps1         # build + verify + deploy/comida.com.py.zip
node scripts/deploy-branch.mjs               # build + all gates, commit dist to branch `hostinger`, push (Hostinger Git deploy)
node scripts/gsc-report.mjs <csv-folder>     # monthly Search Console review → docs/log/gsc-report-<date>.md
node scripts/abasto-precios.mjs <csv> --source "…" [--publish]   # weekly Abasto price table (off by default)
node scripts/social-cards.mjs [slug…]        # Instagram/Pinterest cards + captions → social/ (gitignored)
node scripts/kwp-merge.mjs                   # merge all Keyword Planner rounds → plan/research/kwp-all.csv
```

Preview: the `comida-preview` entry in `C:\Claude 1\.claude\launch.json` serves `dist/comida.com.py` on http://localhost:8093 (`node engine/serve.mjs --site=comida --port=8093`). On localhost the forms use `public/js/form-mock.js`; add `?mock=fail` or `?mock=rate` to a form URL to test the WhatsApp fallback.

## Where things live

| Path | What |
|---|---|
| `sites/comida/routes.mjs` | The route manifest: core pages, hubs, reserved kinds, plus every content module (loaded automatically). Single source of page counts. |
| `sites/comida/content/recipes/*.mjs` | One recipe per file. Reference shape: `sopa-paraguaya.mjs`. |
| `sites/comida/content/guides/*.mjs` | Guides (quantities, queso Paraguay, Mercado de Abasto…). Calculators are declared with `tool`. |
| `sites/comida/content/cuts/*.mjs` | Meat cuts under `/carne/`. |
| `sites/comida/content/viandas/*.mjs` | Viandas line, noindex until `gates.viandasPartnerSigned`. |
| `sites/comida/gates.mjs` | Commercial gates: `chefPartnerSigned`, `viandasPartnerSigned`. |
| `sites/comida/prices.mjs` | Internal catering price references. Never public until `published: true` with a written quote as `source`. |
| `templates/` | Page templates (`recipe.mjs`, `article.mjs`, `hub-list.mjs`, `lead-form.mjs`, catering pages, `home.html`). |
| `php/lead-forward.php` | Form → VenderCRM forwarder. |
| `public/` | CSS, JS, fonts, `.htaccess` (copied into dist). |
| `plan/` | Strategy, KWP research (`plan/research/`), dispatch prompts. Never deployed. |
| `docs/log/build.md` | Build log and standing overrides. |

## Mercado (fresh-food orders)

Every operational setting is in `sites/comida/mercado.mjs`: `open`, zones, cut-off, delivery days, payment methods and the product list. If you change zones, days or product ids, update the three constants at the top of `php/lead-forward.php` too; the QA gate fails when they differ. No prices are shown anywhere: the order form collects the request and the total is confirmed on WhatsApp (lead type `pedido` in VenderCRM). Recipes link to `/mercado/?receta=<slug>` and prefill the order with the scaled ingredient list; the planner and the asado calculator do the same.

Other lead types: `suscripcion` (weekly recipe by WhatsApp, on recipe, ingredient and season pages) and `recetario` (unlocks `/recetario/<season>/`, a printable page, noindex). Recipe feedback ("¿La hiciste?") goes to `php/feedback.php`, which appends to `feedback.jsonl` in the private `state_dir`; it is never displayed.

## Deploy with Git instead of zips

`node scripts/deploy-branch.mjs` builds, runs every gate, and commits only `dist/comida.com.py` to the orphan branch `hostinger` (plus a `.deploy-source` file naming the source commit), then pushes it. In hPanel → Advanced → Git: repository `https://github.com/antonmarklundcom/comida.git`, branch `hostinger`, install path `public_html` (empty folder the first time). Add the deploy key hPanel shows to the GitHub repo if it is private, and turn on auto-deploy (webhook). The private config stays outside `public_html` as before.

## Adding content

Copy a module from the same folder, change `id`, `slug` (= file name), texts and data, run `node scripts/validate-content.mjs <file>`, then build and verify. Rules: Paraguayan voseo, no prices in guaraníes, no "24 horas", no "verificado/garantizado", no brands or partner names, every paragraph unique site-wide, `source` and `verifiedAt` on every module. Quantities that are estimates must say so (`estimate` field on guides).

### Restaurants, carne, asado, recetas (plan/10 §11)

- `recetas` and `carne` are live (`/recetas/`, `/carne/`).
- `restaurantes` is a reserved collection (`sites/comida/content/restaurants/`, kind `restaurant`, prefix `/restaurantes/`) and `/asado/` a reserved route: both `published: false`, so nothing is emitted, linked or listed. To start restaurants: add a hub entry and template (copy `hub-list.mjs` usage), set the reserved route to published, and write one module per restaurant with `source` (your visit or the restaurant's own published info) and `verifiedAt`. The verifier fails any collection module without them.
- asado.com.py: the 301 to `comida.com.py/asado/` is prepared, commented out, in `public/.htaccess`. Enable it only when asado.com.py DNS points to this hosting and `/asado/` is published.

## Forms and VenderCRM

The browser never talks to VenderCRM. Forms post to `/php/lead-forward.php`, which reads its settings from a private file **outside `public_html`**:

1. On Hostinger, create the folder `/home/<hostinger-user>/domains/comida.com.py/comida-private/` (next to `public_html`, never inside it) and in it `config.php`:
   ```php
   <?php return [
     'crm_url'   => 'https://crm.clientes.com.py',
     'api_key'   => '<the comida key from VenderCRM → Sitios>',
     // optional, separate CRM sites so suppliers and viandas land in their own pipelines:
     // 'api_key_proveedor' => '<key>', 'api_key_viandas' => '<key>',
     'timeout'   => 10,
     'state_dir' => '/home/<hostinger-user>/domains/comida.com.py/comida-private/state',  // create it, writable
     'rate_salt' => '<any random text>',
   ];
   ```
2. Nothing to edit in the PHP: `php/lead-forward.php` looks for `../../comida-private/config.php` relative to itself, which is exactly that folder. If your folder layout differs, set the environment variable `COMIDA_CONFIG_PATH`. Never commit the config file.
3. Run the five cases in [docs/php-tests.md](docs/php-tests.md).

Contract (VenderCRM `POST /api/v1/leads`, header `X-Api-Key`): `phone` and `idempotency_key` required; `name`, `email`, `message`, `source`, `utm_*`, `gclid`, `fbclid`, `page_url`, `referrer`, `fields` optional. 200 and 201 mean accepted (contact and deal exist) and count as success. `idempotency_key` is one per filled-in form (set by `forms.js` on load), so double clicks and retries never duplicate a lead while a new submission always gets through. 401 wrong or revoked key, 403 site not active in **Sitios**, 422 invalid field, 429 rate limited: all end in the WhatsApp fallback and a PHP error-log line. Any other answer, a timeout or a missing config shows the visitor a WhatsApp button with the brief already written. Lead type travels in `fields.tipo` (`cliente`, `proveedor`, `viandas`) and in `source`.

The comida.com.py site already exists and is live in VenderCRM (slug `comida`, per the 2026-09-23 endpoint list); its key goes only into the private config. Still to decide: whether suppliers and viandas get their own site records (`api_key_proveedor`, `api_key_viandas`) and the default pipeline stage for the site. First-touch attribution (`vc-attribution.js`) is read if present but not loaded yet; add `<script src="https://crm.clientes.com.py/vc-attribution.js" defer></script>` once the CRM URL is final.

## Analytics

Set `analytics: {enabled: true, publicId: 'G-XXXXXXX'}` in `sites/comida/site.config.mjs`. Events: `form_start`, `form_submit`, `wa_click`, `calc_use`, `recipe_scale`, `recipe_timer`, `cook_mode`, `recipe_print`, `random_recipe`. No personal data goes into events.

## Deploy (Hostinger)

1. `powershell -File deploy/make-zip.ps1` → `deploy/comida.com.py.zip`.
2. `node scripts/qa-gate.mjs --report` must exit 0.
3. hPanel → File manager → `public_html` → upload the zip → Extract. Create the private config (above) outside `public_html`.
4. SSL on, then the checks at the end of `docs/php-tests.md`.
5. Search Console: add the property and submit `https://comida.com.py/sitemap.xml`.
