# 13 — Meat, pork, poultry and river-fish pages from KWP round 6 (2026-09-25)

Source: `plan/research/kwp-round6.csv` (merged into `kwp-all.csv`). Paraguay, monthly searches. Seeds "falda", "aguja", "paleta" and "tortuguita" returned mostly clothing, sewing or candy ideas: those rows were not saved, and the seed rows are marked "mixed intent" (do not plan pages on their volume). "Dorado" is shared by the fish and brand/restaurant names.

## What round 6 says

The cut and fish clusters are bigger than the round-4 cut list suggested, and most have **no page yet**:

| Cluster | Key searches (monthly) | Approx. demand | Page today |
|---|---|---|---|
| Tapa / colita de cuadril | tapa cuadril 2,400 · cuadril 880 · colita cuadril 720 · tapa cuadril al horno 260 · colita al horno 170 · tapa de cuadril 170 · a la parrilla 140 | ~4,500 | none |
| Surubí | surubí 2,900 · surubi pez 110 | ~3,000 | none |
| Dorado (fish) | dorado 2,900 (shared with brands) · dorado de mar 40 | ~1,000–2,000 fish intent | none |
| Cordero / cabrito | cordero 1,600 · cabrito 170 · carne de cordero 110 | ~1,900 | none |
| Panceta | panceta 1,600 · panceta de cerdo 260 · ahumada 170 | ~2,000 | none |
| Pacú | pacu pescado 390 · pacú pescado 390 · pescado pacu 260 · pacu pez 210 · pacú 110 | ~1,300 | none |
| Cuadrada | cuadrada 1,300 | ~1,300 | none |
| Lechón | lechón 880 · lechon a la parrilla 260 · precio 70 | ~1,200 | none |
| Matambre (existing cut) | matambre 1,900 · matambre relleno 480 · arrollado 140+110 | ~2,600 | cut + a la pizza recipe; **no arrollado/relleno recipe** |
| Matambrito de cerdo | matambrito de cerdo 480 · matambrito 260 · matambritos 260 · a la pizza 90 | ~1,100 | none |
| Alitas de pollo | alitas de pollo 390 · alas 390 · alitas 320 · alita 320 · al horno 110+110 | ~1,600 | none |
| Suprema de pollo | suprema de pollo 880 (CPC 14.89 SEK, commercial) · rellena 70+50 | ~1,000 | none (pechuga recipe exists) |
| Bola de lomo | bola de lomo 480 · bolo de lomo 480 · precio 140 | ~1,100 | none |
| Carnaza | carnaza negra 590 · carnaza blanca 320 | ~900 | none |
| Garrón | garron de vaca 480 · garrón 390 | ~870 | none (osobuco page links) |
| Costilla de cerdo | costilla de cerdo 720 · costillas de cerdos 720 · al horno 210 | ~1,400 | costillar cut + recipe exist (strengthen, no new cut) |
| Marucha | marucha 480 · carne marucha 170 | ~650 | none |
| Pernil | pernil de cerdo 390 · pernil 210 · al horno 70 | ~650 | none (Christmas!) |
| Bife ancho / angosto | bife ancho 320 · bife angosto 70 | ~400 | none |
| Tapa de asado | tapa de asado 260 · tapa asado 70 | ~330 | none |
| Nalga, carré, codillo, costilla vacuna | 260 · 140 · 110+110 · 170+110 | ~900 | none |

Round 6 adds **about 30,000 monthly searches** of meat and fish demand, and roughly **22,000 of that has no page today**. For comparison, all 10 existing cut pages target about 18,000.

## Page plan (next build batch), in priority order

### A. New cut and product guides (kind `cut`, `/carne/<slug>/`) — 16 pages
1. `tapa-de-cuadril` (cover tapa cuadril, cuadril, cuadrilo; the Paraguayan/Brazilian picaña relationship explained carefully, linking `corte-picana`)
2. `colita-de-cuadril`
3. `cuadrada`
4. `panceta`
5. `lechon` (whole piglet: sizes, how it is ordered for fiestas, a la parrilla / al horno / a la estaca)
6. `matambrito-de-cerdo`
7. `bola-de-lomo`
8. `carnaza` (negra y blanca on one page, two sections)
9. `garron`
10. `marucha`
11. `pernil-de-cerdo`
12. `bife-ancho` (with the ancho / angosto / de chorizo comparison table)
13. `tapa-de-asado`
14. `nalga` (with tapa de nalga)
15. `carre-de-cerdo`
16. `costilla-de-vaca` (costilla vacuna; link asado de tira)

Also update the `/carne/` hub copy with a "vacuno / cerdo" map linking every cut.

### B. Pescados de río (new) — 1 guide + 3 fish pages
- Guide `guia-pescados-de-rio` (`/guias/pescados-de-rio-del-paraguay/`): surubí, dorado, pacú, boga, how to buy fresh fish at the Abasto, Semana Santa link. Facts hedged or sourced (fishing seasons and bans need an official source, e.g. MADES, or are left out).
- Fish pages as kind `cut` under `/carne/`? No: create a small `pescados` use of the guides collection: `/guias/surubi/`, `/guias/pacu/`, `/guias/dorado/` (what it is, how it tastes, how to cook it, where to buy it, portion per person).

### C. Recipes — 16 pages
`tapa-de-cuadril-al-horno`, `colita-de-cuadril-a-la-parrilla`, `matambre-arrollado` (relleno, hervido y al horno), `matambrito-de-cerdo-a-la-pizza`, `pernil-de-cerdo-al-horno` (Navidad), `lechon-al-horno`, `panceta-crocante`, `surubi-a-la-parrilla`, `pira-caldo` exists (link it), `pacu-a-la-parrilla` (or relleno), `dorado-a-la-parrilla`, `cordero-al-horno`, `cabrito-al-horno`, `suprema-de-pollo-rellena`, `supremas-a-la-napolitana`, `alitas-de-pollo-al-horno` (BBQ variation), `costillas-de-cerdo-a-la-barbacoa`.

### D. Updates to existing pages (no new URLs)
- `corte-matambre`: add a matambre de cerdo section and link the new arrollado recipe.
- `corte-costillar-de-cerdo`: target "costilla de cerdo" in title/intro (720 + 720).
- `corte-bondiola-de-cerdo`: add "bondiola desmechada" and "bondiola de vaca" (390, clarify it is a different cut) sections.
- `guia-cuanta-carne-por-persona`: add pork, cordero and fish per-person rows.
- Seasonal collections: pernil and lechón into Navidad and fin de año; surubí, pacú and pira caldo into Semana Santa.

### E. Mercado and leads
- Carne product page: list lechón (fiestas), pernil (Navidad), pack de asado with tapa de cuadril and vacío as "a consultar" items.
- Catering: "lechón para eventos" and "asado para eventos" landing sections (asado is already a catering format).
- Fish: a "pescado de río para Semana Santa" pre-order line in /mercado/ only once a supplier exists (hold until then).

## Size, images and cost
- **33 new pages** (16 cuts, 1 fish guide + 3 fish pages, 16 recipes; minus overlaps) plus 5 page updates.
- Photos: one per new recipe and fish page is the priority, about 19 images. At Sunburst medium 1k 4:3 = 0.5 credits each, ~9.5 credits. The 60-credit cap has 16.5 left, so this fits, but needs Anton's OK.
- Writers: 4 Opus subagents in parallel (cuts vacuno, cuts cerdo, fish, recipes), staged in `content/_incoming/`, per `plan/prompts/CONTENT-WRITER.md`.

## Expected effect (estimate)
If the new pages reach an average 15–25% click share of their cluster within 6–12 months: **+4,000 to +7,000 organic visits a month**, concentrated in Christmas (pernil, lechón) and Semana Santa (surubí, pacú). Leads: asado and lechón catering enquiries, and carne pack interest on /mercado/.
