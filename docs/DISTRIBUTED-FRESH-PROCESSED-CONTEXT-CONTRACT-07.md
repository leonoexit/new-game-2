# Distributed Fresh/Processed context contract 07 — River supply, Commerce pantry

Ngày: 2026-09-22.

Trạng thái: **fully superseded as current baseline**. Sections 1–12 preserve the tested `D — Distributed` proposal and failed wording check as audit history. Section 13 retracts `Fish Buyer`, section 14 removes the River target, and section 15 removes the remaining Commerce premium target.

## 1. Owner-selected direction

```text
River
  exact Catch target
  + selective Fresh Catch Request target

Commerce
  ordinary T0 market
  + selective Processed Pantry Order target

Home / Farm
  one-slot Processor
```

- `[OWNER SELECTED PAPER DIRECTION]` Fresh Fish target lives at River.
- `[OWNER SELECTED PAPER DIRECTION]` Processed target lives at Commerce.
- One Kitchen/Commerce context remains a rejected-for-now comparator, not the baseline.
- Person-driven requests remain later optional content, not the minimum economy dependency.

The distribution is information ownership, not geography or travel. Scroll/focus between Areas remains 0 AP.

## 2. River root contract

### 2.1. Root shape while request is active

```text
RIVER visual language / condition badge

[Today's exact Catch]        [Fresh Catch Request]
Catch · 2 AP                 Supply · 0 AP
get Fresh Fish               needs 1 Fresh River Fish
```

Both squares are real targets. River header/background/condition treatment is not a target, and Fish Record does not return as a status card.

### 2.2. Two separate verbs

| Target | Verb | Input timing | Result |
| --- | --- | --- | --- |
| Exact Catch | `Catch` | Character + Rod at commit | spend atomic Catch AP; acquire exact Fresh Fish; auto-record acquisition |
| Fresh Catch Request | `Supply` | Fish must already be owned | consume one exact Fresh River Fish; receive target-local payout at T0 |

The request must never use `Land`, `Finish Catch`, `Claim Catch` or another continuation verb. It is an optional post-acquisition allocation target, not step two of Fishing resolution.

### 2.3. Resolution order

```text
Inspect exact Catch                         0 AP
Catch exact Fish                            2 AP fixture
Fish enters inventory; Fresh record occurs automatic
Fresh Catch Request becomes eligible
Inspect Supply result/recovery              0 AP
Supply one Fish or leave/scroll away        0 AP market-style commit / no action
```

The player may Sell, Keep or Process the Fish instead. The request does not reserve the Fish, auto-route it or block the next Catch.

### 2.4. Eligibility states

| Request state | Root behavior | Detail behavior |
| --- | --- | --- |
| ready, no valid Fish owned | visible locked target; inspectable | exact accepted state + payout + recovery |
| ready, valid Fresh Fish owned | selectable/highlighted target | exact stack/quantity preview before commit |
| resolved/spent | persistent context may remain visually quiet/locked | next recovery only; no second commit |
| recovered | selectable when valid item exists | same one-unit rule |

This is not a synthetic `River State`. The square owns an actual request, one-unit stock and recovery rule. If later layout cannot keep a spent request square without reading as actionable, it may leave root after resolution and return on recovery; no replacement square status is allowed.

## 3. Commerce root contract

### 3.1. Root shape while order is active

```text
COMMERCE visual language

[Standard Market]            [Processed Pantry Order]
Buy/Sell · 0 AP              Supply · 0 AP
exact quantity               needs 1 Processed Crop or Fish
```

The Pantry Order is separate from generic market pricing:

- generic Fresh and Processed sell at identity parity in the next paper baseline;
- Pantry accepts one exact Processed state and pays target-local `base +2G` comparator;
- Fresh item is invalid even if category matches;
- order resolves once, then shows/uses its own recovery;
- no list of future orders is shown.

### 3.2. Processor remains external

The Processor does not display `needed by Pantry tomorrow` or recommend an input. It only previews:

```text
input identity/state
Load 1 AP
output identity/state
ready after one Sleep
```

Player learns Pantry compatibility at the Pantry Order's native inspect, then decides whether to Load. This preserves self-directed planning and avoids a cross-Area agenda.

## 4. Exact compatibility fixture

### 4.1. Fresh Catch Request

| Item | Eligible? | Reason |
| --- | --- | --- |
| Fresh River Minnow | yes | `Fresh · Fish · River` |
| Fresh Rain Eel | yes | preserves `Fresh · Fish · River · Rain` |
| Dried River Minnow | no | `Processed`, not Fresh |
| Dried Rain Eel | no | Rain provenance remains, Fresh state lost |
| Fresh Crop/Herb | no | wrong category |

### 4.2. Processed Pantry Order

| Item | Eligible? | Reason |
| --- | --- | --- |
| Shortroot Preserve | yes | `Processed · Crop` |
| Prepared Dewleaf | yes | `Processed · Crop · Herb` |
| Dried River Minnow | yes | `Processed · Fish` |
| Dried Rain Eel | yes | `Processed · Fish · River · Rain` |
| Fresh Shortroot/Minnow | no | Fresh state |
| Prepared Wild Herb | no in minimum comparator | Pantry accepts Crop or Fish only; Forage remains distinct |

The exact accepted category breadth is still a fixture. The important contract is that state and origin remain legible and invalid items do not highlight.

## 5. Timing and recovery fixture

| Context | First paper window | Recovery | Miss consequence |
| --- | --- | --- | --- |
| Fresh Catch Request | D8 | D14 | no Fish/request lock; next request reappears |
| Processed Pantry Order | D13 | D17 | Processor/base market remain; order reappears |

- Dates stay `[FIXTURE]`; they are not final calendar content.
- Recovery is shown only at the request/order source inspect.
- No context is copied to global Weather/Season rail, index, Journal agenda or recommended-action UI.
- If target persists until fulfilled in a future content version, it must replace—rather than stack with—the recurrence rule; do not combine persistence plus repeated copies.

## 6. A6/Q4 action validation

### 6.1. D8 Fresh flow

```text
Care 2
Catch 2
Supply Fresh Catch at T0
= 4 AP; 2 AP remain
```

The route can still Work, Load a different item or use another source. Supply is not a second Catch action and does not change atomic Fishing resolution.

### 6.2. D13–D14 Processed flow

```text
D13: inspect Pantry 0 → choose input → Load 1 AP
Sleep: output becomes ready
D14: collect 0 → Supply Pantry at T0
```

On D14, the route may also Catch and fulfill the recovered Fresh target because one-slot Processing and Catch use different items. This is allowed but not mandatory; acquisition AP and slot choice still constrain the route.

### 6.3. Q4/Weather consequences

- Project M/E/B dates remain WD D5/D7/D12 and WS D5/D7/D11 unless player chooses other optional collisions such as Bram Gift.
- D8/D14 Fresh supply uses no extra AP beyond Catch, so it does not become a hidden Fishing tax.
- D13 Load fits both Weather arms but only has target-local value for one item.
- A5 can skip Load/order without losing the system; A7 surplus cannot manufacture universal +Gold because generic market parity remains.

## 7. Target/card information hierarchy

### 7.1. Root square minimum

Fresh Catch Request:

- identity/role field;
- `SUPPLY` action art distinct from Catch art;
- `0 AP` upper-corner cost;
- `Fresh Fish · River · ×1` requirement;
- short result `target-local payout`;
- ready/locked/spent state.

Processed Pantry Order:

- pantry/order identity field;
- `SUPPLY` action art;
- `0 AP` upper-corner cost;
- `Processed Crop/Fish · ×1` requirement;
- short result;
- ready/locked/spent state.

### 7.2. Detail panel

Both panels include:

- exact eligible stack previews;
- invalid-state reason (`Dried is not Fresh`, `Fresh is not Processed`);
- one-unit consumption;
- payout before commit;
- resolve/spent consequence;
- next recovery wording;
- explicit `Catch/Load happens elsewhere` boundary.

No full rule paragraph, future order list or reward pool is placed on the root square.

## 8. Cross-system safety

| Risk | Boundary/result |
| --- | --- |
| River request reads as Catch step two | separate `Supply` verb; owned-item prerequisite; T0 vs Catch 2 AP |
| Commerce becomes objective hub | only Processed order lives there; Fresh target stays River; ordinary market remains independent |
| Processor creates its own demand | Pantry external at Commerce; Processor only transforms state |
| Person becomes prerequisite | no Person/Heart in minimum contract |
| Order list becomes agenda | current target only; recovery at native inspect; no global/future list |
| Square state masquerades as target | each square owns an actual commit/recovery; no Fish Record or Area State square |
| Same-Season requirement | skip/recovery and persistent items/queue; S18 is horizon, not deadline |

## 9. Naming/content boundaries

Working functional labels:

- `Fresh Catch Request` at River;
- `Processed Pantry Order` at Commerce.

They deliberately avoid inventing a canonical buyer, restaurant, Person or fiction. Product naming can later choose a concrete owner without changing the contract, provided:

- Fresh target remains River-owned;
- Processed target remains Commerce-owned;
- no Heart/ability prerequisite is introduced;
- reward does not become a universal market multiplier.

No raster art/card is created in this step.

## 10. Verdict

1. `[OWNER SELECTED PAPER DIRECTION]` Carry distributed target ownership: Fresh Fish at River, Processed Crop/Fish at Commerce.
2. `[PAPER CONTRACT]` River request is a separate optional `Supply` target after acquisition, never a second Catch step.
3. `[PAPER CONTRACT]` Commerce Pantry is external demand; Processor only changes state with Load 1 AP + Sleep.
4. `[PAPER CONTRACT]` Both use one-unit target-local value, explicit state compatibility and native recovery; no global agenda.
5. `[REGRESSION PASS]` Q4/A6/WD+WS timing, A5 skip safety, A7 dominance guard and S∞ remain intact.
6. `[OPEN — FRESH PLAYER]` A new player must still demonstrate that Catch and Supply are two optional verbs and that Pantry demand is not a universal Processing rule.
7. `[BOUNDARY]` Final names, owner fiction, cadence, payout and art remain unapproved.

## 11. Stop gate

Mechanical/content contract work can proceed no further without either:

- fresh-player comprehension evidence for `Catch → owned Fish → optional Supply`; or
- product-owner subjective direction on final owner fiction/naming/reward flavor.

Do not rerun completed orientation/Weather fixtures, create raster art or implement runtime to bypass this gate.

## 12. Informed-owner wording check 01 — failed

Ngày check: 2026-09-22.

Stimulus:

```text
[River Minnow]
CATCH · 2 AP
Get 1 Fresh River Fish

[Fresh Catch Request]
SUPPLY · 0 AP
Need: 1 Fresh River Fish
Get: 6G
```

Owner response: **không hiểu ý nghĩa lá `Fresh Catch Request`**.

Classification:

- `[FAIL — TARGET PURPOSE]` title mô tả một system abstraction (`Request`) thay vì một actor/service dễ nhận;
- `[FAIL — VERB]` `Supply` không nói rõ supply cho ai hoặc đây là Sell/delivery allocation;
- `[RISK]` lặp chữ `Catch` cạnh exact Catch target làm card dễ đọc như phần tiếp theo của Fishing resolution;
- không có fresh-player claim; đây là informed-owner evidence.

Correction candidate cho check kế:

```text
[Fish Buyer]
SELL FRESH FISH · 0 AP
Pay: 1 Fresh River Fish
Get: 6G
```

Candidate giữ distributed ownership và exact Fresh compatibility nhưng đổi từ abstract request sang actor + familiar transaction. Chưa accepted cho tới khi owner hiểu đúng mà không cần giải thích thêm.

## 13. Source audit correction — `Fish Buyer` retracted

Source check against [Game design source](GAME-DESIGN-SOURCE.md) found:

- the original design supports NPC cards, NPC `Request` interactions and Daily Request event cards;
- MVP role examples include `Shopkeeper`, `Fisher` and `Builder`;
- original Selling uses a `Shipping Bin` and pays Gold at end of day;
- no canonical `Fish Buyer`, no River buyer role and no rule where that character buys Fish are defined.

Therefore:

- `[RETRACT]` `Fish Buyer / Sell Fresh Fish` is not a source-backed correction;
- do not promote the example `Fisher` role into a buyer/request issuer without an explicit content decision;
- owner selection `D — distributed ownership` remains recorded, but the River target owner/meaning is reopened;
- Commerce Pantry and target-local Processing direction remain independently valid;
- current informed-owner result is a failure, not acceptance.

The next content step must either use an explicitly approved existing request/NPC role or remove the River premium target from the minimum baseline. It must not invent an NPC solely to repair Processing balance.

## 14. Owner follow-up — remove River premium target

Product owner selected the second source-audit path: remove the River premium target from the minimum baseline.

Current result:

- `[OWNER SELECTED PAPER BASELINE]` Sections 1–12 no longer define the active River contract.
- River contains the exact Catch target only.
- Ordinary Fresh Fish sale uses the source-backed `Shipping Bin`: 0 AP commit, Gold at end of day.
- No `Fresh Catch Request`, `Fish Buyer` or `Supply` target exists in the minimum baseline.
- Commerce Pantry remains a valid bounded Processed target at Commerce.
- Generic Fresh/Processed market value remains equal by identity; Pantry premium is target-local.
- The earlier choice `D` remains part of the decision trail, but the distributed two-target bundle is not carried forward.

Mechanical recheck: [Fish sale / Processing rerun 08](FISH-SALE-PROCESSING-NO-RIVER-BUYER-RERUN-08.md).

There is no remaining gate to test whether players distinguish River `Catch` from `Supply`, because the latter has been removed. A future Fresh Fish request must enter as independently approved content, not as a required Processing-balance patch.

## 15. Final owner follow-up — remove Commerce premium target

The corrected `Shop / Sell Dried Fish` presentation passed informed-owner comprehension, including exact item, Gold, 0 AP and no deadline. The owner then rejected its systemic purpose: ordinary Shop/Shipping Bin selling already exists, so a permanent premium sale card would only duplicate selling to patch Processing value.

Current result:

- `[REJECT]` Remove Commerce Pantry, Shop Order and Sell Dried Fish from the active baseline.
- `[OWNER DECIDED]` Processed items receive no universal or target-local sale premium in the current baseline.
- `[DEFERRED]` Processor is not a validated minimum economic branch until an actual recipe, Gift, Project, Help Wanted or Special Order needs Processed state.
- `[SCHEDULED LATER]` Develop Help Wanted before Special Orders after core Year 1 dependency gates; neither is current content.

Evidence: [Commerce informed-owner test 09](COMMERCE-PANTRY-INFORMED-OWNER-TEST-09.md). Roadmap: [Help Wanted / Special Orders deferred development roadmap 10](REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md).
