# Help Wanted / Special Orders deferred development roadmap 10

Ngày: 2026-09-23.

Trạng thái: product-owner scheduling decision. This is a dependency-ordered paper roadmap, not a runtime implementation schedule and not an in-game calendar. No art, code, final reward values or commit is authorized.

## 1. Owner decision

- `[OWNER DECIDED]` Processed items do not receive a universal sale-price increase.
- `[OWNER DECIDED]` Remove `Commerce Pantry`, `Shop Order` and `Sell Dried Fish` from the active minimum baseline.
- `[OWNER DECIDED]` Develop project-native equivalents of `Help Wanted` and `Special Orders` later, but they are not the current priority.
- `[BOUNDARY]` Do not use a placeholder order to claim that Processing is already valuable or complete.

## 2. Current baseline consequence

Ordinary Fresh and matching Processed items retain generic market parity. Without an actual recipe, Gift, Project or approved request that needs the Processed state, `Load 1 AP → Sleep` has no positive minimum-loop value.

Therefore:

- Processor remains a deferred utility shell, not a validated Year 1 economic branch;
- Processor idle is valid, but a subsystem that is always idle must not be counted as minimum content;
- no artificial buyer, Pantry or permanent premium order is added;
- later request/order content may create selective Processed demand, but must pass on its own fiction and decision value.

## 3. Development order

| Priority | Workstream | Start gate | Required output | Not authorized yet |
| --- | --- | --- | --- | --- |
| `P0 — current` | Core Year 1 paper baseline | active now | AP/Season/Project/item/source graph consistency; content/balance lock boundary | runtime implementation |
| `P1 — deferred first` | Help Wanted | core item tags, minimum NPC roster and reward vocabulary stable | request contract + small fixture set + economy/calendar/comprehension tests | final content volume, art, code |
| `P2 — deferred second` | Special Orders | Help Wanted grammar passes; later progression/reward unlock vocabulary exists | long-order contract + recovery + reward/unlock tests | final board, cadence, art, code |
| `P3 — authorization gate` | Runtime implementation | both paper systems approved and owner explicitly authorizes runtime | implementation plan/tests | automatic implementation from this roadmap |

This order is dependency-based. Do not assign fake dates or interrupt the current Year 1 baseline work merely to populate a calendar.

## 4. Help Wanted paper scope

Purpose: small optional local requests that recombine existing items/actions without becoming a mandatory economy patch.

Minimum contract to test later:

- one named requester or clearly owned service;
- one exact request with visible accepted identity/state;
- short deadline, initially test one to two Sleeps;
- no punishment beyond losing the optional opportunity;
- reward may combine Gold and relationship/reputation, but values remain fixtures;
- request appears at its native source; accepted request may be tracked in Journal/inspect;
- no global future-target agenda or recommended action list;
- raw or Processed requests are allowed only when the fiction and reward justify that state.

Required paper cells:

1. item already owned versus must be acquired after acceptance;
2. A5 overload / A6 baseline / A7 surplus;
3. deadline collision with Weather, Person and Project actions;
4. accept, ignore and fail recovery;
5. informed-owner comprehension of requester, item, deadline, reward and optionality.

## 5. Special Orders paper scope

Purpose: larger, less frequent commitments that can support multi-step goals or unlocks. They are not simply Help Wanted with larger quantities.

Minimum contract to test after Help Wanted:

- explicit sponsor/owner and reason for the order;
- multi-action or multi-source requirement with progress persistence;
- longer visible deadline/cadence than Help Wanted;
- meaningful reward class such as recipe, source option, relationship/world change or capability—not only bonus Gold;
- failure does not destroy core progression; contribution recovery/refund rules must be explicit;
- at most a small current choice surface; no growing checklist wall;
- active progress belongs in Journal/native inspect, not the global Weather/AP rail;
- no same-Season completion requirement unless the content explicitly previews and recovers from it.

Required paper cells:

1. choose/decline before commitment;
2. partial contribution and deadline failure;
3. interaction with Projects and `COL-N` without becoming a universal gate;
4. repeat/recovery behavior across Season boundaries;
5. reward value versus ordinary Sell/Keep/Gift/Process options;
6. informed-owner comprehension before runtime or art.

## 6. Processing dependency rule

When these deferred systems are designed, they may test selective Processed demand, but the following invariant applies:

```text
Request/order content must justify Processing.
Processing must not require a fake request/order to justify itself.
```

If no actual approved content needs a Processed state, leave Processor outside the minimum playable set. Do not restore universal Processed markup, add a permanent premium buyer, or invent an order solely to make the machine run.

## 7. Re-entry gate

Resume `P1 — Help Wanted` only after the current Year 1 core package has:

- stable item identity/state tags;
- a minimum Person/NPC ownership model;
- a usable Gold plus relationship/reputation reward vocabulary;
- accepted deadline/recovery presentation grammar;
- no unresolved core Project/AP/Season blocker that the request system would conceal.

After Help Wanted passes, reassess whether Special Orders add a distinct long commitment. If they only duplicate Projects, keep them deferred or reject them.

## 8. Current handoff

Immediate work remains on the core paper baseline. The request/order roadmap is now recorded but intentionally inactive.

Do not:

- create more Pantry/Shop-order wording variants;
- test a Processed premium before its content owner exists;
- count Help Wanted or Special Orders as current Year 1 content;
- implement a request board, Journal tracker or runtime scheduler without explicit authorization.
