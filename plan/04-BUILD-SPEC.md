# 04 — Build spec

## 1. Stack

Production is HTML/CSS/JS + one PHP handler on Anton's Hostinger plan (settled). Node 24 runs only on the laptop as build tooling. No CI minutes, no runtime Node, no database.

**Engine adaptation (v2, verified against `C:\Claude 1\prestamo-com-py\engine`):** the prestamo engine is copied into `engine/`, and the site is added as `sites/comida/` using the engine's existing loader (`sites/<id>/site.config.mjs` plus pages/providers/blog modules), built and verified with `--site=comida`. The following prestamo behaviours are known blockers and are changed deliberately, not by accident:
- `config.mjs` accepts only four site IDs and only an email in operator fields → add `comida` and phone/WhatsApp/hours fields.
- `verify.mjs` rejects forms, consent controls, VenderCRM references, PHP output and `Offer` schema → replace these bans with the food-site rules in §8, keep its escaping, routing and identity checks.
- Blog generation and finance disclaimers are hard-coded → make blog optional and remove insurance/loan copy, categories and the loan calculator.
- Output goes to `dist/<domain>/`; the builder must copy `public/` and the PHP endpoint explicitly.
- `serve.mjs` serves static bytes and cannot run PHP → preview tests the UI with a mocked form; the PHP → CRM path is tested on Hostinger.

Repo: `C:\Claude 1\comida-com-py` (this plan folder lives inside it under `plan/`).

## 2. File tree

```
comida-com-py/
  plan/                       this folder
  engine/                     copied prestamo engine, adapted as above
  sites/comida/
    site.config.mjs           brand, phone, hours, operator legal fields, nav, footer, coverage
    routes.mjs                THE route manifest: id, kind, path, title, meta, indexable, published
    prices.mjs                internal reference prices; each entry has unit, min guests, min charge,
                              tax, transport, inclusions, source, verifiedAt; published=false until sourced
    occasions.mjs             one entry per /catering/<occasion>/ (schema below)
    cities.mjs                asuncion only at launch
    lines.mjs                 chef-a-domicilio
    menus.mjs, faq.mjs        sample menus and FAQ pools
  templates/                  home, hub, occasion, city, line, precios, form, legal, gracias, 404
  public/                     css, js (form, estimator), img/ (real placeholder WebP assets), favicon, .htaccess
  php/lead-forward.php        POST → VenderCRM; reads config from an absolute private path outside public_html
  dist/comida.com.py/         build output (gitignored)
  deploy/make-zip.ps1         zips dist contents incl. .htaccess and php/, excludes credentials, research, logs
```

## 3. Content schema: occasion entry

```js
{
  id: 'occ-bodas', kind: 'occasion', slug: 'bodas', parent: 'catering',
  name: 'Bodas',
  h1: 'Catering para bodas: menús, formatos y presupuesto',
  title: 'Catering para bodas | comida.com.py',            // editorial limit 60
  meta: '...',                                             // editorial limit 155
  intro: ['...', '...'],
  formats: ['buffet', 'menu-servido', 'bocaditos'],        // keys into prices.mjs; rendered only if published
  includes: ['...'],
  menus: ['bodas-clasico', 'bodas-cocktail', 'bodas-asado'],
  faq: [{ q: '...', a: '...' }],                           // 6–8, unique, visible HTML only
  related: ['occ-eventos-empresariales', 'occ-15-anos', 'city-asuncion'],  // must resolve to published routes
  external: null,                                          // { label, href } only for a live sister page
  waMessage: 'Hola! Quiero presupuesto de catering para una boda...',
  hero: { src: '/img/ph-bodas.webp', alt: '...', illustrative: true },
  updatedAt: '2026-09-19', indexable: true, published: true
}
```

City and line entries use the same envelope with their own `coverage` and FAQ; they do not inherit occasion menus. The build fails on a `related` id that is not a published route.

## 4. Estimator (vanilla JS)

One price estimator on `/precios/` only, active only for price entries with `published: true`: `max(minCharge, guests × unitPrice) + transport + selectedExtras`, with numeric bounds and units shown. When no published price exists for the chosen format it renders "cotización personalizada" and the form CTA. Emits `calc_use`. The quantity calculator (cuánta comida por persona) is backlog (P3).

## 5. Form and lead endpoint

- Two-screen form per 03 §2. Client-side validation and honeypot are UX, not security.
- `php/lead-forward.php`: reads tenant URL and key from an absolute path outside `public_html` (documented in README, placeholder path in code); server-side allowlist of fields, phone normalisation, request size limit, persistent rate limit (file-based), idempotency key per submission to survive upstream timeouts; posts to VenderCRM `POST /api/v1/leads` with the contract read from the live CRM in P0 (URL, auth header, payload mapping, lead type: cliente vs proveedor, success criteria, timeout). Success only on confirmed CRM persistence → `/gracias/`. Any failure → the WhatsApp fallback with the brief encoded; no public log file, no "recibido" message.
- GA4 events: `form_start`, `form_submit`, `wa_click`, `calc_use`. No phone numbers, dietary detail or brief text in events or URLs.

## 6. Global elements

- Header: logo text "comida.com.py", nav Catering / Chef a domicilio / Viandas / Precios / Calculadora / Proveedores, CTA "Pedir presupuesto".
- Sticky mobile bar: Presupuesto + WhatsApp.
- Footer: hubs, legal, "Sitio operado por {legal name}, RUC {x}" once known, sister-domain links.
- Tokens: colour, type, spacing in one CSS file; light theme only at launch.

## 7. JSON-LD per template

home: Organization + WebSite · occasion/city/line: Service + BreadcrumbList · precios/form/legal: BreadcrumbList only. No Offer, no priceRange, no FAQPage, no HowTo (v2). JSON-LD is checked for required fields per type, not only parsed.

## 8. Verification (`node engine/verify.mjs --site=comida`)

Fails the build on: duplicate titles or metas; missing H1; title > 60 or meta > 155 (editorial limits); broken internal link or missing asset; duplicate routes; `related` id not published; missing canonical; noindex pages present in sitemap or 404 in sitemap; sitemap count ≠ indexable published routes in `routes.mjs`; image without alt/width/height; HTML over 100 KB; JSON-LD missing required fields; a price rendered from an entry with `published: false`; estimator data not matching `prices.mjs`; `wa.me` link without prefilled text; mojibake (non-UTF-8 Spanish); any string that looks like a key or token in `dist/`; duplicate substantive body paragraphs across pages (legal and process blocks excluded). The prestamo bans on forms, PHP, CRM references and Offer are removed.

## 9. Preview

Add `comida-preview` to `C:\Claude 1\.claude\launch.json` serving `dist/comida.com.py/` on port 8093 (8091/8092 are taken), keeping the file's existing entries and structure. The preview cannot run PHP; the form is tested with a mocked handler in preview and end-to-end on Hostinger before go-live: one success, one rejection, one timeout, one duplicate, one missing-config case.

## 10. Imagery

Deferred. Launch ships with real placeholder WebP assets (neutral food photography or solid cards) labelled "imagen ilustrativa". Higgsfield generation or permissioned partner photos come after the pilot.
