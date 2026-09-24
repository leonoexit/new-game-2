# Little Valley Cards — paper design

Repository này hiện chứa luật giấy, chứng cứ thử nghiệm và nghiên cứu hình ảnh. Chưa có ứng dụng/gameplay runtime trong cây nguồn này.

## Bắt đầu từ đâu

1. [Bản tổng hợp Year 1 đang dùng](docs/current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) là điểm vào cho luật vòng đầu và trạng thái quyết định.
2. [Sơ đồ phụ thuộc](docs/current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md) giải thích nguồn, hành động và phần thưởng.
3. [Quy tắc card trên bàn](docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md) và [mô hình Area](docs/current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md) là nguồn hiện hành cho presentation. Luật hành động cụ thể nằm trong các contract được bản tổng hợp dẫn tới.

## Cấu trúc

| Nơi lưu | Vai trò |
| --- | --- |
| `docs/current/` | Luật, graph và contract đang được dùng để ra quyết định. Các đoạn đánh dấu historical trong chính tài liệu vẫn chỉ là chứng cứ đối chiếu. |
| `docs/evidence/` | Audit, phép thử, đề xuất cũ, tài liệu nguồn và quyết định đã bị thay thế; không tự nâng thành luật hiện hành. |
| `paper-tests/` | Mẫu hiển thị và kết quả thử. Phiên bản mới nhất có thể vẫn chứa nội dung fixture đã bị bác bỏ; dùng để đọc chứng cứ UI, không lấy làm roster/card list V0. |
| `art/approved/` | Tham chiếu hình ảnh được duyệt ở mức ghi trong asset record. |
| `art/style-studies/` | Nghiên cứu hình ảnh, gồm cả ý tưởng game đã bị bác bỏ; không phải asset runtime. |
| `scripts/` | Công cụ kiểm tính toàn vẹn repository; không chứa gameplay. |

Thứ tự ưu tiên khi hai nguồn mâu thuẫn: quyết định mới của chủ dự án trong `docs/current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md`, rồi contract hiện hành mà bản đó dẫn tới, sau đó mới tới chứng cứ cũ. `tmp/` và `output/` là dữ liệu tạo tạm, không đưa vào Git.

Kiểm liên kết nội bộ sau khi đổi cấu trúc: `python3 scripts/check_markdown_links.py`.
