import {esc,attr,jsonLd} from '../engine/escape.mjs';
import {breadcrumbs,briefHref} from './content.mjs';
import {sectionHtml,faqHtml,sourceLine,cardGrid,tableHtml} from './recipe-lib.mjs';
import {leadForm,orderForm,recetarioForm,subscribeForm} from './lead-form.mjs';
import mercado from '../sites/comida/mercado.mjs';
// Which product the order form preselects on each /mercado/ page.
const PRESELECT={'producto-canasta':['canasta-mediana'],'producto-queso':['queso-1'],'producto-carne':['pack-asado'],'producto-pescado':['pescado-surubi']};
// Guides, meat cuts and viandas share one long-form layout: facts box, sections, optional tool, FAQ, related.
export function article({page:a,route,routes,pages,picture,wa,config}){
  const facts=a.facts?.length?`<dl class="facts facts-wide">${a.facts.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`:'';
  const toc=(a.sections||[]).filter(s=>s.id).length>2?`<nav class="toc" aria-label="En esta guía"><p class="eyebrow">En esta guía</p><ol>${a.sections.filter(s=>s.id).map(s=>`<li><a href="#${attr(s.id)}">${esc(s.title)}</a></li>`).join('')}${a.faq?.length?'<li><a href="#preguntas">Preguntas frecuentes</a></li>':''}</ol></nav>`:'';
  const related=(a.related||[]).map(id=>pages.find(p=>p.id===id)).filter(Boolean);
  const recipes=a.kind==='ingredient'?matchRecipes(a,pages):(a.recipes||[]).map(id=>pages.find(p=>p.id===id)).filter(Boolean);
  const products=a.kind==='product'&&a.hub?pages.filter(p=>p.kind==='product'&&!p.hub).sort((x,y)=>(x.order??99)-(y.order??99)):[];
  const form=a.kind==='product'?`<section class="page-form" data-shared="process" id="formulario" aria-labelledby="of-h">${orderForm({mercado,wa,source:route.path,preselect:PRESELECT[a.id]||[],waMessage:a.waMessage})}</section>`:a.kind==='collection'&&a.recetario?`<section class="page-form" data-shared="process" id="recetario" aria-labelledby="rf-h">${recetarioForm({slug:a.slug,title:a.recetario.title,blurb:a.recetario.blurb,source:route.path})}</section>`:a.form==='viandas'?`<section class="page-form" data-shared="process" id="formulario" aria-labelledby="vf-h">${viandasForm({config,wa,source:route.path,waMessage:a.waMessage})}</section>`:'';
  const cta=a.cta===false||a.kind==='product'?'':a.kind==='collection'||a.kind==='ingredient'?`<section class="page-form" data-shared="process" aria-labelledby="sf-h">${subscribeForm({source:route.path})}</section>`:`<section class="soft-cta" data-shared="process"><h2>${esc(a.ctaTitle||'¿Organizás un evento?')}</h2><p>${esc(a.ctaText||'Contanos la fecha, la zona y cuántas personas esperás. Te ayudamos a consultar catering en Gran Asunción.')}</p><div class="cta-row"><a class="btn btn-primary" href="${attr(a.form==='viandas'?'#formulario':briefHref(route,a))}">${esc(a.ctaLabel||'Pedí un presupuesto')}</a><a class="btn btn-ghost" href="${attr(wa(a.waMessage))}">Escribinos por WhatsApp</a></div></section>`;
  return `<main id="top" class="content-page article-page"><div class="wrap narrow">${breadcrumbs(route,routes)}
<header class="recipe-head"><p class="eyebrow">${esc(a.eyebrow||({cut:'Cortes de carne',vianda:'Viandas',ingredient:'Recetas por ingrediente',collection:'Recetas de temporada',product:'Mercado'}[a.kind]||'Guía'))}</p><h1>${esc(a.h1)}</h1>${a.intro.map(p=>`<p class="lead">${esc(p)}</p>`).join('')}${facts}</header>
${a.image?`<figure class="page-image">${picture(a.image,'(min-width:900px) 820px, 100vw',true)}<figcaption class="cap">Imagen ilustrativa</figcaption></figure>`:''}
${a.estimate?`<p class="estimate-note">${esc(a.estimate)}</p>`:''}
${a.kind==='ingredient'&&recipes.length?`<section class="art-sec" id="recetas">${cardGrid(recipes,routes,{heading:a.recipesTitle||a.label})}</section>`:''}
${products.length?`<section class="art-sec">${cardGrid(products,routes,{heading:'Qué podés pedir'})}</section>`:''}
${toc}
${a.tool?toolHtml(a.tool):''}
${(a.sections||[]).map(sectionHtml).join('')}
${form}
${faqHtml(a.faq,a.faqTitle||'Preguntas frecuentes')}
${sourceLine(a)}
${recipes.length&&a.kind!=='ingredient'?`<section class="art-sec">${cardGrid(recipes,routes,{heading:a.recipesTitle||'Recetas relacionadas'})}</section>`:''}
${related.length?`<section class="art-sec">${cardGrid(related,routes,{heading:'Seguí leyendo'})}</section>`:''}
${cta}
</div></main>`;
}
export default article;
/** Recipes whose ingredient names contain any of the page's match terms. */
export function matchRecipes(a,pages){const terms=(a.match||[]).map(t=>t.toLowerCase());return pages.filter(p=>p.kind==='recipe'&&p.published!==false&&p.ingredients?.some(g=>g.items.some(i=>terms.some(t=>i.item.toLowerCase().includes(t))))).sort((x,y)=>(x.order??999)-(y.order??999)||x.label.localeCompare(y.label,'es'))}

/** Calculators. Every number shown is an editorial estimate carried in the page module (tool.data). */
export function toolHtml(tool){
  const data=`<script type="application/json" data-tool-data>${jsonLd(tool.data)}</script>`;
  if(tool.type==='bocaditos')return `<section class="tool card-form" data-tool="bocaditos" id="calculadora" aria-labelledby="tool-h"><h2 id="tool-h">${esc(tool.title)}</h2><p class="hint">${esc(tool.hint)}</p><div class="fields">
<div class="field"><label class="lbl" for="tb-personas">Invitados</label><input id="tb-personas" type="number" inputmode="numeric" min="1" max="2000" value="50"></div>
<div class="field"><label class="lbl" for="tb-horas">Duración</label><select id="tb-horas"><option value="corta">Hasta 2 horas</option><option value="media" selected>De 2 a 4 horas</option><option value="larga">Más de 4 horas</option></select></div>
<div class="field"><label class="lbl" for="tb-rol">Los bocaditos son…</label><select id="tb-rol"><option value="previa">La previa de una comida</option><option value="principal" selected>La comida principal</option><option value="merienda">Una merienda o coffee break</option></select></div>
<div class="field"><label class="lbl" for="tb-ninos">¿Es un cumpleaños infantil?</label><select id="tb-ninos"><option value="no">No</option><option value="si">Sí, la mayoría son chicos</option></select></div>
</div><div class="tool-out" role="status" aria-live="polite"></div>${data}</section>`;
  if(tool.type==='asado')return `<section class="tool card-form" data-tool="asado" id="calculadora" aria-labelledby="tool-h"><h2 id="tool-h">${esc(tool.title)}</h2><p class="hint">${esc(tool.hint)}</p><div class="fields">
<div class="field"><label class="lbl" for="ta-adultos">Adultos</label><input id="ta-adultos" type="number" inputmode="numeric" min="0" max="1000" value="10"></div>
<div class="field"><label class="lbl" for="ta-ninos">Chicos</label><input id="ta-ninos" type="number" inputmode="numeric" min="0" max="1000" value="0"></div>
<div class="field"><label class="lbl" for="ta-apetito">Apetito del grupo</label><select id="ta-apetito"><option value="liviano">Liviano, con muchas guarniciones</option><option value="normal" selected>Normal</option><option value="fuerte">De buen diente</option></select></div>
<div class="field"><label class="lbl" for="ta-hueso">Cortes</label><select id="ta-hueso"><option value="mixto" selected>Mixto, con y sin hueso</option><option value="sin">Mayormente sin hueso</option><option value="con">Mayormente con hueso (costilla)</option></select></div>
</div><div class="tool-out" role="status" aria-live="polite"></div>${data}</section>`;
  if(tool.type==='comida')return `<section class="tool card-form" data-tool="comida" id="calculadora" aria-labelledby="tool-h"><h2 id="tool-h">${esc(tool.title)}</h2><p class="hint">${esc(tool.hint)}</p><div class="fields">
<div class="field"><label class="lbl" for="tc-personas">Personas</label><input id="tc-personas" type="number" inputmode="numeric" min="1" max="2000" value="30"></div>
<div class="field"><label class="lbl" for="tc-formato">Formato</label><select id="tc-formato">${Object.entries(tool.data.formats).map(([k,f],i)=>`<option value="${attr(k)}"${i===0?' selected':''}>${esc(f.label)}</option>`).join('')}</select></div>
</div><div class="tool-out" role="status" aria-live="polite"></div>${data}</section>`;
  throw Error('Unknown tool '+tool.type);
}

function viandasForm({config,wa,source,waMessage}){
  const zones=[...config.coverage,'Otra zona'];
  return `<form class="card-form lead-form" data-lead-form data-single action="/php/lead-forward.php" method="post" novalidate>
<div class="lf-head"><h2 id="vf-h">Consultá por viandas</h2><p class="hint">Te avisamos cuando tengamos una opción disponible para tu zona.</p></div>
<input type="hidden" name="form" value="viandas"><input type="hidden" name="idem"><input type="hidden" name="source" value="${attr(source)}"><div class="hp" aria-hidden="true"><label>No completar <input name="website" tabindex="-1" autocomplete="off"></label></div>
<div class="fields">
<div class="field"><label class="lbl" for="vf-plan">Qué buscás</label><select id="vf-plan" name="plan"><option>Viandas saludables</option><option>Almuerzo para la oficina</option><option>Viandas para toda la semana</option><option>Todavía no sé</option></select></div>
<div class="field"><label class="lbl" for="vf-frecuencia">Frecuencia</label><select id="vf-frecuencia" name="frecuencia"><option>De lunes a viernes</option><option>Algunos días de la semana</option><option>Solo para probar</option></select></div>
<div class="field"><label class="lbl" for="vf-zona">Zona de entrega</label><select id="vf-zona" name="zona" required><option value="">Elegí tu zona</option>${zones.map(z=>`<option>${esc(z)}</option>`).join('')}</select></div>
<div class="field"><label class="lbl" for="vf-nombre">Nombre</label><input id="vf-nombre" name="nombre" type="text" autocomplete="name" maxlength="120" required></div>
<div class="field"><label class="lbl" for="vf-wa">WhatsApp</label><input id="vf-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
<div class="field"><label class="lbl" for="vf-mensaje">Preferencias <span class="opt">(opcional)</span></label><input id="vf-mensaje" name="mensaje" type="text" maxlength="300" placeholder="Por ejemplo: sin carne roja"></div>
</div>
<label class="check consent" for="vf-consent"><input id="vf-consent" name="consent" type="checkbox" value="si" required> <span>Acepto que comida.com.py use estos datos para responder mi consulta sobre viandas. <a href="/privacidad/">Privacidad</a>.</span></label>
<div class="form-foot"><button class="btn btn-primary" type="submit">Enviar consulta</button><a class="lf-wa" href="${attr(wa(waMessage))}">Prefiero escribir por WhatsApp</a></div>
<div class="form-status" role="status" aria-live="polite" hidden></div>
</form>`;
}
