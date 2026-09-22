# Mine + Fishing target/cost fixture v0.2.4

Ngày dựng: 2026-09-22.

Trạng thái: `[CURRENT CORRECTIVE ROOT FIXTURE]`; deterministic render QA và informed-owner confirmation pass; fresh-player risk remains untested.

v0.2.4 responds to [informed commitment check 04](../mine-fishing-area-tableau-v0.2.3/pilot-results/informed-commitment-check-04.md). It preserves the four user-approved art references and changes only target taxonomy, commitment requirements and AP placement.

## Corrections

- `Mine State` is no longer a square card. Depth, persistence and checkpoint distance live in a horizontal non-target status strip.
- Every remaining square is a commitment target.
- AP cost moves to the upper-left art corner and uses signed spend notation.
- `Exposed Ore` requires Character + Pickaxe.
- `Direct Descent` and `Search Side Tunnel` require Character only in this fixture.
- Eel Sighting requires Character + Rod; Person Today requires Character + Gift Item.

## Root mapping

| Target | Commit | Cost | Consequence |
| --- | --- | ---: | --- |
| Eel Sighting | Character + Rod | -2 AP | gain Fresh Eel |
| Person Today | Character + Gift Item | -1 AP | resolve Heart |
| Exposed Ore | Character + Pickaxe | -1 AP | gain Ore; mark spent; Depth +0 |
| Direct Descent | Character | -1 AP | Depth +1; no item |
| Search Side Tunnel | Character | -1 AP | Depth +0; reveal Ore source |

`0 AP` belongs to scroll/focus/inspect UI. This fixture contains no zero-cost square action, so no square prints `0 AP`.

## Package

- `boards/commitment-test-board.png` — five targets, Mine status strip and loose proxies
- `boards/scroll-strip-start.png` — corrected vertical River/Mine root tableau
- `boards/scroll-strip-mobile-preview.png` — phone-scale navigation view with equal-size Mine targets
- `cards/*.png` — five `400x400` root targets
- `build-fixture.sh` — deterministic builder based on v0.2.3 assets

## Evidence boundary

This is an informed-owner correction. [Confirmation 05](pilot-results/informed-correction-confirmation-05.md) accepts the target/cost hierarchy. Consequence comprehension remains untested in check 04, and no fresh-player evidence exists. Art approval remains valid and separate from this UI correction.

Tag vocabulary is intentionally deferred. The owner observed inconsistent/redundant tags but judged them non-blocking because title + art already self-explain the current targets. Do not expand tags pre-emptively; revise only if a later task exposes a concrete misunderstanding.

| Check | Result |
| --- | --- |
| Five square targets | Pass |
| Mine state as non-target strip | Pass |
| Signed AP in upper-left corner | Pass |
| Specific Pickaxe mapping | Pass |
| Equal-size Mine targets | Pass |
| Byte-identical rebuild | Pass |
| Informed owner acceptance | Pass |
| Fresh-player comprehension | Open / unavailable |
