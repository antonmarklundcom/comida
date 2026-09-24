# Prompt for the next comida.com.py session

Paste everything below the line into a new Claude Code chat (Opus 5.5), then paste the new KWP data after it.

---

You are continuing the comida.com.py project in a local run. Work only in `C:\Claude 1\comida-com-py`. Do not touch any other project folder.

REPO: https://github.com/antonmarklundcom/comida.git, branch `master`. Confirm with `git remote -v`, `git status` and `git log --oneline -5` before anything else. The last session ended with PRs #1, #2 and #3 merged into master. If master differs from origin, stop and tell me.

READ FIRST (in this order): `AGENTS.md`, `docs/log/build.md` (full state, standing overrides and the Opus issues log), `plan/12-GROWTH-AND-REVENUE.md` (current plan), `docs/log/opus-final-review.md` (launch blockers), `README.md` (commands, mercado, deploy), `plan/prompts/CONTENT-WRITER.md` (the brief for content subagents).

STATE AT HANDOFF (2026-09-24):
- Static site + one PHP handler, built by `node engine/build-site.mjs --site=comida`. 195 HTML pages / 183 in the sitemap: 120 recipes, 10 guides, 10 meat cuts, 12 `/recetas-con/` ingredient pages, 5 seasonal collections, catering pages, `/mercado/` (canasta, queso Paraguay, carne a consultar), `/planificador/`, printable recetarios, viandas (noindex behind a partner gate).
- Content lives in one module per page under `sites/comida/content/{recipes,guides,cuts,ingredients,seasons,products,viandas}`; the route manifest loads them. Mercado settings: `sites/comida/mercado.mjs` (keep in sync with the constants in `php/lead-forward.php`; the QA gate checks it).
- Forms post to `php/lead-forward.php` → VenderCRM (`X-Api-Key`, per-submission `idempotency_key`, 200/201 = accepted). Lead types: cliente, proveedor, viandas, pedido, suscripcion, recetario. A live test lead was accepted on 2026-09-24. The CRM key lives only in `comida-private/config.php` next to `public_html` on Hostinger (Anton has the folder in Downloads). Never print, commit or copy any key.
- KWP: all rounds merged in `plan/research/kwp-all.csv` (1,713 unique keywords; Paraguay data from a Swedish Ads account, CPC in SEK). Add a new round as `plan/research/kwp-roundN.csv` with columns `list,keyword,volume,cpc_low_sek,cpc_high_sek`, add it to `ROUNDS` in `scripts/kwp-merge.mjs`, run `node scripts/kwp-merge.mjs`.
- Images: `docs/imagery-manifest.json` has 53 entries (ids 30-53 are recipe photos). Higgsfield spend is 43.5 of a 60-credit cap: never generate images without my explicit OK in the chat, and follow the higgsfield-image-pipeline and webimg-pipeline skills (GPT Image 2.5 Sunburst, medium, 1k for recipe photos, ledger check after every batch).
- Deploy: `node scripts/deploy-branch.mjs` builds, runs every gate and pushes the built site only to branch `hostinger` (Hostinger Git deploy). Zip alternative: `deploy/make-zip.ps1`.
- Abasto weekly price table is built but OFF (`sites/comida/abasto-precios.mjs`), pending my decision on AGENTS.md rule 5.

GATES (all must pass before any commit): build, `node engine/verify.mjs --site=comida`, `node engine/verify.test.mjs`, `node scripts/check-duplicates.mjs`, `node scripts/validate-content.mjs`, `node scripts/php-handler-test.mjs`, `powershell -File deploy/make-zip.ps1`, `node scripts/qa-gate.mjs`. Plus a 390 px overflow sweep in the browser preview (`comida-preview`, port 8093). No CI files (Actions budget rule).

KNOWN ENVIRONMENT TRAPS: the Bash tool drops backslashes inside heredocs (write code with regexes via Write/Edit only); PHP is at `C:/php/php.exe` and needs `-d curl.cainfo="C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt"` for live HTTPS tests; list zips with `C:/Windows/System32/tar.exe`; parallel content writers must write to `sites/comida/content/_incoming/<collection>/` and never run the build.

WORK RULES: Opus 5.5 implements directly (no Codex) unless I say otherwise; use Opus subagents for parallel content writing with `plan/prompts/CONTENT-WRITER.md`. Paraguayan Spanish with voseo, no prices, no invented facts, every paragraph unique site-wide. Commit on a branch, open a PR, and merge it only when all gates are green and I have asked for the merge in this chat. End commit messages with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Log any Opus-specific issues in `docs/log/build.md`.

THIS SESSION:
1. I will paste new Keyword Planner data (meat cuts, pizza/empanada/burger terms, maybe more). Save it as the next `kwp-roundN.csv` (keyword, volume, low CPC, high CPC, list), merge it into `kwp-all.csv`, and tell me the top opportunities that have no page yet.
2. Propose the next build batch from those gaps and from the backlog below, with page counts and credit cost for any photos, then build it when I say go.

BACKLOG (from the last session, ranked):
1. Photos for the ~93 recipes without one (needs my OK on credits; the cap would need raising).
2. +60 recipes from KWP gaps (fugazzeta, pizza napolitana, masa de pizza, empanada dough, humita, alfajores, tortas…).
3. Meat-cut pages for the cuts the new KWP data shows demand for (carnaza, bife ancho/angosto, costilla, colita de cuadril…) and a recipe per cut.
4. Catering landing pages: empanadas por docena para eventos, pizza party, hamburguesas para eventos, asado para eventos.
5. Mercado products: frozen empanadas and pizza dough by the dozen, queso Paraguay monthly subscription, recipe kits (all ingredients of one recipe in one order).
6. Restaurant guides by dish and neighbourhood (pizzerías, lomiterías, churrasquerías, dónde comer en Villa Morra) — only from real visits (`docs/restaurant-visit-checklist.md`).
7. Recipe index by time (15/30/60 minutes) and by main ingredient; weekly "menú de la semana" page.
8. Finish the social cards (`node scripts/social-cards.mjs`), then a posting plan for Instagram/Pinterest.
9. Password-protected admin view of mercado orders and recipe feedback (PHP, reads the private state_dir).
10. Expand the viandas pages before the partner gate opens; Guaraní names on Paraguayan recipes.

Start with the repo check and the reading list, give me a 5-line status, then wait for my KWP paste.
