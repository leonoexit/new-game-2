# Harvest Bench action study v0.1

- Purpose: test whether an active Character + mature crop + Harvest Bench composition resolves the informed-owner reading of the prior bench art as forage sitting on a table
- Status: `superseded`; rejected as an interaction direction, not canonical, not an approved reference, not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Rendering-language reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png`
- Prop-identity reference: `art/style-studies/project-harvest-bench-v0.1/processed/harvest-bench-512-v0.1.png`
- Source: `source/harvest-bench-action-source-v0.1.png`
- Delivery: `processed/harvest-bench-action-512-v0.1.png`
- Review previews: `processed/harvest-bench-action-preview-160-v0.1.png`, `processed/harvest-bench-action-preview-80-v0.1.png`
- Transformation: point-filter resize from 1254×1254 to 512×512, 160×160 and 80×80; no crop

## Exploration prompt

```text
Use case: stylized-concept
Asset: Little Valley Cards square card action-illustration study for the Harvest Bench interaction.
Input images: Image 1 is the active rendering-language reference only; Image 2 is the existing Harvest Bench prop-identity reference.
Moment: one farm character actively cuts mature crop stalks with a curved sickle beside the broad raised-back Harvest Bench, then places the gathered crop bundle into the bench-side slatted produce crate. The immediate verb must read as harvesting ready crops, not collecting forage from the tabletop.
Anchors: one clearly active character; one visibly mature crop patch being cut; the recognizable broad Harvest Bench and slatted crate as the action station.
Visual hypothesis: a diagonal action line from mature crops through the sickle/character to the bench crate will make Character + Harvest Bench → harvest ready crops readable at 160 px.
Format: fully opaque square 1:1 raster, intended delivery at 512x512.
Approved visual language: deliberate hard-edged native pixel clusters, shared subject/environment pixel scale, colored brown and blue-green outlines, roughly three values per material, high-key fresh palette, compact cool-teal shadows, restrained farm background.
Composition: keep character, sickle contact, mature crop patch, bench and crate within the central 80%; make the action larger and clearer than scenery.
Constraints: use Image 1 only for pixel construction, palette behavior, edge treatment and material language; preserve the bench silhouette from Image 2; original Little Valley Cards character design, no imitation of named games or copyrighted characters.
Avoid: produce sitting ambiguously as collectible forage on an unattended bench, idle pose, multiple characters, machinery, water containers, dense tools, text, numbers, progress bars, UI, card frame, logo, watermark, photorealism, painterly gradients, smooth vector edges, pure black universal outlines, sepia or vintage cast, transparency.
```

## Review

- Fully opaque square source; no crop required.
- At 160 px, the Character, sickle, mature crop patch and bench remain distinct. The action reads as harvesting crop beside a work station rather than collecting an unattended item from the tabletop.
- At 80 px, the action direction remains visible, but the bundle-in-hand and crate contents merge; the 80 px preview is a stress check, not the intended logical display size.
- The bench silhouette and bright farm rendering remain compatible with the two supplied references.
- Informed-owner review: rejected. The composition was read as a mandatory sickle requirement for a terminal crop state, a mechanic that is not established. All card text was read as meaningless and did not repair the false model.
- Decision: `superseded`. Retain as failed evidence; do not reuse or promote this direction.
