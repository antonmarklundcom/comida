# Prompt: place the 33 paid photos on comida.com.py (cloud session)

Environment needed (claude.ai/code → environment "Images"):
- Allowed domains: `*.cloudfront.net`, `github.com`, `codeload.github.com`
- "Also include default list of common package managers" ticked (npm registry, for webimg and sharp)
- Environment variables: leave empty. The `NODE_ENV=production` and `GIT_AUTHOR_NAME=Your Name` lines in the form are example text; do not save them.

Paste everything below the line into a new cloud session on repo `antonmarklundcom/comida`.

---

Repo: antonmarklundcom/comida (comida.com.py, a static site built by a Node engine and deployed to Hostinger). Opus implements directly. Never print or commit a secret or VenderCRM key. **Do not generate any Higgsfield images.** The 33 images below already exist and are paid for (33 x 0.5 credit GPT Image 2.5 Sunburst, medium, 1k, 4:3, checked in the credit history 2026-09-25 05:18:18-05:19:42Z). Do not deploy. At the end, make a PR and merge it when every check is green.

## 1. Preflight
- `curl -sI -m 15 https://d8j0ntlcm91z4.cloudfront.net/user_349VrHjTFIpx9q71lpfpAXcLXvR/hf_20260925_051819_e391e4d3-1e73-440d-8ac2-2635ea660dc2.png` must return 200. If you get 403 or 000, stop and report that the environment allowlist is missing `*.cloudfront.net`.
- Branch `meat-photos` from the latest `master`.

## 2. Convert
`plan/handoff/photos-2026-09-25-jobs.csv` has 33 rows (`file,prompt,name,alt,ar,position`). `file` is the CloudFront result URL; `name` and `alt` are the final SEO name and Spanish alt text. Do not rename them. From the repo root:
```
npx --yes github:antonmarklundcom/webimg batch . --manifest plan/handoff/photos-2026-09-25-jobs.csv --widths 640,1024 --out assets/img
```
Each name must produce `<name>-640.avif`, `<name>-640.webp`, `<name>-1024.avif` and `<name>-1024.webp`. Report any upscaling warning. If npx or sharp fails, report the exact error and domain and stop. Never write your own sharp or ImageMagick script.

## 3. Look at every image
Open each `-640.webp` with Read. Reject any image that shows a face, text, a logo or the wrong food, or that does not read as Paraguay. Do not place rejects and do not regenerate; list them in the report. Also remove their files from assets/img.

## 4. Manifest
Append the placed images to `docs/imagery-manifest.json` `images[]`, ids 54-86 in CSV row order (row 1 = 54 … row 33 = 86). A rejected row keeps its id number but gets no entry. Copy the shape of id 53:
- `slot`: e.g. `page:guia-churrasqueria`
- `file` (= name) and `alt_es` (= alt)
- `ratio` 4:3, `px` 1k, `model` gpt_image_2_5, `variant` sunburst, `quality` medium, `resolution` 1k
- `prompt` (the short prompt column) and `url` (= file column)
- `job_id`: the uuid after `hf_YYYYMMDD_HHMMSS_` in the URL
- `width`/`height`: the real source size (expected 1024x768)

In `_notes`, append a "Round 5 (2026-09-25, meat deep pages)" part:
- to `cost_preflight`: 33 x 0.5 = 16.5, running total 60.0 = cap;
- to `ledger_checked`: 33 lines at 05:18:18-05:19:42Z, all -0.5 GPT Image 2.5 Sunburst; the 05:12Z and 05:14Z lines were not this batch;
- to `download_status`.

Then set `actual_spend_credits` to 60.

## 5. Place images
Set `image:<id>` in each content module under `sites/comida/content/` (find it by its `id:`). Replace an existing `image:` value; otherwise add `image:<id>,` on its own line after the `keywords` line.
- 54: guia-churrasqueria
- 55: receta-surubi-a-la-parrilla, guia-surubi
- 56: guia-pescados-de-rio, producto-pescado
- 57: receta-tapa-de-cuadril-al-horno, corte-tapa-de-cuadril
- 58: guia-parrilla-para-asadito
- 59: receta-jugos-para-ninos
- 60: guia-cortes-de-pollo
- 61: catering-empanadas-para-eventos
- 62: guia-parrillada, guia-asado-a-la-parrilla
- 63: receta-avena-con-frutas, coleccion-desayunos-saludables
- 64: receta-bowl-de-yogur-con-frutas, coleccion-meriendas-saludables
- 65: receta-cordero-al-horno, corte-cordero, corte-cabrito
- 66: receta-panceta-crocante, corte-panceta
- 67: guia-cortes-de-cerdo, corte-carre-de-cerdo
- 68: guia-tipos-de-queso
- 69: receta-ensalada-de-garbanzos, coleccion-cenas-saludables
- 70: receta-omelette-de-verduras
- 71: receta-queso-cottage-casero
- 72: guia-carne-magra, corte-cuadrada, corte-bola-de-lomo, corte-nalga
- 73: catering-hamburguesas-para-eventos
- 74: receta-lechon-al-horno, corte-lechon, catering-lechon-para-eventos
- 75: receta-tomahawk-a-la-parrilla, corte-tomahawk, corte-chuleton
- 76: receta-suprema-de-pollo-rellena
- 77: receta-colita-de-cuadril-a-la-parrilla, corte-colita-de-cuadril
- 78: receta-matambre-arrollado
- 79: corte-garron
- 80: receta-pernil-de-cerdo-al-horno, corte-pernil-de-cerdo
- 81: receta-alitas-de-pollo-al-horno
- 82: receta-pacu-a-la-parrilla, guia-pacu
- 83: receta-dorado-al-horno, guia-dorado
- 84: receta-costillas-de-cerdo-a-la-barbacoa
- 85: catering-pizza-para-eventos
- 86: receta-asado-de-tira-a-la-parrilla, corte-costilla-de-vaca, corte-tapa-de-asado
- Existing images, no new files: 52 → guia-ideas-de-torta-de-cumpleanos; 45 → receta-matambrito-de-cerdo-a-la-pizza, corte-matambrito-de-cerdo

If a page kind (for example the collections) does not render `image`, say so in the report. Do not change templates just for that.

## 6. Checks (all must pass)
```
node engine/build-site.mjs --site=comida
node engine/verify.mjs --site=comida
node engine/verify.test.mjs
node scripts/check-duplicates.mjs
node scripts/validate-content.mjs
node scripts/php-handler-test.mjs   # needs php; if php is missing, say so
node scripts/qa-gate.mjs
```
- `deploy/make-zip.ps1` is Windows PowerShell. If `pwsh` exists, run it. If not, the QA gate "Deploy zip contents" fails only because the zip is missing. Report that one gate as "not runnable in cloud"; every other gate must pass.
- Run `grep -o 'assets/img/[a-z0-9-]*' -r dist/comida.com.py --include=*.html | sort -u` and confirm every placed name has all 4 files.
- If a browser is available, open a cut page, a recipe page and a catering page at 390 px and confirm the photo shows and there is no horizontal scroll.

## 7. Ship
Stage only these: the new `assets/img` files, `docs/imagery-manifest.json`, the edited content modules, and `assets/img/manifest.json` only if it is already tracked. Commit with the message ending `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Push and open a PR to master with the body ending `🤖 Generated with [Claude Code](https://claude.com/claude-code)`. Merge it with `gh pr merge --merge` (or the GitHub tool) when green.

## 8. Report to Anton (label it "Opus 5.5")
Include:
- images placed and on which pages;
- rejects;
- each check's result;
- the PR link.

Remind him that publishing happens on his laptop: in `C:\Claude 1\comida-com-py`, run `git checkout master && git pull`, then `node scripts/deploy-branch.mjs`. That builds, runs the checks and pushes only the built site to the `hostinger` branch. Then press Deploy in hPanel → Git if auto-deploy is off.
