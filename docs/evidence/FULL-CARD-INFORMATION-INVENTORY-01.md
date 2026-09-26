# Full card — kiểm kê thông tin trước khi chốt bố cục 01

Ngày: 2026-09-26. Trạng thái: **năm trường nội dung đã chốt ở UI-52; các trường phụ và hierarchy còn mở**. Chủ dự án yêu cầu dựng mẫu thử trước, sau đó liệt kê thông tin bắt buộc trên lá full rồi mới quyết định layout/hierarchy. [Mẫu ba lá](../../prototype/full-card-study.html) là phép thử riêng; panel demo cùng dùng năm nhãn nhưng chưa khóa layout cuối.

Nguồn đối chiếu: [danh mục identity/loại/nơi](../current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx), [nhật ký quyết định UI-50 và card grammar](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md), [Farm land](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md), [Farm action](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md), [Fruit Tree](../current/FIRST-PLAYABLE-FRUIT-TREE-CONTENT-BATCH-01.md), [Mine](../current/MINE-CURRENT-CONTRACT-01.md), [Fishing](../current/FISHING-CURRENT-CONTRACT-01.md). Danh mục đã được rà theo các họ `World/Region/Container`, `Plot/Vegetation/Source`, `Tool/Item/Seed`, `Equipment/Utility/Person`; không lấy cột điểm còn mở làm thông tin người chơi.

## 1. Năm trường nội dung đã chốt

`Type` là nhãn tiếng Anh duy nhất cho **loại lá** của danh mục V0; không dùng `Category` song song. `Action` là tên hành động, không phải cách chạm nguồn/đích hay nút thực thi. Tên chuẩn lấy từ verb của grammar/contract đang sở hữu; ví dụ `Till`, `Plant`, `Water`, `Harvest`, `Clear`, `Chop`, `Pick Berry`, `Collect`, `Cast`, `Break`, `Gift`, `Refill`, `Ship`, `Open`, `Watch TV`, `Sleep`, `Descend`. Nguồn và phí, nếu cần, là chi tiết của action chứ không là một verb mới. `Hold card` và `Put away` là điều khiển hand của UI, không là action gameplay trên lá.

| Trường | Phạm vi | Ranh giới |
| --- | --- | --- |
| `Identity` | Mọi lá full | Tên lá như `Soil`, `Turnip Crop`, `Bed`; không gộp state hay output vào tên. |
| `Type` | Mọi lá full | Loại theo danh mục V0: `Plot`, `Item · Crop`, `Equipment`, v.v. Subtype có thể bổ sung trong cùng trường khi đã có nguồn. |
| `State` | Mọi lá full | State hiện tại nếu có; với `Bed` ghi rõ `No tracked state` thay vì dựng state giả. |
| `Action` | Mọi lá full | Tên các hành động hợp lệ trong state hiện tại; khi không có thì `None available`. Không viết `Select...` hoặc `Tap...`. |
| `Description` | Mọi lá full | Mô tả lá và hệ quả liên quan bằng câu trần thuật; không CTA, không chỉ dẫn thao tác. |

Ảnh/visual giữ nhận diện của lá vuông/hand nhưng không được tính là một trường luật. UI-53 về sau chốt `Action / Preview`: trong Preview, mặt lá và panel ngoài chỉ có thao tác đóng; các action của lá được chơi bằng tap trong Action mode. Tap lại mặt lá full vẫn đóng. UI-55 cố định kích thước khung Preview cho mọi lá, nội dung dài cuộn bên trong.

## 2. Chi tiết đi kèm khi cần — chưa chốt thành trường chung

| Họ/tình huống | Thông tin thêm cần hiện khi áp dụng |
| --- | --- |
| Nhiều instance cùng identity | Vị trí đủ để biết lá nào đang xem, như `Field · Plot 2/8` hoặc đúng spot/node đang mở. Vị trí không tạo identity mới và không làm lộ odds/kết quả ẩn. |
| Gameplay commit | Nguồn hợp lệ, phí AP/Gold thực trả, thứ bị tiêu, điều kiện khóa và kết quả trực tiếp có thể cần hiển thị cùng Action/Description hoặc ngoài mặt lá. Cách xếp cụ thể chưa chốt; không biến chúng thành CTA. |
| Hand Item/Seed/Sapling | Số lượng hiện có; có bị tiêu khi dùng hay không; target hoặc công dụng V0. Giá bán chỉ hiện khi lá đó thật sự có giá/đang trong đường bán hiện hành. |
| Tool/can | Target và verb hợp lệ; Can hiện lượng nước còn lại/dung lượng, Copper Pickaxe thể hiện phí Break phù hợp. |
| Crop/Fruit Tree | Tiến độ lớn lên, Watered/Mature/fruit-ready khi tác động tới hành động; nguồn thu hoạch và output được bảo đảm. Điều kiện mùa chỉ hiện ở cây/nguồn mà mùa ảnh hưởng trực tiếp. |
| Mine/Fishing source | `Ready/Used` hoặc `Dense`; phí Break/Cast hiện hành; reset/cadence đã biết. Odds của ba `Fishing Spot`, vị trí Rock giấu lối và kết quả ngẫu nhiên giữ ẩn. |
| Person/Gift | Heart hiện tại/cap, Gift còn hợp lệ hôm nay không, nguồn quà được nhận, phí và hệ quả Heart. Khi Heart đầy, giải thích Gift không dùng và không tiêu quà. |
| Container/Equipment/Utility | Đích `Open` hoặc tác dụng của `TV`, `Bed`, `Shipping Bin`, `Valley Almanac`. Nội dung con dài có thể hiện sau khi mở, không cần chép toàn bộ lên lá cha. |

## 3. Không bắt buộc trên mặt lá full

- AP/Gold tổng của người chơi, Season/Weather/pha hiện tại nếu đã ở HUD; chỉ nhắc điều kiện đó khi nó đổi action/output của lá đang xem.
- Toàn bộ luật của các state tương lai. Có thể tra cứu sâu hơn trong Almanac; full card trước hết phải trình bày action hiện tại. `After tilling → Seed Plant` trong mẫu Soil đang thử mật độ chữ, **chưa được xác định là nội dung bắt buộc** trên `Empty Soil`.
- Lore dài, nguồn tham khảo, mã quyết định, trạng thái duyệt art, card number chỉ để trang trí, giá/recipe/sink chưa có, thông số balance chỉ tồn tại trong phép thử.
- Odds Fishing, kết quả Rock giấu kín, Fish chưa mở, hoặc nội dung của lá con chưa hiện. Full card không được phá luật thông tin ẩn.

## 4. Ba lá dùng để kiểm schema

| Lá | Tập tối thiểu cần đọc trong full view | Điều mẫu đầu tiên còn cần sửa sau khi chốt schema |
| --- | --- | --- |
| `Soil` ở `Empty Soil` | `Identity: Soil`; `Type: Plot`; `State: Empty Soil`; `Action: Till, Plant`; `Description`: đất trống, Till đổi state, sapling không cần cày. | Nguồn Hoe/Sapling và AP là chi tiết dưới Action, không nằm trong tên verb. Dòng Seed Plant là bước của state sau, không phải action hiện tại. |
| `Turnip Crop` ở `Growing` | `Identity: Turnip Crop`; `Type: Item · Crop`; `State: Growing 0/2`; `Action: Water`; `Description`: nhịp lớn lên khi được tưới, Harvest khi Mature. | `0/2` là số ngày của fixture prototype, không nâng thành chuẩn balance. Thứ tự ảnh Turnip đã được tester báo sai và để sửa sau. |
| `Bed` trong `Farmhouse` | `Identity: Bed`; `Type: Equipment`; `State: No tracked state`; `Action: Sleep`; `Description`: sang ngày mới và xử lý thay đổi hằng ngày. | `Sleep` là gameplay commit `0 AP`; nút nếu có thuộc điều khiển ngoài lá. Không ép state `Ready`. |

## 5. Quyết định trình bày còn mở

Sau kiểm kê này vẫn cần đánh giá chi tiết của từng trường: ảnh lớn bao nhiêu, cách thể hiện phí và blocked reason. [Hai mẫu](../../prototype/full-card-study.html) thử hierarchy Ink và hướng từ ảnh tham khảo với cùng năm trường. **UI-56 chọn hướng Ink** cho lá full; bản theo ref chỉ còn là đối chiếu. Khoảng cách, font và các trường phụ tiếp tục tinh chỉnh khi test.
