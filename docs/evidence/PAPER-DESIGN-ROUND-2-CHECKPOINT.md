# Paper-design round 2 checkpoint

Ngày checkpoint: 2026-09-21.

Mục đích: lưu đúng điểm dừng sau vòng content/calendar/economy/Person/graph v1. Đây là audit map, không phải production specification hoặc quyết định balance.

## 1. Git state lúc bắt đầu vòng

- `main` và live `origin/main` đều ở `b3d76fcd192351f166c9c696658976d17d341fa0` (`Add Year 1 paper design package`).
- Không cần push commit cũ.
- `tmp/` vẫn untracked, không liên quan và không bị sửa/xóa/commit.
- Tài liệu của vòng này đang untracked; chưa commit hoặc push.

## 2. Phân loại trạng thái

### 2.1. [DECIDED] Không thay đổi

- Solo card-based life sim; card là ngôn ngữ chính.
- Person là persistent collectible với activated ability.
- Save tiếp tục nhiều năm; Year 1 không phải ending/reset.
- Objective, completion và ending độc lập.
- Bỏ lỡ thông thường trì hoãn, không phá save.

### 2.2. [DIRECTION] Được giữ

- Distributed progression graph.
- Paper simulation trước code/prototype.
- Continuous world/square art-first vẫn là hướng cần validation, chưa là topology cuối.
- Content/economy dùng shared vocabulary và exact compatibility thay vì generic token.

### 2.3. [HYPOTHESIS] Mới mạnh lên

- 5 AP là stress bound có choice thật nhưng có một short/sparse soft-lock cell.
- 7 AP là safety bound nhưng xóa phần lớn opportunity pressure trong minimum slice.
- Rain phase alignment với burst quan trọng ngang frequency.
- Buy/Sell 0 AP là baseline paper mạnh hơn universal transaction tax.
- Seed restock + selected infrastructure fee là hai Gold sink shape đủ cho vòng hiện tại.
- A/C/K là Person kernels evidence-backed nhất; E/J conditional; D/I/M reserve.
- Home-middle nên là fixture user-test trước; chưa được chốt.

### 2.4. [FIXTURE] Không được thành luật

- Shortroot/Tallbean/Dewleaf và toàn bộ price/cost.
- A5/A7, S12/S18, Rain every 3/5 days.
- Project bundles/fees.
- COL-1 3-of-4 và Seed Choice.
- Catch 2 AP, Processor +2G/one slot/one Sleep.
- Heart cap 2, +1/−1, same-day use.
- Home-middle/vertical-serpentine.

## 3. Outputs

| File | Scope | Verdict |
| --- | --- | --- |
| [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md) | Shared crops/items/sources/Projects/collection/Processing vocabulary | Complete as fixture vocabulary |
| [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md) | 2 AP × 2 Weather × 2 Season; three routes | Complete for first bracket |
| [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) | Gold sinks, transaction AP, tags, collection value, dominance | Complete for fixture economy |
| [Person roster kernel audit 02](PERSON-ROSTER-KERNEL-AUDIT-02.md) | Eight kernels, supply/density, repeat ×2, overlap | Complete; five carry candidates |
| [Asset orientation audit 05](CONTINUOUS-WORLD-ASSET-ORIENTATION-AUDIT-05.md) | 80 px desk review + Home-middle/top | Desk audit complete; user validation not complete |
| [Year 1 graph v1](../current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md) | Integrated state/reveal dependency graph | Complete as v1 hypothesis graph |

## 4. Corrections forced by evidence

1. Không dùng total AP/Season để kết luận workload fit; non-bankable peak và reveal gate quyết định.
2. Không mô tả Weather chỉ bằng Rain percentage; cần phase-to-burst/opportunity.
3. Không buộc M/E/B farming path hoàn tất trong cùng Season.
4. Không dùng transaction AP để chữa A7 surplus vì nó làm A5 peak nặng hơn.
5. Không nerf Processing chỉ bằng Load cost; phải có exact raw/processed targets và liquidity.
6. Không quy COL-1 thành Gold scalar; reward có liquidity + timing + capability.
7. Không thêm content để nuôi D/I/M Person kernels.
8. C cần one-held-target limit; J cần one-retuned-action/Context/day; không cần cooldown chung.
9. Không coi square art readable là rule readable; path/opportunity/ability vẫn cần label/preview.
10. Không gắn exact day/Season bands vào graph v1 từ fixture.

## 5. Open blockers

### Priority A — next paper evidence

- New-player orientation test chưa chạy.
- Thiếu square study/candidate cho Mine, Town, Sea, three Projects và Fresh/Processed pairs.
- Storage/Keep sensitivity chưa có; perishability chưa được phép giả định.
- Fishing atomic vs persistent chưa rerun trên four decisive calendar cells.
- Mine material + Project fee có nguy cơ triple gate.
- Một concrete mini-roster vẫn chưa được gán Person/Gift preference.

### Priority B — still not selected

- Final AP/day, Season length, Weather cadence/forecast.
- Sleep/end-day/AP thừa và Energy riêng.
- Storage/capacity/perishability.
- Final Project price/recipe, crop yield/price, Processing uplift.
- Home-middle vs Home-at-top.
- Objective hub necessity; v1 vẫn pass không có hub.

## 6. Exact next order

1. Tạo/review square **study** tokens còn thiếu; không approve canonical chỉ để chạy test.
2. Chạy new-player paper orientation M vs T, counterbalanced, log direction/anchor/recall/source errors.
3. Chạy Storage/Keep sensitivity `no cap vs small cap`; perishability là arm riêng nếu thật sự cần.
4. Rerun Fishing atomic vs persistent trên `5-12-S`, `5-18-D`, `7-12-S`, `7-18-D`.
5. Audit Mine resource sell value + Project fee/material/Work để tránh triple gate.
6. Dựng một mini-roster fixture từ A/C/K + tối đa E/J, rồi rerun Heart/economy contexts.
7. Chỉ sau các bước trên mới lock package v1 hoặc đề xuất decision cho AP/calendar/topology.

Không bắt đầu code/prototype ở checkpoint này.

## 7. Verification

- Trailing-whitespace scan trên toàn bộ tài liệu mới: pass. `git diff --check` hiện clean nhưng các file vẫn untracked nên không dùng riêng kết quả đó làm bằng chứng.
- Tất cả local Markdown links giữa sáu tài liệu mới: resolve.
- Tài liệu mới dùng `Person`, không đưa thuật ngữ cũ trở lại.
- Mỗi tài liệu phân biệt [DECIDED], [DIRECTION], [HYPOTHESIS], [FIXTURE].
- Không file trong `tmp/` bị đưa vào scope.
