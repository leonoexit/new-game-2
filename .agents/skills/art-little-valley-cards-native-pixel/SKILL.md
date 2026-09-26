---
name: art-little-valley-cards-native-pixel
description: Revisit Little Valley Cards' earlier native-pixel art language for explicit comparison or maintenance of legacy assets. MBE is the approved direction for new production art.
---

# Little Valley Cards Pixel Art

Maintain or compare the earlier native-pixel card artwork. The owner approved the MBE direction for new production art on 2026-09-26; this skill remains for explicit native-pixel studies and legacy asset maintenance. The action must read at phone size before detail or beauty.

## Read project context

Before art work, read the relevant records under `art/`, then `references/prompt-system.md` when generating or editing and `references/asset-records.md` when saving, naming, approving or superseding an asset.

The historical native-pixel reference is stored inside this skill at [native-pixel reference](assets/native-pixel-reference.png). It controls pixel construction when this older direction is specifically requested. It does not import characters or narrative from the previous project.

## Operating modes

### Explore

Use while action composition, crop presentation or NPC identity is unresolved.

- Generate one study at a time unless the user requests a comparison.
- Change one visual variable per comparison.
- Start from one verb, one target and two or three visual anchors.
- Save outside `approved/`.
- Stop for user review before expanding a batch.

### Direction lock

Use when one study is promising enough to reproduce.

- Identify observable properties: crop, camera, focal hierarchy, pixel scale, color behavior and density.
- Test the direction on one second action before declaring it stable.
- Record both successful properties and prohibited drift.
- Require explicit user approval before changing canonical direction.

### Legacy production maintenance

Use only for existing native-pixel assets or an explicitly requested comparison. New MBE assets follow the separate `art-little-valley-cards-mbe` skill.

- Treat approved references as invariants.
- Review at the actual logical display size.
- Save source, delivery asset, prompt, references, tool/model, date and review status.
- Only `runtime approved` art may be referenced by the playable build.

## Slot contract

- Every raster artwork used inside any card is square `1:1`, delivered at `512x512`.
- The same contract applies to Action, Opportunity, Plot, Crop, Person, Place, Tool, Object, Living and Memory art.
- Review at the actual square card slot and at `160x160` logical size.
- Historical rectangular assets may remain as records, but never reuse them in a new card or crop them with `object-fit` to conceal the mismatch.

The UI owns the portrait `5:7` card frame. Artwork owns one square window inside that frame. Treat this division as a production invariant, not a per-asset choice.

## Project invariants

- Native pixel construction with deliberate hard-edged clusters; never pixel-filtered painterly art.
- High-key fresh palette, colored outlines and compact cool-teal shadows.
- Roughly three clear values per material.
- One immediate action and one readable focal target per action illustration.
- Card frames, titles, costs, buttons, progress and targeting feedback are rendered by UI.
- No generated text, logos, card borders, speech bubbles or interface controls.
- No imitation of named games, artists, copyrighted characters or proprietary assets.
- Reuse artwork across states when UI overlays can communicate the difference.

## Review gate

Judge every candidate on:

1. **Verb:** Is the action immediate without reading the card title?
2. **Target:** Is it clear what the action affects?
3. **Phone readability:** Does it work in the actual square slot and at `160x160`?
4. **Density:** Is every visible object helping the verb, target or world identity?
5. **Continuity:** For historical native-pixel assets, does it match their established pixel scale, materials and color behavior?
6. **Originality:** Does it feel native to Little Valley Cards?
7. **Production fit:** Can this treatment repeat across the whole action library?

Label every output `study`, `candidate`, `approved reference`, `runtime approved` or `superseded`. Beauty alone is not approval.
