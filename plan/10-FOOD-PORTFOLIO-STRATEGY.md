# 10 — Food portfolio strategy: one hub or many domains?

Written by Claude Fable 5.1, 2026-09-19. Research inputs: `research/kwp-parsed.csv` and `research/kwp-summary.md` (Codex gpt-6-astra, low), `research/domain-and-serp-check.md` (Codex gpt-6-astra, low, partially blocked; availability and SERP gaps filled by the manager in the built-in browser the same evening, see §A.1 and §B.1 of that file's addendum). Everything labelled *estimate* or *extrapolation* is exactly that.

## 0. Recommendation (the decision)

**Do not build a domain portfolio now. Do not buy any domain now. Deepen comida.com.py alone through the pilot, and put the "blog" on comida as a small set of buying guides, not recipes.**

Reasons in one breath: the only demand you have measured is catering and chef (about 1,400 and 280 searches a month, settings unconfirmed); recipe, meat, honey and supermarket demand has **zero** rows in your data; Paraguayan recipe SERPs are already held by an actively maintained Paraguayan recipe site (comidasparaguayas.com, 102 URLs, updated September 2026), a live ad-funded recetas.com.py, three national newspapers and Argentine giants; and recipe traffic in Paraguay would earn ad revenue in the tens of dollars a month. A satellite-domain portfolio would cost you the one thing you are short of, hours, and return nothing until comida itself is proven.

The only second property worth building in the next 90 days is **asado.com.py as a three-page tool microsite** (asado calculator plus event-asado capture), and only after the catering pilot passes its gate.

## 1. Demand, with evidence

### 1.1 What is real data

Source: your Keyword Planner paste, 500 rows, parsed with zero failures. Settings (location, language, network, date range) are **not visible in the paste**, so every number below is provisional until you re-export with Paraguay and Spanish confirmed.

| Family | Monthly searches (sum of rows) | Reading |
|---|---:|---|
| Catering (106 rows) | 2,830 | Real, but brands and variants inflate it. Generic core: catering 720, servicio de catering 480, catering para eventos 140, price queries 20–30, occasions ~10 each. Usable core about **1,400/month**. |
| Chef (24 rows) | 2,320 | Mostly "chefs" as a word (1,000) and misspellings. Real private-chef demand: chef a domicilio 140 (+ the "chef domicilio" variant, same demand). Usable core about **150–280/month**. |
| Delivery generic (262 rows) | 4,910 | "delivery cerca de mi" 720 etc. Immediate-fulfilment intent that a referral site cannot serve. Not addressable. |
| Delivery navigational, brand restaurant, celebrity chef | 3,500 | Not addressable. |
| Recipes | **0 rows** | No evidence either way. |
| Meat / butchers | **0 rows** | No evidence either way. |
| Honey | **0 rows** | No evidence either way. |
| Supermarkets | **0 rows** | One ambiguous signal (pedidos market, 20). |

Rows sharing KWP estimates cannot be summed cleanly; the "usable core" figures are my de-duplication, not KWP's.

### 1.2 What the SERPs show (DuckDuckGo, Paraguay locale, 2026-09-19; Google served a CAPTCHA, Bing returned scrambled results)

- **receta de chipa**: Argentine sites (saborargento, paulinacocina, Clarín, airedesantafe, Infobae, directoalpaladar) plus comidasparaguayas.com at position 4. No Paraguayan site above it.
- **sopa paraguaya receta**: comidasparaguayas.com first, then paulinacocina, directoalpaladar, recetascreativas, okdiario.
- **mbeju receta**: comidasparaguayas.com first, then RecetasGratis, saborargento, paulinacocina.
- **comida tipica paraguaya**: travel blogs, comidasparaguayas.com, Wikipedia, recetasparaguay.com.
- **catering asuncion**: filas.com.py (a directory), manorapido.com, then individual caterers (Sava, Talleyrand, Cordazzo, Medialunas Calentitas, La Vienesa) and a Facebook page. No comparison or referral site owns this query. **This is the open slot.**
- **chef a domicilio asuncion**: manorapido.com, servipy.com.py, miummium.com, takeachef.com. Two global chef marketplaces already rank; a second open slot but thinner.
- **carniceria asuncion**: Facebook pages and two generic directories (buscoinfo, directorio.com.py). Weak SERP, but the intent is "where is one near me", not a content intent.
- **miel pura paraguay**: supermarket product pages (hf.com.py, Salemma, Biggie), Facebook sellers, one brand. Commerce intent, served by shops.
- **restaurantes en asuncion**: Tripadvisor ×4, highclass.com.py. Not winnable with a directory.
- **cuanta carne por persona para asado**: all Argentine and Chilean calculators (hacerasado.com.ar, tuasado.cl, frigorificosada). **No Paraguayan calculator exists.** This is the one recipe-adjacent slot that is both open and commercially adjacent to catering.

### 1.3 Existing Paraguayan food media (competition for a recipe blog)

| Site | Size and state |
|---|---|
| comidasparaguayas.com | 102 URLs in sitemap, 62 published Feb 2025, then steady 1–8 per month through Sep 2026. Categorised (típicas, postres, caldos, técnicas). Actively maintained. Already ranks 1st for sopa paraguaya and mbeju. |
| recetas.com.py | Live, ad slots ("PUBLICIDAD"), 28 internal links, no sitemap, copy reads AI-assisted with invented personas. The exact-match domain you would want is taken and already doing the thing you are considering. |
| recetasparaguay.com | Live, bilingual, ~56 links, top-10 lists. |
| ABC Color, Última Hora, La Nación | National newspaper food sections, active through Aug–Sep 2026. |
| Cocina Rica | Magazine + TV, own site. |
| La Chica Paraguaya (ex Tembi'u Paraguay) | Personal blog since 2010. |

### 1.4 What is missing and what is a guess

Missing: a second KWP export, Paraguay-only, with the seed lists in `research/kwp-summary.md` (recipes, meat, honey, supermarkets, restaurants). It costs nothing and answers the portfolio question with data. Do it before any domain decision.

Guesses, flagged: Paraguay has roughly 7.5M people and a search market a small fraction of Argentina's; when Spanish-language recipe volumes are quoted (tens of thousands a month for "receta de chipa" across LatAm), the Paraguay-located share is plausibly **1–5k a month for the top three national dishes combined** *(extrapolation from population ratio, not measured)*. Even at the top of that range it is a small audience, and it is already served.

## 2. One hub or many sites

| Option | Ranking reality in .com.py | Maintenance | Cannibalisation | Thin-site risk | Verdict |
|---|---|---|---|---|---|
| (a) comida.com.py as one hub, guides in `/guias/` | Best. Every guide passes authority to the catering money pages on the same host; one Search Console property; one build. Exact-match generic domain helps the hub, not subfolders, but Google ranks pages, not domains. | One engine, one deploy, one CRM source. Marginal cost per guide is the article itself. | None if one owner per intent (guide → money page). | None. | **Do this.** |
| (b) Portfolio of exact-match domains, each with own content | Exact-match domain bonus is small and has been for a decade; in .com.py it is a modest CTR help at best *(extrapolation from global SEO consensus)*. Each new domain starts at zero authority and needs its own 20+ pages to be taken seriously. | Multiplies everything: builds, deploys, Search Console, imagery credits, legal pages, WhatsApp routing, your attention. | High: "asado para eventos" on asado.com.py vs `/catering/asado/` on comida is exactly the overlap already flagged in 08. | High: five domains with 6 pages each are five thin sites; interlinking them is a footprint Google discounts. | **No.** |
| (c) Hybrid: hub plus thin satellite capture pages redirecting or linking to the hub | A 301 redirect passes nothing useful from an empty domain. A one-page satellite linking to the hub is a doorway page by Google's definition and adds no authority. | Low per satellite but non-zero (renewal, DNS, TLS, legal, form testing). | Same overlap as (b). | The satellites themselves are the thin sites. | **No, with one exception:** a satellite that is a genuine tool (asado calculator) is not a doorway; it earns links on its own. |

Decision: (a), with asado.com.py as the single tool-satellite exception once the gate in §6 passes.

## 3. Money, property by property

Paraguayan display CPMs: AdSense RPM for Spanish-language content in Paraguay is in the order of **USD 0.3–1.5 per 1,000 pageviews** *(estimate extrapolated from LatAm tier-3 benchmarks; not measured for Paraguay)*. Affiliate: Amazon does not serve Paraguay; local supermarket chains (Stock, Superseis, Biggie, Salemma) do not run affiliate programmes; there is no local affiliate network of scale. That kills the classic recipe-blog model before it starts.

| Property | How it would earn | Honest range | Note |
|---|---|---|---|
| comida.com.py (catering/chef referral) | 10% commission on introduced events; later per-lead fee; later directory listings | Pilot sensitivity from 01: **−240k to +720k Gs contribution per 20 requests**; a single wedding is 2–4M Gs commission | The only property with a proven-in-principle model. Everything else is optional. |
| comida.com.py `/guias/` | Indirect only: feeds the form; display ads would earn **USD 5–40/month** at 10–30k pageviews | Not a revenue line | Worth it only as a feeder. |
| asado.com.py | Event-asado leads into the same CRM (commission); calculator as link magnet; possible per-lead fee from parrilleros | **0–300k Gs/month** in year one *(estimate)* | Cheapest second property because it reuses the engine and the CRM. |
| Recipe site (recetas-type, any domain) | Display ads only | **USD 10–80/month** at 30–100k pageviews, after 12+ months *(estimate)* | Cheap traffic, near-zero money. This does change the plan: recipes are cut, guides stay. |
| miel.com.py | Only own commerce (buy honey from an apiary, sell online) or one producer's lead page | Unknown; a different business (stock, delivery, DINAVISA registration for a food product) | Domain resale value low: "miel" buyers are small producers. |
| carniceria.com.py / carnes.com.py | Butcher directory with paid listings; lead page for one butcher chain; price-of-meat index with ads | **0–200k Gs/month** *(estimate)*; the price index is the only content with a Paraguayan hook (carne prices are national news) | Intent is local-navigational; Facebook and Maps already serve it. |
| supermercados.com.py | Offers aggregator with ads; no affiliate exists | **USD 0–30/month** *(estimate)* | Chains publish their own offers; scraping their PDFs is a legal grey zone and a maintenance treadmill. |
| restaurant.com.py | Directory; sponsored listings | Near zero organically against Tripadvisor; plural is taken; singular is the English spelling | Skip. |
| Domain resale | comida.com.py itself is the only domain here with meaningful resale value (a delivery or food group would want it; 247.com.py took delivery.com.py for a launch) | Unknown, plausibly **USD 2–10k** *(pure guess)* | Do not plan on it, but it is the floor under the whole venture. |

## 4. Content engine

**Volume needed to matter.** For the hub: **15–25 guides in 90 days**, each answering a "cuánto / cuánta / qué incluye / qué preguntar" question and ending on the form. For a recipe site to displace comidasparaguayas.com it would need 150+ articles, real photos, and a year, for the money in §3. Not worth it.

**Cost per article** *(estimates from the imagery manifest and the Codex dispatch pattern)*:

| Item | Range |
|---|---|
| Your time: brief, one source check, edit of a Codex draft, publish and verify | 45–90 minutes |
| Higgsfield credits: 1–2 images at 1k (1 credit each), hero at 2k (1.5) | 1–3.5 credits |
| Codex: one dispatch at low effort | minutes, no cash cost to you beyond quota |

Twenty guides in 90 days is therefore 15–30 hours and 20–70 credits. Affordable. Two hundred recipes is not.

**Quality bar (every guide must have all five, or it is not published):**
1. A Paraguayan number: guaraní prices from a real supplier quote, gram-per-person quantities, or a headcount table. Never a global average.
2. A named source and a verification date, stored the same way `prices.mjs` stores price entries.
3. A tool: table, calculator or checklist the reader can act on.
4. A real photo where a photo carries information (a "bocaditos por ciento" tray, not a stock flatlay).
5. One next action tied to the intent (form with occasion prefilled, or WhatsApp with the prefilled message).

**Editorial spine:** *"El número que necesitás para decidir."* Not "how to cook it" but "how much, for how many, at what price, from whom". This is what none of the recipe sites do and what newspapers cannot maintain.

**How this avoids the mass-AI-content discount:** every page carries data that only exists because you collected it (quotes, quantities, response times), photos that only exist because a partner sent them, and a form that converts. Google's helpful-content signals reward pages that exist for the reader; pages whose only ingredient is a model's prior get discounted, and recetas.com.py's invented personas are the local example of what to avoid.

**Why not a chipa page:** the recipe SERP is owned; the only chipa page with a business behind it is "chipa por mayor para eventos: precio por ciento, cuántas por persona, quién la hace en Asunción". That is a bocaditos guide, and it belongs on comida.

**First ten guides, in order:** cuánta comida por persona en un evento · cuántos bocaditos por persona · cuánta carne por persona para asado (if asado.com.py is not built, it lives here) · cuánta bebida por persona · cuánto cuesta un catering para 50 / 100 personas (the precios page, once three quotes exist) · qué preguntar a un catering antes de contratar · menú de fin de año para empresas · coffee break: qué incluye y cuánto dura · catering vs cocinar vos mismo · checklist de comida para un evento empresarial.

## 5. Architecture

**Confirmed: static generation plus one PHP lead handler on Hostinger is right**, and stays right through everything in this document.

What would force a runtime, specifically:
- **Accounts** (provider logins to update availability, client logins to track quotes): needs sessions and a database. Not in the next 6 months; providers update by WhatsApp.
- **Live search over a large index**: not before ~2,000 pages, and even then Pagefind (static, client-side index built at build time) covers it without a server.
- **A CMS for a non-technical editor**: only if someone other than you writes. Codex plus the content modules is your CMS.
- **Marketplace transactions** (payments, escrow, disputes): a different business and a different stack. Not planned.
- **Real-time anything** (availability calendars, live chat beyond WhatsApp): not planned.

Two things to fix in the current setup that are not runtime questions:
- **The repo is not a git repository** (both Codex sessions reported `fatal: not a git repository`). Initialise it before P1c; the revision gate depends on `git status`.
- **Content modules are the CMS**: guides and future asado pages must use the same `sites/<id>/content` envelope (id, kind, source, verifiedAt, published) so the verifier can reject unsourced numbers the way it rejects unpublished prices.

## 6. Sequencing: 90 days with gates

| Window | Do | Gate to pass before the next window |
|---|---|---|
| **Days 0–14** | Finish P1 (engine, 20 routes, form, PHP, deploy). Initialise git. Search Console + GA4 live. P0 commercial items: operator/RUC path with the accountant, 2 partners per top-3 format (empresarial, fin de año, bodas). **Run the second KWP export** with the seed lists in `research/kwp-summary.md`, Paraguay + Spanish confirmed, and save it. | **G1:** site live with form → CRM verified on Hostinger (5 test cases in 04 §9), ≥6 signed partners, KWP export saved. |
| **Days 15–45** | Pilot: Ads 400k Gs / 14 days, run to 20 qualified requests, weekly reconciliation, hours logged. Publish guides 1–6 (one every 5 days). No new domains, no asado. | **G2:** ≥20 qualified requests **and** ≥3 bookings with deposit (or ≥1M Gs booked commission), **and** partner median response ≤ 48 h. Fail → §7. |
| **Days 46–75** | Guides 7–14. Backlog occasions from 08 in ranked order, one per week. **asado.com.py microsite** (3 pages: calculadora de asado, asado para eventos → comida form with source id, cortes y cantidades), built with the same engine as `sites/asado/`. | **G3 (domain purchase gate):** the second KWP export shows ≥2,000 Paraguay-located searches/month for a family **and** a named counterparty who will pay for leads or listings in that family **and** comida has collected (not booked) ≥2M Gs commission. Only then buy one domain. |
| **Days 76–90** | Decide with data: deepen (viandas line, provider directory, per-lead fee test) versus a second property. Write `11-Q1-DECISION.md`. | — |

**asado.com.py specifically:** keep it, do not redirect it, do not leave it dark. It becomes a tool microsite in days 46–75, not before, and only if G2 passes. Its whole job is the calculator (an open SERP with zero Paraguayan competitors) and event-asado leads into comida's CRM. If G2 fails, asado.com.py gets a single capture page pointing to whatever comida becomes, and nothing more.

## 7. Kill criteria

**Kill the portfolio idea** (any of these):
- The second KWP export shows under 5,000 combined Paraguay-located monthly searches across recipes, meat, honey and supermarkets. Then the audience does not exist at a size worth a domain each.
- The first ten guides on comida reach 10k pageviews/month and display-test RPM comes in under USD 1. Then content traffic in Paraguay cannot pay for itself and only ever works as a feeder.
- comida fails G2. A second property cannot fix a first one that does not convert.

**Kill or pivot comida's referral model** (after 60 days live, ≥400k Gs ads spent, ≥300 organic clicks):
- Fewer than 10 qualified requests, or zero bookings, or partners miss more than half their deadlines. Then Paraguayan caterers will not pay for introductions, or buyers will not use a form.

**What to do instead if it dies:**
1. Turn comida.com.py into a curated directory with flat annual listings (the model Codex ranked second) and keep the guides; cost to run near zero.
2. If even listings do not sell, hold the domain as the asset it is and offer it to the food-delivery and supermarket groups that are visibly buying generic .com.py names.
3. Do not, in either case, start a recipe site; the evidence in §1.3 does not change with the catering outcome.

## 8. Domain ranking (availability checked live on nic.py, 2026-09-19; registration and renewal Gs 160,000/year per nic.py's tariff page as reported by Codex)

| Domain | Status today | Call | Reason |
|---|---|---|---|
| comida.com.py | yours, in build | **keep, deepen** | The hub. Everything else is subordinate. |
| asado.com.py | yours, dark (502/timeout) | **build later (G2)** | Tool microsite: calculator + event-asado capture. Open SERP, same engine, same CRM. |
| carniceria.com.py | available | **buy later (G3)** | Only credible non-catering play: meat price index + butcher listings. Needs KWP evidence and a paying butcher. |
| carnes.com.py | available | **buy later (G3), only as a pair with carniceria** | Same intent; one owner. Never build both. |
| miel.com.py | available | **buy later, only if you want own commerce** | Earns only by selling honey. Not a media or lead play. |
| viandas.com.py | available | **skip** | Viandas is a line on comida (`/viandas/`), not a domain. Recurring meals need a supplier first. |
| parrilla.com.py | available | **skip** | Duplicate of asado.com.py. |
| supermercados.com.py | available | **skip** | No affiliate economy, chains publish their own offers, scraping treadmill. |
| restaurant.com.py | available | **skip** | English spelling; plural is taken; Tripadvisor owns the SERP. |
| restaurantes.com.py | **taken** | — | Not available. |
| gastronomia.com.py | available | **skip** | Vague intent, no money model. |
| comer.com.py, cena.com.py, almuerzo.com.py | available | **skip** | Generic words without a query family behind them. |
| postres.com.py, panaderia.com.py | available | **skip** | Fragmented product intent; bakeries live on Instagram. |
| tembiu.com.py | available | **skip** | Cultural vanity; recipe play is dead per §3. |
| recetas.com.py, receta.com.py, cocina.com.py, cocinar.com.py, chipa.com.py, catering.com.py, chef.com.py, mercado.com.py, ofertas.com.py, menu.com.py, supermercado.com.py, carne.com.py, delivery.com.py | **taken** | — | recetas.com.py is a live ad-funded recipe site; chef.com.py is a marketing consultancy placeholder; delivery.com.py is a 247.com.py launch page; cocina.com.py serves a blank page. |

Domains I would have proposed that you had not listed: carniceria (above, best of the rest), tembiu (skip), parrilla (skip). None changes the decision.

## 9. Where I am extrapolating from bigger markets

- Exact-match-domain effect size (§2): global SEO consensus, not measured in .com.py.
- Display RPM range (§3): LatAm tier-3 benchmarks; Paraguay is not separately published.
- Paraguay-located recipe volumes (§1.4): population-ratio guess. The second KWP export replaces it.
- Cost-per-article (§4): derived from your own manifest credit prices and observed Codex turnaround, not from a completed guide.
- Resale value of comida.com.py (§3): a guess anchored only on the fact that a delivery operator bought delivery.com.py.
- Helpful-content discount behaviour (§4): Google's published guidance, applied to Paraguay by assumption.

## 10. Summary for the road

The ambition "take over food in Paraguay" is not falsified, it is just premature. The measured market is catering; the open slots are the comparison query and the asado calculator; the recipe space is occupied and unpaid. Win the catering hub first. If the second keyword export and the pilot both say yes, the next domain is carniceria, not recetas, and it is bought in November, not tonight.

---

## 11. Revision after KWP round 2 (2026-09-20, five lists × top 100, see `research/kwp-round2-summary.md`)

Two conclusions above were wrong and are corrected here; the decision (one hub, no new domains) gets stronger, not weaker.

**Corrected: recipe demand is not small.** Deduped core about 25–35k searches/month in Paraguay (sopa paraguaya 8,100, chipa guazu 6,600, mbeju 6,600, comida típica 4,400, plus a long tail). §1.4's 1–5k guess was off by an order of magnitude. Recipes go back into the plan as an audience layer on comida, not as a separate domain. The Paraguayan angle that no existing site owns: recipes sized by kilo (receta de chipa de 2 kilos 320, sopa paraguaya 1kg 480, 500 gramos 170), chipa en licuadora 260, chipa en guaraní 170, mestizo variants. Monetisation stays weak (§3 unchanged), so recipes are for audience, brand and internal links, not for ads.

**Corrected: asado.com.py.** Meat is a 20–28k/month cluster (cuts, asado a la olla 1,900, prices of cuts ~1,800) and it belongs with recipes and the calculator on one host. asado.com.py should 301 to `comida.com.py/asado/` rather than become a microsite; splitting authority across two domains for one topic was the mistake §6 was warning against.

**New: restaurants are the biggest editorial cluster** (about 11–14k/month once "cerca de mi" and brand rows are excluded): restaurantes en asunción 6,600, lugares para comer/almorzar/cenar, mejor restaurante, cuisine + asunción, zone pages (villa morra, centro). Held by Tripadvisor and highclass.com.py, both weak on zone and cuisine specifics. This is the second revenue module after catering (featured listings), and the largest source of authority for the domain.

**Unchanged:** supermarkets (brand navigation, offers cluster ~1.5k, no affiliate economy) and honey (informational ~4k, commerce ~100) stay out. cocinas, chefs, mercados, menus .com.py are available and are all subfolders of comida: skip.

**Revised sequence:** catering launch and pilot (unchanged) → restaurant guide module (month 2–3) → `/asado/` and `/carne/` with cuts, weekly price table and calculator, asado.com.py redirected (month 3–4) → recipes at scale (month 4–9). Gates in §6 still apply; G3 (buying a domain) is now unlikely to ever be needed.
