# Commerce Processed target informed-owner test 09

Ngày: 2026-09-23.

Trạng thái: **closed — UI comprehension pass, content-purpose rejection**. The product owner understood the corrected transaction, item, reward, recovery and AP cost, then rejected the card's systemic necessity because ordinary Shop selling already exists. Evidence must not be relabeled as fresh-player evidence. No runtime or art lock is authorized.

## 1. Test objective

Check whether a Commerce target communicates, without explanation:

1. the transaction being offered;
2. the exact accepted item/state;
3. the Gold result and AP cost;
4. whether skipping today loses the opportunity;
5. that this is bounded target-local demand, not generic Processing or universal market markup.

## 2. Round 1 — `Pantry Counter / Stock the Pantry`

Stimulus: `commerce-pantry-comprehension-test.html`.

Visible contract:

- `COMMERCE · PANTRY COUNTER`;
- `STOCK THE PANTRY`;
- accepts one `Dried River Minnow` tagged `Processed · Fish`;
- `DELIVER · 0 AP`;
- `GET 6G`;
- `Stays until filled`;
- inventory shows both Fresh and Dried River Minnow.

Owner response:

> Tôi không biết Pantry Counter là gì nhưng tôi có thể hiểu chỉ cần stack Dried River Minnow lên đó sẽ nhận được tiền.

Classification:

- `[PASS — CORE ACTION]` Owner understands that placing/delivering Dried River Minnow resolves the target for Gold.
- `[PASS — ITEM STATE]` Owner selects the Dried item rather than the Fresh River Minnow.
- `[PASS — REWARD]` Owner understands the result is money.
- `[FAIL — CONTEXT NAME]` `Pantry Counter` has no clear real-world meaning for the tester.
- `[UNPROVEN — RECOVERY]` The response does not state what happens if the order is skipped today.
- `[PARTIAL PASS]` Mechanics are readable, but the context label should not be carried.

## 3. Correction rule

Do not explain `Pantry Counter` or add lore to rescue it. Replace it with familiar transaction language while preserving the same mechanics:

- Area/service: `COMMERCE · SHOP`;
- context: `SHOP ORDER`;
- immediate title: `SELL DRIED FISH`;
- commit: `SELL TO SHOP · 0 AP`;
- recovery: `NO DEADLINE · Stays until filled`.

This does not invent a named NPC. It uses the source-supported Commerce/shop role and makes the transaction explicit.

## 4. Round 2 — transaction/recovery pass; AP check open

Stimulus: `commerce-store-order-comprehension-test-v2.html`.

Ask the tester, without additional explanation:

1. What is this card/context?
2. Which owned item can be used?
3. What is received?
4. What happens if it is ignored today?

Pass requires the tester to identify a Shop order that exchanges one Dried River Minnow for 6G, rejects the Fresh copy by implication, and remains available if skipped. Any misunderstanding must be recorded before another wording change.

Owner response:

> Dried River Minnow, bán cái này và nhận tiền, bỏ qua thì không sao vì không có deadline.

Classification:

- `[PASS — ITEM/STATE]` Owner selects `Dried River Minnow`, not the Fresh copy.
- `[PASS — TRANSACTION]` Owner reads the target as selling that item for money rather than as a Processing instruction.
- `[PASS — REWARD]` Owner understands that the transaction returns Gold.
- `[PASS — RECOVERY]` Owner reads `NO DEADLINE` correctly: ignoring it today causes no loss.
- `[PASS — WORDING CORRECTION]` `SHOP / SELL DRIED FISH` removes the unexplained `Pantry Counter` concept without adding a named NPC.
- `[UNPROVEN — AP COST]` The prompted response did not mention whether the sale consumes AP. A direct follow-up was asked before closing the presentation test.

## 5. AP follow-up and content-purpose challenge

AP response:

> Không tốn.

Classification:

- `[PASS — AP COST]` Owner correctly reads `0 AP`.

Owner then challenged why a separate card exists when the Shop already lets the player sell any eligible item. Source/reference audit found:

- project source Selling already uses the `Shipping Bin` for ordinary sale;
- project source Daily Requests are optional, short-deadline objectives with an explicit need and reward;
- Stardew-style Help Wanted and Special Orders add requester, condition, deadline and/or distinct reward;
- the tested no-deadline Shop order only repeated a sale with a premium and existed as a Processing balance patch.

System classification:

- `[PASS — PRESENTATION]` `SHOP / SELL DRIED FISH / 0 AP / NO DEADLINE` is understandable.
- `[FAIL — SYSTEM NECESSITY]` Understandability does not justify a redundant permanent selling target.
- `[REJECT — CONTENT]` Remove `Commerce Pantry`, `Shop Order` and `Sell Dried Fish` from the active baseline.
- `[OWNER DECIDED]` Do not restore a universal Processed sale premium.
- `[DEFERRED]` Schedule Help Wanted first and Special Orders second after the current core Year 1 baseline; neither system is a current priority or a placeholder justification for Processing.

Roadmap: [Help Wanted / Special Orders deferred development roadmap 10](REQUEST-ORDER-DEFERRED-DEVELOPMENT-ROADMAP-10.md).
