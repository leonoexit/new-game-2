# Continuous world paper layout 02 — ba ngày sử dụng thật

Ngày chạy: 2026-09-21.

Mục đích: kiểm tra xem continuous world surface có thật sự thay thế table/group navigation được không khi người chơi lập và thực hiện một ngày chơi, thay vì chỉ nhìn một sơ đồ đẹp. Đây là paper simulation; không cho phép code/prototype và không biến số đo fixture thành luật.

## 1. Trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Card là ngôn ngữ chính của thế giới và interaction có cảm giác cầm nguồn, đưa tới đích, preview rồi commit.
- Mobile portrait là platform chính đang xét.
- Hình card cần tự giải thích; name/description vẫn là nội dung canonical của card.
- Save có thể tiếp tục qua nhiều năm; Year 1 chỉ là content scope.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục nghiên cứu

- Đưa toàn bộ geography vào một surface cuộn liên tục.
- Cho phép đường world ngoằn ngoèo/ngã rẽ thay vì chỉ là một cột thẳng.
- Thử square art-first representation trên world và chỉ mở text rõ khi inspect.
- Tìm footprint thích hợp cho Farm, Mine, River và Sea trên surface đó.

Đây là hướng nghiên cứu trực tiếp từ đề xuất của người dùng; chưa phải quyết định cuối về topology, tile shape hay text policy.

### 1.3. Giả thuyết đang thử

- Vertical-serpentine, bounded-width tốt hơn strict feed và free 2D pan cho portrait.
- Square world tile + vertical detail card là hai representation của cùng entity.
- Sticky source/tray và region anchors đủ để interaction xuyên nhiều viewport không trở thành long drag.
- Root surface chỉ cần explicit topology và persistent state; exact opportunity/content có thể reveal theo condition.

### 1.4. Fixture dùng riêng cho paper layout

- Viewport 390 × 844; phần world hữu dụng sau HUD/tray tương đương khoảng 650 px dọc.
- World gồm năm band: Mountain, Town/Grove, Home/Farm, Lower River/Crossroad, Coast/Sea.
- Mở ngày tại Home/Farm dù world còn nội dung phía trên và phía dưới.
- Bốn anchor thử: Mountain, Town, Home, Coast; chạm announcement/badge có thể focus trực tiếp context.
- Core Farm gồm sáu plot 2 × 3; Start chỉ có hai active.
- Jump/anchor không tốn AP trong fixture vì chưa có luật travel.
- Một jump nghĩa là một lệnh UI đổi focus; scroll là cuộn bằng tay qua một khoảng gần một viewport.

## 2. World fixture và hai cách đếm navigation

World spine thử:

    phía trên Home
      Mountain / Mine
            |
       Town — Grove
            |
        Upper River
            |
    [HOME / FARM]       điểm mở ngày
            |
       Lower River
            |
       Crossroad
            |
       Coast / Sea
    phía dưới Home

Hai mode được đếm song song:

1. **Manual-only:** người chơi chỉ cuộn để tìm context.
2. **Anchored:** người chơi chạm announcement, opportunity badge hoặc region anchor; surface cuộn/focus tới đúng node.

Anchor không teleport nhân vật trong fiction. Nó chỉ di chuyển camera. Nếu về sau distance có gameplay cost, cost phải là luật riêng và không được suy ra từ animation cuộn.

## 3. Layout A — normal Sunny day

### 3.1. Day intent fixture

Người chơi muốn:

1. Water hai plot ở Farm.
2. Nói chuyện/tặng một item cho Person được announce ở Town.
3. Đóng góp một source cho Project ở Town.
4. Dùng River Catch opportunity ở Upper River.

AP, item và reward cụ thể lấy từ các simulation trước chỉ để dựng route; test này đo UI/navigation, không cân lại economy.

### 3.2. Trạng thái đầu ngày nhìn thấy ở Home

- Farm core: hai Growing/Dry plot, bốn Overgrown/locked plot.
- Sticky tray: Tool, Seed/Produce stack, Main Person/action source, hand shortcut.
- HUD: Sunny; Person announcement có Town context; River badge hiện trên mini region rail.
- Town/Upper River không cùng viewport với toàn bộ Farm, nhưng Town và River cùng một region band.

### 3.3. Route mô phỏng

| Bước | Camera/context | Interaction | Navigation |
| --- | --- | --- | --- |
| 1 | Home/Farm | Chọn Tool trong tray; hai valid plot highlight; preview Water ×2 | Không |
| 2 | Home/Farm | Commit Water; world art đổi Dry → Watered | Không |
| 3 | Town | Chạm Person announcement; chọn/tặng item từ sticky hand | 1 jump |
| 4 | Town | Project node ở cùng cluster; kéo/tap source → Project | Không |
| 5 | Upper River | Chạm River badge hoặc cuộn ngắn trong Town band; thực hiện Catch | 0–1 jump hoặc <1 viewport scroll |
| 6 | Home | Chạm Home anchor nếu muốn tiếp tục farming | 1 jump |

### 3.4. Số đo fixture

| Chỉ số | Manual-only | Anchored |
| --- | ---: | ---: |
| Full/near-full viewport scroll | 3–4 | 0–1 |
| Camera jump | 0 | 2–3 |
| Long-distance source drag | 2 nếu tray không sticky | 0 |
| Context phải inspect để đọc rule | Project, River Catch | Project, River Catch |
| Tile cần nhận diện ngay bằng art | Tool, plot state, Town, River | Như nhau |

### 3.5. Kết quả

- Surface không cản route này nếu Town và River là một semantic cluster và hand/source luôn ở sticky tray.
- Nếu Project requirement chỉ lộ trong full card sau khi tới Town, người chơi có thể mang sai source. Vì vậy announcement/Project preview phải cho biết requirement tối thiểu trước jump hoặc cho phép inspect từ xa.
- Person announcement cần là jump target; nếu chỉ là text thông báo, continuous surface buộc người chơi search thủ công.
- River background ribbon tạo geography, nhưng Catch phải là node/badge có hit target rõ; chạm vào “nước” chung chung không đủ rõ.

## 4. Layout B — Rain opportunity day

### 4.1. Day intent fixture

Rain làm ba opportunity cùng đáng chú ý:

- Grove có Collect/Search opportunity.
- Mine có route/state phù hợp Weather.
- Upper River có Catch opportunity.

Người chơi chỉ đủ AP để chọn hai; test cần cho phép so sánh trước khi di chuyển camera nhiều lần.

### 4.2. Scan pass

Root world dùng ba mức tín hiệu:

1. HUD/weather strip nói “Rain modifies 3 locations”.
2. Region rail đặt badge tại Mountain, Town/Grove và River.
3. Node art/state tại context thật cho biết loại opportunity; tap/inspect mới lộ exact card/rule.

Không hiện ba full reward card trên HUD. Nếu HUD tiết lộ toàn bộ, world chỉ còn là menu minh họa; nếu HUD không nói gì, người chơi phải scroll dò.

### 4.3. Route mô phỏng

| Bước | Camera/context | Interaction | Navigation |
| --- | --- | --- | --- |
| 1 | Home/HUD | Nhìn ba badge; focus từng badge để đọc một dòng category/cost | Không |
| 2 | Mine | Jump tới Mine; inspect current frontier và commit route nếu chọn | 1 jump |
| 3 | Grove hoặc River | Jump tới lựa chọn thứ hai; commit opportunity | 1 jump |
| 4 | Home hoặc Person context | Jump tới context cuối ngày nếu còn AP | 1 jump tùy route |

### 4.4. Số đo fixture

| Chỉ số | Manual-only | Anchored |
| --- | ---: | ---: |
| Full/near-full viewport scroll để so cả ba | 5–7 | 0 |
| Camera jump để inspect cả ba rồi chọn hai | 0 | 3–5 |
| Camera jump nếu HUD cho comparison preview đủ | 0 | 2–3 |
| Badge cùng lúc | 3 | 3 |
| Exact content hiện trước lựa chọn | Không | Không; chỉ category/cost summary |

### 4.5. Kết quả

- Continuous world cần một overview layer nhỏ; chỉ “mọi thứ nằm trên map” không tự làm opportunity dễ so sánh.
- Badge phải truyền ít nhất category, urgency và cost class khi focus. Chỉ một chấm màu không đủ cho người chơi lập kế hoạch.
- Jump tới từng nơi chỉ để biết có đáng đi không tạo camera ping-pong. Một dòng preview ở HUD/rail giải quyết phần planning; full inspect vẫn nằm ở node.
- Rain day làm rõ khác biệt giữa **topology explicit** và **decision information visible**. World có thể tường minh về vị trí nhưng vẫn mù về tradeoff.

## 5. Layout C — Harvest burst

### 5.1. Day intent fixture

- Bốn đến sáu plot đang Mature.
- Produce vào hand theo stack.
- Processor ở Farm; Person và Sell target ở Town.
- Người chơi có thể Process một phần, tặng một phần và bán phần còn lại.

### 5.2. Route mô phỏng

| Bước | Camera/context | Interaction | Navigation |
| --- | --- | --- | --- |
| 1 | Farm | Chọn Harvest; multi-target/scope preview; commit Mature plots | Không |
| 2 | Farm | Produce cộng vào stack ở sticky hand; chọn số lượng cho Processor | Không |
| 3 | Town | Chọn Produce stack vào Carry; jump Town; target Person hoặc Market highlight | 1 jump |
| 4 | Town | Preview quantity + result cho Gift/Sell; commit từng giao dịch | Không |
| 5 | Farm | Home anchor để xem Processor/state còn lại | 1 jump |

### 5.3. Số đo fixture

| Chỉ số | Không stack/carry | Stack + carry |
| --- | ---: | ---: |
| Source tile mới sau Harvest 6 plot | Tối đa 6 | 1 stack + count |
| Long drag xuyên viewport | 1–6 | 0 |
| Camera jump | 2 | 2 |
| Commit cần quantity preview | Gift, Sell, Process | Gift, Sell, Process |
| Root world node tăng vĩnh viễn | Có nguy cơ nếu Produce nằm trên ground | 0; inventory ở tray/storage |

### 5.4. Kết quả

- Harvest burst xác nhận inventory không được trải thành world nodes. Nếu item output rơi cạnh plot, surface lại biến thành một đống card.
- Sticky hand phải stack item cùng loại và giữ selection khi camera jump.
- “Carry” không nên là một slot vật lý duy nhất nếu nó buộc người chơi lặp route cho từng item; nó nên là trạng thái selected source/stack với quantity preview.
- Direct drag vẫn hữu ích trong Farm cluster (Produce → Processor), nhưng cross-region nên dùng persistent selection + jump + target.

## 6. Farm, Mine, River và Sea sau ba layout

### Farm

- **Kết quả paper test:** core 2 × 3 đọc được như một cluster và chứa được Start → early relief mà không đổi footprint.
- **Giả thuyết tiếp tục:** sau sáu active plot, mở Field cluster/module thay vì kéo grid dài vô hạn.
- **Chưa chốt:** farm cap, số cluster và việc plot ngoài core có còn là từng tile hay được nén thành field state.

### Mine

- **Kết quả paper test:** Mine Entrance + current checkpoint/frontier đủ cho daily route; mọi depth không cần là root tile.
- **Giả thuyết tiếp tục:** một compact depth strip có 2–3 marker gần frontier, checkpoint cũ collapse.
- **Chưa chốt:** người chơi có cần overview toàn bộ depth history hay chỉ milestone.

### River

- **Kết quả paper test:** background ribbon cho geography; square spot/badge cho action hit target.
- **Giả thuyết tiếp tục:** Upper/Lower River là hai node có condition khác nhau, không phải một water inventory.
- **Chưa chốt:** số fishing spot Year 1 và exact relation giữa Weather, location và Catch.

### Sea

- **Kết quả paper test:** Sea nên là region lớn về art nhưng chỉ có vài semantic nodes: Beach, Pier, Deep-water Spot.
- **Giả thuyết tiếp tục:** Coast là terminal anchor của world spine, còn Deep Sea là future branch/locked silhouette.
- **Chưa chốt:** Coast nằm cuối scroll hay là side branch từ Town/Lower River.

## 7. Text policy sau test

Art-first không đồng nghĩa zero-text.

| Context | Baseline sau paper test |
| --- | --- |
| World ở trạng thái nghỉ | Art/state; landmark label ở lần đầu, focus hoặc accessibility name |
| Opportunity badge | Category + urgency/cost summary khi focus |
| Hand/tray | Art + quantity; selected item hiện name |
| Inspect | Full name, description, rule và current state |
| Target preview | Verb + quantity + AP/item cost + result |
| Future/locked topology | Silhouette + tên vùng nếu không spoil; exact requirement/reward vẫn ẩn |

Card dễ nhầm bằng hình phải được phép giữ short label. Không nên buộc mọi loại entity theo một policy art-only tuyệt đối.

## 8. Start position và directionality

Ba layout mở ngày tại Home ở giữa surface, vì đây là hub của farming/processing. Điều này tạo hai hướng scroll: lên Mountain/Town và xuống River/Coast.

Hai biến thể còn mở:

| Biến thể | Ưu | Rủi ro |
| --- | --- | --- |
| Home ở đầu world; mọi thứ mở dần phía dưới | Mental model “vuốt xuống tới hết thế giới” rất rõ | Geography dễ thành progression list; quay về Home xa |
| Home ở giữa; app mở đúng Home | Map có north/south, Farm là hub tự nhiên | Không còn pure one-direction feed; cần anchor rail rõ |

Kết quả hiện tại chưa đủ để chốt. Với daily loop quay lại Farm thường xuyên, **Home-middle + open-at-Home** là giả thuyết mạnh hơn, nhưng phải test orientation với người chưa biết map.

## 9. Pass/fail đối với continuous surface

### Pass tạm

- Cả ba route hoàn tất mà không cần đổi sang board khác.
- Không cần long-distance drag khi sticky source/selection và anchors tồn tại.
- Farm, Mine, River, Sea đọc được như geography khác nhau thay vì cùng một list card.
- Square tile giữ mật độ; vertical inspect giữ chỗ cho text/rule.
- Persistent world state không tăng theo mọi item output hay mọi Mine step.

### Fail nếu bỏ các điều kiện hỗ trợ

- Không có anchors: Rain day cần 5–7 viewport scroll chỉ để so option.
- Không có sticky tray/carry: source-target xa trở thành thao tác kéo khó dùng.
- Mọi content đều root node: Harvest và Mine làm world dài vô hạn.
- Art-only tuyệt đối: Project, opportunity và item gần giống nhau không đủ thông tin để plan.
- Hex chỉ là shape: người chơi có lý do suy ra adjacency/movement không tồn tại.

## 10. Kết luận cập nhật

### 10.1. Kết quả paper test, chưa phải quyết định cuối

Continuous world surface vượt qua ba use-case ở mức paper layout, nhưng chỉ khi nó là một **spatial index có semantic compression**, không phải nơi trải mọi card instance.

Vertical-serpentine vẫn là ứng viên mạnh nhất. Square world tile và vertical inspect card giải quyết mâu thuẫn hình dáng tốt hơn việc ép một form dùng ở mọi nơi. Anchors, opportunity overview và persistent carried source là core interaction của hướng này, không phải tiện ích thêm sau.

### 10.2. Hướng đề nghị đưa sang vòng kiểm chứng tiếp theo

- Giữ B: vertical-serpentine, bounded width.
- Dùng Home-middle/open-at-Home làm fixture kế tiếp; đối chiếu một bản Home-at-top.
- Farm core 2 × 3; beyond-core dùng Field cluster thử nghiệm.
- Mine chỉ hiện entrance + compact checkpoint/frontier.
- River là geography ribbon + interactive spot; Sea là region + vài semantic node.
- Root explicit topology/state; exact content reveal theo condition.
- Sticky tray + carried stack + anchors + one-line opportunity preview.
- Không dùng hex cho đến khi adjacency/range có luật thật.

### 10.3. Những gì vẫn chưa được phép coi là luật

- Năm region band, thứ tự region, world dài bao nhiêu viewport.
- Farm sáu plot là cap.
- Anchor không tốn AP trong mọi phiên bản tương lai.
- Upper/Lower River là hai location cuối cùng.
- Mine chỉ giữ ba marker.
- Home chắc chắn ở giữa.
- Hand chắc chắn vuông.
- Một dòng opportunity preview là đủ cho mọi loại card.

## 11. Vòng kiểm chứng kế tiếp

1. So Home-middle với Home-at-top bằng cùng ba route; đo orientation error và số return jump.
2. Chạy farm stress tại 6, 12 và 24 active plot để xác định điểm chuyển từ plot tile sang Field cluster.
3. Chạy recognition deck gồm crop states, sáu item gần hình, Person mới, ba Project và ba opportunity để tìm entity nào bắt buộc cần label.
4. Gắn continuous surface vào Year 1 dependency graph: node nào là landmark cố định, node nào chỉ là badge/state, node nào không được lên root.
5. Sau khi topology ổn, quay lại các kiểm chứng đang mở về Heart cadence, Mine checkpoint và Processing sensitivity; không dùng surface layout để che lỗ hổng economy.

Recognition deck đã được audit ở cấp giấy trong [CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md](./CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md). Kết quả tạm là `art-first, text by decision burden`: crop/landmark quen thuộc có thể L0, nhưng item stack, Person, Project và opportunity cần các mức label/preview khác nhau. Recognition rate thật vẫn phải đợi asset và người chơi mới.
