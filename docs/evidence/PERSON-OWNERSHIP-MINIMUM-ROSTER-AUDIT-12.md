# Person ownership and minimum-roster audit 12

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `R3 — A+C+K` on 2026-09-23**. This audit reuses existing Person/Heart, kernel and A/C/K fixture evidence. It does not create request content, add art, choose canonical identities or rerun completed calendar/orientation tests.

Superseding identity note 2026-09-23: [consolidated proposal 23](CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md) later selects Mira=A, Nell=C and Bram=K as canonical paper names/role assignments. Gift preferences, schedule, Heart values, appearance and art remain fixtures/open.

Functional-role review note 2026-09-23: [Bram review 34](FIRST-PLAYABLE-BRAM-FUNCTIONAL-ROLE-REVIEW-34.md) keeps Bram as a Person but finds that the K ability used to justify the third *functional* R3 role has no demonstrated V0 benefit under Q4. R3 remains the owner's roster choice; its three-role effectiveness claim is open pending a valid Bram activation. Do not read the older pass matrix below as current ability validation.

Owner confirmation 2026-09-24: after the requested review in [package v1 §7.4](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), the owner said “ok chốt”. **R3 remains the historical owner choice, but is withdrawn as the first-playable minimum.** Nell alone is active in that paper scope; Mira/Bram remain canonical names for later content. The comparison and decision record below describe the earlier choice, not today's playable roster.

Nguồn:

- [Person/Heart design decisions](NPC-HEART-DESIGN-DECISIONS.md)
- [Person/Heart cadence simulation 01](PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md)
- [Person kernel audit 02](PERSON-ROSTER-KERNEL-AUDIT-02.md)
- [Person mini-roster fixture 01](PERSON-MINI-ROSTER-FIXTURE-01.md)
- [Post-removal audit 11](CORE-YEAR-1-POST-REMOVAL-CONSISTENCY-GAP-AUDIT-11.md)

## 1. Stable ownership model

The existing evidence supports one model without inventing a new NPC layer:

| Concept | Owner/state | Rule |
| --- | --- | --- |
| Person identity | One named identity in the save | World appearance and owned card are two representations of the same Person, never duplicate collectibles |
| Relationship currency | `Heart[Person]` | Heart belongs only to that Person, persists across days and cannot pay another Person's ability |
| First valid Gift | World Person context | Pay Gift action + exact accepted item → own Person + gain that Person's Heart |
| Later valid Gift | Same world Person context | Pay Gift action + exact accepted item → Heart only; no second Person card |
| Appearance schedule | World context | Limits meet/Gift/refill only; it never locks use of an already owned ability |
| Owned Person card | Persistent tray/collection state | Can activate on any day when Heart and a valid target exist |
| Area/service | World context, not a Person | Cannot own Heart or silently stand in for a named relationship |

`[DIRECTION]` This is sufficient as the minimum ownership model for core Year 1. It preserves the user's chosen Person lifecycle and avoids adding background “NPC” simulation.

## 2. Reward vocabulary boundary

Core vocabulary can be usable now without selecting a global reputation system:

- `Gold`: generic economy reward/resource.
- `Heart[Person]`: exact relationship resource and ability fuel for one named Person.
- Capability/source/world change: explicit non-currency reward owned by its native system.
- `Reputation`: **not active core vocabulary**. The old source mentions it only as a Daily Request example and provides no owner, cap, spend or effect contract.

Future Help Wanted may later test `Gold`, `Heart[requester]` or both. A service-owned request cannot award a Person Heart unless a named Person explicitly sponsors it. This is a future compatibility rule, not permission to start Help Wanted now.

## 3. Roster-count question

The ownership model does not determine how many Person identities Year 1 needs. Existing evidence supports three kernels:

| Kernel | Functional identity | Base-loop safety | Gift fixture |
| --- | --- | --- | --- |
| A — Preview | Information before optional uncertainty | Mandatory cost/result preview stays free; safe route remains | Berry, deterministic source |
| C — Hold | Timing for one expiring Catch/Grove opportunity | Opportunity recurs; one-held/no-re-extend limit | Wild Herb, opportunity/recoverable source |
| K — Divide/Focus | Project allocation with conserved total Progress | Ordinary Work still completes every Project | Shortroot, deterministic Seed path |

No kernel is needed for core progress. Therefore roster count is a breadth/content-identity decision, not a soft-lock fix.

## 4. Two-Person pair audit

| Pair | Coverage | Main benefit | Main loss/risk | Result |
| --- | --- | --- | --- | --- |
| A + C | Information + timing | Strong opportunity-facing identity | No Project/allocation Person; both lean toward optional-context play | Viable but narrow |
| A + K | Information + allocation | Covers uncertainty and Projects; both Gift supplies have deterministic access | No Person expresses timing/recovery play | **Strongest 2-Person arm** |
| C + K | Timing + allocation | Busy-day recovery plus Projects | First C acquisition depends on an opportunity source; no information identity | Viable but less stable as minimum |

If the minimum is two Persons, carry A + K as the paper arm. This does not reject C; it defers the timing identity beyond the minimum set.

## 5. Roster boundary arms

### R2 — lean functional minimum

- Two functional Persons: A + K.
- Fixture identities may remain Mira/A and Bram/K for paper logs only.
- Under the existing six-day appearance cadence across S18, there are six visible Gift opportunities total: A on D2/D8/D14 and K on D6/D12/D18.
- Maximum optional Gift spend in that ceiling trace: 6 AP + 6 items; choosing fewer Gifts is valid.
- Identity: a deliberately small social layer focused on information and Project allocation.
- Tradeoff: no minimum Person represents opportunity timing/holding, so the social system looks less broad in Year 1.

### R3 — expressive functional minimum

- Three functional Persons: A + C + K.
- Fixture identities may remain Mira/A, Nell/C and Bram/K for paper logs only.
- Under the same cadence across S18, there are nine visible Gift opportunities total: one Person every two days from D2 through D18.
- Maximum optional Gift spend in that ceiling trace: 9 AP + 9 items; choosing fewer Gifts is valid.
- Identity: information, timing and allocation are all visible as distinct Person roles.
- Tradeoff: +1 identity, +3 ceiling Gift actions/items per S18 versus R2, more announcement/authoring/UI load, and one preference uses an opportunity source.

All counts are `[FIXTURE]` ceilings, not required actions or final schedules.

## 6. Regression and dominance checks

| Guard | R2 | R3 |
| --- | --- | --- |
| Person optional; no core gate | Pass | Pass |
| Base Mine/Farm/River/Project verbs work without Heart | Pass | Pass |
| No request/order needed | Pass | Pass |
| No Processor utility assumed | Pass | Pass |
| Distinct Person roles | Pass with two roles | Pass with three roles |
| Missed appearance recovers | Pass on next schedule | Pass on next schedule |
| AP burden mandatory | None; every Gift optional | None; every Gift optional |
| Announcement/content burden | Lower | Higher |

There is no new reason to rerun A5/A7 or Weather arms: neither roster adds a mandatory action, source gate or calendar deadline. Existing evidence already shows that choosing a Gift can delay another action, which is the intended optional tradeoff. Fresh-player comprehension remains untested.

## 7. Owner-choice gate

Both arms are paper-viable and differ in product identity rather than correctness:

| Choose | When the desired Year 1 identity is | Accepted tradeoff |
| --- | --- | --- |
| `R2 — A + K` | Social/Person layer is intentionally lean; only the smallest functionally distinct pair enters minimum content | Timing Person C is deferred, so Year 1 social breadth is narrower |
| `R3 — A + C + K` | The minimum should visibly demonstrate three different Person roles across information, timing and allocation | More identity, schedule, Gift-economy and UI authoring burden |

Paper mechanics could not select between “lean minimum” and “expressive minimum.” Product-owner choice was required before canonical roster quantity/identity boundaries or the next reward/content pass.

## 8. Owner decision

`[OWNER SELECTED MINIMUM FUNCTIONAL ROSTER]` Carry `R3 — A+C+K` into the next core Year 1 paper baseline.

Consequences:

- the minimum functional roster exposes information, timing and allocation roles;
- Mira/A, Nell/C and Bram/K were later selected as canonical paper names/role assignments in proposal 23;
- the S18 nine-Gift-opportunity schedule remains a ceiling fixture, not a required route or final cadence;
- R2 remains a deliberate lean comparator, not the selected baseline;
- no additional E/J/D/I/M Person is added to the minimum;
- Help Wanted and Special Orders remain deferred.

## 9. Non-conclusions

- Mira, Nell and Bram are canonical paper names/ability assignments; their characterization, appearance, Gift preferences and schedule remain open.
- R3 locks the three-role minimum boundary, not the final total Person count.
- Heart `+1/−1`, cap 2 and same-day use remain paper fixtures.
- Appearance dates and Gift preferences remain fixtures.
- Reputation is deferred, not rejected forever.
- No Help Wanted, Special Orders, art or runtime work is authorized.
