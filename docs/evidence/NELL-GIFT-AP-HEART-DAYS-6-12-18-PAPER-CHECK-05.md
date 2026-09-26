# Nell V0 — trace phí Gift và Heart ngày 6/12/18 · 05

Ngày: 2026-09-25. Trạng thái: **kiểm giấy dẫn tới lựa chọn chuyển thể CG-50 cho V0**, không phải playtest người chơi mới hay cân bằng bản phát hành. [CG-46/47](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) cho Nell hiện ở River ngày 6/12/18 của mỗi Season S18; [CG-49](NELL-WILD-HERB-GIFT-ELIGIBILITY-AUDIT-04.md) chọn đúng `Wild Herb` đã Collect vào Item làm Gift. Chủ dự án từng đề xuất tạm 1 AP/Gift trong [quyết định Person/Heart](NPC-HEART-DESIGN-DECISIONS.md); các phép thử cũ dùng `+1 Heart/Gift` nhưng chưa tự chốt con số ấy.

**Cập nhật cap về sau:** [trace 06](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn cap `2` riêng Nell làm luật giấy V0 (CG-51). Chỗ dưới đây gọi cap 2 là fixture phản ánh lúc chỉ kiểm phí và lượng Heart; cân bằng cuối vẫn mở.

## 1. Input và cách đếm

| Loại | Input |
| --- | --- |
| Luật hiện hành | Gift đầu hợp lệ sở hữu Nell và tạo Nell Heart; Gift sau tạo Heart của cùng Nell; tối đa một Gift/Nell/ngày. Heart tồn tại qua ngày, có cap riêng. Heart đầy thì không commit Gift, giữ item/AP/lượt Gift (CG-48). Nell ability tiêu 1 Heart, 0 AP, tối đa một lần/ngày để cấp 2 AP relief cho các action **sau khi kích hoạt**; credit dư hết ở Sleep. |
| Nguồn đã chọn | Herb world ở Forest phải được `Hand Collect` vào Item, giá 1 AP. Nell hiện suốt ngày 6/12/18 tại River; mở Region không tốn AP. Herb chưa Collect chờ qua Sleep nhưng bị dọn ở ranh giới Season. |
| Giả định số để kiểm | Gift giá **1 AP** và cho **1 Heart**; ngày có 6 AP, vòng hai Turnip Sunny dùng Water 2 AP ở D6/D12/D18. Cap `2` chỉ là fixture so sánh, **chưa được chốt**. Không giả định mọi lần Nell hiện đều có Herb, Seed hay AP rảnh. |

Nhánh nguồn ba Gift trong một Season tồn tại, chẳng hạn slip Herb đầu `k=5`, bộ hai `j=1`, bộ ba `l=1`: Herb thứ nhất lộ D5, thứ hai D7 và thứ ba D17. Collect ở D6/D12/D18 lần lượt mở bộ slip tiếp theo; không có lá Herb thứ hai đồng thời trên Forest. Đây là **một trace khả thi**, không phải lịch bảo đảm. [Kiểm lịch 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) đếm `66/125` bộ ba slip cho ba cửa có nguồn; phép liệt kê lại trong action này cho cùng kết quả.

## 2. Trace ba cửa có nguồn

| Ngày | Heart đầu ngày | Thứ tự action được chọn | AP thường; credit | Heart cuối ngày |
| --- | ---: | --- | --- | ---: |
| S1 D6 | 0 | Water hai crop `2`; Collect Herb `1`; Gift Nell `1`; **sau Gift** kích hoạt Nell và dùng 2 credit cho hai action có phí khác | `4/6` trước ability; sau đó vẫn `4/6`, credit `2→0` | `0→1→0`; Nell được sở hữu |
| S1 D12 | 0 | Water `2`; Collect Herb thứ hai `1`; Gift `1`; giữ Heart qua Sleep | `4/6`; không tạo credit | 1 |
| S1 D18 | 1 | Water `2`; Collect Herb thứ ba `1`; Gift `1`; giữ Heart | `4/6`; không tạo credit | 2 **chỉ theo fixture cap 2** |

Gift đầu **không thể tự trả phí của chính nó** bằng Heart chưa nhận: kiểm đủ 1 AP Gift và item trước commit, rồi mới tăng Heart. Ở D6 nếu không có action sau Gift dùng credit, nên giữ Heart; 2 credit không tự biến thành AP thường hoặc tích sang hôm sau. D12/D18 chỉ có Herb trong nhánh slip đã nêu và nếu người chơi chọn dành AP. Nếu nguồn thứ hai đến D15 như nhánh `k=1,j=5`, D12 không Gift và D18 mới là Gift thứ hai.

## 3. Heart đầy, Gift lặp và AP relief

Với fixture cap `2`, nếu **không kích hoạt ở D6 và D12** thì trước S1 D18 Heart đã là 2. Chạm Gift khi ấy bị CG-48 từ chối: Herb và AP giữ nguyên; hôm đó vẫn chưa Gift. Người chơi có thể để Herb ở Item, hoặc kích hoạt Nell trước (`2→1` Heart, nhận 2 credit), rồi Collect/Gift nếu có Herb và Nell còn hiện. Nếu Collect `1` và Gift `1` là hai action có phí tiếp theo, credit trả cả `2 AP`, AP thường không giảm, Heart trở về `2`. Đây là **một Herb tiêu đi để đổi quyền dùng relief hôm đó**, không phải Heart miễn phí hay thêm Gift thứ hai. Nếu Herb đã ở Item, credit trả Gift `1`, còn `1` credit cho action có phí kế tiếp.

Nếu D6 đã tiêu Heart và D12 Gift khi Heart `0`, Gift trả 1 AP thường (cộng 1 AP Collect nếu chưa cất Herb) và phục hồi lên `1`. Có thể kích hoạt sau Gift trong cùng ngày nhưng credit chỉ áp cho action sau kích hoạt. Khi AP thường đã 0, người chơi đã sở hữu Nell và còn Heart vẫn có thể kích hoạt để trả một Gift **sau đó** bằng credit nếu các điều kiện khác hợp lệ; Gift đầu lúc chưa sở hữu không có đường vay credit này.

Giới hạn `một Gift/Nell/ngày`, `một activation/ngày`, Herb hữu hạn và credit hết ở Sleep chặn vòng Gift → ability → Gift lặp. Mỗi Gift hợp lệ thêm đúng một Heart, mỗi activation trừ đúng một Heart; ở Heart dưới cap không có overflow, còn tại cap Gift bị từ chối. Một Gift đã Collect trước đó có thể cho người chơi 1 AP relief ròng trong ngày activation trước Gift; cái giá vẫn là Herb, cơ hội gặp Nell và quyền Gift hôm đó. Chưa có giá bán Herb hay đo giá trị những AP được dời sang ngày khác để gọi đó là lợi kinh tế cuối.

## 4. Lựa chọn chuyển thể V0 · CG-50

Chọn **Gift Nell giá gốc 1 AP và `+1 Nell Heart` cho mỗi Gift hợp lệ**, gồm Gift đầu sở hữu Nell; Heart mới dùng được ngay sau commit. Phí gốc 1 AP tuân cùng ngữ pháp action một commit và proposal tạm của chủ dự án; `+1` nối một Gift với một lần kích hoạt 1 Heart, không tự lấp cap 2 từ Heart 0. `0 AP/Gift` làm nguồn Herb rẻ hơn và cho đường AP thuận lợi hơn sau Collect; `2 AP/Gift` khiến Collect + Gift đầu tốn 3 AP trước khi được dùng ability 2 credit. `+2 Heart/Gift` cần thêm luật overflow/cap và đổi nhịp dự trữ ngay từ Gift đầu. Hai con số chọn ở đây cho đường đầu `Collect 1 + Gift 1 = 2 AP` đổi lấy một activation tối đa 2 AP sau đó, đồng thời lần đầu còn sở hữu Nell; không khẳng định mọi lần Gift đều đáng giá.

CG-50 là **lựa chọn chuyển thể cho luật giấy V0 sau trace**, không phải quyết định trực tiếp của chủ dự án hay cân bằng phát hành đã được người chơi xác nhận. Không đổi cap số: `2` vẫn là fixture, còn cap riêng của Person và CG-48 là luật. Không thêm nguồn Herb, ngày Nell, quà khác, sale value hoặc recovery khi hụt AP. Số AP/ngày và nguồn Seed/Gold của trace hai Turnip vẫn là input thử. Cần kiểm cap số và giá trị Herb với các nhánh Farm/Mine/Fishing thực tế ở bước cân bằng sau.
