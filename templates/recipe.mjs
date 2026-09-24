import {esc,attr} from '../engine/escape.mjs';
import {breadcrumbs} from './content.mjs';
import {ingredientLine,minutes,sectionHtml,faqHtml,sourceLine,cardGrid,tableHtml,qtyText} from './recipe-lib.mjs';
// Recipe page: built for cooking with the phone in the kitchen (scaler, checklists, timers, screen awake).
export default function recipe({page:r,route,routes,pages,picture,wa}){
  const y=r.yield,total=(r.times.prep||0)+(r.times.cook||0)+(r.times.rest||0);
  const scaler=`<div class="scaler" data-scaler data-base="${attr(y.base)}" data-mode="${attr(y.mode)}"><span class="scaler-label" id="sc-l">${y.mode==='kilos'?'Cantidad de receta':'Porciones'}</span><div class="scaler-ctrl" role="group" aria-labelledby="sc-l">${y.options.map(o=>`<button type="button" class="chip-btn" data-factor="${attr(o/y.base)}" aria-pressed="${o===y.base}">${esc(y.mode==='kilos'?fmtKilos(o):String(o))}</button>`).join('')}</div><p class="scaler-note">${esc(y.note)}</p></div>`;
  const ingredients=r.ingredients.map((g,gi)=>`<div class="ing-group">${g.group?`<h3>${esc(g.group)}</h3>`:''}<ul class="checklist">${g.items.map((ing,i)=>`<li><label><input type="checkbox" data-save="i${gi}-${i}"><span class="ing" data-q="${ing.q??''}" data-u="${attr(ing.u||'u')}"${ing.scale===false?' data-fixed':''}>${ingredientLine(ing)}</span></label></li>`).join('')}</ul></div>`).join('');
  const steps=`<ol class="steps-list">${r.steps.map((s,i)=>`<li id="paso-${i+1}"><label class="step-done"><input type="checkbox" data-save="s${i}"><span class="sr-only">Marcar el paso ${i+1} como hecho</span></label><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.min?`<button type="button" class="timer" data-min="${attr(s.min)}">Temporizador ${esc(minutes(s.min))}</button>`:''}</div></li>`).join('')}</ol>`;
  const kiloTable=y.mode==='kilos'&&r.kiloTable?tableHtml({caption:r.kiloTable.caption,head:['Ingrediente',...r.kiloTable.sizes.map(fmtKilos)],rows:r.kiloTable.items.map(ref=>{const ing=r.ingredients.flatMap(g=>g.items).find(i=>i.item===ref);return [ing.item,...r.kiloTable.sizes.map(k=>qtyText(ing,k/y.base))]}),note:r.kiloTable.note}):'';
  const related=(r.related||[]).map(id=>pages.find(p=>p.id===id)).filter(Boolean);
  const guides=(r.guides||[]).map(id=>pages.find(p=>p.id===id)).filter(Boolean);
  return `<main id="top" class="content-page recipe-page"><div class="wrap narrow">${breadcrumbs(route,routes)}
<header class="recipe-head"><p class="eyebrow">${esc(r.course||'Receta')}${r.cuisine?' · '+esc(r.cuisine):''}</p><h1>${esc(r.h1)}</h1>${r.intro.map(p=>`<p class="lead">${esc(p)}</p>`).join('')}
<dl class="facts"><div><dt>Preparación</dt><dd>${esc(minutes(r.times.prep))}</dd></div><div><dt>Cocción</dt><dd>${esc(minutes(r.times.cook)||'Sin cocción')}</dd></div>${r.times.rest?`<div><dt>Reposo</dt><dd>${esc(minutes(r.times.rest))}</dd></div>`:''}<div><dt>Total</dt><dd>${esc(minutes(total))}</dd></div><div><dt>Rinde</dt><dd>${esc(y.yieldText)}</dd></div><div><dt>Dificultad</dt><dd>${esc(r.difficulty)}</dd></div></dl>
<nav class="jump" aria-label="En esta receta"><a href="#ingredientes">Ingredientes</a><a href="#preparacion">Preparación</a>${r.tips?.length?'<a href="#consejos">Consejos</a>':''}${r.faq?.length?'<a href="#preguntas">Preguntas</a>':''}<button type="button" class="linkish" data-print>Imprimir</button></nav></header>
${r.image?`<figure class="page-image">${picture(r.image,'(min-width:900px) 820px, 100vw',true)}<figcaption class="cap">Imagen ilustrativa</figcaption></figure>`:''}
<div class="recipe-grid"><section class="ingredients" id="ingredientes" aria-labelledby="ing-h"><h2 id="ing-h">Ingredientes</h2>${scaler}${ingredients}<button type="button" class="linkish" data-clear>Desmarcar todo</button></section>
<section class="method" id="preparacion" aria-labelledby="prep-h"><div class="method-head"><h2 id="prep-h">Preparación</h2><button type="button" class="btn btn-ghost cook-mode" data-cook aria-pressed="false">Modo cocina</button></div><p class="cook-hint">El modo cocina mantiene la pantalla encendida y agranda la letra mientras cocinás.</p>${steps}</section></div>
${kiloTable?`<section class="art-sec" id="por-kilo"><h2>${esc(r.kiloTable.title)}</h2>${kiloTable}</section>`:''}
${r.tips?.length?`<section class="art-sec" id="consejos"><h2>${esc(r.tipsTitle||'Consejos para que salga bien')}</h2><ul class="ticks">${r.tips.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></section>`:''}
${(r.sections||[]).map(sectionHtml).join('')}
${r.variations?.length?`<section class="art-sec"><h2>Variantes</h2><div class="content-grid">${r.variations.map(([h,p])=>`<article class="content-card"><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join('')}</div></section>`:''}
${r.storage?`<section class="art-sec"><h2>Cómo conservar</h2><p>${esc(r.storage)}</p></section>`:''}
${faqHtml(r.faq,'Preguntas frecuentes')}
${sourceLine(r)}
${guides.length?`<section class="art-sec">${cardGrid(guides,routes,{heading:'Para saber más'})}</section>`:''}
${related.length?`<section class="art-sec">${cardGrid(related,routes,{heading:'Otras recetas que te pueden gustar'})}</section>`:''}
<section class="soft-cta" data-shared="process"><h2>¿Lo necesitás para muchas personas?</h2><p>Si es para un evento, te ayudamos a consultar catering en Gran Asunción. Contanos la fecha, la zona y cuántos son.</p><div class="cta-row"><a class="btn btn-primary" href="/presupuesto/${r.cateringOccasion?'?ocasion='+encodeURIComponent(r.cateringOccasion):''}">Pedí un presupuesto</a><a class="btn btn-ghost" href="${attr(wa(r.waMessage||'Hola, quiero consultar catering para un evento.'))}">Escribinos por WhatsApp</a></div></section>
</div></main>`;
}
function fmtKilos(k){return k===0.5?'½ kilo':k===1?'1 kilo':String(k).replace('.',',')+' kilos'}
