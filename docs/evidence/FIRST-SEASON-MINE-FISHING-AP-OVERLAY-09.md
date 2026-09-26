# Season đầu V0 — ghép Mine và Fishing vào ledger Farm / Nell · 09

Ngày: 2026-09-25. Trạng thái: **kiểm khả thi AP bằng công thức trên một trace giấy**, không là lịch chơi bắt buộc, bảo đảm Fish, giá bán Fish/Ore hoặc playtest. Lấy nguyên [ledger S18 08](FIRST-SEASON-FARM-NELL-BIN-FORMULA-AUDIT-08.md): hai luống Turnip, 0G đầu, Gold từ một Turnip bán ở D3/D6/D9/D12/D15, Gift Nell D6/D12, giữ Herb D18; fixture Sunny, Seed 2G, Turnip bán 4G và Herb slip `k=j=l=5` giữ nguyên. Chỉ thêm action Mine/Fishing vào AP **còn trong chính ngày đó**; không ứng AP ngày khác hay dùng Nell relief.

## 1. Hành động hợp lệ dùng trong phép ghép

[Mine contract 01](../current/MINE-CURRENT-CONTRACT-01.md) bày tầng đầu 2 `Rock`, 2 `Ore Rock` thường, 2 `Ore Rock` Dense trong pool sáu nguồn hữu hạn. `Next` để chọn nguồn chưa xử lý, inspect và vào Mine đều 0 AP; rời Mine/Sleep giữ state. Pickaxe thường Break hai Ore Rock thường tốn `1+1 AP`, một Dense tốn `3 AP`, mỗi nguồn cho một Ore. Đủ 3 Ore thì Upgrade trực tiếp lên `Copper Pickaxe` tốn 3 Ore, 0 AP/Gold. Một trong hai Rock có lối xuống cố định, nên tối đa hai Break `1 AP` sẽ lộ route; Descend 0 AP bỏ nguồn chưa xử lý ở tầng cũ. Tầng sau có bốn Dense; Copper Break một Dense tốn 2 AP, cho 1 Ore. Không dùng `Search`/`Extract`/CP3 cũ.

[Fishing contract 01](../current/FISHING-CURRENT-CONTRACT-01.md) bày ba `Fishing Spot` cùng identity ở River, mỗi spot Cast tối đa một lần/ngày rồi spent kể cả `No Bite`; Sleep mở lại và xáo ba odds ẩn `25%/50%/75%`. Mỗi `Cast` tốn 1 AP, trả độc lập theo spot đã chọn: một `Silver Minnow` hoặc `No Bite`. Không dùng `Catch 2 AP`, Blue Eel hoặc Rain bonus cũ. `Silver Minnow` có thể giữ/gửi Bin nhưng giá chưa chọn, nên phép ghép này **giữ Fish nếu bắt được**, không dùng Fish để trả Seed. Nell ở River D6 không chiếm một Fishing Spot hay đổi odds.

## 2. Overlay D2–D6 trên AP còn trống

`AP nền` và Gold/Seed/Turnip/Herb/Heart lấy đúng hàng cùng ngày của ledger 08. D4 có nhánh tìm route trong một hoặc hai Rock; dùng **mức tối đa hai** để chứng minh ngày vẫn vừa 6 AP. Các nguồn Mine cần thấy có thể được đưa vào ba ô bằng `Next` miễn phí khi chưa xử lý, không thay phí Break hay nhân output.

| Ngày | AP nền 08 | Mine thêm | Fishing thêm | AP thường tối đa | State mới sau ngày |
| ---: | ---: | --- | --- | ---: | --- |
| D1 | 6 | — | — | **6** | Hai Turnip bắt đầu; không có AP cho hệ khác hôm này. |
| D2 | 2 | Break hai Ore Rock thường: `1+1=2 AP` | Cast hai Spot khác nhau: `2 AP` | **6** | Có 2 Ore. Hai Spot spent, spot thứ ba còn nhưng ngày kết thúc. Fish nhận `0–2`. |
| D3 | 2 | Break một Dense bằng Pickaxe thường: `3 AP`; đủ 3 Ore → Upgrade Copper `0 AP/Gold`, tiêu 3 Ore | Cast một Spot: `1 AP` | **6** | Có Copper Pickaxe, Ore còn 0. Bin Turnip vẫn trả 4G cuối D3; Cast có thể `No Bite`. |
| D4 | 4 | Break Rock đến khi route lộ: `1–2 AP`; Descend `0 AP` | — | **6** | Lối xuống chắc chắn lộ chậm nhất Rock thứ hai; sang tầng 2, bỏ các nguồn tầng đầu chưa spent. Buy hai Seed bằng 4G đã có từ D3, không dùng payout D4. |
| D5 | 2 | Copper Break một Dense tầng 2: `2 AP` | Cast hai Spot: `2 AP` | **6** | Nhận 1 Ore; Dense ấy spent. Fish nhận thêm `0–2`; Herb đầu lộ và chờ trên Forest. |
| D6 | 4 | — | Cast hai Spot sau khi Sleep mở lại: `2 AP` | **6** | Hand Collect + Gift Nell trong AP nền vẫn hợp lệ; Heart `0→1`, không kích hoạt Nell. Bin Turnip trả cuối D6. Fish nhận thêm `0–2`. |
| D7–D18 | Như ledger 08 | Không cần thêm Mine | Không cần thêm Cast | Tối đa 4 trong ledger 08, trừ D18 là 3 | Farm/Gold/Gift D12/Keep D18 giữ nguyên; Mine state và Fish đã nhận tồn tại qua Sleep. |

D4 nếu Rock đầu có route thì Mine chỉ tốn 1 AP và ngày dùng 5; nếu Rock đầu là `Nothing Found`, Rock thứ hai chắc chắn có route và ngày dùng 6. Đây là nhánh theo kết quả ẩn **đã gán**, không reroll hoặc đòi biết trước Rock đúng. D2/D3 lần lượt tạo `2+1=3 Ore`, Upgrade dùng cả 3; D5 cho 1 Ore mới. Không cần bán Ore, Fish hoặc Herb; Gold cuối ngày và năm lượt Buy Seed vẫn như ledger 08.

Tổng overlay là **15–16 AP** (`Mine 2+3+(1–2)+2 = 8–9`, Fishing `2+1+2+2 = 7`); cộng 55 AP nền thành **70–71 AP trong S18**, nhưng điều kiện quan trọng là **từng ngày** D1–D6 không vượt 6 AP. Có bảy Cast trải trên D2/D3/D5/D6; các spot đều hợp lệ vì số Cast mỗi ngày `2/1/2/2 ≤ 3` và Sleep mở lại chúng. Mỗi Cast vào spot chưa biết odds có kỳ vọng 0,5 Fish; tổng kỳ vọng của bảy Cast là **3,5 Silver Minnow**. Kỳ vọng không phải output chắc chắn: toàn bộ Cast có thể trả `No Bite`, và đường Copper/Farm/Gift trên đây vẫn hợp lệ.

## 3. Hệ quả và giới hạn

**Đủ chỗ cho một mẫu của cả ba hệ trong Season đầu:** vòng hai luống vẫn có Seed/Gold; Mine nhận Copper bằng ba Ore đúng contract, tìm route và dùng Copper trên Dense tầng kế; Fishing có bảy Cast hợp lệ; Nell nhận Gift đầu ở D6 mà không cần dùng Heart. Điều này chứng minh **cùng tồn tại** về AP/nguồn trong một nhánh Sunny, không chứng minh người chơi sẽ muốn làm đủ ba hệ trong D2–D6. Những ngày D2–D6 của nhánh này gần như đầy AP, nên đổi thứ tự hoặc mở rộng Field sẽ cần hoãn một action, Rain, hoặc dùng Nell relief sau khi thực sự có Heart.

**Điểm chưa được giải bằng tổng AP:** một Fish cụ thể không được bảo đảm dù kỳ vọng 3,5; giá Fish chưa chọn nên không thể chứng minh một vòng Gold từ Fishing. Sau Copper, Ore D5 chưa có Upgrade kế tiếp được author, nên không được gọi khai thác Dense lặp là tiến trình dài hạn đã hoàn chỉnh. D4 Descend bỏ một Dense tầng đầu chưa khai thác là lựa chọn có chủ ý, không tạo Ore miễn phí. Giao diện chạm nhiều vùng và mức độ thú vị không suy ra từ phép tính. Không thêm tỷ lệ, item, reward, Gold sink hay luật mới từ phép ghép này.
