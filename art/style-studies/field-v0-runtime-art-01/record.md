# Field V0 runtime art 01

- Purpose: show the starting `Empty Soil` and `Field Rock` states clearly in the playable Field tableau.
- Status: `runtime approved` for this V0 prototype after 512×512 and 160×160 inspection on 2026-09-26; not a canonical illustration for later production.
- Tool: built-in `image_gen`; model metadata and seed unavailable.
- Approved style reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png`. It controls native pixel construction, palette, edge treatment and material language, not scene content.
- Source: `source/empty-soil-source-v0.1.png`, `source/field-rock-source-v0.1.png` (square generation outputs).
- Delivery: matching `processed/*-512-v0.1.png`; ImageMagick point-filter resize to exactly 512×512, no crop. Matching `*-preview-160-v0.1.png` files are the phone-size review.
- Runtime copies: `prototype/assets/empty-soil-512-v0.1.png` and `prototype/assets/field-rock-512-v0.1.png`.

## Final prompts

**Empty Soil:** “Create a square native pixel-art illustration for a farming card named Empty Soil. Show one vacant rectangular patch of bare brown earth in the center, surrounded by bright spring grass. The ground is smooth and unworked, with no furrows, weeds, stones, seeds, tools, hands or crops. Mild elevated three-quarter camera. Simple, clean, solid opaque background across the entire square. Large readable silhouette at phone size. Deliberate pixel clusters, crisp edges, cheerful bright palette, cool teal shadows. No sky, no transparencies, no visual glitches, no text, borders, icons or UI.” No image input; style reference used in the subsequent visual review.

**Field Rock:** “Production card artwork for Little Valley Cards: FIELD ROCK blocking one of eight plots on the player's home farm. One large grey stone with a few smaller attached stones set in short grass, clearly the obstruction that a hoe will clear. Slightly raised three-quarter view, stone centered and filling most of the frame, silhouette legible at 160 px. Use the attached approved farm reference only for native hard-edged pixel cluster construction, bright high-key colors, colored outlines, compact cool teal shadows and material language. Create original square 1:1 raster art, no water, no loose collectible item, no tools, hands, crops, text, logos, UI or card frame. Output should be suitable for point resizing to 512x512.” Image input: approved farm style reference.

## Review

- Keep: empty plot reads as clearable/plantable land; rock reads as a persistent obstacle. Both stay legible at 160 px and use full square artwork without cropping.
- Reject: two earlier Empty Soil outputs had broken black/cyan areas. They remain outside the project and are not referenced at runtime.
- Approval: Codex applied the project's existing delegated prototype-art review authority. A later art pass may supersede either asset.

## Reused art in the same Field presentation

The playable build copies these already runtime-approved square assets from `art/style-studies/prototype3-square-card-art-v0.1/processed/`: `forgotten-garden-512-v0.1.png` for Overgrown Soil, `turned-garden-512-v0.1.png` for Tilled Soil, and `young-bean-trellis-512-v0.2.png` for growing Runner Bean only. No plant-specific art is applied to a different species or mature state.
