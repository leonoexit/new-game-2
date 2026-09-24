# Gold role after X0 audit 16

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `G0 — Seeds are enough` on 2026-09-23**. Owner-selected X0 removes the last active Project fee. This audit establishes Seed renewal + crop-profile access as the complete minimum Gold scope while deferring any broader long-horizon accumulation role. It does not invent a replacement fee, order, premium, tax, decay rule or Processor charge.

Nguồn:

- [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md), with fee/Processing sections treated as historical
- [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md)
- [COL-N independent source cadence audit 03](COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md)
- [PJ-X permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md)

## 1. Active Gold contract after X0

- Ordinary eligible items sell through Shipping Bin/market at 0 AP commit; payout resolves at end of day.
- Storage is `S∞`; no cap and no perish.
- Fresh and matching Processed items have market parity; Processor is outside the minimum loop.
- M/B/X charge no Gold.
- Shortroot has deterministic Seed restock.
- Tallbean has ordinary Seed restock and represents a longer/cash-oriented crop profile.
- COL-1 exposes a Tallbean/Dewleaf Seed choice; the unchosen profile returns through a later source cycle.
- Exact Seed prices, sell prices and stock timing remain fixtures.

Therefore the active minimum has two Gold uses inside one native system:

1. **operational renewal** — buy replacement Seed to continue a chosen crop loop;
2. **profile access** — spend Gold when a different Seed profile becomes available, while COL-1/source timing changes which profile can be chosen.

## 2. Unit-ledger consequence

Using only the historical price fixture—not a proposed lock:

| Item | Sell | Replacement Seed | Net Gold if sold and replanted |
| --- | ---: | ---: | ---: |
| Shortroot | 4G | 2G | +2G |
| Tallbean | 6G | 3G | +3G |

First-output example with 4G starting wallet and two Shortroot outputs:

Timing clarification from [Seed/Sell price paper test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md): the table below shows **end-of-day balances after the 4G starting wallet has already paid for both replacement Seeds**. Shipping Bin sale Gold arrives at day end and cannot fund that same-day purchase. The old crop label Shortroot means canonical Turnip.

| Allocation | Wallet after buying two replacement Seeds | Profile-access consequence |
| --- | ---: | --- |
| Sell both | 8G | Tallbean/profile purchase easily affordable |
| Sell one, Gift/Keep one | 4G | Profile purchase still possible but leaves little liquidity |
| Gift/Keep both | 0G | Replant is funded by starting wallet; new profile waits for later sale |

This preserves an early Sell/Gift/Keep decision after Project fees disappear. Gold-now still changes when the player can renew or diversify crops.

## 3. Late-horizon limitation

With `S∞`, no perish and positive crop margin, Gold grows monotonically whenever the player keeps selling beyond current Seed needs. Once all desired crop profiles and replacement Seeds are funded:

- another sale has declining decision value;
- prices can tune early access timing but cannot create a long-term reason to accumulate;
- Gift, Keep, Project material allocation or future approved content may beat Sell because extra Gold has no current use;
- this is not a soft lock, but it means the minimum package cannot claim a complete long-horizon Gold economy.

Do not “fix” this by restoring X permit, Processed markup, Pantry/order, transaction AP, storage pressure or a generic daily fee. Each was removed for an independent reason.

## 4. Two honest scope choices

### `G0 — Seed economy is sufficient for the minimum`

Gold's minimum role is operational renewal + crop-profile access. The core package may proceed to lock these early/mid-horizon decisions while explicitly leaving long-term accumulation for later approved content.

Benefits:

- no filler sink or duplicate system;
- Gold remains tied to a native life-sim choice the current content already needs;
- COL-1, restock timing and crop profiles give Gold both renewal and access consequences;
- consistent with X0 and the rejection of economy patches.

Tradeoff:

- minimum Year 1 cannot claim that Gold remains strategically valuable after desired Seed access is funded;
- sell-price balance is meaningful mainly around liquidity/profile timing;
- a later recipe, Tool, source option or other real purchase may still be needed before a broader economy lock.

### `G1 — require one real capability purchase before lock`

Do not call the minimum Gold economy ready until one content-native optional purchase exists beyond Seeds. It must have a real owner/source and change capability, access or choice—not merely remove Gold.

Benefits:

- gives accumulated Gold a visible medium-horizon purpose;
- lets sale prices be tested against both operational and strategic demand;
- can make Shop identity broader than Seed restock.

Tradeoff:

- expands P0 content scope and requires a new paper workstream;
- no approved candidate currently exists;
- risks duplicating Projects or inventing content solely to rescue Gold;
- Help Wanted rewards, Processed premiums and fake orders do not qualify because they create Gold income or patch another system rather than provide a justified purchase.

## 5. Guardrails for a future G1 candidate

If G1 is selected, the candidate must:

- be optional and source-owned;
- preview exact Gold cost and capability/result;
- not gate a core verb or Area;
- differ from M/B/X Projects rather than selling the same upgrade twice;
- retain recovery if skipped;
- create a real use case independent of “Gold needs a sink”;
- undergo paper economy/calendar comparison before joining the minimum.

No candidate is created by this audit.

## 6. Owner-choice gate

| Choose | Scope statement | Accepted limitation |
| --- | --- | --- |
| `G0 — Seeds are enough` | The minimum Gold economy covers renewal and crop-profile access; broader accumulation value is deferred | Year 1 minimum does not prove a long-horizon strategic Gold sink |
| `G1 — require capability purchase` | Gold must gain one real optional capability purchase before content/balance lock | Core scope expands and needs a new justified-content workstream |

This is a product-scope decision. Existing paper evidence proves early liquidity value and later diminishing marginal value; it cannot decide how broad the minimum Gold promise should be.

## 7. Owner decision

`[OWNER SELECTED MINIMUM GOLD SCOPE]` Carry `G0 — Seeds are enough` into the core Year 1 paper baseline.

Consequences:

- the active minimum Gold scope is operational Seed renewal + crop-profile access/restock;
- the minimum package may claim early/mid-horizon liquidity and diversification value, but not a complete long-horizon strategic Gold economy;
- broader accumulation value and any future capability purchase remain deferred until independently justified content needs them;
- no P0 capability-purchase workstream is opened by this decision;
- no fee, premium, order, tax, storage pressure, Processor charge or other replacement sink is added;
- exact Seed/sell prices and stock timing remain fixtures for later balance work.

## 8. Next blocker readiness

G0 closes the remaining structural Gold-scope question. The next pass is not a sink-design exercise; it is a readiness check across canonical content identity/quantity, exact balance values, evidence and implementation authorization.

That check is recorded in [core Year 1 lock-readiness audit 17](CORE-YEAR-1-LOCK-READINESS-AUDIT-17.md). Until that audit's next gate is resolved, the package remains a coherent paper baseline rather than a final content/balance or implementation lock.

## 9. Non-conclusions

- Historical 4G/2G/6G/3G numbers are not final prices.
- G0 does not reject all future Gold purchases; it defers them until native content justifies them.
- G1 does not authorize inventing a Tool, recipe, building, order or NPC.
- No Help Wanted/Special Orders work begins here.
- No runtime or art is authorized.
