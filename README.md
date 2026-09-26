# Little Valley Cards — paper design

Repository này chứa luật giấy, chứng cứ thử nghiệm, nghiên cứu hình ảnh và [bản chơi thử V0 chạy trên trình duyệt](prototype/README.md). Prototype dùng fixture cho những thông số chưa chốt; luật hiện hành vẫn do các contract trong `docs/current/` sở hữu.

## Bắt đầu từ đâu

1. [Bản đồ nguồn luật hiện hành](docs/current/README.md) chỉ rõ tài liệu nào sở hữu từng cơ chế và tài liệu nào là snapshot. Bắt đầu ở đây trước khi sửa luật.
2. [Nhật ký quyết định](docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md) ghi điều đã chốt và nguồn gốc quyết định; [danh mục lá V0](docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) ghi identity/loại/nơi/vai trò của từng lá. Luật chơi chi tiết nằm trong contract của cơ chế được liệt kê ở bản đồ.
3. [Goal nội dung năm Region](docs/current/FIRST-PLAYABLE-FIVE-REGION-CONTENT-GOAL-01.md), [gói Year 1](docs/current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), [graph Year 1](docs/current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md) và [mô hình Area cũ](docs/current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md) là hồ sơ theo thời điểm viết để đọc tiến trình thiết kế, không phải nơi chốt luật hiện hành.

Thêm nội dung mới theo [quy trình batch](docs/current/CONTENT-BATCH-WORKFLOW-01.md): nhập cả họ theo nguồn trước, rà logic chung sau, rồi mới đưa phần được chọn vào danh mục V0.

## Cấu trúc

| Nơi lưu | Vai trò |
| --- | --- |
| `docs/current/` | Gồm cả contract hiện hành và hồ sơ lịch sử. [Bản đồ nguồn luật](docs/current/README.md) phân biệt từng tài liệu; tên thư mục không tự quyết định hiệu lực. |
| `docs/evidence/` | Audit, phép thử, đề xuất cũ, tài liệu nguồn và quyết định đã bị thay thế; không tự nâng thành luật hiện hành. |
| `paper-tests/` | Mẫu hiển thị và kết quả thử. Phiên bản mới nhất có thể vẫn chứa nội dung fixture đã bị bác bỏ; dùng để đọc chứng cứ UI, không lấy làm roster/card list V0. |
| `prototype/` | Bản chạy thử tương tác qua năm Region; [cách chạy, phạm vi và fixture](prototype/README.md). Không là nơi chốt luật hoặc giá cuối. |
| `art/approved/` | Tham chiếu hình ảnh được duyệt ở mức ghi trong asset record. |
| `art/style-studies/` | Hồ sơ nghiên cứu và duyệt hình; chỉ asset ghi `runtime approved` mới được sao vào `prototype/assets/` để chơi thử. [Field art record](art/style-studies/field-v0-runtime-art-01/record.md) ghi lần dùng hiện tại. |
| `scripts/` | Công cụ kiểm tính toàn vẹn repository; không chứa gameplay. |

Khi hai nguồn mâu thuẫn, ưu tiên lời chốt mới nhất của chủ dự án rồi tra đúng nơi sở hữu trong [bản đồ nguồn luật](docs/current/README.md). Không sửa graph, gói Year 1 hoặc phép thử lịch sử chỉ để đồng bộ một thay đổi nhỏ. `tmp/` và `output/` là dữ liệu tạo tạm, không đưa vào Git.

Kiểm liên kết nội bộ sau khi đổi cấu trúc: `python3 scripts/check_markdown_links.py`.
