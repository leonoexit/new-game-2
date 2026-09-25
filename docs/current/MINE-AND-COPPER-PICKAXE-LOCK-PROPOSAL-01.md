# Mine và Copper Pickaxe — gói luật đã chốt 01

Ngày: 2026-09-25. **Chủ dự án đã duyệt toàn bộ gói này — CG-20.** Đây là số và cách xử lý cụ thể của [Mine contract hiện hành](MINE-CURRENT-CONTRACT-01.md), đối chiếu với khung giấy 6 AP/ngày và [phép thử challenge hữu hạn](PICKAXE-MINE-CHALLENGE-PAPER-TEST-01.md). CG-17/19 giữ khung tương tác và tác dụng Tool; CG-20 chốt content, phí, cadence và upgrade đầu tiên. Không phải prototype tích hợp một ngày.

## 1. Nguồn theo tầng

Mỗi tầng có **6 source instance hữu hạn**. Ba nguồn mở sẵn; ba nguồn còn lại ở vòng `Next`. `Dense` là state của `Ore Rock`, không phải card identity hoặc loại Ore mới. Mỗi tầng mới có instance mới nhưng dùng cùng các identity `Rock`/`Ore Rock` trong Bách Khoa.

| Tầng | `Rock` | `Ore Rock` thường | `Ore Rock` Dense | Vai trò |
| --- | ---: | ---: | ---: | --- |
| Tầng đầu | 2 | 2 | 2 | Cho hai nguồn Ore dễ để bắt đầu, đồng thời cho thấy challenge Dense trước lần nâng. |
| Từ tầng thứ hai | 2 | 0 | 4 | Copper có chỗ dùng thường xuyên; người chơi không thể né toàn bộ Dense bằng cách `Descend` rồi chỉ lấy nguồn Ore dễ ở tầng kế. |

| Nguồn | Pickaxe thường: phí một `Break` | Copper Pickaxe: phí một `Break` | Hệ quả khi phá |
| --- | ---: | ---: | --- |
| `Rock` | 1 AP | 1 AP | Một trong hai Rock của tầng lộ lối `Descend`; Rock còn lại cho `Nothing Found`. Kết quả gán cố định lúc tạo tầng, không reroll bằng `Next`. |
| `Ore Rock` thường | 1 AP | 1 AP | Nhận 1 `Ore`; nguồn thành spent. |
| `Ore Rock` ở state `Dense` | 3 AP | 2 AP | Nhận 1 `Ore`; nguồn thành spent. |

Mỗi `Break` là **một commit**: kiểm Tool/target/AP → trừ phí đang hiện → giải kết quả → đánh dấu nguồn spent. Không có nhát trung gian hoặc `Extract`. Phí giảm vì cấp Pickaxe hiện có, không cần kích hoạt thêm. Cấp Copper không tăng Ore. Nếu Nell relief đang có, áp phí Pickaxe trước rồi dùng relief theo luật AP hiện hành; badge trước commit hiển thị số AP thường thực trả.

Hai `Rock` đảm bảo lối xuống tìm được bằng tối đa hai lần phá Rock; không cần Ore hoặc cấp Tool để mở đường. `Nothing Found` là kết quả làm việc cho nhánh không có thưởng. Khả năng `Rock` cho tài nguyên vẫn thuộc khung CG-17, nhưng chưa thêm item/yield mới vào gói V0 này.

## 2. `Next`, sau `Break`, cạn nguồn và `Sleep`

- Mỗi tầng giữ một vòng các **instance chưa spent**. `Next` dưới một lá chưa xử lý đưa đúng lá đó về cuối vòng, rồi lấy nguồn kế chưa nằm ở hai ô còn lại cho riêng ô này. Không đổi hai ô kia, không trả AP, không đổi kết quả ẩn của Rock.
- Sau `Break`, nguồn thành spent và rời vòng; **chỉ ô vừa xử lý** tự nhận nguồn chưa spent kế tiếp nếu còn. State spent được lưu trong tầng để ngăn nhận thưởng lần hai.
- Khi không còn nguồn ngoài ba ô, `Next` sẽ không đổi được ô và được ẩn/khóa; người chơi đang thấy mọi nguồn chưa spent còn lại. Sau khi nguồn cạn, ô trống. Nếu có ít hơn ba nguồn chưa spent, chỉ bày số lá còn lại, không nhân bản để lấp ba ô.
- `Sleep` chỉ phục hồi AP theo luật ngày chung; không đổi nguồn, thứ tự, kết quả ẩn, route đã lộ hoặc trạng thái spent của tầng. Rời Mine cũng giữ nguyên các state này. Chỉ `Descend` mới tạo tầng nguồn mới.
- Mỗi tầng có đúng một lối xuống ẩn trong một `Rock`, vì vậy khi toàn bộ nguồn đã spent thì `Descend` chắc chắn đã mở. Không có trạng thái cạn nguồn nhưng bị kẹt ở tầng đó.

## 3. `Descend`

Sau khi lộ lối, control `Descend` hiện bên dưới Depth status; không chiếm một trong ba ô nguồn. `Descend` là **commit 0 AP**: tăng Depth một tầng, bỏ lại các nguồn chưa phá của tầng cũ và dựng tầng mới theo tỷ lệ ở §1. Tầng cũ không quay lại trong vòng Mine này. Trước commit, UI cho biết còn bao nhiêu nguồn chưa xử lý để người chơi có thể ở lại hoặc trở về ngày khác. Lộ lối không tự gọi `Descend`; người chơi có thể `Sleep` rồi quay lại tầng hiện tại trước khi chọn.

## 4. Nâng đầu tiên: `Pickaxe` → `Copper Pickaxe`

| Mục | Luật đã chốt |
| --- | --- |
| Phí | **3 Ore, 0 Gold, 0 AP.** Ore dùng trực tiếp; không có Furnace/Bar. |
| Nơi | Ngay trên lá `Pickaxe` trong khu Item: khi có đủ Ore, mở lá để thấy action `Upgrade` và phí. Không thêm Building/Equipment hoặc yêu cầu đến một Area riêng. |
| Thời điểm | Bấm `Upgrade` thì trừ 3 Ore và hiệu ứng Copper có hiệu lực **ngay**, kể cả giữa ngày; không có thời gian chờ hoặc mượn/mất Tool. |
| Card identity | Chính Tool đang sở hữu biến từ identity `Pickaxe` thành `Copper Pickaxe` với hình/tên/cấp mới; không tạo Tool thứ hai trong Item. Bách Khoa ghi `Copper Pickaxe` khi lá mới hiện và giữ mục `Pickaxe` đã thấy. |

Challenge `Dense` đã có trong vòng Mine trước khi người chơi nâng. Hai `Ore Rock` thường ở tầng đầu cộng một `Dense` cho đúng **3 Ore với 5 AP** (`1 + 1 + 3`), nên người chơi có đường nâng Copper không phụ thuộc Rock ngẫu nhiên hay Gold. Với khung 6 AP/ngày, họ có thể lấy đủ Ore trong một ngày nếu dành phần lớn ngày cho Mine; Farm/Fishing tạo cạnh tranh AP thực tế. Nếu bỏ qua Dense để xuống tầng tiếp theo, cả bốn nguồn Ore của tầng đó đều Dense, nên không có vòng lấy Ore rẻ vô hạn. Sau khi nâng, mỗi `Dense` tiết kiệm 1 AP: tối đa 2 AP ở tầng đầu và 4 AP trên mỗi tầng sau nếu xử lý hết nguồn Ore.

Từ tầng thứ hai, nếu chỉ dành AP cho Ore, Pickaxe thường cần `4 × 3 = 12 AP` để lấy cả bốn nguồn, Copper cần `4 × 2 = 8 AP`. Với khung 6 AP/ngày, trong một ngày đầy đủ người chơi lấy được tối đa 2 Ore bằng Pickaxe thường hoặc 3 Ore bằng Copper từ các nguồn Dense chưa spent. Đây là chênh lệch tốc độ, không cộng thêm output vào từng nguồn.

## 5. Phạm vi quyết định

- Gói này chốt số liệu và cadence **cho Mine V0 qua cấp Copper**. Cấp sau và vật cản lớn hơn giữ định hướng đã đồng ý, chưa gán giá hoặc identity mới.
- Giá 3 Ore không được gọi là giá của Stardew video game/board game; đây là giá chuyển đổi của Little Valley Cards. Bảng video game dùng Gold + Bar; board có cost in trên Tool.
- Workbook được đồng bộ theo các identity/luật đã chốt trong lượt này; các prototype cũ vẫn là lịch sử và chưa triển khai CG-17/19/20. Nếu sau này sửa một thông số, kiểm lại đường nâng 5 AP và mức tiết kiệm 2/4 AP theo tầng.
