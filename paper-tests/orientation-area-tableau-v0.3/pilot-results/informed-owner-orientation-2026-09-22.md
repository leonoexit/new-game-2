# Informed-owner orientation check — 2026-09-22

Tester: current product owner (informed-owner evidence; not fresh-player evidence).

Stimulus: `boards/viewport-home.png` from orientation fixture v0.3, shown without explaining the intended answers.

## Questions

1. “Anh hiểu mình đang xem Area nào?”
2. “Những thành phần nào là target; thành phần nào chỉ là status/background?”
3. “Phần Commerce bắt đầu lộ ra bên dưới khiến anh cảm thấy đang cuộn giao diện hay nhân vật đang di chuyển tới nơi khác?”

## Verbatim response

> 1.....
> Có, tôi biết toàn bộ đều là các card nằm trong khu vực home
> Sleep at home: card này không nên tồn tại, phải thay vào đó là card farmhouse, khi đưa card character vào card farmhouse, sẽ hiện tiếp tục card weather cho ngày mai (TV), card giường ngủ, và các card nằm trong farmhouse của bản game gốc
>
> tilled spot: rất tường minh, thể hiện đất sẵn sàng gieo hoặc tưới
>
> water trough: tường minh, chỗ lấy nước, tag 2 plots vô nghĩa
>
> harvest bench: khó hiểu, tức là trên cái ghế có forage để hái ljượmg hay sao
>
> 2.....
> toàn bộ đều là target
>
> 3......
> đang di chuyển

## Observed design evidence

- Owner recognizes the viewport as Home and reads all four squares as targets.
- `Sleep at Home` conflicts with the established farmhouse interaction model: the expected top-level target is `Farmhouse`, with interior targets revealed after committing Character.
- `2 Plots` on Water Trough is read as meaningless.
- `Harvest Bench` does not communicate its intended target/consequence.
- The partial Commerce reveal/transition is read as character movement rather than UI scrolling.

No fixture change was made before continuing the remaining viewport tests, so all responses use the same v0.3 stimulus.

## Commerce viewport

Stimulus: `boards/viewport-commerce.png`, shown without explaining the intended answers.

### Questions

1. “Area nào đang được xem?”
2. “Ngoài chữ header, màu/motif nào tạo Area identity?”
3. “Square nào là target?”
4. “Strip nào chỉ là state?”

### Verbatim response

> 1. chợ và sông
> 2. đọc chữ. xem cụm những lá bài đang hiển thị trên màn hình và suy luận về area dự trên semantic giữa các lá gần nhau
> 3. toàn bộ
> 4. rain, today

### Observed design evidence

- The viewport is read as showing both Market and River, not one focused Area.
- Area identity is inferred from text and semantic grouping among nearby cards, not from color/motif.
- All visible squares are read as targets.
- When asked for the state strip, the owner names `RAIN` and `TODAY`, which are tags on square cards; `MARKET STATE` is not identified. Status-strip distinction is therefore not yet communicating reliably in this viewport.

## River viewport

Stimulus: `boards/viewport-river.png`, shown without explaining the intended answers.

### Questions

1. “Area nào đang được xem?”
2. “Ngoài chữ header, màu/motif nào tạo Area identity?”
3. “Square nào là target?”
4. “Strip nào chỉ là state?”

### Verbatim response

> 1. river, mine
> 2. đọc chữ. xem cụm những lá bài đang hiển thị trên màn hình và suy luận về area dự trên semantic giữa các lá gần nhau
> 3. toàn bộ, khó hiểu câu hỏi này, chjẳng phải toàn bộ đều target sao, từ đầu dến giờ đâu có lá bài nào là không thể tương tác?
> 4. rtain, ready, no use

### Observed design evidence

- The viewport is read as showing both River and Mine, not one focused Area.
- Area identity again comes from text and semantic grouping rather than palette/motif.
- The owner consistently understands every square card as a target. Repeating the square-target question no longer adds useful evidence and is experienced as confusing/redundant.
- When asked for state strips, the owner instead names labels on square cards (`rtain`, `ready`, `no use` verbatim). Neither `FISH RECORD` nor the Mine depth/checkpoint strip is identified.

## Mine viewport

Stimulus: `boards/viewport-mine.png`, shown without explaining the intended answers. The already-redundant square-target question was not repeated.

### Questions

1. “Area hoặc các Area nào đang được xem?”
2. “Ngoài chữ header, màu/motif nào tạo Area identity?”
3. “Horizontal strip nào chỉ là state, không phải target?”

### Verbatim response

> 1. river, mine
> 2. đọc chữ. xem cụm những lá bài đang hiển thị trên màn hình và suy luận về area dự trên semantic giữa các lá gần nhau
> 3. no yield

### Observed design evidence

- The viewport is read as showing both River and Mine because River content remains visible above the Mine.
- Area identity again comes from text and semantic grouping rather than palette/motif.
- `NO YIELD`, a label on Direct Descent, is identified as state; the horizontal `DEPTH 3 · PERSISTS · NEXT CHECKPOINT IN 3` strip is not identified as such.

## Navigation and index check

Stimulus: `boards/global-area-strip-mobile.png`, shown without explaining the intended answers.

### Questions

1. “Nếu đang ở Home/Farm và muốn Sell, anh sẽ tìm và chọn gì?”
2. “Nếu muốn Catch, anh sẽ tìm và chọn gì?”
3. “Nếu muốn tăng Mine Depth, anh sẽ tìm và chọn gì?”
4. “Việc cuộn đến các phần đó có tốn AP hoặc làm reset state của phần vừa rời màn hình không?”
5. “Dải này đã dài tới mức cần Area index chưa? Nếu chưa, đến khoảng bao nhiêu Area thì anh bắt đầu muốn có index?”

### Verbatim response

> 1. kéo xuống commerce và bán ở sell at market.
> 2. kéo xuống river, mà bản chất khu vực này đã tường minh cho việc catch
> 3. direct descent
> 4. tạm thời tôi nghĩ game của chúng ta sẽ không thu AP việc di chuyển. không reset state
> 5. tôi nghĩ nên có area index, mà area index là tên của area đúng không

### Observed design evidence

- Sell, Catch and the action that increases Mine Depth are all found correctly.
- The owner currently expects scrolling/navigation to cost no AP and off-screen state not to reset.
- Navigation is still described as “di chuyển”, consistent with the earlier movement reading; the UI/travel distinction is therefore not fully established.
- An Area index is wanted at the current four-Area length. The requested index is a list of Area names that focuses/scrolls the UI, not a map or travel control.

## v0.3 first-arm result

`[REVISION REQUIRED]` as informed-owner evidence. This is not fresh-player evidence.

Keep:

- stable vertical order;
- two-column square target grammar;
- Sell, Catch and Direct Descent findability;
- scroll at `0 AP` and off-screen state persistence.

Revise only observed problems:

- replace `Sleep at Home` with a `Farmhouse` root target that reveals the house interior after Character is committed;
- remove meaningless `2 Plots` from Water Trough;
- make Harvest Bench communicate active harvesting rather than forage sitting on a bench;
- make navigation chrome/index and boundaries read as UI rather than movement;
- strengthen state-strip distinction from square-card tags;
- add an Area-name index at the current four-Area length.
