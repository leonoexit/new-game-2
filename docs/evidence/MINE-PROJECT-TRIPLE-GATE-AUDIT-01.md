# Mine/Project economy audit 01 — material, fee và Work triple gate

Ngày chạy: 2026-09-22.

Trạng thái: paper gate audit dùng price/source fixture của [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) và Mine cadence của [Mine checkpoint simulation 02](MINE-CHECKPOINT-PAPER-SIMULATION-02.md). Quantities, fees và Progress đều là `[FIXTURE]`.

## 1. Ranh giới

### 1.1. [DECIDED]

- Mine Depth persistent; skip day chỉ trì hoãn, không reset.
- Safe route cho deterministic progress; Person không bắt buộc.
- `PJ-M` relief Water, `PJ-B` relief burst, `PJ-X` mở optional context; ba Project không cùng chức năng.
- Required material có deterministic source/recovery.
- Year 1 là content scope, không phải ending/reset của save.

### 1.2. [DIRECTION]

- Một capability không nên đồng thời bị khóa mạnh bởi source access, scarce material, Gold và Work nếu relief cần đến trước khi loop đã tự vượt khó.
- Material allocation phải còn ý nghĩa; không bỏ material layer chỉ để biến Project thành cash purchase.
- Optional context Project chịu gate dài hơn relief Project, miễn base route vẫn hoạt động.

## 2. Comparable Project fixture

Để nhìn gate shape, audit tạm dùng `1 Wood + 1 secondary + 3 Work` cho mỗi Project. Đây không phải quantity đề xuất.

| Project | Secondary | Fee | Material sell opportunity | Extra access |
| --- | --- | ---: | ---: | --- |
| `PJ-M` Water Trough | 1 Ore | 8G | Wood 2G + Ore 5G | Reach CP3 + Extract Ore không tăng Depth |
| `PJ-B` Harvest Bench | 1 Stone | 10G | Wood 2G + Stone 2G | Safe Mine route có thể vừa tiến Depth vừa cho Stone |
| `PJ-X` Footbridge | 1 Stone | 8G | Wood 2G + Stone 2G | Optional context only |

Nominal cash-equivalent sacrifice nếu trả fee và không bán input:

| Project | Fee + material sell value | Work | Source action burden |
| --- | ---: | ---: | --- |
| `PJ-M` | 15G | 3 AP fixture | Wood action + CP3 access + separate Extract |
| `PJ-B` | 14G | 3 AP fixture | Wood action + Safe route |
| `PJ-X` | 12G | 3 AP fixture | Wood action + Safe route |

Gold-equivalent không định giá capability; bảng chỉ phát hiện gate stacking.

## 3. Gate count

| Gate | PJ-M | PJ-B | PJ-X |
| --- | --- | --- | --- |
| Source access | Mine CP3 + Woodlot | Mine Safe + Woodlot | Mine Safe + Woodlot |
| Material allocation | Scarce Ore vs 5G/Depth | Stone vs other Project | Stone vs relief Project |
| Gold fee | 8G | 10G | 8G |
| Work | 3 fixture | 3 fixture | 3 fixture |
| Capability urgency | Early maintenance relief | Burst relief | Optional context |

`PJ-M` thực tế là **four-layer gate**: checkpoint access, separate Extract/rare allocation, fee và Work. Nó cũng là relief có nhu cầu sớm nhất. Đây là shape rủi ro nhất.

## 4. Arms

| Arm | Rule | Expected behavior |
| --- | --- | --- |
| `G3` | Fee + required secondary + Work | Maximum liquidity/source pressure |
| `G2-M` | Material + Work; bỏ fee | Capability earned qua world/source play |
| `G2-F` | Fee + Work; secondary chỉ là alternate payment | Cash route; material identity yếu hơn |
| `G2-A` | Work + **fee OR extra common material**, exact preview | Hai route payment, tránh cần bán chính material required |

### 4.1. PJ-M

- `G3`: first harvest Sell có thể trả fee, nhưng Producer còn cần reach CP3 và bỏ một Descend để Extract. Relief đến sau phần maintenance stress cần nó nhất.
- `G2-M`: giữ Wood + Ore + Work; Mine cross-link còn nguyên, fee không cộng liquidity gate.
- `G2-F`: bỏ required Ore làm Working Seam/relief allocation mất lý do.
- `G2-A`: nếu alternate common material thay fee, UI/registry burden tăng và có thể làm Ore optional quá mức.

`[HYPOTHESIS]` `G2-M` là arm mạnh nhất cho Water Trough: giữ material identity + Work, bỏ fee trong test kế.

### 4.2. PJ-B

- Stone đến từ Safe route trong khi Depth vẫn tiến; source gate mềm hơn Ore.
- Burst relief cần trước khi 4–6 crop peak; fee 10G + Work có thể vẫn đến muộn ở A5.
- `[DIRECTION]` Test `G2-M` trước; nếu Gold sink cần tồn tại, Harvest Bench không phải nơi bắt buộc duy nhất.

### 4.3. PJ-X

- Base Grove/Mine/common source loop hoạt động không cần bridge.
- Optional context có thể chịu `G3` tốt hơn vì delay không làm core maintenance tệ thêm.
- Fee + Stone + Work vẫn cần exact recovery/preview; player có thể bán Stone và quay lại Safe route sau.
- `[HYPOTHESIS]` Giữ `G3` như strategic sink comparator chỉ cho `PJ-X`, không suy ra mọi Project có fee.

## 5. Source-vs-depth audit

Working Seam: `1 AP → known Ore, Depth không tăng`. Ore có hai target mạnh: Sell 5G hoặc `PJ-M`.

- Nếu PJ-M còn fee 8G, bán Ore trả phần lớn fee nhưng đồng thời xóa required Ore: circular liquidity trap.
- Nếu PJ-M không fee, Extract decision là `relief material vs 5G now`, rõ và không tự mâu thuẫn.
- Nếu Ore vừa bán vừa được record-only thì record không thay material; no double spend.
- Seam refresh/recovery cho phép lấy Ore sau; không reset Depth và không cần Person A.

## 6. Completion staging

`[DIRECTION]` Project preview luôn hiện toàn bộ material, Work và fee trước contribution đầu. Contribution có thể tích lũy; không mất qua Sleep/Season/Year.

- Material đã contribute không tự bán/withdraw qua quick action.
- Work có thể làm trước/sau material nếu preview rõ.
- Fee, nếu có, trả ở final commit; không thu non-refundable fee trước khi player biết còn thiếu gì.
- Cancel trước final commit không đổi state; completed contribution chỉ reverse nếu một explicit recoverable rule tồn tại.

## 7. Verdict

1. `[HYPOTHESIS]` Water Trough fail triple-gate shape dưới `G3`; checkpoint + scarce Ore + fee + Work đưa relief đến quá muộn và tạo Ore-sell circular trap.
2. `[DIRECTION]` Paper baseline kế: `PJ-M` và `PJ-B` dùng material + Work, không fee; `PJ-X` giữ fee comparator vì chỉ mở optional context.
3. `[HYPOTHESIS]` Project fees nên selected, không universal. Seed restock vẫn giữ recurring Gold sink.
4. `[DIRECTION]` Không tăng Mine payout để bù gate stacking; bỏ một gate trước khi inflate reward.
5. `[DIRECTION]` Quantities/Work vẫn mở. Rerun khi calendar có exact completion timing; không biến `1+1+3` thành luật.
6. `[DECIDED]` Không Project contribution nào reset ở Year boundary; save tiếp tục.

## 8. Chưa kết luận

- Material quantity, Work total, fee amount.
- Project nào cuối cùng có Gold fee.
- Working Seam cadence/refresh.
- Water/Harvest scope relief cuối.
- Upper-Grove content cụ thể.
