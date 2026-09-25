import {esc,attr} from '../engine/escape.mjs';
import {breadcrumbs} from './content.mjs';
import {minutes,faqHtml,sectionHtml,cardGrid} from './recipe-lib.mjs';
// Listing pages for recipes, guides and cuts. Cards are plain links (crawlable); filters are progressive.
export function hubList(kind){return ({page:h,route,routes,pages})=>{
  const items=pages.filter(p=>p.kind===kind&&routes.some(r=>r.id===p.id&&r.published&&r.indexable)).sort((a,b)=>(a.order??999)-(b.order??999)||a.label.localeCompare(b.label,'es'));
  const cats=[...new Set(items.flatMap(i=>i.category||[]))];
  const labels=h.categoryLabels||{};
  const card=i=>{const r=routes.find(r=>r.id===i.id);return `<a class="rcard tone-${tone(i.id)}" href="${attr(r.path)}" data-cats="${attr((i.category||[]).join(' '))}" data-name="${attr((i.label+' '+(i.keywords||[]).slice(0,1).join(' ')).toLowerCase())}"><span class="rcard-kind">${esc(i.course||(kind==='cut'?i.animal||'Corte':'Guía'))}</span><strong>${esc(i.label)}</strong>${i.cardText&&kind!=="recipe"?`<span class="rcard-text">${esc(i.cardText)}</span>`:''}${i.times?`<span class="rcard-meta">${esc(minutes((i.times.prep||0)+(i.times.cook||0)+(i.times.rest||0)))} · ${esc(i.difficulty)}</span>`:''}</a>`};
  const filters=kind==='recipe'&&cats.length?`<div class="hub-tools" data-hub-filter><label class="sr-only" for="hub-q">Buscar una receta</label><input id="hub-q" type="search" placeholder="Buscá: chipa, pollo, sopa…" autocomplete="off"><div class="chips" role="group" aria-label="Filtrar por tipo"><button type="button" class="chip-btn" data-cat="" aria-pressed="true">Todas</button>${cats.filter(c=>labels[c]).map(c=>`<button type="button" class="chip-btn" data-cat="${attr(c)}" aria-pressed="false">${esc(labels[c])}</button>`).join('')}</div><button type="button" class="btn btn-primary" data-random>¿Qué cocino hoy?</button><p class="hub-count" role="status" aria-live="polite"></p></div>`:'';
  return `<main id="top" class="content-page hub-page"><div class="wrap">${breadcrumbs(route,routes)}<h1>${esc(h.h1)}</h1>${h.intro.map(p=>`<p class="lead">${esc(p)}</p>`).join('')}${filters}<div class="rcards rcards-hub">${items.map(card).join('')}</div>${h.guides?cardGrid(h.guides.map(id=>pages.find(p=>p.id===id)).filter(Boolean),routes,{heading:h.guidesTitle||'Guías'}):''}${(h.sections||[]).map(sectionHtml).join('')}${faqHtml(h.faq,'Preguntas frecuentes')}</div></main>`;
}}
function tone(id){let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))>>>0;return h%4}
