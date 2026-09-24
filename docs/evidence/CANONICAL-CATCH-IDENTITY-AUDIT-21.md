# Canonical Catch identity audit 21

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `K-P — physical identity` on 2026-09-23**. This audit is the second family pass under `ND-M — mixed register by family`. It compares paper-canonical names for the two already-supported Catch profiles. It does not add a Catch, change River rules, Weather, cadence, AP, value, tags or recovery, create art, or authorize runtime work.

Nguồn:

- [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md)
- [Fishing resolution sensitivity 02](FISHING-RESOLUTION-SENSITIVITY-02.md)
- [Canonical identity direction audit 19](CANONICAL-IDENTITY-DIRECTION-AUDIT-19.md)
- [Canonical crop identity audit 20](CANONICAL-CROP-IDENTITY-AUDIT-20.md)

## 1. Fixed Catch slots

| Slot | Functional identity that cannot change in this pass | Current fixture |
| --- | --- | --- |
| `FI-C` | common River Catch; ordinary miss/recovery control | River Minnow |
| `FI-R` | Rain-conditioned River Catch; missed Rain recovers on a later Rain/cycle | Rain Eel |

River remains Catch only. Neither name may imply a buyer, request, supply system, persistent locked spot or separate travel location.

## 2. Catch-name rubric under ND-M

The pair should:

- read immediately as two different living River catches;
- remain short on a square action/target card and in item stacks;
- distinguish the common and conditioned profiles without making Weather UI redundant;
- avoid implying an unapproved location, time of day, rarity tier or sale premium;
- leave room for future Catch without forcing every species to contain its condition;
- keep the River action contract as exact `Catch`, not a named buyer or delivery context.

No external species, localization or market clearance is claimed by this paper comparison.

## 3. Pair `K-F — fixture condition-forward`

| Slot | Name | Read |
| --- | --- | --- |
| `FI-C` | River Minnow | familiar small common River fish |
| `FI-R` | Rain Eel | distinctive eel whose active condition is explicit |

Benefits:

- strongest rule readability and continuity with all existing traces;
- common/conditioned roles are immediately distinct;
- Rain Eel honestly reflects the only special condition currently attached to the Catch.

Tradeoff:

- both names partially repeat information already supplied by River and Weather UI;
- Rain Eel encodes a current rule in the identity, making later condition changes harder;
- the pair reads more like clear test labels than natural local species names.

## 4. Pair `K-P — physical identity`

| Slot | Name | Read |
| --- | --- | --- |
| `FI-C` | Silver Minnow | small common fish distinguished by appearance |
| `FI-R` | Blue Eel | conditioned eel distinguished by appearance rather than Weather |

Benefits:

- avoids putting River/Rain rules directly into item names;
- leaves Weather eligibility entirely to the exact target preview;
- provides simple future color/shape identity without ornate compounds.

Tradeoff:

- color words create appearance expectations without approved art;
- the names do not help the player remember which Catch needs Rain;
- “silver” and “blue” may localize clearly but give limited world character.

## 5. Pair `K-G — minimal literal`

| Slot | Name | Read |
| --- | --- | --- |
| `FI-C` | Minnow | generic common small fish |
| `FI-R` | Eel | generic conditioned eel |

Benefits:

- shortest and most familiar labels;
- zero invented vocabulary and low localization burden;
- no name-level promise beyond category.

Tradeoff:

- weakest collectible identity;
- future Minnow/Eel variants need modifiers, so expansion room is poor;
- item stacks rely more heavily on art and condition history for recall.

## 6. Comparison

| Criterion | `K-F` condition-forward | `K-P` physical | `K-G` minimal |
| --- | --- | --- | --- |
| Immediate rule readability | Strongest | Good with preview | Lowest |
| Mobile brevity | Good | Good | Strongest |
| Avoids rule encoding | Lowest | Strongest | Strongest |
| Distinct collectible identity | Strong | Medium | Lowest |
| Existing-doc continuity | Strongest | Low | Low |
| Expansion room | Medium | Good | Lowest |

## 7. Owner-choice gate

| Choose | Canonical paper Catch pair | Accepted tradeoff |
| --- | --- | --- |
| `K-F — condition-forward` | River Minnow · Rain Eel | Clearest current rules; names encode River/Rain context |
| `K-P — physical identity` | Silver Minnow · Blue Eel | Rules stay in UI; names commit to color cues |
| `K-G — minimal literal` | Minnow · Eel | Maximum simplicity; weakest identity and expansion room |

`K-F` is recommended. Unlike the crop fixtures, these names describe stable source/condition information that is already visible and recovery-critical. Their clarity is worth the mild redundancy at the current two-Catch minimum.

The owner may also select one name from each row if the exact pair still maps one-to-one to `FI-C` and `FI-R`.

## 8. Owner decision

`[OWNER SELECTED CANONICAL PAPER IDENTITY]` Carry `K-P — Silver Minnow · Blue Eel` into the active paper vocabulary.

Exact mapping:

| Slot | Canonical paper name | Historical fixture alias |
| --- | --- | --- |
| `FI-C` | Silver Minnow | River Minnow |
| `FI-R` | Blue Eel | Rain Eel |

Consequences:

- Weather eligibility stays in the exact Catch target/preview; `Blue Eel` does not remove or weaken the Rain requirement;
- the active registry, package and dependency graph use Silver Minnow and Blue Eel;
- completed paper-test logs retain River Minnow/Rain Eel and use the mapping above;
- Catch rules, AP/value, recovery, tags and River's Catch-only contract remain unchanged;
- color words are paper identity cues only; no art palette or appearance is approved;
- the next family comparison is recorded in [canonical source/item identity audit 22](CANONICAL-SOURCE-ITEM-IDENTITY-AUDIT-22.md).

## 9. Consequences after selection

- the selected pair becomes `[OWNER SELECTED CANONICAL PAPER IDENTITY]` for Catch names;
- historical aliases remain in completed traces when names change;
- Catch rules, Weather eligibility, AP/value and recovery remain unchanged;
- the next identity pass moves to the five non-crop/fish sources/items.

## 10. Guardrails

- Do not add a third Catch or new condition.
- Do not infer buyer, request, supply, premium or Processing value from a name.
- Do not change River's exact Catch-only contract.
- Do not rewrite completed paper-test logs.
- No art, runtime, staging, commit or push is authorized.

## 11. Non-conclusions

- Catch names do not select final species art.
- Rain cadence and Catch value remain open.
- A paper-canonical name is not external species/trademark/localization clearance.
- Final Year 1 Catch count beyond the two-slot structural minimum remains a later quantity gate.
