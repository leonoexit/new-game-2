# Season đầu V0 — kiểm công thức Farm / Nell / Shipping Bin · 08

Ngày: 2026-09-25. Trạng thái: **trace giấy S18 có điều kiện**, không phải luật giá, lịch Weather, xác suất Gift thực tế hoặc playtest cảm giác. Mục tiêu là kiểm một đường hợp lệ **xuyên 18 ngày** và tìm ngưỡng số có thể làm kẹt vòng Farm. Không giả định Mine/Fishing tạo Gold để che thiếu hụt; hai hệ này vẫn là lựa chọn AP độc lập theo contract riêng.

## 1. Quy tắc và giả định tách biệt

| Mức | Đầu vào |
| --- | --- |
| Chủ dự án / contract hiện hành | 6 AP/ngày, Season 18 ngày; hai Soil trống đủ cho trace, Field tối đa 8 vị trí. Hoe Till 1 AP/Soil, Plant 1 AP/Seed, Watering Can 1 AP/crop Growing, Hand Harvest 1 AP/crop Mature; Rain nếu có thay Water 0 AP; Growing thiếu Water chỉ đứng tiến trình, Mature chờ Harvest. [Farm grammar 41](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md), [Farm land contract](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md). |
| Working paper rule | [Package §6.9](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md): mở đầu 2 Turnip Seed và 0G; Turnip Seed luôn niêm yết, không giới hạn lượng trong Season đầu; Buy/Bin commit 0 AP; Bin trả Gold cuối ngày, nên chỉ Gold đã có trong ví mới mua được ngay. |
| Nell/Herb hiện hành | Wild Herb đầu lộ chậm nhất D5 và còn trên Forest qua Sleep đến Collect; Nell ở River trọn D6/D12/D18. Hand Collect 1 AP. Gift đúng item Wild Herb đã Collect: 1 AP, tiêu item, +1 Nell Heart, Gift đầu sở hữu Nell; cap 2. Heart đầy từ chối Gift mà giữ item/AP. Kích hoạt Nell 0 AP, chi 1 Heart tối đa một lần/ngày, relief tối đa 2 AP cho những action có phí sau đó trong ngày. [Lịch và nguồn 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md), [CG-46–51](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md). |
| Giả định **chỉ của trace** | Sunny cả 18 ngày; Turnip cần hai lần Sleep được Watered, một output/crop. Đặt `C = 2G/Turnip Seed`, `S = 4G/Turnip Sell` để **minh họa fixture**, không chốt giá. Vị trí Herb trong ba bộ năm slip đều là `k=j=l=5`: Herb lộ D5, D11, D17 nếu được Collect ở D6/D12; đây là một đường nguồn có thể xảy ra, không bảo đảm. Không dùng Nell relief, Fish, Ore, Herb Sell hay Gold khác. |

Tại mỗi ngày, `Gold cuối = Gold đầu − Gold Buy + Gold Bin đã trả cuối ngày`. Điều kiện Buy phải kiểm **trước** số hạng Bin của cùng ngày. Với hai Turnip, các lần Harvest trên đường này ở D3/D6/D9/D12/D15/D18; bán một item tại năm lần đầu, mua hai Seed ở New Day ngay sau. Herb không được bán trong trace, nên giá Herb `P_H` không tham gia phương trình.

## 2. Ledger đủ 18 ngày

`Gold cuối` là ví sau payout Bin và Sleep của ngày đó. `Turnip giữ` là tổng item Turnip còn trong Item sau khi gửi Bin; không có giới hạn kho/hỏng trong baseline giấy. `Heart` là Nell Heart cuối ngày. Mỗi hàng có tối đa 6 AP thường; Buy, Bin, navigation và Sleep không trừ AP.

| Ngày | Action có phí AP; Bin/Buy 0 AP | AP thường | Gold cuối | Turnip giữ | Heart | Herb / trạng thái nguồn |
| ---: | --- | ---: | ---: | ---: | ---: | --- |
| D1 | Till 2 + Plant 2 + Water 2 | 6 | 0G | 0 | 0 | Bộ slip đầu chưa ra Herb. |
| D2 | Water 2 | 2 | 0G | 0 | 0 | Hai crop Mature sau Sleep. |
| D3 | Harvest 2; Bin 1 Turnip, nhận 4G cuối ngày | 2 | 4G | 1 | 0 | Giữ item còn lại. |
| D4 | Buy 2 Seed bằng 4G; Plant 2 + Water 2 | 4 | 0G | 1 | 0 | Hai crop mới `1/2` sau Sleep. |
| D5 | Water 2 | 2 | 0G | 1 | 0 | Herb đầu lộ, để trên Forest qua Sleep. |
| D6 | Harvest 2 + Hand Collect Herb 1 + Gift Nell 1; Bin 1 Turnip | 4 | 4G | 2 | 1 | Gift đầu nhận Nell; không kích hoạt relief. |
| D7 | Buy 2 Seed; Plant 2 + Water 2 | 4 | 0G | 2 | 1 | Bộ slip kế đang rút. |
| D8 | Water 2 | 2 | 0G | 2 | 1 | Crop Mature sau Sleep. |
| D9 | Harvest 2; Bin 1 Turnip | 2 | 4G | 3 | 1 | Không cần nguồn Gold khác. |
| D10 | Buy 2 Seed; Plant 2 + Water 2 | 4 | 0G | 3 | 1 | Hai crop mới `1/2`. |
| D11 | Water 2 | 2 | 0G | 3 | 1 | Herb thứ hai lộ, chờ trên Forest. |
| D12 | Harvest 2 + Hand Collect Herb 1 + Gift Nell 1; Bin 1 Turnip | 4 | 4G | 4 | 2 | Heart đạt cap 2; không kích hoạt relief. |
| D13 | Buy 2 Seed; Plant 2 + Water 2 | 4 | 0G | 4 | 2 | Bộ slip thứ ba đang rút. |
| D14 | Water 2 | 2 | 0G | 4 | 2 | Crop Mature sau Sleep. |
| D15 | Harvest 2; Bin 1 Turnip | 2 | 4G | 5 | 2 | Payout đủ cho Buy D16. |
| D16 | Buy 2 Seed; Plant 2 + Water 2 | 4 | 0G | 5 | 2 | Hai crop mới `1/2`. |
| D17 | Water 2 | 2 | 0G | 5 | 2 | Herb thứ ba lộ, chờ trên Forest. |
| D18 | Harvest 2 + Hand Collect Herb 1; **Keep**, không Gift khi Heart `2/2` | 3 | 0G | 7 | 2 | Herb đã Collect ở Item không bị dọn theo Herb còn trên Forest lúc đổi Season. |

Kiểm tổng: 12 Seed được Plant = 2 đầu + 10 mua (`5 × 2 × 2G = 20G`); 12 Turnip Harvest, 5 gửi Bin (`5 × 4G = 20G`), 7 giữ; 2 Wild Herb Gift, 1 Wild Herb giữ, Nell Heart `2/2`; không chi Heart. Tổng action thường **55 AP trên trần 108 AP** của 18 ngày, nhưng AP dư của hôm trước không chuyển sang hôm sau. Ngày nặng nhất D1 đúng 6 AP, Gift D6/D12 là 4 AP. Ledger chứng minh **tồn tại một đường không kẹt** dưới fixture này, không chứng minh người chơi luôn chọn nó hay các hệ Mine/Fishing đã đủ nội dung.

## 3. Điều kiện giá thật sự ảnh hưởng vòng đầu

Đổi fixture thành `C > 0` (giá một Turnip Seed) và `S ≥ 0` (giá Sell một Turnip), giữ một output mỗi crop, mở đầu 0G và hai Seed. Với đường **bán một trong hai Turnip mỗi Harvest rồi tái gieo hai crop vào ngày kế**, điều kiện là `S ≥ 2C`. Khi `S = 2C`, ví về 0 sau mỗi Buy như bảng; `S > 2C` tích Gold, nên sau này có thể mua Seed sớm và đổi nhịp. Đây là điều kiện cho **chính sách giữ một item mỗi cặp**, không phải giá bắt buộc của game.

Nếu người chơi bán **cả hai** output sau mỗi Harvest, điều kiện tái gieo đủ hai crop bằng chính doanh thu là `2S ≥ 2C`, tức `S ≥ C`. Khi `S < C` và không có nguồn Gold khác, ngay lần đầu hai output bán hết vẫn không đủ hai Seed; vòng hai crop không tự nuôi được. Nếu `2S ≥ C` vẫn có thể mua **một** Seed D4 và chơi Farm nhỏ hơn; nếu `2S < C`, không mua nổi Seed nào từ hai Turnip đầu. Đây là **ngưỡng cần kiểm khi chọn giá**, không phải lỗi hiện hành: cả `C` và `S` vẫn là fixture. Giữ tất cả Turnip với ví 0G cũng làm thiếu tiền mua Seed, nhưng có thể đưa item đang giữ vào Bin và dùng payout ngày sau; đó là lựa chọn tài nguyên, không là khóa vĩnh viễn.

Do mở đầu 0G và Bin trả cuối ngày, **không một giá `S` nào** cho phép mua Seed bằng Turnip vừa Harvest trong chính D3. D4 mới là ngày mua sớm nhất nếu không có Gold/Seed khác. Vấn đề này do thứ tự thanh toán, không giải bằng cách tăng giá. Đường §2 không cần bán Herb; `P_H` không phải điều kiện để Farm tiếp tục. Nếu muốn định giá Herb sau này, dùng [kiểm Gift / Keep / Sell 07](NELL-WILD-HERB-GIFT-KEEP-SELL-ECONOMY-CHECK-07.md) để so lợi ích Gold trả sau với Nell/Heart, không gán Heart một tỷ giá Gold giả.

## 4. AP, Heart và ranh giới kết luận

Với `H` crop Mature Harvest, `P` Seed Plant và `G` crop Growing cũ cần Water, ngày Sunny có phí Farm `H + P + G + P` AP; Rain bỏ toàn bộ phần Water. Đường hai luống trong bảng không cần Nell: có thể **giữ Heart** cho Mine, Fishing hoặc mở rộng Field khi một ngày cụ thể vượt 6 AP. Ngày bốn crop với hai Mature, hai Growing và tái gieo ngay có phí 8 AP; người chơi có thể hoãn Plant/Water, chờ Rain hoặc dùng Heart đã nhận hợp lệ. Vì Growing không chết và Mature chờ Harvest, đây là cạnh tranh AP, không phải khóa vòng Farm. Không suy từ tổng 53 AP dư rằng AP có thể chuyển ngày hay mọi action tùy chọn đều làm được.

Trong đường slip đã chọn, D18 có Herb thứ ba nhưng Heart `2/2`. CG-48 từ chối Gift; người chơi có thể Keep như bảng, hoặc kích hoạt Nell `2→1` trước Gift rồi dùng credit cho action có phí sau activation, Gift đưa Heart lại `2/2`. Bảng chọn Keep để chứng minh **không có nghĩa vụ tiêu Heart hoặc quà**. Nếu slip khác làm Herb thứ hai chưa kịp D12, [kiểm lịch 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) chứng minh nó đến chậm nhất D15 và có thể Gift D18; Heart đầu vẫn giữ. Một Herb thứ ba cho D18 không được bảo đảm.

**Kết luận phát triển:** công thức chỉ ra hai thứ cần bảo toàn khi author số: khả năng tái mua Seed với `S/C` theo nhịp mong muốn, và thứ tự payout cuối ngày. Trong luật và fixture hiện hành có ít nhất một vòng S18 hoàn chỉnh, không cần giá Wild Herb, Fish, Mine hoặc activation Nell để tránh kẹt. Chưa có cơ sở toán học buộc chọn chính xác `2G`, `4G` hay `P_H`; chúng là thông số cân bằng sau khi xác định mục tiêu nhịp chơi. Season sau, giá của các item khác, Weather thực tế, mức độ người chơi thích Water/Gift/Sell và phần Mine/Fishing không được xác nhận bởi ledger này.

**Kiểm tiếp trên cùng ledger:** [overlay 09](FIRST-SEASON-MINE-FISHING-AP-OVERLAY-09.md) đặt Mine/Fishing vào AP trống D2–D6 theo hai contract hiện hành; kết quả của §2–4 ở đây vẫn là baseline Farm/Gold/Nell, còn overlay là một nhánh lựa chọn bổ sung.
