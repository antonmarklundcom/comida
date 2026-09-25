# Visual review of the 33 photos (2026-09-25, cloud session)

Source PNGs were downloaded from the CloudFront URLs in `photos-2026-09-25-jobs.csv` and checked one by one. Conversion to AVIF/WebP was **not** done: the session's permission classifier blocked running `npx github:antonmarklundcom/webimg` (external code) and attaching the webimg repo.

- Real source size: **1168x880** (4:3), not 1024x768. Use that for `width`/`height` in the manifest.
- Rejects: **none**. No faces, no readable text, no wrong food.
- Notes (placeable, but worth knowing):
  - 58 (asadito): tiny, far-off people on the riverside promenade; no face is recognisable.
  - 72 (carne magra): the flag in the back corner reads as a plain red-white-blue tricolour with no seal.
  - 80 (pernil): Christmas table setting. It fits pernil, but it is seasonal.
  - 81 (alitas): a faint small sparkle mark in the bottom-right corner. Crop it or accept it.

When conversion runs, steps 3 (look at every image) of `photos-cloud-prompt.md` can reuse this list; only confirm the -640.webp files look the same.
