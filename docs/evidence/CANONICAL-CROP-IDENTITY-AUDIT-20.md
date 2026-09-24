# Canonical crop identity audit 20

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `C-G — grounded crops` on 2026-09-23**. This audit is the first family pass under owner-selected `ND-M — mixed register by family`. It compares paper-canonical names for the three already-supported crop profiles. It does not add a crop, choose art, change tags, durations, yields, prices or access rules, or authorize runtime work.

Nguồn:

- [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md)
- [Canonical minimum identity-entry audit 18](CANONICAL-MINIMUM-IDENTITY-ENTRY-AUDIT-18.md)
- [Canonical identity direction audit 19](CANONICAL-IDENTITY-DIRECTION-AUDIT-19.md)

## 1. Fixed crop slots

| Slot | Functional identity that cannot change in this pass | Current fixture |
| --- | --- | --- |
| `CR-S` | short deterministic control; `Fresh · Crop · Root` | Shortroot |
| `CR-L` | longer commitment/cash-oriented profile; `Fresh · Crop · Bean` | Tallbean |
| `CR-H` | medium commitment; `Fresh · Crop · Herb` cross-tag | Dewleaf |

The names may change. The three roles, tags and access shapes may not.

## 2. Crop-name rubric under ND-M

A crop set should:

- read as food/growing content rather than a material, spell or location;
- keep each slot distinct when all three appear in one hand or Seed list;
- remain short enough for a mobile item label;
- avoid encoding exact duration, price or rarity that later balance could invalidate;
- give enough visual/physical suggestion for future identity without requiring art now;
- leave room for future crops without forcing every name into the same suffix.

No global trademark, localization or market clearance is claimed by this paper comparison.

## 3. Set `C-F — fixture continuity`

| Slot | Name | Read |
| --- | --- | --- |
| `CR-S` | Shortroot | invented root; directly signals the short-profile fixture |
| `CR-L` | Tallbean | simple physical bean identity |
| `CR-H` | Dewleaf | gentle leafy/herbal identity |

Benefits:

- zero terminology churn across existing paper traces;
- compact, readable and internally familiar;
- all three already support the required category read.

Tradeoff:

- `Shortroot` exposes a balance role in the name and may feel mechanical;
- the set was created for simulation clarity rather than compared as world identity;
- `root/bean/leaf` makes the taxonomy very explicit and slightly schematic.

## 4. Set `C-L — restrained local compounds`

| Slot | Name | Read |
| --- | --- | --- |
| `CR-S` | Buttonroot | small, domestic root identity based on form rather than duration |
| `CR-L` | Ribbonbean | long, climbing/flowing bean identity without promising an exact day count |
| `CR-H` | Dewleaf | soft leafy/herbal identity retained from the fixture set |

Benefits:

- follows ND-M's selective storybook register without sounding magical;
- differentiates the crops through physical/sensory identity rather than economy labels;
- keeps the strongest current fixture candidate, Dewleaf, instead of replacing everything;
- gives future visual work three distinct silhouette cues while not authorizing any art.

Tradeoff:

- Buttonroot and Ribbonbean create appearance expectations that later art must respect if approved;
- two compounds plus Dewleaf still need localization review;
- invented crops require descriptions to establish how familiar they are in the valley.

## 5. Set `C-G — grounded real-world crops`

| Slot | Name | Read |
| --- | --- | --- |
| `CR-S` | Turnip | familiar short root crop |
| `CR-L` | Runner Bean | familiar climbing bean profile |
| `CR-H` | Lemon Balm | recognizable cultivated herb |

Benefits:

- strongest real-world category recognition;
- easy to discuss without introducing invented vocabulary;
- each name naturally supports its existing Root/Bean/Herb tag.

Tradeoff:

- weakest label-level Little Valley identity;
- real crops carry expectations about season, growth, yield and use that the paper contracts may not match;
- `Lemon Balm` is visually and linguistically less parallel to the other two crop labels.

## 6. Comparison

| Criterion | `C-F` fixtures | `C-L` local compounds | `C-G` grounded |
| --- | --- | --- | --- |
| Mobile brevity | Strong | Strong | Good |
| Category readability | Strong | Strong | Strongest |
| Avoids encoding balance | Mixed | Strong | Strong |
| Little Valley identity | Good by familiarity | Strongest | Lowest |
| Existing-doc continuity | Strongest | Medium | Lowest |
| Future visual constraint | Low-medium | Medium | Medium-high from real-world expectations |

## 7. Owner-choice gate

| Choose | Canonical paper crop set | Accepted tradeoff |
| --- | --- | --- |
| `C-F — fixture continuity` | Shortroot · Tallbean · Dewleaf | Maximum continuity; Shortroot remains mechanically named |
| `C-L — local compounds` | Buttonroot · Ribbonbean · Dewleaf | Stronger native identity; commits to physical name cues |
| `C-G — grounded crops` | Turnip · Runner Bean · Lemon Balm | Maximum familiarity; less distinctive and more real-world expectation |

`C-L` is recommended. It applies ND-M selectively, removes the most balance-coded fixture name and proves that deliberate identity review can keep a strong current name rather than replacing the whole set.

The owner may also specify a mixed trio from the nine candidates. If so, the exact three names must still map one-to-one to `CR-S`, `CR-L` and `CR-H`.

## 8. Owner decision

`[OWNER SELECTED CANONICAL PAPER IDENTITY]` Carry `C-G — Turnip · Runner Bean · Lemon Balm` into the active paper vocabulary.

Exact mapping:

| Slot | Canonical paper name | Historical fixture alias |
| --- | --- | --- |
| `CR-S` | Turnip | Shortroot |
| `CR-L` | Runner Bean | Tallbean |
| `CR-H` | Lemon Balm | Dewleaf |

Consequences:

- the active registry, package and dependency graph use Turnip, Runner Bean and Lemon Balm;
- completed paper-test logs keep their historical fixture names and are interpreted through the mapping above;
- functional roles, tags, Seed access, collection choice and all balance values remain unchanged;
- no crop appearance, art, localization or external name clearance is approved;
- the next family comparison is recorded in [canonical Catch identity audit 21](CANONICAL-CATCH-IDENTITY-AUDIT-21.md).

## 9. Consequences after selection

- the selected trio becomes `[OWNER SELECTED CANONICAL PAPER IDENTITY]` for crop names;
- old names remain in historical paper traces and receive a superseding vocabulary note rather than destructive rewrites;
- tags, functional roles and balance values remain unchanged;
- the next family pass moves to common/condition Catch identities.

## 10. Guardrails

- Do not infer final duration, price, yield, Season or art from a crop name.
- Do not add a fourth crop during this pass.
- Do not change Seed access, COL-1 choice structure or Gift compatibility.
- Do not rewrite completed paper-test logs after a naming decision.
- No art, runtime, staging, commit or push is authorized.

## 11. Non-conclusions

- A paper-canonical name is not external trademark/localization clearance.
- Crop appearance remains unapproved even if a name suggests form.
- Exact balance remains open under L-I.
- Final Year 1 crop count beyond the three-slot structural minimum remains a later quantity gate.
