# Raw-target / Processing A6–S18 rerun 05 — target-local value, no universal uplift

Ngày chạy: 2026-09-22.

Trạng thái: **superseded as an active Processing-value solution**. This paper economy rerun preserves the tested order arms as history; sections 10–11 record later owner decisions removing every Fresh/Processed premium order and deferring positive Processor utility. Không thêm generic Load tax, storage cap, perishability, global agenda hoặc runtime content.

## 1. Fixed baseline

- Project paper baseline: `Q4`.
  - `PJ-M`: 1 Wood + 1 Ore + 4 Progress = 2 Work; no fee.
  - `PJ-B`: 1 Wood + 1 Stone + 4 Progress = 2 Work; no fee.
  - `PJ-X`: 2 Wood + 1 Stone + 6 Progress = 3 Work + selected 8G permit comparator.
- Calendar: A6/S18; WD and WS remain separate phase arms.
- Market: `T0`, exact quantity preview, 0 AP standard Buy/Sell.
- Storage: `S∞`, no cap/no perish.
- Processor: one slot; Load 1 AP; output after one Sleep; Collect 0 AP in fixture.
- Fresh/Processed keep category/subtype/origin but have different state compatibility.
- Current Project M/E/B dates under no-foreknowledge scheduler:
  - WD: D5 / D7 / D12.
  - WS: D5 / D7 / D11.
- Scroll/focus/inspect are 0 AP. Every request/Processor action remains at its native Area/context; no global `Tomorrow Targets` or recommended-action list.

## 2. Raw Produce target recheck

### 2.1. Existing native target

[Person mini-roster fixture 01](PERSON-MINI-ROSTER-FIXTURE-01.md) already supplies a concrete raw Produce target:

```text
Bram Gift accepts Fresh · Crop · Root
Shortroot Preserve is invalid
Gift 1 AP + valid Fresh Shortroot → Heart
appearance D6 / D12 in the 12-day fixture
```

This is not a new checklist or delivery Project. It is an optional Person interaction with recurring recovery, shown on Bram's native card/inspect.

### 2.2. A6/Q4 collision

| Day/phase | Without Bram Gift | If Gift Fresh Shortroot | Consequence |
| --- | --- | --- | --- |
| D6 WD | Rain burst 4 + Expansion 2 = 6 | Rain burst 4 + Gift 1 + Expansion 1 | Expansion still completes D7; one flexible AP changes use |
| D6 WS | Care/burst 5 + Expansion 1 = 6 | Care/burst 5 + Gift 1 | Expansion moves D7 → D8; Bench route moves later |
| D12 WD | Rain burst 4 + final Bench 2 = 6 | Gift displaces one Bench action | B moves D12 → D13 |
| D12 WS | post-B sunny peak 5 | Gift uses the one remaining AP | Gift fits without changing B D11 |

Raw Produce therefore has a real target with route/Weather consequences:

- Gift wins when Bram Heart has a valuable K target;
- Processed Produce is invalid for that Gift;
- skipping Gift preserves Project timing and the Produce can Sell/Process/Keep;
- D6/D12 recovery prevents one collision from becoming a permanent miss.

`[PASS]` Produce does not need another generic Fresh request solely to defeat Processing. Seed liquidity + Bram compatibility already create two distinct raw uses. A future crop request may exist, but it is not required by this rerun.

## 3. Raw Fish target recheck

### 3.1. Why current record is insufficient

Current Fish edges are:

- acquire exact Catch through atomic commitment;
- record first Fish/Rain condition without consuming the item;
- Sell Fresh now;
- Process into Dried Fish after one Sleep.

The record happens on acquisition and does not consume. Player can record a Fish and then Process that same item. Therefore `Fresh Rain record` protects condition identity but **does not create an allocation choice after acquisition**.

Immediate Fresh Sell only beats Processing when Gold is needed before output completes. Under T0 and one-Sleep processing, many A6 catches can be Loaded and sold before the next Seed/Project decision. Liquidity alone is not a reliable raw Fish target across S18.

### 3.2. Three Fish-target arms

| Arm | Rule | Result |
| --- | --- | --- |
| `F0 — record only` | Fresh record + ordinary market | Fail: record then Process remains possible; non-urgent Fish trends to Dried |
| `F1 — selective native order` | One visible Commerce `Fresh Catch Order` accepts one `Fresh · Fish · River`; Dried invalid; optional recovery next order | Pass: one Fish has a consumptive raw target without changing every Catch |
| `FA — order every Catch` | Every Catch has a matching Fresh premium | Reject: Processor loses Fish role and Commerce becomes a repeating to-do list |

Carry `F1` as the minimum paper comparator.

### 3.3. `F1` exact fixture

- Order appears at Commerce on D8 and D14 for the A6/S18 slice; dates are fixture, not final cadence.
- Native Commerce inspect shows accepted state, one-unit limit and next recovery. It is not copied to the global Weather rail.
- Standard market commit remains T0.
- Order pays the same total Gold as the matching Dried Fish comparator:
  - River Minnow: 6G Fresh-order vs 6G old Dried comparator;
  - Rain Eel: 8G Fresh-order vs 8G old Dried comparator.
- Because Fresh order pays now with no Load/Sleep, it wins for one eligible Fish while active.
- Skip leaves Catch/market/Processor intact; next order is recovery, not a fail state.

The equal payout is a sensitivity fixture. Its purpose is to isolate state/timing, not set final Fish prices.

### 3.4. A6 collision

On D8 or D14, a mixed farm/Fish route can spend:

```text
Care 2 + atomic Catch 2 = 4 AP
Fresh Catch Order at T0 = 0 AP
2 AP remain for one Load/Work/source choice
```

The raw Fish order does not consume all daily capacity or require Processor shutdown. Player can fulfill one Fresh order and Load a different stored item in the same day. `F1` adds a selective raw winner; it does not make all Fish stay Fresh.

## 4. Processing value arms

Raw targets alone do not fix the generic-market dominance condition under `S∞`: with enough future slack, any positive universal processed sell uplift eventually beats ordinary Fresh Sell for an item with no active target.

| Arm | Generic market rule | Target rule | Result |
| --- | --- | --- | --- |
| `U2` | every Processed item sells Raw +2G | Fresh/Processed targets remain | Fail: after Q4 relief, non-target backlog trends to Processor |
| `U1` | every Processed item sells Raw +1G | same | Soft fail: weaker, but still an eventual strict market upgrade under S∞ |
| `TV — target-local value` | generic Processed sell equals matching Raw sell | Fresh Order/Gift and Processed Pantry pay/accept exact state | Pass comparator: conversion changes compatibility, not every item's base value |

`TV` does not reduce Load below 1 AP or add fuel/tax. It removes the universal price multiplier and moves premium value onto bounded, inspectable contexts.

### 4.1. `TV` fixture

Generic market parity:

| Identity | Fresh/Raw sell | Processed generic sell |
| --- | ---: | ---: |
| Shortroot | 4G | Shortroot Preserve 4G |
| Dewleaf | 4G | Prepared Dewleaf 4G |
| Tallbean | 6G | Tallbean Preserve 6G |
| River Minnow | 4G | Dried River Minnow 4G |
| Rain Eel | 6G | Dried Rain Eel 6G |
| Wild Herb | 4G | Prepared Wild Herb 4G |

Bounded target premium:

- one Commerce `Processed Pantry Order` accepts one exact `Processed · Crop` or `Processed · Fish` in the fixture;
- order value is matching base +2G;
- D13 is the first paper context; D17 is recovery;
- order is optional, one unit, and lives only on its native Commerce card/inspect;
- Fresh is invalid; generic market remains available if the order is skipped.

Names, days, payout and category breadth are `[FIXTURE]`. The carried principle is target-local value, not a specific pantry content card.

## 5. A6/S18 one-slot trace under `Q4 + F1 + TV`

### 5.1. Decisive windows

| Window | WD | WS | Processing/raw decision |
| --- | --- | --- | --- |
| D3 first output | Project uses 2 spare AP | sunny peak uses all 6 | no automatic Load; Fresh Sell/Keep survives |
| D6 Bram + output | Gift can replace 1 Expansion AP without moving E D7 | Gift moves E to D8 if chosen | Fresh Crop target has visible opportunity cost |
| D8 common Catch/order | Care 2 + Catch 2; 2 AP remain | same | fulfill Fresh Fish order; at most one different item Load |
| D9 burst | Rain leaves 2 flexible AP | sunny peak leaves 0 | WD may Load; WS cannot |
| D12 Bram/Bench | B consumes remaining WD capacity | B already D11; 1 AP remains | WD chooses Gift vs B delay; WS can Gift; Load is not automatic |
| D13 Pantry appears | Care 2; 4 AP flexible | Care 2; 4 AP flexible | inspect order, Load exactly one chosen Crop/Fish |
| D14 Catch/order | Care 2 + Catch 2; 2 AP remain | same | fresh Catch can fill F1; D13 processed output can fill Pantry |
| D15 post-B burst | Rain peak 3; 3 AP remain | Rain peak 3; 3 AP remain | one-slot limits conversion despite spare AP |
| D17 Pantry recovery | Care 2 + optional Herb 1 | same | one additional processed target; other items stay Sell/Keep/raw-target candidates |

### 5.2. Dominance result

Under `U2`, D13–D18 spare AP plus S∞ lets the player feed non-target inventory into Processor for a guaranteed universal uplift. One slot changes order, not eventual correctness.

Under `TV`:

- Load without a Processed target gives no generic Gold gain and loses Fresh compatibility;
- Fresh Shortroot can win at Bram;
- Fresh Fish can win at the selective order;
- one Crop/Fish wins Processing when Pantry is active;
- immediate ordinary Sell wins when Gold is needed and no state target is active;
- Keep retains option value only when an actual native context is visible/known;
- Processor may be idle. This is valid, not a failure.

The Processor therefore changes an item's state for a reason. It is not a mandatory step between acquisition and market.

## 6. One-slot and route checks

### 6.1. Producer

- Before relief, Project/farm peaks frequently leave no Load AP.
- Q4 does not make every output auto-process: D6/D12 Fresh Gift and Project timing compete directly.
- After relief, `TV` prevents spare AP alone from creating value; Pantry target selects at most one input per occurrence.

### 6.2. Collector

- Fresh Catch Order consumes one Fish after its record; Dried Fish is invalid.
- Pantry can select a different Fish or Crop, so one slot chooses identity.
- Record-only remains knowledge/provenance, not an excuse to count raw allocation twice.

### 6.3. Connector

- Wild Herb already stays raw for Nell/Person-Q style compatibility.
- Mine materials remain non-processable.
- Processor use is optional and does not gate Depth, Stone recovery or `PJ-X`.

### 6.4. A5/A7 guards

| Guard | Result |
| --- | --- |
| A5 overload | `TV` does not demand Load; raw Sell/Gift/order remain usable without a Processor tax |
| A7 surplus | spare AP no longer turns every non-target item into +Gold; Pantry count/state limits value |
| S12 boundary | skipped Pantry/order recovers later; owned items and queue persist |
| S18 recovery | D14 Fresh order and D17 Pantry recovery fit without making fulfillment a Season requirement |

No generic Load tax is added. `Load 1 AP + one Sleep + one slot` remains the transformation cost when a target makes transformation worthwhile.

## 7. Presentation boundary

Native source only:

- Bram card/inspect: `Fresh · Crop · Root`, Gift cost/result, next Person recovery.
- Fresh Catch Order at Commerce: accepted Fresh Fish state, one-unit limit, payout, next order recovery.
- Processor inspect: exact input/output, Load 1 AP, ready after Sleep, state compatibility change.
- Processed Pantry Order at Commerce: accepted Processed state, one-unit limit, payout/recovery.

Global Weather/Season rail remains Season, Today, Tomorrow Weather and AP only. No target summary, agenda, recommended action or square status card is added.

## 8. Verdict

1. `[PASS — PRODUCE RAW TARGET]` Bram's existing Fresh Shortroot Gift is enough to make at least one Produce output compete with Processing on D6/D12; no generic Crop request is required for this purpose.
2. `[FAIL — FISH RECORD ONLY]` Fresh acquisition record is non-consuming and can precede Processing, so it does not protect raw Fish allocation.
3. `[DIRECTION — FISH TARGET]` Carry one selective native Fresh Catch Order (`F1`) as paper comparator; reject an order for every Catch.
4. `[REJECT]` Universal `+2G` and `+1G` Processed market uplift remain eventual strict upgrades under S∞ when no raw target is active.
5. `[PAPER BASELINE]` Carry `TV`: generic market parity by identity, with value premiums/compatibility on bounded Fresh or Processed native contexts.
6. `[PAPER RESULT]` Under Q4/A6/S18, one-slot Processing remains usable at D13/D17 targets but is not automatic after relief; no extra Load tax is needed.
7. `[BOUNDARY]` Fresh Catch/Pantry names, exact days, payout and recipe list are fixtures, not owner-accepted content. Final desirability/readability needs actual content choice and later fresh-player evidence.

## 9. Handoff / stop

The mechanical dominance question now has one non-dominated paper direction: selective raw target + target-local processed value.

The next unresolved layer is content/product feel rather than another generic economy equation:

- what the Fresh Catch context actually is (buyer, Person request, meal/service, etc.);
- what processed target identity belongs in the world;
- whether generic market parity feels rewarding enough despite Processor idling by design.

Do not invent a global agenda or universal premium to answer those questions. They require product-owner content direction and later fresh-player evidence before content/balance lock.

Follow-up [Fresh/Processed native context options 06](FRESH-PROCESSED-NATIVE-CONTEXT-OPTIONS-06.md) compares the content framing while holding mechanics fixed. One Commerce Kitchen context (`K`) and distributed River + Commerce contexts (`D`) both pass with different world/UI identities; Person-driven requests are rejected as the minimum economy dependency. Workstream stops at owner choice between K and D.

Product owner selected `D`. [Distributed Fresh/Processed context contract 07](DISTRIBUTED-FRESH-PROCESSED-CONTEXT-CONTRACT-07.md) validates separate `Catch` vs `Supply` verbs, native recovery and external Pantry demand without changing Q4 or adding a global agenda.

## 10. Superseding owner decision

The later source audit found no canonical `Fish Buyer` or River buyer rule, and the owner chose not to invent one. [Fish sale / Processing rerun 08](FISH-SALE-PROCESSING-NO-RIVER-BUYER-RERUN-08.md) therefore supersedes `F1` and the final handoff above:

- remove the River Fresh order from the minimum baseline;
- sell ordinary Fresh Fish through the `Shipping Bin`, with 0 AP commit and end-of-day payout;
- retain generic Fresh/Processed market parity;
- retain only bounded Commerce Pantry demand as the minimum Processed premium;
- accept Processor idle time as correct when no Processed target exists.

The revised paper check passes without a consumptive Fresh Fish premium target because Process-then-generic-sell now costs 1 AP, delays payout and adds no Gold. A future Fresh request can still exist as independently approved content; it is no longer a prerequisite for Processing balance.

## 11. Final superseding decision — no premium order

The remaining Commerce Pantry/Shop comparator was later rejected despite passing wording comprehension. Ordinary selling already accepts eligible items, so a permanent one-item premium card had no independent purpose beyond making Processing appear useful.

Carry forward only:

- generic Fresh/Processed sale parity;
- ordinary Shipping Bin sale;
- identity/state-preserving transform templates as deferred compatibility fixtures.

Do not carry any Fresh or Processed premium order from this rerun. Processor is outside the validated minimum economic loop until actual approved content needs its output. Help Wanted and Special Orders are scheduled for later paper development in [roadmap 10](REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md), with Help Wanted first.
