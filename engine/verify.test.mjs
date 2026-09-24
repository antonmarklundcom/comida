// Mutation tests for meaningful regressions in the independent output verifier.
// Each case restores the generated file, including when a test fails.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
import './test-default-site.mjs';
import {loadSite,root} from './site.mjs';
const {out}=await loadSite();
const home=path.join(out,'index.html'),original=fs.readFileSync(home,'utf8');
const cases=[
 ['missing asset',s=>s.replace(/src="\/assets\/img\/[^\"]+"/,'src="/assets/img/missing.webp"')],
 ['unpublished link',s=>s.replace('href="/catering/bodas/"','href="/catering/velorio/"')],
 ['link to noindex page',s=>s.replace('href="/catering/bodas/"','href="/chef-a-domicilio/"')],
 ['missing H1',s=>s.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/,'')],
 ['wrong canonical',s=>s.replace('rel="canonical" href="https://comida.com.py/"','rel="canonical" href="https://wrong.invalid/"')],
 ['missing alt',s=>s.replace(/alt="[^"]+"/,'alt=""')],
 ['missing dimensions',s=>s.replace(/(<img\b[^>]*\s)width="\d+"/,'$1width="0"')],
 ['forbidden claim',s=>s.replace('</h1>','</h1><p>Servicio garantizado</p>')],
 ['internal price',s=>s.replace('</h1>','</h1><p>Precio: 25.000 Gs</p>')],
 ['mojibake',s=>s.replace('</h1>','</h1><p>Asunci\u00c3\u00b3n</p>')],
 ['WhatsApp without message',s=>s.replace(/href="https:\/\/wa.me\/[^\"]+"/,'href="https://wa.me/595992279599"')],
 ['missing schema field',s=>s.replace('"name": "comida.com.py",','')],
 ['noindex mismatch',s=>s.replace('</head>','<meta name="robots" content="noindex"></head>')],
 ['unpublished price reference',s=>s.replace('</h1>','</h1><span data-price-id="buffet"></span>')],
 ['HTML size',s=>s.replace('</body>',' '.repeat(102400)+'</body>')]
];
try{for(const [label,mutate] of cases){const changed=mutate(original);assert.notEqual(changed,original,'Mutation did not apply: '+label);fs.writeFileSync(home,changed);const result=spawnSync(process.execPath,['engine/verify.mjs','--site=comida'],{encoding:'utf8',cwd:root});assert.equal(result.status,1,'Verifier failed to reject: '+label)}}finally{fs.writeFileSync(home,original)}
console.log(`Verifier regression tests OK: ${cases.length} invalid builds rejected; generated home restored.`);
