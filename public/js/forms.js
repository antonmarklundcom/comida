/* comida.com.py: lead forms, estimator, analytics hooks and URL notices.
   No personal data (phone, name, brief text) ever goes into analytics events or URLs we build,
   except the wa.me fallback the visitor opens and reviews themselves. */
(function(){
  var WA='595992279599';
  function track(name,params){try{if(typeof window.gtag==='function')window.gtag('event',name,params||{});(window.dataLayer=window.dataLayer||[]).push({event:name})}catch(e){}}
  window.comidaTrack=track;
  var local=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  // First-touch attribution kept for the session only; read by the form's hidden inputs.
  var ATTR=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'];
  try{var qs=new URLSearchParams(location.search),stored=JSON.parse(sessionStorage.getItem('comida-attr')||'{}'),changed=false;ATTR.forEach(function(k){if(qs.get(k)&&!stored[k]){stored[k]=qs.get(k).slice(0,200);changed=true}});if(changed)sessionStorage.setItem('comida-attr',JSON.stringify(stored))}catch(e){stored={}}

  // WhatsApp clicks are tracked but are never counted as leads.
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="https://wa.me/"]');if(a)track('wa_click',{page:location.pathname})});

  // Notices that only make sense after a confirmed server redirect (e.g. /gracias/?estado=recibida).
  document.querySelectorAll('[data-show-when]').forEach(function(el){var p=el.getAttribute('data-show-when').split('=');if(new URLSearchParams(location.search).get(p[0])===p[1])el.hidden=false});

  function brief(form){
    var d=new FormData(form),lines=[form.elements.form.value==='proveedor'?'Hola, quiero presentar mi servicio en comida.com.py.':'Hola, quiero pedir un presupuesto desde comida.com.py.'];
    var labels={ocasion:'Ocasión',fecha:'Fecha',zona:'Zona',personas:'Personas',presupuesto:'Presupuesto orientativo',nombre:'Nombre',empresa:'Empresa',negocio:'Negocio',capacidad:'Capacidad',mensaje:'Mensaje',plan:'Plan',frecuencia:'Frecuencia'};
    Object.keys(labels).forEach(function(k){var v=d.get(k);if(v)lines.push(labels[k]+': '+String(v).slice(0,300))});
    if(d.get('flexible'))lines.push('Fecha flexible');
    ['formatos[]','zonas[]'].forEach(function(k){var v=d.getAll(k);if(v.length)lines.push((k==='zonas[]'?'Zonas':'Formatos')+': '+v.join(', '))});
    return 'https://wa.me/'+WA+'?text='+encodeURIComponent(lines.join('\n'));
  }
  function showStatus(form,html,kind){var s=form.querySelector('.form-status');s.hidden=false;s.className='form-status '+(kind||'');s.innerHTML=html;s.scrollIntoView({block:'nearest',behavior:'smooth'});}
  function fallback(form,why){
    var link=brief(form);
    showStatus(form,'<p><strong>'+(why||'No pudimos registrar tu solicitud desde el sitio.')+'</strong> Tus datos no se perdieron: abrí WhatsApp, revisá el mensaje ya preparado y envialo.</p><p><a class="btn btn-primary" href="'+link+'">Enviar por WhatsApp</a></p>','warn');
  }
  function validStep(scope){var ok=true;scope.querySelectorAll('input,select,textarea').forEach(function(el){if(ok&&!el.checkValidity()){el.reportValidity();ok=false}});return ok}
  function normalizePhone(v){var d=String(v).replace(/\D/g,'');if(d.indexOf('595')===0)d=d.slice(3);if(d.charAt(0)==='0')d=d.slice(1);return /^9\d{8}$/.test(d)}

  document.querySelectorAll('[data-lead-form]').forEach(function(form){
    var started=false;
    // One idempotency key per filled-in form: retries and double clicks reuse it; a new visit gets a new one.
    if(form.elements.idem&&!form.elements.idem.value){var rnd=window.crypto&&crypto.randomUUID?crypto.randomUUID():(Date.now().toString(36)+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2));form.elements.idem.value=rnd.replace(/[^A-Za-z0-9-]/g,'').slice(0,64)}
    form.addEventListener('input',function(){if(!started){started=true;track('form_start',{form:form.elements.form.value})}},{once:false});
    // Prefill from ?ocasion=... and from session attribution.
    var params=new URLSearchParams(location.search),occ=params.get('ocasion');
    if(occ)form.querySelectorAll('[name="ocasion"]').forEach(function(r){if(r.value===occ)r.checked=true});
    ATTR.forEach(function(k){if(form.elements[k]&&stored&&stored[k])form.elements[k].value=stored[k]});
    var empresa=form.querySelector('[data-empresa]');
    function syncEmpresa(){if(!empresa)return;var c=form.querySelector('[name="ocasion"]:checked');empresa.hidden=!(c&&/empresa/.test(c.value))}
    form.addEventListener('change',syncEmpresa);syncEmpresa();
    var steps=form.querySelectorAll('.lf-step'),label=form.querySelector('[data-step-label]');
    function go(n){steps.forEach(function(s){s.hidden=+s.getAttribute('data-step')!==n});if(label)label.textContent='Paso '+n+' de 2';var first=steps[n-1]&&steps[n-1].querySelector('input:not([type=hidden]),select');if(first&&n===2)first.focus()}
    if(steps.length===2&&!form.hasAttribute('data-single')){form.classList.add('is-stepped');go(1)}
    var next=form.querySelector('[data-next]'),back=form.querySelector('[data-back]');
    if(next)next.addEventListener('click',function(){if(validStep(steps[0]))go(2)});
    if(back)back.addEventListener('click',function(){go(1)});
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!validStep(form))return;
      var wa=form.elements.whatsapp;
      if(wa&&!normalizePhone(wa.value)){wa.setCustomValidity('Ingresá un celular paraguayo, por ejemplo 0981 123 456.');wa.reportValidity();wa.addEventListener('input',function(){wa.setCustomValidity('')},{once:true});return}
      var btn=form.querySelector('[type=submit]');btn.disabled=true;btn.textContent='Enviando…';
      track('form_submit',{form:form.elements.form.value});
      var body=new FormData(form);
      var request=local&&window.comidaMockSubmit?window.comidaMockSubmit(body):fetch(form.action,{method:'POST',body:body,headers:{Accept:'application/json'},credentials:'same-origin'}).then(function(r){return r.json().catch(function(){return {ok:false}})});
      var timer=new Promise(function(res){setTimeout(function(){res({ok:false,timeout:true})},15000)});
      Promise.race([request,timer]).then(function(res){
        if(res&&res.ok){try{sessionStorage.setItem('comida-lead','1')}catch(e){}location.assign(res.redirect||'/gracias/?estado=recibida');return}
        btn.disabled=false;btn.textContent='Reintentar';
        fallback(form,res&&res.error==='rate'?'Recibimos varios envíos seguidos desde tu conexión.':res&&res.timeout?'El envío está tardando más de lo normal.':null);
      }).catch(function(){btn.disabled=false;btn.textContent='Reintentar';fallback(form)});
    });
  });
  if(local&&document.querySelector('[data-lead-form]')){var s=document.createElement('script');s.src='/js/form-mock.js';document.head.appendChild(s)}

  // Home quick form: copy its answers into the full brief form on the same page.
  document.querySelectorAll('.quick form').forEach(function(quick){
    quick.addEventListener('submit',function(e){
      e.preventDefault();var target=document.querySelector('[data-lead-form]');if(!target)return;var d=new FormData(quick);
      ['fecha','zona','personas'].forEach(function(k){if(target.elements[k]&&d.get(k))target.elements[k].value=d.get(k)});
      if(target.elements.flexible)target.elements.flexible.checked=d.has('flexible');
      var o=d.get('ocasion');target.querySelectorAll('[name="ocasion"]').forEach(function(r){r.checked=r.value===o});
      target.dispatchEvent(new Event('change'));
      target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
      var f=target.querySelector('input:not([type=hidden]):not([type=radio])');if(f)f.focus({preventScroll:true});
    });
  });

  // /precios/ estimator: only published prices produce a number; otherwise a personalised quote.
  document.querySelectorAll('[data-estimator]').forEach(function(form){
    var data=[];try{data=JSON.parse(document.getElementById('estimator-data').textContent)}catch(e){}
    form.addEventListener('submit',function(e){
      e.preventDefault();var id=form.elements.formato.value,n=Math.max(1,Math.min(2000,parseInt(form.elements.personas.value,10)||0)),p=data.filter(function(x){return x.id===id})[0],out=form.querySelector('.est-out');
      track('calc_use',{calc:'precios',formato:id});out.hidden=false;
      if(!p||!p.unitPrice){out.innerHTML='<p><strong>Cotización personalizada.</strong> Todavía no publicamos una referencia para este formato. Contanos la fecha, la zona y la cantidad de personas y consultamos una propuesta con el alcance claro.</p><p><a class="btn btn-primary" href="/presupuesto/">Pedí tu presupuesto</a></p>';return}
      var total=Math.max(p.minCharge||0,n*p.unitPrice)+(p.transport||0);
      out.innerHTML='<p><strong>Referencia orientativa: '+total.toLocaleString('es-PY')+' Gs.</strong> Unidad: '+p.unit+'. Fuente: '+p.source+' ('+p.verifiedAt+').</p>';
    });
  });
})();
