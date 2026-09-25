# Little Valley Cards — paper design

Repository này hiện chứa luật giấy, chứng cứ thử nghiệm và nghiên cứu hình ảnh. Chưa có ứng dụng/gameplay runtime trong cây nguồn này.

## Bắt đầu từ đâu

1. [Card grammar hiện hành](docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md) chốt loại lá, nơi thuộc về, tương tác và biến đổi. [Kiến trúc World lồng tableau](docs/current/WORLD-NESTED-CARD-ARCHITECTURE-01.md) ghi World → Region (`Home`) → các lá Home (`Field`, `Farmhouse`); [Farm land contract](docs/current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) ghi trạng thái đất và sức chứa Field; [Field presentation contract](docs/current/WORLD-GROUP-PRESENTATION-CONTRACT-01.md) ghi bộ lọc và dòng tóm tắt trong Field; [Mine contract](docs/current/MINE-CURRENT-CONTRACT-01.md) ghi luật CG-17/19/20; [Fishing contract](docs/current/FISHING-CURRENT-CONTRACT-01.md) ghi luật V0 qua CG-24 với một Fish đại diện. [Danh mục lá V0](docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) ghi identity liên quan.
2. [Bản tổng hợp Year 1](docs/current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) giữ luật giấy và kết quả thử; các tên/phần thưởng lịch sử trong đó không tự trở thành lá V0.
3. [Sơ đồ phụ thuộc](docs/current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md) giải thích nguồn, hành động và phần thưởng đã được thử. [Mô hình Area cũ](docs/current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md) lưu snapshot trước CG-35 để đối chiếu.

## Cấu trúc

| Nơi lưu | Vai trò |
| --- | --- |
| `docs/current/` | Luật, graph và contract đang được dùng để ra quyết định. Các đoạn đánh dấu historical trong chính tài liệu vẫn chỉ là chứng cứ đối chiếu. |
| `docs/evidence/` | Audit, phép thử, đề xuất cũ, tài liệu nguồn và quyết định đã bị thay thế; không tự nâng thành luật hiện hành. |
| `paper-tests/` | Mẫu hiển thị và kết quả thử. Phiên bản mới nhất có thể vẫn chứa nội dung fixture đã bị bác bỏ; dùng để đọc chứng cứ UI, không lấy làm roster/card list V0. |
| `art/approved/` | Tham chiếu hình ảnh được duyệt ở mức ghi trong asset record. |
| `art/style-studies/` | Nghiên cứu hình ảnh, gồm cả ý tưởng game đã bị bác bỏ; không phải asset runtime. |
| `scripts/` | Công cụ kiểm tính toàn vẹn repository; không chứa gameplay. |

Khi hai nguồn mâu thuẫn về **loại lá, nơi xuất hiện hoặc card identity**, dùng card grammar và sheet V0 ở trên. Với luật giấy khác, đối chiếu quyết định mới nhất của chủ dự án trong tài liệu hiện hành rồi mới xem chứng cứ cũ. `tmp/` và `output/` là dữ liệu tạo tạm, không đưa vào Git.

Kiểm liên kết nội bộ sau khi đổi cấu trúc: `python3 scripts/check_markdown_links.py`.
