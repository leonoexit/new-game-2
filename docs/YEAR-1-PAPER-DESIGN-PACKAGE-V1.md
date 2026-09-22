# Little Valley Cards — Year 1 paper design package v1

Ngày khóa vòng tích hợp: 2026-09-22.

Trạng thái: paper-design package v1; không phải implementation spec hoặc content lock. Tài liệu này giữ structural package của [v0](YEAR-1-PAPER-DESIGN-PACKAGE-V0.md), thay các open placeholder bằng registry/sensitivity evidence mới và liên kết graph v1. Không code/prototype được dùng để tạo kết luận.

`Year 1` là content/balance horizon. Save, Person, Heart, Mine Depth, Project progress và world state không reset chỉ vì chuyển năm.

## 1. Status legend

- `[DECIDED]`: user/product invariant đã chốt.
- `[DIRECTION]`: hướng đủ mạnh để dùng cho vòng paper kế, chưa final.
- `[HYPOTHESIS]`: cần evidence thêm.
- `[FIXTURE]`: tên/số/rule tạm để so arm; không được promote âm thầm.

## 2. Package invariants

### 2.1. [DECIDED]

- Solo card-based life sim; card là ngôn ngữ chính của world/state/action.
- Person là persistent collectible với activated ability, không phải party slot.
- Gift tốn action + valid item; Heart riêng từng Person và giữ qua ngày.
- Không Person cụ thể nào là gateway duy nhất cho core area/verb.
- Bỏ lỡ thông thường trì hoãn tới source/schedule/cycle sau.
- Objective, completion và ending độc lập.
- Save tiếp tục qua nhiều năm; Year 1 không phải ending/reset.
- Mọi on-table card trên Area tableau dùng square `1:1`; portrait rectangle không phải primary card shape.

### 2.2. [DIRECTION]

- Distributed micro-objective network; không objective hub bắt buộc.
- Root world strip chỉ giữ Area tableau, persistent state/capacity và active context cần chơi.
- Preview cost/scope/result trước commit; cancel trước commit không đổi state/resource.
- Required common source deterministic hoặc có recovery/substitute rõ.
- Raw/Fresh và Processed giữ category/subtype/origin khác nhau.
- Scroll/anchor/selected source không tốn AP; navigation UI không phải movement/travel.
- World là vertical strip của abstract Area tableaus; card cùng Area đặt khít và chia sẻ visual language, không mô phỏng geography/map.

## 3. Minimum shared vocabulary

Tất cả schedule/economy/graph dùng cùng `[FIXTURE]` vocabulary:

- Crops: Shortroot, Tallbean, Dewleaf.
- Deterministic/opportunity sources: Hedgerow Berry, Fallen Wood, Plain Stone, Seam Ore, Wild Herb.
- Catch: River Minnow, Rain Eel.
- Projects: Water Trough `PJ-M`, Harvest Bench `PJ-B`, Upper-Grove Footbridge `PJ-X`.
- Processing: `[crop] Preserve`, `Dried [fish]`, `Prepared [herb]`, giữ subtype/origin.
- Collection: `COL-1` record 3-of-4 family → chọn Tallbean/Dewleaf Seed; `COL-N` vẫn là explicit gap.
- Person test roster: Mira=A, Nell=C, Bram=K; identity/assignment chỉ là fixture.

Names/counts không phải content lock.

## 4. Structural graph

Canonical paper graph của package là [Year 1 progression dependency graph v1](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md). Presentation correction mới nhất là [Scrollable area-tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md); area-container model 06 và explicit-surface model 07 đã superseded.

```text
New Day info
  ├─ House/Farm entities → first output → Sell / Gift / Record / Process / Keep
  ├─ Hedgerow/Woodlot → Forage + Project materials
  ├─ Mine → deterministic Depth → source/rule/branch checkpoints
  ├─ River → condition Catch → Fish record/use
  ├─ Person context → optional Gift → Heart → A/C/K support
  └─ Cross-links → Projects / Collection / Processing / world connection
```

Không branch nào cần first harvest để tồn tại. Branch rejoin bằng item allocation, record, target compatibility và optional capability—not một delivery gate chung.

## 5. Current paper baselines

| System | Baseline kế | Comparator/rejected signal | Status |
| --- | --- | --- | --- |
| Day capacity | A5 stress, A7 safety | A5 soft lock; A7 quá rộng | `[FIXTURE]` |
| Season/calendar | 12/18 + sparse/dense Weather cells | phase alignment quan trọng ngang frequency | `[FIXTURE]` |
| Buy/Sell | 0 AP, exact quantity preview | 1 AP batch đè A5 và tạo hoarding incentive | `[HYPOTHESIS]` |
| Storage | no cap, no perish | `S4` comparator; `P1` perish không carry | `[HYPOTHESIS]` |
| Fishing | atomic one-commit | global persistent xóa A5 scarcity, thêm A7 state | `[HYPOTHESIS]` |
| Mine | deterministic Depth + mixed checkpoint | resource staircase yếu hơn | `[HYPOTHESIS]` |
| Mine/Fishing presentation | abstract Area tableaus; target exact Catch/frontier/route | redundant Entrance/Spot gateway cards | `[DIRECTION]` |
| On-table card shape | square 1:1; full rules in rectangular detail UI; Record/Depth as status strips | portrait primary cards hoặc rule text nhồi trên root | `[DECIDED]` |
| Processing | Load → Sleep, one slot, identity preserving | +2G/1 AP/one Sleep là numbers only | `[FIXTURE]` |
| PJ-M/PJ-B | material + Work, no fee | fee + scarce material + Work triple-gates relief | `[HYPOTHESIS]` |
| PJ-X | material + Work + selected permit comparator | không áp fee cho mọi Project | `[HYPOTHESIS]` |
| Person | A/C/K concrete fixture | E/J conditional; D/I/M reserve | `[HYPOTHESIS]` |
| World navigation | vertical Area order + soft transitions | spatial topology/map metaphor rejected | `[DIRECTION]` |

Không con số AP/cap/fee/price nào ở bảng là luật final.

## 6. Economy/allocation contract

### 6.1. First output

- Sell thắng khi Seed/selected capability cần Gold hôm nay.
- Gift thắng khi Heart có target đủ giá trị; không quy đổi Heart thành Gold cố định.
- Record lần đầu không consume.
- Process thắng khi target/state/timing cần Processed hoặc slot/AP rảnh.
- Keep thắng khi forecast category/state/context trong 1–3 ngày cho option value.

### 6.2. Fresh/Processed

- Fresh Shortroot ↔ Shortroot Preserve giữ `Crop · Root`.
- Fresh River Minnow ↔ Dried River Minnow giữ `Fish · River`.
- Fresh Wild Herb ↔ Prepared Wild Herb giữ `Forage · Herb`.
- Processed không thay Fresh request/record; Fresh không tự thay Processed pantry target.

### 6.3. Project gates

- Water Trough: Wood + Ore + Work baseline; bỏ fee comparator để tránh CP3/Ore/fee/Work four-layer gate.
- Harvest Bench: Wood + Stone + Work baseline; relief phải reveal trước burst cliff.
- Footbridge: optional context; permit comparator được giữ vì base Grove/Mine route vẫn hoạt động.
- Contribution/progress giữ qua Sleep/Season/Year.

## 7. Person fixture

| Person | Kernel | Gift tag | Safety boundary |
| --- | --- | --- | --- |
| Mira | A Preview | `Fresh · Forage · Berry` | one preview/unresolved target; no reroll |
| Nell | C Hold Open | `Fresh · Forage · Herb` | one held target; no re-extend |
| Bram | K Divide/Focus | `Fresh · Crop · Root` | total Project Progress conserved |

Mini-roster có economy tension thật nhưng không gate route. E/J chưa thêm vì printed exception burden chưa cần cho A/C/K baseline; D/I/M không có đủ native grammar.

## 8. World/orientation package

Current model: [scrollable area-tableau 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md). [v0.2](../paper-tests/orientation-explicit-surface-v0.2/README.md) và [v0.1](../paper-tests/orientation-home-middle-vs-top-v0.1/README.md) chỉ còn là historical spatial/topology evidence; không dùng cho pilot.

Coverage hiện có:

- square House, Farm Plot, Supermarket, Mine Entrance, Fishing Spot và supporting environmental studies;
- Water Trough, Harvest Bench, Upper-Grove Footbridge;
- Fresh/Processed Crop, Fish, Herb pairs;
- historical continuous M/T boards and square studies reusable as art inputs;
- House/Farm supporting studies; Home/Town Place tokens chỉ còn giá trị historical/topology-skeleton;
- sticky House anchor, opening cue, carried-source area;
- four-task script, counterbalance và log fields.
- Mine/Fishing v0.2 shape fixture: six square cards, River Record/Mine Depth strips, two-column mobile preview, detail/outcome/print sheets.

`[DECIDED]` Scroll không mô phỏng movement/geography, nên Home-middle vs Home-at-top không còn là câu hỏi topology hợp lệ.

`[DIRECTION]` Fixture v0.3 cần xếp card cùng Area khít thành vertical strip, dùng visual transition thay map terrain và đo area/card recognition thay vì spatial recall.

Card geometry hiện hành nằm ở [on-table card shape decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md). Mine/Fishing [fixture v0.2](../paper-tests/mine-fishing-area-tableau-v0.2/README.md) là first shape-conformant artifact; desktop/mobile desk QA đã pass nhưng participant evidence vẫn open.

Tất cả new art có status `study`, không canonical/runtime.

## 9. Evidence ledger

| Evidence | Package consequence |
| --- | --- |
| [Content minimum registry](CONTENT-MINIMUM-REGISTRY-01.md) | Shared names/tags/sources; no inferred Year 1 count |
| [Calendar sensitivity](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md) | A5/A7 + phase alignment constraints |
| [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) | T0 market, sink shapes, exact compatibility |
| [Storage sensitivity](STORAGE-KEEP-SENSITIVITY-01.md) | no-cap baseline; forecast required; perish rejected |
| [Fishing sensitivity](FISHING-RESOLUTION-SENSITIVITY-02.md) | atomic commitment retained across four cells |
| [Mine/Fishing tableau contract](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) | exact Catch/frontier/route play grammar; redundant gateways removed |
| [Square-card decision](ON-TABLE-CARD-SHAPE-DECISION-09.md) | universal 1:1 root-card footprint; panel/status/header taxonomy |
| [Mine/Fishing tableau fixture](../paper-tests/mine-fishing-area-tableau-v0.2/README.md) | six square cards + status strips + detail/outcome/print sheets + protocol |
| [Scrollable Area model](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) | scroll is UI navigation, not travel or map |
| [Mine triple-gate audit](MINE-PROJECT-TRIPLE-GATE-AUDIT-01.md) | remove relief fees in next baseline |
| [Kernel audit](PERSON-ROSTER-KERNEL-AUDIT-02.md) | A/C/K carry, E/J conditional, D/I/M reserve |
| [Mini-roster fixture](PERSON-MINI-ROSTER-FIXTURE-01.md) | concrete Gift/economy/UI test set |
| [Historical orientation audit](CONTINUOUS-WORLD-ASSET-ORIENTATION-AUDIT-05.md) + kits | square art reusable; spatial protocol retired |

## 10. Recovery matrix

| Miss/choice | Recovery |
| --- | --- |
| Crop care/burst delayed | Resume persistent crop/state next day |
| Common Catch missed | Common condition returns |
| Rain Eel missed | Rain/cycle later; no Fishing lock |
| Person/Gift missed | Person schedule later |
| Grove batch missed | Batch later; required core source deterministic |
| Mine day skipped | Depth persists |
| Mine branch chosen | Other branch later route/cycle |
| Project delayed | Contributions persist; base verb/source remains |
| Tallbean/Dewleaf unchosen | Other Seed returns later |
| Storage target skipped | Target/source returns; no discard-driven fail |
| Year 1 ends | Save continues; no reset |

## 11. Package v1 acceptance

| Criterion | Result |
| --- | --- |
| Shared content vocabulary | Pass as fixture |
| Independent Producer/Connector/Collector entry | Pass |
| Fresh/Processed compatibility | Pass structurally |
| Storage/perishability arms separated | Pass |
| Fishing resolution compared in decisive cells | Pass |
| Mine/Project triple gate audited | Pass |
| Concrete Person mini-roster | Pass as fixture |
| Square orientation asset coverage | Pass |
| Historical spatial orientation preflight | Pass, but superseded for pilot |
| Scrollable Area-tableau representation | Mine/Fishing shape fixture pass; global v0.3 fixture open |
| Square-card desk/mobile render QA | Pass; participant comprehension open |
| New-player orientation data | Open |
| Long collection arc `COL-N` | Open |
| Final AP/calendar/prices/costs | Open by design |
| Final Area order/roster/content count | Open by design |

## 12. Strongest current conclusions

1. `[DIRECTION]` Keep distributed graph/reveal bands; no objective hub required.
2. `[HYPOTHESIS]` Use no-cap/no-perish + 0 AP market as clean next baseline; do not stack cap, perish và transaction AP.
3. `[HYPOTHESIS]` Keep atomic Fishing as general baseline; reserve multi-day resolution for explicit special Catch content if needed.
4. `[HYPOTHESIS]` Relief Project should not carry universal Gold fee; selected optional-context fee is enough strategic sink comparator.
5. `[HYPOTHESIS]` A/C/K is a coherent minimum Person test roster without making Person mandatory.
6. `[DECIDED]` Scroll order is interface organization, not world topology or travel distance.
7. `[DECIDED]` No paper result changes multi-year continuation.

## 13. Next evidence, in order

1. Run one comprehension pilot on the Mine/Fishing square Area-tableau fixture v0.2.
2. Build v0.3 vertical Area-strip fixture; then run one new-player navigation/recognition pilot.
3. Rerun calendar completion timing with PJ-M/PJ-B no fee and PJ-X selected fee.
4. Create/test `COL-N` as a longer record horizon without permanent miss.
5. Test forecast presentation before selecting storage cap.
6. Only then choose a narrower content/balance lock; implementation still needs explicit user authorization.

## 14. Non-conclusions

- No final AP/day, Season length, Weather rate, price, Project quantity or Work total.
- No final Area order, card density, world node count, square logical size or runtime tile size.
- No canonical Person roster/Gift schedule/Heart cadence.
- No canonical art promotion.
- No final completion/ending design.
- Paper evidence does not replace playtest or emotional appeal evaluation.
