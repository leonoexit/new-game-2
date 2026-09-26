# Nell tại River — kiểm nhịp Wild Herb và lịch Season đầu V0 01

Ngày: 2026-09-25. Trạng thái: **CG-46 đã chốt ngày Nell xuất hiện trong Season 18 ngày đầu; phép tính nguồn và ba trace AP ở đây vẫn là chứng cứ giấy với input fixture.** Không có gameplay runtime hoặc thử người chơi mới. [CG-45/46](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) đặt world card Nell ở `River` trọn D6/D12/D18 của Season đầu. Tài liệu này kiểm nhịp ấy cùng [Wild Herb §8–9](../current/FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md), [Farm land contract](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) và [Farm AP rerun 41](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md).

**Cập nhật về sau:** [kiểm ranh giới 02](NELL-SEASON-BOUNDARY-SCHEDULE-PAPER-CHECK-02.md) dẫn tới lựa chọn chuyển thể CG-47 lặp ngày 6/12/18 theo từng Season S18 từ Season 2. Các câu dưới đây nói “lịch Season sau còn mở” phản ánh thời điểm của phép kiểm đầu tiên, không phải trạng thái hiện hành.

**Cập nhật Gift về sau:** [CG-49](NELL-WILD-HERB-GIFT-ELIGIBILITY-AUDIT-04.md) chọn đúng item `Wild Herb` đã Collect làm quà Nell V0. Những chỗ dưới đây gọi **item hợp lệ là fixture** phản ánh thời điểm phép kiểm; phí Gift và lượng Heart vẫn là giả định số của trace.

**Cập nhật số về sau:** [CG-50/51](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn 1 AP/+1 Heart mỗi Gift và cap 2 Nell Heart cho luật giấy V0. Các nhãn fixture bên dưới phản ánh lúc chỉ kiểm lịch và nguồn Herb; không tự biến những nhánh AP ấy thành lịch Gift bảo đảm.

## 1. Nguồn, lựa chọn chuyển thể và giả định

| Mức | Nội dung |
| --- | --- |
| Đã có trong contract | `Forest` có tối đa một Wild Herb world card. Đầu Season xáo năm slip (một Herb, bốn trống); mỗi New Day chỉ rút khi không có Herb chưa Collect. Herb lộ đầu tiên chậm nhất D5, tồn tại qua Sleep đến Collect hoặc ranh giới Season. `Hand` Collect tốn 1 AP theo baseline giấy. |
| Chủ dự án đã chốt | `Nell` là Person identity; world card Nell xuất hiện trong `River` (CG-45) **trọn D6, D12, D18 của Season 18 ngày đầu** (CG-46), kể cả khi chưa có Herb/đã sở hữu. Sau sở hữu, control ability ở khu `Person` vẫn là cùng identity. |
| Giả định phép thử này | Mỗi lần Nell hiện có thể nhận tối đa một Gift theo fixture Person. Để đo nhịp nguồn, người chơi để Herb đầu tiên trên Forest tableau tới D6 rồi Collect + Gift ngày đó. Wild Herb là Gift hợp lệ và Gift tốn 1 AP **chỉ trong fixture này**; sở thích Gift và phí chưa được chủ dự án khóa thành content V0. |
| Lựa chọn chuyển thể | D6 đặt sau mốc Herb đầu tiên chậm nhất D5, nên không cần buộc rút ra Herb sớm hơn hoặc phát item miễn phí. Hai ngày tiếp cách sáu ngày để kiểm cơ hội Gift lặp mà không thay bộ slip. Lịch D4/D10/D16 trong [phase test 38](FIRST-PLAYABLE-WILD-HERB-CADENCE-PAPER-TEST-38.md) là fixture cũ với cơ chế Herb hết hạn qua Sleep và tải `Person P` riêng; không nhập các ngày đó thành luật. |

Lịch **đã chốt cho Season 18 ngày đầu**; không tự lặp D6/D12/D18 ở các Season sau hoặc hứa có Herb để Gift vào cả ba ngày. Mở River/Forest là navigation 0 AP; Nell không thay một trong ba `Fishing Spot`, odds hoặc số Cast.

## 2. Kiểm nguồn Herb nếu Gift đầu D6

Gọi `k ∈ {1,…,5}` là vị trí Herb trong bộ slip đầu Season. Herb lộ Dk và được giữ tới khi Collect D6. Sau D6 còn `5−k` slip trống của bộ đầu; rồi bộ kế tiếp có Herb ở vị trí `j ∈ {1,…,5}`. Khi không để một Herb khác chặn lượt rút, Herb thứ hai lộ ở **D(11−k+j)**, tức trong khoảng D7–D15.

| Ngày Nell đã chốt | Nguồn Herb có thể dùng | Kết luận có điều kiện |
| --- | --- | --- |
| D6 | Herb đầu đã lộ chậm nhất D5 và còn trên Forest tableau nếu chưa Collect | **Có một cơ hội Collect + Gift đầu** trong ngày, nếu người chơi dành AP và fixture Gift hợp lệ. |
| D12 | Herb thứ hai lộ chậm nhất D12 khi `j ≤ k+1` | **19/25** cặp vị trí `(k,j)` có Herb thứ hai sẵn; 6/25 cặp còn lại chưa có. Herb đã lộ có thể chờ đến D12. Đây là xác suất **nguồn sẵn**, không phải xác suất người chơi Gift. |
| D18 | Herb thứ hai luôn lộ chậm nhất D15 | Nếu chưa dùng Herb thứ hai ở D12 và còn AP, **có nguồn để Gift lần hai** trước Sleep cuối Season. |

Nếu Gift lần hai ở D12, gọi `l ∈ {1,…,5}` là vị trí Herb trong bộ slip thứ ba. Sau Collect D12, Herb thứ ba lộ ở **D(17−j+l)**; nó có mặt chậm nhất D18 khi `l ≤ j+1`. Trong 125 bộ ba `(k,j,l)` đều khả dĩ, **66/125** cho phép Gift thứ hai D12 *và* có Herb thứ ba trước/đúng D18 theo chính sách Collect chỉ ở ngày Nell hiện. Vì vậy ba lần Nell hiện không được mô tả thành ba Gift bảo đảm. Nếu Herb thứ hai chưa tới D12, cơ hội D18 chỉ là Gift thứ hai.

## 3. Kiểm AP tối thiểu, không nâng fixture thành cân bằng cuối

Theo khung giấy 6 AP/ngày, giả sử có hai `Turnip Seed` và chọn vòng Farm hai luống không mở rộng: D1 `Till 2 + Plant 2 + Water 2 = 6 AP`; D2 Water hai crop 2 AP; các ngày D3/D5/D7/… là `Harvest 2 + Plant 2 + Water 2 = 6 AP`, còn D6/D12/D18 chỉ cần Water hai crop 2 AP trong vòng này. Ở D6, thêm Hand Collect Herb 1 AP và Gift fixture 1 AP đưa tổng lên **4/6 AP**; còn 2 AP cho lựa chọn khác. Nếu Herb đã vào Item trước D6, riêng Gift fixture cần 1 AP.

Đây chỉ là **đường AP khả thi** với hai Seed có sẵn và nhịp crop của phép thử. Người chơi có thể Clear/mở rộng Field, dùng AP cho Mine/Fishing, thiếu Seed, hoặc đổi kế hoạch; khi đó không bảo đảm Gift D6/D12/D18. Trên ngày bốn crop, phần Farm có thể vượt 6 AP trước khi tính Gift. Nell relief cũng chỉ dùng sau khi đã sở hữu/nhận Heart hợp lệ, không được ứng trước để chứng minh Gift đầu.

## 4. Phạm vi đã chốt và ranh giới phép thử

**D6/D12/D18 là lịch Nell Season đầu đã chốt; §5 là phép kiểm điều kiện Gift, không là nguồn của luật lịch.** Ba trace giấy kiểm Herb sớm, Herb muộn và cạnh tranh AP khi mở rộng Field. Trong mọi cách đọc, tách ba kết quả: *Herb có mặt*, *AP Collect/Gift có thể trả*, và *người chơi có chọn Gift hay không*. Trường hợp Gift đầu vẫn chưa xảy ra ở D6 phải được phép chờ D12/D18, không tự cấp Herb hoặc Heart.

Tại thời điểm kiểm đầu tiên, lịch Nell ở các Season sau chưa được chọn; CG-47 về sau đã chọn lịch lặp S18 trong [kiểm ranh giới 02](NELL-SEASON-BOUNDARY-SCHEDULE-PAPER-CHECK-02.md). Gift preference/giá trị, phản hồi UI và cân bằng Person vẫn mở. Nếu thử tiếp cho thấy lịch Season đầu gây ít lựa chọn hoặc bỏ lỡ quá nhiều, cần một quyết định sửa lịch riêng; không tự đổi CG-46 hoặc luật Herb/Spot/Field để ép đủ Gift.

## 5. Ba trace AP giấy ngắn · 2026-09-25

**Input chung chỉ để thử:** Season 18 ngày, 6 AP/ngày, trời Sunny, Turnip cần hai Sleep được Watered để Mature, hai `Turnip Seed` đầu và Seed thay thế/Seed mở rộng sẵn khi được Plant. Giá, nguồn Seed và Gift preference không được quyết định bởi trace này. Một Gift hợp lệ bằng Wild Herb trả 1 AP và cho Heart theo fixture Person; Hand Collect Herb trả 1 AP theo baseline. Theo [Nell §7.2](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), Heart từ Gift đầu **có thể dùng cùng ngày**: kích hoạt Nell 0 AP rồi hai AP relief tự trả cho các action có phí tiếp theo. Vòng hai Turnip tối thiểu: D1 `Till 2 + Plant 2 + Water 2 = 6`; D2 Water 2; các D3/D5/D7/… `Harvest 2 + Plant 2 + Water 2 = 6`; D6/D12/D18 Water 2. Không ứng trước Nell relief trước khi Gift đầu hợp lệ.

### T1 · Herb đầu đến sớm, Herb thứ hai sau cửa D12

Chọn vị trí slip đầu `k=1`: Herb đầu lộ ở Forest D1; để nguyên qua các Sleep tới D6. Chọn slip của bộ kế `j=5`: sau khi Collect D6, bốn slip trống còn lại của bộ đầu rơi vào D7–D10, bốn slip trống của bộ kế rơi vào D11–D14, rồi Herb thứ hai lộ D15 (`11−1+5=15`) và ở lại đến D18 nếu chưa Collect.

| Ngày | Farm / Herb / Nell được chọn | AP dùng | Kết quả |
| --- | --- | ---: | --- |
| D1 | Till hai Soil trống, Plant và Water hai Turnip; Herb lộ nhưng chưa Collect | 6/6 | Herb còn trên Forest tableau; không rút thêm slip khi nó còn đó. |
| D3, D5 | Mỗi ngày Harvest 2 + Plant 2 + Water 2 | 6/6 mỗi ngày | Không buộc bỏ nhịp Farm để lấy Herb. |
| D6 | Water hai crop 2; Hand Collect Herb 1; sang River Gift Nell 1 | **4/6** | Gift đầu khả thi trong fixture; Herb rời Item sau Gift. Còn 2 AP, không tự nhận là lợi AP ròng. |
| D12 | Water hai crop 2; Nell hiện nhưng chưa có Herb thứ hai | 2/6 | **Không Gift**, dù Nell hiện; không cấp Herb/Heart thay thế. |
| D15, D18 | Herb thứ hai lộ D15 trong ngày Farm 6 AP và chờ; D18 Water 2 + Collect 1 + Gift 1 | D15 **6/6**; D18 **4/6** | Gift thứ hai khả thi trước Sleep cuối Season nếu người chơi chọn dành AP. |

Trace này cho thấy lịch Nell có thể bỏ một cửa D12 dù Herb đầu đã đến sớm; Herb tồn tại tới D18 cứu cửa sau mà không đổi luật nguồn.

### T2 · Herb đầu đến muộn nhất D5

Chọn `k=5`: bốn New Day đầu là slip trống, Herb đầu lộ D5. D5 là ngày Farm đầy 6 AP; Herb không mất ở Sleep nên D6 vẫn Collect được. Nếu Gift D6 và slip bộ kế có `j=5`, Herb thứ hai lộ D11 (`11−5+5=11`) dù đây là vị trí muộn nhất trong bộ kế.

| Ngày | Farm / Herb / Nell được chọn | AP dùng | Kết quả |
| --- | --- | ---: | --- |
| D5 | Harvest 2 + Plant 2 + Water 2; Herb đầu mới lộ | 6/6 | Herb chờ qua Sleep; không cần cắt một action Farm D5. |
| D6 | Water 2 + Collect 1 + Gift Nell 1 | **4/6** | Gift đầu khả thi với 2 AP còn lại. |
| D11, D12 | D11 Herb thứ hai lộ trong ngày Farm 6 AP và chờ; D12 Water 2 + Collect 1 + Gift 1 | D11 **6/6**; D12 **4/6** | Cửa Gift thứ hai khả thi trong nhánh này; không suy ra mọi nhánh đều có Herb ở D12. |

Trace T1 và T2 giữ nguyên luật năm slip; khác biệt `k=1` so với `k=5` đảo thứ tự cửa Gift thứ hai, không đòi reroll hay làm mới khi Nell xuất hiện.

### T3 · Mở thêm hai luống Field va vào Gift D6

Chọn Herb đầu `k=5` để nó lộ D5 và chờ D6. Ngoài vòng hai Turnip gốc, giả sử có hai Seed mở rộng trong Item. D4 dùng `Sickle` Clear **hai trong ba Soil có bụi** (2 AP) rồi `Hoe` Till đúng hai Soil vừa trống (2 AP); cộng Water hai crop gốc (2 AP) là **6/6**. Đây là bốn action riêng trên hai vị trí có sẵn, không thêm ô thứ chín, không nhận Stone từ bụi.

| Nhánh D6 | Actions đã chọn | AP dùng | Hệ quả nhìn thấy |
| --- | --- | ---: | --- |
| Mở rộng trước, không Gift D6 | Water hai crop gốc 2 + Plant hai Seed mở rộng 2 + Water hai crop mới 2 | **6/6** | Không còn AP để Collect + Gift D6, và chưa sở hữu Nell để kích hoạt relief. Herb vẫn ở Forest; nếu Collect ở ngày sau, Gift đợi cửa Nell D12. Khi Herb còn chưa Collect, bộ slip tạm dừng. |
| Gift, giữ Heart | Water hai crop gốc 2 + Hand Collect Herb 1 + Gift Nell 1 + Plant hai Seed mở rộng 2 | **6/6** | Gift đầu xảy ra D6 và giữ 1 Heart, nhưng hai crop mới **không Watered** ngày đó nên giữ `0/N` sau Sleep. Water/Growth của chúng lùi ít nhất một ngày. |
| Gift, dùng Heart ngay | Water hai crop gốc 2 + Collect 1 + Gift 1; nhận 1 Heart rồi kích hoạt Nell 0 AP; Plant hai Seed mở rộng 2 + Water hai crop mới 2, trong đó relief trả 2 AP | **6 AP thường + 2 AP relief** | Cả Gift lẫn mở rộng có Water hoàn tất D6. Nell đã sở hữu nhưng Heart vừa nhận đã tiêu và relief hết; không có Heart dự trữ. Thứ tự **Gift trước Plant/Water mở rộng** là điều kiện để relief áp đúng các action sau đó. |

Phí gốc để làm **cả** mở rộng đầy đủ lẫn Collect + Gift D6 là `2 + 2 + 2 + 1 + 1 = 8 AP`. Heart từ chính Gift đầu có thể bù 2 AP còn thiếu **sau khi đã nhận Heart**, nên không có soft lock hoặc yêu cầu phải có Nell từ trước. Lựa chọn thật là giữ Herb để dành AP hôm nay, Gift nhưng giữ Heart và chậm Water hai crop mới, hoặc Gift rồi tiêu Heart ngay để giữ nhịp mở rộng. Trace không chứng minh đủ Gold/Seed để mở rộng, giá trị dài hạn của Heart, hay lịch Nell ở Season sau.
