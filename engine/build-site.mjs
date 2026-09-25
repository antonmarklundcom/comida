import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {loadSite,root,fileFor,walk} from './site.mjs';
import {esc,attr,jsonLd} from './escape.mjs';
import {webpSize} from './image-size.mjs';
import {buildSitemap,buildRobots} from './sitemap.mjs';
import {leadForm} from '../templates/lead-form.mjs';
import {qtyText,iso,cardGrid} from '../templates/recipe-lib.mjs';
import {matchRecipes} from '../templates/article.mjs';
const site=await loadSite(),{config,routes,pages,prices,out}=site;
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const images=JSON.parse(read('docs/imagery-manifest.json')).images;
const available=fs.readdirSync(path.join(root,'assets/img'));
const variants=image=>available.filter(f=>f.startsWith(image.file+'-')&&/-(\d+)\.(avif|webp)$/.test(f)).map(file=>({file,width:Number(file.match(/-(\d+)\./)[1]),type:file.split('.').pop()})).sort((a,b)=>a.width-b.width);
function picture(id,sizes='100vw',eager=false,style=''){
 const image=images.find(i=>i.id===id);if(!image)throw Error('Unknown image: '+id);
 const files=variants(image),webp=files.filter(f=>f.type==='webp');if(!webp.length||!files.some(f=>f.type==='avif'))throw Error('Missing image variants: '+id);
 const fallback=webp.at(-1),dimensions=webpSize(path.join(root,'assets/img',fallback.file)),ratio=dimensions.width/dimensions.height;
 return `<picture>${['avif','webp'].map(type=>`<source type="image/${type}" srcset="${files.filter(f=>f.type===type).map(f=>'/assets/img/'+f.file+' '+f.width+'w').join(', ')}" sizes="${attr(sizes)}">`).join('')}<img src="/assets/img/${fallback.file}" srcset="${webp.map(f=>'/assets/img/'+f.file+' '+f.width+'w').join(', ')}" sizes="${attr(sizes)}" width="${fallback.width}" height="${Math.round(fallback.width/ratio)}" alt="${attr(image.alt_es)}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async"${style?` style="${attr(style)}"`:''}></picture>`;
}
const wa=message=>'https://wa.me/'+config.operator.whatsapp+'?text='+encodeURIComponent(message||'Hola, ¿me ayudás a organizar el catering de mi evento?');
function normalize(html){
 html=html.replace(/<picture>[\s\S]*?<\/picture>/g,block=>{
  const image=images.find(i=>block.includes('/'+i.file+'-'));if(!image)throw Error('Image absent from manifest');
  return picture(image.id,block.match(/sizes="([^"]+)"/)?.[1]||'100vw',block.includes('fetchpriority="high"'),block.match(/style="([^"]+)"/)?.[1]||'');
 });
 html=html.replace(/href="https:\/\/wa\.me\/[^" ]+"/g,()=>`href="${attr(wa())}"`);
 // Internal links may carry a query (e.g. /presupuesto/?ocasion=bodas); only the path must be a published route.
 html=html.replace(/href="(\/[^"#?]*)(?:\?[^"#]*)?"/g,(all,p)=>{if(routes.some(r=>r.path===p&&r.published))return all;return 'href="/#contacto"'});
 return html.replaceAll('href="#top"','href="/"').replace(/href="#(pedir|contacto|como-funciona|ocasiones|precios|proveedores)"/g,'href="/#$1"');
}
function header(){
 let html=read('templates/header.html');
 const nav=routes.filter(r=>r.published&&['hub','occasion','city'].includes(r.kind));
 const items=nav.map(r=>`<a class="item" href="${attr(r.path)}"><strong>${esc(r.label)}</strong><span>${r.kind==='hub'?'Formatos para tu evento':r.kind==='city'?'Cobertura y logística':'Menús y organización'}</span></a>`).join('');
 html=html.replace(/(<div class="sub-inner">)[\s\S]*?(<div class="sub-side">)/,`$1<p class="eyebrow">Explorá el catering</p>${items}$2`);
 html=html.replace(/(<div class="drawer">)[\s\S]*?(<\/div>\s*<\/details>)/,`$1<p class="eyebrow">Catering</p>${nav.map(r=>`<a href="${attr(r.path)}">${esc(r.label)}</a>`).join('')}<div class="main"><p class="eyebrow">Cocina</p><a href="/recetas/">Recetas</a><a href="/planificador/">Planificador de menú</a><a href="/mercado/">Mercado: pedí a domicilio</a><a href="/carne/">Carne</a><a href="/guias/">Guías</a>${routes.some(r=>r.id==='guia-mercado-de-abasto'&&r.published)?'<a href="/mercado-de-abasto/">Mercado de Abasto</a>':''}<p class="eyebrow">Catering</p><a href="/como-funciona/">Cómo funciona</a><a href="/precios/">Precios</a><a href="/proveedores/">Sumá tu servicio</a><a href="/contacto/">Contacto</a></div>$2`);
 // Chef stays hidden until its route and signed-partner flag permit navigation.
 if(!config.chefPartnerSigned)html=html.replace(/<a[^>]*href="\/chef-a-domicilio\/"[\s\S]*?<\/a>/g,'');
 return normalize(html);
}
const imageUrl=id=>{const image=images.find(i=>i.id===id);if(!image)return undefined;const best=variants(image).filter(f=>f.type==='webp').at(-1);return best?config.origin+'/assets/img/'+best.file:undefined};
function schemas(route,page={}){
 const organization={'@type':'Organization','@id':config.origin+'/#organization',name:config.brand.name,url:config.origin+'/',telephone:config.operator.phone};
 const trail=[];let r=route;while(r){trail.unshift(r);r=routes.find(p=>p.id===r.parent)}
 const graph=[{'@type':'BreadcrumbList',itemListElement:trail.map((r,i)=>({'@type':'ListItem',position:i+1,name:r.label,item:config.origin+r.path}))}];
 if(route.kind==='home')graph.push(organization,{'@type':'WebSite',name:config.brand.name,url:config.origin+'/','@id':config.origin+'/#website'});
 if(['occasion','city','line'].includes(route.kind))graph.push({'@type':'Service',name:route.title.split(' | ')[0],url:config.origin+route.path,serviceType:'Referencia y coordinación de catering',provider:organization,areaServed:config.coverage.map(name=>({'@type':'City',name}))});
 const author={'@type':'Organization',name:config.brand.name,url:config.origin+'/'};
 if(route.kind==='recipe'){const total=(page.times.prep||0)+(page.times.cook||0)+(page.times.rest||0);graph.push({'@type':'Recipe',name:page.label,description:route.meta,url:config.origin+route.path,...(page.image?{image:[imageUrl(page.image)]}:{}),author,datePublished:page.publishedAt||page.updatedAt,dateModified:page.updatedAt,recipeCuisine:page.cuisine||'Paraguaya',recipeCategory:page.course||'Receta',keywords:(page.keywords||[]).join(', '),recipeYield:page.yield.yieldText,prepTime:iso(page.times.prep||0),cookTime:iso(page.times.cook||0),totalTime:iso(total),recipeIngredient:page.ingredients.flatMap(g=>g.items).map(i=>[qtyText(i),qtyText(i)&&i.u&&i.u!=='u'?'de':'',i.item,i.note||''].filter(Boolean).join(' ')),recipeInstructions:page.steps.map((st,n)=>({'@type':'HowToStep',name:st.title,text:st.text,url:config.origin+route.path+'#paso-'+(n+1)}))})}
 if(['guide','cut'].includes(route.kind))graph.push({'@type':'Article',headline:page.h1,description:route.meta,url:config.origin+route.path,mainEntityOfPage:config.origin+route.path,...(page.image?{image:[imageUrl(page.image)]}:{}),author,publisher:author,datePublished:page.publishedAt||page.updatedAt,dateModified:page.updatedAt,inLanguage:'es-PY'});
 // Lists (idea 13): hubs, ingredient pages and seasonal collections describe their items as an ItemList.
 const listed=route.kind==='recipes-hub'?pages.filter(p=>p.kind==='recipe'):route.kind==='cuts-hub'?pages.filter(p=>p.kind==='cut'):route.kind==='guides-hub'?pages.filter(p=>p.kind==='guide'):route.kind==='ingredient'?matchRecipes(page,pages):route.kind==='collection'?(page.recipes||[]).map(id=>pages.find(p=>p.id===id)).filter(Boolean):[];
 const items=listed.map(p=>routes.find(r=>r.id===p.id&&r.published&&r.indexable)).filter(Boolean);
 if(items.length)graph.push({'@type':'ItemList',name:route.label,itemListElement:items.map((r,i)=>({'@type':'ListItem',position:i+1,url:config.origin+r.path,name:r.label}))});
 return {'@context':'https://schema.org','@graph':graph};
}
// Delete only the validated site output directory, never the source assets.
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
fs.cpSync(path.join(root,'public'),out,{recursive:true});
if(fs.existsSync(path.join(root,'php')))fs.cpSync(path.join(root,'php'),path.join(out,'php'),{recursive:true});
let imageCount=0;
for(const image of images){const files=variants(image);if(!files.length)throw Error('No assets for image '+image.id);for(const {file} of files){const dest=path.join(out,'assets/img',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(path.join(root,'assets/img',file),dest);imageCount++}}
// Home: the food-hub layer (recipes, guides, meat) under the catering funnel.
function homeHub(){const pick=ids=>ids.map(id=>pages.find(p=>p.id===id)).filter(Boolean);const recipes=cardGrid(pick(['receta-sopa-paraguaya','receta-chipa','receta-chipa-guazu','receta-mbeju','receta-strogonoff-de-pollo','receta-vitel-tone']),routes),guides=cardGrid(pick(['guia-mercado-de-abasto','guia-queso-paraguay','guia-cuanta-carne-por-persona','guia-cuantos-bocaditos-por-persona']),routes);if(!recipes&&!guides)return '';return `<section class="home-hub" aria-labelledby="hub-h"><div class="wrap"><p class="eyebrow">Cocina paraguaya</p><h2 id="hub-h">Recetas y guías para cocinar en casa</h2><p class="lead">Las recetas de siempre con cantidades que se ajustan a tus kilos o porciones, y guías para comprar y calcular sin adivinar.</p>${recipes}<a class="more" href="/recetas/">Ver todas las recetas →</a>${guides}<a class="more" href="/guias/">Ver todas las guías →</a></div></section>`}
// Link previews (WhatsApp, Facebook, X): the page photo when it has one, else the default card in public/og/.
function ogTags(route,hero){
 const webps=hero?variants(hero).filter(f=>f.type==='webp'):[],best=webps.filter(f=>f.width<=1344).at(-1)||webps[0],size=best&&webpSize(path.join(root,'assets/img',best.file));
 const img=best?{url:config.origin+'/assets/img/'+best.file,type:'image/webp',width:size.width,height:size.height,alt:hero.alt_es}:{url:config.origin+'/og/comida-card.jpg',type:'image/jpeg',width:1200,height:630,alt:'comida.com.py: recetas, guías y cortes de la cocina paraguaya'};
 const type=['recipe','guide','cut'].includes(route.kind)?'article':'website';
 return `<meta property="og:type" content="${type}"><meta property="og:site_name" content="${attr(config.brand.name)}"><meta property="og:title" content="${attr(route.title)}"><meta property="og:description" content="${attr(route.meta)}"><meta property="og:url" content="${config.origin+route.path}"><meta property="og:locale" content="es_PY"><meta property="og:image" content="${attr(img.url)}"><meta property="og:image:type" content="${img.type}"><meta property="og:image:width" content="${img.width}"><meta property="og:image:height" content="${img.height}"><meta property="og:image:alt" content="${attr(img.alt)}"><meta name="twitter:card" content="summary_large_image">`;
}
// Seasonal block (idea 10): all season collections are rendered as cards; public/js/site.js shows the ones that fit today's date.
function seasonBlock(){const ids=['semana-santa','san-juan','navidad','fin-de-ano','cumpleanos','desayunos-saludables','meriendas-saludables','cenas-saludables'];const items=ids.map(id=>pages.find(p=>p.id==='coleccion-'+id)).filter(Boolean);let grid=cardGrid(items,routes);if(!grid)return '';for(const it of items){const r=routes.find(r=>r.id===it.id);grid=grid.replace(`href="${attr(r.path)}"`,`href="${attr(r.path)}" data-season-card="${it.slug}"`)}return `<section class="season-block" data-season hidden aria-labelledby="season-h"><div class="wrap"><p class="eyebrow">De temporada</p><h2 id="season-h">Recetas para lo que se viene</h2>${grid}</div></section>`}
const commonHeader=header(),footer=normalize(read('templates/footer.html'));
// GA4 only when a measurement ID is configured; events are sent by public/js/forms.js.
const analytics=config.analytics?.enabled&&/^G-[A-Z0-9]+$/.test(config.analytics.publicId||'')?`<script async src="https://www.googletagmanager.com/gtag/js?id=${config.analytics.publicId}"></script><script src="/js/ga.js" data-id="${config.analytics.publicId}"></script>`:'';
for(const route of routes.filter(r=>r.published)){
 const page=pages.find(p=>p.id===route.id);if(!page)throw Error('Missing page module '+route.id);
 const pageWhatsApp=html=>html.replace(/href="https:\/\/wa\.me\/[^" ]+"/g,()=>`href="${attr(wa(page.waMessage))}"`);
 let content;
 if(route.kind==='home')content=normalize(read('templates/home.html')).replace('<!--home-hub-->',seasonBlock()+homeHub()).replace('<!--lead-form-->',leadForm({routes,config,wa,source:'/',prefix:'c',heading:'Contanos qué celebrás',hint:'Dos pasos cortos. Gratis y sin compromiso.'}));
 else {const render=(await import(pathToFileURL(path.join(root,'templates',route.kind+'.mjs')).href)).default;content=render({page,route,routes,pages,picture,wa,config,prices})}
 const hero=route.kind==='home'?images.find(i=>i.file==='catering-buffet-evento-salon-asuncion'):images.find(i=>i.id===page.image);
 const preload=hero?`<link rel="preload" as="image" type="image/avif" imagesrcset="${variants(hero).filter(f=>f.type==='avif').map(f=>'/assets/img/'+f.file+' '+f.width+'w').join(', ')}" imagesizes="${route.kind==='home'?'100vw':'(min-width:900px) 1200px, 100vw'}">`:'';
 const html=`<!doctype html><html lang="${config.locale}"><head><meta charset="utf-8"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23C8472B'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23FAF6F0' text-anchor='middle'%3Ec%3C/text%3E%3C/svg%3E"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(route.title)}</title><meta name="description" content="${attr(route.meta)}"><link rel="canonical" href="${config.origin+route.path}">${route.indexable?'':'<meta name="robots" content="noindex, follow">'}<meta name="theme-color" content="#FAF6F0"><link rel="manifest" href="/manifest.webmanifest"><link rel="preload" href="/fonts/fraunces-opsz-normal.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>${ogTags(route,hero)}${preload}<link rel="stylesheet" href="/css/tokens.css"><link rel="stylesheet" href="/css/fonts.css"><link rel="stylesheet" href="/css/site.css"><script type="application/ld+json">${jsonLd(schemas(route,page))}</script><script src="/js/site.js" defer></script><script src="/js/forms.js" defer></script>${[...(page.scripts||[]),...(['recipe','guide','cut','vianda','recipes-hub','planner','product','ingredient','collection','recetario','cuts-hub','guides-hub'].includes(route.kind)?['/js/recipe.js','/js/kitchen.js']:[])].map(src=>`<script src="${attr(src)}" defer></script>`).join('')}${analytics}</head><body><a class="skip" href="#top">Saltar al contenido</a>${commonHeader}${content}${footer}</body></html>`;
 const file=fileFor(out,route.path);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,pageWhatsApp(html));
}
// Stamp the service-worker cache version with a hash of the built CSS/JS/data so every deploy refreshes caches.
{const crypto=await import('node:crypto');const h=crypto.createHash('sha256');for(const f of walk(out).filter(f=>/\.(css|js)$/.test(f)).sort())h.update(fs.readFileSync(f));const sw=path.join(out,'sw.js');if(fs.existsSync(sw))fs.writeFileSync(sw,fs.readFileSync(sw,'utf8').replace('__BUILD__',h.digest('hex').slice(0,12)))}
// Recipe data for the planner and the order prefill (public, no personal data).
const recipeData=pages.filter(p=>p.kind==='recipe'&&routes.some(r=>r.id===p.id&&r.published&&r.indexable)).map(p=>({id:p.id,slug:p.slug,path:routes.find(r=>r.id===p.id).path,label:p.label,category:p.category||[],minutes:(p.times.prep||0)+(p.times.cook||0)+(p.times.rest||0),yield:{mode:p.yield.mode,base:p.yield.base,options:p.yield.options,text:p.yield.yieldText},ingredients:p.ingredients.flatMap(g=>g.items).map(i=>({q:i.q??null,u:i.u||'u',item:i.item,one:i.one||null,fixed:i.scale===false||undefined}))})).sort((a,b)=>a.label.localeCompare(b.label,'es'));
fs.mkdirSync(path.join(out,'data'),{recursive:true});fs.writeFileSync(path.join(out,'data/recipes.json'),JSON.stringify(recipeData));
// Site search index (idea 5): every indexable page with its label, kind, short text and target phrases. Loaded only when the search opens.
{const KIND={recipe:'Receta',guide:'Guía',cut:'Corte',ingredient:'Recetas por ingrediente',collection:'Recetas',recetario:'Recetario',vianda:'Viandas',product:'Mercado',occasion:'Catering',city:'Catering',hub:'Catering',line:'Catering'};
const searchData=routes.filter(r=>r.published&&r.indexable&&!['home','404','gracias'].includes(r.kind)).map(r=>{const p=pages.find(x=>x.id===r.id)||{};return {t:p.label||r.label,p:r.path,k:KIND[r.kind]||'Página',s:(t=>t.length>120?t.slice(0,t.lastIndexOf(' ',117))+'…':t)(String(p.cardText||r.meta||'')),w:[p.h1,...(p.keywords||[]).slice(0,8)].filter(Boolean).join(' · ')}});
fs.writeFileSync(path.join(out,'data/search.json'),JSON.stringify(searchData))}
const indexable=routes.filter(r=>r.published&&r.indexable&&r.kind!=='404');
fs.writeFileSync(path.join(out,'sitemap.xml'),buildSitemap(config,indexable.map(r=>({...r,slug:r.path,updated:r.updatedAt}))));
fs.writeFileSync(path.join(out,'robots.txt'),buildRobots(config));
console.log(`Build OK: ${walk(out).filter(f=>f.endsWith('.html')).length} HTML; ${indexable.length} sitemap URLs; ${images.length} imagery entries, ${imageCount} image files. Blog ${config.blog.enabled?'enabled':'disabled'}.`);
