// End-to-end test of php/lead-forward.php against a local mock of VenderCRM.
// Covers the five Hostinger cases in docs/php-tests.md: success, rejected payload,
// upstream timeout, duplicate submission and missing config. Needs PHP 8.1+ (PHP_BIN or C:/php/php.exe or php on PATH).
import {spawn,spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const php=process.env.PHP_BIN||(fs.existsSync('C:/php/php.exe')?'C:/php/php.exe':'php');
if(spawnSync(php,['-v']).status!==0){console.error('PHP handler test SKIPPED: no PHP binary found (set PHP_BIN).');process.exit(1)}
const lint=spawnSync(php,['-l',path.join(root,'php/lead-forward.php')],{encoding:'utf8'});if(lint.status!==0){console.error(lint.stdout+lint.stderr);process.exit(1)}
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'comida-php-'));const state=path.join(tmp,'state');fs.mkdirSync(state);
const config=path.join(tmp,'config.php');
fs.writeFileSync(config,`<?php return ['crm_url'=>'http://127.0.0.1:8195','api_key'=>'test-key','timeout'=>2,'state_dir'=>${JSON.stringify(state)},'rate_salt'=>'test','rate_max'=>100];`);
const rateConfig=path.join(tmp,'config-rate.php');const rateState=path.join(tmp,'rate');fs.mkdirSync(rateState);
fs.writeFileSync(rateConfig,`<?php return ['crm_url'=>'http://127.0.0.1:8195','api_key'=>'test-key','timeout'=>2,'state_dir'=>${JSON.stringify(rateState)},'rate_salt'=>'test','rate_max'=>6];`);
const docroot=path.join(root,'dist/comida.com.py');if(!fs.existsSync(path.join(docroot,'php/lead-forward.php'))){console.error('Build first: dist has no php/lead-forward.php');process.exit(1)}
const servers=[spawn(php,['-S','127.0.0.1:8195',path.join(root,'scripts/fixtures/mock-crm.php')],{stdio:'ignore'}),spawn(php,['-S','127.0.0.1:8194','-t',docroot],{stdio:'ignore',env:{...process.env,COMIDA_CONFIG_PATH:config}}),spawn(php,['-S','127.0.0.1:8196','-t',docroot],{stdio:'ignore',env:{...process.env,COMIDA_CONFIG_PATH:path.join(tmp,'missing.php')}}),spawn(php,['-S','127.0.0.1:8197','-t',docroot],{stdio:'ignore',env:{...process.env,COMIDA_CONFIG_PATH:rateConfig}})];
const stop=()=>servers.forEach(s=>s.kill());process.on('exit',stop);
await new Promise(r=>setTimeout(r,900));
const run=Date.now().toString(36);let seq=0;
const form=(phone,extra={})=>new URLSearchParams({idem:'test-'+run+'-'+(seq++)+'-abcdefgh',form:'cliente',ocasion:'bodas',zona:'Asunción',personas:'80',nombre:'Prueba',whatsapp:phone,consent:'si',source:'/presupuesto/',...extra});
async function post(port,body,accept='application/json'){const r=await fetch(`http://127.0.0.1:${port}/php/lead-forward.php`,{method:'POST',body,headers:{Accept:accept},redirect:'manual'});const text=await r.text();let json=null;try{json=JSON.parse(text)}catch{}return {status:r.status,json,location:r.headers.get('location')}}
const results=[];const check=(name,ok,detail)=>{results.push([name,ok]);console.log(`${ok?'PASS':'FAIL'} ${name}${ok?'':' '+JSON.stringify(detail)}`)};
let r=await post(8194,form('0981 000 001'));check('1 success -> ok + /gracias/',r.status===200&&r.json?.ok===true&&r.json.redirect==='/gracias/?estado=recibida',r);
const sameIdem='test-'+run+'-same-submission';r=await post(8194,form('0981 000 005',{idem:sameIdem}));const r2=await post(8194,form('0981 000 005',{idem:sameIdem}));check('4 duplicate (same form submitted twice) -> CRM replay, both ok, one lead',r.json?.ok===true&&r2.json?.ok===true,[r,r2]);
r=await post(8194,form('0981 000 005'));check('4b new submission from the same phone -> new idempotency key, accepted',r.json?.ok===true,r);
r=await post(8194,form('0981 000 002'));check('2 rejected payload (CRM 422) -> WhatsApp fallback',r.status===502&&r.json?.ok===false&&r.json.whatsapp?.startsWith('https://wa.me/595992279599?text='),r);
r=await post(8194,form('0981 000 003'));check('3 upstream timeout -> WhatsApp fallback',r.json?.ok===false&&r.json.error==='timeout'&&Boolean(r.json.whatsapp),r);
// The mock CRM is single-threaded and still sleeping; let it finish before the next case.
await new Promise(res=>setTimeout(res,3000));
r=await post(8196,form('0981 000 001'));check('5 missing config -> WhatsApp fallback, 503',r.status===503&&r.json?.ok===false&&Boolean(r.json.whatsapp),r);
r=await post(8194,form('0981 000 001'),'text/html');check('no-JS success -> 303 to /gracias/',r.status===303&&r.location==='/gracias/?estado=recibida',r);
r=await post(8194,form('0981 000 002'),'text/html');check('no-JS failure -> 303 to wa.me',r.status===303&&r.location?.startsWith('https://wa.me/'),r);
r=await post(8194,form('123'));check('invalid phone -> 422 without calling CRM',r.status===422&&r.json?.field==='whatsapp',r);
r=await post(8194,form('0981 000 001',{consent:''}));check('missing consent -> 422',r.status===422&&r.json?.field==='consent',r);
r=await post(8194,form('0981 000 001',{website:'http://spam'}));check('honeypot -> rejected',r.status===400,r);
r=await post(8194,new URLSearchParams({form:'proveedor',negocio:'Cocina Test',nombre:'Ana',whatsapp:'0981000004',consent:'si','formatos[]':'Buffet'}));check('supplier form -> ok',r.json?.ok===true,r);
r=await post(8194,form('0981 000 001',{form:'hack'}));check('unknown form type -> 400',r.status===400,r);
const big=form('0981 000 001',{mensaje:'x'.repeat(20000)});r=await post(8194,big);check('oversized request -> 413',r.status===413,r);
let limited=false;for(let i=0;i<8;i++){r=await post(8197,form('0981 00'+String(1000+i)));if(r.status===429)limited=true}check('rate limit -> 429 after 6 per window',limited,r);
// Mercado order, weekly-recipe list, recetario unlock (forms added for ideas 1-6 and 16).
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-pedido-abcdefgh',form:'pedido','productos[]':'queso-1',zona:'Luque',dia:'Viernes',nombre:'Prueba',whatsapp:'0981000006',consent:'si',nota:'Ingredientes para sopa paraguaya'}));check('pedido -> ok, redirect tipo=pedido',r.json?.ok===true&&r.json.redirect==='/gracias/?estado=recibida&tipo=pedido',r);
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-pedido-bad-zone',form:'pedido','productos[]':'queso-1',zona:'Encarnación',dia:'Viernes',nombre:'Prueba',whatsapp:'0981000006',consent:'si'}));check('pedido outside delivery zones -> 422 zona',r.status===422&&r.json?.field==='zona',r);
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-pedido-empty',form:'pedido',zona:'Luque',dia:'Viernes',nombre:'Prueba',whatsapp:'0981000006',consent:'si'}));check('pedido with nothing ordered -> 422 productos',r.status===422&&r.json?.field==='productos',r);
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-suscripcion-x',form:'suscripcion',nombre:'Prueba',whatsapp:'0981000007',consent:'si'}));check('suscripcion -> ok',r.json?.ok===true&&r.json.redirect.includes('tipo=suscripcion'),r);
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-recetario-x',form:'recetario',recetario:'navidad',nombre:'Prueba',whatsapp:'0981000008',consent:'si'}));check('recetario -> ok, redirect to the printable recetario',r.json?.ok===true&&r.json.redirect==='/recetario/navidad/',r);
r=await post(8194,new URLSearchParams({idem:'test-'+run+'-recetario-bad',form:'recetario',recetario:'../etc',nombre:'Prueba',whatsapp:'0981000008',consent:'si'}));check('recetario with a bad slug -> 422',r.status===422,r);
{const fb=async body=>{const x=await fetch('http://127.0.0.1:8194/php/feedback.php',{method:'POST',body:new URLSearchParams(body)});return {status:x.status,json:await x.json().catch(()=>null)}};
 let a=await fb({receta:'sopa-paraguaya',voto:'salio-bien',comentario:'Quedó rica'});check('feedback -> stored privately',a.json?.ok===true&&fs.readFileSync(path.join(state,'feedback.jsonl'),'utf8').includes('sopa-paraguaya'),a);
 a=await fb({receta:'sopa-paraguaya',voto:'5 estrellas'});check('feedback with an invalid answer -> 422',a.status===422,a);}
const secret=fs.readFileSync(path.join(docroot,'php/lead-forward.php'),'utf8').includes('test-key');check('no key in the deployed handler',!secret,{});
stop();fs.rmSync(tmp,{recursive:true,force:true});
const failed=results.filter(([,ok])=>!ok).length;console.log(`PHP handler test ${failed?'FAILED':'OK'}: ${results.length-failed}/${results.length} passed.`);process.exit(failed?1:0);
