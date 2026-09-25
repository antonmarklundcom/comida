# Batch "meat deep" (2026-09-25) — shared brief for the writers

Follow `plan/prompts/CONTENT-WRITER.md` for every rule (voseo, no prices, no invented facts, unique paragraphs, validator). Write ONLY into the staging folders named in your assignment: `sites/comida/content/_incoming/{cuts,guides,recipes,seasons}/`. Never run the build. Validate your files with `node scripts/validate-content.mjs <files>` until 0 errors.

Keyword data: `plan/research/kwp-all.csv` (Paraguay, monthly). Read the rows for your topics before writing and put the real search phrases in `keywords`, `seoTitle`, `h1` and FAQ questions. Existing pages you must not duplicate: read the close ones in `sites/comida/content/cuts/`, `guides/`, `recipes/` first.

## Meat-specific rules
- Cut pages (kind `cut`) follow the existing cut modules exactly (`sites/comida/content/cuts/picana.mjs` is a good reference): `facts` with Animal, Zona del animal, Otros nombres, Mejor cocción, Por persona; `animal` ('Vacuno', 'Cerdo', 'Cordero', 'Cabrito'); `estimate` sentence; 6–9 sections with ids; 5–7 FAQ; a section on what changes the price (no numbers); `recipes` and `related`; ctaTitle/ctaText inviting asado catering for events; link `guia-cuanta-carne-por-persona`.
- Paraguayan/rioplatense naming first, with Brazilian names (picanha, fraldinha, cupim…) only where you are sure. When cut names overlap or regions differ (tapa de cuadril vs picaña, bola de lomo, cuadrada, carnaza), say so honestly and explain how to ask the butcher.
- Food safety: pork to at least 63 °C with rest, poultry to 74 °C, ground meat to 71 °C, fish until opaque and flaking. No health or diet claims.
- Fish pages: no fishing-season, ban, size-limit or legal claims unless you confirm them with WebSearch on an official Paraguayan source (MADES) and cite it in `source`; otherwise leave them out.
- Images: only ids from CONTENT-WRITER.md where they truly fit (12, 23 for grilling; 4 for chorizo). Most pages: no image.

## All ids you may link (existing + this batch)
Existing: every file in `sites/comida/content/recipes/` as `receta-<slug>`, in `cuts/` as `corte-<slug>`, in `guides/` as `guia-<slug>`, in `ingredients/` as `ingrediente-<slug>`, in `seasons/` as `coleccion-<slug>`; products `mercado`, `producto-carne`, `producto-queso`, `producto-canasta`; catering `catering`, `occ-cumpleanos`, `occ-eventos-empresariales`, `occ-fin-de-ano`, `occ-bodas`, `occ-bocaditos`.

New cuts: corte-tapa-de-cuadril, corte-colita-de-cuadril, corte-cuadrada, corte-bola-de-lomo, corte-carnaza, corte-garron, corte-marucha, corte-bife-ancho, corte-tapa-de-asado, corte-nalga, corte-aguja, corte-costilla-de-vaca, corte-tomahawk, corte-chuleton, corte-wagyu, corte-panceta, corte-lechon, corte-matambrito-de-cerdo, corte-pernil-de-cerdo, corte-carre-de-cerdo, corte-cordero, corte-cabrito.

New guides: guia-asado-a-la-parrilla, guia-parrillada, guia-churrasqueria, guia-parrilla-para-asadito, guia-cortes-de-carne-vacuna, guia-cortes-de-cerdo, guia-cortes-de-pollo, guia-carne-magra, guia-pescados-de-rio, guia-surubi, guia-pacu, guia-dorado, guia-tipos-de-queso, guia-ideas-de-torta-de-cumpleanos, catering-empanadas-para-eventos, catering-pizza-para-eventos, catering-hamburguesas-para-eventos, catering-asado-para-eventos, catering-lechon-para-eventos.

New recipes: receta-tapa-de-cuadril-al-horno, receta-colita-de-cuadril-a-la-parrilla, receta-asado-de-tira-a-la-parrilla, receta-tomahawk-a-la-parrilla, receta-matambre-arrollado, receta-cordero-al-horno, receta-lechon-al-horno, receta-pernil-de-cerdo-al-horno, receta-matambrito-de-cerdo-a-la-pizza, receta-panceta-crocante, receta-costillas-de-cerdo-a-la-barbacoa, receta-bondiola-desmechada, receta-suprema-de-pollo-rellena, receta-supremas-a-la-napolitana, receta-alitas-de-pollo-al-horno, receta-surubi-a-la-parrilla, receta-pacu-a-la-parrilla, receta-dorado-al-horno, receta-queso-cottage-casero, receta-jugos-para-ninos, receta-avena-con-frutas, receta-omelette-de-verduras, receta-ensalada-de-garbanzos, receta-bowl-de-yogur-con-frutas.

New collections: coleccion-desayunos-saludables, coleccion-cenas-saludables, coleccion-meriendas-saludables.
