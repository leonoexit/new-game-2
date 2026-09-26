# Nell V0 — kiểm cap Heart qua Farm, Mine, Fishing · 06

Ngày: 2026-09-25. Trạng thái: **kiểm giấy và lựa chọn chuyển thể CG-51 cho Nell V0**; không phải playtest người chơi mới hay xác nhận cân bằng phát hành. So cap `1/2/3` trên cùng [lịch Nell CG-46/47](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md), Gift đúng item `Wild Herb` CG-49 và [1 AP/+1 Heart mỗi Gift CG-50](NELL-GIFT-AP-HEART-DAYS-6-12-18-PAPER-CHECK-05.md). Heart vẫn tồn tại qua Season; mỗi ngày Nell dùng tối đa một activation `1 Heart → 2 AP relief`, áp cho action có phí **sau** activation rồi hết ở Sleep.

## 1. Phạm vi và nguồn Gift chung

Giữ 6 AP/ngày, hai Turnip cần hai lần Sleep được Watered, Seed đủ dùng, trời Sunny và Pickaxe thường làm **input phép thử**. Farm dùng [action grammar 41](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) và [Field hiện hành](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md); Mine dùng [Break Dense 3 AP, nguồn hữu hạn và giữ state qua Sleep](../current/MINE-CURRENT-CONTRACT-01.md); Fishing dùng [Cast 1 AP mỗi Spot, ba Spot mới mỗi ngày](../current/FISHING-CURRENT-CONTRACT-01.md). Không dùng `Catch 2 AP`, `Extract`, Blue Eel hoặc Project từ trace cũ.

Chọn một đường nguồn hợp lệ để so **cùng cơ hội**: slip Herb thứ nhất ở vị trí `k=5` lộ D5; sau Collect/Gift D6, Herb thứ hai có `j=1` lộ D7; sau Collect/Gift D12, Herb thứ ba có `l=1` lộ D17. Chỉ có một Wild Herb chưa Collect trên Forest tableau tại một thời điểm. Ba cửa Gift D6/D12/D18 **có nguồn** trong nhánh này nếu người chơi giữ item và dành AP; [kiểm lịch 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) đếm `66/125` bộ ba slip như vậy trong chính sách chỉ Collect ở ngày Nell hiện. Đó là tỷ lệ bộ slip cho cơ hội nguồn, **không là tỷ lệ ba Gift khi chơi**. Thiếu AP, item hoặc lựa chọn Gift sẽ giảm nguồn Heart thực tế.

## 2. Nhánh A · hai ngày cần relief sau D12

Có một đường **AP khả thi** để Field tới D13 với hai crop Mature và hai crop Growing `1/2`, nếu có Seed thay thế: D1 Till/Plant/Water hai plot `6`; D2 Water `2` và Clear/Till hai plot nữa `4`; D3 Harvest cặp đầu `2`, Plant cả bốn plot `4` nhưng chưa Water; D4 và D5 Water bốn crop `4` mỗi ngày, tất cả Mature D6. D6 Collect + Gift Nell `2`, Harvest/Plant cặp đầu `4`, để cặp kia Mature; D7/D8 Water cặp mới `2` mỗi ngày; D9 Harvest/Plant/Water cặp đầu `6`; D10 Water cặp đầu `2`; D11 Harvest/Plant cặp đầu `4` nhưng chưa Water; D12 Water cặp đầu `2` rồi Collect + Gift Nell `2`. Không ngày nào vượt 6 AP thường, không dùng Nell relief trước D13. Cặp đầu đang `1/2` và cặp còn lại vẫn Mature vào D13. Seed/Gold và trời Sunny trên đường này là input thử, không là nguồn Seed hoặc lịch Weather bảo đảm.

D13 kế hoạch Sunny `Harvest 2 + Plant 2 + Water 4 = 8 AP` theo grammar Farm. Sau Sleep, hai crop mới cần Water D14; hai crop cũ đã Mature thì chờ Harvest. D14 giả định một `Ore Rock` Dense chưa spent và Pickaxe thường trong Mine, còn cả ba Fishing Spot chưa Cast: `Water 2 + Dense Break 3 + 3 Cast × 1 = 8 AP`. Ba Cast có thể cho Fish hoặc `No Bite`; kết quả không đổi phí. Nguồn Dense và Seed là **precondition có thể tạo trong V0**, chưa chứng minh người chơi luôn chọn đúng đường này.

| Cap so sánh | D6 và D12 | D13 Farm 8 AP | D14 Farm + Mine + Fishing 8 AP | Khác biệt thực |
| --- | --- | --- | --- | --- |
| `1` | D6 Gift: Heart `0→1`. D12 đang đầy: phải kích hoạt `1→0` trước Gift; 2 credit có thể trả Collect `1` + Gift `1`; Heart về `1`. | Kích hoạt `1→0`, 2 credit trả 2 AP; **6 AP thường**, đủ kế hoạch. | Không còn Heart, chỉ có 6 AP thường; phải hoãn ít nhất 2 AP, ví dụ hai Cast. | Cap 1 dùng relief ở ngày D12 để nhận quà, không cất được hai lần dùng cho D13–D14. |
| `2` | D6 Gift `0→1`; D12 Collect + Gift giá 2 AP thường, Heart `1→2`; không cần kích hoạt. | Kích hoạt `2→1`; 8 AP gốc → **6 AP thường**. | Kích hoạt `1→0`; 8 AP gốc → **6 AP thường**. | Giữ hai Heart qua hai ngày có mục tiêu AP liên tiếp. |
| `3` | Cùng Heart `2` cuối D12 như cap 2. | Cùng kết quả cap 2. | Cùng kết quả cap 2. | Suất thứ ba chưa có tác dụng ở nhánh hai Gift này. |

Cap 1 không làm mất vĩnh viễn Herb D12 và có thể hữu ích khi D12 cũng bận: activation làm Collect + Gift không trừ AP thường. Cap 2 **dời** cùng 2 AP relief đó từ ngày D12 sang D14 nếu D12 còn AP rảnh. Không gọi cap 2 là thêm Heart hay tăng relief mỗi activation.

## 3. Nhánh B · suất Heart thứ ba qua ranh giới Season

So riêng đường **không kích hoạt trước D18**: D6/D12 đã Gift, Heart ở `2`, Herb thứ ba chờ tới D18. Chọn D18 Plant hai Turnip vào Soil đã cày, để chúng ở `0/2` qua Sleep (không Water hôm ấy), và Collect + Gift Herb thứ ba. D18 có 6 AP thường; không cần Season tự hồi Heart. Với cap 2, CG-48 từ chối Gift ở stock đầy cho tới khi kích hoạt Nell `2→1`; credit có thể trả Collect `1` + Gift `1`, Heart về `2`, Plant trả 2 AP thường. Với cap 3, Collect + Gift trả 2 AP thường, Heart `2→3`, Plant trả 2 AP thường. Cả hai đều hợp lệ; cap 3 dùng thêm **2 AP thường ở D18** để cất activation thứ ba.

Giả định trước D19 đã xuống tầng Mine thứ hai, giữ ít nhất ba trong bốn Dense `Ore Rock` chưa spent và **chưa chọn nâng** Copper Pickaxe. Mine giữ nguồn qua Sleep; đây là nhánh chọn, không cấp Ore miễn phí. D19 và D20 Water hai Turnip (`2 AP`), D21 Hand Harvest chúng (`2 AP`). Mỗi ngày chọn một Dense Break (`3 AP`) và ba Cast (`3 AP`, ba Spot làm mới ở Sleep). Vì vậy từng ngày D19–D21 có **8 AP gốc = 2 Farm + 3 Mine + 3 Fishing**; các output Fish/Ore không được dùng để trả chi phí khác trong trace.

| Cap | Heart vào D19 | D19 / D20 / D21 | Kết quả |
| --- | ---: | --- | --- |
| `1` | Tối đa 1; D18 phải kích hoạt trước Gift nếu đầy | Tối đa một ngày 8→6 AP | Hai ngày còn lại cần hoãn action hoặc đổi kế hoạch. |
| `2` | 2; D18 đã dùng activation để mở Gift và trả Collect + Gift | Hai ngày 8→6; ngày thứ ba vẫn 8 AP gốc | D18 tiết kiệm 2 AP thường nhưng không mang số AP thừa qua Sleep; thiếu 2 AP ở một ngày D19–D21. |
| `3` | 3; D18 trả Collect + Gift bằng AP thường | Cả ba ngày kích hoạt một lần, mỗi ngày 8→6 AP thường | Giữ được chuỗi ba ngày, đổi bằng 2 AP thường trả sớm ở D18. |

Đây là **lợi ích thật nhưng có điều kiện của cap 3**: chuyển 2 AP relief từ một ngày D18 còn chỗ sang ngày đông việc thứ ba. Nó đòi ba Herb được Collect/Gift, còn AP/Seed/Soil/Dense để tạo các precondition, và ba ngày liên tiếp có kế hoạch 8 AP. Không suy nó xảy ra thường xuyên từ `66/125` bộ slip. Nếu chỉ có hai Gift trong Season, cap 3 không khác cap 2 ở stock; nếu không có ba ngày đông việc, Heart thứ ba chỉ là chỗ cất dự phòng. Một người chơi luôn có thể hoãn Cast/Mine hoặc Farm; cap không là gateway cho core verb.

## 4. Lựa chọn chuyển thể · CG-51

Chọn **Nell V0 có cap đúng 2 Nell Heart** trong luật giấy. Đây là trị số **riêng cho Nell**, không tự áp cho Person sau V0. Cap 1 buộc tiêu Heart trước Gift D12 nếu đang giữ một Heart và làm mất lựa chọn giữ hai lần relief cho hai ngày kế nhau. Cap 2 hỗ trợ hai ngày ấy, cho Heart qua ranh giới Season và vẫn để CG-48 chặn Gift khi đầy. Cap 3 có giá trị tại nhánh ba ngày §3, nhưng thêm một suất dự trữ cho một chuỗi nguồn và mục tiêu hẹp hơn; không cần nó để Farm, Mine hoặc Fishing hoạt động. Vì cap chỉ thay **thời điểm** có thể dùng relief, không thay phí `1 AP/+1 Heart` của Gift hay `2 AP` mỗi activation, chọn mức nhỏ nhất giải được nhánh hai ngày làm baseline V0.

CG-51 là **lựa chọn chuyển thể sau kiểm giấy theo action được chủ dự án cho xử lý**, không phải lời chốt trực tiếp của chủ dự án hoặc đo cân bằng từ runtime/người chơi mới. Nếu thử chơi cho thấy chuỗi ba ngày thiếu AP đáng bảo vệ, so lại cap 3 cùng giá trị Herb, Seed, Ore và Fish thật trước khi đổi luật. Giữ nguyên lịch Nell, nhịp Herb, CG-48 (Heart đầy thì giữ quà), giới hạn một Gift và một activation/ngày, và việc Nell ability dùng được khi Nell vắng mặt.
