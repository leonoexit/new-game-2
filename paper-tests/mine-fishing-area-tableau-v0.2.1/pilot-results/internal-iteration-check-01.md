# Internal iteration check 01 — action-first v0.2.1

Ngày: 2026-09-22.

Trạng thái: `[COMPLETE — PARTIAL IMPROVEMENT, SEMANTIC CORRECTION REQUIRED]`.

Participant: same informed project owner/designer from v0.2 pilot. This is iteration evidence, not new-player comprehension evidence.

## Prompt

Participant saw only `boards/card-mobile-preview.png` and was asked what each card allowed/required and which card only held state.

## Raw response

> rain catch: tôi cảm giác chỗ này không phải fishing mà là để đặt một cái lưới bắt rain eel đúng không, click tốn ap lấy con eel??
>
> person today: này thì thì tường minh rồi, tặng quà
>
> current frontier: đây là cổng vào mỏ đúng không, lá này có vẻ như dùng để thông báo trạng thái mỏ chứ không thực sự có tương tác
>
> safe tunnel và veiled vein: thực hiện hành động đào mỏ, tăng độ sâu của mỏ,
>
> working seam: lá này cho thấy có thể hái lượng như sao tên nó lại là working seam

## Coding

- Rain Catch: cost/reward interaction understood; tool/verb misread as placing a net because location art + abstract title did not say Rod.
- Person Today: action understood immediately.
- Current Frontier: correctly classified as state-only; art still read as Mine entrance.
- Safe Tunnel + Veiled Vein: descent/Depth understood, but two routes collapsed into one action; known Stone versus unknown Ore was not spontaneously expressed.
- Working Seam: source action understood as collecting/mining Ore; internal term `Working Seam` questioned.

## Result

Action-first grammar materially improved comprehension, but designer-language nouns and placeholder art still create semantic tax. v0.2.2 should use plain user-facing labels and expose the distinguishing tool/reward/uncertainty on root:

| Design concept | User-facing root label/action |
| --- | --- |
| Rain Catch | `Rain Eel` / `Catch with Rod` |
| Current Frontier | `Mine Depth` / state-only, choose a Mine action |
| Working Seam | `Exposed Ore` / mine Ore, no Depth |
| Safe Tunnel | `Safe Descent` / Depth + known Stone |
| Veiled Vein | `Hidden Ore Route` / Depth + reveal Ore |

Do not claim v0.2.1 passed comprehension. The next check must test whether the two descent routes are distinguishable without opening detail.
