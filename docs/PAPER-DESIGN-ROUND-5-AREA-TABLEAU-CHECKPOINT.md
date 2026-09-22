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
| Mine | Persistent state + separate progress/discovery/extraction actions | [Mine/Fishing contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) |
| Card shape | Square 1:1 on-table cards; rectangle reserved for focus/detail UI; status kept as strips | [decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md) |
| Play fixture | v0.2 failed action comprehension; v0.2.3 replaces landmark/object placeholders with reviewed Mine action art and corrected state consequences | [v0.2 pilot](../paper-tests/mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md), [v0.2.3](../paper-tests/mine-fishing-area-tableau-v0.2.3/README.md) |
| Redundant gateways | Fishing Spot/Entrance only remain when they have their own verb/state | [Model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) |
| Historical spatial work | Model 07 and orientation v0.2 marked superseded for pilot | [Model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md), [v0.2](../paper-tests/orientation-explicit-surface-v0.2/README.md) |

## 3. Strongest current play grammar

### Fishing

Scroll/focus River for free, inspect exact Catch, then make one informed atomic commitment. Catch rotates with condition; record/mastery persists. River is enough for the minimum fixture. Lake/Coast should only become separate Area tableaus if they change a decision dimension, not merely the fish list.

### Mine

Scroll/focus Mine for free, inspect Mine State and available actions, then play Character + Tool into one action. `Direct Descent` alone advances Depth; `Search Side Tunnel` keeps Depth and reveals an Ore source; `Exposed Ore` keeps Depth, yields Ore and becomes spent. Checkpoints may change the action set, source state or context. Leaving the Area never resets Depth.

## 4. Failure conditions

- Scroll length affects AP/time/Energy.
- Player must play through Entrance/Spot gateway every visit without a meaningful state.
- Every Mine floor becomes a permanent root card.
- Every fish species stays permanently on the root tableau.
- Fishing and Mine both collapse to `spend AP → random resource`.
- Lake/Coast are added only as more names/art without a planning difference.

## 5. Next evidence gate

Internal informed pilot trên v0.2 đã dừng ở Task B vì player phải dịch schema thành verb. Informed iteration qua v0.2.1–v0.2.2 xác nhận text không thay được action art và loại hai consequence sai: descent không tự cho Stone; side-tunnel search không tăng Depth. Correction v0.2.3 đã pass deterministic render QA; bước kế là xem assembled fixture rồi chạy một fresh-participant comprehension pilot. Chưa có new-player data và chưa được gọi gate pass.

Sau đó build orientation v0.3 như một vertical sequence của tight Area tableaus thay vì map comparison.
