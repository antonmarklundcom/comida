// One-command deploy (idea 17): build, run every gate, then commit ONLY the built site
// (dist/comida.com.py) to the orphan branch `hostinger` and push it. Hostinger → Advanced → Git
// points at that branch with public_html as the install path; its webhook redeploys on every push.
// The source tree (plan/, docs/, sites/, engine/) never reaches the server.
//   node scripts/deploy-branch.mjs            build + gates + commit + push
//   node scripts/deploy-branch.mjs --no-push  everything except the push
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync,spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const run=(cmd,args,opts={})=>{const r=spawnSync(cmd,args,{cwd:root,stdio:'inherit',...opts});if(r.status!==0){console.error(`Deploy stopped: ${cmd} ${args.join(' ')} failed`);process.exit(1)}};
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
if(git('status','--porcelain','--untracked-files=no')){console.error('Deploy stopped: commit or stash your changes first (the deploy records the source commit).');process.exit(1)}
run(process.execPath,['engine/build-site.mjs','--site=comida']);
run(process.execPath,['engine/verify.mjs','--site=comida']);
run(process.execPath,['scripts/check-duplicates.mjs']);
run(process.execPath,['scripts/qa-gate.mjs']);
const source=git('rev-parse','--short','HEAD'),branch='hostinger',wt=path.join(root,'.deploy-worktree');
if(fs.existsSync(wt)){try{git('worktree','remove','--force',wt)}catch{fs.rmSync(wt,{recursive:true,force:true})}}
const exists=spawnSync('git',['rev-parse','--verify','--quiet',branch],{cwd:root}).status===0;
if(exists)git('worktree','add',wt,branch);else{git('worktree','add','--detach',wt);execFileSync('git',['checkout','--orphan',branch],{cwd:wt});}
for(const f of fs.readdirSync(wt))if(f!=='.git')fs.rmSync(path.join(wt,f),{recursive:true,force:true});
fs.cpSync(path.join(root,'dist/comida.com.py'),wt,{recursive:true});
fs.writeFileSync(path.join(wt,'.deploy-source'),`source ${source}\nbuilt ${new Date().toISOString()}\n`);
execFileSync('git',['add','-A'],{cwd:wt});
// Last line of defence: nothing that looks like a key or a private config may be committed.
const staged=execFileSync('git',['diff','--cached','--name-only'],{cwd:wt,encoding:'utf8'});
const leak=spawnSync('git',['grep','--cached','-lE','vc_live_[A-Za-z0-9_-]{20,}|BEGIN [A-Z ]*PRIVATE KEY'],{cwd:wt,encoding:'utf8'}).stdout.trim();
if(leak||/(^|\/)(config\.php|\.env)/m.test(staged)){console.error('Deploy stopped: secret-looking content in '+(leak||'staged files'));process.exit(1)}
const changed=spawnSync('git',['diff','--cached','--quiet'],{cwd:wt}).status!==0;
if(changed)execFileSync('git',['commit','-q','-m',`Deploy ${source} (${new Date().toISOString().slice(0,16)}Z)`],{cwd:wt});
if(!process.argv.includes('--no-push'))run('git',['push','origin',branch],{cwd:wt});
git('worktree','remove','--force',wt);
console.log(`Deploy branch ${branch}: ${changed?'new commit for source '+source:'no changes'}${process.argv.includes('--no-push')?' (not pushed)':' pushed'}.`);
