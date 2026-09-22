# Internal iteration check 02 — plain-language v0.2.2

Ngày: 2026-09-22.

Trạng thái: `[COMPLETE — TEXT IMPROVED, ART AFFORDANCE FAILED FOR MINE]`.

Participant: same informed project owner/designer. Iteration evidence only; not new-player evidence.

## Raw response

> 1. rain eel: khi nhìn hình ko cần độc chữ là tôi biết ngay đây là nơi người chơi phải stack lá cần câu lên, tuy nhiên tôi không hiểu nghĩa tên lá rain eel
>
> 2. person today: không cần chữ give a gift tôi cũng biết là phải tặng quà
>
> 3. exposed ore: chính cái tên và hình ảnh cho tôi biết phải dùng cuốc chim để đào nó lên, thực tế cái ảnh cho thấy là tay đang cầm chứ không phỉa đào
>
> 4. mine deptH; phải đọc chữm ới biết cần làm gì, 2 lá liên quan đến cổng vào mine còn lại cũng vậy

## Finding

- River and Person affordances are driven primarily by imagery; player expects to stack the relevant Tool/Item on the pictured target.
- `Rain Eel` still reads as an unexplained name/term even though the Catch interaction is inferred.
- `Exposed Ore` is inferred from label + expectation, but its placeholder art shows the post-action possession state, not mining.
- `Mine Depth`, `Safe Descent`, and `Hidden Ore Route` reuse Mine Entrance art, so their distinct verbs cannot be understood without text.
- Plain language cannot compensate for art that depicts the wrong moment.

## Required next step

Create one Mine action-art study at a time. The first study tests `pickaxe strikes exposed ore vein` at `512x512` and `160x160`. Do not generate a full Mine batch until the participant confirms that the verb and target read without title text.

Candidate study: [Exposed Ore action v0.1](../../../art/style-studies/exposed-ore-action-v0.1/record.md).

## Exposed Ore art review

Participant confirmed that the first action-art study communicates “use a pickaxe to mine the ore vein” without reading text.

They also identified a hierarchy error: once art carries the verb, a bottom CTA such as `MINE THIS ORE` is redundant. The bottom line should describe the rule consequence, for example `GAIN ORE · DEPTH STAYS`; badges should carry only compact cost/state cues.

This approval promotes the study to `candidate`, not canonical/runtime art. A second distinct action must reproduce the direction before it is considered stable.

## Safe Descent art review

Participant confirmed that the second study communicates descent and is immediately distinct from Exposed Ore. It does not communicate `safe` without text.

The participant also corrected the information model:

- `Depth +1` is a state change and belongs in a tag;
- `Gain Stone` has no visible/causal relationship to descending and should not be placed in description merely because the old fixture awarded a known common material;
- bottom description should explain a real trade-off, not repeat the art or list an arbitrary reward.

Fixture consequence:

- rename/reframe the route as `Direct Descent`: `1 AP`, `Depth +1`, no bonus;
- compare against an Ore route that spends more fixture AP for the same `Depth +1` plus revealed Ore;
- this produces a visible speed-versus-yield choice without hidden failure or unexplained Stone.

## Three-action comparison review

The participant confirmed that all three images read as distinct and that the lantern art communicates reveal/search rather than extraction. They did **not** confirm the proposed speed–yield reading:

> cả 2 đều chỉ động từ đây là hành đọng đi vào "vùng chuyển tiếp". Một cái là leo thang xuống, một cái là ở cùng tầng nhưng khi đi vào sẽ hiện ra ore

This invalidates `Depth +1` on the lantern route. The art and inferred fiction instead support:

| Action | Depth | Result |
| --- | ---: | --- |
| Direct Descent | +1 | frontier progress; no material bonus |
| Search Side Tunnel | +0 | reveal an Ore source |
| Exposed Ore | +0 | gain Ore; source becomes spent |

The revised decision is progress versus discovery versus extraction. It preserves deterministic Depth on the actual descent action and removes both the arbitrary Stone reward and the false claim that a lateral search increases Depth.
