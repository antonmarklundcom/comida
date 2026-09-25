/* comida.com.py: menu planner, saved recipes and order prefill.
   Data comes from /data/recipes.json (built at build time). Everything is stored only in this browser. */
(function(){
  var track=function(n,p){if(window.comidaTrack)window.comidaTrack(n,p)};
  var FR=[[0.25,'¼'],[0.5,'½'],[0.75,'¾'],[1/3,'⅓'],[2/3,'⅔']];
  var UNITS={g:['g','g'],kg:['kg','kg'],ml:['ml','ml'],l:['litro','litros'],u:['',''],cda:['cucharada','cucharadas'],cdita:['cucharadita','cucharaditas'],taza:['taza','tazas'],pizca:['pizca','pizcas'],diente:['diente','dientes'],atado:['atado','atados'],lata:['lata','latas'],paquete:['paquete','paquetes'],rama:['rama','ramas'],hoja:['hoja','hojas'],feta:['feta','fetas'],sobre:['sobre','sobres']};
  function fmt(q){var w=Math.floor(q),r=q-w;if(r<0.07)return String(w||1);for(var i=0;i<FR.length;i++)if(Math.abs(r-FR[i][0])<0.07)return (w?w+' ':'')+FR[i][1];return String(Math.round(q*10)/10).replace('.',',')}
  function qty(q,u){if(q==null)return 'al gusto';var n,uu=u;if(u==='g'&&q>=1000){n=fmt(q/1000);uu='kg'}else if(u==='ml'&&q>=1000){n=fmt(q/1000);uu='l'}else if(u==='g'||u==='ml'){var st=q>=100?10:q>=20?5:1;n=String(Math.round(q/st)*st)}else n=fmt(q);var un=UNITS[uu]||UNITS.u,pl=!/^1$|^½|^¼|^¾|^⅓|^⅔/.test(n);return (n+' '+(pl?un[1]:un[0])).trim()}
  function line(i,f){var q=i.q==null?null:i.q*(i.fixed?1:f);var name=(q!=null&&i.one&&(i.u==='u')&&q<=1.05)?i.one:i.item;if(q==null)return name+' (al gusto)';return qty(q,i.u)+((i.u&&i.u!=='u')?' de ':' ')+name}
  function load(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}}
  function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
  var dataP=null;function data(){if(!dataP)dataP=fetch('/data/recipes.json').then(function(r){return r.json()}).catch(function(){return []});return dataP}

  // Recipe page: the order button carries the current scale; "Guardar receta" toggles a favourite.
  document.querySelectorAll('[data-order-recipe]').forEach(function(a){
    var base=a.getAttribute('href');
    function sync(){var f=(load('comida:'+location.pathname,{}).factor)||1;a.setAttribute('href',base+(f!==1?'&f='+f:''))}
    sync();document.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('[data-factor]'))setTimeout(sync,0)});
    a.addEventListener('click',function(){track('order_ingredients',{recipe:base})});
  });
  document.querySelectorAll('[data-save-recipe]').forEach(function(b){
    var id=b.getAttribute('data-id');function paint(){var on=load('comida:saved',[]).indexOf(id)>-1;b.setAttribute('aria-pressed',on);b.textContent=on?'Guardada ✓':'Guardar receta'}
    paint();b.addEventListener('click',function(){var s=load('comida:saved',[]),i=s.indexOf(id);if(i>-1)s.splice(i,1);else{s.push(id);track('save_recipe',{})}save('comida:saved',s);paint()});
  });

  // /recetas/: "Tus recetas guardadas" block above the list.
  var hub=document.querySelector('.rcards-hub');
  if(hub&&document.querySelector('[data-hub-filter]')){var saved=load('comida:saved',[]);if(saved.length)data().then(function(all){var mine=all.filter(function(r){return saved.indexOf(r.id)>-1});if(!mine.length)return;var s=document.createElement('section');s.className='saved-block';s.innerHTML='<h2>Tus recetas guardadas</h2><div class="rcards">'+mine.map(function(r){return '<a class="rcard tone-3" href="'+r.path+'"><span class="rcard-kind">Guardada</span><strong>'+r.label.replace(/</g,'&lt;')+'</strong></a>'}).join('')+'</div>';hub.parentNode.insertBefore(s,document.querySelector('[data-hub-filter]'))})}

  // /mercado/: prefill the order note from ?receta=slug&f=factor, ?kit=asado&kg=&p=, or the planner list.
  var order=document.querySelector('.order-form');
  if(order){
    var qs=new URLSearchParams(location.search),note=order.elements.nota;
    if(qs.get('receta'))data().then(function(all){var r=all.filter(function(x){return x.slug===qs.get('receta')})[0];if(!r)return;var f=parseFloat(qs.get('f'))||1;note.value='Ingredientes para '+r.label+(f!==1?' (receta x'+String(f).replace('.',',')+')':'')+':\n'+r.ingredients.map(function(i){return '- '+line(i,f)}).join('\n');track('order_prefill',{from:'recipe'})});
    if(qs.get('kit')==='asado'){note.value='Pack de asado para '+(parseInt(qs.get('p'),10)||'')+' personas, unos '+(qs.get('kg')||'')+' kg de carne cruda (según la calculadora).';var pa=order.querySelector('[value="pack-asado"]');if(pa)pa.checked=true;track('order_prefill',{from:'asado'})}
    if(qs.get('lista')==='planificador'){var list=load('comida:planner-list','');if(list){note.value='Lista del planificador:\n'+list;track('order_prefill',{from:'planner'})}}
  }

  // Asado calculator: offer the kit with the computed amount.
  var asado=document.querySelector('[data-tool="asado"]');
  if(asado){var out=asado.querySelector('.tool-out');var mo=new MutationObserver(function(){if(out.querySelector('[data-kit]'))return;var big=out.querySelector('.big');if(!big)return;var kg=big.textContent.split(' ')[0],p=(parseInt(asado.querySelector('#ta-adultos').value,10)||0)+(parseInt(asado.querySelector('#ta-ninos').value,10)||0);var a=document.createElement('a');a.className='btn btn-primary';a.setAttribute('data-kit','');a.href='/mercado/carne/?kit=asado&kg='+encodeURIComponent(kg)+'&p='+p+'#formulario';a.textContent='Consultá por este pack de asado';var para=document.createElement('p');para.appendChild(a);out.appendChild(para)});mo.observe(out,{childList:true})}

  // /planificador/: pick recipes, scale them, get one summed shopping list.
  var pl=document.querySelector('[data-planner]');
  if(pl){
    var listEl=pl.querySelector('.planner-list'),chosenEl=pl.querySelector('.planner-chosen'),shopEl=pl.querySelector('.planner-shopping'),empty=pl.querySelector('.planner-empty'),actions=pl.querySelector('.planner-actions'),q=pl.querySelector('#pl-q'),status=pl.querySelector('[data-copy-status]');
    var menu=load('comida:planner',{});var all=[];
    function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
    function renderList(){var term=(q.value||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');listEl.innerHTML=all.filter(function(r){return !term||r.label.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').indexOf(term)>-1}).map(function(r){var on=menu[r.id]!=null;return '<li><label class="check"><input type="checkbox" data-pick="'+r.id+'"'+(on?' checked':'')+'> <span>'+esc(r.label)+' <span class="opt">'+Math.round(r.minutes)+' min</span></span></label></li>'}).join('')}
    function sumList(){var acc={},order=[];Object.keys(menu).forEach(function(id){var r=all.filter(function(x){return x.id===id})[0];if(!r)return;var f=menu[id];r.ingredients.forEach(function(i){var key=i.item.toLowerCase()+'|'+(i.q==null?'x':i.u);if(!acc[key]){acc[key]={i:i,q:0,none:i.q==null};order.push(key)}if(i.q!=null)acc[key].q+=i.q*(i.fixed?1:f)})});return order.map(function(k){var a=acc[k];return a.none?a.i.item+' (al gusto)':qty(a.q,a.i.u)+((a.i.u&&a.i.u!=='u')?' de ':' ')+((a.i.u==='u'&&a.q<=1.05&&a.i.one)?a.i.one:a.i.item)})}
    function renderMenu(){var ids=Object.keys(menu);empty.hidden=ids.length>0;actions.hidden=!ids.length;chosenEl.innerHTML=ids.map(function(id){var r=all.filter(function(x){return x.id===id})[0];if(!r)return '';var opts=r.yield.options.map(function(o){var f=o/r.yield.base;return '<option value="'+f+'"'+(Math.abs(f-menu[id])<0.001?' selected':'')+'>'+(r.yield.mode==='kilos'?String(o).replace('.',',')+' kg':o+' porciones')+'</option>'}).join('');return '<li><a href="'+r.path+'">'+esc(r.label)+'</a> <label class="sr-only" for="pl-f-'+id+'">Cantidad</label><select id="pl-f-'+id+'" data-factor-for="'+id+'">'+opts+'</select> <button type="button" class="linkish" data-remove="'+id+'">Quitar</button></li>'}).join('');var items=sumList();shopEl.innerHTML=items.map(function(t,n){return '<li><label><input type="checkbox"> <span class="ing">'+esc(t)+'</span></label></li>'}).join('');save('comida:planner',menu);save('comida:planner-list',items.map(function(t){return '- '+t}).join('\n'))}
    data().then(function(d){all=d;renderList();renderMenu()});
    q.addEventListener('input',renderList);
    pl.addEventListener('change',function(e){var t=e.target;if(t.hasAttribute('data-pick')){if(t.checked){menu[t.getAttribute('data-pick')]=1;track('planner_add',{})}else delete menu[t.getAttribute('data-pick')];renderMenu()}if(t.hasAttribute('data-factor-for')){menu[t.getAttribute('data-factor-for')]=parseFloat(t.value);renderMenu()}});
    pl.addEventListener('click',function(e){var t=e.target;if(t.hasAttribute&&t.hasAttribute('data-remove')){delete menu[t.getAttribute('data-remove')];renderMenu();renderList()}});
    var ord=pl.querySelector('[data-order]');ord.addEventListener('click',function(e){e.preventDefault();track('planner_order',{});location.assign('/mercado/?lista=planificador#formulario')});
    var wab=pl.querySelector('[data-send-wa]');if(wab)wab.addEventListener('click',function(){var items=sumList();if(!items.length){status.textContent='Elegí al menos una receta para armar la lista.';return}var txt='Lista de compras (comida.com.py):\n'+items.map(function(t){return '- '+t}).join('\n');track('list_whatsapp',{items:items.length});window.open('https://api.whatsapp.com/send?text='+encodeURIComponent(txt),'_blank','noopener')});
    pl.querySelector('[data-copy]').addEventListener('click',function(){var txt='Lista de compras (comida.com.py):\n'+sumList().map(function(t){return '- '+t}).join('\n');(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(function(){status.textContent='Lista copiada.'}).catch(function(){status.textContent='No se pudo copiar; seleccioná la lista a mano.'})});
  }

  // "¿La hiciste?": private feedback, never shown on the site.
  document.querySelectorAll('[data-feedback]').forEach(function(box){
    var recipe=box.getAttribute('data-recipe'),status=box.querySelector('[data-fb-status]'),more=box.querySelector('.fb-more'),vote='';
    var local=location.hostname==='localhost'||location.hostname==='127.0.0.1';
    function send(comment){var body=new FormData();body.append('receta',recipe);body.append('voto',vote);if(comment)body.append('comentario',comment);var p=local?Promise.resolve({ok:true}):fetch('/php/feedback.php',{method:'POST',body:body}).then(function(r){return r.json()});return p.catch(function(){return {ok:false}})}
    box.querySelectorAll('[data-vote]').forEach(function(b){b.addEventListener('click',function(){vote=b.getAttribute('data-vote');box.querySelectorAll('[data-vote]').forEach(function(x){x.setAttribute('aria-pressed',x===b)});track('recipe_feedback',{vote:vote});send('').then(function(res){status.textContent=res.ok?'¡Gracias! Si querés, contanos qué cambiarías.':'No pudimos guardar tu respuesta; probá más tarde.';more.hidden=!res.ok})})});
    box.querySelector('[data-fb-send]').addEventListener('click',function(){var c=box.querySelector('textarea').value.trim();if(!c)return;send(c).then(function(res){status.textContent=res.ok?'Gracias por el comentario.':'No pudimos guardar tu comentario.';if(res.ok)more.hidden=true})});
  });
})();
