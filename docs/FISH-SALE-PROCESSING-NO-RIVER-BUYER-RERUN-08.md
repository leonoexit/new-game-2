# Fish sale / Processing rerun 08 — no River buyer

Ngày: 2026-09-22.

Trạng thái: **partially superseded**. This rerun correctly removes the River premium target and restores Shipping Bin sale, but its retained Commerce Pantry comparator was later rejected after informed-owner test 09. Section 9 records the current owner decision. Không tạo NPC, art hoặc runtime content.

## 1. Owner decision

- `[OWNER SELECTED PAPER BASELINE]` Không có `Fresh Catch Request`, `Fish Buyer` hoặc `Supply` target tại River.
- `[SOURCE-BACKED SELLING]` Ordinary Fish sale dùng `Shipping Bin`: commit 0 AP, item được đánh dấu Sold, Gold nhận cuối ngày.
- `[PAPER BASELINE]` Fresh và matching Processed item có cùng generic sell value.
- `[PAPER BASELINE]` Commerce Pantry có thể nhận một exact Processed item và trả target-local premium; đây không phải universal Processed markup.
- Một Fresh Fish request chỉ được thêm lại khi có content owner/request cụ thể được duyệt; nó không cần thiết để baseline hiện tại hoạt động.

Quyết định này thay thế phần River của direction `D`. Commerce Pantry vẫn giữ; distributed Fresh/Processed pair không còn là baseline.

## 2. Exact item flow

```text
River Catch
  → acquire exact Fresh Fish
  → choose:
       Shipping Bin 0 AP → Sold → Gold at end of day
       Keep / valid Gift / later approved request
       Load Processor 1 AP → Sleep → matching Dried Fish

Dried Fish
  → Shipping Bin at the same generic value
  → or one visible Commerce Pantry target for a bounded premium
```

Fish Record vẫn xảy ra khi acquisition đủ điều kiện và không consume item. River root chỉ chứa exact Catch target; không có target giao/bán thứ hai.

## 3. Why Fresh Fish can remain valid without a premium request

Generic Shipping Bin comparison:

| Choice | AP after Catch | Earliest payout | Generic value | State consequence |
| --- | ---: | --- | ---: | --- |
| Sell Fresh | 0 | end of current day | base | item consumed by sale |
| Process then sell | Load 1 | after one Sleep and the later sale | same base | loses Fresh compatibility |
| Keep Fresh | 0 | none yet | option value only | retains Fresh identity |

With market parity, Process-then-generic-sell is not an automatic upgrade: it spends 1 AP, delays realization, and changes compatibility without adding Gold. Fresh Fish therefore needs no artificial premium buyer merely to remain non-dominated.

This does not claim that every Fresh Fish must have a special use. It only requires that Processing be chosen for an actual Processed target rather than as a mandatory market step.

## 4. Commerce Pantry fixture

- First paper appearance remains D13 in the A6/S18 trace; D17 recovery remains a fixture.
- The current target accepts one exact `Processed · Crop` or `Processed · Fish`.
- Fixture reward remains matching base +2G.
- If the player has no matching Processed item, the target stays available long enough to Load once and resolve after Sleep; it is not a same-day delivery trap.
- Skip does not lock market, Catch, Processor or progression.
- Target and recovery live at Commerce inspect only; no global future-order agenda is added.

Names, days, reward and category breadth remain `[FIXTURE]`.

## 5. A6/S18 decisive trace

| Window | Available choice | Result without River buyer |
| --- | --- | --- |
| D8 common Catch | Catch, then Bin Fresh / Keep / Load | Bin gives end-of-day liquidity; Load has no generic profit and may correctly be skipped |
| D12 Project/Person collision | Project/Gift still compete for AP | no River target adds another task |
| D13 Pantry appears | inspect exact Processed demand; Load one matching item if desired | Processor gets a bounded reason to run |
| D14 processed output + Catch | satisfy Pantry with output; new Fresh Catch remains Bin/Keep/Load choice | processed and fresh allocations coexist without a River transaction card |
| D17 Pantry recovery | at most one additional premium target | spare AP cannot convert the whole inventory into extra Gold |

WD/WS Project dates do not move: removing a 0 AP River target cannot add workload, while the Pantry Load trace is unchanged.

## 6. Guard checks

| Guard | Result |
| --- | --- |
| A5 overload | pass: no extra River action; ordinary sale costs 0 AP |
| A7 surplus | pass: spare AP alone creates no market uplift; Pantry remains one-unit bounded demand |
| S12 boundary | pass: missing D13 Pantry does not lock Fish use or progression; Shipping Bin remains available |
| S18 recovery | pass: D13 target and D17 recovery fit; neither is a Season requirement |
| S∞ storage | pass for dominance: hoarding does not create universal premium; only the bounded visible Pantry target pays more |
| one-slot Processor | pass: target selects at most one current conversion; idle remains valid |

## 7. Verdict

1. `[PASS]` River needs only the exact Catch target in the minimum baseline.
2. `[PASS]` Fresh Fish remains a valid allocation through 0 AP Shipping Bin sale, earlier payout and retained Fresh compatibility; it does not need a premium buyer.
3. `[PASS]` Generic Fresh/Processed market parity prevents Processing from becoming an automatic sale upgrade.
4. `[PASS]` Commerce Pantry gives one-slot Processing bounded target-local value without prescribing every Catch.
5. `[REJECT]` Do not add `Fresh Catch Request`, `Fish Buyer`, River `Supply`, or promote the example `Fisher` role into a buyer as an economy patch.
6. `[OPEN]` Final Pantry owner/name, cadence, reward and recipes need later content judgment; a future source-backed Fresh request may be tested independently.

## 8. Handoff

Carry this adjusted baseline into the Year 1 package and progression graph:

- River: Catch only;
- ordinary Fish sale: Shipping Bin, 0 AP commit, end-of-day payout;
- generic Fresh/Processed sale: parity by identity;
- Processor: one slot, Load 1 AP, output after Sleep;
- Processed premium: bounded Commerce Pantry only.

No Catch-vs-Supply comprehension test remains. Fresh-player risk stays open for the already accepted general River Catch and Commerce target presentation, not for a removed card.

## 9. Superseding owner decision — no Processed premium

[Commerce informed-owner test 09](COMMERCE-PANTRY-INFORMED-OWNER-TEST-09.md) showed that `Shop / Sell Dried Fish` could communicate item, reward, 0 AP and no deadline, but the owner correctly challenged why a separate card exists when ordinary selling is already available.

Current baseline therefore supersedes the Commerce portions of sections 1, 2, 4–8:

- keep River Catch only and ordinary Shipping Bin sale;
- keep generic Fresh/Processed sale parity;
- remove Commerce Pantry, Shop Order and every target-local Processed sale premium;
- do not count Processor as a positive minimum-loop branch until actual approved content needs Processed state;
- schedule Help Wanted and Special Orders later, in that order, without treating either as current content.

Roadmap: [Help Wanted / Special Orders deferred development roadmap 10](REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md).
