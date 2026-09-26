# Nguồn luật giấy hiện hành

Thư mục này chứa cả luật đang dùng và hồ sơ cũ. **Đường dẫn nằm trong `docs/current/` không tự làm một tài liệu thành luật hiện hành.** Khi có khác biệt, quyết định mới nhất được chủ dự án nói rõ trong hội thoại được ghi vào nhật ký; bảng dưới chỉ nơi phải sửa cho từng loại thông tin.

| Thông tin | Nơi sở hữu nội dung hiện hành | Chỉ ghi gì ở nơi khác |
| --- | --- | --- |
| Chủ dự án đã chốt gì, điều gì do dự án chuyển thể, phạm vi và quyết định thay thế | [Nhật ký quyết định và card grammar](ON-TABLE-CARD-SHAPE-DECISION-09.md) | Mã quyết định và liên kết, không chép lại toàn bộ luật |
| Card identity, loại lá, nơi thuộc về và vai trò của từng lá V0 | [Danh mục lá V0](LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) | Tên lá và liên kết tới danh mục khi cần |
| World/Region, quan hệ chứa và điều hướng | [World architecture](WORLD-NESTED-CARD-ARCHITECTURE-01.md) | Chỉ mô tả đường đi cần cho phép thử |
| Field, đất, Clear/Till và sức chứa | [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) | Dẫn contract; không lặp phân bố Soil/đá hoặc phí |
| Plant/Water/Harvest, Rain/Sleep và AP ở Farm | [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) | Dẫn contract; không lặp bảng action |
| Hiển thị đủ tám lá trong Field, không lọc/tóm tắt | [Field presentation contract](WORLD-GROUP-PRESENTATION-CONTRACT-01.md) | Dẫn contract |
| Nguồn Seed, Crop và output của lô Crop V0 | [Crop content contract](FIRST-PLAYABLE-CROP-CONTENT-BATCH-01.md) | Dẫn contract và danh mục |
| Sapling, Plant, growth, Harvest và Chop của Fruit Trees trong Field | [Fruit Tree content contract](FIRST-PLAYABLE-FRUIT-TREE-CONTENT-BATCH-01.md) | Dẫn contract và danh mục; Field giữ quyền sở hữu tám vị trí |
| Wild Herb, Hedgerow/Pick Berry và gói Oak/Maple/Pine/Mahogany/Axe/Chop trong Forest V0 | [Forest content contract](FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md) | Dẫn contract và danh mục; không lặp taxonomy/nhịp |
| Break/Next/Descend, Ore và Copper Pickaxe | [Mine contract](MINE-CURRENT-CONTRACT-01.md) | Dẫn contract |
| Fishing Spot, Cast và Fish output | [Fishing contract](FISHING-CURRENT-CONTRACT-01.md) | Dẫn contract |
| UI hoặc cơ chế chưa có contract riêng, gồm Nell/Gift, Bed, Commerce, Valley Almanac | [Nhật ký quyết định](ON-TABLE-CARD-SHAPE-DECISION-09.md) | Khi cần chi tiết hơn, lập một contract của cơ chế rồi cập nhật bảng này |

## Hồ sơ không phải nguồn luật hiện hành

[Registry tối thiểu](CONTENT-MINIMUM-REGISTRY-01.md), [gói Year 1](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), [graph Year 1](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md), [audit Grove](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md), [goal năm Region đã đóng](FIRST-PLAYABLE-FIVE-REGION-CONTENT-GOAL-01.md) và [bàn giao phiên](SESSION-HANDOFF-2026-09-25.md) là **snapshot/chứng cứ theo thời điểm viết**. Chúng có thể chứa lời khẳng định từng đúng hoặc fixture đã bị thay thế. Các proposal, reference, paper test khác trong thư mục này cũng chỉ phục vụ đối chiếu; `docs/evidence/` và `paper-tests/` giữ cùng vai trò chứng cứ. Không cập nhật các hồ sơ này mỗi khi luật đổi và không lấy chúng để ghi đè nguồn ở bảng trên.

## Cách sửa một quyết định

1. Ghi lời chốt và ranh giới vào nhật ký quyết định. Nếu chỉ là lựa chọn chuyển thể hoặc giả định phép thử, ghi đúng nhãn đó.
2. Sửa **contract sở hữu cơ chế** nếu hành vi đổi; sửa **danh mục** nếu identity, loại lá, nơi hoặc vai trò đổi. Chỉ sửa World/Field contract khi chính hierarchy/UI của chúng đổi.
3. Cập nhật README này **chỉ khi nơi sở hữu nội dung thay đổi**. Không đồng bộ snapshot, graph hoặc phép thử lịch sử. Nếu một hồ sơ cũ dễ bị hiểu là luật mới, thêm một cảnh báo ngắn và liên kết tới nguồn hiện hành; giữ phần lịch sử nguyên vẹn.

Ví dụ CG-57: phân loại Hedgerow cần sửa nhật ký quyết định, dòng Hedgerow trong danh mục và contract Forest. Gói Year 1, graph, registry và goal cũ chỉ cần trỏ tới nguồn mới; những lần đổi taxonomy tiếp theo không phải sửa chúng.

Nội dung mới được **nhập thô theo họ cơ chế trước, rồi rà logic theo lô** bằng [quy trình batch](CONTENT-BATCH-WORKFLOW-01.md). Hồ sơ `imported_draft` ở `docs/content-batches/` chỉ là dữ liệu và giả định thử, không là luật V0 hoặc hàng danh mục đang chơi.
