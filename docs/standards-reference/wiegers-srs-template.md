---
source_id: wiegers-software-requirements
title: Software Requirements, 3rd Edition (Karl Wiegers & Joy Beatty) + SRS/Use Case template và ví dụ Cafeteria Ordering System (Process Impact)
version: Sách 3rd ed. (Microsoft Press, 2013, ISBN 978-0-7356-7966-5); template công khai softwarereqs.com (docx 2022-10-30, sửa 2023-10-13); bộ mẫu COS Release 1.0 (Process Impact, 2002-11-04)
publisher: Microsoft Press (sách); Karl Wiegers / Process Impact (template và tài liệu mẫu)
source_url: https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf
checked_on: 2026-10-14
access: publisher_sample_pdf + author_public_templates + author_sample_docs_via_internet_archive
rights_status: summary_only_copyrighted_book_and_samples
revision: 3
---

# Wiegers & Beatty — SRS template, use case template và ví dụ Cafeteria Ordering System

Nguồn bổ trợ cho FLF-215. Đã đọc: (1) bản trích mẫu do nhà xuất bản phát hành cho *Software Requirements, 3rd ed.* (mục lục đầy đủ, Introduction, Chapter 6 và Index); (2) template SRS, Use Case, Review/Analysis Checklist mà Karl Wiegers công bố trên softwarereqs.com; (3) bộ tài liệu mẫu COS (Vision and Scope, Use Cases, SRS, Business Rules) do Process Impact phát hành công khai, tải lại qua Internet Archive; (4) template SRS/Use Case/Use Case Checklist của Process Impact (bản 1998–2009). Chưa đọc thân Chapter 8–11 và Appendix C của sách 3rd ed. Section nào chỉ dựa trên mục lục hoặc nguồn khác sẽ ghi rõ evidence. Sách và tài liệu mẫu có bản quyền: file này chỉ tóm tắt cấu trúc và ý chính, trích nguyên văn không quá 25 từ.

## Mục lục

- WGR-SOURCES — Nguồn, phiên bản và mức xác minh
- WGR-BOOK-MAP — Bản đồ chương liên quan trong sách 3rd ed.
- WGR-COS-PROVENANCE — Xác minh nguồn gốc ví dụ Cafeteria Ordering System
- WGR-10-SRS-TEMPLATE — Cấu trúc SRS template bản 3rd ed. / template công khai
- WGR-10-SRS-GUIDANCE — Hướng dẫn nội dung từng mục của SRS template
- WGR-SRS-TEMPLATE-LINEAGE — Ba thế hệ SRS template của Wiegers
- WGR-COS-SRS — Cấu trúc và quy ước định danh trong SRS mẫu COS
- WGR-COS-CONTEXT-USERS — Context diagram và user classes của COS
- WGR-COS-FUNCTIONAL — Feature, stimulus/response và functional requirement mẫu
- WGR-COS-NFR-INTERFACES — Interface, performance, security, quality attribute mẫu
- WGR-COS-DATA — Data dictionary, data model và state-transition mẫu
- WGR-COS-USE-CASES — Danh sách và đặc tả use case mẫu của COS
- WGR-8-USE-CASE-TEMPLATE — Use case template của Wiegers qua các phiên bản
- WGR-8-USE-CASE-GUIDANCE — Hướng dẫn viết use case trong sách và checklist
- WGR-6-USER-CLASSES — User classes (Chapter 6, bản trích của NXB)
- WGR-9-BUSINESS-RULES — Business rules taxonomy và cách ghi bảng BR
- WGR-11-REQ-CHARACTERISTICS — Đặc tính của requirement tốt
- WGR-17-REVIEW-CHECKLIST — Checklist review yêu cầu
- WGR-FPT-MAPPING — Đối chiếu Wiegers ↔ template SRS FPT Capstone
- WGR-POLICY — Check đề xuất cho rule engine
- WGR-GLOSSARY — Thuật ngữ
- WGR-GAPS — Chưa xác minh và cách bổ sung

## WGR-SOURCES — Nguồn, phiên bản và mức xác minh

**Clause:** toàn bộ nguồn · **Evidence:** `verified_public` cho các nguồn đã mở; `secondary_source` cho nguồn chỉ thấy qua kết quả tìm kiếm · **Locator:** URL từng dòng · **Nguồn:** như bảng

| # | Tài liệu | Nhà phát hành / nơi lấy | Đã đọc | Evidence |
| --- | --- | --- | --- | --- |
| S1 | *Software Requirements, 3rd ed.*, sample pages (bìa, mục lục chi tiết, Introduction, Chapter 6 "Finding the voice of the user", Index) | Pearson/Microsoft Press: [ptgmedia …/9780735679665.pdf](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf) (81 trang PDF) | Toàn bộ bản trích | `verified_public` |
| S2 | Software Requirements Specification Template.docx | Karl Wiegers, [softwarereqs.com/files](https://www.softwarereqs.com/#downloads); metadata: creator Karl Wiegers, tạo 2022-10-30, sửa 2023-10-13 | Toàn bộ | `verified_public` |
| S3 | Use Case Template.docx; Requirements Review Checklist.docx; Requirements Analysis Checklist.docx | Cùng trang S2 (tài liệu bổ trợ của *Software Requirements Essentials*, Wiegers & Hokanson, 2023) | Toàn bộ | `verified_public` |
| S4 | *Software Requirements Essentials* sample PDF (Practice #6, Figure 3.2 "rich use case specification template", có ghi nguồn Wiegers and Beatty 2013) | [softwarereqs.com/files](https://www.softwarereqs.com/files/Software%20Requirements%20Essentials%20sample.pdf) | Practice #6, Table 1.1 | `verified_public` |
| S5 | `sample_requirements_documents.zip`: COS_vision_and_scope.doc, COS_use_cases.doc, COS_SRS.doc, COS_business_rules.doc | Process Impact, `processimpact.com/process_assets/`; bản lưu [Internet Archive 2006-01-04](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip) (cùng digest tới 2011) | Toàn bộ 4 file | `verified_public` |
| S6 | Trang "goodies" của Process Impact (2005) | [Internet Archive 2005-02-25](https://web.archive.org/web/20050225083605/http://www.processimpact.com:80/goodies.shtml) | Mục Requirements Engineering | `verified_public` |
| S7 | srs_template.doc, use_case_template.doc (bản 2009), use_case_checklist.doc | Process Impact, bản lưu Internet Archive 2009 | Toàn bộ | `verified_public` |
| S8 | Mô tả Appendix "Sample requirements documents" của 3rd ed. (CliffsNotes; O'Reilly listing) | Chỉ đọc đoạn trích của công cụ tìm kiếm; trang gốc trả 403 | Đoạn trích | `secondary_source` |

Nhận diện sách: ISBN 978-0-7356-7966-5, Microsoft Press 2013. Introduction (trang in xxvii–xxviii, PDF 27–28) xác nhận companion content tại `http://aka.ms/SoftwareReq3E/files`. Link này chưa kiểm tra được. Ví dụ xuyên suốt sách là Chemical Tracking System, không phải COS.

## WGR-BOOK-MAP — Bản đồ chương liên quan trong sách 3rd ed.

**Clause:** Contents (Chapter 6, 8, 9, 10, 11, 17; Appendix C) · **Evidence:** `locator_only`, riêng Chapter 6 là `verified_public` · **Locator:** S1, mục lục trang in xi–xxiii, PDF 12–15; Index trang in 619–, PDF 63–74 · **Nguồn:** [S1](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf)

| Chương (trang in) | Mục con trong mục lục (trang) | Dùng cho FlintFlow |
| --- | --- | --- |
| 6 Finding the voice of the user (101) | User classes 102; Identifying your user classes 105; User personas 107; The product champion 109 | Actor/user class |
| 8 Understanding user requirements (143) | Use cases and user stories 144; The use case approach 147 (Use cases and usage scenarios 149; Identifying 157; Exploring 158; Validating 160; Use cases and functional requirements 161; Use case traps to avoid 163); Benefits of usage-centric requirements 164 | Use case |
| 9 Playing by the rules (167) | A business rules taxonomy 169: Facts 170; Constraints 170; Action enablers 171; Inferences 173; Computations 173; Atomic business rules 174; Documenting 175; Discovering 177; Business rules and requirements 178 | Business rule |
| 10 Documenting the requirements (181) | The SRS 183 (Labeling requirements 186; Dealing with incompleteness 188; User interfaces and the SRS 189); A SRS template 190 (mục 1–8, Appendix A, B: 192–199); Requirements specification on agile projects 199 | Khung SRS |
| 11 Writing excellent requirements (203) | Characteristics of requirement statements 204; of requirements collections 205; Guidelines for writing (perspective 207, style 208, level of detail 211, representation 212, avoiding ambiguity 213, avoiding incompleteness 216); Sample requirements, before and after 217 | Chất lượng câu yêu cầu |
| 17 Validating the requirements (329) | Reviewing requirements 332; Defect checklist 338; Testing the requirements 342; Acceptance criteria 347 | Review |
| Appendix C (575) | Index: vision and scope sample 576–580; use cases 581–583; SRS 584–594; business rules 595 | Ví dụ mẫu |

Index (PDF 63–74) ghi thêm: "use case template, 150"; preconditions/postconditions 151, 156, 158–159; normal flow 152–153; exceptions 147, 151–153, 159; include/extend relationships 155–156; facts 170; inferences 173; computations 173–174; characteristics of excellent requirements 203–207. Introduction (PDF 27) nói hai appendix cuối là troubleshooting guide và sample requirements documents.

## WGR-COS-PROVENANCE — Xác minh nguồn gốc ví dụ Cafeteria Ordering System

**Clause:** COS sample documents; FPT P029, T02–T03, T08 · **Evidence:** `verified_public` (tác giả và phát hành COS); `secondary_source` (COS trong Appendix 3rd ed.); `project_observation` (so với FPT) · **Locator:** S5 header từng file; S6 mục Requirements Engineering; FPT P029, T08 · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip), [S6](https://web.archive.org/web/20050225083605/http://www.processimpact.com:80/goodies.shtml)

**Kết luận đã xác minh:** COS là ví dụ do Karl Wiegers viết và Process Impact phát hành.
- Vision and Scope, Use Cases và SRS ghi "Prepared by Karl Wiegers, Process Impact", Version 1.0 approved, ngày 4/11/2002. Metadata cả 4 file .doc (kể cả Business Rules) ghi Author: Karl Wiegers.
- Trang goodies 2005 giới thiệu bộ "sample requirements documents" gồm vision and scope, use cases, SRS, business rules, data dictionary và analysis models cho "a small information system". Trang này cũng nói các tài liệu được giải thích chi tiết trong *Software Requirements, 2nd Edition* (2003).
- SRS COS §1.3 References tham chiếu "Wiegers, Karl. Cafeteria Ordering System Vision and Scope Document".

**Về bản 3rd ed. (chưa xác minh trực tiếp):** Index S1 xác nhận Appendix C (trang in 575) có sample documents. Đoạn trích CliffsNotes và O'Reilly (S8) mô tả appendix này dùng COS, nhưng O'Reilly ghi là "Appendix D". Có thể do cách đánh số bản điện tử; chưa mở được nội dung. Một bản COS SRS ngày 28/9/2013 ghi bản quyền Wiegers và Seilevel chỉ thấy qua kết quả tìm kiếm Scribd.

**So với template FPT (`project_observation`):**

| Nội dung FPT | Bản COS 2002 (S5) | Nhận xét |
| --- | --- | --- |
| P029 câu mẫu Product Overview | SRS §2.1 Product Perspective: gần như cùng câu (2002: "new system", "lunches"; FPT: "new software system", "meals") | Khớp nội dung; khác vài từ |
| Actor mẫu Menu Manager (T02); UC View Menu, Order a Meal với actor Patron (T03) | User classes Patron, Cafeteria Staff, Menu Manager, Meal Deliverer; danh sách UC có View Menu, Order Meal | Khớp hệ ví dụ; FPT viết "Order a Meal", 2002 viết "Order Meal" |
| T08 BR-01…BR-04, BR-11, BR-12, BR-24, BR-33, BR-86, BR-88 | COS_business_rules.doc có đúng các ID BR-1…4, 8, 11, 12, 24, 33, 35, 86, 88 | FPT bỏ BR-8, BR-35 và đổi ID sang 2 chữ số |
| BR-02 "10:00 A.M. and 2:00 P.M. … inclusive"; BR-33 "256-bit encryption"; BR-86 "regular employees" | 2002: "10:00am and 2:00pm" (không có inclusive); "128-bit"; "permanent employees" | FPT lấy từ **bản COS khác bản 2002**, có thể là bản 2013. Pending |

Hệ quả: các khẳng định "chưa xác minh" về COS trong FPT-ORIGIN có thể nâng lên: tác giả/hệ ví dụ đã xác minh; câu P029 và ID BR đã đối chiếu với bản 2002. Riêng nguyên văn BR trong T08 khớp bản 3rd ed. hay không vẫn pending.

## WGR-10-SRS-TEMPLATE — Cấu trúc SRS template bản 3rd ed. / template công khai

**Clause:** Chapter 10 "A software requirements specification template" (trang in 190–199) · **Evidence:** `locator_only` cho cấp 1 của bản 3rd ed. (mục lục S1); `verified_public` cho cấp 2 trong template công khai S2 · **Locator:** S1 Contents trang in xii–xiii (PDF 13–14); S2 toàn văn · **Nguồn:** [S1](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf), [S2](https://www.softwarereqs.com/files/Software%20Requirements%20Specification%20Template.docx)

Mục lục 3rd ed. liệt kê đúng 8 mục chính và 2 appendix. Cấp 2 lấy từ template công khai 2022–2023 (S2), do chính Wiegers phát hành. Chưa đối chiếu được với Figure 10 của sách.

| 3rd ed. (mục lục, trang in) | Template công khai S2 (cấp 2) |
| --- | --- |
| 1. Introduction (192) | 1.1 Document Purpose; 1.2 Document Conventions; 1.3 Project Scope; 1.4 References |
| 2. Overall description (193) | 2.1 Product Perspective; 2.2 User Classes and Characteristics; 2.3 Operating Environment; 2.4 Design and Implementation Constraints; 2.5 Assumptions and Dependencies |
| 3. System features (194) | 3.x System Feature x → 3.x.1 Description; 3.x.2 Stimulus/Response Sequences; 3.x.3 Functional Requirements |
| 4. Data requirements (195) | 4.1 Logical Data Model; 4.2 Data Dictionary; 4.3 Reports; 4.4 Data Acquisition, Integrity, Retention, and Disposal |
| 5. External interface requirements (196) | 5.1 User Interfaces; 5.2 Software Interfaces; 5.3 Hardware Interfaces; 5.4 Communications Interfaces |
| 6. Quality attributes (197) | 6.1 Usability; 6.2 Performance; 6.3 Security; 6.4 Safety; 6.5 [Others as relevant] |
| 7. Internationalization and localization requirements (198) | (không có cấp 2) |
| 8. [Other requirements] (199) | 8. Other Requirements |
| Appendix A: Glossary (199) | **9. Glossary** (thành chương, không còn là appendix) |
| Appendix B: Analysis models (199) | **10. Analysis Models** |

Trên trang bìa có Revision History với các cột Name, Date, Reason For Changes, Version. Mục 2 trong template công khai **chỉ có 2.1–2.5**. Cấu trúc 2.1–2.7 (có Product Features, User Documentation) thuộc template đời cũ, xem WGR-SRS-TEMPLATE-LINEAGE.

## WGR-10-SRS-GUIDANCE — Hướng dẫn nội dung từng mục của SRS template

**Clause:** placeholder text trong template S2 · **Evidence:** `verified_public` · **Locator:** S2, đoạn style `template` dưới mỗi heading · **Nguồn:** [S2](https://www.softwarereqs.com/files/Software%20Requirements%20Specification%20Template.docx)

Diễn giải các chỉ dẫn (là khuyến nghị của tác giả, không phải chuẩn bắt buộc):

| Mục | Nội dung cần có | Lưu ý của template |
| --- | --- | --- |
| 1.1 Purpose | Sản phẩm, số release/revision; các nhóm người đọc | — |
| 1.2 Conventions | Quy ước chữ, ký hiệu, định dạng ID yêu cầu | Ghi format ID nếu đánh tay |
| 1.3 Project Scope | Mô tả ngắn, liên hệ mục tiêu kinh doanh | Có vision and scope riêng thì tham chiếu; SRS của release tăng dần cần scope riêng |
| 1.4 References | Tài liệu tham chiếu đủ title, author, version, date, nơi lưu/URL | — |
| 2.1 Product Perspective | Nguồn gốc/bối cảnh: dòng sản phẩm, thay thế hệ cũ hay mới hoàn toàn | Gợi ý dùng context diagram hoặc ecosystem map |
| 2.2 User Classes | Các user class, đặc điểm, user class được ưu tiên (favored) | Có thể trỏ tới catalog user class dùng chung |
| 2.3 Operating Environment | Phần cứng, OS, vị trí người dùng/máy chủ, phần mềm phải cùng tồn tại | — |
| 2.4 Constraints | Chính sách, giới hạn phần cứng, công nghệ/ngôn ngữ bắt buộc | — |
| 2.5 Assumptions and Dependencies | Giả định (khác sự thật đã biết) và phụ thuộc yếu tố ngoài | Giả định sai có thể ảnh hưởng dự án |
| 3 System Features | Tổ chức FR theo feature | Có thể tổ chức theo use case, mode, user class, object class, hierarchy, stimulus… |
| 3.x.1 Description | Mô tả ngắn và priority High/Medium/Low | Không ghi nguyên "System Feature 1" |
| 3.x.2 Stimulus/Response | Chuỗi hành động người dùng ↔ phản hồi hệ thống | Tương ứng các bước dialog của use case |
| 3.x.3 Functional Requirements | Liệt kê FR của feature, gồm phản ứng với lỗi | Dùng "TBD" khi thiếu thông tin |
| 4.1–4.4 Data | ERD/logical data model; data dictionary (thành phần, kiểu, độ dài, định dạng, giá trị hợp lệ); report; thu thập, toàn vẹn, lưu giữ, hủy dữ liệu | Data dictionary nên là artifact riêng để tái sử dụng |
| 5.1 User Interfaces | Đặc tính logic của UI, chuẩn GUI, nút/chức năng chung, chuẩn hiển thị lỗi | Thiết kế UI chi tiết để ở UI specification riêng |
| 5.2–5.4 Interfaces | Phần mềm (tên + version, dữ liệu trao đổi, mapping), phần cứng, truyền thông (email, giao thức, mã hóa) | Ghi cả NFR của interface |
| 6.x Quality Attributes | Usability, performance, security, safety, thuộc tính khác | Viết cụ thể, định lượng, kiểm chứng được; nêu ưu tiên giữa các thuộc tính |
| 7 I18N/L10N | Tiền tệ, định dạng ngày/số/địa chỉ, ngôn ngữ, múi giờ, luật… | — |
| 8 Other | Pháp lý, cài đặt, logging/audit | Tốt hơn là thêm section riêng; bỏ nếu không cần |
| 9 Glossary | Thuật ngữ, viết tắt | Nên có glossary dùng chung cấp tổ chức |
| 10 Analysis Models | DFD, feature tree, state-transition, ERD | Tùy chọn; có thể đặt model ngay trong section liên quan |

## WGR-SRS-TEMPLATE-LINEAGE — Ba thế hệ SRS template của Wiegers

**Clause:** Process Impact srs_template.doc (bản 2009); COS SRS 2002; template S2 · **Evidence:** `verified_public` · **Locator:** S7 TOC; S5 COS_SRS TOC; S2 TOC · **Nguồn:** [S7 Internet Archive](https://web.archive.org/web/20090206113105/http://www.processimpact.com/process_assets/srs_template.doc), [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip), [S2](https://www.softwarereqs.com/#downloads)

| Phần | Process Impact shareware (bản lưu 2009) | COS SRS 2002 | 3rd ed. 2013 / S2 2023 |
| --- | --- | --- | --- |
| 1 | 1.1 Purpose; 1.2 Document Conventions; 1.3 Intended Audience and Reading Suggestions; 1.4 Project Scope; 1.5 References | 1.1 Purpose; 1.2 Project Scope and Product Features; 1.3 References | 1.1–1.4 (WGR-10-SRS-TEMPLATE) |
| 2 | **2.1 Product Perspective; 2.2 Product Features; 2.3 User Classes and Characteristics; 2.4 Operating Environment; 2.5 Design and Implementation Constraints; 2.6 User Documentation; 2.7 Assumptions and Dependencies** | 2.1–2.6 (bỏ Product Features, giữ User Documentation) | 2.1–2.5 |
| 3 | System Features: 3.x.1 Description and Priority; 3.x.2 Stimulus/Response; 3.x.3 Functional Requirements (REQ-1…) | 3.1–3.5 theo feature | 3 System Features |
| Dữ liệu | Không có chương riêng | Appendix A: Data Dictionary and Data Model | 4 Data Requirements |
| Interface | 4 External Interface Requirements | 4 | 5 |
| Chất lượng | 5 Other Nonfunctional: Performance, Safety, Security, Software Quality Attributes | 5 (giống cột 1) | 6 Quality Attributes (+ Usability) |
| I18N | — | — | 7 |
| Khác | 6 Other Requirements | — | 8 |
| Phụ lục | Appendix A Glossary; B Analysis Models; C Issues List | Appendix B Analysis Models | 3rd ed.: App. A Glossary, B Analysis models; S2: chương 9, 10 |

Ý nghĩa: yêu cầu "2.1–2.7" là template thời 1999–2009, chịu ảnh hưởng IEEE 830, không phải bản 3rd ed. Bản 3rd ed. thêm Data requirements và I18N thành chương riêng, đổi "Other Nonfunctional Requirements" thành "Quality attributes". Template 2009 có ghi chú shareware. Từ khoảng 2012 Process Impact thay file này bằng thông báo bán theo bộ (bản lưu 2018/2021).

## WGR-COS-SRS — Cấu trúc và quy ước định danh trong SRS mẫu COS

**Clause:** COS_SRS.doc toàn văn · **Evidence:** `verified_public` · **Locator:** S5/COS_SRS.doc, TOC và §1–5, App. A–B (trang 1–12 theo TOC của file) · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

SRS "Cafeteria Ordering System, Release 1.0", Version 1.0 approved. Revision History gồm 1.0 draft 1 ngày 21/10/2002 và 1.0 approved ngày 4/11/2002 "baseline following changes after inspection". §1.1 nói mọi yêu cầu mặc định là high priority và cam kết cho release 1.0, trừ khi ghi khác.

Quy ước ID theo loại (ví dụ của Wiegers, không phải chuẩn):

| Prefix | Loại | Ví dụ (diễn giải) |
| --- | --- | --- |
| OE-n | Operating environment | OE-3: truy cập từ intranet và từ nhà nếu được phép qua firewall |
| CO-n | Design/implementation constraint | CO-2: dùng Oracle chuẩn của công ty |
| UD-n | User documentation | UD-2: tutorial trực tuyến không lưu đơn thật |
| AS-n / DE-n | Assumption / Dependency | DE-1: Payroll System phải được sửa để nhận yêu cầu thanh toán |
| Order.Place.Date… | FR dạng nhãn phân cấp | Order.Place.Date.Cutoff, Order.Done.Failure |
| UI-n, SI-n(.m), CI-n | User / Software / Communications interface | SI-2.1…2.5: thao tác với Payroll System |
| PE-n, SE-n | Performance, Security | PE-1, SE-1…SE-6 |
| Availability-1, Robustness-1 | Quality attribute đặt tên theo thuộc tính | — |
| BR-n | Business rule ở tài liệu riêng | Được FR/SE tham chiếu, ví dụ "see BR-8" |

Mục không có nội dung được ghi rõ "No hardware interfaces have been identified", "No safety requirements have been identified". Feature 3.2–3.5 để "[details not provided in this example]". Mẫu này chủ ý không đầy đủ.

## WGR-COS-CONTEXT-USERS — Context diagram và user classes của COS

**Clause:** COS SRS §2.1–2.2; Appendix B Figure 1 · **Evidence:** `verified_public` (nhãn hình đọc từ text box trong .doc, không render được hình) · **Locator:** S5/COS_SRS.doc §2.1, §2.2, App. B · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

Context diagram (Figure 1, release 1.0): hệ COS ở giữa. Thực thể ngoài: Patron, Menu Manager, Cafeteria Staff, Meal Deliverer, Payroll System, Cafeteria Inventory System. Nhãn luồng gồm: meal order, meal subscription, payroll deduction registration (request), menu / menu contents, payment request, delivery request, food item orders, food item availability information, payroll deduction response, meal status update. Hình không ghi chiều từng mũi tên trong bản text đã trích, nên không gán chiều ở đây.

User classes (§2.2), diễn giải:

| User class | Đặc điểm chính |
| --- | --- |
| Patron (favored) | Nhân viên tại campus; khoảng 600 người tiềm năng, ước tính 400 dùng trung bình 4 lần/tuần; khoảng 90% đặt qua intranet; có thể đặt nhiều suất, đăng ký subscription và override theo ngày |
| Cafeteria Staff | Khoảng 20 người nhận đơn, chuẩn bị, đóng gói, in hướng dẫn giao, yêu cầu giao; cần đào tạo |
| Menu Manager | Lập/sửa menu hằng ngày, món không giao được, món đặc biệt, giá |
| Meal Deliverer | Nhận món và hướng dẫn giao; in lại hướng dẫn, xác nhận đã/không giao |

Bài học cho Actor: user class mô tả quy mô, tần suất, nơi dùng và quyền hạn. Hệ thống ngoài (Payroll, Inventory) xuất hiện trong context diagram và software interface, không nằm trong bảng user class.

## WGR-COS-FUNCTIONAL — Feature, stimulus/response và functional requirement mẫu

**Clause:** COS SRS §3.1 Order Meals · **Evidence:** `verified_public` · **Locator:** S5/COS_SRS.doc §3.1.1–3.1.3 · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

- **3.1.1 Description and Priority:** Patron đã xác thực đặt món để giao hoặc tự lấy; được hủy/sửa nếu món chưa chuẩn bị; Priority = High.
- **3.1.2 Stimulus/Response:** 3 cặp: đặt món → hệ thống hỏi chi tiết món, thanh toán, giao hàng; sửa đơn → cho sửa nếu trạng thái "Accepted"; hủy đơn → hủy nếu "Accepted".
- **3.1.3 Functional Requirements:** 37 FR nhãn phân cấp, nhóm theo Order.Place, Order.Deliver, Order.Menu, Order.Units, Order.Confirm, Order.Pay, Order.Done, Order.Previous.

Kỹ thuật minh họa trong mẫu:

| Kỹ thuật | Ví dụ |
| --- | --- |
| FR chính + FR con xử lý ngoại lệ | Order.Place.Register → Order.Place.Register.No: chưa đăng ký payroll thì cho đăng ký, chuyển sang tự lấy, hoặc thoát |
| Tham chiếu business rule thay vì chép lại | Order.Place.Date "see BR-8"; Order.Pay.Deliver chỉ ghi "See BR-11" |
| Giao dịch nguyên tử + rollback | Order.Done gồm lưu đơn "Accepted", báo Inventory, cập nhật menu/khung giờ, email Patron và Staff; Order.Done.Failure: lỗi bất kỳ bước nào thì rollback và báo lý do |
| Priority riêng cho FR thấp hơn mặc định | Order.Previous.Period/Reorder [Priority = Medium] |
| Ghi rõ phần bị lược | FR đổi/hủy đơn "not provided in this example" |

## WGR-COS-NFR-INTERFACES — Interface, performance, security, quality attribute mẫu

**Clause:** COS SRS §4–5 · **Evidence:** `verified_public` · **Locator:** S5/COS_SRS.doc §4.1–4.4, §5.1–5.4 · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

| Nhóm | Mẫu (diễn giải) | Điểm đáng học |
| --- | --- | --- |
| UI | UI-1 theo chuẩn UI nội bộ; UI-2 mỗi trang có help; UI-3 điều hướng hoàn toàn bằng bàn phím | Tham chiếu chuẩn thay vì mô tả layout |
| Software interface | SI-1 Cafeteria Inventory System (gửi số lượng, hỏi tồn kho, nhận thông báo hết món); SI-2 Payroll System (đăng ký/hủy, kiểm tra, yêu cầu thanh toán, hoàn tiền) | Mỗi hệ ngoài là 1 nhóm, liệt kê thao tác |
| Communications | CI-1/CI-2 email xác nhận đơn, báo sự cố | — |
| Performance | PE-1 400 user trong khung 8:00–10:00, phiên trung bình 8 phút; PE-3 phản hồi truy vấn ≤ 7 giây; PE-4 xác nhận ≤ 4 giây | Có tải, khung giờ, ngưỡng số |
| Security | SE-1 mã hóa theo BR-33; SE-2 bắt buộc login trừ xem menu; SE-4 chỉ Menu Manager sửa menu theo BR-24; SE-6 chỉ xem đơn của mình | Security truy vết về business rule |
| Quality | Availability-1: 99.9% từ 5:00 đến 24:00, 95% từ 0:00 đến 5:00; Robustness-1: mất kết nối thì khôi phục được đơn chưa xác nhận | Định lượng theo khung giờ |

Ngưỡng kỹ thuật (trình duyệt IE5/Netscape, modem 40KBps) là bối cảnh năm 2002, không dùng làm chuẩn hiện tại.

## WGR-COS-DATA — Data dictionary, data model và state-transition mẫu

**Clause:** COS SRS Appendix A, Appendix B Figure 2–3 · **Evidence:** `verified_public` · **Locator:** S5/COS_SRS.doc App. A–B · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

Ký pháp data dictionary trong mẫu:

| Ký hiệu | Nghĩa | Ví dụ COS |
| --- | --- | --- |
| `=` | "gồm có" / định nghĩa | `meal order = meal order number + order date + …` |
| `+` | và (thành phần tiếp theo) | `patron = patron name + employee ID + …` |
| `1:m{x}` / `0:1{x}` | lặp từ 1 tới nhiều / tùy chọn | `menu = menu date + 1:m{menu food item} + 0:1{special}` |
| `[a \| b]` | liệt kê giá trị | `meal order status = [incomplete \| accepted \| prepared \| pending delivery \| delivered \| canceled]` |
| `(x)` | tùy chọn | `(payroll deduction transaction number)` |
| `* … *` | chú thích: nghĩa, định dạng, độ dài, mặc định, ràng buộc | `employee ID`: 6 ký tự số; `meal date`: MM/DD/YYYY, không trước ngày hiện tại |

- **Figure 2 (partial data model):** Patron, Meal Order, Meal Payment, Ordered Food Item, Menu Food Item, Menu; quan hệ placing, paying, containing, choosing với bội số 1/m.
- **Figure 3 (state-transition cho meal order status):** Incomplete → Accepted (hệ thống nhận đơn hoàn chỉnh) → Prepared (Staff chuẩn bị) → Pending Delivery (Staff yêu cầu giao) → Delivered (Deliverer giao). Có các nhánh sang Canceled: Patron hủy, có/không tính tiền; Patron từ chối nhận vì sai đơn.

Lưu ý: data dictionary tham chiếu ngược về business rule (payment amount "calculated per BR-12") và về model (status "see state-transition diagram").

## WGR-COS-USE-CASES — Danh sách và đặc tả use case mẫu của COS

**Clause:** COS_use_cases.doc · **Evidence:** `verified_public` · **Locator:** S5/COS_use_cases.doc, bảng Primary Actor/Use Cases và UC 1, 5, 11 · **Nguồn:** [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

Danh sách use case theo primary actor:

| Primary Actor | Use cases |
| --- | --- |
| Patron | Order Meal; Change Meal Order; Cancel Meal Order; View Menu; Register for Payroll Deduction; Unregister for Payroll Deduction; Subscribe to Standard Meal; Modify Meal Subscription; Override Meal Subscription |
| Menu Manager | Create Menu; Modify Menu; Define Meal Special |
| Cafeteria Staff | Prepare Meal; Generate Payment Request; Request Delivery; Generate System Usage Reports |
| Meal Deliverer | Deliver Meal; Record Meal Delivery; Print Delivery Instructions |

Chỉ UC 1, 5, 11 có đặc tả đầy đủ:

| UC | Điểm chính |
| --- | --- |
| 1 Order Meal | Actors: Patron. Pre: đã login; đã đăng ký payroll deduction. Post: đơn lưu trạng thái accepted; tồn kho và năng lực giao theo khung giờ được cập nhật. Normal flow "1.0 Order a Single Meal" 12 bước xen kẽ Patron/System. Alt 1.1 nhiều suất (sau bước 4), 1.2 nhiều suất giống nhau, 1.3 món đặc biệt. Exceptions 1.0.E.1 quá giờ cutoff, 1.0.E.2 hết khung giờ giao, 1.2.E.1 không đủ số suất. Business Rules: BR-1, 2, 3, 4, 8, 11, 12, 33. Frequency: khoảng 400 user, 1 lần/ngày |
| 5 Register for Payroll Deduction | Actors: Patron, Payroll System (hệ ngoài là actor phụ). Bước 2 gọi use case Authenticate User's Identity. Includes: Authenticate User's Identity. Exceptions: xác thực sai, quá 3 lần thì log và kết thúc; không đủ điều kiện; đã đăng ký. BR-86, BR-88 |
| 11 Modify Menu | Actor: Menu Manager. Exception 11.0.E.1: chưa có menu thì hỏi tạo mới và gọi Create Menu; 11.0.E.2: ngày đã qua. Includes: Create Menu. BR-24 |

Quy ước đánh số trong mẫu: normal flow `X.0`; alternative flow `X.Y`, ghi điểm rẽ nhánh và điểm quay lại ("branch after step 4", "Return to step 2"); exception `X.Y.E.Z`, ghi bước phát sinh. Bước exception có nhánh dạng 2a/2b. Notes and Issues ghi giả định mặc định ngày và tải cao điểm. Mẫu 2002 **không** có trường Trigger dù template cùng thời có.

## WGR-8-USE-CASE-TEMPLATE — Use case template của Wiegers qua các phiên bản

**Clause:** Use Case Template (S3, S7); Essentials Figure 3.2 (S4); 3rd ed. Index "use case template, 150" · **Evidence:** `verified_public` cho S3/S4/S7; `locator_only` cho bản trong sách 3rd ed. · **Locator:** S3 toàn văn; S4 trang in 51 (Figure 3.2); S7 toàn văn; S1 Index · **Nguồn:** [S3](https://www.softwarereqs.com/files/Use%20Case%20Template.docx), [S4](https://www.softwarereqs.com/files/Software%20Requirements%20Essentials%20sample.pdf), [S7](https://web.archive.org/web/20090117084258/http://www.processimpact.com/process_assets/use_case_template.doc)

| Trường | PI 2009 (S7) | COS 2002 | Template công khai 2023 (S3) | Essentials Fig 3.2 (ghi "Wiegers and Beatty 2013") |
| --- | --- | --- | --- | --- |
| ID và Name | ID số nguyên (hoặc X.Y); Name | có | ID and Name: tên bắt đầu bằng động từ + đối tượng, thể hiện giá trị cho user | có |
| Created/Updated by, Date | 4 trường | có | Author and Date Created | — |
| Actors | Actors | Actors | Primary and Secondary Actors | Primary Actor; Secondary Actors |
| Description | có | có | lý do và kết quả, hoặc tóm tắt chuỗi hành động | có |
| Trigger | có | **không** | có; trigger báo hệ thống kiểm tra preconditions | có |
| Preconditions | đánh số | có | PRE-n; hệ thống phải kiểm tra được | có |
| Postconditions | đánh số | có | POST-n; trạng thái khi kết thúc **thành công** | có |
| Normal / Basic Flow | Normal Flow X.0 | có | Basic Flow X.0, actor xen kẽ system | Normal Flow |
| Alternative Flows | X.Y | có | X.Y, nêu điểm rẽ và điểm nhập lại | có |
| Exceptions | X.Y.E.Z | có | X.Y.EZ (vd 5.0.E2) | có |
| Includes | có | có | — | — |
| Priority | cùng thang với SRS | có | cùng thang với yêu cầu khác | có |
| Frequency of Use | có | có | — | — |
| Business Rules | có | có (liệt kê ID) | chỉ ghi ID, không chép nội dung | có |
| Special Requirements / Other Information | Special Requirements | có | Other Information: NFR, xử lý lỗi hệ thống bất ngờ, rollback | — |
| Assumptions | có | có | có | có |
| Notes and Issues | có | có | — | — |

Kèm theo template là bảng **Use Case List** gồm 2 cột Primary Actor / Use Cases. Danh sách trường mà yêu cầu FLF-215 nêu (created by, frequency of use, other info…) giống cách đặt tên của sách 3rd ed. Tuy nhiên chưa đọc trang 150 nên chưa khẳng định danh sách chính xác của bản 2013 (pending).

## WGR-8-USE-CASE-GUIDANCE — Hướng dẫn viết use case trong sách và checklist

**Clause:** Chapter 8 (locator); S3 hướng dẫn; S4 Practice #6; S7 Use Case inspection checklist · **Evidence:** `verified_public` (S3, S4, S7); `locator_only` (thân Chapter 8) · **Locator:** S4 trang in 47–52; S1 Contents/Index; S7 checklist · **Nguồn:** [S4](https://www.softwarereqs.com/files/Software%20Requirements%20Essentials%20sample.pdf), [Use case checklist (Internet Archive)](https://web.archive.org/web/20091211005548/http://www.processimpact.com/process_assets/use_case_checklist.doc)

Định nghĩa trong template S3: actor là người hoặc thực thể **ngoài** hệ thống, tương tác và thực hiện use case để đạt điều có giá trị. Các actor khác nhau thường ứng với user class/role khác nhau.

Ý chính từ Practice #6 (S4):
- Hỏi người dùng "cần **làm** gì với giải pháp" thay vì "muốn tính năng gì". Cách hỏi tập trung vào usage.
- Scenario là một chuỗi bước đạt một mục đích. Normal flow còn gọi là main flow, main success scenario hay happy path. Alternative flow vẫn thành công. Exception là điều kiện làm scenario không hoàn tất.
- Câu "I want to / I need to <do something>" thường chính là một use case. Tên use case bắt đầu bằng động từ hành động rõ ràng.
- Use case và user story đều phải được làm chi tiết thành functional requirement. Mỗi flow có thể có priority khác nhau.
- Usage-centric không phát hiện được chức năng chạy nền, ví dụ timeout hay auto logout. Cần kỹ thuật bổ sung như event-response.

Inspection Checklist for Use Case Documents (S7, Process Impact, 2002), tóm tắt 13 câu: use case là tác vụ độc lập; mục tiêu/giá trị rõ; rõ actor hưởng lợi; viết ở mức essential, không phải scenario cụ thể; không có chi tiết thiết kế/cài đặt; đủ alternative và exception; tách chuỗi hành động dùng chung; dialog rõ, đủ, không mơ hồ; mọi actor/bước đều cần thiết; khả thi; kiểm chứng được; pre/postcondition đóng khung đúng use case.

Sách 3rd ed. có mục "Use case traps to avoid" (trang in 163) và "Use cases and functional requirements" (161). Nội dung chưa đọc (pending).

## WGR-6-USER-CLASSES — User classes (Chapter 6, bản trích của NXB)

**Clause:** Chapter 6 "User classes", "Identifying your user classes" · **Evidence:** `verified_public` · **Locator:** S1 trang in 102–106 (PDF 33–37) · **Nguồn:** [S1](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf)

- Thứ bậc: user class ⊂ users ⊂ customers ⊂ stakeholders (Figure 6-1). Một người có thể thuộc nhiều user class.
- Căn cứ phân lớp: quyền/mức bảo mật, tác vụ, feature dùng, tần suất, kinh nghiệm miền/kỹ thuật, nền tảng, ngôn ngữ, tương tác trực tiếp hay gián tiếp. Phân theo địa lý/loại công ty thường là market segment, không phải user class.
- **Favored** user class được ưu tiên khi xung đột, theo mức khớp với business objectives. **Disfavored** là nhóm không được phép dùng (vd kẻ mạo danh), có thể có yêu cầu để chặn họ. Có thể chọn **ignore** một số nhóm. Các nhóm còn lại quan trọng ngang nhau.
- User class không bắt buộc là người: software agent/bot cũng là user class, bot phá hoại là disfavored. Không bỏ sót user class gián tiếp (dùng dữ liệu qua hệ khác hoặc report).
- Ghi user class vào SRS gồm đặc điểm, trách nhiệm, vị trí, quy mô, nhóm favored. Đối chiếu stakeholder profile trong vision and scope để tránh trùng lặp. Cố gắng thu gọn còn khoảng 15 user class.

## WGR-9-BUSINESS-RULES — Business rules taxonomy và cách ghi bảng BR

**Clause:** Chapter 9 §"A business rules taxonomy" (169–174); COS_business_rules.doc · **Evidence:** `locator_only` cho tên loại và trang (S1); `verified_public` cho bảng mẫu COS (S5) và định nghĩa business rule (S4 Table 1.1); `secondary_source` cho mô tả từng loại · **Locator:** S1 Contents trang in xii, Index; S4 trang in 4; S5/COS_business_rules.doc · **Nguồn:** [S1](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf), [S4](https://www.softwarereqs.com/files/Software%20Requirements%20Essentials%20sample.pdf), [S5](https://web.archive.org/web/20060104080237/http://www.processimpact.com:80/process_assets/sample_requirements_documents.zip)

Định nghĩa (S4, Table 1.1, diễn giải): business rule là chỉ thị định nghĩa hoặc giới hạn hoạt động của tổ chức. Đó có thể là policy, quy định, luật hoặc tiêu chuẩn, từ đó suy ra solution requirement để thực thi hay tuân thủ. Business rule không phải là software requirement. Nó là nguồn sinh ra requirement.

Taxonomy (tên và trang theo mục lục 3rd ed.; mô tả theo nguồn thứ cấp về phân loại von Halle mà Wiegers dùng, chưa đọc thân Chapter 9):

| Loại (trang in) | Ý nghĩa | Ví dụ COS (loại do Wiegers gán trong S5) |
| --- | --- | --- |
| Fact (170) | Phát biểu đúng về nghiệp vụ, thường về thuật ngữ, quan hệ dữ liệu | BR-1 khung giờ giao 15 phút, bắt đầu mỗi quarter-hour — *Fact* |
| Constraint (170) | Giới hạn hành động mà hệ thống hoặc người dùng được phép làm | BR-2 giờ giao, BR-3 cùng địa điểm, BR-11 giao thì trả bằng payroll, BR-24 chỉ Menu Manager sửa menu, BR-33 mã hóa — *Constraint* |
| Action enabler (171) | Khi điều kiện đúng thì kích hoạt một hành động | (không có trong bộ COS) |
| Inference (173) | Khi điều kiện đúng thì suy ra một tri thức/sự thật mới | (không có) |
| Computation (173) | Công thức hoặc thuật toán tính giá trị | BR-12 giá đơn = Σ(giá × số lượng) + thuế + phí giao ngoài vùng — *Computation* |
| Atomic business rules (174) | Viết mỗi rule ở mức không tách được nữa | — |

Bảng business rule mẫu COS có 5 cột: **ID | Rule Definition | Type of Rule | Static or Dynamic | Source**. Static là rule ít đổi. Dynamic là rule có thể đổi theo chính sách, vd BR-2, BR-8, BR-88. Source là nơi ban hành, vd Cafeteria Manager, corporate security policy, state tax code. ID không liên tục (BR-1, 2, 3, 4, 8, 11, 12, 24, 33, 35, 86, 88) vì đây là trích từ catalog rule chung, ghi "(partial)". BR-35 là placeholder "[details … would go here]". Use case, FR và security requirement chỉ tham chiếu ID rule.

## WGR-11-REQ-CHARACTERISTICS — Đặc tính của requirement tốt

**Clause:** Chapter 11 "Characteristics of excellent requirements" (203–207); Requirements Analysis Checklist · **Evidence:** `verified_public` cho danh sách trong checklist S3 (2023); `locator_only` cho bản 3rd ed. · **Locator:** S3 Requirements Analysis Checklist; S1 Contents trang in xiii · **Nguồn:** [S3](https://www.softwarereqs.com/files/Requirements%20Analysis%20Checklist.docx)

| Phạm vi | Đặc tính | Nghĩa (diễn giải) |
| --- | --- | --- |
| Từng requirement | Complete | Không thiếu thông tin cần thiết |
| | Correct | Phản ánh đúng nhu cầu stakeholder hoặc thuộc tính cần có |
| | Feasible | Làm được trong ràng buộc kỹ thuật, kinh doanh, dự án |
| | Necessary | Là thứ stakeholder thật sự cần |
| | Prioritized | Được xếp hạng tầm quan trọng/khẩn cấp |
| | Unambiguous | Mọi người đọc chỉ hiểu một nghĩa |
| | Verifiable | Có cách chứng minh đã cài đặt đúng |
| Tập requirement | Complete | Không thiếu requirement |
| | Consistent | Không mâu thuẫn nhau |
| | Modifiable | Tổ chức và gắn nhãn để dễ sửa, có lịch sử thay đổi |
| | Traceable | Liên kết được về nguồn gốc, requirement liên quan, design, code, test |

Checklist còn liệt kê điểm cần phân tích cho từng requirement: nguồn gốc/lý do, phân rã/suy ra, ngoại lệ, acceptance criteria, giả định, ràng buộc, business rule, rủi ro, khả năng tái sử dụng. Với tập requirement: lỗ hổng, xung đột, trùng lặp, phụ thuộc, biểu diễn nhiều dạng, ưu tiên, yêu cầu ngầm. Mục lục 3rd ed. dùng đúng hai nhóm "statements" và "collections". Chưa xác nhận danh sách trong sách trùng 100% với checklist 2023.

## WGR-17-REVIEW-CHECKLIST — Checklist review yêu cầu

**Clause:** Requirements Review Checklist (S3); Chapter 17 "Defect checklist" (338) · **Evidence:** `verified_public` (S3); `locator_only` (sách) · **Locator:** S3 toàn văn · **Nguồn:** [S3](https://www.softwarereqs.com/files/Requirements%20Review%20Checklist.docx)

| Nhóm | Câu hỏi chính (diễn giải) |
| --- | --- |
| Completeness | Đủ nhu cầu đã biết; thiếu thì đánh dấu TBD; thuật toán đã định nghĩa; đủ interface ngoài; có hành vi cho mọi lỗi dự kiến; đủ làm cơ sở design/test; có priority; trong scope |
| Correctness | Không xung đột/trùng; ngôn ngữ rõ, ngắn, không mơ hồ; kiểm chứng được bằng test/demo/review/analysis; thông báo lỗi rõ; là requirement chứ không phải solution/design; khả thi |
| Quality Attributes | Usability, performance, security, safety được đặc tả; thuộc tính khác được định lượng kèm trade-off; chức năng time-critical có tiêu chí thời gian; I18N; mọi quality requirement đo được |
| Organization & Traceability | Tổ chức logic; cross-reference đúng; mức chi tiết nhất quán; ID duy nhất; FR truy về nguồn (system requirement, business rule) |
| Other | Thiếu use case/process flow; use case thiếu alternative/exception; đủ business rule; thiếu visual model; đủ report specification |

## WGR-FPT-MAPPING — Đối chiếu Wiegers ↔ template SRS FPT Capstone

**Clause:** FPT II.1–II.5; Wiegers SRS template + COS · **Evidence:** `project_observation` (so sánh của nhóm dựa trên nguồn `verified_supplied` FPT và `verified_public` Wiegers) · **Locator:** [fpt-capstone-srs-template.md](fpt-capstone-srs-template.md) (FPT-1-PRODUCT-OVERVIEW, FPT-2.1-ACTORS, FPT-2.2.2-UC-DESCRIPTIONS, FPT-5.1-BUSINESS-RULES); các section WGR ở trên · **Nguồn:** file FPT do người dùng cung cấp; S2, S5

| FPT | Tương ứng Wiegers | Khác biệt / hệ quả |
| --- | --- | --- |
| 1 Product Overview + context diagram | 1.3 Project Scope + 2.1 Product Perspective; COS Figure 1 | FPT gộp scope và perspective; không có References, Conventions, Operating Environment, Constraints, Assumptions riêng |
| 2.1 Actors (#, Actor, Description) | 2.2 User Classes and Characteristics; Use Case List theo Primary Actor | FPT không có cột favored, quy mô, tần suất. Nên đưa vào Description khi có |
| 2.2.1 UC Diagram(s) | Context diagram / analysis models; sách có mục use case diagram (Index 148, 243) | — |
| 2.2.2 UC Descriptions (ID, Use Case, Actors, Use Case Description) | Use Case List + mục Description của template | FPT chỉ có 4 cột ≈ mức "brief". Không có pre/post, flows, exception, BR, priority như template Wiegers |
| 3.1.x Screens flow / Screen descriptions / Authorization | Không có mục tương đương; Wiegers để UI chi tiết ở UI specification riêng (5.1) | Phần riêng của FPT |
| 3.1.4 Non-Screen Functions | Một phần 3 System Features và 5.2 Software Interfaces | — |
| 3.1.5 ERD (+ entity) | 4.1 Logical Data Model, 4.2 Data Dictionary | FPT không yêu cầu data dictionary chi tiết như COS App. A |
| 3.2 Feature → Function (trigger, description, layout, details) | 3.x Feature: Description and Priority, Stimulus/Response, Functional Requirements | Tương đồng cấu trúc feature-centric. FPT thêm screen layout |
| 4.1 External Interfaces | 5 External Interface Requirements | — |
| 4.2.1–4.2.3 Usability, Reliability, Performance | 6 Quality Attributes (Usability, Performance, Security, Safety, others) | FPT có Reliability nhưng không có Security/Safety riêng. Gợi ý trong FPT theo RUP Supplementary Specification (xem FPT-ORIGIN), không theo Wiegers |
| 5.1 Business Rules (ID, Rule Definition) | COS BR table: ID, Rule Definition, Type, Static/Dynamic, Source | FPT bỏ 3 cột phân loại/nguồn. Dữ liệu mẫu lấy từ COS |
| 5.3 Application Messages | Không có mục tương đương | Phần riêng của FPT |
| Không có | 7 I18N/L10N; Glossary; Data acquisition/retention | FPT không có chỗ cố định cho các nội dung này |

Gợi ý (`proposed_policy`): khi AI sinh SRS theo layout FPT, có thể dùng hướng dẫn Wiegers để làm giàu nội dung **bên trong** các ô FPT. Ví dụ: ghi favored/tần suất trong Actor Description; tham chiếu BR-ID trong function details; định lượng quality attribute. Không thêm heading Wiegers vào bản nộp FPT nếu chưa có quyết định của nhóm.

## WGR-POLICY — Check đề xuất cho rule engine

**Clause:** đề xuất của nhóm · **Evidence:** `proposed_policy` · **Locator:** — · **Nguồn:** suy ra từ các section WGR nêu ở cột Căn cứ

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| WG-01 | Không chép dữ liệu ví dụ COS vào SRS dự án | Rule: so khớp từ khóa Patron, Cafeteria, Menu Manager, Payroll Deduction, BR-86… khi brief không chứa | error | WGR-COS-PROVENANCE | Actor lấy từ brief dự án | "Patron" xuất hiện trong SRS hệ quản lý thư viện |
| WG-02 | Mỗi actor/user class có mô tả vai trò, tác vụ; nên có quy mô/tần suất/quyền | LLM đọc Description | warning | WGR-6-USER-CLASSES; WGR-COS-CONTEXT-USERS | "Thủ thư: ~10 người, xử lý mượn trả hằng ngày, quyền sửa kho" | "Thủ thư: người dùng hệ thống" |
| WG-03 | Hệ thống ngoài có trong context/interface phải được mô tả như interface | Rule: actor kind=system → có mục external interface tương ứng | warning | WGR-COS-NFR-INTERFACES | Payment Gateway có SI mô tả thao tác | Có actor "Payment Gateway" nhưng không có interface |
| WG-04 | Tên use case bắt đầu bằng động từ hành động + đối tượng | Rule POS/regex + LLM | warning | WGR-8-USE-CASE-TEMPLATE | "Order Meal", "Register for Payroll Deduction" | "Meal", "Payroll" |
| WG-05 | FR/use case tham chiếu business rule bằng ID, không chép lại nội dung | Rule: phát hiện câu trùng ≥ 80% với Rule Definition | warning | WGR-9-BUSINESS-RULES | "Thanh toán theo BR-11" | Chép nguyên câu BR vào 3 FR khác nhau |
| WG-06 | Mỗi business rule có ID duy nhất và định nghĩa nguyên tử | Rule: ID trùng; LLM: câu chứa nhiều rule | error (ID trùng) / warning | WGR-9-BUSINESS-RULES | BR-03 chỉ nói một ràng buộc | Một BR gộp giờ giao, phí và thanh toán |
| WG-07 | Có thể gán loại rule (fact/constraint/action enabler/inference/computation); computation phải có công thức đầy đủ | LLM phân loại; rule: computation có toán tử | needs_review | WGR-9-BUSINESS-RULES | "Tổng = Σ giá × SL + thuế" | "Giá được tính hợp lý" |
| WG-08 | Quality attribute định lượng: ngưỡng + điều kiện đo | Rule: có số + đơn vị; LLM: có điều kiện tải/khung giờ | warning | WGR-COS-NFR-INTERFACES; WGR-10-SRS-GUIDANCE | "95% truy vấn ≤ 2 s với 400 user đồng thời" | "Hệ thống phải nhanh" |
| WG-09 | Yêu cầu về hành vi khi lỗi có trong FR/feature | LLM: tìm nhánh lỗi/rollback | warning | WGR-COS-FUNCTIONAL; WGR-17-REVIEW-CHECKLIST | "Nếu bước lưu thất bại, rollback và báo lý do" | Chỉ có luồng thành công |
| WG-10 | Thông tin chưa biết được đánh dấu TBD, không bịa | Rule: phát hiện số liệu không có trong brief; LLM | needs_review | WGR-10-SRS-GUIDANCE | "Ngưỡng availability: TBD (chờ khách hàng)" | Tự đặt "99.99%" không có căn cứ |
| WG-11 | Requirement là "cái gì", không phải thiết kế/cài đặt (trừ constraint có lý do) | LLM | warning | WGR-17-REVIEW-CHECKLIST | "Hệ thống lưu lịch sử đơn 6 tháng" | "Dùng bảng orders_history với index B-tree" |
| WG-12 | Mỗi requirement có ID duy nhất, kiểm chứng được, có priority | Rule: ID/priority; LLM: verifiable | warning | WGR-11-REQ-CHARACTERISTICS | "FR-12 [High] … ≤ 4 s" | Câu không ID, không đo được |
| WG-13 | Postcondition use case mô tả trạng thái khi thành công; precondition kiểm tra được | LLM | warning | WGR-8-USE-CASE-TEMPLATE | "POST-1: đơn lưu với trạng thái Accepted" | "POST: người dùng vui" |
| WG-14 | Exception/alternative flow ghi điểm rẽ và điểm nhập lại hoặc kết thúc | Rule: có tham chiếu bước; LLM | warning | WGR-COS-USE-CASES | "1.1 (sau bước 4) … quay lại bước 2" | "Có thể đặt nhiều món" không chỉ bước |
| WG-15 | Không gắn nhãn "chuẩn Wiegers bắt buộc" cho bố cục FPT; Wiegers là khuyến nghị | Rule trên trích dẫn evidence | needs_review | WGR-FPT-MAPPING | "Gợi ý theo Wiegers" | "Vi phạm chuẩn Wiegers 2.7" |

## WGR-GLOSSARY — Thuật ngữ

**Clause:** — · **Evidence:** theo locator từng dòng · **Locator:** cột 3 · **Nguồn:** S1–S7

| Thuật ngữ | Định nghĩa diễn giải | Locator |
| --- | --- | --- |
| User class (lớp người dùng) | Nhóm người dùng có đặc điểm/nhu cầu giống nhau; tập con của users | S1 trang in 102 |
| Favored / disfavored user class | Nhóm được ưu tiên / nhóm cần ngăn chặn | S1 trang in 103 |
| Business rule (quy tắc nghiệp vụ) | Chỉ thị định nghĩa/giới hạn hoạt động tổ chức; nguồn của requirement | S4 trang in 4 |
| Fact / Constraint / Action enabler / Inference / Computation | 5 loại business rule | S1 Contents trang in xii (trang 170–173) |
| Functional requirement | Hành vi sản phẩm thể hiện trong điều kiện xác định | S4 Table 1.1 |
| Nonfunctional requirement | Thường chỉ quality attribute requirement | S4 Table 1.1 |
| Constraint (ràng buộc) | Giới hạn áp lên requirement, thiết kế hoặc cài đặt | S4 Table 1.1 |
| Stimulus/response sequence | Cặp hành động người dùng ↔ phản hồi hệ thống của feature | S2 §3.x.2 |
| Normal / basic flow; alternative flow; exception | Luồng chính; luồng thành công khác; điều kiện làm luồng không hoàn tất | S3; S4 trang in 48–49 |
| Precondition / postcondition (PRE-n/POST-n) | Điều kiện phải đúng trước khi bắt đầu / trạng thái khi kết thúc thành công | S3 |
| TBD | Placeholder cho thông tin chưa có | S2 §3.x.3 |
| Data dictionary | Định nghĩa thành phần, kiểu, độ dài, định dạng, giá trị hợp lệ của dữ liệu | S2 §4.2; S5 App. A |
| Context diagram | Ranh giới hệ thống, thực thể ngoài và luồng trao đổi | S2 §2.1; S5 Figure 1 |

## WGR-GAPS — Chưa xác minh và cách bổ sung

**Clause:** — · **Evidence:** `pending` · **Locator:** — · **Nguồn:** —

1. **Thân Chapter 8–11 và Appendix C của sách 3rd ed.** chưa đọc. Chưa xác minh: tên subsection chính xác của Figure SRS template (vd "Purpose" hay "Document Purpose"; 3.x có Stimulus/Response hay không); danh sách trường use case template trang 150 (Frequency of Use, Other Information…); nội dung "Use case traps to avoid"; định nghĩa từng loại business rule theo lời tác giả. Cách bổ sung: mượn sách (thư viện FPTU/O'Reilly) và đọc trang 147–199, 575–596; cập nhật evidence các section liên quan.
2. **COS trong 3rd ed.:** đã có locator trang (Index) và mô tả thứ cấp (S8). Chưa xác nhận appendix letter (C theo bản in; "D" theo O'Reilly) và chưa xác nhận BR-33 "256-bit", BR-86 "regular employees" như FPT T08.
3. **Companion content** `aka.ms/SoftwareReq3E/files` chưa mở được.
4. **Hình COS** (context diagram, data model, state diagram) chỉ đọc nhãn text, chưa render. Chiều mũi tên context diagram pending.
5. **Quyền sử dụng:** sách và tài liệu mẫu có bản quyền. Template công khai không kèm điều khoản license đã đọc. Không ingest nguyên văn vào RAG khi chưa xác nhận quyền; chỉ dùng bản tóm tắt này.
6. **Template công khai S2/S3 là bản 2022–2023** cho *Software Requirements Essentials*. Dùng làm xấp xỉ bản 3rd ed. Mọi khác biệt chỉ ghi khi đã đối chiếu sách.
