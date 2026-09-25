// Browser check (idea 11): every published page in headless Chromium at phone width (390 px), with the
// Content-Security-Policy from public/.htaccess applied. Fails on horizontal scroll, JS errors, CSP
// violations, same-origin requests that fail (4xx/5xx) and images that do not load.
//   node scripts/browser-check.mjs [--limit=N] [--width=390]     (build first; needs Playwright + Chromium)
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const arg=name=>process.argv.find(a=>a.startsWith('--'+name+'='))?.split('=')[1];
let chromium;
for(const p of ['playwright','/opt/node22/lib/node_modules/playwright']){try{({chromium}=require(p));break}catch{}}
if(!chromium){console.log('Browser check skipped: Playwright is not installed here (npm i -g playwright to run it).');process.exit(0)}
if(!process.argv.some(a=>a.startsWith('--site=')))process.argv.push('--site=comida');
const {loadSite}=await import('../engine/site.mjs');
const {routes,out}=await loadSite();
if(!fs.existsSync(path.join(out,'index.html'))){console.error('Build first: node engine/build-site.mjs --site=comida');process.exit(1)}
// Local http cannot upgrade to https, so upgrade-insecure-requests is dropped for the test only.
const csp=(fs.readFileSync(path.join(root,'public/.htaccess'),'utf8').match(/Content-Security-Policy "([^"]+)"/)||[])[1]?.replace(/;\s*upgrade-insecure-requests/,'');
if(!csp){console.error('No Content-Security-Policy found in public/.htaccess');process.exit(1)}
const width=Number(arg('width')||390),port=8100+Math.floor(Math.random()*800);
const server=spawn(process.execPath,[path.join(root,'engine/serve.mjs'),'--site=comida','--port='+port],{stdio:'ignore'});
const base='http://localhost:'+port;
for(let i=0;i<50;i++){try{await fetch(base+'/');break}catch{await new Promise(r=>setTimeout(r,100))}}
const paths=routes.filter(r=>r.published&&r.kind!=='404').map(r=>r.path).slice(0,Number(arg('limit'))||undefined);
const browser=await chromium.launch();
const context=await browser.newContext({viewport:{width,height:844},serviceWorkers:'block'});
await context.addInitScript(()=>{window.__csp=[];document.addEventListener('securitypolicyviolation',e=>window.__csp.push(e.violatedDirective+' '+(e.blockedURI||'inline')))});
await context.route('**/*',async route=>{if(route.request().resourceType()!=='document'||!route.request().url().startsWith(base))return route.continue();const res=await route.fetch();await route.fulfill({response:res,headers:{...res.headers(),'content-security-policy':csp}})});
const problems=[];
async function check(p){
  const page=await context.newPage(),errs=[];
  page.on('pageerror',e=>errs.push('JS error: '+e.message));
  page.on('console',m=>{if(m.type()==='error'&&!/Failed to load resource/.test(m.text()))errs.push('console: '+m.text())});
  page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)errs.push(r.status()+' '+r.url().slice(base.length))});
  try{
    await page.goto(base+p,{waitUntil:'load'});
    await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){scrollTo(0,y);await new Promise(r=>setTimeout(r,40))}scrollTo(0,0)});
    await page.waitForLoadState('networkidle',{timeout:5000}).catch(()=>{});
    const r=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0&&i.currentSrc).map(i=>i.currentSrc.replace(location.origin,'')),csp:window.__csp}));
    if(r.overflow>1)errs.push(`horizontal scroll: ${r.overflow}px wider than the screen`);
    for(const b of r.broken)errs.push('image did not load: '+b);
    for(const c of r.csp)errs.push('CSP blocked: '+c);
  }catch(e){errs.push('load failed: '+e.message.split('\n')[0])}
  await page.close();
  if(errs.length)problems.push({p,errs:[...new Set(errs)]});
}
const queue=[...paths];
await Promise.all(Array.from({length:4},async()=>{while(queue.length)await check(queue.shift())}));
await browser.close();server.kill();
for(const {p,errs} of problems){console.log('FAIL '+p);for(const e of errs.slice(0,6))console.log('     '+e)}
console.log(`Browser check ${problems.length?'FAILED':'OK'}: ${paths.length} pages at ${width}px with the CSP applied; ${problems.length} with problems.`);
process.exit(problems.length?1:0);
