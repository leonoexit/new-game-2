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
| Play fixture | v0.2 failed action comprehension; v0.2.4 now has approved action art, square-target/status-strip separation and upper-corner signed AP | [v0.2 pilot](../paper-tests/mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md), [v0.2.4](../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md) |
| Global orientation | v0.3.4 accepted by informed owner: sticky Area index reads as UI focus, non-Mine synthetic state removed, Mine Depth retained, Weather moved to global scope | [v0.3.4](../paper-tests/orientation-area-tableau-v0.3.4/README.md) |
| Weather / Season global UI | v0.1 arm A accepted by informed owner: shallow always-visible Season + Today + Tomorrow + AP rail reads immediately and not as a playable target | [global UI v0.1](../paper-tests/weather-season-global-ui-v0.1/README.md) |
| Redundant gateways | Fishing Spot/Entrance only remain when they have their own verb/state | [Model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) |
| Historical spatial work | Model 07 and orientation v0.2 marked superseded for pilot | [Model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md), [v0.2](../paper-tests/orientation-explicit-surface-v0.2/README.md) |

## 3. Strongest current play grammar

### Fishing

Scroll/focus River for free, inspect exact Catch, then make one informed atomic commitment. Catch rotates with condition. River root không có Fish Record/status rail; collection/mastery chỉ quay lại ngoài tableau nếu nó tạo decision value. River là đủ cho minimum fixture. Lake/Coast chỉ thành Area riêng nếu chúng đổi decision dimension, không chỉ đổi fish list.

### Mine

Scroll/focus Mine for free, inspect the Depth/checkpoint rail and available actions. `Direct Descent` alone advances Depth and keeps the `DEPTH +1` tag; `Search Side Tunnel` reveals an Ore source without a redundant `DEPTH +0` tag; Character + Pickaxe into `Exposed Ore` yields Ore and spends the source. Checkpoints may change the action set, source state or context. Leaving the Area never resets Depth.

## 4. Failure conditions

- Scroll length affects AP/time/Energy.
- Player must play through Entrance/Spot gateway every visit without a meaningful state.
- Every Mine floor becomes a permanent root card.
- Every fish species stays permanently on the root tableau.
- Fishing and Mine both collapse to `spend AP → random resource`.
- Lake/Coast are added only as more names/art without a planning difference.

## 5. Orientation evidence result

Internal informed pilot trên v0.2 đã dừng ở Task B vì player phải dịch schema thành verb. Iteration qua v0.2.1–v0.2.3 sửa art và consequence; commitment check tiếp tục loại square status target và generic Tool. v0.2.4 đã pass deterministic render QA và informed-owner acceptance. Không có tester khác nên fresh-player evidence vẫn unavailable; product owner cho phép chuyển sang vertical Area-strip fixture với risk này được ghi rõ.

[Orientation v0.3.4](../paper-tests/orientation-area-tableau-v0.3.4/README.md) đã hoàn thành vertical sequence và informed-owner correction chain. Evidence hiện tại:

- sticky Area-name index cần ở bốn Area và đọc như UI focus/scroll, không phải movement;
- Home/Commerce/River tự giải thích từ card semantics, không cần synthetic Area-state line;
- Mine Depth/checkpoint là separate status duy nhất trong bốn Area;
- Weather/Season thuộc shallow always-visible global rail ngoài play tableau; Season + Today + Tomorrow + AP được đọc ngay và không bị hiểu như target;
- future card art có thể thay Season/Weather identity field nhưng không đổi global scope hoặc square-target contract;
- palette fields hỗ trợ Area identity; generated abstraction backgrounds là future art direction;
- three-target Home đọc như expansion capacity, không phải missing card.

Fresh-player onboarding/orientation risk vẫn open vì không có tester mới. Không dùng informed-owner acceptance như fresh-player pass.
