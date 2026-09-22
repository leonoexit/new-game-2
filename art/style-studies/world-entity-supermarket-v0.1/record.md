# Supermarket world-entity study v0.1

- Status: `study` — accepted for the explicit-surface paper fixture only; not canonical or runtime-ready.
- Generated: 2026-09-22
- Purpose: test a square, direct Buy/Sell target embedded on the continuous world surface without requiring a `Town` card or Area container.
- Active style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png`
- Generation tool: built-in `image_gen`; model and seed metadata were not exposed.

## Files

- Source: `source/supermarket-source-v0.1.png` (`1254x1254`, opaque RGB)
- Delivery study: `processed/supermarket-512-v0.1.png` (`512x512`, opaque RGB)
- Review previews: `processed/supermarket-preview-160-v0.1.png` and `processed/supermarket-preview-80-v0.1.png`
- Transform: point-filter resize from the untouched generated source; no repainting, crop, or compositing.

## Exact prompt

> Asset: Little Valley Cards paper-test square world-entity study for a Supermarket. Moment: a small permanent rural supermarket stands open as a direct Buy/Sell target on the continuous world surface. Anchors: one compact cream-plaster storefront, open teal double doors, a coral fabric awning with two seed sacks and one wooden produce crate outside. Visual hypothesis: a single unmistakable commerce-building silhouette that remains readable at 80–160 px without needing a Town card or readable sign. Format: square 1:1, intended delivery at 512x512. Use deliberate hard-edged native pixel clusters, colored brown and blue-green outlines, roughly three values per material, high-key fresh palette and compact cool-teal shadows. Keep the full storefront inside the central 80%; fully opaque square; only a narrow cobbled path and restrained greenery around it. Avoid: readable text, signs, letters, prices, people, market stall, surrounding town block, card border, UI, logo, watermark, dense merchandise, photorealism, painterly gradients, smooth vector edges, pure black universal outlines, sepia cast, transparency or broken edge artifacts.

## Review

- The storefront, open doors, coral awning, and exterior goods remain legible at both 160 px and 80 px.
- The image reads as one permanent commerce destination, so the interactive target can be `Supermarket` directly; no `Town` entity is needed.
- The distant building, hills, and water are contextual scenery only and do not commit the world layout or create additional hit targets.
- Buy/Sell actions, stock, prices, labels, and card chrome remain owned by UI or the paper fixture rather than the art.
- Accepted as a paper-test study. Any canonical/runtime use still requires a separate approval pass.
