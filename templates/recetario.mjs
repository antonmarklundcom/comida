import {esc,attr} from '../engine/escape.mjs';
import {breadcrumbs} from './content.mjs';
import {ingredientLine,minutes} from './recipe-lib.mjs';
// Printable seasonal recetario, unlocked after the recetario form (noindex, not in the sitemap).
// Capped at 12 recipes so the page stays under the 100 KB HTML budget.
export default function recetario({page,route,routes,pages}){
  const col=pages.find(p=>p.id===page.collectionId);
  const recipes=(col.recipes||[]).map(id=>pages.find(p=>p.id===id&&p.kind==='recipe')).filter(r=>r&&routes.some(x=>x.id===r.id&&x.published)).slice(0,12);
  const one=r=>`<article class="rx"><h2>${esc(r.label)}</h2><p class="rx-meta">${esc(r.yield.yieldText)} · ${esc(minutes((r.times.prep||0)+(r.times.cook||0)+(r.times.rest||0)))}</p><div class="rx-cols"><div><h3>Ingredientes</h3>${r.ingredients.map(g=>`${g.group?`<p class="rx-group">${esc(g.group)}</p>`:''}<ul>${g.items.map(i=>`<li>${ingredientLine(i)}</li>`).join('')}</ul>`).join('')}</div><div><h3>Preparación</h3><ol>${r.steps.map(s=>`<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join('')}</ol></div></div><p class="rx-link">Receta completa: comida.com.py${esc(routes.find(x=>x.id===r.id).path)}</p></article>`;
  return `<main id="top" class="content-page recetario-page"><div class="wrap narrow">${breadcrumbs(route,routes)}<h1>${esc(col.recetario.title)}</h1><p class="lead">${esc(col.recetario.blurb)} Guardalo como PDF desde el botón de imprimir de tu navegador.</p><p><button type="button" class="btn btn-primary" data-print>Imprimir o guardar en PDF</button></p>${recipes.map(one).join('')}</div></main>`;
}
