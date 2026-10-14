---
source_id: fpt-capstone-srs
title: FPTU Capstone Project Report 3 – Software Requirement Specification (template)
version: supplied-snapshot-sha256-5eeb573dd415 (file không ghi edition; nhận diện bằng hash)
publisher: FPT University (người dùng xác nhận là template chính thức)
source_url: none — file người dùng cấp, giữ tại D:\Report3_Software Requirement Specification.docx; chưa có URL công khai của trường
source_file: Report3_Software Requirement Specification.docx
source_sha256: 5eeb573dd41505af451c0d91296d98c275ae761b0bc29c380b7722df64b77f49
checked_on: 2026-10-14
access: user_supplied_official_template
rights_status: summary_only_source_retained_locally
revision: 3
---

# Template SRS FPTU Capstone — Report 3

Nguồn chính: file DOCX người dùng cấp (798 254 byte, SHA-256 kiểm lại ngày 14/10/2026 khớp). Đã đọc toàn bộ OOXML: 115 paragraph trực tiếp dưới `w:body`, 1 content control mục lục, 9 bảng, `styles.xml`, `numbering.xml`, `footer1.xml`, `theme1.xml`, `docProps`, 5 ảnh PNG + 1 ảnh EMF (đã render ra PNG để xem) và file Visio nhúng. Nguồn gốc ví dụ được đối chiếu với nguồn thứ cấp trên web (chỉ đọc được một phần). Đối chiếu Export Word dựa trên backend `flintflow_be` commit `f50b125`. Giới hạn: chưa render được trang Word (thiếu LibreOffice), nên không có số trang đã xác minh; mọi locator là vị trí OOXML.

## Mục lục

- Nguồn và quy ước: `FPT-SOURCE`, `FPT-ORIGIN`, `FPT-CONVENTIONS`
- Phần đầu: `FPT-COVER-TOC`, `FPT-I-RECORD-OF-CHANGES`, `FPT-II-OUTLINE`
- Chương 1–2: `FPT-1-PRODUCT-OVERVIEW`, `FPT-2.1-ACTORS`, `FPT-2.2-USE-CASES`, `FPT-2.2.1-UC-DIAGRAM`, `FPT-2.2.2-UC-DESCRIPTIONS`
- Chương 3: `FPT-3.1-FUNCTIONAL-OVERVIEW`, `FPT-3.1.1-SCREENS-FLOW`, `FPT-3.1.2-SCREEN-DESCRIPTIONS`, `FPT-3.1.3-SCREEN-AUTHORIZATION`, `FPT-3.1.4-NON-SCREEN-FUNCTIONS`, `FPT-3.1.5-ERD`, `FPT-3.2-FEATURE-FUNCTION-DETAIL`
- Chương 4: `FPT-4.1-EXTERNAL-INTERFACES`, `FPT-4.2-QUALITY-ATTRIBUTES`, `FPT-4.2.1-USABILITY`, `FPT-4.2.2-RELIABILITY`, `FPT-4.2.3-PERFORMANCE`, `FPT-4.2.4-OPEN-ATTRIBUTE`
- Chương 5: `FPT-5-APPENDIX`, `FPT-5.1-BUSINESS-RULES`, `FPT-5.2-COMMON-REQUIREMENTS`, `FPT-5.3-MESSAGES`, `FPT-5.4-OTHER-REQUIREMENTS`
- Định dạng: `FPT-STYLE`, `FPT-NUMBERING`
- Export Word: `FPT-EXPORT-SOURCES`, `FPT-EXPORT-DELTA-REV2`, `FPT-COMPARISON`
- Tra cứu và rule: `FPT-GLOSSARY`, `FPT-POLICY`, `FPT-GAPS`

## FPT-SOURCE — Nhận diện nguồn và locator

**Clause:** toàn file · **Evidence:** `verified_supplied` · **Locator:** gói DOCX, `word/document.xml`, `docProps/core.xml`, `docProps/app.xml` · **Nguồn:** file DOCX người dùng cấp (đường dẫn ở frontmatter)

| Trường | Giá trị đã kiểm |
| --- | --- |
| File gốc | `D:\Report3_Software Requirement Specification.docx`, 798 254 byte; bản sao làm việc ngoài repo |
| SHA-256 | `5eeb573dd41505af451c0d91296d98c275ae761b0bc29c380b7722df64b77f49` (kiểm lại 14/10/2026, khớp rev 2) |
| Bìa | "Capstone Project Report" / "Report 3 – Software Requirement Specification" / "– Hanoi, August 2019 –" (P010, P011, P021) |
| Core properties | creator `Kien Nguyen`, lastModifiedBy `KienNT`, created 2020-01-14, modified 2021-09-23, revision 321 |
| App properties | Microsoft Office Word 16.0, `Pages=11`, `Words=1817`, template `Normal.dotm` |
| Thành phần gói | `document.xml`, `styles.xml`, `numbering.xml` (22 `w:num`), `footer1.xml` (không có header part), `footnotes/endnotes` rỗng, `theme1.xml`, 6 media, 1 file Visio nhúng (`Microsoft_Visio_Drawing1.vsdx`), `customXml` |
| Tracked changes / comments | Không có `w:ins`, `w:del`, không có part comments |

Các ngày trong metadata chỉ là dấu vết soạn file, không phải ngày ban hành. Năm 2019 trên bìa là nội dung mẫu. Không suy ra edition hay hiệu lực của template từ các ngày này.

**Quy ước locator** (giữ như rev 2, đã kiểm lại khớp):

- `P001`…`P115`: paragraph con trực tiếp của `w:body`, theo thứ tự, kể cả paragraph trống; bỏ qua bảng và content control (`w:sdt` mục lục nằm giữa P021 và P022).
- `T01`…`T09`: bảng con trực tiếp của `w:body`, theo thứ tự.
- `image1`…`image6`: tên file trong `word/media`. Không có caption trong file; tên do Word đặt.
- Không có số trang đã xác minh. `Pages=11` và số trang trong cache TOC không phải locator.

| Phạm vi | Paragraph | Bảng | Ảnh |
| --- | --- | --- | --- |
| Bìa | P001–P021 | — | image1 (P002) |
| Mục lục | content control giữa P021 và P022 | — | — |
| I. Record of Changes | P022–P025 | T01 | — |
| II, chương 1 | P026–P032 | — | image2 (P030) |
| Chương 2 | P033–P048 | T02, T03 | image3 (P045) |
| Chương 3 | P049–P082 | T04–T07 | image4 (P054), image5.emf + Visio (P066), image6 (P075) |
| Chương 4 | P083–P105 | — | — |
| Chương 5 | P106–P115 | T08, T09 | — |

**Đổi ID section so với rev 2** (để RAG cũ ánh xạ được): `FPT-FRONT-MATTER` → `FPT-COVER-TOC` + `FPT-I-RECORD-OF-CHANGES` + `FPT-II-OUTLINE`; `FPT-1-OVERVIEW` → `FPT-1-PRODUCT-OVERVIEW`; `FPT-2-1-ACTORS` → `FPT-2.1-ACTORS`; `FPT-2-2-USECASES` → `FPT-2.2-*`; `FPT-3-1-OVERVIEW` → `FPT-3.1-*`; `FPT-3-FUNCTION` → `FPT-3.2-FEATURE-FUNCTION-DETAIL`; `FPT-4-NFR` → `FPT-4.*`; `FPT-5-APPENDIX` → `FPT-5-APPENDIX` + `FPT-5.*`; `FPT-VALIDATION` → `FPT-GAPS`. Giữ nguyên: `FPT-SOURCE`, `FPT-STYLE`, `FPT-EXPORT-SOURCES`, `FPT-COMPARISON`, `FPT-POLICY`.

## FPT-ORIGIN — Nguồn gốc nội dung ví dụ và hướng dẫn

**Clause:** P028–P031, P035–P038, P042, P089–P103, T08 · **Evidence:** `verified_public` cho nguồn gốc COS (qua [wiegers-srs-template.md](wiegers-srs-template.md)); `secondary_source` cho phần RUP (kèm quan sát `verified_supplied` của chính file) · **Locator:** như Clause · **Nguồn:** [COS Vision and Scope, Karl Wiegers, Process Impact, 2002 (bản host tại uOttawa)](https://www.site.uottawa.ca/~bochmann/SEG3101/Notes/COS_vision_and_scope.doc); [Software Requirements 3rd ed., Appendix D (O'Reilly, mục lục)](https://www.safaribooksonline.com/library/view/software-requirements/9780735679658/apd.html); [RMUCv2000 Supplementary Specification Template (UHCL)](https://sceweb.sce.uhcl.edu/helm/READ_ReqEngSWEN5130/myfiles/ATM_Example/RMUCv2000_TP6%20Supplementary%20Specification%20Template.pdf); [RUP rup_sspec.dot (UFPE)](https://cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/templates/resources/rup_sspec.dot)

Template không ghi nguồn tham khảo nào. Các nhận xét dưới đây là bối cảnh, không phải nội dung của template.

| Phần của template | Nguồn có khả năng | Mức căn cứ |
| --- | --- | --- |
| Ví dụ "Cafeteria Ordering System" trong P029 ("Process Impact cafeteria", release 1.0, sau này nối dịch vụ đặt món của nhà hàng và xác thực thẻ) | Bộ tài liệu mẫu COS của Karl Wiegers, Process Impact. Vision and Scope, Use Cases, SRS đều ghi "Prepared by Karl Wiegers, Process Impact", 4/11/2002; metadata cả 4 file ghi Author: Karl Wiegers; trang goodies Process Impact 2005 gắn bộ mẫu với *Software Requirements* 2nd ed. Câu P029 gần như trùng COS SRS §2.1 Product Perspective (khác vài từ: "new software system", "meals"). | **Đã xác minh** (`verified_public`, xem [WGR-COS-PROVENANCE](wiegers-srs-template.md#wgr-cos-provenance--xác-minh-nguồn-gốc-ví-dụ-cafeteria-ordering-system)): tác giả, hệ ví dụ và câu P029. Hình image2 chưa so khớp hình gốc. |
| Actor/UC cafeteria (Patron, Menu Manager, Cafeteria Staff, Meal Deliverer, Payroll System, Cafeteria Inventory System; View Menu, Order a Meal…) | User classes của COS SRS 2002: Patron, Cafeteria Staff, Menu Manager, Meal Deliverer; danh sách UC COS có View Menu, Order Meal. | **Đã xác minh** hệ ví dụ (FPT viết "Order a Meal", bản 2002 viết "Order Meal"). |
| Bảng T08 BR-01…BR-04, BR-11, BR-12, BR-24, BR-33, BR-86, BR-88 | `COS_business_rules.doc` 2002 có các ID BR-1…4, 8, 11, 12, 24, 33, 35, 86, 88. FPT bỏ BR-8, BR-35, đổi ID sang 2 chữ số. Nội dung khác bản 2002: "inclusive" (BR-02), "256-bit" thay "128-bit" (BR-33), "regular" thay "permanent employees" (BR-86). | ID **đã đối chiếu** bản 2002. FPT lấy nguyên văn từ một bản COS mới hơn (có thể bản 3rd ed., 2013): `pending`. |
| Câu định nghĩa context diagram (P028), actor + 3 câu hỏi (P035–P038), UC + đặt tên verb + object (P042) | Phong cách và nội dung giống tài liệu của Wiegers. | **Chưa xác minh.** Không dùng làm căn cứ. |

Hệ quả cho RAG: ví dụ của template là bản rút gọn từ sách giáo khoa và template RUP, không phải yêu cầu riêng của FPTU. Khi cần ngữ nghĩa sâu hơn (business rule, use case), tra file chuẩn tương ứng trong bộ `standards-reference` (vd ghi chú Wiegers/BABOK/UML nếu có), không suy diễn từ vài dòng ví dụ.

## FPT-CONVENTIONS — Quy ước trình bày trong template

**Clause:** toàn thân tài liệu · **Evidence:** `verified_supplied` · **Locator:** run properties của P028, P035, P036, P092…; P029–P031; T02–T09 · **Nguồn:** file DOCX người dùng cấp

| Ký hiệu | Ý nghĩa trong template | Locator ví dụ | Cách xử lý khi sinh SRS |
| --- | --- | --- | --- |
| `[ … ]`, chữ nghiêng màu xanh `0000FF` | Hướng dẫn cho người viết. Một khối ngoặc vuông có thể kéo qua nhiều paragraph (P035 mở, P039 đóng; P071 mở, P077 đóng; P091 mở, P097 đóng; P099 mở, P103 đóng) | P028, P035–P039, P042, P044, P051, P053… | Xóa khỏi bản nộp; thay bằng nội dung thật |
| `<<Sample: … >>` | Đoạn ví dụ có thể thay | P029 mở, P031 đóng (bao cả image2) | Không giữ nội dung mẫu |
| `<<Feature Name 1>>`, `<<Function Name 1>>`, `<<Screen Name1>>`, `<<Screen Activity>>`, `<<Screen Brief description>>`, `<<Feature Name>>`, `<<Function Name1 Description>>` | Placeholder phải thay | P069, P070, T04, T05, T06 | Bản nộp không được còn `<<`/`>>` |
| `…` hoặc `..` trong tiêu đề/ô | Còn nữa / mục mở | P079, P081, P104 (`4.2.4 …`), P115 (`5.4 Other Requirements…`), dòng cuối T02–T07 | Thay bằng mục thật hoặc bỏ |
| `Role-Name1…3` | Placeholder tên role | T05 header | Thay bằng role thật (P059 yêu cầu rõ) |
| `xx.xx%` | Chỗ điền số | P092 | Điền ngưỡng thật hoặc ghi chưa chốt |

Quan sát thêm:

- Ví dụ lấy từ ít nhất ba miền khác nhau: cafeteria (P029, image2, image3, T02, T03, T04, T07, ERD, T08), web bán hàng có blog/slider (image4, image6 với giá VNĐ), quản lý tài sản (T09: asset hand-over). Vì vậy các ví dụ không tạo thành một bộ SRS thống nhất. Không dùng ví dụ này để suy ra ví dụ khác.
- Lỗi chính tả hoặc tham chiếu có trong file: P071 trỏ non-screen function về "3.1.5" (đúng phải là 3.1.4); P059 "event to the screen activities" (ý là "even"); P076 "can image how it work"; P089 "a normal users"; MSG09 "Incorrrect user name". P047 có `]` đóng mà không có `[` mở (P044 đã đóng). Không chép các lỗi này vào output.
- Tiêu đề có số gõ tay trong text (vd "2.1 Actors"), không dùng auto-numbering (xem `FPT-NUMBERING`).

## FPT-COVER-TOC — Bìa và mục lục

**Clause:** bìa, Table of Contents · **Evidence:** `verified_supplied` · **Locator:** P001–P021, image1, content control TOC · **Nguồn:** file DOCX người dùng cấp

**Bìa (P001–P021).** P002 là logo FPT University ("Fpt University" + "TRƯỜNG ĐẠI HỌC FPT", 283×87 px). Tiếp theo là các paragraph trống để căn khoảng, rồi:

| Locator | Chữ | Định dạng trực tiếp |
| --- | --- | --- |
| P010 | Capstone Project Report | Căn giữa, đậm, `caps` (hiển thị IN HOA), màu `C00000`, 28 pt |
| P011 | Report 3 – Software Requirement Specification | Căn giữa, đậm, `C00000`, 22 pt |
| P021 | – Hanoi, August 2019 – | Căn giữa, 14 pt, thụt trái 2526 / phải 2171 twip |

Bìa mẫu **không có** chỗ cho tên dự án, tên nhóm, mã nhóm, GVHD hay phiên bản tài liệu. Nhóm có thể cần thêm theo yêu cầu của GVHD; template không quy định.

**Mục lục.** Content control (`docPartGallery` Table of Contents) có tiêu đề "Table of Contents" (style `TOCHeading`), field `TOC \o "1-3" \h \z \u` (heading 1–3, có hyperlink). Cache hiện lưu cấu trúc **cũ**, không khớp thân tài liệu:

| Cache TOC (cấp) | Thân tài liệu hiện tại |
| --- | --- |
| I. Project Report (1) → 1. Status Report, 2. Team Involvements, 3. Issues/Suggestions (2) | I. Record of Changes, không có mục con |
| 1. Overall Description → 1.1 Product Overview, 1.2 Business Rules | 1. Product Overview (không có 1.1/1.2) |
| 2.1 System Actors | 2.1 Actors |
| 5. Other Requirements → 5.1 Appendix1 - Messages List, 5.2 Appendix2 - …, 5.3 … | 5. Requirement Appendix → 5.1 Business Rules, 5.2 Common Requirements, 5.3 Application Messages List, 5.4 Other Requirements… |

Số trang trong cache chạy tới 14, trong khi `Pages=11`. Kết luận: cache TOC lỗi thời; lấy heading của thân tài liệu làm căn cứ, cập nhật field trong Word trước khi nộp. Cache cho thấy một phiên bản trước của template từng đặt Business Rules ở 1.2 và Messages List ở phụ lục 5.1; bản hiện tại đã chuyển Business Rules sang 5.1.

## FPT-I-RECORD-OF-CHANGES — I. Record of Changes

**Clause:** I · **Evidence:** `verified_supplied` · **Locator:** P022 (ngắt trang), P023 (Heading1), T01, P024, P025 (ngắt trang) · **Nguồn:** file DOCX người dùng cấp

Mục này ghi lịch sử thay đổi của tài liệu. Template không có câu hướng dẫn, chỉ có bảng T01 và chú giải.

**T01** (4 cột; độ rộng 990/810/1234/5770 twip; header nền `FFE8E1`; 1 dòng header + 13 dòng trống):

| Date | A*<br>M, D | In charge | Change Description |
| --- | --- | --- | --- |
| *(13 dòng trống để điền)* | | | |

P024 (sau bảng, 14 pt): "*A - Added M - Modified D - Deleted". Ô header thứ hai xuống dòng giữa "A*" và "M, D".

Nội dung tối thiểu nên có: mỗi lần phát hành/sửa đáng kể một dòng gồm ngày, loại thay đổi A/M/D, người phụ trách và mô tả đủ để biết mục nào đổi. Template **không có** cột Version; cũng không quy định định dạng ngày hay cách đặt tên người.

## FPT-II-OUTLINE — Khung phần II và thứ bậc heading

**Clause:** II, chương 1–5 · **Evidence:** `verified_supplied` · **Locator:** P026–P115 (style của từng heading) · **Nguồn:** file DOCX người dùng cấp

P026 "II. Software Requirement Specification" (Heading1) bao năm chương. Danh sách heading đúng thứ tự thân tài liệu:

| Locator | Style | Tiêu đề |
| --- | --- | --- |
| P023 | Heading1 | I. Record of Changes |
| P026 | Heading1 | II. Software Requirement Specification |
| P027 | Heading2 | 1. Product Overview |
| P033 | Heading2 | 2. User Requirements |
| P034 | Heading3 | 2.1 Actors |
| P041 | Heading3 | 2.2 Use Cases |
| P043 / P046 | Heading4 | 2.2.1 Diagram(s) / 2.2.2 Descriptions |
| P049 | Heading2 | 3. Functional Requirements |
| P050 | Heading3 | 3.1 System Functional Overview |
| P052 / P055 / P058 / P061 / P064 | Heading4 | 3.1.1 Screens Flow / 3.1.2 Screen Descriptions / 3.1.3 Screen Authorization / 3.1.4 Non-Screen Functions / 3.1.5 Entity Relationship Diagram |
| P069 / P080 | Heading3 | 3.2 <<Feature Name 1>> / 3.3 <<Feature Name 2>> |
| P070 / P078 | Heading4 | 3.2.1 <<Function Name 1>> / 3.2.2 <<Function Name 2>> |
| P083 | Heading2 | 4. Non-Functional Requirements |
| P084 / P086 | Heading3 | 4.1 External Interfaces / 4.2 Quality Attributes |
| P088 / P090 / P098 / P104 | Heading4 | 4.2.1 Usability / 4.2.2 Reliability / 4.2.3 Performance / 4.2.4 … |
| P106 | Heading2 | 5. Requirement Appendix |
| P108 / P111 / P113 / P115 | Heading3 | 5.1 Business Rules / 5.2 Common Requirements / 5.3 Application Messages List / 5.4 Other Requirements… |

Quy tắc rút ra: phần I/II là Heading1; chương là Heading2 với số có dấu chấm ("1. "); mục cấp 2 là Heading3 không có dấu chấm cuối ("2.1"); mục cấp 3 là Heading4. Feature là mục cấp 2 trong chương 3, đánh số tiếp sau 3.1 (3.2, 3.3…); function là cấp 3 dưới feature. Ngắt trang cứng ở P022, P025, P032 (sau chương 1), P082 (sau chương 3). Chương 2→3 và 4→5 không có ngắt trang.

## FPT-1-PRODUCT-OVERVIEW — 1. Product Overview

**Clause:** II.1 · **Evidence:** `verified_supplied` · **Locator:** P027–P031, image2 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu của mục (P028).** Mô tả tổng quan sản phẩm, có phần giới thiệu và một context diagram. Định nghĩa: context diagram "presents the boundary and connections between the system you're developing and everything else in the universe" (P028). Sơ đồ phải chỉ ra các thực thể ngoài (external entity, còn gọi terminator: phần mềm, phần cứng, con người, hệ thống khác) có giao tiếp với hệ thống, và luồng dữ liệu, điều khiển, vật chất giữa chúng với hệ thống.

**Câu hỏi gợi ý** (nhóm tổng hợp từ P028–P029, không phải câu của template):

- Sản phẩm là gì, thay thế quy trình nào hiện tại?
- Bản phát hành này (release) gồm những gì, phiên bản sau dự kiến mở rộng gì?
- Ai/hệ thống nào ở ngoài ranh giới, mỗi bên gửi gì vào và nhận gì ra?

**Nội dung tối thiểu nên có:** (1) một đoạn giới thiệu nêu sản phẩm, người dùng chính và vấn đề được giải quyết; (2) phạm vi release hiện tại, nếu biết thì nêu hướng phát triển sau; (3) context diagram có hệ thống ở giữa, mọi external entity và nhãn luồng trên từng mũi tên.

**Ví dụ của template (P029, đặt trong `<<Sample: … >>`).** Cafeteria Ordering System là hệ thống mới thay quy trình đặt và nhận suất ăn thủ công/qua điện thoại ở căng tin "Process Impact". Context diagram minh họa thực thể ngoài và giao diện cho release 1.0. Hệ thống sẽ phát triển qua nhiều release, cuối cùng nối với dịch vụ đặt món qua Internet của nhà hàng địa phương và dịch vụ xác thực thẻ tín dụng/ghi nợ. Đây là ví dụ, không phải yêu cầu.

**Hình mẫu image2 (P030, 608×456 px, mô tả "context diagram").** Hệ thống "Cafeteria Ordering System" vẽ thành hình tròn ở giữa, sáu thực thể ngoài vẽ thành hình chữ nhật, mũi tên có nhãn luồng:

| External entity | Vào hệ thống | Từ hệ thống ra |
| --- | --- | --- |
| Patron | meal order and meal changes; payroll deduction registration | menu |
| Menu Manager | menu contents | — |
| Cafeteria Staff | meal status update; delivery request (hướng theo hình) | meal order; payment request (hướng theo hình) |
| Meal Deliverer | delivery confirmation | delivery request |
| Payroll System | payroll deduction response | payroll deduction registration request; payment request |
| Cafeteria Inventory System | food item availability information | food item orders |

Chiều một số mũi tên quanh Cafeteria Staff và Payroll System khó đọc trong ảnh độ phân giải thấp; bảng ghi theo cách đọc tốt nhất, không dùng làm dữ liệu chuẩn. Ký pháp là kiểu DFD mức 0 (một process, các terminator), không phải UML.

**Lỗi thường gặp:** chỉ có đoạn giới thiệu mà thiếu context diagram; vẽ use case thay cho context diagram; mũi tên không nhãn; bỏ sót hệ thống ngoài như cổng thanh toán, email, dịch vụ AI.

## FPT-2.1-ACTORS — 2.1 Actors

**Clause:** II.2.1 · **Evidence:** `verified_supplied` · **Locator:** P033 (chương 2, không có câu dẫn), P034–P039, T02, P040 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu của mục.** Mô tả các actor của hệ thống. Định nghĩa (P035): "An actor is a person (or sometimes another software system or a hardware device) that interacts with the system to perform a use case." Template khuyên dùng dạng bảng (P039 "you can follow the table form as below"), tức là gợi ý chứ không bắt buộc.

**Câu hỏi gợi ý của template** (P036–P038, danh sách bullet, để cùng đại diện người dùng tìm actor):

1. Ai (hoặc cái gì) được thông báo khi có sự việc xảy ra trong hệ thống?
2. Ai (hoặc cái gì) cung cấp thông tin hoặc dịch vụ cho hệ thống?
3. Ai (hoặc cái gì) giúp hệ thống phản hồi và hoàn tất một tác vụ?

Đây là cách tìm **ứng viên** actor. Một đối tượng chỉ nhận thông báo vẫn cần được xét có thực sự tương tác trong một use case không.

**T02** (3 cột: 416/1710/6806 twip; header nền `FFE8E1`, chữ đậm):

| # | Actor | Description |
| --- | --- | --- |
| 1 | Administrator | *(trống)* |
| 2 | Menu Manager | *(trống)* |
| 3 | … | |

Dòng 1–2 là ví dụ; cột Description để trống trong mẫu. **Nội dung tối thiểu nên có:** số thứ tự, tên actor, mô tả vai trò/trách nhiệm đối với hệ thống. Nên có cả actor là hệ thống ngoài nếu chúng tham gia use case (template cho phép actor là phần mềm hoặc thiết bị).

**Lỗi thường gặp:** liệt kê chức danh tổ chức không tương tác với hệ thống; trùng actor dưới hai tên; để trống Description như bản mẫu; quên actor phi người (Payroll System trong ví dụ UC).

## FPT-2.2-USE-CASES — 2.2 Use Cases (phần dẫn)

**Clause:** II.2.2 · **Evidence:** `verified_supplied` · **Locator:** P041–P042 · **Nguồn:** file DOCX người dùng cấp

P042 định nghĩa use case (UC) là chuỗi tương tác giữa hệ thống và một actor bên ngoài, kết quả là actor đạt được một "outcome of value". Quy tắc đặt tên: "The names of use cases are always written in the form of a verb followed by an object." Nên chọn tên mạnh, mô tả rõ để chỉ cần đọc tên đã thấy UC mang lại giá trị gì cho người dùng.

| Điểm | Template nói | Ghi chú |
| --- | --- | --- |
| Định nghĩa | Chuỗi tương tác, có actor ngoài, có kết quả giá trị | Một bước lẻ (vd "Click Save") không đủ là UC |
| Tên | Luôn là động từ + đối tượng | Ví dụ đạt trong template: View Menu, Order a Meal, Register for Payroll Deduction |
| Chất lượng tên | Mạnh, mô tả, thấy được giá trị | Tránh tên mơ hồ như "Process Data", "Manage" trơ trọi |

Hai mục con: 2.2.1 sơ đồ, 2.2.2 mô tả. Ngữ nghĩa `«include»`/`«extend»` không được template định nghĩa; tra [UML 2.5.1](uml-2.5.1.md).

## FPT-2.2.1-UC-DIAGRAM — 2.2.1 Diagram(s)

**Clause:** II.2.2.1 · **Evidence:** `verified_supplied` · **Locator:** P043–P045, image3 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P044).** Cung cấp (các) sơ đồ UC thể hiện quan hệ actor–UC và UC–UC theo hình mẫu. Được phép có nhiều sơ đồ UC cho hệ thống. Tiêu đề mục ghi "Diagram(s)".

**Nội dung tối thiểu nên có:** mọi actor ở 2.1 và mọi UC ở 2.2.2 xuất hiện trên ít nhất một sơ đồ; đường liên kết actor–UC; quan hệ UC–UC nếu có. Khi chia nhiều sơ đồ, nên chia theo actor hoặc nhóm chức năng và mỗi sơ đồ có tên.

**Hình mẫu image3 (P045, 1168×655 px).** Sơ đồ UC của hệ cafeteria:

| Actor | UC liên kết trực tiếp |
| --- | --- |
| Administrator | Manage Users, Manage Products, Manage Menu |
| Menu Manager | Manage Menu, Define a Meal Special |
| Patron | View Menu, Order a Meal, Manage Meal Orders, Manage Meal Subscription, Register for Payroll Deduction |
| Cafeteria Staff | Prepare Meal, Handle Meal Orders, Define a Meal Special, Request Meal Delivery |
| Payroll System | Register for Payroll Deduction, Request Monthly Payments |
| Meal Deliverer | Record Meal Delivery, Print Delivery Instructions |

Quan hệ UC–UC trong hình: hầu hết UC có mũi tên `«include»` tới **Login** (Manage Users, Manage Products, Manage Menu, Manage Meal Orders, Manage Meal Subscription, Register for Payroll Deduction, Prepare Meal, Handle Meal Orders, Request Meal Delivery, Record Meal Delivery, Print Delivery Instructions); Handle Meal Orders `«include»` Prepare Meal; Order a Meal `«extend»` View Menu; Request Meal Delivery `«extend»` Handle Meal Orders. Hình không có khung system boundary.

Nhận xét khi dùng hình mẫu: (1) mô hình "mọi UC include Login" là lựa chọn của người vẽ, không phải quy tắc của template (P044 không nhắc Login); nhiều tài liệu UML coi đăng nhập là tiền điều kiện hơn là include. (2) Thiếu boundary không có nghĩa template cấm boundary. Sơ đồ chỉ minh họa cách bố trí.

## FPT-2.2.2-UC-DESCRIPTIONS — 2.2.2 Descriptions

**Clause:** II.2.2.2 · **Evidence:** `verified_supplied` · **Locator:** P046–P047, T03, P048 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P047).** Mô tả các UC, có thể theo dạng bảng gợi ý.

**T03** (4 cột: 520/3024/1843/3658 twip; header nền `FFE8E1`):

| ID | Use Case | Actors | Use Case Description |
| --- | --- | --- | --- |
| 01 | View Menu | Patron | *(trống)* |
| 02 | Order a Meal | Patron | *(trống)* |
| 03 | … | | |

Dòng 01–02 là ví dụ; mô tả để trống. **Nội dung tối thiểu nên có:** ID duy nhất, tên UC (động từ + đối tượng), actor chính (và phụ nếu có), mô tả ngắn nêu ai làm gì và kết quả giá trị. Template **không** yêu cầu bảng đặc tả UC đầy đủ (pre/post-condition, main/alternative flow); luồng chi tiết được đặt ở mục function 3.x.y.

Không suy ra định dạng ID bắt buộc là hai chữ số; bản mẫu chỉ minh họa.

## FPT-3.1-FUNCTIONAL-OVERVIEW — 3.1 System Functional Overview

**Clause:** II.3, II.3.1 · **Evidence:** `verified_supplied` · **Locator:** P049–P051 · **Nguồn:** file DOCX người dùng cấp

P051 liệt kê những gì tổng quan chức năng phải có: screen flow, screen descriptions, system user roles, screen authorization, non-screen functions, ERD. Năm mục con 3.1.1–3.1.5 tương ứng; "system user roles" không có mục riêng mà thể hiện qua cột role của 3.1.3.

| Mục con | Thành phần bắt buộc theo P051 | Hình/bảng mẫu |
| --- | --- | --- |
| 3.1.1 Screens Flow | screen flow | image4 |
| 3.1.2 Screen Descriptions | screen descriptions | T04 |
| 3.1.3 Screen Authorization | system user roles + screen authorization | T05 |
| 3.1.4 Non-Screen Functions | non-screen functions | T06 |
| 3.1.5 Entity Relationship Diagram | ERD (+ mô tả entity) | image5.emf/Visio, T07 |

Cấu trúc này đặc trưng của template FPTU (hướng màn hình, phù hợp ứng dụng web/mobile); không có tương đương trực tiếp trong mẫu SRS IEEE.

## FPT-3.1.1-SCREENS-FLOW — 3.1.1 Screens Flow

**Clause:** II.3.1.1 · **Evidence:** `verified_supplied` · **Locator:** P052–P054, image4 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P053).** Thể hiện các màn hình của hệ thống và quan hệ giữa chúng, có thể vẽ dạng sơ đồ như hình mẫu. Ngoài màn thường có thể dùng ký hiệu hình oval cho pop-up (ví dụ Import Order) hoặc màn có nhiều tab thông tin (ví dụ Order Details). Có thể dùng định dạng chữ hoặc nền để phân biệt trực quan.

**Nội dung tối thiểu nên có:** mọi màn ở 3.1.2 xuất hiện trong flow; mũi tên điều hướng giữa màn; màn vào (trang chủ/đăng nhập) nhận ra được; pop-up và màn có tab được đánh dấu khác màn thường.

**Hình mẫu image4 (P054, 1216×700 px)**, miền web bán hàng/blog (khác ví dụ cafeteria):

- Nhánh công khai: Home Page → User Login, Blogs List → Blog Details, Products List → Product Details, User Cart; Home Page cũng nối Change Password, User Profile.
- User Login → User Register, Reset Password, PostLogin.
- PostLogin rẽ sang: Settings List → Setting Details; Users List → User Details; Posts List → Post Details; Sliders → Slider Details; Products List → Product Details; Orders List → Import Orders (khối bo tròn = pop-up) và Order Details (khung lớn chứa hai khối nghiêng Products Info, Receiver Info = màn có tab).
- Định dạng: một số khối nền vàng nhạt (Home Page, User Login, Change Password, User Profile, Reset Password, User Register), nhiều nhãn chữ xanh (các màn công khai), khối sau đăng nhập chữ đen. Template **không giải thích** ý nghĩa màu; chỉ nói được dùng để phân biệt trực quan.

Ký pháp là sơ đồ khối tự do, không phải UML state machine hay activity. Không áp quy tắc UML cho hình này.

## FPT-3.1.2-SCREEN-DESCRIPTIONS — 3.1.2 Screen Descriptions

**Clause:** II.3.1.2 · **Evidence:** `verified_supplied` · **Locator:** P055–P057, T04 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P056).** Mô tả các màn hình có trong Screens Flow.

**T04** (4 cột: 328/1799/1701/5386 twip):

| # | Feature | Screen | Description |
| --- | --- | --- | --- |
| 1 | Order Meals | Create Order | <<Screen Brief description>> |
| 2 | Order Meals | Change Order | *(trống)* |
| 3 | .. | | |

**Nội dung tối thiểu nên có:** mỗi màn một dòng; màn gắn với một feature (feature này sẽ là mục 3.x); mô tả ngắn mục đích màn và thông tin chính hiển thị hoặc nhập. Danh sách màn ở bảng và ở sơ đồ 3.1.1 phải khớp nhau.

Quan hệ dữ liệu ngầm định: cột Feature nối 3.1.2 với các mục 3.x; một feature có nhiều màn (Order Meals → Create Order, Change Order).

## FPT-3.1.3-SCREEN-AUTHORIZATION — 3.1.3 Screen Authorization

**Clause:** II.3.1.3 · **Evidence:** `verified_supplied` · **Locator:** P058–P060, T05 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P059).** Trình bày phân quyền của các role hệ thống đối với feature, xuống tới mức màn hình, và tới cả hoạt động trên màn nếu phù hợp, dạng bảng. Thay Role1, Role2… bằng tên role thật của hệ thống.

**T05** (5 cột: 3119/1417/1418/1559/1701 twip). Dòng màn viết `<<Screen Name>>`, dòng hoạt động thụt lề bằng khoảng trắng. Bản đầy đủ của mẫu:

| Screen | Role-Name1 | Role-Name2 | Role-Name3 | … |
| --- | --- | --- | --- | --- |
| <<Screen Name1>> | X | | X | X |
| &nbsp;&nbsp;<<Screen Activity>> | | | X | X |
| <<Screen Name2>> | X | | X | |
| &nbsp;&nbsp;Query All Data | X | | | |
| &nbsp;&nbsp;Query Own Data | | | X | |
| &nbsp;&nbsp;Query Managed Data | | | X | |
| &nbsp;&nbsp;Add New Data | | | X | X |
| &nbsp;&nbsp;Update All Data | | | | X |
| &nbsp;&nbsp;Update Own Data | | | | X |
| &nbsp;&nbsp;Update Managed Data | | | | X |
| &nbsp;&nbsp;Delete Data | | | | |
| &nbsp;&nbsp;… | | | | |

Cách đọc: hàng = màn hoặc hoạt động trên màn, cột = role, "X" = được phép. Các hoạt động mẫu phân biệt **phạm vi dữ liệu**: All (toàn bộ), Own (của chính mình), Managed (do mình quản lý). Cột Role-Name2 không có X nào, cho thấy role có thể không được vào một màn.

**Nội dung tối thiểu nên có:** cột là toàn bộ role thật (khớp actor người ở 2.1); mỗi màn ở 3.1.2 một hàng; màn có thao tác nhạy cảm thì tách hàng hoạt động (xem/tạo/sửa/xóa, phạm vi dữ liệu); mỗi màn có ít nhất một role được vào.

## FPT-3.1.4-NON-SCREEN-FUNCTIONS — 3.1.4 Non-Screen Functions

**Clause:** II.3.1.4 · **Evidence:** `verified_supplied` · **Locator:** P061–P063, T06 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P062).** Mô tả các chức năng hệ thống không có màn hình, ví dụ batch/cron job, service, API…

**T06** (4 cột: 362/1623/1842/5387 twip):

| # | Feature | System Function | Description |
| --- | --- | --- | --- |
| 1 | <<Feature Name>> | <<Function Name1>> | <<Function Name1 Description>> |
| 2 | … | | |

**Nội dung tối thiểu nên có:** mỗi chức năng không màn một dòng, thuộc một feature, tên chức năng, mô tả nêu việc làm và cách kích hoạt (lịch chạy, sự kiện, lời gọi API). Mỗi dòng sau đó có mục chi tiết 3.x.y riêng (P071 nói function có thể là non-screen).

Câu hỏi gợi ý (nhóm tự đặt): Có tác vụ chạy định kỳ không (gửi email nhắc, tổng hợp báo cáo, dọn dữ liệu)? Hệ thống có cung cấp API cho bên ngoài không? Có xử lý nền sau một sự kiện (webhook thanh toán) không?

## FPT-3.1.5-ERD — 3.1.5 Entity Relationship Diagram

**Clause:** II.3.1.5 · **Evidence:** `verified_supplied` · **Locator:** P064–P068, image5.emf, `embeddings/Microsoft_Visio_Drawing1.vsdx`, T07 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P065).** Cung cấp ERD và mô tả các entity dạng bảng theo mẫu. P067 là nhãn "Entities Description" (đậm, gạch chân) đặt trước bảng.

**Hình mẫu (P066).** Ảnh EMF là preview của bản vẽ Visio nhúng (OLE). Đã render EMF ra PNG (1004×523 px) và đọc text trong Visio `page1.xml` để đối chiếu. Ký pháp Chen: entity là hình chữ nhật, relationship là hình thoi, cardinality ghi `1`/`M` cạnh đường nối.

| Entity A | Relationship | Entity B | Cardinality (A : B) |
| --- | --- | --- | --- |
| User | booking | Meal Subscription | 1 : M |
| Meal | including | Meal Subscription | 1 : M |
| User | incharging | Meal | 1 : M |
| User | requesting | Payroll Deduction | 1 : M |
| User | booking | Order | 1 : M |
| Meal | including | Order | 1 : 1 (theo nhãn trên hình) |
| Order | including | Product | M : M |
| Category | having | Product | 1 : M |

Bảy entity: User, Meal, Meal Subscription, Payroll Deduction, Order, Product, Category. Hình không có thuộc tính (attribute) hay khóa. Đây là ERD mức khái niệm.

**T07** (style `Kiu2`, 3 cột: 517/2123/6149 twip):

| # | Entity | Description |
| --- | --- | --- |
| 1 | User | *(trống)* |
| 2 | Meal | *(trống)* |
| 3 | Meal Subscription | *(trống)* |
| 4 | … | |

**Nội dung tối thiểu nên có:** ERD có toàn bộ entity nghiệp vụ và quan hệ kèm cardinality; bảng mô tả mỗi entity (ý nghĩa nghiệp vụ, có thể thêm thuộc tính chính). Template không bắt buộc ký pháp Chen; Crow's Foot hay UML class diagram vẫn có thể dùng nếu thể hiện đủ quan hệ. Template không yêu cầu mô hình vật lý (bảng, kiểu dữ liệu).

## FPT-3.2-FEATURE-FUNCTION-DETAIL — 3.2… Feature và Function details

**Clause:** II.3.2, 3.2.1, 3.2.2, 3.3 · **Evidence:** `verified_supplied` · **Locator:** P069–P081, image6 · **Nguồn:** file DOCX người dùng cấp

**Cấu trúc.** Mỗi feature là một mục cấp 2 (3.2 <<Feature Name 1>>, 3.3 <<Feature Name 2>>…). Mỗi function của feature là một mục cấp 3 (3.2.1 <<Function Name 1>>, 3.2.2 <<Function Name 2>>). P079, P081 chỉ có "…", tức là lặp cấu trúc cho các function và feature tiếp theo. Mục feature không có câu hướng dẫn riêng.

**Yêu cầu cho mỗi function (P071–P076).** Function có thể là màn hình hoặc chức năng không màn. Phải nêu chi tiết, tập trung vào bốn nhóm (bullet trong template, không phải heading):

| Nhóm | Template yêu cầu | Nội dung tối thiểu nên có |
| --- | --- | --- |
| Function trigger (P072) | Cách function được kích hoạt: đường điều hướng, tần suất theo thời gian… | Màn: đường đi tới màn/nút bấm. Không màn: lịch chạy hoặc sự kiện. |
| Function description (P073) | Actor/role, mục đích, giao diện, xử lý dữ liệu… | Ai dùng, để làm gì, giao diện gồm thành phần chính nào, hệ thống xử lý/lưu gì |
| Screen layout (P074–P075) | Mock-up/prototype của màn | Ảnh wireframe/mock-up cho function có màn |
| Function details (P076) | Giải thích dữ liệu, validation, business rule, chức năng trong trường hợp bình thường và bất thường, để người đọc hình dung cách hoạt động | Trường dữ liệu, ràng buộc kiểm tra, BR áp dụng (tham chiếu 5.1), luồng chính, luồng lỗi/ngoại lệ (tham chiếu 5.3) |

**Lỗi tham chiếu trong template.** P071 nói non-screen function "listed in the part 3.1.5 above". Thân tài liệu đặt Non-Screen Functions ở 3.1.4 (P061, T06); 3.1.5 là ERD. Khi viết hoặc kiểm tra, tham chiếu đúng là 3.1.4.

**Hình mẫu image6 (P075, 1095×569 px)**, mock-up màn "Manage Products": khung trái có "LOGO HERE" và menu (Data Administration: Manage Users, Manage Products, Manage Menu; Order Handling: Orders List, Payments); vùng phải có "Screen Header", tiêu đề Manage Products, bộ lọc dropdown "All Categories", ô tìm kiếm "Type the product code or name to search", nút Search, liên kết "Add new"; bảng cột Id, Product, Code, Category, Price, Action (Edit/Delete) với dữ liệu mẫu (Coca Cola DR03 Drink 20.000 VNĐ; Chicken FD156 Food 135.000 VNĐ…); phân trang 1–5. Mock-up minh họa mức chi tiết mong đợi (layout, điều khiển, dữ liệu mẫu), không phải giao diện yêu cầu.

**Lỗi thường gặp:** chỉ viết mô tả chung, thiếu abnormal case; trigger bỏ trống cho chức năng không màn; dán ảnh màn mà không mô tả trường dữ liệu và validation; trùng lặp BR thay vì tham chiếu mã ở 5.1.

## FPT-4.1-EXTERNAL-INTERFACES — 4.1 External Interfaces

**Clause:** II.4, II.4.1 · **Evidence:** `verified_supplied` · **Locator:** P083–P085 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P085).** Cung cấp thông tin để hệ thống giao tiếp đúng với người dùng và với phần cứng, phần mềm/hệ thống bên ngoài. Template không có bảng mẫu và không chia mục con.

**Câu hỏi gợi ý** (nhóm tự đặt dựa trên P085): giao diện người dùng chạy trên nền tảng nào (trình duyệt, mobile)? Hệ thống nối với dịch vụ ngoài nào (thanh toán, email, SSO, AI), qua giao thức/định dạng gì? Có thiết bị phần cứng nào (máy in, máy quét)?

**Nội dung tối thiểu nên có:** mỗi hệ thống/thiết bị ngoài ở context diagram có ít nhất một mô tả giao tiếp (dữ liệu trao đổi, hướng, giao thức hoặc chuẩn); yêu cầu chung về giao diện người dùng nếu có.

## FPT-4.2-QUALITY-ATTRIBUTES — 4.2 Quality Attributes (phần dẫn)

**Clause:** II.4.2 · **Evidence:** `verified_supplied` · **Locator:** P086–P087 · **Nguồn:** file DOCX người dùng cấp

P087 yêu cầu liệt kê **mọi** đặc tính hệ thống cần có (quality attribute). Template đưa sẵn một số thuộc tính kèm hướng dẫn ở 4.2.1–4.2.3 và để mở 4.2.4. Ý chính: thuộc tính chất lượng phải được đặc tả, và tốt nhất là đo được. Các gợi ý ở mục con là ví dụ chỉ tiêu, không phải danh sách bắt buộc.

## FPT-4.2.1-USABILITY — 4.2.1 Usability

**Clause:** II.4.2.1 · **Evidence:** `verified_supplied` · **Locator:** P088–P089 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P089).** Gồm mọi yêu cầu ảnh hưởng tới usability. Ví dụ template đưa:

| Loại chỉ tiêu | Diễn giải |
| --- | --- |
| Thời gian đào tạo | Người dùng thường và người dùng thành thạo (power user) cần bao lâu để làm hiệu quả một thao tác cụ thể |
| Thời gian tác vụ | Thời gian đo được cho các tác vụ điển hình |
| Tham chiếu hệ thống quen thuộc | Lấy usability của hệ thống người dùng đã biết và thích làm chuẩn |
| Tuân thủ chuẩn | Theo chuẩn usability phổ biến, template nêu IBM CUA và Microsoft GUI standards |

**Nội dung tối thiểu nên có:** ít nhất một yêu cầu usability có thể kiểm chứng (vd thời gian hoàn thành tác vụ chính, số bước, chuẩn truy cập). Tên chuẩn IBM CUA trong template đã cũ; nhóm chọn chuẩn phù hợp hiện tại nếu cần.

## FPT-4.2.2-RELIABILITY — 4.2.2 Reliability

**Clause:** II.4.2.2 · **Evidence:** `verified_supplied` · **Locator:** P090–P097 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P091).** Đặc tả yêu cầu về độ tin cậy. Gợi ý (P092–P097, các paragraph thường không có numbering):

| Chỉ tiêu | Template mô tả |
| --- | --- |
| Availability | Tỉ lệ thời gian sẵn sàng (`xx.xx%`), giờ sử dụng, truy cập bảo trì, chế độ hoạt động suy giảm (degraded mode) |
| MTBF (Mean Time Between Failures) | Thường tính bằng giờ, có thể bằng ngày, tháng, năm |
| MTTR (Mean Time To Repair) | Hệ thống được phép ngừng bao lâu sau khi hỏng |
| Accuracy | Độ chính xác (resolution) và độ đúng (theo chuẩn đã biết) yêu cầu ở output |
| Maximum Bugs or Defect Rate | Thường tính bugs/KLOC hoặc bugs/function-point |
| Bugs or Defect Rate theo mức | Phân loại minor, significant, critical; yêu cầu phải định nghĩa thế nào là bug "critical", ví dụ mất toàn bộ dữ liệu hoặc không dùng được một phần chức năng |

Điểm có tính bắt buộc trong câu chữ: nếu dùng phân loại bug thì "the requirement(s) must define what is meant by a 'critical' bug" (P097). Các chỉ tiêu khác là gợi ý.

**Nội dung tối thiểu nên có:** availability có số và điều kiện (giờ phục vụ, cửa sổ bảo trì); MTTR hoặc mục tiêu khôi phục; định nghĩa mức lỗi nghiêm trọng nếu đặt chỉ tiêu lỗi.

## FPT-4.2.3-PERFORMANCE — 4.2.3 Performance

**Clause:** II.4.2.3 · **Evidence:** `verified_supplied` · **Locator:** P098–P103 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P099).** Nêu đặc tính hiệu năng, có response time cụ thể; khi phù hợp, tham chiếu tên use case liên quan. Gợi ý (P100–P103):

| Chỉ tiêu | Ví dụ của template |
| --- | --- |
| Response time | Cho một giao dịch, trung bình và tối đa |
| Throughput | Ví dụ số giao dịch mỗi giây |
| Capacity | Ví dụ số khách hàng hoặc giao dịch hệ thống chứa được |
| Resource utilization | Bộ nhớ, đĩa, đường truyền… |

**Nội dung tối thiểu nên có:** ít nhất một response time có số, có điều kiện tải và gắn UC/chức năng cụ thể; capacity (số người dùng đồng thời hoặc khối lượng dữ liệu) nếu là hệ thống nhiều người dùng.

## FPT-4.2.4-OPEN-ATTRIBUTE — 4.2.4 …

**Clause:** II.4.2.4 · **Evidence:** `verified_supplied` · **Locator:** P104–P105 · **Nguồn:** file DOCX người dùng cấp

Tiêu đề chỉ là "4.2.4 …", không có hướng dẫn. Đây là chỗ để thêm các thuộc tính chất lượng khác (P087 yêu cầu liệt kê mọi thuộc tính cần có). Ví dụ (nhóm tự đặt): Security, Maintainability, Portability, Scalability. Template không đặt tên cố định; tên "Domain-Specific Attributes" là lựa chọn của FlintFlow (xem `FPT-COMPARISON`).

## FPT-5-APPENDIX — 5. Requirement Appendix (phần dẫn)

**Clause:** II.5 · **Evidence:** `verified_supplied` · **Locator:** P106–P107 · **Nguồn:** file DOCX người dùng cấp

P107: đặt ở đây business rule, yêu cầu dùng chung và các thông tin yêu cầu bổ sung khác. Chương có bốn mục 5.1–5.4. Thân template **không có** mục Glossary; cache TOC cũ cũng không có.

## FPT-5.1-BUSINESS-RULES — 5.1 Business Rules

**Clause:** II.5.1 · **Evidence:** `verified_supplied` (bảng) · `secondary_source` cho nguồn gốc (xem `FPT-ORIGIN`) · **Locator:** P108–P110, T08 · **Nguồn:** file DOCX người dùng cấp

**Yêu cầu (P109).** Nêu các business rule chung mà hệ thống phải tuân theo, có thể dạng bảng theo mẫu.

**T08** (2 cột: 851/8231 twip; style đoạn `TableHead`/`TableText`). Tất cả là ví dụ của hệ cafeteria. Dòng dài được diễn giải, đánh dấu (dg):

| ID | Rule Definition |
| --- | --- |
| BR-01 | "Delivery time windows are 15 minutes, beginning on each quarter hour." |
| BR-02 | "Deliveries must be completed between 10:00 A.M. and 2:00 P.M. local time, inclusive." |
| BR-03 | "All meals in a single order must be delivered to the same location." |
| BR-04 | "All meals in a single order must be paid for by using the same payment method." |
| BR-11 | "If an order is to be delivered, the patron must pay by payroll deduction." |
| BR-12 | (dg) Giá đơn = tổng (giá từng món × số lượng) + thuế bán hàng + phí giao nếu giao ngoài vùng miễn phí |
| BR-24 | (dg) Chỉ nhân viên căng tin được Cafeteria Manager chỉ định làm Menu Manager mới được tạo, sửa, xóa thực đơn |
| BR-33 | "Network transmissions that involve financial information or personally identifiable information require 256-bit encryption." |
| BR-86 | "Only regular employees can register for payroll deduction for any company purchase." |
| BR-88 | (dg) Nhân viên đăng ký trừ lương cho bữa ăn chỉ khi phần lương đang bị khấu trừ vì lý do khác không vượt 40% lương gộp |

Đặc điểm của mẫu: mã `BR-nn`, mỗi dòng một quy tắc, câu khẳng định dùng "must", "only", "require". Mã không liên tục (01–04, 11, 12, 24, 33, 86, 88), cho thấy đây là trích từ một danh mục lớn hơn. Các loại quy tắc trong mẫu: ràng buộc thời gian (01, 02), ràng buộc dữ liệu đơn hàng (03, 04, 11), công thức tính (12), phân quyền (24), bảo mật (33), điều kiện tư cách (86, 88).

**Nội dung tối thiểu nên có:** mỗi quy tắc có mã duy nhất và một câu định nghĩa đơn nhất, kiểm chứng được; function ở 3.x.y tham chiếu mã quy tắc thay vì lặp nội dung. Không chép số liệu cafeteria (15 phút, 10:00–2:00, 40%, 256-bit) vào dự án khác.

## FPT-5.2-COMMON-REQUIREMENTS — 5.2 Common Requirements

**Clause:** II.5.2 · **Evidence:** `verified_supplied` · **Locator:** P111–P112 · **Nguồn:** file DOCX người dùng cấp

P112 chỉ ghi "Fill all the common requirements here..". Không có bảng mẫu, không định nghĩa thế nào là common requirement.

Diễn giải theo vị trí trong template: yêu cầu áp dụng cho nhiều màn/chức năng, để không phải lặp ở từng 3.x.y. Ví dụ (nhóm tự đặt): định dạng ngày giờ, phân trang mặc định, quy tắc hiển thị lỗi chung, ghi log/audit, timeout phiên. **Nội dung tối thiểu nên có:** mỗi yêu cầu một câu kiểm chứng được, có phạm vi áp dụng.

## FPT-5.3-MESSAGES — 5.3 Application Messages List

**Clause:** II.5.3 · **Evidence:** `verified_supplied` · **Locator:** P113–P114, T09 · **Nguồn:** file DOCX người dùng cấp

Mục không có câu hướng dẫn, chỉ có bảng T09 (style `TableGrid`, 5 cột: 422/1132/1478/3057/2741 twip). Ví dụ thuộc hệ quản lý tài sản, khác miền cafeteria:

| # | Message code | Message Type | Context | Content |
| --- | --- | --- | --- | --- |
| 1 | MSG01 | In line | There is not any search result | No search results. |
| 2 | MSG02 | In red, under the text box | Input-required fields are empty | The * field is required. |
| 3 | MSG03 | Toast message | Updating asset(s) information successfully | Update asset(s) successfully. |
| 4 | MSG04 | Toast message | Adding new asset successfully | Add asset successfully. |
| 5 | MSG05 | Toast message | Confirming email of asset hand-over is sent successfully | A confirmation email has been sent to {email_address}. |
| 6 | MSG06 | Toast message | Resetting asset information successfully | Return asset(s) successfully. |
| 7 | MSG07 | Toast message | Deleting asset information successfully | Delete asset(s) successfully. |
| 8 | MSG08 | In red, under the text box | Input value length > max length | Exceed max length of {max_length}. |
| 9 | MSG09 | In line | Username or password is not correct when clicking sign-in | Incorrrect user name or password. Please check again. *(lỗi chính tả có sẵn trong mẫu)* |

Ý nghĩa cột rút ra từ ví dụ: **Message Type** là cách/vị trí hiển thị (inline, chữ đỏ dưới ô nhập, toast); **Context** là điều kiện làm xuất hiện thông báo; **Content** là chữ hiển thị, có thể có tham số trong `{}`. Mã dạng `MSGnn`.

**Nội dung tối thiểu nên có:** mỗi thông báo có mã duy nhất, kiểu hiển thị, ngữ cảnh xuất hiện và nội dung; thông báo lỗi tương ứng với abnormal case ở 3.x.y.

## FPT-5.4-OTHER-REQUIREMENTS — 5.4 Other Requirements…

**Clause:** II.5.4 · **Evidence:** `verified_supplied` · **Locator:** P115 (paragraph cuối thân, Heading3) · **Nguồn:** file DOCX người dùng cấp

Chỉ có tiêu đề "5.4 Other Requirements…", không có hướng dẫn hay bảng. Dấu "…" cho thấy có thể thêm mục 5.5, 5.6… tùy dự án. Ví dụ (nhóm tự đặt): yêu cầu pháp lý, dữ liệu khởi tạo, giả định và ràng buộc, rủi ro. Không có căn cứ trong template để coi Glossary hay danh mục rủi ro là bắt buộc.

## FPT-STYLE — Thuộc tính định dạng file gốc

**Clause:** định dạng · **Evidence:** `verified_supplied` cho OOXML; chưa kiểm hiển thị · **Locator:** `word/styles.xml`, `word/theme/theme1.xml`, `w:sectPr`, `word/footer1.xml`, `w:tblPr` của T01–T09 · **Nguồn:** file DOCX người dùng cấp

| Thuộc tính | Giá trị trong file (đã kiểm lại) |
| --- | --- |
| Khổ giấy | 11906 × 16838 twip (A4), một section |
| Lề | Trên 1440, dưới 1440, trái 1440, phải 1416 twip; header/footer 708 twip; gutter 0 |
| Mặc định | Font theme minor (Calibri), 11 pt, `lang en-GB`; spacing after 160, line 259 auto |
| Theme | Major Latin Calibri Light, minor Latin Calibri; accent1 `5B9BD5` |
| Heading1 | Font theme major, đậm, màu `C00000`, 16 pt, before 240/after 0, keepNext |
| Heading2 | Major, đậm, 13 pt, before 40/after 0 |
| Heading3 | Major, đậm, màu `1F4D78` (accent1, shade 7F), 12 pt |
| Heading4 | Major, đậm + nghiêng, cỡ mặc định 11 pt |
| Chữ hướng dẫn | Định dạng trực tiếp: nghiêng, màu `0000FF` |
| ListParagraph | Thụt trái 720 twip |
| Bảng | Viền đơn 4 (½ pt) màu auto; ô header nền `FFE8E1`, chữ đậm; độ rộng cột khác nhau theo bảng (ghi ở từng mục); T07 dùng style `Kiu2` (định nghĩa firstRow nền `BDD6EE` nhưng ô header ghi đè `FFE8E1`), T09 dùng `TableGrid`, T01 dùng đoạn style `HeadingLv1`/`Bang0` (Tahoma) |
| Footer | Paragraph căn phải, viền trên màu `D9D9D9`: field `PAGE`, " \| ", chữ "Page" màu xám `7F7F7F` giãn chữ. Hiển thị dạng "6 \| Page" |
| Header | Không có header part |
| Bìa | Định dạng trực tiếp (xem `FPT-COVER-TOC`) |
| Compatibility | `compatibilityMode` 15 (Word 2013+) |

Đây là thuộc tính của bản nhận được. Template không có câu nào yêu cầu giữ đúng font, màu hay lề. Không suy ra số trang hoặc ngắt dòng từ XML.

## FPT-NUMBERING — Đánh số heading và danh sách

**Clause:** numbering · **Evidence:** `verified_supplied` · **Locator:** `word/numbering.xml`, `w:numPr` trong P036–P038, P072–P076; `styles.xml` Heading1–4 · **Nguồn:** file DOCX người dùng cấp

- **Heading không dùng auto-numbering.** Style Heading1–4 không có `w:numPr`; không `w:lvl` nào trong `numbering.xml` liên kết `w:pStyle` tới heading. Số "I.", "1.", "2.1", "3.1.5" là chữ gõ tay trong text heading. Khi thêm hoặc xóa mục, người viết phải tự sửa số.
- **Danh sách dùng numbering.** `numbering.xml` có 22 `w:num` / 22 `w:abstractNum`, nhưng thân chỉ dùng hai: `numId 17` (abstract 15) cho ba câu hỏi actor P036–P038, `numId 22` (abstract 6) cho bốn nhóm chi tiết function P072, P073, P074, P076 (P075 chứa ảnh mock-up, style ListParagraph nhưng không có `numPr`). Cả hai cấp 0 là bullet font Symbol (mã `F0B7`, hiển thị chấm tròn), thụt 720/hanging 360. Các numbering còn lại có thể là dư từ bản trước.
- **Gạch đầu dòng giả.** P092–P097 và P100–P103 là paragraph thường không có `numPr`; chỉ là dòng xuống hàng trong khối hướng dẫn.
- **Định dạng số chương.** Chương có dấu chấm sau số ("1. Product Overview"), mục cấp 2–3 không có ("2.1 Actors", "2.2.1 Diagram(s)"). Phần I/II dùng số La Mã có dấu chấm.

## FPT-EXPORT-SOURCES — Căn cứ code Export Word

**Clause:** — · **Evidence:** `project_observation` · **Locator:** `D:\Code\sep490\flintflow_be` commit `f50b1255eb6e80cd3794f5953bdc4d15cdfac02b` (HEAD, merge PR #135, 2026-10-13); working tree của các file dưới đây không có thay đổi chưa commit · **Nguồn:** repo backend nội bộ

| File | Hàm/ký hiệu dùng để đối chiếu | Đổi từ rev 2 (`8ab8531`)? |
| --- | --- | --- |
| `src/modules/spine/section-registry.ts` | `FIXED_DEFS`, `listSections` | Không |
| `src/modules/render/labels.ts` | `GROUP_HEADINGS`, `WRITER_TEXT`, `VI_SECTION_TITLES`, `VI_FPT_LABELS`, `writerOptionsFor` (mới) | Có (+15/−1) |
| `src/modules/render/assemble.service.ts` | `buildNumberMap`, `chapterSection`, `buildSections`, `buildDocumentParts`, `translateSpine` (mới), `loadDocumentImages` (mới), `getTranslatedDraftDocument` (mới) | Có (+387 dòng thay đổi) |
| `src/modules/render/section-renderer.ts` | `productOverview`, `actorsTable`, `useCaseTable`, `screensFlow`/`flowTitle`, `screenDescriptions`, `screenAuthorization`, `nonScreenFunctions`, `erd`, `featureOverview`, `fptFunctionDetail`, `nfrList`, `nfrTable`, `businessRulesDetail`, `commonRequirements`, `messagesList`, `otherRequirements`, `glossaryTable`, `buildRecordOfChanges` | Có (+101 dòng thay đổi, chủ yếu FLF-265 `canonical`) |
| `src/modules/render/docx-writer.ts` | `writeDocx`, `coverPage`, `pageHeader`, `pageFooter`, `recordOfChanges`, `flagsAppendix`, `renderSection`, `table`, `image`, `headingLevel` | Không |
| `src/modules/render/export.controller.ts` | `exportWord` (truyền `languages`, `writerOptionsFor`) | Có (commit `e3ca563`) |
| `src/modules/project/document-language.ts` | `documentLanguageOf`, `sourceLanguageOf` | Đã có ở rev 2, chưa được render dùng |
| `src/modules/spine/spine.types.ts` | `Message`, `BusinessRule`, `Permission`, `Function` | Chỉ đọc để kiểm field |
| `assets/skills/content/actors-and-usecases/assets/usecase-table-template.md` | Bảng cột Use Case | Không (lần sửa cuối `ef2e142`, 2026-09-22) |
| `src/modules/render/__snapshots__/assemble.test.ts.snap` | Output `RenderedDocument` từ fixture 19 màn, tiếng Anh | Snapshot sửa lần cuối `76a9854` (2026-09-29) |

Snapshot là bằng chứng output của đường mặc định tiếng Anh (thứ tự section, level, tiêu đề cột). Nó không phủ đường bản dịch FLF-265.

## FPT-EXPORT-DELTA-REV2 — Thay đổi Export Word từ rev 2 tới nay

**Clause:** — · **Evidence:** `project_observation` · **Locator:** `git log 8ab8531..f50b125` (65 commit; liên quan render: `3ee9021`, `9cc1d59`, `e3ca563`, `a907b3d`, `e9cbc39`) · **Nguồn:** repo backend nội bộ

| # | Thay đổi | Code | Ảnh hưởng so với template FPT |
| --- | --- | --- | --- |
| 1 | Ngôn ngữ tài liệu theo dự án. Export mode 2 lấy `Project.documentLanguage` (mặc định `en`); rev 2 luôn tiếng Anh vì nhãn "chưa nối với field nào của project" | `export.controller.ts:exportWord`; `labels.ts:writerOptionsFor`; `document-language.ts:documentLanguageOf` | Dự án `vi` xuất tiêu đề tiếng Việt: chương ("Yêu cầu người dùng"…), mục cố định ("Tác nhân", "Sơ đồ use case"…), bìa "Đặc tả yêu cầu phần mềm", "I. Lịch sử thay đổi", footer "Trang x / y". Template FPT là tiếng Anh. |
| 2 | Nội dung dựng từ bản xem đã dịch | `assemble.service.ts:buildDocumentParts` → `translateSpine`; `section-renderer.ts` nhận `ctx.canonical` | Nội dung Spine (tiếng Anh) được thay bằng bản dịch đã lưu; đơn vị chưa dịch giữ tiếng Anh nên có thể lẫn ngôn ngữ. Số hiệu, thứ tự, trạng thái vẫn tính trên Spine gốc. |
| 3 | Sơ đồ theo ngôn ngữ | `assemble.service.ts:loadDocumentImages`, `LOCALIZED_IMAGE_BUDGET_MS = 8000` | PNG sơ đồ vẽ lại theo nhãn đã dịch; quá 8 giây thì dùng ảnh gốc. Cùng một tài liệu có thể chứa sơ đồ tiếng Anh và tiếng Việt. |
| 4 | Bản dịch không qua cache | `assemble.service.ts:getTranslatedDraftDocument` | Không đổi cấu trúc output |
| 5 | Logic chọn dòng quyết trên chữ gốc | `section-renderer.ts:directActors`, `dataOf`, `ruleStatements`, `keepWhere`, `flowTitle` | Cùng số dòng như bản tiếng Anh; không đổi cột |
| 6 | Kiểm consistency S-8.4 chỉ trên chữ gốc | `assemble.service.ts:buildDocumentParts` (`checked`) | Không đổi output |
| 7 | Không đổi | `section-registry.ts:FIXED_DEFS`, `docx-writer.ts` | Mọi khác biệt về heading level, bìa, bảng, footer ở rev 2 vẫn còn |

`e9cbc39` (import SRS mẫu IEEE) chỉ chạm đường mode 1/`layout-sections.ts`, không áp cho layout FPT mặc định.

## FPT-COMPARISON — Đối chiếu template với Export Word hiện tại

**Clause:** toàn bộ II + phần đầu · **Evidence:** `project_observation` đối chiếu nguồn `verified_supplied` · **Locator:** cột Template ghi P/T; cột Code ghi `file:hàm` tại `f50b125` · **Nguồn:** file DOCX người dùng cấp + repo backend nội bộ

Phạm vi: Mode 2 (layout FPT mặc định). Mode 1 (import) dùng `TemplateProfile.layout` (`layout-sections.ts`) nên các dòng dưới không tự áp cho file import. Cột "Rev 2" ghi: **=** giữ nguyên, **Mới** là phát hiện mới ở rev 3, **Đổi** là code đã đổi, **Sửa** là sửa nhận định sai của rev 2.

| Nội dung | Template (locator) | Export hiện tại (`file:hàm`) | Rev 2 | Đánh giá |
| --- | --- | --- | --- | --- |
| Bìa | Logo FPTU, "CAPSTONE PROJECT REPORT", "Report 3 – …", địa điểm/ngày; không có tên dự án (P002–P021) | Tên dự án 24 pt đậm, "Software Requirement Specification", "Version: …", "Date: …", banner DRAFT/BASELINE; không logo, không "Report 3" (`docx-writer.ts:coverPage`) | = | Cần quyết định đóng gói bìa khi nộp |
| Mục lục | Content control, `TOCHeading`, field TOC 1–3 có hyperlink | Đoạn style Title "Table of Contents" + `TableOfContents` 1–3 hyperlink, `updateFields` (`docx-writer.ts:writeDocx`) | Mới | Cùng phạm vi 1–3 nhưng do heading export lệch một cấp (dòng dưới), TOC export sâu hơn: gồm 2.2.1, 3.1.x, 3.x.y |
| Ngắt trang | Trước I, trước II, sau chương 1, sau chương 3 (P022, P025, P032, P082) | Sau bìa, sau TOC, sau §I + phụ lục cờ; không ngắt giữa chương (`docx-writer.ts:writeDocx`) | Mới | Khác bố cục trang, không ảnh hưởng nội dung |
| I. Record of Changes | T01: Date, A\*/M,D, In charge, Change Description; chú giải sau bảng | 5 cột Date, Version, A\*, M, D, In charge, Change Description; chú giải in nghiêng trước bảng; Heading1 "I. Record of Changes" (`docx-writer.ts:recordOfChanges`, `labels.ts:WRITER_TEXT.rocHeader`); dòng gộp theo ngày + giai đoạn, version `v0.x`/`v1.0` (`section-renderer.ts:buildRecordOfChanges`) | = | Cột Version là mở rộng |
| Phụ lục cờ | Không có | "Working Draft Status", bảng cờ đỏ/waive, ngay sau §I, trước chương 1 (`docx-writer.ts:flagsAppendix`) | = | Workflow FlintFlow; cần ẩn hay giữ khi nộp |
| Wrapper II | P026 Heading1 "II. Software Requirement Specification" | Không có. `chapterSection` chỉ sinh nhóm "2"…"5" (`assemble.service.ts:buildSections`, `labels.ts:GROUP_HEADINGS`) | = | Thiếu một tầng so với template |
| Cấp heading | Chương Heading2, mục 2.1 Heading3, 2.2.1 Heading4 (FPT-II-OUTLINE) | Chương level 1 → Heading1; 2.1/3.1/4.1/5.x/feature level 2 → Heading2; 2.2.1/3.1.x/4.2.x/function level 3 → Heading3; khung con function level 4 (`section-registry.ts:FIXED_DEFS`, `assemble.service.ts:chapterSection`, `docx-writer.ts:headingLevel`) | Mới (rev 2 chỉ nói chương ở Heading1) | Toàn bộ lệch lên một cấp, do thiếu wrapper II |
| Định dạng số | "1. Product Overview" (chương có dấu chấm), "2.1 Actors" | `${number} ${heading}` → "1 Product Overview", "2 User Requirements" (`docx-writer.ts:renderSection`) | Mới | Khác nhỏ ở dấu chấm sau số chương |
| Ngôn ngữ tiêu đề | Tiếng Anh cố định | `en` mặc định; dự án `vi`: `VI_SECTION_TITLES`, `GROUP_HEADINGS.vi`, `VI_FPT_LABELS` (`labels.ts`, `section-renderer.ts:renderSection`) | Đổi | Bản `vi` khác tên mục của template; cần xác nhận GVHD chấp nhận SRS tiếng Việt |
| 1 Product Overview | Giới thiệu + context diagram (P028–P031) | Vision; Heading2 không số "Goals", "Release 1.0 Scope" (+ Heading3 "In Scope"/"Out of Scope"), "High-Level Business Rules", "External Systems"; context diagram cuối mục, caption "Figure — System Context Diagram" (`section-renderer.ts:productOverview`) | Mới (chi tiết) | Đủ nội dung yêu cầu, có thêm. Heading con không số lọt vào TOC cấp 2 |
| 2.1 Actors | T02: #, Actor, Description | ID, Name, Kind, Description; Kind `human/system/time` (`section-renderer.ts:actorsTable`) | = | Đổi nhãn, thêm Kind, không có cột # |
| 2.2.1 tiêu đề | "Diagram(s)" | "Use Case Diagram" (`section-registry.ts:FIXED_DEFS`); nhiều hình thì caption "Use Case Diagram (i/n)" (`section-renderer.ts:useCaseDiagram`) | = | Cùng mục đích; hỗ trợ nhiều sơ đồ như template cho phép |
| 2.2.2 | T03: ID, Use Case, Actors, Use Case Description | 4 cột đó + Includes, Extends; thứ tự theo mảng Spine (`section-renderer.ts:useCaseTable`; asset `usecase-table-template.md` ghi "in id order") | = / Mới | 4 cột khớp nguyên văn. Asset nói theo id nhưng renderer không sắp xếp: lệch nhỏ giữa tài liệu và code |
| 3.1 nhóm | P050–P051 | Heading2 "System Functional Overview" không nội dung (`assemble.service.ts:chapterSection`) | = | Khớp (template cũng không có nội dung ngoài hướng dẫn) |
| 3.1.1 | Sơ đồ khối, pop-up oval, tab | Ảnh PlantUML; có thể tách theo actor, caption "Screens flow for <actor>" (`section-renderer.ts:screensFlow`, `flowTitle`) | = | Khác ký pháp hình; nội dung tương đương |
| 3.1.2 | T04: #, Feature, Screen, Description | Feature ("3.2 Tên feature"), Screen, Description (`section-renderer.ts:screenDescriptions`) | = | Thiếu cột #; cột Feature có kèm số mục (tốt cho truy vết) |
| 3.1.3 | T05: hàng màn + hàng hoạt động, cột role, ô "X" | Hàng = màn, cột = role, ô = danh sách action (`view, create…`) hoặc "—"; chưa có role nào được phân quyền thì bảng Role/Actor (`section-renderer.ts:screenAuthorization`) | = / Mới | Không tách hàng hoạt động; `Permission` chỉ có `action` tự do, không có chiều phạm vi All/Own/Managed (`spine.types.ts:Permission`) |
| 3.1.4 | T06: #, Feature, System Function, Description | Mode 2: Name, Trigger, Description; nhánh `ctx.nonScreenFunctionIds` (chỉ mode 1 import, FLF-252) mới in 4 cột như mẫu (`section-renderer.ts:nonScreenFunctions`) | = | Mode 2 thiếu cột Feature, #; có thêm Trigger |
| 3.1.5 | ERD + T07: #, Entity, Description | Ảnh ERD + bảng Entity, Description, Relations ("has Order (optional)") (`section-renderer.ts:erd`) | = | Thiếu #, thêm Relations |
| 3.x feature | Heading3 "3.2 <<Feature Name 1>>", không nội dung | Level 2, số `3.(2+order)`, không nội dung (`assemble.service.ts:buildNumberMap`, `section-renderer.ts:featureOverview`) | = | Khớp số; cấp heading lệch như trên |
| 3.x.y function | Heading4; 4 nhóm là bullet (P072–P076) | Level 3; 4 nhóm là heading level 4 "Function trigger", "Function description", "Screen layout", "Function details"; mỗi nhóm có bullet đậm (Navigation path, Timing frequency; Actors / Roles, Purpose, Interface, Data processing; Data, Validation, Business rules, Normal case, Abnormal case); mục rỗng in "N/A"; ảnh layout chỉ cho `primary_function_id` của màn (`section-renderer.ts:fptFunctionDetail`, `subItems`) | Sửa | Đủ 4 nhóm. Rev 2 ghi "thiếu dùng N/A" là sai: code đã in "N/A" từ trước rev 2 |
| Function không feature | Không có | Mục "Unassigned Functions" số `3.(2+số feature+1)` (`assemble.service.ts:buildNumberMap`, `unassignedFunctionsSection`) | Mới | Chỉ xuất hiện khi dữ liệu lỗi |
| 4.1 | Văn xuôi, không bảng | Bullet list NFR `interface`, dạng "statement (metric: threshold)" (`section-renderer.ts:nfrList`) | Mới | Phù hợp |
| 4.2.1–4.2.3 | Văn xuôi + gợi ý chỉ tiêu | Bảng Statement, Metric, Threshold, Priority (`section-renderer.ts:nfrTable`) | Mới | Phù hợp tinh thần đo được |
| 4.2.4 | "4.2.4 …" | "Domain-Specific Attributes", `required: false` (`section-registry.ts:FIXED_DEFS`) | = | Lựa chọn tên của nhóm |
| 5.1 | T08: ID, Rule Definition | Bullet list statement của BR `tier=detail`, không in ID dù `BusinessRule.id` có (`section-renderer.ts:businessRulesDetail`) | = / Mới | Thiếu mã BR ở mục chính. BR `tier=high` in ở §1 |
| 5.2 | Không bảng | Bảng Category, Statement (`section-renderer.ts:commonRequirements`) | Mới | Phù hợp |
| 5.3 | T09: #, Message code, Message Type, Context, Content | Code, Text, Functions (`section-renderer.ts:messagesList`) | Sửa | Rev 2 nói chưa kết luận Spine có dữ liệu Type/Context hay không. Đã kiểm `spine.types.ts:Message` = `{id, code, text, function_ids}`: Spine **không có** field Type/Context |
| 5.4 | Chỉ tiêu đề | Bảng Kind, Statement (risk/assumption/open_question/technical_risk) (`section-renderer.ts:otherRequirements`) | Mới | Phù hợp |
| 5.5 Glossary | Không có | Bảng Term, Native, Definition; `required: true, derived: true` (`section-registry.ts:FIXED_DEFS`, `section-renderer.ts:glossaryTable`) | = | Mở rộng FlintFlow |
| Caption hình | Không có caption | Caption nghiêng 10 pt dưới mỗi ảnh (`docx-writer.ts:image`) | Mới | Mở rộng |
| Bảng | Header nền `FFE8E1`, viền auto, độ rộng cột theo nội dung | Header nền `D9D9D9` chữ đậm, viền `808080`, cột chia đều 9026 twip, header lặp mỗi trang (`docx-writer.ts:table`) | Mới | Khác thẩm mỹ; cột chia đều làm cột # hoặc ID rộng bằng cột mô tả |
| Font/lề | Calibri 11 pt; H1 16/H2 13/H3 12/H4 11 pt; lề phải 1416 | Times New Roman 12 pt; H1 16, H2 14, H3 13, H4 12 (FPT) pt; lề 1440 bốn phía (`docx-writer.ts:writeDocx`) | = | Khác file nguồn |
| Header/footer | Không header; footer phải "n \| Page" | Header phải "<project> - SRS <version>" 9 pt xám (+ watermark DRAFT); footer giữa "Page x / y" (`docx-writer.ts:pageHeader`, `pageFooter`) | = | Khác file nguồn |
| Stale/awaiting | Không có | Ghi chú [STALE]/[AWAITING RE-ACCEPT], nền `FFF2CC` (`docx-writer.ts:renderSection`) | = | Workflow FlintFlow |

Kết luận: các nhóm nội dung chính của template đều có trong export. Khác biệt lớn nhất là (1) không có wrapper "II" nên mọi heading lệch một cấp, (2) bìa và Record of Changes khác hình thức, (3) một số cột bảng mẫu bị đổi/thiếu (#, Feature ở 3.1.4, ID BR, Message Type/Context), (4) từ FLF-265 bản xuất có thể là tiếng Việt. Các khác biệt hình thức cần quyết định cách nộp, không tự động là lỗi nội dung. Thiếu Type/Context của message và phạm vi dữ liệu của permission là thiếu ở mô hình dữ liệu (Spine), không chỉ ở writer.

## FPT-GLOSSARY — Thuật ngữ của template

**Clause:** — · **Evidence:** `verified_supplied` (diễn giải từ nội dung template; dòng ghi "nhóm" là diễn giải của nhóm) · **Locator:** cột Locator · **Nguồn:** file DOCX người dùng cấp

| Thuật ngữ | Diễn giải | Locator |
| --- | --- | --- |
| Record of Changes | Bảng lịch sử thay đổi tài liệu (ngày, A/M/D, người phụ trách, mô tả) | P023, T01 |
| A / M / D | Added (thêm) / Modified (sửa) / Deleted (xóa) | P024 |
| Product Overview | Mô tả tổng quan sản phẩm kèm context diagram | P027–P028 |
| Context diagram (sơ đồ ngữ cảnh) | Sơ đồ ranh giới hệ thống và kết nối với mọi thứ bên ngoài | P028 |
| External entity / Terminator (thực thể ngoài) | Phần mềm, phần cứng, con người, hệ thống khác ngoài ranh giới, giao tiếp với hệ thống | P028 |
| Release | Đợt phát hành; ví dụ dùng release 1.0 và nói hệ thống phát triển qua nhiều release | P029 |
| Actor (tác nhân) | Người, đôi khi là phần mềm khác hoặc thiết bị, tương tác với hệ thống để thực hiện use case | P035 |
| Use Case (UC) | Chuỗi tương tác giữa hệ thống và actor ngoài, đem lại kết quả có giá trị; tên dạng động từ + đối tượng | P042 |
| UC diagram | Sơ đồ quan hệ actor–UC và UC–UC; được phép nhiều sơ đồ | P044 |
| Feature (tính năng) | Nhóm chức năng; là mục cấp 2 của chương 3 (3.2, 3.3…), cột Feature trong T04/T06 | P069, T04, T06 |
| Function (chức năng) | Đơn vị đặc tả chi tiết dưới feature (3.x.y); có thể là screen function hoặc non-screen function | P070–P071 |
| Screen (màn hình) | Màn giao diện trong Screens Flow; có màn thường, pop-up, màn nhiều tab | P053, T04 |
| Screens Flow | Sơ đồ màn và quan hệ điều hướng giữa màn | P053 |
| Pop-up screen | Màn bật lên, ký hiệu oval trong sơ đồ (vd Import Order) | P053 |
| Multiple information tab screen | Màn có nhiều tab thông tin (vd Order Details) | P053 |
| Screen Activity | Hoạt động trên màn được phân quyền riêng (vd Query Own Data, Add New Data) | P059, T05 |
| Role (vai trò) | Vai trò người dùng hệ thống, là cột của bảng phân quyền | P059, T05 |
| Screen Authorization | Phân quyền role tới feature/màn/hoạt động | P059 |
| All / Own / Managed data | (nhóm) Phạm vi dữ liệu: toàn bộ / của chính mình / do mình quản lý | T05 |
| Non-screen function | Chức năng không màn: batch/cron job, service, API… | P062 |
| System Function | Tên cột chức năng hệ thống trong bảng non-screen | T06 |
| ERD | Entity Relationship Diagram, sơ đồ thực thể và quan hệ | P065 |
| Entity (thực thể) | Đối tượng dữ liệu nghiệp vụ, mô tả ở bảng Entities Description | P067, T07 |
| Function trigger | Cách function được kích hoạt (đường điều hướng, tần suất…) | P072 |
| Function description | Actor/role, mục đích, giao diện, xử lý dữ liệu | P073 |
| Screen layout / Mock-up | Bản phác giao diện của màn | P074–P075 |
| Function details | Dữ liệu, validation, business rule, chức năng ở normal/abnormal case | P076 |
| Normal / Abnormal case | (nhóm) Luồng xử lý bình thường / khi có lỗi hoặc ngoại lệ | P076 |
| External Interfaces | Thông tin giao tiếp với người dùng, phần cứng, phần mềm/hệ thống ngoài | P085 |
| Quality Attributes | Đặc tính chất lượng yêu cầu của hệ thống | P087 |
| Availability | Tỉ lệ thời gian hệ thống sẵn sàng | P092 |
| MTBF / MTTR | Thời gian trung bình giữa hai lần hỏng / thời gian trung bình sửa | P093–P094 |
| Bugs/KLOC, bugs/function-point | Mật độ lỗi trên nghìn dòng lệnh / trên function point | P096 |
| Critical bug | Mức lỗi nghiêm trọng, phải được định nghĩa (vd mất toàn bộ dữ liệu) | P097 |
| Response time, Throughput, Capacity, Resource utilization | Chỉ tiêu hiệu năng | P100–P103 |
| Business Rule (BR) | Quy tắc nghiệp vụ hệ thống phải tuân theo, mã `BR-nn` | P109, T08 |
| Common Requirements | (nhóm) Yêu cầu dùng chung cho nhiều chức năng | P112 |
| Application Message | Thông báo hiển thị, mã `MSGnn`, có loại, ngữ cảnh, nội dung | T09 |
| Message Type | Cách/vị trí hiển thị: In line, In red under the text box, Toast message | T09 |
| Context (của message) | Điều kiện làm thông báo xuất hiện | T09 |

## FPT-POLICY — Checklist nội dung tối thiểu cho rule engine

**Clause:** — · **Evidence:** `proposed_policy` · **Locator:** cột Căn cứ · **Nguồn:** đề xuất của nhóm dựa trên các section trên

Ví dụ trong bảng là **ví dụ (nhóm tự đặt)**. Field ghi theo Spine (`spine.types.ts`). Mức: `error` chặn baseline, `warning` cần sửa, `needs_review` cần người xem. "Rule" là kiểm bằng code; "LLM" là kiểm bằng model có trích dẫn.

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| FPT-01 | §1 có đoạn giới thiệu sản phẩm nêu sản phẩm, người dùng chính, vấn đề giải quyết | Rule: `project.vision` không rỗng, ≥ 2 câu; LLM: có đủ 3 ý | error | FPT-1-PRODUCT-OVERVIEW | "FlintFlow giúp nhóm sinh viên… thay việc soạn SRS thủ công" | Chỉ có tên dự án |
| FPT-02 | §1 có context diagram đã render | Rule: tồn tại `diagrams[kind=context]` có `render_status=ok` | error | FPT-1-PRODUCT-OVERVIEW | Có hình context | Mục 1 chỉ có văn bản |
| FPT-03 | Mỗi external entity trên context có ít nhất một luồng có nhãn | Rule: actor `kind≠human` có `flows_in` hoặc `flows_out` không rỗng | warning | FPT-1-PRODUCT-OVERVIEW | Payment Gateway: in "payment result", out "payment request" | Mũi tên không nhãn |
| FPT-04 | §1 nêu phạm vi release hiện tại | Rule: `project.release_scope.in` không rỗng | warning | FPT-1-PRODUCT-OVERVIEW | In scope liệt kê 5 tính năng | Không nói phạm vi |
| FPT-05 | Mỗi actor ở §2.1 có mô tả | Rule: `actors[].description.trim()` không rỗng | error | FPT-2.1-ACTORS | "Lecturer: chấm điểm, duyệt đề tài" | Description trống như bản mẫu |
| FPT-06 | Mỗi actor tham gia ít nhất một UC | Rule: mọi `actors[].id` có trong `use_cases[].actor_ids` (trừ actor con có cha) | warning | FPT-2.1-ACTORS, FPT-2.2.1-UC-DIAGRAM | Mọi actor có UC | Actor "Guest" không có UC nào |
| FPT-07 | Không chép actor/UC ví dụ cafeteria khi brief không có | Rule: so tên với danh sách {Patron, Menu Manager, Cafeteria Staff, Meal Deliverer, Payroll System, View Menu, Order a Meal…}; khớp mà brief không nhắc ⇒ cờ | needs_review | FPT-ORIGIN, FPT-CONVENTIONS | Actor lấy từ brief | Dự án quản lý thư viện có actor "Menu Manager" |
| FPT-08 | Tên UC dạng động từ + đối tượng | Rule: token đầu thuộc danh sách động từ; LLM khi mơ hồ | warning | FPT-2.2-USE-CASES | "Submit Assignment" | "Assignment", "Login Function" |
| FPT-09 | Mọi UC xuất hiện trên ít nhất một UC diagram | Rule: UC id xuất hiện trong nguồn `diagrams[kind=usecase]` | warning | FPT-2.2.1-UC-DIAGRAM | 12 UC trên 2 sơ đồ | UC "Export Report" không có trên sơ đồ nào |
| FPT-10 | Mỗi UC có ID, tên, ≥ 1 actor, mô tả | Rule: `use_cases[]` đủ 4 trường, `actor_ids` không rỗng | error | FPT-2.2.2-UC-DESCRIPTIONS | UC03 có đủ | Mô tả rỗng |
| FPT-11 | Mô tả UC nêu ai làm gì và kết quả giá trị | LLM: tìm actor + hành động + outcome | warning | FPT-2.2-USE-CASES | "Sinh viên nộp bài và nhận xác nhận đã nộp" | "Chức năng nộp bài" |
| FPT-12 | Có screens flow và mọi màn (trừ màn vào) có đường tới | Rule: có `diagrams[kind=screen_flow]`; mọi `screens[].id` ngoài màn vào nằm trong `flow_to` của màn khác | warning | FPT-3.1.1-SCREENS-FLOW | Login → Dashboard → Detail | Màn "Settings" không có đường tới |
| FPT-13 | Pop-up và màn nhiều tab được đánh dấu | LLM: mô tả màn nói pop-up/dialog/tab mà `is_popup=false` hoặc `tabs` rỗng | needs_review | FPT-3.1.1-SCREENS-FLOW | "Confirm Delete" `is_popup=true` | Mô tả "hộp thoại xác nhận" nhưng `is_popup=false` |
| FPT-14 | Mỗi màn có feature và mô tả | Rule: `screens[].feature_id` trỏ feature tồn tại, `description` không rỗng | error | FPT-3.1.2-SCREEN-DESCRIPTIONS | Screen gắn F2, mô tả 1 câu | Mô tả trống |
| FPT-15 | Ma trận phân quyền dùng role thật và mỗi màn có ≥ 1 role | Rule: `roles[].name` không khớp `/^Role[- ]?(Name)?\d+$/i`; mỗi screen có ≥ 1 `permissions[]` | error | FPT-3.1.3-SCREEN-AUTHORIZATION | Cột Student, Lecturer, Admin | Cột "Role-Name1"; màn không role nào |
| FPT-16 | Chức năng không màn có trigger và mô tả | Rule: `functions[screen_id=null]` có `trigger` và `description` không rỗng | warning | FPT-3.1.4-NON-SCREEN-FUNCTIONS | "Gửi email nhắc hạn, chạy 8:00 hằng ngày" | Trigger trống |
| FPT-17 | Có ERD và mỗi entity có mô tả | Rule: có `diagrams[kind=erd]` ok; `entities[].description` không rỗng | error | FPT-3.1.5-ERD | 7 entity có mô tả | Bảng entity trống mô tả như T07 |
| FPT-18 | Entity không bị cô lập | Rule: entity có `relations` hoặc được entity khác tham chiếu, hoặc `root=true` | warning | FPT-3.1.5-ERD | Order → OrderItem | Entity "Log" không có quan hệ, không đánh dấu root |
| FPT-19 | Mỗi function có luồng chính | Rule: `functions[].normal` ≥ 1 bước | error | FPT-3.2-FEATURE-FUNCTION-DETAIL | 4 bước normal | Normal rỗng, cả mục là "N/A" |
| FPT-20 | Mỗi function có ít nhất một abnormal case | Rule: `functions[].abnormal` ≥ 1 | warning | FPT-3.2-FEATURE-FUNCTION-DETAIL | "Sai mật khẩu ⇒ MSG09" | Chỉ có luồng thành công |
| FPT-21 | Màn có mock-up ở function chính | Rule: screen có `primary_function_id` và có `diagrams[kind=screen_layout]` của màn đó | warning | FPT-3.2-FEATURE-FUNCTION-DETAIL | Wireframe màn Login | Screen layout "N/A" cho màn có UI |
| FPT-22 | Không còn placeholder/hướng dẫn của template | Rule regex trên output: `<<`, `>>`, `Feature Name`, `Function Name`, `Role-Name`, `xx.xx%`, câu mở `[` chữ hướng dẫn, tiêu đề kết thúc `…` | error | FPT-CONVENTIONS | Không còn ký hiệu mẫu | "3.2 <<Feature Name 1>>" |
| FPT-23 | Tham chiếu chéo đúng số mục (non-screen là 3.1.4) | Rule: output nói non-screen + "3.1.5" ⇒ cờ; số mục lấy từ `numberOf` | warning | FPT-3.2-FEATURE-FUNCTION-DETAIL | "xem 3.1.4" | Chép câu P071 "part 3.1.5" |
| FPT-24 | Có mô tả giao tiếp cho mỗi hệ thống ngoài | Rule: số actor `kind=system` > 0 ⇒ ≥ 1 `nfrs[category=interface]`; LLM: mỗi hệ thống được nhắc | warning | FPT-4.1-EXTERNAL-INTERFACES | "Tích hợp VNPay qua HTTPS/JSON" | Có cổng thanh toán nhưng 4.1 trống |
| FPT-25 | Usability, Reliability, Performance mỗi mục có ≥ 1 yêu cầu đo được | Rule: mỗi category có NFR với `metric` và `threshold` | warning | FPT-4.2.1-USABILITY, FPT-4.2.2-RELIABILITY, FPT-4.2.3-PERFORMANCE | "Response time p95 ≤ 2 s với 100 người dùng" | "Hệ thống phải nhanh" |
| FPT-26 | Chỉ tiêu lỗi theo mức có định nghĩa critical | LLM: NFR reliability nói bug/defect rate mà không định nghĩa critical | needs_review | FPT-4.2.2-RELIABILITY | "Critical = mất dữ liệu bài nộp" | "Không quá 1 critical bug" không định nghĩa |
| FPT-27 | Business rule có mã duy nhất, mỗi rule một câu đơn nhất | Rule: `business_rules[].id` duy nhất; LLM: câu chứa nhiều quy tắc nối "và/and" | warning | FPT-5.1-BUSINESS-RULES | BR-03 một câu | Một BR gộp ba điều kiện khác nhau |
| FPT-28 | Không chép số liệu BR/message ví dụ | Rule regex: "15 minutes", "quarter hour", "payroll deduction", "40 percent", "256-bit", "asset hand-over", "Incorrrect" khi brief không có | error | FPT-5.1-BUSINESS-RULES, FPT-5.3-MESSAGES | BR theo quy chế của dự án | BR "Delivery time windows are 15 minutes" trong dự án LMS |
| FPT-29 | Mỗi message có mã duy nhất, nội dung và gắn chức năng | Rule: `messages[].code` duy nhất, `text` không rỗng, `function_ids` ≥ 1 | warning | FPT-5.3-MESSAGES | MSG04 gắn FN012 | Mã trùng; message không ai dùng |
| FPT-30 | Message có kiểu hiển thị và ngữ cảnh | LLM trên text + abnormal của function (Spine chưa có field Type/Context) | needs_review | FPT-5.3-MESSAGES, FPT-COMPARISON | "Toast: Lưu thành công" | Không biết hiện ở đâu, khi nào |

## FPT-GAPS — Chưa xác minh và cách bổ sung

**Clause:** — · **Evidence:** `pending` · **Locator:** — · **Nguồn:** —

| Hạng mục | Tình trạng | Cách bổ sung |
| --- | --- | --- |
| URL chính thức, edition của template | Chỉ có file do người dùng cấp; không có số phiên bản | Xin link trên LMS/FAP hoặc xác nhận của GVHD; ghi vào `source_url` |
| Trùng nguyên văn với tài liệu COS của Wiegers (image2, T08) | Đã xác minh tác giả/hệ ví dụ, câu P029 và ID BR với bộ COS 2002 (xem WGR-COS-PROVENANCE). Nguyên văn T08 khác bản 2002 (256-bit, regular employees, inclusive) | Đọc Appendix sample documents của *Software Requirements* 3rd ed. (index ghi Appendix C, O'Reilly ghi Appendix D) để so từng BR; so image2 với context diagram COS |
| Gợi ý 4.2.x lấy từ template RUP | Chỉ qua đoạn trích của công cụ tìm kiếm ở 2 nguồn; PDF không mở được | Tải lại PDF UHCL hoặc bản RUP gốc; so câu |
| Số trang, bố cục trang của template và của bản export | Không render được (thiếu LibreOffice/Word) | Mở bằng Word, xuất PDF cả hai, so trang/bìa/bảng/ảnh |
| Ảnh ERD | EMF render bằng Pillow trên Windows; chữ và cardinality đối chiếu với text Visio. Cardinality Meal–Order "1 : 1" theo nhãn đọc được, chưa đối chiếu shape Visio | Mở `.vsdx` bằng Visio để xác nhận |
| Chiều mũi tên context diagram (Cafeteria Staff, Payroll System) | Ảnh 608×456 px, một số mũi tên khó đọc | Không cần nếu chỉ dùng làm minh họa |
| Ý nghĩa màu nền/chữ trong screen flow mẫu | Template không giải thích | Hỏi GVHD nếu muốn dùng quy ước màu |
| Chấp nhận các mở rộng FlintFlow khi nộp (cột Version, Includes/Extends, Kind, Relations, Glossary 5.5, phụ lục cờ, watermark, tên 4.2.4) | Chưa có quyết định | Chốt với nhóm/GVHD; ghi vào policy |
| Chấp nhận SRS tiếng Việt (export `vi` từ FLF-265) | Template tiếng Anh, không nói ngôn ngữ | Hỏi GVHD |
| Wrapper "II" và lệch cấp heading | Đã xác định ở code; chưa có quyết định sửa | Tạo ticket riêng nếu cần khớp template; không sửa trong FLF-215 |
| Thiếu field Message Type/Context, phạm vi All/Own/Managed của permission, ID BR ở 5.1 | Xác nhận từ `spine.types.ts` và renderer | Đề xuất thay đổi hợp đồng Spine (PR `contract-change`) nếu cần khớp bảng mẫu |
| Snapshot test phủ đường tiếng Việt | Snapshot hiện chỉ cho tiếng Anh (`76a9854`) | Thêm snapshot cho đường `vi` nếu cần bằng chứng output |
