# 12 — Growth to the top food site in Paraguay, and what it earns (Opus 5.5, 2026-09-24)

Supersedes the sequencing in `10` §6 and `11` §4-5 where they differ. Anton's direction (2026-09-24): **SEO traffic and time on site first**; catering, viandas and later fresh-food delivery (possibly a Node.js shop) monetise that audience. KWP rounds 1-3 are Paraguay data (Swedish Ads account, bids in SEK).

## 1. The demand we are going after (KWP, monthly, deduplicated by hand)

| Cluster | Examples (volume) | Approx. demand | Built on 2026-09-24 |
|---|---|---|---|
| Paraguayan recipes | sopa paraguaya 8,100 · chipa guazú 6,600 · mbeju 6,600 · comida típica 4,400 · tortilla paraguaya 2,400 · chipa soo 1,900 · ingredientes para chipa 1,600 | 30-40k | 12 recipes + comida típica guide |
| Home and festive recipes | strogonoff de pollo 8,100 · vitel toné 4,400 · canelones 3,600 · ensalada rusa 3,600 · ensalada césar 2,900 · estofado 1,900 · asado a la olla 1,900 | 35-45k | ~30 recipes |
| Meat cuts | picaña 2,900 · osobuco 2,900 · peceto 1,900 · bondiola 1,900 · bife de chorizo 1,900 · entraña 1,300 · ojo de bife 1,300 | 15-20k | 10 cut guides + asado calculator |
| Mercado de Abasto | mercados de abasto 12,100 · mercado central de abasto 1,600 | ~14k | 1 guide at `/mercado-de-abasto/` |
| Dairy | queso paraguay 1,600 (+390 precio) · yogurt griego 3,600 (brand-heavy) | 2-5k | queso Paraguay guide |
| Restaurants (editorial) | restaurantes en asunción 6,600 · lugares para comer/cenar/almorzar · cuisine + asunción | 11-14k | reserved; needs visits |
| Catering + bocaditos | catering 720 · servicio de catering 480 · bocaditos 70+70 | ~2k | 20 catering pages + 4 calculators |
| Viandas | viandas 590 · viandas saludables 420 · meal prep 140 | ~1.2k | 4 pages, noindex until a partner signs |
| Fresh delivery (verdulería, carne a domicilio) | almost all 10s | < 200 | nothing: not an SEO market |

Total addressable ≈ 110-140k searches a month. Excluded on purpose: weight-loss queries (déficit calórico 880 and similar; health advice with no professional author), "cerca de mí" and brand navigation (Maps and brand sites win those).

## 2. Traffic path (estimates, not a forecast)

| Month | Pages | Organic visits/month | What makes the jump |
|---|---|---|---|
| 3 | ~80 | 2-6k | Indexing; Paraguayan long tail (chipa por kilo, sopa de 1 kilo) ranks first |
| 6 | ~150 | 8-20k | Recipe photos, 100+ recipes, Mercado de Abasto page, internal links |
| 12 | ~300 | 25-50k | Restaurants module (40-60 pages), weekly Abasto price table, seasonal pushes (Semana Santa, fin de año) |
| 24 | ~500 | 60-120k | Authority on the generic domain; Instagram/TikTok/Pinterest from the recipe library |

Time on site is designed in: kilo/portion scaler, saved checklists, step timers, modo cocina (screen stays on), print, "¿Qué cocino hoy?", calculators, related cards on every page.

**The three things that move the curve most:** (1) real photos for the top 30 recipes (Recipe rich results need an image; today only sopa paraguaya has one), (2) 100+ more recipes with the Paraguayan angle (por kilo, en tatakua, para Semana Santa), (3) the restaurants module, which needs visits or a paid local collaborator.

## 3. Revenue and profit (USD per month, estimates at ~7,500 Gs/USD)

Profit = revenue minus direct costs, before Anton's time.

| Line | Mechanism | Month 6 | Month 12 | Month 24 |
|---|---|---|---|---|
| Catering referral | 10% of the first introduced event (avg commission ~40-100 USD) | 0-300 | 100-800 | 300-1,500 |
| Chef a domicilio | 10% or flat fee per dinner, once a chef signs | 0-50 | 0-150 | 50-300 |
| Viandas referral | bounty or 10-15% per subscriber, once a partner signs | 0-100 | 40-250 | 100-500 |
| Sponsorships | one carnicería on `/carne/`, one quesería on the queso guide, Abasto vendors | 0 | 100-500 | 300-1,500 |
| Restaurant featured listings | 40-65 USD/month each, 5-15 restaurants | 0 | 0-300 | 200-1,000 |
| Display ads | AdSense, Paraguay page RPM ~0.8-2 USD | 5-30 | 40-100 | 130-350 |
| **Subtotal, no inventory** | | **5-480** | **280-2,100** | **1,080-5,150** |
| Fresh delivery (own sales) | revenue 3-40k USD at month 24; net margin 5-12% after delivery and waste | 0-500 profit | 150-1,500 profit | 400-4,000 profit |

Median case: about **600-1,200 USD/month profit at month 12** and **2,500-4,500 at month 24**. Split of month-12 profit in the median case: catering ~30%, fresh delivery ~25%, sponsors and listings ~25%, viandas ~10%, ads ~10%. The site's resale value tracks traffic more than profit (see `11` §3).

## 4. Fresh food delivery (cheese, meat, vegetables around the Mercado de Abasto)

KWP round 3 says people do not search for it (verdulería a domicilio, carne a domicilio: 10/month each). So it cannot be an SEO business; it is a **conversion layer on the audience**: 12,100 people a month search for the Mercado de Abasto and 30k+ for recipes whose ingredients you would deliver.

Recommended path, no inventory:
1. **Month 1-2, WhatsApp pilot**: a weekly "canasta del Abasto" (verduras + frutas), plus queso Paraguay and one meat pack. Orders close Wednesday, you buy Thursday at the Abasto, deliver Friday/Saturday in Asunción, Fernando de la Mora, Luque, San Lorenzo, Lambaré. Payment on order (transfer or QR). Promote from the Mercado de Abasto guide, the queso guide and every recipe ("¿Te llevamos los ingredientes?").
2. **Gate to scale**: 40+ orders a week with repeat customers and a net margin above 8% after delivery and waste.
3. **Then the shop**: a `/mercado/` catalogue with weekly prices from a price file (PHP + MySQL on Hostinger is enough up to ~50 orders a day); move to Node.js/Next.js with accounts and subscriptions only when repeat ordering needs it. The static content site stays as the SEO engine either way.

Legal and food safety before selling meat or dairy: reselling packaged, registered products is simpler than cutting or repacking; confirm with an accountant or lawyer which registrations apply (DINAVISA, municipal permits), plus invoicing.

## 5. Next build phases (after this session)

| Phase | What | Done when |
|---|---|---|
| G1 photos | 30 recipe photos (Higgsfield, 1k, ~30-45 credits) — **needs Anton's OK** | 30 recipe pages have `image`, Recipe schema carries it |
| G2 recipes 2 | +60 recipes: remaining Paraguayan dishes (so'o josopy, kiveve, locro, pastel mandi'o, mbaipy, kaguyjy, dulce de mamón, pira caldo) and top home dishes from round 3 | validator 0 errors, duplicates 0 |
| G3 Abasto prices | weekly price table from the official list, with source and date — **needs Anton's decision on AGENTS rule 5** | table live, updated weekly |
| G4 restaurants | 40-60 pages from visits | each with source and visit date |
| G5 delivery pilot | order form + WhatsApp flow + `/mercado/` landing | 40 orders/week gate |
