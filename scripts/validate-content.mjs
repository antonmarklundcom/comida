// Validate content modules without building: node scripts/validate-content.mjs [file-or-dir ...]
// Default: every module in sites/comida/content/{recipes,guides,cuts,viandas}. Exit 1 on any error.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {UNIT_KEYS} from '../templates/recipe-lib.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base=path.join(root,'sites/comida/content');
const args=process.argv.slice(2);
const targets=(args.length?args:['recipes','guides','cuts','viandas','ingredients','seasons','products'].map(d=>path.join(base,d))).flatMap(t=>{const p=path.resolve(t);return fs.statSync(p).isDirectory()?fs.readdirSync(p).filter(f=>f.endsWith('.mjs')&&!f.startsWith('_')).map(f=>path.join(p,f)):[p]});
const FORBIDDEN=/24\s*(?:h\b|horas)|2\s*(?:a|–|-)\s*3\s*presupuestos|verificad[oa]s?|garantizad[oa]|todo Paraguay|testimonios|reseñas|(?:Gs\.?|₲|\$|USD)\s*\d|\d[\d.,]*\s*(?:Gs\.?|₲|dólares|guaraníes)\b/i;
// Common tuteo forms; the site writes in Paraguayan voseo (podés, tenés, agregá, mezclá).
const TUTEO=/(?<![a-záéíóúñ])(puedes|tienes|debes|quieres|necesitas|sabes|prefieres|añade|añádele|agrégale|mezcla bien|deja reposar|tú)(?![a-záéíóúñ])/i;
const errors=[],warnings=[];let n=0;
const all=[];
for(const file of targets){const mod=(await import(pathToFileURL(file).href+'?'+Date.now())).default;all.push([file,mod])}
const ids=new Set();for(const [,m] of all)ids.add(m.id);
// Known ids elsewhere in the site (hubs, catering) so related links can be checked.
// Core pages (catering, support) from the manifest's static part.
{const src=fs.readFileSync(path.join(root,'sites/comida/routes.mjs'),'utf8');for(const m of src.matchAll(/"id": "([^"]+)"/g))ids.add(m[1])}
// Other writers may be mid-save: a file that does not parse yet is skipped here (it fails its own validation).
for(const dir of ['recipes','guides','cuts','viandas','ingredients','seasons','products','_incoming/recipes','_incoming/ingredients','_incoming/seasons'])if(fs.existsSync(path.join(base,dir)))for(const f of fs.readdirSync(path.join(base,dir)).filter(f=>f.endsWith('.mjs'))){try{ids.add((await import(pathToFileURL(path.join(base,dir,f)).href)).default.id)}catch{}}
for(const [file,m] of all){
  n++;const tag=path.relative(root,file)+': ',err=s=>errors.push(tag+s),warn=s=>warnings.push(tag+s);
  for(const k of ['id','slug','kind','label','seoTitle','meta','h1','source','verifiedAt','updatedAt','intro'])if(!m[k])err('missing '+k);
  if(typeof m.published!=='boolean'||typeof m.indexable!=='boolean')err('published/indexable must be booleans');
  if(!/^[a-z0-9-]+$/.test(m.slug||''))err('slug must be lowercase ascii with hyphens');
  if(path.basename(file,'.mjs')!==m.slug&&!m.path)warn('file name differs from slug');
  if((m.seoTitle||'').length>44)err(`seoTitle is ${m.seoTitle.length} chars; max 44 (the site adds " | comida.com.py")`);
  if((m.meta||'').length>155||(m.meta||'').length<90)err(`meta is ${(m.meta||'').length} chars; keep 90-155`);
  if(!/^\d{4}-\d{2}-\d{2}$/.test(m.verifiedAt||''))err('verifiedAt must be YYYY-MM-DD');
  const text=JSON.stringify(m);
  if(FORBIDDEN.test(text))err('forbidden wording or a price: '+text.match(FORBIDDEN)[0]);
  if(TUTEO.test(text))warn('possible tuteo: "'+text.match(TUTEO)[0]+'" (use voseo)');
  if(/Ã|Â|â€/.test(text))err('mojibake');
  for(const id of [...(m.related||[]),...(m.guides||[]),...(m.recipes||[])])if(!ids.has(id))warn('related id not found yet: '+id);
  if(m.kind==='recipe'){
    if(!m.times||typeof m.times.prep!=='number'||typeof m.times.cook!=='number')err('times.prep and times.cook must be numbers (minutes)');
    const y=m.yield;if(!y||!['porciones','kilos'].includes(y.mode)||!y.options?.includes(y.base)||!y.yieldText||!y.note)err('yield needs mode (porciones|kilos), base included in options, yieldText, note');
    const items=(m.ingredients||[]).flatMap(g=>g.items||[]);if(items.length<3)err('at least 3 ingredients');
    for(const i of items){if(!i.item)err('ingredient without item');if(i.q!=null&&(typeof i.q!=='number'||i.q<=0))err('bad quantity for '+i.item);if(i.u&&!UNIT_KEYS.includes(i.u))err(`unknown unit "${i.u}" for ${i.item}; use one of ${UNIT_KEYS.join(', ')}`);if(i.q==null&&!i.note)warn('ingredient without quantity should say "al gusto" in note: '+i.item)}
    if((m.steps||[]).length<4)err('at least 4 steps');for(const s of m.steps||[]){if(!s.title||!s.text)err('step needs title and text');if(s.text&&s.text.length<60)warn('short step: '+s.title)}
    if((m.faq||[]).length<4)err('at least 4 FAQ');if((m.tips||[]).length<3)err('at least 3 tips');
    if(!m.difficulty||!m.course)err('difficulty and course required');
    if(m.kiloTable)for(const ref of m.kiloTable.items)if(!items.some(i=>i.item===ref))err('kiloTable item not in ingredients: '+ref);
  }
  if(['ingredient','collection'].includes(m.kind)){
    if((m.sections||[]).length<2)err('at least 2 sections');if((m.faq||[]).length<4)err('at least 4 FAQ');
    if(m.kind==='ingredient'&&!(m.match||[]).length)err('ingredient needs match terms');
    if(m.kind==='collection'&&(m.recipes||[]).length<6)err('collection needs at least 6 recipe ids');
    const words=text.split(/\s+/).length;if(words<350)warn('thin content: ~'+words+' words');
  }
  if(['guide','cut','vianda'].includes(m.kind)){
    if((m.sections||[]).length<3)err('at least 3 sections');if((m.faq||[]).length<4)err('at least 4 FAQ');
    const words=text.split(/\s+/).length;if(words<500)warn('thin content: ~'+words+' words');
  }
  const paras=[...(m.intro||[]),...(m.sections||[]).flatMap(s=>[...(s.paragraphs||[]),...(s.after||[])])];for(const p of paras)if(p.length>=100&&paras.filter(q=>q===p).length>1)err('repeated paragraph inside the module');
}
for(const w of warnings)console.warn('WARN '+w);
for(const e of errors)console.error('ERROR '+e);
console.log(`Content validation ${errors.length?'FAILED':'OK'}: ${n} modules, ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length?1:0);
