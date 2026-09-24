# Person/Heart cadence paper simulation 01 — cap, lịch và dùng cùng ngày

Ngày chạy: 2026-09-21.

Mục đích: kiểm tra Heart cap và timing qua nhiều lần Person xuất hiện, dùng ba ability kernel A/C/K đã có context. Phép thử đo stock/overflow/target coverage; không định giá quà, personality, story hoặc số Person Year 1.

V0 superseding note 2026-09-23: [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) keeps cap 2, `+1/−1`, same-day use and the three-Person calendar below as **fixtures**. Under [Grove contract 36](FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md), Mira A has no validated preview target; under Q4, Bram K has no demonstrated Work saving. Nell's Gift supply varies with Herb phase as [test 38](FIRST-PLAYABLE-WILD-HERB-CADENCE-PAPER-TEST-38.md) shows. This simulation's activation counts are supply ceilings, not current V0 uses.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Person là lá persistent/collectible với activated ability; dùng ability tiêu Heart riêng của Person và không mất Person.
- Person đã kết bạn vẫn xuất hiện trong world theo lịch.
- Mỗi Person nhận tối đa một Gift/ngày; Gift đầu vừa thu nhận Person vừa tạo Heart.
- Heart tồn tại qua ngày và có cap riêng từng Person; con số cap chưa chốt.
- Lịch chỉ giới hạn gặp/Gift/hồi Heart, không giới hạn ngày dùng ability.
- Toàn bộ Person có thể gặp hôm nay được announce tự động; xem/bỏ qua miễn AP.
- Sưu tầm Person là hướng tùy chọn, không có party cap cưỡng ép.

### 1.2. Hướng đang được tiếp tục

- Gift thử tốn 1 AP + item hợp lệ.
- A preview một batch/veiled result; C giữ một opportunity qua Sleep; K thay đổi scope phân bổ Work.
- Ability chỉ dùng khi có target/context hợp lệ và không thay thế loop nền.

### 1.3. Giả thuyết

1. Cap 1 dễ làm Gift bị lãng phí khi lịch gặp và lịch target lệch nhau.
2. Cap 2 đủ buffer mà chưa tạo kho Heart lớn.
3. Cấm dùng Heart vừa nhận trong cùng ngày tạo một luật timing khó giải thích và làm acquisition kém đọc được.
4. Không cần cooldown nếu Gift cadence, cap và target condition đã giới hạn supply/use.

### 1.4. Fixture

- Horizon 24 ngày trừu tượng; không phải season length.
- Mỗi Gift tạo 1 Heart; mỗi ability tốn 1 Heart; ability không tốn AP thêm.
- A xuất hiện D2/D8/D14/D20; C D4/D10/D16/D22; K D6/D12/D18/D24.
- Mỗi lần xuất hiện có thể Gift đúng một lần nếu người chơi có item/AP.
- Mọi lần Gift trong bảng được giả định thành công để stress supply ceiling.
- Target calendar cố ý có một số target cùng ngày gặp và một số target lệch lịch.

## 2. Target calendar fixture

| Person kernel | Ability target có ý nghĩa | Target days |
| --- | --- | --- |
| A — preview | Batch/Veiled result có uncertainty đáng để xem | D2, D9, D17, D21 |
| C — hold | Opportunity đáng giữ đang hết hạn | D4, D11, D18, D23 |
| K — split/focus | Hai Work target hợp lệ hoặc scope cần đổi | D6, D9, D15, D18, D21, D24 |

Target không phải ngày ability bắt buộc dùng. Người chơi có thể chấp nhận uncertainty/expiry hoặc Work bình thường.

## 3. Ba policy timing/cap

| Policy | Heart vừa nhận | Cap |
| --- | --- | ---: |
| P1 | Dùng được cùng ngày | 1 |
| P2 | Chỉ dùng từ ngày sau | 1 |
| P3 | Chỉ dùng từ ngày sau | 2 |
| P4 | Dùng được cùng ngày | 2 |

P4 là baseline mạnh nhất từ các test trước nhưng vẫn được coi là fixture để so.

## 4. Trace A — preview

### P1: same-day, cap 1

| Gift | Use | Stock sau use | Ghi chú |
| --- | --- | ---: | --- |
| D2 | D2 | 0 | Acquisition có tác dụng ngay vào batch hôm đó |
| D8 | D9 | 0 | Buffer qua một ngày |
| D14 | D17 | 0 | Heart giữ qua nhiều ngày |
| D20 | D21 | 0 | Không overflow |

Kết quả: 4 Gift, 4 uses, 0 overflow, 4/4 target được can thiệp.

### P2: next-day, cap 1

- Heart D2 không dùng được cho target D2 nên target trôi qua.
- Heart D2 vẫn còn khi Gift D8; Gift D8 bị cap làm mất/không có giá trị nếu vẫn cho Gift.
- Uses D9, D17 và D21.

Kết quả: 4 Gift opportunity, 3 uses, 1 overflow, target D2 không thể can thiệp.

### P3: next-day, cap 2

- Target D2 vẫn mất vì timing lock.
- Gift D2 + D8 có thể cùng tồn tại; không overflow D8.
- Uses D9, D17, D21; còn 1 Heart cuối horizon.

Kết quả: 4 Gift, 3 uses, 0 overflow, 1 stock chưa dùng; cap 2 sửa waste nhưng không sửa acquisition target.

### P4: same-day, cap 2

Kết quả giống P1 trong calendar này: 4 uses, không overflow. Cap thứ hai không tự tạo thêm sức mạnh nếu người chơi dùng đều; nó chỉ là buffer khi bỏ qua một target.

## 5. Trace C — hold

Target D4 cố ý trùng ngày acquisition để kiểm tra một opportunity sắp hết hạn.

| Policy | Uses | Overflow | Target cùng ngày bị mất | Stock cuối |
| --- | ---: | ---: | ---: | ---: |
| P1 same-day/cap1 | 4 | 0 | 0 | 0 |
| P2 next-day/cap1 | 3 | 1 | 1 | 0 |
| P3 next-day/cap2 | 3 | 0 | 1 | 1 |
| P4 same-day/cap2 | 4 | 0 | 0 | 0 |

Same-day use không bảo đảm C luôn đúng: người chơi vẫn trả Gift AP + item và dùng một Heart để trì hoãn, không nhận item miễn phí.

## 6. Trace K — split/focus

K có target thường xuyên hơn lịch Gift.

| Policy | Uses trong fixture | Điều xảy ra |
| --- | ---: | --- |
| P1 same-day/cap1 | 4 | Có thể dùng D6, D15, D18, D24 hoặc chọn bốn target khác |
| P2 next-day/cap1 | 3 + 1 stock cuối | Dùng D9, D15, D21; Heart D24 chờ target sau horizon |
| P3 next-day/cap2 | 3 + 1 stock cuối | Không khác P2 vì supply, không phải cap, đang giới hạn |
| P4 same-day/cap2 | 4 | Linh hoạt nhất nhưng vẫn tối đa bằng số Gift |

K cho thấy khi target dày, cap 2 không làm ability spam: supply chỉ có bốn Heart trong 24 ngày fixture.

## 7. Supply/use summary

| Policy | Tổng Gift A/C/K | Tổng uses tối đa trong calendar | Overflow | Same-day target bị khóa |
| --- | ---: | ---: | ---: | ---: |
| P1 same-day/cap1 | 12 | 12 | 0 | 0 |
| P2 next-day/cap1 | 12 | 9 | 2 | 2 |
| P3 next-day/cap2 | 12 | 9 | 0 | 2 |
| P4 same-day/cap2 | 12 | 12 | 0 | 0 |

Đây là ceiling vì fixture giả định người chơi Gift mọi lần. Trong chơi thật, 12 Gift còn tốn 12 AP + 12 item và cạnh tranh với mọi route; người chơi không bị yêu cầu đạt ceiling.

## 8. Selective gifting

Nếu người chơi chỉ Gift khi:

- muốn thu nhận Person;
- Heart đang dưới cap;
- có target dự kiến trước lần gặp kế;
- hoặc muốn tích một Heart dự phòng;

thì cap 2 tạo một quyết định đọc được:

- Gift ở cap 2 không tạo Heart, nên có thể bỏ qua mà không mất progression bắt buộc.
- Gift ở stock 1 trước giai đoạn nhiều target tạo buffer.
- Gift ở stock 0 có giá trị cao nhưng vẫn cạnh tranh item/AP.

UI announcement cần hiện Heart hiện có/cap và lần Gift hôm nay còn khả dụng hay không; nếu không, người chơi phải mở từng Person để biết Gift có tạo tài nguyên.

## 9. Same-day use sensitivity

### Cho phép dùng cùng ngày

- Acquisition → ability target → result là một chuỗi rõ.
- Announcement có thể giúp người chơi chuẩn bị quà và context trong cùng ngày.
- Không cần giải thích trạng thái Heart “mới nhưng chưa hoạt động”.
- Có thể làm ngày acquisition mạnh nếu ability cứu đúng rare opportunity.

### Chỉ dùng từ ngày sau

- Giảm burst trong ngày gặp.
- Nhưng làm target trùng lịch không thể cứu, tạo overflow với cap 1 và thêm timing rule không xuất phát từ fiction/card grammar.
- Người chơi có thể kết bạn vì nhìn thấy ability hữu ích hôm nay rồi phát hiện không được dùng.

### Kết quả giấy

Giả thuyết mạnh hơn là **cho dùng Heart vừa nhận trong cùng ngày**, nhưng preview trước Gift phải nói rõ ability có target hợp lệ nào. Balance acquisition day nên nằm ở chi phí Gift, rarity item, lịch Person và hiệu quả ability—not một khóa “ngày mai mới dùng”.

Đây chưa phải quyết định đã chốt.

## 10. Cap sensitivity

### Cap 1

- Ưu: cadence chặt, ít hoarding.
- Nhược: lịch target lệch lịch Person làm repeat Gift dễ vô nghĩa; không buffer cho tuần nhiều opportunity.

### Cap 2

- Ưu: hấp thụ một lần lệch lịch; cho phép bỏ qua một target rồi vẫn Gift lần sau; burst tối đa nhỏ.
- Nhược: người chơi có thể dùng hai lần gần nhau nếu đã tích, nên ability phải an toàn khi lặp trong một ngày.

### Cap 3+

- Chưa có bằng chứng cần thiết.
- Tăng hoarding và burst audit cho mọi ability.
- Làm lịch Person ít ảnh hưởng hơn vì stock kéo dài nhiều lần dùng.

### Kết quả giấy

**Cap 2 là baseline fixture mạnh nhất cho vòng sau**, không phải số đã chốt. Mọi ability vẫn phải chịu repeat-use audit hai lần trong cùng ngày vì user chưa chốt limit plays/day.

## 11. Cooldown và per-day play limit

Không thêm cooldown mặc định trong vòng này:

- Heart supply đã gắn với lịch + Gift AP/item.
- Context target đã giới hạn use.
- Cap 2 giới hạn burst tích lũy.

Chỉ thêm `mỗi ability một lần/ngày` nếu một ability cụ thể phá luật khi dùng hai lần, không dùng limit chung để cứu thiết kế ability yếu. Nếu effect cần limit, card phải ghi rõ.

## 12. Continuous-world presentation

- Day strip: portrait, name, context/location, owned/unowned, Heart `x/cap`, Gift available.
- Chạm announcement: camera focus tới Person context; không tự Gift.
- Person đã thu nhận trong sticky tray: portrait + Heart count + enabled/disabled state.
- Chọn Person: valid target trên world highlight; preview ghi effect + Heart cost + AP/item cost nếu có.
- Person world marker và owned Person card là hai representation của cùng identity; không tạo bản sao collectible mới.

## 13. Kết luận cập nhật

### Kết quả paper simulation

1. Cap 1 dễ biến Gift thành overflow khi target cadence lệch schedule.
2. Cap 2 là buffer đủ nhỏ trong calendar thử; supply vẫn là giới hạn chính.
3. Next-day lock làm mất target acquisition-day mà không tạo quyết định mới rõ.
4. Same-day use phù hợp hơn với announcement → Gift → ability chain.
5. Chưa có bằng chứng cần cooldown chung.
6. Ability phải được audit khi dùng hai lần cùng ngày nếu cap 2 cho phép tích.

### Giả thuyết mang sang package

- Baseline thử: Gift +1 Heart, ability −1 Heart, cap 2, dùng được cùng ngày, không cooldown chung.
- Đây là fixture tổng hợp để paper-test ability; không phải luật người dùng đã chốt.
- Lịch 4–6 ngày chỉ là calendar thử; cadence thật phải cân cùng số Person, quà hợp lệ và target density.

### Chỗ còn mở

- Exact cap/cost/reward của từng Person.
- Ability nào cần per-day limit riêng.
- Tỉ lệ Gift người chơi thực sự chọn khi item economy đầy đủ.
- Announcement load khi nhiều Person cùng xuất hiện.
- Heart UI/accessibility và behavior khi Gift ở cap.
