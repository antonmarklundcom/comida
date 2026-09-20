# 11 — How comida.com.py makes money, and what it becomes worth

Written by Claude Fable 5.1, 2026-09-20, after KWP round 2 (`research/kwp-round2-raw.txt`, `research/kwp-round2-summary.md`). Supersedes the money sections of `01` and `10` where they differ. Constraint set by Anton: months 1–6 are about cash flow with no upfront investment; own product only later.

## 0. The answer in one paragraph

For the next six months comida.com.py is a referral business with three lines that need no stock, no kitchen and no capital: **catering, chef a domicilio, and viandas subscriptions sold on behalf of a partner**. The "pre-made food boxes for busy professionals" idea is the viandas line, and it fits the referral model exactly: a vianda business already cooks and delivers, you bring the subscribers and the brand, and you take a commission or a per-subscriber fee. Mathem-style grocery delivery and a premium-beef box are real ideas for the Paraguayan market but they are inventory, cold chain and drivers, the opposite of no-upfront-investment; they go on the list for month 12+ and only as white-label partnerships, never as your own stock. Valuation comes from being the largest food audience in Paraguay on the generic domain, which is built by restaurants, meat and recipes content in months 3–12, not by any single revenue line.

## 1. Answers to the specific ideas

| Idea | Verdict for months 1–6 | Why | When and how it could work |
|---|---|---|---|
| Sell groceries like mathem.se to Gran Asunción | **No** | Requires warehouse or dark store, cold chain, drivers, working capital for stock, and it competes with Superseis online, Stock online, Super Más online and PedidosYa Market, all with 2,900 down to 70 branded searches a month and their own fleets. Supermarket search demand is 95% brand navigation. | Month 12+, only as a comparison or offers layer on the site that sends orders to the chains' own shops. Not as your own logistics. |
| Grass-fed premium beef boxes | **No, and rethink the pitch** | Paraguayan beef is overwhelmingly pasture-raised; "grass fed" is not a differentiator here the way it is in Sweden. The premium niche that exists is cuts, ageing and origin (picaña 2,900, bife de chorizo 1,900, ojo de bife 1,300, tomahawk 880, wagyu 320 + 210). Selling boxes yourself means buying meat, cold storage and DINAVISA registration for a food product. | Month 6–12 as a **referral line for one boutique carnicería or frigorífico** (they cut, pack, deliver; you sell the box on `/carne/` and take a margin). Month 12+ as a comida-branded box fulfilled by them (white label) if the referral line converts. |
| Pre-made food boxes for busy professionals: healthy, fitness, weight loss, muscle | **Yes, as the viandas referral line** | Demand exists but is modest: viandas 590, viandas saludables 210 + 210, comida a domicilio 170. Fitness, weight-loss and muscle-meal volumes are not in your exports yet (add them to the next KWP list). Supply exists: dozens of vianda businesses sell weekly plans on Instagram in Asunción. Recurring revenue is the attraction. | Now. Sign one or two vianda partners on commission (10–15% of the weekly plan) or a per-subscriber bounty (e.g. 50–100k Gs per new weekly subscriber). Build `/viandas/` with plan comparison, price per meal, zones, order form to CRM. |
| Catering and chef a domicilio | **Yes, first priority** | Highest ticket per lead, the site is built for it, partners are the only dependency. Demand is small (about 1.5k/month) but every booking is 100k to 4M Gs commission. | The pilot in `05` and `08`, unchanged. |

## 2. Revenue lines, ranked for the next six months

All figures are **estimates**, monthly, in guaraníes, at month 6 if the line is executed as written. None is a forecast.

| # | Line | Mechanism | Investment | Month-6 estimate | Depends on |
|---|---|---|---|---|---|
| 1 | Catering referral | 10% of first introduced event | Zero; your hours | 0.5–3M Gs | 6+ signed partners, pilot passes G2 |
| 2 | Chef a domicilio referral | 10% or flat fee per dinner | Zero | 0.2–1M Gs | One chef partner |
| 3 | Viandas subscription referral | Commission or bounty per subscriber | Zero | 0.3–1.5M Gs | One vianda partner; 20–60 subscribers |
| 4 | Restaurant featured listings | Restaurants pay to be featured on zone, cuisine and "dónde comer" pages | Zero cash; 30–60 restaurant pages first, then sales calls | 0–2M Gs by month 6, 3–5M Gs by month 12 | Restaurant module live (§4), pages ranking |
| 5 | Meat sponsorship | One carnicería or frigorífico sponsors `/carne/` price table and cuts guide | Zero | 0–1M Gs | Meat module live, weekly price table maintained |
| 6 | Display ads | AdSense on recipes and guides | Zero | 50–500k Gs | 30k+ pageviews |
| 7 | Newsletter and Instagram sponsorship | Weekly "qué comer esta semana" with one sponsor | Zero | 0–500k Gs | 2k+ subscribers |

Realistic month-6 total if lines 1–3 work and 4–6 are starting: **1–6M Gs a month**. Realistic month-12 run rate with all lines: **5–12M Gs a month**. Anton's minimum return floor from `06` (40k Gs/hour) means the referral lines must stay under about 25 hours a week of qualification work; the CRM and the 300k Gs concierge threshold exist to enforce that.

## 3. Valuation logic

A referral site earns a small multiple of profit. An audience earns a strategic price. comida.com.py should be built so that the second is true by month 12–18.

**What a buyer pays for**, in order: (1) the generic domain itself; (2) monthly Paraguayan food audience, measured in Search Console and GA4; (3) recurring revenue lines (listings, subscriptions) that continue without Anton; (4) a partner network (caterers, chefs, viandas, restaurants) with contracts; (5) a newsletter or Instagram audience that can be moved.

**Likely buyers**: delivery platforms (PedidosYa, Bolt Food), a media group (ABC, Última Hora, La Nación have food sections but no food brand), a supermarket chain wanting a content and recipe layer, 247.com.py or whoever else is assembling generic .com.py names, or a regional food-media roll-up.

**Ranges** (guesses, labelled as such, before any real comparable exists):

| Stage | What is true | Indicative value |
|---|---|---|
| Today | Domain plus a plan | USD 2–10k, domain resale only |
| Month 12, referral only | 3–8M Gs/month profit, no audience | USD 15–40k (24–40× monthly profit, standard content-site multiples, extrapolated from bigger markets) |
| Month 18, audience built | 100k+ monthly visits, #1 Paraguayan food site, 10+ paying restaurants, 50+ vianda subscribers, 5k newsletter | USD 60–150k strategic; profit multiple would say less, audience says more |
| Month 36, own products via white label | Comida-branded viandas and beef boxes fulfilled by partners, 300k+ visits | USD 150–400k, only if recurring revenue is real and documented |

The single biggest valuation lever is **traffic on the generic domain**, and the two content modules that deliver it are restaurants (11–14k editorial searches/month) and recipes (25–35k). The meat module (20–28k) is both traffic and a natural sponsor magnet.

## 4. The modules, in build order

| Order | Module | Pages | Revenue | Content that cannot be generated |
|---|---|---|---|---|
| 1 | Catering + chef (live now) | 20 | Lines 1–2 | Real quotes, partner documents |
| 2 | Viandas | 5–8: hub, saludables, para oficina, fitness (if demand confirms), precios, pedido | Line 3 | Partner plans and prices, real photos |
| 3 | Restaurants Asunción | 40–60: zones (Villa Morra, Centro, Carmelitas, Recoleta, Las Lomas, San Lorenzo, Luque), cuisines (parrilla/churrasquería, coreana, japonesa, china, mexicana, italiana, pizza, hamburguesas gourmet), occasions (dónde cenar, dónde almorzar, desayuno, con niños, romántico), rankings | Line 4 | Visits, verified hours and price range, permissioned photos. This is the module that needs your feet or a paid local collaborator. |
| 4 | Carne and asado | 30–40: cuts guide, asado a la olla, asado calculator, weekly price table, carnicerías directory; asado.com.py 301s here | Line 5, plus catering asado leads | Weekly prices from supermarket flyers (a 30-minute routine), photos of cuts |
| 5 | Recipes | 60–100 over 6 months, Paraguayan angle first: by kilo, en licuadora, en guaraní, mestizo | Line 6, audience | Tested recipes with real photos; the kilo-scaled versions must be tested at least once |
| 6 | Newsletter and Instagram | Weekly | Line 7, audience | Your voice |

## 5. Six-month cash-flow plan (no upfront investment)

| Month | Do | Cash target (estimate) |
|---|---|---|
| 1 | Launch catering site, sign 6+ partners, run pilot ads (400k Gs, the only spend). Sign 1 vianda partner and 1 chef. Build `/viandas/`. Register nothing. | 0–500k Gs |
| 2 | Pilot to 20 requests. Viandas page live, first subscribers via Instagram and the site. Start restaurant module: first 10 pages (Villa Morra, parrillas, dónde cenar). | 0.3–1.5M Gs |
| 3 | Restaurant module to 30 pages. First 5 sales calls for featured listings (offer a free 60-day trial to the first 5, then 300–500k Gs/month). Meat module started: cuts guide, calculator, redirect asado.com.py. | 0.5–2.5M Gs |
| 4 | Weekly price table live. First meat sponsor conversation. Recipes 1–15 (sopa paraguaya by kilo, chipa by kilo, mbeju mestizo, chipa guazú). | 1–3M Gs |
| 5 | Restaurants to 50 pages, listings converting. Recipes 16–35. Newsletter launched. | 1–4M Gs |
| 6 | Review: which referral lines cleared the 40k Gs/hour floor; which content modules rank. Decide white-label viandas and beef box for months 7–12. | 1–6M Gs |

Gates from `10` §6 still apply. No domain purchase. No own stock. No employee before month 6; a paid local restaurant scout on a per-visit fee is allowed in month 3 if line 4 needs it.

## 6. Next KWP list (for the fitness and boxes question, and the seams)

viandas fitness, viandas para bajar de peso, comida fit a domicilio, dieta a domicilio, meal prep asuncion, vianda saludable semanal, comida saludable a domicilio, plan de comidas semanal, viandas para oficina, lunch box saludable, carne a domicilio, delivery de carne, box de carne, cortes premium, carne madurada, dry aged paraguay, asado a la olla receta, cuanta carne por persona, receta de chipa 2 kilos, chipa en licuadora, restaurantes villa morra, donde cenar en asuncion, restaurantes romanticos asuncion, restaurantes con parque para niños asuncion, brunch asuncion, desayuno asuncion, empanadas, tortas, comida arabe asuncion, sushi asuncion.

Top 500 each; three lists (viandas and boxes; meat commerce and cooking; restaurant seams).

## 7. Kill and pivot rules for the money plan

- A referral line that does not clear 40k Gs/hour after 60 days of real leads gets demoted to a directory listing (partner pays a flat fee or nothing) and stops taking your hours.
- Restaurant listings: if five trial restaurants do not convert to at least two paying by day 90 of the trial, the module stays as pure audience and the money comes from sponsorship and ads instead.
- Viandas: if no partner will accept commission or bounty, do not build the page; the demand is too small to fight for.
- Own product (boxes, groceries): never before a white-label partner has delivered 100 orders through the site without complaint.
