/* Local preview only: forms.js loads this file when the page is served from localhost,
   so the form flow can be tested without PHP. Add ?mock=fail or ?mock=rate to the URL
   to exercise the WhatsApp fallback. Never loaded in production. */
window.comidaMockSubmit=function(body){
  var mode=new URLSearchParams(location.search).get('mock');
  return new Promise(function(resolve){setTimeout(function(){
    if(mode==='fail')return resolve({ok:false,error:'upstream'});
    if(mode==='rate')return resolve({ok:false,error:'rate'});
    resolve({ok:true,redirect:'/gracias/?estado=recibida'});
  },400)});
};
