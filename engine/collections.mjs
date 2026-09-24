// Content collections: one module per page under sites/<id>/content/<collection>/*.mjs.
// Each module is both the page copy and the source of its route, so the manifest cannot drift.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

export const SUFFIX=' | comida.com.py';
// kind -> URL prefix, parent route and hub
export const COLLECTIONS={
  recipes:{kind:'recipe',prefix:'/recetas/',parent:'recetas'},
  guides:{kind:'guide',prefix:'/guias/',parent:'guias'},
  cuts:{kind:'cut',prefix:'/carne/',parent:'carne'},
  viandas:{kind:'vianda',prefix:'/viandas/',parent:'viandas'},
  ingredients:{kind:'ingredient',prefix:'/recetas-con/',parent:'recetas'},
  seasons:{kind:'collection',prefix:'/recetas/para/',parent:'recetas'},
  products:{kind:'product',prefix:'/mercado/',parent:'mercado'},
  // Reserved (plan/10 §11): kinds exist so the engine and verifier handle them; nothing is published yet.
  restaurants:{kind:'restaurant',prefix:'/restaurantes/',parent:'restaurantes'},
};
export const ENVELOPE=['id','slug','kind','label','seoTitle','meta','h1','source','verifiedAt','updatedAt','published','indexable'];

export async function loadCollection(siteDir,name){
  const dir=path.join(siteDir,'content',name);
  if(!fs.existsSync(dir))return [];
  const files=fs.readdirSync(dir).filter(f=>f.endsWith('.mjs')&&!f.startsWith('_')).sort();
  const items=[];
  for(const f of files){const mod=(await import(pathToFileURL(path.join(dir,f)).href)).default;items.push({...mod,_file:name+'/'+f})}
  return items;
}

/** Route record for a collection item. `path` may be overridden (e.g. /mercado-de-abasto/). */
export function routeFor(item,name){
  const c=COLLECTIONS[name];
  return {id:item.id,kind:item.kind||c.kind,path:item.path||c.prefix+item.slug+'/',label:item.label,title:item.seoTitle+SUFFIX,meta:item.meta,indexable:Boolean(item.published&&item.indexable),published:Boolean(item.published),parent:item.parent||c.parent,updatedAt:item.updatedAt,collection:name};
}
