# Little Valley Cards — hướng dẫn làm việc trong repo

Repo này có **luật giấy, thử nghiệm, nghiên cứu art và bản chơi thử gameplay V0** trong [`prototype/`](prototype/README.md). Prototype triển khai các contract để kiểm luồng; không tự sở hữu luật hoặc biến giá fixture thành thông số đã chốt. Tra [README](README.md) để biết cấu trúc thư mục và [bản đồ nguồn luật](docs/current/README.md) để biết tài liệu nào sở hữu từng cơ chế.

## Nguồn quyết định

- Ưu tiên quyết định mới nhất được chủ dự án nói rõ trong hội thoại. Ghi quyết định đã chốt vào [decision log/card grammar](docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md); chỉ sửa contract sở hữu **khi hành vi đổi** và danh mục lá **khi thông tin của lá đổi**. Không đồng bộ các snapshot lịch sử.
- Dùng [bản đồ nguồn luật](docs/current/README.md) để tìm contract sở hữu từng cơ chế và [danh mục lá V0 JSON](docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.json) cho identity, loại, nơi và vai trò; sửa qua Card Register devtool hoặc sửa JSON rồi chạy `python3 scripts/run_prototype.py --check`. Giá trị `Type` phải thuộc mảng `types` của danh mục; ghi chú taxonomy hoặc nhãn làm việc nằm ở trường phát triển, không gắn vào `Type`. Không tự suy nguồn chuẩn từ tên thư mục hay tên file.
- `docs/evidence/`, `paper-tests/` và các hồ sơ không sở hữu luật được chỉ rõ trong [bản đồ nguồn](docs/current/README.md) là chứng cứ hoặc snapshot, dù nằm ở `docs/current/`. Luôn phân biệt **đã chốt**, **đề xuất**, **giả định phép thử** và **đã triển khai**; không tự nâng một con số trong phép thử thành luật.

## Xử lý nhanh các bước thiết kế nhỏ

- Thứ tự ưu tiên: **điều chủ dự án nói rõ → contract/decision mới nhất của Little Valley Cards → nguồn game gốc/board game → lựa chọn chuyển thể có ghi lý do**. Nguồn tham chiếu không được ghi đè luật đã chốt; ví dụ Hoe Clear đá Field vẫn giữ dù nguồn khác dùng Tool khác.
- Khi thêm item, Tool, nguồn hoặc action nhỏ đã có tương đương rõ trong Stardew Valley, tự tra nguồn phù hợp rồi xử lý **theo một lô của cơ chế** bằng [quy trình batch](docs/current/CONTENT-BATCH-WORKFLOW-01.md), không tách mỗi item thành một câu hỏi. Ưu tiên tài liệu gốc/chính thức và [rulebook board game có trong repo](<stardew rules.pdf>). Video game giúp xác định tên, Tool, vật phẩm, kết quả và vai trò nội dung; board game giúp xem cách nén thành lượt và tài nguyên. Chuyển thể thành card/state/AP của Little Valley Cards phải theo các contract hiện hành, không sao chép máy móc số hit, giây hoặc ô bản đồ.
- Mỗi lô ghi ngắn gọn trong contract/danh mục: **lấy từ nguồn nào**, **phần nào là lựa chọn chuyển thể**, **phần nào đã được chủ dự án sửa/chốt**, và **phần nội dung để sau**. Không tự gọi một chi tiết từ nguồn là quyết định của chủ dự án. Nếu nguồn khác nhau, chọn phương án hợp loop hiện hành và nêu khác biệt trong bản tổng kết.
- Không bắt một Item mới phải có ngay recipe, nơi bán hoặc sink để được nhận trong gameplay. Ghi output đã có; gom công dụng/giá/nguồn bổ sung vào giai đoạn đổ nội dung nếu chúng chưa chặn action loop. `Stone` từ Clear đá là trường hợp hiện hành.
- Chỉ đưa chủ dự án duyệt khi nguồn và contract không giải được một **ngã rẽ có ảnh hưởng đáng kể**: identity so với state, quan hệ chứa/thay lá, cấu trúc action/AP, tiến trình hoặc kinh tế chính. Khi cần hỏi, gom những lựa chọn liên quan thành một quyết định rõ ràng; không hỏi lại Tool/output thường tình hay thông số nguồn đã kiểm được. Nếu một giả định nhỏ có thể đảo ngược, tự chọn, ghi nhãn và tiếp tục.

## Khi xử lý một yêu cầu

1. Xem `git status` và tài liệu liên quan trước khi sửa; giữ nguyên những thay đổi đang có của người khác.
2. Khi chủ dự án chốt một luật, ghi phạm vi và ranh giới còn mở. Cập nhật đúng tài liệu sở hữu theo [bản đồ nguồn](docs/current/README.md): nhật ký quyết định, contract của cơ chế nếu action đổi, danh mục nếu thông tin lá đổi. Tài liệu tổng quan và phép thử cũ chỉ dẫn liên kết, không chép lại luật hay buộc đồng bộ sau mỗi thay đổi. Nếu gặp câu cũ dễ hiểu nhầm, đặt cảnh báo ngắn trỏ tới nguồn hiện hành.
3. Giữ thuật ngữ lá/action đã dùng trong dự án, ví dụ state `Tilled Soil`, `Water`, `Sleep`, `Fishing Spot`. Chỉ thêm identity hoặc thông số khi chủ dự án đã chốt, hoặc khi nguồn tham chiếu rõ và lựa chọn chuyển thể không xung đột; trường hợp sau phải ghi nhãn nguồn/giả định thay vì trình bày như luật chủ dự án đã duyệt.
4. Với thay đổi Markdown, chạy `git diff --check`; nếu thêm/sửa liên kết nội bộ, chạy `python3 scripts/check_markdown_links.py`. Với workbook hoặc art, theo quy trình phù hợp của loại tài sản đó.
5. Sau khi hoàn tất **mỗi action**, báo ngắn gọn việc đã làm, trạng thái còn mở và **đề xuất một action tiếp theo cụ thể**. Đề xuất tiếp theo không được trình bày như luật đã chốt.
