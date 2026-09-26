# Forest · contract nội dung V0 01

**Bổ sung CG-58 · 2026-09-26:** ba cây lấy gỗ thường, Axe, Wood và Sap hiện tham gia V0 theo §5 dưới đây. Những câu cũ nói Wood/chặt cây còn hoãn mô tả phạm vi trước CG-58.

**Bổ sung CG-63 · 2026-09-26:** `Mahogany Tree` và `Hardwood` vào V0 theo §6, dùng vòng Chop/Stump/Season của §5 với output riêng. Câu §5 nói Mahogany còn nháp là snapshot trước CG-63.

**Ranh giới CG-59–61:** câu §5 nói Fruit Trees còn nháp là snapshot trước sáu loài thường Spring/Summer/Fall ở [Fruit Tree contract](FIRST-PLAYABLE-FRUIT-TREE-CONTENT-BATCH-01.md); Banana/Mango vẫn nháp. Luật Chop Stump tại Forest không áp cho cây ăn quả ở Field.

Ngày: 2026-09-25. Trạng thái: **đã sửa theo lời giải thích của chủ dự án tại CG-56/57**. `Hedgerow` là **bụi cây hoang dã**, một lá đối tượng thật trong Forest; người chơi **hái quả trên bụi**, không “lượm” Berry từ lá nguồn trừu tượng và cũng không mở một gateway. `Hedgerow Berry` là lá quả thu được. Bản sửa dở định bỏ bụi, bày Berry trực tiếp đã bị rút lại trước khi vào danh mục. Hai tên kế thừa [fixture identity cũ](../evidence/CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md); taxonomy và cách đọc action hiện hành nằm ở đây.

## 1. Lá bụi và lá quả

| Identity | Loại và nơi | Tương tác / kết quả | Vai trò |
| --- | --- | --- | --- |
| `Hedgerow` | `Vegetation` (bụi cây bám đất), thường trực trong tableau `Forest` với state `Có quả` hoặc `Đã hái` trên **cùng identity**. Bụi không vào Item khi hái. | Khi `Có quả`, chọn `Hand` rồi chạm chính lá bụi để **hái Berry** (`Pick Berry`): trả 1 AP gốc, tạo 1 `Hedgerow Berry` vào Item; bụi đổi sang `Đã hái`. | Cây cho nguồn Berry thấy trước; người chơi quyết định dùng AP để hái hay dành cho việc khác. |
| `Hedgerow Berry` | `Item · Crop`, subtype Berry; lá output trong Item sau khi hái. **Không** là world-item nằm riêng cạnh bụi. | Keep hoặc gửi Shipping Bin; xác nhận Bin tiêu đúng item, 0 AP, Gold chờ trả cuối ngày. | Nguồn Gold ngoài Farm hoặc item được giữ lại; giá cuối và công dụng khác còn mở. |

CG-57 sửa phạm vi CG-06: bụi Hedgerow **bám đất, tồn tại qua nhiều lần hái và không thể cất vào Item**, nên thuộc loại lá `Vegetation`, cùng nhóm dành cho các lá cây lấy gỗ. `Hedgerow Berry` sau hái vẫn là `Item · Crop`. Đây là phân loại theo cấu trúc lá của Little Valley Cards; `Woodlot` không được kích hoạt, còn `Wood` vào V0 ở §5 theo CG-58. Phân loại `Wild Herb` hay cây đang trồng theo CG-06 không đổi. Bụi không là loại lá `Source` trừu tượng, `Area`/Region con hay card container. Bụi là **đích tác động** của Hand; chạm mở/inspect không hái quả, và hái không làm bụi biến mất. Bách Khoa ghi Hedgerow khi lá bụi lần đầu hiện trong Forest, rồi ghi Berry khi lá item output lần đầu hiện trong Item. Tranh quả trên bụi không tự bày card Berry thứ hai hoặc ghi Berry sớm.

## 2. Nhịp giấy và ranh giới

`Hedgerow` có quả từ đầu Season giấy đầu. Nếu chưa hái, nó giữ state `Có quả` qua Sleep và Back. Sau một lần hái, nó giữ state `Đã hái` tới đầu Season kế; cùng lá bụi lại `Có quả` khi Season mới bắt đầu. Berry đã hái và cất trong Item không mất ở ranh giới Season. Nhịp **một quả từ một bụi mỗi Season** là lựa chọn chuyển thể V0 của Little Valley Cards, không phải cadence chính xác của Stardew; có thể sửa khi thiết kế nguồn Berry theo mùa. `Pick Berry` bị từ chối khi bụi đã `Đã hái` hoặc không đủ AP: không trừ AP và không tạo item. Nell relief áp cho phí gốc 1 AP theo luật chung nếu còn credit.

## 3. Wild Herb trong Forest

`Wild Herb` là `Item · Crop` hiện trực tiếp như một world card trong tableau `Forest`, ở bối cảnh Rìa Rừng; không cần lá `Grove Batch` hoặc tầng điều hướng khác. Một lá Herb chưa Collect tồn tại qua Sleep và chỉ biến mất khi Hand Collect hoặc khi Season đổi. Hand → Herb trả 1 AP gốc, chuyển **cùng identity** vào Item; Herb đã Collect giữ được qua Season và có thể làm Gift Nell theo CG-49. Chưa Collect thì không vào túi. Bách Khoa ghi lá ngay khi thấy trong Forest.

**Nhịp giấy V0 lấy từ [audit Grove §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md):** đầu mỗi Season xáo năm slip, gồm một `Wild Herb` và bốn slip trống. Mỗi New Day khi không có Herb chưa Collect trên Forest, mở và tiêu một slip; slip Herb đặt một lá Herb ngửa, slip trống không đặt gì. Sau slip thứ năm, xáo lại bộ năm. Khi Herb còn trên Forest, tạm dừng rút slip; sau Collect, lần kiểm kế tiếp là New Day sau đó. Ở ranh giới Season, bỏ Herb **chưa Collect**, đặt lại và xáo năm slip, rồi kiểm New Day đầu Season mới. Tối đa một Herb chưa Collect được bày. Đây là bộ sinh **chuyển thể giấy**, không phải tỷ lệ gốc của Stardew hoặc thông số cân bằng cuối.

Hedgerow khác ở chỗ lá trên Forest là **cây bụi bám đất tồn tại**, còn Berry là output sau hái. Không dùng slip Herb cho bụi, không có `Search`, `Grove Batch`, cổng lồng thêm hay Berry world-card đứng riêng. Berry không là Seed, không Plant được; CG-49 chỉ nhận đúng `Wild Herb` làm Gift Nell V0. Mira, Energy và recipe từ fixture cũ không được kích hoạt.

**Đường kiểm giấy địa phương:** với fixture `P_B = 2G/Berry`, `P_T = 2G/Turnip Seed`, D1 có thể hái một Berry (1 AP), gửi Bin (0 AP), Sleep nhận 2G; D2 Buy một Turnip Seed ở Commerce (0 AP). Đây là đường `Forest → Home/Bin → Commerce → Home/Field`, không khóa hai giá `2G` hay chứng minh Berry luôn mua được Seed khi author giá cuối.

## 4. Nguồn tham khảo và mức quyết định

[Stardew Valley Wiki: Salmonberry](https://stardewvalleywiki.com/Salmonberry) ghi quả mọc **trên bụi** theo mùa; người chơi tác động lên bụi để lấy quả. Little Valley Cards biến **bụi** và **quả sau hái** thành hai card identity theo ngữ pháp lá của chính dự án. Đây là cách chuyển thể, không phải tuyên bố Stardew có card Hedgerow, phí 1 AP, một quả/Season hay state `Đã hái` đúng như trên. Không nhập ngày 15–18, lượng quả theo skill, Energy, giá 5g hoặc Gift gốc.

`Woodlot`, Processing, Mira, Berry recipe và các Berry theo mùa khác để sau. Wood thuộc gói cây §5. CG-57 không đổi nhịp `Wild Herb`, Nell, Mine, Fishing hoặc số Region.

## 5. Gói cây lấy gỗ đầu tiên · CG-58

**Lựa chọn chuyển thể V0 theo ủy quyền của chủ dự án:** chọn `Oak Tree`, `Maple Tree`, `Pine Tree` từ [lô cây thường](../content-batches/common-trees-wood-01.json). Mỗi cây là một `Vegetation` bám đất, có **một lá ở tableau Forest lúc bắt đầu** vòng giấy, ở state `Mature`; lá có thể tạm rời bàn sau khi dọn gốc. `Axe` là Tool dùng lại, có trong Item từ đầu V0. `Wood` và `Sap` là hai Item/material nhận sau chặt; cây/gốc không vào túi. Đây không phải ba vị trí Soil của Field, không thêm Region hoặc tầng điều hướng.

| Đích | Commit `Axe → cây` | Kết quả trên bàn và trong Item |
| --- | --- | --- |
| Một `Oak Tree`/`Maple Tree`/`Pine Tree` đang `Mature` | `Chop` 1 AP gốc | Nhận **2 Wood + 1 Sap**; cùng lá cây đổi sang state `Stump` tại Forest. |
| Một trong ba lá trên đang `Stump` | `Chop Stump` 1 AP gốc | Nhận **1 Wood**; đặt lá cây sang chồng chờ Season của Forest, ngoài tableau và ngoài Item. Không tạo card identity `Stump` hoặc Item cây/gốc. |

Chọn Axe rồi chạm đúng lá cây/gốc hợp lệ thì commit ngay theo UI nguồn → đích hiện hành. Axe không tiêu và có thể tiếp tục được chọn để chạm lá khác; mỗi lần chạm là một action/phí riêng. Target sai state hoặc thiếu AP thì không trừ AP, không tạo output. Phí gốc 1 AP thuộc hệ AP chung và được Nell relief trả như các action có phí khác; chỉ thay đổi AP thực trả, không tăng output. Inspect/Back không Chop hoặc đổi state.

`Sleep` giữ nguyên Mature/Stump/lá ở chồng chờ; rời Forest rồi quay lại cũng vậy. **Đầu Season kế**, lá trong chồng chờ vì `Chop Stump` trở lại Forest ở state `Mature`. Lá còn `Mature` giữ nguyên; lá còn `Stump` vẫn là `Stump` và chặn cây ấy trở lại cho tới khi gốc được chặt. Đây là nhịp nén cho luật giấy, không sao chép ngày mọc mầm/ngẫu nhiên của Stardew. Ba identity trên luôn có tối đa một bản đang tham gia vòng Forest; không Plant seed hoặc nhân thêm cây trong gói này.

Wood/Sap được giữ trong Item qua Sleep/Season. Gói này **chưa cho chúng recipe, giá bán hoặc hành động Bin/Gift**; thiếu sink không chặn việc nhận output. Acorn/Maple Seed/Pine Cone, Moss, Tapper và sản phẩm nhựa/syrup/tar thuộc phần nội dung sau; `Mahogany Tree`, cây đặc biệt và Fruit Trees vẫn ở kho nháp, không tự vào V0. Bách Khoa ghi Axe khi Tool đầu game hiện, ba cây khi từng lá hiện ở Forest, Wood/Sap khi item output đầu tiên thực sự hiện; `Stump` chỉ là state của đúng cây đã thấy.

**Nguồn và ranh giới:** [Stardew Valley Wiki — Trees](https://stardewvalleywiki.com/Trees) xác nhận Axe chặt cây thường cho Wood/Sap, để lại stump; Axe xử lý stump và stump chưa dọn cản mọc lại. Số hit, số Wood/Sap và xác suất seed của game gốc **không** là số AP/yield của Little Valley Cards. `1 AP`, `2 Wood + 1 Sap`, `1 Wood` từ gốc và reset theo Season là lựa chọn chuyển thể để vòng giấy có điểm bắt đầu, commit, state sau action và cơ hội lặp lại; chưa phải cân bằng phát hành hoặc lời chốt trực tiếp về con số của chủ dự án.

## 6. Mahogany Tree / Hardwood · CG-63

**Lựa chọn chuyển thể V0 theo ủy quyền tiếp tục gói cây:** thêm **một** `Mahogany Tree` (`Vegetation`) đang `Mature` vào tableau Forest từ đầu vòng giấy. Nó đứng cạnh Oak/Maple/Pine, không chiếm vị trí Soil của Field và không là cây được tạo bởi Mahogany Seed trong V0. Một lá Mahogany có cùng state `Mature → Stump → chờ Season → Mature` của §5; tối đa một bản của identity này tham gia vòng Forest. Đây là **cách đặt cây của Little Valley Cards**, không suy rằng Mahogany mọc sẵn trong Forest của game gốc.

| Đích | Commit với `Axe` | Kết quả |
| --- | --- | --- |
| `Mahogany Tree · Mature` | `Chop` **1 AP gốc** | Nhận **2 Hardwood + 1 Sap** vào Item; **cùng lá Mahogany Tree** đổi sang `Stump` tại Forest. Không nhận Wood từ lần Chop thân cây. |
| `Mahogany Tree · Stump` | `Chop Stump` **1 AP gốc** | Nhận **1 Wood** vào Item; lá Mahogany rời Forest sang chồng chờ Season. Đầu Season kế, chính lá đó trở lại `Mature`. |

Chạm đích sai state hoặc thiếu AP không commit, không tạo output. `Sleep` thường và Back giữ state; Stump chưa dọn không tự hồi. Axe dùng lại; Nell relief, nếu hợp lệ, chỉ giảm AP thực trả như §5. `Hardwood` là **Item / material** riêng với `Wood`; nhận, giữ qua ngày/Season và ghi Bách Khoa khi item đầu tiên hiện. Bách Khoa ghi cây khi chính lá Mature lần đầu hiện ở Forest; `Stump` chỉ là state, không có entry mới. Chưa có giá, recipe, Shipping Bin/Gift hay sink cho Hardwood; thiếu sink không chặn Chop. `Mahogany Seed`, trồng cây, Tapper → Sap, cây Mahogany ở Island/Dangerous Mines và nguồn Hardwood khác để sau.

**Nguồn và ranh giới:** [Stardew Valley Wiki — Trees](https://stardewvalleywiki.com/Trees) xếp Mahogany vào cây thường: Axe chặt cây trưởng thành cho Hardwood thay Wood, có Sap/seed theo điều kiện, để lại Stump; chặt gốc trả Wood/Sap theo luật nguồn. [Mahogany Tree](https://stardewvalleywiki.com/Mahogany_Tree) ghi cây mọc từ seed, có thể xuất hiện ở Dangerous Mines theo điều kiện; [Hardwood](https://stardewvalleywiki.com/Hardwood) ghi Mahogany là nguồn Hardwood và cây dại ở Ginger Island. V0 nén lượng thành `2 Hardwood + 1 Sap`/`1 Wood`, đặt một cây sẵn trong Forest và dùng nhịp trở lại đầu Season để **khớp vòng cây thường đã chọn**; các con số và vị trí là lựa chọn chuyển thể giấy, không phải luật nguồn hay lời chốt trực tiếp của chủ dự án. Không nhập tỉ lệ rơi Mahogany Seed, Foraging, số hit hoặc lịch mọc ngẫu nhiên.
