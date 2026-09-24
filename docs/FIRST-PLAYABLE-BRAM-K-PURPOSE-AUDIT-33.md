# First-playable Bram/K purpose audit 33

Ngày: 2026-09-23.

Trạng thái: **purpose audit; current K wording fails the V0 usefulness gate; no replacement ability selected**. This follows the [Heart/Gift cadence test 32](FIRST-PLAYABLE-HEART-GIFT-CADENCE-PAPER-TEST-32.md) and the owner's direction to resolve Bram before more Heart-number tuning. It uses existing V0 content only. No runtime, art, added Project, altered Q4 cost, or PJ-X reward is proposed here.

Follow-up 2026-09-23: the owner asked to [review Bram's functional role in V0 while keeping Bram as Person](FIRST-PLAYABLE-BRAM-FUNCTIONAL-ROLE-REVIEW-34.md). Audit 34 checks other native V0 targets and keeps Bram's ability slot open; the recommendation below to retain K is the earlier conservative baseline, not a newly confirmed functional solution.

Sources: [Person/Heart decisions](NPC-HEART-DESIGN-DECISIONS.md), [earlier K economy trace](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md), [kernel audit 02](PERSON-ROSTER-KERNEL-AUDIT-02.md), [roster decision 12](PERSON-OWNERSHIP-MINIMUM-ROSTER-AUDIT-12.md), [Q4 project rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [corrected all-Sunny crop route 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md), and [PJ-X purpose correction 31](FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md).

## 1. What is fixed, and what is not

- `[OWNER SELECTED]` `R3` carries three functional Person roles and canonical paper identities Mira=A, Nell=C, Bram=K. A Person is persistent, optional, and uses their own Heart. The amount stored per Person has a cap. The prior cap-2 result is the agreed **working paper baseline**, not a final shipped number.
- `[OWNER SELECTED Q4 PAPER BASELINE]` Water Trough and Harvest Bench each need 4 Progress. One ordinary Work action costs 1 AP and adds 2 Progress to one Project, so each needs two ordinary Work actions. Materials and Progress persist.
- `[OWNER-DECIDED K BOUNDARY / FIXTURE VALUES]` [Resource economy simulation 01](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md) records the user's rule that K may redistribute one Work action between Project targets **without increasing total Progress or AP**. The `2` versus `1+1` numbers follow the current 2-Progress Work fixture; exact card wording remains paper-level. The `R3` selection does not authorize a different effect automatically.
- `[PURPOSE LIMIT]` PJ-X/Upper Grove has no defined playable reward. It cannot be counted as a real second Project target just to justify K. No Person is needed for M/B or for Mine/Farm/core.

## 2. Why the old evidence no longer transfers

The [earlier K economy trace](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md) used **two simultaneous Projects that each needed 3 Progress**. Ordinary Work 2+2 per Project took four actions and wasted one Progress on each. Splitting one Work as 1+1 could finish both in three actions. That was a valid result for that historical **3/3 fixture**.

Q4 changed M/B to **4/4 Progress**. Four ordinary Work actions give exactly 8 Progress, complete both, and waste none. Any conserved-progress K schedule also needs at least `ceil(8/2) = 4` Work actions. When only one Project is revealed, K's `2` mode equals ordinary Work and the `1+1` mode has no second target. The corrected first-playable farm route generally reveals M before B, so the abstract simultaneous-target case is not its main path. Even if both were available, the 4/4 arithmetic removes the earlier one-Work saving. Spending Bram Heart on current K has no demonstrated gain in AP, material, output, access, or completion day.

This is a **contract regression in K's usefulness**, not a failure of the owner's chosen R3 roster or a reason to alter Q4.

## 3. Bounded alternatives on existing M/B

`K0` is the only arm inside the owner-decided conserved-output boundary. `K1` and `K2` are **counterfactual boundary checks**, not selectable recipes under current decisions: both add Progress per Heart and would need the owner to reopen K's no-output-increase rule. All keep normal Work and all Project sources available without Bram.

| Arm | Rule under cap-2 working baseline | Native effect on one Q4 Project | What the corrected A6/S18 route shows | Disposition |
| --- | --- | --- | --- | --- |
| `K0` keep split | Spend 1 Heart to assign the same 2 Work Progress as `2` or `1+1`. | None on a single Project; no total-Work saving for 4/4 M+B. | No useful activation is demonstrated. | **Reject as V0 functional ability wording**; keep as historical comparator. |
| `K1` focused Work — **outside current contract** | Spend 1 Heart before a 1-AP Work action on a revealed, material-ready Project; that Work adds **4 instead of 2 Progress**, capped at its requirement. | Completes one Q4 Project in one Work, saving one Work AP on the Project day. No material/source bypass, but **total Progress increases**. | M route is 7→6 AP, B route 8→7 AP. With the fixture's 1-AP Bram Gift paid on D6/D12, M still completes D8 and B D18 in test 30. The Gift AP plus saved Work AP break even in total, while moving one AP across days at an item cost. | Demonstrates what relaxing conservation could buy; no payoff strong enough to request that reversal now. |
| `K2` free contribution — **outside current contract** | Spend 1 Heart to add 2 Progress to a revealed, material-ready Project without a Work AP. | Progress/complete a Project without spending a Work AP; **total Progress increases**. Normal Work still works. | A stored Heart can bypass the day's Work slot; this is stronger timing access than K1, but it removes the explicit Work action from that contribution. | Would require reversing the no-output-increase boundary and reviewing Project grammar; not promoted. |

For `K1`, the Gift used to obtain one Heart still costs 1 AP plus an accepted Fresh Turnip in the inherited fixture. If that Gift is paid on a different day, the saved Project AP can matter when daily AP cannot be banked. The present all-Sunny M/B route has not demonstrated a missed target or earlier completion from this transfer. Do not call a mere 7→6 or 8→7 route-AP reduction a player benefit without the day-level result. `K2` likewise needs a native use case; its mathematical strength alone does not justify it.

Neither counterfactual adds Progress to Mine Depth, Fishing, collection, or an imaginary Footbridge. Neither changes the cap-2 paper baseline. Both **conflict with the owner-decided conservation rule**, so this audit does not place them in the active K design.

## 4. Verdict and decision boundary

1. `[PAPER RESULT]` The former 3/3-project K saving is superseded for Q4 4/4 M/B. The current conserved 2-Progress split cannot justify spending Heart in V0. `K0` should not be balanced with more Gifts or more Projects.
2. `[NO REPLACEMENT SELECTED]` `K1`/`K2` show that single-Project acceleration would create a target, but both violate the existing no-output-increase decision. `K1` only shifts one AP from Work to Gift in the corrected route and consumes an item; it does not provide compelling evidence to reopen that decision. `K2` has a larger Project-grammar cost.
3. `[RECOMMENDATION]` Keep Bram's canonical paper identity, R3 roster and conserved-allocation rule intact in the active baseline. Mark his **V0 functional purpose unresolved** rather than pretending Heart tuning can fix it. Do not quietly rename K1/K2 as accepted K, restore historical 3-Progress Project costs, or manufacture PJ-X to create target density.
4. `[NEXT OWNER GATE]` The current constraints cannot supply a demonstrated Bram use on Q4 M/B. A future choice must explicitly either reopen K's conserved-output role or revisit what functional role Bram supplies in V0. Until then, Mira/Nell Gift-item and target-phase work may proceed, while Bram Heart numerical lock stays open.
