import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {loadSite,root,walk,fileFor} from './site.mjs';
import {esc,attr,safeUrl,jsonLd} from './escape.mjs';
import {webpSize} from './image-size.mjs';
const {config,routes,pages,prices,out}=await loadSite();
const errors=[];let checks=0;
const check=(ok,msg)=>{checks++;if(!ok)errors.push(msg)};
const read=f=>fs.readFileSync(f,'utf8');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const text=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/gi,'').replace(/<style\b[\s\S]*?<\/style>/gi,'').replace(/<!--[\s\S]*?-->/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
const attrs=s=>Object.fromEntries([...s.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m=>[m[1],decode(m[2])]));
const files=walk(out),htmlFiles=files.filter(f=>f.endsWith('.html')),published=routes.filter(r=>r.published),images=JSON.parse(read(path.join(root,'docs/imagery-manifest.json'))).images;
for(const file of files.filter(f=>f.endsWith('.js'))){try{new vm.Script(read(file));check(true,'JavaScript syntax')}catch{check(false,'JavaScript syntax: '+path.relative(out,file))}}
check(htmlFiles.length===published.length,'HTML count differs from manifest');
check(esc('<>&"\'')==='&lt;&gt;&amp;&quot;&#39;'&&attr('"')==='&quot;','HTML escaping regression');
check(safeUrl('javascript:alert(1)')===null&&safeUrl('//evil.test')===null,'Unsafe URL accepted');
check(!jsonLd({v:'</script>'}).includes('</script>'),'Unsafe JSON-LD serializer');
const titles=new Set(),metas=new Set(),paragraphs=new Map(),htmlByPath=new Map();
for(const r of published){const f=fileFor(out,r.path);check(fs.existsSync(f),'Missing output '+r.path);if(fs.existsSync(f))htmlByPath.set(r.path,read(f))}
for(const route of published){
 const html=htmlByPath.get(route.path);if(!html)continue;const label=route.path+': ',body=text(html),title=decode(html.match(/<title>([^<]*)<\/title>/)?.[1]||''),meta=attrs(html.match(/<meta name="description"[^>]*>/)?.[0]||'').content;
 check(title===route.title&&title.length<=60&&!titles.has(title),label+'invalid/duplicate title');titles.add(title);
 check(meta===route.meta&&meta.length<=155&&!metas.has(meta),label+'invalid/duplicate meta');metas.add(meta);
 check((html.match(/<h1\b/g)||[]).length===1,label+'must have exactly one H1');
 check(Buffer.byteLength(html)<100*1024,label+'HTML over 100 KB');
 check(html.includes(`<link rel="canonical" href="${config.origin+route.path}">`),label+'canonical mismatch');
 check(html.includes('lang="es-PY"'),label+'locale mismatch');
 check(!/24\s*(?:h\b|horas)|2\s*(?:a|–|-)\s*3\s*presupuestos|verificados|garantizado|todo Paraguay|testimonios|reseñas|testimonials/i.test(body),label+'forbidden content');
 // Prices are allowed only on the official Abasto price table, and only with a source and a list date on the page.
 if(route.kind==='price-table')check(/Fuente: \S/.test(body)&&/<time datetime="\d{4}-\d{2}-\d{2}">/.test(html),label+'price table without source/date');
 else check(!/(?:Gs\.?|₲|\$|USD)\s*[\d]|[\d][\d.,]*\s*(?:Gs\.?|₲|dólares|guaraníes)\b/i.test(body),label+'numeric public price');
 check(!/OPERADOR_PENDIENTE|\+595000000000|Sitio operado por|RUC\s*\d/.test(body),label+'operator placeholder/unsupported identity');
 check(body.includes(config.operator.hours),label+'incorrect hours');
 check(body.includes('Servicio de referencia y coordinacion. Cada proveedor contrata y factura directamente.'),label+'missing referral notice');
 check(route.indexable?!/name="robots" content="noindex/.test(html):/name="robots" content="noindex/.test(html),label+'robots mismatch');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);check(new Set(ids).size===ids.length,label+'duplicate DOM IDs');
 for(const m of html.matchAll(/<(?:a|link|script|img|source|form)\b[^>]*>/g)){
  const a=attrs(m[0]);for(const raw of [a.href,a.src,...(a.srcset||a.imagesrcset||'').split(',').filter(Boolean).map(v=>v.trim().split(/\s+/)[0])].filter(Boolean)){
   check(!/^javascript:|^\/\//i.test(raw),label+'unsafe URL');
   if(raw.startsWith('https://wa.me/')){const u=new URL(raw);check(u.pathname==='/'+config.operator.whatsapp&&Boolean(u.searchParams.get('text')?.trim()),label+'WhatsApp target/message mismatch');continue}
   if(!raw.startsWith('/')&&!raw.startsWith('#'))continue;
   const u=new URL(raw,config.origin+route.path),p=u.pathname,internal=htmlByPath.get(p);
   check(Boolean(internal)||fs.existsSync(path.join(out,p.slice(1))),label+'missing link/asset '+p);
   // Gated lines (chef, viandas) stay invisible: an indexable page never links to a noindex page.
   const target=published.find(r=>r.path===p);if(m[0].startsWith('<a')&&route.indexable&&target)check(target.indexable||target.kind==='gracias',label+'links to noindex page '+p);
   if(u.hash&&internal)check(internal.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`),label+'missing fragment '+raw);
  }
 }
 const pictures=[...html.matchAll(/<picture>[\s\S]*?<\/picture>/g)];
 check(pictures.length===(html.match(/<img\b/g)||[]).length,label+'image outside picture');
 for(const m of pictures){
  const a=attrs(m[0].match(/<img\b[^>]*>/)?.[0]||''),img=images.find(i=>a.src?.includes('/'+i.file+'-'));
  check(Boolean(img)&&a.alt===img?.alt_es,label+'image alt differs from manifest');
  check(+a.width>0&&+a.height>0&&Boolean(a.srcset)&&Boolean(a.sizes),label+'image dimensions/srcset/sizes missing');
  check(m[0].includes('image/avif')&&m[0].includes('image/webp'),label+'missing image format');
  check(text(html.slice(m.index+m[0].length,m.index+m[0].length+700)).includes('Imagen ilustrativa'),label+'missing illustrative caption');
  if(a.src&&fs.existsSync(path.join(out,a.src))){const d=webpSize(path.join(out,a.src));check(d.width===+a.width&&d.height===+a.height,label+'image dimensions disagree with file')}
 }
 const graphBlocks=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];check(graphBlocks.length>0,label+'missing JSON-LD');
 for(const m of graphBlocks){try{const doc=JSON.parse(m[1]);check(doc['@context']==='https://schema.org',label+'schema context');const graph=doc['@graph']||[doc];
  const required={Organization:['name','url'],WebSite:['name','url'],Service:['name','url','provider','areaServed'],BreadcrumbList:['itemListElement'],Recipe:['name','recipeIngredient','recipeInstructions','author','totalTime'],Article:['headline','dateModified','author']};
  for(const entry of graph){check(!['Offer','FAQPage','HowTo','LocalBusiness'].includes(entry['@type'])&&!('priceRange'in entry),label+'unsupported food-site schema');for(const f of required[entry['@type']]||[])check(Boolean(entry[f]),label+'schema missing '+f);
   if(entry['@type']==='BreadcrumbList')check(entry.itemListElement?.every((i,n)=>i['@type']==='ListItem'&&i.position===n+1&&i.name&&published.some(r=>config.origin+r.path===i.item)),label+'invalid breadcrumbs');
   if(entry['@type']==='Service')check(Boolean(entry.provider.name)&&entry.provider.url===config.origin+'/'&&entry.areaServed.length>0,label+'invalid Service provider/coverage');
  }
  const types=graph.map(n=>n['@type']);check(types.includes('BreadcrumbList'),label+'missing BreadcrumbList');if(route.kind==='home')check(types.includes('Organization')&&types.includes('WebSite'),label+'missing home schema');if(['occasion','city','line'].includes(route.kind))check(types.includes('Service'),label+'missing Service');if(route.kind==='recipe')check(types.includes('Recipe'),label+'missing Recipe');if(['guide','cut'].includes(route.kind))check(types.includes('Article'),label+'missing Article');
 }catch{check(false,label+'invalid JSON-LD')}}
 for(const m of html.matchAll(/data-price-id="([^"]+)"/g))check(prices.some(p=>p.id===m[1]&&p.published),label+'unpublished price reference');
 for(const p of prices.filter(p=>!p.published))for(const value of p.referenceRange||[])check(!new RegExp('(?<![0-9])'+String(value).replace(/\B(?=(\d{3})+(?!\d))/g,'[., ]?')+'(?![0-9])').test(body),label+'internal price leaked');
 const estimator=html.match(/<script[^>]+id="estimator-data"[^>]*>([\s\S]*?)<\/script>/);if(estimator){try{check(route.kind==='precios'&&JSON.stringify(JSON.parse(estimator[1]))===JSON.stringify(prices.filter(p=>p.published)),label+'estimator mismatch')}catch{check(false,label+'invalid estimator')}}
 let main=html.match(/<main[\s\S]*?<\/main>/)?.[0]||'';main=main.replace(/<section[^>]*data-shared="(?:legal|process)"[\s\S]*?<\/section>/g,'').replace(/<section class="how"[\s\S]*?<\/section>/g,'');
 for(const m of main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)){const p=text(m[1]);if(p.length<100)continue;check(!paragraphs.has(p)||paragraphs.get(p)===route.path,label+'duplicate substantive paragraph');paragraphs.set(p,route.path)}
}
// Content envelope (P3): every collection page carries id, source, verifiedAt and published; facts need a source.
for(const p of pages.filter(p=>['recipe','guide','cut','vianda','restaurant','ingredient','collection','product'].includes(p.kind))){const tag=(p._file||p.id)+': ';for(const k of ['id','slug','kind','label','seoTitle','meta','h1','source','verifiedAt','updatedAt'])check(Boolean(p[k]),tag+'missing '+k);check(typeof p.published==='boolean',tag+'published must be boolean');check(/^\d{4}-\d{2}-\d{2}$/.test(p.verifiedAt||''),tag+'verifiedAt must be YYYY-MM-DD');const r=routes.find(r=>r.id===p.id);check(Boolean(r),tag+'no route');if(r&&!r.published)check(!fs.existsSync(fileFor(out,r.path)),tag+'unpublished page was emitted');}
for(const r of routes.filter(r=>!r.published))check(!fs.existsSync(fileFor(out,r.path)),'Unpublished route emitted: '+r.path);
const sitemap=read(path.join(out,'sitemap.xml')),urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]),expected=published.filter(r=>r.indexable&&r.kind!=='404').map(r=>config.origin+r.path);
check(urls.length===expected.length&&new Set(urls).size===urls.length&&expected.every(u=>urls.includes(u)),'Sitemap differs from indexable published routes');
for(const f of files.filter(f=>/\.(html|css|js|json|xml|txt|php)$/.test(f))){const bytes=fs.readFileSync(f);let s='';try{s=new TextDecoder('utf-8',{fatal:true}).decode(bytes)}catch{check(false,'Invalid UTF-8 '+path.relative(out,f));continue}check(!bytes.subarray(0,3).equals(Buffer.from([239,187,191])),'UTF-8 BOM '+path.relative(out,f));check(!/\uFFFD|Ã[\u0080-\u00BF]|Â[\u0080-\u00BF]|â€|ðŸ/.test(s),'Mojibake '+path.relative(out,f));check(!/(?:sk-[A-Za-z0-9_-]{16,}|AIza[A-Za-z0-9_-]{30,}|Bearer\s+[A-Za-z0-9._-]{20,}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(?:api[_-]?key|secret|access[_-]?token)\s*[:=]\s*["'][A-Za-z0-9_./+-]{16,})/i.test(s),'Possible secret in '+path.relative(out,f))}
for(const i of images){const variants=fs.readdirSync(path.join(root,'assets/img')).filter(f=>f.startsWith(i.file+'-')&&/\.(avif|webp)$/.test(f));check(variants.length>0&&variants.every(f=>fs.existsSync(path.join(out,'assets/img',f))),'Missing copied manifest image '+i.id)}
if(errors.length){console.error(`Verify FAILED: ${errors.length} failures / ${checks} checks\n`+errors.map(e=>' - '+e).join('\n'));process.exit(1)}
console.log(`Verify OK: ${checks} checks; ${htmlFiles.length} HTML files; ${urls.length} sitemap URLs; ${images.length} imagery entries; ${prices.length} unpublished prices; no broken links, missing assets, encoding errors or forbidden content.`);
