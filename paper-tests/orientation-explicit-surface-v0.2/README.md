# Orientation paper-test kit v0.2 — continuous explicit surface

Ngày dựng và preflight: 2026-09-22.

Trạng thái: `[SUPERSEDED FIXTURE]`; không phải UI prototype, current pilot, topology decision, canonical world map, art approval hay runtime approval.

> **SUPERSEDED FOR PILOT — 2026-09-22.** Fixture này vẫn tạo cảm giác bản đồ bằng terrain, path và world coordinates. Clarification hiện hành là [scrollable abstract-area tableau model 08](../../docs/SCROLLABLE-AREA-TABLEAU-MODEL-08.md): scroll là navigation UI, không phải movement hoặc geography. Giữ v0.2 làm audit trail/art study; không chạy participant pilot. Fixture kế tiếp phải là v0.3 area-tableau strip.

Kit này từng thay v0.1 trong spatial-surface pass. Nó áp dụng [Continuous-world explicit-surface model 07](../../docs/CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md), nay cũng đã superseded.

## 1. Representation contract

- Không có Area box/container.
- Không có card `Home`, `Town`, `River`, `Mountain` hoặc `Coast`.
- `River`, mountain ridge, path và coast được vẽ trực tiếp vào continuous background.
- `Town` không phải node, card, hit target hay dependency. Fixture cố ý không hiện label Town; commerce được target bằng `Supermarket` chính xác.
- `House` là entity vì fixture giả định nó có Sleep/Storage và là camera anchor; nó không đại diện cho Home Area.
- `Fishing Spot` là entity nằm trên river terrain; river tự nó không phải card.
- `Person Today` là active context bên cạnh `Supermarket`; announcement phải nói đúng entity, không nói “ở Town”.
- Border và label trên entity là paper-test overlay. Geography labels là annotation mờ trên nền, không phải game object.

## 2. Câu hỏi duy nhất

Với cùng entity, geography, task và House anchor, người mới hiểu/nhớ world hai phía của house/farm cluster (`M`) tốt đến đâu so với world khám phá chủ yếu theo một hướng (`T`)?

- `[HYPOTHESIS]` `M` giữ house/farm cluster như geographic hub nhưng có thể gây wrong-direction search.
- `[HYPOTHESIS]` `T` dễ dạy “đi xuống để khám phá” nhưng có thể đọc như một feed tuyến tính.
- `[DIRECTION]` Counterbalance thứ tự arm giữa participant; không đổi economy, AP, target identity hay asset.

## 3. Thành phần kit

| File/folder | Vai trò |
| --- | --- |
| `boards/house-farm-middle-board.png` | Full-size fixture M (`1000x1720`) |
| `boards/house-farm-top-board.png` | Full-size fixture T (`1000x1720`) |
| `boards/topology-comparison.png` | Desk comparison; không cho participant xem trước test |
| `boards/interaction-token-sheet.png` | Project và Fresh/Processed source để in/cắt |
| `entities/` | Chín gameplay-meaningful entity card, cùng set ở cả hai arm |
| `interaction-tokens/` | Source/target token riêng cho task |
| `build-fixture.sh` | Rebuild deterministic board/entity/token fixture từ source study hiện có |

Entity set cố định ở cả M/T:

1. House
2. Farm Plot
3. Supermarket
4. Person Today
5. Fishing Spot
6. Mine Entrance
7. Water Trough
8. Footbridge
9. Harvest Bench

M và T chỉ đổi world coordinates của chín entity trên cùng loại continuous surface.

## 4. Setup cố định

1. In board ở cùng kích thước hoặc mở từng board ở cùng zoom.
2. Che board còn lại và comparison sheet.
3. Cho participant thấy `HOUSE ANCHOR` trong toàn bộ task; nói rõ đây là camera focus miễn phí, không phải travel action hay Area card.
4. Đặt carried-source area cạnh board; source đã chọn không cần drag xuyên cả board.
5. Dùng cùng task prompt, item foil, entity state và Project requirement giữa hai arm.
6. Không giải thích “Town” và không gọi cluster quanh Supermarket là một node.
7. Không giải thích topology trước; chỉ đọc task prompt.

Opening focus ở cả hai arm là `House + Farm Plot`.

## 5. Bốn task

1. **Sunny source loop:** lấy `Fresh Shortroot` từ `Farm Plot`, mang tới `Supermarket`, rồi dùng House anchor trở về `House`.
2. **Rain comparison:** xem `Mine Entrance`, `Footbridge` và `Fishing Spot`; chọn hai context đáng làm hôm nay. Facilitator chỉ cung cấp category/cost summary khi participant focus đúng entity.
3. **Person announcement:** đọc “Person today is at Supermarket”, jump tới `Person Today`, Gift một valid Fresh item, rồi trở về `House`.
4. **Cross-world Project:** chọn đúng Raw/Fresh source trong carried area và đưa tới Project được gọi tên; một Processed lookalike nằm cạnh để kiểm wrong-source prevention.

Không task nào tiêu AP cho camera jump. Nếu travel sau này có gameplay cost, protocol phải chạy lại.

## 6. Log sheet

Ghi theo từng task:

| Field | Cách ghi |
| --- | --- |
| `TTFT` | giây từ prompt đến focus đúng target lần đầu |
| `wrong_direction` | mỗi scroll/touch đi xa target trước khi đổi hướng |
| `anchor_open` | số lần dùng House anchor |
| `wrong_anchor` | anchor mở nhưng participant vẫn tìm một Home/Town/Area card không tồn tại |
| `false_entity` | participant cố chọn terrain/label như một card hoặc target |
| `wrong_source_attempt` | source không hợp lệ được thử trên target |
| `preview_block` | wrong source có bị exact preview chặn trước commit không |
| `return_house` | giây từ task complete tới House focus |
| `identity_inspect` | inspect chỉ để nhớ entity/item là gì |
| `label_request` | hỏi facilitator về tên/identity |

Sau task 3, participant vẽ nhanh vị trí tương đối của `House`, `Supermarket`, `Fishing Spot`, `Mine Entrance` và đường bờ `Coast`. Không hỏi participant vẽ Town. Chấm topology relation, không chấm đẹp.

Không đặt pass threshold trước pilot. Một participant dùng để sửa protocol, không chứng minh population rate.

## 7. Counterbalance

- Participant lẻ: `M → T`.
- Participant chẵn: `T → M`.
- Nghỉ/ngắt ngắn giữa hai arm; reset token về trạng thái đầu.
- Không nói arm sau là “bản sửa” hoặc “dễ hơn”.

## 8. Preflight nội bộ

### Asset/format

- `[FIXTURE]` Mỗi gameplay entity dùng square art với label paper-test; không dùng rectangular Place/Landmark card cũ.
- `[FIXTURE]` Cả M/T có cùng chín entity và không có Place card.
- `[FIXTURE]` Supermarket mới đọc được ở 160/80 px và target trực tiếp, không cần Town card.
- `[HYPOTHESIS]` Entity silhouette vẫn phân biệt ở desk size 80–160 px.
- `[HYPOTHESIS]` Fresh/Processed pair phân biệt bằng whole-vs-container/bundle, không chỉ bằng màu.
- `[DIRECTION]` Rule, AP, exact tag, progress và ability vẫn do label/preview/detail sheet chịu trách nhiệm.

### Protocol integrity

| Check | Result |
| --- | --- |
| Cùng chín entity giữa M/T | Pass |
| Không Area box/Place card | Pass |
| Geography hiện trực tiếp trên nền | Pass |
| Cùng four-task script | Pass |
| House anchor hiện ở cả hai | Pass |
| Chỉ entity coordinates thay đổi | Pass |
| Wrong-source foil có Fresh/Processed lookalike | Pass |
| Recovery/return House đo được | Pass |
| Recall không yêu cầu Town node | Pass |
| Có participant data | **Chưa có** |

### Desk result

- `[HYPOTHESIS]` M cho cảm giác world mở hai phía của house/farm cluster rõ hơn nhưng đòi hỏi chọn hướng.
- `[HYPOTHESIS]` T cho hướng khám phá ban đầu rõ hơn nhưng Mine và Coast có nguy cơ đọc như phần cuối feed.
- `[HYPOTHESIS]` Việc target `Supermarket` trực tiếp loại bỏ một bước hierarchy không có verb/state.
- `[DIRECTION]` Kit đủ điều kiện chạy pilot; chưa đủ điều kiện chốt topology hoặc Town labeling.

## 9. Điều không được suy ra

- Không topology nào đã `[DECIDED]`.
- Desk readability không phải new-player recognition rate.
- Entity art không phải canonical/runtime art.
- Vị trí, scale và background trên board là schematic fixture, không phải canonical map.
- Không hiện Town label trong fixture chưa chứng minh Town label vĩnh viễn không cần; pilot cần quan sát participant có tự hình thành tên vùng hay không.
