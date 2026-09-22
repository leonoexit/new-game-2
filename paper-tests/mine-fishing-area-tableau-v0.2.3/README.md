# Mine + Fishing action-art fixture v0.2.3

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED CORRECTIVE FIXTURE]`; action/target art evidence remains valid. [v0.2.4](../mine-fishing-area-tableau-v0.2.4/README.md) supersedes its square state card, generic Tool mapping and bottom-row AP placement.

v0.2.3 integrates three user-approved Mine action-art references and the information-hierarchy corrections from [internal iteration check 02](../mine-fishing-area-tableau-v0.2.2/pilot-results/internal-iteration-check-02.md). That review is informed design-owner evidence, not a fresh-player pass.

## 1. Current root grammar

```text
title = identity/context
art = immediate action, or the visible target on an opportunity card
tags = cost, state change, readiness/condition
description = consequence/trade-off; never a redundant CTA
```

## 2. Corrected Mine choice

| Root card | What art shows | Tags | Description/outcome |
| --- | --- | --- | --- |
| Mine State | persistent context | Depth 3 · persists | choose one action below |
| Exposed Ore | pickaxe strikes vein | 1 AP · Depth +0 · ready | gain Ore; mark source spent |
| Direct Descent | boot descends supported ladder | 1 AP · Depth +1 · no yield | advance Current Frontier |
| Search Side Tunnel | lantern reveals Ore in lateral tunnel | 1 AP · Depth +0 · reveal | reveal an Ore source; do not gain it yet |

This is progress versus discovery versus extraction. `Search Side Tunnel` no longer claims `Depth +1`, because the reviewed art reads as a same-level side context. `Direct Descent` no longer grants unexplained Stone.

## 3. Fishing opportunity correction

The root card is `Eel Sighting`, not an already-owned Eel and not a generic spot that requires a free reveal click. Day/weather setup exposes the opportunity automatically. Art shows one living Eel visible below the rainy River surface; the player then stacks Character + Rod and pays the shown cost to gain `Fresh Eel`. `RAIN` is the condition; River is already supplied by the Area context.

## 4. Art status

The fixture references four user-approved art references:

- [Exposed Ore action v0.1](../../art/style-studies/exposed-ore-action-v0.1/record.md)
- [Direct Descent action v0.1](../../art/style-studies/safe-descent-action-v0.1/record.md)
- [Search Side Tunnel action v0.1](../../art/style-studies/hidden-ore-route-action-v0.1/record.md)
- [Eel Sighting opportunity v0.1](../../art/style-studies/eel-sighting-opportunity-v0.1/record.md)

The images are approved references for continued art production. They are not runtime approved, and their mechanics/content labels remain fixture values.

## 5. Retest

Show `boards/card-mobile-preview.png` without detail panels and ask:

1. What action does each image suggest?
2. Which information is state/cost rather than action?
3. What is the difference among the three Mine actions?
4. Does any description merely repeat what the art already says?

Then show one detail panel and ask the participant to resolve it in order.

## 6. Package and QA

Includes full/mobile start strips, six `400x400` cards, `160x160` preview, a commitment test board with loose proxies, ordered detail panels, corrected resolution sheet, printable sheet and deterministic builder.

| Check | Result |
| --- | --- |
| Six square cards | Pass |
| Three Mine verbs distinct at `160x160` | Pass visually and in informed art review |
| Eel visible before Rod commit at `160x160` | Pass visual preflight; participant confirmation open |
| Cost/state in tags | Pass |
| Bottom line is consequence/trade-off | Pass |
| Detail/outcome state updates agree | Pass |
| Byte-identical rebuild | Pass |
| Assembled-fixture informed owner confirmation | **Pass** |
| Fresh participant comprehension | **Open** |

All costs/names/rewards remain fixture values. The four reviewed images are approved art references; no image is runtime approved and no fixture content is canonical.
