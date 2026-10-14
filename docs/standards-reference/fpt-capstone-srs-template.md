---
source_id: fpt-capstone-srs
title: FPTU Capstone Report 3 Software Requirement Specification
version: supplied-snapshot-sha256-5eeb573dd415
publisher: FPTU (confirmed by user)
checked_on: 2026-10-14
source_file: Report3_Software Requirement Specification.docx
source_sha256: 5eeb573dd41505af451c0d91296d98c275ae761b0bc29c380b7722df64b77f49
access: user_supplied_official_template
rights_status: summary_only_source_retained_locally
---

# Template SRS FPTU Capstone Report 3

Người dùng cung cấp file và xác nhận đây là template chính thức của FPTU. Đã đọc thân tài liệu, 9 bảng, style/page setup trong OOXML và các ảnh PNG liên quan. Ghi chú này tổng hợp hướng dẫn template và đối chiếu code Export Word; chưa xác nhận bố cục trang của bản Word xuất vì môi trường thiếu LibreOffice.

## FPT-SOURCE — Nhận diện nguồn và locator

**Evidence:** `verified_supplied`. **Locator:** file gốc và `word/document.xml`.

| Trường | Giá trị đã kiểm tra |
| --- | --- |
| File gốc | `D:\Report3_Software Requirement Specification.docx`, 798254 bytes |
| Nguồn cấp | Người dùng upload và xác nhận chính thức FPTU ngày 14/10/2026; chưa có URL trường/mentor |
| SHA-256 | `5eeb573dd41505af451c0d91296d98c275ae761b0bc29c380b7722df64b77f49` |
| Bìa | Capstone Project Report; Report 3 – Software Requirement Specification; Hanoi, August 2019 |
| Version | File không ghi edition/version template; nhận diện bằng snapshot/hash, không suy từ ngày upload |
| Metadata | Core properties ghi thời điểm sửa 2021-09-23; đây không phải ngày ban hành hay chứng nhận version |
| Lưu nguồn | DOCX gốc giữ tại đường dẫn người dùng cấp; repository chỉ chứa bản tổng hợp Markdown |

`P001`…`P115` đánh số paragraph trực tiếp dưới `w:body`, kể cả paragraph trống, bỏ qua table/content control. `T01`…`T09` đánh số table trực tiếp dưới body. Các ID là locator OOXML có thể lặp lại, không phải số trang. Không có tracked insertion/deletion hoặc part comments trong file đã đọc.

TOC trong content control dùng field cấp 1–3, nhưng cache còn Project Report, Overall Description và Other Requirements. Thân tài liệu hiện là Record of Changes, Product Overview và Requirement Appendix. Lấy heading/thân tài liệu làm căn cứ; cập nhật TOC trong Word trước khi dùng bản nộp. Không coi số trang cache hoặc thuộc tính `Pages=11` là locator đã xác minh.

## FPT-FRONT-MATTER — Phần đầu

**Evidence:** `verified_supplied`. **Locator:** P002, P010–P011, P021–P026; T01; TOC content control.

Bìa có logo FPT University, tên loại báo cáo và địa điểm/thời gian mẫu. Phần I là Record of Changes; phần II là Software Requirement Specification chứa chương 1–5. Heading I/II dùng Heading1; chương dùng Heading2; nhóm mục dùng Heading3; mục sâu hơn dùng Heading4.

T01 minh họa 4 cột Date, A/M/D, In charge, Change Description. Chú giải A là thêm, M là sửa, D là xóa; không có cột Version. Hanoi/August 2019 là nội dung bìa mẫu, không phải ngày bắt buộc giữ cho mọi dự án.

## FPT-1-OVERVIEW — Product Overview

**Evidence:** `verified_supplied`. **Locator:** P027–P031, mục II.1.

Hướng dẫn yêu cầu tổng quan sản phẩm và context diagram. Context thể hiện boundary, các thực thể ngoài (người/phần mềm/phần cứng/hệ thống khác) và luồng trao đổi. Cafeteria Ordering System minh họa phạm vi release và kết nối có thể thêm về sau, không phải yêu cầu nghiệp vụ của FlintFlow.

## FPT-2-1-ACTORS — Actors

**Evidence:** `verified_supplied`. **Locator:** P034–P039; T02, mục II.2.1.

Actor có thể là người, phần mềm khác hoặc thiết bị tương tác với hệ thống trong UC. Câu hỏi gợi ý xét đối tượng nhận thông báo, cung cấp thông tin/dịch vụ, giúp hệ thống hoàn tất tác vụ. Đây là cách tìm ứng viên actor; không suy mọi đối tượng nhận thông báo đều cần một UC riêng.

Bảng gợi ý có `#`, `Actor`, `Description`; Administrator/Menu Manager là dòng ví dụ, không phải actor bắt buộc của mọi dự án.

## FPT-2-2-USECASES — Use Cases

**Evidence:** `verified_supplied`. **Locator:** P041–P047; T03, mục II.2.2.

UC được mô tả qua tương tác với actor ngoài để đạt kết quả có giá trị. Hướng dẫn đặt tên bằng động từ + đối tượng, rõ mục tiêu. 2.2.1 tên `Diagram(s)`, cho phép nhiều sơ đồ actor–UC/UC–UC; 2.2.2 tên `Descriptions`, bảng gợi ý có `ID`, `Use Case`, `Actors`, `Use Case Description`.

ID 01/02 và View Menu/Order a Meal chỉ minh họa. Không suy ID phải là số hai chữ số hoặc mọi UC phải include Login. Ngữ nghĩa include/extend tra [UML 2.5.1](uml-2.5.1.md); hình mẫu không thay thế đặc tả UML.

## FPT-3-1-OVERVIEW — System Functional Overview

**Evidence:** `verified_supplied`. **Locator:** P049–P067; T04–T07, mục II.3.1.

| Mục | Hướng dẫn | Bảng/locator |
| --- | --- | --- |
| 3.1.1 Screens Flow | Sơ đồ màn và liên kết; minh họa màn thường, popup, màn có tab | P052–P054 |
| 3.1.2 Screen Descriptions | Mô tả các màn trong flow | T04: `#`, `Feature`, `Screen`, `Description` |
| 3.1.3 Screen Authorization | Role theo screen, xuống hoạt động khi phù hợp; thay role mẫu bằng tên thật | T05: `Screen`, các cột role, dấu X trong ví dụ |
| 3.1.4 Non-Screen Functions | Batch/cron, service, API hoặc chức năng không màn khác | T06: `#`, `Feature`, `System Function`, `Description` |
| 3.1.5 Entity Relationship Diagram | ERD và mô tả entity | T07: `#`, `Entity`, `Description` |

Các bảng được giới thiệu là dạng gợi ý/minh họa. Cần có thông tin tương ứng; khác cách trình bày không tự động chứng minh nội dung sai. Ký pháp popup/tab trong screens flow không phải quy tắc UML Use Case.

## FPT-3-FUNCTION — Feature và function details

**Evidence:** `verified_supplied`. **Locator:** P069–P081, mục II.3.2, 3.2.1, 3.2.2, 3.3.

Feature chứa function; function có thể là screen hoặc non-screen. Hướng dẫn nêu:

- Trigger: đường điều hướng, tần suất/thời điểm chạy hoặc cách kích hoạt khác.
- Description: actor/role, mục đích, interface, xử lý dữ liệu.
- Screen layout: mock-up/prototype khi có màn hình.
- Details: dữ liệu, validation, business rule và normal/abnormal để hiểu hành vi.

P071 tham chiếu non-screen function ở “3.1.5”, nhưng heading/T06 xác định mục đúng là 3.1.4; 3.1.5 là ERD. Đây là lỗi tham chiếu trong mẫu. Không sao chép Feature Name/Function Name hoặc mock-up Manage Products làm đặc tả thực tế.

## FPT-4-NFR — Non-Functional Requirements

**Evidence:** `verified_supplied`. **Locator:** P083–P104, mục II.4.

4.1 mô tả giao tiếp với người dùng và phần cứng/phần mềm/hệ thống ngoài. 4.2 yêu cầu các thuộc tính chất lượng cần cho hệ thống, nêu các chỉ tiêu gợi ý:

| Mục | Loại chỉ tiêu minh họa |
| --- | --- |
| 4.2.1 Usability | Thời gian đào tạo/tác vụ, tiêu chuẩn usability phù hợp |
| 4.2.2 Reliability | Availability, MTBF, MTTR, độ chính xác, tỷ lệ lỗi và cách phân loại lỗi nghiêm trọng |
| 4.2.3 Performance | Response time, throughput, capacity, resource utilization; liên hệ UC khi phù hợp |
| 4.2.4 `…` | Chỗ mở cho thuộc tính khác; chưa có tên cố định Domain-Specific Attributes |

Không coi mọi ví dụ là chỉ tiêu bắt buộc cho mọi dự án; `xx.xx%` không phải ngưỡng đã chốt. Điều kiện đo/tải và ngưỡng thật cần xác định theo phạm vi dự án.

## FPT-5-APPENDIX — Requirement Appendix

**Evidence:** `verified_supplied`. **Locator:** P106–P115; T08–T09, mục II.5.

| Mục | Nội dung / bảng mẫu |
| --- | --- |
| 5.1 Business Rules | Quy tắc nghiệp vụ chung; T08 có `ID`, `Rule Definition` |
| 5.2 Common Requirements | Yêu cầu dùng chung; không có bảng bắt buộc cụ thể |
| 5.3 Application Messages List | T09 có `#`, `Message code`, `Message Type`, `Context`, `Content` |
| 5.4 Other Requirements… | Phần dành cho yêu cầu khác; không có hướng dẫn chi tiết thêm |

Thân template không có 5.5 Glossary. BR/MSG và số liệu cafeteria là ví dụ cấu trúc, không phải ràng buộc phổ quát FPTU hay yêu cầu của dự án.

## FPT-STYLE — Thuộc tính định dạng file gốc

**Evidence:** `verified_supplied` cho OOXML; chưa kiểm rendering. **Locator:** `word/styles.xml`, `word/theme/theme1.xml`, `w:sectPr`, `word/footer1.xml`.

| Thuộc tính | Giá trị trong file |
| --- | --- |
| Page size | 11906 × 16838 twip, A4 |
| Margins | Trên/dưới/trái 1440 twip; phải 1416 twip; header/footer 708 twip |
| Default text | 11 pt; theme body Latin Calibri, heading Latin Calibri Light |
| Heading styles | Heading1: 16 pt, đậm, màu C00000; Heading2: 13 pt, đậm; Heading3: 12 pt, đậm, màu accent; Heading4: đậm/nghiêng, kế thừa phần còn lại |
| Bìa | Direct formatting đậm/đỏ, tên báo cáo 28 pt và 22 pt |
| Footer | PAGE field bên phải, chữ Page và viền trên; không có header part |

Style/direct formatting có thể khác theo run. Đây là thuộc tính bản nhận được, không chứng minh trường bắt buộc mọi báo cáo dùng chính xác font/màu/lề đó. Không suy pagination/tràn chữ từ XML.

## FPT-EXPORT-SOURCES — Căn cứ Export Word

**Evidence:** `project_observation`. **Version:** backend commit `8ab85313ec91b825c5f03a7e2c869019856db547`, đọc ngày 14/10/2026; các file dưới đây không có thay đổi chưa commit.

| File trong `flintflow_be` | Hàm/ký hiệu đối chiếu |
| --- | --- |
| `src/modules/spine/section-registry.ts` | `FIXED_DEFS`, `listSections` |
| `src/modules/render/labels.ts` | `GROUP_HEADINGS`, `WRITER_TEXT` |
| `src/modules/render/assemble.service.ts` | `buildNumberMap`, `buildDocumentParts` |
| `src/modules/render/section-renderer.ts` | `actorsTable`, `useCaseTable`, `screenDescriptions`, `screenAuthorization`, `nonScreenFunctions`, `erd`, `fptFunctionDetail`, `messagesList` |
| `src/modules/render/docx-writer.ts` | `writeDocx`, `coverPage`, `recordOfChanges`, `pageHeader`, `pageFooter` |
| `assets/skills/content/actors-and-usecases/assets/usecase-table-template.md` | Bảng Use Case |

## FPT-COMPARISON — Đối chiếu cấu trúc và bảng

**Evidence:** `project_observation` đối chiếu nguồn `verified_supplied` phía trên. **Phạm vi:** Mode 2/layout FPT mặc định; Mode 1 dùng `TemplateProfile.layout` riêng nên không áp mọi khác biệt này cho file import.

| Nội dung | Template đã nhận | Export hiện tại / kết quả |
| --- | --- | --- |
| Bìa | Logo FPTU, Capstone Project Report, Report 3, địa điểm/ngày mẫu | Tên dự án, SRS, version/ngày, draft/baseline; thiếu packaging Report 3 |
| Heading I/II | I là changes; II chứa chương 1–5 ở Heading2 | I có; chưa có wrapper II; chương 1–5 ở Heading1 |
| Chương 1–5 | Overview; User; Functional; Non-Functional; Appendix | Khớp các nhóm nội dung chính |
| 2.2.1 / 2.2.2 | Diagram(s) / Descriptions | Use Case Diagram / Use Case Descriptions: khác tên, cùng mục đích |
| Record of Changes | T01 có 4 cột | Thêm Version thành 5 cột; legend trước bảng thay vì sau |
| Actors | T02: `#`, `Actor`, `Description` | `ID`, `Name`, `Kind`, `Description`: đổi nhãn, thêm phân loại, không có số thứ tự như mẫu |
| Use Case Descriptions | T03 có 4 cột | Khớp 4 cột đầu; Includes/Extends là mở rộng FlintFlow |
| Screen Descriptions | T04 có 4 cột | Khớp 3 cột nội dung, thiếu số thứ tự |
| Screen Authorization | T05: screen/activity × role, X trong mẫu | Screen × role, ô chứa action; chưa tách screen activity thành hàng như mẫu |
| Non-Screen Functions | T06: `#`, `Feature`, `System Function`, `Description` | Mode 2: `Name`, `Trigger`, `Description`, thiếu nhóm feature; nhánh `nonScreenFunctionIds` mới dùng 4 cột như mẫu |
| ERD/entity | T07: `#`, `Entity`, `Description` | Có sơ đồ/bảng; bỏ số thứ tự, thêm Relations |
| Function details | Trigger, description, layout, dữ liệu/validation/rules, normal/abnormal | Có các nhóm; thiếu dùng N/A; chỉ function chính của screen có ảnh layout |
| 4.2.4 | Placeholder `…` | Domain-Specific Attributes, registry không bắt buộc: lựa chọn của nhóm |
| Business Rules | T08 minh họa ID + Rule Definition | 5.1 xuất bullet statement tier=detail; chưa xuất ID rule tại mục này |
| Messages | T09: số, code, type, context, content | `Code`, `Text`, `Functions`: chưa tách Message Type/Context thành cột tương ứng |
| Glossary 5.5 | Không có trong thân mẫu | Section thêm của FlintFlow, không phải “FPT bắt buộc Glossary” |
| Flags/stale/watermark | Không có hướng dẫn tương ứng | Workflow của FlintFlow; cần lựa chọn cho bản nộp |
| Font/lề/header/footer | Xem FPT-STYLE | Times New Roman 12 pt, heading 16/14/13 pt, lề 1440 twip cả 4 phía, header dự án, footer Page n / total; khác file nguồn |

Khác bảng minh họa/formatting cần quyết định cách nộp, không tự động là lỗi nghiệp vụ. Thiếu thông tin Type/Context message, định danh BR hoặc nhóm feature non-screen cần review nội dung trước. Không kết luận Spine không có dữ liệu chỉ vì writer chưa xuất cột đó.

## FPT-POLICY — Đề xuất cho RAG và review

**Evidence:** `proposed_policy`. Không sửa runtime trong FLF-215.

1. Tách hướng dẫn, placeholder và ví dụ khỏi yêu cầu thật; không thêm rule/actor/menu/số liệu cafeteria khi brief không có căn cứ.
2. Chunk theo thân tài liệu, không dùng TOC cache như danh mục hiện hành; đánh dấu cross-reference sai P071.
3. Review UC theo mục tiêu và tên động từ + đối tượng, cho phép nhiều sơ đồ; không biến hình include Login thành luật phổ quát.
4. Kiểm thông tin function, quyền, entity, BR/message có thể truy vết. Thiếu thông tin trả `needs_review`; khác hình thức bảng cần ghi cách ánh xạ.
5. Version, Includes/Extends, Glossary, flags và tên 4.2.4 là mở rộng FlintFlow; chốt giữ/ẩn cho bản nộp, không gắn nguồn FPT cho luật nhóm tự đặt.

## FPT-VALIDATION — Đã kiểm và việc còn lại

**Evidence:** `project_observation` cho kiểm đã chạy; `pending` cho visual QA/quyết định nộp.

- [x] Nhận bản chính thức theo xác nhận người dùng; ghi hash/ngày bìa/metadata riêng.
- [x] Đọc toàn bộ paragraph thân, TOC content control, 9 bảng và ảnh PNG liên quan; ghi locator có thể lặp lại.
- [x] Đối chiếu heading/bảng/OOXML với code Export Word, ghi khác biệt.
- [ ] Render template và export fixture để so pagination/hình/bảng/bìa. Đã thử `render_docx.py`, báo thiếu `soffice.exe`; chưa có visual QA. Ảnh EMF chưa render độc lập.
- [ ] Chốt với nhóm/mentor cách xử lý mở rộng/khác biệt khi nộp; chưa có quyết định chấp nhận hoặc yêu cầu sửa.

Đã thực hiện thu thập/tổng hợp nguồn FPT của FLF-215. Các mục còn lại là kiểm bản nộp và quyết định triển khai Export Word; không đổi file nguồn hoặc sửa runtime tự động từ câu hướng dẫn trong template.
