# Mine + Fishing plain-language action fixture v0.2.2

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED CORRECTIVE FIXTURE]`; deterministic render QA complete. [v0.2.3](../mine-fishing-area-tableau-v0.2.3/README.md) supersedes the old Mine consequences and placeholder art.

v0.2.2 follows [v0.2.1 internal iteration check](../mine-fishing-area-tableau-v0.2.1/pilot-results/internal-iteration-check-01.md). It keeps the same mechanics and square/action-first hierarchy, but removes designer-language nouns from the root surface.

## 1. User-facing labels

| Design concept | Root label | Immediate action/difference |
| --- | --- | --- |
| Rain Catch | `Rain Eel` | `Catch with Rod`; 2 AP → Eel |
| Person Today | `Person Today` | Give a Gift before Sleep |
| Current Frontier | `Mine Depth` | State only; choose a Mine action |
| Working Seam | `Exposed Ore` | Mine Ore; Depth does not change |
| Safe Tunnel | `Safe Descent` | Depth +1; known Stone |
| Veiled Vein | `Hidden Ore Route` | Depth +1; reveal unknown Ore |

The design-concept names remain in docs/audit history; players do not need to learn mining jargon to choose an action.

## 2. Retest question

Show `boards/card-mobile-preview.png` only:

> “What does each card do? What is the difference among the three Mine actions?”

Success is not exact wording. Look for these distinctions without detail-panel translation:

- Fish action uses a Rod, costs AP and gains the shown fish.
- Mine Depth is state-only.
- Exposed Ore gives Ore without increasing Depth.
- Safe Descent increases Depth and gives known Stone.
- Hidden Ore Route increases Depth and reveals uncertain Ore.

Then show one detail panel and ask participant to resolve the chosen action in order.

## 3. Files and QA

The package contains six `400x400` cards, full/mobile start strips, `160x160` card preview, action-step detail panels, corrected outcome sheet, printable sheet and deterministic builder.

| Check | Result |
| --- | --- |
| Square dimensions | Pass |
| Root labels use ordinary language | Pass visually |
| Rod visible as rule cue | Pass via badge/detail text |
| Three Mine choices state different outcomes | Pass visually |
| Detail steps match outcome sheet | Pass |
| Byte-identical rebuild | Pass |
| Participant distinction check | **Open** |

No name, AP cost, reward or placeholder art is promoted to canonical/runtime content.
