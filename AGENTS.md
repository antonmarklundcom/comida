# AGENTS.md — house rules for any worker on comida.com.py (Codex or Claude)

You are the implementation worker. A Claude Code manager session dispatches phases, audits by running the build, and sends errors back. Do the task as written. Since 2026-09-24 the site is a Paraguayan food hub (recipes, guides, meat cuts) with catering as the revenue layer; content writers follow `plan/prompts/CONTENT-WRITER.md`.

## Rules
1. Never drop, narrow or substitute a step on your own judgment. Run it and flag it, or stop and ask.
2. Never print, echo, log or write secrets, tokens or API keys. The CRM key lives only in a private config file outside `public_html`, at an absolute path documented in README.md.
3. Report in short summaries with file paths and counts, never file dumps.
4. Where plan files disagree: `plan/08-V2-DECISIONS.md` wins, then `plan/04-BUILD-SPEC.md`.
5. Forbidden in rendered text: 24 h, 24 horas, 2 a 3 presupuestos, verificados, garantizado, todo Paraguay, any price number, testimonials, partner names, review counts, logos.
6. Spanish is Paraguayan with voseo (Contanos, Pedí, Elegí, Escribinos). Save every file as UTF-8 without BOM; check for mojibake before reporting.
7. Static output only: HTML, CSS, vanilla JS and one PHP handler. No frameworks, no build-time network calls, no CI files under `.github/`.

## Environment
- Build: `node engine/build-site.mjs --site=comida` · verify: `node engine/verify.mjs --site=comida` · content: `node scripts/validate-content.mjs` · duplicates: `node scripts/check-duplicates.mjs` · QA: `node scripts/qa-gate.mjs` · PHP: `node scripts/php-handler-test.mjs` · preview: `comida-preview` in `C:Claude 1.claudelaunch.json`, port 8093.
- Content modules live in `sites/comida/content/{recipes,guides,cuts,viandas}/`, one file per page; the route manifest loads them. Parallel writers must not run the build (it wipes `dist/`); they run the content validator only.
- Node 24 is installed. PHP 8.3 is at `C:/php/php.exe`.
- The Bash tool on this laptop drops backslashes inside heredocs: write code with regexes through file-writing tools, not heredocs.
- No Docker, no zip tool on PATH: use PowerShell `Compress-Archive` in `deploy/make-zip.ps1`.
- VenderCRM leads endpoint base: `https://crm.clientes.com.py/api/v1/leads` (confirm in `plan/P0-ANSWERS.md`).
- Windows: avoid embedded double quotes in shell arguments; prefer files for long text.

## Definition of done for every dispatch
Build and verify exit 0, counts printed, git status contains only the files the task names, Assumptions and Flagged lists included in the report.
