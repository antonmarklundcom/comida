/* comida.com.py: recipe and guide interactions. Everything works without it; this only adds comfort. */
(function(){
  var track=function(n,p){if(window.comidaTrack)window.comidaTrack(n,p)};
  var FR=[[0.25,'¼'],[0.5,'½'],[0.75,'¾'],[1/3,'⅓'],[2/3,'⅔']];
  var UNITS={g:['g','g'],kg:['kg','kg'],ml:['ml','ml'],l:['litro','litros'],u:['',''],cda:['cucharada','cucharadas'],cdita:['cucharadita','cucharaditas'],taza:['taza','tazas'],pizca:['pizca','pizcas'],diente:['diente','dientes'],atado:['atado','atados'],lata:['lata','latas'],paquete:['paquete','paquetes'],rama:['rama','ramas'],hoja:['hoja','hojas'],feta:['feta','fetas'],sobre:['sobre','sobres']};
  function fmt(q){var w=Math.floor(q),r=q-w;if(r<0.07)return String(w||1);for(var i=0;i<FR.length;i++)if(Math.abs(r-FR[i][0])<0.07)return (w?w+' ':'')+FR[i][1];return String(Math.round(q*10)/10).replace('.',',')}
  function num(q,u){if(u==='g'||u==='ml'){if(q>=1000)return [fmt(q/1000),u==='g'?'kg':'l'];var st=q>=100?10:q>=20?5:1;return [String(Math.round(q/st)*st),u]}return [fmt(q),u]}
  function qty(q,u){var r=num(q,u),unit=UNITS[r[1]]||UNITS.u,plural=!/^1$|^½|^¼|^¾|^⅓|^⅔/.test(r[0]);return (r[0]+' '+(plural?unit[1]:unit[0])).trim()}
  var key='comida:'+location.pathname;
  function load(){try{return JSON.parse(localStorage.getItem(key)||'{}')}catch(e){return {}}}
  function save(s){try{localStorage.setItem(key,JSON.stringify(s))}catch(e){}}

  // Scaler: porciones or kilos. ?kilos=2 or ?porciones=24 preselects a size.
  document.querySelectorAll('[data-scaler]').forEach(function(sc){
    var buttons=sc.querySelectorAll('[data-factor]');
    function apply(f,btn){
      buttons.forEach(function(b){b.setAttribute('aria-pressed',b===btn)});
      document.querySelectorAll('.ing[data-q]').forEach(function(el){
        var q=parseFloat(el.getAttribute('data-q'));if(isNaN(q))return;var fixed=el.hasAttribute('data-fixed'),u=el.getAttribute('data-u'),t=qty(q*(fixed?1:f),u),qs=el.querySelector('.q');if(qs)qs.textContent=t;
        var it=el.querySelector('.i[data-one]');if(it)it.textContent=(/^1$|^½|^¼|^¾|^⅓/.test(t)&&(u==='u'))?it.getAttribute('data-one'):it.getAttribute('data-many');
      });
      var s=load();s.factor=f;save(s);
    }
    buttons.forEach(function(b){b.addEventListener('click',function(){apply(parseFloat(b.getAttribute('data-factor')),b);track('recipe_scale',{factor:b.getAttribute('data-factor')})})});
    var p=new URLSearchParams(location.search),base=parseFloat(sc.getAttribute('data-base')),want=parseFloat(p.get('kilos')||p.get('porciones')),saved=load().factor,f=want?want/base:saved;
    if(f){buttons.forEach(function(b){if(Math.abs(parseFloat(b.getAttribute('data-factor'))-f)<0.001)apply(f,b)})}
  });

  // Checklists remember what you ticked on this device.
  var state=load();
  document.querySelectorAll('[data-save]').forEach(function(cb){var k=cb.getAttribute('data-save');cb.checked=Boolean(state[k]);cb.closest('li')&&cb.closest('li').classList.toggle('done',cb.checked);cb.addEventListener('change',function(){var s=load();s[k]=cb.checked;save(s);cb.closest('li').classList.toggle('done',cb.checked)})});
  document.querySelectorAll('[data-clear]').forEach(function(b){b.addEventListener('click',function(){var s=load(),f=s.factor;save({factor:f});document.querySelectorAll('[data-save]').forEach(function(cb){cb.checked=false;cb.closest('li').classList.remove('done')})})});

  // Step timers.
  document.querySelectorAll('.timer[data-min]').forEach(function(b){
    var label=b.textContent,t=null;
    b.addEventListener('click',function(){
      if(t){clearInterval(t);t=null;b.textContent=label;b.classList.remove('running');return}
      var end=Date.now()+parseFloat(b.getAttribute('data-min'))*60000;b.classList.add('running');track('recipe_timer',{min:b.getAttribute('data-min')});
      function tick(){var s=Math.max(0,Math.round((end-Date.now())/1000));b.textContent='Faltan '+Math.floor(s/60)+':'+String(s%60).padStart(2,'0')+' · tocá para parar';if(!s){clearInterval(t);t=null;b.classList.remove('running');b.textContent='¡Listo! '+label;try{navigator.vibrate&&navigator.vibrate([300,120,300])}catch(e){}}}
      tick();t=setInterval(tick,1000);
    });
  });

  // Cook mode: keep the screen on (Wake Lock API) and enlarge the text.
  var lock=null;
  document.querySelectorAll('[data-cook]').forEach(function(b){
    b.addEventListener('click',function(){
      var on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);document.body.classList.toggle('cooking',on);
      if(on){track('cook_mode',{});if('wakeLock' in navigator)navigator.wakeLock.request('screen').then(function(l){lock=l}).catch(function(){})}else if(lock){lock.release();lock=null}
    });
  });
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible'&&document.body.classList.contains('cooking')&&'wakeLock' in navigator)navigator.wakeLock.request('screen').then(function(l){lock=l}).catch(function(){})});
  document.querySelectorAll('[data-print]').forEach(function(b){b.addEventListener('click',function(){track('recipe_print',{});window.print()})});

  // Recipe hub: search, category chips and "¿Qué cocino hoy?".
  document.querySelectorAll('[data-hub-filter]').forEach(function(box){
    var cards=[].slice.call(document.querySelectorAll('.rcards-hub .rcard')),input=box.querySelector('input'),chips=box.querySelectorAll('[data-cat]'),count=box.querySelector('.hub-count'),cat='';
    function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
    function run(){var q=norm(input.value.trim()),n=0;cards.forEach(function(c){var ok=(!cat||(' '+c.getAttribute('data-cats')+' ').indexOf(' '+cat+' ')>-1)&&(!q||norm(c.getAttribute('data-name')).indexOf(q)>-1);c.hidden=!ok;if(ok)n++});count.textContent=n+(n===1?' receta':' recetas')}
    input.addEventListener('input',run);
    chips.forEach(function(ch){ch.addEventListener('click',function(){cat=ch.getAttribute('data-cat');chips.forEach(function(x){x.setAttribute('aria-pressed',x===ch)});run()})});
    var rnd=box.querySelector('[data-random]');if(rnd)rnd.addEventListener('click',function(){var vis=cards.filter(function(c){return !c.hidden});if(!vis.length)return;var pick=vis[Math.floor(Math.random()*vis.length)];track('random_recipe',{});location.assign(pick.getAttribute('href'))});
    run();
  });

  // Calculators (editorial estimates live in each page's JSON block).
  document.querySelectorAll('[data-tool]').forEach(function(tool){
    var data={};try{data=JSON.parse(tool.querySelector('[data-tool-data]').textContent)}catch(e){}
    var out=tool.querySelector('.tool-out'),type=tool.getAttribute('data-tool'),used=false;
    function v(id){var el=tool.querySelector('#'+id);return el?el.value:''}
    function n(id){return Math.max(0,parseInt(v(id),10)||0)}
    function round(x,s){return Math.ceil(x/s)*s}
    function render(){
      var html='';
      if(type==='bocaditos'){
        var p=n('tb-personas'),r=data.perPerson[v('tb-rol')][v('tb-horas')],kids=v('tb-ninos')==='si'?data.kidsFactor:1,total=round(p*r*kids,10),sal=round(total*data.saltyShare,10),dul=total-sal;
        html='<p class="big">'+total.toLocaleString('es-PY')+' bocaditos</p><p>'+sal.toLocaleString('es-PY')+' salados y '+dul.toLocaleString('es-PY')+' dulces, unos '+Math.ceil(total/100)+' '+(Math.ceil(total/100)===1?'ciento':'cientos')+'. Son '+(Math.round(r*kids*10)/10).toString().replace('.',',')+' por persona.</p>';
      }else if(type==='asado'){
        var a=n('ta-adultos'),k=n('ta-ninos'),g=data.gramsAdult[v('ta-apetito')]*a+data.gramsKid*k,bone=data.boneFactor[v('ta-hueso')],kg=Math.round(g*bone/100)/10;
        html='<p class="big">'+String(kg).replace('.',',')+' kg de carne cruda</p><p>Sumá '+Math.ceil((a+k)*data.chorizoPerPerson)+' chorizos o morcillas y unos '+String(Math.round((a+k)*data.coalKgPerPerson*10)/10).replace('.',',')+' kg de carbón. Incluye el peso del hueso según los cortes que elegiste.</p>';
      }else if(type==='comida'){
        var pp=n('tc-personas'),f=data.formats[v('tc-formato')];
        html='<ul class="tool-list">'+f.items.map(function(it){var q=it.g*pp;return '<li><strong>'+(it.unit==='u'?Math.ceil(it.g*pp)+' '+it.unitLabel:(q>=1000?String(Math.round(q/100)/10).replace('.',',')+' kg':Math.round(q)+' g'))+'</strong> de '+it.label+'</li>'}).join('')+'</ul>';
      }
      out.innerHTML=html+'<p class="tool-note">'+(data.note||'Estimación editorial: ajustala a tu grupo.')+'</p>';
      if(!used){used=true}else{track('calc_use',{calc:type})}
    }
    tool.addEventListener('input',render);tool.addEventListener('change',render);render();
  });
})();
