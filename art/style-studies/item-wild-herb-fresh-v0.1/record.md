# Fresh Wild Herb item identity study v0.1

- Purpose: square Fresh/Processed recognition pair for paper test
- Status: `study`; not canonical, not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — rendering language only
- Source: `source/wild-herb-fresh-source-v0.1.png`
- Delivery: `processed/wild-herb-fresh-512-v0.1.png`
- Review previews: `processed/wild-herb-fresh-preview-160-v0.1.png`, `processed/wild-herb-fresh-preview-80-v0.1.png`
- Transformation: point-filter resize from 1254×1254 to 512×512, 160×160 and 80×80; no crop

## Exploration prompt

```text
Asset: Little Valley Cards paper-test item identity study for Fresh Wild Herb. Subject: one freshly foraged herb sprig with a visible small root tuft, five jagged blue-green leaves, two tiny violet star-shaped flowers and two dew drops; it must read as Fresh Forage + Herb, not a planted crop, medicine bottle, or generic mint. Visual hypothesis: rooted flowering sprig and violet marker remain recognizable at 80–160 px and can pair clearly against a tied prepared herb bundle. Format: square 1:1 transparent-background item cutout, intended delivery at 512x512. Use deliberate hard-edged native pixel clusters, colored green, brown and blue-green outlines, roughly three values per material, high-key fresh palette and compact cool-teal shadow accents. Center one sprig in the central 70% with generous clear margin. Avoid: pot, crop row, jar, mortar, ribbon bundle, text, numbers, UI, card frame, logo, watermark, multiple species, scene background, photorealism, painterly gradients, smooth vector edges, pure black universal outlines, sepia cast, broken edge artifacts.
```

## Review

- Transparent-background cutout with no baked UI.
- Exposed root, dew and violet flower marker remain readable at 80 px and 160 px.
- Rooted loose sprig reads as freshly foraged rather than planted crop inventory.
- Accepted as the Fresh Forage + Herb side of the recognition pair; UI owns exact source and compatibility.
- Decision: accepted by Codex under delegated review authority as a **paper-test study only**. Not canonical and not runtime approved.
