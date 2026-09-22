# Coast and Sea landmark study v0.1

- Purpose: square Place token for Home-middle vs Home-at-top paper orientation test
- Status: `study`; not canonical, not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — rendering language only
- Source: `source/coast-sea-source-v0.1.png`
- Delivery: `processed/coast-sea-512-v0.1.png`
- Review previews: `processed/coast-sea-preview-160-v0.1.png`, `processed/coast-sea-preview-80-v0.1.png`
- Transformation: point-filter resize from 1254×1254 to 512×512, 160×160 and 80×80; no crop

## Exploration prompt

```text
Asset: Little Valley Cards paper-test Place study for the Coast and Sea landmark. Moment: a calm valley path reaches a bright open shoreline and a small simple wooden pier, clearly marking the world's coastal terminal region. Anchors: one short wooden pier extending into broad clear-blue sea, one crescent of pale warm sand, one compact rocky headland with a small windswept pine. Visual hypothesis: an unmistakable Sea/Coast silhouette distinct from the narrow River at 80–160 px, with open water occupying a large simple shape. Format: square 1:1, intended delivery at 512x512. Use deliberate hard-edged native pixel clusters, colored brown and blue-green outlines, roughly three values per material, high-key fresh color and compact cool-teal shadows. Keep the pier and coastline inside the central 80%; fully opaque square. Avoid: boats, fishing characters, travel arrows, waves suggesting danger, buildings, text, letters, UI, card frame, logo, watermark, dense beach props, photorealism, painterly gradients, smooth vector edges, pure black universal outlines, sepia cast, transparency or broken edge artifacts.
```

## Review

- Fully opaque source.
- Broad open-water mass, sand crescent and pier remain distinct at 80 px and 160 px.
- Sea reads differently from Creek/River because water occupies the horizon and right half instead of forming a narrow ribbon.
- Pier is a location anchor, not evidence of boat travel or movement mechanics.
- Density remains restrained enough for a root landmark.
- Decision: accepted by Codex under delegated review authority as a **paper-test study only**. Not canonical and not runtime approved.
