// Monthly Search Console review (idea 12). Export from Search Console → Performance → Export → CSV
// (or "Download CSV" in each tab) and pass the Pages.csv and Queries.csv files:
//   node scripts/gsc-report.mjs <folder-with-csvs>
// Writes docs/log/gsc-report-<date>.md with:
//   1. pages with impressions ≥ 100 and CTR < 2%  → rewrite title/meta (plan/05 P5 loop)
//   2. queries at position 5–15 with impressions ≥ 50 → strengthen the matching page
//   3. queries with no page of their own (no route whose title contains the query words) → content ideas
// Column names are matched loosely so English and Spanish exports both work.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=process.argv[2];
if(!dir||!fs.existsSync(dir)){console.error('Usage: node scripts/gsc-report.mjs <folder with Pages.csv and Queries.csv>');process.exit(2)}
function parseCsv(text){const rows=[];let row=[],cell='',q=false;for(let i=0;i<text.length;i++){const c=text[i];if(q){if(c==='"'&&text[i+1]==='"'){cell+='"';i++}else if(c==='"')q=false;else cell+=c;continue}if(c==='"')q=true;else if(c===','){row.push(cell);cell=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell=''}else cell+=c}if(cell||row.length){row.push(cell);rows.push(row)}return rows.filter(r=>r.length>1)}
function table(file){
  const p=fs.readdirSync(dir).find(f=>f.toLowerCase().startsWith(file));if(!p)return [];
  const [head,...rows]=parseCsv(fs.readFileSync(path.join(dir,p),'utf8').replace(/^﻿/,''));
  const col=re=>head.findIndex(h=>re.test(h.toLowerCase()));
  const key=col(/page|página|query|consulta|top/),clicks=col(/click|clic/),imp=col(/impression|impresion/),ctr=col(/ctr/),pos=col(/position|posici/);
  const num=v=>parseFloat(String(v).replace('%','').replace(',','.'))||0;
  return rows.map(r=>({key:r[key],clicks:num(r[clicks]),impressions:num(r[imp]),ctr:num(r[ctr]),position:num(r[pos])}));
}
const pages=table('pages').concat(table('páginas'));
const queries=table('queries').concat(table('consultas'));
if(!pages.length&&!queries.length){console.error('No Pages/Queries CSV found in '+dir);process.exit(1)}
const {default:routes}=await import('../sites/comida/routes.mjs');
const titleOf=url=>{const p=url.replace(/^https?:\/\/[^/]+/,'');return routes.find(r=>r.path===p)?.title||'(no route)'};
const lowCtr=pages.filter(p=>p.impressions>=100&&p.ctr<2).sort((a,b)=>b.impressions-a.impressions).slice(0,30);
const striking=queries.filter(q=>q.position>=5&&q.position<=15&&q.impressions>=50).sort((a,b)=>b.impressions-a.impressions).slice(0,40);
const words=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').split(/\s+/).filter(w=>w.length>3);
const titles=routes.filter(r=>r.published&&r.indexable).map(r=>words(r.title).join(' '));
const gaps=queries.filter(q=>q.impressions>=30&&!titles.some(t=>words(q.key).every(w=>t.includes(w)))).sort((a,b)=>b.impressions-a.impressions).slice(0,30);
const date=new Date().toISOString().slice(0,10);
const md=`# Search Console review ${date}\n\nSource: ${dir}\n\n## 1. Rewrite title and meta (impressions ≥ 100, CTR < 2%)\n\n| Page | Impressions | CTR | Position | Current title |\n|---|---|---|---|---|\n${lowCtr.map(p=>`| ${p.key} | ${p.impressions} | ${p.ctr}% | ${p.position.toFixed(1)} | ${titleOf(p.key)} |`).join('\n')||'| none | | | | |'}\n\n## 2. Striking distance (position 5–15, impressions ≥ 50)\n\n| Query | Impressions | Position | Clicks |\n|---|---|---|---|\n${striking.map(q=>`| ${q.key} | ${q.impressions} | ${q.position.toFixed(1)} | ${q.clicks} |`).join('\n')||'| none | | | |'}\n\n## 3. Queries without a page of their own (content ideas)\n\n| Query | Impressions | Position |\n|---|---|---|\n${gaps.map(q=>`| ${q.key} | ${q.impressions} | ${q.position.toFixed(1)} |`).join('\n')||'| none | | |'}\n`;
const outFile=path.join(root,'docs/log',`gsc-report-${date}.md`);fs.writeFileSync(outFile,md);
console.log(`GSC report: ${lowCtr.length} low-CTR pages, ${striking.length} striking-distance queries, ${gaps.length} gaps → ${path.relative(root,outFile)}`);
