# Mine band cadence paper simulation 04 — source investment và CP12 timing

Ngày chạy: 2026-09-22.

Trạng thái: bounded timing simulation tiếp nối [Mine later-discovery/source audit 03](MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md). Test dùng current minimum Depth/checkpoint scale để hỏi CP12 world-connection interaction có thực sự là later discovery cho `COL-N` hay không. Không chốt final Depth count, AP/day, checkpoint interval, Project quantity hoặc Mine content.

## 1. Fixed fixture

- AP arms: A5 và A7.
- `Direct Descent`: 1 AP, Depth +1, no material.
- Tối đa ba Direct Descent/ngày.
- CP3: Exposed Ore ready; Extract 1 AP.
- CP6: Stone becomes available; Search 1 AP, Extract 1 AP.
- CP9: inspect/choose one previewed context band; choice itself 0 AP trong fixture.
- CP12: world connection appears; collection-relevant record chỉ xảy ra sau một native interaction 1 AP, không chỉ vì Depth counter đạt 12.
- Person P package D4: 2 AP và được giữ trong trace.
- Wild Herb batch D5: Collect 1 AP nếu còn capacity.
- `PJ-X`: 2 Wood + Stone + 3 Work + 8G permit; CP3 Ore sale funds permit từ wallet 4G.
- Scroll/inspect/Journal 0 AP; record không consume item.

CP9/CP12 names/content vẫn là placeholder. Mine context không phải daily agenda và không được tổng hợp lên Weather rail.

## 2. Routes

### 2.1. `F` — fast Depth

Ưu tiên ba Descend/ngày; giữ Person P D4. Không lấy Ore/Stone và không làm `PJ-X`.

### 2.2. `S` — source-invested

Lấy CP3 Ore và CP6 Stone trước khi tiếp tục; không làm Project. Route đo cost thuần của discovery/extraction.

### 2.3. `X` — source + optional Project

Lấy Ore/Stone, gather Wood, làm `PJ-X`, rồi tiếp tục Depth. Đây là Connector route có nhiều cross-system work nhất trong current minimum.

## 3. A5 traces

### 3.1. `F-A5`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Descend ×3 | Depth 3 |
| D2 | Descend ×3 | Depth 6 |
| D3 | Descend ×3 | Depth 9 |
| D4 | Person P 2 + Descend ×3 | Depth 12; 0 AP left |
| D5 | CP12 native interaction 1 + Herb 1 | later record D5; 3 AP flexible |

### 3.2. `S-A5`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Descend ×3 + Extract Ore + 1 flexible | Depth 3; Ore acquired |
| D2 | Descend ×3 + Search Stone + Extract Stone | Depth 6; Stone acquired |
| D3 | Descend ×3 | Depth 9; 2 AP flexible |
| D4 | Person P 2 + Descend ×3 | Depth 12; 0 AP left |
| D5 | CP12 native interaction 1 + Herb 1 | later record D5; 3 AP flexible |

Source investment uses AP that was otherwise flexible; daily descent cap, not total AP, keeps Depth day unchanged.

### 3.3. `X-A5`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Descend ×3 | Depth 3; Wood ready |
| D2 | Descend ×3 + Search Stone + Extract Stone | Depth 6; Stone ready |
| D3 | Extract Ore + Work ×3 + Descend ×1; sell Ore/pay permit | `PJ-X` complete; Depth 7 |
| D4 | Person P 2 + Descend ×3 | Depth 10 |
| D5 | Herb 1 + Descend ×2 + CP12 native interaction 1 | Depth 12; later record D5; 1 AP flexible |

Project investment changes the action mix but CP12 interaction vẫn D5.

## 4. A7 traces

### 4.1. `F-A7`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Descend ×3 | Depth 3; 4 AP flexible |
| D2 | Descend ×3 | Depth 6; 4 AP flexible |
| D3 | Descend ×3 | Depth 9; 4 AP flexible |
| D4 | Person P 2 + Descend ×3 + CP12 native interaction 1 | Depth 12; later record D4; 1 AP flexible |

### 4.2. `S-A7`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Descend ×3 + Extract Ore | Depth 3; 3 AP flexible |
| D2 | Descend ×3 + Search Stone + Extract Stone | Depth 6; 2 AP flexible |
| D3 | Descend ×3 | Depth 9; 4 AP flexible |
| D4 | Person P 2 + Descend ×3 + CP12 native interaction 1 | Depth 12; later record D4; 1 AP flexible |

### 4.3. `X-A7`

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Descend ×3 + Extract Ore + Work ×1 | Depth 3 |
| D2 | Descend ×3 + Search Stone + Extract Stone + Work ×2; pay permit | `PJ-X` complete; Depth 6 |
| D3 | Descend ×3 | Depth 9; 4 AP flexible |
| D4 | Person P 2 + Descend ×3 + CP12 native interaction 1 | Depth 12; later record D4; 1 AP flexible |

## 5. Result matrix

| Route | A5 CP12 reached | A5 native interaction | A7 CP12 reached | A7 native interaction |
| --- | --- | --- | --- | --- |
| Fast `F` | D4 | D5 | D4 | D4 |
| Source `S` | D4 | D5 | D4 | D4 |
| Project `X` | D5 | D5 | D4 | D4 |

Current chosen-seed output signal nằm khoảng D7/D8 trong minimum calendar. Mọi Mine arm hoàn native interaction trước signal đó.

Kết quả mạnh:

- source investment không tạo long horizon vì ba-descend/day cap để Extract/Search ăn phần AP flexible;
- `PJ-X` chỉ đẩy A5 CP12 reach từ D4 sang D5, không đẩy native interaction qua D5;
- A7 absorb toàn bộ source/Project load mà không đổi CP12 day;
- CP12 là semantic phase change nhưng không phải later-calendar clock trong current scale.

## 6. Counterfactual timing fixes

### 6.1. Tăng Depth checkpoint

Đẩy world connection từ 12 lên 18/21 có thể làm ngày muộn hơn, nhưng chỉ thêm counter nếu không có band decisions/content mới. Không chọn Depth number để cứu `COL-N`.

### 6.2. Mandatory checkpoint tax

Bắt player trả AP ở CP3/CP6/CP9 trước khi Descend tiếp sẽ kéo timing nhưng biến optional source/branch thành toll. Điều này phá fast-vs-yield agency. Reject như generic fix.

### 6.3. Fixed day/Season gate

Cho CP12 context chỉ mở sau D8 hoặc Season boundary tạo wait gate không liên quan Mine play. Reject.

### 6.4. Thêm actual band content

Một future Mine dài hơn có thể chứa thêm rule/context bands thật; khi đó world connection muộn vì người chơi gặp nhiều decision khác, không vì counter padding. Đây là hợp lệ nhưng cần content-specific design/evidence, không được giả định trong minimum registry.

## 7. COL-N consequence

`LD-X` vẫn là relationship record có meaning:

```text
Mine Depth progression
→ world connection appears
→ first native interaction
→ Journal records cross-system relationship
```

Nhưng nó chỉ được dùng như optional one-of-many record. Nó không thể là evidence rằng `COL-N` kéo dài qua calendar.

Do đó:

- không thêm CP12 vào required `N-REL` page set;
- không gọi nó `late` trong current fixture; gọi `world-connection relationship`;
- giữ backfill nếu interaction đã xảy ra;
- long-horizon timing vẫn cần một context có cadence tự nhiên muộn hơn chosen-seed output hoặc một future content-complete Mine scale.

## 8. Verdict

1. `[PAPER RESULT]` CP12 native interaction xảy ra D5 ở A5 và D4 ở A7 trên cả fast/source/Project route trong current minimum.
2. `[FAIL — LONG CALENDAR]` Mine CP12 không pass later-discovery timing cho `COL-N`; nó xảy ra trước chosen-seed output D7/D8.
3. `[PASS — RELATIONSHIP SHAPE]` World connection + first native interaction vẫn là record có meaning và recovery, nhưng chỉ là optional collection content.
4. `[REJECT]` Không tăng Depth count, bắt checkpoint tax hoặc fixed-day gate chỉ để kéo `COL-N`.
5. `[DIRECTION]` CP6 band-specific Stone source vẫn hợp lệ; cadence test không làm nó thành mandatory toll.
6. `[OPEN]` Long-horizon slot phải đến từ later non-Mine context hoặc future Mine content scale có decisions thật.

## 9. Handoff

Workstream kế nên audit hai non-Mine candidates đang có shape gần nhất:

- later source/restock context sau `COL-1`, nhưng không biến unchosen Seed thành checklist bắt buộc;
- Processor specialization/context, nhưng không dùng repeated Load count làm grind.

Chỉ khi một candidate có actual cadence/recovery và ít nhất hai route alternatives mới rerun `N-REL` completion timing.
