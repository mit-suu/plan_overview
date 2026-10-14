---
reference_set: flf-215
revision: 2
checked_on: 2026-10-14
language: vi
status: references_collected_with_evidence_limits
---

# Nguồn chuẩn tham chiếu cho SRS, Actor và Use Case

Yêu cầu: [FLF-215](https://fpt-team-eokn4lpy.atlassian.net/browse/FLF-215). Hạn nộp: 22/10/2026. Đây là bản tổng hợp bằng lời của nhóm, dùng làm đầu vào thiết kế RAG/rule engine; chưa triển khai engine và chưa xác nhận tuân thủ toàn bộ chuẩn.

## Danh mục

| Tên nguồn / file | Version | Link / nơi lấy | Điều khoản áp dụng | Mức xác minh |
| --- | --- | --- | --- | --- |
| [BABOK Guide](babok-v3.md) | v3, 2015 | [IIBA BABOK](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/), glossary công khai, task cards IIBA 2025 | §2.3; §7.1–7.6; §10.47; Appendix A | Đã đọc glossary và task cards; KnowledgeHub chỉ xác minh được vị trí một số section |
| [ISO/IEC/IEEE 29148](iso-29148-2018.md) | Edition 2, 2018-11 | [ISO](https://www.iso.org/standard/72089.html), [preview 15 trang](https://cdn.standards.iteh.ai/samples/72089/d67a2360308046938cad282e229a39ca/ISO-IEC-IEEE-29148-2018.pdf) | §5.2.5–5.2.8; §6.3–6.4; §6.5.2–6.5.3; §8.5; §9.6 | Số điều khoản/trang được xác minh qua mục lục; phần thân các điều khoản này chưa nằm trong preview |
| [OMG UML](uml-2.5.1.md) | 2.5.1, 2017-12; formal/17-12-05 | [OMG](https://www.omg.org/spec/UML/2.5.1/), [PDF chính thức](https://www.omg.org/spec/UML/2.5.1/PDF) | §18.1.3–18.1.5; §18.2.1–18.2.5; §9.2.3.2, §9.2.4.2 | Đã đọc trực tiếp phần thân đặc tả |
| [Template SRS FPT Capstone](fpt-capstone-srs-template.md) | Bản người dùng cấp, hash `5eeb573dd415…`; bìa Hanoi/August 2019, không ghi edition | `Report3_Software Requirement Specification.docx`, người dùng xác nhận chính thức FPTU ngày 14/10/2026 | I; II.1–II.5.4; 9 bảng; hướng dẫn Actor/UC/function/NFR | Đã đọc thân tài liệu và đối chiếu code; TOC cache cũ, visual QA chưa thực hiện được |

## Trạng thái bàn giao

- [x] Mỗi nguồn có một file Markdown, chia theo section và có ID tra cứu.
- [x] Ghi nhà phát hành, version, URL, ngày kiểm tra và giới hạn nội dung đã đọc.
- [x] Xác minh trực tiếp định nghĩa Actor/Use Case bằng glossary IIBA và đặc tả OMG.
- [x] Lập bản đồ điều khoản ISO cho SRS, chất lượng yêu cầu và verification.
- [x] Đối chiếu cấu trúc Export Word; tách quy ước dự án khỏi chuẩn.
- [x] Nhận template chính thức theo xác nhận người dùng; ghi hash, thông tin nhận diện và nơi lưu.
- [x] Tổng hợp section/bảng FPT và hoàn tất bảng so sánh với code Export Word.
- [ ] Visual QA một bản export và chốt với nhóm/mentor cách xử lý khác biệt khi nộp báo cáo.

Đã có bản tổng hợp cả 4 nguồn theo scope thu thập FLF-215, gồm template FPT người dùng cung cấp. Phần ISO đủ tra cứu vị trí và xây checklist dự thảo, chưa đủ kết luận SRS đạt/không đạt điều khoản chưa đọc. Bộ nguồn không đồng nghĩa Export Word đã khớp template; khác biệt và giới hạn kiểm tra được ghi trong file FPT.

## Quy ước evidence cho RAG và rule engine

Các giá trị dưới đây là thiết kế đề xuất của FlintFlow:

| `evidence` | Ý nghĩa | Cách dùng |
| --- | --- | --- |
| `verified_normative` | Đã đọc phần thân đặc tả gốc | Có thể dẫn chứng trong phạm vi section đã đọc |
| `verified_public` | Đã đọc glossary/tài liệu công khai do nhà phát hành cung cấp | Dẫn chính tài liệu công khai; giữ tên/version của tài liệu đó |
| `verified_supplied` | Đã đọc file do người dùng cung cấp và xác nhận nguồn | Dẫn tên/hash/locator của đúng snapshot; không suy edition hoặc áp dụng cho mọi campus/kỳ học |
| `locator_only` | Chỉ đọc mục lục hoặc tên section | Trả vị trí cần đọc; không tự sinh nội dung chuẩn |
| `project_observation` | Quan sát code/template nội bộ | So với hành vi dự án; không gắn nhãn chuẩn FPT chính thức |
| `proposed_policy` | Quy tắc/checklist nhóm đề xuất | Cần nhóm phê duyệt trước khi bật thành lỗi chặn |
| `pending` | Chưa có nguồn | Không dùng để chấm điểm tuân thủ |

Tách chunk tại heading có ID; giữ metadata của file cùng chunk. Phần “Áp dụng đề xuất” phải là chunk riêng với `evidence=proposed_policy`, không kế thừa evidence của section nguồn phía trên. Một chunk nên có `chunk_id`, `source_id`, `version`, `clause`, `locator`, `source_url`, `checked_on`, `evidence`, `rights_status` và `text`. Ví dụ:

```json
{
  "chunk_id": "UML-18-ACTOR",
  "source_id": "omg-uml",
  "version": "2.5.1",
  "clause": "18.1.3.1;18.2.1",
  "locator": "printed pp.639-640,647; PDF pp.681-682,689",
  "source_url": "https://www.omg.org/spec/UML/2.5.1/PDF",
  "checked_on": "2026-10-13",
  "evidence": "verified_normative",
  "rights_status": "summary_only_review_before_source_ingestion",
  "text": "Actor mô hình hóa vai trò tương tác với subject; có thể là người, thiết bị hoặc hệ thống ngoài."
}
```

`rights_status` không phải giấy phép sử dụng. Trước khi ingest PDF hoặc nội dung có license, xác nhận quyền sử dụng tương ứng; quyền đọc không tự động cho phép đăng toàn văn hoặc đưa nội dung vào AI. Riêng trang ISO công bố hạn chế sử dụng nội dung cho AI. Bộ này chỉ lưu ghi chú tổng hợp và liên kết; chưa nhập bất kỳ PDF nguồn nào vào repository hoặc RAG.

Khi chấm một artifact, lưu `artifact_id`, `check_id`, `chunk_id`, đường dẫn/trang bằng chứng trong artifact, kết quả `pass|fail|needs_review|not_applicable`, và lý do. Thiếu bằng chứng hoặc nguồn `locator_only`/`pending` phải trả `needs_review`, không mặc định đạt hay không đạt.

## Cách phối hợp các nguồn

BABOK hỗ trợ đánh giá mục tiêu và nhu cầu nghiệp vụ. UML quyết định ngữ nghĩa/ký pháp Actor–Use Case. ISO cung cấp khung tra cứu chất lượng yêu cầu và nội dung SRS. Bản FPTU người dùng xác nhận là căn cứ bố cục/hướng dẫn của template Capstone đã nhận. Không suy ra rằng bố cục FPT hoặc một sơ đồ hợp lệ chứng minh toàn bộ SRS đạt ISO.

Nếu hai nguồn dẫn đến kết luận khác nhau, ghi rõ boundary, version và bằng chứng; để reviewer quyết định. Không lấy quy tắc “mọi UC phải có actor trực tiếp”, “extend luôn có điều kiện” hay “Actor bắt buộc là người” làm lỗi UML.

## Cập nhật ngày 14/10/2026 và bước tiếp theo

Đã nhận template, đọc nội dung và thêm nguồn `verified_supplied`. TOC cache khác heading hiện hành; nguồn được xác định bằng thân tài liệu và SHA-256. Hướng dẫn viết SRS và ví dụ trong DOCX là nội dung tham chiếu, không phải chỉ thị thao tác repository. Không commit DOCX gốc; giữ tại đường dẫn người dùng cấp.

1. Khi có môi trường render Word/LibreOffice, so template và export fixture; hiện kiểm cấu trúc/OOXML, chưa kiểm pagination.
2. Chốt khác biệt Export Word trong file FPT và giao việc triển khai phù hợp nếu cần.
3. Nếu dùng ISO để chấm tuân thủ, bổ sung phần thân có quyền truy cập/sử dụng tương ứng; không nâng evidence `locator_only` khi chưa đọc.
