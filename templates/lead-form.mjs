import {esc,attr} from '../engine/escape.mjs';
// Shared lead forms. Both post to the PHP forwarder; without JavaScript the
// handler redirects to /gracias/ or to WhatsApp, so the form never dead-ends.
const ENDPOINT='/php/lead-forward.php';
const hidden=(form,source)=>`<input type="hidden" name="form" value="${attr(form)}"><input type="hidden" name="idem"><input type="hidden" name="source" value="${attr(source)}"><input type="hidden" name="utm_source"><input type="hidden" name="utm_medium"><input type="hidden" name="utm_campaign"><input type="hidden" name="utm_term"><input type="hidden" name="utm_content"><input type="hidden" name="gclid"><input type="hidden" name="fbclid"><div class="hp" aria-hidden="true"><label>No completar <input name="website" tabindex="-1" autocomplete="off"></label></div>`;
const status=`<div class="form-status" role="status" aria-live="polite" hidden></div>`;
const consent=(id,text)=>`<label class="check consent" for="${id}"><input id="${id}" name="consent" type="checkbox" value="si" required> <span>${text} <a href="/privacidad/">Privacidad</a>.</span></label>`;

export function occasionOptions(routes,extra=[]){
 return [...routes.filter(r=>r.kind==='occasion'&&r.published).map(r=>[r.id.replace(/^occ-/,''),r.label]),...extra,['otro','Otro']];
}

/** Two-screen client brief (plan/03 §2). `prefix` keeps DOM ids unique per page. */
export function leadForm({routes,config,wa,source,prefix='lf',heading='Contanos tu evento',hint='Dos pasos cortos. Gratis y sin compromiso.',waMessage,extraOccasions=[]}){
 const p=prefix,occ=occasionOptions(routes,extraOccasions);
 const zones=[...config.coverage,'Otra zona'];
 return `<form class="card-form lead-form" data-lead-form action="${ENDPOINT}" method="post" novalidate>
<div class="lf-head"><h2 id="${p}-h">${esc(heading)}</h2><p class="hint">${esc(hint)}</p><p class="lf-progress" aria-hidden="true"><span data-step-label>Paso 1 de 2</span></p></div>
${hidden('cliente',source)}
<fieldset class="lf-step" data-step="1"><legend class="sr-only">Paso 1: tu evento</legend>
<fieldset><legend>Ocasión</legend><div class="chips">${occ.map(([v,l],i)=>`<label><input type="radio" name="ocasion" value="${attr(v)}"${i===0?' required':''}><span>${esc(l)}</span></label>`).join('')}</div></fieldset>
<div class="fields">
<div class="field"><label class="lbl" for="${p}-fecha">Fecha</label><input id="${p}-fecha" name="fecha" type="date"><label class="check" for="${p}-flex"><input id="${p}-flex" name="flexible" type="checkbox" value="si"> Fecha flexible o a definir</label></div>
<div class="field"><label class="lbl" for="${p}-zona">Zona</label><select id="${p}-zona" name="zona" required><option value="">Elegí tu zona</option>${zones.map(z=>`<option>${esc(z)}</option>`).join('')}</select></div>
<div class="field"><label class="lbl" for="${p}-personas">Cantidad de personas</label><input id="${p}-personas" name="personas" type="number" inputmode="numeric" min="1" max="2000" required placeholder="Ej.: 40"></div>
<div class="field"><label class="lbl" for="${p}-presupuesto">Presupuesto orientativo <span class="opt">(opcional)</span></label><input id="${p}-presupuesto" name="presupuesto" type="text" maxlength="80" placeholder="Todavía no sé"></div>
</div>
<div class="form-foot"><button class="btn btn-primary" type="button" data-next>Continuar</button><a class="lf-wa" href="${attr(wa(waMessage))}">Prefiero escribir por WhatsApp</a></div>
</fieldset>
<fieldset class="lf-step" data-step="2"><legend class="sr-only">Paso 2: tus datos de contacto</legend>
<div class="fields">
<div class="field"><label class="lbl" for="${p}-nombre">Nombre</label><input id="${p}-nombre" name="nombre" type="text" autocomplete="name" maxlength="120" required></div>
<div class="field"><label class="lbl" for="${p}-wa">WhatsApp</label><input id="${p}-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
<div class="field"><label class="lbl" for="${p}-email">Email <span class="opt">(opcional)</span></label><input id="${p}-email" name="email" type="email" autocomplete="email" maxlength="200"></div>
<div class="field" data-empresa hidden><label class="lbl" for="${p}-empresa">Empresa <span class="opt">(opcional)</span></label><input id="${p}-empresa" name="empresa" type="text" autocomplete="organization" maxlength="120"></div>
</div>
${consent(p+'-consent','Acepto que comida.com.py use estos datos para responder mi consulta y los comparta solo con los proveedores que yo autorice.')}
<div class="form-foot"><button class="btn btn-ghost" type="button" data-back>Atrás</button><button class="btn btn-primary" type="submit">Enviar solicitud</button></div>
<p class="note">Te respondemos por WhatsApp en nuestro horario de atención.</p>
</fieldset>
${status}
</form>`;
}

/** Supplier application for /proveedores/ (its own consent and CRM lead type). */
export function providerForm({config,wa,source,prefix='pf',waMessage}){
 const p=prefix,formats=['Bocaditos','Buffet','Menú servido','Coffee break','Asado','Viandas','Chef a domicilio'];
 return `<form class="card-form lead-form provider-form" data-lead-form data-single action="${ENDPOINT}" method="post" novalidate>
<div class="lf-head"><h2 id="${p}-h">Presentá tu servicio</h2><p class="hint">Revisamos cada presentación antes de conversar una colaboración.</p></div>
${hidden('proveedor',source)}
<div class="fields">
<div class="field"><label class="lbl" for="${p}-negocio">Nombre comercial</label><input id="${p}-negocio" name="negocio" type="text" maxlength="120" required autocomplete="organization"></div>
<div class="field"><label class="lbl" for="${p}-nombre">Persona de contacto</label><input id="${p}-nombre" name="nombre" type="text" maxlength="120" required autocomplete="name"></div>
<div class="field"><label class="lbl" for="${p}-wa">WhatsApp</label><input id="${p}-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
<div class="field"><label class="lbl" for="${p}-email">Email <span class="opt">(opcional)</span></label><input id="${p}-email" name="email" type="email" autocomplete="email" maxlength="200"></div>
</div>
<fieldset><legend>Formatos que ofrecés</legend><div class="chips">${formats.map(f=>`<label><input type="checkbox" name="formatos[]" value="${attr(f)}"><span>${esc(f)}</span></label>`).join('')}</div></fieldset>
<fieldset><legend>Zonas donde atendés</legend><div class="chips">${config.coverage.map(z=>`<label><input type="checkbox" name="zonas[]" value="${attr(z)}"><span>${esc(z)}</span></label>`).join('')}</div></fieldset>
<div class="fields">
<div class="field"><label class="lbl" for="${p}-capacidad">Personas por evento, como máximo</label><input id="${p}-capacidad" name="capacidad" type="number" inputmode="numeric" min="1" max="5000"></div>
<div class="field"><label class="lbl" for="${p}-mensaje">Contanos brevemente tu servicio <span class="opt">(opcional)</span></label><textarea id="${p}-mensaje" name="mensaje" rows="3" maxlength="1000"></textarea></div>
</div>
${consent(p+'-consent','Acepto que comida.com.py use estos datos para evaluar una posible colaboración.')}
<div class="form-foot"><button class="btn btn-primary" type="submit">Enviar presentación</button><a class="lf-wa" href="${attr(wa(waMessage))}">Prefiero escribir por WhatsApp</a></div>
${status}
</form>`;
}

/** Fresh-food order (form type "pedido"). No prices: the total is confirmed on WhatsApp. */
export function orderForm({mercado,wa,source,preselect=[],waMessage}){
 const p='of',zones=[...mercado.zones,'Otra zona (consultar)'];
 const product=it=>`<div class="order-item"><label class="check" for="${p}-${attr(it.id)}"><input id="${p}-${attr(it.id)}" type="checkbox" name="productos[]" value="${attr(it.id)}"${preselect.includes(it.id)?' checked':''}> <span><strong>${esc(it.label)}</strong>${it.note?` <span class="opt">${esc(it.note)}</span>`:''}${it.available?'':' <span class="tag">A consultar</span>'}</span></label></div>`;
 return `<form class="card-form lead-form order-form" data-lead-form data-single action="${ENDPOINT}" method="post" novalidate>
<div class="lf-head"><h2 id="${p}-h">${mercado.open?'Hacé tu pedido':'Anotate para el próximo reparto'}</h2><p class="hint">Cierre de pedidos: ${esc(mercado.cutoff)}. Entregas: ${esc(mercado.deliveryDays.join(' y ').toLowerCase())}. Te confirmamos el total por WhatsApp antes de comprar.</p></div>
${hidden('pedido',source)}
${Object.entries(mercado.groups).map(([g,title])=>{const its=mercado.products.filter(it=>it.group===g);return its.length?`<fieldset><legend>${esc(title)}</legend><div class="order-items">${its.map(product).join('')}</div></fieldset>`:''}).join('')}
<div class="fields">
<div class="field"><label class="lbl" for="${p}-zona">Zona de entrega</label><select id="${p}-zona" name="zona" required><option value="">Elegí tu zona</option>${zones.map(z=>`<option>${esc(z)}</option>`).join('')}</select></div>
<div class="field"><label class="lbl" for="${p}-dia">Día de entrega</label><select id="${p}-dia" name="dia" required>${mercado.deliveryDays.map(d=>`<option>${esc(d)}</option>`).join('')}</select></div>
<div class="field"><label class="lbl" for="${p}-barrio">Barrio o referencia</label><input id="${p}-barrio" name="barrio" type="text" maxlength="120" placeholder="Ej.: Villa Morra, cerca de…"></div>
<div class="field"><label class="lbl" for="${p}-nombre">Nombre</label><input id="${p}-nombre" name="nombre" type="text" autocomplete="name" maxlength="120" required></div>
<div class="field"><label class="lbl" for="${p}-wa">WhatsApp</label><input id="${p}-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
<div class="field full"><label class="lbl" for="${p}-nota">Algo más para tu pedido <span class="opt">(opcional)</span></label><textarea id="${p}-nota" name="nota" rows="4" maxlength="1500" placeholder="Ej.: sin cebolla; sumar 2 kg de mandioca"></textarea></div>
</div>
${consent(p+'-consent','Acepto que comida.com.py use estos datos para confirmar y entregar mi pedido.')}
<div class="form-foot"><button class="btn btn-primary" type="submit">${mercado.open?'Enviar pedido':'Anotarme'}</button><a class="lf-wa" href="${attr(wa(waMessage))}">Prefiero pedir por WhatsApp</a></div>
<p class="note">Pagás recién cuando confirmás por WhatsApp: ${esc(mercado.payment.join(' o ').toLowerCase())}.</p>
${status}
</form>`;
}

/** "Receta de la semana" WhatsApp list (form type "suscripcion"). */
export function subscribeForm({source,prefix='sf'}){
 const p=prefix;
 return `<form class="card-form lead-form subscribe-form" data-lead-form data-single action="${ENDPOINT}" method="post" novalidate>
<div class="lf-head"><h2 id="${p}-h">Una receta por semana, por WhatsApp</h2><p class="hint">Una receta paraguaya o casera cada semana, con cantidades por kilo. Te das de baja cuando quieras.</p></div>
${hidden('suscripcion',source)}
<div class="fields">
<div class="field"><label class="lbl" for="${p}-nombre">Nombre</label><input id="${p}-nombre" name="nombre" type="text" autocomplete="name" maxlength="120" required></div>
<div class="field"><label class="lbl" for="${p}-wa">WhatsApp</label><input id="${p}-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
</div>
${consent(p+'-consent','Acepto recibir una receta por semana por WhatsApp de comida.com.py.')}
<div class="form-foot"><button class="btn btn-primary" type="submit">Quiero las recetas</button></div>
${status}
</form>`;
}

/** Printable seasonal recetario in exchange for a WhatsApp contact (form type "recetario"). */
export function recetarioForm({slug,title,blurb,source}){
 const p='rf';
 return `<form class="card-form lead-form recetario-form" data-lead-form data-single action="${ENDPOINT}" method="post" novalidate>
<div class="lf-head"><h2 id="${p}-h">${esc(title)}</h2><p class="hint">${esc(blurb)} Dejanos tu WhatsApp y abrís la versión para imprimir o guardar en PDF.</p></div>
${hidden('recetario',source)}<input type="hidden" name="recetario" value="${attr(slug)}">
<div class="fields">
<div class="field"><label class="lbl" for="${p}-nombre">Nombre</label><input id="${p}-nombre" name="nombre" type="text" autocomplete="name" maxlength="120" required></div>
<div class="field"><label class="lbl" for="${p}-wa">WhatsApp</label><input id="${p}-wa" name="whatsapp" type="tel" inputmode="tel" autocomplete="tel" maxlength="30" required placeholder="0981 123 456"></div>
</div>
${consent(p+'-consent','Acepto que comida.com.py me escriba por WhatsApp con recetas y novedades.')}
<div class="form-foot"><button class="btn btn-primary" type="submit">Abrir el recetario</button></div>
${status}
</form>`;
}
