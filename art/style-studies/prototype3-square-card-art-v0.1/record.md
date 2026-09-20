# Prototype 3 square card art v0.1

- Purpose: replace mixed-ratio borrowed art in Prototype 3 with one square card-art system
- Status: runtime approved for Prototype 3 under the user's delegated review authority
- Generation date: 2026-09-20
- Tool/model: built-in `image_gen`; model metadata unavailable
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — native-pixel construction, high-key palette, colored outlines and material language only
- Source directory: `source/`
- Delivery directory: `processed/`
- Runtime directory: `prototype/little-valley-cards-p3/assets/`
- Complete prompt set: `prompts.md`
- Transformation: each selected square 1254×1254 source was resized with point filtering to an exact 512×512 delivery; no cropping

## Contract

Every raster placed inside a card is square `1:1` at 512×512. The UI card remains `5:7` with a square artwork window. Runtime uses `object-fit: contain`, so a future ratio mistake stays visible instead of being silently cropped.

## Selected assets

- `forgotten-garden-512-v0.1.png`
- `bramble-path-512-v0.1.png`
- `little-home-512-v0.1.png`
- `turned-garden-512-v0.1.png`
- `mira-old-gate-512-v0.1.png`
- `wild-mint-512-v0.1.png`
- `creek-path-512-v0.1.png`
- `windblown-seeds-512-v0.1.png`
- `fence-sapling-512-v0.1.png`
- `back-step-herbs-512-v0.1.png`
- `bean-trellis-512-v0.1.png` — superseded; retained as historical source only
- `young-bean-trellis-512-v0.2.png` — current Prototype 3 runtime asset
- `bram-footbridge-512-v0.1.png`
- `mira-rain-512-v0.1.png`
- `mira-mill-steps-512-v0.1.png`
- `creek-stones-512-v0.1.png`
- `hill-path-512-v0.1.png`
- `acorn-willow-512-v0.1.png`
- `pocket-sunflowers-512-v0.1.png`
- `young-pear-tree-512-v0.1.png`
- `mint-patch-512-v0.1.png`
- `shared-mint-tea-512-v0.1.png`
- `smooth-stone-512-v0.1.png`
- `doorstep-cairn-512-v0.1.png`
- `blue-feather-512-v0.1.png`
- `scented-trail-512-v0.1.png`

Farmer, Mira and Bram retain their existing approved 512×512 portraits. Hoe, Sickle and Found Bean Seeds retain their approved subjects but receive Prototype 3-specific 512×512 point-resized deliveries.

## Young Bean Trellis v0.2

- Purpose: correct the false instant-growth signal in the original Bean result.
- Status: runtime approved for Prototype 3 under the user's delegated review authority.
- Generation date: 2026-09-20.
- Tool/model: built-in `image_gen`; model metadata unavailable.
- Complete prompt: `prompts.md`, “Young Bean Trellis v0.2 — runtime replacement”.
- Reference roles: approved farm reference for rendering language; mature v0.1 Bean Trellis for trellis subject and crop only, with its mature foliage and pods explicitly prohibited.
- Source: `source/young-bean-trellis-source-v0.2.png` (1254×1254).
- Delivery: `processed/young-bean-trellis-512-v0.2.png` (512×512).
- Logical-size review: `processed/young-bean-trellis-preview-160-v0.2.png` (160×160).
- Runtime: `prototype/little-valley-cards-p3/assets/young-bean-trellis-512-v0.2.png`.
- Transformation: point-filter resize only; no crop.
- Keep: empty trellis structure, two sparse young shoots, tiny new leaves, fresh soil, bright native-pixel valley language, strong 160px silhouette.
- Reject: flowers, pods, harvest-ready vines, dense mature foliage, or any suggestion of an immediate crop yield.
- Approval decision: accepted by Codex under the user's previously delegated image-review authority after 512px and 160px inspection.
- Superseded runtime asset: `bean-trellis-512-v0.1.png`. It remains in the historical record but is no longer referenced by `data.js` because its pods communicated instant maturity.

## Review

- Keep: immediate focal ideas, consistent square composition, high-key valley palette, strong phone-size silhouettes and hard-edged native-pixel construction.
- Rejected: the first Forgotten Garden and first Mira-at-the-Gate generations because they contained broken transparent/black gaps. They are not copied into this study or runtime.
- Known prototype limitation: later Opportunity and its direct result may intentionally reuse the same square scene when the moment itself is the persistent meaning. No rectangular fallback remains in the active asset folder.
- Approval decision: accepted by Codex under the user's previously delegated image-review authority after full-size inspection; contract change explicitly directed by the user on 2026-09-20.
