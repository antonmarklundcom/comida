
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
