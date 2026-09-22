# Mine Entrance landmark study v0.1

- Purpose: square Place token for Home-middle vs Home-at-top paper orientation test
- Status: `study`; not canonical, not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — native-pixel construction, high-key palette, colored outlines and material language only
- Source v0.1: `source/mine-entrance-source-v0.1.png`
- Source v0.2: `source/mine-entrance-source-v0.2.png`
- Current delivery: `processed/mine-entrance-512-v0.2.png`
- Review previews: `processed/mine-entrance-preview-160-v0.2.png`, `processed/mine-entrance-preview-80-v0.2.png`
- Transformation: point-filter resize from 1254×1254 to 512×512, 160×160 and 80×80; no crop

## v0.1 exploration prompt

```text
Asset: Little Valley Cards paper-test Place study for a Mine Entrance. Moment: a quiet, clearly usable mine entrance opens at the base of a sunny valley mountain. Anchors: one dark arched opening with chunky timber supports, one pale gray stone outcrop, a short warm dirt approach path. Visual hypothesis: an unmistakable landmark silhouette that reads as Mine at 80–160 px while matching the approved bright native-pixel world. Format: square 1:1, intended delivery at 512x512. Use deliberate hard-edged native pixel clusters, colored brown and blue-green outlines, roughly three values per material, a high-key fresh palette, warm rock light and compact cool-teal shadows. Keep the entrance and path inside the central 80%; restrained background only. Avoid: people, carts, combat, monsters, danger signs, text, letters, UI, card frame, logo, watermark, photorealism, painterly gradients, smooth vector edges, dense cave detail, pure black universal outlines, sepia cast, heavy dithering.
```

## v0.1 review

- Pass: Mine verb/place identity is immediate; dark arch, timber frame and approach path survive at 160 px.
- Fail: top/corners contain transparent and near-transparent pixels, producing black/yellow edge artifacts against some preview backgrounds.
- Decision: rejected as delivery; retained as historical source.

## v0.2 correction prompt

```text
Edit the Mine Entrance study while preserving its central timber-framed dark arch, pale stone outcrop, short dirt approach path, bright native-pixel construction, palette, pixel scale, focal hierarchy and square 1:1 composition. Correct exactly one failure: replace every transparent or near-transparent pixel along the top and corners with a fully opaque, clean powder-blue sky and simple pale mountain/cloud background continuous with the existing scene. The entire square must be fully opaque with no black gaps, alpha holes, yellow edge artifacts or broken top border. Keep the Mine entrance unmistakable at 80–160 px. Do not add people, carts, text, UI, card frame, logo, watermark, dense cave detail, photorealism, smooth gradients or new focal props.
```

## v0.2 review

- Alpha is fully opaque (`min = max = 65535`).
- Mine Entrance remains the dominant silhouette at 80 px and 160 px.
- Central arch/path reads before mountain/tree decoration.
- Native-pixel scale, high-key palette, colored outlines and cool shadows remain compatible with the approved rendering reference.
- Extra barrels/logs are secondary and do not obscure the landmark, but should not be read as required Mine mechanics.
- Decision: accepted by Codex under delegated review authority as a **paper-test study only**. Not a canonical location reference and not eligible for runtime use without a later approval step.
