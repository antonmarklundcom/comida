# comida.com.py — plan index

Status 2026-09-19 (v2): plan written by Fable 5.1, critiqued by Codex gpt-6-astra (`codex-input/CODEX-CRITIQUE.md`), critique merged by Fable. **Read `08-V2-DECISIONS.md` first**: it records what was accepted, the KWP evidence, the 20-route launch manifest and the open questions. Files 01–06 were edited to match; where they still disagree with 08, 08 wins. No site code exists yet.

Changelog v1 → v2: launch cut from 24 to 20 routes with one city page; commission 10% on the first introduced event with 90-day attribution; public price numbers removed until three supplier quotes exist; traffic forecast replaced by a 20-request pilot; GBP dropped; engine adaptation specified against the real prestamo verifier; form shortened; schema and legal references corrected.

## The one-paragraph thesis

comida.com.py is an exact-match generic domain for the whole food vertical in Paraguay. Long term it can become media (recipes, guides, rankings), a delivery/viandas product, or a marketplace. Short term it must pay for itself: the catering category in Paraguay is fragmented (hundreds of small caterers, no dominant booking brand, most discovery happens on Instagram and word of mouth), which means a fast, well-structured lead site that answers "cuánto cuesta / quién lo hace / cómo lo contrato" can rank and capture high-ticket event leads (bodas, 15 años, eventos empresariales, fin de año) and sell them, at a commission or a fee, to vetted caterers. The same engine captures chef a domicilio, viandas and delivery leads as secondary lines. Everything built for cash flow (page templates, calculators, city pages, CRM routing) is also the foundation for the media play, so nothing is throwaway.

## Read in this order

0. `08-V2-DECISIONS.md` — the merged critique, KWP summary, launch manifest, open questions. Overrides the files below.
1. `01-MASTER-PLAN.md` — positioning, business model, economics, roadmap short→long term, brand, risks.
2. `02-SEO-AND-SITEMAP.md` — the full URL tree (launch set + growth set), keyword clusters incl. long-tail catering subcategories, city pages, internal linking, schema, content calendar.
3. `03-OFFER-AND-FUNNEL.md` — what the visitor is offered, lead capture and qualification, WhatsApp scripts, partner (caterer) model and agreement terms, CRM pipeline.
4. `04-BUILD-SPEC.md` — stack, page templates, calculators, lead endpoint, tracking, verification, file tree.
5. `05-EXECUTION.md` — phases P0–P6 with definition of done and the Codex dispatch order.
6. `06-OPEN-QUESTIONS.md` — decisions for Anton with the defaults the plan assumes.
7. `07-CODEX-REVIEW-BRIEF.md` — the prompt to paste into Codex/ChatGPT to critique this plan.
8. `09-HANDOFF-SONNET-DIRECTS-CODEX.md` — how to run the build without Fable: Sonnet directs, Codex builds P1a–P1d, work split, P0-ANSWERS template.
9. `prompts/` — DESIGN-1..5 (Claude Design, Opus 5 high, home page desktop + mobile; 4 = asado, 5 = saludable), IMAGES-PREVIEW (fills the five Claude Design exports with Higgsfield images), OPUS-DESIGN-WITH-IMAGES (Opus Code session designs the home page image-first with Higgsfield), P1e-APPLY-DESIGN (Codex applies the approved design to the built site), SONNET-DIRECTOR, P1 (full task list), P1a–P1d (dispatch chunks), REVIEW.

## Relationship to sister domains

- `asado.com.py` (plan `C:\Claude 1\ASADO-PLAN.md`, code `C:\Claude 1\asado-com-py`) owns asador privado / carne / parrillas. comida.com.py keeps `/catering/asado/` as a capture page and links out; leads land in the same CRM.
- `babyshower.com.py` (plan `C:\Claude 1\babyshower\plan`) owns baby shower event packages. comida.com.py keeps `/catering/baby-shower/` and links out.
- Rule: comida = hub and generic intent; sister domain = the deep specialist page. Never duplicate body copy across the two.

## Non-negotiables carried from the house skills

Static HTML on Hostinger, no CI minutes · WhatsApp-first, voseo · no fabricated proof, reviews or partner logos · AI images labelled illustrative · prices in one config with a version date · leads to VenderCRM via the tenant endpoint · WhatsApp click is not a lead · Codex at low effort unless Anton says otherwise · Fable never spawned.

10. `10-FOOD-PORTFOLIO-STRATEGY.md` — portfolio vs single hub decision (2026-09-19): deepen comida alone, guides not recipes, asado.com.py redirected to /asado/ (revised in §11), no domain purchases before gate G3.
11. `11-REVENUE-AND-VALUATION.md` — money plan after KWP round 2 (2026-09-20): months 1–6 referral only (catering, chef, viandas partner), then restaurants, carne, recipes for audience and valuation; grocery and beef boxes only as white label after month 12. Raw KWP pastes in `research/`.
