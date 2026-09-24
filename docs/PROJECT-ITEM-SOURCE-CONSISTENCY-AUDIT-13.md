# Project/item/source consistency audit 13

Ngày: 2026-09-23.

Trạng thái: **closed — current Q4 Project/source graph is internally consistent at paper level; PJ-X fee later resolved to X0 no-fee**. This audit follows the R3 roster decision and checks only active core Year 1 dependencies. It does not rerun completed calendar simulations, change runtime, create Stone art or promote comparator values to final balance.

Superseding identity note 2026-09-23: [consolidated proposal 23](CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md) later selects inventory labels Wood/Stone/Ore and Project name Grove Footbridge. Fallen Wood/Plain Stone/Seam Ore/Upper-Grove Footbridge below remain historical fixture aliases; contracts are unchanged.

Nguồn:

- [Project quantity/Work A6–S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md)
- [Mine later-discovery/source audit 03](MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md)
- [Mine Stone refresh/Project timing 05](MINE-STONE-REFRESH-PROJECT-TIMING-05.md)
- [Content-minimum registry 01](CONTENT-MINIMUM-REGISTRY-01.md)
- [Year 1 package v1](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md)
- [Dependency graph v1](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md)

## 1. Fixed active contract

### Mine

- `Direct Descent`: `1 AP → Depth +1`; no material.
- CP3 accepted fixture may expose Ore ready for `Extract`; this preserves the accepted v0.2.4 action-comprehension board and the exact A6/S18 Project traces.
- `Search Side Tunnel`: discovery action at the current frontier; no Depth.
- From CP6, band preview can make Stone available. First Stone source uses Search once → exact `Exposed Stone` → Extract.
- Extract grants the exact material and never increases Depth.
- Stone source persists `ready → spent → ready after Sleep`; later units require Extract only.
- Search/Extract are optional source actions, not mandatory checkpoint tolls.

The CP3 ready-Ore fixture and CP6 Search-once Stone fixture are intentionally different source-introduction cases. Neither permits Direct Descent to yield material.

### Projects

| Project | Active paper requirement | Reward role | Fee status |
| --- | --- | --- | --- |
| `PJ-M` Water Trough | 1 Wood + 1 Ore + 4 Progress = 2 Work | recurring Water relief | no fee |
| `PJ-B` Harvest Bench | 1 Wood + 1 Stone + 4 Progress = 2 Work | Harvest/Plant burst relief | no fee |
| `PJ-X` Upper-Grove Footbridge | material + Work; exact quantities remain comparator | optional context/source connection | owner-selected X0: no fee |

Project contributions persist across Sleep, Season and Year. `PJ-X` never gates Mine, Grove or either relief Project.

## 2. Source-to-demand matrix

| Item | Active source | Current demand | Alternative use | Recovery |
| --- | --- | --- | --- | --- |
| Fallen Wood | deterministic Woodlot action | M/B and optional X | Sell/Keep | source repeats |
| Seam Ore | CP3 exposed-source fixture; Extract separate from Depth | M | Sell/Keep | source state persists; exact cadence still fixture |
| Plain Stone | CP6-or-later Search-once exposed source | B and optional X | Sell/Keep | source ready after Sleep |
| Work Progress | explicit Work action, 2 Progress/action | M/B; X comparator | choose which revealed Project receives Work | contribution persists |
| Gold | ordinary Shipping Bin/market economy | Seed restock/profile access | liquidity/Keep | no active Project fee |

No material exists solely to feed one Project, and no Project needs a Processed item, request/order or Person ability.

## 3. Gate audit

### `PJ-M`

Layers: known Wood + CP3 Ore allocation + two Work actions. Removing the old Gold fee avoids a four-layer Ore-access/Ore-allocation/fee/Work gate. Normal Water remains available if delayed.

### `PJ-B`

Layers: known Wood + CP6 Stone source + two Work actions. The source is recoverable and may be discovered before Project reveal, but no global agenda tells the player to stockpile it. Normal Harvest/Plant remains available if delayed.

### `PJ-X`

Owner-selected X0 uses material + Work only. Skipping it preserves every base route, and its context-opening reward—not a permit—distinguishes it from M/B.

Result: no active Project has an unrecoverable source, one-Person gate, same-Season deadline or hidden mandatory fee.

## 4. Shared-allocation check

- Wood appears in M/B/X, so gathering it creates allocation rather than a single-use recipe token.
- Ore can fund M or be sold/kept; X0 does not add a permit-funding fork.
- Stone can fund B or X. If the first unit goes to one, the source refreshes after Sleep for the other; no repeated Search tax.
- Work may overlap between revealed Projects. R3-K can redistribute the same total Progress but cannot increase it; normal Work always remains sufficient.
- `S∞` allows stockpiling, but native inspect only exposes actual current Project/source information; no `Tomorrow Targets` list is restored.

## 5. Registry correction

The old registry still described `Safe Mine → Stone + deterministic Depth`, which contradicted the accepted Mine grammar. It has been corrected to:

```text
Direct Descent → Depth only
CP3 Exposed Ore → Extract Ore, no Depth
CP6+ Search Side Tunnel → reveal Exposed Stone once
Exposed Stone → Extract Stone, no Depth
Sleep → spent Stone source becomes ready
```

Processing-dependent route endpoints in the registry were also relabeled conditional so they cannot be counted as active item demand.

## 6. Rerun decision

No calendar rerun is needed. [Project rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md) already used the same active assumptions:

- CP3 Ore ready for Extract;
- CP6 Search + Extract Stone;
- persistent Stone refresh after Sleep;
- Q4 M/B quantities and Work;
- no M/B fee;
- X0 no-fee shape; historical XP was a stricter tested comparator.

The registry edit restores the vocabulary document to the already-tested arm; it does not introduce a new timing rule.

## 7. Verdict

1. `[PASS]` M/B Q4 requirements have exact, recoverable sources and no redundant Gold gate.
2. `[PASS]` X remains a distinct optional context Project rather than a core gateway.
3. `[PASS]` Stone supports B/X allocation without one-unit lock or repeated Search grind.
4. `[PASS]` Direct Descent remains pure Depth progress.
5. `[PASS]` R3-K changes allocation only; no Person becomes required.
6. `[OPEN FIXTURE]` X material/Work quantities, source cadence, prices and exact checkpoint numbers are not final product locks; fee shape is closed at X0.

## 8. Next core blocker

Follow-up: product owner selected `B3 — M+B+X` in [content quantity boundary audit 14](CORE-CONTENT-QUANTITY-BOUNDARY-AUDIT-14.md), then selected X0 no-fee in [permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md). Processor and deferred request systems cannot be used to replace the removed fee.
