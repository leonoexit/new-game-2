# Canonical identity direction audit 19

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `ND-M — mixed register by family` on 2026-09-23**. This audit follows `ID1 — deliberate canonical identity pass`. It defines the shared naming register used to compare canonical candidates. It does not create a candidate roster, approve any current fixture, add content, change balance, create art or authorize runtime work.

Nguồn:

- [Game design source](GAME-DESIGN-SOURCE.md), used only for the small-valley life fantasy and card-world presentation; superseded mechanics are not restored
- [Continuous-world recognition audit 04](CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md)
- [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md)
- [Canonical minimum identity-entry audit 18](CANONICAL-MINIMUM-IDENTITY-ENTRY-AUDIT-18.md)

## 1. Shared identity criteria

Every naming direction must satisfy the same paper criteria:

1. **Immediate category read:** the player can distinguish a crop, Catch, material, Project and Person without learning an internal code.
2. **Mobile brevity:** the short name fits an L1/L2 card label and remains usable when localized; full mechanics stay in preview/inspect.
3. **Small-valley coherence:** names support a gentle, lived-in rural world rather than epic fantasy, industrial simulation or abstract system vocabulary.
4. **Mechanical honesty:** a name does not imply a recipe, rarity, location, owner, permanent effect or species rule that the contract does not contain.
5. **Family distinction:** the three crops, two Catch, five source/items, three Projects and three Persons remain easy to tell apart in speech and text.
6. **Expansion room:** future entries can follow the pattern without becoming numbered variants or increasingly ornate compounds.
7. **Originality:** names do not imitate a named game, character, franchise or proprietary setting.

These criteria assess naming/fiction only. They do not approve art, stats or content quantity.

## 2. Direction `ND-G — grounded and literal`

Use familiar real-world or near-real-world nouns wherever possible. Projects describe their practical object; materials use common category names; Person names remain short and ordinary.

What it feels like:

- direct, domestic and easy to parse;
- the world identity comes mainly from relationships, illustrations and combinations rather than invented vocabulary;
- labels require little explanation.

Benefits:

- strongest immediate readability and localization safety;
- easy to extend without compound-name inflation;
- low risk that a name promises mechanics that do not exist.

Tradeoff:

- weaker proprietary identity at the item/crop level;
- collection entries may feel generic without strong descriptions and visual identity;
- unusual functional slots such as Crop/Herb cross-tag may be harder to express honestly with a familiar noun.

## 3. Direction `ND-S — soft storybook compounds`

Use gentle, readable compounds and place-linked names similar in register to Shortroot, Dewleaf, Rain Eel, Seam Ore and Upper-Grove Footbridge. Names remain concrete rather than magical or grandiose.

What it feels like:

- slightly invented, warm and recognizably “Little Valley”;
- each collectible can carry more identity in its short label;
- source and condition can sometimes be suggested by the name.

Benefits:

- stronger world identity without requiring lore paragraphs;
- current fixtures already demonstrate the register;
- crop, Catch and collection families can feel intentionally related.

Tradeoff:

- repeated compounds can become precious, samey or too long on mobile;
- source/condition words may accidentally imply hard compatibility rules;
- future expansion can drift toward increasingly decorative names.

## 4. Direction `ND-M — mixed register by family`

Use the simplest honest register for each family:

- common materials and generic world resources stay literal where identity adds no decision value;
- crops, condition Catch and collection pages may use restrained storybook names;
- Projects use short functional object names because their reward must be understood quickly;
- Persons use short human names, with identity carried by characterization and ability rather than ornate naming.

What it feels like:

- grounded daily life with a light layer of local character;
- unusual entries receive memorable names while basic resources stay effortless to read;
- the card table does not make every noun compete for attention.

Benefits:

- balances mobile clarity and world identity;
- reduces compound-name overload;
- aligns naming effort with decision burden: distinctive content gets flavor, commodity content stays clear;
- allows strong current fixture names to survive selectively rather than as an all-or-nothing package.

Tradeoff:

- requires explicit family rules so the vocabulary does not feel inconsistent;
- candidate review takes more judgment than applying one universal naming formula;
- a plain material beside an evocative crop can feel uneven if descriptions and presentation do not share tone.

## 5. Comparison

| Criterion | `ND-G` grounded | `ND-S` storybook | `ND-M` mixed |
| --- | --- | --- | --- |
| Immediate readability | Strongest | Good if compounds stay short | Strong |
| Distinctive world identity | Lowest | Strongest in labels | Strong but selective |
| Mobile/localization risk | Lowest | Highest | Medium-low |
| Expansion discipline | Easy | Needs strong restraint | Needs family rules |
| Compatibility with current fixtures | Partial | High | High, selectively |
| Risk of every item sounding equally “special” | Low | High | Low |

## 6. Owner-choice gate

| Choose | Canonical naming principle | Accepted tradeoff |
| --- | --- | --- |
| `ND-G — grounded and literal` | Prefer familiar concrete nouns across almost every family | Maximum clarity, less label-level uniqueness |
| `ND-S — soft storybook compounds` | Give most content a gentle invented/local compound identity | Strong flavor, greater mobile and naming-drift risk |
| `ND-M — mixed register by family` | Keep commodities/projects/Persons simple; reserve restrained storybook identity for content that benefits from it | Requires family-specific judgment rather than one formula |

`ND-M` is recommended. The UI already requires exact names and short labels where decisions matter; a mixed register keeps those surfaces readable while giving crops, conditioned Catch and collection content enough native Little Valley identity.

## 7. Owner decision

`[OWNER SELECTED NAMING DIRECTION]` Carry `ND-M — mixed register by family` into the canonical identity pass.

Consequences:

- common materials/resources remain literal unless a distinct identity changes an actual decision;
- Projects prefer short functional object names;
- Persons use short human names, with identity carried by characterization and role rather than ornate labels;
- crops, conditioned Catch and collection content may use restrained storybook names;
- every family still requires its own candidate comparison before any fixture is promoted;
- the first family comparison is recorded in [canonical crop identity audit 20](CANONICAL-CROP-IDENTITY-AUDIT-20.md).

## 8. Next step after the choice

The selected direction will be converted into a compact naming rubric. Candidate work then proceeds one family at a time, starting with crops because they establish the strongest repeated item vocabulary and influence Seed, harvest, Gift and collection wording.

No family candidate is approved by this audit.

## 9. Guardrails

- Do not restore superseded mechanics or narrative assumptions from the historical game-design source.
- Do not use naming to imply a new biome, buyer, request, Processor use, fee or resource rule.
- Do not change functional slots or add entries during naming review.
- Keep current names as fixtures until explicitly approved.
- No art, runtime, staging, commit or push is authorized.

## 10. Non-conclusions

- A naming direction is not a canonical name list.
- A literal name is not automatically generic, and an invented name is not automatically distinctive.
- Person personality, appearance, schedule, Gift and Heart values remain separate decisions.
- Final Year 1 quantity remains open until the minimum identities are reviewed.
