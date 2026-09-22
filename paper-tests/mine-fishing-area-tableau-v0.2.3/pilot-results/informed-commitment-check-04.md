# Informed commitment check 04 — v0.2.3

Ngày: 2026-09-22.

Trạng thái: `[COMPLETE — ROOT TARGET/ACTION-COST CORRECTION REQUIRED]`.

Participant: informed project owner/designer. Đây không phải fresh-player evidence.

## Material correction before response

The first prompt incorrectly paired `card-mobile-preview.png` with questions requiring loose tokens and the vertical strip. The participant identified that the image and questions did not match. A corrected commitment board was then built with Character, Rod, Tool and Gift Item proxies.

## Raw response

> 1. char + rod + river = câu cá, char + gift + person = tặng quà, character + tool + ore = đầo khoáng
>
> 2. không có card nào không nhận token. Với mine, direct, search, thì đưa character lên các card này để di chuyển?
>
> 3. vì tôi đã trả lời được câu hỏi trên nên chắc không cần trả lời câu hỏi này. một cái về UI, nên đưa AP sang góc trái hoặc phải bên trên của card, card nào tốn AP thì ghi -n, không tốn thì ghi 0.

## Finding

- Eel, Person and Exposed Ore commitment mappings read correctly.
- `Mine State` fails as an inspect-only square: the universal square-card affordance makes it look like a valid commitment target.
- Direct Descent and Search Side Tunnel read as Character transitions, not generic Tool actions.
- A generic `Tool` proxy is too broad; the visible pickaxe should map specifically to Exposed Ore.
- AP belongs in a consistent top-corner cost position and should use signed spend notation (`-n AP`).
- Consequence comprehension was not tested because the participant declined the redundant follow-up; do not infer a pass.

## Required correction

1. Remove `Mine State` from the square-card set and keep Mine Depth/checkpoint/persistence in a non-target status strip.
2. Use `Character + Pickaxe` for Exposed Ore.
3. Use `Character` for Direct Descent and Search Side Tunnel in this fixture; depicted ladder/lantern belongs to the destination/action context, not a generic Tool token.
4. Move AP cost to a top corner and render spends as `-2 AP`, `-1 AP`; do not print AP on the bottom state-tag row.
5. Preserve v0.2.3 as evidence; test the correction in v0.2.4.
