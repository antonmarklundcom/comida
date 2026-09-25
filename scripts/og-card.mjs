// Default link-preview card (1200x630 JPEG) for pages without a photo: public/og/comida-card.jpg.
// Renders an HTML card with the site fonts and colours in headless Chromium via Playwright.
//   node scripts/og-card.mjs            (needs Playwright; the JPEG is committed, so this only runs when the design changes)
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
let chromium;
for(const p of ['playwright','/opt/node22/lib/node_modules/playwright']){try{({chromium}=require(p));break}catch{}}
if(!chromium){console.error('Playwright not found; the committed public/og/comida-card.jpg stays as it is.');process.exit(1)}
const font=f=>'data:font/woff2;base64,'+fs.readFileSync(path.join(root,'public/fonts',f)).toString('base64');
const html=`<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Fraunces;src:url(${font('fraunces-opsz-normal.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:Inter;src:url(${font('inter-variable.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#FAF6F0;color:#23201C;font-family:Inter,sans-serif;display:flex;flex-direction:column;justify-content:space-between;padding:72px 84px;border-bottom:18px solid #C8472B}
.mark{display:flex;align-items:center;gap:22px;font-family:Fraunces,serif;font-size:44px;font-weight:600}
.mark span{display:grid;place-items:center;width:78px;height:78px;border-radius:18px;background:#C8472B;color:#FAF6F0;font-size:50px}
h1{font-family:Fraunces,serif;font-weight:600;font-size:76px;line-height:1.05;letter-spacing:-0.01em;max-width:980px}
p{font-size:32px;color:#5b534b}
</style></head><body><div class="mark"><span>c</span>comida.com.py</div>
<h1>Recetas, guías y cortes de la cocina paraguaya</h1>
<p>Cantidades que se ajustan · Catering en Gran Asunción</p></body></html>`;
const out=path.join(root,'public/og/comida-card.jpg');
fs.mkdirSync(path.dirname(out),{recursive:true});
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1200,height:630}});
await page.setContent(html,{waitUntil:'networkidle'});
await page.evaluate(()=>document.fonts.ready);
await page.screenshot({path:out,type:'jpeg',quality:86});
await browser.close();
console.log('Wrote '+path.relative(root,out)+' ('+Math.round(fs.statSync(out).size/1024)+' KB)');
