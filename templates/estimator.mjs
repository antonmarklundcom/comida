import {esc,attr,jsonLd} from '../engine/escape.mjs';
// /precios/ estimator (plan/04 §4). Only published price entries ever reach the page;
// while none is published every format answers "cotización personalizada".
export function estimator({prices=[]}){
 const published=prices.filter(p=>p.published);
 return `<section class="estimator" id="estimador" aria-labelledby="est-h"><h2 id="est-h">Estimá el alcance de tu catering</h2>
<p class="intro">Elegí el formato y la cantidad de personas. Mostramos un valor orientativo solo cuando tenemos referencias documentadas para ese formato; si no, te ayudamos con una cotización personalizada.</p>
<form class="card-form est-form" data-estimator novalidate><div class="fields">
<div class="field"><label class="lbl" for="est-formato">Formato</label><select id="est-formato" name="formato">${prices.map(p=>`<option value="${attr(p.id)}">${esc(p.label)}</option>`).join('')}</select></div>
<div class="field"><label class="lbl" for="est-personas">Cantidad de personas</label><input id="est-personas" name="personas" type="number" inputmode="numeric" min="1" max="2000" value="50"></div>
<div class="field"><button class="btn btn-primary" type="submit">Ver resultado</button></div>
</div><div class="est-out" role="status" aria-live="polite" hidden></div></form>
<script type="application/json" id="estimator-data">${jsonLd(published)}</script></section>`;
}
