# Mine + Fishing square Area-tableau paper fixture v0.2

Ngày dựng và desk/mobile preflight: 2026-09-22.

Trạng thái: `[FIXTURE]` để kiểm shape, information hierarchy và comprehension. Không phải final UI, balance, content list, art approval hoặc runtime implementation. Chưa có participant data.

Fixture hiện thực [Mine & Fishing area-tableau contract 01](../../docs/MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md), [scrollable Area model 08](../../docs/SCROLLABLE-AREA-TABLEAU-MODEL-08.md) và [square-card decision 09](../../docs/ON-TABLE-CARD-SHAPE-DECISION-09.md).

## 1. Điểm khác v0.1

- Sáu on-table card đều square 1:1: `Rain Catch`, `Person Today`, `Current Frontier`, `Working Seam`, `Safe Tunnel`, `Veiled Vein`.
- `River Record` là horizontal status strip, không phải target.
- Mine `Depth / checkpoint` là horizontal status strip, không phải route card.
- Area header/background không có card border hoặc hit-target affordance.
- Card trong cùng Area dùng mobile two-column grid với gap nhỏ.
- Root card chỉ giữ name, 1–3 badge, short cost/progress và state; full rule chuyển sang detail panel/resolution sheet.
- `Scroll / focus / inspect = 0 AP` và `not travel` xuất hiện ở sticky instruction, Area copy và transition.

v0.1 vẫn được giữ nguyên làm audit trail cho portrait rule-text fixture.

## 2. Files

| File/folder | Vai trò |
| --- | --- |
| `boards/scroll-strip-start.png` | Full-size vertical start state (`1000x2320`) |
| `boards/scroll-strip-mobile-preview.png` | 50% mobile/desk preview (`500x1160`) |
| `boards/focus-detail-panels.png` | Six rectangular inspect panels với full fixture rules |
| `boards/resolution-outcomes.png` | Fishing/Mine before→after state sheet |
| `boards/printable-card-sheet.png` | Hai cột × ba hàng, chỉ sáu square cards để in/cắt |
| `boards/card-mobile-preview.png` | Sáu card tại logical `160x160` để kiểm recognition/badge |
| `cards/` | Sáu on-table cards riêng, mỗi file `400x400` |
| `build-fixture.sh` | Deterministic local rebuild từ existing study assets |

Art là placeholder paper-test:

- `Rain Catch` dùng River landmark study; exact Rain Eel identity nằm ở badge/detail.
- `Current Frontier`/`Safe Tunnel` dùng Mine landmark study; không biến Mine Entrance thành gateway card.
- `Working Seam` và `Veiled Vein` dùng stone studies để tách silhouette.
- `Person Today` dùng Mira Prototype 1 portrait; identity/roster không được promote.
- Không asset nào nhờ xuất hiện trong fixture mà trở thành canonical/runtime approved.

## 3. Setup

1. Mở hoặc in `scroll-strip-start.png`; giữ `focus-detail-panels.png` và `resolution-outcomes.png` riêng.
2. Nói: “Bạn có 3 AP. Vuốt, focus và inspect không tốn AP; chúng không phải travel. Chỉ commit vào square card hợp lệ mới đổi state.”
3. River đang Rain; Rain Catch và Person Today cùng active; River Record đang `1/2`.
4. Mine đang Depth 3, Working Seam ready; Safe Tunnel và Veiled Vein đều selectable.
5. Khi participant focus một card, đưa đúng detail panel rectangle; không coi panel là card mới trên bàn.

## 4. Task script

### Task A — Shape và target

Prompt: “Hãy chỉ mọi thứ bạn nghĩ là card có thể focus/target, rồi chỉ các phần chỉ là Area hoặc status.”

Expected:

- nhận sáu square cards là card;
- không target River/Mine background hoặc header;
- gọi River Record và Mine Depth/checkpoint là status, không action card;
- không tìm Fishing Spot/Mine Entrance gateway.

### Task B — Find versus act

Prompt: “Xem River, inspect Rain Catch, rồi xem Mine. Chưa commit.”

Expected:

- AP vẫn 3;
- participant dùng detail panel để đọc full rule;
- scroll/focus/inspect không được kể như movement/travel;
- River và Mine state không đổi.

### Task C — Fishing opportunity

Prompt: “Bạn muốn ghi Rain Eel hôm nay, nhưng Person Today cũng rời đi khi Sleep. Hãy nêu total cost/result trước khi commit và chọn.”

Nếu chọn Rain Catch:

- one atomic commit `Character + Rod + 2 AP`;
- Fresh Rain Eel +1; AP `3 → 1`;
- River Record `1/2 → 2/2` mà không consume Fish;
- Catch rời root tableau sau resolve;
- later Rain/cycle có thể tạo lại opportunity.

Nếu chọn Person, log reason; Rain Catch miss chỉ trì hoãn.

### Task D — Mine source versus progress

Reset start state hoặc dùng participant khác. Prompt: “Bạn có 2 AP dành được cho Mine; inspect rồi chọn action đầu.”

| Choice | Cost | Depth after | Known before commit | State after |
| --- | ---: | ---: | --- | --- |
| Working Seam | 1 AP | 3 | Ore +1 | Seam spent until refresh |
| Safe Tunnel | 1 AP | 4 | Stone +1 | Seam stays ready |
| Veiled Vein | 1 AP | 4 | Ore category | Exact Ore revealed; Seam ready |

Không route nào hidden-fail Depth.

### Task E — Leave and return

Sau một Mine action: “Scroll về River rồi quay lại Mine.”

Expected: 0 AP navigation; Depth/result/seam state giữ; không replay gateway; Current Frontier và Depth strip phản ánh state mới.

## 5. Log sheet

| Field | Cách ghi |
| --- | --- |
| `square_card_recognition` | số card square nhận đúng / 6 |
| `area_as_target` | target background/header |
| `status_as_target` | target Record hoặc Depth strip như action |
| `gateway_search` | tìm Entrance/Spot thừa |
| `two_column_scan_error` | bỏ sót card hoặc đọc sai group vì grid |
| `badge_recall` | nhớ đúng cost/progress/state trước detail |
| `detail_discovery` | tự mở/đọc detail để lấy full rule |
| `focus_cost_error` | trừ AP khi scroll/focus/inspect |
| `travel_language` | mô tả scroll như movement bắt buộc |
| `fishing_recurrence` | hiểu missed Catch quay lại theo condition/cycle |
| `mine_persistence` | hiểu Depth giữ qua Sleep/scroll/Area khác |
| `wrong_state_update` | cập nhật sai AP, item, record, Depth hoặc Seam |
| `explanation_request` | facilitator phải bổ sung rule ngoài printed artifact |

Không đặt pass threshold trước pilot.

## 6. Desk/mobile preflight

| Check | Result |
| --- | --- |
| Six on-table cards are exact squares | Pass (`400x400`) |
| Portrait primary card remains | Pass — none |
| Two-column density at 50% board scale | Pass for desk preflight; participant evidence open |
| Card silhouette distinct from Area/header/status strip | Pass visually; participant evidence open |
| Name + cost/progress + state survive at `160x160` | Pass for intended short labels; full rules correctly absent |
| Full rule available without root-card text wall | Pass via focus/detail panels |
| River Record and Mine Depth are horizontal status strips | Pass |
| Scroll/focus/inspect 0 AP and not travel are explicit | Pass |
| Fishing and all three Mine outcomes match start state | Pass |
| Rebuild gives identical PNG hashes | Pass |
| Participant comprehension | **Chưa có** |

## 7. Không được suy ra

- `3 AP`, Catch `2 AP`, Mine `1 AP`, mastery `1/2` và Depth `3` là fixture numbers.
- `160x160`, `400x400`, two-column gap và Area length không phải runtime size lock.
- Rain Eel, Mira và route names không phải canonical content.
- Desk/mobile render pass không phải player evidence.
- River/Mine order không phải geography, distance hoặc dependency.
- Square-card decision không tự quyết định Area phải vừa một viewport.
