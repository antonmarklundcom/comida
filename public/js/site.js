
(function(){
  // Fraunces is self-hosted (public/css/fonts.css); no third-party font request.
  // Catering dropdown: click to toggle, Escape or outside click to close
  var btn=document.querySelector('.nav-btn'), sub=document.getElementById('sub-catering');
  if(btn&&sub){
    btn.addEventListener('click',function(){btn.setAttribute('aria-expanded',btn.getAttribute('aria-expanded')!=='true')});
    document.addEventListener('click',function(e){if(!e.target.closest('.has-sub'))btn.setAttribute('aria-expanded','false')});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&btn.getAttribute('aria-expanded')==='true'){btn.setAttribute('aria-expanded','false');btn.focus()}});
  }
  // Mobile drawer closes after following an in-page link
  document.querySelectorAll('.drawer a').forEach(function(a){a.addEventListener('click',function(){a.closest('details').open=false})});

  // Hero carousel: native scroll-snap (swipe works without JS), buttons, dots, gentle autoplay
  var track=document.getElementById('slides'); if(!track) return;
  var slides=track.children, dots=document.querySelectorAll('.dots button'), cur=0, timer=null;
  var motion=window.matchMedia('(prefers-reduced-motion: reduce)'), reduce=motion.matches; motion.addEventListener('change',function(e){reduce=e.matches;reduce?stop():start()});
  function go(i){cur=(i+slides.length)%slides.length;track.scrollTo({left:cur*track.clientWidth,behavior:reduce?'auto':'smooth'})}
  function sync(){var i=Math.round(track.scrollLeft/track.clientWidth);if(i!==cur)cur=i;dots.forEach(function(d,k){d.setAttribute('aria-current',k===cur)})}
  track.addEventListener('scroll',function(){window.requestAnimationFrame(sync)},{passive:true});
  document.querySelectorAll('.car-ctrl button').forEach(function(b){b.addEventListener('click',function(){stop();go(cur+ +b.dataset.dir)})});
  dots.forEach(function(d,k){d.addEventListener('click',function(){stop();go(k)})});
  track.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){stop();go(cur+1)}if(e.key==='ArrowLeft'){stop();go(cur-1)}});
  function start(){if(!reduce&&!timer&&!document.hidden)timer=setInterval(function(){go(cur+1)},6000)}
  function stop(){clearInterval(timer);timer=null}
  var media=track.parentNode;
  media.addEventListener('mouseenter',stop);media.addEventListener('mouseleave',start);
  media.addEventListener('focusin',stop);track.addEventListener('touchstart',stop,{passive:true});
  document.addEventListener('visibilitychange',function(){document.hidden?stop():start()});
  window.addEventListener('resize',function(){track.scrollLeft=cur*track.clientWidth});
  start();
})();

// P1a: prepare a user-reviewed WhatsApp message; no CRM submission.
document.querySelectorAll('[data-whatsapp-form]').forEach(function(form){form.addEventListener('submit',function(e){e.preventDefault();if(!form.reportValidity())return;var data=new FormData(form), parts=['Hola, ¿me ayudás a organizar mi evento?'];['c-ocasion','fecha','zona','personas','nombre'].forEach(function(k){if(data.get(k))parts.push(k.replace('c-','')+': '+data.get(k))});if(data.has('flexible'))parts.push('Fecha flexible');window.location.assign('https://wa.me/595992279599?text='+encodeURIComponent(parts.join('\n')))});});
document.querySelectorAll('.quick form').forEach(function(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var data=new FormData(form), contact=document.querySelector('[data-whatsapp-form]');
    if(!contact)return;
    ['fecha','zona','personas'].forEach(function(k){if(contact.elements[k]&&data.get(k))contact.elements[k].value=data.get(k)});
    contact.elements.flexible.checked=data.has('flexible');
    var occasion=data.get('ocasion');
    contact.querySelectorAll('[name="c-ocasion"]').forEach(function(input){input.checked=input.value===occasion});
    document.getElementById('contacto').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    contact.querySelector('input').focus({preventScroll:true});
  });
});
document.addEventListener('keydown',function(e){var drawer=document.querySelector('.mnav[open]');if(e.key==='Escape'&&drawer){drawer.open=false;drawer.querySelector('summary').focus()}});

// Offline recipes (installable app): register the service worker on HTTPS or localhost.
if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){})});

// Share (idea 3): the WhatsApp link always works; the native share sheet appears only where supported.
document.querySelectorAll('[data-share]').forEach(function(b){if(!navigator.share)return;b.hidden=false;b.addEventListener('click',function(){navigator.share({title:b.getAttribute('data-title'),url:b.getAttribute('data-url')}).then(function(){window.comidaTrack&&window.comidaTrack('share',{method:'native'})}).catch(function(){})})});
document.querySelectorAll('[data-share-wa]').forEach(function(a){a.addEventListener('click',function(){window.comidaTrack&&window.comidaTrack('share',{method:'whatsapp'})})});

// Site search (idea 5): the header button opens a dialog; /data/search.json loads on first open.
// Without JS the button is a plain link to /recetas/, where the recipe search lives.
(function(){
  var btn=document.querySelector('[data-search-open]');if(!btn||typeof HTMLDialogElement!=='function')return;
  var dlg,input,list,index=null,loading=null;
  function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function load(){if(!loading)loading=fetch('/data/search.json').then(function(r){return r.json()}).then(function(d){index=d.map(function(x){return {x:x,t:norm(x.t),all:norm(x.t+' '+x.w+' '+x.s+' '+x.k)}});run()}).catch(function(){list.innerHTML='<li class="search-empty">No se pudo cargar el buscador. Probá de nuevo.</li>'});return loading}
  function run(){
    if(!index)return;var q=norm(input.value.trim());
    if(!q){list.innerHTML='<li class="search-empty">Escribí un plato, un corte o un ingrediente.</li>';return}
    var terms=q.split(/\s+/).filter(Boolean);
    var hits=index.map(function(e){var score=0;for(var i=0;i<terms.length;i++){var t=terms[i];if(e.all.indexOf(t)<0)return null;score+=e.t.indexOf(t)>-1?5:1}if(e.t.indexOf(q)===0)score+=10;else if(e.t.indexOf(q)>-1)score+=4;return {e:e,score:score}}).filter(Boolean).sort(function(a,b){return b.score-a.score||a.e.x.t.length-b.e.x.t.length}).slice(0,12);
    list.innerHTML=hits.length?hits.map(function(h){var x=h.e.x;return '<li><a href="'+esc(x.p)+'"><span class="search-kind">'+esc(x.k)+'</span><strong>'+esc(x.t)+'</strong><span class="search-text">'+esc(x.s)+'</span></a></li>'}).join(''):'<li class="search-empty">Sin resultados para “'+esc(input.value.trim())+'”. Probá con otra palabra.</li>';
  }
  function build(){
    dlg=document.createElement('dialog');dlg.className='search-dialog';dlg.setAttribute('aria-label','Buscar en comida.com.py');
    dlg.innerHTML='<form method="dialog" class="search-bar" role="search"><label class="sr-only" for="site-q">Buscar</label><input id="site-q" type="search" placeholder="Buscá: chipa, vacío, queso Paraguay…" autocomplete="off" enterkeyhint="search"><button type="submit" class="linkish" value="close">Cerrar</button></form><ul class="search-results" aria-live="polite"></ul>';
    document.body.appendChild(dlg);input=dlg.querySelector('input');list=dlg.querySelector('ul');
    input.addEventListener('input',run);
    input.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();var a=list.querySelector('a');if(a){window.comidaTrack&&window.comidaTrack('site_search',{q:input.value.trim()});location.assign(a.getAttribute('href'))}}});
    list.addEventListener('click',function(e){if(e.target.closest('a'))window.comidaTrack&&window.comidaTrack('site_search',{q:input.value.trim()})});
    dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
  }
  btn.addEventListener('click',function(e){e.preventDefault();if(!dlg)build();dlg.showModal();input.focus();load();run()});
})();

// Seasonal block on the home page (idea 10): pick the season collections that fit today's date.
(function(){
  var box=document.querySelector('[data-season]');if(!box)return;
  var now=new Date(),y=now.getFullYear(),day=864e5;
  function easter(Y){var a=Y%19,b=Math.floor(Y/100),c=Y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(Y,mo-1,da)}
  function within(from,to){return now>=from&&now<=new Date(to.getTime()+day-1)}
  var e=easter(y),pick=[],title='Ideas para esta semana';
  if(within(new Date(e.getTime()-35*day),e)){pick=['semana-santa'];title='Se viene Semana Santa'}
  else if(within(new Date(y,4,15),new Date(y,5,30))){pick=['san-juan'];title='Llegan las fiestas de San Juan'}
  else if(within(new Date(y,10,15),new Date(y,11,25))){pick=['navidad','fin-de-ano'];title='Se vienen las fiestas'}
  else if(within(new Date(y,11,26),new Date(y,11,31))){pick=['fin-de-ano'];title='Para despedir el año'}
  var cards=[].slice.call(box.querySelectorAll('[data-season-card]'));
  var everyday=['cumpleanos','desayunos-saludables','meriendas-saludables','cenas-saludables'];
  while(pick.length<3){var next=everyday[(now.getMonth()+pick.length)%everyday.length];if(pick.indexOf(next)<0)pick.push(next);else everyday.splice(everyday.indexOf(next),1)}
  cards.forEach(function(c){c.hidden=pick.indexOf(c.getAttribute('data-season-card'))<0});
  var grid=box.querySelector('.rcards');pick.forEach(function(id){var c=box.querySelector('[data-season-card="'+id+'"]');if(c)grid.appendChild(c)});
  box.querySelector('h2').textContent=title;box.hidden=false;
})();
