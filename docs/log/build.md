# Build log — comida.com.py

Single source of truth for build state and the standing overrides. Every Codex dispatch
reads this file first. Append to it; do not rewrite history.

## Standing overrides (Anton, 2026-09-19/20)

These beat anything in the plan files and in `plan/P0-ANSWERS.md`.

| Item | Value |
|---|---|
| WhatsApp | `+595992279599`, in every `wa.me` link, always with a prefilled voseo message |
| Operator legal name / RUC | none yet → render **no** operator legal line; keep only "Servicio de referencia y coordinación. Cada proveedor contrata y factura directamente." |
| Hours | Lun a Vie 8:00 a 18:00, Sáb 8:00 a 12:00 |
| `chefPartnerSigned` | no → `/chef-a-domicilio/` built, `indexable: false`, hidden from nav and sitemap |
| viandas partner | none → `/viandas/*` built the same way, behind one config gate |
| VenderCRM | deferred → form posts to the PHP handler, WhatsApp fallback on any failure |
| Images | only the 29 entries in `docs/imagery-manifest.json` and the files in `assets/img`. Never invent a filename. **Never generate new images without asking Anton** (Higgsfield credits: 31.5 of a 60 cap spent) |
| Design | `docs/design-exports/opus-1.html` is approved and already applied in P1a. Locked tokens live in `plan/prompts/DESIGN-1.txt`; `--gold` and `--char` were added from the photography and are approved |
| Publishing | static HTML/CSS/vanilla JS + one PHP handler, Hostinger, no runtime Node, no CI files, no secrets in repo or dist |

## Model policy

Codex CLI `gpt-6-astra` at **low** effort does the implementation. Never escalate to high;
if a phase fails twice at low, stop and write the exact error here for Anton. The Claude
session directs, audits and makes taste calls. Never spawn Fable or any subagent on Fable.

Dispatch shape (Windows, avoid embedded double quotes in the task string):

```
C:\Users\anton\.local\bin\codex.cmd exec -C "C:/Claude 1/comida-com-py" --skip-git-repo-check -s workspace-write -c model="gpt-6-astra" -c model_reasoning_effort="low" "<task>"
```

## Audit recipe (run every phase; never accept a Codex report unreproduced)

1. `node engine/build-site.mjs --site=comida` → exit 0
2. `node engine/verify.mjs --site=comida` → exit 0
3. `node scripts/check-duplicates.mjs` → 0 shared paragraphs
4. Serve `dist/comida.com.py` (launch entry `comida-preview`, port 8093) and **look at the
   pages** at 1440 and 390: console clean, no horizontal scroll, images present, 48px tap
   targets, nothing overlapping.
5. `grep` dist for forbidden words (AGENTS.md rule 5), guaraní amounts, mojibake, bare
   `wa.me` links (a form `action` is not a link), secrets.
6. Commit with the phase name and the counts.

**Why step 4 is not optional:** Codex's sandbox cannot open localhost. It has reported
"build and verify exit 0" while the page was visibly broken — a missing WhatsApp glyph in
five places, oversized numerals sitting on top of their headings, and a favicon 404 on
every page. All three were found only by screenshotting.

## State

| Date | Commit | Phase | Result |
|---|---|---|---|
| 2026-09-19 | `5d50342` | Baseline + P1a | Engine adapter, 20-route manifest, 18 templates, tokens and layout from the approved design, real copy for `/`, `/catering/`, `/catering/bodas/`, `/catering/asuncion/`. Build + verify exit 0. |
| 2026-09-20 | `0301447` | P1b | Remaining 16 routes. **21 HTML, 18 sitemap URLs**, 7 occasion pages, 21 menus, 42 unique FAQ, 188 substantive paragraphs, 0 shared. Verify 4380 checks. Manager fixes: accent in "Depende del menú"; step-numeral padding at 390. |

Known good counts after P1b: **21 HTML / 18 sitemap URLs**. `plan/09`'s expectation of
19–20 sitemap URLs was arithmetic error: 21 pages minus chef, gracias and 404 is 18.

## Remaining phases

| Phase | Prompt | What |
|---|---|---|
| P1c | `plan/prompts/P1c.txt` | Two-screen form, `php/lead-forward.php` per plan/04 §5, supplier form, estimator inactive, GA4 events, `.htaccess` |
| P1d | `plan/prompts/P1d.txt` | README, `deploy/make-zip.ps1`, launch.json entry, final verify |
| P1e | `plan/prompts/P1e-DESIGN-PARITY.txt` | Design parity across templates + the Flagged items in `docs/log/codex-review-opus-1.md` (supersedes `P1e-APPLY-DESIGN.txt`, which names a file that never existed) |
| P2 | `plan/prompts/P2-VIANDAS.txt` | `/viandas/` line, built but not indexable |
| P3 | `plan/prompts/P3-IA-RESERVE.txt` | Reserved kinds for `/restaurantes/`, `/carne/`, `/asado/`, `/recetas/`; commented asado.com.py 301 |
| P4 | `plan/prompts/P4-GUIAS.txt` | First three guides under `/guias/`, five-point quality bar |
| P5 | `plan/prompts/P5-QA-GATE.txt` | `scripts/qa-gate.mjs`, zip verification, `docs/log/qa-report.md` |
| P6 | `plan/prompts/P6-FINAL-REVIEW.txt` | Codex's independent final review → `docs/log/codex-final-review.md`, ideas only |

Finish by writing `docs/log/fable-review-package.md` per Anton's Fable directive.

## Blocked on Anton

- Operator legal name and RUC (no operator line ships until then)
- Signed catering, chef and vianda partners
- VenderCRM contract: auth header name, lead type values, payload mapping
- The five PHP test cases on Hostinger, after upload
- `/terminos/` and `/privacidad/` reviewed by a lawyer
- DNS: domain not pointed anywhere yet. Do not deploy and do not touch any domain.

## P1e design parity (Opus 5.5, 2026-09-24)

- Tap targets raised to 48px: carousel dots (visual dot unchanged, hit area 48px), flexible-date and consent rows, footer links, catering-menu side links, guide TOC links.
- Paprika limited to primary CTAs, focus rings, the brand dot and the single statement highlight: nav hover, drawer "Ver todo", occasion-tile "go" and link arrows now use ink; checkbox accent uses olive.
- Kept by decision: `--gold` and `--char` (approved), the Google Fonts Fraunces load (self-hosting needs a font download Anton has not approved; flagged).

## 2026-09-24 — Opus 5.5 build session (no Codex, per Anton)

Direction change from Anton: SEO traffic and time on site first; catering, viandas and later fresh-food delivery monetise the audience. KWP rounds 1-4 confirmed as Paraguay data; merged in `plan/research/kwp-all.csv` (`node scripts/kwp-merge.mjs`). Revenue and growth plan: `plan/12-GROWTH-AND-REVENUE.md`.

| Phase | Result |
|---|---|
| P1c | Two-screen lead form (home, /presupuesto/), supplier form (/proveedores/), viandas form; `php/lead-forward.php` to the real VenderCRM contract (X-Api-Key, idempotency_key, 201/200); WhatsApp fallback with the brief on any failure; no-JS path via 303 redirects; localhost mock; GA4 hook (off until an ID exists); `.htaccess`. `php -l` clean on PHP 8.3; `scripts/php-handler-test.mjs` 15/15 against a mock CRM. |
| P1d | README, `deploy/make-zip.ps1` (ZipFile API, forward slashes), `comida-preview` in `C:\Claude 1\.claude\launch.json`, `docs/php-tests.md`. |
| P1e | Tap targets 48px, paprika restricted (see section above). |
| Content engine | `engine/collections.mjs`: one module per page under `sites/comida/content/{recipes,guides,cuts,viandas}`; templates `recipe.mjs` (kilo/portion scaler, saved checklists, step timers, modo cocina with Wake Lock, print), `article.mjs` (guides, cuts, viandas; TOC, facts, tables, calculators), `hub-list.mjs` (/recetas/ search, filters, "¿Qué cocino hoy?"). Recipe and Article JSON-LD. `scripts/validate-content.mjs`. |
| Content | 47 recipes (6 more from KWP round 4: empanada de mandioca, lomito árabe, sandwich de lomito, pizza casera, tacos, empanadas de choclo), 8 guides (incl. `/mercado-de-abasto/` with sourced facts, 3 calculators), 10 meat cuts, 3 hubs; written by 6 parallel Opus subagents from `plan/prompts/CONTENT-WRITER.md`, audited by the manager. |
| P2 | `/viandas/` + saludables, para-oficina, precios: built, noindex, out of sitemap and nav until `gates.viandasPartnerSigned`. |
| P3 | `restaurants` collection and `/asado/`, `/restaurantes/` reserved (published false, never emitted); envelope rule in the verifier; commented asado.com.py 301 in `.htaccess`. |
| P4 | Guides built (bocaditos, comida por persona, carne por persona, qué preguntar a un catering) plus queso Paraguay, canasta básica, comida típica paraguaya, Mercado de Abasto. |
| P5 | `scripts/qa-gate.mjs` 16 gates PASS; zip 8.3 MB, 225 files. |
| P6 | Replaced by the manager's own review (`docs/log/opus-final-review.md`); Anton will review manually with Fable or Codex later. |
| Tests | `verify.test.mjs` fixed (runs without args; stale "unpublished link" case now targets a real unpublished route) and extended with "link to noindex page": 15/15 rejected. |

Counts at the end of the session: **93 HTML / 86 sitemap URLs**, verify 25,843 checks, 1,501 substantive paragraphs, 0 shared; zip 8.3 MB, 231 files; QA gate 16/16; PHP test 15/15; mutation tests 15/15; 390px overflow sweep 86/86 clean.

### Opus-specific issues logged (Anton asked for this)

1. The Bash tool on this laptop drops backslashes inside heredocs (`\d` became `d`, `\` became `\`). Two regexes broke silently (verifier date check, zip path replace). Fix: write code with regexes through the Write/Edit tools only.
2. A blind `sed` accent fix changed a correct impersonal "se hornea" into "se horneá". Caught on re-read; avoid global text replacements in Spanish copy.
3. Browser pane screenshots come back blank or mis-scaled when the pane is hidden or after programmatic scrolling; DOM checks (bounding boxes, a 390px iframe sweep) were used instead.
4. One content subagent repeatedly wrote a missing `}` after table objects, which broke the whole build while it worked; parallel writers must never run the build, and the manager should expect transient import errors until they finish.

## 2026-09-24 (later) — VenderCRM contract and KWP round 5

- Anton supplied the VenderCRM lead-endpoint list (kept outside the repo; it holds live keys, none copied anywhere). comida.com.py exists and is live as site `comida`.
- Handler changes to match it: `idempotency_key` is now one per filled-in form (hidden `idem`, set by `forms.js` on load; server falls back to a random key), because VenderCRM drops a reused key as a duplicate; success = HTTP 200/201 per the contract. PHP test now 16/16 (new case: same phone, new submission).
- KWP round 5 saved (`plan/research/kwp-round5.csv`); master `kwp-all.csv` = 1,713 unique keywords from 5 rounds.
- 15 new pages from round 5 (two Opus writers): pastel mandi'o, kiveve, ka'i ladrillo, kosereva, mbaipy, locro paraguayo, pira caldo, chipa mestizo (1/2/5 kilos), cocido paraguayo, pan dulce, clericó, dulce de leche casero, tarta de choclo; guides tereré (UNESCO 2020 inscription confirmed and cited) and qué cocinar hoy.
- Counts: **108 HTML / 101 sitemap URLs**; verify 30k+ checks; 1,807 substantive paragraphs, 0 shared; QA gate 16/16; zip 8.4 MB; 390px sweep 101/101 clean.

## 2026-09-24 (night) — growth ideas 1-20 (Opus 5.5)

All 20 ideas from the growth list are built; content by 7 parallel Opus writers (staged in content/_incoming, audited, then moved in).

| # | Idea | Where |
|---|---|---|
| 1-3 | /mercado/ canasta, queso Paraguay, carne (a consultar) with order form, lead type pedido | sites/comida/mercado.mjs, content/products/, templates/lead-form.mjs orderForm |
| 2 | "Pedí los ingredientes" on every recipe, scaled | templates/recipe.mjs, public/js/kitchen.js |
| 4 | /planificador/ menu planner + summed shopping list | templates/planner.mjs, kitchen.js, /data/recipes.json |
| 5 | Asado calculator offers the kit | kitchen.js |
| 6 | Printable seasonal recetarios behind a WhatsApp form (lead type recetario) | templates/recetario.mjs, /recetario/<slug>/ (noindex) |
| 7 | 24 recipe photos, Sunburst medium 1k 4:3, 12 credits (running total 43.5 / 60), ledger checked | docs/imagery-manifest.json ids 30-53 |
| 8 | 12 ingredient pages /recetas-con/<ingrediente>/ with auto-matched recipes | content/ingredients/ |
| 9 | +60 recipes (120 total) | content/recipes/ |
| 10 | 5 seasonal collections /recetas/para/<fecha>/ | content/seasons/ |
| 11 | Weekly Abasto price table, built and OFF (needs Anton's decision on AGENTS.md rule 5) | sites/comida/abasto-precios.mjs, scripts/abasto-precios.mjs |
| 12 | Search Console review script | scripts/gsc-report.mjs |
| 13 | ItemList structured data on hubs, ingredient and season pages | engine/build-site.mjs |
| 14 | Saved recipes + installable offline app (manifest, service worker stamped per build) | public/sw.js, manifest.webmanifest |
| 15 | Private "¿La hiciste?" feedback | php/feedback.php |
| 16 | Weekly recipe WhatsApp signup (lead type suscripcion) | templates/lead-form.mjs subscribeForm |
| 17 | Git deploy branch 'hostinger' | scripts/deploy-branch.mjs |
| 18 | Fraunces self-hosted, fonts preloaded | public/fonts/, public/css/fonts.css |
| 19 | Social cards + captions | scripts/social-cards.mjs → social/ |
| 20 | Restaurant scaffold (template, checklist, validator rule), still reserved | content/restaurants/_template.mjs, docs/restaurant-visit-checklist.md |

Fixed along the way: service worker must be network-first for CSS/JS (cache-first would pin old files after deploys); planner listed only 60 of 120 recipes; /recetas/ hub trimmed from 89.9 to 78.8 KB (100 KB limit).
Counts: **195 HTML / 183 sitemap URLs**; PHP test 24/24; QA gate 17/17 (new gate: mercado settings match the PHP allowlist).

## 2026-09-24 (end of session)

PRs #1 (launch build) and #2 (growth ideas 1-20) merged into master by Anton's explicit request; merged master re-checked green (195 HTML / 183 sitemap URLs, verify 59,409 checks, 0 shared paragraphs). Deploy branch `hostinger` pushed (built site only). Social cards: 56 of 120 generated when the session ended; rerun `node scripts/social-cards.mjs`. Continuation prompt for the next chat: `docs/log/next-session-prompt.md`.

## 2026-09-25 — KWP round 6

Meat, pork, poultry and river-fish round saved as `plan/research/kwp-round6.csv` and merged (1,953 unique keywords). Clothing/sewing noise from the falda/aguja/paleta seeds left out; seed rows marked mixed intent. Page plan: `plan/13-MEAT-FISH-PAGE-PLAN.md` (33 pages, ~22k monthly searches without a page). Social cards: all 120 generated (the earlier '56 of 120' note is outdated).

## 2026-09-25 — "meat deep" batch (8 parallel Opus writers, manager audit)

68 new pages from every meat KWP round plus the remaining keyword gaps, built on branch meat-deep:
- 22 cuts: tapa de cuadril, colita de cuadril, cuadrada, bola de lomo, carnaza, garrón, marucha, bife ancho, tapa de asado, nalga, aguja, costilla de vaca, tomahawk, chuletón, wagyu, panceta, lechón, matambrito de cerdo, pernil, carré, cordero, cabrito.
- 12 meat and fish guides: asado a la parrilla, parrillada, churrasquería, parrilla para asadito, cortes de carne vacuna, cortes de cerdo, cortes de pollo, carne magra, pescados de río, surubí, pacú, dorado (fishing-ban facts only from MADES Resolución 523/2025, as a dated example).
- 21 meat and fish recipes (tapa de cuadril al horno, matambre arrollado, pernil, lechón, cordero, tomahawk, asado de tira, panceta crocante, costillas BBQ, suprema rellena, alitas, surubí, pacú, dorado…).
- Other keyword gaps: tipos de queso, ideas de torta de cumpleaños, queso cottage casero, jugos para niños, 4 light recipes, 3 healthy collections (+3 recetarios), 5 catering landing pages (/catering/{asado,empanadas,pizza,hamburguesas,lechon}-para-eventos/) with the quote form prefilled.
- Updates: costillar page now targets "costilla de cerdo"; matambre, bondiola, Navidad, Fin de año, Semana Santa and the meat-per-person guide (pork, lamb, chicken, fish rows) link the new pages; /carne/ hub lists the meat guides.
- /recetas/ hub slimmed (recipe cards without the one-line text): 93.3 → 77.8 KB; new QA gate fails any page over 90 KB (paginate hubs before adding ~50 more recipes).
Counts: **266 HTML / 251 sitemap URLs**, verify 82k checks, 4,471 substantive paragraphs, 0 shared; PHP 24/24; QA gate 18/18; 390 px sweep 251/251. No new images (credits not approved for this batch).
