# 09 — Handoff: Sonnet directs, Codex builds (decided by Fable 5.1, 2026-09-19)

Anton opens a new local Claude Code session on **Sonnet 5, effort medium** (high only for the browser QA phase if medium misses things) in `C:\Claude 1\comida-com-py`, pastes `prompts/SONNET-DIRECTOR.txt`, and leaves. Codex CLI gpt-6-astra at low effort does the building. Fable is not involved again until Anton asks for a review.

## Work split (fixed)

| Who | Does | Does not |
|---|---|---|
| **Codex gpt-6-astra, low** (90–100%) | Everything in P1a–P1d: engine adaptation, manifest, content, templates, copy, form, PHP, estimator, deploy files, README, fix rounds | Decide scope, skip a step, escalate its own effort |
| **Sonnet director** | Dispatch each phase, capture session ids, run build + verify itself, open the preview, run the browser QA gate, compare rendered pages to the design export, send exact errors back, write the build log, report to Anton | Write site code beyond one-line fixes; spawn Fable; use tier hard without Anton saying so in that conversation; change the plan |
| **Anton** | P0 answers (CRM contract, operator name, partners, chef yes/no), pick a design, run Codex quota, approve deploy | |

Sonnet may do inline, without Codex: editing `launch.json`, saving the design export to `docs/design-canvas-export.html`, a single-line typo fix, writing `docs/log/build.md`.

## Inputs Sonnet expects to find

- `plan/08-V2-DECISIONS.md`, `04-BUILD-SPEC.md`, `03-OFFER-AND-FUNNEL.md`, `02-SEO-AND-SITEMAP.md` (the spec).
- `plan/P0-ANSWERS.md` written by Anton (template below). If missing, Sonnet still runs P1a–P1c with placeholders and stops before P1d with a list of what is blocked.
- `docs/design-canvas-export.html`: the winning Claude Design export. If missing, Codex uses the locked tokens from `prompts/DESIGN-1.txt` (fonts, colours, radii, scale) and the section order from that file.
- `AGENTS.md` at repo root (house rules for Codex).

## Phases (each one Codex dispatch, each audited before the next)

| Phase | Prompt | Codex does | Sonnet audits by |
|---|---|---|---|
| P1a | `prompts/P1a.txt` | Engine copy + comida adapter, verifier replacement, route manifest, all templates, home + hub + bodas + asuncion with real copy, placeholder assets, tokens from the design export | build + verify exit 0; 4 pages render at 390 and 1440 in preview; no console errors; grep for mojibake; git status shows only expected files |
| P1b | `prompts/P1b.txt` | Copy for the remaining 16 routes, FAQ, menus, related links, JSON-LD | build + verify exit 0; HTML count 21; sitemap 19 or 20; duplicate-paragraph script output read; spot-read 3 pages for forbidden words (24 h, verificados, any Gs number) |
| P1c | `prompts/P1c.txt` | Two-screen form, `lead-forward.php`, supplier form, estimator (inactive), GA4 events, `.htaccess` | build + verify; form UX with mocked handler in preview; PHP reviewed for the six rules in 04 §5; no key in `dist/` |
| P1d | `prompts/P1d.txt` | README, `make-zip.ps1`, `launch.json` entry, final verify | zip opens, contains `.htaccess` and `php/`, no logs or credentials |
| P1e | `prompts/P1e-APPLY-DESIGN.txt` | Apply `docs/design-canvas-export.html` tokens, layout and images to all templates (runs only once the design is approved; can come after P1d) | build + verify; home matches the export section by section at 390 and 1440; every slot has an image from the manifest |
| QA | Sonnet itself | Browser QA gate: 390px screenshots of `/`, `/catering/`, `/catering/bodas/`, `/catering/asuncion/`, `/precios/`, `/presupuesto/`; three `wa.me` links; form validation; Lighthouse once on home | Fixes go back to the Codex session that owns the file |

Stop rules: two failed fix rounds at low on one phase → stop, report exact error and session id to Anton, do not escalate. Any Codex output that drops or narrows a task → send back, do not accept.

## P0-ANSWERS.md template (Anton fills, 5 minutes)

```
operatorLegalName: 
operatorRUC:            (or "pending")
whatsappNumber:         +595 ...
hours:                  Lun a Vie 8:00 a 18:00, Sáb 8:00 a 12:00
chefPartnerSigned:      no
crmLeadsUrl:            https://crm.clientes.com.py/api/v1/leads   (confirm)
crmAuthHeader:          (name only, e.g. X-Tenant-Key; the value goes in the private config, never here)
crmLeadTypeClient:      
crmLeadTypeProvider:    
privateConfigPath:      (absolute path outside public_html on the Hostinger slot)
ga4MeasurementId:       (or "pending")
designExportSaved:      yes/no
```

## Report format back to Anton (end of run)

Task and repo · session ids with model and effort read from the session log · what was verified and how (commands, screenshots) · Codex findings rejected and why · open items · "Antes de publicar" checklist (P0 items still pending, PHP test on Hostinger, DNS).
