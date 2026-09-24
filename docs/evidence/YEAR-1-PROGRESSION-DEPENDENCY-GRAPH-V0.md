# Year 1 progression dependency graph — v0

Ngày ghi nhận: 2026-09-21.

Trạng thái: dependency model tổng hợp các paper test farming, AP, resource, Project và Person đã chạy. `Year 1` ở đây là horizon nội dung cần thiết kế/cân bằng kỹ, không phải độ dài save, deadline hoàn thành hoặc điều kiện reset. Graph này là giả thuyết để kiểm tra reveal và route coverage; không phải content list đã chốt.

Bản tổng hợp hiện hành nằm ở [Year 1 paper-design package v0](YEAR-1-PAPER-DESIGN-PACKAGE-V0.md). File này vẫn là graph chi tiết và evidence nguồn, không phải spec độc lập mới hơn package.

Superseding V0 note 2026-09-23: the current graph is [v1](../current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md), read with [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md). This older graph's Grove Search/Upper-Grove, Person ability, Gold-fee and crop-calendar edges are historical fixtures where they conflict with tests 30–36. Keep the historical route evidence; do not use its reward or timing as an active V0 contract.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Save có thể tiếp tục qua nhiều năm; Year 1 không bắt buộc kết thúc save.
- Objective, completion và ending là ba khái niệm độc lập.
- Objective nghiêng về mạng micro-objective mở dần area, card và verb.
- Chưa chốt có objective trung tâm tương đương Community Center hay không.
- Sưu tầm Person là một hướng chơi tùy chọn.
- Toàn bộ Person có thể gặp trong ngày được công bố khi bắt đầu ngày; xem/bỏ qua không tốn AP.
- Person đã thu nhận dùng ability bất kỳ ngày nào nếu đủ Heart và context; lịch chỉ giới hạn gặp/Gift/hồi Heart.
- Một số card/group có thể là gateway mở area khác.
- Farming card states tự biểu đạt Clear/Till/Plant/Grow/Harvest; không phải node nào cũng cần Objective card.
- Bỏ lỡ thông thường là trì hoãn tới chu kỳ sau, không phá save.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- First harvest cần tạo junction nhiều đích.
- Expansion và maintenance/burst relief phải được thiết kế cùng nhau.
- Automation giải phóng AP để sang subsystem khác.
- Objective/reward được reveal dần theo world state.
- Deterministic source giữ planning cho resource nền; batch area có thể cung cấp opportunity/variety.
- Paper simulation trước code/prototype.

### 1.3. Giả thuyết cần thử

1. Graph có thể cung cấp ba route đầu save — production, social và collection/resource — mà không route nào là tutorial giả rồi buộc nhập lại một đường duy nhất.
2. Chỉ reveal một horizon ngắn nhưng vẫn cho thấy đủ requirement để first-harvest allocation là quyết định có thông tin.
3. Relief có thể ở trong tầm với trước khi expansion tạo workload cliff mà không bắt buộc mua relief.
4. Cross-subsystem gateway có thể mở từ nhiều loại output, tránh mọi lối sống đều phải đi qua farming.

### 1.4. Fixture và placeholder

- ID node, trigger, tên W/E/C và thứ tự layer chỉ dùng cho graph.
- `First harvest`, `first Water cycle`, `hai active crop` là state trigger, không phải ngày cố định.
- Grove/Mine/Cooking/Coop/Mushroom/Fishing là placeholder từ các area/subsystem đang được hình dung; graph không chốt thứ tự hoặc nội dung.
- Chưa có số Gold, item requirement, season length hoặc deadline.

## 2. Nguyên tắc của graph

### World state trước, Objective card sau

- Overgrown Soil tự cho thấy khả năng expansion.
- Crop state tự dạy chăm và Mature.
- Một Project có requirement/reward dài hạn mới cần Project card.
- Collection dùng collection surface, không cần biến mỗi item thành quest.
- Person opportunity dùng announcement đầu ngày, không nằm trong quest journal.

### Reveal actionable horizon

Một node chỉ nên hiện đầy đủ khi người chơi:

1. đã gặp state/item/verb liên quan;
2. có hoặc biết ít nhất một đường tiến tới requirement;
3. hiểu reward sẽ thay đổi lựa chọn nào.

Có thể hint một area/project trước, nhưng không hiển thị recipe bí ẩn gồm resource chưa có nguồn hoặc thuật ngữ chưa được giới thiệu.

### Không đồng nhất unlock với completion

- Unlock thêm verb/area không kết thúc save.
- Hoàn thành collection không bắt buộc hoàn thành Person branch.
- Mở toàn bộ Year 1 content không tạo ending tự động.
- Một ending, nếu sau này có, cần quyết định riêng.

## 3. Graph tổng quát

```text
[D0 New Day: Season + Weather + Person announcement]
                         |
                         v
[F0 Home/Farm context + visible Overgrown Soil]
             /                            \
            v                              v
[R0 Deterministic source]      [F1 Clear → F2 Till → F3 Plant]
            |                              |
            v                         [F4 Water/Sleep]
 [R1 Resource area]                    /          \
            |                         v            v
            v            [W0 Relief preview]    [F5 First Harvest]
 [X2 Area gateway]             |                    |
                               |              [J0 Produce Junction]
                               |             /       |        \
                               |            v        v         v
                               |        [Sell/Gold] [Gift] [Collection C0]
                               |            |        |          |
                               v            |        v          v
                        [W1 Maintenance] <---+    [P1 Person] [C1 Seed/diversity]
                         [relief route]      |        |          |
                               |            |        v          |
                               |            |   [P2 Ability]     |
                               +------.-----+--------+----------+
                                      v
                         [E0 Expansion access / more plot]
                                      |
                               [F6 Workload rises]
                                  /            \
                                 v              v
                       [W2 Burst relief]   [X1/X3 Build/Process]
                                               |
                                               v
                                  [H1 Multiple open horizons]
                                               |
                        continue, collect, optimize, build, or branch again
```

Các cạnh tới E0 không có nghĩa W/P/C đều bắt buộc. Chúng biểu thị nhiều nguồn có thể hỗ trợ expansion hoặc thay đổi quyết định quanh nó.

## 4. Registry node và reveal rule

| ID | State/micro-objective | Reveal trigger giả thuyết | Hoàn thành/tiến triển bằng | Mở gì | Bắt buộc? |
| --- | --- | --- | --- | --- | --- |
| D0 | New Day information | Mỗi ngày | Tự động | Weather + toàn bộ Person/context hôm nay | Hệ thống |
| F0 | Farm context | Bắt đầu save | Mở group/card | Soil, crop, source nền | Context khởi đầu |
| R0 | Deterministic resource source | Bắt đầu save hoặc interact world card | Collect resource đã biết | Planning material hoặc gift | Không |
| F1 | Clear Soil | Thấy Overgrown Soil + Tool hợp lệ | Action state change | Empty Soil | Onboarding nếu chọn farming |
| F2 | Till Soil | Có Empty Soil | Action state change | Tilled Soil | Onboarding farming |
| F3 | Plant | Có Seed + Tilled Soil | Item/action | Growing Crop | Onboarding farming |
| F4 | Care cycle | Có Growing Crop | Water/Weather + Sleep | Growth state | Farming commitment |
| W0 | Relief preview | Đã trải nghiệm manual Water đủ để hiểu cost | Xem Project preview | Biết scope/reward/source requirement | Không |
| F5 | First Harvest | Crop Mature | Harvest | Produce + J0 | Milestone farming |
| J0 | Produce junction | Có Produce đầu tiên | Đưa Produce tới đích | Sell/Gift/C0/giữ | Không phải Objective card |
| W1 | Maintenance relief | W0 + source requirement đọc được | Project/resource | Giảm Water workload | Không |
| P1 | Thu nhận Person | Person được announce + quà hợp lệ | Gift | Person card + Heart | Không |
| P2 | Dùng ability | Có Person + Heart + target | Activated ability | Cách xử lý action/context mới | Không |
| C0 | First-item collection | Có item thuộc set | Submit/record | Tiến collection, thấy reward horizon | Không |
| C1 | Diversity reward | Đủ subset/set | Collection state | Seed/item/verb option | Không |
| E0 | Expansion access | Overgrown Soil hoặc Project liên quan đã thấy | Clear/Project/resource | Thêm capacity world | Không |
| F6 | Workload rise | Nhiều active crop | Hệ quả AP tự nổi lên | Lý do cân nhắc W1/W2 | Không phải objective |
| W2 | Burst relief | Có harvest cohort/peak | Tool/Project/Person effect | Giảm Harvest/Plant peak | Không |
| R1 | Resource area | Interact R0/gateway và ít nhất một demand tồn tại | Search/Collect | Material, gift, collection opportunity | Không |
| X1 | Craft/build branch | Có material + nhu cầu | Project/recipe | Infrastructure hoặc verb | Không |
| X2 | Area gateway branch | Một requirement có nguồn hợp lệ | Project/world state | Mine/Grove/Fishing/etc. | Không |
| X3 | Processing/use branch | Có output và một đích xử lý | Action/building | Giá trị thay thế cho item | Không |
| H1 | Multiple open horizons | Ít nhất hai branch đã mở | Player-selected goals | Self-directed mid/late Year 1 | Không phải ending |

## 5. Reveal sequence theo state, không theo ngày cố định

### Horizon A — orientation

Hiện:

- Season và Weather hôm nay.
- Person announcement hôm nay.
- Farm/context khởi đầu.
- Một số ít state có thể hành động: crop/Soil và một deterministic source.
- Overgrown Soil có thể nhìn thấy như capacity tương lai.

Không hiện:

- Toàn bộ collection set.
- Mọi Project Year 1.
- Mọi area chưa có dependency.
- Ending/completion tracker giả định.

### Horizon B — first commitment

Sau khi người chơi Water/care:

- W0 có thể preview relief vì người chơi đã hiểu maintenance.
- Requirement chỉ hiện đầy đủ nếu source tương ứng đã được giới thiệu hoặc được hint rõ.
- E0 vẫn hiện như khả năng, không thành lời nhắc “hãy mở rộng ngay”.

### Horizon C — first output

Khi có Produce đầu tiên:

- Sell/Gold, Gift và collection/giữ trở thành các đích đọc được.
- Chỉ các đích hiện khả dụng hoặc sắp khả dụng được highlight.
- Collection reward horizon được nói rõ ở mức “mở lựa chọn gì”, không cần lộ toàn bộ set tương lai.

### Horizon D — first branch

Khi người chơi đầu tư W, E, P hoặc C:

- Reveal node tiếp theo thuộc branch đó.
- Không tự reveal mọi sibling branch chỉ vì một node hoàn thành.
- Một cross-system gateway có thể xuất hiện nếu output/resource của branch tạo được ít nhất hai cách dùng.

### Horizon E — multiple lives

Khi có hai hoặc nhiều branch hoạt động:

- Project mới nối ngược subsystem thay vì chỉ tăng số.
- Automation giải phóng AP cho branch khác.
- Person ability thay cách giải action, không làm Person bắt buộc cho recipe.
- Collection mở option, không cấp quyền duy nhất để save tiếp tục.

## 6. Ba route trace qua graph

### Route Production

```text
F1–F5 → Sell → W1 → E0 → F6 → W2/X1
```

- Ưu tiên Gold, relief và plot.
- Mở output sớm.
- Có thể bỏ Person/collection mà save vẫn tiến.
- Sau automation, AP được giải phóng để bước sang area/crafting.

### Route Social/resource

```text
F1–F5 → Gift hoặc resource gift → P1 → P2 → R1/Project khác
```

- Chấp nhận farming chậm hơn để mở action option.
- Person ability giúp nhiều context trong tương lai, không phải party composition.
- Nếu bỏ crop Gift, deterministic/batch gift source cho route khác.
- Không cần hoàn thành collection để dùng Person.

### Route Collection/diversity

```text
F1–F5 → C0 → C1 → Seed/diversity → X3 hoặc seasonal set
```

- Đổi lợi ích tức thời lấy option mới.
- Reward phải thay đổi lựa chọn; chỉ tăng % completion là chưa đủ.
- Missing một seasonal entry phải chờ chu kỳ sau, không khóa các branch khác.

### Điểm tái giao nhau

Ba route có thể gặp lại ở:

- Project dùng nhiều loại item.
- Gold/resource mua hoặc xây gateway.
- Person ability tác động lên Work/Search/processing.
- Output mới tạo Gift/collection/Sell choice khác.

Rejoin là tùy chọn, không phải yêu cầu mọi route cuối cùng phải hoàn thành toàn bộ graph.

## 7. Recovery khi bỏ lỡ

| Opportunity bị bỏ | Recovery giả thuyết | Không được xảy ra |
| --- | --- | --- |
| Person hôm nay | Chờ lần lịch sau; card đã thu nhận vẫn dùng được nếu còn Heart | Mất Person vĩnh viễn |
| Batch resource | Item quay lại trong batch/chu kỳ sau hoặc có deterministic substitute | Save bị khóa vì một draw |
| Seasonal crop | Chờ mùa/năm sau hoặc trade/substitute nếu sau này thiết kế | Fail save ở cuối Year 1 |
| Rain investment window | Đầu tư bằng cách bỏ một việc khác hoặc chờ Weather sau | Rain là cửa sổ duy nhất để thoát workload |
| Collection submission | Nộp bản sau; reward trì hoãn | Mất quyền hoàn thành collection |
| Project deadline tùy chọn | Project quay lại/thay reward hợp lý | Khóa verb nền vĩnh viễn |

Recovery delay cần đủ thật để opportunity có ý nghĩa nhưng không được ngụy trang fail state dài hạn.

## 8. Có cần objective trung tâm không?

Graph v0 không cần objective trung tâm để vận hành:

- W/E/C/P/R đã tạo các horizon phân tán.
- H1 cho phép người chơi tự chọn điểm đủ.
- Các branch có thể mở lẫn nhau mà không cần một hub checklist.

Điều này **không chốt rằng game sẽ không có objective trung tâm**. Nếu thử một hub sau này, nó phải:

- tạo lựa chọn hoặc mở horizon mới;
- chấp nhận nhiều loại contribution;
- không biến mọi subsystem thành nộp item;
- không trở thành ending bắt buộc;
- không làm route Person/collection/fishing/mining thành checklist cưỡng ép.

Cho tới khi hub chứng minh được giá trị ngoài việc gom tiến độ, graph phân tán là baseline ít giả định hơn.

## 9. Dependency checks

Graph v0 phải thỏa các invariant thử sau:

1. Mọi resource bắt buộc cho một unlock nền có deterministic source hoặc substitute đọc được.
2. Không Person cụ thể nào là prerequisite duy nhất để mở area/verb nền.
3. Expansion không xuất hiện nhiều step trước relief đến mức tạo workload trap không có đường thoát.
4. First output có ít nhất hai đích có ý nghĩa; không tự Sell bắt buộc.
5. Collection reward mở option; không chỉ tăng counter.
6. Missing seasonal/Person/batch opportunity không phá save.
7. Mỗi cross-subsystem gateway có ít nhất một đường không qua farming nếu subsystem đó được quảng bá là một lối sống độc lập.
8. Completion một branch không tự động kết thúc save.
9. UI không hiển thị toàn bộ graph; chỉ dependency gần và actionable.
10. Group/gateway không tự quyết định AP scope.

Đây là tiêu chí kiểm tra, chưa phải luật content cụ thể.

Route coverage đã được chạy trong [Year 1 route coverage test 01](YEAR-1-ROUTE-COVERAGE-TEST-01.md). Test buộc sửa R0/R1 thành entry độc lập khỏi farming và phát hiện nguy cơ mọi unlock bị Project hóa.

Graph cũng đã được ánh xạ lên continuous world surface trong [Continuous world Year 1 mapping 03](CONTINUOUS-WORLD-YEAR1-MAPPING-03.md). Kết quả tạm: graph node không được ánh xạ 1:1 thành root card; HUD, inline marker, sticky tray, inspect/overlay và state transition phải chia tải presentation để world không tăng vô hạn.

## 10. Kết luận mới

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Graph phân tán đã có thể tạo progression mà không cần hub trung tâm.** Farming output, Project, Person, collection và resource area tạo nhiều horizon nối nhau.
2. **First harvest là junction reveal quan trọng nhất hiện tại.** Nó là lúc Sell/Gift/collection/giữ bắt đầu cạnh tranh, không phải lúc phải hiện mọi objective.
3. **W0 cần reveal trước commitment expansion lớn.** Nếu relief chỉ xuất hiện sau workload cliff, choice W-first/E-first bị phá.
4. **Resource source và requirement phải được reveal phối hợp.** Recipe không có nguồn đọc được là fake choice.
5. **Person branch có thể giao với Project/area nhưng không được là prerequisite duy nhất.** Ability mở cách giải, không khóa content nền.
6. **Recovery edges là một phần của graph.** “Có thể thử lại sau” phải được thiết kế như dependency, không chỉ ghi trong text.

### 10.2. Giả thuyết mạnh nhất để mang sang bước sau

- Dùng graph phân tán làm baseline Year 1; chỉ thêm hub nếu paper test chứng minh nó tạo quyết định mới.
- Thiết kế reveal theo state horizon A–E thay vì ngày cứng.
- Cho mỗi branch ít nhất một reward thay đổi verb, scope, source hoặc target—not chỉ currency/counter.
- Kiểm tra graph bằng ba archetype route trong một lịch mùa thử, bao gồm một route gần như không expansion farming.
- Giữ Fishing/Mine/Processing loop đã paper-test và đưa assumptions của chúng vào package Year 1.

Tất cả vẫn là giả thuyết cần thử.

## 11. Các khoảng trống còn lại

- Coop và Mushroom House vẫn chỉ là placeholder; Fishing, Mine và Processing đã có minimal loop paper-tested nhưng chưa có content/economy đầy đủ.
- Chưa biết source/subsystem nào có từ đầu ngoài farming.
- Chưa chốt Season length hoặc cadence reveal.
- Chưa có reward cụ thể cho collection C1.
- Chưa có roster Person ability; A/C/K mới là kernel fixture đã test.
- Heart cadence A/C/K đã được test 24 ngày trừu tượng; cap 2/same-day use mới là baseline fixture, chưa phải quyết định.
- Chưa có economy cho Gold ngoài Seed/upgrade fixture.
- Chưa có rule về storage/capacity.
- Continuous-world/objective load đã được paper-layout và recognition audit; chưa có usability test với asset/người chơi mới.

## 12. Bước tiếp theo cập nhật

Route coverage, subsystem schedule, continuous-world layout, Heart cadence, Mine checkpoint và Processing sensitivity đã chạy ở cấp paper fixture. Bước tiếp theo là tổng hợp chúng thành package Year 1 và audit theo requirement:

1. Core loop/action grammar thống nhất.
2. Economy assumptions và chỗ chưa thể quy đổi.
3. Progression/reveal graph cùng recovery edges.
4. Person/Heart cadence và ability safety.
5. World presentation/root-density assumptions.
6. Danh sách paper test, contradiction còn lại và vòng kiểm chứng sau.
