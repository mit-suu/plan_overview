---
source_id: cockburn-writing-effective-use-cases
title: Writing Effective Use Cases (Alistair Cockburn) + use case template và bài viết công khai trên alistair.cockburn.us
version: Sách Addison-Wesley, copyright 2001 (phát hành 5/10/2000, ISBN 978-0-201-70225-5); bản trích "pre-publication draft #3" ngày 2000-02-21 do tác giả đăng; Basic use case template TR.96.03a v2 (1998, ghi chú 2001)
publisher: Addison-Wesley (sách); Alistair Cockburn / Humans and Technology (bản trích, template, bài viết)
source_url: https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf
checked_on: 2026-10-14
access: author_public_draft_extract_and_articles_via_internet_archive + publisher_toc
rights_status: summary_only_copyrighted_book; template_copy_allowed_with_reference
revision: 3
---

# Cockburn — Writing Effective Use Cases: goal level, scope, template và tiêu chí pass/fail

Nguồn bổ trợ cho FLF-215, dùng làm căn cứ chấm đặc tả use case do AI sinh. Đã đọc: (1) bản trích *Writing Effective Use Cases* (WEUC) "pre-publication draft #3, 2000-02-21" do Cockburn đăng trên site cũ. Bản trích gồm Reminders, Writing Process, mục lục, Chapter 1–5, phần đầu Chapter 6–22, Appendix A (UML), Appendix C (Glossary) và bảng *Pass/Fail Tests for Use Case Fields*; (2) mục lục bản in trên trang InformIT của NXB; (3) "Basic use case template", "Use cases, ten years later", "Structuring use cases with goals" trên alistair.cockburn.us (bản lưu Internet Archive 2014). Site hiện tại của tác giả trỏ về các bản lưu này. Số trang dẫn là trang của **bản nháp**, không phải bản in 2001. Bản in có thể đổi tên/thứ tự ở vài chỗ (ghi chú tại section liên quan).

## Mục lục

- CKB-SOURCES — Nguồn, phiên bản và mức xác minh
- CKB-BOOK-MAP — Cấu trúc sách (bản in) và vị trí trong bản nháp
- CKB-1-DEFINITION — Use case là gì, vị trí trong bộ requirements
- CKB-2-CONTRACT-MODEL — Actors & Goals và Stakeholders & Interests
- CKB-3-SCOPE — Functional scope và design scope
- CKB-4-ACTORS — Stakeholder, primary actor, supporting actor, SuD
- CKB-5-GOAL-LEVELS — Ba goal level có tên
- CKB-6-PRECONDITIONS-GUARANTEES — Precondition, minimal/success guarantee, trigger
- CKB-7-STEPS — Main success scenario và quy tắc viết bước
- CKB-8-EXTENSIONS — Extension condition, extension handling, đánh số
- CKB-9-10-VARIATIONS-LINKING — Technology & data variations, sub use case, extension use case
- CKB-11-FORMATS — Brief, casual, fully dressed và các format khác
- CKB-TEMPLATE-EVOLUTION — Basic template 1998 và fully dressed template 2000–2001
- CKB-PROCESS — Quy trình viết, precision level, khi nào xong
- CKB-19-MISTAKES — Lỗi thường gặp
- CKB-PASS-FAIL — 31 câu hỏi pass/fail cho các trường use case
- CKB-UML — Quan hệ với UML 2.5.1
- CKB-FPT-MAPPING — Đối chiếu bảng UC của template FPT
- CKB-POLICY — Check UCD-xx cho rule engine
- CKB-GLOSSARY — Thuật ngữ
- CKB-GAPS — Chưa xác minh và cách bổ sung

## CKB-SOURCES — Nguồn, phiên bản và mức xác minh

**Clause:** toàn bộ nguồn · **Evidence:** như bảng · **Locator:** URL từng dòng · **Nguồn:** như bảng

| # | Tài liệu | Nơi lấy | Đã đọc | Evidence |
| --- | --- | --- | --- | --- |
| C1 | WEUC, pre-publication draft #3 (2000-02-21), file `weuc0002extract.pdf` (113 trang PDF) | Site của tác giả `alistair.cockburn.us/crystal/books/weuc/`, [bản lưu Internet Archive 2003-10-02](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf). Trang "Resources for writing use cases" của tác giả gọi đây là "book excerpt" | Toàn bộ | `verified_public` (bản nháp, không phải bản in) |
| C2 | Mục lục bản in WEUC | [InformIT (Pearson)](https://www.informit.com/store/writing-effective-use-cases-9780201702255) | Mục lục, thông tin xuất bản | `verified_public` (chỉ mục lục) |
| C3 | "Basic use case template", HaT TR.96.03a, v1 26/4/1996, v2 26/10/1998, ghi chú 2001 và 2008 | [Bản lưu 2014](https://web.archive.org/web/20140330001816/http://alistair.cockburn.us/Basic+use+case+template) | Toàn bộ | `verified_public` |
| C4 | "Use cases, ten years later" (STQE magazine, 3–4/2002) | [Bản lưu 2014](https://web.archive.org/web/20140330001821/http://alistair.cockburn.us/Use+cases,+ten+years+later) | Toàn bộ | `verified_public` |
| C5 | "Structuring use cases with goals" (HaT TR 1995.01; JOOP 9–10 và 11–12/1997) | [Bản lưu 2014](https://web.archive.org/web/20140329202915/http://alistair.cockburn.us/Structuring+use+cases+with+goals) | Phần đầu đến Problem 3 | `verified_public` |
| C6 | "Use case fundamentals": bản tóm tắt do một độc giả (Peter) viết, đăng trên site Cockburn | [Bản lưu 2014](https://web.archive.org/web/20140428055841/http://alistair.cockburn.us/Use+case+fundamentals) | Toàn bộ | `secondary_source` |
| C7 | Bản chép "Guidelines for Writing Use Cases" và Pass/Fail tests từ sách in, ghi "used with permission"; trang "Use case writing guidelines" của Cockburn dẫn link | John M. Battista, [bản lưu 2010](https://web.archive.org/web/20100927192928/http://www.johnmichaelbattista.me:80/software-engineering/use-cases) | Toàn bộ | `secondary_source` (đối chiếu với C1) |

Bản quyền: C3 cho phép sao chép, phân phối nếu dẫn nguồn và cho phép dùng/biến đổi template trong dự án. Sách C1/C2 có bản quyền nên chỉ tóm tắt.

## CKB-BOOK-MAP — Cấu trúc sách (bản in) và vị trí trong bản nháp

**Clause:** Contents · **Evidence:** `verified_public` (mục lục C2, C1) · **Locator:** C2; C1 PDF 7–19 · **Nguồn:** [C2](https://www.informit.com/store/writing-effective-use-cases-9780201702255), [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

| Phần (bản in) | Chương | Nội dung trong bản nháp C1 |
| --- | --- | --- |
| — | 1 Introduction | Đầy đủ (trang nháp 15–31) |
| Part I The Use Case Body Parts | 2 Contract for Behavior; 3 Scope; 4 Stakeholders and Actors; 5 Three Named Goal Levels; 6 Preconditions, Triggers, and Guarantees; 7 Scenarios and Steps (Guideline 1–10); 8 Extensions; 9 Technology and Data Variations; 10 Linking Use Cases; 11 Use Case Formats | Ch.2–5 phần lớn đầy đủ; Ch.6–9 chỉ đoạn mở đầu; Ch.10 có 10.1–10.2; Ch.11 có fully dressed template |
| Part II Frequently Discussed Topics | 12 When Are We Done; 13 Scaling Up; 14 CRUD and Parameterized Use Cases; 15 Business Process Modeling; 16 The Missing Requirements; 17 Use Cases in the Overall Process; 18 Use Case Briefs and XP; 19 Mistakes Fixed | Đoạn mở đầu từng chương |
| Part III Reminders for the Busy | Reminder 1–26 (bản in chia 3 chương) | Chỉ tên reminder; trang tóm tắt Reminders ở đầu sách |
| Appendices | A Use Cases in UML; B Answers; C Glossary; D Readings | A, C, D có nội dung |

Khác biệt nháp ↔ bản in: bản in đặt tên Chapter 14 là "CRUD and Parameterized Use Cases" (nháp: "Two Special Use Cases"). Bản in có thêm mục "Actors versus Roles", "Raising and Lowering Goal Levels", "Nuts and Bolts Use Cases". Số use case mẫu khác: template fully dressed là Use Case 24 trong mục lục, nhưng là Use Case 7 trong thân bản trích.

## CKB-1-DEFINITION — Use case là gì, vị trí trong bộ requirements

**Clause:** Ch.1 §1.1, §1.3 · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 15–16, 26–27 (PDF 21–22, 32–33); C5 "Problem (1)" · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C5](https://web.archive.org/web/20140329202915/http://alistair.cockburn.us/Structuring+use+cases+with+goals)

- Định nghĩa (C1 §1.1): use case "captures a contract between the stakeholders of a system about its behavior". Nó mô tả hành vi của hệ thống khi đáp ứng yêu cầu của **primary actor**, người khởi tạo tương tác để đạt mục tiêu, trong khi hệ thống bảo vệ lợi ích của mọi stakeholder. Use case gom các scenario khác nhau tùy điều kiện.
- C5 (1995) có định nghĩa hai mệnh đề chặn biên: (1) mọi tương tác liên quan cùng một mục tiêu; (2) bắt đầu từ sự kiện kích hoạt, kết thúc khi mục tiêu được giao hoặc bị bỏ **và** hệ thống hoàn tất trách nhiệm của mình (vd ghi log).
- Use case **về bản chất là văn bản**. Có thể dùng flowchart, sequence chart, Petri net…, nhưng văn bản đơn giản thường là lựa chọn tốt nhất vì người đọc thường không được đào tạo chuyên môn.
- Dùng cho nhiều phạm vi: quy trình kinh doanh (SuD là tổ chức), yêu cầu phần mềm (SuD là chương trình), thiết kế thành phần.
- **Use case chỉ là "chương 3"** của requirements. Theo "plausible requirements file outline" (rút gọn từ template Robertson), use case chỉ chứa yêu cầu hành vi. Glossary, business rule, performance, interface, data format, yêu cầu quy trình, vấn đề con người/pháp lý cần chương riêng. Tác giả ước lượng use case chiếm khoảng 1/3 tổng số requirements.

Outline gợi ý (C1 trang nháp 26–27): 1 Purpose and scope (mục tiêu, stakeholders, in/out scope); 2 Glossary; 3 Use cases (primary actor và mục tiêu, business use case, system use case); 4 Technology; 5 Other requirements (process, business rules, performance, operations/security/documentation, usability, maintenance/portability, unresolved); 6 Human backup, legal, political, organizational issues.

## CKB-2-CONTRACT-MODEL — Actors & Goals và Stakeholders & Interests

**Clause:** Ch.2 §2.1–2.3; C4 "Structuring Use Cases with Goals", "Including Stakeholders and Interests" · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 34–43 theo mục lục (thân Ch.2 trong bản trích: PDF 39–49); C4 Act 2 · **Nguồn:** [C4](https://web.archive.org/web/20140330001821/http://alistair.cockburn.us/Use+cases,+ten+years+later), [C5](https://web.archive.org/web/20140329202915/http://alistair.cockburn.us/Structuring+use+cases+with+goals)

**Actors & Goals (1994–1995):**
- Một actor có **goal**, gọi tới **responsibility** của actor khác (thường là hệ thống). Mỗi action là kích hoạt một tương tác.
- **Goal có thể thất bại.** Vì vậy use case có 2 phần: chuỗi hành động khi mọi thứ thuận lợi, và các chuỗi ngắn mô tả khi goal/subgoal thất bại.
- Tương tác có thể đơn (một message) hoặc ghép (chuỗi tương tác). Scenario là chuỗi không rẽ nhánh. Use case là tập scenario cùng một goal. Hình "striped trousers": thắt lưng là goal, mỗi sọc là một scenario, một ống thành công và một ống thất bại.
- Mỗi bước là một subgoal, có thể là use case cấp thấp hơn. Mô hình đệ quy này ngăn "bùng nổ scenario".

**Stakeholders & Interests (bổ sung 1997, chính thức trong sách):**
- Hệ thống thực thi một **hợp đồng giữa các stakeholder**. Mọi hành động của hệ thống nhằm bảo vệ hoặc thúc đẩy lợi ích của một stakeholder.
- Primary actor chỉ là một stakeholder. Còn có tổ chức sở hữu hệ thống, cơ quan quản lý và những bên không có mặt khi chạy hệ thống.
- Mô hình này giải thích vì sao use case ghi cả hành vi không thấy từ ngoài: kiểm tra số dư, ghi log, validate theo business rule. Mỗi hành vi đó bảo vệ lợi ích của ai đó.
- Kinh nghiệm được kể lại: liệt kê stakeholder và interests sớm giúp phát hiện các yêu cầu mà nếu bỏ sót sẽ thành change request sau khi giao.

## CKB-3-SCOPE — Functional scope và design scope

**Clause:** Ch.3 · **Evidence:** `verified_public` (C1); `secondary_source` cho biến thể 4 scope của C6 · **Locator:** C1 trang nháp 44–51 (PDF 50–57); Glossary trang nháp 237 · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C6](https://web.archive.org/web/20140428055841/http://alistair.cockburn.us/Use+case+fundamentals)

**Scope** là phạm vi những gì ta thiết kế, khác với thứ đã có sẵn hoặc do người khác thiết kế.

*Functional scope* là các dịch vụ hệ thống cung cấp. Ba công cụ:

| Công cụ | Cách làm |
| --- | --- |
| In/Out list (theo Rob Thomsett) | Bảng chủ đề × In/Out; dùng từ đầu và cập nhật liên tục để chặn tranh luận lan man và scope creep |
| Actor-Goal list | 3 cột: primary actor, goal mức task, priority/release dự kiến. Có thể thêm trigger, business priority, độ phức tạp. Là điểm thương lượng đầu tiên giữa user, sponsor, dev |
| Use case brief | 2–6 câu nêu hoạt động và thất bại quan trọng nhất; đặt trong bảng cạnh actor-goal list hoặc làm bản nháp đầu của use case; dùng để ước lượng độ phức tạp |

Tác giả nhận xét: use case diagram của UML có giá trị chính như một **actor-goal list dạng hình**.

*Design scope* là ranh giới hệ thống phần cứng/phần mềm mà ta phải thiết kế. Thiết bị/hệ thống có sẵn mà ta chỉ **dùng** thì nằm ngoài scope và là supporting actor. Ví dụ trong sách: hệ thống in hóa đơn hiện có. Hiểu sai scope có thể làm sai chi phí gấp đôi. Vì vậy **mỗi use case phải ghi rõ design scope bằng tên cụ thể**:

| Scope | Ý nghĩa | Biểu tượng (tùy chọn) |
| --- | --- | --- |
| Enterprise / organization (ghi tên tổ chức, vd MyInsCo) | Hành vi của cả tổ chức khi đáp ứng goal. Business use case viết ở scope này | Tòa nhà: xám = black-box, trắng = white-box |
| System (ghi tên hệ thống) | Đúng phần cứng/phần mềm phải xây; mọi thứ khác ở ngoài | Hộp: xám/trắng |
| Subsystem / component (ghi tên) | Mở hệ thống ra để nói về một phần | Bu-lông ("nuts and bolts") |

- **Black-box** use case không nhắc thành phần bên trong SuD; thường dùng cho yêu cầu hệ thống. **White-box** use case mô tả hành vi các thành phần bên trong; thường dùng cho mô hình quy trình kinh doanh.
- **Outermost use case:** với mỗi use case, nới scope ra tới mức rộng nhất mà primary actor vẫn ở ngoài, rồi viết một summary use case ở scope đó. Cả hệ thống thường chỉ có 2–5 use case như vậy, đóng vai mục lục.
- C6 (thứ cấp) trình bày 4 scope: Organization, System of systems, System, Component.

## CKB-4-ACTORS — Stakeholder, primary actor, supporting actor, SuD

**Clause:** Ch.4 §4.1–4.5; Glossary · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 53–55 (PDF 59–61), 236 (PDF 106) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

**Actor** là bất cứ thứ gì có hành vi. Theo lời một học viên, actor phải "execute an 'IF' statement". Actor có thể là người, tổ chức, chương trình hoặc hệ thống máy tính.

| Loại | Định nghĩa (diễn giải) | Ghi chú |
| --- | --- | --- |
| Stakeholder | Bên có lợi ích gắn với hành vi của use case, kể cả khi không tương tác trực tiếp | Vd chủ hệ thống, ban giám đốc, cơ quan thuế/bảo hiểm |
| Off-stage / tertiary / silent actor | Stakeholder không phải primary actor, không xuất hiện trong bước | Lợi ích thể hiện qua validate, log, hành động của hệ thống |
| Primary actor | Stakeholder yêu cầu hệ thống giao một dịch vụ, có goal với hệ thống | Thường nhưng **không luôn** là bên kích hoạt; có thể qua trung gian hoặc trigger tự động |
| Supporting (secondary) actor | Actor ngoài **cung cấp dịch vụ** cho SuD, như máy in tốc độ cao, web service, nhóm người | Cockburn chuyển sang gọi "supporting" vì "secondary" gây nhầm |
| System under discussion (SuD) | Bản thân hệ thống cũng là actor đặc biệt; được nêu ở trường Scope | Trong bước gọi bằng tên hoặc "the system" |
| Internal actor | Thành phần bên trong SuD | Chỉ xuất hiện trong white-box use case |

Lưu ý thực hành:
- Sách có mục "Why primary actors are unimportant (and important)" và Reminder 22 "Job titles sooner and later", Reminder 23 "Actors play roles" (bản trích lược nội dung). Theo tên mục, actor được hiểu là **vai trò**, không phải chức danh.
- Ngay cả use case subfunction thấp nhất vẫn có primary actor **ở ngoài** hệ thống. Đó không phải mô tả thiết kế nội bộ.
- Thứ mà ta chỉ dùng chứ không thiết kế (hệ thống in, cổng thanh toán) là supporting actor, không thuộc scope.

## CKB-5-GOAL-LEVELS — Ba goal level có tên

**Clause:** Ch.5 §5.1–5.5; Glossary "Types of use cases" · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 56–61 (PDF 62–67), 237 (PDF 107); trang Icons (PDF 3) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

Goal lồng nhau vô hạn (hợp đồng → ăn trưa → rút tiền → ATM → đưa thẻ). Vì vậy phải **ghi rõ level** trên mỗi use case.

| Level | Màu / ẩn dụ / icon | Tiêu chí | Ví dụ |
| --- | --- | --- | --- |
| Summary (very high summary) | trắng; mây (cloud) | Bước của nó cũng là goal mức summary | Vận hành hợp đồng bảo hiểm qua nhiều năm |
| Summary | trắng; diều (kite), "ngay trên mặt biển" | Gồm nhiều user goal; chạy hàng giờ đến hàng năm; cho thấy ngữ cảnh, trình tự vòng đời, làm mục lục | Get paid for car accident; Complete an online auction |
| **User goal** | xanh (blue); mặt biển (sea level), sóng | Mục tiêu primary actor muốn hoàn thành; **một người, một lần ngồi (2–20 phút)**; "coffee break test"; với nhân viên: hiệu suất có tính theo số lần làm việc này không | Register a new customer; Buy a book |
| Subfunction | chàm (indigo); cá (fish), dưới nước | Mục tiêu bộ phận cần cho user goal; chỉ viết khi cần cho dễ đọc hoặc được nhiều nơi dùng | Find a product; Find a customer; Log in; Save as a file |
| Too low | đen; con nghêu (clam) | Quá thấp, **không nên viết thành use case**; gộp vào use case gọi nó | Hit tab key |

- Ký hiệu thay thế khi không vẽ icon: thêm `+` sau tên summary use case, `!` hoặc không gì cho user-goal, `-` cho subfunction.
- Hệ thống được biện minh bằng các **user goal** nó hỗ trợ. Danh sách user goal là bản tóm tắt chức năng ngắn nhất và là cơ sở cho ưu tiên, giao hàng, ước lượng.
- "Log on" thường **không** phải user goal; "Complete an on-line auction purchase" vượt quá một lần ngồi nên là summary.
- Tìm level đúng: hỏi **"why"** để đi lên, hỏi **"how"** để đi xuống; giữ khoảng 3–10 bước mỗi use case (nơi khác ghi 3–9). Tác giả gọi đây là việc khó nhất khi viết use case.
- Bước trong use case nên thấp hơn level của use case một chút. Summary có bước trắng/xanh, user goal có bước chàm.

## CKB-6-PRECONDITIONS-GUARANTEES — Precondition, minimal/success guarantee, trigger

**Clause:** Ch.6 (tên mục); fully dressed template; Pass/Fail 10–14; Writing Process bước 7 · **Evidence:** `verified_public` (template, pass/fail, ví dụ); `locator_only` cho thân Ch.6 (bản trích bị lược) · **Locator:** C1 trang nháp 62, 68 (PDF 68, 74); bảng Pass/Fail (PDF 112) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

| Trường | Ý nghĩa trong template | Tiêu chí pass/fail liên quan |
| --- | --- | --- |
| Precondition | Trạng thái thế giới được kỳ vọng **đã có** trước khi bắt đầu | Phải là điều bắt buộc, do SuD đặt ra được, và **không bị kiểm tra lại** trong use case |
| Minimal guarantees | Lợi ích của stakeholder được bảo vệ thế nào **ở mọi lối ra**, kể cả thất bại | Nếu có, mọi lợi ích stakeholder phải được bảo vệ |
| Success guarantees | Trạng thái thế giới khi goal thành công | Mọi lợi ích stakeholder được thỏa |
| Trigger | Điều khởi động use case, có thể là sự kiện thời gian | MSS chạy từ trigger tới success guarantee |

Ví dụ trong sách (diễn giải, UC1 "Buy stocks over the web"): precondition là người dùng đã mở ứng dụng PAF; minimal guarantee là có đủ log để phát hiện sự cố và hỏi lại người dùng; success guarantee là web site xác nhận giao dịch, log và danh mục đầu tư được cập nhật.

Lịch sử tên trường: template 1998 dùng "Success End Condition" và "Failed End Condition". Sách đổi Failed End Condition thành **Minimal Guarantee**, tên tác giả cho là đúng hơn (C3, ghi chú 2001). Writing Process bước 7 ghi: hệ thống sẽ bảo đảm precondition và bảo đảm lợi ích.

## CKB-7-STEPS — Main success scenario và quy tắc viết bước

**Clause:** Ch.7 Guideline 1–10; trang Reminders; Ch.11 "preferred style" · **Evidence:** `verified_public` cho tên guideline (mục lục C1) và trang Reminders; `secondary_source` cho cách diễn giải chi tiết (C7, đối chiếu 2 nguồn) · **Locator:** C1 mục lục trang nháp 94–101 (PDF 14), Reminders (PDF 3), trang nháp 68 (PDF 74) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C7](https://web.archive.org/web/20100927192928/http://www.johnmichaelbattista.me:80/software-engineering/use-cases)

**Main success scenario (MSS)** là một scenario thành công điển hình, viết đầy đủ từ trigger tới khi giao goal, kể cả việc dọn dẹp sau đó. Nó không nhất thiết là đường thành công duy nhất. Kiểu ưa dùng của tác giả: một cột văn bản, bước đánh số, **không có if-statement**, extension đánh số kiểu 2a, 2a1.

Mười guideline cho action step (tên theo mục lục; giải thích là diễn giải của nhóm):

| # | Guideline | Ý nghĩa |
| --- | --- | --- |
| 1 | Simple grammar | Chủ ngữ – động từ – tân ngữ; một câu một hành động |
| 2 | Shows clearly "who has the ball" | Mỗi bước nêu rõ actor nào đang hành động |
| 3 | Bird's eye point of view | Viết từ góc nhìn người quan sát, không phải "tôi/bạn" |
| 4 | Process moving distinctly forward | Mỗi bước làm tiến trình tiến lên rõ rệt |
| 5 | Actor's intent, not movements | Ghi ý định, không ghi thao tác UI (click, gõ phím) |
| 6 | "Reasonable" set of actions | Gom các hành động hợp lý trong một bước; sách có hình "a transaction has four parts" (nội dung hình chưa đọc) |
| 7 | Doesn't "check whether", it "validates" | Viết "hệ thống xác thực X", không viết "hệ thống kiểm tra xem X" (tránh ngụ ý rẽ nhánh) |
| 8 | Optionally mentions the timing | Có thể ghi thời điểm/khoảng thời gian |
| 9 | Idiom: "User has System A kick System B" | Cách viết khi actor yêu cầu hệ thống A tác động hệ thống B |
| 10 | Idiom: "Do steps x–y until condition" | Cách viết vòng lặp |

Trang Reminders đầu sách: với mỗi bước, thể hiện goal thành công; ghi ý định của actor, không ghi chi tiết UI; actor truyền thông tin, validate điều kiện hoặc cập nhật trạng thái; ghi chú giữa các bước khi trình tự quan trọng hoặc không quan trọng; hỏi "why" để tìm goal cấp cao hơn.

Độ dài: tác giả cho biết MSS của ông chưa bao giờ quá 9 bước, có thể chỉ 3 bước. MSS thường chỉ chiếm 1/4 đến 1/10 độ dài use case. Giá trị chính nằm ở phần alternative (C4). Mô tả dữ liệu trong bước chỉ ở **precision level 1** (tên gọi tắt, vd "name and address"). Trường, kiểu, độ dài, validation đặt ở chỗ khác ("The Missing Requirements", Ch.16).

## CKB-8-EXTENSIONS — Extension condition, extension handling, đánh số

**Clause:** Ch.8 (Guideline 11–12); ví dụ UC1, UC5; Pass/Fail 26–27; Writing Process 9–11 · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 17, 22–23 (PDF 22, 28–29); mục lục trang nháp 103–113 (PDF 14); Writing Process (PDF 4); Glossary trang nháp 235–236 · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C5](https://web.archive.org/web/20140329202915/http://alistair.cockburn.us/Structuring+use+cases+with+goals)

- **Scenario extension** là đoạn scenario bắt đầu khi một điều kiện xảy ra ở một bước của scenario khác. **Extension condition** nêu hoàn cảnh dẫn tới hành vi khác.
- **Đánh số:** số bước nơi điều kiện được **phát hiện** + chữ cái cho từng điều kiện: `4a`, `4b` là hai điều kiện khác nhau ở bước 4. Bước xử lý đánh `4a1`, `4a2`… Bước xử lý được thụt lề (Guideline 12).
- **Guideline 11:** điều kiện phát biểu điều **đã được phát hiện**, vd "Web site does not acknowledge purchase". Pass/Fail 26–27: hệ thống **phát hiện được và phải xử lý** điều kiện đó; câu phát biểu đúng là điều hệ thống thực sự phát hiện.
- **Quy trình:** brainstorm đầy đủ mọi lỗi và nhánh có thể; hợp lý hóa danh sách ("Rationalize the extensions list") và gộp lỗi ("Roll up failures"). Theo Pass/Fail 26, chỉ giữ điều kiện hệ thống phát hiện được và phải xử lý (nội dung chi tiết hai mục này bị lược trong bản trích). Sau đó viết phần xử lý. Mỗi nhánh xử lý **kết thúc** bằng: quay lại MSS, một lối ra thành công riêng, hoặc thất bại (Writing Process bước 10).
- Lỗi lồng trong lỗi ("failures within failures") được phép. Nhánh quá phức tạp thì tách thành use case riêng (bước 11). Đó là "creating a new use case from an extension".
- Câu hỏi mở được phép ghi ngay trong extension, vd "(what do we do here?)" trong UC1.
- C5 xếp alternate scenario thành **recovery scenario** (vẫn thành công) và **failure scenario** (bỏ goal).

Ví dụ cấu trúc (nhóm tự đặt, theo đúng kiểu đánh số trên):
```
3. Hệ thống xác thực mã giảm giá.
...
Extensions:
3a. Mã giảm giá đã hết hạn:
    3a1. Hệ thống báo mã hết hạn; use case quay lại bước 2.
3b. Dịch vụ khuyến mãi không phản hồi:
    3b1. Hệ thống ghi log, tiếp tục không áp mã; quay lại bước 4.
```

## CKB-9-10-VARIATIONS-LINKING — Technology & data variations, sub use case, extension use case

**Clause:** Ch.9; Ch.10 §10.1–10.2; Glossary · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 65–67 (PDF 71–73); Glossary 235–236 · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

**Technology and Data Variations List:** dùng khi hành vi **giống nhau** nhưng cách thực hiện khác, thường do công nghệ hoặc dữ liệu. Ví dụ: người mua đặt qua điện thoại, fax, web form, EDI; thanh toán bằng tiền mặt, séc, thẻ. Ghi ở mục này, **không** ghi vào Extensions. Bản 1998 gọi mục này là "Sub-variations".

**Sub use case:** bước có thể là hành động đơn hoặc tên một use case khác, được gạch chân, in nghiêng hoặc ghi "(UC 35 Save a Report)". Trong UML, use case gọi được nói là *include* hành vi của sub use case.

**Extension use case:** dùng khi có một hoạt động chính bị ngắt bởi nhiều hoạt động khác mà hoạt động chính không kiểm soát. Ví dụ: đang soạn văn bản thì đổi zoom, chạy spell-check. Lúc này không muốn base use case phải liệt kê mọi use case ngắt. Extension use case giống scenario extension nhưng tách thành use case riêng. Điều kiện kích hoạt và vị trí trong base use case ghi ở trường Trigger. **Extension point** là nhãn đặt tên cho một hoặc một nhóm vị trí trong base use case nơi extension use case có thể ngắt vào.

Phân biệt với menu chính: menu **kiểm soát** lựa chọn của người dùng, nên các lựa chọn là sub use case. Extension use case là ngắt quãng không do use case chính kiểm soát.

## CKB-11-FORMATS — Brief, casual, fully dressed và các format khác

**Clause:** Ch.1 §1.2; Ch.11; Glossary; C4 "Prepare for Multiple Formats" · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 20–24 (PDF 26–30), 68–69 (PDF 74–75), 236 (PDF 106); C4 Act 3 · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C4](https://web.archive.org/web/20140330001821/http://alistair.cockburn.us/Use+cases,+ten+years+later)

| Mức chi tiết | Mô tả | Khi dùng |
| --- | --- | --- |
| Use case brief | 2–6 câu (C1 Ch.3) / 2–4 câu (C4) / một đoạn (Glossary); vừa một ô bảng tính, các cột khác ghi priority, độ phức tạp, release | Lập kế hoạch, scope, dự án nhỏ giao tiếp sát |
| Casual | Vài đoạn văn xuôi; MSS một đoạn, xử lý lỗi vài đoạn sau; thường thiếu thông tin dự án | Dự án ít nghi thức, nhóm nhỏ |
| Fully dressed | Template đầy đủ: stakeholders, guarantees, scope, level, trigger, MSS đánh số, extensions… | Dự án nhiều nghi thức, hệ thống quan trọng, yêu cầu chính xác |

- Tác giả kết luận **không thể chỉ có một template**. Ít nhất phải có bản casual và bản fully dressed, mỗi dự án chọn và điều chỉnh. "Your use case is not my use case": nói "dự án viết use case" chưa đủ, phải nói rõ format, trường bắt buộc và mức dung sai giữa người viết.
- Ch.11 liệt kê format: fully dressed (ưa dùng), casual, one-column table, two-column table (theo task case của Constantine), RUP style, if-statement style, Occam style, diagram style, UML use case diagram. Tác giả cho rằng mọi format chứa gần cùng thông tin và các guideline áp dụng cho tất cả.
- §11.3 có template cho 5 loại dự án: elicitation, business process modeling, sizing, dự án ngắn áp lực cao, detailed functional requirements (chỉ đọc được tên).

## CKB-TEMPLATE-EVOLUTION — Basic template 1998 và fully dressed template 2000–2001

**Clause:** C3 toàn văn; C1 "Fully Dressed Use Case Template" · **Evidence:** `verified_public` · **Locator:** C3; C1 trang nháp 68–69 (PDF 74–75) · **Nguồn:** [C3](https://web.archive.org/web/20140330001816/http://alistair.cockburn.us/Basic+use+case+template), [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

| Fully dressed (sách) | Hướng dẫn điền (diễn giải) | Basic template 1998 tương ứng |
| --- | --- | --- |
| Use case name | Tên là **goal**, cụm động từ chủ động ngắn | Use Case: <number> <name> |
| Context of use | Phát biểu goal dài hơn, điều kiện thường xảy ra | Goal in Context |
| Scope | Design scope: hệ thống nào được xem là black-box đang thiết kế | Scope |
| Level | Summary / User-goal / Subfunction | Level: Summary / Primary task / Subfunction |
| Primary Actor | Tên vai trò hoặc mô tả | Primary Actor |
| Stakeholders & Interests | Danh sách stakeholder và lợi ích chính | (không có) |
| Precondition | Điều được kỳ vọng đã đúng | Preconditions |
| Minimal Guarantees | Lợi ích được bảo vệ ở mọi lối ra | Failed End Condition |
| Success Guarantees | Trạng thái khi goal thành công | Success End Condition |
| Trigger | Điều khởi động, có thể là sự kiện thời gian | Trigger |
| Main Success Scenario | `<step #> <action description>` từ trigger tới khi giao goal và dọn dẹp | Main Success Scenario |
| Extensions | `<step altered> <condition>: <action or sub use case>` | Extensions |
| Technology and Data Variations List | `<step #> <list of variations>` | Sub-variations |
| Related Information | Thông tin dự án cần thêm | Related Information: Priority, Performance Target, Frequency, Superordinate/Subordinate Use Cases, Channel to primary actor, Secondary Actors, Channel to secondary actors; Open Issues; Schedule (Due Date) |

- UC5 "Buy Something (fully dressed)" trong sách điền phần Related Information bằng Priority, Releases, Response time, Frequency of use, Channel to primary actor, Secondary Actors, Channels to Secondary Actors và Open issues.
- C3 hướng dẫn điền **theo nhiều lượt**. Lượt 1: tên, goal in context, scope, level, primary actor, priority, frequency. Lượt 2: trigger, MSS. Lượt 3: extensions, sub-variations, use case cha/con. Lượt 4: performance target, open issues, schedule. Lượt 5: channel và secondary actors. Tác giả thấy người dùng làm việc với bản văn bản thường tốt hơn bản dạng bảng.

## CKB-PROCESS — Quy trình viết, precision level, khi nào xong

**Clause:** trang "The Writing Process", "Reminders"; Ch.12 · **Evidence:** `verified_public` · **Locator:** C1 PDF 3–5; trang nháp 142 (PDF 78) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

**Precision levels (làm theo chiều rộng trước):** 1 tên và goal của primary actor → 2 brief hoặc MSS → 3 extension conditions → 4 extension handling steps. Dữ liệu: 1 tên gọi tắt → 2 các trường → 3 kiểu, độ dài, validation (chỉ mức 1 nằm trong use case).

**12 bước:** (1) nêu scope và ranh giới, theo dõi bằng in/out list; (2) liệt kê mọi primary actor, người và không phải người; (3) liệt kê đầy đủ user goal, ra actor-goal list; (4) viết outermost summary use case; (5) rà lại, thêm/bớt/gộp goal, kiểm tra trigger theo thời gian; (6) chọn một use case để triển khai, có thể viết usage narrative làm nóng; (7) ghi stakeholders & interests, preconditions, guarantees; (8) viết MSS 3–9 bước; (9) brainstorm đầy đủ extension conditions; (10) viết extension handling; (11) tách luồng phức tạp thành sub use case, gộp sub use case tầm thường; (12) điều chỉnh cả tập, kiểm tra tính dễ đọc, đầy đủ, đáp ứng lợi ích.

**Khi nào xong (Ch.12):** đã nêu mọi primary actor và user goal; mọi trigger đã thành trigger của use case hoặc extension condition; đã viết mọi user-goal use case cùng các summary/subfunction cần thiết; mỗi use case rõ tới mức sponsor xác định được đã giao hay chưa, user đồng ý, developer làm được; sponsor đồng ý tập use case đã đủ (cho hiện tại).

## CKB-19-MISTAKES — Lỗi thường gặp

**Clause:** Ch.19 §19.1–19.6; C4 "Avoid the Standard Mistakes"; Reminder 7, 24 · **Evidence:** `verified_public` (tên mục và đoạn mở Ch.19; toàn văn C4); `locator_only` cho ví dụ trước/sau · **Locator:** C1 trang nháp 149 (PDF 85), 202–203 (PDF 90); C4 Act 3 · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C4](https://web.archive.org/web/20140330001821/http://alistair.cockburn.us/Use+cases,+ten+years+later)

| Lỗi | Biểu hiện | Cách sửa |
| --- | --- | --- |
| No system (19.1) | Không rõ hệ thống nào đang được mô tả | Ghi Scope; bước gọi tên hệ thống |
| No primary actor (19.2) | Không rõ ai có goal | Ghi primary actor là vai trò bên ngoài |
| Bỏ chủ ngữ của câu | "Nhập mã, xác nhận" mà không rõ ai làm | Mỗi bước bắt đầu bằng actor |
| Too many UI details (19.3, 19.6) | Nút OK, trường, màn hình, thứ tự màn hình | Viết trung lập công nghệ, vd "Hệ thống trình bày các lựa chọn. Người dùng chọn một hoạt động"; UI dùng statechart, task case, ảnh màn hình |
| Very low goal levels (19.4) | Hàng trăm trang use case "dưới nước" | Hỏi "why", gộp bước, nâng lên user goal |
| Purpose and content not aligned (19.5) | Tên/goal nói một đằng, các bước làm việc khác | Sửa tên hoặc nội dung cho khớp |
| Quá nhiều chi tiết | MSS 15–35 bước, use case 10 trang | MSS 3–9 bước |
| Nhầm sơ đồ là use case | Sơ đồ khổng lồ đủ loại includes/extends/generalizes | Use case là văn bản; ellipse chỉ là mục lục/context ("The Great Drawing Hoax") |
| Dùng use case thay feature list/test case/thiết kế UI | Đòi use case làm mọi việc | Use case là đầu vào; test case cần dữ liệu cụ thể; feature list phải chuyển đổi riêng |

C4 nêu **hai lỗi phổ biến và tốn kém nhất**: quá nhiều chi tiết và đưa chi tiết UI vào.

## CKB-PASS-FAIL — 31 câu hỏi pass/fail cho các trường use case

**Clause:** "Pass/Fail Tests for Use Case Fields" (Reminder 11 trong bản in) · **Evidence:** `verified_public` (C1); `secondary_source` (C7, đối chiếu 2 nguồn) · **Locator:** C1 PDF 112–113 (trang cuối bản trích); C7 mục "Pass/Fail Tests for Use Case Fields" · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [C7](https://web.archive.org/web/20100927192928/http://www.johnmichaelbattista.me:80/software-engineering/use-cases)

Tác giả yêu cầu mọi câu đều phải trả lời "yes". Diễn giải:

| # | Trường | Câu hỏi |
| --- | --- | --- |
| 1 | Title | Tên là cụm động từ chủ động nêu goal của primary actor? |
| 2 | Title | Hệ thống giao được goal đó? |
| 3 | Scope & Level | Đã điền cả hai? |
| 4 | Scope | Use case coi hệ thống trong Scope là black box? (Phải "yes" với tài liệu yêu cầu hệ thống; có thể "no" với business use case white-box) |
| 5 | Scope | Nếu Scope là hệ thống đang thiết kế: designer phải thiết kế mọi thứ trong đó và không gì ngoài nó? |
| 6–7 | Level | Nội dung khớp level đã ghi? Goal thật sự ở level đó? |
| 8–9 | Primary actor | Có hành vi? Có goal với SuD và goal đó là cam kết dịch vụ của SuD? |
| 10–11 | Preconditions | Bắt buộc và SuD đặt được? Không bao giờ bị kiểm tra trong use case? |
| 12 | Stakeholders & interests | Được nêu, và hệ thống phải thỏa lợi ích như đã ghi? (tùy mức nghi thức) |
| 13 | Minimal guarantees | Nếu có: mọi lợi ích stakeholder được bảo vệ? |
| 14 | Success guarantees | Mọi lợi ích stakeholder được thỏa? |
| 15–17 | MSS | Chạy từ trigger tới success guarantee? Trình tự đúng (cho phép biến thể trình tự hợp lệ)? Có 3–9 bước? |
| 18–25 | Mỗi bước | Là goal thành công? Tiến trình tiến rõ? Rõ actor nào thực hiện ("who is kicking the ball")? Ý định rõ? Level thấp hơn use case một chút? Không mô tả thiết kế UI? Rõ thông tin truyền đi? "Validate" chứ không "check"? |
| 26–27 | Extension condition | Hệ thống phát hiện được và phải xử lý? Phát biểu đúng điều hệ thống phát hiện? |
| 28 | Tech & data variations | Chắc chắn không phải extension hành vi thông thường? |
| 29–31 | Toàn use case | Hỏi sponsor/user: "Đây có phải điều bạn muốn?"; "Khi giao, bạn có biết đã nhận được chưa?". Hỏi developer: "Bạn làm được không?" |

Ghi chú đối chiếu: C7 (chép từ bản in) đặt "3–9 bước" là câu 15 và "trigger → success guarantee" là 16. C1 (nháp) đặt chúng ở 17 và 15. Câu 27 ở C7 viết "what the system actually needs", khác C1 "what the system actually detects". Dùng nội dung, không dùng số thứ tự, làm khóa tham chiếu.

## CKB-UML — Quan hệ với UML 2.5.1

**Clause:** WEUC Preface "Heritage", Reminder 24, Appendix A §23.1–23.4; UML 2.5.1 §18 · **Evidence:** `verified_public` (quan điểm Cockburn); đối chiếu UML qua file [uml-2.5.1.md](uml-2.5.1.md) (`verified_normative`) · **Locator:** C1 trang nháp 2–3 (PDF 7–8), 202–203 (PDF 90), 224–230 (PDF 94–99); UML-18-USECASE-BEHAVIOR-DESCRIPTION, UML-18.2.2-EXTEND, UML-18.2.4-INCLUDE · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf), [OMG UML 2.5.1](https://www.omg.org/spec/UML/2.5.1/PDF)

- Cockburn (viết thời UML 1.3): chuẩn UML **không bàn về nội dung hay cách viết** use case. Phần lớn điều ông nói "nằm trong một ellipse", nên tương thích với UML. Đọc riêng UML dễ khiến người ta nghĩ use case là thứ đồ họa.
- UML 2.5.1 (xem UML-18-USECASE-BEHAVIOR-DESCRIPTION): hành vi use case có thể mô tả bằng interaction, activity, state machine, pre/postcondition hoặc văn bản tự nhiên. **UML không quy định template văn bản.** Template fully dressed là quy ước của Cockburn, không phải của UML.

| Khái niệm Cockburn | UML 2.5.1 | Ghi chú cho rule engine |
| --- | --- | --- |
| Sub use case (bước gọi use case khác) | «include» (Include) | Base use case biết use case được include; Cockburn: sub use case ở level thấp hơn |
| Extension use case + extension point | «extend» (Extend, ExtensionPoint, condition tùy chọn) | Extending use case biết base; base chỉ công bố extension point |
| Scenario extension trong cùng use case (3a…) | Không có metaclass riêng; là một phần behavior mô tả bằng văn bản | Không bắt buộc vẽ thành «extend» |
| Generalization giữa use case/actor | Generalization | §23.4: dùng khi gặp cụm "some kind of"; có mục "Hazards of generalizes" cảnh báo actor chuyên biệt dùng use case chuyên biệt; Guideline 16: vẽ goal tổng quát cao hơn |
| Primary / supporting / offstage actor | UML không có thuộc tính metamodel phân biệt | Là quy ước văn bản; không chấm lỗi UML dựa trên phân loại này |
| Design scope (SuD) | Subject của use case | Tên Scope nên khớp subject/boundary trên sơ đồ |
| Goal level | Không có trong UML | Quy ước Cockburn |

- Hướng dẫn vẽ của Cockburn (Guideline 13–16): vẽ goal cao ở trên; extending use case ở dưới; dùng hình mũi tên khác nhau; vẽ goal tổng quát cao hơn goal chuyên biệt. Ông tự vẽ extends bằng "móc câu". Đây là **ký pháp riêng, không phải UML chuẩn**. Sơ đồ FlintFlow theo ký pháp UML (mũi tên nét đứt «include»/«extend»).
- Use case diagram dùng như **mục lục**, **context diagram** và bức tranh quan hệ cấp cao–cấp thấp. Không thay được phần văn bản (Reminder 24).

## CKB-FPT-MAPPING — Đối chiếu bảng UC của template FPT

**Clause:** FPT II.2.2.2 (T03: ID, Use Case, Actors, Use Case Description); FPT 3.2 function details · **Evidence:** `project_observation` · **Locator:** [fpt-capstone-srs-template.md](fpt-capstone-srs-template.md) FPT-2.2-USE-CASES, FPT-2.2.2-UC-DESCRIPTIONS, FPT-3.2-FEATURE-FUNCTION-DETAIL · **Nguồn:** template FPT người dùng cung cấp; C1, C3

| Cột/mục FPT | Tương ứng Cockburn | Nhận xét |
| --- | --- | --- |
| ID (01, 02…) | Số use case (C3: `Use Case: <number>`) | Không ai quy định format ID |
| Use Case (tên) | Use case name = goal, cụm động từ chủ động | FPT cũng yêu cầu "verb + object" và nêu kết quả có giá trị; hai nguồn nhất quán |
| Actors | Primary actor (+ supporting actor trong Related Information) | FPT gộp vào một cột. Khuyến nghị ghi primary actor trước, hoặc phân biệt rõ |
| Use Case Description | Tương đương **use case brief** (2–4 câu) hoặc **casual** | FPT không bắt buộc MSS/extensions trong bảng này |
| (không có) | Scope, Level, Stakeholders & Interests, Guarantees | FPT không có trường. Rule engine không được báo lỗi "thiếu" trên bản nộp FPT; chỉ dùng khi xuất fully dressed |
| 3.2 Function: Trigger, Description, Details (normal/abnormal), BR | Trigger, MSS, Extensions, link business rule | Nội dung fully dressed ánh xạ một phần sang function details của FPT |
| Diagram 2.2.1 (actor–UC, UC–UC) | Use case diagram làm mục lục/context | FPT cho phép nhiều sơ đồ, phù hợp quan điểm Cockburn |
| Includes/Extends (cột thêm của FlintFlow Export) | Sub use case / extension use case | Mở rộng của FlintFlow, không phải của FPT hay Cockburn |

Hệ quả (`proposed_policy`): check UCD được chia theo **chế độ**. `brief` áp dụng cho bảng FPT 2.2.2 (UCD-01, 02, 04, 05, 06, 19). `fully_dressed` áp dụng khi FlintFlow sinh đặc tả chi tiết (toàn bộ). Check không áp dụng trả `not_applicable`, không trả `fail`.

## CKB-POLICY — Check UCD-xx cho rule engine

**Clause:** đề xuất của nhóm · **Evidence:** `proposed_policy` · **Locator:** — · **Nguồn:** suy ra từ các section CKB ở cột Căn cứ. Mọi ví dụ trong bảng là **ví dụ (nhóm tự đặt)**.

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| UCD-01 | Tên UC là cụm động từ chủ động nêu goal của primary actor | Rule: token đầu là động từ (POS tiếng Việt/Anh) + LLM | warning | CKB-PASS-FAIL #1; CKB-TEMPLATE-EVOLUTION | "Đặt phòng họp" | "Phòng họp", "Quản lý" |
| UCD-02 | Goal là dịch vụ hệ thống giao được, không phải mục tiêu kinh doanh mơ hồ | LLM | needs_review | CKB-PASS-FAIL #2, #9 | "Gia hạn thẻ thư viện" | "Tăng hài lòng độc giả" |
| UCD-03 | (fully dressed) Có Scope (tên SuD) và Level ∈ {summary, user-goal, subfunction} | Rule: trường tồn tại, giá trị trong enum | error (fully dressed) / not_applicable (brief) | CKB-PASS-FAIL #3; CKB-3-SCOPE; CKB-5-GOAL-LEVELS | Scope: "Hệ thống FlintFlow"; Level: user-goal | Thiếu Level |
| UCD-04 | Level khớp nội dung: user-goal = một người, một lần ngồi; "Đăng nhập" không gắn user-goal; UC kéo dài nhiều ngày là summary | Rule từ khóa (login/đăng nhập/tìm kiếm → subfunction) + LLM | warning | CKB-5-GOAL-LEVELS; CKB-PASS-FAIL #6–7 | "Đăng nhập" = subfunction | "Đăng nhập" là UC user-goal đứng độc lập ngang "Đặt hàng" |
| UCD-05 | Primary actor là vai trò **ngoài** SuD, có hành vi; không phải chính hệ thống hoặc thành phần nội bộ | Rule: actor ≠ tên hệ thống/module; LLM | error | CKB-4-ACTORS; CKB-PASS-FAIL #8 | "Thủ thư" | Actor "Hệ thống FlintFlow" hoặc "Database" |
| UCD-06 | Hệ thống ngoài chỉ được dùng (cổng thanh toán, email) là supporting actor, không phải phần của scope; không ghi là primary nếu không có goal | LLM + rule actor.kind=system | warning | CKB-3-SCOPE; CKB-4-ACTORS | Primary: Khách hàng; Supporting: VNPay | Primary: VNPay cho UC "Thanh toán đơn hàng" |
| UCD-07 | (fully dressed) Precondition là điều SuD bảo đảm được và **không bị kiểm tra lại** trong MSS/extension | Rule: so khớp precondition với câu "kiểm tra/nếu chưa…" trong flow; LLM | warning | CKB-6-PRECONDITIONS-GUARANTEES; CKB-PASS-FAIL #10–11 | Pre: "Người dùng đã đăng nhập"; flow không kiểm tra lại | Pre "đã đăng nhập" nhưng có 2a "Người dùng chưa đăng nhập" |
| UCD-08 | (fully dressed) Có stakeholders & interests; minimal và success guarantee bảo vệ/thỏa các lợi ích đó | Rule: trường tồn tại; LLM: mỗi interest được nhắc ở guarantee/bước | warning (fully dressed) | CKB-2-CONTRACT-MODEL; CKB-PASS-FAIL #12–14 | Minimal: "Mọi giao dịch thất bại đều được ghi log" | Success guarantee "Thành công" |
| UCD-09 | Có trigger; MSS chạy từ trigger tới khi đạt success guarantee | Rule: bước 1 khớp trigger; LLM: bước cuối đạt postcondition | warning | CKB-6-PRECONDITIONS-GUARANTEES; CKB-PASS-FAIL #15 | Trigger "Độc giả yêu cầu gia hạn"; bước cuối "Hệ thống ghi nhận gia hạn" | MSS dừng ở "Hệ thống hiển thị form" |
| UCD-10 | MSS có 3–9 bước | Rule: đếm bước | warning (<3 hoặc >9); needs_review (>15) | CKB-7-STEPS; CKB-PASS-FAIL #17 | 6 bước | 28 bước mô tả từng thao tác |
| UCD-11 | Mỗi bước có chủ ngữ là actor hoặc hệ thống, một hành động chính | Rule: bước bắt đầu bằng tên actor/"Hệ thống"; LLM | warning | CKB-7-STEPS G1–2; CKB-19-MISTAKES | "Độc giả chọn sách cần gia hạn." | "Chọn sách, bấm gia hạn, xác nhận." |
| UCD-12 | Bước nêu ý định, không có chi tiết UI | Rule regex: click, nhấn nút, button, dropdown, textbox, checkbox, popup, màn hình X, tab; LLM | warning | CKB-7-STEPS G5; CKB-PASS-FAIL #23; CKB-19-MISTAKES | "Khách hàng cung cấp địa chỉ giao hàng." | "Khách hàng gõ địa chỉ vào textbox rồi nhấn nút Lưu màu xanh." |
| UCD-13 | Bước dùng "xác thực/validate", không "kiểm tra xem…"; không có if/else trong MSS | Rule regex: "kiểm tra xem", "check whether/if", "nếu … thì" trong MSS | warning | CKB-7-STEPS G7; CKB-11-FORMATS; CKB-PASS-FAIL #25 | "Hệ thống xác thực mã OTP." + 4a "OTP sai" | "Hệ thống kiểm tra xem OTP đúng không, nếu sai thì báo lỗi." |
| UCD-14 | Mỗi bước làm tiến trình tiến lên và ở level thấp hơn UC một chút; không gồm vi thao tác | LLM | needs_review | CKB-PASS-FAIL #19, #22; CKB-5-GOAL-LEVELS | "Hệ thống tính tổng tiền và hiển thị đơn." | "Người dùng di chuột tới ô số lượng." |
| UCD-15 | Extension đánh số theo bước phát hiện + chữ cái (3a, 3a1) và tham chiếu bước có thật | Rule: regex `^\d+[a-z](\d+)?\.`; số bước ≤ số bước MSS | error (tham chiếu sai) / warning (format) | CKB-8-EXTENSIONS | "3a. Mã hết hạn: 3a1. …" | "E1: lỗi" không gắn bước; "12a" khi MSS có 6 bước |
| UCD-16 | Extension condition là điều hệ thống phát hiện được và phải xử lý | LLM | warning | CKB-8-EXTENSIONS; CKB-PASS-FAIL #26–27 | "4a. Cổng thanh toán từ chối giao dịch" | "4a. Người dùng không vui" |
| UCD-17 | Mỗi extension kết thúc rõ: quay lại bước X, lối ra thành công riêng, hoặc kết thúc thất bại | Rule: có "quay lại bước", "kết thúc", "use case dừng"; LLM | warning | CKB-8-EXTENSIONS; CKB-PROCESS | "3a1. … quay lại bước 2." | Extension mô tả xử lý nhưng không nói rồi sao |
| UCD-18 | Technology/data variation không bị viết thành extension, và ngược lại | LLM | needs_review | CKB-9-10-VARIATIONS-LINKING; CKB-PASS-FAIL #28 | Variations: "5. Thanh toán bằng thẻ, ví điện tử" | Extension 5a "Người dùng trả bằng thẻ", 5b "trả bằng ví", cùng hành vi |
| UCD-19 | Sub use case/«include»/«extend» được tham chiếu bằng tên UC **tồn tại** trong tập; quan hệ khớp sơ đồ UML | Rule: tra tên/ID trong danh sách UC và sơ đồ | error | CKB-9-10-VARIATIONS-LINKING; CKB-UML; UML-18.2.2-EXTEND; UML-18.2.4-INCLUDE | Bước "Hệ thống xác thực người dùng (UC-03)" và UC-03 tồn tại | Bước gọi "Xác thực" nhưng không có UC đó |
| UCD-20 | Dữ liệu trong bước chỉ ở mức tên gọi; kiểu, độ dài, validation, business rule chi tiết để ở data dictionary/BR và được tham chiếu | Rule regex: varchar, kiểu số, "tối đa N ký tự" trong bước; LLM | warning | CKB-7-STEPS; CKB-1-DEFINITION | "Khách hàng cung cấp thông tin liên hệ (xem DD-Contact)." | "Nhập tên (varchar 50, bắt buộc, regex ^[A-Z]…)" |

Cách chấm: mỗi kết quả lưu `check_id`, `chunk_id` căn cứ, chế độ (`brief`/`fully_dressed`), kết quả `pass|fail|needs_review|not_applicable`. Check `needs_review` hoặc dựa trên LLM không được tự chặn bản nộp khi chưa có người duyệt.

## CKB-GLOSSARY — Thuật ngữ

**Clause:** Appendix C Glossary · **Evidence:** `verified_public` · **Locator:** C1 trang nháp 235–238 (PDF 105–108) · **Nguồn:** [C1](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf)

| Thuật ngữ | Định nghĩa diễn giải | Locator |
| --- | --- | --- |
| Use case | Hợp đồng giữa stakeholder về hành vi hệ thống khi đáp ứng goal của primary actor; gom các scenario thành công và thất bại | 235 |
| Scenario | Chuỗi hành động/tương tác trong điều kiện xác định, không có if hay rẽ nhánh | 235 |
| Concrete scenario / usage narrative | Scenario với tên và giá trị cụ thể / có cả động cơ, dùng để khởi động | 235 |
| Main success scenario | Scenario thành công điển hình, viết đầy đủ từ trigger tới hoàn tất | 235 |
| Alternate course | Scenario hoặc đoạn scenario khác, viết như extension của MSS | 235 |
| Action step | Đơn vị viết; thường một câu, hành vi của một actor | 235 |
| Scenario extension / extension condition | Đoạn scenario bắt đầu theo điều kiện / điều kiện đó | 235 |
| Extension use case / base use case | Use case ngắt use case khác theo điều kiện / use case bị ngắt | 235–236 |
| Extension point | Nhãn cho một hoặc một nhóm vị trí trong base use case nơi extension use case có thể ngắt vào | 236 |
| Sub use case | Use case được gọi trong một bước; UML: base *include* nó | 236 |
| Actor / external actor | Thứ có hành vi / actor ngoài SuD | 236 |
| Stakeholder | Actor ngoài có quyền được hệ thống bảo vệ lợi ích | 236 |
| Primary actor | Stakeholder yêu cầu hệ thống giao goal; thường nhưng không luôn là bên khởi tạo | 236 |
| Supporting / secondary actor | Hệ thống mà SuD có goal đối với nó (nhận dịch vụ từ nó) | 236 |
| Off-stage / tertiary actor | Stakeholder không phải primary actor | 236 |
| Internal actor | SuD, subsystem hoặc thành phần chủ động bên trong SuD | 236 |
| Use case brief / casual / fully dressed | Một đoạn tóm tắt / văn xuôi đơn giản / template đầy đủ | 236 |
| Black-box / white-box use case | Không nhắc / có nhắc thành phần bên trong SuD | 237 |
| Summary / user-goal / subfunction | Nhiều phiên / một phiên 2–20 phút / goal bộ phận (clam: không nên viết) | 237 |
| Business use case / system use case | Nhấn vào vận hành tổ chức (scope enterprise) / nhấn vào hệ thống máy (mọi scope) | 237 |
| Enterprise / system / subsystem scope | SuD là tổ chức / ứng dụng / một phần ứng dụng | 237 |
| Minimal guarantee / success guarantee | Cam kết ở mọi lối ra / khi thành công | template trang nháp 68 |

## CKB-GAPS — Chưa xác minh và cách bổ sung

**Clause:** — · **Evidence:** `pending` · **Locator:** — · **Nguồn:** —

1. **Bản in 2001** chưa đọc. Số trang ghi trong file là số trang **bản nháp #3**. Thân Chapter 6–9, 13–19 và Reminder 1–23 bị lược trong bản trích. Chưa đọc: chi tiết Guideline 1–12 (đặc biệt Figure "a transaction has four parts"), quy ước đánh số đặc biệt (vd extension áp dụng cho mọi bước, cách đánh số lỗi lồng nhiều cấp), "Reminder 15 quality questions across the use case set". Cách bổ sung: đọc bản in (thư viện/O'Reilly), cập nhật locator trang in và nâng evidence.
2. **Pass/Fail tests:** đã đối chiếu nháp với bản chép từ sách in (C7). Thứ tự và câu 27 khác nhau. Nên xác nhận với bản in trước khi dùng số câu làm ID.
3. **Trang alistair.cockburn.us hiện tại** chỉ còn trang chủ và link tới bản lưu. Mọi bài viết đọc qua Internet Archive (2003, 2014). Nếu tác giả đăng lại ở alistaircockburn.com, cần cập nhật URL.
4. **C6** là bản tóm tắt của độc giả (4 design scope, "Strategic/System"). Chỉ dùng làm thứ cấp; ưu tiên phân loại Enterprise/System/Subsystem của C1.
5. **Ánh xạ UML** dựa trên ghi chú UML 2.5.1 trong bộ này. Cockburn viết thời UML 1.3 (includes/extends/uses). Thuật ngữ cũ cần quy đổi sang «include»/«extend».
6. **Quyền sử dụng:** sách có bản quyền, chỉ tóm tắt. Basic template C3 cho phép sao chép nếu dẫn nguồn. Chưa ingest nguyên văn nào vào RAG.
7. **Policy UCD-xx** là đề xuất. Cần nhóm duyệt ngưỡng (3–9 bước, danh sách từ khóa UI tiếng Việt) và thử trên use case FlintFlow sinh thật trước khi bật mức `error`.
