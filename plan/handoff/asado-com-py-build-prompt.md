# asado.com.py: build prompt for a new Claude Code session

1. This is a self-contained build brief for asado.com.py, the grilling site next to comida.com.py. It holds the prompt and all the keyword data, so the new session does not need the comida repo for data.
2. Create an empty private repo `antonmarklundcom/asado` and open a new Claude Code cloud session on it (Opus, permission mode auto-accept). If you can, also attach `antonmarklundcom/comida` as a read-only source, so the session can copy comida's static engine.
3. Paste everything below the horizontal line as the first message. The session writes `plan.md`, builds in three phases with one PR per phase, merges each PR when its checks pass, and reports after each phase.
4. It will ask you for: the Hostinger site and Git deploy, DNS, Search Console, an optional contact number, a new KWP round for grill terms, and the words "Generate image" if you want photos. It never deploys until you write "Deploy".
5. The data: Appendix A has the cut phrases you asked about (costilla, lomo, chorizo, morcilla and tomahawk have no exact KWP data). Appendix B has 484 keywords (153,490 searches/month), and Appendix C has the 100 comida.com.py pages to cross-link.

---

# Build asado.com.py

You are building **asado.com.py**, a new and separate static website, in this repo. Read this whole message once. Then write `plan.md` from it and start phase 1. Everything you need is here, including all keyword data (Appendices A to C at the end). Do not stop to do more research before phase 1. Ask Anton only for the items in §12, and only when a phase actually needs them.

## 1. What the site is

- **Purpose.** asado.com.py is the Paraguayan grilling authority. It covers cuts for the grill, fire and technique, grill recipes, pork, lamb and goat, achuras and sausages, chicken and river fish on the grill, and three tools. A directory of carnicerías and churrasquerías comes later.
- **Owner.** Anton, who also runs comida.com.py, a general Paraguayan food hub (recipes, guides, 32 meat-cut pages) that earns from catering referrals. The two sites cross-link and split the topics as described in §4.
- **Audience.** People in Paraguay, mainly Gran Asunción (Asunción, Luque, San Lorenzo, Fernando de la Mora, Lambaré, Villa Elisa, Capiatá, Ñemby, Mariano Roque Alonso), who make the Sunday asado, a birthday asado or a quincho asado at home. Most of them are on a phone.
- **Revenue.** Not in these phases. Event-asado demand is sent to comida.com.py's catering pages, and comida owns the VenderCRM lead flow. Carnicería sponsorships and directory listings come later, and only with real partners. No ads, no affiliate links, no own lead form in phases 1 to 3.
- **Goal of these phases.** About 45 useful indexable pages, the three tools, fast static HTML, clean schema and a sitemap Google can start on.
- **Language.** All page copy is Paraguayan Spanish with voseo: Contanos, Pedí, Elegí, Mirá, Prendé, Salá, Dejá, Podés, Tenés, Querés. Never use tú forms (puedes, tienes, enciende, agrega) or Spain words (patata, zumo, nata, judías). Use local words: parrilla, parrillero, asado, asadito, quincho, brasa, carbón, leña, achuras, chorizo parrillero, mandioca, chipa, sopa paraguaya, locote, cebollita de hoja, tatakua.
- **Everything else in English.** Code, identifiers, file names, commit messages, `plan.md` and logs are in English. URLs are Spanish ASCII slugs without accents (`/cortes/picana/`, `/cortes/entrana/`).
- **Encoding.** Save every file as UTF-8 without BOM, with LF line endings. Before every PR, grep the repo and the build output for mojibake and fix any hit: the characters U+00C3 and U+00C2 (A-tilde and A-circumflex, the usual sign of double-encoded UTF-8), the pair U+00E2 U+20AC, and a stray BOM (U+FEFF). Write the pattern with escapes (for example `grep -P '\x{00C3}|\x{00C2}'`) so the check file does not flag itself.

## 2. Stack and repo setup

### Recommendation: copy comida.com.py's static Node engine

Two stacks fit Anton's hosting (Hostinger shared hosting, static files plus PHP):

| | A. `antonmarklundcom/php-site-template` | B. comida.com.py's engine (`antonmarklundcom/comida`, `engine/`) |
|---|---|---|
| Built for | Local-business brochure sites: service pages, calculators, blog, lead form to VenderCRM. The skill for it says it is not meant for national content or directory sites. | A food content hub: one module per page, with cut, recipe and guide collections. It builds about 265 pages today. |
| Page types asado needs | Has service, article, tool, guide, segment, page and stub templates. There is no recipe template (Recipe JSON-LD, ingredient scaler), no cut template (facts box) and no voseo or forbidden-word checks. | Already has cut pages (facts: Animal, Zona del animal, Otros nombres, Mejor cocción, Por persona), recipes with Recipe schema and a kilo/portion scaler, guides with tables, and an asado calculator (`tool.type:'asado'`). |
| Checks | `verify.sh` gate. The template also ships CI under `.github/`, which must be deleted here. | A verifier for links, SEO, schema, forbidden words and encoding, 15 mutation tests, a content validator with a voseo check, a duplicate-paragraph checker and a QA gate. Zero npm dependencies. |
| Cost to adapt | Low for the skeleton. An Opus phase then has to build the recipe and cut templates, the schema and the house-rule checks. | One Opus phase to fork it and strip catering, mercado, viandas, restaurants and gates. The phase also adds `asado` to the site allowlist and gives the site its own theme. |

**Use B.** asado.com.py is made of cut, recipe, technique and tool pages, and that is exactly what comida's engine already renders and verifies. The PHP template would need those templates and checks rebuilt from scratch. **Fallback:** if you cannot get read access to `antonmarklundcom/comida`, use A. Copy it in following its README ("Start a new site") and the `php-site-template` skill, delete its `.github/`, and make the recipe and cut templates part of phase 1.

### Getting the engine

- This session needs read access to `antonmarklundcom/comida`. If the repo was not attached at start, attach it as a read source; in a Claude Code cloud session, `add_repo` with access "read" does this. Then clone it next to this repo, for example to `../comida-src`.
- Only copy from that clone. Never edit it, push to it or open PRs on it.
- Record the comida commit you copied from in `docs/engine-provenance.md`. The two engines diverge from then on, so do not try to keep them in sync.

**Copy, then adapt:**
- `engine/` (all of it), plus the templates that cut, recipe, guide, hub, tool, 404, sobre and privacidad pages need: `cut`, `cuts-hub`, `recipe`, `recipe-lib`, `recipes-hub`, `guide`, `guides-hub`, `hub-list`, `article`, `estimator`, `content`, `404`, `sobre`, `privacidad`, `header.html`, `footer.html`, and `home.html` (rewrite it).
- From `scripts/`: `validate-content.mjs`, `check-duplicates.mjs`, `qa-gate.mjs`, `deploy-branch.mjs` and `og-card.mjs`.
- `public/` (css, js, `.htaccess`, `sw.js`, manifest). Strip catering, mercado and form code from all of it.
- As shape references only, never as text: `sites/comida/content/cuts/vacio.mjs`, `recipes/vacio-a-la-parrilla.mjs`, `guides/asado-a-la-parrilla.mjs` and `guides/cuanta-carne-por-persona.mjs` (it holds the asado calculator).

**Do not copy:**
- Catering, occasion, city, pricing, presupuesto, lead-form, proveedores, planner, product, recetario, vianda and restaurant templates.
- `sites/comida/` data (gates, prices, mercado, cities, menus, occasions, abasto).
- `php/` (it is not needed until a form is approved), `deploy/make-zip.ps1` (Windows only), `plan/`, `dist/`, `assets/img/` (comida's photos) and any comida copy text.

**Adapt:**
- Site id `asado`: add it to the allowlist in `engine/config.mjs`. Set domain `asado.com.py`, origin `https://asado.com.py` and locale `es-PY`.
- Change the title suffix in `engine/collections.mjs` to ` | asado.com.py`, and map the collections to the URL patterns in §5.
- Give the site its own theme tokens: charcoal, an ember accent and warm off-white. They must be distinct from comida's palette.
- Operator contact fields start empty, and the page hides them until Anton provides a contact.
- The build must not reference catering, mercado, viandas, restaurants or gates.
- Remove comida's commented-out `asado.com.py -> comida.com.py/asado/` redirect from the copied `.htaccess`. That old plan is superseded: asado.com.py is now its own site.
- Internal links must never point at unpublished routes. comida's engine quietly rewrites such links; make it a build failure instead.

### Repo files by the end of phase 1

- `AGENTS.md`: house rules (§3), commands and the definition of done. `CLAUDE.md` is one line pointing to `AGENTS.md`.
- `README.md`: commands, where things live, deploy steps.
- `plan.md`: sections 1 Decisions already made, 2 Content model, 3 Scope, 4 Autonomy rules, 5 Phases with an Owns list per phase, 6 Human inputs, 7 Open questions, 8 Build log index, 9 Backlog.
- `research/kwp-asado.md`: Appendices A and B of this message, verbatim. `research/kwp-asado.csv`: generated from Appendix B, with columns `keyword,volume,cpc_low_sek,cpc_high_sek,comida_page,group`.
- `docs/log/`, `docs/image-slots.md`, `docs/decisions-needed.md`, `docs/engine-provenance.md`.
- `.gitignore`: `dist/`, `node_modules/`, `docs/screenshots/`, `*.zip`, and any private config.
- **No `.github/` directory.** No workflows, no CI, no PR screenshot jobs; this is Anton's Actions-minutes policy. If anything you copy brings `.github/` with it, delete it. The gates run locally in the session. You may add `scripts/pre-push.sh` for Anton to install as a git hook.

### Build, verify, deploy

- After adaptation, the commands are:
  - build: `node engine/build-site.mjs --site=asado` (output goes to `dist/asado.com.py/`)
  - verify: `node engine/verify.mjs --site=asado`
  - mutation tests: `node engine/verify.test.mjs`
  - content: `node scripts/validate-content.mjs`
  - duplicates: `node scripts/check-duplicates.mjs`
  - QA gate: `node scripts/qa-gate.mjs --report`
  - preview: `node engine/serve.mjs --site=asado --port=8094`
- **Deploy uses the deploy-branch pattern.** `node scripts/deploy-branch.mjs` builds, runs every gate, commits only `dist/asado.com.py/` to the orphan branch `hostinger` (with a `.deploy-source` file naming the source commit) and pushes it. In hPanel, Anton connects asado.com.py → Advanced → Git to repo `antonmarklundcom/asado`, branch `hostinger`, install path `public_html`, with auto-deploy on. Hostinger builds nothing; it only pulls static files. That costs zero Actions minutes.
- **Never push the `hostinger` branch until Anton writes "Deploy".** Go-live is his call. The asado.com.py domain is his, but it was not pointed at hosting on 2026-09-19 (it returned 502 or a timeout).
- `.htaccess` must force https and non-www (canonical `https://asado.com.py/`), set trailing slashes, the 404 page, caching headers and compression.

## 3. House rules (copy into AGENTS.md; they are non-negotiable)

1. Never drop, narrow or substitute a step on your own judgement. Run it and flag it, or write the question to `docs/decisions-needed.md`.
2. Never print, echo, log or commit secrets, tokens or API keys. If a form is approved later, its VenderCRM key lives only in a private config file outside `public_html`; the `vendercrm-lead-capture` skill has the pattern.
3. **Forbidden in rendered text.** This covers visible HTML, titles, meta, JSON-LD and alt text, case-insensitive, and the verifier must fail the build on any of them:
   - "24 h", "24 horas", "2 a 3 presupuestos"
   - "verificado", "verificados", "verificada"
   - "garantizado", "garantizada", "garantizados"
   - "todo Paraguay"
   - any price number (Gs, ₲, $, USD, "mil guaraníes", any amount of money)
   - testimonials and quotes attributed to customers
   - partner names, review counts or star ratings (no `aggregateRating` or `Review` schema)
   - third-party logos

   For price-intent keywords, explain what changes the price and never give a number.
4. **No invented facts.** No statistics, dates, laws, history claims, addresses, opening hours or "según expertos" that you cannot source. Hedge folk history ("se cuenta que…"). Every content module carries `source` and `verifiedAt`.
5. **No made-up businesses.** Do not invent carnicerías, churrasquerías, parrilleros, brands, chefs or customers, not even as examples. No brand names in copy: KWP rows such as "kit asado tramontina" or supermarket names are data, never text. The directory stays empty until Anton supplies real, sourced entries.
6. **Estimates are labelled.** Grams per person, coal per kilo, grill times, grill height and doneness temperatures are editorial estimates, and the page says so in its `estimate` field. Food-safety minimum internal temperatures are facts: check them against the source you cite before publishing. The commonly cited USDA FSIS minimums are 63 °C with a 3-minute rest for whole cuts of beef, pork and lamb, 71 °C for ground meat, and 74 °C for poultry.
7. **Unique text.** No paragraph of 100 or more characters may repeat across pages. Never copy text from comida.com.py, because duplicate text across the two domains hurts both. Write each FAQ answer for its own page.
8. **Static output only.** HTML, CSS, vanilla JS, and at most one PHP handler (none is needed in these phases). No frameworks, no build-time network calls, no npm dependencies, no tracking until Anton gives an analytics ID, no third-party embeds.
9. No CI files under `.github/`.
10. Report in short summaries with file paths and counts, never file dumps.
11. **Model cost.** Never use a Fable or Mythos-class model for subagents, spawned sessions, workflows or Routines. Subagents run on Sonnet, or on Opus for templates and foundation work.

## 4. Split with comida.com.py (avoid cannibalisation)

| Topic | Owner | Rule |
|---|---|---|
| Grilling technique: fire, coal vs wood, doneness, times per cut and thickness, grill types, quincho, parrillada order, espeto | **asado.com.py** | comida has only short guides here. asado goes deep. |
| Cut encyclopedia for the grill (beef, pork, lamb, goat, achuras) | **asado.com.py**, and comida keeps its 32 cut pages | asado writes the grill-first angle (method, times by thickness, doneness, cutting, serving). comida's cut pages are general explainers ("qué es el vacío"). |
| Oven, pot and stove meat recipes (asado a la olla, estofado, milanesa, matambre a la pizza al horno, arrollado, vitel toné, osobuco) | **comida.com.py** | asado never writes these and links to comida instead. |
| "Cuánta carne por persona" | Both, with different angles | comida plans the party and the catering. asado plans for the grill master: cuts by grill time, coal per kilo, order of service. Link to each other. |
| Asado and lechón for events, catering, parrillero for hire | **comida.com.py** | asado sends event intent to `https://comida.com.py/catering/asado-para-eventos/` (lechón: `/catering/lechon-para-eventos/`). |
| Carnicerías, churrasquerías, meat prices | **asado.com.py**, as a directory later | Commercial local intent. Never publish prices. |

Rules:
- Before you write any asado page, check Appendix C. If comida has a page on the same cut or topic, the asado page needs a different H1, title and angle, and it links to the comida page for the kitchen side ("¿Lo querés al horno? …").
- Never reuse or near-copy a comida H1. Phase 1 adds a check script that fails when an asado H1 or title matches a comida H1 from Appendix C.
- Some overlap is unavoidable: asado a la parrilla, parrilla para asadito, churrasquería, parrillada, cuánta carne por persona, and the comida grill recipes in Appendix C. There, asado builds the deeper page and logs the pair in `docs/decisions-needed.md`. Anton will decide later, in the comida repo, whether the comida page gets shorter or gets a cross-domain canonical to asado. Never touch the comida repo.
- Links to comida.com.py are normal followed links with descriptive anchors: one to three per page where they help, never a sitewide block. The footer may carry one line: "Recetas de cocina y catering: comida.com.py".

## 5. Information architecture

| Hub | URL | Children | Holds |
|---|---|---|---|
| Inicio | `/` | none | What the site is. Entry to every hub and the three tools. A "este fin de semana hacé…" block with 3 to 6 cut cards. |
| Cortes | `/cortes/` | `/cortes/<slug>/` | Every cut page for every animal (vacuno, cerdo, cordero, cabrito), grouped by animal on the hub. It is the breadcrumb parent of beef cuts. |
| Parrilla (técnica) | `/parrilla/` | `/parrilla/<slug>/` | How to make an asado, fire, coal or wood, doneness, grill types, parrillada, espeto, quincho, smoking. |
| Recetas a la parrilla | `/recetas/` | `/recetas/<slug>/` | Preparations that are not a single cut: sauces, provoleta, asaditos and brochettes, burgers, vegetables, matambre a la pizza on the grill. Side dishes link to comida. |
| Cerdo, cordero y cabrito | `/cerdo-cordero-y-cabrito/` | none of its own | A curated hub and the breadcrumb parent of pork, lamb and goat cut pages. Those pages still live at `/cortes/<slug>/`. It also links "a la estaca" and "al asador" techniques and pork recipes. |
| Achuras y embutidos | `/achuras/` | `/achuras/<slug>/` | Chorizo, morcilla, chinchulines, mollejas, riñón. |
| Pollo y pescado a la parrilla | `/pollo-y-pescado/` | `/pollo-y-pescado/<slug>/` | Whole or butterflied chicken, pata muslo, alitas, river fish on the grill (technique only; comida owns the species guides). |
| Calculadoras | `/herramientas/` | `/calculadora-de-asado/`, `/calculadora-de-carbon/`, `/tiempos-de-coccion/` | The tools live at the root because the URLs are short and exact-match. |
| Glosario | `/glosario-de-cortes/` | none | Names of cuts in Paraguay, Argentina and Brazil (picanha, fraldinha, cupim…), hedged where the names do not match one to one. |
| Directory (placeholder) | `/carnicerias/`, `/churrasquerias/` | `/carnicerias/<slug>/` later | Reserved route: `published:false`, not emitted, not linked, not in the sitemap. Phase 3 builds only the data shape and the template, with zero entries. |
| Core | `/sobre/`, `/privacidad/`, `/404.html` | none | No contact form. The contact line stays hidden until Anton gives a number or an email. |

- **URL rules.** Lowercase ASCII, hyphens, trailing slash. No dates, no IDs, at most two levels. The slug equals the file name and is the stable id. Each page has one absolute canonical URL with https, no www and a trailing slash.
- **Hubs** are indexable only when they have 3 or more published children. Below that they are built but set to `noindex`, and left out of the nav and the sitemap.

### Internal linking

- Every page has a visible breadcrumb, plus `BreadcrumbList` schema.
- Every hub lists all of its published children as cards.
- **Every cut page links to:** its hub, `/tiempos-de-coccion/`, `/parrilla/punto-de-la-carne/`, `/calculadora-de-asado/`, 2 to 4 related cuts (same animal or same cooking style), one technique page, and the matching comida page(s) from Appendix C for oven or pot use.
- Every technique page links the cut pages it mentions, on first mention only. Every recipe links the cut(s) it uses and one sauce.
- Home links every hub and the three tools.
- Anchors are descriptive and varied, never "click acá".
- **No orphans.** Every indexable page needs at least 2 inbound links from the body of other pages; hub cards count. A script in phase 1 checks this.

## 6. Tools (vanilla JS, progressive enhancement, all numbers are editorial estimates)

1. **Calculadora de asado** (`/calculadora-de-asado/`, the flagship).
   - **Why it matters.** A SERP check on 2026-09-19 (DuckDuckGo, Paraguay locale, as a proxy for Google) for "cuanta carne por persona para asado" showed only Argentine and Chilean calculators and no Paraguayan one.
   - **Inputs:** adults, children, appetite (liviano, normal, fuerte), cut type (sin hueso, mixto, con hueso) and which items (vacío, asado de tira, picaña, entraña, cerdo, pollo, chorizo, morcilla).
   - **Outputs:** total raw kilos, a suggested split by cut in grilling order (slow cuts first), the number of chorizos and morcillas, and kilos of coal. There is also a plain-text shopping list to copy or share by WhatsApp (a `https://wa.me/?text=` link with no number).
   - **Base estimates.** Keep them consistent with comida.com.py's published calculator so the two sites never contradict each other:
     - 350 / 450 / 550 g of boneless meat per adult (liviano / normal / fuerte), 200 g per child
     - bone factor ×1.2 for mixto and ×1.5 for con hueso
     - 1 chorizo per person
     - about 0.6 kg of coal per person
   - For groups of about 30 or more, a box asks "¿Es para un evento?" and links to comida's asado-para-eventos page.
2. **Calculadora de carbón** (`/calculadora-de-carbon/`).
   - Inputs: kilos of meat, fast or slow cuts, expected duration, carbón or leña, wind and cold.
   - Output: a range of kilos of coal (or wood) and when to add more. The page states its assumptions.
3. **Tiempos de cocción** (`/tiempos-de-coccion/`).
   - A filterable table: cut × thickness (2 cm, 3 cm, 4 cm, whole piece) × doneness (jugoso, a punto, cocido). It returns minutes per side as a range, fire strength, grill height and target internal temperature.
   - The data lives in one module (for example `sites/asado/data/tiempos.mjs`) that the cut pages also read, so the numbers match everywhere.

All three tools:
- They work without JS as static tables or explanations. The calculation functions are pure and tested with node fixtures.
- They store no personal data.
- Each has 400 to 900 words of explanation under the tool, with FAQ.

## 7. First 30 pages, ranked by volume and grill intent

Cluster volumes are sums of Appendix B rows (monthly, Paraguay). An asterisk (*) marks a volume that may be brand or restaurant navigation (see §14). H1s are working drafts; each must differ from the comida H1 in the last column's pages.

| # | URL | Working H1 | Target keyword cluster (monthly volume) | Cluster | Phase | comida pages on the same topic |
|---:|---|---|---|---:|:-:|---|
| 1 | /cortes/picana/ | Picaña o tapa de cuadril en la parrilla: elegirla, cortarla y darle el punto | picaña 2900, tapa cuadril 2400, cuadril 880, cuadrilo 880, picanha 320, picanha grill 210*, tapa de cuadril 170, picaña a la parrilla 140, tapa cuadril a la parrilla 140, carne cuadril 40, carne tapa cuadril 40 | 8,120 | 2 | /carne/picana/, /carne/tapa-de-cuadril/, /recetas/picana-a-la-parrilla/ |
| 2 | /parrilla/churrasco-en-espeto/ | Churrasco en espeto: cómo armar una churrasquería en tu quincho | churrasqueria 4400, churrasquería en asunción 260, churrascos 140 | 4,800 | 2 | /guias/churrasqueria/ |
| 3 | /cortes/bondiola/ | Bondiola en la parrilla y ahumada: fuego suave, tiempos y cortes | bondiola de cerdo 1900, bondiola 1600, bondiola de vaca 390, bondiola que es 70, bondiola de cerdo que es 30, bondiola a la parrilla 20, bondiola de cerdo a la parrilla 20, bondiola ahumada 20 | 4,050 | 2 | /carne/bondiola-de-cerdo/, /recetas/bondiola-al-horno/ |
| 4 | /parrilla/tipos-de-parrilla/ | Tipos de parrilla para asado y asadito: hierro, ladrillo, portátil o cilindro | parrilla para asadito 2400 (CPC 0.19–1.87), kit de asado 210, kit asador 140, kit asado 50, kit para asador 40, kit asador personalizado 40 | 2,880 | 2 | /guias/parrilla-para-asadito/ |
| 5 | /cortes/costillar-de-cerdo/ | Costillar de cerdo en la parrilla: fuego lento, ahumado y punto del hueso | costilla de cerdo 720, costillas de cerdos 720, costillar de cerdo 720, costilla grill de cerdo 170, costillar 140, costillar de cerdo a la parrilla 70, asado de costillar 50, costilla de chancho 50, costillas de cerdo en barbacoa 50, asar costillas 30, costillar ahumado 30, costillas ahumada 30, costillas bbq 20, costillitas bbq 20, ribs de cerdo 20 | 2,840 | 2 | /carne/costillar-de-cerdo/, /recetas/costillar-de-cerdo-al-horno/, /recetas/costillas-de-cerdo-a-la-barbacoa/ |
| 6 | /cortes/matambre/ | Matambre a la parrilla: cómo dejarlo tierno, y a la pizza sobre las brasas | matambre 1900, matambre de vaca 170, matambre vacuno 70, matambre de carne 70, matambre a la parrilla 70, carne matambre 50, matambre a la pizza a la parrilla 50, matambre que es 30 | 2,410 | 2 | /carne/matambre/, /recetas/matambre-a-la-pizza/, /recetas/matambre-arrollado/ |
| 7 | /parrilla/punto-de-la-carne/ | Punto de la carne: jugoso, a punto o cocido, con temperaturas por corte | punto carne 2400* | 2,400* | 2 | none |
| 8 | /parrilla/parrillada/ | Cómo armar una parrillada: orden de salida, achuras y tiempos | parrilladas 1900*, parrillada en asuncion 390 | 2,290 | 2 | /guias/parrillada/ |
| 9 | /cortes/ojo-de-bife/ | Ojo de bife y bife ancho a la parrilla: grosor, sellado y punto | ojo de bife 1300, bifes de carne 590, bife ancho 320, bife ancho y bife angosto 10 | 2,220 | 2 | /carne/ojo-de-bife/, /carne/bife-ancho/ |
| 10 | /cortes/tomahawk/ | Tomahawk y chuletón en la parrilla: fuego en dos zonas y reposo | tomahawk carne 880, chuleton 720, corte tomahawk 260, chuleton de vaca 260 | 2,120 | 2 | /carne/tomahawk/, /carne/chuleton/, /recetas/tomahawk-a-la-parrilla/ |
| 11 | /cortes/cordero/ | Cordero a la parrilla y al asador: cortes, fuego y tiempos | cordero 1600, carne de oveja 170, carne de cordero 110, cordero oveja 70, cordero asado 20, cordero parrilla 20, asado de oveja 20, costilla de oveja 20, costillas de oveja 20, cordero entero 10 | 2,060 | 2 | /carne/cordero/, /recetas/cordero-al-horno/ |
| 12 | /cortes/bife-de-chorizo/ | Bife de chorizo a la parrilla: el grosor justo y el punto minuto a minuto | bife de chorizo 1900, bife angosto 70, bife de chorizo precio 30, bife angosto parrilla 10, bife angosto con hueso 10, bife de costilla angosto 10 | 2,030 | 2 | /carne/bife-de-chorizo/ |
| 13 | /cortes/vacio/ | Vacío a las brasas: elegirlo, salarlo y cuánto tiempo por kilo | vacío 1000, vacio carne 590, bife de vacio 140 | 1,730 | 1 (exemplar) | /carne/vacio/, /recetas/vacio-a-la-parrilla/ |
| 14 | /parrilla/carbon-o-lena/ | Carbón o leña: cómo prender el fuego y manejar las brasas | brasa y leña 1300*, brasas 320* (head terms "carbón", "leña" unmeasured) | 1,620* | 2 | none |
| 15 | /cortes/entrana/ | Entraña en la parrilla: fuego fuerte, pocos minutos y cómo cortarla | entraña 1300, entraña de vaca 260 | 1,560 | 2 | /carne/entrana/, /recetas/entrana-a-la-parrilla/ |
| 16 | /cortes/lechon/ | Lechón a la parrilla y a la estaca: tamaño, fuego y cuero crocante | lechón 880, lechon a la parrilla 260, lechon asado 50, asado lechon 50, lechon a la estaca 50, lechon entero 20 | 1,310 | 2 | /carne/lechon/, /recetas/lechon-al-horno/, /catering/lechon-para-eventos/ |
| 17 | /parrilla/como-hacer-un-asado/ | Cómo hacer un asado paraguayo de principio a fin | asado ala parrilla 720, carne para asado 260 (head terms "asado", "cómo hacer un asado" unmeasured) | 980 | 2 (cornerstone) | /guias/asado-a-la-parrilla/ |
| 18 | /cortes/asado-de-tira/ | Asado de tira y costillar vacuno en la parrilla: tiempos por grosor | asado de tira 170, costilla de vaca 170, costillar de novillo 170, costilla vacuna 110, costilla a la parrilla 90, costillar de res 50, costilla madurada 40, carne costilla 30, costilla asada 30, costilla para asado 30, tiras de costilla 30, costilla al disco 20, costillas a la estaca 20 | 960 | 2 | /carne/costilla-de-vaca/, /recetas/asado-de-tira-a-la-parrilla/ |
| 19 | /calculadora-de-asado/ | Calculadora de asado: cuánta carne y carbón por persona | cuánta carne por persona 10, carne para asado (shared with #17); open SERP, see §6 | 10 | 1 | /guias/cuanta-carne-por-persona/ |
| 20 | /tiempos-de-coccion/ | Tiempos de cocción a la parrilla por corte y grosor | unmeasured (core) | — | 2 | none |
| 21 | /calculadora-de-carbon/ | Calculadora de carbón y leña para el asado | unmeasured (core) | — | 2 | none |
| 22 | /recetas/chimichurri/ | Chimichurri casero para el asado | unmeasured (core) | — | 1 (exemplar) | none |
| 23 | /recetas/salsa-criolla/ | Salsa criolla para acompañar el asado | unmeasured (core) | — | 2 | none |
| 24 | /pollo-y-pescado/pescado-de-rio-a-la-parrilla/ | Pescado de río a la parrilla: surubí, pacú y dorado sin que se pegue | surubí 2900, pacu pescado 390, pacú pescado 390, pescado pacu 260, pacu pez 210, pacú 110, surubi pez 110, el pacu 30, pacu pescado de rio 20 | 4,420 | 3 | /guias/surubi/, /guias/pacu/, /guias/dorado/, /recetas/surubi-a-la-parrilla/, /recetas/pacu-a-la-parrilla/ |
| 25 | /pollo-y-pescado/pollo-a-la-parrilla/ | Pollo a la parrilla: entero, a la mariposa, pata muslo y alitas | alitas de pollo 390, alas de pollo 390, alitas 320, alita de pollo 320, ala de pollo 320, pollo entero 170, alas de pollo a la parrilla 50, alita a la parrilla 40, pollo a la barbacoa 40, pollos asados 30, pata muslo 30, pollo asado parrilla 20, pata muslo de pollo 20 | 2,140 | 3 | /guias/cortes-de-pollo/, /recetas/alitas-de-pollo-al-horno/ |
| 26 | /cortes/panceta/ | Panceta a la parrilla: fresca o ahumada, crocante sin quemarse | panceta 1600, panceta de cerdo 260, panceta ahumada 170 | 2,030 | 3 | /carne/panceta/, /recetas/panceta-crocante/ |
| 27 | /cortes/colita-de-cuadril/ | Colita de cuadril en la parrilla: entera, con sal gruesa y punto rosado | colita cuadril 720, colita de cuadril 170, colitadecuadril 170, colita cuadril a la parrilla 70, asado colita de cuadril 10 | 1,140 | 3 | /carne/colita-de-cuadril/, /recetas/colita-de-cuadril-a-la-parrilla/ |
| 28 | /cortes/matambrito-de-cerdo/ | Matambrito de cerdo a la parrilla: tiempos, punto y cómo servirlo | matambrito de cerdo 480, matambrito 260, matambritos 260, matambrito de cerdo a la parrilla 20 | 1,020 | 3 | /carne/matambrito-de-cerdo/ |
| 29 | /achuras/chorizo-y-morcilla/ | Chorizo y morcilla en la parrilla: fuego, orden y cuándo están listos | precio del chorizo parrillero 40 (chorizo, morcilla unmeasured) | 40 | 3 | none |
| 30 | /glosario-de-cortes/ | Cortes de carne en Paraguay, Argentina y Brasil: equivalencias | corte americano carne 210, cortes premium de carne 20, cortes de carnes premium 20, cortes premium 10 (+ unmeasured picanha/fraldinha/cupim variants) | 260 | 3 | /guias/cortes-de-carne-vacuna/ |

**Phase 3 long tail**, chosen from Appendix B in volume order under the same rules:
- **Cuts:** `/cortes/cabrito/` (170), `/cortes/tapa-de-asado/` (330), `/cortes/chuleta-de-cerdo/` (chuleta de cerdo 590; comida has a sartén recipe).
- **Achuras:** `/achuras/chinchulines/`, `/achuras/mollejas/`, `/achuras/rinon/` (unmeasured).
- **Recipes:** `/recetas/provoleta/`, `/recetas/hamburguesas-a-la-parrilla/` (210), `/recetas/asaditos/`, `/recetas/verduras-a-la-parrilla/`.
- **Technique:** `/parrilla/quincho/`, `/parrilla/ahumado/` (ahumado rows add up to 280).

**Hubs** (`/cortes/` and the others in §5) come on top of the 30. The `/cortes/` hub angle is "cortes para la parrilla". Generic "cortes de carne" (590), "carne de res" (590) and "carne de vacuno" (880) are targeted by comida's `/guias/cortes-de-carne-vacuna/`, so do not chase them.

**Check the "asadito" meaning first.** In Paraguay, "asadito" commonly names a street skewer of beef. comida's guide reads "parrilla para asadito" as a small home grill. If you can see a SERP, check which intent dominates before writing #4 and `/recetas/asaditos/`. If you cannot, cover both meanings without claiming which one dominates.

## 8. Page templates, schema, sitemap, robots, share tags

Every module has the same envelope, one file per page:
- `id` (`corte-<slug>`, `receta-<slug>`, `guia-<slug>`, `tool-<slug>`, `hub-<slug>`), `slug` (equals the file name), `kind`, `label`
- `seoTitle` (≤ 45 characters, so it stays ≤ 60 with the " | asado.com.py" suffix), `meta` (120 to 160 characters), `h1`, `cardText`, `keywords` (its cluster from §7 or Appendix B)
- `source`, `verifiedAt`, `updatedAt`, `published`, `indexable`
- `parent` (hub id), `image: null`, `related` (ids), `comidaLinks` (paths from Appendix C)

**Cut page** (`kind:'cut'`, 900 to 1,800 words):
- `animal`: Vacuno, Cerdo, Cordero, Cabrito, Pollo or Pescado.
- `facts` box: Animal · Zona del animal · Otros nombres (Paraguay / Argentina / Brasil, hedged) · Mejor cocción en la parrilla · Fuego y altura · Tiempo orientativo (by thickness or weight) · Punto recomendado · Por persona (estimate).
- `estimate`, one sentence.
- `sections`, 5 to 8:
  - qué es y dónde está
  - cómo elegirlo en la carnicería (colour, fat, thickness; what changes the price, never a number)
  - preparación y sal
  - paso a paso en la parrilla, with a table of times by thickness read from the shared tiempos data
  - punto y temperatura interna
  - cómo cortarlo y servirlo
  - errores comunes
  - one short paragraph on other cooking methods, linking comida
- `faq`, 3 to 5 questions.
- Schema: `Article` + `BreadcrumbList`.

**Recipe page** (`kind:'recipe'`, 700 to 1,300 words):
- `course`, `cuisine` ('Paraguaya' or 'Casera'), `times {prep, cook, rest}` in minutes, `difficulty` (Fácil, Media or Exigente), and `yield {mode:'porciones', base, options, yieldText, note}` for the scaler.
- `ingredients`: groups of `{q, u, item, note}`. `steps`: each step's text, with an optional time.
- Grill fields: `fuel` (carbón, leña or gas), `heat` (directo or indirecto), `equipment`.
- `tips`, `faq`.
- Schema: `Recipe`, with name, description, recipeIngredient, recipeInstructions (HowToStep), prepTime, cookTime and totalTime (ISO 8601), recipeYield, recipeCategory, recipeCuisine, keywords, author and publisher (Organization "asado.com.py"), datePublished, dateModified, and image only when one exists. Never aggregateRating, review or video. Nutrition only if sourced.

**Technique guide** (`kind:'guide'`, 900 to 1,800 words):
- `eyebrow`, `facts`, `estimate`, `sections` (4 to 8, which may hold `table {caption, head, rows, note}`, `steps` or `cards`), `faq`, `related`, and optionally `tool`.
- Schema: `Article` + `BreadcrumbList`.

**Tool page:** a guide with `tool {type, title, hint, data}` and a `path` override to the root URL. Schema: `WebPage` + `BreadcrumbList`.

**Hub:** intro (150 to 300 words), cards of its children, links to sibling hubs. Schema: `CollectionPage` + `ItemList` + `BreadcrumbList`.

**Home:** `WebSite` + `Organization` (name and url only; a logo only if Anton supplies one).

**Directory listing (phase 3, template only):**
- Data shape: `{id, name, kind:'carniceria'|'churrasqueria', zona, direccion, horario, telefono, source, verifiedAt, published}`.
- `source` is a visit, or the business's own published page. No reviews, ratings or counts.
- Nothing is published until Anton approves the entries.

**FAQ:** show it as visible content. Keep whatever FAQPage JSON-LD behaviour comida's engine already has, but expect no FAQ rich results.

**Sitemap:** `sitemap.xml` lists only published, indexable, canonical routes, with `lastmod` = `updatedAt`. It never lists the 404 page, noindex pages or reserved routes.

**robots.txt:** allow all, and add `Sitemap: https://asado.com.py/sitemap.xml`.

**Share tags on every page:**
- `og:type` (website for home and hubs, article for the rest), `og:title`, `og:description` (= meta), `og:url` (= canonical), `og:site_name` asado.com.py, `og:locale` es_PY.
- `og:image` as an absolute URL at 1200×630, with `og:image:alt`. Until photos exist this is a default card generated by code.
- `twitter:card` summary_large_image.
- Recipes and tools also get a WhatsApp share link (`https://wa.me/?text=` with the page title and URL).

## 9. Images

- **Do not generate, fetch or download images unless Anton writes "Generate image" in this conversation.** Do not call Higgsfield or any other image model before that. Do not reuse comida's photos, and do not use stock placeholders.
- Every module has `image: null`, and every template looks finished without a photo (a text card fallback).
- **List the image slots only,** in `docs/image-slots.md`. One row per slot: slot id, page path, subject, aspect, Spanish alt-text draft and priority.
  - Subject is what the photo must show, for example "vacío entero sobre la parrilla, lado de la grasa arriba, brasas debajo".
  - Aspect is 4:3 for content, 16:9 for the hero and 1:1 for cards.
  - Priority 1 goes to recipe pages, because Recipe rich results need an image.
- Share images made by code from text and the site colours (no photos, no AI) are allowed.
- When Anton writes "Generate image", load the `higgsfield-image-pipeline` skill first and follow it.

## 10. Checks that must pass before every PR

1. **Build:** `node engine/build-site.mjs --site=asado` exits 0 and prints route and page counts.
2. **Verify:** `node engine/verify.mjs --site=asado` exits 0. It checks:
   - internal links resolve to published routes; external links go only to comida.com.py and cited sources
   - titles, meta and H1s are unique, and every page has a canonical
   - JSON-LD parses and has the required fields per type
   - the sitemap equals the indexable routes, and robots.txt exists
   - the §3.3 forbidden list, including in JSON-LD and alt text
   - no BOM and no mojibake
   - no reserved route is emitted
3. **Mutation tests:** `node engine/verify.test.mjs` passes. Add a test for every new rule (forbidden word, comida H1 collision, orphan page, reserved route emitted).
4. **Content:** `node scripts/validate-content.mjs` reports 0 errors and no tuteo warnings.
5. **Duplicates:** `node scripts/check-duplicates.mjs` finds no repeated paragraph of 100 or more characters. If the comida clone is present, also run it across both content trees; zero copied sentences allowed.
6. **H1 collision:** the check script finds no asado H1 or title equal to, or nearly equal to, a comida H1 in Appendix C.
7. **Orphans:** every indexable page has at least 2 inbound body links.
8. **Tool math:** node fixtures for each tool pass (at least 3 cases each).
9. **Repo hygiene:**
   - `.github/` does not exist.
   - `git status` shows only the files this phase owns.
   - A grep of `dist/` and the content for the forbidden list and for the mojibake characters in §1 returns nothing.

Optional, once per phase: screenshots of at most 5 pages at 2 widths (360 and 1280 px). Never commit them.

## 11. Phases (one PR each)

Rules for every phase:
- Work on branch `phase/<n>-<slug>` off the latest `main`, with a WIP commit at least every 30 minutes.
- Open one PR per phase, with a body of at most 25 lines. Squash-merge it yourself when every check in §10 passes, then start the next phase.
- Before merging, write `docs/log/phase-<n>.md`: "Built" (≤ 12 lines), "Decisions" (≤ 8), "Known issues" (≤ 8), and one line "Verification: all checks green on <commit>". Add its index line to `plan.md` §8.
- Stop and ask only for a missing credential, or for a foundation decision where a wrong guess forces a rewrite. Write the question to `docs/decisions-needed.md`, commit, report, and end.
- If the context is running low, finish and log the current phase, then tell Anton to start a fresh session with: `Read AGENTS.md and plan.md in this repo and continue with the next phase.`
- **Parallel writers** (Sonnet subagents; see the `fable-directs-sonnet-builds` skill, fan-out section, if available):
  - Each writer gets the house rules, the exemplar module of its kind, its keyword cluster, the comida H1s it must not reuse, and the links it must place.
  - Each writer creates only its assigned files and runs only `validate-content.mjs` on them. Never the build: the build wipes `dist/`.
  - The director then builds, verifies and reads every page for facts, voseo, forbidden text and invented numbers, and fixes what it finds.

**Phase 1: Foundation** (Opus, this session)
- Fork and adapt the engine (§2).
- Set up the repo files, AGENTS.md, README and plan.md.
- Add the research files, the check scripts (H1 collision, orphans, tool fixtures), the `.htaccess`, and the deploy-branch script (run it without pushing).
- Build these pages:
  - home
  - every hub (noindex until it has 3 children)
  - `/calculadora-de-asado/`, plus the shared tiempos data module
  - exemplars `/cortes/vacio/` and `/recetas/chimichurri/`
  - `/sobre/`, `/privacidad/`, 404
- Exit: §10 all green and PR 1 merged.

**Phase 2: Hubs and top pages** (Opus directs, Sonnet subagents write)
- Build §7 rows 1–12, 14–18, 20, 21 and 23, fill the hubs, add the comida cross-links, and add slot rows to `docs/image-slots.md`.
- Exit: about 30 indexable routes, §10 all green, PR 2 merged.

**Phase 3: Long tail, link pass, go-live prep** (Sonnet writers, Opus review)
- Build §7 rows 24–30 and the long-tail list.
- Build the achuras hub, the glossary, and the directory data shape and template (reserved, zero entries).
- Do the link pass: raise inbound links to at least 3 where you can, and add the related blocks.
- Write `KNOWN-ISSUES.md`, and a go-live checklist in the README (hPanel Git, DNS, SSL, Search Console, first sitemap submit).
- Exit: about 45 indexable routes, §10 all green, PR 3 merged, closing report. Push the `hostinger` branch only if Anton has written "Deploy".

## 12. Human inputs (ask only when the phase needs them)

| Item | Needed by |
|---|---|
| hPanel: create the asado.com.py site, Git deploy from branch `hostinger` to `public_html`, SSL, and DNS pointed at Hostinger | go-live |
| Google Search Console property for asado.com.py; submit the sitemap | go-live |
| Contact for `/sobre/` (WhatsApp number or email). Hidden until given. | optional |
| Analytics ID. No tracking until then. | optional |
| A new KWP round (Paraguay, Spanish) for unmeasured grill terms: asado, parrilla, chimichurri, salsa criolla, carbón, leña, quincho, achuras, chinchulines, mollejas, morcilla, chorizo, costilla, lomo, punto de la carne, tiempo de cocción, parrilla a gas, parrilla de obra, provoleta, asaditos | before phase 3 page choice (not blocking) |
| "Generate image" plus the credit budget | photos |
| A decision on each overlap pair logged in `docs/decisions-needed.md` (comida side) | after phase 2 |
| Real carnicería and churrasquería entries, each with a source and a date | directory launch |
| A VenderCRM site key for asado, only if a "sumá tu carnicería" form is approved later | later |

## 13. Report format (after each phase, at most 200 words)

```
Phase <n> <name>: PR #<x> merged as <commit>
Pages: <total published>, indexable <n>, sitemap URLs <n>; new this phase: <paths, or a count if more than 15>
Checks: build 0 · verify 0 (<n> checks) · verify.test pass · validator 0 errors/<n> warnings · duplicates 0 · H1 collisions 0 · orphans 0 · forbidden/mojibake grep 0 · .github absent
git status after merge: clean; files outside this phase's Owns list: none
Assumptions: <list>
Flagged: <list, e.g. unverified facts left out, overlap pairs for Anton, KWP gaps>
Next: <phase, or what Anton must do>
```

## 14. Keyword data caveats (read before trusting a number)

- **Source.** Google Keyword Planner, six rounds (September 2026), targeted at Paraguay in Spanish but pulled on a Swedish Ads account, which is why CPC is in SEK. Volumes are KWP buckets (1,900 / 2,400 / 2,900 are buckets, not exact counts).
- **Many core grill terms were never measured.** That includes asado, parrilla, chimichurri, carbón, quincho, achuras, chinchulines, mollejas, morcilla, chorizo, costilla and lomo; see Appendix A. "no data" means unmeasured, not zero. Never invent a volume.
- **Possible brand or restaurant names.** KWP round 2 classified "punto carne" (2,400) as a possible butcher brand. It classified "brasa y leña" (1,300), "brasas" (320) and "picanha grill" (210) as possible restaurant names, and "parrilladas" (1,900) sat in a restaurant list. Build the technique pages anyway, but do not rank on those numbers, and never name the businesses.
- **Mixed intent.** "aguja", "falda", "paleta" and "tortuguita" (clothing, sewing, candy) and "dorado" (the fish, but also brands and restaurants).
- "ala" as in "matambre ala pizza" is a real misspelling people search. Use it naturally in body text only, never in a heading.
- Brand, supermarket, restaurant and "cerca de mí" rows (Appendix B8, and the named carnicerías in B6) are for the future directory only. Never target them with content.
- Appendix B totals 484 keywords and 153,490 searches a month. The grill-relevant core is groups B1 to B5, about 109,000 a month. B7 is comida's kitchen territory, and B8 is navigation.


## APPENDIX A: top meat cut phrases

"no data" = the exact phrase has no row in any of the six KWP rounds (it was never measured, or KWP returned nothing). It does not mean zero searches. Never invent a number for these; ask Anton for a KWP round instead. No cut phrase has a CPC in the data (KWP showed no bid range), so the CPC column is "—" except where a bid exists.

### A1. The cut phrases Anton asked about

In the order requested.

| cut / phrase | exact phrase: monthly volume | CPC SEK | closest measured variants (monthly volume) | comida.com.py page |
|---|---:|---|---|---|
| bife de chorizo | 1,900 | — | bife angosto 70; bife de chorizo precio 30 | /carne/bife-de-chorizo/ |
| costilla | no data | — | costilla de cerdo 720; costillas de cerdos 720; costilla de vaca 170; costilla grill de cerdo 170; costilla vacuna 110; costilla a la parrilla 90 | /carne/costilla-de-vaca/ · /carne/costillar-de-cerdo/ |
| asado de tira | 170 | — | costillar de novillo 170; tiras de costilla 30 | /recetas/asado-de-tira-a-la-parrilla/ |
| vacío | 1,000 | — | vacio carne 590; bife de vacio 140; carne vacio precio 30 | /carne/vacio/ · /recetas/vacio-a-la-parrilla/ |
| picaña | 2,900 | — | picanha 320; picanha grill 210; picaña precio 170; picaña a la parrilla 140 | /carne/picana/ · /recetas/picana-a-la-parrilla/ |
| entraña | 1,300 | — | entraña de vaca 260; entraña precio 40 | /carne/entrana/ · /recetas/entrana-a-la-parrilla/ |
| matambre | 1,900 | — | matambre a la pizza 1,600; matambre ala pizza 1,600; matambre relleno 480; matambre de cerdo 320; matambre a la parrilla 70 | /carne/matambre/ |
| colita de cuadril | 170 | — | colita cuadril 720; colitadecuadril 170; colita cuadril al horno 170; colita cuadril a la parrilla 70 | /carne/colita-de-cuadril/ · /recetas/colita-de-cuadril-a-la-parrilla/ |
| tapa de cuadril | 170 | — | tapa cuadril 2,400; cuadril 880; cuadrilo 880; tapa cuadril al horno 260; tapa cuadril a la parrilla 140 | /carne/tapa-de-cuadril/ |
| ojo de bife | 1,300 | — | bife ancho 320 | /carne/ojo-de-bife/ |
| lomo | no data | — | lomo de cerdo 720; bola de lomo 480; lomo vacuno precio 20; lomito 4,400 | /recetas/lomo-de-cerdo-al-horno/ (pork only) |
| osobuco | 2,900 | — | osobuco precio 170 | /carne/osobuco/ |
| chorizo | no data | — | precio del chorizo parrillero 40 | — |
| morcilla | no data | — | none measured | — |
| bondiola | 1,600 | — | bondiola de cerdo 1,900; bondiola de vaca 390; bondiola a la parrilla 20; bondiola ahumada 20 | /carne/bondiola-de-cerdo/ |
| costillar de cerdo | 720 | — | costillar precio 210; costillar de cerdo precio 170; costillar 140; costillar de cerdo a la parrilla 70 | /carne/costillar-de-cerdo/ |
| matambrito de cerdo | 480 | — | matambrito 260; matambritos 260; matambrito de cerdo a la pizza 90; matambrito de cerdo a la parrilla 20 | /carne/matambrito-de-cerdo/ |
| cordero | 1,600 | — | carne de cordero 110; cordero oveja 70; cordero asado 20; cordero parrilla 20 | /carne/cordero/ |
| cabrito | 170 | — | none measured | /carne/cabrito/ |
| tomahawk | no data | — | tomahawk carne 880; corte tomahawk 260; tomahawk precio 50 | /carne/tomahawk/ · /recetas/tomahawk-a-la-parrilla/ |
| chuletón | 720 (as "chuleton") | — | chuleton de vaca 260 | /carne/chuleton/ |

### A2. Other measured cuts, poultry and river fish

Sorted by exact-phrase volume.

| cut / phrase | exact phrase: monthly volume | CPC SEK | closest measured variants (monthly volume) | comida.com.py page |
|---|---:|---|---|---|
| surubí | 2,900 | — | surubi pez 110 | /guias/surubi/ · /recetas/surubi-a-la-parrilla/ |
| dorado | 2,900 (as "dorado (mixed intent: fish and brands)") | — | dorado de mar 40 | /guias/dorado/ |
| peceto | 1,900 | — | peceto vitel tone 590; peceto precio 320 | /carne/peceto/ |
| muslo de pollo | 1,900 | 14.88–14.88 | pata muslo 30; pata muslo de pollo 20 | /guias/cortes-de-pollo/ · /recetas/muslos-de-pollo-al-horno/ |
| panceta | 1,600 | — | panceta de cerdo 260; panceta ahumada 170 | /carne/panceta/ |
| cuadrada | 1,300 | — | none measured | /carne/cuadrada/ |
| pechuga de pollo | 1,000 | 1.59–14.88 | pechuga de pollo precio 320 | /recetas/pechuga-de-pollo/ |
| lechón | 880 | — | lechon a la parrilla 260; lechon precio 70; lechon a la estaca 50 | /carne/lechon/ |
| cecinas | 880 | — | none measured | — |
| suprema de pollo | 880 | 14.89–14.89 | suprema rellena 70 | /guias/cortes-de-pollo/ · /recetas/suprema-de-pollo-rellena/ |
| carnaza negra | 590 | — | carnaza blanca 320 | /carne/carnaza/ |
| bola de lomo | 480 | — | bolo de lomo 480; bola de lomo precio 140 | /carne/bola-de-lomo/ |
| marucha | 480 | — | carne marucha 170; marucha carne 170 | /carne/marucha/ |
| solomillo | 480 | — | solomillo de cerdo 210 | /recetas/solomillo-de-cerdo/ |
| garrón | 390 | — | garron de vaca 480 | /carne/garron/ |
| pernil de cerdo | 390 | — | pernil 210; pernil ahumado 30 | /carne/pernil-de-cerdo/ |
| alitas de pollo | 390 | — | alas de pollo 390; alitas 320; alita de pollo 320; ala de pollo 320; alas de pollo a la parrilla 50; alita a la parrilla 40 | /guias/cortes-de-pollo/ · /recetas/alitas-de-pollo-al-horno/ |
| carne de wagyu | 320 | — | wagyu carne 210 | /carne/wagyu/ |
| tapa de asado | 260 | — | tapa asado 70 | /carne/tapa-de-asado/ |
| nalga | 260 | — | tapa de nalga 20 | /carne/nalga/ |
| ternera | 260 | — | none measured | — |
| aguja carne | 210 | — | carne aguja 210; aguja (mixed intent: mostly sewing) 720 | /carne/aguja/ |
| pollo entero | 170 | — | pollo entero precio 70; pollo asado parrilla 20 | /guias/cortes-de-pollo/ |
| carré de cerdo | 140 | — | none measured | /carne/carre-de-cerdo/ |
| codillo de cerdo | 110 | — | codillos de cerdo 110; codillo 20 | — |
| pacú | 110 | — | pacu pescado 390; pacú pescado 390; pescado pacu 260; pacu pez 210 | /guias/pacu/ · /recetas/pacu-a-la-parrilla/ |
| falda | no data | — | falda (mixed intent: mostly clothing) 880; falda parrillera precio 50; falda carne precio 40 | — |

### A3. Grill head terms (mostly never measured)

"punto carne" (2,400) may be a butcher brand and "brasa y leña" (1,300), "brasas" (320) and "parrilladas" (1,900) may be restaurant names: KWP round 2 classified them that way. Build the technique pages anyway, but do not trust those volumes as informational demand.

| cut / phrase | exact phrase: monthly volume | CPC SEK | closest measured variants (monthly volume) | comida.com.py page |
|---|---:|---|---|---|
| asado | no data | — | asado ala parrilla 720; carne para asado 260; kit de asado 210; asado ala olla 1,900 | /guias/asado-a-la-parrilla/ |
| parrilla | no data | — | parrilla para asadito 2,400; hamburguesas a la parrilla 210 | /guias/parrilla-para-asadito/ |
| parrillada | no data | — | parrilladas 1,900; parrillada en asuncion 390 | /guias/parrillada/ |
| churrasquería | 4,400 (as "churrasqueria") | — | churrasquería en asunción 260; churrascos 140 | /guias/churrasqueria/ |
| punto de la carne | no data | — | punto carne 2,400 | — |
| carbón | no data | — | none measured | — |
| leña | no data | — | brasa y leña 1,300; brasas 320 | — |
| quincho | no data | — | none measured | — |
| chimichurri | no data | — | none measured | — |
| salsa criolla | no data | — | none measured | — |
| achuras | no data | — | none measured | — |
| chinchulines | no data | — | none measured | — |
| mollejas | no data | — | none measured | — |
| riñón (as food) | no data | — | none measured | — |
| provoleta | no data | — | none measured | — |
| carnicería | 1,900 (as "carniceria") | — | carniceria la familia 720; carniceria santa ana 480 | — |
| cuánta carne por persona | 10 | — | carne para asado 260 | /guias/cuanta-carne-por-persona/ |

## APPENDIX B: all keyword tables by topic

Source: Google Keyword Planner, Paraguay, Spanish, pulled on a Swedish Ads account (CPC in SEK). Volume = average monthly searches in KWP buckets (1,900 / 2,400 / 2,900 are buckets, not exact counts). "comida.com.py page" = the comida.com.py URL that already targets that exact phrase (prefix https://comida.com.py). Rows are sorted by volume, then alphabetically. Under each group note, "Added here" names the rows that were missing from the first asado handoff (plan/handoff/asado-com-py-kwp.csv in the comida repo) and were added from KWP round 6 or the merged KWP file.

| Group | Keywords | Searches/month | Added in this file |
|---|---:|---:|---:|
| Parrilla, asado y técnica | 71 | 23,370 | 0 |
| Cortes vacunos | 181 | 51,830 | 6 |
| Cerdo, cordero y cabrito | 74 | 16,940 | 5 |
| Achuras, chorizo y embutidos | 2 | 920 | 1 |
| Pollo y pescado a la parrilla | 50 | 16,250 | 35 |
| Carnicerías y precios | 37 | 7,140 | 3 |
| Platos con carne (recetas de cocina, más comida.com.py que asado) | 36 | 24,020 | 0 |
| Marcas, restaurantes y "cerca de mí" (no apuntar con contenido propio, solo directorio) | 33 | 13,020 | 5 |
| **Total** | **484** | **153,490** | **55** |

### B1. Parrilla, asado y técnica: 71 keywords, 23,370 searches/month

Core asado.com.py territory. "brasa y leña" (1300), "brasas" (320) and "parrilladas" (1900) were classified as possible restaurant names in KWP round 2, and "punto carne" (2400) as a possible butcher brand: build the technique pages, but do not count on those volumes. "asado ala olla" / "asado en olla" are comida.com.py (stove) intent.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| churrasqueria | 4400 |  | /guias/churrasqueria/ |
| parrilla para asadito | 2400 | 0.19–1.87 | /guias/parrilla-para-asadito/ |
| punto carne | 2400 |  |  |
| asado ala olla | 1900 |  |  |
| asado en olla | 1900 |  | /recetas/asado-a-la-olla/ |
| parrilladas | 1900 | 0.20–4.26 | /guias/parrillada/ |
| brasa y leña | 1300 |  |  |
| chipa asador | 1300 |  | /recetas/chipa-asador/ |
| asado ala parrilla | 720 |  | /guias/asado-a-la-parrilla/ |
| parrillada en asuncion | 390 |  | /guias/parrillada/ |
| brasas | 320 |  |  |
| como hacer asado a la olla | 320 |  | /recetas/asado-a-la-olla/ |
| carne para asado | 260 |  | /guias/cuanta-carne-por-persona/ |
| churrasquería en asunción | 260 |  | /guias/churrasqueria/ |
| lechon a la parrilla | 260 |  | /recetas/lechon-al-horno/ |
| tapa de asado | 260 |  | /carne/tapa-de-asado/ |
| hamburguesas a la parrilla | 210 |  |  |
| kit de asado | 210 |  |  |
| asado de tira | 170 |  | /recetas/asado-de-tira-a-la-parrilla/ |
| panceta ahumada | 170 |  | /carne/panceta/ |
| churrascos | 140 |  |  |
| como se hace asado a la olla | 140 |  |  |
| kit asador | 140 |  |  |
| picaña a la parrilla | 140 |  | /recetas/picana-a-la-parrilla/ |
| tapa cuadril a la parrilla | 140 |  | /carne/tapa-de-cuadril/ |
| costilla a la parrilla | 90 |  | /recetas/asado-de-tira-a-la-parrilla/ |
| colita cuadril a la parrilla | 70 |  | /recetas/colita-de-cuadril-a-la-parrilla/ |
| costillar de cerdo a la parrilla | 70 |  | /carne/costillar-de-cerdo/ |
| kit asado tramontina | 70 | 0.34–1.41 |  |
| kit asador tramontina | 70 | 0.34–1.41 |  |
| matambre a la parrilla | 70 |  | /carne/matambre/ |
| tapa asado | 70 |  |  |
| alas de pollo a la parrilla | 50 |  |  |
| asado de costillar | 50 |  |  |
| asado lechon | 50 |  | /recetas/lechon-al-horno/ |
| costillas de cerdo en barbacoa | 50 |  | /recetas/costillas-de-cerdo-a-la-barbacoa/ |
| falda parrillera precio | 50 |  |  |
| kit asado | 50 |  |  |
| lechon asado | 50 |  | /recetas/lechon-al-horno/ |
| matambre a la pizza a la parrilla | 50 |  | /recetas/matambre-a-la-pizza/ |
| alita a la parrilla | 40 |  |  |
| kit asador personalizado | 40 |  |  |
| kit para asador | 40 |  |  |
| pollo a la barbacoa | 40 |  |  |
| precio del chorizo parrillero | 40 |  |  |
| asado por kilo | 30 |  |  |
| costilla para asado | 30 |  | /recetas/asado-de-tira-a-la-parrilla/ |
| costillar ahumado | 30 |  |  |
| costillas ahumada | 30 |  |  |
| pernil ahumado | 30 |  |  |
| pollos asados | 30 |  |  |
| asado de oveja | 20 |  |  |
| bondiola a la parrilla | 20 |  | /carne/bondiola-de-cerdo/ |
| bondiola ahumada | 20 |  |  |
| bondiola de cerdo a la parrilla | 20 |  |  |
| cordero asado | 20 |  | /carne/cordero/ |
| cordero parrilla | 20 |  |  |
| costilla al disco | 20 |  |  |
| costillas bbq | 20 |  | /recetas/costillas-de-cerdo-a-la-barbacoa/ |
| costillitas bbq | 20 |  | /recetas/costillas-de-cerdo-a-la-barbacoa/ |
| kit de asado tramontina | 20 |  |  |
| kit parrillero tramontina | 20 |  |  |
| matambrito de cerdo a la parrilla | 20 |  |  |
| pollo asado parrilla | 20 |  |  |
| alitas bbq | 10 |  | /recetas/alitas-de-pollo-al-horno/ |
| asado colita de cuadril | 10 |  | /carne/colita-de-cuadril/ |
| bife angosto parrilla | 10 |  |  |
| carne para asado precio | 10 |  |  |
| catering barbacoa | 10 |  |  |
| pollo asado a domicilio | 10 |  |  |
| pollos asados a domicilio cerca de mí ubicación | 10 |  |  |
| **Group total** | **23,370** | | |

### B2. Cortes vacunos: 181 keywords, 51,830 searches/month

Build grill-first angles only; oven and pot rows (al horno, a la olla, a la pizza, arrollado, vitel toné) stay with comida.com.py. "aguja", "falda", "paleta" and "tortuguita" are mixed-intent seed rows (clothing, sewing, candy): do not plan pages on their volume.

Added here (4 from round 6 and 2 from the merged KWP file): cuadrada, falda (mixed intent: mostly clothing), paleta (mixed intent), tortuguita (mixed intent: also a candy), buey, ternera.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| osobuco | 2900 |  | /recetas/osobuco-a-la-olla/ |
| picaña | 2900 |  | /recetas/picana-a-la-parrilla/ |
| tapa cuadril | 2400 |  | /recetas/tapa-de-cuadril-al-horno/ |
| bife de chorizo | 1900 |  | /carne/bife-de-chorizo/ |
| matambre | 1900 |  | /carne/matambre/ |
| peceto | 1900 |  | /recetas/peceto-al-horno/ |
| matambre a la pizza | 1600 |  | /recetas/matambre-a-la-pizza/ |
| matambre ala pizza | 1600 |  |  |
| cuadrada | 1300 |  | /carne/cuadrada/ |
| entraña | 1300 |  | /recetas/entrana-a-la-parrilla/ |
| ojo de bife | 1300 |  | /carne/ojo-de-bife/ |
| vacío | 1000 |  | /recetas/vacio-a-la-parrilla/ |
| carne de vacuno | 880 |  |  |
| cuadril | 880 |  | /carne/tapa-de-cuadril/ |
| cuadrilo | 880 |  | /carne/tapa-de-cuadril/ |
| falda (mixed intent: mostly clothing) | 880 |  |  |
| tomahawk carne | 880 |  | /recetas/tomahawk-a-la-parrilla/ |
| aguja (mixed intent: mostly sewing) | 720 |  |  |
| chuleton | 720 |  | /carne/chuleton/ |
| colita cuadril | 720 |  | /recetas/colita-de-cuadril-a-la-parrilla/ |
| costilla de cerdo | 720 |  | /carne/costillar-de-cerdo/ |
| costillar de cerdo | 720 |  | /recetas/costillar-de-cerdo-al-horno/ |
| costillas de cerdos | 720 |  |  |
| lomo de cerdo | 720 |  | /recetas/lomo-de-cerdo-al-horno/ |
| bifes de carne | 590 |  |  |
| carnaza negra | 590 |  | /carne/carnaza/ |
| carne de res | 590 |  | /guias/cortes-de-carne-vacuna/ |
| corte de carnes | 590 |  | /guias/cortes-de-carne-vacuna/ |
| cortes de carne | 590 |  | /guias/cortes-de-carne-vacuna/ |
| paleta (mixed intent) | 590 |  |  |
| peceto vitel tone | 590 |  | /recetas/vitel-tone/ |
| tortuguita (mixed intent: also a candy) | 590 |  |  |
| vacio carne | 590 |  |  |
| bola de lomo | 480 |  | /carne/bola-de-lomo/ |
| bolo de lomo | 480 |  | /carne/bola-de-lomo/ |
| buey | 480 |  |  |
| garron de vaca | 480 |  | /carne/garron/ |
| marucha | 480 |  | /carne/marucha/ |
| matambre relleno | 480 |  | /recetas/matambre-arrollado/ |
| garrón | 390 |  | /carne/garron/ |
| bife ancho | 320 |  | /carne/ojo-de-bife/ |
| carnaza blanca | 320 |  | /carne/carnaza/ |
| carne de wagyu | 320 |  | /carne/wagyu/ |
| matambre de cerdo | 320 |  |  |
| peceto precio | 320 |  | /carne/peceto/ |
| picanha | 320 |  | /carne/picana/ |
| chuleton de vaca | 260 |  | /carne/chuleton/ |
| corte tomahawk | 260 |  | /recetas/tomahawk-a-la-parrilla/ |
| entraña de vaca | 260 |  |  |
| nalga | 260 |  | /carne/nalga/ |
| tapa cuadril al horno | 260 |  | /recetas/tapa-de-cuadril-al-horno/ |
| ternera | 260 |  |  |
| aguja carne | 210 |  | /carne/aguja/ |
| carne aguja | 210 |  | /carne/aguja/ |
| corte americano carne | 210 |  | /guias/cortes-de-carne-vacuna/ |
| cortes de carne vacuna | 210 |  | /guias/cortes-de-carne-vacuna/ |
| costillar precio | 210 |  | /carne/costillar-de-cerdo/ |
| costillas de cerdo al horno | 210 |  | /recetas/costillas-de-cerdo-a-la-barbacoa/ |
| picanha grill | 210 |  |  |
| wagyu carne | 210 |  | /carne/wagyu/ |
| carne marucha | 170 |  | /carne/marucha/ |
| carne vacuna | 170 |  |  |
| colita cuadril al horno | 170 |  | /recetas/colita-de-cuadril-a-la-parrilla/ |
| colita de cuadril | 170 |  | /recetas/colita-de-cuadril-a-la-parrilla/ |
| colitadecuadril | 170 |  | /carne/colita-de-cuadril/ |
| costilla de vaca | 170 |  | /carne/costilla-de-vaca/ |
| costilla grill de cerdo | 170 |  |  |
| costillar de cerdo precio | 170 |  |  |
| costillar de novillo | 170 |  | /carne/costilla-de-vaca/ |
| marucha carne | 170 |  | /carne/marucha/ |
| matambre de vaca | 170 |  |  |
| osobuco precio | 170 |  | /carne/osobuco/ |
| picaña precio | 170 |  | /carne/picana/ |
| tapa cuadril precio | 170 |  | /carne/tapa-de-cuadril/ |
| tapa de cuadril | 170 |  | /recetas/tapa-de-cuadril-al-horno/ |
| arrollado de matambre | 140 |  | /recetas/matambre-arrollado/ |
| bife de vacio | 140 |  |  |
| bola de lomo precio | 140 |  | /carne/bola-de-lomo/ |
| costillar | 140 |  |  |
| costillar al horno | 140 |  | /recetas/costillar-de-cerdo-al-horno/ |
| costilla vacuna | 110 |  | /carne/costilla-de-vaca/ |
| matambre arrollado | 110 |  | /recetas/matambre-arrollado/ |
| precio de costilla en chortitzer | 110 |  |  |
| lomo de cerdo precio | 90 |  |  |
| matambre precio | 90 |  | /carne/matambre/ |
| pizza de matambre | 90 |  |  |
| bife angosto | 70 |  | /carne/bife-de-chorizo/ |
| carne wagyu precio | 70 |  | /carne/wagyu/ |
| matambre al horno | 70 |  |  |
| matambre de carne | 70 |  |  |
| matambre vacuno | 70 |  |  |
| precio de costilla | 70 |  |  |
| precio de costillar | 70 |  |  |
| carne matambre | 50 |  |  |
| costilla de chancho | 50 |  |  |
| costilla el kilo | 50 |  |  |
| costillar de res | 50 |  |  |
| matambre a la pizza al horno | 50 |  | /recetas/matambre-a-la-pizza/ |
| matambre al horno relleno | 50 |  | /recetas/matambre-arrollado/ |
| matambre arrollado hervido | 50 |  | /recetas/matambre-arrollado/ |
| matambre de cerdo a la pizza | 50 |  | /recetas/matambrito-de-cerdo-a-la-pizza/ |
| matambre de cerdo precio | 50 |  |  |
| matambre de pollo | 50 |  |  |
| matambre pizza horno | 50 |  |  |
| peceto el kilo | 50 |  | /carne/peceto/ |
| tapa cuadril de cerdo | 50 |  |  |
| tomahawk precio | 50 |  | /carne/tomahawk/ |
| carne cuadril | 40 |  | /carne/tapa-de-cuadril/ |
| carne tapa cuadril | 40 |  |  |
| costilla de cerdo a la olla | 40 |  |  |
| costilla madurada | 40 |  |  |
| entraña precio | 40 |  | /carne/entrana/ |
| asar costillas | 30 |  |  |
| bife de chorizo precio | 30 |  |  |
| carne costilla | 30 |  |  |
| carne de wagyu precio | 30 |  |  |
| carne vacio precio | 30 |  | /carne/vacio/ |
| colita cuadril precio | 30 |  | /carne/colita-de-cuadril/ |
| colita de cuadril al horno | 30 |  | /recetas/colita-de-cuadril-a-la-parrilla/ |
| costilla asada | 30 |  |  |
| costilla de lomo | 30 |  |  |
| costilla vacuna al horno | 30 |  |  |
| costillas de vaca al horno | 30 |  |  |
| matambre a la olla | 30 |  |  |
| matambre arrollado de la abuela | 30 |  |  |
| matambre atado | 30 |  |  |
| matambre precio por kilo | 30 |  |  |
| matambre que es | 30 |  |  |
| matambre relleno de carne | 30 |  |  |
| precio de carne wagyu | 30 |  | /carne/wagyu/ |
| tiras de costilla | 30 |  |  |
| tomahawk carne precio | 30 |  |  |
| bola de lomo carne | 20 |  |  |
| caldo de matambre | 20 |  |  |
| carne bola de lomo | 20 |  | /carne/bola-de-lomo/ |
| carne tomahawk precio | 20 |  |  |
| cortes de carnes premium | 20 |  |  |
| cortes premium de carne | 20 |  |  |
| costilla a la olla | 20 |  |  |
| costilla al horno con papel aluminio | 20 |  |  |
| costilla de cerdo agridulce | 20 |  |  |
| costilla de cerdo cruda | 20 |  |  |
| costilla de oveja | 20 |  |  |
| costilla de res precio | 20 |  |  |
| costilla deshuesada | 20 |  |  |
| costillar a la olla | 20 |  |  |
| costillas a la estaca | 20 |  |  |
| costillas de oveja | 20 |  |  |
| costillas de ternera | 20 |  |  |
| lomo vacuno precio | 20 |  |  |
| matambre a la leche | 20 |  |  |
| matambre a la napolitana | 20 |  |  |
| matambre de cerdo al horno | 20 |  |  |
| matambre de cerdo que parte es | 20 |  |  |
| matambre de chancho | 20 |  |  |
| matambre de vaca precio | 20 |  |  |
| matambre vacuno a la pizza | 20 |  |  |
| pizza a la matambre | 20 |  |  |
| precio de la costilla | 20 |  |  |
| precio de peceto | 20 |  |  |
| precio de picaña | 20 |  |  |
| relleno de matambre | 20 |  |  |
| tapa de nalga | 20 |  | /carne/nalga/ |
| wagyu carne precio | 20 |  |  |
| bife ancho como preparar | 10 |  | /carne/bife-ancho/ |
| bife ancho precio | 10 |  | /carne/bife-ancho/ |
| bife ancho que es | 10 |  | /carne/bife-ancho/ |
| bife ancho que parte es | 10 |  | /carne/bife-ancho/ |
| bife ancho recetas | 10 |  | /carne/bife-ancho/ |
| bife ancho y bife angosto | 10 |  | /carne/bife-ancho/ |
| bife angosto con hueso | 10 |  |  |
| bife angosto precio | 10 |  |  |
| bife de costilla angosto | 10 |  |  |
| bola de lomo otros nombres | 10 |  | /carne/bola-de-lomo/ |
| bola de lomo parte de la vaca | 10 |  | /carne/bola-de-lomo/ |
| bola de lomo precio por kilo | 10 |  | /carne/bola-de-lomo/ |
| carne cuadril para que sirve | 10 |  |  |
| carne cuadril precio | 10 |  |  |
| coccion colita de cuadril al horno | 10 |  |  |
| cocinar colita de cuadril | 10 |  | /carne/colita-de-cuadril/ |
| cortes premium | 10 |  |  |
| **Group total** | **51,830** | | |

### B3. Cerdo, cordero y cabrito: 74 keywords, 16,940 searches/month

Grill angle: a la parrilla, a la estaca, al asador, ahumado. Oven rows stay with comida.com.py.

Added here (4 from round 6 and 1 from the merged KWP file): matambrito, matambritos, codillo, grasa de chancho precio, solomillo.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| bondiola de cerdo | 1900 |  | /recetas/bondiola-al-horno/ |
| bondiola | 1600 |  | /carne/bondiola-de-cerdo/ |
| cerdo | 1600 |  | /guias/cortes-de-cerdo/ |
| cordero | 1600 |  | /recetas/cordero-al-horno/ |
| panceta | 1600 |  | /recetas/panceta-crocante/ |
| lechón | 880 |  | /catering/lechon-para-eventos/ |
| lomito de cerdo | 720 |  |  |
| chuleta de cerdo | 590 |  | /recetas/chuletas-de-cerdo/ |
| matambrito de cerdo | 480 |  | /recetas/matambrito-de-cerdo-a-la-pizza/ |
| solomillo | 480 |  | /recetas/solomillo-de-cerdo/ |
| bondiola de vaca | 390 |  |  |
| carne de cerdo | 390 |  | /guias/cortes-de-cerdo/ |
| pernil de cerdo | 390 |  | /recetas/pernil-de-cerdo-al-horno/ |
| matambrito | 260 |  | /carne/matambrito-de-cerdo/ |
| matambritos | 260 |  | /carne/matambrito-de-cerdo/ |
| panceta de cerdo | 260 |  | /recetas/panceta-crocante/ |
| pernil | 210 |  | /recetas/pernil-de-cerdo-al-horno/ |
| solomillo de cerdo | 210 |  | /recetas/solomillo-de-cerdo/ |
| cabrito | 170 |  | /carne/cabrito/ |
| cerdo en ingles | 170 |  |  |
| carne de chancho | 140 |  | /guias/cortes-de-cerdo/ |
| carré de cerdo | 140 |  | /carne/carre-de-cerdo/ |
| cerdo iberico | 140 |  |  |
| queso de cerdo | 140 |  |  |
| bondiola de cerdo precio | 110 |  |  |
| carne de cordero | 110 |  | /recetas/cordero-al-horno/ |
| codillo de cerdo | 110 |  |  |
| codillos de cerdo | 110 |  |  |
| bondiolas de cerdo al horno | 90 |  |  |
| carne de cerdo precio | 90 |  |  |
| matambrito de cerdo a la pizza | 90 |  | /recetas/matambrito-de-cerdo-a-la-pizza/ |
| bondiola que es | 70 |  |  |
| cordero oveja | 70 |  | /carne/cordero/ |
| lechon precio | 70 |  | /carne/lechon/ |
| lechón precio | 70 |  | /carne/lechon/ |
| pernil de cerdo al horno | 70 |  | /recetas/pernil-de-cerdo-al-horno/ |
| tocino de cerdo | 70 |  |  |
| bondiola desmechada | 50 |  | /recetas/bondiola-desmechada/ |
| grasa de cerdo precio | 50 |  |  |
| lechon a la estaca | 50 |  | /carne/lechon/ |
| matambrito de cerdo precio | 50 |  | /carne/matambrito-de-cerdo/ |
| arrollado de cerdo | 40 |  |  |
| bacon es panceta | 40 |  | /carne/panceta/ |
| bacon panceta | 40 |  |  |
| lechon faenado | 40 |  |  |
| lechon vivo | 40 |  |  |
| lechón vivo | 40 |  |  |
| matambrito de cerdo al horno | 40 |  | /recetas/matambrito-de-cerdo-a-la-pizza/ |
| panceta bacon | 40 |  | /carne/panceta/ |
| pierna de cerdo precio por kilo | 40 |  |  |
| bondiola de cerdo que es | 30 |  |  |
| carne de chancho precio | 30 |  |  |
| cordero horno | 30 |  | /recetas/cordero-al-horno/ |
| paleta de cerdo precio | 30 |  |  |
| panceta de cerdo precio | 30 |  |  |
| panceta tocino | 30 |  |  |
| pechito de cerdo | 30 |  | /carne/costillar-de-cerdo/ |
| bondiola a la cerveza | 20 |  | /recetas/bondiola-desmechada/ |
| bondiola precio | 20 |  |  |
| codillo | 20 |  |  |
| grasa de chancho precio | 20 |  |  |
| lechon al horno | 20 |  | /recetas/lechon-al-horno/ |
| lechon entero | 20 |  | /carne/lechon/ |
| panceta cruda | 20 |  |  |
| panceta fresca | 20 |  |  |
| panceta precio | 20 |  |  |
| pernil de cerdo precio | 20 |  |  |
| pierna de cerdo precio | 20 |  |  |
| precio carne de cerdo hoy | 20 |  |  |
| precio de lechón de 10 kilos | 20 |  | /carne/lechon/ |
| ribs de cerdo | 20 |  |  |
| tocino de cerdo precio | 20 |  |  |
| cordero entero | 10 |  |  |
| cordero guisado | 10 |  |  |
| **Group total** | **16,940** | | |

### B4. Achuras, chorizo y embutidos: 2 keywords, 920 searches/month

Achuras and sausages were never properly measured: chorizo, morcilla, chinchulines, mollejas, riñón and "achuras" have no KWP rows (see Appendix A). The riñón row is a false positive (a juice for kidney stones, not meat). "cecinas" means cured meats. Pull a KWP round before relying on volume here.

Added here (1 from the merged KWP file): cecinas.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| cecinas | 880 |  |  |
| jugos para deshacer piedras riñon | 40 |  |  |
| **Group total** | **920** | | |

### B5. Pollo y pescado a la parrilla: 50 keywords, 16,250 searches/month

Most chicken rows are kitchen intent (al horno, rellena, frita, a la crema) and stay with comida.com.py; asado.com.py takes the grill angle (pollo entero a la parrilla, pata muslo, alitas a la parrilla) and the river fish grill technique. "dorado" is shared with brand and restaurant names.

Added here (30 from round 6 and 5 from the merged KWP file): suprema de pollo, alitas de pollo, alas de pollo, alitas, alita de pollo, ala de pollo, pollo fritas, pollo entero, alitas al horno, alas en el horno, pollo entero precio, suprema rellena, alitas de pollo al horno, alitas de pollo precio, suprema de pollo rellena, pollo entero al horno, pollo entero en el horno, pollo entero horneado, pata muslo, salsa búfalo, supremas napolitanas, alitas de pollo fritas, alas de pollo en salsa, pata muslo de pollo, receta con suprema de pollo, suprema de pollo a la crema, suprema de pollo a la mostaza, alitas picantes, salsa para alitas, alitas en freidora de aire, muslo de pollo, pechuga de pollo, pechuga de pollo precio, muslo de pollo precio, pechuga de pollo precio por kilo.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| dorado (mixed intent: fish and brands) | 2900 |  |  |
| surubí | 2900 |  | /guias/surubi/ |
| muslo de pollo | 1900 | 14.88–14.88 | /guias/cortes-de-pollo/ · /recetas/muslos-de-pollo-al-horno/ |
| milanesa de pollo | 1000 |  | /recetas/milanesas/ |
| pechuga de pollo | 1000 | 1.59–14.88 | /recetas/pechuga-de-pollo/ |
| suprema de pollo | 880 | 14.89–14.89 | /guias/cortes-de-pollo/ · /recetas/suprema-de-pollo-rellena/ |
| alas de pollo | 390 |  | /guias/cortes-de-pollo/ |
| alitas de pollo | 390 |  | /guias/cortes-de-pollo/ · /recetas/alitas-de-pollo-al-horno/ |
| pacu pescado | 390 |  | /guias/pescados-de-rio/ |
| pacú pescado | 390 |  | /guias/pescados-de-rio/ |
| ala de pollo | 320 |  |  |
| alita de pollo | 320 |  |  |
| alitas | 320 |  | /recetas/alitas-de-pollo-al-horno/ |
| pechuga de pollo precio | 320 | 1.09–14.88 |  |
| hamburguesa de pollo | 260 |  | /recetas/hamburguesa-de-pollo/ |
| pescado pacu | 260 |  | /guias/pacu/ |
| muslo de pollo precio | 210 |  |  |
| pacu pez | 210 |  | /guias/pacu/ |
| pollo fritas | 210 |  |  |
| carne de pollo | 170 |  |  |
| pollo entero | 170 |  | /guias/cortes-de-pollo/ |
| carne molida de pollo | 140 |  |  |
| alas en el horno | 110 |  |  |
| alitas al horno | 110 |  | /recetas/alitas-de-pollo-al-horno/ |
| pacú | 110 |  | /guias/pacu/ |
| surubi pez | 110 |  | /guias/surubi/ |
| pollo entero precio | 70 |  |  |
| suprema rellena | 70 |  | /recetas/suprema-de-pollo-rellena/ |
| alitas de pollo al horno | 50 |  | /recetas/alitas-de-pollo-al-horno/ |
| alitas de pollo precio | 50 |  |  |
| suprema de pollo rellena | 50 |  | /recetas/suprema-de-pollo-rellena/ |
| dorado de mar | 40 |  | /guias/dorado/ |
| pollo entero al horno | 40 |  |  |
| pollo entero en el horno | 40 |  |  |
| pollo entero horneado | 40 |  |  |
| el pacu | 30 |  | /guias/pacu/ |
| pata muslo | 30 |  | /guias/cortes-de-pollo/ |
| salsa búfalo | 30 |  |  |
| supremas napolitanas | 30 |  | /recetas/supremas-a-la-napolitana/ |
| alas de pollo en salsa | 20 |  |  |
| alitas de pollo fritas | 20 |  |  |
| pacu pescado de rio | 20 |  | /guias/pacu/ |
| pata muslo de pollo | 20 |  |  |
| pechuga de pollo precio por kilo | 20 |  |  |
| receta con suprema de pollo | 20 |  | /recetas/suprema-de-pollo-rellena/ |
| suprema de pollo a la crema | 20 |  | /recetas/suprema-de-pollo-rellena/ |
| suprema de pollo a la mostaza | 20 |  |  |
| alitas en freidora de aire | 10 |  | /recetas/alitas-de-pollo-al-horno/ |
| alitas picantes | 10 |  | /recetas/alitas-de-pollo-al-horno/ |
| salsa para alitas | 10 |  | /recetas/alitas-de-pollo-al-horno/ |
| **Group total** | **16,250** | | |

### B6. Carnicerías y precios: 37 keywords, 7,140 searches/month

Price rows: never publish a price number (house rule). Explain what changes the price. Butcher names are for the future directory only, never as content targets.

Added here (3 from the merged KWP file): precio de la res, falda precio por kilo, pavo precio.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| carniceria | 1900 |  |  |
| carniceria la familia | 720 |  |  |
| la familia carniceria | 720 |  |  |
| carniceria santa ana | 480 |  |  |
| carniceria jr | 210 |  |  |
| carniceria los amigos | 210 |  |  |
| carnicería 3 hermanos | 210 |  |  |
| los amigos carniceria | 210 |  |  |
| carne molida precio | 170 |  |  |
| carniceria aaa | 170 |  |  |
| carniceria el amigo | 170 |  |  |
| carniceria san antonio | 170 |  |  |
| carnicería aaa | 170 |  |  |
| carniceria el rancho | 140 |  |  |
| carniceria san isidro | 140 |  |  |
| carniceria san jose | 140 |  |  |
| carnicerias san jose | 140 |  |  |
| carnicería los hermanos | 140 |  |  |
| carnicería san jose | 140 |  |  |
| carnicería san miguel | 140 |  |  |
| precio de carne en frigorífico | 110 |  |  |
| chortitzer carne precio | 50 |  |  |
| molino de carne precio | 50 |  |  |
| pavo precio | 50 |  |  |
| carne precio | 40 |  |  |
| falda carne precio | 40 |  |  |
| lomito precio | 40 |  |  |
| precio de la carne | 40 |  |  |
| asada por kilo | 30 |  |  |
| carne de hamburguesa precio | 30 |  |  |
| carne de oveja precio | 30 |  |  |
| carne kobe precio | 30 |  |  |
| carne para hamburguesa precio | 30 |  |  |
| precio de la res | 30 |  |  |
| falda precio por kilo | 20 |  |  |
| precio de la carne hoy | 20 |  |  |
| carnicería online | 10 |  |  |
| **Group total** | **7,140** | | |

### B7. Platos con carne (recetas de cocina, más comida.com.py que asado): 36 keywords, 24,020 searches/month

Kitchen recipes: comida.com.py owns these. Listed so asado.com.py links out instead of duplicating.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| lomito | 4400 | 4.07–10.81 | /recetas/sandwich-de-lomito/ |
| carne | 3600 |  |  |
| estofado de carne | 1900 |  | /recetas/estofado-de-carne/ |
| hamburguesas caseras | 1300 |  | /recetas/hamburguesas-caseras/ |
| sandwich de lomito | 1300 |  | /recetas/sandwich-de-lomito/ |
| hamburgueseria | 1000 | 3.29–7.27 |  |
| lasaña de carne | 1000 |  | /recetas/lasana-de-carne/ |
| canelones de carne | 880 |  | /recetas/canelones/ |
| carne magra | 880 |  | /guias/carne-magra/ |
| magra carne | 880 |  | /guias/carne-magra/ |
| chuleta | 720 |  | /recetas/chuletas-de-cerdo/ |
| milanesas de carne | 720 |  | /recetas/milanesas/ |
| carne molida | 590 |  |  |
| croqueta de carne | 590 |  | /recetas/croquetas-de-carne/ |
| empanadas de carne | 590 |  | /recetas/empanadas-de-carne/ |
| pan de carne | 590 |  | /recetas/pan-de-carne/ |
| lomito árabe | 480 |  | /recetas/lomito-arabe/ |
| carne de caballo | 320 |  |  |
| hamburguesas gourmet | 320 |  |  |
| panes para hamburguesa | 320 |  |  |
| carne para asada | 260 |  |  |
| carne de hamburguesa | 170 |  |  |
| carne de kobe | 170 |  |  |
| carne de oveja | 170 |  |  |
| carne de vaca partes | 170 |  |  |
| carne kobe | 170 |  |  |
| hamburguesa de carne | 170 |  |  |
| carne de bufala | 140 |  |  |
| carne para hamburguesa | 140 |  |  |
| carne de búfalo | 20 |  |  |
| carne a domicilio | 10 |  |  |
| carne por mayor | 10 |  |  |
| cuánta carne por persona | 10 |  | /guias/cuanta-carne-por-persona/ |
| domicilios hamburguesas | 10 |  |  |
| hamburguesa a domicilio cerca de mí | 10 |  |  |
| hamburguesas a domicilio cerca de mí ubicación | 10 |  |  |
| **Group total** | **24,020** | | |

### B8. Marcas, restaurantes y "cerca de mí" (no apuntar con contenido propio, solo directorio): 33 keywords, 13,020 searches/month

Brands, restaurants and "cerca de mí": never target with content, never name in rendered text. Directory data only, later, with a source.

Added here (5 from the merged KWP file): carni, rapipollo, pavita sadia precio, kentucky fried chicken a domicilio, pollo a domicilio.

| keyword | volume | CPC low–high SEK | already on comida.com.py |
|---|---:|---|---|
| hamburguesas cerca de mi | 8100 | 5.50–14.25 |  |
| el dorado restaurante | 1300 |  |  |
| restaurante el dorado | 1300 |  |  |
| carni | 320 |  |  |
| hamburguesas de mcdonalds | 320 |  |  |
| hamburguesas mcdonald | 260 |  |  |
| hamburguesas mcdonalds | 260 |  |  |
| supermercado stock ofertas de carnes hoy | 260 |  |  |
| precio de costilla en superseis | 110 |  |  |
| rapipollo | 110 |  |  |
| hamburguesas delivery | 70 | 4.52–11.80 |  |
| ofertas de carnes hoy | 70 |  |  |
| ofertas de carnes en supermercados hoy | 50 |  |  |
| pollo asado cerca de mi | 50 |  |  |
| precio de carne en stock | 50 |  |  |
| asado delivery | 40 | 2.85–8.75 |  |
| delivery asado | 40 | 2.85–8.75 |  |
| ofertas de carnes | 40 |  |  |
| precio de peceto en stock | 40 |  |  |
| carne en oferta | 30 |  |  |
| hamburguesas delivery cerca de mi | 30 |  |  |
| delivery de hamburguesas | 20 |  |  |
| lomitos delivery | 20 |  |  |
| pavita sadia precio | 20 |  |  |
| precios de carnes en superseis | 20 |  |  |
| salemma precios de carnes | 20 |  |  |
| carnicería delivery | 10 |  |  |
| hamburguesa a domicilio cerca de mi | 10 |  |  |
| hamburguesas delivery 24 horas | 10 |  |  |
| kentucky fried chicken a domicilio | 10 |  |  |
| lomo vetado oferta | 10 |  |  |
| pollo a domicilio | 10 |  |  |
| pollo asado delivery | 10 |  |  |
| **Group total** | **13,020** | | |

## APPENDIX C: comida.com.py pages to cross-link

All paths are on https://comida.com.py and were live in the comida repo on 2026-09-25. Titles are the page H1s. Link to them with descriptive anchors, one to three comida links per asado page, never a sitewide block. Do not copy their text.

### Hubs, catering and shop

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /carne/ | Cortes de carne en Paraguay: guía y recetas (hub) | asado /cortes/ hub intro |
| /catering/ | Servicio de catering para eventos (hub) | event CTAs |
| /catering/asado-para-eventos/ | Asado para eventos con parrillero: cortes, guarniciones y cantidades | every "para eventos / para muchas personas" mention; calculator result box |
| /catering/lechon-para-eventos/ | Lechón para eventos y fiestas de fin de año | /cortes/lechon/ |
| /catering/hamburguesas-para-eventos/ | Hamburguesas para eventos: estación, mini burgers y cantidades | /recetas/hamburguesas-a-la-parrilla/ |
| /presupuesto/ | Pedí un presupuesto de catering (form) | event CTAs, only via the two catering pages above |
| /mercado/carne/ | Packs de asado y de carne para la semana | calculator result box ("pedí la carne") only if Anton confirms the Mercado is open |

### Guides

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /guias/asado-a-la-parrilla/ | Cómo hacer un asado a la parrilla, paso a paso | /parrilla/como-hacer-un-asado/ (overlap: see §4) |
| /guias/cuanta-carne-por-persona/ | Cuánta carne por persona para un asado | /calculadora-de-asado/ (party planning angle) |
| /guias/parrillada/ | Parrillada completa: qué lleva, para cuántos y cómo servirla en casa | /parrilla/parrillada/ |
| /guias/churrasqueria/ | Churrasquería y espeto corrido: qué es, cómo funciona y cómo hacerlo en casa | /parrilla/churrasco-en-espeto/ |
| /guias/parrilla-para-asadito/ | Parrilla para asadito: tipos, tamaños y cómo elegir la tuya | /parrilla/tipos-de-parrilla/ |
| /guias/cortes-de-carne-vacuna/ | Cortes de carne vacuna: mapa, nombres y cómo cocinar cada uno | /cortes/ hub, /glosario-de-cortes/ |
| /guias/cortes-de-cerdo/ | Cortes de cerdo: para qué sirve cada uno y cómo cocinarlo | /cerdo-cordero-y-cabrito/ hub |
| /guias/cortes-de-pollo/ | Cortes de pollo: suprema, pata muslo, alitas y pollo entero | /pollo-y-pescado/pollo-a-la-parrilla/ |
| /guias/carne-magra/ | Carne magra: qué cortes elegir y cómo cocinarlos sin que se sequen | cut pages of lean cuts |
| /guias/cuanta-comida-por-persona/ | Cuánta comida calcular por persona en un evento | /calculadora-de-asado/ (side dishes) |
| /guias/pescados-de-rio/ | Pescados de río de Paraguay: cómo elegirlos, limpiarlos y cocinarlos | /pollo-y-pescado/pescado-de-rio-a-la-parrilla/ |
| /guias/surubi/ | Surubí: el pez del río Paraguay, de la pescadería a la mesa | /pollo-y-pescado/pescado-de-rio-a-la-parrilla/ |
| /guias/pacu/ | Pacú: el pescado de río más sabroso para la parrilla | /pollo-y-pescado/pescado-de-rio-a-la-parrilla/ |
| /guias/dorado/ | Dorado de río: cómo elegir, limpiar y cocinar este pescado | /pollo-y-pescado/pescado-de-rio-a-la-parrilla/ |
| /mercado-de-abasto/ | Mercado Central de Abasto de Asunción: guía para comprar bien | buying guides (where to shop in Asunción), sparingly |

### Meat cuts (all 32 comida.com.py cut pages)

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /carne/aguja/ | Aguja: el corte de carne vacuna, qué es y cómo cocinarlo | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/bife-ancho/ | Bife ancho: qué es, cómo se diferencia de los otros bifes y cómo hacerlo | /cortes/ojo-de-bife/ |
| /carne/bife-de-chorizo/ | Bife de chorizo: el bife grueso con su borde de grasa | /cortes/bife-de-chorizo/ |
| /carne/bola-de-lomo/ | Bola de lomo: qué parte es, para qué sirve y cómo cocinarla | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/bondiola-de-cerdo/ | Bondiola de cerdo: el corte veteado para parrilla, horno y sándwich | /cortes/bondiola/ |
| /carne/cabrito/ | Cabrito: cómo elegirlo y cómo asarlo sin que se seque | /cortes/cabrito/ |
| /carne/carnaza/ | Carnaza negra y carnaza blanca: qué son y para qué sirven | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/carre-de-cerdo/ | Carré de cerdo: qué es, cómo elegirlo y cómo hacerlo jugoso | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/chuleton/ | Chuletón de vaca: qué corte es y cómo hacerlo a la parrilla | /cortes/tomahawk/ |
| /carne/colita-de-cuadril/ | Colita de cuadril: qué es y cómo hacerla al horno o a la parrilla | /cortes/colita-de-cuadril/ |
| /carne/cordero/ | Cordero: cortes, diferencias con la oveja y cómo asarlo | /cortes/cordero/ |
| /carne/costilla-de-vaca/ | Costilla de vaca: asado de tira, costillar entero y cómo hacerlos a la parrilla | /cortes/asado-de-tira/ |
| /carne/costillar-de-cerdo/ | Costillar de cerdo: a la parrilla o al horno, tierno hasta el hueso | /cortes/costillar-de-cerdo/ |
| /carne/cuadrada/ | Cuadrada: qué corte de carne es y cómo cocinarla | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/entrana/ | Entraña: el corte fino y sabroso que se hace en minutos | /cortes/entrana/ |
| /carne/garron/ | Garrón de vaca: qué es, su relación con el osobuco y cómo cocinarlo | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/lechon/ | Lechón: cómo encargarlo para una fiesta y cómo asarlo | /cortes/lechon/ |
| /carne/marucha/ | Marucha: qué carne es, de dónde sale y cómo cocinarla | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/matambre/ | Matambre: el corte fino para hacer a la pizza o arrollado | /cortes/matambre/ |
| /carne/matambrito-de-cerdo/ | Matambrito de cerdo: qué es y cómo hacerlo a la parrilla o a la pizza | /cortes/matambrito-de-cerdo/ |
| /carne/nalga/ | Nalga: qué corte es, la tapa de nalga y cómo cocinarla | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/ojo-de-bife/ | Ojo de bife: el bife marmoleado del bife ancho | /cortes/ojo-de-bife/ |
| /carne/osobuco/ | Osobuco: el corte con hueso y médula para la olla | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/panceta/ | Panceta de cerdo: fresca, ahumada, bacon y cómo cocinarla | /cortes/panceta/ |
| /carne/peceto/ | Peceto: el corte magro del vitel toné y la carne al horno | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/pernil-de-cerdo/ | Pernil de cerdo: cómo elegirlo, adobarlo y hacerlo al horno | glossary and /cortes/ hub (not a grill cut: oven, pot or milanesa) |
| /carne/picana/ | Picaña: qué es, cómo elegirla y cómo hacerla a la parrilla | /cortes/picana/ |
| /carne/tapa-de-asado/ | Tapa de asado: qué es y cómo cocinarla para que quede tierna | /cortes/tapa-de-asado/ |
| /carne/tapa-de-cuadril/ | Tapa de cuadril: qué es, su relación con la picaña y cómo cocinarla | /cortes/picana/ |
| /carne/tomahawk/ | Tomahawk: el bife ancho con hueso largo y cómo hacerlo a la parrilla | /cortes/tomahawk/ |
| /carne/vacio/ | Vacío: el corte para asado lento con grasa crocante | /cortes/vacio/ |
| /carne/wagyu/ | Carne de wagyu: qué es, qué son las cruzas y cómo cocinarla | /glosario-de-cortes/ |

### Grill recipes already on comida.com.py (do not duplicate the H1; link from the matching asado page)

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /recetas/asado-de-tira-a-la-parrilla/ | Asado de tira a la parrilla: la costilla de vaca, bien dorada | matching /cortes/ or /recetas/ page |
| /recetas/picana-a-la-parrilla/ | Picaña a la parrilla, entera y jugosa | matching /cortes/ or /recetas/ page |
| /recetas/vacio-a-la-parrilla/ | Vacío a la parrilla, tierno y con grasa crocante | matching /cortes/ or /recetas/ page |
| /recetas/entrana-a-la-parrilla/ | Entraña a la parrilla, jugosa y en minutos | matching /cortes/ or /recetas/ page |
| /recetas/colita-de-cuadril-a-la-parrilla/ | Colita de cuadril a la parrilla con salmuera y salsa criolla | matching /cortes/ or /recetas/ page |
| /recetas/tomahawk-a-la-parrilla/ | Tomahawk a la parrilla, grueso y jugoso | matching /cortes/ or /recetas/ page |
| /recetas/costillas-de-cerdo-a-la-barbacoa/ | Costillas de cerdo a la barbacoa con salsa casera | matching /cortes/ or /recetas/ page |
| /recetas/chuletas-de-cerdo/ | Chuletas de cerdo jugosas, a la sartén o a la parrilla | matching /cortes/ or /recetas/ page |
| /recetas/hamburguesas-caseras/ | Hamburguesas caseras jugosas, a la plancha o a la parrilla | matching /cortes/ or /recetas/ page |
| /recetas/panceta-crocante/ | Panceta crocante al horno o a la parrilla | matching /cortes/ or /recetas/ page |
| /recetas/surubi-a-la-parrilla/ | Surubí a la parrilla: postas jugosas con salsa criolla | matching /cortes/ or /recetas/ page |
| /recetas/pacu-a-la-parrilla/ | Pacú a la parrilla: abierto en mariposa o relleno | matching /cortes/ or /recetas/ page |
| /recetas/chipa-asador/ | Chipa asador o chipa kavure: receta sobre brasas | matching /cortes/ or /recetas/ page |

### Oven, pot and kitchen meat recipes (comida.com.py owns these; link out from cut pages: "¿Al horno o a la olla?")

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /recetas/asado-a-la-olla/ | Asado a la olla: cómo hacerlo tierno y con buena salsa | cut page of the same cut |
| /recetas/tapa-de-cuadril-al-horno/ | Tapa de cuadril al horno con papas doradas en su grasa | cut page of the same cut |
| /recetas/matambre-a-la-pizza/ | Matambre a la pizza, tierno y gratinado al horno | cut page of the same cut |
| /recetas/matambre-arrollado/ | Matambre arrollado relleno, hervido y dorado al horno | cut page of the same cut |
| /recetas/matambrito-de-cerdo-a-la-pizza/ | Matambrito de cerdo a la pizza, directo al horno | cut page of the same cut |
| /recetas/bondiola-al-horno/ | Bondiola de cerdo al horno con naranja y ajo | cut page of the same cut |
| /recetas/bondiola-desmechada/ | Bondiola desmechada para sándwiches | cut page of the same cut |
| /recetas/costillar-de-cerdo-al-horno/ | Costillar de cerdo al horno, tierno y glaseado | cut page of the same cut |
| /recetas/lomo-de-cerdo-al-horno/ | Lomo de cerdo al horno, jugoso y con salsa de mostaza | cut page of the same cut |
| /recetas/pernil-de-cerdo-al-horno/ | Pernil de cerdo al horno, glaseado, para Navidad | cut page of the same cut |
| /recetas/lechon-al-horno/ | Lechón al horno, jugoso y con el cuero crocante | cut page of the same cut |
| /recetas/cordero-al-horno/ | Cordero al horno: pierna lenta con batatas | cut page of the same cut |
| /recetas/peceto-al-horno/ | Peceto al horno con salsa de cebolla y vino | cut page of the same cut |
| /recetas/vitel-tone/ | Vitel toné: peceto con salsa de atún para las fiestas | cut page of the same cut |
| /recetas/osobuco-a-la-olla/ | Osobuco a la olla con tomate, locote y vino | cut page of the same cut |
| /recetas/estofado-de-carne/ | Estofado de carne con papas, casero y bien espeso | cut page of the same cut |
| /recetas/puchero-paraguayo/ | Puchero paraguayo: receta con osobuco, mandioca y choclo | cut page of the same cut |
| /recetas/solomillo-de-cerdo/ | Solomillo de cerdo con salsa de mostaza y crema | cut page of the same cut |
| /recetas/sandwich-de-lomito/ | Sándwich de lomito completo, hecho en casa | cut page of the same cut |
| /recetas/milanesas/ | Milanesas de carne y de pollo, crocantes y caseras | cut page of the same cut |
| /recetas/alitas-de-pollo-al-horno/ | Alitas de pollo al horno, crocantes sin freír | cut page of the same cut |
| /recetas/muslos-de-pollo-al-horno/ | Muslos de pollo al horno, con piel crocante | cut page of the same cut |
| /recetas/pollo-al-horno/ | Pollo al horno con papas o mandioca, jugoso y dorado | cut page of the same cut |
| /recetas/pechuga-de-pollo/ | Pechuga de pollo jugosa a la plancha | cut page of the same cut |
| /recetas/suprema-de-pollo-rellena/ | Suprema de pollo rellena de jamón y queso | cut page of the same cut |
| /recetas/dorado-al-horno/ | Dorado al horno: el pescado de río entero con papas y locote | cut page of the same cut |

### Side dishes for an asado (link from /recetas/ hub and "qué servir con el asado" sections)

| path | title (H1) | link from on asado.com.py |
|---|---|---|
| /recetas/sopa-paraguaya/ | Sopa paraguaya: la receta tradicional, por kilo | recetas hub, asado guides |
| /recetas/chipa-guazu/ | Chipa guazú: receta con choclo fresco, por kilo | recetas hub, asado guides |
| /recetas/ensalada-rusa/ | Ensalada rusa casera, cremosa y en su punto | recetas hub, asado guides |
| /recetas/ensalada-de-papa/ | Ensalada de papa con huevo y cebollita de hoja | recetas hub, asado guides |
| /recetas/papas-al-horno/ | Papas al horno crocantes por fuera y tiernas por dentro | recetas hub, asado guides |
| /recetas/pan-al-ajo/ | Pan al ajo: crocante, perfumado y listo en 15 minutos | recetas hub, asado guides |
| /recetas/croquetas-de-mandioca/ | Croquetas de mandioca con queso Paraguay | recetas hub, asado guides |
