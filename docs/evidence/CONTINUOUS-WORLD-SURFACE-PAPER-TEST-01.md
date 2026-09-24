# Continuous world surface paper test 01 — thế giới cuộn, tile vuông và inspect card

Ngày chạy: 2026-09-21.

Trạng thái: nghiên cứu trực tiếp từ ý tưởng mới của người dùng về việc đặt toàn bộ thế giới trên một surface cuộn/pan liên tục. Đây là hướng cần kiểm chứng, chưa thay thế quyết định UI card cũ và chưa cho phép code/prototype.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt trước ý tưởng này

- Card là ngôn ngữ chính để biểu diễn thế giới.
- Người chơi không di chuyển nhân vật trên seamless map.
- Interaction tối thiểu có cảm giác Stacklands: cầm nguồn, đưa tới đích, preview, thả và thấy kết quả.
- Hình, tên và description cùng mô tả một card; hình cần tự giải thích ở kích thước nhỏ.
- Card/group có thể làm gateway để bàn không thành một đống thẻ.
- Mobile portrait là platform chính đang xét.

Tài liệu UI cũ dùng card dọc 5:7, tên/description trên mặt bài. Đó là quyết định trước ý tưởng hiện tại; chưa tự động bị xóa nhưng đang bị thách thức ở lớp biểu diễn trên world surface.

### 1.2. Ý tưởng người dùng vừa đưa ra, cần kiểm chứng

- Cả thế giới nằm trên một surface liên tục; người chơi cuộn qua toàn bộ world thay vì đổi giữa các board/group tách biệt.
- Surface có thể vertical-dominant nhưng ngoằn ngoèo, có nhánh và mang logic map.
- Card trên world có thể dùng hình đại diện vuông, art-first, không luôn hiện text.
- Text/full card chỉ hiện khi người chơi chủ động inspect card trên world hoặc trong hand.
- Có thể tham khảo cách card art được ưu tiên như Hearthstone và cấu trúc hex như Faeria.
- Farm, Mine, River và Sea cần được bố trí như các vùng của cùng một world surface.

Đây là đề xuất trực tiếp của người dùng nhưng chưa phải một quyết định đã chốt cuối cùng.

### 1.3. Giả thuyết cần thử

1. Một world surface liên tục giải quyết fragmentation của table tốt hơn nested group/page.
2. Square tile trên world và full vertical detail card có thể là hai representation của cùng entity, không cần chọn một dạng duy nhất cho mọi context.
3. Vertical-serpentine surface giữ được mobile scroll nhưng vẫn tạo cảm giác địa lý.
4. Hex grid tạo false affordance nếu adjacency/movement không phải luật.
5. Sticky hand/carried-source là điều kiện bắt buộc để giữ drag grammar trên một world dài.

### 1.4. Fixture/số tạm

- Viewport thử: portrait 390 × 844.
- HUD sticky: 64–72 px; hand/action tray sticky: 104–120 px.
- World tile thử: 72–80 px vuông, gap 8–12 px.
- Bề rộng map ưu tiên tối đa khoảng bốn tile; số này chỉ để paper layout.
- Farm core thử hiển thị sáu plot; không phải farm cap đã chốt.

## 2. Tách entity khỏi representation

Một entity card có thể có hai cách hiện:

| Context | Representation | Nội dung luôn thấy |
| --- | --- | --- |
| World surface | Square tile/card thumbnail | Art, state art/icon, selection/target ring, quantity nếu cần |
| Hand/tray thu gọn | Square hoặc gần vuông thumbnail | Art, stack count, usable/selected state |
| Inspect/detail | Vertical 5:7 card hoặc sheet | Full art framing, name, description, rule/context, accessibility text |
| Drag preview | Ghost/source chip + target preview | Verb, AP/item cost, affected targets |

Như vậy card dọc cũ không nhất thiết bị loại. Nó chuyển từ “mọi card luôn hiện full face trên bàn” sang “detail representation khi inspect”. World tile tối ưu cho mật độ và spatial reading.

Điểm cần quyết định sau paper test:

- Hand có dùng square thumbnail giống world hay vẫn là card dọc fan/stack.
- Name có hiện dưới tile khi zoom đủ gần hay chỉ khi focus.
- Person/item quen thuộc có thể art-only; entity mới có thể hiện label tạm thời.

## 3. Tham chiếu Hearthstone và Faeria

### Hearthstone — art-first không xóa nhu cầu scan text

Hearthstone hiện có các tùy chọn Never Show Text, Favor Art, Favor Text và Always Show Text cho Signature cards. Cùng bản cập nhật, Blizzard nói họ đưa text về vị trí dễ đọc hơn để scan card trong hand. Bài học phù hợp:

- Art-first/full-art là presentation hợp lệ.
- Text-on-demand nên là preference/context, không đồng nghĩa text không quan trọng.
- Hand cần nhận diện nhanh hơn một gallery art không nhãn.

Nguồn chính thức: [Hearthstone Patch 34.2](https://hearthstone.blizzard.com/en-gb/news/24244424).

### Faeria — hex có nghĩa vì positioning thật sự là gameplay

Faeria tự mô tả là card game kết hợp living board. Guide chính thức/community-hosted trên Faeria giải thích mỗi land space biểu diễn khoảng cách di chuyển, position ảnh hưởng an toàn, tấn công và thu resource.

Bài học:

- Hex mạnh khi adjacency, range, path và positioning có hậu quả.
- Nếu game này không có movement/range, hex dễ khiến người chơi suy ra luật không tồn tại.
- Có thể học cách chia world thành node/zone, nhưng không nên mượn hex geometry chỉ vì đẹp.

Nguồn: [Faeria official site](https://www.faeria.com/) và [Faeria Academy — Board Control](https://www.faeria.com/the-hub/guide/69-wishing-life).

## 4. Bốn surface model

### A — strict vertical feed

World là một cột dài; mỗi region xếp từ trên xuống.

Ưu:

- Scroll một tay dễ.
- Không lạc ngang.
- Virtualization/performance về sau dễ hơn về mặt cấu trúc.

Nhược:

- Không tạo cảm giác map; River, Town, Mine chỉ là section trong feed.
- Branch phải biểu diễn bằng indentation hoặc accordion.
- “Ở gần” và “đường nối” khó đọc.

### B — vertical-serpentine world

World vẫn chủ yếu cuộn dọc, nhưng path uốn trái/phải trong bề rộng cố định; side branch nằm trong cùng surface.

Ưu:

- Giữ thao tác scroll chính.
- Có topology, vùng và ngã rẽ.
- Phù hợp portrait hơn free pan.
- Có thể đặt Farm, River, Town, Mountain, Sea theo một hành trình dễ nhớ.

Nhược:

- Bề rộng nhỏ giới hạn số nhánh song song.
- Dễ biến thành board-game path nếu background/path quá cứng.
- Spatial distance có thể bị hiểu nhầm là travel cost.

### C — free 2D pan world

World là canvas rộng/cao; kéo map theo mọi hướng, có thể zoom.

Ưu:

- Map tự nhiên nhất.
- Branch và vùng lớn không bị bó vào portrait width.
- Farm cluster hoặc river geometry tự do.

Nhược:

- Pan và drag card tranh cùng gesture.
- Dễ mất orientation trên mobile.
- Source và target xa nhau khó tương tác.
- “Vuốt xuống liên tục” không còn là mental model đơn giản.

### D — hex world

Node/tile dùng hex grid.

Ưu:

- Branch/adjacency rõ.
- Có thể tổ chức terrain và cluster đẹp.

Nhược:

- Người chơi kỳ vọng movement, neighbor effects hoặc range.
- Square card art phải crop/fit thêm một lần.
- Nếu adjacency không có luật, geometry là decoration gây nhiễu.

### Đánh giá tạm

| Tiêu chí | A: feed | B: serpentine | C: 2D pan | D: hex |
| --- | --- | --- | --- | --- |
| One-thumb portrait | Mạnh | Mạnh | Yếu–vừa | Vừa |
| Cảm giác thế giới | Yếu | Mạnh | Mạnh | Mạnh |
| Branch | Yếu | Vừa | Mạnh | Mạnh |
| Giữ drag grammar | Vừa | Vừa | Yếu | Yếu–vừa |
| Nguy cơ false movement | Thấp | Vừa | Vừa | Cao |
| Orientation | Mạnh | Mạnh nếu có landmark | Yếu hơn | Vừa |
| Scale dài hạn | Dài nhưng rõ | Dài, cần anchors | Rộng vô hạn | Cần zoom/pan |

Giả thuyết mạnh nhất hiện tại là B: vertical-serpentine, bounded width. Đây chưa phải quyết định.

## 5. “Toàn bộ thế giới tường minh” cần ba lớp nghĩa

Để không mâu thuẫn với progressive reveal:

### Topology explicit

- Người chơi thấy Farm nằm ở đâu, River đi qua đâu, Mountain/Mine ở nhánh nào, Sea ở cuối vùng nào.
- Locked landmark có thể hiện silhouette/state rõ.
- Không cần dò menu để biết world có những vùng gì.

### State explicit

- Plot nào Mature/Watered.
- Processor đang bận.
- Mine đang ở checkpoint nào.
- Location nào có opportunity badge.
- Person announcement nói rõ context và có thể jump tới đó.

### Content progressively disclosed

- Catch card chỉ hiện khi condition/day phù hợp.
- Mine reward sâu hơn chưa cần lộ exact.
- Project requirement đầy đủ chỉ hiện khi source/reward có nghĩa.
- Collection/Person detail mở theo interaction.

World geometry có thể explicit mà objective/content vẫn reveal dần. “Tường minh” không bắt buộc mọi hidden reward và mọi card tương lai trải sẵn trên map.

## 6. Semantic granularity của world surface

Nếu đặt mọi item, Person, crop state, opportunity và Project trực tiếp trên root surface, world sẽ tăng không giới hạn. Root nên explicit ở cấp semantic node:

Luôn hoặc thường trực trên surface:

- Landmark/area: Home, Farm, Town, River, Mine, Sea.
- Building: Coop, Mushroom House, Processor.
- Active farm plot nếu số lượng nhỏ.
- Daily Person marker/context.
- Current opportunity quan trọng tại location.

Không cần trải trực tiếp trên root:

- Mọi item trong storage; chúng ở sticky hand/tray/stack.
- Toàn bộ collection.
- Mọi Mine vein ở mọi depth.
- Mọi historical Person.
- Toàn bộ future objective.

Mine/Fishing child state có thể xuất hiện inline cạnh landmark khi active, hoặc được inspect thành detail layer. Điều này vẫn giữ một world surface duy nhất nếu detail là overlay, không phải một board thay thế.

## 7. Paper layout — world spine và regions

Một surface vertical-serpentine fixture:

    [Season / Weather / Person strip]          sticky

            [Mountain]
          [Mine entrance]
               |
        [Town]---[Grove branch]
           \       /
            [River bend]
        [Home]---[Farm cluster]
                   [2 × 3 plot grid]
                       |
                 [Coop / Processor]
                       |
                  [Lower river]
                       |
               [Beach]---[Sea spots]

    [Selected source / Hand / Person tray]     sticky

Đây là topology fixture, không phải geography/content đã chốt.

### Anchors

- Chạm Person announcement: scroll/focus tới context hôm nay.
- Chạm Weather-related opportunity badge: jump tới location.
- Mini anchor rail: Home, Town, Mountain, Coast.
- Back-to-last-action: trở về cluster vừa tương tác.

Nếu không có anchors, một world 7–10 viewport biến “tường minh” thành search-by-scrolling.

## 8. Farm footprint

AP tests cho thấy:

- Hai crop nhẹ.
- Bốn crop bắt đầu tạo pressure/cliff trước relief.
- Sáu crop cần maintenance relief và có burst issue.

Layout fixture tương ứng:

| Stage | Plot hiện | World footprint |
| --- | ---: | --- |
| Start | 2 active + 4 Overgrown/locked | Grid 2 × 3 đã thấy capacity tương lai |
| Early expansion | 4 active | Vẫn cùng cluster |
| Sau relief | 6 active | Lấp core cluster |
| Beyond core | Chưa chốt | Thêm Field cluster/module, không kéo dài vô hạn từng plot |

Sáu plot ở đây là bridge giữa AP evidence và layout, không phải farm max. Nếu farm dài hạn có hàng chục crop, root surface cần một Field tile đại diện semantic unit hoặc zoom level khác; không thể giữ mỗi crop là một root tile mãi mãi.

### Plot tile

- Art/state vuông: Overgrown, Tilled, Growing, Mature.
- Watered state bằng art/state ring, không cần paragraph.
- Tap/hold mở vertical detail.
- Khi chọn Tool, valid plot tiles highlight và preview số target/AP.

## 9. Mine footprint

Không trải mọi depth thành hàng trăm square.

Fixture:

- Mine Entrance là landmark root.
- Một branch dọc ngắn biểu diễn checkpoint đã mở: Depth 3, Depth 6, current frontier.
- Current frontier tile mở Safe/Veiled Routes.
- Checkpoint cũ collapse thành compact marker nhưng vẫn thấy topology/progress.

Mine vẫn thuộc cùng surface, nhưng world chỉ hiển thị persistent semantic states. Repeated Descend actions không cần tạo thêm một permanent tile mỗi lần.

Nếu người dùng muốn mọi depth thật sự visible, map sẽ bị Mine chiếm ưu thế và làm Coast/Town rất xa về scroll distance. Đây là điểm phải paper-layout trước khi chọn.

## 10. River và Sea footprint

### River

- River là background ribbon/path xuyên qua surface.
- Fishing spot square nằm tại bend/bridge/bank.
- Daily Catch badge gắn trên spot.
- Nhiều spot tạo lựa chọn location mà không cần nhân vật đi bộ.

### Sea

- Sea là một region/terminal landmark rộng hơn ở cuối hoặc side branch.
- Chỉ interactive nodes là square: Pier, Shore, Deep-water Spot, Processor/Market nếu có.
- Không biến toàn bộ water area thành hex/tile nếu adjacency không có rule.

Spatial placement tạo mental map; AP/travel cost vẫn không được suy từ khoảng cách nếu chưa có rule.

## 11. Long-distance interaction test

### Vấn đề

Source trong hand/sticky tray và target ở world có thể cách nhiều viewport. Giữ ngón kéo card trong lúc auto-scroll là chậm, dễ hủy và xung đột với pan.

### Bốn input model

| Model | Cách dùng | Kết quả |
| --- | --- | --- |
| Edge auto-scroll drag | Kéo source tới mép để scroll | Giữ cảm giác drag nhưng mệt trên world dài |
| Tap source → scroll → tap target | Selection persist qua scroll | Dễ, accessible; ít giống Stacklands hơn |
| Carry slot | Kéo source vào sticky slot, scroll, kéo ra target | Giữ physical metaphor và không cần long drag |
| Context action | Tap target rồi chọn source hợp lệ | Nhanh nhưng đảo ngữ pháp source → target |

### Giả thuyết hybrid

- Cùng viewport/cluster: direct drag source → target.
- Khác viewport: chọn hoặc kéo source vào sticky carried slot; selection persist khi scroll; thả/tap target sau.
- Preview vẫn hiện verb, AP, item consume và scope trước commit.
- Escape/tap cancel trả source về trạng thái cũ.

Main Person/Tool có thể nằm trong sticky action tray, nên farming trên map không yêu cầu kéo Person từ Home qua nhiều màn hình.

## 12. Text-on-inspect test

### Art-only square

Mạnh khi:

- Crop state, Tool, landmark quen thuộc.
- Art set có silhouette/colour/state rõ.
- Tile có position ổn định.

Yếu khi:

- Person mới hoặc item cùng hình dạng.
- Project/ability có rule không thể biểu đạt bằng art.
- Người chơi cần scan nhiều card trong hand.
- Accessibility/low vision/localization cần name.

### Baseline thử

- World tile: không description; name hiện khi focus/tap hoặc ở zoom gần.
- Hand tile: art + stack count; selected/focused tile hiện name.
- Inspect: full name + description + rule.
- Target preview: verb + cost + result.
- Screen-reader label luôn có name/state dù text không hiện.

Không chốt hoàn toàn “zero text everywhere”. Bài test cần đo recognition error, không chỉ thẩm mỹ.

## 13. Card count stress

Fixture root nodes:

| Region | Semantic nodes thử |
| --- | ---: |
| Home/Farm | Home, 6 plot, Well/Hedgerow, Processor = 9–10 |
| Town/Person contexts | 3–5 landmark/marker |
| Grove/River | 4–6 |
| Mountain/Mine | 3–5 compact nodes |
| Coast/Sea | 3–5 |
| Tổng | Khoảng 22–31 |

Ở bốn tile ngang, cộng path/spacing, world có thể dài 7–10 portrait viewport. Đây là mức vẫn có thể dùng anchors, nhưng chưa tính Year 1 building/Person growth.

Kết luận: continuous surface giải quyết “đống card trong một viewport” bằng spatial distribution, nhưng chuyển vấn đề thành navigation distance. Anchors, semantic compression và sticky action tray không phải polish; chúng là phần của core interaction.

## 14. Kết luận mới

### 14.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Ý tưởng continuous world surface là một lối thoát thật cho table.** Nó cho card vị trí ổn định và biến scroll thành navigation world thay vì pagination menu.
2. **Square world tile không nhất thiết phủ định card dọc.** Square là compact representation; vertical card/detail sheet vẫn chứa name/description/rule.
3. **Vertical-serpentine là ứng viên mạnh nhất cho mobile portrait.** Nó có topology nhưng tránh free-pan vô hạn.
4. **Hex chưa có justification cơ học.** Faeria dùng space cho movement/range; game này hiện không có các luật đó.
5. **Whole-world explicit cần semantic compression.** Landmark và persistent state hiện trên root; repeated/internal cards không thể đều thành permanent root node.
6. **Long-distance drag là blocker interaction nếu không có sticky carried-source hoặc persistent selection.**
7. **Farm core 2 × 3 là fixture layout hợp với AP evidence, không phải cap.**
8. **Progressive reveal vẫn tương thích.** Topology/state explicit; exact content vẫn reveal theo condition.

### 14.2. Giả thuyết mạnh nhất để mang sang bước sau

- Dùng vertical-serpentine bounded-width world.
- Dùng square art-first tile trên world.
- Giữ vertical full card/detail sheet khi inspect.
- Dùng sticky HUD + hand/action tray + carried-source.
- Dùng anchors/jump-to cho region và Person announcement.
- Không dùng hex trừ khi adjacency/range trở thành mechanic thật.
- Root surface chỉ chứa semantic persistent nodes.

Tất cả vẫn là giả thuyết cần paper-layout, chưa phải quyết định đã chốt.

## 15. Fixture chưa được phép hóa thành luật

- Viewport 390 × 844, tile 72–80 px, bốn tile ngang.
- World dài 7–10 viewport.
- Farm core sáu plot 2 × 3.
- Region order Home–Town–Mountain–Coast.
- Sticky tray height và anchor count.
- Square hand representation.
- Carry-slot interaction.
- Mine checkpoint compression.
- Zero/default text behavior.

## 16. Bước tiếp theo

Chạy ba paper-layout cụ thể trên cùng world surface:

1. Normal Sunny day: Water, Person announcement, Project và River Catch.
2. Rain opportunity day: Grove/Mine/Fishing cùng có badge, kiểm tra scan và jump.
3. Harvest burst: nhiều plot Mature, Produce vào hand, Processor/Person/Sell targets ở xa.

Mỗi layout phải đo:

- số world tile cùng thấy;
- số scroll/jump để hoàn thành plan;
- source/target có cùng viewport hay cần carried-source;
- card nào cần text để tránh nhầm;
- farm/mine/river có đọc như geography hay như menu kéo dài;
- locked/future topology có spoil hoặc clutter không.

Ba layout đã được chạy trong [CONTINUOUS-WORLD-PAPER-LAYOUT-02.md](CONTINUOUS-WORLD-PAPER-LAYOUT-02.md). Kết quả tạm: continuous surface pass ở mức paper layout khi có semantic compression, sticky carried source, region anchors và opportunity overview; thiếu một trong các lớp này thì navigation hoặc planning trở thành blocker.
