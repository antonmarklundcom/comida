// QA gate before handing Anton the Hostinger zip (plan/prompts/P5-QA-GATE.txt).
// Runs against dist/comida.com.py and, when present, deploy/comida.com.py.zip. Exit 1 on any failure.
// Usage: node scripts/qa-gate.mjs [--report]   (--report also writes docs/log/qa-report.md)
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {walk} from '../engine/site.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'dist/comida.com.py');
if(!fs.existsSync(path.join(out,'index.html'))){console.error('QA gate FAILED: build first.');process.exit(1)}
const files=walk(out),html=files.filter(f=>f.endsWith('.html'));
const rel=f=>path.relative(out,f).replaceAll('\\','/');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const visible=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/gi,' ').replace(/<style\b[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));
const results=[];
function gate(name,fn){const problems=[];let count=0;fn((ok,where)=>{count++;if(!ok)problems.push(where)});results.push({name,count,problems});}
const sitemap=fs.readFileSync(path.join(out,'sitemap.xml'),'utf8'),inSitemap=new Set([...sitemap.matchAll(/<loc>https:\/\/comida\.com\.py([^<]*)<\/loc>/g)].map(m=>m[1]));
const pageUrl=f=>{const r='/'+rel(f);return r.endsWith('/index.html')?r.slice(0,-10):r};
const docs=new Map(html.map(f=>[f,fs.readFileSync(f,'utf8')]));

gate('Forbidden wording (AGENTS.md rule 5)',c=>{for(const [f,s] of docs){const m=visible(s).match(/24\s*(?:h\b|horas)|2\s*(?:a|–|-)\s*3\s*presupuestos|verificad[oa]s|garantizad[oa]|todo Paraguay|testimonios|reseñas/i);c(!m,rel(f)+(m?': '+m[0]:''))}});
gate('No guaraní or dollar amounts in rendered text',c=>{for(const [f,s] of docs){const m=visible(s).match(/(?:Gs\.?|₲|\$|USD)\s*\d|\d[\d.,]*\s*(?:Gs\.?|₲|dólares|guaraníes)\b/i);c(!m,rel(f)+(m?': '+m[0]:''))}});
gate('Every wa.me link carries a prefilled message',c=>{for(const [f,s] of docs)for(const m of s.matchAll(/<a\b[^>]*href="(https:\/\/wa\.me\/[^"]*)"/g)){const u=new URL(decode(m[1]));c(u.pathname==='/595992279599'&&Boolean(u.searchParams.get('text')),rel(f))}});
gate('Images have alt, width and height',c=>{for(const [f,s] of docs)for(const m of s.matchAll(/<img\b[^>]*>/g))c(/\salt="[^"]+"/.test(m[0])&&/\swidth="\d+"/.test(m[0])&&/\sheight="\d+"/.test(m[0]),rel(f))});
gate('Canonical, title ≤ 60, meta description ≤ 155',c=>{for(const [f,s] of docs){const t=decode(s.match(/<title>([^<]*)<\/title>/)?.[1]||''),d=decode(s.match(/<meta name="description" content="([^"]*)"/)?.[1]||'');c(/<link rel="canonical" href="https:\/\/comida\.com\.py\/[^"]*">/.test(s)&&t.length>0&&t.length<=60&&d.length>=50&&d.length<=155,rel(f)+` (title ${t.length}, meta ${d.length})`)}});
gate('Internal links resolve',c=>{for(const [f,s] of docs)for(const m of s.matchAll(/(?:href|src)="(\/[^"#?]*)/g)){const p=m[1],target=p.endsWith('/')?path.join(out,p,'index.html'):path.join(out,p);c(fs.existsSync(target),rel(f)+' → '+p)}});
gate('Every page under 90 KB (the verifier hard limit is 100 KB; paginate hubs before this fails)',c=>{for(const [f,s] of docs){const kb=Buffer.byteLength(s)/1024;c(kb<90,rel(f)+' '+kb.toFixed(1)+' KB')}});
gate('Exactly one H1 and lang="es-PY"',c=>{for(const [f,s] of docs)c((s.match(/<h1\b/g)||[]).length===1&&/<html lang="es-PY">/.test(s),rel(f))});
gate('Heading order inside <main> skips no level',c=>{for(const [f,s] of docs){const main=s.match(/<main\b[\s\S]*<\/main>/)?.[0]||'';let prev=1,ok=true,where='';for(const m of main.matchAll(/<h([1-6])\b/g)){const lvl=+m[1];if(lvl>prev+1){ok=false;where=`h${prev}→h${lvl}`}prev=lvl}c(ok,rel(f)+(where?' '+where:''))}});
gate('No mojibake, no BOM, valid UTF-8',c=>{for(const f of files.filter(f=>/\.(html|css|js|xml|txt|php|json)$/.test(f))){const b=fs.readFileSync(f);let ok=!b.subarray(0,3).equals(Buffer.from([239,187,191]));try{const s=new TextDecoder('utf-8',{fatal:true}).decode(b);ok=ok&&!/\uFFFD|Ã[\u0080-\u00BF]|Â[\u0080-\u00BF]|â€/.test(s)}catch{ok=false}c(ok,rel(f))}});
gate('No secret-looking strings in the deployable files',c=>{for(const f of files.filter(f=>/\.(html|css|js|xml|txt|php|json|htaccess)$/.test(f)||f.endsWith('.htaccess'))){const s=fs.readFileSync(f,'utf8');c(!/(?:sk-[A-Za-z0-9_-]{16,}|AIza[A-Za-z0-9_-]{30,}|vc_live_[A-Za-z0-9]+|Bearer\s+[A-Za-z0-9._-]{20,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(?:api[_-]?key|secret|password)\s*[:=]>?\s*["'][A-Za-z0-9_./+-]{12,})/i.test(s),rel(f))}});
gate('Sitemap lists every indexable page and no noindex page',c=>{for(const [f,s] of docs){const url=pageUrl(f),noindex=/name="robots" content="noindex/.test(s);if(rel(f)==='404.html'){c(!inSitemap.has('/404.html'),'404 in sitemap');continue}c(noindex?!inSitemap.has(url):inSitemap.has(url),url+(noindex?' is noindex but in sitemap':' is indexable but missing'))}});
gate('Indexable pages never link to noindex pages (gated lines stay hidden)',c=>{const noindex=new Set([...docs].filter(([,s])=>/name="robots" content="noindex/.test(s)).map(([f])=>pageUrl(f)));noindex.delete('/gracias/');for(const [f,s] of docs){if(/name="robots" content="noindex/.test(s))continue;for(const m of s.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g))c(!noindex.has(m[1]),pageUrl(f)+' → '+m[1])}});
gate('Unpublished prices render no number (estimator data empty)',c=>{for(const [f,s] of docs){const m=s.match(/id="estimator-data">([\s\S]*?)<\/script>/);if(m)c(JSON.parse(m[1]).length===0,rel(f))}});
gate('robots.txt points to the sitemap',c=>{c(fs.readFileSync(path.join(out,'robots.txt'),'utf8').includes('Sitemap: https://comida.com.py/sitemap.xml'),'robots.txt')});
gate('.htaccess present with 404, no listing and HTTPS',c=>{const h=fs.existsSync(path.join(out,'.htaccess'))?fs.readFileSync(path.join(out,'.htaccess'),'utf8'):'';c(/ErrorDocument 404 \/404\.html/.test(h)&&/Options -Indexes/.test(h)&&/HTTPS/.test(h),'.htaccess')});
gate('Mercado settings match the PHP allowlist (zones, days, products)',async c=>{});
{const mercado=(await import('../sites/comida/mercado.mjs')).default,php=fs.readFileSync(path.join(root,'php/lead-forward.php'),'utf8');const g=results.at(-1);
 for(const z of mercado.zones){g.count++;if(!php.includes(`'${z}'`))g.problems.push('zone missing in PHP: '+z)}
 for(const d of mercado.deliveryDays){g.count++;if(!php.includes(`'${d}'`))g.problems.push('day missing in PHP: '+d)}
 for(const p of mercado.products){g.count++;if(!php.includes(`'${p.id}'`))g.problems.push('product missing in PHP: '+p.id)}}
const zip=path.join(root,'deploy/comida.com.py.zip');
gate('Deploy zip contents (run deploy/make-zip.ps1 first)',c=>{
  if(!fs.existsSync(zip)){c(false,'deploy/comida.com.py.zip missing');return}
  // Windows' bsdtar reads zip files; GNU tar from Git Bash would treat "C:" as a remote host.
  const tarBin=fs.existsSync('C:/Windows/System32/tar.exe')?'C:/Windows/System32/tar.exe':'tar';
  const list=spawnSync(tarBin,['-tf',zip],{encoding:'utf8'});if(list.status!==0){c(false,'cannot list zip: '+list.stderr);return}
  const entries=list.stdout.split(/\r?\n/).filter(Boolean);
  for(const need of ['index.html','.htaccess','php/lead-forward.php','sitemap.xml','robots.txt','css/site.css','js/forms.js'])c(entries.includes(need),'zip missing '+need);
  c(entries.some(e=>e.startsWith('assets/img/')),'zip has no images');
  c(!entries.some(e=>/(^|\/)(plan|docs|research|logs|node_modules)\//.test(e)||/\.(map|log|env)$/.test(e)||/private-config|config\.private|\.env/.test(e)||e.includes('\\')),'zip contains excluded files or backslash paths');
  const zipHtml=entries.filter(e=>e.endsWith('.html')).length;c(zipHtml===html.length,`zip has ${zipHtml} HTML, dist has ${html.length}`);
});
const failed=results.filter(r=>r.problems.length);
for(const r of results)console.log(`${r.problems.length?'FAIL':'PASS'}  ${r.name} (${r.count} checked${r.problems.length?', '+r.problems.length+' failing':''})`+(r.problems.length?'\n        '+r.problems.slice(0,12).join('\n        '):''));
const size=fs.existsSync(zip)?(fs.statSync(zip).size/1048576).toFixed(1)+' MB':'n/a';
console.log(`QA gate ${failed.length?'FAILED':'OK'}: ${results.length} gates, ${html.length} HTML pages, ${inSitemap.size} sitemap URLs, zip ${size}.`);
if(process.argv.includes('--report')){
  const date=new Date().toISOString().slice(0,10);
  const md=`# QA report — comida.com.py (${date})\n\nGenerated by \`node scripts/qa-gate.mjs --report\` against \`dist/comida.com.py\` and \`deploy/comida.com.py.zip\`.\n\n| Check | Result | Checked |\n|---|---|---|\n${results.map(r=>`| ${r.name} | ${r.problems.length?'FAIL ('+r.problems.length+')':'PASS'} | ${r.count} |`).join('\n')}\n\nPages: ${html.length} HTML, ${inSitemap.size} in the sitemap. Zip: ${size}.\n\n## Not machine-checkable here (manager, in the browser)\n\n- Visual review at 390 px and 1440 px: overlap, horizontal scroll, image crops (faces), contrast on photos.\n- Tap targets of at least 48 px in the rendered page (CSS sets them; confirm on a phone).\n- Real form submission against the live VenderCRM and the five Hostinger cases in \`docs/php-tests.md\`.\n- Wake Lock (modo cocina) and print layout on a real phone and printer.\n- Legal review of /terminos/ and /privacidad/ by a lawyer.\n`;
  fs.writeFileSync(path.join(root,'docs/log/qa-report.md'),md);console.log('Wrote docs/log/qa-report.md');
}
process.exit(failed.length?1:0);
