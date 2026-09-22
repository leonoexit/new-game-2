# Hidden Ore Route action study v0.1

- Purpose: test whether a side-context action communicates `search/reveal Ore` and remains distinct from Direct Descent and Exposed Ore
- Status: `approved reference` for Search Side Tunnel action art; not runtime approved
- Generation date: 2026-09-22
- Tool/model: built-in `image_gen`; model metadata unavailable
- Direction inputs: [Exposed Ore v0.1](../exposed-ore-action-v0.1/record.md) and [Safe/Direct Descent v0.1](../safe-descent-action-v0.1/record.md) — first-person action contact, one focal target, restrained Mine context
- Rendering reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — pixel construction, color behavior, edge treatment and material language only
- Source: `source/hidden-ore-route-action-source-v0.1.png` (`1254x1254`)
- Delivery study: `processed/hidden-ore-route-action-512-v0.1.png`
- Logical-size review: `processed/hidden-ore-route-action-preview-160-v0.1.png`
- Transformation: point-filter resize to exact `512x512` and `160x160`; no crop; volatile PNG metadata stripped

## Exploration prompt

```text
Use case: stylized-concept. Asset: Little Valley Cards paper-test square action illustration for a Hidden Ore Route in the Mine. Moment: from a first-person view, one gloved hand extends a warm lantern into a darker lower side tunnel; the new light reveals only part of a blue-violet ore vein glinting in the rock, while the edge of a descending timber rung remains visible behind the hand. Anchors: lantern light actively contacting the dark wall, a half-revealed ore seam as the uncertain target, one lower ladder/rung cue showing this route also goes deeper. Visual hypothesis: investigate-and-reveal Ore reads immediately at 160x160 and feels clearly different from direct ladder descent and from striking exposed Ore. Format: square 1:1, intended delivery at 512x512. Style: deliberate hard-edged native pixel clusters, coherent chunky pixel scale, high-key fresh palette with a readable dark-to-lit contrast, colored brown/blue-green outlines, roughly three values per material, compact cool-teal shadows, simple focal hierarchy. Keep hand, lantern beam and revealed vein in the central 80 percent with restrained cave detail. Avoid: exterior mine entrance, pickaxe striking the vein, loose inventory stone, fully exposed obvious Ore wall, full character body, monsters, combat, collapse, danger symbols, text, arrows, numbers, UI, card frame, logo, watermark, photorealism, painterly gradients, smooth vector edges, universal black outlines, heavy dithering, muddy darkness.
```

## Pre-review

- Verb: lantern is actively extended toward the wall; the focal result is newly visible Ore.
- Target: bright blue-violet crystals read at `160x160` before the surrounding tunnel.
- Difference: no pickaxe strike and no direct ladder step; light/reveal is the unique action cue.
- Known limitation: the generated Ore is more fully visible than the prompt's “half-revealed” target, so uncertainty may depend on the rule description even if the search/reveal verb reads.
- User review: the art clearly communicates searching/revealing Ore and is distinct from both mining and descending.
- Semantic correction: participant reads this as entering a side space on the same level, not going deeper. `Depth +1` therefore conflicts with the art and must be removed.
- Fixture role: reuse as `Search Side Tunnel`: pay AP, keep Depth, reveal an Ore source. The follow-up Exposed Ore card handles extraction.
- Approval decision: explicitly approved by the user on 2026-09-22 as one of the reviewed Mine/Fishing images.
- Direction result: approved reference for the first-person search/reveal treatment. Together, the three Mine images establish a repeatable action-art grammar; none is runtime approved.
