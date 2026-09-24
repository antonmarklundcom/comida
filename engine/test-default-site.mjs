// Lets `node engine/verify.test.mjs` and `node --test` run without arguments.
if(!process.argv.some(a=>a.startsWith('--site=')))process.argv.push('--site=comida');
