import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {validateConfig} from './config.mjs';
import {normalizeSlug,outputPathFor} from './routes.mjs';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function loadSite(){
 const id=process.argv.find(a=>a.startsWith('--site='))?.slice(7);
 if(!id||!/^[a-z0-9-]+$/.test(id)){console.error('Usage: node engine/{build-site,verify}.mjs --site=<id>');process.exit(2)}
 const load=async f=>(await import(pathToFileURL(path.join(root,'sites',id,f)).href)).default;
 const {config}=validateConfig(await load('site.config.mjs'),id);
 const [routes,pages,authors,providers,prices]=await Promise.all(['routes.mjs','content/pages.mjs','content/authors.mjs','content/providers.mjs','prices.mjs'].map(load));
 const ids=new Set(),paths=new Set();
 for(const r of routes){if(ids.has(r.id)||paths.has(r.path))throw Error('Duplicate route: '+r.id);ids.add(r.id);paths.add(r.path);if(normalizeSlug(r.path)!==r.path)throw Error('Noncanonical route: '+r.path);for(const field of ['title','meta','kind'])if(!r[field])throw Error('Missing route '+field);if(typeof r.published!=='boolean'||typeof r.indexable!=='boolean')throw Error('Invalid publication flags')}
 if(!config.chefPartnerSigned&&routes.some(r=>r.kind==='line'&&r.indexable))throw Error('Chef indexability requires signed partner');
 for(const p of pages)for(const id of p.related||[])if(!routes.some(r=>r.id===id&&r.published))throw Error('Unpublished related route: '+id);
 for(const p of prices)for(const field of ['unit','minGuests','minCharge','tax','transport','inclusions','source','verifiedAt','published'])if(!(field in p))throw Error('Price missing '+field);
 const out=path.resolve(root,'dist',config.build.outputDomain);if(!out.startsWith(path.join(root,'dist')+path.sep))throw Error('Unsafe output directory');
 return {config,routes,pages,authors,providers,prices,out};
}
export function walk(dir){return fs.existsSync(dir)?fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]):[]}
export function fileFor(out,p){return path.join(out,outputPathFor(p))}
