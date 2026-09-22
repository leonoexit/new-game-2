# Valley Town square landmark study v0.1

- Purpose: square Place token for Home-middle vs Home-at-top paper orientation test
- Status: `study`; not canonical, not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — rendering language only
- Source: `source/valley-town-square-source-v0.1.png`
- Delivery: `processed/valley-town-square-512-v0.1.png`
- Review previews: `processed/valley-town-square-preview-160-v0.1.png`, `processed/valley-town-square-preview-80-v0.1.png`
- Transformation: point-filter resize from 1254×1254 to 512×512, 160×160 and 80×80; no crop

## Exploration prompt

```text
Asset: Little Valley Cards paper-test Place study for Valley Town. Moment: a small welcoming town square is immediately recognizable as the local trade and meeting landmark. Anchors: one pale-stone bell arch with no clock, one round clear-blue fountain directly below it, two compact coral-and-teal shopfront silhouettes framing a short cobbled lane. Visual hypothesis: a strong central town landmark distinct from Home, Mine, River and Sea at 80–160 px. Format: square 1:1, intended delivery at 512x512. Use deliberate hard-edged native pixel clusters, colored brown and blue-green outlines, roughly three values per material, high-key fresh color and compact cool-teal shadows. Keep the bell arch and fountain inside the central 80%; restrained greenery and sky; fully opaque square. Avoid: readable signs, text, letters, clocks, people, vehicles, UI, card frame, logo, watermark, dense street clutter, modern city elements, photorealism, painterly gradients, smooth vector edges, pure black universal outlines, sepia cast, transparency or broken edge artifacts.
```

## Review

- Fully opaque source.
- Bell arch + blue fountain remain the first two identity anchors at 80 px and 160 px.
- Town reads distinctly from Home/Mine because the composition is civic and symmetrical rather than domestic or natural.
- Shopfront detail supports place identity without requiring readable signage.
- Scene is denser than Mine Entrance; keep only as a paper-test study until find-target testing confirms the fountain/arch remain dominant in a full map.
- Decision: accepted by Codex under delegated review authority as a **paper-test study only**. Not canonical and not runtime approved.
