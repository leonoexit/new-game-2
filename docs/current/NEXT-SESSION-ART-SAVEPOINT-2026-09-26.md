# Prompt save point — Little Valley Cards V0 art

Hãy tiếp tục dự án **Little Valley Cards** tại `/Volumes/LeNguyen02SSD/Programming/new-game-2`. Đọc `AGENTS.md` hiện hành và `docs/current/README.md` trước khi sửa. Chủ dự án là tester của demo V0; gameplay/card grammar hiện đủ để chơi thử nhưng nghiệm thu trải nghiệm vẫn **pending**. Hãy làm việc tự chủ theo lô, phân biệt quyết định đã chốt với giả định phép thử, và giữ nguyên mọi thay đổi đang có trong working tree.

## Goal của phiên này

**Bổ sung art cho các card cần xuất hiện trong một vòng chơi demo V0 trọn vẹn qua năm Region, gồm các state thấy được trên tableau, hand và Preview, để không còn phải nhận diện gameplay chủ yếu bằng emoji/glyph tạm.** Hãy tạo goal cho mục tiêu này khi bắt đầu phiên. Chủ dự án đã duyệt hướng art **MBE-inspired rounded outline** cho phát triển chính thức; việc duyệt style không tự duyệt từng ảnh. Không chuyển gameplay sang style chibi pixel hay graphic editorial.

## Đã hoàn thành trong phiên trước

- Bản chơi V0 chạy trong `prototype/` qua `python3 scripts/run_prototype.py`, khung dọc điện thoại cả khi test bằng máy tính. World mở năm Region `Home`, `Forest`, `River`, `Mine`, `Commerce`; các đường Field, Farmhouse, Fishing, Mine, shop, Shipping Bin, Nell/Heart và Sleep đã triển khai ở mức demo. Engine có 10 test đang qua.
- Card Register devtool tại `prototype/card-register.html` đọc/sửa trực tiếp `docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.json`; workbook đã nghỉ dùng. JSON có **113 dòng lá/state**, 15 trường mỗi dòng, năm trường đầu trùng lá full: `Identity`, `Type`, `State`, `Action`, `Description`. Giá trị Type và Action đã được chuẩn hóa theo từ vựng trong JSON. `python3 scripts/run_prototype.py --check` đang qua.
- UI game giữ dark mode. Hand xếp hình cung, có chế độ `Action`/`Preview`; Preview lá full dùng khung cố định và năm trường trên. Cụm mùa/ngày, Weather, pha ở đầu; nút tiến pha nằm trong ô pha. Toast thông báo nổi tự mờ, không chiếm layout. Options đổi Itim/Patrick Hand/Pixelify Sans và kích cỡ tableau. Bản **thử chưa chốt** cho lá vuông: viền xám `#8c8c8c` 2 px, không bóng, tên chữ trắng viền đen ở mép dưới, ảnh vuông hiện trọn; xem `prototype/tableau-card.css` và quyết định UI-67.
- Các skill art đã tách, đều bắt đầu bằng `art-` và chứa ảnh tham chiếu trong chính skill. Dùng `.agents/skills/art-little-valley-cards-mbe/SKILL.md` cho art mới; chibi pixel, graphic editorial và native pixel là skill riêng, không là hướng mặc định.
- Đã đưa sáu ảnh MBE đầu vào game: `Hedgerow (Berries ready)`, `Turnip Crop (Growing)`, `Turnip Crop (Mature)`, `Farmhouse`, `Farm Pond`, `Field Rock`. Source, ảnh 512×512, prompt và vai trò tham chiếu ở `art/style-studies/mbe-first-runtime-v0.1/` và `art/style-studies/mbe-more-cards-v0.1/`. Một số art pixel V0 cũ vẫn ở Field. Card Register hiện chỉ có **12/113 dòng được gán art**, nhưng 101 dòng còn lại không đồng nghĩa phải tạo 101 ảnh khác nhau; phải kiểm reachability và reuse hợp lệ theo identity/state.
- Các ảnh tham chiếu của chủ dự án chỉ là cảm hứng style; không sao chép nhân vật, thương hiệu, vật thể hoặc bố cục. Người dùng sẽ xem và phản hồi từng asset sau.

## Hiện trạng code cần biết

- `prototype/app.mjs` đọc art đã gán trong Card Register bằng `artFor(base, state)`, nhưng chỉ một số chỗ truyền art vào `card()`: Soil/Crop, Hedgerow ready, Field Rock, Farm Pond, Farmhouse. Region, cây Forest, Fruit Tree Field, Fishing Spot, Nell, Mine, TV/Bed, Supermarket và nhiều lá khác vẫn dùng `glyph()` dù có thể được thêm ảnh trong Register.
- `dock()` hiện vẽ toàn bộ hand bằng emoji/glyph và chưa lấy art từ Register; `inspect` của hand cũng chưa nhận đường art. Muốn goal art phủ đủ hand cần nối dữ liệu art vào cả hand và Preview, giữ fan/tap hiện hành.
- `prototype/card-inspect.css` còn dùng `image-rendering: pixelated` cho ảnh trong full Preview; ảnh MBE cần hiển thị mượt, trong khi asset pixel legacy vẫn cần cạnh sắc. Rà theo loại asset thay vì đổi toàn bộ.
- CSS tableau hiện ở `prototype/tableau-card.css` + `prototype/ui-tidy.css`; ảnh giữ tỷ lệ 1:1, không crop/tách nền. UI-67 là phép thử chưa được chủ dự án chốt nên đừng biến nó thành quy tắc bắt buộc của art.
- Source luật: `docs/current/README.md` chỉ contract sở hữu; quyết định mới nhất tại `docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md`; danh mục JSON sở hữu identity, Type, State, Action, Description và art assignment. Art không tự đổi luật hay AP.

## Các bước cần làm chính xác

1. Kiểm `git status`, đọc bản đồ nguồn luật, Card Register, skill MBE và hai hồ sơ art MBE. Chạy `python3 scripts/run_prototype.py --check` để lấy baseline. Đừng đồng bộ các snapshot lịch sử.
2. Lập danh sách **card/state thực sự thấy được** trên đường chơi V0 qua năm Region, Field theo ngày/mùa, hand và Preview. Đánh dấu: đã có art đúng, art legacy tạm, art sai/chưa có, và state có thể reuse art mà không gây hiểu nhầm. Ưu tiên lá người chơi phải chọn/chạm để chơi trước art trang trí. Đừng coi toàn bộ 113 dòng là 113 ảnh bắt buộc.
3. Tạo art theo **lô visual family** bằng skill MBE và built-in image generation: mỗi asset là ảnh vuông trọn vẹn, giao file 512×512, đọc được ở khoảng 160×160 và ở cỡ Field nhỏ; identity/state phải rõ. Không đưa text, card frame, nhãn hoặc nút vào ảnh. Giữ source, bản giao, exact prompt, reference role và trạng thái review trong `art/style-studies/`; chỉ reuse giữa state khi nhìn không sai logic.
4. Gán art trong Card Register qua devtool hoặc JSON rồi chạy `python3 scripts/run_prototype.py --check`. Nối `artFor` vào các bề mặt tableau còn thiếu và hand/Preview. Không sửa action grammar, AP, giá, growth hoặc card identity chỉ để thuận tiện cho art.
5. Xem trực tiếp ở browser khung dọc tại cỡ tableau lớn và 60%, tối thiểu Home, Field 8 lá, Forest, River, Mine, Commerce, hand gấp/xòe và full Preview. Kiểm ảnh không vỡ, không sai state, không bị crop, không tạo text UI trong ảnh; art MBE mượt và pixel legacy vẫn đúng pixel. Kiểm bàn vẫn đầy đủ, không cần scroll dọc.
6. Chạy `node --test prototype/game.test.mjs`, `python3 scripts/run_prototype.py --check`, `git diff --check`, và `python3 scripts/check_markdown_links.py` nếu sửa liên kết. Tổng kết số card/state reachable đã có art, ngoại lệ còn lại và một action tiếp theo cụ thể. Giữ trạng thái **candidate/runtime V0** tách khỏi phê duyệt art cuối của chủ dự án.

## Lỗi và ranh giới đã biết

- Tester đã phát hiện **thứ tự hình Turnip giữa các state có vấn đề** và từng yêu cầu để sửa sau. `Turnip Crop (Watered)` còn dùng ảnh pixel V0 cũ, trong khi Growing/Mature dùng MBE; cần kiểm toàn bộ vòng Growing → Watered → Mature trước khi thay, không chỉ thay file theo tên.
- Nhiều tableau card vẫn là glyph; hand và hand Preview chưa hiển thị art dù Register có thể đã gán. Đó là khoảng trống triển khai của goal art, không phải thiếu luật gameplay.
- MBE được duyệt ở cấp hướng, **không phải mỗi ảnh riêng**; các ảnh đang chơi là art V0 chờ phản hồi. Chibi pixel và graphic editorial là nghiên cứu chưa duyệt.
- Footer chữ trắng viền đen và viền xám của card là **giả định UI đang thử**, không phải luật chốt. Cỡ 60% và tên dài có nguy cơ khó đọc; giữ Preview full để xem thông tin và báo lại nếu thấy vấn đề thật.
- Prototype dùng fixture cho AP, Weather, giá, Can 40 và nhịp cây; đừng nâng thành cân bằng cuối. Save gameplay chỉ ở `localStorage` và schema version 1; chưa có đồng bộ nhiều thiết bị.

Khi mở phiên mới, hãy thực hiện goal art trên thay vì tiếp tục sửa skin UI theo suy đoán. Chủ dự án sẽ đánh giá art và trải nghiệm qua chơi thử sau.
