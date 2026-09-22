# Informed-owner correction check — v0.3.1 — 2026-09-22

Tester: current product owner (informed-owner evidence; not fresh-player evidence).

Stimulus: `boards/viewport-home.png`, shown without explaining the intended answers.

## Questions

1. “Area index này khiến anh đọc thao tác là UI focus/scroll hay nhân vật di chuyển?”
2. “Khi đưa Character vào Farmhouse, anh nghĩ điều gì sẽ hiện ra?”
3. “Water Trough còn chi tiết nào vô nghĩa không?”
4. “Use Harvest Bench đang thể hiện hành động gì; crop trên bàn có còn bị đọc là forage để nhặt không?”
5. “Band ngang nào chỉ là state và không nhận interaction?”

## Verbatim response

> 1. UI focus/scroll
> 2. các lá sub-card của farmhouse sẽ hiện ra để người chơi lựa chọn. các tag của farmhouse đang vô nghĩa
> 3. chính tag water đang vô nghĩa, tuy nhiên chấp nhận được
> 4. tôi biết mình phải dùng lưỡi liềm để lấy crop, toàn bộ text đều vô nghĩa. tôi không nhớ có cái gì tương tự trong stardew valley, có phải ý bạn lá này đang là trạng thái cuối của một loại crop nào đó mà bắt buộc phải dùng liềm để thu hoạch không
> 5. ready

## Observed design evidence

- `[PASS]` Sticky Area index changes the reading from character movement to UI focus/scroll.
- `[PASS]` Farmhouse root interaction is understood: committing Character reveals selectable sub-cards.
- `[FAIL]` Farmhouse tags `CHARACTER` and `INTERIOR` add no value.
- `[FAIL / ACCEPTABLE NOISE]` Water Trough tag `WATER` adds no value.
- `[FAIL]` Harvest action study implies a new sickle requirement and a mature-crop terminal state. Neither rule is established. The text does not repair the false model.
- `[FAIL]` The read-only Farm State band is not identified; `READY`, a square-card tag, is selected instead.

## Revision decision

`[REVISION REQUIRED]`:

- keep the accepted Area index/navigation chrome;
- remove redundant Farmhouse and Water Trough tags;
- remove Harvest Bench from the orientation fixture until its mechanic has a separately approved interaction grammar;
- retain the rejected action image only as failed art evidence;
- replace filled state bands with read-only inline state rails and test the concrete Farm State line directly rather than repeating an abstract “which strip?” question.
