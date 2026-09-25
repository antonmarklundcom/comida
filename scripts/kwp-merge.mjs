// Merge every Keyword Planner round into plan/research/kwp-all.csv.
// Columns: keyword, volume, cpc_low_sek, cpc_high_sek, rounds, topics. One row per keyword
// (case/accents kept from the first spelling; duplicates matched lowercase + trimmed).
// Volume and CPC come from the most recent round that has the keyword. Sorted by volume.
// Add a new round: save it as plan/research/kwp-roundN.csv with list,keyword,volume,cpc_low_sek,cpc_high_sek
// and add it to ROUNDS below. Usage: node scripts/kwp-merge.mjs
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../plan/research');
function parseCsv(text){
  const rows=[];let row=[],cell='',q=false;
  for(let i=0;i<text.length;i++){const c=text[i];
    if(q){if(c==='"'&&text[i+1]==='"'){cell+='"';i++}else if(c==='"')q=false;else cell+=c;continue}
    if(c==='"')q=true;else if(c===','){row.push(cell);cell=''}else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell=''}else cell+=c}
  if(cell||row.length){row.push(cell);rows.push(row)}
  const [head,...body]=rows.filter(r=>r.length>1);return body.map(r=>Object.fromEntries(head.map((h,i)=>[h.trim(),(r[i]??'').trim()])));
}
// round number, file, how to read topic / cpc columns
const ROUNDS=[
  [1,'kwp-parsed.csv',r=>({topic:r.class,low:r.bid_low,high:r.bid_high})],
  [2,'kwp-round2-parsed.csv',r=>({topic:r.class,low:r.bid_low,high:r.bid_high})],
  [3,'kwp-round3.csv',r=>({topic:r.list,low:r.cpc_low_sek,high:r.cpc_high_sek})],
  [4,'kwp-round4.csv',r=>({topic:r.list,low:r.cpc_low_sek,high:r.cpc_high_sek})],
  [5,'kwp-round5.csv',r=>({topic:r.list,low:r.cpc_low_sek,high:r.cpc_high_sek})],
  [6,'kwp-round6.csv',r=>({topic:r.list,low:r.cpc_low_sek,high:r.cpc_high_sek})],
];
const all=new Map();let rowsIn=0;
for(const [n,file,map] of ROUNDS){
  const p=path.join(dir,file);if(!fs.existsSync(p)){console.warn('missing '+file);continue}
  for(const r of parseCsv(fs.readFileSync(p,'utf8'))){
    const kw=(r.keyword||'').trim();if(!kw)continue;rowsIn++;
    const key=kw.toLowerCase().replace(/\s+/g,' '),m=map(r),vol=parseInt(String(r.volume).replace(/\D/g,''),10)||0;
    const prev=all.get(key)||{keyword:kw,rounds:new Set(),topics:new Set()};
    prev.rounds.add(n);if(m.topic)prev.topics.add(m.topic);
    if(!prev.round||n>=prev.round){prev.round=n;prev.volume=vol;prev.low=m.low||prev.low||'';prev.high=m.high||prev.high||''}
    all.set(key,prev);
  }
}
const esc=v=>/[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;
const sorted=[...all.values()].sort((a,b)=>b.volume-a.volume||a.keyword.localeCompare(b.keyword,'es'));
const lines=['keyword,volume,cpc_low_sek,cpc_high_sek,rounds,topics',...sorted.map(r=>[r.keyword,String(r.volume),r.low,r.high,[...r.rounds].join(' '),[...r.topics].join(' ')].map(esc).join(','))];
fs.writeFileSync(path.join(dir,'kwp-all.csv'),lines.join('\n')+'\n');
console.log(`KWP merge OK: ${rowsIn} rows from ${ROUNDS.length} rounds -> ${sorted.length} unique keywords in plan/research/kwp-all.csv`);
