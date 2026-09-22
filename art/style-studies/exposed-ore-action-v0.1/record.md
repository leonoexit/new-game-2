# Exposed Ore action study v0.1

- Purpose: test whether Mine source art communicates the immediate verb `mine exposed Ore` without relying on the card title
- Status: `approved reference` for Mine action-art direction; not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Rendering reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — pixel construction, color behavior, edge treatment and material language only
- Source: `source/exposed-ore-action-source-v0.1.png` (`1254x1254`)
- Delivery study: `processed/exposed-ore-action-512-v0.1.png`
- Logical-size review: `processed/exposed-ore-action-preview-160-v0.1.png`
- Transformation: point-filter resize to exact `512x512` and `160x160`; no crop; volatile PNG metadata stripped

The project-level `STYLE.md` and `little-valley-cards-art-bible-v0.1.md` referenced by the local skill were not present in this repository. This asset therefore uses the active approved rendering reference plus existing asset records. The user explicitly approved the resulting image direction on 2026-09-22.

## Exploration prompt

```text
Use case: stylized-concept. Asset: Little Valley Cards paper-test square action illustration for mining Exposed Ore. Moment: one iron pickaxe is visibly mid-swing at the instant its head strikes a pale blue-gray ore vein embedded in an interior mine wall; a few chunky stone chips fly from the exact contact point. Anchors: diagonal pickaxe with the striking head fully visible, one bright continuous ore seam as the unmistakable target, one restrained timber mine brace in the background. Visual hypothesis: tool-to-target contact reads before scenery at 160x160, so the verb is clearly mining rather than holding or collecting a loose rock. Format: square 1:1, intended delivery at 512x512. Style: deliberate hard-edged native pixel clusters, coherent chunky pixel scale, high-key fresh palette, colored brown/blue-green outlines, roughly three values per material, compact cool-teal shadows, clear central focal hierarchy. Keep the action and target in the central 80 percent with restrained cave detail. Avoid: a hand merely holding a stone, loose inventory item presentation, mine entrance exterior, full character body, multiple tools, combat, monsters, text, numbers, UI, card frame, logo, watermark, photorealism, painterly gradients, smooth vector edges, black universal outlines, heavy dithering, dark muddy scene.
```

## Pre-review

- Verb: pickaxe-to-vein contact is immediate at `512x512` and remains legible at `160x160`.
- Target: the bright continuous vein reads before secondary cave props.
- Density: timber brace and lantern establish Mine context without competing with the strike.
- Correction from placeholder: depicts mining in progress, not a hand holding a loose stone.
- Continuity: pixel clusters, colored outlines and cool-teal cave shadows are compatible with the active reference; the user approved this result as a future art reference.
- User review: approved verb readability on 2026-09-22 — the image communicates “use a pickaxe to mine the ore vein” without text.
- User correction: because art already carries the verb, the card-bottom CTA is redundant; that line should describe the mechanical consequence/trade-off instead.
- Approval decision: explicitly approved by the user on 2026-09-22 as one of the reviewed Mine/Fishing images.
- Direction status: approved reference. The same first-person action grammar was reproduced on Direct Descent and Search Side Tunnel; runtime use still requires a separate slot/integration decision.
