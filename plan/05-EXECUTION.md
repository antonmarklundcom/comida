# 05 — Execution (v2)

Manager: whichever Claude Code session Anton opens (Fable when he drives it). Worker: Codex CLI gpt-6-astra at low effort. Every phase ends with the worker running build + verify and reporting file paths; the manager re-runs build + verify and opens the preview before accepting. Route counts come from `sites/comida/routes.mjs`, never from prose.

## P0 — Prerequisites (Anton, week 1, parallel with P1)

- [ ] Confirm KWP settings (location, language, network, date range); re-export for Paraguay and Gran Asunción separately, save to `plan/research/`.
- [ ] Accountant: operator entity, RUC, invoicing regime for referral commissions. Lawyer: one-page partner terms (03 §4), site terms, privacy text naming operator, purpose, recipients, retention (Ley 1334, 4868, 7593/2025 timing).
- [ ] 2 partners per launch format (corporate, fin de año, bodas, 15 años, coffee break, bocaditos, cumpleaños) signed; document records on file. Chef partner: yes/no decides whether `/chef-a-domicilio/` is published.
- [ ] 3 written 2026 quotes per format with menu, headcount, taxes, inclusions → `prices.mjs` entries with `published: true` only where comparable.
- [ ] WhatsApp Business number, hours, auto-reply with the form link.
- [ ] VenderCRM: read the live `/api/v1/leads` contract (URL, auth, payload, lead types), create pipelines "comida.com.py" (Nuevo → Contactado → Enviado a proveedores → Presupuestos enviados → Reservado/seña → Evento realizado → Comisión cobrada / Perdido con motivo) and "Proveedores"; staging tenant if available.
- [ ] GA4 property, Search Console property, Hostinger website slot, private config path outside `public_html` confirmed on the slot.

## P1 — Engine + launch set (Codex, `prompts/P1.txt`)

Copy the prestamo engine, add the `comida` site adapter, replace the verifier bans, build the 20 routes + 404 from the manifest in `08-V2-DECISIONS.md`, the two-screen form, the PHP forwarder, the estimator on `/precios/` (inactive until published prices exist). Done when `node engine/build-site.mjs --site=comida` and `node engine/verify.mjs --site=comida` exit 0, `dist/comida.com.py/` holds 21 HTML files (20 indexable + 404) and a sitemap listing 19 or 20 URLs (gracias excluded; chef excluded if unpublished), and the preview renders home, `/catering/`, `/catering/bodas/`, `/catering/asuncion/`, `/precios/`, `/presupuesto/` without console errors at 375 px.

## P2 — Pilot (Anton + manager, weeks 2–6)

Deploy the zip, `.htaccess`, DNS, HTTPS. Test the PHP → CRM path on Hostinger: success, rejection, timeout, duplicate, missing config. Search Console sitemap, GA4 live. Ads 400k Gs / 14 days on generic + fin de año terms. Run to 20 qualified requests; log hours; reconcile weekly. Switch on the 24 h / 2–3 quotes promise only if partners hit it during the pilot.

## P3 — Expand (Codex, only after the pilot shows bookings)

Backlog occasions in the ranked order from `08`, `/calculadora/` quantity calculator, first guides, cities each with a named provider. Each batch is one Codex dispatch with its own manifest diff.

## P4 — Directory (month 3+)

Provider profile pages with permissioned photos, per-lead fee test for low-ticket lines, imagery pass.

## P5 — Iteration loop (monthly)

Search Console: impressions with CTR < 2% get title/meta rewrites. Weekly: unsupported-request counts decide the next category. Close rate and collected commission per occasion decide what stays concierge.

## Dispatch shape (Windows, PowerShell)

```powershell
& "$env:USERPROFILE\.claude\skills\manager-worker-codex\scripts\codex-run.ps1" -Repo "C:\Claude 1\comida-com-py" -Tier normal -PromptFile "C:\Claude 1\comida-com-py\plan\prompts\P1.txt"
```

Fixes go back into the same session id with the exact error text. High effort only if Anton says so.
