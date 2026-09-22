# Fishing resolution sensitivity 02 — atomic vs persistent trên four decisive cells

Ngày chạy: 2026-09-22.

Trạng thái: paper rerun của Catch resolution trên bốn cell đã chọn bởi [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md). Cost và timing đều là `[FIXTURE]`; tài liệu không chốt AP cuối.

## 1. Invariants

### 1.1. [DECIDED]

- Fishing có loop/record riêng; không phải delivery Project bắt buộc.
- River Minnow là common control; Rain Eel là Weather-condition fixture.
- Missed Catch quay lại ở condition/cycle sau; không khóa save.
- Catch condition/reward hợp lệ phải thấy trước commit; không dùng hidden failure roll ở baseline.

### 1.2. [DIRECTION]

- Fresh condition identity phải giữ nguyên qua acquisition/Processing.
- Resolution không được tạo partial-payment trap không có quyết định.
- Person không là prerequisite để hoàn tất common Catch.

## 2. Arms

| Arm | Rule |
| --- | --- |
| `A2` | Một atomic commit 2 AP → acquire exact Catch đã preview |
| `P2-L` | `Begin 1 AP` khóa exact Catch/condition; progress giữ qua tối đa một Sleep; `Land 1 AP` acquire item; có thể trả cả 2 AP cùng ngày |
| `P2-U` | 1 progress persistent tại location; completion dùng condition hiện tại |

`P2-U` bị loại về semantics trước schedule: nó cho phép bắt đầu dưới Rain rồi hoàn tất dưới Sunny (hoặc ngược lại), làm condition provenance mơ hồ. Four-cell rerun chỉ so `A2` và `P2-L`.

Trong `P2-L`, begin state chiếm một active Catch slot tại River; không bắt Catch thứ hai cho tới khi Land/cancel. Nếu không Land sau một Sleep, locked opportunity expire nhưng progress có recovery thành 1 AP credit cho lần common Catch kế; không mất vĩnh viễn, cũng không giữ Rain Eel vô hạn.

## 3. Cell rerun

Calendar result kế thừa: A5 bỏ một common Catch ở collision D8; S18 cho common Catch recovery D14. A7 lấy toàn bộ Catch trong minimum fixture.

| Cell | `A2` | `P2-L` | Difference |
| --- | --- | --- | --- |
| `5-12-S` | D8 block 2 AP không fit; bỏ common Catch | Có thể Begin 1 AP D8, Land D9; lấy thêm một Fish | Persistent xóa đúng scarcity signal của cell stress |
| `5-18-D` | Miss D8 nhưng common Catch D14 cho opportunity mới | Begin/Land quanh D8, rồi D14 vẫn là Catch mới | Persistent tăng total acquisition, không chỉ recovery |
| `7-12-S` | 2 AP block fit; mọi Catch minimum được lấy | Có thể split nhưng không mở decision mới | Cùng output; persistent thêm state/preview burden |
| `7-18-D` | 2 AP block fit; Fishing đã rộng | Split không cứu meaningful conflict | Cùng output; surplus càng rõ |

## 4. Decision audit

### 4.1. Atomic

- Người chơi biết trước cần reserve một block 2 AP hoặc bỏ Catch.
- Opportunity pressure còn khác giữa A5/A7 và giữa short/dense calendar.
- Không có half-finished state, active-slot rule hoặc condition carry.
- Cost 2 AP có thể đổi sau; strength nằm ở one-commit commitment, không ở con số 2.

### 4.2. Persistent locked

- Chỉ tạo decision khi 1 AP hôm nay và 1 AP ngày mai có giá trị khác nhau.
- Trong stress cell, nó hoạt động gần như một built-in Hold Open + AP financing, overlap trực tiếp kernel C.
- Nó làm Rain/common Catch cần thêm rule expiry, slot và provenance.
- Khi A7 đã lấy mọi Catch, persistent chỉ tăng bookkeeping.

### 4.3. Same-day partial payment

Begin rồi Land cùng ngày vẫn tiêu 2 AP nhưng hai commit. Nếu preview không đổi giữa hai bước, step giữa không có choice. Nếu result đổi, player có thể bị trap/reroll. Vì vậy same-day two-step tiếp tục không có evidence.

## 5. Person/Processing interaction

- A Preview không cần cho required cost/reward; chỉ dùng nếu Fishing sau này có optional hidden variant.
- C Hold Open có identity rõ hơn dưới `A2`: tiêu Heart để đổi timing một opportunity cụ thể. `P2-L` khiến C gần như trùng baseline action.
- D Salvage vẫn thiếu bait/cancel grammar; không thêm bait để biện minh persistent state.
- Fresh Rain record xảy ra khi Land/acquire, không khi Begin.
- Dried Fish giữ `Fish · River · Rain` provenance nhưng không thay Fresh Rain acquisition record.

## 6. Verdict

1. `[HYPOTHESIS]` Atomic commit vẫn là baseline mạnh hơn trên cả bốn cell: nó giữ calendar/AP scarcity ở A5 và không thêm state vô ích ở A7.
2. `[HYPOTHESIS]` Global persistent Catch chỉ “sửa” D8 miss bằng cách tài trợ AP qua Sleep và giữ opportunity; đó là thay calendar pressure, không chỉ thay feel.
3. `[DIRECTION]` Graph tiếp tục dùng abstract `Catch commitment`; paper balance dùng `A2` cho vòng kế nhưng phải giữ nhãn `[FIXTURE]`.
4. `[DIRECTION]` Nếu cần một “long Catch”, làm card/content riêng có named multi-day rule và recovery, không đổi mọi Fishing sang persistent.
5. `[DIRECTION]` Common Catch recurrence là recovery; không retroactively cấp item đã miss.

## 7. Chưa kết luận

- Final Catch AP.
- Một Catch/location/day.
- Fishing gear, bait hoặc mastery reward cuối.
- Long Catch có tồn tại hay không.
- Weather/Season pool ngoài River Minnow và Rain Eel fixture.
