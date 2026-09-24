import {esc,attr} from '../engine/escape.mjs';
import {breadcrumbs} from './content.mjs';
import {tableHtml,longDate,faqHtml} from './recipe-lib.mjs';
import data from '../sites/comida/abasto-precios.mjs';
// /mercado-de-abasto/precios/: official reference prices with source and date on the page.
export default function priceTable({page:h,route,routes}){
  return `<main id="top" class="content-page article-page"><div class="wrap narrow">${breadcrumbs(route,routes)}<h1>${esc(h.h1)}</h1>${h.intro.map(p=>`<p class="lead">${esc(p)}</p>`).join('')}
<p class="estimate-note">Fuente: ${esc(data.source)}. Semana del <time datetime="${attr(data.verifiedAt)}">${esc(longDate(data.verifiedAt))}</time>. Son precios de referencia mayoristas: en cada puesto pueden variar.</p>
${tableHtml({caption:'Precios de referencia por producto',head:['Producto','Unidad','Mínimo','Máximo'],rows:data.rows.map(r=>[r.producto,r.unidad,r.minimo,r.maximo])})}
${faqHtml(h.faq,'Preguntas frecuentes')}</div></main>`;
}
