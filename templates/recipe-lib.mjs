import {esc,attr} from '../engine/escape.mjs';
// Shared helpers for recipe, guide and cut pages.
const UNITS={g:['g','g'],kg:['kg','kg'],ml:['ml','ml'],l:['litro','litros'],u:['',''],cda:['cucharada','cucharadas'],cdita:['cucharadita','cucharaditas'],taza:['taza','tazas'],pizca:['pizca','pizcas'],diente:['diente','dientes'],atado:['atado','atados'],lata:['lata','latas'],paquete:['paquete','paquetes'],rama:['rama','ramas'],hoja:['hoja','hojas'],feta:['feta','fetas'],sobre:['sobre','sobres']};
export const UNIT_KEYS=Object.keys(UNITS);
const FRACTIONS=[[0.25,'¼'],[0.5,'½'],[0.75,'¾'],[1/3,'⅓'],[2/3,'⅔']];
export function fmtNumber(q,u){
  if(u==='g'||u==='ml'){if(q>=1000&&u==='g')return [fmt(q/1000),'kg'];if(q>=1000&&u==='ml')return [fmt(q/1000),'l'];const step=q>=100?10:q>=20?5:1;return [String(Math.round(q/step)*step),u]}
  return [fmt(q),u];
}
function fmt(q){const whole=Math.floor(q),rest=q-whole;if(rest<0.07)return String(whole||1);const f=FRACTIONS.find(([v])=>Math.abs(rest-v)<0.07);if(f)return (whole?whole+' ':'')+f[1];return String(Math.round(q*10)/10).replace('.',',')}
export function qtyText(ing,factor=1){
  if(ing.q==null)return '';
  const [n,u]=fmtNumber(ing.q*(ing.scale===false?1:factor),ing.u||'u');const unit=UNITS[u]||UNITS.u;const plural=!/^1$|^½|^¼|^¾|^⅓|^⅔/.test(n);
  return (n+' '+(plural?unit[1]:unit[0])).trim();
}
/** "500 g de harina de maíz", "2 cebollas", "1 cebolla" (ing.one = singular item for unit-less counts). */
export function ingredientLine(ing,factor=1){
  const q=qtyText(ing,factor),unitless=!ing.u||ing.u==='u',single=unitless&&/^1$|^½|^¼|^¾|^⅓/.test(q);
  const item=single&&ing.one?ing.one:ing.item;
  return `${q?`<span class="q">${esc(q)}</span> `:''}${q&&!unitless?'de ':''}<span class="i"${ing.one?` data-one="${attr(ing.one)}" data-many="${attr(ing.item)}"`:''}>${esc(item)}</span>${ing.note?` <span class="n">${esc(ing.note)}</span>`:''}`;
}
export function minutes(m){if(!m)return '';const h=Math.floor(m/60),r=m%60;return h?`${h} h${r?' '+r+' min':''}`:`${r} min`}
export function iso(m){const h=Math.floor(m/60),r=m%60;return 'PT'+(h?h+'H':'')+(r?r+'M':'')||'PT0M'}
export function sectionHtml(s){
  return `<section class="art-sec"${s.id?` id="${attr(s.id)}"`:''}><h2>${esc(s.title)}</h2>${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${s.items?`<ul class="ticks">${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:''}${s.steps?`<ol class="numbered">${s.steps.map(i=>`<li>${esc(i)}</li>`).join('')}</ol>`:''}${s.table?tableHtml(s.table):''}${s.cards?`<div class="content-grid">${s.cards.map(([h,p])=>`<article class="content-card"><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join('')}</div>`:''}${s.callout?`<p class="callout">${esc(s.callout)}</p>`:''}${(s.after||[]).map(p=>`<p>${esc(p)}</p>`).join('')}</section>`;
}
export function tableHtml(t){return `<div class="table-wrap"><table>${t.caption?`<caption>${esc(t.caption)}</caption>`:''}<thead><tr>${t.head.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map((c,i)=>i===0?`<th scope="row">${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${t.note?`<p class="table-note">${esc(t.note)}</p>`:''}`}
export function faqHtml(faq,title){return faq?.length?`<section class="faq" id="preguntas"><h2>${esc(title)}</h2>${faq.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</section>`:''}
const MONTHS=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
export function longDate(isoDate){const [y,m,d]=String(isoDate).split('-').map(Number);return `${d} de ${MONTHS[m-1]} de ${y}`}
export function sourceLine(item){return `<div class="source-line">Fuente: ${esc(item.source)} · Revisado: <time datetime="${attr(item.verifiedAt)}">${esc(longDate(item.verifiedAt))}</time></div>`}
/** Card grid linking to other published pages (recipes, guides, cuts). */
export function cardGrid(items,routes,{heading,headingTag='h2'}={}){
  const cards=items.map(it=>{const r=routes.find(r=>r.id===it.id&&r.published&&r.indexable);return r?`<a class="rcard tone-${tone(it.id)}" href="${attr(r.path)}"><span class="rcard-kind">${esc(kindLabel(it))}</span><strong>${esc(it.label||r.label)}</strong>${it.cardText?`<span class="rcard-text">${esc(it.cardText)}</span>`:''}${it.times?`<span class="rcard-meta">${esc(minutes((it.times.prep||0)+(it.times.cook||0)))}</span>`:''}</a>`:''}).join('');
  return cards?`${heading?`<${headingTag}>${esc(heading)}</${headingTag}>`:''}<div class="rcards">${cards}</div>`:'';
}
function tone(id){let h=0;for(const c of id)h=(h*31+c.charCodeAt(0))>>>0;return h%4}
function kindLabel(it){return it.kind==='recipe'?(it.course||'Receta'):it.kind==='cut'?'Corte':it.kind==='guide'?'Guía':it.kind==='vianda'?'Viandas':'Catering'}
