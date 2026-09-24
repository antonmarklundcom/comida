# Final review before publishing — comida.com.py (Opus 5.5, 2026-09-24)

Replaces the Codex P6 review for this session; Anton will review manually with Fable 5.1 or Codex later. Machine checks at the time of writing: build, verify (24k+ checks), duplicates, content validator, verifier mutation tests, PHP handler test (15/15) and QA gate (16 gates) all pass.

## BLOCKERS (human-owned, the site must not go live without them)

- BLOCKER: **VenderCRM site key** and the private config on Hostinger (`README.md` → Forms). Until then every form submission ends in the WhatsApp fallback, which works but produces no CRM lead.
- BLOCKER: **`/terminos/` and `/privacidad/` reviewed by a lawyer** (Ley 1334, Ley 4868, Ley 7593/2025 timing), and the operator line decided (legal name and RUC are still pending, so no operator identity is shown).
- BLOCKER: **DNS and SSL** for comida.com.py on the Hostinger slot, then the five cases in `docs/php-tests.md`.

## Should be done before or right after launch

| Priority | Item | Where |
|---|---|---|
| High | Photos for the top recipes. Only sopa paraguaya, picaña and vacío have an image; Recipe rich results need one. ~30 images at 1k is about 30-45 Higgsfield credits (28.5 left of the 60 cap). Needs Anton's OK. | `docs/imagery-manifest.json`, recipe `image` field |
| High | Search Console + sitemap submission; GA4 ID into `site.config.mjs`. | README → Analytics |
| High | Quick human read of the Mercado de Abasto facts (address, DAMA, SIMA) — sourced, but it is the highest-traffic page. | `sites/comida/content/guides/mercado-de-abasto.mjs` |
| Medium | Self-host the Fraunces display font (Google Fonts is loaded at runtime; self-hosting Inter moved Lighthouse from 88 to 96 on a sister site). Needs a font download. | `public/js/site.js`, `public/fonts/` |
| Medium | Taste check of four recipes the writers flagged: chipa almidón proportions, payagua mascada (raw vs cooked so'o), croquetas (no salsa blanca), local words "fécula de maíz" and "papas pay". | recipes folder |
| Medium | Expand the viandas pages (350-440 words each) before flipping `viandasPartnerSigned`. | `sites/comida/content/viandas/` |
| Medium | Add `vc-attribution.js` once the CRM URL is final, so Ads leads keep their UTM. | README → Forms |
| Low | Five meat cuts (picaña, bondiola, bife de chorizo, entraña, ojo de bife) have no recipe of their own yet; write "picaña a la parrilla", "bondiola al horno" and similar. | `plan/12` G2 |
| Low | Weight-loss cluster (déficit calórico 880 and similar) deliberately not targeted: health advice without a qualified author. | — |

## Items from `docs/log/codex-review-opus-1.md`

- **Fixed:** tap targets under 48 px (dots, flexible-date row, footer, catering menu links); paprika outside primary CTAs (nav hover, drawer "Ver todo", tile arrows, checkbox accent); WhatsApp fallback and real form instead of WhatsApp-only; favicon and glyph issues were already fixed in P1b.
- **Deliberately kept:** `--gold` and `--char` tokens (approved by Anton); eight occasion tiles (the 7 occasions + Asunción); appetite strip placement.
- **Still open:** rendered crop inspection of images that may show faces (boda, cobertura, conference); Fraunces self-hosting.

## Readiness for the next modules (plan/10 §11, plan/12)

- Restaurants: collection and route reserved, verifier enforces `source` + `verifiedAt`; needs visits (plan/12 G4).
- Asado: `/asado/` reserved; asado.com.py 301 prepared and commented in `.htaccess`.
- Fresh delivery: not an SEO market (KWP round 3); build it as a conversion layer (`/mercado/`, WhatsApp pilot first) per plan/12 §4. Static + PHP + MySQL is enough until ~50 orders a day.
