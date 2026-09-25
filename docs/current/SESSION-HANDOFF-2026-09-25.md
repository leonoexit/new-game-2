# Prompt bàn giao — Little Valley Cards — 2026-09-25

Hãy tiếp tục dự án **Little Valley Cards** tại:
`/Volumes/LeNguyen02SSD/Programming/new-game-2`

Đây là prompt bàn giao sau phiên thiết kế Mine/Fishing và thử nhiều prototype. Hãy làm việc với tôi bằng **tiếng Việt**, nhưng **mọi tên lá, trạng thái, action và nút trong game phải dùng tiếng Anh nhất quán**. Không trộn tên tiếng Việt vào UI tiếng Anh. Chọn tên dễ hiểu, không bê nguyên thuật ngữ của game tham khảo chỉ để giống nguồn.

## 1. Điểm tiếp tục quan trọng nhất

Tôi đã coi **khung cơ chế Mine và Fishing là chốt để đi tiếp**. Điều này không có nghĩa code, art, taxonomy chi tiết và cân bằng đã hoàn thiện.

Trợ lý đề xuất dựng bản chơi tích hợp một ngày Farm–Mine–Fishing; tôi đã trả lời rõ: **“không cần thiết, bỏ qua luôn.”** Không tự dựng lại, không biến bước đó thành điều kiện để tiếp tục thiết kế.

Ngay trước yêu cầu bàn giao, trợ lý đề xuất bước tiếp theo là **thiết kế nâng Tool, bắt đầu với hiệu ứng Pickaxe**, đối chiếu hướng tăng sức phá của nguồn với Mine mới; sau đó mới đặt phí, nơi và thời điểm nâng. Đây là điểm nối hợp lý cho phiên mới, **chưa có hiệu ứng nâng mới nào được tôi duyệt**.

Hãy bắt đầu bằng việc đọc quyết định mới nhất, đối chiếu tài liệu nâng Tool, rồi đề xuất một phương án Pickaxe cụ thể theo `state → action → consequences`. Không quay lại hỏi có muốn tiếp tục Mine/Fishing hay dựng bản một ngày không.

## 2. Những gì đã đạt được

### 2.1. Nền card grammar và mục đích output đã có

- Card grammar mô tả **loại lá → nơi thuộc về → tương tác → biến đổi**. Chọn nguồn rồi chạm đích là lớp thao tác, không phải bản chất grammar.
- Character là Person card; Hand, Watering Can, Fishing Rod, Pickaxe là Tool card.
- Item là loại lá, không đồng nghĩa lá đã ở khu inventory. Fish là Item/Fish; các identity cá giữ nguyên khi được bắt và đưa vào Item.
- Supermarket là Building; Shipping Bin và TV là Equipment. Farmhouse là Building; TV ở trong Farmhouse. Equipment không tự thêm hệ thống trang bị.
- Bách Khoa ghi từng identity khi chính lá ấy lần đầu được thấy, không đợi sở hữu và không thưởng Seed. State mới không tự tạo identity mới.
- Fish dùng để bán qua Shipping Bin; giữ luật chọn số lượng/xác nhận gửi, tiền trả cuối ngày. Giá Fish chưa chốt và fixture tích hợp cũ chưa triển khai bán Fish.
- Ore dùng **trực tiếp để nâng Tool**. Chưa cần Furnace–Coal–Bar. Không tự đưa chuỗi này trở lại.
- Farm đã có loop khá rõ; tôi không yêu cầu thiết kế lại. Những lỗi UI nhỏ không phải ưu tiên hiện tại.

### 2.2. Mine — luật mới nhất đã chốt, CG-17

Mental model: **đối tượng đang thấy → quyết định tác động → trả công → nhận hệ quả**. Hành động là phá đá; không cần giả lập di chuyển.

Tên tiếng Anh:

- **Rock:** đá thường; phá có thể nhận tài nguyên, lộ lối xuống hoặc không có gì.
- **Ore Rock:** đá nhìn thấy có quặng, thay tên làm việc cũ **Exposed Ore**; phá để nhận **Ore**.
- **Ore:** Item output, identity riêng với nguồn Ore Rock.
- **Break:** hành động Character + Pickaxe tác động lên đá và trả AP.
- **Next:** nút bên dưới từng lá để đổi riêng ô đó.
- **Descend:** hành động dùng lối xuống để sang tầng.

Luật hiện hành:

1. Có **3 lá mở sẵn**. Không có action lật ô hoặc trả phí xem lá.
2. Character + Pickaxe → Rock/Ore Rock → Break trả AP → giải kết quả. Nếu đã phá và nhận Ore thì **không có phí Extract thứ hai**.
3. Không muốn xử lý một lá thì dùng Next ngay dưới lá đó. Đổi riêng ô này; hai ô kia giữ nguyên. Next không mất AP, không phải Break.
4. Lá bỏ qua sẽ xuất hiện lại. Vòng luân phiên tiếp tục **không giới hạn một vòng quay lại**, cho tới khi sang tầng khác.
5. Trạng thái từng lá được giữ. Không tự reset nguồn đã xử lý để nhận thưởng lần nữa.
6. Lộ lối xuống chưa tự chuyển tầng; phải chọn Descend.
7. Rời Mine vẫn lưu tiến độ, trạng thái các lá, bàn và vị trí trong vòng luân phiên; trở lại tiếp tục từ đó.

Chưa khóa số lá/tầng, phân bố, lượng Ore, phí Break/Descend và chi tiết cadence ngày mới. Không coi bộ 6 lá hoặc phí 1 AP của các prototype cũ là luật cuối. Câu tôi chốt “mỗi action 1 AP” vừa rồi nằm trong thảo luận Fishing, đã được ghi thành phí Cast; chưa được áp ngầm lên tất cả action khác trong game.

Phân biệt với nguồn: Stardew video game có các ore node nhìn thấy và phá để nhận Ore. Board game dùng action/dice/Mine Map, kết quả Ore cho Ore trực tiếp. Chuỗi Search → Exposed Ore → Extract là thiết kế cũ của dự án, không phải chuỗi nguyên bản bắt buộc phải giữ.

### 2.3. Fishing — hướng mới nhất, CG-18

Tôi muốn **xác suất và một chút kỹ năng đọc cơ hội**, không phải phản xạ real time.

Luật đã xác nhận:

1. **3 điểm câu mở sẵn.** Hình/trạng thái trên lá biểu thị xác suất có cá. Có thể đổi cả tên hiển thị để dễ phân biệt.
2. Character + Fishing Rod → chọn điểm câu → **Cast**.
3. **Mỗi Cast hợp lệ tốn đúng 1 AP**, có Fish hay **No Bite** vẫn phải trả, không hoàn phí khi hụt.
4. Kết quả dùng xác suất của **trạng thái người chơi đã thấy trước commit**.
5. Sau khi giải kết quả, trạng thái các điểm câu **có thể thay đổi**. No Bite vẫn là một Cast đã thực hiện nên cũng kích hoạt bước cập nhật này.
6. “Có thể đổi” không bắt buộc cả ba điểm đều đổi sau mọi Cast. Chưa chốt phân bố chuyển trạng thái hoặc bắt điểm vừa câu phải xấu đi.
7. Đọc thông tin, chọn nguồn, xem/đổi lá không làm mới cơ hội miễn phí. Thiếu AP hoặc target không hợp lệ thì không commit, không đổi state.
8. Không có đồng hồ đếm ngược, Hook đúng thời điểm, Reel/Ease hoặc bộ đếm Leaving/Lingering trong hướng hiện tại.

Tên trạng thái **chỉ mới là đề xuất**, chưa duyệt cuối:

| Tên đề xuất | Dấu hiệu | Xác suất tương đối |
| --- | --- | --- |
| Quiet Water | Nước yên, chưa thấy cá | Thấp |
| Ripples | Gợn nước/bóng cá | Trung bình |
| Splashing Fish | Cá quẫy rõ | Cao, không bảo đảm |

Đây dự kiến là state của điểm câu, không tự thành ba identity. Tên cơ sở/taxonomy Fishing Spot, phần trăm, nhóm cá, giới hạn khai thác, cadence khi rời Area/Sleep chưa chốt. Không tự ghi mọi identity cá vào Bách Khoa chỉ vì thấy dấu hiệu chung trên mặt nước.

### 2.4. Nghiên cứu và các hướng đã thử, không phải luật hiện tại

- Đối chiếu Stardew board và Fantasy Life; nguồn và phần tự thiết kế được tách trong tài liệu. Fantasy Life 3DS và Fantasy Life i không được đánh đồng.
- Đã thử hình Exposed Ore có mảnh nứt làm điểm yếu. Tôi thấy hình rõ nhưng cơ chế vẫn cấn. Không phát triển tiếp trò tìm điểm yếu trên hình.
- Mine v0.1: trả AP Dig để lật, rồi trả thêm Extract; nhóm mới thay nhóm cũ, một vòng quay lại. Đã bị CG-17 thay thế.
- Mine v0.2: thấy target sẵn, xử lý xong bổ sung một ô; đá chắn không cho Item. Cũng chưa phải CG-17 vì chưa có Next từng ô/loop liên tục và khác ý nghĩa Rock mới.
- Fishing v0.1: Fish hiện sẵn, Catch làm cá khác tiến tới Leaving. Tôi đã chơi, thấy không ấn tượng và khó phân biệt state; không lấy làm cơ chế tiếp theo.
- Các ý tưởng giật cần đúng lúc bị bác vì real time. Reel/Ease, tín hiệu Strong Pull và chọn kiểu kéo chưa được chốt.

## 3. Trạng thái codebase và tài liệu

### 3.1. Nguồn chuẩn cần đọc

Mọi đường dẫn bên dưới thuộc `/Volumes/LeNguyen02SSD/Programming/new-game-2`:

- `docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md`: §10, đặc biệt **CG-17 và CG-18**, là nguồn quyết định chính. Có ghi chú đầu phần danh mục về các snapshot cũ.
- `docs/current/MINE-FISHING-REFERENCE-DIRECTIONS-02.md`: §11 là Mine cuối; §2–10 là nghiên cứu/prototype lịch sử.
- `docs/current/FISHING-LOOP-PROPOSAL-01.md`: **§5 là Fishing hiện tại**, gồm Cast 1 AP; §2–4 là các hướng cũ.
- `docs/current/ORE-USE-REFERENCE-AND-PROPOSAL-01.md`: §4–5 là đối chiếu nguồn; §7 là định hướng tác dụng Tool. Đầu file đã ghi điểm tiếp tục sau CG-17/18 và việc bỏ qua bản tích hợp một ngày.
- `docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx`: một sheet `Lá bài V0`, danh mục đã audit 28 dòng A7:K34 ở mốc cũ; **chưa migrate theo Mine/Fishing mới**.
- `stardew rules.pdf`: rulebook board do tôi cung cấp. Trang 17 Mine, 18 Fishing, 20 nâng Tool. Không cần tìm lại toàn bộ từ đầu.

Các file hiện có chứa nhiều lớp lịch sử. Nếu đoạn cũ nói Search/Extract, chỉ có CP3, trả phí lật, một vòng quay lại, hoãn Fishing hoặc chưa chốt Mine, **không dùng nó phủ quyết CG-17/18 và chỉ đạo cuối phiên**.

### 3.2. Các artifact đang có

| Thư mục | Nội dung và giới hạn |
| --- | --- |
| `paper-tests/integrated-card-grammar-v0.1/` | Fixture HTML/JS grammar cũ. Không phải bản tích hợp một ngày mới. Vẫn có Mine/Fishing baseline; chưa nâng Tool. |
| `paper-tests/mine-dig-flip-v0.1/` | Prototype trả AP đào-lật; giữ làm lịch sử. |
| `paper-tests/mine-visible-action-v0.2/` | Prototype thấy target rồi xử lý/bổ sung ô; giữ làm lịch sử. |
| `paper-tests/fishing-opportunities-v0.1/` | Before They Leave; hai scene cố định, bảng so lần thử; bị hướng CG-18 thay thế. UI tiếng Anh. |
| `art/style-studies/exposed-ore-weak-point-v0.1/` | Một study điểm yếu, hai lần chỉnh, source PNG, bản 512/160px, mockup lá vuông 224px, script dựng khung, prompts và record. Chưa approved/runtime. |

Ba prototype riêng có `fixture.html`, `engine.js`, `ui.js`, `logic-check.cjs`, `README.md`. Fixture tích hợp dùng `fixture.js` thay vì engine/ui riêng. Các prototype là HTML/JS độc lập, không phải runtime được phát hành; không có dependency/server bắt buộc để người dùng tự mở file.

**Chưa có prototype đúng toàn bộ Mine CG-17 hoặc Fishing CG-18.** Chưa migrate workbook, chưa triển khai nâng Tool, chưa thêm taxonomy mới vào runtime. Các prototype lưu trạng thái qua Farm trong phiên JS; reload/test reset bắt đầu lại. Không được gọi đó là persistent save trên đĩa.

### 3.3. Git và thay đổi chưa commit

Repo đang có thay đổi chưa commit từ nhiều lượt; không phải tất cả do lượt mới nhất. Bảo toàn, không revert hàng loạt, không tự commit/push.

Tracked modified:

```text
README.md
docs/current/CONTENT-MINIMUM-REGISTRY-01.md
docs/current/MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md
docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md
docs/current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md
docs/current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md
```

Untracked đã thấy trong phiên, cộng file bàn giao này:

```text
art/style-studies/exposed-ore-weak-point-v0.1/
docs/current/FISHING-LOOP-PROPOSAL-01.md
docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx
docs/current/MINE-FISHING-REFERENCE-DIRECTIONS-02.md
docs/current/ORE-USE-REFERENCE-AND-PROPOSAL-01.md
docs/current/SESSION-HANDOFF-2026-09-25.md
paper-tests/fishing-opportunities-v0.1/
paper-tests/integrated-card-grammar-v0.1/
paper-tests/mine-dig-flip-v0.1/
paper-tests/mine-visible-action-v0.2/
```

Đầu phiên mới chạy `git status --short` để biết trạng thái thực; đừng dùng `git diff --stat` một mình để đếm việc đã làm vì nó không bao gồm các artifact untracked.

### 3.4. Những kiểm tra đã thực hiện

- Mine v0.1: model qua các trường hợp phí nguyên tử, không peek/nhận trùng, vòng quay lại, xuống ở 0 AP, Farm/Sleep; 720 hoán vị có nhãn tương ứng 60 thứ tự nội dung.
- Mine v0.2: qua 60 thứ tự nội dung và 200 lượt tạo có seed; refill một ô, giữ lối xuống, chi phí và state.
- Fishing v0.1: 67 state chuỗi Catch đủ AP / 37 kết thúc; kiểm thời điểm cá rời/cá mới tới, AP, không bắt trùng, hàng chờ hữu hạn và Farm.
- JS syntax, tham chiếu HTML tĩnh và `git diff --check` đã kiểm. Các count trên là kết quả tại thời điểm dựng artifact, không phải test cơ chế CG-17/18.
- Tôi đã chơi các prototype và đưa feedback; đó là review của chủ dự án đã biết luật, không phải fresh-player study.
- QA browser tự động với file local từng bị chặn. Không dùng localhost/CDP/đường vòng để vượt lệnh chặn. Không tuyên bố đã QA trực quan trên điện thoại. Art study từng được xem bằng công cụ ảnh tĩnh, không đồng nghĩa browser QA.

Khi sửa code tương ứng mới chạy lại các check thích hợp:

```sh
node paper-tests/mine-dig-flip-v0.1/logic-check.cjs
node paper-tests/mine-visible-action-v0.2/logic-check.cjs
node paper-tests/fishing-opportunities-v0.1/logic-check.cjs
```

Không lặp tất cả test chỉ vì bắt đầu một lượt thảo luận thiết kế.

## 4. Bước tiếp theo chính xác

1. Đọc CG-17/18 và §7 tài liệu Ore/Tool; giữ Mine/Fishing mới làm nền. Tôi đã bỏ qua bản chơi một ngày, không dựng hoặc đề nghị lại.
2. **Bắt đầu từ hiệu ứng nâng Pickaxe**, trước bảng giá. Mục đích đã duyệt của Ore là nâng Tool trực tiếp.
3. Định hướng nguồn trước đây: Pickaxe tăng sức phá, giảm số nhát với cùng vật cản và cho phá vật cản lớn hơn; không tự tăng Ore rơi ra. Đề xuất cách biểu diễn hợp lý bằng lá/action trên Mine mới. Chưa được giả định HP/độ cứng/nhiều nhát đã tồn tại hoặc một nhát nguồn luôn bằng 1 AP.
4. Viết một trường hợp `state → action → consequences` so Pickaxe thường với cấp nâng đầu tiên. Nêu rõ tác dụng có ý nghĩa gì và phần nào là chuyển đổi thiết kế, phần nào có từ nguồn. Nếu cần thêm loại đá hoặc state để hiệu ứng có nghĩa, ghi đó là đề xuất cần xét, không lén thêm nội dung để hợp thức hóa nâng cấp.
5. Sau khi hiệu ứng rõ và được duyệt, mới thiết kế số Ore, Gold nếu có, nơi/thời điểm nâng và identity qua các cấp. Không tự nhập Blacksmith hoặc thời gian chờ của nguồn vào dự án.
6. Sau Pickaxe mới xét Tool khác theo ưu tiên. Watering Can từng được định hướng tăng phạm vi/sức chứa theo nguồn; Fishing Rod chưa chốt hiệu ứng mới trên xác suất. Không tự mặc định Rod +x% hoặc mỗi Tool dùng cùng một thang nâng.
7. Chỉ migrate workbook/code theo những quyết định đã đủ rõ khi đến lượt triển khai thích hợp. Việc còn backlog này không phải lý do chặn thiết kế nâng Tool hoặc ép tôi test lại hai loop.

Các đề xuất nâng cũ **đã rút**: miễn AP lần đầu mỗi ngày, Pickaxe +1 Ore, gói phí chung 1 Ore, các timing trước/sau Sleep của gói đó. Đừng khôi phục như thể đã được duyệt. Yêu cầu “theo bản gốc” nói về tác dụng tham chiếu; cách đưa vào game lá bài phải rõ, không bê nguyên hệ thống chuyển động.

## 5. Bugs, edge cases và giới hạn cần nhớ

Đây chủ yếu là **khoảng trống thiết kế/migration**, không có bằng chứng model đang fail các test đã chạy:

- Tài liệu cũ, workbook và prototype chưa đồng bộ với CG-17/18; dễ tiếp tục nhầm cơ chế đã bỏ. Đây là rủi ro lớn nhất khi chuyển phiên.
- Mine: Next cần luân phiên từng ô mà không nhân đôi cùng instance trên bàn, mất tiến độ hoặc hồi thưởng nguồn spent. Xử lý khi mọi nguồn đã phá, khi pool nhỏ hơn số ô, và vị trí lối xuống trong vòng chưa được triển khai đúng luật cuối.
- Mine: lưu sau rời Area đã chốt; thời điểm refresh/Sleep/ngày mới và persistence qua reload chưa được chốt/triển khai. Không đồng nhất hai việc này.
- Fishing: giải kết quả bằng xác suất trước Cast, sau đó mới cập nhật mặt nước; không được dùng state mới để âm thầm đổi odds của hành động vừa chọn.
- Fishing: No Bite vẫn trả 1 AP và cập nhật state; thiếu AP/target không hợp lệ thì không làm gì. Tránh double commit khi chạm lặp hoặc animation.
- Fishing: Next/inspect/reopen không được reroll state miễn phí. Chưa chốt Fishing có Next như Mine hay không; đừng mặc định phải có.
- Fishing: state phải dễ đọc. Leaving/Lingering đã bị tôi nhận xét khó phân biệt. Tên Quiet Water/Ripples/Splashing Fish vẫn chỉ đề xuất, chưa có art hoặc test hiểu mới.
- Fishing: nếu luôn chỉ chọn xác suất cao nhất thì kỹ năng có thể rất nhẹ. Đây là điều cần quan sát về sau, không tự thêm minigame, xác suất ẩn hoặc hình phạt để “sửa” khi tôi chưa yêu cầu.
- Prototype Fishing cũ có Catch chắc chắn 1/2 AP và departure theo số Catch; **không phải luật Fishing hiện tại** dù code test pass.
- Prototype Mine v0.2 khiến quặng thường có lợi hơn đá cùng phí vì đều mở lá mới; không coi đó là bằng chứng cân bằng cho CG-17.
- Chưa có nâng Tool, vùng tưới/refill, loại đá/độ cứng chuẩn, giá Fish hoặc mức phí nâng. Không nói chúng đã chạy trong code.
- Không cần sửa lỗi UI nhỏ, art hoặc làm lại các demo trước khi xử lý bước nâng Pickaxe tôi đang đi tới.

## 6. Cách phối hợp với tôi

- Đề xuất cụ thể, nói rõ đã chốt hay đang thử; không hỏi lại các quyết định đã có.
- Đừng kéo dài bằng nhiều lớp giả định không cần thiết. Tôi thường cần thấy action thật có ý nghĩa gì trước khi quan tâm UI hoặc con số.
- Tôi cho phép tự giải quyết thao tác UI thường tình; chỉ hỏi khi cần chọn bản chất luật hoặc đánh đổi lớn không thể suy ra.
- Không coi những giải pháp bạn tự đề xuất là tôi đã duyệt nếu tôi chỉ đồng ý một phần cụ thể.
- Giữ lời giải thích tiếng Việt, game bằng tiếng Anh. Không tự đổi tên game/card sang tiếng Việt.
- Không tự commit/push, không tự mở một task mới hoặc dựng bản tích hợp một ngày đã bị bỏ qua.

**Hãy bắt đầu phiên tiếp theo bằng một đề xuất hiệu ứng nâng Pickaxe trên Mine mới, có ví dụ trước/sau. Đọc nguồn đã lưu trước; đừng bắt đầu lại việc tìm cơ chế Mine hoặc Fishing.**
