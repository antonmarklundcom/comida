# 08 — v2 decisions (Fable merge of the Codex critique, 2026-09-19)

Source: `codex-input/CODEX-CRITIQUE.md` (Codex gpt-6-astra, 4.1k words) plus the Keyword Planner paste saved at `research/kwp-paste-raw.txt`. Each critique point below is marked accepted, partly accepted or rejected, with the reason. Files 01–06 and `prompts/P1.txt` were edited to match; where a file and this page disagree, this page wins.

## What the KWP data says (settings unconfirmed, see Q1)

| Term | Monthly searches |
|---|---|
| catering | 720 |
| servicio de catering | 480 |
| catering para eventos | 140 |
| chef a domicilio (+ "chef domicilio" variant, same demand) | 140 |
| servicio de catering para 100 personas precios | 30 |
| servicio de catering precios por persona | 20 |
| delivery asado | 40 |
| catering para bodas / catering boda / buffet para bodas / catering empresarial | ~10 each |

Everything else with volume is delivery-navigational (delivery cerca de mi 720, PedidosYa, KFC) or celebrity chefs. Implication: the site is a small-market niche. Win the generic hub, the price page and the Asunción page; occasion pages are long-tail captures worth building only because they are cheap, not because they carry volume.

## Accepted (changes made)

1. **Engine adaptation is a real task, not copy-and-strip.** prestamo's verifier bans forms, PHP, CRM references and Offer; config accepts only four site IDs. 04 §1/§8 and P1 now specify a `sites/comida/` adapter, `--site=comida`, and a replacement verifier rule set.
2. **Promises gated on supply.** No "todo Paraguay", no "2–3 presupuestos en 24 h" until partners have answered real briefs. Launch copy: "Revisamos tu solicitud y confirmamos disponibilidad en nuestro horario de atención." Coverage = Gran Asunción only.
3. **Forecast replaced by pilot metrics.** 40 leads/month and 3–5k visits removed. Pilot target: 20 qualified requests, tracked as requests → quotes → booked (deposit) → completed → commission collected.
4. **Operator, invoicing and incident handling resolved in P0**, not deferred behind an "editorial" framing. Matching is a commercial activity from day one.
5. **GBP removed.** Lead-gen intermediaries are ineligible.
6. **Commission: 10% of the first introduced event's service revenue**, excluding taxes, refunds and pass-through venue costs. Attribution 90 days on the named event, not 12 months on the client. Direct operational conversation allowed. Weekly reconciliation. Word "reseller" dropped.
7. **Concierge threshold:** expected commission ≥ 300k Gs (about 3M Gs service value). Below that, one direct referral. Per-lead fee (40k Gs) tested only after quality is proven. "Verificado" is never sold.
8. **Prices stay internal** until three written 2026 supplier quotes exist. Public copy says "depende del menú, la cantidad de personas y el servicio." Price entries carry unit, minimum, inclusions, source and verification date.
9. **Launch set = 20 routes** (manifest below). Velorio, tercer tiempo, despedida, food truck, cuisine pages, desayunos, 10 extra cities, viandas, delivery, recipes and the quantity calculator all move to backlog.
10. **Form shortened** to contact, occasion, date (or flexible), zone, guests (numeric), budget optional. Details collected in qualification. Supplier application is its own form and CRM lead type.
11. **A/B/C rule** re-based on expected commission and coverage, not headcount.
12. **Schema:** no `Offer.priceRange`; Service + Organization + BreadcrumbList; FAQ kept as visible content with no rich-result expectation.
13. **Route manifest** is the single source of page counts; sitemap lists indexable canonical routes only (excludes 404 and noindex gracias).
14. **PHP forwarder:** absolute private config path outside `public_html`, server-side validation, no public log fallback, no "recibido" message without confirmed CRM persistence. Real endpoint contract to be read from the live VenderCRM before build.
15. **Legal references updated:** DINAVISA (not INAN/SENAVE generic), Ley 1334, Ley 4868, Ley 7593/2025 data protection with counsel confirming commencement. No Ley 6534 cookie framing.
16. **Long-term path:** curated catering directory/marketplace operated manually; recipes are a separate later bet. Stable provider/service IDs and outcome fields designed now.

## Partly accepted

- **Quantity calculator ("cuánta comida por persona")**: deferred to P3, not cut. It is the cheapest link magnet the site can have; it just must not block launch.
- **Chef a domicilio at launch**: page built and published only if one chef partner is signed in P0; otherwise built but noindexed and hidden from nav.
- **Occasion ranking**: adopted as build order. Bocaditos promoted into the launch set; cumpleaños kept.

## Rejected

- **"Do not state a 10% lead-loss ceiling for the cuts."** Agreed the number was unproven; the claim is removed rather than re-argued. Listed here only so the point is closed.
- Nothing else rejected. Codex's build-spec section was verified against `prestamo-com-py/engine` and is correct.

## Launch route manifest (v2, 20 indexable routes + 404)

```
/                                  home
/catering/                         hub (generic intent: catering, servicio de catering)
/catering/eventos-empresariales/
/catering/fin-de-ano/
/catering/bodas/
/catering/15-anos/
/catering/coffee-break/
/catering/bocaditos/
/catering/cumpleanos/
/catering/asuncion/                only city page
/chef-a-domicilio/                 published only with a signed chef partner
/precios/                          "cuánto cuesta un catering": 50/100 personas, por persona; no numbers until sourced
/presupuesto/                      short form
/como-funciona/
/proveedores/                      supplier application form
/sobre/  /contacto/  /terminos/  /privacidad/
/gracias/                          noindex
/404.html                          not in sitemap
```

Backlog, in Codex's ranked order: almuerzo-empresarial, asado (capture → asado.com.py), inauguraciones, graduaciones, baby-shower (capture → babyshower.com.py), bautismo-y-comunion, desayunos, eventos-grandes, then cities (only with a named provider each), then viandas, guides, quantity calculator, recipes.

## Open questions carried forward (need Anton)

1. ~~KWP settings~~ **Answered 2026-09-24 (Anton):** both rounds are Paraguay data, pulled from a Swedish Google Ads account (hence Swedish labels and SEK bids). Gran Asunción was not measured separately; round 3 (`research/kwp-round3-seeds.md`) adds an Asunción + Central run.
2. Which suppliers have agreed, for which formats and zones, with what minimums and response times?
3. Referral commission (assumed) vs contracting as the event seller?
4. Weekly hours available for qualification and quote chasing, and minimum acceptable return per hour.
5. Legal operator and invoicing setup for commissions; who reviews contracts locally.
6. Is a chef partner ready for a pilot?
7. Which sister domains will be live at launch?
8. Current VenderCRM endpoint, auth and pipeline contract; staging available?
9. Priority: fin-de-año corporate push now, or slower organic-first launch?
