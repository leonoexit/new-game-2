# Prompt bàn giao — Little Valley Cards — 2026-09-25

**Snapshot bàn giao theo ngày, không phải hướng dẫn hiện hành.** Tra [README của repo](../../README.md), [bản đồ nguồn luật](README.md) và lời mới nhất của chủ dự án trước khi dùng các chỉ dẫn bên dưới.

Hãy tiếp tục dự án **Little Valley Cards** trong repo `/Volumes/LeNguyen02SSD/Programming/new-game-2`. Trao đổi với tôi bằng **tiếng Việt**; tên card, Tool, action và state dùng **tiếng Anh nhất quán**. Đây là dự án **thiết kế luật giấy và thử nghiệm**, chưa có gameplay runtime. Đọc `AGENTS.md`, `README.md` và các contract hiện hành trước khi sửa.

## 1. Điểm nối của phiên mới

Phiên này đã dừng có chủ ý. **Việc đầu tiên của phiên mới là chuẩn hóa danh sách Region V0 và quan hệ giữa nhãn `Region`/`Area` trong danh mục lá.** Tôi đã nói sẽ làm việc đó ở phiên mới, nên đừng giải quyết nó trong phần bàn giao. Bắt đầu từ World hierarchy đã ghi, đối chiếu workbook và các Area cũ, rồi đề xuất một ánh xạ cụ thể để tôi duyệt nếu nó thay đổi card identity hoặc vị trí của nội dung. Đừng mặc định mọi ví dụ `Coop`/`Barn`/`Greenhouse`/`Shed` đã là lá hoạt động V0.

Sau **mỗi action hoàn tất**, hãy báo ngắn kết quả và đề xuất **đúng một action tiếp theo**. Đừng hỏi tôi từng micro step như Tool, item, output thường tình: suy ra theo thứ tự **quyết định của tôi → contract Little Valley Cards mới nhất → Stardew video game/board game → lựa chọn chuyển thể có ghi nhãn**. Chỉ đưa tôi duyệt ngã rẽ lớn về identity/state, quan hệ chứa/thay lá, AP/action, tiến trình hoặc kinh tế. Không lấy nguồn tham khảo ghi đè quyết định riêng của dự án.

## 2. Những gì phiên này đã hoàn tất

### Mine và nâng Pickaxe

- [Mine contract](MINE-CURRENT-CONTRACT-01.md) đã khóa CG-17/19/20: ba nguồn thấy sẵn, `Character + Pickaxe → Break` là một commit; `Next` miễn phí dưới từng ô, đổi riêng nguồn chưa xử lý; `Descend` là commit 0 AP sau khi lộ lối. Không dùng lại `Search/Extract`, phí lật hoặc vòng quay lại hữu hạn từ prototype cũ.
- Mỗi tầng có sáu instance hữu hạn, ba hiện một lúc. Tầng đầu: 2 `Rock`, 2 `Ore Rock` thường, 2 `Ore Rock` state `Dense`; từ tầng hai: 2 Rock, 4 Dense. Một Rock mỗi tầng giấu lối, Rock kia cho `Nothing Found`. Ore Rock cho 1 Ore. `Next` không reroll kết quả đã gán. Khi cạn nguồn ngoài bàn, Next khóa; khi đã xử lý hết, lối xuống chắc chắn lộ. Rời Mine và `Sleep` giữ nguyên tầng, pool, thứ tự, spent và lối; chỉ Descend tạo tầng mới.
- `Break` phí 1 AP trên Rock/Ore Rock thường, Dense 3 AP với Pickaxe thường hoặc 2 AP với Copper Pickaxe. Cầm Copper tự giảm phí khi chạm Dense; không thêm nhát phá hoặc tăng Ore. Trong Item, `Upgrade` tiêu 3 Ore, 0 Gold, 0 AP để đổi ngay identity Pickaxe → Copper Pickaxe. Các lá Dense chờ sẵn để hiệu ứng nâng có chỗ dùng. Không thêm Furnace, Coal, Bar, Blacksmith hoặc thời gian chờ.

### Fishing

- [Fishing contract](FISHING-CURRENT-CONTRACT-01.md) khóa CG-18/22/23/24 và đóng phạm vi Fishing V0: River có ba instance cùng identity `Fishing Spot`, nhìn giống nhau; người chơi không thấy odds. Mỗi ngày gán ẩn đúng một spot 25%, một 50%, một 75%. `Character + Fishing Rod → Cast` trên spot chưa spent tốn 1 AP dù thành công hay `No Bite`; mỗi spot chỉ Cast một lần/ngày. Thành công nhận đúng 1 `Silver Minnow`, Fish duy nhất V0. `Sleep` mở lại ba spot và xáo odds một lần; rời/vào River không reroll. Không có `Next`, minigame thời gian thực hay state hiển thị odds. Fish có thể giữ hoặc gửi Shipping Bin; giá bán chưa khóa.
- `Blue Eel`, exact `Catch`, Leaving/Lingering và đề xuất Quiet Water/Ripples/Splashing Fish chỉ là lịch sử thử. Các fixture cũ chưa được migrate thành Fishing V0.

### Farm, Watering Can và Field

- Một lá đất tương ứng **một luống**; Watering Can V0 tưới **một crop/1 AP**, không tự biến nâng cấp thành tưới một khối 2×2 hay nhiều lá cùng lúc. Watering Can upgrade đa đích chưa là luật.
- [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) khóa Field V0 có **8 vị trí đất cố định từ đầu**: 2 `Soil` trống, 3 `Soil` có bụi, 3 lá đá riêng. Tám vị trí là sức chứa riêng của Field; Farmhouse/Shipping Bin/Building ở Home **không** trừ đất Field. Không có kề nhau, khoảng cách hoặc lưới 2×4 mang ý nghĩa gameplay.
- Dọn bụi: `Sickle → Soil` có bụi, 1 AP, cùng lá Soil đổi hình sang trống, không item. Dọn đá: `Hoe → Field Rock`, 1 AP, lá đá bị thay **tại đúng vị trí cũ** bằng `Soil` trống, nhận 1 `Stone`. `Field Rock` là tên làm việc để phân biệt đá trong Field với `Rock` Mine. `Hoe → Soil` trống để `Till`, 1 AP, đổi **state của cùng identity Soil** thành đã cày. `Empty Soil`, `Overgrown Soil`, `Tilled Soil` là state đọc/lọc, không là ba Bách Khoa identity. Plant đổi Soil đã cày → Crop identity; Harvest trả lại Soil đã cày. Vị trí không sinh thêm khi Clear/Till/Plant/Harvest.
- Công dụng, giá bán và nguồn khác của `Stone` được hoãn tới giai đoạn **đổ nội dung**, không xóa Stone reward vì hiện chưa có nơi tiêu. Đừng mở một cuộc hỏi đáp riêng cho mỗi item bổ sung.

### World, card grammar và UI

- [World nested-card architecture](WORLD-NESTED-CARD-ARCHITECTURE-01.md) khóa mental model CG-35–42: màn đầu có lá `World`; chơi World mở tableau Region; chạm `Home` mở Home với `Field`, `Farmhouse`, `Shipping Bin` và các lá Home thực có; chạm Field mới thấy đất/crop/đá; chạm Farmhouse thấy `TV` và `Bed`. Bản thân card là nút tương tác của object; card có thể chứa card con, đổi state hoặc cả hai. Container có thể hữu hạn/vô hạn theo từng loại, không có trần chung.
- CG-42 ghi quy tắc vận hành V0: mỗi lần chỉ một tableau; chạm container mở con, Back về đúng cha, 0 AP và không commit; breadcrumb/Back là UI, không là card. Back/reopen không hoàn tác, refresh, Sleep hoặc nhân bản card. Một panel/focus đang phủ đóng trước khi Back về cha. Vị trí cuộn/focus và bộ lọc giữ trong ngày nếu target còn hiện; sau Sleep bộ lọc Field về `Tất cả`. Nguồn Hand/Tool/Item đang chọn có thể đi qua các tầng để chạm target thật; container/Back không tiêu nguồn. Panel độc lập hoặc sang ngày hủy nguồn tạm theo UI defaults.
- [Field presentation contract](WORLD-GROUP-PRESENTATION-CONTRACT-01.md): nhóm hiển thị, lọc và dòng tóm tắt là **UI trong Field**, không tạo identity, AP, reward hay Bách Khoa. Mặc định hiện mọi lá. Tách mục lọc Soil trống, Soil đã cày, Crop Growing/Mature và vật cản; số đếm tính từ đủ tám vị trí, kể cả lá bị lọc ẩn. Farmhouse/Bin ở Home, không phải lá được bộ lọc Field giữ hiện.
- Bách Khoa ghi **identity khi chính lá đó lần đầu hiện**, không ghi sẵn cả nhánh chỉ vì World/Home được mở. TV ở Farmhouse là commit dự báo D+1 0 AP; `Bed` đã được người dùng nhắc là lá thật nhưng loại/action cụ thể chưa định nghĩa trong contract riêng.
- Nguồn tham khảo người dùng cung cấp là [stardew_point_and_click_world_design.md](../../stardew_point_and_click_world_design.md). Đã đối chiếu hướng World → Region → Object → Action tại [crosswalk](../evidence/WORLD-ARCHITECTURE-REFERENCE-CROSSWALK-01.md). Nguồn tham khảo không tự thành luật Little Valley Cards.
- Đã thêm `AGENTS.md` để phiên sau theo thứ tự nguồn và xử lý các micro step theo lô.

## 3. Trạng thái repo lúc bàn giao

- Nhánh làm việc là `main`, remote `origin` là `https://github.com/leonoexit/new-game-2.git`. Phiên bàn giao này được commit và push theo yêu cầu của chủ dự án; **kiểm `git status --short --branch` và `git log -1` ngay khi bắt đầu phiên mới** để xác nhận checkout thực tế.
- Repo vẫn là **paper design**: `docs/current/` có contract và workbook `LITTLE-VALLEY-CARD-REGISTER-V0.xlsx`; `docs/evidence/` giữ đối chiếu/đề xuất; `paper-tests/` và `art/` giữ prototype/style study. Chưa có game runtime phản ánh toàn bộ CG-17–42, save/load gameplay, visual QA mobile hoặc fresh-player test mới. Đừng gọi việc chốt contract là đã triển khai code.
- [Decision log](ON-TABLE-CARD-SHAPE-DECISION-09.md) có lịch sử CG-01–42 và UI decisions; một số hàng cũ cố ý giữ nguyên để thấy provenance, với ghi chú mới chỉ ra quyết định thay thế. [Danh mục lá V0](LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) đã cập nhật Mine/Fishing/Field và các identity liên quan. `README.md` chỉ tới các nguồn hiện hành.
- [Area tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md), registry Year 1, một số fixture và prototype chứa snapshot Farm phẳng, `Tilled Soil` identity riêng, Mine Search/Extract hoặc Fishing exact Catch. Chỉ dùng làm chứng cứ lịch sử khi mâu thuẫn với contract mới. `FISHING-V0-LOCK-PROPOSAL-01.md` cũng là đề xuất trước khi chốt.
- Kiểm tra tài liệu cuối phiên: `git diff --check` qua; `python3 scripts/check_markdown_links.py` báo **955 liên kết nội bộ, 0 lỗi**. Workbook XLSX đọc được và XML hợp lệ. Không tuyên bố test runtime CG-17–42 vì chưa có runtime tương ứng.

## 4. Các bước tiếp theo, theo thứ tự

1. **Phiên mới:** đọc `AGENTS.md`, World architecture, decision log CG-35–42 và sheet V0; kiểm trạng thái Git. Sau đó đề xuất **danh sách Region V0 cụ thể** và quy tắc ánh xạ `Region` với `Area` cũ. Chỉ trình tôi duyệt phần làm đổi identity/nơi xuất hiện hoặc cây chứa. Đừng mở lại Farm/Mine/Fishing đã chốt chỉ vì thuật ngữ cũ còn trong fixture.
2. Khi tôi chốt taxonomy, đồng bộ `WORLD-NESTED-CARD-ARCHITECTURE-01.md`, decision log, workbook và README/contract nào thật sự bị ảnh hưởng. Phân biệt lá `Home`, `Field`, Farmhouse, River, Mine, forest Region/Area theo cây mới; bảo toàn các loop và AP đã khóa.
3. Sau đó mới xử lý các ranh giới cấu trúc còn mở có ảnh hưởng gameplay: `Bed`/đường Sleep trong Farmhouse; danh sách lá Home hoạt động V0; cách các lá Region khác dẫn tới tableau con. Chỉ chọn một action kế tiếp sau mỗi kết quả, không gom thành hàng loạt câu hỏi nhỏ.
4. Khi có nhu cầu triển khai, migrate prototype/fixture cũ theo contract mới, viết kiểm tra meaningful cho state/persistence và thử đọc trên mobile. Đây là backlog triển khai; không ép dựng bản tích hợp một ngày chỉ để chứng minh tài liệu. Chủ dự án trước đây đã bỏ qua đề xuất đó.

## 5. Known bugs, edge cases và điểm dễ nhầm

- **Rủi ro tài liệu:** các đoạn lịch sử trong `docs/current/`, workbook cũ trong commit trước và fixture có thể trái contract mới. Ưu tiên quyết định mới nhất và contract chuyên cơ chế; không âm thầm khôi phục World dạng Area phẳng, `Tilled Soil` identity riêng, đá Field là hình Soil, Fishing odds hiện trên lá hoặc phí Mine cũ.
- **Chưa có runtime/persistent save:** đi ra rồi vào lại Mine/River/Field phải giữ state trong luật; reload trên đĩa sẽ cần lưu instance ID, pool/thứ tự Mine, Rock nào giấu lối, spent, odds Fishing ẩn, Fish nhận, tám vị trí Field và card/state đang chiếm. Đừng báo các edge case này đã được code xử lý.
- **Mine:** `Next` không tạo bản sao instance hoặc reroll Rock; nguồn spent không hồi thưởng sau Sleep; khi pool ngoài bàn cạn thì Next vô hiệu; `Descend` bỏ nguồn tầng cũ sau khi báo trước. Nếu đủ 3 Ore nâng Copper giữa ngày, Dense tiếp theo phải dùng phí 2 AP; Rock và Ore Rock thường vẫn 1 AP.
- **Fishing:** ba spot giống nhau về hiển thị, nhưng gán 25/50/75 ẩn; inspect/Back/reload không lộ hoặc đổi odds. Cast hụt vẫn tốn 1 AP và spent; Cast bị từ chối không rút RNG. Sleep xáo đúng một lần, tránh reroll bằng đóng/mở River.
- **Field:** bụi là state của Soil, đá là lá riêng **được thay** bởi Soil sau Clear; Hoe Till Soil trống không tạo identity `Tilled Soil`. Không cộng thêm vị trí thứ chín; Building ở Home không ăn vào tám suất Field. Bách Khoa chỉ ghi `Field Rock` khi lá đá hiện, `Stone` khi item nhận, không ghi Soil thay thế là identity mới nếu Soil đã thấy.
- **Điều hướng:** Back đóng overlay/focus trước; chọn Tool qua container không commit lên container; chỉ target hợp lệ trả AP. Khi target đã biến mất/bị lọc ẩn, không giữ focus sai. Bộ lọc Field sau Sleep về `Tất cả`; trạng thái crop/đá/spent vẫn theo luật riêng, không reset vì lọc.
- **Còn mở rõ ràng:** taxonomy Region/Area; `Bed`/Sleep UI; bố cục Back/breadcrumb và thử trên điện thoại; thứ tự/hình sáu vật cản; giá Fish; công dụng Stone khi đổ nội dung; nâng Tool sau Copper; refresh/save runtime. Đây không phải bằng chứng có bug runtime hiện hữu.

**Hãy bắt đầu bằng taxonomy `Region`/`Area` V0 ở phiên mới. Sau khi hoàn tất một action, luôn đề xuất đúng một action tiếp theo.**
