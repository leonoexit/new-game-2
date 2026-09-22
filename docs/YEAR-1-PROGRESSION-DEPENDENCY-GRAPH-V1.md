# Year 1 progression dependency graph — v1

Ngày tổng hợp: 2026-09-21; evidence integration pass: 2026-09-22.

Trạng thái: graph v1 tích hợp content-minimum registry, calendar sensitivity, economy ledger v2 và Person kernel audit. `Year 1` là horizon content/balance, không phải ending, reset hoặc deadline. Graph dùng state/reveal bands; exact Season/day placement chỉ được ghi nơi sensitivity có bằng chứng, không suy từ fixture thành luật.

Nguồn chính:

- [Year 1 graph v0](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V0.md)
- [Content-minimum registry 01](CONTENT-MINIMUM-REGISTRY-01.md)
- [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md)
- [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md)
- [Person roster kernel audit 02](PERSON-ROSTER-KERNEL-AUDIT-02.md)
- [Asset orientation audit 05](CONTINUOUS-WORLD-ASSET-ORIENTATION-AUDIT-05.md)
- [Storage/Keep sensitivity 01](STORAGE-KEEP-SENSITIVITY-01.md)
- [Fishing resolution sensitivity 02](FISHING-RESOLUTION-SENSITIVITY-02.md)
- [Mine/Project triple-gate audit 01](MINE-PROJECT-TRIPLE-GATE-AUDIT-01.md)
- [Person mini-roster fixture 01](PERSON-MINI-ROSTER-FIXTURE-01.md)
- [Scrollable abstract-area tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md)
- [Mine/Fishing area-tableau play contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md)
- [On-table square-card shape decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md)
- [Mine/Fishing v0.2 failed informed pilot](../paper-tests/mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md)
- [Mine/Fishing target/cost fixture v0.2.4](../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md)
- [Orientation explicit-surface paper-test kit v0.2](../paper-tests/orientation-explicit-surface-v0.2/README.md)
- [Orientation paper-test kit v0.1 — historical topology skeleton](../paper-tests/orientation-home-middle-vs-top-v0.1/README.md)

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Product invariants

- Solo card-based life sim; card là ngôn ngữ chính của world, state và action.
- Person là persistent collectible với activated ability; không có party cap cưỡng ép.
- Gift tốn action cost + item; Heart thuộc riêng từng Person và tồn tại qua ngày.
- Save tiếp tục nhiều năm. Year 1 không kết thúc hoặc reset save.
- Objective, completion và ending là ba khái niệm độc lập.
- Sưu tầm Person là hướng sống tùy chọn.
- Bỏ lỡ thông thường trì hoãn tới lần/chu kỳ sau, không mặc định phá save.

### 1.2. [DIRECTION] Graph principles

- Distributed micro-objective network; không giả định objective hub trung tâm.
- Reveal actionable horizon theo state/action, không dump toàn graph theo calendar.
- Farming, source, Mine, Fishing, collection, Processing, Project và Person có objective shape khác nhau.
- Required common source có deterministic path hoặc substitute.
- Person thay information/timing/flexibility; không là prerequisite duy nhất.
- Root world strip chỉ biểu diễn abstract Area groups và semantic persistent node/state; graph không ánh xạ 1:1 thành tile.
- Scroll là navigation UI, không phải movement/travel. Area là visual/rulescope; exact Catch/frontier/route/source mới là playable targets.
- Buy/Sell 0 AP là paper baseline mạnh hơn cho vòng kế; chưa chốt.
- Storage không cap/không perish là paper baseline sạch; small-cap và perishability không được gộp cùng arm.
- Catch dùng atomic commitment làm paper baseline; graph vẫn giữ grammar abstract để final cost có thể đổi.
- On-table interaction targets dùng square 1:1; full rules ở detail UI, còn non-action Record/Depth summaries dùng status strips. Signed AP cost nằm ở upper corner.
- An action node depicts its verb/target; an opportunity node depicts the visible target/context and receives the Tool/Item that supplies the verb. Tags carry cost/state/requirement; description carries consequence/trade-off. Noun-only labels, redundant CTAs and schema panels are insufficient.

### 1.3. [HYPOTHESIS] Evidence constraints mang vào v1

1. A5 tạo choice nhưng `5-12-S` có soft lock-in; core graph không được đòi Expansion/burst relief hoàn tất trong một short sparse Season.
2. A7 xóa phần lớn opportunity miss trong minimum slice; không dùng A7 làm bằng chứng một gate đủ đắt.
3. Rain phase so với crop burst quan trọng ngang frequency; không gate core progression vào một Rain cụ thể.
4. Fresh liquidity, raw target và processed target phải cùng tồn tại để Processing không dominate.
5. Seed restock + selected optional-context fee là hai sink shape đủ cho vòng paper; relief Project không dùng fee trong baseline kế.
6. A/C/K có evidence mạnh nhất; E/J là conditional candidate; D/I/M ở reserve.
7. `COL-1` D3 là first-branch fixture, không đủ làm long-term collection arc.
8. Home-middle vs Home-at-top không còn là topology question; next orientation fixture phải đo Area/card recognition trong vertical strip.
9. `S4` chỉ tạo storage decision khi target horizon được forecast; perishability làm Sell/Process dominate trong arm hiện tại.
10. Water Trough fail triple-gate shape nếu cùng đòi checkpoint access + Ore + fee + Work.

### 1.4. [FIXTURE] Vocabulary

- Crops: Shortroot, Tallbean, Dewleaf.
- Sources/items: Hedgerow Berry, Fallen Wood, Plain Stone, Seam Ore, Wild Herb.
- Catch: River Minnow; Eel under Rain condition (`Rain Eel` remains registry shorthand, not required root-card wording).
- Projects: Water Trough `PJ-M`, Harvest Bench `PJ-B`, Upper-Grove Footbridge `PJ-X`.
- Collection: Field Notes `COL-1`, record any 3-of-4 families → choose Tallbean/Dewleaf Seed.
- Processing: identity-preserving Crop/Fish/Herb templates.
- Price/cost/calendar numbers remain fixtures in their source docs; graph does not promote them.

## 2. Graph overview

```text
                         New Day information D0
                  Season · Weather · Person contexts
                                   |
       +---------------------------+----------------------------+
       |                           |                            |
 House/Farm F0               World sources R0             River/Fishing FI0
       |                    Berry · Wood · Mine                  |
  Shortroot path                  |                         Common Catch
       |                     Mine Depth MIN0                Rain condition
  First output F5                 |                            |
       |                    Stone / Seam Ore               Fish record/use
  Output junction J0              |                            |
  Sell Gift Record Keep           +------ Project inputs ------+
       |                           |                            |
       +---- PJ-M relief ---- Expansion ---- PJ-B burst         |
       |                           |                            |
       +---- Collection records COL0/COL-1 <--------------------+
       |                    choose Seed                          |
       |                 Tallbean / Dewleaf                     |
       |                           |                            |
       +--------------------- Processor PR0 --------------------+
                              recipe discovery
                          Fresh ↔ Processed targets

 Person acquisition/Heart overlays all branches when context exists:
 A/C/K evidence-backed; E/J conditional; no Person gates a base edge.

 Branches rejoin through item use, Project materials, collection records,
 Processing compatibility and optional world connections. H1 means several
 horizons are open; it is not completion, ending or reset.
```

## 3. Entry nodes

| ID | Status | State/trigger | Action/progress | Opens | Recovery/invariant |
| --- | --- | --- | --- | --- | --- |
| D0 | [DECIDED] | New Day | Auto reveal Season, Weather, all Person contexts | Day planning | View/skip costs 0 AP |
| F0 | [DECIDED]/[DIRECTION] | Save start/opening context | Inspect House/Farm entities on surface | Soil/crop actions | Farming may stand still; other entries remain |
| R0-B | [HYPOTHESIS] | Hedgerow visible | Deterministic Berry collect | Gift supply/Forage record | Does not require harvest |
| R0-W | [HYPOTHESIS] | Woodlot visible | Deterministic Wood collect | Project material | Does not require random batch |
| MIN0 | [HYPOTHESIS] | Mine visible/actionable | Deterministic Depth through Direct Descent | checkpoints/action set | Person A not required; descent does not invent Stone yield |
| FI0 | [HYPOTHESIS] | River spot visible/actionable | Common Catch attempt | Fish item/record/mastery | Does not require crop |
| P0 | [DECIDED] | Person announced with valid context | Optional Gift | Person card + Heart | Miss → schedule later |

No first-harvest edge precedes R0/MIN0/FI0/P0.

## 4. Farming branch

| ID | Status | Reveal trigger | Progress grammar | Opens/changes | Recovery |
| --- | --- | --- | --- | --- | --- |
| F1 | [DIRECTION] | Overgrown Soil + valid Tool | Clear state change | Empty Soil | Can do later |
| F2 | [DIRECTION] | Empty Soil | Till state change | Tilled Soil | Persistent state |
| F3-S | [FIXTURE] | Tilled Soil + Shortroot Seed | Plant | Growing Shortroot | Seed restock later |
| F4 | [DIRECTION] | Growing Crop | Care/Weather + Sleep | Growth/Mature state | Miss Care delays in fixture |
| F5 | [DIRECTION] | Mature Crop | Harvest | Fresh Crop + output junction | Crop cycle can resume later |
| J0 | [HYPOTHESIS] | First output acquired | Sell/Gift/record/Process/Keep target preview | Economy choices | No target is mandatory alone |
| W0 | [HYPOTHESIS] | Manual maintenance cost understood | Inspect `PJ-M` | Relief horizon | Visible before workload cliff |
| PJ-M | [HYPOTHESIS]/[FIXTURE] | W0 + known Wood/Ore sources | Material + Work; no-fee paper baseline | Water scope relief | Base Water remains valid |
| E0 | [DIRECTION] | Visible Overgrown capacity + chosen expansion | Clear/Till/Plant | More active plots/workload | Expansion optional |
| F6 | [HYPOTHESIS] | Expanded active crop count | World/AP consequence, not objective card | Makes burst/maintenance pressure visible | Player may stop expanding |
| W2/PJ-B | [HYPOTHESIS]/[FIXTURE] | Experience one expanded cohort peak | Material + Work; no-fee paper baseline | Harvest **or** Plant burst relief | Base verbs remain valid |
| F-L | [FIXTURE] | Tallbean Seed chosen/bought | Long care commitment | Cash-oriented crop profile | Boundary creates tail, not death/reset |
| F-H | [FIXTURE] | Dewleaf Seed chosen/bought | Medium care commitment | Crop + Herb cross-tag | Other seed returns later |

### 4.1. [HYPOTHESIS] Farming ordering rules

- `W0` reveal không chờ farm đã soft-lock; player thấy relief horizon trước/cùng lúc commitment tăng.
- `PJ-M` bỏ Gold fee trong paper baseline kế vì Ore access/allocation + Work đã là gate; fee chỉ còn là rejected comparator arm.
- `PJ-B` reveal sau khi burst cost có nghĩa, không từ save start.
- `PJ-X` có thể giữ selected fee comparator vì chỉ mở optional context và base routes vẫn hoạt động.
- Expansion-first vẫn hợp lệ; graph phải preview future Water/burst pressure trước commit.
- Tallbean/Dewleaf không là linear tier. Một thiên cash/commitment, một thiên tag flexibility.

## 5. Resource và Mine branch

| ID | Status | Reveal trigger | Progress grammar | Opens/changes | Recovery |
| --- | --- | --- | --- | --- | --- |
| R1 | [HYPOTHESIS] | Interact deterministic source + one demand exists | Search/inspect Grove batch | Optional Wild Herb/variety | Batch later; core source deterministic |
| MIN1 | [HYPOTHESIS] | Mine actionable | Direct Descent; Depth deterministic | Current frontier | Depth persists through Sleep |
| MIN-S | [HYPOTHESIS]/[FIXTURE] | First source checkpoint | Search side tunnel → reveal source → extract Ore, or Descend instead | Exposed Ore source | Search/extract keep Depth; source can be used later |
| MIN-R | [HYPOTHESIS]/[FIXTURE] | Rule-band checkpoint | Speed vs yield | Changes action rule temporarily | Both routes known; no blind fail |
| MIN-B | [HYPOTHESIS]/[FIXTURE] | Branch/context checkpoint | Choose previewed context band | Ore/Herb/Fish cross-link | Unchosen branch returns later |
| MIN-X | [HYPOTHESIS] | World-connection checkpoint | Persistent traversal | New topology/context | Not ending; exact content gated |
| PJ-X | [HYPOTHESIS]/[FIXTURE] | Wood/Stone known + optional Upper Grove interest | Material + Work + optional permit | Upper-Grove context/source | R0/R1/Mine still work without it |

### 5.1. [HYPOTHESIS] Shape separation

- R1 là timing/opportunity source, không required random gate.
- Mine tách frontier progress, source discovery và extraction; không phải delivery Project.
- PJ-X là optional infrastructure cross-link, không entry duy nhất cho Connector.
- Ore/Stone có Sell vs Project allocation; Project capability không quy đổi thẳng thành Gold.

## 6. Fishing branch

| ID | Status | Reveal trigger | Progress grammar | Opens/changes | Recovery |
| --- | --- | --- | --- | --- | --- |
| FI-C | [FIXTURE] | Common River condition | Catch commitment | River Minnow + Fish record/use | Common Catch returns |
| FI-R | [FIXTURE] | Rain at River | Catch commitment | Rain Eel + condition record/use | Rain/cycle later |
| FI-M | [HYPOTHESIS] | Catch across distinct known conditions | Repeated-use mastery/record | Information/source/choice reward | Missing condition delays |

Atomic one-commit resolution là fixture mạnh nhất sau rerun bốn calendar cell. `2 AP` vẫn chỉ là sensitivity point. Persistent locked Catch xóa scarcity signal ở `5-12-S` và chỉ thêm state ở A7; graph giữ `Catch commitment` để final cost/content-specific long Catch có thể đổi mà không viết lại dependency.

Fishing output đi tới Sell/Gift/record/Process/Keep. Fresh Rain record cần Fresh acquisition; processed item không retroactively tạo condition catch.

## 7. Collection branch

| ID | Status | Reveal trigger | Progress grammar | Opens/changes | Recovery |
| --- | --- | --- | --- | --- | --- |
| COL0 | [HYPOTHESIS] | First eligible family acquired | Auto record, không consume | Field Notes horizon | Item vẫn dùng nơi khác |
| COL-1 | [FIXTURE] | Record any 3-of-4 Crop/Forage/Fish/Mine families | Choose Tallbean or Dewleaf Seed | New source/profile one restock early | Unchosen option returns later |
| COL-N | [HYPOTHESIS] | Sau first-choice reward và thêm discovery | Chưa thiết kế | Long-calendar collection horizon | Không thêm trước khi reward shape rõ |

### 7.1. [HYPOTHESIS] v1 correction

`COL-1` không được coi là toàn bộ collection progression. Calendar fixture hoàn thành nó D3 ở mọi arm; nó là first branch/choice, không đủ giữ S12/S18. Graph để `COL-N` explicit gap thay vì giả một checklist dài.

## 8. Processing branch

| ID | Status | Reveal trigger | Progress grammar | Opens/changes | Recovery |
| --- | --- | --- | --- | --- | --- |
| PR0 | [HYPOTHESIS] | Broken/available Processor seen + at least one input category | World-state repair/activate, không bắt buộc là Project | One-slot conversion context | Other item uses remain |
| PR-C | [FIXTURE] | Fresh Crop + active Processor | Load → Sleep | `[crop] Preserve` | Keep/Sell/Gift raw instead |
| PR-F | [FIXTURE] | Fresh Fish + active Processor | Load → Sleep | `Dried [fish]` | Fresh condition target may win |
| PR-H | [FIXTURE] | Fresh Herb + active Processor | Load → Sleep | `Prepared [herb]` preserving origin | Fresh Person/Project target may win |
| PR-S | [HYPOTHESIS] | Repeated category pressure | Specialized Processor/context | More option, not identical free slot | Base one-slot remains valid |

### 8.1. [HYPOTHESIS] Compatibility invariant

- Output retains Crop/Fish/Herb subtype/origin and adds Processed.
- Processed is rejected by target requiring Fresh/Raw unless target explicitly accepts alternate state.
- +2G uplift, Load 1 AP, one slot và one Sleep là sensitivity fixtures.
- At least one raw target/liquidity horizon phải visible để Processor idle có thể đúng.

## 9. Person overlay

| Node | Status | Condition | Effect class | Dependency rule |
| --- | --- | --- | --- | --- |
| P1 | [DECIDED] | First valid Gift | Acquire Person + Heart | Optional branch |
| P2-A | [HYPOTHESIS] | Heart + unresolved optional uncertainty | Preview exact optional result | Safe/known route vẫn tồn tại |
| P2-C | [HYPOTHESIS] | Heart + expiring opportunity | Hold one target through one Sleep | Opportunity returns without C |
| P2-K | [HYPOTHESIS] | Heart + one/two Project targets | Split/focus same total Progress | Normal Work completes Project |
| P2-E | [HYPOTHESIS candidate] | Printed optional E-slot | One exact alternative tag for one commit | Không thỏa core source slot |
| P2-J | [HYPOTHESIS candidate] | Context with discovered alternate mode | Retune one action/Context/day | Normal mode đủ để progress |
| P2-D/I/M | [DIRECTION reserve] | Grammar chưa đủ | Không dùng trong v1 dependency | Không tạo content để nuôi kernel |

Concrete paper roster fixture dùng Mira=A, Nell=C và Bram=K với Berry/Wild Herb/Shortroot Gift tags. Identity, name, schedule và assignment đều vẫn là `[FIXTURE]`, không phải Year 1 roster commitment.

### 9.1. [HYPOTHESIS] Limits

- A: one preview per unresolved target; no reroll.
- C: one held target active per Person; không re-extend cùng target.
- K: total Progress conserved; no per-day limit evidence.
- E: tối đa một printed E-slot/commit; optional only.
- J: one retuned action per Context/day; mode phải được discovery không qua Person.
- Không cooldown chung ở graph v1.

## 10. Economy edges

### 10.1. [HYPOTHESIS] Standard transaction baseline

- Sell/Buy commit `0 AP` cho vòng paper kế.
- Exact quantity/item/Gold result vẫn preview.
- Một explicit market order có thể tốn AP nếu chính order là opportunity; không đánh thuế mọi transaction.
- `1 AP/item` không thuộc v1.

### 10.2. [FIXTURE] Gold sink edges

```text
Fresh output → Sell-now → Seed restock / selected infrastructure fee
Fresh output → Process → more Gold later, but Load + Sleep + slot
Material      → Sell-now OR Project capability
Gift item     → Gold option OR Heart option
COL-1         → avoided Seed cost + earlier source/capability choice
```

Graph không ghi price. Price table v2 chỉ là sensitivity fixture.

### 10.3. [HYPOTHESIS] Non-dominance conditions

- Sell thắng khi same-day liquidity mở Seed/relief.
- Gift thắng khi Heart có effect target đáng giá; không có Gold conversion cố định.
- Project thắng khi capability cứu future AP/context.
- Process thắng khi slot/AP/timing phù hợp hoặc target cần Processed.
- Keep cần forecast category/state/context trong 1–3 ngày để có option value đọc được.
- No-cap/no-perish là baseline kế; `S4` chỉ là small-cap comparator và `P1` perishability không carry.

## 11. Reveal bands v1

Exact day không được gắn vì cùng node dao động mạnh giữa A5/A7 và Dense/Sparse. V1 dùng event envelope.

### Band A — Orientation

Reveal:

- D0 day information;
- House/Farm starting Area tableau and visible playable entities;
- Hedgerow/Woodlot deterministic source;
- River/Mine Area identity plus locked/actionable Catch/frontier state;
- Person context hôm nay;
- exact action hiện có, không full future tree.

Không reveal toàn bộ Projects, recipes, collection hoặc Mine branch.

### Band B — First commitment

Trigger bằng một trong:

- Plant/Care commitment;
- collect/source/Mine entry;
- first Catch attempt;
- first Gift.

Reveal next actionable horizon của branch đó. Farming `W0` phải hiện sau manual-care exposure và trước/cùng workload rise, không đợi fixed day.

### Band C — First output/discovery

Trigger: first Crop/Fish/Forage/Mine item acquired.

Reveal:

- valid Sell/Gift/record/Keep targets;
- Processing preview nếu Processor/recipe horizon có nghĩa;
- Seed/Gold need nếu liquidity relevant;
- COL0 record state.

Không reveal target không nhận item hoặc future price table toàn game.

### Band D — First chosen branch

Trigger: player đầu tư vào relief, Mine depth, Fishing condition, collection choice, world connection hoặc Processing.

Reveal:

- next node của chosen branch;
- immediate sibling tradeoff/recovery đủ để tránh blind trap;
- cross-link có source hiện hữu.

Không bắt chosen branch hoàn tất trong current Season.

### Band E — Multiple horizons

Trigger: ít nhất hai branch có active next step và player có capability/source để chọn.

- Overview/anchors cho active horizon.
- Specialized/conditional cross-links có thể xuất hiện.
- `H1` không phải completion card.
- Year 1 content completion không gọi ending/reset.

## 12. Calendar envelopes

### 12.1. [HYPOTHESIS] What sensitivity supports

| Evidence | Constraint đặt lên graph |
| --- | --- |
| A5 sunny pre-relief burst > day cap | Relief preview trước expanded burst; recovery qua ngày sau |
| 5-12-S Expansion/Burst relief trượt | Không gate core area/verb vào việc hoàn tất cả M/E/B trong một Season |
| 5-18-D hoàn full path | Long horizon cho recovery nhưng không biến thành deadline |
| A7 hoàn path sớm | Không tăng cost/gate chỉ để tiêu surplus |
| Dense Rain trùng burst | Không balance bằng Rain percentage đơn lẻ |
| COL-1 D3 mọi arm | Dùng như first choice, không seasonal capstone |
| Gift delay Project ở A5 | Ability benefit cần target; Person vẫn optional |

### 12.2. [HYPOTHESIS] What sensitivity does not support

- AP/day final.
- Season 12/18 ngày.
- “Node X phải mở Dn”.
- Fixed Rain distribution.
- Crop chết/reset ở boundary.
- Year 1 ending.

## 13. Route traces v1

### 13.1. [FIXTURE] Producer

```text
F0 → Shortroot F1–F5 → J0 liquidity
   → W0/PJ-M maintenance relief
   → E0 expansion + Tallbean commitment
   → W2/PJ-B burst relief
   → PR-C / Fresh request / Sell-now
```

- Person optional; Gift có thể delay relief nhưng không unlock nó.
- Mine supplies Ore/Stone cross-link; deterministic path available.
- Short Season may end with Tallbean/Project tail; save continues.

### 13.2. [FIXTURE] Connector

```text
R0-W / MIN0 → deterministic Depth through Direct Descent
            → Search Side Tunnel reveals an Ore source
            → Exposed Ore yields material without Depth
            → source/rule/context checkpoint → optional PJ-X Upper Grove
            → Wild Herb raw Gift/Process choice
```

- First harvest absent.
- A/J may improve choice; Direct Descent remains available without Person support.
- PJ-X fee/material is optional context gate, not Mine entry.

### 13.3. [FIXTURE] Collector

```text
Shortroot record + Berry/Wild Herb record + River Fish record
→ COL-1 Seed Choice
→ Tallbean cash profile OR Dewleaf Herb profile
→ condition Catch + identity-preserving Processing
→ COL-N remains an explicit design gap
```

- Farm can stay small.
- Rain Eel miss recovers on Rain later.
- E/C may change timing/flexibility but no collection record requires them.

## 14. Recovery graph

| Miss/choice | Recovery edge | Forbidden failure |
| --- | --- | --- |
| Crop Care/burst delayed | Resume next day; persistent state/tail | Crop/save reset assumed |
| Crop crosses Season boundary | Persistent tail or tested boundary policy | Automatic Year reset/death inferred |
| Person missed | Next schedule; owned ability remains if Heart | Permanent Person loss |
| Gift skipped | Next valid Gift schedule | Core route locked by Heart |
| Grove batch missed | Batch/cycle later; deterministic substitute for core | Required unlock hostage to draw |
| Common Catch missed | Common condition later | Fishing branch permanently closes |
| Rain Eel missed | Rain/cycle later | One Rain is sole completion window |
| Mine day skipped | Depth persists | Reset to Entrance |
| Mine branch chosen | Other branch later route/cycle | Permanent blind lock |
| Project not done in Season | Continue later | Seasonal deadline removes core capability |
| COL-1 option not chosen | Option returns restock/cycle later | Permanent blind Seed lock |
| Processor idle/input kept | Item remains for raw target | Forced auto-process |
| Year 1 content exhausted | H1/save continues | Automatic ending/reset |

## 15. Presentation mapping

| Graph content | Primary layer |
| --- | --- |
| D0/Person announcements | Sticky HUD/day strip |
| Area background/header/transition | Abstract visual/rulescope; không phải movement map hoặc card target |
| House/Plot/source/Supermarket | Playable entities trong Area tableau liên quan |
| Current Catch/Person/batch/Mine frontier/route | Inline playable context/state card |
| Tool/item/owned Person/selected source | Sticky tray |
| Project full requirement, collection, Mine history, ability rule | Inspect/overlay |

Inline on-table cards ở bảng trên dùng square `1:1`. Inspect/overlay có thể là rectangle vì đó là UI panel. Area header/background và status strip không được nhận card border/hit-target affordance nếu không có verb riêng.

### 15.1. [HYPOTHESIS] Label policy

- Known Area identity, House and basic crop state: L0 after onboarding.
- Item: L1; exact name on focus/selection.
- Known Person: L1 + Heart/status; new Person L3.
- Project/opportunity/Processor: L2; critical new branch L3.
- A/C/E/J/K ability cannot be portrait-only; selected verb/eligibility/limit belongs to UI.

Area order là presentation/navigation fixture, không phải graph dependency, geography hoặc travel distance. Changing scroll order must not change entity rules hoặc node/gate economy.

Square entity/Project/Fresh–Processed art coverage vẫn tái dùng được. Spatial orientation v0.1/v0.2 chỉ còn historical fixtures. Mine/Fishing v0.2.4 đã kiểm deterministic render, action-art distinction, square-target/status-strip separation và signed AP placement với informed owner. Global orientation v0.3 vẫn phải group cards thành abstract Area tableaus và đo recognition/scroll burden. Fresh-player evidence unavailable.

## 16. v0 → v1 changes

1. Replaced generic Produce/Seed/material placeholders with a minimal shared fixture vocabulary.
2. Added explicit Crop duration/tag profiles without treating names/counts as Year 1 content commitment.
3. Split maintenance relief, expansion and burst relief with calendar evidence.
4. Added Gold sink shapes and T0 transaction baseline without fixing prices.
5. Added exact Fresh/Processed compatibility edges.
6. Defined `COL-1` choice value and marked missing longer collection horizon `COL-N`.
7. Added Processor repair/conversion shape while preserving identity.
8. Promoted A/C/K as evidence-backed; E/J conditional; D/I/M reserve.
9. Added route-specific Heart supply implication and ability limits.
10. Replaced exact day ambitions with state/reveal bands constrained by A5/A7 and S12/S18 results.
11. Preserved recovery edges and multi-year continuation at every Season/Year boundary.
12. Kept topology/presentation separate from graph mechanics.
13. Added no-cap Storage baseline, small-cap comparator and rejected perishability arm.
14. Kept atomic Fishing commitment after four-cell rerun; rejected global persistent resolution as baseline.
15. Removed Gold fee from PJ-M/PJ-B paper baseline and retained PJ-X as selected strategic-fee comparator.
16. Added concrete A/C/K mini-roster fixture without promoting identities or Gift schedule.
17. Completed square paper-token coverage; retired spatial orientation protocol after scroll/navigation clarification.
18. Added abstract Area-tableau mapping and Mine/Fishing exact play-target contract.
19. Locked square 1:1 on-table card geometry and rebuilt Mine/Fishing fixture with status/detail separation.
20. Replaced Mine landmark/object placeholders with action art and separated progress, discovery and extraction consequences.

## 17. Acceptance audit

| Criterion | v1 result |
| --- | --- |
| Producer/Connector/Collector independent entry | Pass |
| First harvest not universal gateway | Pass |
| Required source deterministic/substitute | Pass |
| Objective shapes varied | Pass |
| Person optional | Pass |
| Processing non-universal | Pass by tag contract; balance still open |
| Collection reward has choice value | Pass as fixture; long arc open |
| Gold has recurring + strategic sink | Pass as fixture |
| Calendar miss has recovery | Pass |
| No exact day from arbitrary fixture | Pass |
| Year 1 not ending/reset | Pass |
| Scrollable Area-tableau contract | Pass as paper direction |
| Mine/Fishing square-card render QA | Pass |
| v0.2 action comprehension | Failed internal informed check at Task B |
| v0.2.4 target/cost correction | Deterministic render + informed owner acceptance pass; fresh-player evidence unavailable |
| v0.3 navigation fixture/pilot | Not pass; not built/no participant data |
| Final AP/Season/Weather | Not selected |

## 18. v1 verdict

### 18.1. [HYPOTHESIS] Graph result

Graph v1 đủ cụ thể để chạy cùng crop/item/source/Project/collection/Processing vocabulary và đủ nhạy để biểu diễn Gold/AP/Weather tradeoff. Nó không cần objective hub trung tâm và không biến Person/Project thành universal gate.

Các correction quan trọng nhất từ sensitivity:

- relief reveal theo experienced workload, không fixed day;
- no same-Season completion requirement cho M/E/B;
- Weather phase được log bên cạnh frequency;
- collection first choice tách khỏi long arc;
- raw/processed target compatibility nằm trong graph;
- only A/C/K evidence-backed cho dependency-free support;
- exact calendar bands vẫn chưa được phép thành final content schedule.

### 18.2. [DIRECTION] Evidence status before balance/content lock

Completed in the 2026-09-22 integration pass:

1. Square orientation kit + internal preflight.
2. Storage/Keep no-cap vs small-cap sensitivity; perishability separate.
3. Concrete A/C/K mini-roster with registry Gift tags.
4. Fishing atomic vs persistent rerun on four decisive cells.
5. Mine/Project triple-gate ledger.
6. Mine/Fishing square fixture v0.2 + deterministic preflight; informed iterations produced v0.2.4 with approved art, true square targets, status strips and upper-corner signed AP.

Still required:

1. Build v0.3 vertical Area-strip fixture from v0.2.4 grammar and run informed-owner navigation/recognition check.
2. Retain fresh-player comprehension as an explicit risk until another tester becomes available.
3. Rerun calendar completion timing with PJ-M/PJ-B no-fee baseline and PJ-X selected fee.
4. Design/test `COL-N` longer collection horizon.
5. Validate forecast presentation before selecting any storage cap.

### 18.3. Chưa được kết luận

- Final Year 1 content quantity/name/order.
- AP/day, Season length, Weather cadence/forecast.
- Crop duration/yield/price.
- Project quantity/Work and which optional-context Project retains a Gold fee.
- Storage/perishability.
- Final Area order, square-card logical size, badge hierarchy, density and navigation treatment.
- Person roster, identity, Gift preference hoặc final Heart cadence.
- Fishing/Mine/Processing final balance.
- Completion criteria hoặc ending.
