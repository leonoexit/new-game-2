# Informed-owner final correction check — v0.3.3 — 2026-09-22

Tester: current product owner (informed-owner evidence; not fresh-player evidence).

Stimulus: `boards/viewport-sequence.png`, after the owner had already reviewed each Area individually in v0.3–v0.3.2.

## Questions

1. “Home, Commerce và River đã tự giải thích đủ khi không còn Area-state line chưa?”
2. “`MIRA` có đọc đúng như identity/target của NPC mà không cần `TODAY` và `GIFT ITEM` không?”
3. “`RAIN` nằm trên global chrome và Eel Sighting không còn tag: scope này đã đúng chưa?”
4. “Mine Depth có phải status riêng duy nhất cần tồn tại trong bốn Area này không?”
5. “Hai tag còn lại—`DEPTH +1` và `DEPTH +0`—đã đủ và không dư chưa?”

## Verbatim response

> 1. Có màu nền cũng giúp ích 1 phần, về sau chúng ta thay thế nền này bằng 1 nền abstraction tạo bằng gen-img cho sinh động
> 2. Có
> 3. Đúng, về sau chúng ta cho thời tiết và mùa hiển thị như 1 lá bài, nhưng không nằm trên bàn chơi là xong
> 4. Có lẽ là vậy, không thể sai được
> 5. bỏ luôn depth + 0

## Observed design evidence

- `[ACCEPT]` Home, Commerce and River self-explain without Area-state lines. Current color fields help Area identity.
- `[FUTURE]` Replace flat Area fields with lively generated abstraction backgrounds later; this is not authorization to create them in the current revision.
- `[ACCEPT]` `Mira` works as NPC identity/target without `TODAY` / `GIFT ITEM`.
- `[ACCEPT]` Rain belongs to global UI scope, not inside the Eel card or River tableau.
- `[FUTURE]` Weather and Season may use card-like UI outside the play tableau. They are not on-table targets and must not violate the square-target contract.
- `[ACCEPT]` Mine Depth is the only separate status needed among the four current Areas.
- `[KEEP]` Direct Descent `DEPTH +1`.
- `[REMOVE]` Search Side Tunnel `DEPTH +0`; a no-change tag is unnecessary.

## Result

`[ACCEPT AFTER EXACT CORRECTION]`: create v0.3.4 by removing only `DEPTH +0`. All other v0.3.3 corrections are accepted as informed-owner evidence. Fresh-player onboarding risk remains open.
