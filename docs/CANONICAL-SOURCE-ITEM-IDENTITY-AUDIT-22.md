# Canonical source/item identity audit 22

Ngày: 2026-09-23.

Trạng thái: **superseded before owner selection on 2026-09-23**. The owner identified that family-by-family naming gates were disproportionate to this reversible decision. No `S-F/S-M/S-G` set was selected. The remaining source/item, Project, Person and Collection names are consolidated in [canonical identity proposal 23](CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md). This audit remains only as comparison history.

Nguồn:

- [Content-minimum registry 01](CONTENT-MINIMUM-REGISTRY-01.md)
- [Project/item/source consistency audit 13](PROJECT-ITEM-SOURCE-CONSISTENCY-AUDIT-13.md)
- [Canonical identity direction audit 19](CANONICAL-IDENTITY-DIRECTION-AUDIT-19.md)
- [Canonical Catch identity audit 21](CANONICAL-CATCH-IDENTITY-AUDIT-21.md)

## 1. Fixed source/item slots

| Slot | Functional identity that cannot change in this pass | Current fixture |
| --- | --- | --- |
| `I-BER` | deterministic Forage/Berry Gift supply from Hedgerow | Hedgerow Berry |
| `I-WOD` | deterministic Raw Material/Wood shared by M/B/X | Fallen Wood |
| `I-STN` | recoverable Raw Material/Stone from CP6+ Search/Extract source | Plain Stone |
| `I-ORE` | Raw Material/Ore from CP3 exposed-source fixture; M/Sell/Keep allocation | Seam Ore |
| `I-HRB` | opportunity Fresh Forage/Herb from Grove batch | Wild Herb |

Naming cannot merge slots, move their sources or make Direct Descent yield a material.

## 2. Source/item rubric under ND-M

The set should:

- keep commodity materials effortless to read in Project requirements and inventory;
- preserve exact Berry/Herb identity where Gift and compatibility depend on subtype;
- avoid encoding a source state such as exposed, ready or spent into the durable item name;
- avoid implying quality tiers, sale premiums, recipes or rarity;
- remain distinct from source-card names such as Hedgerow, Woodlot, Exposed Stone and Exposed Ore;
- leave room for later item variety without renaming the basic material vocabulary.

## 3. Set `S-F — descriptive fixtures`

`Hedgerow Berry · Fallen Wood · Plain Stone · Seam Ore · Wild Herb`

Benefits:

- maximum continuity with existing paper traces;
- every item suggests source, state or physical context;
- Berry and Herb remain visibly different Gift/compatibility supplies.

Tradeoff:

- several labels read like test descriptions rather than inventory nouns;
- Fallen/Plain/Seam add words that do not change current item compatibility;
- source wording can blur the distinction between a reusable source card and the item it yields.

## 4. Set `S-M — mixed literal core`

`Hedgerow Berry · Wood · Stone · Ore · Wild Herb`

Benefits:

- applies ND-M directly: basic Project materials are literal; identity-bearing Berry/Herb keep restrained context;
- Project requirements become short and stable;
- source cards can change state without changing inventory item names;
- preserves the two names whose source/category context matters most for current Gift and opportunity reading.

Tradeoff:

- Wood/Stone/Ore have less collectible flavor than the fixture labels;
- Hedgerow Berry and Wild Herb still partly encode acquisition context;
- later variants need clear subtype names so the base material does not become ambiguous.

## 5. Set `S-G — minimal generic`

`Berry · Wood · Stone · Ore · Herb`

Benefits:

- shortest possible inventory and Project vocabulary;
- strongest localization and mobile-label simplicity;
- source and item are cleanly separated.

Tradeoff:

- Berry/Herb lose local and opportunity identity;
- future berry/herb variants immediately require modifiers;
- weakest world character and Gift-item memorability.

## 6. Comparison

| Criterion | `S-F` descriptive | `S-M` mixed literal | `S-G` minimal |
| --- | --- | --- | --- |
| Project/inventory clarity | Good | Strongest | Strongest |
| Source/item separation | Lowest | Strong | Strongest |
| Gift/opportunity identity | Strongest | Strong | Lowest |
| Existing-doc continuity | Strongest | Medium | Lowest |
| Mobile brevity | Good | Strong | Strongest |
| Expansion room | Medium | Strong | Low for Berry/Herb |

## 7. Owner-choice gate

| Choose | Canonical paper source/item set | Accepted tradeoff |
| --- | --- | --- |
| `S-F — descriptive fixtures` | Hedgerow Berry · Fallen Wood · Plain Stone · Seam Ore · Wild Herb | Maximum continuity; source/state descriptors remain in inventory names |
| `S-M — mixed literal core` | Hedgerow Berry · Wood · Stone · Ore · Wild Herb | Clear commodity core with selective local identity |
| `S-G — minimal generic` | Berry · Wood · Stone · Ore · Herb | Maximum simplicity; weakest Gift/opportunity identity |

`S-M` is recommended. It follows ND-M most directly and prevents Project recipes from carrying ornamental wording while preserving the two non-commodity items that currently need identity.

The owner may specify a mixed five-item set, but each name must still map one-to-one to the fixed slots above.

## 8. Consequences after selection

- the selected set becomes `[OWNER SELECTED CANONICAL PAPER IDENTITY]` for inventory item names;
- completed test logs retain historical aliases if names change;
- source-card names and state language remain separate and are not automatically renamed;
- tags, source contracts, Project demands, Gift fixtures, cadence and values remain unchanged;
- the next family pass moves to the three Project identities.

## 9. Guardrails

- Do not add quality tiers or extra resource variants.
- Do not turn source adjectives into new compatibility tags.
- Do not restore Direct Descent material yield or repeated Stone Search.
- Do not infer a buyer, premium, recipe or request from an item name.
- Do not rewrite completed paper-test logs.
- No art, runtime, staging, commit or push is authorized.

## 10. Non-conclusions

- Item names do not select source-card art or final material appearance.
- Exact source cadence, prices and Project-X quantities remain open.
- Paper-canonical names are not external trademark/localization clearance.
- Final Year 1 source/item count beyond the five-slot structural minimum remains a later quantity gate.
