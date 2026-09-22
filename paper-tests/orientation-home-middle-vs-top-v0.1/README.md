# Orientation paper-test kit v0.1 — Home-middle vs Home-at-top

Ngày dựng và preflight: 2026-09-22.

Trạng thái: `[FIXTURE]` paper-test kit; không phải UI prototype, topology decision, art canonical hay runtime approval.

## 1. Câu hỏi duy nhất

Với cùng landmark, label, Home anchor và bốn task, người mới hiểu/nhớ world hai phía của Home (`M`) tốt đến đâu so với world khám phá chủ yếu theo một hướng (`T`)?

- `[HYPOTHESIS]` `M` giữ Home như hub/geographic anchor nhưng có thể gây wrong-direction search.
- `[HYPOTHESIS]` `T` dễ dạy “đi xuống để khám phá” nhưng làm return-to-Home thủ công dài và world dễ đọc như feed.
- `[DIRECTION]` Chạy `M` trước trong pilot chỉ vì nó kiểm tra giả thuyết khó hơn; counterbalance thứ tự giữa người tham gia.
- Không thay đổi economy, AP, target placement hoặc asset giữa hai arm.

## 2. Thành phần kit

| File/folder | Vai trò |
| --- | --- |
| `boards/home-middle-board.png` | Board full-size fixture M |
| `boards/home-at-top-board.png` | Board full-size fixture T |
| `boards/topology-comparison.png` | Desk comparison; không đưa cho participant trước test |
| `boards/interaction-token-sheet.png` | Ba Project + ba cặp Fresh/Processed để in/cắt |
| `tokens/` | Các landmark card có label ngắn |
| `interaction-tokens/` | Các source/target token riêng |

Art trong kit giữ status `study` hoặc Prototype-3-specific. Text label, border và opening-camera cue là paper overlay; không bake vào source art.

## 3. Setup cố định

1. In board ở cùng kích thước hoặc mở từng board ở cùng zoom.
2. Che board còn lại và comparison sheet.
3. Đặt sticky `HOME ANCHOR` luôn nhìn thấy sau khi camera/focus rời Home.
4. Đặt carried-source area riêng cạnh board; source đã chọn không cần drag xuyên toàn board.
5. Dùng cùng một Project placement cho cả arm:
   - Water Trough tại Farm;
   - Harvest Bench tại Farm;
   - Footbridge tại Upper Grove.
6. Fresh/Processed token không được đổi label giữa arm.
7. Không giải thích topology trước; chỉ đọc task prompt.

`[FIXTURE]` Opening cues:

- M: `↑ Town / Mine`, `↓ River / Coast`.
- T: `Discover ↓`.

## 4. Bốn task, cùng thứ tự trong một arm

1. **Sunny source loop:** từ Farm, mang Fresh Shortroot tới target ở Town, rồi về Farm.
2. **Rain comparison:** xem Mine, Upper Grove và River; chọn hai context đáng làm hôm nay. Facilitator chỉ cung cấp category/cost summary khi participant focus badge.
3. **Person announcement:** jump tới Person context, Gift một valid Fresh item, rồi về Home.
4. **Cross-region Project:** chọn đúng Raw material/Fresh source từ carried area và đưa tới Project được gọi tên; một Processed lookalike được đặt cạnh để kiểm wrong-source prevention.

Không task nào tiêu AP cho camera jump. Nếu sau này travel có gameplay cost, protocol phải chạy lại.

## 5. Log sheet

Ghi theo từng task:

| Field | Cách ghi |
| --- | --- |
| `TTFT` | giây từ prompt đến focus đúng target lần đầu |
| `wrong_direction` | mỗi scroll/touch đi xa target trước khi đổi hướng |
| `anchor_open` | số lần dùng Home/region anchor |
| `wrong_anchor` | anchor mở nhưng không dẫn tới intended region |
| `wrong_source_attempt` | source không hợp lệ được thử trên target |
| `preview_block` | wrong source có bị exact preview chặn trước commit không |
| `return_home` | giây từ task complete tới Home focus |
| `identity_inspect` | inspect chỉ để nhớ node/item là gì |
| `label_request` | hỏi facilitator về tên/identity |

Sau task 3, participant vẽ nhanh vị trí tương đối của Home, Town, River, Mine và Coast. Chấm topology relation, không chấm đẹp.

Không đặt pass threshold trước pilot. Một participant sửa protocol; không chứng minh population rate.

## 6. Counterbalance

- Participant lẻ: `M → T`.
- Participant chẵn: `T → M`.
- Nghỉ/ngắt ngắn giữa hai arm; thay lại token về trạng thái đầu.
- Không nói arm sau là “bản sửa” hoặc “dễ hơn”.

## 7. Preflight nội bộ

### 7.1. Asset/format

- `[FIXTURE]` Mỗi landmark dùng square art; không crop rectangular Landmark cũ.
- `[FIXTURE]` Mine, Town, River, Coast/Sea, ba Project và ba Fresh/Processed pair đều có token.
- `[HYPOTHESIS]` Landmark silhouette vẫn phân biệt ở desk size 80–160 px.
- `[HYPOTHESIS]` Fresh/Processed pair phân biệt bằng whole-vs-container/bundle, không chỉ bằng màu.
- `[DIRECTION]` Rule, AP, exact tag, progress và ability vẫn do label/preview/detail sheet chịu trách nhiệm.

### 7.2. Protocol integrity

| Check | Result |
| --- | --- |
| Cùng asset set giữa M/T | Pass |
| Cùng four-task script | Pass |
| Home anchor hiện ở cả hai | Pass |
| Chỉ topology/opening cue thay đổi | Pass |
| Wrong-source foil có Fresh/Processed lookalike | Pass |
| Recovery/return Home đo được | Pass |
| Có recall task | Pass |
| Có participant data | **Chưa có** |

### 7.3. Desk result

- `[HYPOTHESIS]` M thể hiện hai world halves rõ khi directional cue còn visible; nếu bỏ cue, first-task search trở nên mơ hồ.
- `[HYPOTHESIS]` T đọc tuyến tính ngay nhưng Mine/River/Coast xếp dọc mạnh hơn cảm giác geography.
- `[HYPOTHESIS]` Home anchor làm số thao tác return gần nhau nhưng không làm mental model giống nhau.
- `[DIRECTION]` Kit đủ điều kiện chạy pilot; không đủ điều kiện chốt topology trước khi có người mới thực hiện và recall.

## 8. Điều không được suy ra

- Không topology nào đã `[DECIDED]`.
- Desk readability không phải new-player recognition rate.
- Token art không phải canonical/runtime art.
- 80/160 px không phải runtime size cuối.
- Year 1 kết thúc không reset save; board chỉ là slice dùng cho task.
