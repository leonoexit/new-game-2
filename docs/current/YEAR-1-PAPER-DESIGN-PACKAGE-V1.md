# Little Valley Cards — Year 1 paper design package v1

Ngày khóa vòng tích hợp: 2026-09-22; post-removal consistency update: 2026-09-23.

Trạng thái: paper-design package v1; không phải implementation spec hoặc content lock. Tài liệu này giữ structural package của [v0](../evidence/YEAR-1-PAPER-DESIGN-PACKAGE-V0.md), thay các open placeholder bằng registry/sensitivity evidence mới và liên kết graph v1. Không code/prototype được dùng để tạo kết luận.

**Phạm vi lá/entity V0 hiện hành:** xem [danh mục card grammar §10](ON-TABLE-CARD-SHAPE-DECISION-09.md). Những trace và tên cũ trong package, đặc biệt `Field Notes` reward, `Rìa Rừng` như một Area riêng, Project, Mira/Bram và Seed Bean/Lemon Balm chưa có nguồn, không được dùng để tự thêm card vào V0. Package vẫn là bằng chứng luật giấy và kết quả thử; danh mục card grammar quyết định loại lá, nơi xuất hiện và trạng thái hiện hành.

**Mine update · 2026-09-25:** các đoạn CP3, `Search`, `Exposed Ore`, `Extract` và phí Mine trong package là phép thử cũ. [Mine contract 01](MINE-CURRENT-CONTRACT-01.md) ghi gameplay Mine CG-17/19/20 hiện hành. Workbook đã cập nhật dòng Mine; fixture cũ chưa migrate.

**Taxonomy correction CG-06/07 · 2026-09-24:** Character thuộc Person, Hand thuộc Tool, Fish là Item/Fish, cây hoang dã/cây đang trồng/nông sản thu hoạch là Item/Crop. Farmhouse là Building card thuộc Farm và chứa TV sub-card theo FH-01 đã được duyệt. Những nhãn `Forage` trong trace cũ không định nghĩa card type hiện hành.

**Taxonomy correction CG-09 · 2026-09-25:** Supermarket là Building card ở Commerce. Shipping Bin và TV cùng thuộc loại Thiết bị (Equipment), lần lượt ở Home/Farm và bên trong Farmhouse. `Sub-card` mô tả quan hệ chứa của TV; các tương tác đã chốt giữ nguyên.

Latest paper reading: [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) sets visible Wild Herb in Rìa Rừng; §7.4 records the owner's Nell-only Person scope; **§6.5 rejects all three proposed Projects as designs**. [Farm rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) supplies the working Watering Can → Growth → Hand Harvest rule and no-Project AP check. **§6.7–6.8** are comparison traces; **§6.9** states the working first-loop shop/Field Notes/Mine scope; **§6.11** marks the Fish/Ore/Gold uses that remain unproven after the first record. Earlier Project/AP/Calendar traces are records of discarded assumptions.

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
- Farmhouse reveals selectable sub-cards. TV is one such sub-card: playing it on day D costs 0 AP and reports D+1 Weather on TV; Sleep then uses that forecast. If TV was not played, Sleep determines D+1 Weather itself without opening TV. This Sleep decision does not inform earlier D choices. There is no Tomorrow Weather field on the global rail.

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

- Crops: Turnip, Runner Bean, Lemon Balm. Historical paper aliases: Shortroot, Tallbean, Dewleaf.
- First-loop items: Hedgerow Berry, one CP3 Ore, Wild Herb; Wood/Stone remain named paper identities but §6.9 defers their playable source actions until they have a use.
- Catch: Silver Minnow, Blue Eel. Historical paper aliases: River Minnow, Rain Eel.
- Projects: **none selected** (§6.5). Water Trough `PJ-M`, Harvest Bench `PJ-B` and Grove Footbridge `PJ-X` are rejected proposals; their names survive only in historical tests, not as reserved future content.
- Processing: `[crop] Preserve`, `Dried [fish]`, `Prepared [herb]`, giữ subtype/origin.
- Collection: Valley Journal; Field Notes (`COL-1`) record 3-of-4 family → chọn Runner Bean/Lemon Balm Seed; Connections (`COL-N`) pages pass paper timing under independent source delivery `DL-6`, final cadence/value open.
- Persons: Mira, Nell and Bram remain canonical paper names, but §7.4 selects **Nell alone** for the first-playable roster. A/C/K are prior paper role assignments. Nell's old C Hold and the crop-only Harvest Assist are retired; §7.2 sets her V0 paper ability to 2 AP of same-day relief for 1 Nell Heart. Mira/Bram are deferred content identities, without active V0 Gift/Heart/card rules. Nell's Gift preference and appearance schedule remain fixtures.

Provenance clarification: `Grove Footbridge`, `Harvest Bench`, and `Upper Grove` are original **Little Valley Cards paper-design** names/contexts. They are not claimed as named content from the Stardew Valley video game or *Stardew Valley: The Board Game*. The latter is a design reference, not the source of these three identities. Canonical paper naming approval in [proposal 23](../evidence/CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md) records this project's vocabulary, not source-game authenticity.

Source-grounding correction: the earlier AP-pressure tests showed why farm relief might be valuable, but did not justify Water Trough or Harvest Bench as the entity producing it. Grove Footbridge/Upper Grove also has no playable reward. The owner rejected all three proposed Projects as designs (§6.5). `B3`, Q4 and X0 remain records of discarded assumptions.

Names/counts không phải content lock.

## 4. Structural graph

Canonical paper graph của package là [Year 1 progression dependency graph v1](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md). Presentation correction mới nhất là [Scrollable area-tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md); area-container model 06 và explicit-surface model 07 đã superseded.

```text
New Day info
  ├─ House/Farm entities → first output → Sell / Gift / Record / Keep
  ├─ Rìa Rừng → visible Wild Herb / Hedgerow → Collect / Gift / Record / Keep
  ├─ Mine → deterministic Depth → CP3 Search / first Ore Extract
  ├─ River → condition Catch → Fish record/use
  ├─ Nell context → optional Gift → Nell Heart → 2-AP relief
  └─ Cross-links → Collection / world connection

Conditional Process compatibility remains outside the minimum loop until approved content needs Processed state.
```

Không branch nào cần first harvest để tồn tại. Branch rejoin bằng item allocation, record, target compatibility và optional capability—not một delivery gate chung.

## 5. Current paper baselines

| System | Baseline kế | Comparator/rejected signal | Status |
| --- | --- | --- | --- |
| Day capacity | 6 AP/day fixed for first-playable paper balance | A5 overload stress; A7 surplus guard | `[OWNER SELECTED FIRST-PLAYABLE FRAME]` |
| Season/calendar | 18 days/Season fixed; WD/WS phase arms still open | S12 boundary stress; S15/S16 edge only | `[OWNER SELECTED FRAME]/[WEATHER OPEN]` |
| Farm action grammar | [Rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md): Plant one Seed/plot 1 AP; Watering Can waters one Growing Crop for 1 AP; Rain counts as Watered; Sleep advances growth once; Hand harvests one Mature Crop for 1 AP. `Care` is the daily growth result, not another action. | Board game's global Water Crops/automatic Harvest is a different model. No Project relief, batch Tool upgrade or separate Care card is selected. | `[WORKING PAPER RULE AFTER OWNER REQUEST]` |
| Buy/Sell | 0 AP commit; ordinary sale through Shipping Bin; Gold at end of day; exact quantity preview | 1 AP batch đè A5 và tạo hoarding incentive | `[PAPER BASELINE]/[SOURCE-BACKED]` |
| First-loop Seed source | §6.9: two Turnip Seeds in opening inventory, 0G; Turnip Seed listed without a per-day quantity cap in Commerce during the first paper Season; Field Notes Seed choice at the next New Day after qualifying | §6.7–6.8's two-Seed-per-day restock and 4G wallet are comparison arms, not current source rules | `[WORKING PAPER RULE; PRICES STILL FIXTURES]` |
| Storage | no cap, no perish | `S4` comparator; `P1` perish không carry | `[HYPOTHESIS]` |
| Fishing | atomic one-commit | global persistent xóa A5 scarcity, thêm A7 state | `[HYPOTHESIS]` |
| Mine | deterministic Depth + mixed checkpoint | resource staircase yếu hơn | `[HYPOTHESIS]` |
| Foraging / Wild Herb | [Audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) sets the V0 paper baseline: Wild Herb appears face-up only in the new Rìa Rừng / Woodland Edge Area; New Day draws from five appearance slips (one Herb, four blank) when its one world-item slot is empty; uncollected Herb persists until Collect or Season change. Stack Hand and pay 1 AP to Collect. | No player Search, Forage card, hidden result draw at pickup, or `Grove Batch` gateway. The five-slip rate is this game's adaptation, not a video-game rule. | `[V0 PAPER BASELINE; OWNER-REQUESTED DECISION, NOT PRODUCT LOCK]` |
| Mine/Fishing presentation | abstract Area tableaus; target exact Catch/frontier/route | redundant Entrance/Spot gateway cards | `[DIRECTION]` |
| On-table card shape | square 1:1; immediate verb + pay/get/change; ordered rectangular detail UI; only independent non-action state as status rail (currently Mine Depth) | portrait primary, noun-only root hoặc schema dump | `[DECIDED]` |
| Processing | generic Fresh/Processed sale parity; no premium order; Processor utility deferred until actual content needs Processed state | universal +2G/+1G and artificial Pantry/Shop order rejected | `[OWNER DECIDED]/[DEFERRED]` |
| Projects | No selected Project cards or Work/contribution costs (§6.5). Farm Care, Plant and Hand Harvest remain ordinary actions; Rìa Rừng/Herb does not require a bridge | `Q4` M/B recipes, `B2/B3`, and `X0` are discarded paper comparisons. No replacement is selected by this correction | `[OWNER-DIRECTED DESIGN REJECTION]` |
| Person | First-playable roster: Nell alone (§7.4); `R3` was the earlier owner-selected three-role target and the three names remain canonical paper identities | Nell has a bounded 2-AP same-day credit for 1 Heart (§7.2). Mira/Bram have no validated ability, so are deferred as playable Persons instead of shipping inert cards. | `[OWNER CONFIRMED FIRST-PLAYABLE SCOPE]` |
| Gold scope | `G0`: Seed renewal + crop-profile access/restock are sufficient for the minimum scope; §6.11 checks which of those purchases actually exists in the current first loop | `G1` capability-purchase workstream not opened; long-horizon strategic sink deferred | `[OWNER SELECTED MINIMUM SCOPE; FIRST-LOOP ACCESS GAP]` |
| World navigation | vertical Area order + soft transitions | spatial topology/map metaphor rejected | `[DIRECTION]` |

Không con số AP/cap/fee/price nào ở bảng là luật final.

## 6. Economy/allocation contract

### 6.1. First output

- Sell có thể thắng khi Seed renewal hoặc crop-profile access cần Gold từ ngày kế tiếp; Shipping Bin trả cuối ngày nên sale hôm nay không tài trợ purchase cùng ngày.
- Gift thắng khi Heart có target đủ giá trị; không quy đổi Heart thành Gold cố định.
- Record lần đầu không consume.
- Process chỉ trở thành option khi approved content kích hoạt Processor; khi đó nó thắng nếu exact target/state/timing cần Processed, không chỉ vì slot/AP đang rảnh.
- Keep có option value đọc được khi Weather ảnh hưởng timing hoặc một actual external context đã tồn tại và native inspect của nó nêu category/state/timing; không có global target forecast.

### 6.2. Fresh/Processed

- Fresh Turnip ↔ Turnip Preserve giữ `Crop · Root`.
- Fresh Silver Minnow ↔ Dried Silver Minnow giữ `Fish · River`.
- Fresh Wild Herb ↔ Prepared Wild Herb giữ `Forage · Herb`.
- Processed không thỏa target/record yêu cầu `Fresh` hoặc `Raw`; Fresh không tự thỏa một Processed-specific target nếu approved content sau này thêm target đó.

### 6.3. Rejected Project gates (historical only)

- Water Trough: prior Wood + Ore + Work fixture; rejected card and Water rule.
- Harvest Bench: prior Wood + Stone + Work fixture; rejected card and Harvest/Plant rule.
- Footbridge: historical optional context slot; `X0` was its old no-fee cost comparison, now void after §6.5.
- [PJ-X cost diagnostic 31](../evidence/FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md) compares `X-L`/`X-W` and two stress arms under a rejected premise. Upper Grove has no concrete action or reward; no X recipe is pending selection.
- Contribution/progress giữ qua Sleep/Season/Year.
- Product owner previously chose `Q4`: one Wood + one secondary + 4 Progress for M/B. Section 6.5 rejects both Project designs, so Q4 supplies no current or reserved Work target.
- Historical Produce raw-target tests used Bram's Fresh Turnip Gift fixture (older traces say Shortroot); §7.4 defers Bram from the working first-playable roster. Fish không cần một premium Fresh target trong minimum baseline: Shipping Bin sale có 0 AP commit và trả Gold cuối ngày, trong khi generic Process-then-sell tốn Load 1 AP, chậm hơn và không tăng giá.
- Processed không có universal sale uplift và không có Commerce Pantry/Shop premium trong active baseline. Processor không được tính là minimum economic branch cho tới khi actual recipe/Gift/Project/request cần Processed state; River giữ Catch only.
- Product owner selected `G0`: Gold's complete minimum role is Seed renewal + crop-profile access/restock. Broader long-horizon accumulation value is deferred; the package does not add a replacement sink or claim a complete strategic Gold economy.

### 6.4. Historical Grove Footbridge purpose review — superseded by §6.5 (2026-09-24)

Earlier `B3` was chosen so Projects could demonstrate three reward shapes: maintenance relief, burst relief and an optional world connection. M and B have concrete Farm AP pressure to address. `PJ-X` has a name, a no-fee cost *shape*, and a proposed `Upper Grove` label, but still has no action, source or reward after completion. [Test 31](../evidence/FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md) proves that materials and Work could be paid; it does not establish why a player should pay them.

| Candidate Upper-Grove payoff | Current contract check | Verdict |
| --- | --- | --- |
| Unlock ordinary Wild Herb | The visible Herb already appears in Rìa Rừng without a bridge (§7); moving it behind X would turn a free optional source into a Project gate. | Reject. |
| Add another Wild Herb supply | Needs a second appearance/recovery rule and mainly feeds Nell, whose existing Herb source already supports her optional Gift. No separate Upper-Grove choice is defined. | Do not add solely to justify X. |
| Add a new item, action or destination | None had an authored use or reward. A place name alone does not give the player an action. | Historical counterfactual only. |
| Omit X from first playable | M/B once served as AP-relief assumptions in the old tests. Rìa Rừng, Mine, River and Nell remain independent of X. | Historical `B2` proposal, superseded by §6.5. |

`[SUPERSEDED DESIGN REVIEW]` This review briefly proposed `B2 — Water Trough + Harvest Bench` instead of the older `B3` set. Section 6.5 and the owner's later clarification reject **all three proposed Projects**, including their names, effects and Upper-Grove premise. B2, B3, Q4 and X0 remain historical labels only.

### 6.5. Source-grounding correction — reject the three proposed Projects (2026-09-24)

`[OWNER-DIRECTED SCOPE CORRECTION]` After §6.4, the owner explicitly chose to remove **both farm Projects** from first playable, then identified the deeper failure: their effects were invented from AP-pressure arithmetic without first checking the farming logic of the source video game and board game. This **withdraws §6.4's B2 recommendation** as well as historical B3 for first playable. Do not promote Water Trough, Harvest Bench, Grove Footbridge or Upper Grove as playable cards/Areas under another name. The historical paper identities are retained only to interpret older tests.

Source check:

- In [Stardew Valley's Watering Can rules](https://stardewvalleywiki.com/Watering_Cans), watering more tiles is a **tool upgrade**; [sprinklers](https://stardewvalleywiki.com/Sprinkler) instead water nearby tilled tiles automatically each morning. A “Water Trough” that makes one manual Care action cover two crops is not a demonstrated consequence of a trough. Harvest automation in the video game is associated with a [Junimo Hut](https://stardewvalleywiki.com/Junimo_Hut), not the proposed Harvest Bench.
- In the [official board-game rulebook](https://www.dropbox.com/s/ek7h6zn9ul2gxp1/Stardew%20Rules%20v2%20for%20Download.pdf?dl=0), p. 13, **one Water Crops action advances every planted crop**; a crop leaving the track is harvested as part of that action. Page 20 upgrades a Starting Tool by paying its printed resource. Page 16 gives Buildings explicit printed effects and a Gold/material purchase cost. The current Little Valley Cards model instead charged separate Care and Hand Harvest AP per crop, then invented farm Projects to relieve those charges. That is a distinct adaptation, not a copied rule from either source.

`[FIRST-PLAYABLE CONSEQUENCES]` No Project card, contribution/Work target, Q4 recipe or Upper-Grove reward is active. Ordinary Farm actions and the owner-selected Hand interaction are not deleted by this correction. Existing `M/E/B` completion dates and claims that Water Trough/Harvest Bench make 6 AP/day sufficient **cannot be carried forward**; the A6/S18 frame remains an owner-selected *test frame* while its farm workload must be checked without those effects. Wood/Ore/Stone no longer have their earlier construction sink; Sell, Keep and Field Notes recording remain possible, but their first-playable decision value needs a separate check. Before adding any farming relief, define what Care and Harvest actually do in this card game and which source-game logic the adaptation follows. No replacement tool, sprinkler, building or free AP effect is selected here.

`[OWNER CLARIFICATION — FULL REJECTION]` The owner subsequently clarified that **all three proposed Projects themselves should not exist**: Water Trough, Harvest Bench and Grove Footbridge lack coherent player-facing causes or effects. This revokes their content and naming approval across the design, rather than deferring them to a later release. `Upper Grove`, invented only as the bridge payoff, is likewise not a reserved Area. `Q4`, `X0`, `B2`, `B3` and all M/E/B route dates describe rejected historical fixtures. A future, independently justified construction idea would require a new purpose and design; none is implied or selected here.

### 6.6. Farm action grammar after Project rejection (2026-09-24)

[Farm action grammar and AP rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) is the **working first-playable paper rule**. The existing Watering Can card targets one Growing Crop for 1 AP; Rain supplies the day's watered state to outdoor crops, including later planting; at Sleep each watered crop gains at most one growth. An unwatered crop pauses without dying. After its final growth Sleep it is Mature on the next day; the owner-selected Hand targets one Mature Crop for 1 AP and yields its Fresh item. Plant costs 1 AP per Seed/plot. `Care` now names the successful daily growth resolution, **not** a separate action or card. Mature crops need no Water and wait for Hand. The current paper rule carries crops across Season boundaries rather than silently withering them. Crop duration/yield numbers remain working fixtures.

Under the 2-growth Turnip fixture, two crops can repeat on Sunny days: `2 Harvest + 2 Plant + 2 Water = 6 AP`. With two additional Growing crops, the same immediate-replant plan costs `2 + 2 + 4 = 8 AP`. The player can delay planting or watering, Rain can remove Water cost, and Nell may cover 2 AP **only if** a Heart and her ability are actually available. No Project or automatic discount is inserted. This rerun establishes AP feasibility and the expansion tradeoff; it does not prove Seed affordability, Nell's D7 availability or final crop balance.

### 6.7. Integrated first-week paper test: Farm, River, Mine, Wild Herb, Nell (2026-09-24)

`[COMPARISON TRACE AFTER §6.9]` Daily two-Seed shop stock, 4G opening wallet, and reward-at-restock wording below are test inputs, not the later working first-loop source rule. AP/Gold timing and Herb/Nell branches remain useful comparisons; D13–D14 Stone/Wood actions are a diagnostic of missing purpose.

`[PAPER TEST, NOT A NUMERICAL LOCK]` This trace uses §6.6, §7.2, audit 40 §8, [test 30's Buy/Bin timing and price comparators](../evidence/FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md), [the Field Notes reward timing](CONTENT-MINIMUM-REGISTRY-01.md), and the graph's current River/Mine actions. The **test inputs** are: two Tilled Soil and two Turnip Seeds already in inventory on D1 **plus a separate 4G wallet**; a shop with two Turnip Seeds available at 2G each at every New Day; Turnip sale 4G; one free Runner Bean Seed **at the next Seed restock after** Field Notes records three families; Turnip/Bean require 2/4 growth Sleeps and yield one item; Catch 2 AP, Direct Descent/Search/Extract, Woodlot Collect and Clear/Till 1 AP each, Gift 1 AP → 1 Heart (cap 2). Nell is present D4/D10/D16 and accepts one Wild Herb per present day. These last numbers, stock, schedule and preference are fixtures, **not decisions by the owner**. Buy and Bin commit cost 0 AP; Bin pays only at day end. No Fish/Ore/Wood/Stone sale price is assumed. The River's common Silver Minnow is available for the stated Catch attempts; this is also a conditional fixture, not a guaranteed daily schedule.

Notation: `O` = original Turnip pair; `T` = an extra Turnip; `B` = Runner Bean; `0/2`, `1/2`, `1/4` are growth before Sleep; `M` = Mature. Each arrow gives daily AP before → after the named action or group. For a group of 1-AP actions, **expand every intermediate point**: `6→4 W2` means first Water `6→5`, second Water `5→4`; `4→1 Descend×3` means `4→3→2→1`. `W2` never means one batch action. Nell's two free Harvests instead mean `6→6→6`. Gold in the table is *at the moment of Buy → after end-of-day Bin payout*. A listed Seed purchase occurs before Plant and before that day's payout. Seed stock resets to two Turnip Seeds at each New Day; the free Bean Seed is inventory, not shop stock. Unlisted AP is deliberately left available, not banked.

**All Sunny, early Herb.** The first five-slip Herb is at any one of D1–D4. If it appears before D4, the visible card waits; D4 Collect is therefore valid in every early-slip position. After that Collect, the remaining blanks and next five-slip shuffle produce a **second visible Herb no later than D13** if the world slot stays empty. Its exact day is unknown; the player may leave it on the tableau. The player chooses expansion; it is optional.

| Day | AP in action order; optional opportunity | Crop before → after Sleep | Seed, Gold at Buy → day end; item allocation |
| --- | --- | --- | --- |
| D1 | `6→4 Plant O; 4→2 W2; 2→0 Catch Silver Minnow` | empty → `O 1/2` | 2 opening Seeds → 0; 4G → 4G. Keep Fish; Fish family recorded. Mine waits. |
| D2 | `6→4 W2; 4→1 Descend×3; 1→0 Search Ore` | `O 1/2` → `O M` | 0 Seed; 4G. Depth 3, exposed Ore; extraction waits. |
| D3 | `6→4 Harvest O; Buy 2 Seed (0 AP); 4→2 Plant O; 2→0 W2; Bin both Turnips (0 AP)` | `O M` → `O 1/2` | Shop 2→0; **4G→0G at Buy**, 0G→8G only at day end. Crop family recorded. Herb waits if visible. |
| D4 | `6→4 W2; 4→3 Extract Ore; 3→2 Hand Collect Herb; 2→1 Gift Nell` | `O 1/2` → `O M` | 8G. Keep Ore, consume Herb for Gift. Fish+Crop+Mine make Field Notes ready; Bean/Lemon Balm choice resolves at **D5 New-Day restock**, not during D4. Herb also records Forage. Nell owned, Heart 1. If Herb has not appeared, use the late branch below. |
| D5 | Field Notes chooses one free Bean Seed at New-Day restock (0 AP); `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→0 W2; Bin both` | `O M` → `O 1/2` | Shop 2→0; 8G→4G at Buy→12G after payout. Bean Seed held; keep Nell Heart for the actual expanded peak. |
| D6 | `6→4 W2; 4→2 Clear two plots; 2→0 Till two plots` | `O 1/2` → `O M`; two new Tilled Soil | 12G; Bean Seed held. Clearing, tilling and crop care fill the day. |
| D7 | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→0 W2; Bin both` | `O M` → `O 1/2`; two Tilled Soil | Shop 2→0; 12G→8G at Buy→16G after payout. River, Herb and Mine are passed over on this 6-AP Farm day. |

**Late Herb, all Sunny.** Put the first Herb slip at D5. It persists until D6 Collect; Nell is not present D5–D9, so her first legal Gift is D10. D1–D3 are identical above; D4 has only `6→4 W2; 4→3 Extract Ore`, `O M`, 8G, and makes Field Notes ready from Fish+Crop+Mine without a Herb. The free Bean Seed arrives at D5 New-Day restock. The divergence is:

| Day | AP in action order; opportunity | Crop before → after Sleep | Seed, Gold at Buy → day end; item allocation |
| --- | --- | --- | --- |
| D5 | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→0 W2; Bin both` | `O M` → `O 1/2` | 8G→4G at Buy→12G. Herb visible; no AP to Collect. |
| D6 | `6→4 W2; 4→3 Collect Herb; 3→1 Clear two; 1→0 Till one` | `O 1/2` → `O M`; one Tilled, one Empty Soil | 12G; Herb held for D10, Bean Seed held. Mine/River skipped. |
| D7 | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→0 W2; Bin both` | `O M` → `O 1/2` | 12G→8G at Buy→16G. No Heart exists to subsidize expansion. |
| D8 | `6→4 W2; 4→3 Till last plot; 3→2 Plant free B; 2→1 Water B` | `O 1/2` → `O M`, `B 1/4` | 16G; free Bean Seed consumed. One AP remains. |
| D9 | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→1 Water B; Bin both` | `O M` → `O 0/2`, `B 2/4` | 16G→12G at Buy→20G. Deliberately pause new Turnips to keep the Bean growing; watering both would cost 2 more AP. |
| D10 | `6→5 Gift held Herb; activate Nell (0 AP); 5→5 Catch Silver Minnow using both relief; 5→3 W2 on O; 3→2 Water B; Buy 1; 2→1 Plant T; 1→0 Water T` | `O 0/2, B 2/4` → `O 1/2, B 3/4, T 1/2` | Shop 2→1; 20G→18G at Buy→18G. Herb consumed, first Heart gained then spent, second Fish kept. No Gift or ability was available before D10. |

**Rain D3 and D7, early Herb.** Other days Sunny, with the same early Herb/Nell fixture. D1–D2 and D4–D6 follow the early-Sunny rows. Rain marks all outdoor crops Watered, including those planted later that day. The changed days are:

| Day | AP in action order; opportunity | Crop before → after Sleep | Seed, Gold at Buy → day end; item allocation |
| --- | --- | --- | --- |
| D3 Rain | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→0 Catch Blue Eel; Bin both Turnips` | `O M` → `O 1/2` by Rain | 4G→0G at Buy→8G. Keep Eel; Rain removed two Water uses, so the River opportunity fits. If no Eel opportunity is offered, those 2 AP remain open rather than creating a Catch. |
| D7 Rain | `6→4 Harvest O; Buy 2; 4→2 Plant O; 2→1 Plant free B` | `O M`, two Tilled Soil → `O 1/2, B 1/4` by Rain | 12G→8G at Buy→16G. One AP remains. The Bean enters a day earlier without a third paid Turnip Seed. |
| D8 Sunny | `6→3 W2 on O + Water B; Buy 1; 3→2 Plant T; 2→1 Water T` | `O 1/2, B 1/4` → `O M, B 2/4, T 1/2` | Shop 2→1; 16G→14G at Buy→14G. One AP remains. |
| D9 Sunny | Activate Nell; `6→6 Harvest O` (2 relief); Buy 2; `6→4 Plant O; 4→0 W2 on O + Water B + Water T; Bin both Turnips` | `O M, B 2/4, T 1/2` → `O 1/2, B 3/4, T M` | 14G→10G at Buy→18G. Without the real D4 Gift/Heart, this 8-AP plan cannot fit; delay a Plant or Water instead. |

**What the first week proves and does not prove.** D3 same-day renewal succeeds only because the opening has *both* two free inventory Seeds and 4G for two replacement Seeds stocked that day. D3's 8G payout cannot pay D3's Buy. At under 4G or with missing D3 stock, the player can Bin D3 output and buy on a later stocked day; Farm pauses, while River/Mine/Herb remain available. If stock never returns, repeat farming has a real soft lock; daily two-Seed stock is thus a required **test condition**, not a proven rule. The 2-crop Sunny rhythm consumes all 6 AP on D3/D5/D7, leaving real Fish/Mine/Gift choices on the other days; expansion creates an 8-AP peak. Rain changes the choices without an invented Project. In the early branch, Nell's first Heart is earned on D4 and can be saved for D9, not assumed into D7; in the late branch no Nell action is possible until D10. The first Collect+Gift costs 2 AP and one Herb to save at most 2 AP once. It shifts AP to a crowded day and lets early expansion continue, but does **not** prove a net AP profit or a second activation; that would require another collected Herb and a later Nell Gift. The late D10 Catch is a valid local use of relief, but the common Catch may recur, so it alone does not prove a unique reward.

**Focused extension to S18; early-Sunny branch.** This tests whether the D9 expansion, actual Gold timing, and Season boundary remain coherent. Assume the same daily two-Seed stock; the player spends the first Heart D9 and **chooses to leave the guaranteed second Herb visible** rather than collect/Gift it. That second Herb appears by D13 and is removed at the Season boundary if still uncollected. All omitted Buy/Sell commits cost 0 AP. `B` sale value is deliberately left unpriced and kept. Each row states all AP spent; unused AP is visible.

| Day | AP sequence and crop after Sleep | Gold at Buy → day end; held/sold items and missed choice |
| --- | --- | --- |
| D8 | `6→4 W2 on O; Buy 1; 4→2 Plant free B + T; 2→0 Water B + T` → `O M, B 1/4, T 1/2` | 16G→14G. Free Bean Seed and one 2G Turnip Seed consumed. |
| D9 | Activate saved Heart; `6→6 Harvest O` (2 relief); Buy 2; `6→4 Plant O; 4→0 W4; Bin O` → `O 1/2, B 2/4, T M` | 14G→10G at Buy→18G. The full 8-AP crop plan fits only with this earned Heart. |
| D10 | `6→5 Harvest T; 5→3 W2 on O; 3→2 Water B; Buy 1; 2→1 Plant T; 1→0 Water T; Bin harvested T` → `O M, B 3/4, T 1/2` | 18G→16G at Buy→20G. |
| D11 | `6→4 Harvest O; 4→3 Water B; 3→2 Water T; Buy 2; 2→0 Plant O; Bin O` → `O 0/2, B M, T M` | 20G→16G at Buy→24G. O pauses; paying its two Water costs would exceed 6 AP. |
| D12 | `6→4 Harvest B + T; 4→2 W2 on O; 2→0 Catch common Fish if offered; Bin T` → `O 1/2` | 24G→28G after payout; keep B and any caught Fish. Two extra plots empty. Without an exact River opportunity, 2 AP remain unused. |
| D13 | `6→4 W2 on O; 4→1 Descend×3; 1→0 Search Stone` → `O M` | 28G. Depth 6, Stone exposed; no Stone item yet. |
| D14 | `6→4 Harvest O; 4→3 Extract Stone; Buy 1; 3→2 Plant T; 2→1 Water T; 1→0 Collect Wood; Bin O` → `T 1/2` | 28G→26G at Buy→34G after payout. Keep Stone and Wood for the purpose check; no Project accepts either. |
| D15 | `6→5 Water T`; five AP unused → `T M` | 34G. Repeat Fish or Mine progress is possible, with no currently validated distinct use for another Fish/material. |
| D16 | `6→5 Harvest T; Bin T`; five AP unused → empty plots | 34G→38G after payout. Nell appears and a second Herb is visible by now. Collect+Gift would cost 2 AP and give one bankable Heart; this route declines that optional exchange. |
| D17 | No paid action; six AP unused → empty plots | 38G. This is a content/decision-density signal, not an AP shortage. |
| D18 | `6→5 Plant one bought T; 5→4 Water T` → `T 1/2` | Shop 2→1; 38G→36G at Buy/day end. T persists into D19 under §6.6; no automatic Season wither or harvest. |

The late-Herb branch needs only its unresolved boundary carried forward: D11 `W2 on O + Water B + Water T = 4 AP` makes all four Mature D12; D12 `Harvest four = 4 AP; Buy/Plant/Water one T = 2 AP` fits 6 (18G→16G at Buy, three Turnips binned for +12G, Bean kept: 28G end). D13 Water T (1 AP) makes it Mature D14; D14 Harvest T (1 AP) and Bin yields 32G. D15–D17 may be left idle; D18 Buy/Plant/Water one T (2 AP, 32G→30G) carries `1/2` to D19. With the first Herb collected D6, the next five-slip cycle places a second visible Herb by D11; a D16 Collect+Gift is possible but is not selected in this route, so no second Heart is inferred. For the Rain arm, D10 Water O/B and the Mature T plus a chosen replant fit within 6; D11 brings a four-item Harvest collision and the player can harvest without immediate full replant. This is a choice, not a Season deadline. Further Rain orderings, actual Catch recurrence, Nell schedule and shop restock require their own inputs; the traced arms do not assign probabilities to them.

`[RESULT / NEXT DECISIONS]` The conditional week has no permanent AP lock: mature crops wait, unwatered crops pause, Herb persists and missed common Catch can recur. The one-Seed Bean reward is usable D8; Seed/Gold are solvent under the explicitly stated stock/wallet fixture. The opening two Seeds **plus** 4G, daily stock and Nell's D4/D10/D16 calendar are unselected dependencies, so this is not a universal balance pass. The early all-Sunny week needs **14 separate Water gestures** before any extra crop is planted; D9 alone needs four. This is a physical interaction burden despite valid AP. In that branch Gold reaches 36G by D18 despite keeping Bean, while Wood, Ore and Stone have only Record/Keep or unpriced Sell and no active spending target. Their acquisition can become a one-time curiosity; no Project or reward should be created solely to absorb them. Section 6.8 tests the opening wallet/stock dependency and the cost of retaining the material actions. Do not promote any fixture price, schedule or restock rule from this trace without that decision.

### 6.8. Kiểm nguồn Seed và vòng đầu không có Gold sẵn (2026-09-24)

`[COMPARATOR SAU §6.9]` Các hàng stock 0/1/2 theo ngày dưới đây kiểm hậu quả của giới hạn hàng, không phải luật shop đang dùng. Lịch 0G/AP vẫn chạy với Turnip Seed luôn niêm yết; Field Notes đến New Day kế sau thay vì sự kiện restock.

`[PAPER TEST; CHƯA CHỐT VÍ/HÀNG/GIÁ]` [Registry 01 §8.1](CONTENT-MINIMUM-REGISTRY-01.md) đòi Turnip có đường Seed restock xác định, nhưng **chưa chọn ngày hoặc số lượng**; Field Notes chỉ cho chọn Bean/Lemon Balm Seed **tại một lần restock sau khi** ghi đủ 3/4 nhóm. §6.7 dùng shop restock 2 Turnip Seed mỗi New Day. Vì D4 mới lấy Ore và ghi đủ nhóm, Bean Seed đến **D5 restock**, vẫn trước lúc gieo D8. Không được coi reward là vật phẩm rơi tức thì D4. Bảng sau thay đúng một đầu vào để biết điều gì thật sự cần cho vòng chơi; giữ Turnip Seed 2G, Turnip bán 4G và Shipping Bin trả cuối ngày như fixture của [test 30](../evidence/FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md).

| Đầu vào so sánh | D3 sau khi hái hai Turnip | Ngày trồng lại / trạng thái | Kết luận |
| --- | --- | --- | --- |
| 2 Seed trong túi + 4G; shop có 2 Seed D3 | Mua 2 với 4G trước payout; Plant 2 + Water 2 vừa đủ 6 AP cùng Harvest 2 | D3 trồng lại, D5 hái; ví cuối D3 là 8G nếu bán cả hai | §6.7 hợp lệ, nhưng đây là lịch **nhanh nhất**, không phải điều kiện để Farm tồn tại. |
| 2 Seed trong túi + **0G**; shop có 2 Seed D4 | D3 Harvest 2 tốn 2 AP; Bin 2, cuối ngày nhận 8G | D4 mua 2 bằng 4G, Plant 2 + Water 2 tốn 4 AP; D6 hái | Không nghẽn. D3 mở 4 AP cho Mine/Herb; D4 còn 2 AP cho Nell hoặc việc khác. Cần Seed có hàng D4. |
| 2 Seed trong túi + 4G; D3 hết hàng, D4 có 2 | D3 vẫn Harvest 2/Bin 2; ví cuối ngày 12G | D4 mua/trồng/tưới như trên; D6 hái | Tiền mở đầu **không sửa được** ngày shop hết hàng; thiếu stock chỉ làm chậm một ngày nếu D4 chắc chắn có hàng. |
| 2 Seed trong túi + 4G; D3 chỉ có 1, D4 có ít nhất 1 | D3 mua/trồng/tưới 1 sau Harvest 2: 4 AP; ví 4→2G tại Buy→10G cuối ngày nếu bán cả hai | D4 mua/trồng/tưới cây thứ hai và tưới cây D3: 3 AP; hai cây chín lệch D5/D6 | Có nhịp lệch và thêm AP cho nhánh khác; không phải soft lock. |
| Không có lần restock nào sau khi hết Seed | Có thể hái/bán nhưng không mua lại được | Farm dừng sau vụ đầu hoặc sau Seed tồn cuối | **Lỗi nguồn Seed thật**; trái với đường restock xác định trong registry. Không dùng doanh thu, Nell hay Project để che lỗi này. |

Như vậy **2 Seed mở đầu + 4G không phải điều kiện tối thiểu chống soft lock**. Hai Seed mở đầu đủ tạo output đầu tiên; với giá fixture 4G mỗi Turnip, người chơi chỉ cần **bán một trong hai** vào Bin D3 để có 4G cuối ngày, mua hai Seed D4 và giữ lá Turnip còn lại. Bán cả hai như lịch dưới đây cho thêm ví, không phải điều kiện sống còn. Ngược lại, muốn **bắt buộc** giữ nhịp gieo lại cùng D3 thì phải có sẵn 4G hoặc hai Seed dự phòng *và* hàng D3. Đây là hai mục tiêu thiết kế khác nhau. Nếu người chơi giữ cả hai Turnip, chúng còn trong túi và vẫn có thể đưa vào Bin ở một ngày sau; không biến lựa chọn Keep thành khóa vĩnh viễn. Nếu shop không có ngày quay lại xác định, đó mới là rủi ro cấu trúc. `G0` chỉ cam kết Gold dùng cho Seed/profile, không buộc nhịp D3/D5/D7.

**Tuần 0G + hai Seed, toàn nắng; Herb đầu xuất hiện D1–D3, Nell fixture D4.** Shop restock 2 Turnip Seed mỗi New Day **chỉ là đầu vào so sánh**. Fish common hiện D1. AP nhóm 1 điểm được hiểu theo quy ước ở §6.7; không có di chuyển tốn AP. D3 lấy Ore tạo nhóm Fish+Crop+Mine; Field Notes chọn một Bean Seed tại D4 restock. Bán hai Turnip D3 và D6, giữ Fish/Ore, tặng Herb.

| Ngày | AP trước→sau, hành động; cây sau Sleep | Seed, Gold đúng lúc mua → cuối ngày; cơ hội khác |
| --- | --- | --- |
| D1 | `6→4 Plant 2; 4→2 Water 2; 2→0 Catch Fish` → hai Turnip `1/2` | Hai Seed mở đầu→0; 0G. Giữ Fish. |
| D2 | `6→4 Water 2; 4→1 Descend 3; 1→0 Search Ore` → hai Turnip Mature | 0G; Ore hiện ra, chưa lấy. |
| D3 | `6→4 Harvest 2; 4→3 Extract Ore; 3→2 Collect Herb; 2→0 Clear 2; Bin 2` → hai plot Tilled, hai plot mới Empty | **0G lúc D3**, Bin trả **8G cuối D3**. Giữ Ore, Herb; Field Notes đủ 3 nhóm. Nếu Herb chưa hiện, còn 1 AP sau Clear. |
| D4 | New-Day restock: chọn Bean Seed miễn phí; Buy 2 Turnip Seed 8→4G; `6→4 Plant 2; 4→2 Water 2; 2→1 Gift Herb cho Nell; 1→0 Till 1` → hai Turnip `1/2` | Bean Seed giữ trong túi; Nell sở hữu, 1 Heart. Nếu Herb mới hiện D4, thay Till bằng Collect rồi Gift (`2→1→0`); Till chuyển D5. |
| D5 | `6→4 Water 2; 4→3 Till plot thứ hai` → hai Turnip Mature | 4G; 3 AP còn cho nhánh khác. Không tự thêm Mine material để lấp AP. |
| D6 | `6→4 Harvest 2; 4→3 Plant Bean; 3→2 Water Bean; Bin 2` → Bean `1/4` | 4G trước payout→12G cuối D6; 2 AP còn, hai plot gốc trống. |
| D7 | Buy 2 Turnip Seed 12→8G; `6→4 Plant 2; 4→2 Water 2; 2→1 Water Bean` → Turnip `1/2`, Bean `2/4` | Một AP còn; không cần Nell để giữ cả ba cây tiến triển. |

D8 Water 2 Turnip + Bean = 3 AP, hai Turnip Mature D9 và Bean `3/4`. D9 cần `Harvest 2 + Plant 2 + Water 2 Turnip + Water Bean = 7 AP`. Với Heart **đã nhận D4**, Nell miễn 2 AP Harvest; người chơi trả 5 AP, mua 2 Seed từ 8G→4G trước khi Bin hai Turnip và nhận 8G cuối ngày (12G). Nếu Herb đầu chỉ đến D5, người chơi Collect bằng 1 AP rảnh D5, giữ tới Nell D10; **D9 chưa có Heart**, nên phải lùi một Water hoặc một Plant. Không có lỗi luật. Nếu Rain D7, ba Water hôm đó tự có và 4 AP sau Plant 2 có thể dành cho một Blue Eel Catch 2 AP **nếu card xuất hiện**. Rain D3 trong nhánh 0G không giúp gieo lại vì chưa có tiền trước payout; nó chỉ mở cơ hội khác. Mưa không tự tạo Seed hay đổi thời điểm Bin trả tiền.

`[KHUYẾN NGHỊ GIẤY, CHƯA PHẢI OWNER LOCK]` Ưu tiên **hai Seed mở đầu, 0G** cho lần thử vòng đầu kế tiếp, bên cạnh nhánh 4G nhanh ở §6.7: bán một Turnip đã đủ mua hai Seed D4, và D3 có chỗ cho Mine/Herb. Dùng shop restock 2 Turnip Seed mỗi New Day **chỉ làm fixture** cho lần thử đó; không nâng daily restock thành luật đã chốt để giữ nhịp D3. Điều kiện cần khóa sau phép thử là lần restock Turnip tiếp theo có ngày biết trước và đủ hàng để người chơi tiếp tục; Bean/Lemon Balm reward phải gắn với *lần restock sau khi* Field Notes đủ nhóm. Nếu thiết kế muốn ngày Harvest và ngày Plant trùng nhau thường xuyên, cần chọn tiền/hàng ban đầu có chủ ý vì nó làm tăng các ngày Farm kín 6 AP.

**Vai trò vật liệu và Water.** Ore đầu tiên trong hai lịch có giá trị cụ thể: lấy nó ghi nhóm Mine thứ ba và mở lựa chọn Seed của Field Notes. Sau Ore đó, lấy Stone tại CP6 và Wood ở Woodlot tốn AP nhưng hiện không mở nhóm Journal mới, Gift hợp lệ, công thức, hay mục đích dùng đã chọn; Sell chưa có giá được duyệt. Do đó đừng xem hai hành động D14 §6.7 là một vòng khai thác có thưởng; chúng là phép đo khoảng trống. Đặt giá Sell cao chỉ để tạo lý do khai thác có thể làm Ore/Stone thành đường kiếm tiền thay Farm, cần so giá/AP trước khi làm. Với luật Water từng cây, nhánh 4G phải chạm Can **14 lần D1–D7**, nhánh 0G vẫn **12 lần** sau khi trồng Bean; thay ví chỉ giảm hai lần lặp chứ không giải quyết cảm giác thao tác. Không đổi phí Water hoặc thêm Project từ phép đếm này. Chỉ khi có giao diện tương tác mới đo được số lần chọn lại Tool, thời gian và lỗi chạm với 2 rồi 4 crop. Mỗi crop vẫn trả 1 AP; bảng AP chưa chứng minh cảm giác thao tác đạt.

### 6.9. Luật giấy đang dùng cho vòng đầu sau kiểm nguồn (2026-09-24)

`[WORKING PAPER DECISION; NOT AN OWNER NUMERICAL LOCK]` Giữ nguyên Plant/Water/Sleep/Hand ở §6.6 và Herb/Nell ở §7.2/audit 40. Sửa đúng ba chỗ mà §6.7–6.8 lộ ra: nguồn Turnip Seed không nên phụ thuộc một số phiếu hàng mỗi ngày chưa có căn cứ; Field Notes không thể chờ “restock” nếu không có lịch restock thật; vật liệu lặp lại chưa có mục đích chơi. Các bảng 4G và 2 Seed/ngày vẫn là **nhánh so sánh**, không bị xóa khỏi lịch sử.

1. **Mở đầu/Commerce.** Người chơi bắt đầu với hai Turnip Seed trong túi và 0G trong ví. Trong **mùa giấy đầu tiên**, Commerce luôn niêm yết Turnip Seed khi người chơi mở shop, không có giới hạn số Seed mua mỗi ngày và không rút phiếu restock cho mặt hàng này. Mua vẫn 0 AP, chỉ dùng Gold **đã có ngay lúc mua**; Shipping Bin vẫn trả cuối ngày. `2G/Seed`, `4G/Turnip` và hai plot mở đầu còn là fixture để kiểm nhịp. [Pierre's General Store](https://stardewvalleywiki.com/Pierre%27s) cho thấy một danh mục Seed theo mùa, thay vì một luật “hai Seed/ngày”; Commerce luôn mở và không giới hạn lượng trong **game thẻ này** là phép trừu tượng riêng, không gán cho video game. Điều kiện Season tiếp theo của Seed vẫn cần thiết kế cùng crop eligibility; luật này chỉ đủ cho D1–D18.
2. **Field Notes.** Khi ghi đủ bất kỳ 3/4 nhóm, đánh dấu lựa chọn Seed đang chờ. **New Day kế tiếp**, người chơi chọn đúng một Runner Bean hoặc Lemon Balm Seed, nhận vào túi với 0G/0 AP; lựa chọn còn lại vẫn có thể quay lại từ nguồn profile sau, chưa chọn ngày. Đây là thay đổi có chủ ý so với fixture “tại restock” của registry: nó giữ nhịp D3→D4 ở lịch 0G và D4→D5 ở lịch 4G nhưng không buộc phải chế một restock Turnip hàng ngày. Không tạo Seed ngay giữa hành động ghi nhóm. Mỗi Field Notes reward xảy ra một lần, không lặp mỗi New Day.
3. **Mine/vật liệu trong vòng đầu.** CP3 Search → một Exposed Ore → Extract vẫn chơi được; Ore đầu tự ghi nhóm Mine Material và có thể Sell/Keep như item thường. Seam Ore này **không tự refresh** trong first-loop paper scope sau Extract. Sau CP3, không bày Direct Descent tiếp như một nút tiêu AP khi chưa có checkpoint/reward kế đã authored; Depth 3 vẫn lưu, Mine không reset hay kết thúc save. Woodlot Collect, CP6 Stone và việc farm Ore lặp lại **không tính là hành động có thưởng của vòng giấy đầu**: không bày chúng như target đang mở trong phép thử này khi chưa có công dụng được chọn. Tên Wood/Stone và các thử nghiệm checkpoint cũ vẫn là nguồn cho nội dung sau, không phải Project bị đổi tên. [Stardew gốc](https://stardewvalleywiki.com/Copper_Bar) dùng Ore để luyện bar và nâng Tool; [Stone](https://www.stardewvalleywiki.com/Stone) dùng cho công thức/công trình. Cập nhật CG-11: đã duyệt Ore dùng trực tiếp nâng Tool; fixture chưa có phí/hiệu ứng nâng được ghép vào loop. Công trình vẫn chưa được nhập vào V0. Trong lịch §6.7, D13–D14 lấy Stone/Wood chỉ là nhánh chẩn đoán, không còn là tiến trình first-loop đề xuất.
4. **Thao tác Water trong giao diện sau này.** Giữ **1 AP cho từng crop** và Rain như §6.6. Giả thuyết giao diện: chọn Watering Can một lần rồi lần lượt chạm từng Growing Crop hợp lệ; mỗi lần chạm vẫn là một commit riêng, trừ 1 AP và đánh dấu đúng crop đó. Đổi Tool/cancel không tốn AP. Đây chỉ giảm việc chọn lại Can 12–14 lần, không gom Water thành một hành động hay giảm AP. [Watering Can cơ bản của Stardew](https://stardewvalleywiki.com/Watering_Cans) tưới từng ô; mở rộng phạm vi thuộc nâng cấp Tool. Không suy ra rằng một lần chọn Can trong giao diện game thẻ là nâng cấp. Kiểm cảm giác với 2 và 4 crop khi có giao diện tương tác; không cần bộ thẻ giấy.

**Kiểm nhanh không dùng restock giả:** trong lịch 0G §6.8, D3 bán **một** Turnip giá fixture 4G thì D4 có đúng 4G mua hai Seed đang niêm yết, còn giữ một Turnip. D6 bán một Turnip nữa sẽ cấp 4G cho hai Seed D7. D3 lấy Ore hoàn tất Fish+Crop+Mine, nên Bean/Lemon Balm Seed đến D4 New Day và có thể gieo D6. Không có ngày chờ shop; thiếu Gold chỉ khi người chơi chủ động giữ tất cả output, và họ vẫn có thể đưa một Turnip giữ trong túi vào Bin cuối ngày để mua vào hôm sau. Với giá sau này, `giá bán Turnip ≥ giá Seed` là điều kiện để bán **cả hai** đủ tiền mua lại hai Seed qua mỗi chu kỳ; muốn bán **một** mà mua hai thì cần `giá bán Turnip ≥ 2 × giá Seed`. Fixture `4G/2G` thỏa cả hai; chưa chọn giá thật.

`[RANH GIỚI]` Shop ổn định giải quyết nguồn Seed, không làm Nell/Herb xuất hiện đúng ngày, không tạo mục đích cho Stone/Wood, và không chứng minh Water vui tay. Một Mine chỉ tới Ore đầu đủ kiểm tương tác Depth/Search/Extract và mở Field Notes; chiều sâu Mine sau đó cần phần thưởng tự thân trước khi thành target V0. Không thêm Water Trough, Harvest Bench, Grove Footbridge, Project Work hoặc nguồn Gold giả.

### 6.10. Nhánh mưa + Herb muộn (2026-09-24)

`[PAPER TRACE, NOT PLAYER-FEEL EVIDENCE]` Dùng đúng §6.9: 0G, hai Seed mở đầu, Turnip Seed luôn bán 2G, Turnip bán 4G và Bin trả cuối ngày. Fixture: Rain D3/D7; Herb đầu D5 rồi còn đó tới khi nhặt; Nell có mặt D4/D10; Common Fish D1; Blue Eel có thể Catch vào ngày mưa D3/D7. Bốn plot tối đa chỉ để ép một ngày Water đông, không phải số plot đã khóa. Không thêm Mine reward sau Ore đầu.

| Ngày | AP và quyết định đáng kiểm | Gold sau ngày; crop sau Sleep |
| --- | --- | --- |
| D1–D2 | D1 Plant 2 + Water 2 + Catch Common Fish = 6. D2 Water 2 + Descend 3 + Search Ore = 6. | 0G; hai Turnip Mature D3. |
| D3 Rain | Harvest 2 + Extract Ore + Catch Blue Eel + Clear 1 = 6; Bin cả hai Turnip. Fish+Crop+Mine đã ghi đủ ba nhóm; chưa có Herb. | 8G **sau** payout; không thể dùng khoản này mua Seed trong D3. |
| D4 | Nhận một Bean Seed từ Field Notes; Buy 2 Turnip Seed (0 AP), Plant 2 + Water 2 + Clear 1 + Till 1 = 6. Nell hiện nhưng chưa thể Gift. | 4G; hai Turnip `1/2`. |
| D5–D6 | D5 Water 2 + Collect Herb + Till 1 = 4, giữ Herb. D6 Harvest 2 + Plant Bean + Water Bean = 4; Bin hai Turnip. | 12G sau D6; Bean `1/4`; hai plot còn trống đã Tilled. |
| D7 Rain–D8 | D7 Buy/Plant 2 Turnip = 2 AP; Rain Water cả Bean và Turnip mới. Catch Blue Eel thêm 2 AP **chỉ nếu chọn opportunity đó**. D8 Water ba crop = 3 AP. | 8G; hai Turnip Mature D9, Bean `3/4`. |
| D9 | Harvest 2 + Buy/Plant 2 + Water Bean + Water **một** Turnip = 6; Bin hai Turnip. Cây Turnip kia được phép tạm dừng. | 12G sau payout; Bean Mature D10, Turnip lần lượt `1/2` và `0/2`. |
| D10 | Gift Herb cho Nell = 1 AP, nhận một Heart; kích hoạt ngay (0 AP). Harvest Bean + Buy/Plant 2 Turnip + Water bốn crop có tổng phí gốc 7 AP; relief tự trừ 2, người chơi trả 5 AP còn lại. | 8G sau Buy; Bean item được giữ; hai Turnip cũ thành Mature/`1/2`, hai Turnip mới `1/2`. |

D10 tổng phí gốc là **8 AP** gồm Gift 1 + Harvest Bean 1 + Plant 2 + Water 4. Gift tạo Heart trước khi dùng, nên 2 AP relief áp vào Harvest Bean và Plant đầu tiên; 6 AP thường đủ trả phần còn lại. Nếu không dùng Nell, cần hoãn hai AP hành động; không có crop nào chết hay khóa vĩnh viễn. Đây là giá trị Nell có điều kiện trên một ngày mở rộng bốn crop, không phải bằng chứng rằng người chơi muốn duy trì bốn crop hoặc Water từng cây đã dễ chịu. Cảm giác thao tác Water vẫn mở cho tới khi có giao diện tương tác để quan sát.

### 6.11. Kiểm công dụng Fish, Ore và Gold sau tuần đầu (2026-09-24)

**Cập nhật 2026-09-25:** bảng và lập luận Field Notes bên dưới là trace lịch sử. [CG-10 trong §10](ON-TABLE-CARD-SHAPE-DECISION-09.md) chốt Fish dùng để bán qua Bin, giá chưa chọn; cải thiện fishing để sau và giữ loop Farm. CG-11 đã duyệt Ore nâng Tool trực tiếp, chưa cần Furnace–Coal–Bar; [bảng đối chiếu video game và board game](ORE-USE-REFERENCE-AND-PROPOSAL-01.md) ghi thông số nguồn. CG-12 đã chọn giữ loop V0 và chuyển hiệu ứng tương đương; CG-13 làm rõ tác dụng nâng theo video game gốc, rút đề xuất miễn AP/+Ore; reference §7 ghi hướng hiện hành. Fixture chưa có Upgrade. Bách Khoa hiện không thưởng Seed.

`[CURRENT FIRST-LOOP SCOPE CHECK]` Chỉ tính target đã có trong §6.9–6.10 và các owner decision hiện hành. Các ô `Gift`/`Process` có điều kiện trong registry là tương thích kiểu item, **không phải** một người nhận hay công thức đang hoạt động. Không dùng Project, order, premium hoặc giá Sell chưa chọn để gán thêm lợi ích.

| Thứ người chơi lấy | Công dụng có thể chứng minh trong vòng đầu | Giới hạn sau mốc đầu |
| --- | --- | --- |
| Silver Minnow đầu tiên | Ghi nhóm Fish cho Field Notes; Catch 2 AP cạnh tranh với Plant/Water/Mine. Nếu đã có Crop + Mine, Fish là đường thứ ba không cần chờ Herb. | Catch lặp lại chỉ còn item có thể Keep hoặc đưa vào Bin; giá Fish chưa chọn, Nell không có Fish Gift được xác nhận và `FI-M` vẫn là giả thuyết. Không gọi Catch lặp là một vòng thưởng đã hoàn chỉnh. |
| Blue Eel khi Rain | Một Catch có điều kiện thời tiết thật; ghi nhận đúng danh tính/điều kiện Rain, có thể dùng AP Rain giải phóng từ Water. | Chưa có reward hoặc target đã chọn yêu cầu Blue Eel/Rain record; sau khi nhóm Fish đã ghi, nó chưa mở thêm nhánh. Nếu Rain không đến, không khóa Field Notes hay Farm. |
| Ore đầu ở CP3 | Descend 3 + Search 1 + Extract 1 = 5 AP để chắc chắn ghi nhóm Mine Material. Trong lịch Fish D1, Harvest Crop D3, Ore là nhóm thứ ba và Seed thưởng đến D4, không phụ thuộc Herb xuất hiện. | Nếu người chơi đã ghi Fish + Crop + Forage bằng Herb, Field Notes đủ ba nhóm **trước Ore**; Ore không còn mở reward ấy. Sell/Keep hợp lệ về loại item nhưng giá Ore và mục đích giữ chưa chọn. Không có second Ore/Stone/paid Depth reward trong vòng đầu. |
| Gold từ Turnip | Với fixture 2G/Seed và 4G/Turnip, bán một Turnip D3 trả cuối ngày đủ mua hai Seed D4; bán hai và mua hai tạo chênh lệch +4G mỗi chu kỳ. Đây là tác dụng thanh khoản, không phải lợi nhuận đã khóa. | Trong §6.9 chỉ Turnip Seed có nguồn mua xác định. Seed Bean/Lemon Balm đầu từ Field Notes **miễn phí**; nguồn/giá mua lại hoặc profile chưa chọn. Vì vậy nhánh hiện tại chứng minh **Gold để tái gieo Turnip**, chưa chứng minh vế `profile access` của phạm vi G0, càng chưa chứng minh Gold có ích lâu dài. |

Hai nguồn lấy nhóm thứ ba thực sự thay thế nhau: sau Fish + Crop, nhặt Herb sớm tốn 1 AP và mở Field Notes mà không cần Mine; đi Mine tốn 5 AP nhưng không phải chờ Herb ngẫu nhiên. Ore vì thế là đường bảo đảm tiến độ, **không** là điều kiện bắt buộc hay một vòng khai thác lặp. Tương tự, Fish có thể là nhóm thứ ba nếu người chơi đã có Crop + Mine, nhưng không chứng minh nhu cầu Catch thứ hai. Ở D10 §6.10, người chơi còn 8G sau khi mua Seed và không có khoản mua nào khác đã đặt giá; đây là giới hạn nội dung được `G0` chấp nhận, không phải lý do thêm phí tiêu Gold.

`[VERDICT]` Lịch D1–D10 chứng minh nguồn Seed và AP có đường đi hợp lệ; nó **không** chứng minh Mine/Fishing có lựa chọn lặp lại sau lần ghi nhóm đầu hoặc đủ mật độ quyết định cho cả 18 ngày. Giữ First Ore và First Fish là những nhánh mở Field Notes có thể thay nhau; không trình bày repeated Catch/Descent hay tích Gold như tiến trình V0 đã hoàn tất. Trước khi khóa nội dung một mùa đầy đủ, cần xác định một mục đích có nguồn gốc rõ cho Catch/Ore tiếp theo **nếu** muốn chúng lặp trong cùng mùa, và nguồn/giá profile Seed **nếu** muốn Gold mua profile trong vòng đó. Nếu chưa có các mục đích ấy, chỉ tuyên bố phép thử vòng đầu đạt về AP/nguồn; 18 ngày/mùa vẫn là khung cân bằng giấy chưa được chứng minh đủ nội dung. Không dùng filler để kéo dài lịch.

## 7. Person fixture

| Person | Kernel | Gift tag | Safety boundary |
| --- | --- | --- | --- |
| Mira | historical A Preview | `Fresh · Forage · Berry` | no validated V0 target under visible Grove; no reroll |
| Nell | 2-AP same-day relief (§7.2); historical C Hold retired | `Fresh · Forage · Herb` fixture | spend 1 Nell Heart, 0 AP, once/day; next payable AP costs consume up to 2 credit; Gift and all other paid actions qualify; unused credit expires at Sleep |
| Bram | historical K Divide/Focus | `Fresh · Crop · Root` | total Progress conserved; no Q4 saving demonstrated |

Product owner previously chose `R3 — A+C+K` as the minimum functional-roster direction and later approved the three names/role assignments at paper level. The names remain selected, but §7.4 rechecks the first-playable count against current rules. Nell's V0 paper ability is §7.2; Mira A and Bram K are historical assignments without playable V0 effects. Only Nell's Gift tag and appearance schedule remain active fixtures. E/J remain conditional because their printed targets are not active in the current minimum, and D/I/M lack sufficient native grammar.

After the [Wild Herb appearance decision in audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md), the owner correctly rejected Nell's old C Hold as a functional V0 ability. The later crop-only Harvest Assist attempt in §7.1 was also withdrawn. Section 7.2 now sets the owner's original general AP-relief idea as Nell's V0 paper ability, counted in AP points rather than action count.

[Heart/Gift paper test 32](../evidence/FIRST-PLAYABLE-HEART-GIFT-CADENCE-PAPER-TEST-32.md) supplied `+1 Heart/Gift`, `−1 Heart/use`, cap 2 and same-day use as a working fixture; §7.2 specifies Nell's `+1/−1` and same-day use for V0 paper play. [Bram purpose audit 33](../evidence/FIRST-PLAYABLE-BRAM-K-PURPOSE-AUDIT-33.md) finds a purpose gap under Q4: 2 Progress focused on one Project duplicates normal Work, while splitting 1+1 across even M/B requirements saves no Work. The earlier user decision that K **does not increase total Progress/AP** remains historical; acceleration counterfactuals are not selected. PJ-X without a concrete reward cannot be counted as a target. Mira/Bram Heart cadence is outside the current first-playable scope (§7.4).

[Bram functional-role review 34](../evidence/FIRST-PLAYABLE-BRAM-FUNCTIONAL-ROLE-REVIEW-34.md) was the prior keep-Bram V0 direction. Existing V0 actions do not support a distinct, Heart-worthy replacement; the requested scope review in §7.4 now defers his playable card. Do not treat old K as an implementation-ready effect.

[Mira/Nell phase test 35](../evidence/FIRST-PLAYABLE-MIRA-NELL-TARGET-GIFT-PHASE-TEST-35.md) historically gave Nell a conditional Hold Open use under one-day Herb expiry; [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) supersedes that expiry, so the old use is no longer valid. An appearance alone does not supply her Gift item. Mira can get Heart from deterministic Berry, but A still needs an actually hidden and decision-changing target; the current River Catch and M/B Mine sources are already previewed. Neither Person's target count or Heart cadence is locked.

[Grove contract 36](../evidence/FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) historically superseded that test's paid-Search case. Its D10 Gift → D13 Hold → D14 Collect example used one-day Herb expiry and is superseded by [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md). Mira's proposed A preview still has **no validated V0 target**; do not hide exact Herb or reuse already free River/Mine information simply to feed her ability. Person numerical locks remain open.

[Cadence test 38](../evidence/FIRST-PLAYABLE-WILD-HERB-CADENCE-PAPER-TEST-38.md) finds that a five-day Herb clock can still shift Nell's first Gift from D4 to D16 across phases; sparse or empty S18 inputs can leave her unowned. That clock is a comparator, not a selected generator. [Role test 39](../evidence/FIRST-PLAYABLE-MIRA-BRAM-ABILITY-OPTIONS-39.md) finds a conditional Mira Catch AP-relief option and weak Bram Mine-relief option; neither is selected, and the old A/K effects remain unvalidated.

[Grove ontology audit 40](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) records the owner's comprehension challenge and later direct-item/Hand correction. `Grove Batch` was approved as a historical paper source-card label, but the current Wild Herb interaction does not require that gateway or a Grove Area. “Small forest” was only a thematic gloss. The earlier `G-V` AP/phase cases remain historical conditional comparisons.

The original video game has visible ground forage that may appear overnight and persist until later cleanup; it is not forest-only across every item. For **our Wild Herb**, [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) chooses a wooded-only Area, Rìa Rừng / Woodland Edge, and bounded automatic New-Day appearance. Scrolling remains UI navigation. The visible item itself receives Hand; 1 AP Collect moves it to inventory. The card may remain on the tableau through Sleep until Season change. This replaces the prior Sleep-expiry fixture and removes Nell C's earlier Hold use.

### 7.1. Withdrawn Nell replacement: Harvest Assist (2026-09-24)

`[WITHDRAWN — NOT A V0 ABILITY]` Harvest Assist would have spent 1 Nell Heart to make two Hand→Harvest actions free while leaving Hand→Wild Herb Collect at 1 AP. The owner challenged that unsupported difference for the same Hand tool. In the proposed first-use route, collecting the Herb and gifting it to Nell cost 2 AP and the Herb item; the effect saved exactly 2 Harvest AP. Its claimed payoff depended on a separate, conditional D11 Fish opportunity, not a reliable Person role. Do not print, balance or implement this effect.

This withdrawn crop-only effect is not Nell's current ability. Section 7.2 supplies the current general AP rule without a Crop/Herb exception.

### 7.2. Nell V0 paper ability — 2 AP relief (2026-09-24)

`[V0 PAPER RULE SELECTED AFTER OWNER REQUEST TO DECIDE]` Once Nell is owned, spend **1 Nell Heart and 0 AP**, at most **once per day**, to gain **2 AP of relief for the rest of that day**. Starting with the next action that has a positive payable AP cost, automatically apply as much remaining relief as possible; pay any uncovered cost from the normal daily AP pool. Actions already at 0 AP spend no relief. Unused relief expires at Sleep and never stacks across days. There is no Crop/Herb or system exception: Watering Can, Plant, Hand→Crop, Hand→Wild Herb, Gift and Catch all qualify. Rejected Project Work has no active target. Items, materials, target conditions and outputs stay unchanged. This does not alter the ordinary 6-AP daily allowance; it can make up to 2 additional AP of paid actions affordable that day.

The owner first described N free AP-cost **actions**, then clarified that N counts **AP points**. Two 2-AP actions therefore cannot each be made free with one activation. The current-cost examples below use Gift 1 AP, Hand Collect 1 AP and atomic Catch 2 AP; the Q4 Work and D11 farm-route rows are **historical** after §6.5 removes Projects. One valid Nell Gift grants 1 Nell Heart in this V0 paper rule; the first Gift also acquires Nell, and its Heart may be spent that same day. The accepted `Fresh · Forage · Herb` Gift item and Nell's appearance dates remain content/schedule fixtures.

| Case | Normal cost | With one 2-AP budget | Consequence |
| --- | --- | --- | --- |
| Two 1-AP actions | 2 AP | 0 AP; budget spent | Saves exactly 2 AP. First Herb Collect + Gift costs 2 AP and the Herb item, but also acquires Nell permanently; AP break-even alone is not a value verdict. |
| One 2-AP Catch | 2 AP | 0 AP; budget spent | Saves exactly 2 AP, not an extra action-sized multiplier. |
| A 2-AP Catch after 1 AP of budget was used | 2 AP | 1 AP; budget spent | Partial payment prevents the last credit point from becoming unusable. |
| Historical Q4 Project Work comparator (§6.5) | 2 AP and required materials | 0 Work AP; materials still required | Arithmetic only; no active first-playable Work target or Project-relief date. |
| Historical D11 all-Sunny route with an **optional exact Catch** (§6.5) | Farm 5 + deferred setup 1 + Catch 2 = 8 AP, above the 6-AP day. D6 Herb Collect and D10 Nell Gift supplied her first Heart while preserving the former D8 M route. | Activate D11; spend both credit points on Catch. Farm 5 + setup 1 = 6 AP, with Catch completed. | Conditional old-route example only; removing M changes farm AP and requires a new trace before claiming this timing win. |
| Stored Heart before a later Nell Gift | Gift 1 AP + one valid Herb → 1 Nell Heart | Activate first; credit pays Gift 1 AP, Gift returns the spent Heart, and 1 AP credit remains | One Gift/person/day and Herb supply bound this refill. It is not an infinite Heart loop, but Gift eligibility has value. |

`[BOUNDARY]` One activation saves **at most 2 AP**. A stored Heart can make a later Nell Gift free and be replaced by that Gift, but the Herb item is consumed, that Gift uses 1 AP of relief, and the once-per-day activation limit prevents a second same-day use. Catch, Watering Can, Plant, Hand and Gift remain eligible paid actions; `Care` itself has no AP cost (§6.6). Q4 Work and the old D11 farm route no longer validate first-playable value. Rerun 41 shows a conditional 2-AP expanded Farm shortfall, but Nell's Heart availability on that day still needs schedule evidence.

### 7.3. Next Person check — Mira and Bram after Nell

| Earlier role/candidate | Actual V0 target | Effect beside Nell's 2-AP rule | Decision for current V0 |
| --- | --- | --- | --- |
| Mira A Read Ahead | No hidden, decision-changing Herb/River/Mine result: Herb is face-up, Catch exact, M/B sources previewed. TV already reports D+1 Weather for free. | No Heart-worthy preview target; concealing required information would damage the base game. | Retire A as current ability text; keep Mira identity. |
| Mira `M-F` Catch discount from [test 39](../evidence/FIRST-PLAYABLE-MIRA-BRAM-ABILITY-OPTIONS-39.md) | Exact 2-AP River Catch, if it appears. | Saves 1 AP only on Catch; Nell can spend a Heart to save up to 2 AP on that same Catch or elsewhere. Mira's Berry Gift may be easier to source, so this is not total acquisition dominance, but it does not establish a distinct role. | Do not promote `M-F` merely to fill R3. |
| Bram K Divide/Focus | Q4 M/B each need 4 Progress; ordinary Work adds 2 Progress/1 AP. | Conserved `2` or `1+1` Progress still saves 0 Work AP. Nell can waive the two Work AP but does not give Bram a purpose. | Retire K wording as current ability text; keep Bram identity and the prior no-extra-Progress boundary as history. |

`[PAPER RESULT]` The selected **three Person identities** do not provide three functional V0 abilities: Nell has one; Mira and Bram have none. The audited A/K and `M-F` effects do not establish replacements. Do not add hidden Herb loot, another Project, a request, or an AP coupon solely to complete the count. Section 7.4 reviews the earlier owner-selected `R3` boundary in response to the owner's request.

### 7.4. Requested R3 scope review — first playable Person count (2026-09-24)

`R3` was chosen to show **information, timing and allocation** as three distinct Person abilities. Current contracts remove those three justifications: exact source/Catch information is already free, visible Wild Herb persists until Season change, and Q4's even 4/4 Progress costs remove K's Work saving. Nell's new general AP relief is one useful ability, but it does not make Mira or Bram useful by association.

| First-playable arm | Person contract | Native V0 value | Review result |
| --- | --- | --- | --- |
| Keep Mira/Nell/Bram active with only Nell playable | Fails: an active collectible Person must have an activated ability. | Mira/Bram Gift consumes an item and AP for Heart with no use. | Reject for first playable. |
| Write two replacement abilities now to preserve three | Could pass only after two real targets and effects are specified. | Audited A/K/M-F and other existing kernels have no demonstrated distinct payoff under current V0 rules. | Reject as the minimum scope; do not fabricate targets to fill the roster. |
| Nell only in the playable first release | Passes: one collectible Person, one working Heart spend, optional Gift; Farm/Mine/River remain independent. | Herb Collect + Gift acquire Nell; her Heart can relieve up to 2 AP on a later paid sequence. | **Owner confirmed; §6.5 separately removes Projects.** |

`[OWNER CONFIRMED FIRST-PLAYABLE PERSON SCOPE — 2026-09-24]` After this review, the owner said “ok chốt” and directed the next step. The former `R3` **minimum functional count is withdrawn for first playable**. The playable roster is **Nell only**. Mira and Bram remain named Year 1 paper identities for later content, but are **absent from first-playable appearances, Gifts, Heart stores and collectible Person cards** until each has a specified useful ability. This narrows the earlier `V0` three-Person content-volume selection while preserving that historical choice in the audit trail. Historical Mira/Bram Gift schedules and Heart traces are comparators, not active V0 inputs. No core route requires those Persons, so the change adds no Farm/Mine/River/Project gate. It reduces social breadth in the first playable; that is the explicit scope cost.

## 8. World/orientation package

Current model: [scrollable area-tableau 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md). [v0.2](../../paper-tests/orientation-explicit-surface-v0.2/README.md) và [v0.1](../../paper-tests/orientation-home-middle-vs-top-v0.1/README.md) chỉ còn là historical spatial/topology evidence; không dùng cho pilot.

Coverage hiện có:

- square House, Farm Plot, Supermarket, Mine Entrance, Fishing Spot và supporting environmental studies;
- historical art studies of Water Trough, Harvest Bench and Grove Footbridge; all three game designs are rejected (§6.5);
- Fresh/Processed Crop, Fish, Herb pairs;
- historical continuous M/T boards and square studies reusable as art inputs;
- House/Farm supporting studies; Home/Town Place tokens chỉ còn giá trị historical/topology-skeleton;
- sticky House anchor, opening cue, carried-source area;
- four-task script, counterbalance và log fields.
- Mine/Fishing v0.2 shape fixture + failed informed action-comprehension result; v0.2.4 target/cost correction accepted by informed owner.
- Global Area orientation v0.3→v0.3.4 correction trail; v0.3.4 accepted by informed owner with sticky Area-name index, semantic-only Home/Commerce/River and Mine Depth rail.

`[DECIDED]` Scroll không mô phỏng movement/geography, nên Home-middle vs Home-at-top không còn là câu hỏi topology hợp lệ.

`[INFORMED-OWNER ACCEPTED]` v0.3.4 xếp card cùng Area thành vertical strip, dùng sticky Area-name index + neutral UI divider, và đọc như UI focus/scroll thay vì movement. Home/Commerce/River không cần synthetic Area state; Mine giữ Depth/checkpoint rail. Fresh-player risk vẫn open.

Card geometry hiện hành nằm ở [on-table card shape decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md); §10 của tài liệu đó ghép nguồn → đích → phí → kết quả cho các hành động vòng đầu sau khi Farm/Herb/Nell/Mine đã đổi luật. Mine/Fishing v0.2 exposed noun/schema ambiguity; v0.2.3 fixed art but retained a false square state target. [v0.2.4](../../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md) is the latest **interaction hierarchy** fixture: every square is a target, pure state is a strip, signed AP sits in the upper corner, and exact requirements replace generic Tool. Informed owner acceptance passes for that hierarchy; its old content list is not V0 and fresh-player evidence is unavailable.

Bốn ảnh mới trong Mine/Fishing v0.2.3 đã được user duyệt làm `approved reference`; chúng chưa `runtime approved`. Các art còn lại giữ status riêng trong asset record và không được tự động promote.

Today's Weather thuộc global UI scope, không phải Eel tag hoặc River state. The global rail carries Season, Today Weather and AP. Tomorrow Weather is learned through the TV sub-card inside Farmhouse, not a global field. The former filled Today/Tomorrow rail fixture is historical presentation evidence; the owner later removed its Tomorrow field. Future Weather/Season có thể dùng card-like UI ngoài play tableau. Flat palette fields hiện giúp Area identity một phần; generated abstraction backgrounds là future art direction, chưa runtime-authorize.

## 9. Evidence ledger

| Evidence | Package consequence |
| --- | --- |
| [Content minimum registry](CONTENT-MINIMUM-REGISTRY-01.md) | Shared names/tags/sources; no inferred Year 1 count |
| [Calendar sensitivity](../evidence/CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md) | A5/A7 + phase alignment constraints |
| [Project completion rerun](../evidence/CALENDAR-PROJECT-COMPLETION-RERUN-02.md) | Historical M/B no-fee timing retained; its then-selected PJ-X fee fork was later superseded by X0 and is not an active recipe |
| [COL-N long-horizon test](../evidence/COL-N-LONG-HORIZON-PAPER-TEST-01.md) | relationship-page structure retained; current minimum content fails long-calendar timing |
| [Mine source/later-discovery audit](../evidence/MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md) | CP6 Stone source direction; CP12 context meaningful but not proven late enough |
| [Mine band cadence 04](../evidence/MINE-BAND-CADENCE-PAPER-SIMULATION-04.md) | CP12 interaction D5/A5 or D4/A7; optional relationship, not long-calendar clock |
| [Mine Stone refresh 05](../evidence/MINE-STONE-REFRESH-PROJECT-TIMING-05.md) | Search once + persistent Sleep refresh; both Stone Projects retain recovery |
| [COL-N later-context alternatives 02](../evidence/COL-N-LATER-CONTEXT-ALTERNATIVES-02.md) | restock renewal passes choice shape but is a moving boundary; Processor conflict remains early; no timing pass |
| [COL-N independent source cadence 03](../evidence/COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md) | `DL-6` source response D13/D14; S12 miss and S18 complete with persistent recovery |
| [AP / Season bracket narrowing 03](../evidence/AP-SEASON-BRACKET-NARROWING-03.md) | A6/S18 next paper baseline; A5/S12 overload bound and A7 surplus guard retained |
| [Project quantity/Work A6–S18 rerun 04](../evidence/PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md) | `Q4` responsive and `Q6` deliberate both viable; `Q8` rejected; owner later selected `Q4` |
| [Raw-target / Processing A6–S18 rerun 05](../evidence/RAW-TARGET-PROCESSING-A6-S18-RERUN-05.md) | Historical test: Produce raw target passes; Fresh/Processed order comparators were later superseded; universal processed uplift rejected |
| [Fresh/Processed native context options 06](../evidence/FRESH-PROCESSED-NATIVE-CONTEXT-OPTIONS-06.md) | Kitchen and distributed bundles both viable; Person pair rejected; owner later selected D |
| [Distributed Fresh/Processed context contract 07](../evidence/DISTRIBUTED-FRESH-PROCESSED-CONTEXT-CONTRACT-07.md) | Historical D contract fully superseded: River request and Commerce premium target both removed |
| Distributed context informed-owner wording check 01 | `Fresh Catch Request / Supply` target purpose failed; the proposed `Fish Buyer / Sell Fresh Fish` correction was later retracted |
| Distributed context source audit | Original supports NPC/Request/Fisher role examples but no Fish Buyer; correction retracted; owner later removed the River premium target |
| [Fish sale / Processing no-River-buyer rerun 08](../evidence/FISH-SALE-PROCESSING-NO-RIVER-BUYER-RERUN-08.md) | River Catch only and Shipping Bin Fresh sale retained; its bounded Commerce target was later rejected as redundant |
| [Commerce Processed target informed-owner test 09](../evidence/COMMERCE-PANTRY-INFORMED-OWNER-TEST-09.md) | UI comprehension pass, system-necessity fail; Pantry/Shop order rejected despite clear wording |
| [Help Wanted / Special Orders deferred roadmap 10](../evidence/REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md) | Help Wanted scheduled before Special Orders after core baseline; neither is current content or a Processing patch |
| [Post-removal consistency/gap audit 11](../evidence/CORE-YEAR-1-POST-REMOVAL-CONSISTENCY-GAP-AUDIT-11.md) | Active graph no longer depends on premium/order/Processor utility; historical fixtures labeled superseded; Person roster ranked next |
| [Person ownership/minimum-roster audit 12](../evidence/PERSON-OWNERSHIP-MINIMUM-ROSTER-AUDIT-12.md) | One-identity/two-representation ownership model passes; owner selected `R3 — A+C+K` minimum functional roster |
| [Project/item/source consistency audit 13](../evidence/PROJECT-ITEM-SOURCE-CONSISTENCY-AUDIT-13.md) | Q4 M/B and optional X have exact recoverable sources; registry Stone route corrected without restoring Descent yield |
| [Core content quantity boundary audit 14](../evidence/CORE-CONTENT-QUANTITY-BOUNDARY-AUDIT-14.md) | Structural lower bounds narrowed; owner selected `B3 — M+B+X` minimum Project content |
| [PJ-X permit boundary audit 15](../evidence/PJ-X-PERMIT-BOUNDARY-AUDIT-15.md) | Owner selected `X0` no-fee; XP permit remains rejected comparator evidence |
| [Gold role after X0 audit 16](../evidence/GOLD-ROLE-POST-X0-AUDIT-16.md) | Owner selected `G0`: Seed renewal/profile access is sufficient for the minimum; long-horizon strategic accumulation is deferred |
| [Core Year 1 lock-readiness audit 17](../evidence/CORE-YEAR-1-LOCK-READINESS-AUDIT-17.md) | Structural paper baseline is coherent after G0; owner selected `L-I` so canonical identity/quantity precedes exact numerical lock |
| [Canonical minimum identity-entry audit 18](../evidence/CANONICAL-MINIMUM-IDENTITY-ENTRY-AUDIT-18.md) | Owner selected `ID1`; every functional slot stays fixed while current names and limited alternatives receive deliberate review |
| [Canonical identity direction audit 19](../evidence/CANONICAL-IDENTITY-DIRECTION-AUDIT-19.md) | Owner selected `ND-M`: literal common resources, functional Projects, short human names and restrained storybook identity where useful |
| [Canonical crop identity audit 20](../evidence/CANONICAL-CROP-IDENTITY-AUDIT-20.md) | Owner selected `C-G`: Turnip, Runner Bean and Lemon Balm; functional slots and balance remain unchanged |
| [Canonical Catch identity audit 21](../evidence/CANONICAL-CATCH-IDENTITY-AUDIT-21.md) | Owner selected `K-P`: Silver Minnow and Blue Eel; Rain eligibility remains in target/preview rather than the item name |
| [Canonical source/item identity audit 22](../evidence/CANONICAL-SOURCE-ITEM-IDENTITY-AUDIT-22.md) | Superseded before selection when family-by-family naming gates were consolidated; no S-F/S-M/S-G set was chosen |
| [Canonical identity consolidated proposal 23](../evidence/CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md) | Historical naming approval; §6.5 later rejected all three Project designs and Upper Grove, while §7.4 narrowed playable Persons to Nell |
| [Year 1 content-volume scope audit 24](../evidence/YEAR-1-CONTENT-VOLUME-SCOPE-AUDIT-24.md) | Owner selected `V0`: structural minimum is the complete first-playable balance set; later expansion is evidence-driven |
| [First-playable AP/Season lock audit 25](../evidence/FIRST-PLAYABLE-AP-SEASON-LOCK-AUDIT-25.md) | Owner selected `AS0`: 6 AP/day and 18 days/Season fixed for first-playable paper balance; regression bounds retained |
| [First-playable Weather narrowing 26](../evidence/FIRST-PLAYABLE-WEATHER-CADENCE-PHASE-NARROWING-26.md) | WD and WS are A6/S18 Q4 phase fixtures; owner later selected season-conditioned RNG, while seasonal probabilities and recovery tuning remain open |
| [Weather generation paper test 27](../evidence/FIRST-PLAYABLE-WEATHER-GENERATION-PAPER-TEST-27.md) | Historical equal-mean and equal-count arms show phase sensitivity; they do not set a Rain quota, dry-gap cap, or D5 completion requirement |
| [Seasonal Weather RNG paper test 28](../evidence/FIRST-PLAYABLE-SEASONAL-WEATHER-RNG-PAPER-TEST-28.md) | Historical all-Sunny three-day-burst route reached M/E/B D7/D10/D14; its fixed burst cadence does not derive from immediate `C234` replant |
| [Crop duration/yield paper test 29](../evidence/FIRST-PLAYABLE-CROP-DURATION-YIELD-PAPER-TEST-29.md) | Supplies the 2/3/4 growth and one-Fresh-output fixtures for §6.7; §6.6 now carries crops across Season boundaries as a working paper rule |
| [Seed/Sell price interaction paper test 30](../evidence/FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) | End-of-day Bin payout and fixture prices inform §6.7; its Q4 M/E/B route is rejected history, not a current completion claim |
| [PJ-X material/Work paper test 31](../evidence/FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md) | Historical cost arithmetic for rejected Projects; no current X, Upper Grove, Work cost or reward |
| [Heart/Gift cadence paper test 32](../evidence/FIRST-PLAYABLE-HEART-GIFT-CADENCE-PAPER-TEST-32.md) | Supplies `+1/−1`, cap 2 and same-day-use fixtures; Bram Gift and Q4 comparisons are historical after §6.5/§7.4. §6.7 tests a real Nell Gift before relief |
| [Bram/K purpose audit 33](../evidence/FIRST-PLAYABLE-BRAM-K-PURPOSE-AUDIT-33.md) | Historical 3/3-Progress saving does not transfer to Q4 4/4 M/B. The user-decided no-output-increase K boundary stays active; acceleration alternatives violate it and do not justify changing it. Bram's V0 functional purpose remains open |
| [Bram functional-role review 34](../evidence/FIRST-PLAYABLE-BRAM-FUNCTIONAL-ROLE-REVIEW-34.md) | Historical keep-Bram V0 review: K, conserved Work voucher, source/Farm/economy shortcuts and older kernels did not pass a native V0 purpose test. Section 7.4 later defers his playable card |
| [Mira/Nell target–Gift phase test 35](../evidence/FIRST-PLAYABLE-MIRA-NELL-TARGET-GIFT-PHASE-TEST-35.md) | D10 Nell Gift schedule is reusable only as a fixture; its one-Sleep Grove hold and Mira hidden Search are historical after visible, persistent Herb and Nell's new ability |
| [Grove Batch contract 36](../evidence/FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) | Historical visible-Herb comparator: paid Search/six-card batch was already historical; its Sleep expiry and Nell D13→D14 Hold case are superseded by [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md). Mira A still lacks an evidenced V0 target |
| [Economy ledger v2](../evidence/ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) | T0 market, sink shapes, exact compatibility |
| [Storage sensitivity](../evidence/STORAGE-KEEP-SENSITIVITY-01.md) | no-cap baseline; forecast required; perish rejected |
| [Fishing sensitivity](../evidence/FISHING-RESOLUTION-SENSITIVITY-02.md) | atomic commitment retained across four cells |
| [Mine/Fishing tableau contract](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) | exact Catch/frontier/route play grammar; redundant gateways removed |
| [Square-card decision](ON-TABLE-CARD-SHAPE-DECISION-09.md) | universal 1:1 root-card footprint; panel/status/header taxonomy |
| [Mine/Fishing v0.2 pilot](../../paper-tests/mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md) | square recognition observed; action/schema comprehension failed at Task B |
| [Mine/Fishing corrective fixture](../../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md) | approved art + target/status separation + signed AP placement; informed owner pass |
| [Scrollable Area model](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) | scroll is UI navigation, not travel or map |
| [Global orientation v0.3.4](../../paper-tests/orientation-area-tableau-v0.3.4/README.md) | sticky index accepted; synthetic non-Mine Area state and redundant tags removed; Mine Depth retained |
| [Mine triple-gate audit](../evidence/MINE-PROJECT-TRIPLE-GATE-AUDIT-01.md) | remove relief fees in next baseline |
| [Kernel audit](../evidence/PERSON-ROSTER-KERNEL-AUDIT-02.md) | A/C/K carry, E/J conditional, D/I/M reserve |
| [Mini-roster fixture](../evidence/PERSON-MINI-ROSTER-FIXTURE-01.md) | concrete Gift/economy/UI test set |
| [Historical orientation audit](../evidence/CONTINUOUS-WORLD-ASSET-ORIENTATION-AUDIT-05.md) + kits | square art reusable; spatial protocol retired |

## 10. Recovery matrix

| Miss/choice | Recovery |
| --- | --- |
| Crop care/burst delayed | Resume persistent crop/state next day |
| Common Catch missed | Common condition returns |
| Blue Eel missed | Rain/cycle later; no Fishing lock |
| Person/Gift missed | Person schedule later |
| Wild Herb not collected today | Visible world card persists through Sleep until Collect or Season change; required core sources stay independent |
| Mine day skipped | Depth persists |
| Mine branch chosen | Other branch later route/cycle |
| Project delayed | Contributions persist; base verb/source remains |
| Runner Bean/Lemon Balm unchosen | Other Seed returns later |
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
| Mine/Project triple gate audited | Historical only after §6.5 removes Projects |
| Project completion/source timing | Discarded fixture; no selected Project completion target |
| Minimum functional Person roster | §7.4 owner confirmation: **Nell alone** is the first-playable roster. Historical `R3 — A+C+K` is withdrawn as the V0 minimum; Mira/Bram remain named future identities, without active V0 cards |
| Square orientation asset coverage | Pass |
| Historical spatial orientation preflight | Pass, but superseded for pilot |
| Scrollable Area-tableau representation | Global v0.3.4 informed-owner acceptance; fresh-player evidence unavailable |
| Square-card desk/mobile render QA | Pass |
| Action/target comprehension | v0.2 failed; v0.2.4 passes deterministic render + informed owner acceptance; fresh-player evidence unavailable |
| New-player orientation data | Open |
| Long collection arc `COL-N` | Paper timing pass under independent `DL-6` source delivery; exact cadence/value and fresh-player evidence open |
| AP / Season bracket | `AS0`: A6/S18 fixed for first-playable paper balance; final Weather/prices/costs and shipped balance open |
| Project quantity/Work on A6/S18 | `Q4` was selected for the earlier M/B proposal; §6.5 rejects that proposal |
| Fish sale / Processing | River Catch + Shipping Bin sale retained; no Processed premium. Processor positive utility is deferred/open and excluded from the minimum economic loop |
| Minimum Person/Project content boundary | Nell alone is owner-confirmed (§7.4); **all three proposed Projects are rejected** by §6.5. Earlier R3/B3/V0 and proposed B2 counts are historical |
| Minimum Gold scope | `G0` owner-selected; Turnip Seed renewal is evidenced in the current loop, while paid profile access is still unplaced (§6.11) and long-horizon strategic use remains deferred |
| First-playable content volume | Earlier `V0` count was owner-selected; Person and Project rows have since changed. Farm/Mine/AP balance claims tied to the old set must be checked again |

## 12. Strongest current conclusions

1. `[DIRECTION]` Keep distributed graph/reveal bands; no objective hub required.
2. `[HYPOTHESIS]` Use no-cap/no-perish + 0 AP market as clean next baseline; do not stack cap, perish và transaction AP.
3. `[HYPOTHESIS]` Keep atomic Fishing as general baseline; reserve multi-day resolution for explicit special Catch content if needed.
4. `[OWNER-DIRECTED CORRECTION]` All three proposed Projects are rejected throughout the design (§6.5). Their Work targets, fees and rewards have no current or reserved future status.
5. `[OWNER CONFIRMED FIRST-PLAYABLE SCOPE]` Earlier owner-selected `R3` and the three-Person `V0` content count remain historical decisions; §7.4 withdraws them as the **first-playable Person minimum**. Nell alone is playable there, with 2 AP of same-day relief per Heart at most once/day. Mira/Bram remain canonical paper names for later content and have no active V0 card, Gift, Heart or appearance.
6. `[DECIDED]` Scroll order is interface organization, not world topology or travel distance.
7. `[DECIDED]` No paper result changes multi-year continuation.
8. `[OWNER SELECTED TEST FRAME; FARM AP RECHECKED]` A6/S18 remains the paper day/Season frame. Rerun 41 shows a no-Project two-Turnip Sunny renewal fits exactly 6 AP, while a four-crop immediate-replant day requires 8. This is an AP result, not a final crop economy or Nell schedule validation.
9. `[HISTORICAL PROJECT BASELINE]` M/B used `Q4`: one Wood + one secondary + 4 Progress. Both Projects and their Q4 recipes are rejected (§6.5).
10. `[OWNER DECIDED]` Processed sale has no universal uplift and no Pantry/Shop premium. Processor is a deferred utility shell, not a validated minimum economic branch; later actual content may require Processed state.
11. `[OWNER SELECTED PAPER BASELINE]` River is Catch only. Ordinary Fresh Fish sale uses Shipping Bin at 0 AP with end-of-day payout; no River buyer/request is required.
12. `[OWNER-DIRECTED DESIGN REJECTION]` §6.5 withdraws §6.4's B2 recommendation and earlier B3 minimum; **Water Trough, Harvest Bench and Grove Footbridge are rejected designs**, not deferred content.
13. `[HISTORICAL PJ-X COST SHAPE]` X0 removed the permit/Gold layer in the old X proposal; that proposal is rejected and has no pending recipe.
14. `[OWNER SELECTED MINIMUM GOLD SCOPE]` `G0` carries Seed renewal + crop-profile access/restock as sufficient for the minimum. No strategic sink is added solely to preserve long-horizon Gold demand.
15. `[OWNER SELECTED PAPER-LOCK SEQUENCE]` `L-I` resolves canonical content identity/quantity before exact numerical product lock; current balance values retain their existing paper/fixture labels.
16. `[OWNER SELECTED IDENTITY ENTRY]` `ID1` requires deliberate canonical identity review; no fixture name or Person-role assignment is promoted automatically.
17. `[OWNER SELECTED NAMING DIRECTION]` `ND-M` uses family-specific restraint: clarity for commodities/Projects/Persons, selective storybook identity for crops, conditioned Catch and collection.
18. `[OWNER SELECTED CANONICAL PAPER IDENTITY]` The three active crop names are Turnip, Runner Bean and Lemon Balm; old fixture aliases remain valid only for historical trace interpretation.
19. `[OWNER SELECTED CANONICAL PAPER IDENTITY]` The active Catch names are Silver Minnow and Blue Eel; FI-R still requires Rain and old aliases remain historical only.
20. `[OWNER SELECTED CANONICAL PAPER IDENTITY; LATER DESIGN REJECTION]` Proposal 23 once selected Water Trough/Harvest Bench/Grove Footbridge and Mira/Nell/Bram. The three Project identities are now rejected and survive only in the audit trail; §7.4 separately defers Mira/Bram from first playable.
21. `[EARLIER OWNER SELECTED VOLUME; REVISED]` The old `V0` catalog is no longer the first-playable balance set after Person and Project removals. Do not import its Project route dates or material sinks into a new numerical lock.
22. `[OWNER SELECTED FIRST-PLAYABLE BALANCE FRAME]` `AS0` fixes 6 AP/day and 18 days/Season for remaining paper balance work; A5/S12, A5/S18 and A7/S18 retain regression roles.
23. `[OWNER SELECTED WEATHER DIRECTION]` Rain uses RNG conditioned on the Season of the generated day, including the incoming Season at a boundary. Neither exact Rain dates nor a fixed number of Rain days per Season are selected. TV/Sleep determines D+1 only once; seasonal probabilities and detailed generation rules remain open.

## 13. Next evidence, in order

1. §6.9 now uses two opening Turnip Seeds, 0G, an uncapped first-Season Turnip listing, and the Field Notes choice on the following New Day. Keep §6.7's 4G and capped-stock arms as comparisons; prices and next-Season Seed eligibility still need a numerical/content lock.
2. §6.11: first Fish/Ore can supply alternate Field Notes families, but their repeated acquisition has no confirmed reward. Gold currently buys replacement Turnip Seed; the first Bean/Lemon Balm Seed is free, so paid profile access is not yet evidenced in this loop. Keep G0's owner-selected narrow scope and do not imply an 18-day content-density pass. Woodlot Collect, CP6 Stone and repeat Ore stay outside the first loop until a native use exists.
3. Check Watering Can interaction with two and four crops when a clickable prototype exists; §6.8's 12–14 Water commitments are arithmetic evidence, not player-feel evidence.
4. Continue comprehension checks with the product owner as the available informed tester; record that evidence accurately and do not relabel it as fresh-player acceptance.
5. Continue the core Year 1 paper baseline; do not create another Processed premium target to make Processor appear complete.
6. Keep [Help Wanted / Special Orders roadmap 10](../evidence/REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md) inactive until its dependency gates are met; then test Help Wanted before Special Orders.
7. Retain generic market parity and Shipping Bin timing as paper baselines; do not add a generic Load tax, River buyer, Shop-order premium or replacement Gold sink.
8. Explore generated abstraction Area backgrounds separately under the art skill only with explicit art direction; preserve card dominance and accepted index grammar.
9. Only after the relevant identity, balance and evidence gates choose a narrower product lock; implementation still needs explicit user authorization.

## 14. Non-conclusions

- A6/S18 remains the owner-selected paper test frame. Rerun 41 checks Farm AP without Projects, but old Project-assisted completion dates do not transfer. Seed prices/stock, Weather rate, crop duration/yield values and Nell's appearance timing remain open.
- No final Area order, card density, world node count, square logical size or runtime tile size.
- Proposal 23 keeps Mira, Nell and Bram as canonical paper names and records earlier A/C/K assignments. Section 7.4 records the owner's confirmation that `R3` is withdrawn as the first-playable minimum; only Nell has an active V0 Person card and ability. Mira/Bram return to active content only after useful abilities are specified. Nell's Gift preference, schedule, Heart cap, appearance and art remain open.
- `B3`, `B2` and all three named Project designs are rejected after §6.5. No Project is selected or reserved for later content, and this correction selects no replacement relief mechanism.
- `G0` locks only the minimum Gold promise; it does not prove a long-horizon strategic sink or select final Seed/sell prices.
- `L-I` selects work order only; it does not make any fixture name, total content count or numerical value canonical by itself.
- `ID1`/`ND-M` naming work is complete at paper level; external clearance/localization and all art remain open.
- No canonical art promotion.
- No final completion/ending design.
- Paper evidence does not replace playtest or emotional appeal evaluation.
