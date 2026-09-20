import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {loadSite,root,fileFor,walk} from './site.mjs';
import {esc,attr,jsonLd} from './escape.mjs';
import {webpSize} from './image-size.mjs';
import {buildSitemap,buildRobots} from './sitemap.mjs';
const site=await loadSite(),{config,routes,pages,out}=site;
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
 html=html.replace(/href="(\/[^"#]*)"/g,(all,p)=>{if(routes.some(r=>r.path===p&&r.published))return all;return 'href="/#contacto"'});
 return html.replaceAll('href="#top"','href="/"').replace(/href="#(pedir|contacto|como-funciona|ocasiones|precios|proveedores)"/g,'href="/#$1"');
}
function header(){
 let html=read('templates/header.html');
 const nav=routes.filter(r=>r.published&&['hub','occasion','city'].includes(r.kind));
 const items=nav.map(r=>`<a class="item" href="${attr(r.path)}"><strong>${esc(r.label)}</strong><span>${r.kind==='hub'?'Formatos para tu evento':r.kind==='city'?'Cobertura y logística':'Menús y organización'}</span></a>`).join('');
 html=html.replace(/(<div class="sub-inner">)[\s\S]*?(<div class="sub-side">)/,`$1<p class="eyebrow">Explorá el catering</p>${items}$2`);
 html=html.replace(/(<div class="drawer">)[\s\S]*?(<\/div>\s*<\/details>)/,`$1<p class="eyebrow">Catering</p>${nav.map(r=>`<a href="${attr(r.path)}">${esc(r.label)}</a>`).join('')}<div class="main"><a href="/#como-funciona">Cómo funciona</a><a href="/#precios">Precios</a><a href="/#proveedores">Proveedores</a><a href="/#contacto">Escribinos</a></div>$2`);
 // Chef stays hidden until its route and signed-partner flag permit navigation.
 if(!config.chefPartnerSigned)html=html.replace(/<a[^>]*href="\/chef-a-domicilio\/"[\s\S]*?<\/a>/g,'');
 return normalize(html);
}
function schemas(route){
 const organization={'@type':'Organization','@id':config.origin+'/#organization',name:config.brand.name,url:config.origin+'/',telephone:config.operator.phone};
 const trail=[];let r=route;while(r){trail.unshift(r);r=routes.find(p=>p.id===r.parent)}
 const graph=[{'@type':'BreadcrumbList',itemListElement:trail.map((r,i)=>({'@type':'ListItem',position:i+1,name:r.label,item:config.origin+r.path}))}];
 if(route.kind==='home')graph.push(organization,{'@type':'WebSite',name:config.brand.name,url:config.origin+'/','@id':config.origin+'/#website'});
 if(['occasion','city','line'].includes(route.kind))graph.push({'@type':'Service',name:route.title.split(' | ')[0],url:config.origin+route.path,serviceType:'Referencia y coordinación de catering',provider:organization,areaServed:config.coverage.map(name=>({'@type':'City',name}))});
 return {'@context':'https://schema.org','@graph':graph};
}
// Delete only the validated site output directory, never the source assets.
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
fs.cpSync(path.join(root,'public'),out,{recursive:true});
if(fs.existsSync(path.join(root,'php')))fs.cpSync(path.join(root,'php'),path.join(out,'php'),{recursive:true});
let imageCount=0;
for(const image of images){const files=variants(image);if(!files.length)throw Error('No assets for image '+image.id);for(const {file} of files){const dest=path.join(out,'assets/img',file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(path.join(root,'assets/img',file),dest);imageCount++}}
const commonHeader=header(),footer=normalize(read('templates/footer.html'));
for(const route of routes.filter(r=>r.published)){
 const page=pages.find(p=>p.id===route.id);if(!page)throw Error('Missing page module '+route.id);
 let content;
 if(route.kind==='home')content=normalize(read('templates/home.html'));
 else {const render=(await import(pathToFileURL(path.join(root,'templates',route.kind+'.mjs')).href)).default;content=render({page,route,routes,picture,wa,config})}
 const hero=route.kind==='home'?images.find(i=>i.file==='catering-buffet-evento-salon-asuncion'):images.find(i=>i.id===page.image);
 const preload=hero?`<link rel="preload" as="image" type="image/avif" imagesrcset="${variants(hero).filter(f=>f.type==='avif').map(f=>'/assets/img/'+f.file+' '+f.width+'w').join(', ')}" imagesizes="${route.kind==='home'?'100vw':'(min-width:900px) 1200px, 100vw'}">`:'';
 const html=`<!doctype html><html lang="${config.locale}"><head><meta charset="utf-8"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23C8472B'/%3E%3Ctext x='16' y='23' font-family='Georgia,serif' font-size='20' fill='%23FAF6F0' text-anchor='middle'%3Ec%3C/text%3E%3C/svg%3E"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(route.title)}</title><meta name="description" content="${attr(route.meta)}"><link rel="canonical" href="${config.origin+route.path}">${route.indexable?'':'<meta name="robots" content="noindex, follow">'}<meta name="theme-color" content="#FAF6F0"><meta property="og:type" content="website"><meta property="og:title" content="${attr(route.title)}"><meta property="og:description" content="${attr(route.meta)}"><meta property="og:url" content="${config.origin+route.path}"><meta property="og:locale" content="es_PY">${preload}<link rel="stylesheet" href="/css/tokens.css"><link rel="stylesheet" href="/css/fonts.css"><link rel="stylesheet" href="/css/site.css"><script type="application/ld+json">${jsonLd(schemas(route))}</script><script src="/js/site.js" defer></script></head><body><a class="skip" href="#top">Saltar al contenido</a>${commonHeader}${content}${footer}</body></html>`;
 const file=fileFor(out,route.path);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,html);
}
const indexable=routes.filter(r=>r.published&&r.indexable&&r.kind!=='404');
fs.writeFileSync(path.join(out,'sitemap.xml'),buildSitemap(config,indexable.map(r=>({...r,slug:r.path,updated:r.updatedAt}))));
fs.writeFileSync(path.join(out,'robots.txt'),buildRobots(config));
console.log(`Build OK: ${walk(out).filter(f=>f.endsWith('.html')).length} HTML; ${indexable.length} sitemap URLs; ${images.length} imagery entries, ${imageCount} image files. Blog ${config.blog.enabled?'enabled':'disabled'}.`);
