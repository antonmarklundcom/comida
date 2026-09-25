# Prompt: recipe photo jobs (Google Recipe rich results)

**Preparation only. No image was generated for this handoff. Do NOT call any Higgsfield tool until the owner writes "Generate image" himself.**

## Why

comida.com.py has 144 recipe modules in `sites/comida/content/recipes/*.mjs`. Google shows Recipe rich results only when the Recipe has an image. 29 recipes already have an `image:<number>,` line. 20 more will get a photo from the 2026-09-25 meat/fish batch once `scripts/place-photos.mjs` runs (their id is in that script's `PLACEMENT` table): `receta-alitas-de-pollo-al-horno`, `receta-avena-con-frutas`, `receta-bowl-de-yogur-con-frutas`, `receta-colita-de-cuadril-a-la-parrilla`, `receta-cordero-al-horno`, `receta-costillas-de-cerdo-a-la-barbacoa`, `receta-dorado-al-horno`, `receta-ensalada-de-garbanzos`, `receta-jugos-para-ninos`, `receta-lechon-al-horno`, `receta-matambre-arrollado`, `receta-omelette-de-verduras`, `receta-pacu-a-la-parrilla`, `receta-panceta-crocante`, `receta-pernil-de-cerdo-al-horno`, `receta-queso-cottage-casero`, `receta-suprema-de-pollo-rellena`, `receta-surubi-a-la-parrilla`, `receta-tapa-de-cuadril-al-horno`, `receta-tomahawk-a-la-parrilla`.

That leaves **95 recipes with no photo job of any kind**. `plan/handoff/photos-recipes-jobs.csv` has one row per recipe, same column format as `plan/handoff/photos-2026-09-25-jobs.csv` (`file,prompt,name,alt,ar,position`), with `file` left empty — it gets filled with the CloudFront result URL only after generation.

## Count

- 144 recipe modules total
- 29 already have `image:`
- 20 excluded (already covered by the paid 2026-09-25 meat/fish batch, see list above)
- **95 rows in `photos-recipes-jobs.csv`**, 144 = 29 + 20 + 95

## Cost estimate

Same model/settings as manifest id 53 (`bondiola-de-cerdo-al-horno`): GPT Image 2.5 Sunburst, medium quality, 1k resolution, 4:3 — **0.5 credit per image**.

- 95 images x 0.5 = **47.5 credits**
- The account's credit cap is currently **60 and already reached** (see `docs/imagery-manifest.json` `_notes.actual_spend_credits: 60`). **The owner must raise the cap before any of these 95 can be generated** — headroom needed is at least 47.5 credits above the current 60, so raise the cap to 108+ (or top up in stages matching the batches below).

## Suggested batching, ordered by search value

Rank by each recipe's main keyword volume in `plan/research/kwp-all.csv` (75 of 95 have data; 20 have "no data" and sort last). Do it in 3 batches of ~30-35, highest-value first, so the owner can raise the credit cap incrementally and see the SEO payoff sooner:

- **Batch 1 — rows 1-30** (volumes 3600 down to 880): 30 images = 15 credits
- **Batch 2 — rows 31-60** (volumes 880 down to 320): 30 images = 15 credits
- **Batch 3 — rows 61-95** (volumes 320 down to "no data"): 35 images = 17.5 credits

Full mapping (row = CSV row / generation order, name = image slug, recipe id = the module to receive `image:<id>`, volume = `kwp-all.csv` search volume for the recipe's main keyword, "no data" when the keyword isn't in that file):

| row | name | recipe id | volume |
|---|---|---|---|
| 1 | yogur-griego-casero-con-miel | receta-yogur-griego-casero | 3600 |
| 2 | osobuco-a-la-olla-con-vino | receta-osobuco-a-la-olla | 2900 |
| 3 | tacos-caseros-tortillas-de-maiz | receta-tacos | 2400 |
| 4 | muslos-de-pollo-al-horno-piel-crocante | receta-muslos-de-pollo-al-horno | 1900 |
| 5 | panqueques-de-avena-y-banana | receta-panqueques-de-avena | 1900 |
| 6 | peceto-al-horno-en-salsa-cortado | receta-peceto-al-horno | 1900 |
| 7 | ensalada-de-lentejas-con-tomate | receta-ensalada-de-lentejas | 1600 |
| 8 | salsa-bolonesa-casera-olla | receta-salsa-bolonesa | 1600 |
| 9 | sopa-de-verduras-casera-bol | receta-sopa-de-verduras | 1600 |
| 10 | tortilla-de-verduras-en-sarten | receta-tortilla-de-verduras | 1600 |
| 11 | chipa-asador-sobre-brasas | receta-chipa-asador | 1300 |
| 12 | entrana-a-la-parrilla-cortada | receta-entrana-a-la-parrilla | 1300 |
| 13 | estofado-de-pollo-con-papa | receta-estofado-de-pollo | 1300 |
| 14 | hamburguesas-caseras-a-la-parrilla | receta-hamburguesas-caseras | 1300 |
| 15 | pan-casero-con-levadura-rebanado | receta-pan-casero | 1300 |
| 16 | payagua-mascada-tortitas-doradas | receta-payagua-mascada | 1300 |
| 17 | sandwich-de-lomito-completo | receta-sandwich-de-lomito | 1300 |
| 18 | chop-suey-de-pollo-wok | receta-chop-suey-de-pollo | 1000 |
| 19 | lasana-de-carne-porcion-capas | receta-lasana-de-carne | 1000 |
| 20 | milanesas-crocantes-con-limon | receta-milanesas | 1000 |
| 21 | pan-brioche-casero-trenzado | receta-pan-brioche | 1000 |
| 22 | pan-frances-casero-crocante | receta-pan-frances | 1000 |
| 23 | pasta-frola-de-guayaba-cortada | receta-pasta-frola | 1000 |
| 24 | pechuga-de-pollo-a-la-plancha-jugosa | receta-pechuga-de-pollo | 1000 |
| 25 | pizza-casera-de-muzzarella-horno | receta-pizza-casera | 1000 |
| 26 | pollo-a-la-portuguesa-con-locote | receta-pollo-a-la-portuguesa | 1000 |
| 27 | reviro-paraguayo-en-sarten | receta-reviro | 1000 |
| 28 | salpicon-de-pollo-frio-bol | receta-salpicon-de-pollo | 1000 |
| 29 | yogur-natural-casero-cremoso | receta-yogur-natural-casero | 1000 |
| 30 | cocido-paraguayo-guampa-mate | receta-cocido-paraguayo | 880 |
| 31 | croquetas-de-carne-doradas-plato | receta-croquetas-de-carne | 880 |
| 32 | kai-ladrillo-dulce-de-mani | receta-kai-ladrillo | 880 |
| 33 | pan-al-ajo-con-queso-tabla | receta-pan-al-ajo | 880 |
| 34 | pollo-al-horno-con-papas-dorado | receta-pollo-al-horno | 880 |
| 35 | pollo-con-curry-salsa-cremosa | receta-pollo-con-curry | 880 |
| 36 | tallarin-de-pollo-salsa-roja | receta-tallarin-de-pollo | 880 |
| 37 | wrap-de-pollo-con-verduras-cortado | receta-wrap-de-pollo | 880 |
| 38 | caldo-de-pollo-casero-olla | receta-caldo-de-pollo | 720 |
| 39 | chipa-almidon-canasta-roscas | receta-chipa-almidon | 720 |
| 40 | lomo-de-cerdo-al-horno-cortado | receta-lomo-de-cerdo-al-horno | 720 |
| 41 | bizcochuelo-esponjoso-cortado | receta-bizcochuelo | 590 |
| 42 | chipa-mestizo-bandeja-horno | receta-chipa-mestizo | 590 |
| 43 | chuletas-de-cerdo-a-la-parrilla | receta-chuletas-de-cerdo | 590 |
| 44 | empanadas-de-carne-fritas-bandeja | receta-empanadas-de-carne | 590 |
| 45 | flan-casero-con-caramelo-plato | receta-flan-casero | 590 |
| 46 | kosereva-cascara-de-apepu | receta-kosereva | 590 |
| 47 | nuggets-de-pollo-caseros-dorados | receta-nuggets-de-pollo | 590 |
| 48 | pan-de-carne-relleno-cortado | receta-pan-de-carne | 590 |
| 49 | puchero-paraguayo-con-mandioca | receta-puchero-paraguayo | 590 |
| 50 | cazuela-de-pollo-con-zapallo | receta-cazuela-de-pollo | 480 |
| 51 | locro-paraguayo-con-carne-olla | receta-locro-paraguayo | 480 |
| 52 | lomito-arabe-en-pan-arabe | receta-lomito-arabe | 480 |
| 53 | mbaipy-polenta-con-pollo | receta-mbaipy | 480 |
| 54 | mbeju-mestizo-en-budare | receta-mbeju-mestizo | 480 |
| 55 | pira-caldo-sopa-de-pescado | receta-pira-caldo | 480 |
| 56 | pollo-a-la-mostaza-salsa-crema | receta-pollo-a-la-mostaza | 480 |
| 57 | solomillo-de-cerdo-salsa-mostaza | receta-solomillo-de-cerdo | 480 |
| 58 | empanadas-de-choclo-relleno-cremoso | receta-empanadas-de-choclo | 390 |
| 59 | jopara-guiso-locro-poroto | receta-jopara | 320 |
| 60 | pireca-masa-frita-crocante | receta-pireca | 320 |
| 61 | tarta-de-choclo-con-queso-cortada | receta-tarta-de-choclo | 320 |
| 62 | chipa-en-licuadora-moldes | receta-chipa-en-licuadora | 260 |
| 63 | clerico-jarra-frutas-fiesta | receta-clerico | 260 |
| 64 | dulce-de-leche-casero-frasco | receta-dulce-de-leche-casero | 260 |
| 65 | hamburguesa-de-pollo-casera-pan | receta-hamburguesa-de-pollo | 260 |
| 66 | jugos-naturales-frutas-vasos | receta-jugos-naturales | 260 |
| 67 | pan-de-papa-bollitos-dorados | receta-pan-de-papa | 260 |
| 68 | alfajores-paraguayos-de-almidon | receta-alfajores-paraguayos | 210 |
| 69 | costillar-de-cerdo-glaseado-horno | receta-costillar-de-cerdo-al-horno | 210 |
| 70 | galletas-navidenas-glaseadas | receta-galletas-navidenas | 210 |
| 71 | croquetas-de-mandioca-con-queso | receta-croquetas-de-mandioca | 170 |
| 72 | licuado-de-banana-con-leche-vaso | receta-licuado-de-banana | 140 |
| 73 | bondiola-desmechada-en-pan | receta-bondiola-desmechada | 50 |
| 74 | so-o-josopy-sopa-de-carne | receta-soo-josopy | 50 |
| 75 | supremas-a-la-napolitana-gratinadas | receta-supremas-a-la-napolitana | 30 |
| 76 | alfajores-de-maicena-con-coco | receta-alfajores-de-maicena | no data |
| 77 | arroz-con-leche-con-canela | receta-arroz-con-leche | no data |
| 78 | arroz-con-pollo-en-sarten | receta-arroz-con-pollo | no data |
| 79 | arroz-primavera-con-verduras | receta-arroz-primavera | no data |
| 80 | berenjenas-en-escabeche-frasco | receta-berenjenas-en-escabeche | no data |
| 81 | budin-de-banana-casero-cortado | receta-budin-de-banana | no data |
| 82 | budin-de-pan-con-caramelo | receta-budin-de-pan | no data |
| 83 | dulce-de-mamon-en-almibar | receta-dulce-de-mamon | no data |
| 84 | ensalada-de-papa-con-huevo | receta-ensalada-de-papa | no data |
| 85 | ensalada-de-pollo-fresca-bol | receta-ensalada-de-pollo | no data |
| 86 | fideos-caseros-de-huevo-tendidos | receta-fideos-caseros | no data |
| 87 | kaguyjy-mazamorra-de-maiz | receta-kaguyjy | no data |
| 88 | milanesa-napolitana-gratinada | receta-milanesa-napolitana | no data |
| 89 | noquis-caseros-de-papa-con-salsa | receta-noquis-caseros | no data |
| 90 | papas-al-horno-crocantes-romero | receta-papas-al-horno | no data |
| 91 | pastel-de-papa-con-carne-gratinado | receta-pastel-de-papa | no data |
| 92 | salsa-blanca-casera-en-cacerola | receta-salsa-blanca | no data |
| 93 | torta-de-coco-humeda-cortada | receta-torta-de-coco | no data |
| 94 | tostadas-francesas-con-dulce-de-leche | receta-tostadas-francesas | no data |
| 95 | zapallitos-rellenos-de-carne-gratinados | receta-zapallitos-rellenos | no data |

Each `prompt` in the CSV already follows the house style block from `docs/imagery-manifest.json` `_notes` (editorial food photography, natural warm light, shallow depth of field, visible texture, Paraguayan context, hands allowed, no faces/heads/text/logos/watermark) and the Paraguay-context rule (every prompt must read as Paraguay).

## Future cloud-session prompt

**Do not run any of this until the owner has written "Generate image" himself in the conversation.** When he does, spin up a cloud session (or resume this one) on repo `antonmarklundcom/comida` and follow this, one batch (~30 rows) at a time, mirroring `plan/handoff/photos-cloud-prompt.md` steps 2-8:

1. **Generate**: for the batch's rows in `plan/handoff/photos-recipes-jobs.csv`, call the image model (GPT Image 2.5 Sunburst, medium, 1k, 4:3) once per row's `prompt`. Record each job's id and CloudFront result URL. Fill the row's `file` column with that URL. Do not touch rows outside the batch. Stop and report if the credit cap is hit before the batch finishes.
2. **Convert**: `npx --yes github:antonmarklundcom/webimg batch . --manifest plan/handoff/photos-recipes-jobs.csv --widths 640,1024 --out assets/img` (only for the rows that now have a `file` URL). Confirm each `name` produced `-640.avif`, `-640.webp`, `-1024.avif`, `-1024.webp`.
3. **Review**: open every new `-640.webp` with Read. Reject any image with a face, text, a logo, the wrong dish, or that doesn't read as Paraguay. List rejects in the report and remove their files; do not regenerate without the owner's go-ahead.
4. **Manifest**: append placed images to `docs/imagery-manifest.json` `images[]`, same shape as id 53 (`slot: 'recipe:<slug>'`, `file`/`alt_es` from the CSV `name`/`alt`, `ratio: '4:3'`, `px: '1k'`, `model: 'gpt_image_2_5'`, `variant: 'sunburst'`, `quality: 'medium'`, `resolution: '1k'`, `prompt`, `url` = file column, `job_id` from the URL, real source `width`/`height`). Update `_notes` (`cost_preflight`, `ledger_checked`, `download_status`) with the batch's credit math and `_notes.actual_spend_credits`.
5. **Place**: for each placed row, set `image:<id>` on the matching recipe module using the `row -> name -> recipe id` table above (add the line after `keywords:` if no `image:` line exists yet).
6. **Checks**: `node engine/build-site.mjs --site=comida`, `node engine/verify.mjs --site=comida`, `node engine/verify.test.mjs`, `node scripts/check-duplicates.mjs`, `node scripts/validate-content.mjs`, `node scripts/php-handler-test.mjs`, `node scripts/qa-gate.mjs`. All must exit 0 (the PowerShell zip gate is expected to be "not runnable in cloud").
7. **Ship**: stage only the new `assets/img` files, `docs/imagery-manifest.json`, and the edited recipe modules. Commit, push, open a PR, merge when green.
8. **Report**: images placed and their recipe ids, rejects, each check's result, the PR link, and remind the owner that publishing still needs his laptop deploy step (`git checkout master && git pull` then `node scripts/deploy-branch.mjs` in the local `comida.com.py` checkout).

Repeat for the remaining batches once the owner raises the credit cap again (or confirms the next batch).
