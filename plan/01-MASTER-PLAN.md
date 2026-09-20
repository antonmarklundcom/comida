# 01 — Master plan: comida.com.py

## 1. Positioning

**What the site is, in one line (Spanish, on the site):** "comida.com.py — Catering y chef a domicilio en Gran Asunción. Contanos tu evento, revisamos tu solicitud y confirmamos disponibilidad en nuestro horario de atención."

Coverage claims, "proveedores verificados" and any turnaround promise are published only once partners have answered real briefs (v2, Codex fatal flaw 2). Launch coverage is Gran Asunción only.

**What Anton is, legally and commercially:** a referral and coordination service. Anton does not cook, store or transport food. The caterer is the food business (DINAVISA establishment registration where applicable, habilitación municipal, RUC, factura to the client). comida.com.py collects the brief, qualifies it, and introduces 1–3 checked providers; the provider contracts, invoices and collects from the client; comida invoices its referral fee to the provider. A disclaimer does not by itself move liability: the operator entity, its invoicing regime, supplier checks and an incident procedure are resolved in P0 before commercial launch (v2, fatal flaw 4).

**Why this can win:**
- Exact-match, one-word, category-defining domain. In a small market with weak SEO competition, domain plus a clean information architecture is a real advantage.
- Catering discovery in Paraguay is Instagram/WhatsApp/word of mouth. Google results for "catering asuncion", "catering para bodas paraguay", "catering empresarial" are a mix of thin caterer pages, Facebook pages and directory scrapes. A page that gives a real price range, a per-person calculator and an instant form/WhatsApp quote will out-answer them.
- Nobody owns the long tail. "catering para baby shower", "lunch para velorio", "catering fin de año empresa", "coffee break para capacitación", "catering para 15 años" — each is a separate high-intent buyer with a separate budget, and each gets its own page.
- Anton already has the engine (static generator, VenderCRM lead endpoint, WhatsApp-first pattern, Ads playbook) from tasacion / seguro / prestamo / babyshower. Build cost is low.

## 2. Business model (three layers, in order)

### Layer 1 — Referral concierge (launch, cash flow)
Visitor submits a short brief. Anton (later a VA) forwards it to 1–3 checked caterers, collects quotes, returns one comparison to the client. Revenue = **10% success commission on the first introduced event's agreed service revenue**, excluding taxes, refunds and pass-through venue costs, invoiced by comida to the provider after the event (or after a non-refundable deposit, to be decided with the accountant). Attribution: the named event, booked within 90 days of introduction. Not a reseller: comida never invoices the client for food.

Concierge effort only where expected commission ≥ 300k Gs (about 3M Gs service value). Smaller requests get one direct referral, no quote chasing.

Why this first: commission is easier to sell to an unproven partner than a listing fee, and one corporate fin-de-año or wedding booking pays for a month of work. Its weakness is collection, not arithmetic: written introduction record, client-confirmed booking status and weekly reconciliation are the controls.

### Layer 2 — Per-lead fee (only after quality is proven)
Test 40k Gs per accepted qualified lead for low-ticket categories, with replacement rules for duplicates, out-of-zone and non-contactable leads. Never charge listing fee and commission from the same unproven partner. "Verificado" is never a badge anyone can buy.

### Layer 3 — Media + product (month 6+)
Recipes, guides, rankings ("dónde comer la mejor chipa en Asunción"), seasonal content (Semana Santa, San Juan, Navidad), newsletter, then display/affiliate/sponsored, and later a viandas subscription or delivery product on the same domain. The catering pages bring the authority; media compounds it.

## 3. Service lines and their role

| Line | URL hub | Role at launch | Lead value | Notes |
|---|---|---|---|---|
| Catering para eventos | `/catering/` | Primary money maker | High (events) | 20+ occasion pages + 10 city pages |
| Chef a domicilio | `/chef-a-domicilio/` | Secondary, premium | Medium–high | Cenas privadas, aniversarios, grupos pequeños |
| Viandas / comida preparada | `/viandas/` | Secondary, recurring | Low per lead, recurring | "viandas saludables", "marmitas fit", "viandas semanales" |
| Delivery de comida | `/delivery/` | Content/SEO only | Low | Guides and rankings; no ordering against PedidosYa/Bolt Food |
| Recetas y guías | `/recetas/`, `/guias/` | Authority, long-term media | Indirect | Start with 10 posts that feed catering pages |

## 4. Economics

**Demand evidence (KWP paste, settings unconfirmed):** catering 720/month, servicio de catering 480, catering para eventos 140, chef a domicilio 140, price queries 20–30, occasion terms about 10 each. This is a small niche: win the generic hub, the price page and Asunción; occasion pages are cheap long-tail captures. No organic traffic forecast is made.

**Pilot, not forecast:** run to 20 qualified requests and measure requests → quotes sent → booked (deposit) → completed → commission collected, plus hours spent. Illustrative sensitivity at 20 requests × 20% booked × 6M Gs service value × 10% = 2.4M Gs booked; at 80% collection and 400k Gs ads and 20 hours of work, roughly 700k Gs contribution; at 10% booked it is negative. Scale pages only after the pilot.

**Internal reference prices (NOT for publication until three written 2026 supplier quotes exist; Codex could not validate any of them):**

| Format | Gs/persona (range) |
|---|---|
| Bocaditos / finger food (10–12 piezas, salados + dulces) | 25.000 – 50.000 |
| Coffee break empresarial | 20.000 – 40.000 |
| Almuerzo ejecutivo / lunch empresarial | 45.000 – 90.000 |
| Asado completo con parrillero | 80.000 – 160.000 |
| Buffet / menú de 3 pasos (15 años, bodas) | 150.000 – 350.000 |
| Chef a domicilio (cena 6–10 pax) | 200.000 – 400.000 |
| Viandas semanales (5 almuerzos) | 150.000 – 250.000 / semana |

Each price entry, once sourced, stores unit, minimum guests, minimum charge, tax treatment, transport, inclusions, source and verification date. Public copy until then: "Depende del menú, la cantidad de personas y el servicio. Pedí presupuesto."

Worked examples at 10% commission: boda 150 pax × 250.000 = 37,5M Gs → 3,75M; fin de año empresa 80 × 120.000 = 9,6M → 960k; cumpleaños 30 pax bocaditos × 40.000 = 1,2M → 120k (below the concierge threshold; one direct referral).

## 5. Roadmap

| Phase | When | Outcome |
|---|---|---|
| P0 Prereqs (Anton) | Week 1 | Operator entity and invoicing regime with accountant; 2 partners per launch format signed on the one-page terms; 3 written quotes per format; WhatsApp Business number; VenderCRM endpoint contract read from the live system; KWP settings confirmed |
| P1 Engine + launch set (Codex) | Week 1–2 | 20-route site per `08` manifest: hub, 7 occasions, Asunción, chef (if partner), precios, short form → VenderCRM, legal pages |
| P2 Pilot (Anton) | Week 2–6 | Deploy, Ads test 400k Gs / 14 days on generic + fin de año terms, run to 20 qualified requests, weekly reconciliation |
| P3 Expand (Codex, only after pilot) | Month 2+ | Backlog occasions in ranked order, quantity calculator, guides, cities with a named provider each |
| P4 Directory | Month 3+ | Provider profiles, permissioned photos, per-lead fee test |
| P5 Media | Month 6+ | Recipes and seasonal hubs as a separate bet, if the directory pays |

## 6. Brand

- Name on site: **comida.com.py** (the domain is the brand). Tagline: "Comida para cada ocasión".
- Voice: voseo, warm, concrete, quotes numbers. Never "somos líderes". At launch: "revisamos tu solicitud y confirmamos disponibilidad"; the 24 h / 2–3 quotes line only after the pilot proves it.
- Visual: appetite-first. Warm neutrals, one accent (paprika red or deep olive), large food photography (Higgsfield, labelled illustrative until real partner photos exist), clean cards. Nothing that reads as a tech startup.
- Trust blocks: cómo funciona (3 pasos), qué verificamos en un proveedor (RUC, habilitación, referencias, degustación), testimonials only once real.

## 7. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Caterers bypass or under-report | Written introduction record per lead, client-confirmed booking status, weekly reconciliation, 90-day named-event attribution; direct operational talk is allowed, hiding the client is not attempted |
| Thin content on templated pages | Launch is 20 routes; each has unique intro, menus and FAQ; expansion only after the pilot |
| Food-safety incident | Provider is the food business and carries its own registration; comida keeps document records (issuer, number, expiry), an incident contact, a suspension procedure and a backup provider list; a disclaimer is not the control |
| Anton's time on quotes | Short form, concierge only above the 300k Gs commission threshold, forwarding template, hours logged from lead one |
| Cannibalising asado.com.py / babyshower.com.py | One owner per intent: comida = food-only comparison, sisters = specialised service or package; capture pages link only to live pages; source IDs preserved in CRM |
| Seasonality | Fin de año pushed now (September); coffee break and corporate lunch smooth the trough |
| Legal exposure | Operator identity, invoicing regime and DINAVISA/municipal checks resolved in P0; Ley 1334 and 4868 disclosures; counsel reviews terms and data handling (Ley 7593/2025) |
