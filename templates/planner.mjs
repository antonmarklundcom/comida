import {esc} from '../engine/escape.mjs';
import {breadcrumbs} from './content.mjs';
import {sectionHtml,faqHtml} from './recipe-lib.mjs';
// Weekly menu planner: pick recipes, get one shopping list, order it or share it.
// Works from /data/recipes.json (built at build time); without JavaScript the page explains the idea and links /recetas/.
export default function planner({page:h,route,routes}){
  return `<main id="top" class="content-page planner-page"><div class="wrap">${breadcrumbs(route,routes)}<h1>${esc(h.h1)}</h1>${h.intro.map(p=>`<p class="lead">${esc(p)}</p>`).join('')}
<div class="planner" data-planner>
<section class="planner-pick card-form" aria-labelledby="pl-pick-h"><h2 id="pl-pick-h">1. Elegí las recetas de tu semana</h2><label class="sr-only" for="pl-q">Buscar receta</label><input id="pl-q" type="search" placeholder="Buscá una receta…" autocomplete="off"><ul class="planner-list" aria-live="polite"><li>Cargando recetas…</li></ul><noscript><p>El planificador necesita JavaScript. Podés ver todas las recetas en <a href="/recetas/">Recetas</a>.</p></noscript></section>
<section class="planner-menu card-form" aria-labelledby="pl-menu-h"><h2 id="pl-menu-h">2. Tu menú</h2><ol class="planner-chosen"></ol><p class="planner-empty">Todavía no elegiste recetas.</p></section>
<section class="planner-shop card-form" aria-labelledby="pl-shop-h"><h2 id="pl-shop-h">3. Tu lista de compras</h2><ul class="checklist planner-shopping"></ul><div class="form-foot planner-actions" hidden><a class="btn btn-primary" data-order href="/mercado/">Pedir estos ingredientes</a><button type="button" class="btn btn-ghost" data-copy>Copiar la lista</button><button type="button" class="btn btn-ghost" data-send-wa>Enviar por WhatsApp</button><button type="button" class="btn btn-ghost" data-print>Imprimir</button></div><p class="note" role="status" aria-live="polite" data-copy-status></p></section>
</div>
${(h.sections||[]).map(sectionHtml).join('')}${faqHtml(h.faq,'Preguntas frecuentes')}</div></main>`;
}
