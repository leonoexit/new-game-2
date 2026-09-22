# Paper design round 5 checkpoint — abstract Area tableaus

Ngày: 2026-09-22.

Phạm vi: sửa world presentation từ spatial surface thành scrollable abstract Area tableaus, rồi định hình play grammar cho Mine và Fishing. Không code/runtime prototype và không chốt balance/content count.

## 1. User clarification carried as product direction

- Game không có map.
- Scroll chỉ để tìm Area khác và chơi card ở đó; scroll không phải movement/travel.
- Card cùng Area dùng chung visual language và đặt khít thành một tableau.
- Area có thể scope presentation/rule nhưng không mặc định là card, box hoặc action target.

## 2. Result

| Workstream | Result | Evidence |
| --- | --- | --- |
| World presentation | Spatial model retired; vertical abstract Area strip adopted | [Model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) |
| Fishing | Face-up exact Catch + informed atomic commitment + record/mastery | [Mine/Fishing contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) |
| Mine | Persistent Current Frontier + deterministic Depth + route/checkpoint choices | [Mine/Fishing contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) |
| Redundant gateways | Fishing Spot/Entrance only remain when they have their own verb/state | [Model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) |
| Historical spatial work | Model 07 and orientation v0.2 marked superseded for pilot | [Model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md), [v0.2](../paper-tests/orientation-explicit-surface-v0.2/README.md) |

## 3. Strongest current play grammar

### Fishing

Scroll/focus River for free, inspect exact Catch, then make one informed atomic commitment. Catch rotates with condition; record/mastery persists. River is enough for the minimum fixture. Lake/Coast should only become separate Area tableaus if they change a decision dimension, not merely the fish list.

### Mine

Scroll/focus Mine for free, inspect Current Frontier and available routes, then play Character + Tool into a route. Depth always advances on baseline Descend; route changes optional output. Checkpoints alternate source, rule-band and branch/context changes. Leaving the Area never resets Depth.

## 4. Failure conditions

- Scroll length affects AP/time/Energy.
- Player must play through Entrance/Spot gateway every visit without a meaningful state.
- Every Mine floor becomes a permanent root card.
- Every fish species stays permanently on the root tableau.
- Fishing and Mine both collapse to `spend AP → random resource`.
- Lake/Coast are added only as more names/art without a planning difference.

## 5. Next evidence gate

Build a compact Mine/Fishing paper fixture showing:

- one Rain Catch versus an outside opportunity;
- one Mine state at Working Seam with source-vs-depth choice;
- one scroll/focus instruction explicitly costing 0 AP;
- state before/after resolution;
- a short comprehension log for Catch recurrence, Mine persistence and exact action target.

After that, build orientation v0.3 as a vertical sequence of tight Area tableaus rather than a map comparison.
