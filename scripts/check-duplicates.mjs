import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {walk} from '../engine/site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'dist/comida.com.py');
const files=walk(out).filter(f=>f.endsWith('.html'));
if(!files.length){console.error('Duplicate check FAILED: no built HTML. Run the build first.');process.exit(1)}
const decode=s=>s.replace(/&#x([a-f\d]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(+n)).replace(/&(amp|quot|apos|lt|gt|nbsp|#39);/g,(_,n)=>({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ','#39':"'"}[n]));
const paragraphs=new Map();let checked=0;
for(const file of files){
 let body=fs.readFileSync(file,'utf8').match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||'';
 // Match the verifier's substantive threshold: 100 normalized characters.
 // Only explicitly identified legal/process blocks are excluded, never whole pages.
 body=body.replace(/<(script|style|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<section\b[^>]*data-shared="(?:legal|process)"[^>]*>[\s\S]*?<\/section>/gi,'').replace(/<section\b[^>]*(?:class="how"|id="como-funciona")[^>]*>[\s\S]*?<\/section>/gi,'');
 for(const match of body.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)){
  const p=decode(match[1].replace(/<[^>]*>/g,' ')).normalize('NFC').replace(/\s+/g,' ').trim().toLocaleLowerCase('es-PY');
  if(p.length<100)continue;checked++;
  if(!paragraphs.has(p))paragraphs.set(p,new Set());
  paragraphs.get(p).add(path.relative(out,file).replaceAll('\\','/'));
 }
}
const duplicates=[...paragraphs.values()].filter(p=>p.size>1);
console.log(`Duplicate check ${duplicates.length?'FAILED':'OK'}: ${files.length} HTML files; ${checked} substantive paragraphs; ${duplicates.length} shared paragraphs.`);
// Report locations only: never dump page contents.
for(const [i,paths] of duplicates.entries())console.error(`Shared paragraph ${i+1}: ${[...paths].join(', ')}`);
if(duplicates.length)process.exitCode=1;
