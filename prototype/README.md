# Little Valley Cards · bản chơi thử V0

Đây là **prototype gameplay chạy trên trình duyệt**, tách khỏi luật giấy. Nó đọc theo [bản đồ nguồn luật](../docs/current/README.md), không tự sửa contract. Chạy bằng Python có sẵn:

```sh
python3 -m http.server 4173 --directory prototype
```

Mở `http://localhost:4173`. Dữ liệu lượt chơi lưu tự động trong `localStorage` của trình duyệt đó. Nút **Bắt đầu lại** xóa lượt thử sau khi xác nhận.

Trên máy tính, vùng chơi vẫn giữ **khung dọc rộng tối đa 430px** ở giữa cửa sổ như điện thoại. Tableau tự xếp cột và co lá vuông để mọi lá hiện trọn giữa header và hand, kể cả khi hand xòe; không cuộn dọc trang. Cuộn chuột trên hand đang xòe để xem các lá ở xa.

Thanh trạng thái trên cùng gom mùa/ngày, thời tiết và pha trong một cụm. Thời tiết và pha dùng icon kèm nhãn ngắn; Gold và AP cùng ở mép hand gần thao tác chọn lá.

## Phạm vi đã chạy

- `World →` năm `Region`, rồi `Home → Field/Farm Pond/Farmhouse`; `Back`, nguồn chọn xuyên tầng, `Next Phase` một chiều và `Bed → Sleep`.
- Field hiện đủ tám vị trí, không có khối lọc/tóm tắt; Clear/Till/Plant/Water/Harvest; sáu Fruit Tree với vòng lớn lên, quả và Chop.
- Forest với Hedgerow, Wild Herb slip và bốn cây Chop/Stump/Season.
- River với ba Fishing Spot, odds ẩn 25/50/75, roster mười Fish theo Season/Weather/pha; Nell Gift/Heart/relief.
- Mine sáu nguồn mỗi tầng, Break/Next/Descend, Ore và Copper Pickaxe.
- Commerce Buy Seed; Shipping Bin trả Gold khi Sleep; TV dự báo D+1; `Valley Almanac` ghi identity đã thấy.
- Khu nguồn/Item là hand xếp hình cung: lúc gấp chỉ lộ đầu lá; chạm để xòe, cuộn ngang xem toàn bộ, chọn Tool/Item rồi chạm đích như trước. Người chơi là tác nhân mặc định; không chọn thêm lá Character cho Cast, Break hoặc Gift. Nguồn đang chọn và AP còn lại hiện ngay ở mép hand cả khi gấp lẫn xòe; Nell credit hiện cạnh AP khi có.

Các card trên bàn là **bề mặt thao tác vuông có ảnh hiện trọn và tên ở footer**, chữ trắng viền đen; state, mô tả và AP không phủ thêm lên ảnh. Nút ở góc trái tableau chuyển giữa `Action` và `Preview` cho **mọi lần chạm vào lá bài, gồm cả tableau và hand**. Trong Action, chạm lá thực hiện thao tác hiện hành: lá hand chọn/bỏ nguồn hoặc mở Utility, lá tableau nhận action/mở nội dung theo grammar. Không có lối tự mở Preview khi hand chưa chọn nguồn. Trong Preview, chạm bất kỳ lá nào chỉ mở thông tin full; nguồn đang chọn không bị dùng và lá tableau đang khóa vẫn đọc được. Chạm lại lá lớn hoặc Back để đóng. Chế độ mặc định là Action và được nhớ qua đổi Region/tải lại. Các nút điều hướng như Back, Next Phase và nút chuyển chế độ vẫn hoạt động ở cả hai chế độ.

Mặt lá lớn dùng năm trường `Identity`, `Type`, `State`, `Action`, `Description`; tên Action là động từ, Description là câu mô tả và không có CTA trên lá. Các Action được xếp từng dòng để đọc được khi có nhiều lựa chọn. Mọi lá full dùng **cùng kích thước khung theo viewport**; nội dung dài cuộn trong lá. Panel Preview chỉ có nút Back, không có nút commit. Mở xem không tiêu AP. **Bố cục lá full hiện chỉ là panel V0 để thử cơ chế**, chưa là thiết kế cuối. Chữ người chơi nhìn thấy trong prototype dùng tiếng Anh. Khung UI thử dùng đen trắng âm bản để màu tập trung ở các lá. Nút **Options** hình bánh răng chọn Itim, Patrick Hand hoặc Pixelify Sans và chỉnh cỡ tableau từ 60% đến 100% cỡ lớn nhất còn vừa màn hình; lựa chọn lưu riêng với tiến trình chơi. Font và giấy phép OFL nằm trong `fonts/`; icon Lucide và giấy phép nằm trong `icons/`. Tám lá Field khởi đầu đều có ảnh đúng trạng thái; Overgrown/Tilled Soil và Runner Bean non tái dùng art vuông đã duyệt cho prototype, Empty Soil/Field Rock có [hồ sơ art riêng](../art/style-studies/field-v0-runtime-art-01/record.md). Turnip Growing/Watered/Mature có [bộ art V0](../art/style-studies/turnip-crop-v0-runtime-art-01/record.md); tester đã chỉ ra thứ tự ảnh Turnip có lỗi và sẽ sửa sau. Crop/trái/cây và những lá tableau khác chưa có art đúng identity/state vẫn dùng biểu tượng tạm; không dùng ảnh loài khác thay thế.

Card grammar đã đủ cho **demo đầu tiên**, nhưng demo đang **pending kết quả test của chủ dự án**. Bước thiết kế tiếp theo là chuẩn hóa UI lá bài theo việc người chơi có nhận ra lá, tìm được thông tin và thao tác thuận hay không trong test thực tế. Đây chưa là bản phát hành.

## Mẫu UI lá full

[Mẫu độc lập Soil / Turnip Crop / Bed](full-card-study.html) mở ở `http://localhost:4173/full-card-study.html`. Nó không đọc hoặc sửa save gameplay. **`Ink hierarchy` là hướng đã được chủ dự án chọn** cho lá full; tab `Reference study` giữ làm bản so sánh từ ảnh tham khảo, không là skin hiện hành. Mỗi hướng giữ cùng kích thước khung qua ba ví dụ và dùng năm trường đã chốt; [kiểm kê thông tin](../docs/evidence/FULL-CARD-INFORMATION-INVENTORY-01.md) ghi chi tiết còn mở.

## Fixture chưa chốt

Để có thể mua/bán và qua ngày trong prototype, runtime dùng: 6 AP/ngày; D1 Sunny, những ngày sau Rain 35% theo bộ sinh giả lập; `Turnip/Lemon Balm/Runner Bean` lớn sau lần lượt 2/3/4 Sleep được tưới; giá Seed 2/3/3 Gold; giá bán Item trong `game.mjs`. Can thường khởi đầu đầy 40 lượng, Water một crop dùng một lượng; chọn Can rồi chạm `Farm Pond` ở Home để nạp đầy 0 AP. `40` là **giả định phép thử lấy từ game nguồn**, không nâng thành số cân bằng cuối. Các con số khác ở đây cũng là fixture. Tập lá có giá bán chỉ gồm vật phẩm đang cần cho đường Bin/Commerce; Wood, Ore, Stone, Sap, Hardwood và quả cây ăn trái hiện giữ trong Item khi chưa có giá/sink.

Phạm vi V0 hiện hành không đưa năm Mine node từ [lô nháp](../docs/content-batches/mine-break-nodes-05.json) vào bảng nguồn. Art, âm thanh, backend, đồng bộ nhiều thiết bị, Shop cho Season sau, menu accessibility và cân bằng cuối để sau. Bản lưu chỉ hỗ trợ schema prototype version 1; đổi schema sẽ bắt đầu lượt mới.

Kiểm engine: `node --test prototype/game.test.mjs`.
