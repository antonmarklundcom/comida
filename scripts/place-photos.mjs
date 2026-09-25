// Places the 2026-09-25 photo batch (ids 54-86) once webimg has written the files to assets/img.
// Does steps 4 and 5 of plan/handoff/photos-cloud-prompt.md: manifest entries + image:<id> in content modules.
// Usage: node scripts/place-photos.mjs [--dry-run]   (safe to run twice: existing ids are skipped)
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const dry = process.argv.includes('--dry-run');
const CSV = 'plan/handoff/photos-2026-09-25-jobs.csv';
const MANIFEST = 'docs/imagery-manifest.json';
const FIRST_ID = 54;
const SOURCE_SIZE = { width: 1168, height: 880 }; // measured on the source PNGs, 2026-09-25
const WIDTHS = [640, 1024];

// Content module ids per image id (from photos-cloud-prompt.md step 5).
const PLACEMENT = {
  54: ['guia-churrasqueria'],
  55: ['receta-surubi-a-la-parrilla', 'guia-surubi'],
  56: ['guia-pescados-de-rio', 'producto-pescado'],
  57: ['receta-tapa-de-cuadril-al-horno', 'corte-tapa-de-cuadril'],
  58: ['guia-parrilla-para-asadito'],
  59: ['receta-jugos-para-ninos'],
  60: ['guia-cortes-de-pollo'],
  61: ['catering-empanadas-para-eventos'],
  62: ['guia-parrillada', 'guia-asado-a-la-parrilla'],
  63: ['receta-avena-con-frutas', 'coleccion-desayunos-saludables'],
  64: ['receta-bowl-de-yogur-con-frutas', 'coleccion-meriendas-saludables'],
  65: ['receta-cordero-al-horno', 'corte-cordero', 'corte-cabrito'],
  66: ['receta-panceta-crocante', 'corte-panceta'],
  67: ['guia-cortes-de-cerdo', 'corte-carre-de-cerdo'],
  68: ['guia-tipos-de-queso'],
  69: ['receta-ensalada-de-garbanzos', 'coleccion-cenas-saludables'],
  70: ['receta-omelette-de-verduras'],
  71: ['receta-queso-cottage-casero'],
  72: ['guia-carne-magra', 'corte-cuadrada', 'corte-bola-de-lomo', 'corte-nalga'],
  73: ['catering-hamburguesas-para-eventos'],
  74: ['receta-lechon-al-horno', 'corte-lechon', 'catering-lechon-para-eventos'],
  75: ['receta-tomahawk-a-la-parrilla', 'corte-tomahawk', 'corte-chuleton'],
  76: ['receta-suprema-de-pollo-rellena'],
  77: ['receta-colita-de-cuadril-a-la-parrilla', 'corte-colita-de-cuadril'],
  78: ['receta-matambre-arrollado'],
  79: ['corte-garron'],
  80: ['receta-pernil-de-cerdo-al-horno', 'corte-pernil-de-cerdo'],
  81: ['receta-alitas-de-pollo-al-horno'],
  82: ['receta-pacu-a-la-parrilla', 'guia-pacu'],
  83: ['receta-dorado-al-horno', 'guia-dorado'],
  84: ['receta-costillas-de-cerdo-a-la-barbacoa'],
  85: ['catering-pizza-para-eventos'],
  86: ['receta-asado-de-tira-a-la-parrilla', 'corte-costilla-de-vaca', 'corte-tapa-de-asado'],
};

const NOTES = {
  cost_preflight: ' | Round 5 (2026-09-25, meat deep pages): 33 x 4:3 1k medium Sunburst = 0.5 each, 16.5; running total 60.0 = cap.',
  ledger_checked: ' | Round 5 verified 2026-09-25: 33 lines at 05:18:18-05:19:42Z, all -0.5 GPT Image 2.5 Sunburst = 16.5. The 05:12Z and 05:14Z lines were not this batch.',
  download_status: ' | round 5 (2026-09-25): 33 meat/fish images, source 1168x880, converted with webimg to 640/1024 AVIF+WebP, no upscaling. Visual review in plan/handoff/photos-2026-09-25-review.md (no rejects).',
};

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some(Boolean)) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field || row.length) { row.push(field); if (row.some(Boolean)) rows.push(row); }
  const [head, ...body] = rows;
  return body.map(r => Object.fromEntries(head.map((h, n) => [h.trim(), (r[n] || '').trim()])));
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith('.mjs') ? [path.join(dir, e.name)] : []);
}

const rows = parseCsv(fs.readFileSync(path.join(root, CSV), 'utf8'));
if (rows.length !== 33) throw Error(`Expected 33 CSV rows, got ${rows.length}`);

const manifestPath = path.join(root, MANIFEST);
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const imgDir = path.join(root, 'assets/img');
const imgFiles = new Set(fs.existsSync(imgDir) ? fs.readdirSync(imgDir) : []);

const modules = new Map();
for (const file of walk(path.join(root, 'sites/comida/content'))) {
  const m = fs.readFileSync(file, 'utf8').match(/^\s*id:\s*'([^']+)'/m);
  if (m) modules.set(m[1], file);
}

const placed = [], skipped = [], missingModules = [], edited = new Set();
let added = 0;

rows.forEach((row, n) => {
  const id = FIRST_ID + n;
  const needed = WIDTHS.flatMap(w => ['avif', 'webp'].map(t => `${row.name}-${w}.${t}`));
  const absent = needed.filter(f => !imgFiles.has(f));
  if (absent.length) { skipped.push(`${id} ${row.name} (${absent.length} of 4 files missing)`); return; }

  if (!manifest.images.some(i => i.id === id)) {
    const job = row.file.match(/hf_\d{8}_\d{6}_([0-9a-f-]{36})/);
    manifest.images.push({
      id, slot: 'page:' + PLACEMENT[id][0], file: row.name, alt_es: row.alt,
      ratio: '4:3', px: '1k', model: 'gpt_image_2_5', variant: 'sunburst', quality: 'medium', resolution: '1k',
      prompt: row.prompt, url: row.file, job_id: job ? job[1] : '', ...SOURCE_SIZE,
    });
    added++;
  }

  for (const pageId of PLACEMENT[id]) {
    const file = modules.get(pageId);
    if (!file) { missingModules.push(`${id} -> ${pageId}`); continue; }
    let src = fs.readFileSync(file, 'utf8');
    const before = src;
    if (/^\s*image:\s*\d+,/m.test(src)) src = src.replace(/^(\s*)image:\s*\d+,/m, `$1image:${id},`);
    else {
      const anchor = /^\s*keywords:.*$/m.test(src) ? /^\s*keywords:.*$/m : /^\s*cardText:.*$/m;
      src = src.replace(anchor, m => `${m}\n${m.match(/^\s*/)[0]}image:${id},`);
    }
    if (src === before && !new RegExp(`^\\s*image:${id},`, 'm').test(src)) { missingModules.push(`${id} -> ${pageId} (no keywords or cardText line)`); continue; }
    if (src !== before) { if (!dry) fs.writeFileSync(file, src, 'utf8'); edited.add(path.relative(root, file)); }
  }
  placed.push(id);
});

// Existing images, no new files.
for (const [id, pageIds] of [[52, ['guia-ideas-de-torta-de-cumpleanos']], [45, ['receta-matambrito-de-cerdo-a-la-pizza', 'corte-matambrito-de-cerdo']]]) {
  for (const pageId of pageIds) {
    const file = modules.get(pageId);
    if (!file) { missingModules.push(`${id} -> ${pageId}`); continue; }
    if (!new RegExp(`^\\s*image:${id},`, 'm').test(fs.readFileSync(file, 'utf8'))) missingModules.push(`${id} -> ${pageId} (not set yet)`);
  }
}

if (added) {
  const notes = manifest._notes;
  for (const [key, text] of Object.entries(NOTES)) if (!String(notes[key] || '').includes('Round 5') && !String(notes[key] || '').includes('round 5')) notes[key] = (notes[key] || '') + text;
  notes.actual_spend_credits = 60;
  if (!dry) fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

console.log(`${dry ? '[dry run] ' : ''}Placed ${placed.length}/33 images; ${added} manifest entries added; ${edited.size} content modules edited.`);
if (skipped.length) console.log('Skipped (files not in assets/img):\n  ' + skipped.join('\n  '));
if (missingModules.length) { console.log('Problems:\n  ' + missingModules.join('\n  ')); process.exitCode = 1; }
