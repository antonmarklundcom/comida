# comida.com.py — independent critique for manager merge

Reviewed 2026-09-19. Scope: files 00–06 and prompts/P1.txt, the saved REVIEW.txt, ASADO-PLAN.md, babyshower master/build-plan context, and the actual prestamo engine. This report also incorporates Anton's newly supplied Keyword Planner paste at `C:/Users/anton/.codex/attachments/161998a2-b158-469c-ac48-d673b7b9ce87/Pasted text.txt`. Original plans remain unchanged. Observations from files, external facts, and proposed experiments are distinguished below; commercial rankings are judgments, not measured conversion forecasts.

**Owner clarification after review:** Anton confirmed that the intended production site is HTML/PHP hosted on his Hostinger Brazil plan. Treat this hosting and runtime choice as settled. The proposed local Node generator is build tooling only: it can generate HTML on the laptop, while Hostinger serves HTML/CSS/JavaScript and executes the PHP form handler. No production Node service or hosting migration is requested. The engine objections below concern adapting its current configuration and checks to permit this architecture, not replacing HTML/PHP. Verify PHP execution and the private configuration path on the actual hosting slot during deployment.

## 1. Verdict

The plan is sound as a small, supplier-backed catering referral experiment in Gran Asunción, but not yet as a 70-page national food platform. Its biggest weakness is treating unvalidated demand, supplier capacity, estimated prices and reusable infrastructure as established facts. The most valuable change is to launch a smaller, measurable catering service with a supplier-gated chef pilot, supported by the new keyword evidence and a corrected build contract.

## 2. Fatal flaws

1. **The copied engine actively forbids the intended product.** `prestamo-com-py/engine/verify.mjs` rejects forms, consent controls, VenderCRM references and PHP output; its schema checks also ban Offer. `config.mjs` accepts only four existing site IDs and only email in operator fields. Fix **04 §§1–2,5,8 and P1 tasks 1,6,8**: specify an explicit adaptation, including new config contracts and replacement checks, rather than promising a copy-and-strip exercise.
2. **The advertised service can exceed actual supply.** “Todo Paraguay”, verified suppliers and 2–3 quotes within 24 hours are unsupported until partners have accepted real briefs. Fix **01 §§1,6; 03 §§1,4; 05 P0/P4**: publish only covered zones, state what was checked and when, and promise “Revisamos tu solicitud y confirmamos disponibilidad en nuestro horario de atención.” Strengthen the promise after a pilot proves it.
3. **The revenue forecast has no validated acquisition base.** Forty qualified leads and 3,000–5,000 organic visits per month are assumptions, not consequences of the keyword paste. Fix **01 §4 and 05 P6**: measure qualified leads, quotes, deposits, completed events and collected commission separately; run an initial 20-qualified-lead operating pilot before scaling pages.
4. **The legal shortcut is unsafe.** A disclaimer does not establish that all liability stays with the caterer; an email-only “editorial” site with commercial matching is still performing matching. Fix **01 §§1,7; 05 P0; 06 Q2**: identify the actual operator and contracting roles, resolve invoicing, and make supplier verification and incident handling concrete before commercial launch.
5. **GBP is an unavailable acquisition assumption for this model.** Google explicitly lists lead-generation agents/companies as ineligible. Remove the planned profile from **01 §5, 03 §7 and 05 P4** unless a materially different business independently qualifies; a service-area setting does not fix ineligibility. See [Google business eligibility](https://support.google.com/business/answer/13763036?hl=en).

## 3. Business model

Launch with **10% success commission on the first introduced event's agreed service revenue excluding taxes, refunds and separately identified pass-through venue costs**, subject to accountant-approved invoicing treatment. This is my proposed negotiation starting point, not a demonstrated Paraguayan market rate. The supplier quotes, contracts, collects deposits and invoices the customer; comida invoices its referral/coordination service to the supplier. Do not call this “reseller” in 01 §2.

Commission is easier to explain before proving lead quality than a recurring listing fee. Its weakness is collection, not arithmetic: clients can book directly, suppliers can fail to report, and events may occur months later. A short written introduction record, customer-confirmed booking status and weekly reconciliation are more useful than trying to control every WhatsApp conversation. Pilot with two willing suppliers per advertised format where possible; five signatures do not guarantee five available wedding providers.

Keep concierge work for tickets expected to generate at least **Gs. 300,000 commission**, initially a Gs. 3 million eligible-service threshold. Smaller requests receive one direct referral without repeated quote chasing. After quality is proven, test **Gs. 40,000 per accepted qualified lead**, with duplicate/out-of-zone/noncontactable replacement rules. Do not simultaneously demand a listing fee and commission from unproven partners, and never make “verified” a badge someone can buy.

Illustrative economics: 20 qualified requests × 20% booked × Gs. 6 million eligible service value × 10% = **Gs. 2.4 million booked commission**. At 80% eventual collection that is Gs. 1.92 million; subtract Gs. 400,000 ads and an assumed 20 operating hours valued at Gs. 40,000/hour to leave Gs. 720,000 before fixed costs and taxes. These are sensitivity inputs, not forecasts. At 10% booking, that contribution becomes negative Gs. 240,000. Record hours and cash receipt dates from the first lead; month-six revenue is not month-six available cash.

## 4. SEO

### What the new data changes

The paste shows `catering` 720, `servicio de catering` 480, `catering para eventos` 140 and `chef a domicilio` 140. The alternate `chef domicilio` also shows 140; do not add those as independent demand. Pricing intent exists: `servicio de catering para 100 personas precios` 30, `servicio de catering precios por persona` 20 and `catering para 50 personas precios` 10. These support a strong generic service hub, useful pricing content and an early chef test.

By contrast, `chefs` 1,000 and celebrity terms are not private-chef demand; `como en casa` 1,300 is ambiguous and may be navigational. `la toscana catering` 210 is branded demand. `delivery cerca de mi` 720 describes immediate local fulfillment, which the proposed concierge cannot deliver. Do not use any of these to justify the revenue model.

The paste lacks location, language, network and date-range settings. Swedish labels and `kr` bid values describe the interface/account presentation, not proof of Swedish targeting or Paraguayan targeting. Treat the volumes as provisional until Anton confirms settings; do not convert those bids into a PYG acquisition forecast. “Låg” means low advertiser competition, not easy organic rankings; close variants and rounding prevent naive summation. These interpretations follow [Google's Keyword Planner metrics](https://support.google.com/google-ads/answer/3022575?hl=en-CA).

### Occasion ranking

Ranked by my expected combination of service value, repeat business, operational fit and likelihood of commercially useful demand. Every occasion route in 02 §2 is covered; the order is a hypothesis. For a September launch, fin de año gets additional seasonal priority.

| Rank | Occasion route | Reason / treatment |
|---|---|---|
| 1 | eventos-empresariales | Repeat buyers and comparable procurement briefs |
| 2 | fin-de-ano | Timely corporate budgets; begin now |
| 3 | bodas | Valuable tickets, longer booking cycle |
| 4 | 15-anos | Valuable events; demand still needs validation |
| 5 | coffee-break | Repeatable format, simpler quoting |
| 6 | bocaditos | Tangible local product vocabulary; control small-order workload |
| 7 | cumpleanos | Broad catch-all with adult/child subsections |
| 8 | almuerzo-empresarial | Repeat potential; distinguish one-off from daily meals |
| 9 | asado | Clear service; coordinate ownership with sister site |
| 10 | inauguraciones | Corporate value, narrower demand |
| 11 | graduaciones | Larger seasonal events |
| 12 | baby-shower | Food-only intent; package intent belongs to sister |
| 13 | bautismo-y-comunion | Family-event fit with shared providers |
| 14 | desayunos | Corporate service only; gifts are separate |
| 15 | eventos-grandes | High value but demanding capacity and procurement |
| 16 | fiestas-infantiles | Initially part of cumpleaños |
| 17 | mesa-dulce | Initially bocaditos/cumpleaños subsection |
| 18 | navidad | Merge into fin de año until household dinner service exists |
| 19 | brunch | Secondary format, unproven incremental demand |
| 20 | food-truck | Supply availability and venue constraints |
| 21 | vegano-y-vegetariano | Menu/filter first, dedicated supply later |
| 22 | sushi | Specialized supply and handling |
| 23 | paella | Narrow service; wait for an actual partner |
| 24 | comida-mexicana | Same constraint |
| 25 | tercer-tiempo | Asado subsection first |
| 26 | despedida-de-soltera | Weak evidence of separate commercial intent |
| 27 | velorio | Urgency incompatible with a 24-hour quote workflow |

Do not build standalone velorio, tercer-tiempo, despedida, food-truck or cuisine pages in the first release. This is a prioritization decision, not a claim of zero demand. Religious/community pages in §1 likewise remain backlog.

Up to eight additions or explicit query targets: **catering para 50 personas**, **catering para 100 personas**, **precio de catering por persona**, **bocaditos por ciento**, **bocaditos salados y dulces**, **servicio de lunch para eventos**, **catering para colación de grado**, **comidas típicas para San Juan**. First three belong in `/precios/` initially; next three in bocaditos and corporate sections; last two require fresh local keyword/provider validation. These are research targets, not eight extra launch URLs.

Prefer “bocaditos”, “presupuesto”, “casamiento/boda”, “fiesta de 15” and “almuerzo empresarial” in readable copy. “Finger food”, “candy bar” and “pizza party” are imported industry vocabulary, not automatically wrong in Paraguay. “Marmitas fit” is Portuguese-influenced and needs local evidence; do not make it a primary Spanish target by assumption. “Lunch” can mean a bocaditos service, so do not equate it automatically with an executive plated lunch. First-party Paraguayan providers already use bocaditos, corporate breakfasts and coffee breaks: [Medialunas Calentitas](https://medialunascalentitas.com.py/catering/) and [Bocatta](https://bocatta.com.py/bocaditos/). This supports vocabulary, not search volume or a claim that competition is weak.

## 5. Sitemap and information architecture

Keep **chef-a-domicilio and viandas at root**: the former is a service different from event catering; the latter is recurring meals. Keep `/catering/<occasion>/` and the existing city convention, but explicitly write every full route. The growth list's bare `/san-lorenzo/` and `/lambare/` could otherwise become accidental root pages. A type field must distinguish cities from occasions in their shared namespace.

Give home the broad brand/food-services role, `/catering/` generic catering intent, `/catering/asuncion/` verified coverage/logistics, and `/precios/` cost comparison. Merge close variants on those pages. Corporate meals versus viandas means event meal versus recurring delivery; explain that distinction in both content and routing.

One Asunción page is enough initially. Additional city pages require named available providers, travel/minimum-order conditions and useful city-specific information. “Cobertura limitada” does not justify CDE/Encarnación pages with no fulfillment. Parent impressions alone do not justify occasion×city combinations: require distinct query demand plus genuine service differences and supply.

Asado's plan already targets “catering asado” through `/asador-privado`; babyshower's master assumes package resale, while its newer build spec permits pre-supplier estimates. Neither is proof that comida has suppliers. Agree one owner per intent: comida handles food-only comparison; sisters handle their specialized service/package. Cross-link only live relevant pages and preserve source/referral IDs in CRM. Unique wording alone does not resolve overlapping intent.

## 6. Pricing table

**Unknown:** I cannot validate any of the seven proposed ranges as current 2026 Gran Asunción market prices from reliable, comparable evidence. Keep them internal until three written supplier quotations specify date, menu, headcount, taxes and inclusions. An old coffee-break PDF or a low-price social snippet is not a like-for-like 2026 benchmark.

| Existing range | Concrete correction before publication |
|---|---|
| Bocaditos 25–50k/person | Separate food-only price per 100 units from service/staff/transport; specify pieces and product mix. Replacement market range: unknown. |
| Coffee break 20–40k/person | Define duration, cups, food, refill policy, staff and equipment. Replacement: unknown. |
| Executive lunch 45–90k/person | Split delivered boxed meal from staffed event lunch. Replacement: unknown. |
| Asado 80–160k/person | Specify meat quantity, sides, grill/fuel, parrillero, minimum party and travel. Replacement: unknown. |
| Buffet/three courses 150–350k/person | Split two formats; state whether venue, beverages, mozos and tableware are excluded. Replacement: unknown. |
| Chef 200–400k/person | Quote minimum booking/service fee plus food and assistants, not linear per-person pricing alone. Replacement: unknown. |
| Five viandas 150–250k/week | Label weekly/package unit and delivery days; arithmetic implies 30–50k per meal before unspecified extras. Market validation: unknown. |

Replace unsupported public numbers with **“Pedí presupuesto: depende del menú, la cantidad de personas y el servicio.”** Once sourced, store `unit`, minimum guests, minimum charge, tax treatment, transport, inclusions, source reference and verification date with each price. Do not stamp today's date onto guessed values as if that validates them. An estimator may use `max(minimumCharge, guests × unitPrice) + travel + selectedExtras`, but only for comparable verified packages; otherwise return “cotización personalizada”.

## 7. Funnel and partner terms

Reduce the first submission to contact, occasion, approximate date, zone and guest count; budget may be “todavía no sé”. Collect menu, timing, access, staffing and dietary needs during qualification or optional expansion. Replace the slider with a numeric field: six-person chef bookings and 800-person events must be representable. Add “fecha flexible”, event start time and adults/children when relevant. Supplier applications need their own form, consent and CRM lead type.

Use nonoverlapping routing: **A** = covered, feasible brief with expected commission ≥300k; **B** = covered smaller opportunity or missing commercial detail, one-provider referral initially; **C** = unsupported zone/category, noncontactable request or outside partner lead time. Record the reason. A ten-person premium dinner can beat a 60-person snack order; headcount alone is not profitability. Never silently forward C requests to partners.

Suggested forwarding copy: “Ref. {id}: {ocasión}, {fecha/hora o flexible}, {zona}, {adultos/niños}. Servicio: {formato}; presupuesto {total o por persona/no definido}. Necesitamos confirmar disponibilidad, mínimo, traslado, personal, vajilla, bebidas, total con impuestos y condiciones de seña/cancelación. ¿Podés responder antes de {fecha/hora}? Datos de contacto se comparten con autorización del cliente.” Detailed dietary discussion can follow privately with the chosen supplier.

Quote comparison should show service scope, final payable amount, exclusions, expiry, deposit, cancellation and the contracting supplier's identity. If only one supplier responds, say so. Add CRM states for accepted brief, booked/deposit, event completed, cancelled/refunded and commission collected. A successful form submission is a captured enquiry; “qualified” needs human confirmation. Manually recorded inbound WhatsApp enquiries also count once validated, although link clicks never do.

Partners are likely to resist a blanket 12-month claim over all future client business, a ban on direct pre-deposit discussion, and commission on unrelated rentals or taxes. This is negotiation judgment, not interview evidence. Limit attribution initially to a named introduced event booked within 90 days, exclude documented existing relationships, allow direct operational conversation, and reconcile weekly. Define cancellation adjustments, duplicate referrals, dispute windows and payment timing; review whether partial commission follows a nonrefundable earned deposit or only completion. Do not invoice commission on money the supplier must refund.

## 8. Paraguay legal and operational risks

Update the generic INAN/SENAVE wording. DINAVISA now publishes food-establishment registration requirements, including Resolution 326/2025, and current food-handler information. Check the actual provider's activity, premises and applicable records; establishment registration and individual packaged-product registration are different questions. [DINAVISA food regulation](https://dinavisa.gov.py/direccion-general-de-regulacion-de-alimentos-y-productos-a-fines/) and [resolutions](https://dinavisa.gov.py/resoluciones/) are the starting points. SENAVE covers plant health/quality and seeds; it is not a universal catering licence. See [SENAVE](https://www.senave.gov.py/).

Municipal habilitación, permitted premises/use, fire/access conditions and event requirements depend on the municipality and activity. Exact requirements for each proposed partner are **unknown** until checked. Store document issuer, number, expiry, premises and last check. A tasting assesses food/service preferences; it does not certify sanitation or allergy safety.

The provider invoices the meal/event; comida needs an appropriate invoicing setup for its own paid service. DNIT identifies RUC registration as the initial step for commercial/independent activity and explains obtaining authorized invoicing documents. Have an accountant resolve the operator's actual regime and commission tax treatment before collection. See [DNIT RUC guidance](https://www.dnit.gov.py/en/web/portal-institucional/w/dnit-recuerda-como-inscribirse-en-el-ruc-de-forma-rapida-y-sencilla).

Consumer rights cannot simply be waived by partner terms. Law 1334 protects consumers and limits contractual renunciation; Law 4868 sets electronic-commerce information obligations. The platform's actual representations and conduct matter. Have local counsel review matching disclosures, complaints, supplier contracts and cancellation handling; do not promise immunity. Sources: [consumer law](https://www.bacn.gov.py/leyes-paraguayas/897/ley-n-1334-de-defensa-del-consumidor-y-del-usuario), [electronic-commerce law](https://www.bacn.gov.py/leyes-paraguayas/961/comercio-electronico).

Do not copy babyshower's generic “Ley 6534” cookie framing: that law concerns credit data. Paraguay enacted general data-protection Law 7593/2025; a March 2026 official legal report identifies a 24-month transition and entry into force on 27 November 2027. Confirm commencement and subsequent regulations with counsel rather than treating the full new regime as already effective. See [official congressional-hosted legal report](https://silpy.congreso.gov.py/web/descarga/informetecnicojuridico-117840?preview=).

Design now for named operator, purpose, recipient disclosure, explicit matching permission, limited retention and deletion/contact requests. Proposed operational retention: delete unconverted enquiries after 90 days unless a justified ongoing request requires longer; counsel/accountant defines separate contract/tax retention. Avoid medical histories and collecting children's names. Dietary information can disclose health concerns: ask only what the supplier needs and share selectively. Do not place phone numbers, dietary details or full briefs in GA4 events or page URLs. Keep logs private. Add an incident contact, supplier suspension procedure and cancellation backup; a disclaimer cannot deliver replacement food.

## 9. Build spec review against the engine

**Architecture contract:** build and verify require `--site=<id>`; commands without it exit 2. Build loads `sites/<id>/site.config.mjs`, authors/providers/pages modules and blog configuration, then emits `dist/<domain>/`. It does not discover the proposed root `content/` and `templates/` tree. Prefer preserving the existing loader with a `comida` site adapter and explicit `--site=comida` commands; otherwise specify a deliberate loader rewrite. Expand allowed site/operator fields and make editorial blog generation optional. Remove hard-coded insurance blog copy/categories and finance disclaimers, not just the loan calculator.

**Verifier:** replace the no-form/no-PHP/no-CRM and unconditional Offer bans with food-site rules. Preserve useful escaping, routing and identity checks. Add server-side validation tests rather than treating client honeypots as security. Check missing assets, duplicate routes, references, canonical/noindex flags, Spanish encoding and secret leakage. “Any price not sourced from PRICES” cannot be proved reliably by scanning every number: validate typed price references and compare rendered estimator data with configuration. Scope duplicate-paragraph checks to substantive body copy; repeated legal/process text is legitimate. Titles/metas are editorial limits, not Google-imposed hard cutoffs; the suggested long title pattern itself exceeds 60 characters.

**Count reconciliation:** 02's launch list contains **22 routes including /404**, not 24; adding the separately required `/gracias/` gives 23. Growth contains **37** under the intended full-path interpretation: 18 occasion + 10 city + 4 chef + 4 viandas + 1 delivery. Authority contains **11**: nine guides and two recipes, not ten. Thus the literal revised total is 71, before any new hubs or deliberate cuts. Derive totals from one route manifest. Sitemap count must equal indexable canonical routes, not HTML count: exclude `/404.html` and noindex `/gracias/`. Use the engine's actual `/404.html` special case and HTTP 404 behavior.

**Schema/content:** the occasion example lacks a comma after `external`; `{ q, a }` entries are schematic, not executable content. Add stable IDs, kind, parent, updated date, publish/indexability flags, approved coverage, price references and estimator applicability. City and service-line schemas cannot simply inherit three occasion menus. Validate reference existence and allow related links only to published routes: P1 has one city and no authority guides, making “three cities plus one guide” impossible as written. Hide future chef/viandas navigation until those routes exist.

`Offer(priceRange)` is invalid modeling: Schema.org assigns `priceRange` to LocalBusiness. Do not invent Offers from editorial estimates; add accurate Service information and only genuine supported offer data later. [Schema.org](https://schema.org/priceRange). Keep useful visible FAQs, but remove rich-result expectations: Google's May 2026 update says FAQ rich results stopped appearing; HowTo rich results were already deprecated. [Current Search updates](https://developers.google.com/search/updates), [HowTo announcement](https://developers.google.com/search/blog/2023/08/howto-faq-changes). JSON parsing alone is not semantic validation.

**PHP/CRM:** prestamo is not the promised lead-forwarder reference. The babyshower spec points to tasacion but is only a spec; inspect the actual endpoint and current VenderCRM contract before reuse. Specify tenant URL, auth header, payload mapping, lead-type routing, upstream success criteria, timeouts, retry/idempotency and field limits. No confirmed CRM persistence means no “lead received” success message. A private queue would require an explicit retention/retry design; do not silently copy public `leads.log` fallback.

Use an absolute private config path: from `public_html/php/lead-forward.php`, one directory above the script is still public_html, not outside the web root. Never trust client-supplied timestamps or source identifiers as authoritative. Apply server-side allowlists, phone normalization, request-size limits and persistent rate limiting. Browser resubmit guards do not prevent duplicates after an upstream timeout.

**Preview/deploy/calculators:** copied `serve.mjs` serves static bytes and cannot execute PHP; do not expose private PHP through it. Static preview plus mocked form UI is separate from PHP/CRM integration tests on a suitable runtime. `launch.json` currently has seguro/prestamo at 8091/8092 and no comida entry; retain its existing configuration structure and confirm port availability. Zip the contents of the chosen domain output, including `.htaccess` and the public PHP endpoint, excluding credentials, research and logs. The existing builder needs explicit public/PHP copying. Placeholder image paths need real placeholder assets. Specify numeric bounds, units, minimums and stale-price behavior for calculators; defer quantity/nutrition assumptions until reviewed. Test one successful CRM submission, rejection, timeout, duplicate and unavailable configuration before go-live.

## 10. Long-term path

The credible next step is a **small curated catering marketplace/directory**, initially operated manually, because the launch can accumulate providers, comparable quotes and actual fulfillment outcomes. “Marketplace” here does not imply payments, accounts or live inventory. Useful editorial guides support it; a broad recipe publication is a separate audience investment, not an automatic authority transfer. Viandas subscriptions require recurring demand and delivery economics; operating general delivery requires a different business.

Build stable service/provider IDs, quote versions, permission records, referral source, coverage and outcome fields now. Keep customer PII in CRM, not static modules. Avoid hard-coding every service as pax × price, blanket future marketing permission, and public availability that nobody maintains. Test recurring corporate orders before building subscription software.

## 11. Scope cuts

An initial **20-route package** is coherent: home, catering hub, seven occasion pages (corporate, fin de año, bodas, 15 años, coffee break, bocaditos, cumpleaños), Asunción, chef hub, precios, presupuesto, cómo funciona, proveedores, sobre, contacto, términos, privacidad and gracias; add `404.html` as the 21st HTML artifact. Chef publishes only with available supply; otherwise omit it and report 20 artifacts. This is a new proposed manifest, not a correction to the old list's count.

Keep one simple price estimator inside precios after validation. Defer the standalone quantity calculator, recipe production, 10-city expansion, cuisine pages, gifts, viandas, delivery and 25-image generation. Use real permissioned partner material or clear placeholders. Handle lower-priority occasions through the general form without buying bespoke pages yet.

These cuts plausibly remove about two weeks of content/integration work, but the schedule saving is an estimate. **Retention of 90% of expected leads cannot be demonstrated from the available data.** Preserve broad enquiry coverage, review unsupported-request counts weekly, and add a category when verified demand and supply justify it. Do not present a made-up 10% loss ceiling as achieved.

## 12. Top ten changes

1. **04 §§1–2,5,8 + P1:** correct loader, CLI, output paths and the engine's explicit lead-capture prohibitions.
2. **01 §4 + 02 §1:** incorporate the new KWP evidence with targeting caveats and remove the unsupported traffic forecast.
3. **03 §§1,4 + 05 P0/P4:** gate verified-provider and turnaround claims on actual coverage and response evidence.
4. **01 §§1,7 + 05 P0:** resolve operator identity, commission invoicing, regulatory checks and incident responsibility.
5. **03 §7 + 05 P4:** remove the ineligible lead-generation GBP assumption.
6. **01 §2 + 03 §4:** pilot 10% first-event commission with attribution, cancellation and collection rules.
7. **02 §2 + 05 P1–P3 + P1:** use one explicit route manifest and indexable-only sitemap counts.
8. **01 §4 + 04 §§3–4:** replace unsourced public ranges with supplier-backed units, minimums and inclusions.
9. **03 §§2–3,6 + 04 §5:** simplify intake and measure qualified requests, bookings and collected cash separately.
10. **02 §§2,5 + 04 §7 + 05:** prioritize core catering/chef testing, cut speculative expansion and remove obsolete schema benefits.

## 13. Questions for the owner

1. What location, language, search network and date range produced the KWP paste? Were Paraguay and Gran Asunción measured separately?
2. Which suppliers have actually agreed to receive requests, for which formats/zones, with what minimums and realistic response times?
3. Do you want to earn referral commission or contract as the event seller? The legal, pricing and operating plans change materially.
4. How many hours weekly can you spend qualifying, comparing and chasing quotes, and what minimum return per hour makes this worthwhile?
5. What legal operator and invoicing setup will receive commissions, and who will review the contracts locally?
6. Is there a chef partner ready for a small pilot, given the new keyword signal, or must chef remain unpublished?
7. Which sister domains will actually be live at launch, and which business owns food-only versus full-package requests?
8. Which current VenderCRM endpoint/authentication and pipeline contracts should the build use, and is a staging integration available?
9. Is the priority near-term fin-de-año corporate bookings or a slower organic-first launch? That determines page order and the initial advertising test.
