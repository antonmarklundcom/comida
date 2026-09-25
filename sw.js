/* comida.com.py service worker: pages and recipes you open stay available offline.
   HTML, CSS, JS and data: network first (always fresh after a deploy), cached copy when offline.
   Images and fonts: cache first (their URLs never change content). Never touches PHP or form posts.
   VERSION is stamped by engine/build-site.mjs on every build. */
var VERSION='comida-d9594eff38b2';
var CORE=['/','/recetas/','/css/tokens.css','/css/fonts.css','/css/site.css','/js/site.js','/js/forms.js','/js/recipe.js','/js/kitchen.js','/data/recipes.json','/icon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==VERSION}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
function networkFirst(req,fallback){return fetch(req).then(function(res){if(res.ok){var copy=res.clone();caches.open(VERSION).then(function(c){c.put(req,copy)})}return res}).catch(function(){return caches.match(req).then(function(hit){return hit||(fallback?caches.match(fallback):undefined)})})}
self.addEventListener('fetch',function(e){
  var req=e.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==location.origin||url.pathname.indexOf('/php/')===0)return;
  if(/\.(avif|webp|woff2|svg)$/.test(url.pathname)){
    e.respondWith(caches.match(req).then(function(hit){return hit||fetch(req).then(function(res){if(res.ok){var copy=res.clone();caches.open(VERSION).then(function(c){c.put(req,copy)})}return res})}));
    return;
  }
  var html=req.mode==='navigate'||(req.headers.get('accept')||'').indexOf('text/html')>-1;
  e.respondWith(networkFirst(req,html?'/recetas/':null));
});
