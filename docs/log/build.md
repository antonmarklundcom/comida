# Build log — comida.com.py

Single source of truth for build state and the standing overrides. Every Codex dispatch
reads this file first. Append to it; do not rewrite history.

## Standing overrides (Anton, 2026-09-19/20)

These beat anything in the plan files and in `plan/P0-ANSWERS.md`.

| Item | Value |
|---|---|
| WhatsApp | `+595992279599`, in every `wa.me` link, always with a prefilled voseo message |
| Operator legal name / RUC | none yet → render **no** operator legal line; keep only "Servicio de referencia y coordinación. Cada proveedor contrata y factura directamente." |
| Hours | Lun a Vie 8:00 a 18:00, Sáb 8:00 a 12:00 |
| `chefPartnerSigned` | no → `/chef-a-domicilio/` built, `indexable: false`, hidden from nav and sitemap |
| viandas partner | none → `/viandas/*` built the same way, behind one config gate |
| VenderCRM | deferred → form posts to the PHP handler, WhatsApp fallback on any failure |
| Images | only the 29 entries in `docs/imagery-manifest.json` and the files in `assets/img`. Never invent a filename. **Never generate new images without asking Anton** (Higgsfield credits: 31.5 of a 60 cap spent) |
| Design | `docs/design-exports/opus-1.html` is approved and already applied in P1a. Locked tokens live in `plan/prompts/DESIGN-1.txt`; `--gold` and `--char` were added from the photography and are approved |
| Publishing | static HTML/CSS/vanilla JS + one PHP handler, Hostinger, no runtime Node, no CI files, no secrets in repo or dist |

## Model policy

Codex CLI `gpt-6-astra` at **low** effort does the implementation. Never escalate to high;
if a phase fails twice at low, stop and write the exact error here for Anton. The Claude
session directs, audits and makes taste calls. Never spawn Fable or any subagent on Fable.

Dispatch shape (Windows, avoid embedded double quotes in the task string):

```
C:\Users\anton\.local\bin\codex.cmd exec -C "C:/Claude 1/comida-com-py" --skip-git-repo-check -s workspace-write -c model="gpt-6-astra" -c model_reasoning_effort="low" "<task>"
```

## Audit recipe (run every phase; never accept a Codex report unreproduced)

1. `node engine/build-site.mjs --site=comida` → exit 0
2. `node engine/verify.mjs --site=comida` → exit 0
3. `node scripts/check-duplicates.mjs` → 0 shared paragraphs
4. Serve `dist/comida.com.py` (launch entry `comida-preview`, port 8093) and **look at the
   pages** at 1440 and 390: console clean, no horizontal scroll, images present, 48px tap
   targets, nothing overlapping.
5. `grep` dist for forbidden words (AGENTS.md rule 5), guaraní amounts, mojibake, bare
   `wa.me` links (a form `action` is not a link), secrets.
6. Commit with the phase name and the counts.

**Why step 4 is not optional:** Codex's sandbox cannot open localhost. It has reported
"build and verify exit 0" while the page was visibly broken — a missing WhatsApp glyph in
five places, oversized numerals sitting on top of their headings, and a favicon 404 on
every page. All three were found only by screenshotting.

## State

| Date | Commit | Phase | Result |
|---|---|---|---|
| 2026-09-19 | `5d50342` | Baseline + P1a | Engine adapter, 20-route manifest, 18 templates, tokens and layout from the approved design, real copy for `/`, `/catering/`, `/catering/bodas/`, `/catering/asuncion/`. Build + verify exit 0. |
| 2026-09-20 | `0301447` | P1b | Remaining 16 routes. **21 HTML, 18 sitemap URLs**, 7 occasion pages, 21 menus, 42 unique FAQ, 188 substantive paragraphs, 0 shared. Verify 4380 checks. Manager fixes: accent in "Depende del menú"; step-numeral padding at 390. |

Known good counts after P1b: **21 HTML / 18 sitemap URLs**. `plan/09`'s expectation of
19–20 sitemap URLs was arithmetic error: 21 pages minus chef, gracias and 404 is 18.

## Remaining phases

| Phase | Prompt | What |
|---|---|---|
| P1c | `plan/prompts/P1c.txt` | Two-screen form, `php/lead-forward.php` per plan/04 §5, supplier form, estimator inactive, GA4 events, `.htaccess` |
| P1d | `plan/prompts/P1d.txt` | README, `deploy/make-zip.ps1`, launch.json entry, final verify |
| P1e | `plan/prompts/P1e-DESIGN-PARITY.txt` | Design parity across templates + the Flagged items in `docs/log/codex-review-opus-1.md` (supersedes `P1e-APPLY-DESIGN.txt`, which names a file that never existed) |
| P2 | `plan/prompts/P2-VIANDAS.txt` | `/viandas/` line, built but not indexable |
| P3 | `plan/prompts/P3-IA-RESERVE.txt` | Reserved kinds for `/restaurantes/`, `/carne/`, `/asado/`, `/recetas/`; commented asado.com.py 301 |
| P4 | `plan/prompts/P4-GUIAS.txt` | First three guides under `/guias/`, five-point quality bar |
| P5 | `plan/prompts/P5-QA-GATE.txt` | `scripts/qa-gate.mjs`, zip verification, `docs/log/qa-report.md` |
| P6 | `plan/prompts/P6-FINAL-REVIEW.txt` | Codex's independent final review → `docs/log/codex-final-review.md`, ideas only |

Finish by writing `docs/log/fable-review-package.md` per Anton's Fable directive.

## Blocked on Anton

- Operator legal name and RUC (no operator line ships until then)
- Signed catering, chef and vianda partners
- VenderCRM contract: auth header name, lead type values, payload mapping
- The five PHP test cases on Hostinger, after upload
- `/terminos/` and `/privacidad/` reviewed by a lawyer
- DNS: domain not pointed anywhere yet. Do not deploy and do not touch any domain.
