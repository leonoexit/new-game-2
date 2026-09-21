# Resource economy daily routes 02 — W-first, E-first và collection

Ngày chạy: 2026-09-21.

Trạng thái: daily route comparison dùng ledger của [Resource economy paper simulation 01](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md). Phép thử giữ cùng Weather, crop timing, Person schedule và resource prices để so thứ tự đầu tư. Đây không phải lịch mùa, content hay balance đã chốt.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Person có thể gặp trong suốt ngày đã được công bố; bỏ qua chỉ làm mất cơ hội ngày đó, không mất vĩnh viễn.
- Gift tốn AP + item; xem/bỏ qua không tốn AP.
- Heart tồn tại qua ngày; Person đã thu nhận dùng được bất kỳ ngày nào nếu có Heart và target hợp lệ.
- Farming, social và Project cần tạo opportunity cost thật.
- Crop có thể có nhiều đích sử dụng; objective được reveal dần.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Dùng 6 AP và action capacity hiện tại như fixture.
- So relief-first với expansion-first.
- Đo timing, overload và cơ hội bị bỏ, không chỉ tổng resource cuối cửa sổ.
- Không code/prototype.

### 1.3. Giả thuyết cần thử

1. W-first đổi output sớm lấy AP flexibility và giữ được nhiều opportunity hơn.
2. E-first tạo output sớm hơn nhưng bị maintenance/burst ép bỏ Person/Project.
3. Collection route có chi phí nhìn thấy nhưng có thể không thua dài hạn nếu reward mở lựa chọn đủ giá trị.

### 1.4. Fixture/số tạm bổ sung

- Dùng giá, Project W/E và source rules từ ledger trước.
- Crop mới Plant cần ba lần Sleep đã được Water để Mature.
- Bắt đầu Day 1 với hai crop ở `2/3`; Water Day 1 làm chúng Mature vào Day 2.
- Weather: D1 Sunny, D2 Sunny, D3 Rain, D4–D6 Sunny, D7 Rain, D8–D9 Sunny.
- Rain tưới crop Plant trong cùng ngày nếu có.
- K xuất hiện Day 2 và Day 6; Berry có thể Collect trong ngày đó.
- Một generic expiring opportunity `O` trị giá chưa định lượng xuất hiện D1, D3, D4, D5, D7, D8 và D9. Nó tốn 1 AP và chỉ dùng để đếm capacity bị bỏ; không tạo resource trong ledger.
- Buy, Sell, nộp Project resource và nhận reward không tốn AP.
- Project có hiệu lực ngay khi đủ item + Progress.

`O` không phải một card/content đề xuất. Nó là marker cho một việc đáng làm ngoài route chính.

## 2. Crop timing chung

Hai crop đầu Mature Day 2. Nếu replant và Water ngay:

```text
Plant/Water D2 → Rain D3 → Water D4 → Mature D5
Plant/Water D5 → Water D6 → Rain D7 → Mature D8
```

Crop expansion được Plant ngày nào sẽ tạo cohort riêng từ ngày đó. Bỏ Water làm cohort chậm, không chết.

## 3. Route W — relief trước expansion

Ưu tiên Sell first harvest, hoàn thành W, rồi dùng AP được giải phóng để mở E. K được thu nhận ở lần xuất hiện thứ hai.

### Daily log

| Ngày | AP log | Resource/state cuối ngày |
| --- | --- | --- |
| D1 Sunny | Water 2 `2`; lấy Metal `2`; Work W `1`; O `1` | Metal 1; W `2/3`; crop Mature vào D2 |
| D2 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 2 `2` | Sell 2 = 6G; mua 2 Seed = 2G; dành 4G cho W; bỏ K |
| D3 Rain | Work W `1`; Collect 2 Wood `2`; Work E hai lần `2`; O `1` | W và access E hoàn thành; Wood đã nộp; crop `2/3` |
| D4 Sunny | Water bằng W `1`; Clear 2 + Till 2 `4`; O `1` | Hai plot mới đã Tilled; crop cũ Mature vào D5 |
| D5 Sunny | Harvest 2 `2`; Plant 2 `2`; Water bằng W `1`; O `1` | Sell 2 = 6G; mua 4 Seed = 4G; còn 2G; giữ 2 Seed expansion |
| D6 Sunny | Plant 2 plot mới `2`; Water 4 crop bằng W `2`; Collect Berry + Gift K `2` | Bốn active crop; thu nhận K, 1 Heart; bỏ generic O vì K là opportunity ngày này |
| D7 Rain | O `1`; 5 AP linh hoạt chưa có đích trong fixture | Cohort cũ Mature D8; cohort mới `2/3` |
| D8 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 4 bằng W `2` | 6 Produce đã Harvest lũy kế; cohort mới Mature D9; bỏ O |
| D9 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 4 bằng W `2` | 8 Produce lũy kế; Gold cuối fixture 10; bỏ O |

### Mốc Route W

- W hoàn thành: Day 3.
- Bốn active crop: Day 6.
- K được thu nhận: Day 6; Heart chưa có target Project mới trong fixture.
- 8 Produce Harvest lũy kế: Day 9.
- Generic O đã làm: 5/7.
- K opportunity: bỏ Day 2, nhận Day 6.

Route W có một Rain day rất rảnh ở Day 7. Đây là lỗ hổng content của fixture, không phải bằng chứng game nên tăng chi phí W.

## 4. Route E — expansion trước relief

Ưu tiên dùng first-harvest Gold mua đủ bốn Seed, mở plot trước và quay lại W bằng output sau.

### Daily log

| Ngày | AP log | Resource/state cuối ngày |
| --- | --- | --- |
| D1 Sunny | Water 2 `2`; Collect 2 Wood `2`; Work E `1`; O `1` | Wood 2; E `2/3`; crop Mature D2 |
| D2 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 2 `2` | Sell 2 = 6G; mua 4 Seed = 4G; còn 2G; bỏ K |
| D3 Rain | Work E `1`; Clear 2 + Till 2 `4`; O `1` | Access E hoàn thành; hai plot mới Tilled |
| D4 Sunny | Plant 2 plot mới `2`; Water 4 `4` | Bốn active crop; bỏ O |
| D5 Sunny | Harvest 2 crop cũ `2`; Plant lại 2 `2`; Water 2 crop vừa Plant `2` | Sell 2 = 6G; mua 2 Seed = 2G; tổng Gold 6; cohort expansion bị bỏ Water và chậm một nhịp; bỏ O |
| D6 Sunny | Water 4 `4`; lấy Metal `2` | Metal 1; hai cohort cùng đạt `2/3`; bỏ K |
| D7 Rain | Work W hai lần `2`; O `1`; 3 AP linh hoạt | W hoàn thành sau khi nộp 4G; hai cohort cùng Mature D8; còn 2G |
| D8 Sunny | Harvest 4 `4`; O `1`; 1 AP linh hoạt | Sell 4 = 12G; mua 4 Seed = 4G; để bốn plot trống; 8 Produce lũy kế |
| D9 Sunny | Plant 4 `4`; Water 4 bằng W `2` | Bốn active crop; Gold cuối fixture 10; bỏ O |

### Mốc Route E

- Bốn active crop: Day 4.
- W hoàn thành: Day 7.
- 8 Produce Harvest lũy kế: Day 8.
- Generic O đã làm: 4/7.
- K opportunity: bỏ cả Day 2 và Day 6.

Route E đạt output milestone sớm hơn một ngày nhưng phải để bốn plot trống từ Day 8 sang Day 9 để giữ O Day 8. Nếu replant ngay, O đó cũng bị bỏ và farming vẫn cần 10 AP trước relief nếu W chưa có hiệu lực.

## 5. Route C — nhận collection trước, rồi expansion

Route này nộp một Produce đầu cho C, chỉ Sell một Produce, sau đó mở E trong lúc chờ Gold để hoàn thành W.

### Daily log

| Ngày | AP log | Resource/state cuối ngày |
| --- | --- | --- |
| D1 Sunny | Water 2 `2`; lấy Metal `2`; Work W `1`; O `1` | Metal 1; W `2/3` |
| D2 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 2 `2` | Nộp 1 Produce cho C; Sell 1 = 3G; mua 2 Seed = 2G; còn 1G; bỏ K |
| D3 Rain | Collect 2 Wood `2`; Work E hai lần `2`; O `1`; 1 AP linh hoạt | Access E hoàn thành |
| D4 Sunny | Water 2 `2`; Clear 2 + Till 2 `4` | Hai plot mới Tilled; bỏ O |
| D5 Sunny | Harvest 2 `2`; Plant 2 `2`; Water 2 `2` | Sell 2 = 6G; mua 4 Seed = 4G; còn 3G; giữ 2 Seed expansion; bỏ O |
| D6 Sunny | Plant 2 plot mới `2`; Water 4 `4` | Bốn active crop; bỏ K |
| D7 Rain | Work W `1`; O `1`; 4 AP linh hoạt | W đủ Progress và Metal nhưng còn thiếu 1 Gold; hai cohort tiếp tục lớn |
| D8 Sunny | Harvest cohort cũ 2 `2`; Sell để đủ Gold và hoàn thành W; Plant 2 `2`; Water 4 bằng W `2` | W hoàn thành Day 8; 6 Produce lũy kế; cohort expansion Mature D9; bỏ O |
| D9 Sunny | Harvest cohort expansion 2 `2`; Plant 2 `2`; Water 4 bằng W `2` | 8 Produce lũy kế; Gold cuối fixture 7; bỏ O |

### Mốc Route C

- C hoàn thành: Day 2.
- Bốn active crop: Day 6.
- W hoàn thành: Day 8.
- 8 Produce Harvest lũy kế: Day 9.
- Generic O đã làm: 3/7.
- K opportunity: bỏ cả hai lần.

Route C kết thúc với ít hơn 3 Gold đúng bằng giá Sell của Produce đã nộp. Nó nhận Seed option mới nhưng fixture chưa định giá option đó, nên không thể tuyên bố Route C yếu hơn.

## 6. So sánh kết quả

| Chỉ số | W-first | E-first | Collection-first |
| --- | ---: | ---: | ---: |
| W hoàn thành | D3 | D7 | D8 |
| Bốn active crop | D6 | D4 | D6 |
| 8 Produce lũy kế | D9 | D8 | D9 |
| Gold cuối fixture | 10 | 10 | 7 |
| Generic O hoàn thành | 5/7 | 4/7 | 3/7 |
| Thu nhận K | D6 | Không | Không |
| Collection C | Không | Không | D2 |
| Ngày có ≥3 AP linh hoạt | D7 | D7 | D7 |

### Divergence đã xuất hiện

- W-first chậm expansion/output một đến hai ngày nhưng giữ nhiều opportunity hơn và thu nhận được K.
- E-first đạt bốn crop và 8 Produce sớm nhất, nhưng bỏ cả hai lần K xuất hiện.
- Collection-first trả 3 Gold và trì hoãn W để mở một lựa chọn Seed chưa được định giá.

Không route nào trội trên mọi trục. Đây là kết quả mong muốn ở mức cấu trúc, chưa phải bằng chứng các reward đã cân bằng.

## 7. K có bị lịch làm vô nghĩa không?

Trong Route W, K được thu nhận Day 6 sau khi W và E đều đã hoàn thành. Heart không còn target trong fixture, nên K không giúp hai Project đã dùng để chứng minh khả năng của mình.

Người chơi có thể thu nhận K ngay Day 2 bằng cách hy sinh một phần cycle, ví dụ:

```text
Harvest 2                2 AP
Collect Berry + Gift K   2 AP
Plant + Water 1 crop     2 AP
Plot còn lại             để trống
```

Đây là một lựa chọn thật: lấy Person sớm để tiết kiệm Work sau, đổi bằng một crop cycle. Nhưng chưa biết một Heart và một AP Work tương lai có đáng mất một crop hay không.

Kết luận không phải đổi lịch K. Kết luận là Person ability cần được test trên schedule nơi:

- acquisition có thể xảy ra trước target window;
- hoặc Person vẫn có giá trị ở Project kế tiếp;
- nhưng không được đảm bảo luôn xuất hiện đúng lúc tối ưu.

## 8. Rain đang làm hai vai trò

- Day 3 giúp cả W-first và E-first thực hiện nhiều setup action mà không bỏ crop maintenance.
- Day 7 cho mọi route ít nhất 3 AP linh hoạt và làm các cohort hội tụ hoặc tiến triển.

Nếu bỏ một trong hai Rain day:

- W/E milestone sẽ chậm hoặc cần bỏ thêm O.
- Expansion-first lock-in mạnh hơn.
- Payback của Water relief nhanh hơn vì có thêm Sunny day.

Weather vì vậy không chỉ là discount ngẫu nhiên; nó thay đổi thứ tự đầu tư và crop synchronization. Forecast/reveal của Weather cần được xét trong vòng thiết kế kế tiếp, nhưng chưa chốt người chơi biết trước bao nhiêu ngày.

## 9. Kết luận mới

### 9.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **W-first và E-first đều tạo route hợp lệ.** W-first mua flexibility; E-first mua output timing.
2. **Cùng tổng output và Gold không có nghĩa route giống nhau.** Timing, Person thu nhận và opportunity bị bỏ khác nhau rõ.
3. **Collection có cost đọc được.** Một Produce nộp sớm tương đương mất 3 Gold trong fixture và làm W chậm năm ngày so với W-first.
4. **Person timing là phần của economy.** K xuất hiện trên harvest day buộc tradeoff lớn; lần xuất hiện sau có thể quá muộn cho Project hiện tại nhưng vẫn có giá trị tương lai.
5. **Rain tạo investment window và làm cohort đổi nhịp.** Nó ảnh hưởng route chứ không chỉ giảm maintenance.
6. **Generic O bộc lộ chỗ fixture còn trống.** Day 7 có nhiều AP rảnh ở mọi route; cần subsystem khác, không nên tự tăng farming cost để lấp.

### 9.2. Giả thuyết mạnh nhất để mang sang bước sau

- Giữ cả relief-first và expansion-first khả dụng; không gate một route hoàn toàn sau route kia.
- Reveal ít nhất một lần K trước khi cặp Project W/E đóng, nhưng không cần đảm bảo người chơi đủ AP để lấy K.
- Cho collection reward thay đổi lựa chọn tương lai đủ rõ để bù cost hiện tại; “tick checklist” không đủ.
- Dùng Rain/forecast như thông tin lập kế hoạch, không như đáp án bắt buộc để thoát lock-in.
- Thêm một subsystem cạnh tranh vào Rain day trước khi điều chỉnh lại 6 AP.

Các điểm này vẫn là giả thuyết cần thử.

## 10. Fixture chưa được phép hóa thành luật

- Lịch chín D2/D5/D8 và Weather D3/D7.
- Giá 3G/Produce, 1G/Seed; giao dịch miễn AP.
- K xuất hiện D2/D6; Berry luôn có thể lấy bằng 1 AP.
- Generic O mỗi ngày được liệt kê.
- W/E có hiệu lực ngay và chấp nhận Progress trước resource.
- Có thể mua/Plant nhiều Seed trong cùng ngày.
- Collection C nhận Produce miễn AP.
- Crop không Water chỉ đứng yên.

## 11. Bước tiếp theo

Daily routes đã chứng minh farming/economy đủ tạo divergence. Bước tiếp theo không nên thêm giá tùy ý. Cần kiểm tra một subsystem cạnh tranh trong Rain/free-capacity window và nối nó trở lại farming.

Ứng viên phù hợp nhất là một **resource area loop** ngắn, vì Mine/Grove hiện chỉ là source phẳng `AP → item`. Phép thử tiếp theo cần so:

- Source phẳng: 1 AP nhận item đã biết.
- Source có lựa chọn/reveal: xem hoặc chọn giữa resource, risk hoặc preparation.
- Một Person ability A/C/D/I/J/K/M có tác động lên loop mà không trở thành combo bắt buộc.

Mục tiêu là làm Rain day có cơ hội khác biệt, không biến Mine/Grove thành farming với artwork khác.

Phép so đã được chạy trong [Resource area paper simulation 01](RESOURCE-AREA-PAPER-SIMULATION-01.md). Kết quả giữ deterministic source cho resource nền và dùng batch area cho opportunity đa dạng; Person A/C có context riêng nếu Heart không đủ dùng trên mọi Search.
