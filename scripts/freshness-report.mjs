// Content freshness report (idea 19): pages not updated for a while, and season collections to refresh
// before their season starts (Semana Santa is dated from Easter; the others use fixed windows).
//   node scripts/freshness-report.mjs [--days=180] [--ahead=45] [--today=YYYY-MM-DD] [--write]
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const arg=name=>process.argv.find(a=>a.startsWith('--'+name+'='))?.split('=')[1];
const maxAge=Number(arg('days')||180),ahead=Number(arg('ahead')||45),write=process.argv.includes('--write');
const today=arg('today')?new Date(arg('today')+'T12:00:00'):new Date(),day=864e5;
const dir=path.join(root,'sites/comida/content');
const modules=[];
for(const kind of fs.readdirSync(dir).filter(k=>fs.statSync(path.join(dir,k)).isDirectory()))for(const f of fs.readdirSync(path.join(dir,kind)).filter(f=>f.endsWith('.mjs')))modules.push({file:`sites/comida/content/${kind}/${f}`,m:(await import(path.join(dir,kind,f))).default});
const age=m=>Math.floor((today-new Date((m.updatedAt||'2000-01-01')+'T12:00:00'))/day);
function easter(Y){const a=Y%19,b=Math.floor(Y/100),c=Y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(Y,mo-1,da,12)}
// Same windows as the home seasonal block in public/js/site.js.
const starts=Y=>({'semana-santa':new Date(easter(Y)-35*day),'san-juan':new Date(Y,4,15,12),navidad:new Date(Y,10,15,12),'fin-de-ano':new Date(Y,10,15,12)});
const upcoming=[];
for(const {file,m} of modules.filter(x=>x.m.kind==='collection')){
  const next=[today.getFullYear(),today.getFullYear()+1].map(Y=>starts(Y)[m.slug]).filter(d=>d&&d>=today-day).sort((a,b)=>a-b)[0];
  if(!next)continue;const inDays=Math.ceil((next-today)/day);
  if(inDays<=ahead)upcoming.push({file,m,inDays,start:next.toISOString().slice(0,10)});
}
const stale=modules.filter(x=>x.m.published!==false&&age(x.m)>=maxAge).sort((a,b)=>age(b.m)-age(a.m));
const lines=[`# Content freshness (${today.toISOString().slice(0,10)})`,'',`${modules.length} content modules. Stale = not updated for ${maxAge}+ days. Seasons starting within ${ahead} days.`,'','## Refresh before the season',
  ...(upcoming.length?upcoming.map(u=>`- **${u.m.label}** (${u.file}): the season window opens ${u.start}, in ${u.inDays} days. Last updated ${u.m.updatedAt}.`):['- Nothing due.']),
  '',`## Stale pages (${stale.length})`,...(stale.length?stale.map(x=>`- ${x.file}: last updated ${x.m.updatedAt} (${age(x.m)} days)`):['- None.'])];
console.log(`Freshness: ${modules.length} modules; ${stale.length} not updated for ${maxAge}+ days; ${upcoming.length} season page(s) due within ${ahead} days.`);
for(const u of upcoming)console.log(`  season: ${u.m.label} opens ${u.start} (in ${u.inDays} days)`);
for(const x of stale.slice(0,10))console.log(`  stale: ${x.file} (${age(x.m)} days)`);
if(write){const f=path.join(root,'docs/log/freshness-report.md');fs.writeFileSync(f,lines.join('\n')+'\n');console.log('Wrote '+path.relative(root,f))}
