// Internal link report (idea 9): how many other pages link to each indexable page from their main content
// (header and footer navigation do not count). Pages with fewer than --min inbound links are listed with
// suggested source pages that share keywords or categories but do not link to them yet.
//   node scripts/link-report.mjs [--min=3] [--write]     (build first; --write saves docs/log/link-report.md)
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadSite} from '../engine/site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const arg=name=>process.argv.find(a=>a.startsWith('--'+name+'='))?.split('=')[1];
const min=Number(arg('min')||3),write=process.argv.includes('--write');
if(!process.argv.some(a=>a.startsWith('--site=')))process.argv.push('--site=comida');
const {routes,pages,out}=await loadSite();
if(!fs.existsSync(path.join(out,'index.html'))){console.error('Build first: node engine/build-site.mjs --site=comida');process.exit(1)}
const fileFor=p=>path.join(out,p,'index.html');
const indexable=routes.filter(r=>r.published&&r.indexable&&r.kind!=='404');
const known=new Set(indexable.map(r=>r.path));
const outgoing=new Map();
for(const r of routes.filter(r=>r.published)){
  const f=fileFor(r.path);if(!fs.existsSync(f))continue;
  const html=fs.readFileSync(f,'utf8').replace(/<header class="header">[\s\S]*?<\/header>/,'').replace(/<footer class="footer">[\s\S]*?<\/footer>/,'');
  const links=new Set([...html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)].map(m=>m[1]).filter(p=>p!==r.path&&known.has(p)));
  outgoing.set(r.path,links);
}
const inbound=new Map(indexable.map(r=>[r.path,new Set()]));
for(const [from,links] of outgoing)for(const to of links)inbound.get(to)?.add(from);
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const words=p=>new Set(norm([...(p.keywords||[]),p.label,p.h1].join(' ')).split(/[^a-z0-9ñ]+/).filter(w=>w.length>3&&!['para','como','casa','receta','recetas','comida','paraguaya','paraguay'].includes(w)));
const pageOf=r=>pages.find(p=>p.id===r.id)||{};
const contentKinds=['recipe','guide','cut','ingredient','collection','vianda','product'];
const weak=indexable.filter(r=>r.kind!=='home'&&inbound.get(r.path).size<min).sort((a,b)=>inbound.get(a.path).size-inbound.get(b.path).size||a.path.localeCompare(b.path));
const suggest=r=>{const w=words(pageOf(r)),cats=new Set(pageOf(r).category||[]);return indexable.filter(s=>s.path!==r.path&&contentKinds.includes(s.kind)&&!outgoing.get(s.path)?.has(r.path)).map(s=>{const p=pageOf(s);let score=0;for(const x of words(p))if(w.has(x))score+=2;for(const c of p.category||[])if(cats.has(c))score+=1;return {s,score}}).filter(x=>x.score>=3).sort((a,b)=>b.score-a.score).slice(0,5).map(x=>x.s.path)};
const lines=[`# Internal link report (${new Date().toISOString().slice(0,10)})`,'',`${indexable.length} indexable pages. Links counted from main content only (header and footer excluded). Threshold: ${min} linking pages.`,'',`**${weak.length} pages have fewer than ${min} pages linking to them.**`,'','| Page | Kind | Linking pages | Suggested pages to add a link from |','|---|---|---|---|',...weak.map(r=>`| ${r.path} | ${r.kind} | ${inbound.get(r.path).size} | ${suggest(r).join(', ')||'none with shared keywords'} |`)];
const counts=[...inbound.values()].map(s=>s.size).sort((a,b)=>a-b);
console.log(`Link report: ${indexable.length} pages; median ${counts[Math.floor(counts.length/2)]} linking pages; ${weak.length} below ${min}; ${weak.filter(r=>inbound.get(r.path).size===0).length} with none.`);
for(const r of weak.slice(0,15))console.log(`  ${String(inbound.get(r.path).size).padStart(2)}  ${r.path}`);
if(weak.length>15)console.log(`  … ${weak.length-15} more${write?'':' (use --write for the full list)'}`);
if(write){const f=path.join(root,'docs/log/link-report.md');fs.writeFileSync(f,lines.join('\n')+'\n');console.log('Wrote '+path.relative(root,f))}
