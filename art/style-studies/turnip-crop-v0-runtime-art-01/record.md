# Turnip Crop V0 runtime art 01

- Purpose: make `Turnip Crop` readable in the playable Field tableau at Growing, Watered, and Mature states.
- Status: `runtime approved` for this V0 prototype after square 512×512 and 160×160 review on 2026-09-26. This does not lock final production art.
- Tool: built-in `image_gen`; model version and seed unavailable.
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` for native pixel clusters, bright palette, colored outlines, and cool-teal shadows. It does not supply scene content.
- Source: `source/turnip-{growing,watered,mature}-source-v0.1.png`.
- Delivery: matching `processed/turnip-*-512-v0.1.png`; ImageMagick point-filter resize to exactly 512×512 without cropping. Matching `processed/turnip-*-preview-160-v0.1.png` files were reviewed at phone size.
- Runtime copies: `prototype/assets/turnip-{growing,watered,mature}-512-v0.1.png`.

## Final prompts

**Growing:** “Create one original square 1:1 native pixel-art game-card illustration for Little Valley Cards: a GROWING TURNIP CROP on a small garden plot. Show three very young turnip seedlings with broad fresh green leaves growing from tidy brown soil; no visible white turnip bulbs yet. Slight elevated three-quarter farm view, the plot fills most of the square, simple grass border, one immediate readable focal subject at 160 px. Use the attached approved farm image only for high-key fresh color behavior, hard-edged deliberate pixel clusters, colored outlines, roughly three value levels per material, and compact cool-teal shadows. Keep the image opaque across the whole square. No people, other crops, tools, water droplets, text, symbols, logos, UI, or card frame.” Input: approved farm style reference.

**Watered:** “Create the WATERED variant of the attached Growing Turnip crop card artwork for Little Valley Cards. Preserve the same square composition: the same three young leafy turnip seedlings, their same positions and sizes, same raised three-quarter camera, grass edge and hard-edged native pixel-art language. Change only the soil to visibly moist dark brown soil with a few small bright reflections in the furrows. Keep leaves fresh, but do not add rain, droplets, a watering can, puddles, visible bulbs, extra plants, or decorative UI. The water state must be readable through the soil at 160 px. Opaque square 1:1 image, no text, symbols, logos, border, or card frame.” Input: Growing source image.

**Mature:** “Create the MATURE TURNIP variant of the attached Growing Turnip crop card artwork for Little Valley Cards. Preserve the square garden-plot composition, raised three-quarter camera, bright grass border, same native hard-edged pixel-cluster style and high-key palette. Show three fully grown white turnips with small purple shoulders partly rising from dry brown soil, each topped with larger lush green leaves. The white roots must read clearly at 160 px and signal harvest-ready crop. Opaque square 1:1 image. No harvested loose items, hands, tools, watering can, text, symbols, logos, UI, or card frame.” Input: Growing source image.

## Review

- Keep: same three-plant composition across states; wet soil changes visibly without UI droplets; mature white bulbs read at 160 px.
- Runtime selection: Growing when immature and not watered; Watered when immature and watered today; Mature when growth reaches the crop threshold.
- Known tester issue (2026-09-26): the user reports that the Turnip image sequence/order is wrong. Correction is explicitly deferred; do not infer which asset or state mapping to swap without reviewing the reported sequence.
- Approval: Codex used the existing delegated prototype-art review authority. Tester feedback may supersede these assets.
