# Little Valley Cards — hướng dẫn làm việc trong repo

Repo này hiện là dự án **thiết kế luật giấy, thử nghiệm và nghiên cứu art**; chưa có gameplay runtime. Tra [README](README.md) để biết cấu trúc thư mục.

## Nguồn quyết định

- Ưu tiên quyết định mới nhất được chủ dự án nói rõ trong hội thoại. Ghi quyết định đã chốt vào [decision log/card grammar](docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md), rồi đồng bộ contract và danh mục lá liên quan.
- Dùng [World nested-card architecture](docs/current/WORLD-NESTED-CARD-ARCHITECTURE-01.md) cho hierarchy hiện hành; [Mine contract](docs/current/MINE-CURRENT-CONTRACT-01.md), [Fishing contract](docs/current/FISHING-CURRENT-CONTRACT-01.md), [Farm land contract](docs/current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md), [Farm action grammar](docs/current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) và [Field presentation contract](docs/current/WORLD-GROUP-PRESENTATION-CONTRACT-01.md) cho luật từng cơ chế và cách trình bày. [Danh mục lá V0](docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) ghi card identity và vai trò.
- `docs/evidence/`, `paper-tests/` và những đoạn ghi lịch sử trong `docs/current/` là chứng cứ hoặc phép thử. Luôn phân biệt **đã chốt**, **đề xuất**, **giả định phép thử** và **đã triển khai**; không tự nâng một con số trong phép thử thành luật.

## Xử lý nhanh các bước thiết kế nhỏ

- Thứ tự ưu tiên: **điều chủ dự án nói rõ → contract/decision mới nhất của Little Valley Cards → nguồn game gốc/board game → lựa chọn chuyển thể có ghi lý do**. Nguồn tham chiếu không được ghi đè luật đã chốt; ví dụ Hoe Clear đá Field vẫn giữ dù nguồn khác dùng Tool khác.
- Khi thêm item, Tool, nguồn hoặc action nhỏ đã có tương đương rõ trong Stardew Valley, tự tra nguồn phù hợp rồi xử lý **theo một lô của cơ chế**, không tách mỗi item thành một câu hỏi. Ưu tiên tài liệu gốc/chính thức và [rulebook board game có trong repo](<stardew rules.pdf>). Video game giúp xác định tên, Tool, vật phẩm, kết quả và vai trò nội dung; board game giúp xem cách nén thành lượt và tài nguyên. Chuyển thể thành card/state/AP của Little Valley Cards phải theo các contract hiện hành, không sao chép máy móc số hit, giây hoặc ô bản đồ.
- Mỗi lô ghi ngắn gọn trong contract/danh mục: **lấy từ nguồn nào**, **phần nào là lựa chọn chuyển thể**, **phần nào đã được chủ dự án sửa/chốt**, và **phần nội dung để sau**. Không tự gọi một chi tiết từ nguồn là quyết định của chủ dự án. Nếu nguồn khác nhau, chọn phương án hợp loop hiện hành và nêu khác biệt trong bản tổng kết.
- Không bắt một Item mới phải có ngay recipe, nơi bán hoặc sink để được nhận trong gameplay. Ghi output đã có; gom công dụng/giá/nguồn bổ sung vào giai đoạn đổ nội dung nếu chúng chưa chặn action loop. `Stone` từ Clear đá là trường hợp hiện hành.
- Chỉ đưa chủ dự án duyệt khi nguồn và contract không giải được một **ngã rẽ có ảnh hưởng đáng kể**: identity so với state, quan hệ chứa/thay lá, cấu trúc action/AP, tiến trình hoặc kinh tế chính. Khi cần hỏi, gom những lựa chọn liên quan thành một quyết định rõ ràng; không hỏi lại Tool/output thường tình hay thông số nguồn đã kiểm được. Nếu một giả định nhỏ có thể đảo ngược, tự chọn, ghi nhãn và tiếp tục.

## Khi xử lý một yêu cầu

1. Xem `git status` và tài liệu liên quan trước khi sửa; giữ nguyên những thay đổi đang có của người khác.
2. Khi chủ dự án chốt một luật, ghi phạm vi và ranh giới còn mở. Cập nhật những tài liệu hiện hành bị ảnh hưởng để không còn hai cách hiểu về cùng một cơ chế.
3. Giữ thuật ngữ lá/action đã dùng trong dự án, ví dụ state `Tilled Soil`, `Water`, `Sleep`, `Fishing Spot`. Chỉ thêm identity hoặc thông số khi chủ dự án đã chốt, hoặc khi nguồn tham chiếu rõ và lựa chọn chuyển thể không xung đột; trường hợp sau phải ghi nhãn nguồn/giả định thay vì trình bày như luật chủ dự án đã duyệt.
4. Với thay đổi Markdown, chạy `git diff --check`; nếu thêm/sửa liên kết nội bộ, chạy `python3 scripts/check_markdown_links.py`. Với workbook hoặc art, theo quy trình phù hợp của loại tài sản đó.
5. Sau khi hoàn tất **mỗi action**, báo ngắn gọn việc đã làm, trạng thái còn mở và **đề xuất một action tiếp theo cụ thể**. Đề xuất tiếp theo không được trình bày như luật đã chốt.
