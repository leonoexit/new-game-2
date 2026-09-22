# Paper design round 4 checkpoint — explicit world surface

Ngày: 2026-09-22.

Phạm vi: sửa representation model sau clarification của user và dựng fixture orientation mới; vẫn không code/runtime prototype.

## 1. Correction đã khóa

World là một continuous vertical surface hiển thị terrain, path, water, coast và building placement trực tiếp. `Area` có thể tồn tại như khái niệm địa lý, nhưng không tự tạo card, box/container, graph parent hoặc interaction target.

`Town` hiện là `[HYPOTHESIS]` environmental cluster hoặc label không bắt buộc. Vì không có Town-wide verb/state trong scope hiện tại, `Town` không phải gameplay entity. Task target chính xác `Supermarket`, `Person Today`, `Fishing Spot`, `Mine Entrance`, `House`, `Plot` hoặc `Project`.

## 2. Work result

| Workstream | Result | Evidence |
| --- | --- | --- |
| Representation model | Corrected and integrated | [Explicit-surface model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md) |
| Supermarket gap | Square study generated, recorded and reviewed at 160/80 px | `art/style-studies/world-entity-supermarket-v0.1/` |
| Orientation fixture | M/T continuous boards built with the same nine entities | [v0.2 kit](../paper-tests/orientation-explicit-surface-v0.2/README.md) |
| Historical fixture | v0.1 marked non-pilot | [v0.1 kit](../paper-tests/orientation-home-middle-vs-top-v0.1/README.md) |
| Package/graph | Next-evidence order updated | [Package v1](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), [graph v1](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md) |

## 3. v0.2 integrity

- M/T each contain House, Farm Plot, Supermarket, Person Today, Fishing Spot, Mine Entrance, Water Trough, Footbridge and Harvest Bench.
- Only world coordinates change between M/T.
- River, coast, mountain ridge and path are part of one background, not cards.
- No Home/Town/River/Coast Place token is present.
- House anchor is explicitly camera focus only.
- Four tasks and recall prompt target exact entities; recall does not require a Town node.

## 4. Evidence boundary

Desk preflight confirms internal consistency and legibility only. It does not determine:

- Home-middle versus Home-at-top;
- whether a non-interactive Town label improves recognition;
- final world scale, spacing or vertical order;
- canonical/runtime art;
- participant orientation performance.

## 5. Next evidence gate

Run one counterbalanced new-player pilot on v0.2. Log `TTFT`, wrong direction, anchor use, `false_entity`, return-to-House time and five-landmark recall. Revise the protocol only from observed ambiguity; do not turn one pilot into a population threshold.
