# Continuous world Year 1 mapping 03 — graph lên surface và stress footprint

Ngày chạy: 2026-09-21.

Mục đích: nối continuous world surface với Year 1 dependency graph, đồng thời thử footprint Farm ở 6/12/24 plot và hai vị trí mở ngày. Đây là paper-design synthesis, không phải content spec hoặc quyết định triển khai.

## 1. Trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Thế giới được diễn đạt bằng card và có persistent world state.
- Objective, completion và ending là ba khái niệm khác nhau.
- Year 1 là content scope; save có thể tiếp tục nhiều năm.
- Progression ưu tiên mạng micro-objective reveal dần.
- Person được announce theo ngày; Person đã thu nhận có thể dùng ability khi đủ Heart/context.

### 1.2. Hướng đang được tiếp tục kiểm chứng

- Một continuous world surface có topology tường minh.
- Square art-first world tile và vertical inspect card.
- Vertical-serpentine bounded-width với sticky tray và anchors.

### 1.3. Giả thuyết

- Dependency graph không nên ánh xạ 1:1 thành world node; nhiều graph node là state transition, HUD information hoặc overlay.
- Root world chỉ giữ landmark, persistent capacity/state và current context marker.
- Farm vượt sáu active plot cần semantic cluster để không chiếm toàn bộ world.

### 1.4. Fixture

- Dùng node ID D0–H1 của `YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V0.md`.
- So ba mức Farm: 6, 12, 24 active plot.
- So hai opening topology: Home-middle và Home-at-top.
- Các lượng tile/viewports bên dưới chỉ là ước lượng bố cục giấy.

## 2. Năm lớp presentation

| Lớp | Chức năng | Ví dụ |
| --- | --- | --- |
| HUD/day strip | Thông tin đổi theo ngày, không có geography riêng | Season, Weather, Person announcement |
| Root world | Topology và persistent semantic state | Home, Town, Mine Entrance, Farm cluster, River spot |
| Inline context | Node tạm gắn với landmark đang active | Person hôm nay ở Town, Catch badge, current Mine frontier |
| Sticky tray | Source/action có thể mang xuyên camera | Tool, Person ability, item stack, selected source |
| Inspect/overlay | Rule dài, collection, history, comparison | Project requirement, collection set, Mine depth history |

Nguyên tắc: “cả thế giới tường minh” yêu cầu Root world rõ về nơi chốn và state quan trọng, không yêu cầu mọi graph node trở thành một square vĩnh viễn.

## 3. Ánh xạ dependency graph lên surface

| Graph node | Presentation chính | Có root tile riêng? | Lý do |
| --- | --- | --- | --- |
| D0 New Day | HUD/day strip | Không | Season/Weather/Person là ngày-state, không phải địa điểm |
| F0 Home/Farm context | Root world landmark/cluster | Có | Điểm neo thường trực |
| R0 Deterministic source | Root node trong region | Có | Nguồn nền cần tìm lại và lập kế hoạch |
| F1 Clear | State đổi trên cùng plot | Không thêm tile | Overgrown → Empty là một entity đổi mặt |
| F2 Till | State đổi trên cùng plot | Không thêm tile | Không làm world phình sau mỗi verb |
| F3 Plant | Plot + item từ tray | Không thêm root tile ngoài plot | Seed bị tiêu/chuyển vào plot state |
| F4 Care cycle | Plot state + Weather HUD | Không | Transition qua Water/Sleep |
| W0 Relief preview | Badge trên Project/build site + inspect | Chỉ khi có vị trí vật lý | Preview không phải landmark mới nếu upgrade nằm ở Tool |
| F5 First Harvest | Mature state trên plot | Không thêm tile | Produce đi vào stack/tray, không rơi thành root clutter |
| J0 Produce junction | Target highlight + inspect/overview | Không | Đây là choice state, không phải nơi chốn |
| W1 Maintenance relief | Tool/building/world state | Có thể | Có tile nếu là Well/Sprinkler building; không nếu Tool scope đổi |
| P1 Thu nhận Person | Current Person marker + People overlay | Không giữ mọi Person trên root | World chỉ hiện Person theo context/ngày |
| P2 Person ability | Sticky tray/source | Không | Ability theo người chơi xuyên location |
| C0 First-item collection | Collection overlay + badge | Không | Collection không phải geography |
| C1 Diversity reward | Overlay reward → item/state | Không tự động | Chỉ tạo root node nếu reward là building/area thật |
| E0 Expansion access | Overgrown plot/Field silhouette | Có capacity state | Thấy khả năng mở rộng nhưng không thành quest tile |
| F6 Workload rise | Tổng hợp state của active plot/AP | Không | Hệ quả nổi lên, không phải objective card |
| W2 Burst relief | Tool/Person/building effect | Có thể | Presentation theo nguồn relief thật |
| R1 Resource area | Root landmark/spot | Có | Là geography có thể trở lại |
| X1 Craft/build | Build site → building | Có khi persistent | Một entity đổi state qua Project |
| X2 Area gateway | Locked silhouette → landmark | Có | Topology visible, exact content reveal sau |
| X3 Processing | Processor building + item tray | Có | Persistent target dùng nhiều ngày |
| H1 Multiple horizons | Không presentation riêng | Không | Đây là trạng thái graph, không phải card |

### Kết luận mapping

Trong 24 graph node/nhãn trên, chỉ khoảng 6–10 loại cần một root entity thường trực. Phần còn lại dùng state change, HUD, inline marker, tray hoặc overlay. Đây là semantic compression theo meaning, không phải giấu world trong menu.

## 4. Root density qua reveal horizon

Ước lượng sau chỉ dùng để phát hiện bùng nổ mật độ.

| Horizon | Root semantic nodes visible | Inline/current markers | Nếu ánh xạ graph 1:1 |
| --- | ---: | ---: | ---: |
| A — orientation | 10–14 | 1–3 | 15–20 |
| B — first commitment | 12–17 | 2–4 | 22–30 |
| C — first output | 14–20 | 3–5 | 30–42 |
| D — first branches | 18–26 | 3–6 | 42–60 |
| E — multiple lives | 24–36 | 4–8 | 60–90+ |

Các node ở các region khác nhau nên không cùng nằm trong một viewport. Tuy vậy, nếu semantic node vượt khoảng giữa ba mươi ở fixture này, anchor/overview và region compression phải được kiểm tra lại; đây không phải hard cap.

## 5. Farm footprint stress — 6, 12 và 24 plot

### 5.1. Sáu plot

Fixture: một core 2 × 3.

- Mỗi plot vẫn là world tile/state riêng.
- Home, Processor và Well bao quanh thành một Farm cluster.
- Harvest/Water scope có thể highlight cả sáu mà không đổi zoom.
- Root cost: 6 plot + 2–4 farm landmarks.

**Kết quả:** pass ở representation từng plot.

### 5.2. Mười hai plot

Ba model giấy:

| Model | Footprint | Điểm mạnh | Vấn đề |
| --- | --- | --- | --- |
| Một grid 3 × 4 | 12 tile liên tục | Mọi state trực tiếp | Farm chiếm phần lớn 1–2 viewport; landmark bị đẩy xa |
| Hai Field cluster, mỗi cluster 2 × 3 | 2 cluster + 12 plot khi mở | Giữ phase/identity của từng field | Cần expand/inspect cluster; không còn mọi plot cùng lúc trên root |
| Một Farm node + counter/state mosaic | 1 node | Rất gọn | Mất spatial crop reading và target trực tiếp |

**Giả thuyết mạnh nhất:** hai Field cluster. Root hiển thị mỗi cluster bằng một tile/mosaic có state summary; chạm mở inline 2 × 3 ngay tại vị trí hoặc detail layer. Cluster đang focused có individual plot targets; cluster kia vẫn hiện summary.

### 5.3. Hai mươi bốn plot

Nếu giữ 24 individual tile trên root:

- Farm một mình dùng 4 core-grid tương đương.
- Mature burst tạo tới 24 target highlight và output source nếu không stack.
- Town/Mine/Sea bị đẩy thêm nhiều viewport chỉ vì capacity farming.
- Người chơi theo route social/resource vẫn phải đi qua một vùng Farm khổng lồ.

Ba model giấy:

| Model | Root entities | Inspect depth | Đánh giá |
| --- | ---: | ---: | --- |
| 24 plot trực tiếp | 24+ | 0 | Fail density |
| 4 Field cluster × 6 | 4 summaries; 6 plot khi focus | 1 | Pass giả thuyết |
| 2 large Field × 12 | 2 summaries; 12 plot khi focus | 1 | Vẫn khá dày khi mở |

**Kết quả:** ở 24 plot, semantic Field cluster là bắt buộc nếu farm còn mở rộng theo cách này. Mỗi cluster có thể giữ crop cohort/soil identity mà không trải mọi plot trên root. Số 24 chỉ là stress fixture, không xác nhận game cần 24 plot.

### 5.4. Quy tắc representation đề nghị thử

- Tới 6 active plot: individual plot trên root.
- Trên 6: root chuyển thành nhiều Field cluster; chỉ cluster focused mở individual plots.
- Bulk Water/Harvest preview hiển thị scope trong cluster; cross-cluster action phải cho biết tổng target/AP trước commit.
- Output luôn stack vào tray/storage, không tạo ground pile root mặc định.

Ngưỡng sáu là fixture xuất phát từ paper layout/AP hiện tại; playtest có thể đẩy ngưỡng lên hoặc xuống.

## 6. Home-middle so với Home-at-top

### 6.1. Home-middle/open-at-Home

```text
Mountain/Mine
Town/Grove/Upper River
[Home/Farm — opening camera]
Lower River/Crossroad
Coast/Sea
```

- Farm là hub tự nhiên cho daily loop.
- World có geography hai hướng.
- Return từ mọi nơi dùng Home anchor.
- Rủi ro: người chơi phải hiểu có world ở cả phía trên lẫn dưới; thanh scroll một mình không truyền đạt đủ.

### 6.2. Home-at-top

```text
[Home/Farm — opening camera]
Town/Grove/Upper River
Mountain/Mine branch
Lower River/Crossroad
Coast/Sea
```

- Một direction “vuốt xuống tới hết thế giới” rất dễ học.
- Progression/reveal có thể đi cùng chiều scroll.
- Rủi ro: map dễ đọc như một danh sách unlock; quay lại Farm sau mỗi excursion phụ thuộc Home anchor; Mountain/River order có thể phục vụ UI hơn geography.

### 6.3. Route comparison trên giấy

| Route | Home-middle manual | Home-at-top manual | Cả hai khi có anchors |
| --- | ---: | ---: | ---: |
| Sunny: Farm → Town/River → Farm | 3–4 viewport | 3–5 viewport | 2–3 jump |
| Rain: so Mine/Grove/River, chọn hai | 5–7 viewport | 5–8 viewport | 2–3 jump nếu overview đủ |
| Harvest: Farm → Town → Farm | 2–4 viewport | 2–4 viewport | 2 jump |

Khác biệt paper-count nhỏ hơn khác biệt mental model. Không có người chơi mới tham gia nên test này **không đo được orientation error**. Kết luận chỉ là:

- Home-at-top thắng về one-direction discovery.
- Home-middle thắng về hub/geography và giữ Farm ở trung tâm đời sống.
- Anchors làm số thao tác gần nhau; lựa chọn cuối phải dựa trên recall/orientation test, không dựa trên scroll count giả.

## 7. Reveal graph trên continuous world

### Horizon A

- Show silhouette/name của region lớn đủ để world topology tường minh.
- Actionable: Home/Farm, R0 và Person context hôm nay.
- Locked Mine/Sea không show exact reward/recipe.

### Horizon B

- W0 xuất hiện như Project badge gắn vào Tool/build site liên quan.
- E0 đã thấy bằng Overgrown plot/Field edge, không cần Objective tile.

### Horizon C

- First Harvest đưa Produce vào tray.
- J0 được trình bày bằng valid targets sáng ở Farm/Town/collection shortcut; không spawn một junction card.

### Horizon D

- X2 landmark chuyển silhouette → active node.
- R1/Person/Project chỉ thêm marker ở context khi active; history chuyển vào overlay.

### Horizon E

- Region count có thể tăng, nhưng node lặp được gom thành Field, Mine checkpoint, Fishing spot và building cluster.
- H1 không có “multi-horizon card”; overview cho biết các branch đang active.

## 8. Invariant mới cho package Year 1

1. Không graph transition nào tự động tạo root node mới.
2. Item output mặc định đi vào stack/tray/storage, trừ khi ground placement là mechanic có chủ ý.
3. Một landmark locked có thể explicit topology nhưng không lộ exact content trước reveal horizon.
4. Mỗi root node phải trả lời được “đây là nơi/state thường trực nào?”; nếu chỉ là instruction/counter, dùng lớp khác.
5. Person current context có thể hiện trên world; toàn bộ People collection không thường trú trên root.
6. Farm expansion, Mine depth và collection growth phải có compression rule trước khi content Year 1 tăng.
7. Overview/anchor chỉ di chuyển camera và cung cấp decision summary; nó không tự tạo travel/AP rule.
8. Art-first tile được phép có short label khi recognition/rule planning cần; không dùng zero-text như một luật thẩm mỹ tuyệt đối.

Các invariant này là tiêu chí kiểm chứng đề nghị, chưa phải quyết định người dùng đã chốt.

## 9. Kết luận cập nhật

### Kết quả paper mapping

- Continuous world tương thích với graph Year 1 nếu presentation được phân lớp; ánh xạ graph 1:1 thành card trên root sẽ thất bại về mật độ.
- 6 plot có thể trực tiếp; 12 plot bắt đầu cần Field cluster; 24 plot làm cluster trở thành điều kiện bắt buộc trong fixture.
- Home-middle và Home-at-top có scroll count tương tự khi anchors tồn tại; khác biệt thật nằm ở mental model geography vs progression feed.
- “Whole world explicit” nên được định nghĩa là explicit topology + persistent state + active context, không phải explicit mọi instance/history/rule.

### Hướng kế tiếp

- Thử recognition deck để xác định tile nào cần label.
- Dùng mapping table này để audit toàn bộ Year 1 graph: root/HUD/inline/tray/overlay.
- Quay lại Heart cadence, Mine checkpoint và Processing sensitivity với presentation location đã rõ hơn.
- Chưa chốt topology cuối trước một orientation test có người chơi mới.

