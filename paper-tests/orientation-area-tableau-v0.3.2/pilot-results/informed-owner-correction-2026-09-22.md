# Informed-owner correction check — v0.3.2 — 2026-09-22

Tester: current product owner (informed-owner evidence; not fresh-player evidence).

Stimulus: `boards/viewport-home.png`, shown without explaining the intended answers.

## Questions

1. “Area index vẫn đọc là UI focus/scroll chứ?”
2. “Farmhouse không còn tag: anh vẫn hiểu interaction của nó như thế nào?”
3. “Water Trough không còn tag: card còn đủ rõ không?”
4. “Ô trống ở vị trí thứ tư khiến anh hiểu tableau chỉ có 3 target, hay khiến anh nghĩ đang thiếu/mất một card?”
5. “Nhìn riêng dòng `FARM STATE · 2 / 4 PLOTS ACTIVE · WATERED TODAY`: anh có nghĩ có thể tương tác hoặc thả card lên đó không?”

## Verbatim response

> 1. Đúng
> 2. Đúng
> 3. Có
> 4. Không phải thiếu, nó cho người chơi biết Homefarm của họ có thể mở rộng
> 5. chà chà, đến tận hiện tại tôi mới thấy dòng này, tôi thậm chí không nghĩ nó nên tồn tại, chính semantic giữa các lá bài ở 1 area phải self-explain. Tôi thậm chí không nghĩ có cái gì đó gọi là farm state?

## Observed design evidence

- `[PASS]` Area index continues to read as UI focus/scroll.
- `[PASS]` Farmhouse remains understandable without tags.
- `[PASS]` Water Trough remains understandable without tags.
- `[PASS]` Three-target odd layout does not look broken; the empty slot communicates room for Home/Farm expansion.
- `[REMOVE]` `Farm State` is not a meaningful Area-level state. Its contents should be self-explained by the relevant Plot/cards if needed. The line was not noticed until explicitly pointed out and should not exist merely to satisfy a status-strip schema.

## Provisional correction

- Remove Farm State entirely in the next revision.
- Do not add a replacement label or container to the empty fourth slot.
- Continue with the same v0.3.2 stimulus to test whether Market State, Fish Record and Mine Depth each carry genuine non-card state; do not assume every Area needs a status rail.

## Commerce viewport

Stimulus: `boards/viewport-commerce.png`, shown without explaining the intended answers.

### Questions

1. “Tab active trên Area index có cho biết đúng Commerce đang được focus không?”
2. “Dòng `MARKET STATE · OPEN · ALL RESULTS PREVIEWED` có phải state thật sự đáng tồn tại, hay hai card trong Area đã tự giải thích đủ?”
3. “Nếu bỏ dòng Market State, bố cục Commerce còn rõ và đầy đủ không?”

### Verbatim response

> 1. Có
> 2. hai card trong Area đã tự giải thích đủ. đồng thời khi person xuất hiuệmn thì đã có nghĩa person đó xuất hiện vào ngày hôm nay, việc card đó tên person today rất vô lý, tag today và gift item vô nghĩa. hiện tại trong phạm vi game thì person tồn tại cũng chỉ để gift, nếu có tương tác phụ (sub-cards), thì dùng character tương tác lên card đó để mở sub card, và có thể tính sau
> 3. Có

### Observed design evidence

- `[PASS]` Active Area-index tab communicates Commerce focus.
- `[REMOVE]` `Market State` duplicates information already self-explained by the two cards; Commerce remains complete without it.
- `[RENAME]` `Person Today` is system-language, not NPC identity. Presence already communicates that the person is available today.
- `[REMOVE]` `TODAY` and `GIFT ITEM` tags add no value in the current Gift-only interaction scope.
- `[DEFER]` If a Person later gains secondary interactions, committing Character may reveal sub-cards; do not add that schema before the interactions exist.

## River viewport

Stimulus: `boards/viewport-river.png`, shown without explaining the intended answers.

### Questions

1. “Tab active có cho biết đúng River đang được focus không?”
2. “`FISH RECORD · MINNOW 1 / 2` có phải persistent state thật sự cần hiện riêng tại River, hay nên nằm ở card/collection UI khác?”
3. “Trên `Eel Sighting`, hai tag `ROD` và `RAIN` có cung cấp thông tin cần thiết không, hay art/title/context đã đủ?”

### Verbatim response

> 1. Có
> 2. Tôi thậm chí thấy nó vô nghĩa
> 3. Cả 2 tag đều thừa. Tag rain là thuộc phạm vi thời tiết, nó không htể nằm bên tyỏng lá bài

### Observed design evidence

- `[PASS]` Active Area-index tab communicates River focus.
- `[REMOVE]` `Fish Record` is not meaningful state on the River tableau.
- `[REMOVE]` `ROD` and `RAIN` are redundant on Eel Sighting.
- `[SCOPE CORRECTION]` Rain belongs to the Weather scope and must not be encoded as a property/tag inside the Eel card.

## Mine viewport

Stimulus: `boards/viewport-mine.png`, shown without explaining the intended answers.

### Questions

1. “Tab active có cho biết đúng Mine đang được focus không?”
2. “`MINE STATE · DEPTH 3 · NEXT CHECKPOINT IN 3` có phải state thật sự cần tồn tại riêng, hay ba card đã tự giải thích đủ?”
3. “Các tag sau có cần thiết không? Exposed Ore: `PICKAXE`, `READY`; Direct Descent: `DEPTH +1`, `NO YIELD`; Search Side Tunnel: `DEPTH +0`, `REVEAL`.”
4. “Hai dòng giải thích cuối Area (`ONLY DIRECT DESCENT INCREASES DEPTH` và dòng bên dưới) có cần tồn tại không?”

### Verbatim response

> 1. Có
> 2. Riêng area mine này thì đúng là cần có cái gì đó để người chơi biết trạng thái đang ở tầng mấy
>
> 3. Các tag sau có cần thiết không?
>
> - Exposed Ore: `PICKAXE`, `READY` không
> - Direct Descent: `DEPTH +1` có, `NO YIELD` không
> - Search Side Tunnel: `DEPTH +0` có, `REVEAL` không

Question 4 received no response and is not recorded as direct acceptance/rejection.

### Observed design evidence

- `[PASS]` Active Area-index tab communicates Mine focus.
- `[KEEP]` Mine needs separate Depth state because current floor cannot be inferred from the three action cards.
- `[REMOVE]` Exposed Ore `PICKAXE` / `READY`, Direct Descent `NO YIELD`, and Search Side Tunnel `REVEAL`.
- `[KEEP]` Direct Descent `DEPTH +1` and Search Side Tunnel `DEPTH +0`.
- `[INFERENCE, NOT DIRECT RESPONSE]` The two footer explanation lines duplicate title/art/consequence plus the retained Depth tags. Remove them under the owner's broader self-explaining-tableau rule; do not call this direct answer to question 4.

## v0.3.2 result

`[REVISION REQUIRED]` as informed-owner evidence; not fresh-player evidence.

- Keep Area index, navigation chrome, three-target Home layout, tagless Farmhouse/Water Trough, and Mine Depth state.
- Remove Farm State, Market State and Fish Record; not every Area needs a status component.
- Rename the current Person portrait from system label `Person Today` to its fixture identity `Mira`; remove `GIFT ITEM` / `TODAY`. Presence already means available today.
- Remove Eel `ROD` / `RAIN`; Rain belongs to Weather scope.
- Apply the accepted Mine tag reductions and remove inferred-redundant footer explanation.
