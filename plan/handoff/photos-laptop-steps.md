# Put the 33 photos on the site from the laptop (about 10 minutes)

The cloud session could not run webimg, so conversion happens here. Everything after conversion is scripted.

In Git Bash:

```
cd "/c/Claude 1/comida-com-py"
git checkout master && git pull
npx --yes github:antonmarklundcom/webimg batch . --manifest plan/handoff/photos-2026-09-25-jobs.csv --widths 640,1024 --out assets/img
node scripts/place-photos.mjs
node engine/build-site.mjs --site=comida && node engine/verify.mjs --site=comida && node scripts/validate-content.mjs && node scripts/qa-gate.mjs
```

`place-photos.mjs` adds manifest ids 54-86 (with the Round 5 cost notes, `actual_spend_credits` 60) and sets `image:<id>` on the 57 content modules listed in `photos-cloud-prompt.md` step 5. It skips any image whose 4 files are missing, and running it twice is safe. The visual review is already done (`photos-2026-09-25-review.md`): no rejects.

If it all passes:

```
git checkout -b meat-photos
git add assets/img docs/imagery-manifest.json sites/comida/content
git commit -m "Place the 33 meat and fish photos (ids 54-86)"
git push -u origin meat-photos
```

Open the PR on GitHub and merge it, then publish with `git checkout master && git pull && node scripts/deploy-branch.mjs`.
