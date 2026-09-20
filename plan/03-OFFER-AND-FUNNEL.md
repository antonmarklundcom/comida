# 03 — Offer, funnel and partner model

## 1. The offer to the visitor (demand side)

**Launch promise (gated, v2):** "Contanos tu evento. Revisamos tu solicitud y confirmamos disponibilidad en nuestro horario de atención. Gratis, sin compromiso." The 24-hour and 2–3-quote promise and the word "verificados" are switched on only after partners have answered real briefs on time during the pilot.

Why it beats calling caterers one by one: one brief instead of ten chats, comparable quotes with the same scope, providers whose documents we have on file, and a price page that explains what drives cost before anyone talks.

**Value ladder on the page:**
1. Free: price guide + calculators (reads, no lead).
2. Free: brief form → 2–3 quotes (the lead).
3. Paid by the caterer, not the client: commission inside the quote. The client never pays comida.com.py directly in Layer 1.

## 2. The brief form (`/presupuesto/`)

Short (v2), mobile-first, two screens, WhatsApp fallback link on both.

| Screen | Fields | Why |
|---|---|---|
| 1 Evento | occasion (chips from the launch set + Otro), fecha or "fecha flexible", zona (Gran Asunción list + Otra), cantidad de personas (numeric field, 1–2000; optional adultos/niños), presupuesto (optional ranges or "todavía no sé") | Routing and feasibility |
| 2 Contacto | nombre, WhatsApp (required), email (optional), empresa (only if Empresarial), consent text naming the operator, the purpose and that details are shared with selected providers | The enquiry |

Menu, timing, venue access, staffing and dietary needs are collected in the qualification chat, and dietary detail is shared only with the chosen provider. No children's names, no medical detail. Hidden fields: source page, occasion slug, UTM. Server side: allowlists, phone normalisation, size limit, persistent rate limit; client timestamp and source are hints, not truth. Submit → `lead-forward.php` → VenderCRM; the thank-you page says "recibimos tu solicitud" only when the CRM confirmed persistence, otherwise it shows the WhatsApp fallback with the brief encoded.

Supplier applications use their own form on `/proveedores/` with their own consent and CRM lead type.

**Definitions:** a submitted form with a valid WhatsApp number is a captured enquiry. "Qualified" needs human confirmation (contactable, covered zone, feasible). Inbound WhatsApp enquiries count once logged in the CRM. A `wa.me` click is never a lead.

## 3. Qualification and forwarding (Anton / VA)

1. Within 2 h (business hours): WhatsApp the client from the comida.com.py Business number confirming the brief in 3 lines and asking the one missing thing (usually date or budget).
2. Score (v2, non-overlapping): **A** = covered zone, feasible date, expected commission ≥ 300k Gs → concierge with 2–3 quotes. **B** = covered but smaller, or missing commercial detail → one-provider referral. **C** = unsupported zone or category, non-contactable, or inside the partners' minimum lead time → declined politely with a reason logged; never forwarded silently. A 10-person premium chef dinner can be A; headcount alone decides nothing.
3. Forward A briefs to 2–3 partners with the template below; deadline stated. Partners that miss three turns are paused.
4. Send the client one comparison: service scope, final payable amount with taxes, exclusions, quote expiry, deposit and cancellation terms, and the contracting provider's identity. If only one provider answered, say so.
5. Client picks; Anton records the introduction (date, event, provider); provider contracts, takes the deposit and invoices the client; provider reports booking, and the client confirms; commission invoiced per the terms; reconciled weekly.

**Partner forwarding template (Spanish, from the critique):**
"Ref. {id}: {ocasión}, {fecha/hora o flexible}, {zona}, {adultos/niños}. Servicio: {formato}; presupuesto {total o por persona / no definido}. Necesitamos confirmar disponibilidad, mínimo, traslado, personal, vajilla, bebidas, total con impuestos y condiciones de seña/cancelación. ¿Podés responder antes de {fecha/hora}? Los datos de contacto se comparten con autorización del cliente."

## 4. Partner model (supply side)

**Who:** caterers, parrilleros, chefs a domicilio, viandas businesses in Gran Asunción first; CDE and Encarnación by month 3.

**Document checklist (kept on file with issuer, number, expiry, premises and last-check date; summarised on `/proveedores/`):** RUC activo, DINAVISA establishment registration where the activity requires it, habilitación municipal, 3 checkable references, real event photos with permission, a tasting or visit (preference check, not a sanitation certificate), response-time test, price list. Exact requirements per partner are unknown until checked per municipality.

**Terms (one-page agreement, Spanish, lawyer-checked in P0; v2 per the critique):**
- comida.com.py provides referral and coordination; the provider is the food business and is responsible for food safety, registrations, staff, contracting, invoicing and tax toward the client. Consumer rights under Ley 1334 are not waived by this agreement.
- Commission: 10% of the agreed service revenue of the first event introduced by comida.com.py, excluding taxes, refunds and pass-through venue costs. Attribution: the named event booked within 90 days of the introduction record. Documented pre-existing client relationships excluded.
- Payable within 7 days after the event (or after a non-refundable deposit, per the accountant's advice); no commission on amounts the provider must refund; cancellation adjustments, duplicate-referral and dispute windows defined.
- Provider reports bookings; comida may confirm with the client; weekly reconciliation.
- Direct operational conversation with the client is allowed; the introduction record is the attribution, not channel control.
- Quote deadline stated per brief; three missed turns = paused.
- Either side ends with 30 days' notice; commission on already-introduced events survives.

**Later addendum:** per-lead fee for low-ticket categories after quality is proven. No paid "verificado" badge, ever.

**Recruitment:** Instagram DMs and WhatsApp to 40 caterers ("te mando solicitudes calificadas, cobrás vos, comisión solo si cerrás"), aiming for 2 partners per launch format before launch. Track in VenderCRM as a second pipeline.

## 5. WhatsApp contract

Single Business number for the site. Every `wa.me` link carries a prefilled voseo message by page:
- Occasion page: "Hola! Quiero presupuesto de catering para {ocasión}, somos aprox {pax} personas en {ciudad}."
- City page: "Hola! Busco catering en {ciudad} para un evento."
- Chef: "Hola! Quiero un chef a domicilio para {n} personas el {fecha}."
- Viandas: "Hola! Quiero info de viandas semanales en {ciudad}."
Auto-reply outside hours with the form link. Hours shown on the site.

## 6. CRM pipeline (VenderCRM)

Pipeline "comida.com.py": Nuevo → Contactado → Enviado a proveedores → Presupuestos enviados → Cerrado ganado / Cerrado perdido (motivo). Fields: occasion, city, pax, date, format, budget range, source page, partner(s), closed amount, commission due, commission paid. Second pipeline "Proveedores" for recruitment.

## 7. Acquisition alongside SEO

- Google Ads: 400k Gs / 14 days, exact and phrase on "catering", "servicio de catering", "catering para eventos", "catering empresarial", "catering fin de año"; negatives: curso, trabajo, empleo, gratis, receta, franquicia, delivery. Landing = `/catering/` hub or the occasion page, not home.
- GBP: not used. Lead-generation intermediaries are ineligible under Google's business eligibility rules (v2).
- Instagram: mirror of the price page and occasion content, partner event photos with written permission; DMs routed to the form.
- Partners: a "Colaborador de comida.com.py" mention on their Instagram linking back is welcome but never sold and never called "verificado".
