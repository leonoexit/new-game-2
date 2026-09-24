# Year 1 paper-design package v0

Ngày tổng hợp: 2026-09-21.

Trạng thái: package tích hợp từ các paper simulation hiện có. `Year 1` là horizon nội dung cần thiết kế/cân bằng, không phải deadline, ending hoặc reset save. Tài liệu này không cho phép code/prototype và không biến fixture thành luật đã chốt.

Superseding V0 note 2026-09-23: use [package v1](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) and [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) for the current paper boundary. The Grove Search, Upper-Grove reward, Project fee, A/K ability-purpose, Heart cap and three-day Turnip rhythm in this earlier package are historical fixtures or hypotheses where later tests disagree. Preserve them as evidence, not active V0 rules.

## 0. Cách đọc trạng thái

Mọi phần dùng bốn nhãn:

- **[DECIDED]** — điều người dùng đã chốt.
- **[DIRECTION]** — hướng đã được đồng ý hoặc đang được dùng để tiếp tục thiết kế.
- **[HYPOTHESIS]** — kết luận mạnh nhất từ paper test nhưng chưa được người dùng chốt.
- **[FIXTURE]** — số/tên/lịch tạm chỉ dùng để simulation.

Nếu một dòng không có nhãn riêng, nó thừa hưởng nhãn gần nhất trong subsection.

## 1. Product frame

### 1.1. [DECIDED]

- Solo card-based life sim; card là ngôn ngữ chính của world, state và interaction.
- Không điều khiển avatar đi trên seamless map.
- Điều khiển tối thiểu có cảm giác Stacklands: cầm/chọn nguồn, đưa tới đích, preview, commit và thấy kết quả.
- Hình, name và description cùng định nghĩa card; hình cần đọc được ở kích thước nhỏ.
- Person là persistent collectible với activated ability; không phải nhân vật nền hoặc party slot.
- Save có thể tiếp tục qua nhiều năm. Year 1 không tự động reset hoặc kết thúc save.
- Objective, completion và ending là ba khái niệm độc lập.
- Sưu tầm Person là một hướng sống tùy chọn, không phải completion bắt buộc.
- Bỏ lỡ thông thường trì hoãn tới lần/chu kỳ sau; không mặc định phá save.

### 1.2. [DIRECTION]

- Progression dùng mạng micro-objective reveal dần area, card, source, target hoặc verb.
- Không có bằng chứng cần objective hub trung tâm; distributed graph là baseline ít giả định hơn.
- Farming, Person, Project, resource area, Fishing, Mine và Processing cạnh tranh cùng ngân sách action.
- Paper simulation trước code/prototype.

## 2. Core day loop

### 2.1. [HYPOTHESIS] Loop tổng hợp

```text
New Day
  ↓
Read Season + Weather + all Person opportunities + area badges
  ↓
Choose one or more horizons for today
  ↓
Select/carry source → target → preview cost/scope/result → commit action
  ↓
World state, item stacks, Project progress, Heart and queues update
  ↓
Replan while AP/opportunities remain
  ↓
Sleep
  ↓
Crop/Processor/opportunity/day-state resolve; persistent progress remains
  ↺
```

Loop không yêu cầu người chơi dùng hết AP, làm farming mỗi ngày hoặc chạm mọi subsystem.

### 2.2. [DECIDED] Information at day start

- Season và Weather được công bố.
- Toàn bộ Person có thể gặp trong ngày được công bố tự động cùng location/context.
- Xem hoặc bỏ qua Person không tốn AP.

### 2.3. [HYPOTHESIS] Day planning information

- HUD/overview cho category, urgency và cost class của opportunity.
- Exact rule/reward chỉ hiện khi focus/inspect theo reveal policy.
- Người chơi phải biết đủ source/reward horizon để phân biệt choice thật với requirement bí ẩn.

### 2.4. Chưa chốt

- Cách kết thúc ngày, Sleep sớm, AP thừa và autosave.
- Season length, số ngày, Weather distribution.
- Có energy nào ngoài AP hay không; package chỉ dùng `AP` như đơn vị simulation.

## 3. Action grammar

### 3.1. [DECIDED]

- Cử chỉ UI và chi phí game là hai lớp khác nhau. Kéo Seed vào Soil không tự động nghĩa là Plant miễn AP.
- Gift tốn action cost + item hợp lệ; xem/bỏ qua miễn AP.
- Preview phải xảy ra trước commit; hủy không đổi resource/world state.

### 3.2. [HYPOTHESIS] Action instance

> Một AP trả cho một action instance; verb, Tool, building hoặc effect công bố eligibility, scope/capacity và result.

Hệ quả:

- Stack/group chỉ tổ chức presentation, không tự quyết định AP scope.
- Manual Tool có thể capacity 1; upgraded Tool có capacity rõ hơn 1.
- Rain/automation có thể thay eligibility/cost/scope bằng rule riêng.
- Person ability có thể thay distribution/scope mà không tăng tổng output.

### 3.3. [HYPOTHESIS] Preview contract

Mọi commit preview ít nhất:

- verb;
- exact source/quantity bị tiêu;
- target count/scope;
- AP/Heart/other cost;
- state/output sau action;
- timing nếu result sau Sleep;
- recovery/cancel nếu branch/opportunity đặc biệt.

Ví dụ fixture: `Water 2 crops · 1 AP`, `Gift 1 Root A · +1 A Heart`, `Load 1 Fish · 1 AP · ready after Sleep`.

### 3.4. [HYPOTHESIS] Local và cross-region input

- Cùng cluster/viewport: direct drag vẫn phù hợp.
- Khác viewport: source được chọn/carry trong sticky tray, camera jump/scroll, rồi chọn target.
- Không yêu cầu edge-drag xuyên nhiều viewport.

## 4. World surface và card representation

### 4.1. [DIRECTION] Ý tưởng do người dùng đưa ra

- Toàn bộ world geography nằm trên một continuous surface có thể cuộn.
- Surface có thể vertical-dominant, ngoằn ngoèo và có branch.
- World card có thể là square art-first representation; full text hiện khi inspect.

### 4.2. [HYPOTHESIS] Baseline mạnh nhất

- Vertical-serpentine, bounded width.
- Square tile trên world/compact tray; vertical 5:7 detail card khi inspect.
- Sticky HUD, hand/action tray, carried source và region anchors.
- Hex chỉ dùng nếu adjacency/range/movement trở thành mechanic thật.
- Home-middle/open-at-Home hiện mạnh hơn về hub/geography; Home-at-top mạnh hơn về one-direction discovery. Chưa chọn.

### 4.3. [HYPOTHESIS] Whole-world explicit

- **Topology explicit:** Farm, River, Town, Mine, Sea và locked landmark có vị trí rõ.
- **State explicit:** Mature/Watered, Processor busy/ready, current Mine band, active badge.
- **Content progressive:** exact Catch, Veiled reward, Project rule và future requirement reveal theo condition.

### 4.4. [HYPOTHESIS] Semantic compression

Root world chứa landmark, persistent capacity/state và current context marker—not mọi item, history, Mine depth hoặc Person.

Presentation layers:

| Layer | Nội dung |
| --- | --- |
| HUD/day strip | Season, Weather, Person announcement |
| Root world | Landmark/building/persistent field/source |
| Inline marker | Current Person, Catch, batch, frontier |
| Sticky tray | Tool, item stack, owned Person, selected source |
| Inspect/overlay | Full rule, collection, history, comparison |

### 4.5. [HYPOTHESIS] Art/text policy

`Art-first, text by decision burden`:

- L0: crop state/known landmark — art at rest, name on focus.
- L1: item stack/known Person — art + quantity/Heart/status, name on selection.
- L2: Project/opportunity/queue — short label/progress plus preview.
- L3: new Person/critical branch — name/context always visible until understood.

Recognition rate chưa được chứng minh vì chưa có final asset/user test.

## 5. Farming F1–F11

### 5.1. [DIRECTION] State chain

```text
Overgrown → Clear → Till → Plant → Care/Sleep → Mature → Harvest
                                                   ↓
                                    Sell / Gift / Collection / Process / Keep
```

Crop/Soil card đổi state; không cần Objective card cho từng bước.

### 5.2. [HYPOTHESIS] Expansion + relief

- F7 expansion, F8 workload và F9 relief phải được thiết kế cùng nhau.
- Hai crop tạo routine nhẹ trong fixture; bốn crop bắt đầu ép AP; sáu crop cần maintenance relief và vẫn có harvest/replant burst.
- Maintenance relief và burst relief là hai trục khác nhau.
- Water Tool capacity và fixed-target automation không nên chỉ khác artwork: flexible scope và committed target tạo choice khác.
- Ít nhất một maintenance relief nên vào actionable horizon trước khi expansion lớn tạo lock-in mềm.

### 5.3. [HYPOTHESIS] Farm footprint

- Tới sáu active plot: individual plot tile có thể nằm trên root Farm cluster.
- Trên sáu: Field cluster trở thành semantic unit; chỉ cluster focused mở individual plots.
- 12/24 plot là stress fixture, không phải cap hoặc target content.

### 5.4. [FIXTURE]

- 2 → 4 → 6 crop.
- Manual Water capacity 1; upgrade capacity 2.
- Fixed automation một plot.
- Burst Tool Harvest/Plant capacity 2.
- Các setup cost 3/6 AP trong test.

Không con số nào ở đây đã được chốt.

## 6. Resource sources và area loop

### 6.1. [HYPOTHESIS]

- Resource bắt buộc cho unlock nền cần deterministic source hoặc substitute đọc được.
- Batch/Search area dùng opportunity/variety, không giữ common progression hostage bởi random draw.
- Search reveal và Collect là hai decision points nếu reveal thay được route; nếu không, gộp action để tránh thao tác thừa.
- Rain/free capacity có thể dành cho source, Mine, Fishing, Person hoặc Project; không cần lấp kín bằng farming.

### 6.2. [HYPOTHESIS] Person kernels

- A preview batch/Veiled result.
- C giữ một expiring opportunity qua Sleep.
- Loop không có A/C vẫn hoạt động bằng safe/deterministic path.

## 7. Fishing

### 7.1. [HYPOTHESIS]

- River/Lake/Sea là location/spot trên world.
- Catch card/opportunity hiện condition và cost trước commit.
- Repeated-use/condition mastery là objective shape, không phải delivery bundle.
- Record catch không nhất thiết consume Fish.

### 7.2. Resolution status

- Same-day two-step `1 + 1 AP` không tạo reconsideration trong shared schedule; nó chỉ tăng thao tác.
- Atomic Catch cost 2 AP là baseline mạnh hơn nếu muốn một commitment block.
- Persistent progress phù hợp hơn nếu Fish khó là mini-project qua ngày.

**[HYPOTHESIS]** Dùng atomic Catch 2 AP ở vòng paper kế; chưa chốt AP hoặc một Catch/location/day.

## 8. Mine

### 8.1. [HYPOTHESIS] Core grammar

- Mine Entrance → current frontier/route.
- Mỗi Descend tăng Depth deterministic.
- Safe route biết outcome; Veiled route chỉ ẩn optional reward, không ẩn progress.
- Sleep giữ Depth; không mất progress vì bỏ một ngày.

### 8.2. [HYPOTHESIS] Mixed checkpoints

Checkpoint nên luân phiên:

1. Source-vs-depth — optional known extraction không tăng Depth.
2. Rule band — ví dụ speed-vs-yield.
3. Branch/context — chọn reward/context band có preview và recovery.
4. World connection — mở topology/cross-system horizon.

Resource staircase thuần bị bác bỏ như baseline mạnh nhất vì chỉ tăng payout, không đổi decision.

### 8.3. [FIXTURE]

- 1 AP/Depth; checkpoint 3/6/9/12.
- Working Seam, Slip Through/Shore Up, Deep Vein/Underground Flow.

Tên, cost và cadence đều chưa chốt.

## 9. Processing

### 9.1. [HYPOTHESIS] Baseline

- Input + Processor → preview.
- Load 1 AP + consume input.
- One slot.
- Complete sau một Sleep.
- Output giữ category nhưng có state/tag/target compatibility riêng.
- Ready output vào tray/stack, không thành ground clutter.

### 9.2. Economy result

- Zero-AP positive conversion hoặc same-day uplift dễ thành default.
- One slot tạo competition giữa Produce/Fish/Herb.
- Identical second slot có thể xóa tension; specialization mạnh hơn như hướng progression.
- Processed output không được là strict upgrade hợp lệ ở mọi Gift/Project/collection và bán giá cao hơn.
- Processor idle là trạng thái hợp lệ.

### 9.3. [FIXTURE]

- Fresh 3G → processed 5G là sensitivity point, không phải price.
- Produce → Preserve; Fish → Dried Fish; Herb → Prepared Herb chỉ là category examples.

## 10. Person và Heart

### 10.1. [DECIDED]

- Person mới: Gift hợp lệ + action cost → giữ Person + Heart.
- Person đã có: Gift hợp lệ + action cost → Heart, không tạo bản sao.
- Heart thuộc riêng từng Person, tồn tại qua ngày và có cap riêng.
- Mỗi Person nhận tối đa một Gift/ngày.
- Ability tiêu Heart của chính Person; Person card vẫn được giữ.
- Person schedule chỉ giới hạn gặp/Gift/refill, không giới hạn ngày dùng ability.
- Không có party cap cưỡng ép.

### 10.2. [HYPOTHESIS] Cadence baseline

- Gift +1 Heart.
- Ability −1 Heart.
- Cap 2.
- Heart vừa nhận dùng được cùng ngày.
- Không cooldown chung; ability cụ thể chỉ có per-day limit nếu repeat-use audit chứng minh cần.

Trong 24-day fixture, cap 1 + next-day lock tạo overflow/mất acquisition-day target; cap 2 + same-day use giữ 12/12 ceiling uses khi player Gift mọi lần. Ceiling còn tốn 12 AP + 12 item, nên không phải free power.

### 10.3. [HYPOTHESIS] Ability safety

- Ability mở lựa chọn, đổi information/timing/scope; không là prerequisite duy nhất cho verb/area nền.
- Không tăng tổng output âm thầm.
- Phải có target/context hợp lệ và preview effect.
- Mọi ability audit khi dùng hai lần cùng ngày nếu cap cho tích.

### 10.4. Ability kernel registry

Các kernel đã được giữ từ vòng thiết kế Person; đây là **[DIRECTION] candidate space**, không phải roster hoặc ability đã gán cho nhân vật cụ thể:

| Kernel | Vai trò | Mức kiểm chứng hiện tại |
| --- | --- | --- |
| A | Xem information ẩn trước commitment | Đã test trên Grove/Mine context |
| C | Giữ một card/opportunity thêm một ngày | Đã test trên batch/Catch context |
| D | Thu lại một phần value sau discard/cancel | Chưa có schedule test |
| E | Cho item một limited alternative use | Chưa có schedule test |
| I | Chuẩn bị work/context cho ngày sau | Chưa có schedule test |
| J | Thay đổi cách một Context được sử dụng | Chưa có schedule test |
| K | Chọn split hoặc focus cùng tổng output | Đã test trên hai Project |
| M | Nhận optional constraint để có solution khác | Chưa có schedule test |

L (đổi điều khoản giao dịch) nằm reserve. G (tìm/reveal Person) đã bị loại vì Person hôm nay được công bố tự động.

## 11. Projects, collection và objective shapes

### 11.1. [DIRECTION]

- Không biến mọi progression thành delivery Project.
- World state tự biểu đạt crop/soil/capacity.
- Objective chỉ nổi khi có horizon, source và reward đủ đọc.

### 11.2. [HYPOTHESIS] Shape registry

| Shape | Subsystem |
| --- | --- |
| World-state transformation | Soil, repair Processor |
| Investment Project | Relief/infrastructure |
| Repeated-use mastery | Fishing conditions |
| Persistent traversal | Mine Depth/checkpoint |
| Conversion/queue | Processing |
| Discovery/record | Collection |
| Timing/opportunity | Person, Catch, Grove batch |

### 11.3. Collection

- Record/submission behavior chưa chốt.
- Reward cần mở Seed/source/verb/choice, không chỉ tăng completion counter.
- Seasonal miss trì hoãn tới chu kỳ sau hoặc substitute; không fail save.

## 12. Progression graph và reveal

### 12.1. [HYPOTHESIS] Distributed graph

```text
Day information
  ├─ Home/Farm → first output → Sell/Gift/Collection/Process
  │                    ├─ Relief → expansion → more capacity
  │                    └─ Cross-system gateway
  ├─ Deterministic source → Grove/Mine/resource branch
  ├─ Fishing location → condition mastery
  └─ Person opportunity → owned ability/Heart option

Branches rejoin through item uses, Projects, abilities and world connections,
but no branch is required to complete every other branch.
```

### 12.2. Reveal horizons

- **A Orientation:** day info, Home/Farm, source nền, Person context.
- **B First commitment:** relief preview sau khi maintenance đã có nghĩa; expansion visible, không ra lệnh.
- **C First output:** Sell/Gift/Collection/Keep/Process targets reveal theo availability.
- **D First branch:** next node của branch đã chọn; không reveal toàn bộ sibling tree.
- **E Multiple lives:** cross-links, automation và several active horizons; không có ending tự động.

### 12.3. Recovery invariants

- Missing Person → lần lịch sau.
- Missing batch/Catch → cycle/condition sau.
- Seasonal miss → season/year sau hoặc substitute nếu thiết kế.
- Rain investment window → Weather sau; không là cửa thoát duy nhất.
- Branch checkpoint → path chưa chọn không mất vĩnh viễn.
- Completion branch → save tiếp tục.

## 13. Economy assumptions

### 13.1. [FIXTURE] Numbers used to expose pressure

- 6 AP/day.
- Produce sell 3G; Seed 1G.
- Sell/Buy/submit 0 AP.
- Work 1 AP → 2 Progress.
- Gift/Collect/Load thường 1 AP.
- Catch atomic 2 AP candidate.
- Mine 1 AP/Depth.
- Processor fresh 3G → processed 5G.

Không số nào đã được chốt.

### 13.2. [HYPOTHESIS] Structural assumptions

- AP là budget chung tạo tradeoff giữa maintenance, opportunity, investment và exploration.
- Required common source deterministic; optional variety có uncertainty.
- Relief phải tiết kiệm AP thật và timing saving phải cứu được opportunity.
- Expansion có setup + future maintenance; capacity không chỉ tăng output miễn phí.
- First output cần ít nhất hai target có ý nghĩa.
- Immediate liquidity giữ Fresh Sell cạnh Processing.
- Gift/Heart, collection reward và Project progress không được ép quy đổi đơn giản sang Gold.

### 13.3. What current ledgers prove

- Relief-first và expansion-first tạo schedule khác.
- Expansion trước relief có thể tạo soft lock-in nhưng output sớm hơn.
- Collection-first có measurable Gold/opportunity cost trong fixture nhưng reward chưa định giá nên không thể xếp hạng route.
- Person K có thể giảm Work waste/split scope nhưng value phụ thuộc còn Project target.
- Rain tạo investment/free-capacity window; không nên tăng farming cost chỉ để lấp ngày rảnh.

## 14. Three route coverage

### Producer

- Farming → first output → Gold/relief → expansion → Processing.
- Mine/resource hỗ trợ Tool nhưng Person không bắt buộc.
- Rủi ro: maintenance/burst và Processing default sau relief.

### Connector

- Deterministic source → Mine/Grove → Project/world connection → Processing.
- Có thể tiến mà crop đứng yên; first harvest không là gateway bắt buộc.
- Person A/C giảm uncertainty/timing nhưng safe path vẫn hoạt động.

### Collector

- Farm nhỏ + Fishing conditions + resource variety + collection/Processing.
- Có thể đạt mastery và Mine checkpoint bằng AP thừa.
- Rủi ro: collection reward chưa đủ cụ thể để định giá route.

Ba route tạo AP profile khác trong cùng six-day fixture; đây là structural coverage, không phải proof of final balance.

## 15. Paper-test evidence index

| Area | Evidence | Kết quả dùng trong package |
| --- | --- | --- |
| AP/action scope | [Action granularity 01](ACTION-GRANULARITY-PAPER-TEST-01.md) | Action instance có explicit capacity; group không quyết định AP |
| F7–F9 | [Farming F7–F9 01](FARMING-F7-F9-PAPER-SIMULATION-01.md) | 2→4→6 pressure; maintenance và burst relief khác nhau |
| Relief | [Farming relief 02](FARMING-RELIEF-PAPER-SIMULATION-02.md) | Tool vs automation; timing/payback |
| Resource economy | [Resource economy 01](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md) | First-harvest junction; resource gate |
| Daily routes | [Daily routes 02](RESOURCE-ECONOMY-DAILY-ROUTES-02.md) | W/E/C divergence, Rain window |
| Resource area | [Resource area 01](RESOURCE-AREA-PAPER-SIMULATION-01.md) | deterministic base + batch variety; A/C contexts |
| Progression | [Dependency graph v0](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V0.md) | distributed reveal and recovery edges |
| Route coverage | [Route coverage 01](YEAR-1-ROUTE-COVERAGE-TEST-01.md) | farming-independent Connector correction |
| Subsystems | [Subsystem loops 01](SUBSYSTEM-LOOPS-PAPER-TEST-01.md) | Fishing/Mine/Processing objective shapes |
| Shared schedule | [Shared schedule 01](SHARED-SUBSYSTEM-SCHEDULE-TEST-01.md) | route AP profiles; two-step Fishing rejected |
| Continuous world | [Surface 01](CONTINUOUS-WORLD-SURFACE-PAPER-TEST-01.md), [layouts 02](CONTINUOUS-WORLD-PAPER-LAYOUT-02.md), [mapping 03](CONTINUOUS-WORLD-YEAR1-MAPPING-03.md) | serpentine candidate, anchors, semantic compression |
| Recognition | [Recognition audit 04](CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md) | art-first, text by decision burden |
| Heart | [Heart cadence 01](PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md) | cap 2/same-day use fixture; no default cooldown |
| Mine | [Mine checkpoint 02](MINE-CHECKPOINT-PAPER-SIMULATION-02.md) | mixed checkpoint rules over resource staircase |
| Processing | [Processing sensitivity 02](PROCESSING-VALUE-SENSITIVITY-02.md) | 1 AP + Sleep + one slot; identity tradeoff |

## 16. Invariants for the next design round

Các invariant sau là **[HYPOTHESIS] acceptance criteria**, chưa phải user decisions:

1. UI grouping không âm thầm đổi action economy.
2. Preview đủ cost/scope/result trước commit.
3. Required unlock resource có deterministic path hoặc substitute.
4. Không Person cụ thể nào là prerequisite duy nhất cho core area/verb.
5. Expansion không đi quá xa trước relief tới mức tạo trap không đọc được.
6. Item output vào stack/storage; không làm root world tăng vô hạn.
7. Mine Depth deterministic; hidden result không chặn progress.
8. Processed item không là universal strict upgrade.
9. Opportunity miss có recovery edge.
10. World root chỉ chứa semantic persistent node/state.
11. Art-only không được che decision-critical identity/rule.
12. Year 1 completion không tự động end/reset save.

## 17. Open risks and contradictions

### Priority A — blocks content balancing

- Final AP/day, Sleep/end-day rule và có Energy riêng hay không.
- Season length, Weather frequency/forecast.
- Starting sources/areas và order những gateway đầu.
- Gold sinks, Buy/Sell AP và price scale.
- Storage/capacity/perishability.
- Concrete crop/item/Project/collection reward set.

### Priority B — subsystem tuning

- Fishing atomic vs persistent resolution.
- Mine reward economy, Tool progression và branch recovery cadence.
- Processing recipes/tags/specialized expansion.
- Person roster/ability repeat-use safety và Gift item availability.
- D/E/I/J/M chưa có shared-schedule evidence; A/C/K không đại diện đủ toàn roster.
- Coop/Mushroom House vẫn chỉ là placeholders.

### Priority C — presentation validation

- Home-middle vs Home-at-top với người chơi mới.
- Recognition ở 72–80 px bằng final-ish assets.
- Hand scan, localization, text-always-on và accessibility.
- Anchor/overview load khi Year 1 region/node count tăng.

### Known non-conclusions

- 6 AP, 6 plot, cap 2, Catch 2 AP, checkpoint 3/6/9/12 và price 3/5 không phải luật.
- Continuous world/serpentine chưa được user chốt là topology cuối.
- Package không chứng minh emotional appeal; prototype cũ từng thất bại về cảm giác.
- Paper balance không thay playtest.

## 18. Next verification order

1. **Content-minimum registry:** chọn một bộ nhỏ crop/item/source/Project/collection reward để mọi route dùng cùng một vocabulary, vẫn gắn nhãn fixture.
2. **Calendar sensitivity:** so ít nhất hai AP/day × hai Weather cadence × hai season lengths; kiểm tra route coverage và Heart/Gift load.
3. **Economy ledger v2:** thêm Gold sinks, Buy/Sell cost, Processing tags và collection reward; kiểm dominance.
4. **Person roster kernel audit:** đưa 5–8 ability candidate qua target density, repeat-use và no-required-Person invariants.
5. **World orientation/recognition test:** paper/asset mock với người chưa biết map; đo find-target, wrong-source preview catches và return-to-Home.
6. **Year 1 content graph v1:** chỉ sau các sensitivity trên mới gắn cụ thể vào Season/day bands.

Không code trước khi paper package v1 giải quyết Priority A đủ để một schedule không phụ thuộc số tùy ý.

## 19. Package verdict

### Đã đạt ở cấp structural paper design

- Core loop và action grammar có một baseline nhất quán.
- Farming/AP/relief, resources, Person/Heart, Fishing, Mine và Processing đã giao nhau trong shared schedules.
- Progression graph có nhiều route và objective shape; first harvest không còn là gateway duy nhất.
- Continuous world có presentation mapping không tăng root vô hạn.
- Recovery và multi-year save không mâu thuẫn với Year 1 scope.

### Chưa đạt ở cấp content/balance/playability validation

- Chưa có final Year 1 content list/calendar/economy.
- Chưa có asset-based recognition/usability test.
- Chưa chứng minh fun/emotional appeal.
- Nhiều số vẫn là fixture và phải qua sensitivity trước khi chốt.

Package v0 vì vậy đủ làm **design baseline và audit map**, không phải production specification.

Requirement-by-requirement verification được lưu tại [Year 1 package completion audit](YEAR-1-PACKAGE-COMPLETION-AUDIT.md).
