---
source_id: iiba-babok
title: A Guide to the Business Analysis Body of Knowledge (BABOK Guide)
version: v3 (2015)
publisher: International Institute of Business Analysis (IIBA)
source_url: https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/
checked_on: 2026-10-14
access: public_glossary + public_core_standard_2017 + public_task_cards_RADD_v2.0_2025 + knowledgehub_toc_only + errata_page + secondary_sources
rights_status: summary_only_review_before_source_ingestion
revision: 3
---

# BABOK Guide v3: yêu cầu, stakeholder, Actor và Use Case

Nguồn chính chủ đã đọc trực tiếp: (1) [Appendix A Glossary công khai](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/); (2) [IIBA Global Business Analysis Core Standard](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf) (©2017, 51 trang PDF, "A Companion to BABOK Guide Version 3"). Tài liệu này tóm lược key concepts, purpose/description/inputs/outputs của cả 30 task, nhưng không có Elements/Techniques; (3) [task cards RADD](https://www.iiba.org/contentassets/be4de45e850d4d30b78e8c4d7ca0c967/all-task-cards-req-analysis-and-design-def.pdf) v.2.0 ©2025; (4) [mục lục KnowledgeHub](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/), chỉ có mục lục, phần thân cần đăng nhập thành viên; (5) [trang Errata BABOK v3](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/babok-guide-errata/).
Chưa đọc bản thân BABOK v3 có license. Vì vậy, mọi nội dung ở cấp **Elements** (`.4`) và **Usage Considerations** của technique đều lấy từ nguồn thứ cấp và gắn nhãn `secondary_source`. Số trang chỉ ghi cho tài liệu đã mở. Core Standard dùng cách đánh số riêng (§1.x/§2.x); các mục này phải quy chiếu sang số BABOK. Ví dụ FlintFlow đều do nhóm tự đặt.

## Mục lục

| ID | Nội dung | Evidence chính |
| --- | --- | --- |
| BABOK-SOURCES | Nguồn, phiên bản, độ tin cậy | verified_public |
| BABOK-STRUCTURE | Cấu trúc BABOK v3: chương, task, technique | verified_public |
| BABOK-2.1-BACCM | 6 core concept | verified_public |
| BABOK-2.2-KEY-TERMS | Thuật ngữ chính | verified_public |
| BABOK-2.3-REQ-CLASSIFICATION | Lược đồ phân loại yêu cầu | verified_public |
| BABOK-2.4-STAKEHOLDERS | 11 vai trò stakeholder chung | verified_public |
| BABOK-2.5-REQ-DESIGN | Requirements và Designs | verified_public |
| BABOK-KA-MAP | 6 knowledge area, 30 task | verified_public |
| BABOK-3-PLANNING | §3.1–3.5 | verified_public |
| BABOK-4-ELICITATION | §4.1–4.5 | verified_public |
| BABOK-5-RLCM | Tổng quan Requirements Life Cycle Management | verified_public |
| BABOK-5.1-TRACE | Trace Requirements | verified_public + secondary_source |
| BABOK-5.2-MAINTAIN | Maintain Requirements và requirements attributes | verified_public + secondary_source |
| BABOK-5.3-PRIORITIZE | Prioritize Requirements | verified_public + secondary_source |
| BABOK-5.4-ASSESS-CHANGES | Assess Requirements Changes | verified_public + secondary_source |
| BABOK-5.5-APPROVE | Approve Requirements | verified_public + secondary_source |
| BABOK-6-STRATEGY | §6.1–6.4 | verified_public |
| BABOK-7-RADD | Tổng quan RADD + task cards 2025 | verified_public |
| BABOK-7.1-SPECIFY-MODEL | Specify and Model Requirements | verified_public + secondary_source |
| BABOK-7.2-VERIFY | Verify Requirements, 9 đặc tính chất lượng | verified_public + secondary_source |
| BABOK-7.3-VALIDATE | Validate Requirements | verified_public + secondary_source |
| BABOK-7.4-REQ-ARCHITECTURE | Define Requirements Architecture, viewpoint/view | verified_public + secondary_source |
| BABOK-7.5-DESIGN-OPTIONS | Define Design Options | verified_public + secondary_source |
| BABOK-7.6-VALUE-RECOMMEND | Analyze Potential Value and Recommend Solution | verified_public + secondary_source |
| BABOK-8-SOLUTION-EVAL | §8.1–8.5 | verified_public |
| BABOK-10-TECHNIQUES | Danh mục 50 technique §10.1–10.50 | verified_public (mục lục) |
| BABOK-10.47-USE-CASES | Use Cases and Scenarios | verified_public + secondary_source |
| BABOK-10.48-USER-STORIES | User Stories | verified_public + locator_only |
| BABOK-10.9-BUSINESS-RULES | Business Rules Analysis | verified_public + secondary_source |
| BABOK-10.1-ACCEPTANCE | Acceptance and Evaluation Criteria | verified_public + secondary_source |
| BABOK-10.30-NFR | Non-Functional Requirements Analysis | verified_public + secondary_source |
| BABOK-10-DATA | Data Dictionary, DFD, Data Modelling, Glossary, State, Sequence | verified_public + secondary_source |
| BABOK-10-SCOPE-PEOPLE-FLOW | Scope Modelling, Stakeholder List/Map/Personas, Roles and Permissions, Process Modelling, Functional Decomposition, Prioritization, Reviews, Item Tracking | verified_public + secondary_source |
| BABOK-MAP-FPT | Ánh xạ BABOK với template SRS FPT Capstone | proposed_policy |
| BABOK-MAP-UML-ISO | Ánh xạ BABOK với UML 2.5.1 và ISO/IEC/IEEE 29148 | proposed_policy |
| BABOK-POLICY | 24 check BA-01…BA-24 | proposed_policy |
| BABOK-GLOSSARY | Bảng thuật ngữ | verified_public |
| BABOK-GAPS | Phần chưa xác minh, sai sót của rev 2 | pending |

## BABOK-SOURCES — Nguồn, phiên bản và độ tin cậy

**Clause:** toàn bộ · **Evidence:** `verified_public` (nguồn IIBA), `secondary_source` (nguồn thứ cấp) · **Locator:** xem bảng · **Nguồn:** [IIBA BABOK](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/)

| Nguồn | Nhà phát hành / tác giả | Phiên bản, ngày | Đã dùng cho | Mức |
| --- | --- | --- | --- | --- |
| [Appendix A Glossary](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/) | IIBA | Trang web, đọc 14/10/2026; tiêu đề "BABOK Guide Appendix A: Glossary" | Định nghĩa thuật ngữ | verified_public |
| [Core Standard](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf) | IIBA | ©2017, ISBN 978-1-927584-09-5, PDF 51 trang; trang in 1 = PDF 8 (thân tài liệu: PDF = trang in + 7) | Key concepts, purpose/description/inputs/outputs của 30 task | verified_public |
| [Task cards RADD](https://www.iiba.org/contentassets/be4de45e850d4d30b78e8c4d7ca0c967/all-task-cards-req-analysis-and-design-def.pdf) | IIBA | v.2.0, ©2025, 6 trang (mỗi task 1 trang) | Purpose, value, techniques thường dùng, stakeholder của §7.1–7.6 | verified_public |
| [Mục lục KnowledgeHub](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/) | IIBA | Đọc 14/10/2026 | Số và tên section §1–§11, 50 technique | verified_public (chỉ mục lục) |
| [Errata BABOK v3](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/babok-guide-errata/) | IIBA | Đọc 14/10/2026 | Xác nhận số tiểu mục (vd 5.3.7, 10.1.4) và các đính chính | verified_public |
| [Adaptive US: Requirements Characteristics](https://adaptiveus.com/blog/requirements-characteristics) | LN Mishra (CBAP) | 23/06/2025 | 9 đặc tính chất lượng §7.2 | secondary_source |
| [open-exam-prep CCBA study guide](https://open-exam-prep.com/study-guides/ccba/radd-modeling/specify-model-requirements) | open-exam-prep | Cập nhật 2026 | Tên element các task 5.x/7.x | secondary_source, độ tin cậy thấp |
| [Whizlabs CBAP practice questions](https://www.whizlabs.com/blog/cbap-practice-exam-questions/) | Whizlabs | không ghi | Bảng model category §7.1 | secondary_source |
| [Fhyzics BA Techniques](https://blog.fhyzics.net/fibaar/ba-techniques-use-cases-and-scenarios) | Bharath Ravi / IISCM | 2020 | Elements của §10.47, §10.30, §10.9, §10.1 | secondary_source |
| [Adaptive US: Requirements traceability](https://adaptiveus.com/blog/requirements-traceability-what-why-and-how) | Fathima Suhair | 14/11/2024 | Quan hệ trace §5.1 | secondary_source |
| [Techcanvass: prioritization techniques](https://techcanvass.com/blogs/requirement-prioritization-techniques) | Techcanvass | không ghi; trích dẫn BABOK 3.0 | Basis for prioritization §5.3 | secondary_source |
| [microTOOL: Prioritizing requirements](https://www.microtool.de/en/requirements-engineering/prioritizing-requirements-techniques-for-stakeholder-workshops/) | Ursula Meseberg | 03/11/2020 | 4 cách tiếp cận của §10.33 | secondary_source |

**Cảnh báo về độ tin cậy của nguồn thứ cấp.** open-exam-prep liệt kê "Impact Analysis", "Checklists" và "Cost-Benefit Analysis" là technique của BABOK. Cả ba **không có** trong danh mục 50 technique của KnowledgeHub, xem BABOK-10-TECHNIQUES. Nguồn này còn thêm cách tiếp cận "Buy, Build, Outsource, Enhance, Hybrid", trong khi task card IIBA chỉ nêu create, purchase và combination. Vì vậy, chỉ dùng nguồn này khi có nguồn thứ hai trùng nội dung, và không lấy câu "định nghĩa" của nó làm lời BABOK.

**Quy tắc dùng:** câu trả lời RAG được trích Glossary, Core Standard và task card như tài liệu IIBA công khai. Nội dung `secondary_source` phải kèm câu "theo nguồn thứ cấp, chưa đối chiếu bản BABOK có license". Rule engine không được báo `error` chỉ dựa trên một nguồn thứ cấp.

## BABOK-STRUCTURE — Cấu trúc BABOK v3

**Clause:** §1.4 Structure of the BABOK Guide; §1–§11; Appendix · **Evidence:** `verified_public` (mục lục, errata); `secondary_source` cho tên `.1 Purpose` của technique (suy luận) · **Locator:** [KnowledgeHub TOC](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/); trang Errata · **Nguồn:** IIBA

| Chương | Tên (theo KnowledgeHub) | Số mục |
| --- | --- | --- |
| Preface | Preface | — |
| 1 | Introduction | 1.1–1.4 |
| 2 | Business Analysis Key Concepts | 2.1–2.5 |
| 3 | Business Analysis Planning and Monitoring | 3.1–3.5 |
| 4 | Elicitation and Collaboration | 4.1–4.5 |
| 5 | Requirements Life Cycle Management | 5.1–5.5 |
| 6 | Strategy Analysis | 6.1–6.4 |
| 7 | Requirements Analysis and Design Definition | 7.1–7.6 |
| 8 | Solution Evaluation | 8.1–8.5 |
| 9 | Underlying Competencies | 9.1–9.6 |
| 10 | Techniques | 10.1–10.50 |
| 11 | Perspectives (Agile, Business Intelligence, Information Technology, Business Architecture, Business Process Management) | 11.1–11.5 |
| Appendix A | Glossary | — |
| Appendix B | Techniques to Task Mapping (tên xác nhận qua errata) | — |
| Appendix D | Summary of Changes from BABOK Guide v2.0 (tên xác nhận qua errata) | — |

Chương 3–8 là 6 **knowledge area** (KA, lĩnh vực kiến thức). Trang Errata viện dẫn các tiểu mục "5.1.5 Guidelines and Tools", "5.3.7 Stakeholders", "6.3.3 Inputs", "6.3.8 Outputs" và "8.5.4 Elements". Từ đó suy ra mỗi **task** có khung cố định:

| Tiểu mục | Nội dung | Xác nhận |
| --- | --- | --- |
| .1 | Purpose | suy luận theo thứ tự |
| .2 | Description | suy luận |
| .3 | Inputs | errata 6.3.3 |
| .4 | Elements: các khái niệm/hoạt động cốt lõi của task | errata 8.5.4 |
| .5 | Guidelines and Tools: tài nguyên dùng để biến input thành output | errata 5.1.5 |
| .6 | Techniques | suy luận |
| .7 | Stakeholders | errata 5.3.7 |
| .8 | Outputs | errata 6.3.8 |

Mỗi **technique** §10.x có khung: .1 Purpose, .2 Description (errata 10.13.2), .3 Elements (errata 10.16.3), .4 Usage Considerations, gồm .1 Strengths và .2 Limitations (errata 10.1.4, 10.41.4 ".1 Strengths"). Theo Core Standard (trang in 13, PDF 20), task có thể thực hiện tuần tự, lặp hoặc song song, theo bất kỳ thứ tự nào miễn là đã có input cần thiết. BABOK không quy định quy trình tuyến tính.

**Áp dụng (proposed):** chunk RAG cho một task nên gắn `task_id` (vd `7.2`) và `part` (`purpose|inputs|elements|outputs|techniques|stakeholders`). Khi đó rule engine truy vấn được, chẳng hạn, "outputs của 7.2".

## BABOK-2.1-BACCM — Business Analysis Core Concept Model

**Clause:** BABOK §2.1 ↔ Core Standard §1.3, Table 1.3.1, Figure 1.3.1 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 3–5, PDF 10–12; glossary "core concept" · **Nguồn:** [Core Standard](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf)

**BACCM** (Business Analysis Core Concept Model, mô hình khái niệm lõi) là khung khái niệm gồm 6 khái niệm. Mỗi khái niệm chỉ được hiểu đầy đủ trong quan hệ với 5 khái niệm còn lại.

| Core concept | Định nghĩa (diễn giải) | Ghi chú của Core Standard |
| --- | --- | --- |
| Change (thay đổi) | Hành động chuyển đổi để đáp ứng một need | Thay đổi có chủ đích, được kiểm soát qua hoạt động BA |
| Need (nhu cầu) | Vấn đề hoặc cơ hội cần giải quyết | Need có thể gây ra change; change cũng có thể tạo need mới |
| Solution (giải pháp) | Cách cụ thể để thỏa mãn một hay nhiều need trong một context | Giải quyết vấn đề hoặc giúp nắm bắt cơ hội |
| Stakeholder (bên liên quan) | Nhóm hoặc cá nhân có quan hệ với change, need hoặc solution | Thường xét theo interest, impact, influence |
| Value (giá trị) | Mức đáng giá, quan trọng hoặc hữu ích của một thứ với stakeholder trong context | Có thể hữu hình/vô hình, tuyệt đối/tương đối; có thể là giá trị âm (loss, risk, cost) |
| Context (bối cảnh) | Hoàn cảnh ảnh hưởng tới change, chịu ảnh hưởng của change và giúp hiểu change | Gồm văn hóa, công nghệ, quy định, đối thủ, hạ tầng… |

Core Standard nêu các công dụng của BACCM: mô tả nghề BA, dùng chung thuật ngữ, đánh giá quan hệ giữa các khái niệm, và đánh giá tác động tại bất kỳ thời điểm nào. Bộ câu hỏi kiểm tra gồm: thay đổi loại gì, need nào, solution nào, ai là stakeholder, stakeholder coi gì là value, context là gì. Nếu một core concept thay đổi, cần đánh giá lại các khái niệm còn lại.

**Ví dụ (nhóm tự đặt):** với FlintFlow, Need là "nhóm Capstone tốn nhiều thời gian viết SRS đúng template". Change là "đưa AI sinh bản nháp SRS/Actor/UC". Solution là ứng dụng FlintFlow. Stakeholder gồm sinh viên, mentor và hội đồng. Value là thời gian tiết kiệm và số lỗi template giảm. Context là template FPTU, kỳ học, quy định dùng AI.

**Áp dụng:** khi AI sinh mục Product Overview, rule engine có thể yêu cầu nêu ít nhất Need, Solution và Stakeholder (xem BA-01, BA-02).

## BABOK-2.2-KEY-TERMS — Thuật ngữ chính

**Clause:** BABOK §2.2 ↔ Core Standard §1.4 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 6–7, PDF 13–14; Glossary · **Nguồn:** Core Standard, Glossary

| Thuật ngữ | Diễn giải |
| --- | --- |
| Business analysis | Thực hành tạo điều kiện cho change trong enterprise bằng cách xác định need và đề xuất solution mang lại value cho stakeholder |
| Business analysis information | Mọi thông tin, ở mọi mức chi tiết, là input hoặc output của công việc BA: elicitation results, requirements, designs, solution options, solution scope, change strategy. BABOK chủ ý mở rộng đối tượng từ "requirements" sang "information" |
| Requirement | "A usable representation of a need" (Glossary). Tập trung vào loại value có thể đạt được nếu requirement được đáp ứng |
| Design | "A usable representation of a solution" (Glossary). Tập trung vào cách value có thể được hiện thực nếu solution được xây dựng |
| Enterprise | Hệ thống gồm một hay nhiều organization cùng các solution chúng dùng để theo đuổi mục tiêu chung. Ranh giới xác định theo change, không buộc trùng pháp nhân |
| Organization | Nhóm tự chủ dưới một người hoặc ban quản lý, tồn tại liên tục, khác project team |
| Plan | Đề xuất làm việc gì: sự kiện, phụ thuộc, trình tự, lịch, kết quả, tài nguyên, stakeholder |
| Risk | Tác động của tính không chắc chắn lên value của change, solution hoặc enterprise. Các cách xử lý: giảm hậu quả, loại nguồn, tránh, chia sẻ, chấp nhận hoặc tăng risk để nắm cơ hội |

Một requirement hoặc design có thể ở dạng tài liệu, nhưng BABOK không bắt buộc dạng tài liệu. Hình thức "thay đổi rất nhiều tùy hoàn cảnh" (Core Standard tr.6–7).

## BABOK-2.3-REQ-CLASSIFICATION — Lược đồ phân loại yêu cầu

**Clause:** BABOK §2.3 Requirements Classification Schema ↔ Core Standard §1.5 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 7, PDF 14; Glossary các mục business/stakeholder/solution/functional/non-functional/transition requirement · **Nguồn:** [Core Standard](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf), [Glossary](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/), [KnowledgeHub §2.3](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/2-business-analysis-key-concepts/2-3-requirements-classification-schema/) (chỉ tiêu đề)

| Loại | Trả lời câu hỏi | Diễn giải (Core Standard + Glossary) | Ghi chú |
| --- | --- | --- | --- |
| **Business requirement** (yêu cầu nghiệp vụ) | Vì sao thay đổi? | Mục tiêu (goal), chỉ tiêu (objective), kết quả (outcome) giải thích lý do khởi động change và cách đánh giá thành công | Áp dụng cho cả enterprise, một mảng nghiệp vụ hoặc một initiative |
| **Stakeholder requirement** (yêu cầu bên liên quan) | Cần gì? | Nhu cầu của một stakeholder hoặc nhóm stakeholder, phải đáp ứng để đạt business requirement | "Cầu nối" giữa business requirement và solution requirement. Glossary: "user requirement" là tên gọi khác |
| **Solution requirement** (yêu cầu giải pháp) | Muốn gì? | Năng lực (capability) và phẩm chất (quality) của solution để đáp ứng stakeholder requirement, đủ chi tiết để phát triển và triển khai | Chia hai nhóm con ở dưới |
| ↳ **Functional requirement** | | Năng lực solution phải có, xét theo hành vi (behaviour) và thông tin (information) solution quản lý | |
| ↳ **Non-functional requirement** (NFR; còn gọi quality of service requirement) | | Điều kiện để solution vẫn hiệu quả, hoặc phẩm chất solution phải có; không trực tiếp là hành vi | Glossary: "thường đo được" và đóng vai trò ràng buộc thiết kế tổng thể |
| **Transition requirement** (yêu cầu chuyển tiếp) | Điều kiện là gì? | Năng lực và điều kiện cần để chuyển từ current state sang future state; **không còn cần** sau khi change hoàn tất | Có tính tạm thời. Ví dụ của Core Standard: chuyển đổi dữ liệu, đào tạo, business continuity |

Hình 1.7.1 của Core Standard (trang in 11) gắn mỗi loại với một câu hỏi. Business: "Why do I want it?", Stakeholder: "What are the needs?", Solution: "What do I want?", Transition: "What are the conditions?". Chu trình lặp lại đến khi requirement được đáp ứng.

**Các thuật ngữ liên quan không thuộc lược đồ nhưng hay bị lẫn** (Glossary):
- *Business rule*: chỉ thị nghiệp vụ, không phải một loại requirement trong lược đồ; xem BABOK-10.9-BUSINESS-RULES.
- *Constraint*: yếu tố không thay đổi được, giới hạn solution hoặc solution option.
- *Assumption*: yếu tố được tin là đúng nhưng chưa xác nhận, hoặc đúng hiện tại nhưng có thể không đúng về sau.
- *Stated requirement*: requirement do stakeholder phát biểu, chưa được phân tích, verify hay validate. Thường phản ánh mong muốn hơn là need thực.

**Ví dụ phân loại (nhóm tự đặt) cho FlintFlow:**

| Phát biểu | Loại | Lý do |
| --- | --- | --- |
| "Giảm 50% thời gian nhóm Capstone hoàn thành bản nháp SRS đầu tiên trong kỳ học" | Business | Mục tiêu đo được, giải thích lý do làm |
| "Mentor cần xem được thay đổi giữa hai phiên bản SRS trước buổi review" | Stakeholder | Nhu cầu của một nhóm stakeholder |
| "Hệ thống sinh danh sách Actor kèm mô tả từ đoạn mô tả dự án" | Solution / Functional | Hành vi solution |
| "Sinh xong bản nháp Use Case cho dự án ≤ 30 UC trong ≤ 60 giây ở tải 20 người dùng đồng thời" | Solution / NFR | Phẩm chất đo được, có điều kiện |
| "Nhập SRS cũ dạng .docx của các nhóm kỳ trước vào kho mẫu trước khi go-live" | Transition | Chỉ cần trong giai đoạn chuyển đổi |
| "Một Use Case chỉ thuộc đúng một nhóm dự án" | Business rule (definitional) | Quy tắc nghiệp vụ, không phải hành vi |

**Lỗi thường gặp:** gộp mục tiêu nghiệp vụ với chức năng (vd "dùng AI để tăng chất lượng"); viết NFR định tính ("nhanh", "thân thiện"); bỏ qua transition requirement; coi business rule là functional requirement.

## BABOK-2.4-STAKEHOLDERS — Vai trò stakeholder chung

**Clause:** BABOK §2.4 ↔ Core Standard §1.6 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 8–10, PDF 15–17; Glossary · **Nguồn:** Core Standard, Glossary

Stakeholder là cá nhân hoặc nhóm mà BA có thể tương tác trực tiếp hay gián tiếp. Bất kỳ stakeholder nào cũng có thể là nguồn của requirement, assumption hoặc constraint. BABOK **không bắt buộc** initiative nào cũng có đủ các vai trò. Danh sách dưới đây không đầy đủ. Một người có thể giữ nhiều vai trò, và một vai trò có thể gồm nhiều người.

| Vai trò | Diễn giải | Vai trò thay thế / ví dụ (Core Standard) |
| --- | --- | --- |
| Business analyst | Luôn là stakeholder; chịu trách nhiệm thực hiện các hoạt động BA | — |
| Customer | Dùng hoặc có thể dùng sản phẩm/dịch vụ của enterprise; có thể có quyền theo hợp đồng hoặc đạo đức | — |
| Domain subject matter expert | Có hiểu biết sâu về chủ đề liên quan business need hoặc solution scope | Manager, process owner, legal staff, consultant |
| End user | Tương tác **trực tiếp** với solution | Mọi người tham gia quy trình hoặc dùng sản phẩm |
| Implementation subject matter expert | Có hiểu biết chuyên môn về triển khai một hay nhiều solution component | Solution architect, developer, DBA, information architect, usability analyst, trainer, change manager… |
| Operational support | Quản lý và bảo trì hằng ngày hệ thống/sản phẩm | Operations analyst, product analyst, help desk, release manager |
| Project manager | Quản lý công việc tạo solution, cân bằng scope, budget, schedule, resources, quality, risk | Project lead, technical lead, product manager, team leader |
| Regulator | Định nghĩa và thực thi tiêu chuẩn: luật, quản trị, kiểm toán | Government, regulatory body, auditor |
| Sponsor | Khởi xướng nỗ lực xác định need; phê duyệt công việc, kiểm soát budget và scope | Executive sponsor, project sponsor |
| Supplier | Bên ngoài ranh giới tổ chức, cung cấp sản phẩm hoặc dịch vụ | Provider, vendor, consultant |
| Tester | Xác định cách kiểm chứng solution đáp ứng requirement và thực hiện việc kiểm chứng | Quality assurance analyst |

**Stakeholder khác Actor.** Glossary định nghĩa actor là "A human, device, or system that plays some specified role in interacting with a solution". Stakeholder là "A group or individual with a relationship to the change, the need, or the solution". Như vậy:
- Mọi actor là người (hoặc đại diện cho người/tổ chức) đều thường là stakeholder, nhưng actor còn có thể là **thiết bị hoặc hệ thống**.
- Nhiều stakeholder không tương tác với solution, chẳng hạn sponsor, regulator, hội đồng chấm. Họ **không phải actor**.
- End user là loại stakeholder gần actor nhất.

**Ví dụ (nhóm tự đặt):** "Hội đồng chấm Capstone" là stakeholder (regulator/customer tùy cách nhìn), không phải actor nếu không đăng nhập FlintFlow. "Dịch vụ LLM bên ngoài" là actor dạng hệ thống, xét ở vai trò secondary actor, nhưng không phải stakeholder theo nghĩa con người.

## BABOK-2.5-REQ-DESIGN — Requirements và Designs

**Clause:** BABOK §2.5 ↔ Core Standard §1.7, Table 1.7.1, Figure 1.7.1 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 10–11, PDF 17–18 · **Nguồn:** Core Standard

- Requirement tập trung vào **need**, design tập trung vào **solution**. Ranh giới không phải lúc nào cũng rõ; cùng một technique được dùng để elicit, model và phân tích cả hai.
- Quá trình mang tính đệ quy: requirement dẫn tới design, design lại giúp phát hiện thêm requirement. Design do BA hoặc vai trò khác làm thì BA vẫn thường review để bảo đảm khớp requirement.
- Các task như Trace Requirements hay Specify and Model Requirements nhắc đến "requirements" nhưng **bao gồm cả designs**. Task card 2025 đổi tên thành "...Requirements and Designs".
- BA luôn hỏi "**why?**": vì sao requirement/design này cần cho value của enterprise.

Table 1.7.1 của Core Standard đưa ví dụ từng cặp, diễn giải như sau:

| Requirement | Design tương ứng |
| --- | --- |
| Xem dữ liệu bán hàng 6 tháng của nhiều đơn vị trong một màn hình | Bản phác dashboard |
| Giảm thời gian lấy và đóng gói đơn hàng | Process model |
| Ghi và truy cập bệnh sử của bệnh nhân | Mock-up màn hình với các trường dữ liệu cụ thể |
| Xây chiến lược, mục tiêu cho doanh nghiệp mới | Business Capability Model |
| Cung cấp thông tin bằng tiếng Anh và tiếng Pháp | Prototype hiển thị hai ngôn ngữ |

**Áp dụng cho SRS FPT:** mục Screen layout/mock-up và ERD là **design**. Mục Use Case Description và Functional Requirement là **requirement**, thường ở mức solution. Không coi "có mock-up" là bằng chứng requirement đã đầy đủ.

## BABOK-KA-MAP — 6 knowledge area và 30 task

**Clause:** BABOK §3–§8 ↔ Core Standard chương 2 · **Evidence:** `verified_public` · **Locator:** KnowledgeHub TOC; Core Standard trang in 13–42, PDF 20–49 · **Nguồn:** KnowledgeHub, Core Standard

| KA | Task (số BABOK) | Output chính (Core Standard) |
| --- | --- | --- |
| 3 Business Analysis Planning and Monitoring | 3.1 Plan Business Analysis Approach · 3.2 Plan Stakeholder Engagement · 3.3 Plan Business Analysis Governance · 3.4 Plan Business Analysis Information Management · 3.5 Identify Business Analysis Performance Improvements | BA Approach; Stakeholder Engagement Approach; Governance Approach; Information Management Approach; BA Performance Assessment |
| 4 Elicitation and Collaboration | 4.1 Prepare for Elicitation · 4.2 Conduct Elicitation · 4.3 Confirm Elicitation Results · 4.4 Communicate Business Analysis Information · 4.5 Manage Stakeholder Collaboration | Elicitation Activity Plan; Elicitation Results (unconfirmed); Elicitation Results (confirmed); BA Information (communicated); Stakeholder Engagement |
| 5 Requirements Life Cycle Management | 5.1 Trace · 5.2 Maintain · 5.3 Prioritize · 5.4 Assess Requirements Changes · 5.5 Approve | Requirements/Designs (traced, maintained, prioritized); Requirements/Designs Change Assessment; Requirements/Designs (approved) |
| 6 Strategy Analysis | 6.1 Analyze Current State · 6.2 Define Future State · 6.3 Assess Risks · 6.4 Define Change Strategy | Current State Description, Business Requirements; Business Objectives, Future State Description, Potential Value; Risk Analysis Results; Change Strategy, Solution Scope |
| 7 Requirements Analysis and Design Definition (RADD) | 7.1 Specify and Model · 7.2 Verify · 7.3 Validate · 7.4 Define Requirements Architecture · 7.5 Define Design Options · 7.6 Analyze Potential Value and Recommend Solution | Requirements (specified and modelled); (verified); (validated); Requirements Architecture; Design Options; Solution Recommendation |
| 8 Solution Evaluation | 8.1 Measure Solution Performance · 8.2 Analyze Performance Measures · 8.3 Assess Solution Limitations · 8.4 Assess Enterprise Limitations · 8.5 Recommend Actions to Increase Solution Value | Solution Performance Measures; Performance Analysis; Solution Limitation; Enterprise Limitation; Recommended Actions |

Trạng thái của requirement được ghi trong ngoặc như một phần tên output, ví dụ "Requirements (verified)". **Áp dụng (proposed):** trường `status` của requirement trong FlintFlow có thể dùng chuỗi trạng thái stated → specified/modelled → verified → validated → prioritized → approved. Thứ tự này do nhóm đề xuất. BABOK nói requirement có thể ở nhiều trạng thái cùng lúc và không quy định chuỗi tuyến tính (Core Standard tr.23).

## BABOK-3-PLANNING — Business Analysis Planning and Monitoring

**Clause:** BABOK §3.1–3.5 ↔ Core Standard §2.1 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 14–17, PDF 21–24 · **Nguồn:** Core Standard

| Task | Purpose (diễn giải) | Inputs (Core Standard) | Output |
| --- | --- | --- | --- |
| 3.1 Plan Business Analysis Approach | Xác định phương pháp thực hiện công việc BA, từ chọn methodology đến từng hoạt động, deliverable | Needs | Business Analysis Approach: ai làm, khi nào, deliverable, technique |
| 3.2 Plan Stakeholder Engagement | Lập cách thiết lập và duy trì quan hệ làm việc với stakeholder | Needs; BA Approach | Stakeholder Engagement Approach: danh sách stakeholder, đặc điểm, vai trò và trách nhiệm, cách cộng tác và truyền thông |
| 3.3 Plan Business Analysis Governance | Xác định cách ra quyết định về requirements/designs: review, change control, approval, prioritization | BA Approach; Stakeholder Engagement Approach | Governance Approach: ai có quyền ưu tiên, ai duyệt thay đổi, quy trình quản lý thay đổi |
| 3.4 Plan BA Information Management | Xác định cách lưu, truy cập và tích hợp thông tin BA (gồm requirements và designs) | BA Approach; Governance Approach; Stakeholder Engagement Approach | Information Management Approach |
| 3.5 Identify BA Performance Improvements | Đánh giá công việc BA và lập kế hoạch cải tiến | BA Approach; Performance Objectives (external) | BA Performance Assessment: so kế hoạch với thực tế, nguyên nhân sai lệch |

**Liên hệ FlintFlow:** quyết định "ai duyệt SRS baseline", "khi nào đóng băng UC" thuộc Governance Approach (3.3). Định dạng lưu requirement và attribute trong FlintFlow thuộc Information Management Approach (3.4), là input của 7.4.

## BABOK-4-ELICITATION — Elicitation and Collaboration

**Clause:** BABOK §4.1–4.5 ↔ Core Standard §2.2 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 18–22, PDF 25–29; KnowledgeHub (slug §4.2 dùng dấu chấm: `4.2-conduct-elicitation`) · **Nguồn:** Core Standard

Elicitation là rút ra hoặc nhận thông tin từ stakeholder hay nguồn khác. Glossary gọi đây là quá trình lặp để suy ra và trích xuất thông tin. Collaboration là hai hay nhiều người cùng làm việc vì mục tiêu chung. Elicitation **không phải một "phase"**: nó diễn ra liên tục, có kế hoạch hoặc không có kế hoạch.

| Task | Purpose | Input | Output |
| --- | --- | --- | --- |
| 4.1 Prepare for Elicitation | Hiểu phạm vi hoạt động elicitation, chọn technique, chuẩn bị tài nguyên | Needs; Stakeholder Engagement Approach | Elicitation Activity Plan: logistics, scope, technique, tài liệu hỗ trợ |
| 4.2 Conduct Elicitation | Khai thác, khám phá, xác định thông tin liên quan change | Elicitation Activity Plan | Elicitation Results (unconfirmed) |
| 4.3 Confirm Elicitation Results | Kiểm tính chính xác và nhất quán với thông tin khác; tìm mâu thuẫn và khoảng trống | Elicitation Results (unconfirmed) | Elicitation Results (confirmed) |
| 4.4 Communicate BA Information | Bảo đảm stakeholder hiểu chung thông tin BA, đúng thời điểm, đúng hình thức và thuật ngữ | BA Information; Stakeholder Engagement Approach | BA Information (communicated): khi stakeholder đích đã hiểu nội dung và hàm ý |
| 4.5 Manage Stakeholder Collaboration | Khuyến khích stakeholder cùng hướng tới mục tiêu chung | Stakeholder Engagement Approach; BA Performance Assessment | Stakeholder Engagement |

Errata bổ sung: output của 4.2 và 4.3 cũng được dùng bởi 7.1 Specify and Model Requirements.

**Liên hệ FlintFlow (nhóm đề xuất):** đoạn mô tả dự án người dùng nhập vào là **elicitation result (unconfirmed)**. Bản nháp Actor/UC do AI sinh **chưa phải** requirement đã verify hay validate. Giao diện nên có bước người dùng xác nhận, tương ứng 4.3 Confirm Elicitation Results, trước khi coi là input của 7.1.

## BABOK-5-RLCM — Requirements Life Cycle Management: tổng quan

**Clause:** BABOK §5 ↔ Core Standard §2.3 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 23–24, PDF 30–31 · **Nguồn:** Core Standard

- Mục đích: bảo đảm business, stakeholder và solution requirements cùng designs **khớp với nhau** và solution hiện thực chúng. Đồng thời giữ thông tin BA để dùng về sau.
- Vòng đời requirement **bắt đầu** khi một business need được biểu diễn thành requirement, **tiếp tục** qua phát triển solution, và **kết thúc** khi solution cùng các requirement biểu diễn nó bị loại bỏ (retire). Quản lý requirement không dừng khi solution đã triển khai.
- "Life cycle" ở đây khác methodology. Đó là các trạng thái requirement đi qua, và requirement có thể ở **nhiều trạng thái cùng lúc**.
- Inputs của KA: Requirements, Designs, Proposed Change, Requirements (verified) từ 7.2. Outputs: traced, maintained, prioritized, change assessment, approved (Figure Input/Output, trang in 24).
- Glossary định nghĩa *requirements life cycle* là các giai đoạn requirement đi qua từ khi khởi tạo đến khi retire.

## BABOK-5.1-TRACE — Trace Requirements

**Clause:** BABOK §5.1 ↔ Core Standard "Trace Requirements CS (5.1)" · **Evidence:** `verified_public` (purpose/inputs/outputs, glossary); `secondary_source` (elements, đối chiếu 2 nguồn) · **Locator:** Core Standard trang in 25, PDF 32; [KnowledgeHub §5.1](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/5-requirements-life-cycle-management/5-1-trace-requirements/) · **Nguồn:** Core Standard; [open-exam-prep 5.1](https://open-exam-prep.com/study-guides/ccba/requirements-lifecycle/trace-requirements); [Adaptive US traceability](https://adaptiveus.com/blog/requirements-traceability-what-why-and-how)

**Purpose:** bảo đảm requirements và designs ở các mức khác nhau khớp với nhau, và quản lý ảnh hưởng của thay đổi ở một mức lên các requirement liên quan.
**Description:** phân tích và duy trì quan hệ giữa requirements, designs, solution components và work product khác, phục vụ **impact analysis, coverage, allocation**.

| | Core Standard (verified_public) |
| --- | --- |
| Inputs | Requirements, truy vết được tới goal, objective, business/stakeholder/solution/transition requirement, solution component, visual, business rule, work product khác; Designs |
| Outputs | Requirements (traced), Designs (traced): có quan hệ xác định rõ với requirement khác, solution component, release/phase/iteration trong solution scope, để thấy rõ coverage và ảnh hưởng của change |

Glossary: *requirements traceability* là khả năng theo dõi quan hệ giữa các tập requirements và designs, từ stakeholder need ban đầu đến solution đã hiện thực. Traceability hỗ trợ change control vì xác định được nguồn gốc và các phần bị ảnh hưởng.

**Elements** (`secondary_source`, đối chiếu 2 nguồn: open-exam-prep và Adaptive US):

| Element | Diễn giải |
| --- | --- |
| .1 Level of Formality | Mức chi tiết truy vết cân nhắc theo value, bản chất và mục đích dùng của từng liên kết. Công sức tăng mạnh khi số requirement hoặc mức hình thức tăng |
| .2 Relationships | **Derive**: requirement được suy ra từ requirement khác (stakeholder ← business; solution ← stakeholder). **Depends**: một requirement phụ thuộc requirement khác, gồm *Necessity* (chỉ hiện thực được khi requirement kia đã hiện thực) và *Effort* (dễ hơn nếu requirement kia đã có). **Satisfy**: quan hệ giữa phần tử hiện thực (solution component, design) và requirement mà nó thỏa mãn. **Validate**: quan hệ giữa requirement và test case/acceptance criteria dùng để kiểm solution đáp ứng requirement |
| .3 Traceability Repository | Nơi lưu quan hệ truy vết: công cụ quản lý requirement, ma trận… Errata: 5.1.5 dùng thuật ngữ "Requirements Life Cycle Management Tools" |

Adaptive US mô tả Depends bằng hai cụm "chỉ hiện thực được nếu…" và "dễ hiện thực hơn nếu…" mà không dùng nhãn Necessity/Effort. Hai nhãn này chỉ có trong open-exam-prep. → Cần đối chiếu bản BABOK.

**Ví dụ (nhóm tự đặt), chuỗi truy vết trong FlintFlow:**

```
BR-01 (business: giảm thời gian viết SRS)
  └─derive→ SR-03 (stakeholder: nhóm SV cần bản nháp UC từ mô tả dự án)
       └─derive→ FR-12 (solution: sinh danh sách UC kèm actor)
            ├─satisfy← UC-05 "Generate Use Case List" (design/spec)
            ├─depends(necessity)→ FR-10 (sinh danh sách Actor)
            └─validate← TC-12a, AC-12 (test/acceptance)
```

**Lỗi thường gặp:** UC không truy về stakeholder need nào (orphan); requirement không có test hay acceptance criteria (không có Validate link); trace một chiều nên không làm được impact analysis.

## BABOK-5.2-MAINTAIN — Maintain Requirements và requirements attributes

**Clause:** BABOK §5.2 ↔ Core Standard "Maintain Requirements CS (5.2)" · **Evidence:** `verified_public` (purpose/IO, glossary); `secondary_source` (elements, 1 nguồn, chưa đối chiếu) · **Locator:** Core Standard trang in 25–26, PDF 32–33 · **Nguồn:** Core Standard; [open-exam-prep 5.2](https://www.open-exam-prep.com/study-guides/ccba/requirements-lifecycle/maintain-requirements)

- **Purpose:** giữ requirement chính xác và nhất quán **trong và sau** change, suốt vòng đời; hỗ trợ tái sử dụng requirement cho solution khác.
- **Inputs:** Requirements (gồm goal, objective, business, stakeholder, solution, transition requirement); Designs.
- **Outputs:** Requirements (maintained): định nghĩa một lần, dùng lâu dài, có thể thành tài sản quy trình của tổ chức. Requirement chưa được duyệt hoặc chưa hiện thực vẫn có thể được giữ cho initiative sau. Designs (maintained): có thể tái sử dụng như component độc lập.
- **Elements** (secondary): .1 Maintain Requirements; .2 Maintain Attributes; .3 Reusing Requirements.

Glossary: **requirements attribute** là đặc điểm hoặc thuộc tính của requirement, dùng hỗ trợ quản lý requirement. Bộ attribute cụ thể **không** được xác minh từ nguồn chính chủ. Bộ dưới đây là **đề xuất của nhóm**, dựa trên các attribute được nhắc tới trong nguồn thứ cấp (status, priority, stability, ownership) và nhu cầu của rule engine:

| Attribute (đề xuất) | Ý nghĩa | Liên hệ BABOK |
| --- | --- | --- |
| `id` | Mã duy nhất, không tái dùng | Traceability (5.1) |
| `type` | business / stakeholder / functional / nfr / transition / business_rule / constraint / assumption | §2.3 |
| `source` | Stakeholder hoặc tài liệu gốc | 5.1, 4.3 |
| `owner` | Người chịu trách nhiệm | 3.3 |
| `status` | stated, specified, verified, validated, approved, deferred, retired | Trạng thái output các task |
| `priority` | Theo basis của 5.3 | 5.3 |
| `stability` | Khả năng thay đổi | 5.3 (basis "stability") |
| `version`, `changed_at` | Phiên bản | 5.2, 5.4 |
| `acceptance_criteria` | Điều kiện chấp nhận | 10.1 |
| `trace_links[]` | derive/depends/satisfy/validate | 5.1 |

## BABOK-5.3-PRIORITIZE — Prioritize Requirements

**Clause:** BABOK §5.3 ↔ Core Standard "Prioritize Requirements CS (5.3)" · **Evidence:** `verified_public` (purpose/IO, glossary); `secondary_source` (elements, đối chiếu 2 nguồn) · **Locator:** Core Standard trang in 26, PDF 33; errata 5.3.7 · **Nguồn:** Core Standard; [open-exam-prep 5.3](https://open-exam-prep.com/study-guides/ccba/requirements-lifecycle/prioritize-requirements); [Techcanvass](https://techcanvass.com/blogs/requirement-prioritization-techniques)

- **Purpose:** xếp requirement theo **mức quan trọng tương đối**. **Description:** đánh giá value, mức khẩn cấp và risk của requirement/design để công việc phân tích hoặc chuyển giao tập trung vào phần quan trọng nhất ở mỗi thời điểm.
- **Inputs:** Requirements, Designs ở dạng text, ma trận, sơ đồ hoặc prototype, sẵn sàng để ưu tiên. **Outputs:** Requirements (prioritized), Designs (prioritized).
- Glossary: *prioritization* là xác định mức quan trọng tương đối của một tập mục để quyết định thứ tự xử lý.
- Errata: bổ sung **Domain Subject Matter Expert** vào danh sách stakeholder của 5.3 (5.3.7).

**Basis for Prioritization** (`secondary_source`, đối chiếu 2 nguồn; hai nguồn trùng đủ 8 tiêu chí):

| Tiêu chí | Diễn giải |
| --- | --- |
| Benefit | Lợi ích nhận được khi đáp ứng requirement |
| Penalty | Hậu quả nếu không đáp ứng (vd vi phạm quy định) |
| Cost | Công sức và tài nguyên để hiện thực |
| Risk | Khả năng requirement không mang lại value mong đợi hoặc khó hiện thực |
| Dependencies | Quan hệ phụ thuộc: requirement ưu tiên thấp có thể phải làm trước vì requirement ưu tiên cao cần nó |
| Time Sensitivity | Mức khẩn cấp theo thời điểm, cửa sổ thị trường |
| Stability | Khả năng requirement giữ ổn định; requirement biến động thường được hoãn |
| Regulatory or Policy Compliance | Bắt buộc do quy định hoặc chính sách |

Nguồn thứ cấp còn nêu các element "Challenges of Prioritization" (stakeholder bất đồng, mọi thứ đều "Must") và "Continual Prioritization" (ưu tiên lại khi có thông tin mới). Hai element này chưa đối chiếu.

**Ví dụ (nhóm tự đặt):** "Export SRS ra Word đúng template FPT" có Penalty cao (không nộp được báo cáo) và Time Sensitivity cao (hạn nộp kỳ). "Gợi ý icon actor" có Benefit thấp. Kết quả là xếp Export trước.

## BABOK-5.4-ASSESS-CHANGES — Assess Requirements Changes

**Clause:** BABOK §5.4 ↔ Core Standard "Assess Requirements Changes CS (5.4)" · **Evidence:** `verified_public` (purpose/IO); `secondary_source` (elements, chưa thống nhất giữa các nguồn) · **Locator:** Core Standard trang in 26–27, PDF 33–34; errata Figure 5.4.1 · **Nguồn:** Core Standard; [open-exam-prep 5.4](https://www.open-exam-prep.com/study-guides/ccba/requirements-lifecycle/assess-requirements-changes)

- **Purpose:** đánh giá hàm ý của thay đổi đề xuất đối với requirements và designs. **Description:** đánh giá stakeholder requirement mới hoặc thay đổi để xác định có cần xử lý trong phạm vi change hay không.
- **Inputs:** Proposed Change, xuất hiện bất kỳ lúc nào, do chiến lược, stakeholder, luật hoặc quy định thay đổi; Requirements; Designs.
- **Outputs:** Requirements Change Assessment, Designs Change Assessment. Mỗi output là **khuyến nghị approve, modify hoặc deny** thay đổi. Errata: Figure 5.4.1 đánh số nhầm hai output này thành "5.1"; đúng phải là "5.4".
- **Elements** (`secondary_source`): Assessment Formality (mức hình thức: change control board trong predictive, đàm phán backlog trong adaptive); Impact Analysis (xét benefit/value, cost, schedule, resource, risk, dependency); Impact Resolution / recommendation. Các nguồn thứ cấp **không thống nhất** về danh sách yếu tố của Impact Analysis và tên element thứ ba → `needs_review` nếu dùng để chấm.

**Áp dụng (proposed):** khi người dùng sửa mô tả dự án sau khi đã sinh SRS, FlintFlow nên liệt kê Actor/UC/FR bị ảnh hưởng (dùng trace links) trước khi sinh lại. Đây là impact analysis tối thiểu.

## BABOK-5.5-APPROVE — Approve Requirements

**Clause:** BABOK §5.5 ↔ Core Standard "Approve Requirements CS (5.5)" · **Evidence:** `verified_public` (purpose/IO); `secondary_source` (elements, 1 nguồn) · **Locator:** Core Standard trang in 27, PDF 34 · **Nguồn:** Core Standard; [open-exam-prep 5.5](https://www.open-exam-prep.com/study-guides/ccba/requirements-lifecycle/approve-requirements)

- **Purpose:** đạt sự đồng thuận và phê duyệt requirements/designs để công việc BA tiếp tục hoặc việc xây dựng solution được tiến hành. Thực hiện cùng stakeholder trong quy trình governance (3.3).
- **Inputs:** **Requirements (verified)**, tức đã đủ chất lượng làm nền cho đặc tả và phát triển tiếp; Designs sẵn sàng.
- **Outputs:** Requirements (approved), Designs (approved): được stakeholder đồng ý, sẵn sàng cho bước tiếp.
- **Elements** (secondary): Understand Stakeholder Roles; Conflict and Issue Management; Gain Consensus; Track and Communicate Approval.

**Điểm quan trọng:** input của 5.5 là requirement **đã verify**. Phê duyệt một bản chưa verify là sai trình tự theo Core Standard. **Áp dụng:** nút "Approve baseline" trong FlintFlow chỉ nên bật khi checklist verify (BA-08…BA-14) không còn lỗi `error`.

## BABOK-6-STRATEGY — Strategy Analysis

**Clause:** BABOK §6.1–6.4 ↔ Core Standard §2.4 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 28–32, PDF 35–39 · **Nguồn:** Core Standard

| Task | Purpose | Inputs | Outputs |
| --- | --- | --- | --- |
| 6.1 Analyze Current State | Hiểu vì sao enterprise cần thay đổi và cái gì bị ảnh hưởng | Elicitation Results (errata: confirmed); Needs | Current State Description; **Business Requirements** |
| 6.2 Define Future State | Xác định các điều kiện cần để đáp ứng business need | Business Requirements | **Business Objectives**; Future State Description; Potential Value |
| 6.3 Assess Risks | Hiểu hậu quả không mong muốn của các lực trong và ngoài | Business Objectives; Elicitation Results (confirmed); Influences; Potential Value; Requirements (prioritized); errata thêm Designs (prioritized) | Risk Analysis Results |
| 6.4 Define Change Strategy | Xây và đánh giá các cách tiếp cận change, chọn cách được khuyến nghị (gap analysis current↔future) | Current/Future State Description; Risk Analysis Results; Stakeholder Engagement Approach | Change Strategy; **Solution Scope** |

Glossary: *solution scope* là tập capability mà solution phải cung cấp để đáp ứng business need. *Scope* là ranh giới của sự kiểm soát, change, solution hoặc need. *Business goal* là trạng thái định tính tổ chức muốn đạt. *Business objective* là kết quả khách quan, đo được, chứng tỏ goal đã đạt. Core Standard có lỗi đánh máy "Define Future State CA (6.2)", đúng là "CS".

**Liên hệ:** business requirement trong SRS thường được rút ra từ đây. Solution Scope (6.4) là input của 7.4 và căn cứ validation (7.3). Phần "scope" trong Product Overview của SRS FPT tương ứng Solution Scope.

## BABOK-7-RADD — Requirements Analysis and Design Definition: tổng quan

**Clause:** BABOK §7 ↔ Core Standard §2.5; task cards v.2.0 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 33–37, PDF 40–44; task cards PDF trang 1–6 · **Nguồn:** Core Standard; [task cards RADD](https://www.iiba.org/contentassets/be4de45e850d4d30b78e8c4d7ca0c967/all-task-cards-req-analysis-and-design-def.pdf); [KnowledgeHub §7](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/7-requirements-analysis-and-design-definition/)

KA này mô tả việc cấu trúc và tổ chức requirement thu được từ elicitation, đặc tả và mô hình hóa, verify và validate, xác định solution option và ước lượng potential value. Phạm vi trải từ ý tưởng ban đầu đến solution được khuyến nghị. Khác biệt chính giữa requirement và design nằm ở **cách dùng và người dùng**: design của người này có thể là requirement của người khác. Mức chi tiết tùy người tiêu thụ thông tin.

**Task cards 2025 (v.2.0)**, mỗi task một trang PDF:

| PDF | Tên trên card | Purpose (diễn giải) | Techniques "frequently used" | Stakeholder điển hình | Input → Output |
| --- | --- | --- | --- | --- | --- |
| 1 | Specify and Model Requirements and Designs | Phân tích, tổng hợp, tinh chỉnh elicitation results thành requirements và designs | Acceptance and evaluation criteria; Data modelling; Interface analysis; Use cases and scenarios; User stories | Bất kỳ ai có kiến thức liên quan | Elicitation Results → Requirements, Designs (Specified and Modelled) |
| 2 | Verify Requirements and Designs | Bảo đảm đặc tả và mô hình đạt chuẩn chất lượng và dùng được cho mục đích của chúng | Acceptance and evaluation criteria; Item tracking; Metrics and KPIs; Reviews | SME và người có kiến thức | (Specified and Modelled) → (Verified) |
| 3 | Validate Requirements and Designs | Bảo đảm mọi requirement/design khớp business requirements và hỗ trợ value cần thiết | Acceptance and evaluation criteria; Financial analysis; Item tracking; Metrics and KPIs; Reviews | SME và người có kiến thức | (Specified and Modelled) → (Validated) |
| 4 | Define Requirements Architecture | Bảo đảm requirements và designs hỗ trợ lẫn nhau để đạt đầy đủ mục tiêu | Data modelling; Functional decomposition; Process modelling; Scope modelling; Workshops | Nhiều stakeholder giúp xác định, xác nhận và đánh giá tính đầy đủ | Requirements, Information Management Approach, Solution Scope → Requirements Architecture |
| 5 | Define Design Options | Xác định cách tiếp cận solution, cơ hội cải tiến, phân bổ requirement cho solution component, biểu diễn design option | Brainstorming; Document analysis; Mind mapping; Root cause analysis; Vendor assessment | PM, implementation SME, operational support… | Requirements (Validated, Prioritized), Change Strategy, Requirements Architecture → Design Options |
| 6 | Analyze Potential Value and Recommend Solution | Ước lượng potential value của từng option và chọn option phù hợp nhất | Acceptance and evaluation criteria; Estimation; Financial analysis; Metrics and KPIs; Risk analysis and management | Sponsor, PM, SME, customer, user… | Potential Value, Design Options → Solution Recommendation |

Mỗi card ghi rõ đây chỉ là technique "thường dùng" và chỉ dẫn xem BABOK để có danh sách đầy đủ. **Không** suy ra danh sách technique đầy đủ của BABOK từ card. Mục "Reference (Guidelines and Tools)" trên card có: 7.1 gồm modelling notations/standards, modelling tools, requirements architecture, RLCM tools, solution scope; 7.3 gồm business objectives, future state description, potential value, solution scope.

**Lưu ý về tên gọi:** Core Standard (tr.33, tr.36) ghi task 7.5 là "Define Solution Options" ở danh sách task và câu mô tả. Errata BABOK v3 xác nhận tên đúng là **Define Design Options**. Card 2025 thêm "and Designs" vào tên ba task 7.1–7.3; đây là tài liệu hỗ trợ, không phải edition mới của BABOK.

## BABOK-7.1-SPECIFY-MODEL — Specify and Model Requirements

**Clause:** BABOK §7.1 ↔ Core Standard "Specify and Model Requirements CS (7.1)"; card PDF 1 · **Evidence:** `verified_public` (purpose/IO/card); `secondary_source` (elements và model categories, đối chiếu 2 nguồn, lệch 1 mục) · **Locator:** Core Standard trang in 34–35, PDF 41–42; [KnowledgeHub §7.1](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/7-requirements-analysis-and-design-definition/7-1--specify-and-model-requirements/) · **Nguồn:** Core Standard; task card; [Whizlabs](https://www.whizlabs.com/blog/cbap-practice-exam-questions/); [open-exam-prep 7.1](https://open-exam-prep.com/study-guides/ccba/radd-modeling/specify-model-requirements)

- **Purpose:** phân tích, tổng hợp và tinh chỉnh elicitation results thành requirements và designs.
- **Inputs:** Elicitation Results (any state). Mô hình hóa có thể bắt đầu từ bất kỳ kết quả elicitation nào và có thể dẫn tới elicitation thêm. Hai việc có thể tuần tự, lặp hoặc đồng thời.
- **Outputs:** Requirements (specified and modelled): requirement và/hoặc design ở dạng **text, matrices, diagrams**.
- Card 2025: value của task là làm nền thảo luận để stakeholder đồng thuận về solution option.

Glossary: *model* là biểu diễn đơn giản hóa thực tế, phục vụ một đối tượng cụ thể để hỗ trợ phân tích, truyền đạt và hiểu. *Requirements model* là biểu diễn trừu tượng, thường bằng hình, của một khía cạnh current hoặc future state.

**Elements** (`secondary_source`): .1 Model Requirements; .2 Analyze Requirements (phân rã, tìm mẫu, phát hiện khoảng trống); .3 Represent Requirements and Attributes; .4 Implement the Appropriate Levels of Abstraction.

**Định dạng mô hình** (secondary, 2 nguồn): **Matrices**, dùng khi requirement có cấu trúc phức tạp nhưng đồng nhất, tách được thành các phần áp dụng cho mọi dòng (vd roles and permissions, traceability, CRUD). **Diagrams**, dùng để biểu diễn trực quan luồng, cấu trúc, quan hệ. Text là dạng còn lại theo output của Core Standard.

**Model categories** (`secondary_source`). Whizlabs liệt kê đủ 5 nhóm kèm technique và dẫn "BABOK p.138". open-exam-prep chỉ liệt kê 4 nhóm, thiếu Capability. → Năm nhóm được ghi dưới đây, Capability đánh dấu cần đối chiếu.

| Category | Mô hình hóa điều gì | Technique BABOK đại diện |
| --- | --- | --- |
| People and Roles | Tổ chức, nhóm người, vai trò và quan hệ với enterprise/solution | 10.32 Organizational Modelling; 10.39 Roles and Permissions Matrix; 10.43 Stakeholder List, Map, or Personas |
| Rationale | "Vì sao": lý do, quy tắc, quyết định, nguyên nhân | 10.17 Decision Modelling; 10.41 Scope Modelling; 10.8 Business Model Canvas; 10.40 Root Cause Analysis; 10.9 Business Rules Analysis |
| Activity Flow | Trình tự hành động, sự kiện, luồng | 10.35 Process Modelling; **10.47 Use Cases and Scenarios**; 10.48 User Stories |
| Capability (cần đối chiếu) | Tính năng/chức năng của enterprise hoặc solution | 10.6 Business Capability Analysis; 10.22 Functional Decomposition; 10.36 Prototyping |
| Data and Information | Đặc điểm và trao đổi thông tin | 10.12 Data Dictionary; 10.13 Data Flow Diagrams; 10.15 Data Modelling; 10.23 Glossary; 10.44 State Modelling; 10.24 Interface Analysis |

Errata bổ sung 10.39 Roles and Permissions Matrix vào mapping của 7.1 (Appendix B). Điều này khớp với nhóm People and Roles.

**Levels of abstraction** (secondary): mức chi tiết của mô hình chọn theo đối tượng đọc. Sponsor cần mức khái quát (context, mục tiêu). Đội phát triển cần mức chi tiết (luồng, dữ liệu, quy tắc).

**Áp dụng cho FlintFlow:** UC diagram và UC description thuộc Activity Flow. Danh sách Actor thuộc People and Roles. ERD và data dictionary thuộc Data and Information. Bảng BR thuộc Rationale. Một SRS chỉ có UC mà thiếu hẳn nhóm Data and Information hoặc Rationale có thể thiếu góc nhìn (BA-17).

## BABOK-7.2-VERIFY — Verify Requirements và đặc tính chất lượng

**Clause:** BABOK §7.2 ↔ Core Standard "Verify Requirements CS (7.2)"; card PDF 2 · **Evidence:** `verified_public` (purpose/IO/card/glossary); `secondary_source` (9 đặc tính, đối chiếu 2 nguồn) · **Locator:** Core Standard trang in 35, PDF 42; [KnowledgeHub §7.2](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/7-requirements-analysis-and-design-definition/7-2-verify-requirements/) · **Nguồn:** Core Standard; task card; [Adaptive US](https://adaptiveus.com/blog/requirements-characteristics); [open-exam-prep 7.2](https://open-exam-prep.com/study-guides/ccba/radd-modeling/verify-requirements)

- **Purpose:** bảo đảm đặc tả và mô hình requirements/designs đạt chuẩn chất lượng và dùng được cho mục đích của chúng.
- **Description:** bộ requirement/design đủ chi tiết để một stakeholder cụ thể dùng được, **nhất quán nội bộ**, chất lượng cao.
- **Input:** Requirements (specified and modelled): kiểm text có cấu trúc tốt, ma trận và ký pháp mô hình dùng đúng. **Output:** Requirements (verified): đủ chất lượng làm nền cho công việc tiếp theo.
- Card 2025: verification giúp requirement/design được định nghĩa đúng và **sẵn sàng cho validation**; mức verify phù hợp giúp giảm làm lại.
- Glossary: *requirements verification* đánh giá requirement được định nghĩa đúng và ở mức chất lượng chấp nhận được. *Verified requirement* là requirement đã được review, định nghĩa đúng, tuân thủ chuẩn/hướng dẫn và đủ chi tiết.

**Characteristics of Requirements and Designs Quality.** Hai nguồn thứ cấp liệt kê trùng 9 tên. Phần diễn giải dưới đây theo Adaptive US, bỏ các phần thêm thắt của open-exam-prep.

| # | Đặc tính | Diễn giải | Dấu hiệu vi phạm có thể phát hiện tự động (đề xuất) |
| --- | --- | --- | --- |
| 1 | Atomic | Tự chứa, hiểu được độc lập với requirement/design khác | Một câu chứa nhiều "và/hoặc" nối hai hành vi; tham chiếu "như trên" |
| 2 | Complete | Đủ để dẫn dắt công việc tiếp ở mức chi tiết phù hợp | UC thiếu actor, trigger, postcondition; FR thiếu dữ liệu vào/ra |
| 3 | Consistent | Khớp nhu cầu stakeholder đã xác định, không xung đột requirement khác | Hai FR mâu thuẫn; actor tên khác nhau giữa bảng Actor và sơ đồ |
| 4 | Concise | Không có nội dung thừa | Lặp mô tả; chèn lời giải thích kỹ thuật dài |
| 5 | Feasible | Hợp lý, khả thi trong lịch, ngân sách, risk đã thỏa thuận, hoặc đủ khả thi để thử nghiệm tiếp | Cam kết "100% chính xác" cho đầu ra AI |
| 6 | Unambiguous | Phát biểu rõ để xác định được solution có đáp ứng need hay không | Từ mơ hồ: "nhanh", "dễ dùng", "phù hợp", "v.v." |
| 7 | Testable | Kiểm chứng được requirement/design đã được đáp ứng; mức kiểm chứng tùy mức trừu tượng | NFR không có số đo, điều kiện; FR không có acceptance criteria |
| 8 | Prioritized | Được nhóm, xếp hạng hoặc thương lượng mức quan trọng so với requirement khác | Thiếu trường priority; mọi requirement cùng mức "High" |
| 9 | Understandable | Dùng thuật ngữ chung của người đọc | Thuật ngữ không có trong Glossary dự án; viết tắt không giải thích |

Danh sách 9 đặc tính này là của **v3**. Bản v2 dùng danh sách khác (cohesive, complete, consistent, correct, feasible, modifiable, unambiguous, testable), theo [Bridging the Gap, bài "BABOK 6.5"](https://www.bridging-the-gap.com/what-are-your-requirements-verification-practices-babok-6-5/) đánh số v2. Danh sách v2 này mới thấy qua kết quả tìm kiếm, chưa mở trang. Không trộn hai bản.

**Verification activities và checklists** (secondary, chưa đối chiếu): kiểm tính đúng của ký pháp mô hình, sự nhất quán giữa các mô hình, thuật ngữ khớp glossary, có ví dụ/kịch bản cho các trường hợp. Checklist dùng để chuẩn hóa việc verify. Lưu ý "Checklists" là guideline của task, không phải một technique trong 50 technique (xem BABOK-10-TECHNIQUES).

**Áp dụng:** rule engine của FlintFlow tương ứng chủ yếu với task này. Phần lớn check BA-08…BA-14 thực hiện verification. Validation (7.3) cần con người hoặc ngữ cảnh mục tiêu.

## BABOK-7.3-VALIDATE — Validate Requirements

**Clause:** BABOK §7.3 ↔ Core Standard "Validate Requirements CS (7.3)"; card PDF 3 · **Evidence:** `verified_public` (purpose/IO/card/glossary); `secondary_source` (elements; tên element 3 không thống nhất) · **Locator:** Core Standard trang in 35–36, PDF 42–43 · **Nguồn:** Core Standard; task card; [open-exam-prep 7.3](https://www.open-exam-prep.com/study-guides/ccba/radd-modeling/validate-requirements)

- **Purpose:** bảo đảm mọi requirement/design khớp business requirements và hỗ trợ việc mang lại value cần thiết.
- **Card 2025:** task bảo đảm stakeholder, solution và transition requirements khớp business requirements, design thỏa requirement, và cả hai cùng mang lại value, hỗ trợ goal/objective của tổ chức. Validation có thể diễn ra liên tục hoặc ở mốc bàn giao; với cách tiếp cận adaptive thì qua phản hồi khách hàng thường xuyên.
- **Input:** Requirements (specified and modelled). Validation **có thể bắt đầu trước** khi verify xong, nhưng **không thể hoàn tất trước** khi verify xong (Core Standard tr.35).
- **Output:** Requirements (validated): chứng minh được lợi ích cho stakeholder và khớp goal/objective. Requirement **không validate được** thì hoặc không mang lại lợi ích, hoặc nằm ngoài solution scope, hoặc cả hai (Core Standard tr.36).
- Glossary: *validated requirement* là requirement đã được review, xác định hỗ trợ lợi ích mong đợi và **nằm trong solution scope**.
- **Elements** (secondary): Identify Assumptions; Define Measurable Evaluation Criteria; Evaluate Alignment with Solution Scope. Trang CCBA của open-exam-prep ghi element thứ ba là "...with Business Case and Goals". [Trang CBAP](https://open-exam-prep.com/study-guides/cbap/requirements-analysis-and-design-definition/validate-requirements) của cùng site ghi "Evaluate Alignment with Solution Scope". Glossary và Core Standard đều gắn validation với solution scope, nên chọn "Solution Scope". Cần đối chiếu.

**Verification ≠ Validation.** Verification hỏi "đặc tả có đúng và chất lượng không" (build it right). Validation hỏi "đặc tả có phục vụ mục tiêu và nằm trong scope không" (build the right thing). Một UC viết hoàn hảo nhưng ngoài scope release vẫn **fail validation**.

## BABOK-7.4-REQ-ARCHITECTURE — Define Requirements Architecture

**Clause:** BABOK §7.4 ↔ Core Standard "Define Requirements Architecture CS (7.4)"; card PDF 4 · **Evidence:** `verified_public` (purpose/IO/card/glossary); `secondary_source` (elements, 1 nguồn) · **Locator:** Core Standard trang in 36, PDF 43 · **Nguồn:** Core Standard; task card; [open-exam-prep 7.4](https://open-exam-prep.com/study-guides/ccba/radd-modeling/define-requirements-architecture)

- **Purpose:** bảo đảm requirements và designs **cùng hỗ trợ lẫn nhau** để đạt đầy đủ mục tiêu; cấu trúc chúng thành một tổng thể gắn kết.
- **Inputs:** Information Management Approach (3.4); Requirements (any state); Solution Scope. Theo Core Standard, mỗi requirement nên được **phát biểu một lần và chỉ một lần**, rồi đưa vào architecture để đánh giá tính đầy đủ của toàn tập.
- **Output:** Requirements Architecture: các requirement và quan hệ giữa chúng, kèm thông tin ngữ cảnh. Glossary định nghĩa giống vậy.
- Card 2025, mục Consider: trong bối cảnh adaptive với ít tài liệu, vẫn đạt được tính đầy đủ nhờ prototype/visual design và mô hình mô tả lẫn quy định (Agile Extension).

**Viewpoint và view.** Glossary định nghĩa *viewpoint* là tập quy ước xác định cách requirement được biểu diễn, tổ chức và liên hệ với nhau. Theo nguồn thứ cấp, *view* là sản phẩm cụ thể dựng theo một viewpoint cho một nhóm stakeholder. Ví dụ: viewpoint "Data/Information" cho ra view gồm ERD, data dictionary.

**Elements** (`secondary_source`, chỉ 1 nguồn, chưa đối chiếu): .1 Requirements Viewpoints and Views; .2 Template Architectures; .3 Completeness (không có requirement mồ côi, không có vòng phụ thuộc, transition requirement đã được tính); .4 Relate and Verify Requirements Relationships; .5 Business Analysis Information Architecture. Danh sách loại quan hệ ở .4 mà open-exam-prep đưa ra (Necessity, Effort, Subset, Cover, Value) **chưa có nguồn thứ hai**. Không dùng danh sách này để chấm.

**Áp dụng (proposed):** "Requirements architecture" của một SRS FlintFlow có thể biểu diễn bằng đồ thị gồm node (goal, stakeholder need, actor, UC, FR, NFR, BR, entity, message) và cạnh (trace links). Check BA-05 và BA-06 kiểm node mồ côi và tham chiếu gãy.

## BABOK-7.5-DESIGN-OPTIONS — Define Design Options

**Clause:** BABOK §7.5 ↔ Core Standard "Define Design Options CS (7.5)"; card PDF 5 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 36–37, PDF 43–44 · **Nguồn:** Core Standard; task card

- **Purpose:** xác định cách tiếp cận solution, nhận diện cơ hội cải tiến, phân bổ requirement cho các solution component, và biểu diễn các design option đạt future state.
- **Description (card 2025):** nhận diện, khám phá và mô tả các cách đáp ứng business need. Cách tiếp cận có thể là **tự xây (create/build), mua (purchase/buy), hoặc kết hợp**. Card khuyên không chốt design lý tưởng quá sớm.
- **Inputs:** Change Strategy; Requirements (validated, prioritized), vì chỉ requirement đã validate mới được xét, và requirement ưu tiên cao có trọng số lớn hơn; Requirements Architecture. **Output:** Design Options, gồm cách tiếp cận, cơ hội cải tiến, component.
- Glossary: *requirements allocation* là gán requirement cho solution component cụ thể để hiện thực. *Solution component* có thể là con người, hạ tầng, phần cứng, phần mềm, thiết bị, cơ sở vật chất, tài sản quy trình.
- Tên 4 element (Define Solution Approaches, Identify Improvement Opportunities, Requirements Allocation, Describe Design Options) khớp đúng 4 vế trong purpose của card. Tên element chỉ có từ nguồn thứ cấp (`secondary_source`).

## BABOK-7.6-VALUE-RECOMMEND — Analyze Potential Value and Recommend Solution

**Clause:** BABOK §7.6 ↔ Core Standard CS (7.6); card PDF 6 · **Evidence:** `verified_public`; element names `secondary_source` · **Locator:** Core Standard trang in 37, PDF 44 · **Nguồn:** Core Standard; task card

- **Purpose:** ước lượng potential value của từng design option và xác định option phù hợp nhất với requirement của enterprise.
- **Card 2025:** potential value của solution với stakeholder dựa trên **lợi ích, chi phí và ràng buộc**. Mỗi option có ưu và nhược điểm, cần so sánh trade-off.
- **Inputs:** Potential Value (6.2), dùng làm mốc so sánh; Design Options. **Output:** Solution Recommendation, tức option đề xuất sau khi đánh giá mọi option, sao cho value cho enterprise là lớn nhất.
- Element (secondary): Expected Benefits; Expected Costs; Determine Value; Assess Design Options and Recommend Solution. open-exam-prep thêm technique "Cost-Benefit Analysis", nhưng mục này không có trong danh mục 50 technique. Glossary chỉ có thuật ngữ "cost-benefit analysis".

**Liên hệ SRS FPT:** template SRS không có mục design options. Nếu báo cáo Capstone khác (Report 1/2) có phần so sánh phương án, mục đó mới tương ứng 7.5–7.6.

## BABOK-8-SOLUTION-EVAL — Solution Evaluation

**Clause:** BABOK §8.1–8.5 ↔ Core Standard §2.6 · **Evidence:** `verified_public` · **Locator:** Core Standard trang in 38–42, PDF 45–49 · **Nguồn:** Core Standard

Điểm phân biệt KA này: phải **có solution thật**, dù là prototype/proof of concept, pilot/beta hay operational release. Các task: 8.1 Measure Solution Performance (Business Objectives + Implemented Solution → Solution Performance Measures); 8.2 Analyze Performance Measures (→ Solution Performance Analysis); 8.3 Assess Solution Limitations (yếu tố **bên trong** solution, → Solution Limitation gồm constraint và defect); 8.4 Assess Enterprise Limitations (yếu tố **bên ngoài** solution, → Enterprise Limitation); 8.5 Recommend Actions to Increase Solution Value (→ Recommended Actions; errata sửa tên output trên Figure 8.0.2).

**Liên hệ FlintFlow:** đo chất lượng SRS do AI sinh (tỷ lệ check pass, thời gian tiết kiệm) sau khi chạy thử là hoạt động 8.1–8.2. Đây không phải nội dung SRS.

## BABOK-10-TECHNIQUES — Danh mục 50 technique

**Clause:** BABOK §10.1–10.50 · **Evidence:** `verified_public` (số và tên theo KnowledgeHub; phần thân `locator_only`) · **Locator:** [KnowledgeHub §10](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/) · **Nguồn:** IIBA KnowledgeHub

Cột "Liên quan" là đánh giá của nhóm về mức liên quan tới việc sinh và review SRS/Actor/UC: ★★ trực tiếp, ★ gián tiếp, trống là ít liên quan.

| § | Technique | Liên quan | § | Technique | Liên quan |
| --- | --- | --- | --- | --- | --- |
| 10.1 | Acceptance and Evaluation Criteria | ★★ | 10.26 | Item Tracking | ★ |
| 10.2 | Backlog Management | ★ | 10.27 | Lessons Learned | |
| 10.3 | Balanced Scorecard | | 10.28 | Metrics and Key Performance Indicators (KPIs) | ★ |
| 10.4 | Benchmarking and Market Analysis | | 10.29 | Mind Mapping | |
| 10.5 | Brainstorming | | 10.30 | Non-Functional Requirements Analysis | ★★ |
| 10.6 | Business Capability Analysis | ★ | 10.31 | Observation | |
| 10.7 | Business Cases | | 10.32 | Organizational Modelling | ★ |
| 10.8 | Business Model Canvas | | 10.33 | Prioritization | ★★ |
| 10.9 | Business Rules Analysis | ★★ | 10.34 | Process Analysis | ★ |
| 10.10 | Collaborative Games | | 10.35 | Process Modelling | ★★ |
| 10.11 | Concept Modelling | ★ | 10.36 | Prototyping | ★ |
| 10.12 | Data Dictionary | ★★ | 10.37 | Reviews | ★★ |
| 10.13 | Data Flow Diagrams | ★ | 10.38 | Risk Analysis and Management | ★ |
| 10.14 | Data Mining | | 10.39 | Roles and Permissions Matrix | ★★ |
| 10.15 | Data Modelling | ★★ | 10.40 | Root Cause Analysis | |
| 10.16 | Decision Analysis | | 10.41 | Scope Modelling | ★★ |
| 10.17 | Decision Modelling | ★ | 10.42 | Sequence Diagrams | ★ |
| 10.18 | Document Analysis | ★ | 10.43 | Stakeholder List, Map, or Personas | ★★ |
| 10.19 | Estimation | | 10.44 | State Modelling | ★ |
| 10.20 | Financial Analysis | | 10.45 | Survey or Questionnaire | |
| 10.21 | Focus Groups | | 10.46 | SWOT Analysis | |
| 10.22 | Functional Decomposition | ★★ | 10.47 | Use Cases and Scenarios | ★★ |
| 10.23 | Glossary | ★★ | 10.48 | User Stories | ★ |
| 10.24 | Interface Analysis | ★★ | 10.49 | Vendor Assessment | |
| 10.25 | Interviews | ★ | 10.50 | Workshops | ★ |

**Chú ý số mục.** Data Dictionary là **10.12**, Data Flow Diagrams là **10.13**, Data Modelling là **10.15**. Nhiều tài liệu nhầm thứ tự này. BABOK v2 đánh số technique ở chương 9 (vd use case từng là 9.26 "Scenarios and Use Cases"); nguồn thứ cấp nào dùng số 9.x là đang theo v2. "Impact Analysis", "Checklists", "Cost-Benefit Analysis", "MoSCoW", "Kano", "Context Diagram" **không** phải tên technique riêng trong v3. Chúng có thể là element hoặc ví dụ bên trong technique khác (vd MoSCoW trong 10.33, context diagram trong 10.41, theo nguồn thứ cấp).

## BABOK-10.47-USE-CASES — Use Cases and Scenarios

**Clause:** BABOK §10.47 · **Evidence:** `verified_public` (glossary, card 7.1, mục lục); `secondary_source` (elements, đối chiếu 2 nguồn; usage considerations 1–2 nguồn) · **Locator:** [KnowledgeHub §10.47](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-47-use-cases-and-scenarios/) (thân trang yêu cầu đăng nhập) · **Nguồn:** Glossary; [Fhyzics, 09/07/2020](https://blog.fhyzics.net/fibaar/ba-techniques-use-cases-and-scenarios); [open-exam-prep 9.4](https://open-exam-prep.com/study-guides/ccba/babok-techniques/prioritization-scope-techniques)

**Định nghĩa trong Glossary (verified_public):**
- *Use case*: mô tả tương tác **quan sát được** giữa một hay nhiều actor và solution, xảy ra khi actor dùng hệ thống để đạt **một mục tiêu cụ thể**.
- *Use case diagram*: loại sơ đồ do UML định nghĩa, thể hiện mọi actor và use case liên quan một hệ thống hoặc sản phẩm.
- *Actor (business analysis)*: người, thiết bị hoặc hệ thống đóng một vai trò xác định khi tương tác với solution.
- *Secondary actor*: actor **bên ngoài** hệ thống đang thiết kế, hỗ trợ việc thực thi một use case. Glossary công khai **không có** mục "primary actor".
- *Unified modelling language*: theo Glossary, các sơ đồ UML BA dùng nhiều nhất là use case, activity, state machine và class diagram.

Glossary công khai không có mục "scenario". Theo nguồn thứ cấp, *scenario* là **một đường đi** cụ thể, tức một chuỗi bước của actor và solution để đạt mục tiêu. Một use case gom nhiều scenario dưới dạng luồng chính và luồng thay thế/ngoại lệ.

**Purpose** (secondary): mô tả cách người hoặc hệ thống tương tác với solution đang mô hình hóa để đạt một mục tiêu. Card 7.1 (2025) xếp Use cases and scenarios vào nhóm technique thường dùng cho Specify and Model.

**Elements** (`secondary_source`, đối chiếu 2 nguồn; Fhyzics đủ 7 trường, open-exam-prep có 6 thành phần trùng):

| Element | Nội dung | Ghi chú |
| --- | --- | --- |
| Use Case Diagram | Thể hiện phạm vi solution, actor, use case và quan hệ giữa các use case | |
| Relationships: association | Liên kết actor ↔ use case: actor dùng được chức năng đó | |
| Relationships: **extend** | Chèn hành vi bổ sung vào một use case, thường để thể hiện luồng thay thế; theo nguồn thứ cấp là chạy **có điều kiện** | Ngữ nghĩa chuẩn: UML 2.5.1 §18.1.3.2, §18.2.2 (Extend), §18.2.3 (ExtensionPoint); condition là tùy chọn trong UML |
| Relationships: **include** | Use case cơ sở dùng lại chức năng của use case khác; luôn chạy (unconditional) | UML 2.5.1 §18.1.3.3, §18.2.4 |
| Description: **Name** | Tên duy nhất, thường dạng động từ (hành động của actor) + danh từ (đối tượng) | |
| Description: **Goal** | Mô tả ngắn kết quả thành công, theo góc nhìn primary actor | |
| Description: **Actors** | Người hoặc hệ thống bên ngoài tương tác với solution; **primary actor** khởi động use case | |
| Description: **Preconditions** | Điều kiện phải đúng trước khi use case bắt đầu; không được kiểm tra bên trong use case | |
| Description: **Trigger** | Sự kiện khởi động luồng, thường nhất là hành động của primary actor | Template FPT còn cho trigger theo tần suất/thời điểm (non-screen function) |
| Description: **Flow of Events** | Các bước actor và solution thực hiện. Luồng chính (basic/primary flow) là đường trực tiếp nhất tới mục tiêu | |
| Description: **Alternative and Exception Flows** | Đường đi khác tới mục tiêu (alternative) hoặc xử lý lỗi, không đạt mục tiêu (exception) | open-exam-prep tách rõ; Fhyzics gộp vào Flow of Events |
| Description: **Post-conditions** | Điều kiện phải đúng khi use case kết thúc, cho mọi luồng | Một số tài liệu gọi là "guarantees"; chưa xác nhận BABOK dùng từ này |

**Usage Considerations** (`secondary_source`, chưa đối chiếu với BABOK):
- *Strengths*: dễ đọc và dễ viết; tập trung vào value cho người dùng; giúp làm rõ scope và cho cái nhìn tổng quát về hành vi chức năng; khuyến khích người dùng tham gia.
- *Limitations*: use case tập trung vào actor ngoài nên dễ bỏ sót chức năng không phát sinh từ tương tác của actor ([Pitt CS, Use Case Modeling: Limitations](https://people.cs.pitt.edu/~chang/231/UML/UseCase/limitations.html), chỉ thấy qua kết quả tìm kiếm). Nhóm ghi thêm theo hiểu biết chung, **chưa có nguồn đã đọc**: định dạng linh hoạt nên dễ chèn chi tiết UI, business rule, NFR vào flow; luồng có nhiều quyết định khó diễn đạt tuần tự. Không có nhận định nào ở đây được trích từ BABOK.

**Ví dụ use case description (nhóm tự đặt, minh họa cấu trúc):**

| Trường | Nội dung |
| --- | --- |
| ID / Name | UC-05 Generate Use Case List |
| Goal | Thành viên nhóm nhận được danh sách UC nháp gắn với actor đã xác nhận |
| Primary actor | Team Member |
| Secondary actor | LLM Service (hệ thống ngoài) |
| Preconditions | Dự án có mô tả; danh sách Actor đã được xác nhận |
| Trigger | Team Member chọn "Sinh Use Case" |
| Basic flow | 1. Hệ thống tổng hợp mô tả và actor. 2. Hệ thống gửi yêu cầu tới LLM Service. 3. Hệ thống kiểm cấu trúc kết quả. 4. Hệ thống hiển thị danh sách UC với actor, mục tiêu. 5. Team Member xác nhận hoặc chỉnh sửa |
| Alternative | 5a. Team Member yêu cầu sinh lại một UC cụ thể |
| Exception | 2e. LLM Service quá thời gian → hệ thống thông báo MSG-xx, giữ dữ liệu đã nhập |
| Post-conditions | Thành công: danh sách UC được lưu ở trạng thái "draft"; thất bại: không thay đổi dữ liệu |

**Lỗi thường gặp:** UC đặt tên theo màn hình ("Màn hình quản lý") thay vì mục tiêu; actor là bộ phận nội bộ của hệ thống (database, module); thiếu exception flow; chèn quy tắc tính toán chi tiết vào flow thay vì tách thành BR; dùng include/extend để mô tả trình tự (functional decomposition), không đúng ngữ nghĩa UML.

## BABOK-10.48-USER-STORIES — User Stories

**Clause:** BABOK §10.48 · **Evidence:** `verified_public` (glossary, card 7.1); `locator_only` (thân technique) · **Locator:** [KnowledgeHub §10.48](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-48-user-stories/) · **Nguồn:** Glossary; task card PDF 1

- Glossary: *user story* là phát biểu ngắn, cô đọng về chức năng hoặc phẩm chất cần để mang lại value cho **một stakeholder cụ thể**. *Product backlog* là tập user story, requirement hoặc feature ứng viên, đã được ưu tiên và ước lượng.
- Card 7.1 (2025) xếp User stories cùng Use cases and scenarios vào technique thường dùng cho Specify and Model.
- Nguồn thứ cấp thường nêu mẫu "As a <role>, I want <capability>, so that <value>", tiêu chí INVEST và 3C (Card, Conversation, Confirmation). Các mẫu này **không** được xác minh là nội dung BABOK.

**Quan hệ với UC (proposed):** template SRS FPT dùng UC, không dùng user story. Nếu FlintFlow nhận đầu vào dạng user story, có thể ánh xạ role → actor, capability → goal của UC, acceptance criteria → postcondition/test. Một UC thường bao nhiều user story.

## BABOK-10.9-BUSINESS-RULES — Business Rules Analysis

**Clause:** BABOK §10.9 · **Evidence:** `verified_public` (glossary); `secondary_source` (nguyên tắc, 1 nguồn) · **Locator:** [KnowledgeHub §10.9](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-9-business-rules-analysis/) · **Nguồn:** Glossary; [Fhyzics BRA](https://blog.fhyzics.net/fibaar/ba-techniques-business-rules-analysis)

**Glossary (verified_public):**
- *Business rule*: chỉ thị **cụ thể, thực hiện được (practicable), kiểm được (testable)**, nằm trong quyền kiểm soát của doanh nghiệp, dùng làm tiêu chí hướng dẫn hành vi, định hình phán đoán hoặc ra quyết định.
- *Definitional business rule* (còn gọi structural rule): quy tắc chỉ ra điều gì **tất yếu đúng hoặc sai**; dùng làm tiêu chí định nghĩa cho khái niệm, tri thức, thông tin.
- *Behavioural business rule* (còn gọi operative rule): quy tắc đặt **nghĩa vụ hoặc cấm đoán** lên hành vi, thao tác, thủ tục; điều chỉnh hoạt động nghiệp vụ hằng ngày.
- *Business policy*: chỉ thị **không thực hiện trực tiếp được** (non-practicable), kiểm soát và ảnh hưởng hành động của enterprise. Policy khác rule ở chỗ rule phải practicable.
- *Business decision*: quyết định dựa trên chiến lược, phán đoán, đồng thuận và business rule.

**Nguyên tắc** (secondary, 1 nguồn): dùng từ vựng nghiệp vụ chuẩn (glossary); tách quy tắc khỏi quy trình và dữ liệu; phát biểu quy tắc **nguyên tử, dạng khẳng định (declarative)**; gắn quy tắc với quyết định mà nó hỗ trợ; duy trì quy tắc theo thời gian.

**Ví dụ (nhóm tự đặt):**

| ID | Rule | Loại |
| --- | --- | --- |
| BR-01 | Mỗi Use Case thuộc đúng một dự án | Definitional |
| BR-02 | Mã UC có dạng `UC-` + số thứ tự, không tái dùng sau khi xóa | Definitional |
| BR-03 | Chỉ Team Leader được chuyển SRS sang trạng thái "Submitted" | Behavioural |
| BR-04 | SRS ở trạng thái "Approved" không được sửa nếu chưa tạo phiên bản mới | Behavioural |
| (không đạt) | "Hệ thống phải thân thiện với người dùng" | Không phải BR: là NFR mơ hồ |
| (không đạt) | "Nhà trường khuyến khích dùng AI có trách nhiệm" | Business policy, không practicable |

**Áp dụng:** template FPT mục 5.1 Business Rules (bảng ID, Rule Definition) tương ứng nhóm này. Check BA-16 kiểm việc tách BR khỏi flow UC.

## BABOK-10.1-ACCEPTANCE — Acceptance and Evaluation Criteria

**Clause:** BABOK §10.1 · **Evidence:** `verified_public` (glossary, card); `secondary_source` (elements, 1 nguồn) · **Locator:** [KnowledgeHub §10.1](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-1-acceptance-and-evaluation-criteria/); errata 10.1.4 · **Nguồn:** Glossary; task cards; [Fhyzics A&EC](https://blog.fhyzics.net/fibaar/ba-techniques-acceptance-and-evaluation-criteria)

- Glossary: *acceptance criteria* là tiêu chí gắn với requirement, sản phẩm hoặc chu kỳ bàn giao, phải đạt để stakeholder chấp nhận. *User acceptance test (UAT)* đánh giá solution đã giao có đáp ứng nhóm người dùng hay không, dựa trên acceptance criteria.
- Technique này xuất hiện trong danh sách "frequently used" của **4/6 card RADD** (7.1, 7.2, 7.3, 7.6) nên rất trung tâm. Errata sửa câu ở 10.1.4 thành "Evaluation criteria help in defining priorities".
- Phân biệt (secondary): **acceptance criteria** thường dùng khi chỉ có một solution, cho kết quả đạt/không đạt. **Evaluation criteria** là tập phép đo để xếp hạng nhiều solution/option. Hai loại dùng chung các *value attribute* (đặc điểm ảnh hưởng đáng kể tới value như hiệu năng, usability, bảo mật, độ tin cậy).
- Elements (secondary): Value Attributes; Assessment; Measurement/Testability.

**Áp dụng (proposed):** mỗi FR/UC trong FlintFlow nên có ít nhất 1 acceptance criterion kiểm được, dạng Given/When/Then hoặc điều kiện đo được. Đây là cầu nối "validate" trong trace (5.1).

## BABOK-10.30-NFR — Non-Functional Requirements Analysis

**Clause:** BABOK §10.30 · **Evidence:** `verified_public` (glossary); `secondary_source` (danh mục, đối chiếu 2 nguồn) · **Locator:** [KnowledgeHub §10.30](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-30-non-functional-requirements-analysis/) · **Nguồn:** Glossary; [open-exam-prep 9.2](https://open-exam-prep.com/study-guides/ccba/babok-techniques/process-data-modeling-techniques) (15 mục); [Fhyzics NFR, 08/07/2020](https://blog.fhyzics.net/fibaar/ba-techniques-non-functional-requirements-analysis) (13 mục, thiếu Scalability và Compliance)

Glossary: NFR mô tả hiệu năng hoặc thuộc tính chất lượng solution phải đạt; **thường đo được** và đóng vai trò ràng buộc thiết kế tổng thể. *Quality attributes* là tập phép đo để đánh giá chất lượng tổng thể hệ thống.

**Các nhóm NFR** (secondary; tên lấy theo open-exam-prep, nghĩa diễn giải theo Fhyzics):

| Nhóm | Diễn giải | Template FPT 4.2 |
| --- | --- | --- |
| Availability | Mức solution vận hành và truy cập được khi cần | Reliability (availability) |
| Compatibility | Mức solution hoạt động hiệu quả cùng các thành phần khác trong môi trường | 4.1 External Interfaces |
| Functionality | Mức chức năng đáp ứng nhu cầu, gồm độ chính xác và phù hợp | — |
| Maintainability | Mức dễ sửa lỗi, cải thiện | 4.2.4 "…" |
| Performance Efficiency | Thực hiện chức năng với mức dùng tài nguyên tối thiểu | 4.2.3 Performance |
| Portability | Mức dễ chuyển sang môi trường khác | 4.2.4 "…" |
| Reliability | Thực hiện chức năng trong điều kiện xác định, suốt khoảng thời gian xác định | 4.2.2 Reliability |
| Scalability | Khả năng mở rộng theo tải (chỉ open-exam-prep) | 4.2.3 (capacity) |
| Security | Bảo vệ nội dung và thành phần khỏi truy cập trái phép, phá hoại | 4.2.4 "…" |
| Usability | Mức dễ học, dễ dùng | 4.2.1 Usability |
| Certification | Ràng buộc để đạt chứng nhận/tiêu chuẩn | — |
| Compliance | Tuân thủ quy định, luật (chỉ open-exam-prep) | — |
| Localization | Ngôn ngữ, văn hóa, luật địa phương của người dùng | — |
| Service Level Agreements | Ràng buộc đã thỏa thuận chính thức với bên được phục vụ | — |
| Extensibility | Khả năng thêm chức năng mới | — |

Element khác (secondary): **Measurement**: NFR phải được định lượng khi có thể để verify được. **Context**: xét độ ổn định của context khi đánh giá NFR.

**Ví dụ (nhóm tự đặt):** không đạt: "Hệ thống phải phản hồi nhanh". Đạt: "95% yêu cầu sinh Actor hoàn tất ≤ 20 s khi có ≤ 20 người dùng đồng thời, đo ở môi trường staging".

## BABOK-10-DATA — Kỹ thuật dữ liệu và thông tin

**Clause:** BABOK §10.12, 10.13, 10.15, 10.23, 10.44, 10.42, 10.24 · **Evidence:** `verified_public` (glossary, errata, mục lục); `secondary_source` (mô tả) · **Locator:** KnowledgeHub §10.12/10.13/10.15/10.23/10.44/10.42/10.24 · **Nguồn:** Glossary; Errata; [open-exam-prep 9.2](https://open-exam-prep.com/study-guides/ccba/babok-techniques/process-data-modeling-techniques)

| § | Technique | Nội dung (nguồn) | Ứng với SRS FPT |
| --- | --- | --- | --- |
| 10.12 | Data Dictionary | Danh mục chuẩn của phần tử dữ liệu: tên, alias, mô tả, kiểu, độ dài, giá trị cho phép, bắt buộc hay không (secondary). Errata: ví dụ Figure 10.12.1 đổi "Last Name" thành "Family Name" | Mô tả entity 3.1.5; mục Details của function |
| 10.13 | Data Flow Diagrams | Luồng dữ liệu giữa external entity, process, data store; không thể hiện trình tự hay quyết định (secondary). Errata: data store **không** được gọi là "terminator" | Context diagram ở Product Overview (gần với DFD mức 0) |
| 10.15 | Data Modelling | Entity, attribute, relationship. Glossary: *entity-relationship diagram* là biểu diễn đồ họa các entity của miền bài toán và quan hệ giữa chúng | 3.1.5 Entity Relationship Diagram |
| 10.23 | Glossary | Định nghĩa thuật ngữ nghiệp vụ dùng chung; hỗ trợ đặc tính Understandable (7.2) | Template FPT **không** có mục Glossary riêng → có thể đặt ở 5.4 Other |
| 10.44 | State Modelling | Glossary: *state diagram* là mô hình phân tích thể hiện vòng đời của một entity/class. Errata sửa mũi tên State 3 của Figure 10.44.1 | Vòng đời trạng thái SRS/UC |
| 10.42 | Sequence Diagrams | Glossary: sơ đồ thể hiện các object tham gia tương tác và message trao đổi | Chi tiết function (không bắt buộc trong template) |
| 10.24 | Interface Analysis | Glossary: *interface* là ranh giới chung giữa hai người và/hoặc hệ thống để trao đổi thông tin; *external interface* là tương tác với phần cứng, phần mềm hoặc người bên ngoài solution | 4.1 External Interfaces |

## BABOK-10-SCOPE-PEOPLE-FLOW — Scope, người, luồng, ưu tiên, review

**Clause:** BABOK §10.41, 10.43, 10.39, 10.32, 10.35, 10.22, 10.33, 10.37, 10.26 · **Evidence:** `verified_public` (glossary, card, errata); `secondary_source` (mô tả) · **Locator:** KnowledgeHub các mục tương ứng · **Nguồn:** Glossary; task cards; Errata; [microTOOL](https://www.microtool.de/en/requirements-engineering/prioritizing-requirements-techniques-for-stakeholder-workshops/); open-exam-prep

| § | Technique | Nội dung chính | Ứng với SRS FPT / FlintFlow |
| --- | --- | --- | --- |
| 10.41 | Scope Modelling | Glossary: *scope model* định nghĩa ranh giới của miền nghiệp vụ hoặc solution. Card 7.4 xếp vào technique thường dùng. Nguồn thứ cấp: context diagram, bảng in-scope/out-of-scope. Errata sửa thụt lề 10.41.4 .1 Strengths | Product Overview + context diagram; boundary để quyết định ai là actor |
| 10.43 | Stakeholder List, Map, or Personas | Glossary: *stakeholder list* là danh mục stakeholder bị ảnh hưởng kèm thuộc tính và đặc điểm tham gia. Errata thêm mapping với 3.2 | Nguồn ứng viên actor; persona giúp viết mô tả actor |
| 10.39 | Roles and Permissions Matrix | Ma trận vai trò × quyền hạn (secondary). Errata thêm vào mapping của 7.1 | 3.1.3 Screen Authorization |
| 10.32 | Organizational Modelling | Mô hình cơ cấu, vai trò tổ chức (thuộc nhóm People and Roles) | Mô tả actor là vai trò, không phải cá nhân |
| 10.35 | Process Modelling | Glossary: *process model* là tập sơ đồ và thông tin hỗ trợ về một quy trình. *Swimlane* là phần của sơ đồ quy trình thể hiện hoạt động của một actor/vai trò. Errata thêm mapping với 5.1 | 3.1.1 Screens Flow (gần); activity diagram cho UC phức tạp |
| 10.22 | Functional Decomposition | Glossary: *decomposition* chia vấn đề thành các phần để phân tích. Card 7.4 xếp vào technique thường dùng | Feature → Function trong 3.2 |
| 10.33 | Prioritization | 4 cách tiếp cận theo microTOOL: **Grouping** (vd MoSCoW), **Ranking**, **Time boxing/Budgeting**, **Negotiation** | Cột priority của FR/UC |
| 10.37 | Reviews | Card 7.2 và 7.3 xếp vào technique thường dùng. Errata thêm mapping với 3.1, bỏ mapping với 3.2. Glossary: *inspection* là review hình thức theo quy trình và tiêu chí định trước | Review SRS với mentor; rule engine làm "desk check" tự động |
| 10.26 | Item Tracking | Theo dõi vấn đề, câu hỏi, defect tới khi đóng. Card 7.2 và 7.3 xếp vào technique thường dùng | Danh sách finding của rule engine (pass/fail/needs_review) |

## BABOK-MAP-FPT — Ánh xạ BABOK với template SRS FPT Capstone

**Clause:** ánh xạ · **Evidence:** `proposed_policy` (nội dung template lấy từ [fpt-capstone-srs-template.md](fpt-capstone-srs-template.md), `verified_supplied`) · **Locator:** các mục II.1–II.5 của template · **Nguồn:** nhóm FlintFlow

| Mục template FPT | Khái niệm BABOK tương ứng | Task / technique | Gợi ý kiểm tra |
| --- | --- | --- | --- |
| I Record of Changes (Date, A/M/D, In charge, Change Description) | Change history của requirement | 5.2 Maintain; 5.4 Assess Changes | Mỗi thay đổi có người chịu trách nhiệm; thay đổi lớn có impact |
| II.1 Product Overview + context diagram | Business requirement, Need, Solution Scope, Context (BACCM) | §2.1, §2.3, 6.2, 6.4; 10.41 Scope Modelling, 10.13 DFD | Nêu need/mục tiêu đo được và boundary (BA-01, BA-02) |
| II.2.1 Actors (#, Actor, Description) | Actor (Glossary), stakeholder là end user, secondary actor | §2.4; 10.43; 10.32; 10.47 | Actor là vai trò, nằm ngoài boundary (BA-03, BA-04) |
| II.2.2.1 Use Case Diagram(s) | Use case diagram; Activity Flow model | 7.1; 10.47 | Mọi UC có ≥ 1 actor liên kết hoặc lý do |
| II.2.2.2 UC Descriptions (ID, Use Case, Actors, Description) | Use case description: name, goal, actors… | 10.47 | Tên động từ + đối tượng, có goal (BA-07) |
| II.3.1.1–3.1.2 Screens Flow / Screen Descriptions | Design (Core Standard Table 1.7.1: mock-up là design) | §2.5; 10.36 Prototyping; 10.35 | Không coi màn hình là requirement gốc |
| II.3.1.3 Screen Authorization | Roles and Permissions Matrix | 10.39 | Role khớp tên Actor (BA-18) |
| II.3.1.4 Non-Screen Functions | Functional requirement không có UI; actor có thể là thời gian/hệ thống | §2.3; 10.47 (trigger) | Có trigger rõ (tần suất, sự kiện) |
| II.3.1.5 ERD + Entity description | Data and Information: Data Modelling, Data Dictionary | 10.15, 10.12 | Entity nhắc trong UC/FR có trong ERD (BA-19) |
| II.3.2 Feature/Function details (Trigger, Description, Layout, Details) | Solution requirement chi tiết; business rule; validation | 7.1; 10.9; 10.22 | Validation/BR tách bảng, có acceptance criteria |
| II.4.1 External Interfaces | Interface analysis; NFR compatibility | 10.24; 10.30 | Mỗi secondary actor hệ thống có interface (BA-20) |
| II.4.2 Quality Attributes (Usability, Reliability, Performance, …) | Non-functional requirements | 10.30 | NFR đo được (BA-11) |
| II.5.1 Business Rules (ID, Rule Definition) | Business rules (definitional/behavioural) | 10.9 | BR practicable, testable, nguyên tử (BA-16) |
| II.5.2 Common Requirements | Requirement dùng chung, stated once | 7.4 ("stated once and only once") | Không lặp ở từng function (BA-22) |
| II.5.3 Application Messages List | Design chi tiết của interface người dùng | 7.1 (design) | Mã MSG được tham chiếu từ flow có tồn tại (BA-21) |
| II.5.4 Other Requirements | Transition requirements; glossary; constraint | §2.3; 10.23 | Ghi transition requirement nếu có (BA-15) |

**Khoảng trống của template so với BABOK:** không có mục riêng cho stakeholder (khác actor), business objectives đo được, assumptions/constraints, transition requirements, glossary, priority, traceability. FlintFlow có thể đưa các mục này vào II.1 hoặc II.5.4. Đây là đề xuất, không phải yêu cầu của template FPT.

## BABOK-MAP-UML-ISO — Ánh xạ BABOK với UML 2.5.1 và ISO/IEC/IEEE 29148

**Clause:** ánh xạ · **Evidence:** `proposed_policy` (dựa trên [uml-2.5.1.md](uml-2.5.1.md) và [iso-29148-2018.md](iso-29148-2018.md); ID section ở hai file đó có thể đổi theo revision) · **Locator:** — · **Nguồn:** nhóm FlintFlow

| Khái niệm BABOK | UML 2.5.1 | ISO/IEC/IEEE 29148:2018 | Ghi chú phối hợp |
| --- | --- | --- | --- |
| Actor: người, thiết bị, hệ thống đóng vai trò tương tác với solution | Actor (§18.1.3.1, §18.2.1): vai trò bên ngoài subject | Stakeholder/user trong mô tả SRS | **UML quyết định ngữ nghĩa và ký pháp**; BABOK hỗ trợ xác định ai là actor từ stakeholder |
| Use case: tương tác quan sát được để đạt mục tiêu | UseCase (§18.1.3.1, §18.2.5): hành vi subject thực hiện, cho kết quả có giá trị với actor | Usage scenario / operational concept | BABOK nhấn "goal"; UML nhấn "behavior + result of value" |
| Extend/include (theo nguồn thứ cấp) | Extend (§18.1.3.2, §18.2.2) qua ExtensionPoint (§18.2.3), condition tùy chọn; Include (§18.1.3.3, §18.2.4) | — | Không lấy diễn giải "extend luôn có điều kiện" của nguồn thứ cấp làm lỗi UML |
| Scenario | Không có metaclass riêng; có thể biểu diễn bằng Interaction/Activity | Scenario trong ConOps | — |
| Requirements classification §2.3 | — | Phân loại requirement (stakeholder/system/software) | Tên lớp khác nhau; ánh xạ theo nghĩa, không theo tên |
| 9 đặc tính chất lượng §7.2 (secondary) | — | Đặc tính của từng requirement và của tập requirement (§5.2.5–5.2.6, theo file ISO) | Nhiều điểm trùng: unambiguous, complete, consistent, feasible, verifiable. BABOK có thêm "prioritized", "understandable", "concise", "atomic" |
| Verification vs validation (7.2/7.3) | — | Verification/validation của requirement | Cùng phân biệt "đúng đặc tả" và "đúng nhu cầu" |
| Traceability §5.1 | Dependency (abstraction/trace) | Traceability của requirement | — |
| Business rule §10.9 | Constraint/OCL (nếu mô hình hóa) | Business rules trong mô tả SRS | — |

**Quy tắc khi nguồn xung đột (proposed):** ngữ nghĩa ký pháp sơ đồ theo UML; chất lượng câu requirement theo ISO + BABOK; phân loại và quan hệ nghiệp vụ theo BABOK; bố cục và tên mục nộp bài theo template FPT. Nếu vẫn mâu thuẫn, trả `needs_review` kèm cả hai căn cứ.

## BABOK-POLICY — Check đề xuất cho rule engine FlintFlow

**Evidence:** `proposed_policy`. Các check được rút ra từ những section BABOK nêu ở cột Căn cứ. Đây không phải yêu cầu bắt buộc của BABOK. Mức `error` chỉ dùng khi căn cứ là `verified_public` **và** điều kiện kiểm được bằng máy. Căn cứ chỉ có `secondary_source` thì tối đa `warning`.

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| BA-01 | Product Overview nêu business need/mục tiêu, tách khỏi tính năng | LLM phân loại câu: goal/objective hay hành vi hệ thống; cần ≥ 1 câu goal | warning | BABOK-2.3-REQ-CLASSIFICATION, BABOK-2.1-BACCM | "Giảm thời gian hoàn thành SRS nháp từ 2 tuần xuống 3 ngày" | "Hệ thống có chức năng sinh SRS bằng AI" (chỉ có hành vi) |
| BA-02 | Có ranh giới solution (scope/context) | Rule: tồn tại context diagram hoặc danh sách in-scope/out-of-scope | warning | BABOK-6-STRATEGY, BABOK-10-SCOPE-PEOPLE-FLOW (10.41) | Context diagram có FlintFlow, LLM Service, người dùng | Không có sơ đồ, không có câu phạm vi |
| BA-03 | Mỗi actor đóng một vai trò tương tác với solution, không phải bộ phận bên trong | Rule: tên actor không thuộc danh sách cấm (Database, Server, Module, Backend…); LLM kiểm mô tả có hành vi tương tác | error | BABOK-10.47-USE-CASES (glossary actor) | "LLM Service: hệ thống ngoài trả văn bản sinh" | "Database" là actor |
| BA-04 | Stakeholder không tương tác không bị liệt kê là actor | LLM: actor không có UC liên kết và mô tả chỉ "giám sát", "chấm điểm" ngoài hệ thống | warning | BABOK-2.4-STAKEHOLDERS | Hội đồng chấm ghi ở phần stakeholder | "Hội đồng" là actor nhưng không có UC nào |
| BA-05 | Mọi UC truy được về ít nhất một stakeholder need hoặc business requirement | Rule trên đồ thị trace: UC không có cạnh derive/satisfy đi lên → orphan | warning | BABOK-5.1-TRACE, BABOK-7.4-REQ-ARCHITECTURE | UC-05 → SR-03 → BR-01 | UC "Đổi theme" không gắn need nào |
| BA-06 | Không có tham chiếu gãy giữa các phần (actor, UC, BR, MSG, entity) | Rule: mọi ID được tham chiếu đều tồn tại | error | BABOK-7.4-REQ-ARCHITECTURE, BABOK-7.2-VERIFY (consistent) | Flow nhắc MSG-03 có trong 5.3 | Flow nhắc BR-09 không tồn tại |
| BA-07 | UC có tên dạng động từ + đối tượng và có goal | Rule: tên bắt đầu bằng động từ (từ điển); trường goal không rỗng | warning | BABOK-10.47-USE-CASES | "Generate Use Case List" | "Use Case Module", "Quản lý" |
| BA-08 | UC description có đủ trường cốt lõi: actor, precondition, trigger, basic flow, postcondition | Rule: kiểm trường bắt buộc không rỗng | warning | BABOK-10.47-USE-CASES, BABOK-7.2-VERIFY (complete) | Đủ 5 trường | Thiếu trigger và postcondition |
| BA-09 | UC có ít nhất một alternative hoặc exception flow khi có bước gọi hệ thống ngoài hoặc nhập liệu | Rule: có bước "gửi/nhập/gọi" thì cần exception flow | warning | BABOK-10.47-USE-CASES | Có "2e. LLM quá thời gian" | Chỉ có basic flow dù gọi API ngoài |
| BA-10 | Requirement không chứa từ mơ hồ | Rule: từ điển từ mơ hồ VN/EN ("nhanh", "dễ dùng", "thân thiện", "phù hợp", "v.v.", "etc.", "user-friendly") | warning | BABOK-7.2-VERIFY (unambiguous) | "≤ 20 s cho 95% yêu cầu" | "Hệ thống phản hồi nhanh" |
| BA-11 | NFR đo được: có đại lượng, ngưỡng, điều kiện | Rule/regex: có số + đơn vị; LLM kiểm điều kiện đo | warning | BABOK-10.30-NFR, BABOK-7.2-VERIFY (testable) | "Availability 99% trong giờ 7–22, theo tháng" | "Hệ thống ổn định" |
| BA-12 | Mỗi FR/UC có acceptance criteria hoặc test liên kết (validate link) | Rule: trường acceptance_criteria hoặc cạnh validate không rỗng | needs_review | BABOK-10.1-ACCEPTANCE, BABOK-5.1-TRACE | AC-12: "Given dự án có ≥ 1 actor… Then hiển thị ≥ 1 UC" | Không có tiêu chí nào |
| BA-13 | Requirement nguyên tử: một câu không gộp nhiều hành vi độc lập | LLM đếm hành vi; rule cảnh báo khi có ≥ 2 động từ chính nối "và/hoặc" | warning | BABOK-7.2-VERIFY (atomic) | "Hệ thống xuất SRS ra .docx" | "Hệ thống xuất SRS ra .docx, gửi email cho mentor và lưu lịch sử" |
| BA-14 | Requirement có priority và không dồn hết vào một mức | Rule: trường priority không rỗng; tỷ lệ "High/Must" ≤ ngưỡng nhóm đặt (vd 60%) | warning | BABOK-5.3-PRIORITIZE, BABOK-7.2-VERIFY (prioritized) | 40% Must, 35% Should, 25% Could | 100% "High" |
| BA-15 | Requirement chuyển đổi (nhập dữ liệu cũ, đào tạo, chạy song song) được phân loại transition, không lẫn với FR | LLM phân loại câu có từ khóa "migrate/chuyển đổi/import dữ liệu cũ/đào tạo" | needs_review | BABOK-2.3-REQ-CLASSIFICATION | "TR-01 Nhập SRS mẫu của kỳ trước trước go-live" | Ghi là FR vận hành thường xuyên |
| BA-16 | Business rule tách khỏi flow, phát biểu practicable và testable | LLM: câu điều kiện nghiệp vụ trong flow nên tham chiếu BR-ID; BR không phải câu chính sách chung | warning | BABOK-10.9-BUSINESS-RULES | Flow: "theo BR-03"; BR-03 định nghĩa quyền | Flow chứa 5 dòng quy tắc; BR "khuyến khích dùng AI có trách nhiệm" |
| BA-17 | SRS bao phủ nhiều model category, không chỉ Activity Flow | Rule: có ít nhất actor list (People and Roles), UC (Activity Flow), ERD/data (Data and Information), BR (Rationale) | needs_review | BABOK-7.1-SPECIFY-MODEL | Có đủ 4 nhóm | Chỉ có UC diagram và mô tả |
| BA-18 | Tên vai trò thống nhất giữa Actor list, UC diagram, Screen Authorization | Rule: so khớp chuỗi sau chuẩn hóa | error | BABOK-7.2-VERIFY (consistent), BABOK-10-SCOPE-PEOPLE-FLOW (10.39) | "Team Leader" ở cả 3 nơi | "Leader" / "Team Lead" / "Trưởng nhóm" lẫn lộn |
| BA-19 | Entity nhắc trong UC/FR có trong ERD hoặc data dictionary | LLM trích danh từ dữ liệu → so với danh sách entity | warning | BABOK-10-DATA, BABOK-7.4-REQ-ARCHITECTURE | "Project", "UseCase" có trong ERD | UC nhắc "Template" nhưng ERD không có |
| BA-20 | Mỗi secondary actor là hệ thống có mô tả interface | Rule: actor loại system → tồn tại mục trong 4.1 External Interfaces | warning | BABOK-10-DATA (10.24), BABOK-10.47-USE-CASES | LLM Service có mô tả giao thức, giới hạn | Actor "Payment Gateway" không có interface |
| BA-21 | Thuật ngữ chuyên ngành có trong glossary dự án | Rule: thuật ngữ/viết tắt không phổ thông xuất hiện ≥ 2 lần phải có định nghĩa | warning | BABOK-10-DATA (10.23), BABOK-7.2-VERIFY (understandable) | "RAG" được định nghĩa ở 5.4 | Dùng "baseline", "RAG" không giải thích |
| BA-22 | Requirement dùng chung chỉ phát biểu một lần | Rule: phát hiện câu gần trùng (similarity ≥ ngưỡng) ở nhiều function → gợi ý chuyển 5.2 Common Requirements | warning | BABOK-7.4-REQ-ARCHITECTURE (stated once) | Quy tắc phân trang ghi một lần ở 5.2 | Lặp ở 8 function |
| BA-23 | Requirement nằm trong solution scope (validation) | LLM so requirement với scope ở Product Overview; ngoài scope → hỏi người dùng | needs_review | BABOK-7.3-VALIDATE | FR thuộc phạm vi release đã nêu | FR "tích hợp chấm điểm tự động" khi scope ghi ngoài phạm vi |
| BA-24 | Không phê duyệt baseline khi còn lỗi verify mức error | Rule workflow: trạng thái "approved" yêu cầu 0 finding error từ BA-03, BA-06, BA-18 | error | BABOK-5.5-APPROVE, BABOK-7.2-VERIFY | Approve sau khi sửa hết lỗi | Approve khi còn tham chiếu gãy |

**Ghi kết quả:** mỗi finding lưu `check_id`, `chunk_id` căn cứ, vị trí trong artifact, kết quả `pass|fail|needs_review|not_applicable` và lý do (theo index.md). Kết luận do LLM đưa ra mặc định gắn `needs_review` cho đến khi nhóm đánh giá được độ chính xác.

## BABOK-GLOSSARY — Bảng thuật ngữ

**Clause:** Appendix A · **Evidence:** `verified_public` (diễn giải từ Glossary IIBA; mục ghi "secondary" là ngoại lệ) · **Locator:** [Glossary](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/), mục theo chữ cái · **Nguồn:** IIBA

| Thuật ngữ (EN) | Tiếng Việt | Định nghĩa diễn giải |
| --- | --- | --- |
| acceptance criteria | tiêu chí chấp nhận | Tiêu chí gắn với requirement/sản phẩm/chu kỳ bàn giao, phải đạt để stakeholder chấp nhận |
| actor (business analysis) | tác nhân | Người, thiết bị hoặc hệ thống đóng một vai trò xác định khi tương tác với solution |
| assumption | giả định | Yếu tố được tin là đúng nhưng chưa xác nhận, hoặc đúng hiện tại nhưng có thể thay đổi |
| behavioural business rule | quy tắc hành vi (operative rule) | Quy tắc đặt nghĩa vụ/cấm đoán lên hành vi, điều chỉnh hoạt động hằng ngày |
| business analysis information | thông tin phân tích nghiệp vụ | Mọi thông tin là input/output của công việc BA |
| business need | nhu cầu nghiệp vụ | Vấn đề hoặc cơ hội có tầm quan trọng chiến lược/chiến thuật |
| business objective | chỉ tiêu nghiệp vụ | Kết quả khách quan, đo được, cho thấy business goal đã đạt |
| business goal | mục tiêu nghiệp vụ | Trạng thái tổ chức muốn đạt và duy trì, thường định tính |
| business policy | chính sách nghiệp vụ | Chỉ thị không thực hiện trực tiếp được, điều hướng hành động của enterprise |
| business requirement | yêu cầu nghiệp vụ | Goal, objective, outcome giải thích vì sao khởi động change và cách đánh giá thành công |
| business rule | quy tắc nghiệp vụ | Chỉ thị cụ thể, practicable, testable, do doanh nghiệp kiểm soát, hướng dẫn hành vi/quyết định |
| constraint (business analysis) | ràng buộc | Yếu tố không thay đổi được, giới hạn solution hoặc solution option |
| context | bối cảnh | Hoàn cảnh ảnh hưởng, chịu ảnh hưởng và giúp hiểu change |
| core concept | khái niệm lõi | Một trong 6 ý tưởng: Change, Need, Solution, Context, Stakeholder, Value |
| definitional business rule | quy tắc định nghĩa (structural rule) | Quy tắc chỉ ra điều tất yếu đúng/sai, dùng làm tiêu chí định nghĩa khái niệm |
| design | thiết kế | Biểu diễn dùng được của một solution |
| domain subject matter expert | chuyên gia miền | Stakeholder có hiểu biết sâu về chủ đề liên quan need/solution scope |
| elicitation | khơi gợi yêu cầu | Quá trình lặp để suy ra và trích xuất thông tin từ stakeholder hoặc nguồn khác |
| end user | người dùng cuối | Stakeholder tương tác trực tiếp với solution |
| entity-relationship diagram | sơ đồ thực thể–quan hệ | Biểu diễn đồ họa entity của miền bài toán và quan hệ giữa chúng |
| external interface | giao diện ngoài | Tương tác với hệ thống phần cứng/phần mềm hoặc con người bên ngoài solution |
| functional requirement | yêu cầu chức năng | Năng lực solution phải có, xét theo hành vi và thông tin nó quản lý |
| model | mô hình | Biểu diễn đơn giản hóa thực tế cho một đối tượng đọc cụ thể |
| non-functional requirement | yêu cầu phi chức năng | Hiệu năng/thuộc tính chất lượng phải đạt; thường đo được; ràng buộc thiết kế tổng thể |
| prioritization | ưu tiên hóa | Xác định mức quan trọng tương đối của các mục để quyết định thứ tự xử lý |
| process model | mô hình quy trình | Tập sơ đồ và thông tin hỗ trợ về một quy trình |
| requirement | yêu cầu | Biểu diễn dùng được của một need |
| requirements architecture | kiến trúc yêu cầu | Các requirement của initiative và quan hệ giữa chúng |
| requirements attribute | thuộc tính yêu cầu | Đặc điểm/thuộc tính của requirement, hỗ trợ quản lý requirement |
| requirements defect | khiếm khuyết yêu cầu | Lỗi trong requirement: do chất lượng kém (xem verification) hoặc không tạo value (xem validation) |
| requirements life cycle | vòng đời yêu cầu | Các giai đoạn requirement đi qua từ khởi tạo tới retire |
| requirements traceability | truy vết yêu cầu | Khả năng theo dõi quan hệ giữa requirements/designs từ need gốc tới solution đã hiện thực |
| requirements validation | xác nhận yêu cầu | Đánh giá requirement hỗ trợ lợi ích mong đợi và nằm trong solution scope |
| requirements verification | kiểm chứng yêu cầu | Đánh giá requirement được định nghĩa đúng và đạt mức chất lượng chấp nhận được |
| risk (business analysis) | rủi ro | Tác động của tính không chắc chắn lên value của change/solution/enterprise |
| scenario | kịch bản | (secondary) Một đường đi cụ thể của actor và solution để đạt mục tiêu; Glossary công khai không có mục này |
| scope | phạm vi | Ranh giới của sự kiểm soát, change, solution hoặc need |
| scope model | mô hình phạm vi | Mô hình xác định ranh giới miền nghiệp vụ hoặc solution |
| secondary actor | tác nhân phụ | Actor bên ngoài hệ thống đang thiết kế, hỗ trợ thực thi use case |
| solution | giải pháp | Cách cụ thể thỏa mãn một hay nhiều need trong một context |
| solution component | thành phần giải pháp | Phần con của solution: người, hạ tầng, phần cứng, phần mềm, thiết bị, cơ sở, quy trình |
| solution requirement | yêu cầu giải pháp | Capability/quality của solution đáp ứng stakeholder requirement; gồm functional và non-functional |
| solution scope | phạm vi giải pháp | Tập capability solution phải cung cấp để đáp ứng business need |
| stakeholder | bên liên quan | Nhóm hoặc cá nhân có quan hệ với change, need hoặc solution |
| stakeholder requirement | yêu cầu bên liên quan | Nhu cầu của stakeholder phải đáp ứng để đạt business requirement; cầu nối tới solution requirement |
| stated requirement | yêu cầu được phát biểu | Requirement stakeholder nêu ra, chưa phân tích/verify/validate |
| state diagram | sơ đồ trạng thái | Mô hình vòng đời của một entity hoặc class |
| transition requirement | yêu cầu chuyển tiếp | Năng lực và điều kiện để chuyển current → future state, có tính tạm thời |
| use case | ca sử dụng | Mô tả tương tác quan sát được giữa actor và solution khi actor dùng hệ thống để đạt một mục tiêu cụ thể |
| use case diagram | sơ đồ use case | Sơ đồ UML thể hiện mọi actor và use case của hệ thống/sản phẩm |
| user requirement | yêu cầu người dùng | Xem stakeholder requirement |
| user story | câu chuyện người dùng | Phát biểu ngắn về chức năng/phẩm chất cần để mang lại value cho một stakeholder cụ thể |
| validation (business analysis) | xác nhận | Kiểm tra deliverable phù hợp với mục đích sử dụng |
| value (business analysis) | giá trị | Mức đáng giá, quan trọng hoặc hữu ích của một thứ với stakeholder trong một context |
| verification (business analysis) | kiểm chứng | Xác định deliverable/artifact đạt chuẩn chất lượng chấp nhận được |
| verified requirement | yêu cầu đã kiểm chứng | Requirement đã review, định nghĩa đúng, tuân thủ chuẩn, đủ chi tiết |
| viewpoint | điểm nhìn | Tập quy ước về cách biểu diễn, tổ chức và liên hệ requirement |

## BABOK-GAPS — Phần chưa xác minh và sai sót của revision 2

**Evidence:** `pending`

**Chưa xác minh với bản BABOK v3 có license (giữ nhãn `secondary_source`, không dùng làm căn cứ `error`):**

| Nội dung | Tình trạng | Cách bổ sung |
| --- | --- | --- |
| Elements của §7.1–7.6, §5.1–5.5 (tên và thứ tự) | 1–2 nguồn thứ cấp; tên element 3 của 7.3 ("Solution Scope" hay "Business Case and Goals") không thống nhất | Đọc §x.x.4 trong BABOK v3 (bản IIBA member/thư viện) |
| Model category "Capability" (§7.1) | Chỉ Whizlabs có, kèm viện dẫn "p.138" chưa kiểm | Kiểm bảng model categories trong §7.1.4 |
| Danh sách loại quan hệ ở 7.4 (Necessity, Effort, Subset, Cover, Value) | 1 nguồn, độ tin cậy thấp | Kiểm §7.4.4 |
| Nhãn Necessity/Effort của quan hệ Depends (5.1) | 1 nguồn dùng nhãn; nguồn thứ 2 chỉ mô tả nghĩa | Kiểm §5.1.4 |
| Yếu tố impact analysis của 5.4 | Các nguồn thứ cấp mâu thuẫn | Kiểm §5.4.4 |
| Element của §10.47 (đặc biệt "guarantees", tách alternative/exception), strengths/limitations | 2 nguồn cho element; usage considerations chưa có nguồn bám BABOK | Kiểm §10.47.3–10.47.4 |
| 15 nhóm NFR §10.30 | 2 nguồn, lệch 2 mục (Scalability, Compliance) | Kiểm §10.30.3 |
| Nguyên tắc §10.9, elements §10.1 | 1 nguồn | Kiểm §10.9.2–10.9.3, §10.1.3 |
| Số trang in của BABOK v3 | Không ghi trang cho bản chưa mở | Ghi sau khi có bản hợp lệ |
| Task cards KA 3, 4, 5, 6, 8 | IIBA có xuất bản (vd `all-task-cards-req-and-designs-life-cycle-mgmt.pdf`, các card lẻ của trace/assess/validate) nhưng link chuyển hướng tới đăng nhập `my.iiba.org` (kiểm 14/10/2026) | Tải bằng tài khoản IIBA; không đưa PDF vào repo |
| Thân trang KnowledgeHub | Chỉ tải được mục lục; nội dung cần đăng nhập | Tài khoản thành viên IIBA |

**Sai sót hoặc thiếu sót của revision 2 đã sửa:**
1. Rev 2 ghi Core Standard §1.5 ở "trang in 7–8, PDF 14–15". Thực tế §1.5 nằm trọn ở **trang in 7 / PDF 14**; trang in 8 / PDF 15 là §1.6 Stakeholders.
2. Rev 2 chỉ dùng Core Standard cho §1.5 và bỏ sót phần lớn tài liệu: Core Standard có purpose/description/inputs/outputs **của đủ 30 task** và các mục §1.3, §1.4, §1.6, §1.7 (đều `verified_public`).
3. Rev 2 không phân biệt stakeholder roles chuẩn (11 vai trò) và không nêu Glossary định nghĩa *secondary actor*, cũng không ghi rằng Glossary **không có** "primary actor" và "scenario".
4. Rev 2 không ghi tên gọi sai "Define Solution Options" trong Core Standard, mà errata đã xác nhận đúng là "Define Design Options".
5. Rev 2 không có danh mục technique. Lưu ý thêm: yêu cầu giao việc cho revision 3 ghi Data Dictionary/DFD/Data Modelling là §10.15/10.16/10.17. Theo KnowledgeHub, số đúng là **§10.12 Data Dictionary, §10.13 Data Flow Diagrams, §10.15 Data Modelling**; §10.16 là Decision Analysis, §10.17 là Decision Modelling.
6. Rev 2 thiếu frontmatter `revision`, `checked_on` cũ (13/10/2026), chỉ có 6 check chưa có cột phát hiện/mức/căn cứ.

**Quyền sử dụng:** Core Standard cho phép sao chép cho mục đích cá nhân, nghề nghiệp, giáo dục (trang bản quyền, PDF 3). Glossary và KnowledgeHub là nội dung có bản quyền của IIBA. File này chỉ diễn giải, trích nguyên văn tối đa vài định nghĩa ngắn. Trước khi đưa PDF IIBA vào RAG, cần xác nhận quyền sử dụng cho AI.
