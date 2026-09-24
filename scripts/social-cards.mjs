// Social cards from the recipe data (idea 19): one 1080x1350 card (Instagram/Pinterest portrait) and one
// caption per recipe, in social/<slug>/ (gitignored). Build first: reads dist/comida.com.py/data/recipes.json.
//   node scripts/social-cards.mjs [slug ...]      default: every recipe
// PNG export uses headless Microsoft Edge or Chrome when installed; otherwise the SVG and an HTML preview remain.
// Brand tokens from public/css/tokens.css; no photos (none generated yet), so cards are typographic.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=path.join(root,'dist/comida.com.py/data/recipes.json');
if(!fs.existsSync(data)){console.error('Build first: node engine/build-site.mjs --site=comida');process.exit(1)}
const recipes=JSON.parse(fs.readFileSync(data,'utf8'));
const want=process.argv.slice(2);const list=want.length?recipes.filter(r=>want.includes(r.slug)):recipes;
const outDir=path.join(root,'social');fs.mkdirSync(outDir,{recursive:true});
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const tones=['#F3EBDD','#E4E9DC','#F1DED5','#FFFFFF'];
function wrap(text,max){const words=text.split(' '),lines=[];let cur='';for(const w of words){if((cur+' '+w).trim().length>max){lines.push(cur.trim());cur=w}else cur+=' '+w}if(cur.trim())lines.push(cur.trim());return lines}
function card(r,i){
  const title=wrap(r.label,16).slice(0,3),ingr=r.ingredients.filter(x=>x.q!=null).slice(0,6).map(x=>x.item);
  const bg=tones[i%tones.length];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
<rect width="1080" height="1350" fill="${bg}"/>
<rect x="60" y="60" width="960" height="1230" rx="48" fill="none" stroke="#23201C" stroke-opacity=".12" stroke-width="3"/>
<text x="120" y="210" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="34" font-weight="700" letter-spacing="4" fill="#5B6B3F">RECETA${r.category.includes('paraguaya')?' PARAGUAYA':''}</text>
${title.map((l,n)=>`<text x="120" y="${340+n*118}" font-family="Fraunces,Georgia,serif" font-size="112" fill="#23201C">${esc(l)}</text>`).join('')}
<text x="120" y="${340+(title.length-1)*118+100}" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="40" fill="#5E564D">${esc(Math.round(r.minutes)+' min · '+r.yield.text)}</text>
<text x="120" y="${340+(title.length-1)*118+210}" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="30" font-weight="700" letter-spacing="3" fill="#5B6B3F">INGREDIENTES</text>
${ingr.map((t,n)=>`<text x="120" y="${340+(title.length-1)*118+280+n*62}" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="40" fill="#23201C">· ${esc(t.length>34?t.slice(0,33)+'…':t)}</text>`).join('')}
<rect x="120" y="1140" width="840" height="100" rx="50" fill="#C8472B"/>
<text x="540" y="1204" text-anchor="middle" font-family="Inter,Segoe UI,Arial,sans-serif" font-size="40" font-weight="700" fill="#FFFFFF">Receta completa en comida.com.py</text>
</svg>`;
}
function caption(r){return `${r.label}: la receta paso a paso, con cantidades que se ajustan a ${r.yield.mode==='kilos'?'los kilos que vas a preparar':'tus porciones'}.\n\nIngredientes principales: ${r.ingredients.filter(x=>x.q!=null).slice(0,6).map(x=>x.item).join(', ')}.\n\nLa receta completa, con temporizador y modo cocina: comida.com.py${r.path}\n\n#comidaparaguaya #recetasparaguayas #recetas #paraguay #cocinacasera`}
const browsers=['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Google/Chrome/Application/chrome.exe'].filter(p=>fs.existsSync(p));
let png=0;
list.forEach((r,i)=>{
  const dir=path.join(outDir,r.slug);fs.mkdirSync(dir,{recursive:true});
  const svg=card(r,i);fs.writeFileSync(path.join(dir,'card.svg'),svg);fs.writeFileSync(path.join(dir,'caption.txt'),caption(r));
  const html=path.join(dir,'card.html');fs.writeFileSync(html,`<!doctype html><meta charset="utf-8"><style>@font-face{font-family:Fraunces;src:url('${pathToFileURL(path.join(root,'public/fonts/fraunces-opsz-normal.woff2')).href}')}@font-face{font-family:Inter;src:url('${pathToFileURL(path.join(root,'public/fonts/inter-variable.woff2')).href}')}html,body{margin:0}</style>${svg}`);
  if(browsers[0]){const res=spawnSync(browsers[0],['--headless=new','--disable-gpu','--hide-scrollbars','--window-size=1080,1350','--screenshot='+path.join(dir,'card.png'),pathToFileURL(html).href],{timeout:30000});if(res.status===0&&fs.existsSync(path.join(dir,'card.png')))png++}
});
console.log(`Social cards: ${list.length} recipes → social/<slug>/ (card.svg, caption.txt${browsers[0]?', card.png: '+png:', no browser for PNG'})`);
