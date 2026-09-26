# Integrated card grammar fixture v0.1

Ngày dựng: 2026-09-24. Trạng thái 2026-09-25: **ĐÃ ĐƯỢC CHỦ DỰ ÁN CHO PHÉP KIỂM GIAO DIỆN; QA TRỰC QUAN ĐANG BỊ CHẶN**. Fixture từng tạm dừng để đối chiếu card grammar; đã rà danh mục và cập nhật CG-00–09 trước khi chuyển sang lượt QA này. Không dùng nó làm thiết kế V0 đã duyệt, game runtime, artwork hay bằng chứng người chơi mới.

Chủ dự án đã xác nhận định nghĩa gốc trong [card grammar §10](../../docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md): **loại lá → nơi thuộc về → tương tác → biến đổi**; tap A rồi B chỉ là lớp thao tác. Vì vậy fixture này chỉ còn giá trị như bản thử lớp thao tác và phải được rà lại sau ontology/vòng đời card, không được dùng để chứng minh card grammar đã hoàn tất.

Đối chiếu tĩnh với CG-02–04: lời inspect của Tilled Soil nay ghi rõ Plant **đổi** sang identity crop; lá đang lớn và lá Mature cùng dùng tên/identity `Turnip Crop`, khác nhau ở hình trạng thái. Wild Herb ở Area và trong Item tiếp tục dùng cùng identity. Đây là sửa mâu thuẫn trong fixture tạm, chưa phải duyệt UI hay kiểm chứng khả năng đọc visual trên điện thoại.

CG-05 xác nhận `Hand` và `Character` đều là card identity thật. Fixture dùng nút chạm làm bề mặt thao tác cho chúng nhưng ghi nhận cả hai vào Bách Khoa khi chúng hiện, như mọi lá khác. Fixture vẫn chưa trình bày World identity riêng; không lấy sự thiếu này làm luật rằng World không phải card.

CG-06/07 phân loại tiếp: Character là Person card, Hand là Tool card; Fish là Item/Fish; Wild Herb, Turnip Crop và Turnip thu hoạch là Item/Crop dù hiện ở vị trí khác nhau. Farmhouse là **Building card đã được duyệt**, thuộc Farm và chứa TV sub-card; fixture bày quan hệ chứa này bằng hình placeholder, chưa phải art/bố cục cuối.

**Audit 2026-09-25:** đã đối chiếu 28 dòng trong [sheet lá V0](../../docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.json) với §10 và fixture. **CG-08 đã được chủ dự án duyệt:** Exposed Ore là lá nguồn; Ore là Item có identity riêng. Search chỉ lộ nguồn; Extract tạo Ore trong Item, nguồn spent và Depth giữ nguyên. Bách Khoa ghi riêng khi từng lá được thấy; không ghi Ore chỉ vì thấy Exposed Ore. Fixture đã hiển thị output Ore và từng Fish trong Item, giữ Fish identity sau Catch. Các output này hiện chỉ mở inspect: Fish đã được chốt dùng để bán theo CG-10 nhưng giá chưa chọn và chưa được triển khai trong fixture; CG-11 đã duyệt Ore dùng trực tiếp nâng Tool, nhưng fixture chưa triển khai Upgrade.

Đã bỏ dự báo TV khỏi rail; kết quả nằm ở TV trong Farmhouse. Đã sửa quan sát Bách Khoa theo vùng cuộn thực của Item/panel, quan sát lại sau đóng panel và ghi cùng Nell identity ở control ability. Đây là sửa logic theo luật có sẵn, chưa phải xác nhận bố cục/khả năng đọc trên điện thoại.

**CG-09 · 2026-09-25:** Supermarket là Building ở Commerce. Shipping Bin và TV cùng thuộc loại **Thiết bị (Equipment)**, lần lượt ở Home/Farm và bên trong Farmhouse. `Sub-card` chỉ quan hệ chứa của TV. Đã đồng bộ sheet và inspect của fixture; các bước mở shop/Buy, gửi Bin và xem TV giữ nguyên.

**Cập nhật ưu tiên CG-14:** thiết kế gameplay Mine trước, Fishing sau theo [board và Fantasy Life](../../docs/current/MINE-FISHING-REFERENCE-DIRECTIONS-02.md), rồi mới trở lại nâng Tool. Fixture hiện chỉ là baseline grammar, chưa chứng minh hai loop đã thú vị hoặc được chốt.

**Hướng thử CG-15:** chủ dự án chọn Mine “đào để lật”; xem lượt giấy tại research §8 trong liên kết trên. Fixture này vẫn chạy loop cũ, chưa có bộ lá tầng, nhóm lá thay nhau hoặc vòng quay lại. Không dùng hành vi hiện tại để suy ra phí/luật của hướng thử mới.

Tầng Mine thử mới đã có ở [mine-dig-flip-v0.1](../mine-dig-flip-v0.1/README.md), gồm preset CG-16 còn 2 AP. Đây là artifact riêng; chưa nhập các luật tạm của nó vào fixture tích hợp này.

**Phạm vi trước lượt nghiên cứu CG-14:** chủ dự án tạm gác lỗi UI nhỏ và cải thiện độ hấp dẫn của fishing; giữ loop Farm. CG-10 chốt Fish dùng để bán qua Bin theo luật xác nhận số lượng/trả cuối ngày. [Nghiên cứu công dụng Ore](../../docs/current/ORE-USE-REFERENCE-AND-PROPOSAL-01.md) ghi CG-11 đã duyệt nâng Tool trực tiếp và đối chiếu phí/hiệu ứng hai nguồn. CG-12 đã chọn giữ loop V0 và chuyển hiệu ứng tương đương. CG-13 chốt tác dụng nâng theo video game gốc: Can tăng phạm vi/sức chứa, Pickaxe tăng sức phá. Các đề xuất miễn AP/+Ore đã rút; reference §7 ghi phần nối vào V0 còn thiếu. Chưa đưa Upgrade vào fixture. Các lượt QA hình bên dưới là công việc đang hoãn.

Mở [fixture.html](fixture.html) trong trình duyệt ở chiều rộng điện thoại. Cột `Tình huống` bên ngoài màn hình game chọn trạng thái kiểm tra độc lập; nó không phải UI của sản phẩm. Mỗi lần chọn một tình huống, fixture được đặt lại để kiểm thao tác từ đầu.

## Phạm vi

- World là dải Area cuộn dọc; index chỉ cuộn/focus, không tốn AP. Area header không có viền card, Mine Depth là status strip.
- Khu `Person` là bề mặt UI tạm cho Nell và control ability, không phải Area identity thứ sáu. Vị trí lá Nell trong một Area cụ thể chưa được fixture xác lập.
- `Rìa Rừng` chỉ là tên bối cảnh trong Area rừng, không phải card identity hay mục Bách Khoa riêng; lá Wild Herb trong Area mới là card được ghi khi thấy.
- Card trên tableau vuông 1:1. Seed nằm trong Item, Tilled Soil trên Farm. Chạm nguồn rồi chạm đích; chạm đích hợp lệ commit ngay. Chọn Seed không làm sáng plot. Còn Seed thì lựa chọn Seed được giữ để trồng tiếp.
- Farm: Plant, Water, Rain, Sleep growth và Hand Harvest. Wild Herb: hiện trực tiếp trong Area rừng, Hand Collect. River: exact Catch bằng Character + Rod. Mine: Direct Descent, Search, Character + Pickaxe Extract. Nell: Gift bằng Character + Herb và control ability riêng trong khu Person. Commerce: Supermarket mở shop panel, hàng có giá và quantity; Shipping Bin xác nhận quantity rồi mới gửi, Gold trả cuối ngày. TV: chạm sub-card để xem D+1 ngay. Bách Khoa: lá tiện ích từ đầu, ghi card identity lúc nó được thấy.
- Hiển thị AP thực trả sau Nell relief, icon credit phía trên Item. Navigation card không có AP badge; gameplay commit 0 AP có badge.

Fixture dùng nhãn và hình khối tạm, nên **không kiểm được** chất lượng native-pixel art, mức tự giải thích của crop art, màu/độ tương phản cuối, số card đủ cho 18 ngày hoặc cảm giác chơi Water lặp lại. Các số 6 AP, 2G/Seed, 4G/Turnip và nhịp Turnip hai lần tăng trưởng chỉ là fixture giấy hiện hành. Forest Area chưa có tên chính thức. Fixture không thêm Water Trough, Project, Mira/Bram, Field Notes reward, paid Descent sau CP3 hoặc nguồn Bean/Lemon Balm Seed.

## Các lượt kiểm có thể tự chạy

| Tình huống | Thao tác cần thử | Kết quả cần đọc được |
| --- | --- | --- |
| Farm ngày nắng | Seed → plot 1 → plot 2; Can → từng crop; Sleep; tưới lại nếu chưa Watered; Sleep; Hand → Mature Crop | Hai Plant/Water/Harvest commit riêng; crop đổi tên/hình; mỗi Sleep chỉ tăng growth cho crop đã Watered. |
| Farm ngày mưa | Seed → Tilled Soil; thử Can → crop; Sleep | Crop mới tự Watered; không có Water commit thứ hai. |
| Rìa Rừng | Cuộn tới Wild Herb; mở Bách Khoa; Hand → Herb | Herb đã có entry khi thấy, trước Collect; Collect mới đưa item vào túi. |
| River và Mine | Character → Rod → Catch; Character → Direct Descent tới CP3 → Search; Character → Pickaxe → Ore | Catch trả đúng Fish; Depth và Ore là hai thay đổi riêng; sau Extract không còn paid target vô thưởng. |
| River · Blue Eel khi mưa | Chọn tình huống dựng sẵn; Character → Rod → Blue Eel; cuộn Item | Blue Eel chỉ Catch khi Rain; Item giữ tên/identity Blue Eel, không gộp thành một Fish vô danh. Đây không phải cadence tự sinh Catch. |
| Hai identity Ore | Search tại CP3; xem Bách Khoa; Extract; cuộn Item để thấy Ore; xem lại Bách Khoa | Thấy Exposed Ore ghi nguồn; chỉ khi thấy output mới ghi Ore riêng. Không có entry spent hoặc nguồn tự refresh. |
| Nell | Character → Herb → Nell; kích hoạt ability; thực hiện hai Water/Harvest 1 AP | Heart đến trước ability; counter `2→1→0`, AP thực trả trên card cập nhật. |
| Commerce | Chọn Turnip → Bin → số lượng → xác nhận; thử Buy trước/sau Sleep | Tiền đang chờ chỉ ở Bin; ví tăng cuối ngày. Shop listing là card có giá, quantity; Buy kiểm ví hiện tại. |
| TV | Farmhouse → TV; chạm TV lần nữa; Sleep | Một dự báo D+1, không reroll; TV lần đầu là 0 AP gameplay commit, lần sau chỉ xem lại. |

## Ranh giới cần chủ dự án xem trong fixture

Chạm Farmhouse để mở nội dung là navigation 0 AP theo FH-01/CG-07; chạm TV mới commit. Hình khối crop ướt và Building trong fixture chỉ kiểm chuyển trạng thái/quan hệ chứa, không được xem là artwork duyệt. Không có participant mới trong lần dựng này; mọi nhận xét tự chạy chỉ là kiểm logic, không phải kết luận về mức hiểu của người chơi mới.

`Clear/Till` chỉ còn trong các trace mở rộng plot của package giấy và chưa có surface/nguồn/đích đã chốt trong §10, nên fixture này không tự tạo card cho chúng. World là card theo ontology của chủ dự án, nhưng tài liệu chưa chọn bề mặt nhận diện World riêng; fixture chỉ kiểm Area và các card thật sự hiện. Những chỗ còn mở này cần giải quyết trước khi gọi toàn bộ grammar V0 là hoàn tất.

Lần dựng trước bị chặn khi mở URL `file://` và local HTTP server. Trong lượt QA tiếp theo ngày 2026-09-25, đã thử mở `fixture.html` bằng trình duyệt trong ứng dụng; Browser Use từ chối URL file cục bộ theo chính sách và yêu cầu không dùng đường vòng. Đã dừng thao tác trình duyệt. **Chưa có ảnh chụp/QA trực quan trên điện thoại**; cần người dùng mở fixture và cung cấp ảnh/kết quả thao tác để tiếp tục đánh giá hình.

Rà mã trong lượt này phát hiện phản hồi Buy/Bin chỉ được ghi vào thanh ngoài panel, phía sau overlay. Đã thêm vùng phản hồi trong panel để báo thiếu Gold, số lượng không hợp lệ và kết quả Buy ngay tại nơi thao tác; giữ thông báo qua render và xóa khi mở panel khác. Kiểm logic đã đạt; bố cục vùng phản hồi mới chưa được xem trong browser.

## Lượt kiểm hình đang chờ

Dùng viewport 390 × 844 trước, sau đó 320 × 568 để kiểm chiều rộng hẹp. Nếu mở trên điện thoại thật, ghi model hoặc kích thước màn hình. Mỗi dòng bắt đầu bằng chọn lại tình huống để không lẫn state. Đây là kịch bản QA có hướng dẫn, không phải bài thử hiểu luật của người chơi mới.

| Tình huống | Chuỗi thực hiện | Ảnh/kết quả cần giữ |
| --- | --- | --- |
| Farm ngày nắng | Seed → plot đầu; Can → crop; Sleep; Can → crop; Sleep; Hand → crop | Ảnh Growing khô, Watered, Mature; sau Harvest thấy Soil và Turnip trong Item. Tên crop phải giữ nguyên qua các state. |
| River & Mine | Bỏ qua Catch ở lượt này. Tới Mine; Character → Descent ba lần → Search; sau đó Character + Pickaxe → Exposed Ore | Ảnh nguồn vừa lộ và Item Ore sau Extract; Depth vẫn 3. Cuộn Item tới Ore trước khi kiểm entry Bách Khoa. Tổng Mine 5 AP, không cần sang ngày. |
| Commerce & Bin | Chọn Turnip trong Item → Farm/Bin; nhập 3 và xác nhận để thử lỗi; sửa thành 1 và xác nhận; mở Supermarket và thử Buy trước Sleep; Sleep rồi mở shop, Buy 2 Seed | Lỗi số lượng/thiếu Gold phải đọc được ngay trong panel. Sau gửi: Bin chờ 4G, ví 0G. Sau Sleep: ví 4G; Buy 2 Seed hết 4G. |
| TV | Farmhouse → TV; chạm TV lại; đóng nội thất | Ảnh TV đã xem và Farm sau khi đóng: dự báo chỉ ở TV, không có trường dự báo trên rail. |

Với mỗi ảnh, rà tên/badge có bị cắt, khay nguồn và trạng thái chọn có đọc được, nút đóng/xác nhận có nằm trong vùng cuộn tới được, và bàn phím số có che thao tác không. Những mục này hiện **chưa kiểm**, không suy từ DOM giả.

## Kiểm logic đã chạy · 2026-09-25

Chạy `node paper-tests/integrated-card-grammar-v0.1/logic-check.cjs` từ thư mục gốc repo. Chín chuỗi kiểm đạt: vòng đời crop; Rain và Water bị từ chối; Fish giữ identity và điều kiện Blue Eel; Descent/Search/Extract; trigger Bách Khoa cho nguồn/output và phần bị che; Herb/Nell/thiếu AP; xác nhận Bin và thời điểm Gold; Farmhouse/TV/Sleep; phản hồi tại panel.

Bộ kiểm chạy JavaScript thật của fixture với DOM giả tối thiểu. Hình chữ nhật visibility được cấp sẵn để kiểm logic lọc, **không đo layout browser**. Chưa kiểm đầy đủ cadence Herb/Nell/Catch, chuyển mùa, accessibility hoặc khả năng người chơi tự hiểu visual. Fixture vẫn chưa được duyệt như toàn bộ V0.

Nguồn quyết định: [on-table card shape §10](../../docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md).
