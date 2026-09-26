# Mine — contract hiện hành 01

Ngày cập nhật: 2026-09-25. **CG-17/19/20 đã được chủ dự án chốt.** [Nhật ký quyết định](ON-TABLE-CARD-SHAPE-DECISION-09.md) giữ provenance; [gói Mine và Copper Pickaxe đã duyệt](MINE-AND-COPPER-PICKAXE-LOCK-PROPOSAL-01.md) giữ phép tính và lý do chọn. Nếu bảng/fixture cũ còn `Search`, `Exposed Ore`, `Extract`, CP3 hoặc trả phí lật, dùng contract này cho Mine hiện tại.

## 1. Card grammar và hành động

Mine là Region card con trực tiếp của World, mở tableau với nguồn đang thấy: **đối tượng → chọn tác động → trả AP → nhận hệ quả**. Không giả lập di chuyển giữa các ô. Người chơi là tác nhân mặc định theo UI-45; `Pickaxe`/`Copper Pickaxe` là Tool card, `Ore` là Item output riêng với nguồn `Ore Rock`.

Ba nguồn mở sẵn cùng lúc. Xem, chọn và cuộn tới Mine không trả AP. `Pickaxe → Break` là **một commit**: kiểm target/Tool/AP, trừ phí hiển thị, giải kết quả, rồi đánh dấu nguồn spent. Không có nhát trung gian hoặc phí `Extract` thứ hai. Thiếu AP hoặc target/Tool không hợp lệ thì không commit, không trừ AP và không đổi nguồn.

| Nguồn | Phí `Break` bằng Pickaxe thường | Phí bằng Copper Pickaxe | Kết quả |
| --- | ---: | ---: | --- |
| `Rock` | 1 AP | 1 AP | Một trong hai Rock mỗi tầng lộ lối `Descend`; Rock còn lại cho `Nothing Found`. Kết quả gán cố định khi tạo tầng, không reroll bằng `Next`. |
| `Ore Rock` thường | 1 AP | 1 AP | Nhận 1 `Ore`, nguồn thành spent. |
| `Ore Rock` với state `Dense` | 3 AP | 2 AP | Nhận 1 `Ore`, nguồn thành spent. Cấp Copper tự giảm phí của chính action Break; không tăng yield. |

`Dense` là state nhìn thấy được trên `Ore Rock`, không phải card identity hoặc loại Ore mới. Phí thực trả hiện trước commit. Nếu Nell relief đang có, tính phí theo cấp Pickaxe trước rồi áp relief theo luật AP hiện hành. Bách Khoa ghi `Rock`, `Ore Rock`, `Ore` và các Tool identity khi **chính lá đó** lần đầu hiện; thấy `Ore Rock` chưa đồng nghĩa đã thấy `Ore`.

## 2. Nguồn, `Next` và cadence

Mỗi tầng có **6 source instance hữu hạn**:

| Tầng | `Rock` | `Ore Rock` thường | `Ore Rock` Dense |
| --- | ---: | ---: | ---: |
| Tầng đầu | 2 | 2 | 2 |
| Từ tầng thứ hai | 2 | 0 | 4 |

Ba instance đầu mở trên bàn; ba instance còn lại ở vòng luân phiên. `Next` dưới một lá chưa xử lý miễn phí đưa riêng instance đó về cuối vòng và lấy nguồn kế chưa ở hai ô kia; hai ô kia không đổi. Lá bỏ qua sẽ quay lại, giữ state/kết quả đã gán. Cùng một instance không bao giờ hiện ở hai ô. Khi không còn nguồn ngoài bàn, `Next` ẩn/khóa vì không thể đổi ô.

Sau `Break`, nguồn spent rời vòng, chỉ ô vừa xử lý tự nhận nguồn chưa spent kế tiếp nếu có. State spent vẫn được giữ để ngăn thưởng lặp. Khi pool còn dưới ba nguồn, chỉ bày số lá thực còn; khi cạn, các ô trống. `Sleep` và rời Mine **không** đổi tầng, bàn, thứ tự vòng, kết quả Rock ẩn, route đã lộ hoặc trạng thái spent; AP hồi theo luật ngày chung. Chỉ `Descend` tạo nguồn mới.

## 3. Lối xuống và `Descend`

Đúng một trong hai `Rock` mỗi tầng giấu lối xuống, nên phá tối đa hai Rock sẽ tìm được. Khi lối lộ, control `Descend` hiện dưới Depth status, ngoài ba ô nguồn. Lộ lối **không** tự chuyển tầng. `Descend` là commit **0 AP**: Depth tăng một tầng, nguồn chưa xử lý của tầng cũ bị bỏ lại, rồi tạo sáu instance của tầng mới theo bảng §2. Tầng cũ không quay lại trong vòng Mine này. Trước commit, UI cho biết số nguồn chưa xử lý. Người chơi có thể ở lại hoặc `Sleep` rồi quay lại để khai thác trước khi xuống. Khi mọi nguồn đã spent, lối xuống chắc chắn đã lộ, nên tầng không rơi vào trạng thái cạn nguồn nhưng không thể tiến tiếp.

## 4. Nâng đầu tiên

`Ore` dùng trực tiếp để nâng Tool. Trong khu Item, lá `Pickaxe` hiển thị action `Upgrade` và phí **3 Ore, 0 Gold, 0 AP** khi đủ Ore. Commit tiêu đúng 3 Ore và biến chính Tool đang sở hữu thành identity `Copper Pickaxe` ngay, kể cả giữa ngày. Không thêm Building/Equipment, Furnace–Coal–Bar hoặc thời gian chờ. `Copper Pickaxe` hiện vào Bách Khoa khi lá mới xuất hiện; entry `Pickaxe` cũ vẫn giữ. Không tạo hai Tool cùng lúc hoặc hệ thống trang bị.

Hai `Ore Rock` thường và một Dense ở tầng đầu cho 3 Ore với `1 + 1 + 3 = 5 AP`, nên đường nâng không phụ thuộc kết quả Rock hoặc Gold. Nếu bỏ qua Dense để xuống tầng tiếp, bốn nguồn Ore tại đó đều Dense; `Descend` không tạo vòng Ore rẻ vô hạn. Trên mỗi Dense, Copper tiết kiệm 1 AP. Các cấp Pickaxe sau và vật cản lớn hơn giữ định hướng đã đồng ý nhưng chưa chốt giá, identity, vị trí hoặc output.

## 5. Ranh giới triển khai

CG-20 chốt **luật và thông số Mine V0 qua Copper**, không biến các prototype `Dig → flip → Extract` hoặc `Search → Exposed Ore → Extract` thành code hiện hành. Workbook danh mục được đồng bộ trong lượt này; các fixture Mine vẫn chưa triển khai CG-17/19/20. Rời Mine đã chốt giữ state trong lượt chơi; persistence qua reload/save trên đĩa vẫn là yêu cầu triển khai chưa có, không đồng nhất với cadence `Sleep` đã chốt.
