---
source_id: omg-uml
title: OMG Unified Modeling Language (OMG UML)
version: 2.5.1 (December 2017)
document_id: formal/17-12-05
publisher: Object Management Group (OMG)
source_url: https://www.omg.org/spec/UML/2.5.1/PDF
checked_on: 2026-10-14
access: public_normative_pdf
rights_status: summary_only_review_before_source_ingestion
revision: 3
---

# UML 2.5.1 — Use Case, Actor, quan hệ và ký pháp sơ đồ use case

Nguồn: [trang phiên bản](https://www.omg.org/spec/UML/2.5.1/) và [PDF đặc tả](https://www.omg.org/spec/UML/2.5.1/PDF) (OMG formal/2017-12-05, 796 trang PDF). Đã đọc trực tiếp phần thân: toàn bộ Clause 18 UseCases (trang in 639–652), các phần Clause 7, 9, 10, 11, 12, 13, 20, 22 mà sơ đồ use case dùng tới, Annex A, các mục liên quan của Annex B và Annex C. Nội dung dưới đây là diễn giải, không phải bản sao; trích nguyên văn chỉ dùng cho định nghĩa ngắn.
Quy ước locator: **trang in** = số in ở chân trang; **PDF** = số thứ tự trang trong file, đếm từ 1. Với phần thân chuẩn, PDF = trang in + 42 (đã kiểm từng trang được dẫn).
Giấy phép OMG chỉ cho phép dùng bản đặc tả với mục đích tham khảo; file này chỉ tóm tắt, không nạp nguyên văn đặc tả vào RAG.
Văn bản UML 2.5.1 dùng SHALL/SHOULD/MAY theo ISO/IEC Directives Part 2 Annex H (§5.1). Mỗi section dưới đây ghi rõ đâu là quy định của chuẩn, đâu là ví dụ minh họa, đâu là suy luận của nhóm.

## Mục lục

- `UML-5-CONVENTIONS` — Quy ước trình bày của đặc tả
- `UML-18.1.1-SUMMARY` — Tóm tắt Clause 18
- `UML-18.1.2-ABSTRACT-SYNTAX` — Metamodel UseCases (Figure 18.1)
- `UML-18.1.3.1-USECASE-SEMANTICS` — Ngữ nghĩa Use Case
- `UML-18.1.3.1-ACTOR-SEMANTICS` — Ngữ nghĩa Actor
- `UML-18-SUBJECT-OWNERSHIP` — Subject, owner, nhiều subject
- `UML-18-USECASE-BEHAVIOR-DESCRIPTION` — Mô tả hành vi use case (ownedBehavior/classifierBehavior)
- `UML-18-ACTOR-USECASE-ASSOCIATION` — Association Actor–UseCase, multiplicity, navigability
- `UML-18.1.3.2-EXTEND-SEMANTICS` — Ngữ nghĩa Extend và ExtensionPoint
- `UML-18.1.3.3-INCLUDE-SEMANTICS` — Ngữ nghĩa Include
- `UML-18.1.4-NOTATION` — Ký pháp Clause 18
- `UML-18-NOTATION-SUMMARY` — Bảng tổng hợp graphic nodes / graphic paths
- `UML-18.1.5-EXAMPLES` — Các ví dụ Figure 18.2–18.12
- `UML-18.2.1-ACTOR` — Actor [Class]
- `UML-18.2.2-EXTEND` — Extend [Class]
- `UML-18.2.3-EXTENSIONPOINT` — ExtensionPoint [Class]
- `UML-18.2.4-INCLUDE` — Include [Class]
- `UML-18.2.5-USECASE` — UseCase [Class]
- `UML-18.3-ASSOCIATIONS` — Association Descriptions của Clause 18
- `UML-9.2-GENERALIZATION` — Generalization áp dụng cho Actor/UseCase
- `UML-9.2-CLASSIFIER-NOTATION-ABSTRACT` — Classifier, isAbstract, ký pháp mặc định
- `UML-7.4-NAMING` — NamedElement, tên và tính phân biệt
- `UML-7.2-COMMENT-NOTE` — Comment / note symbol
- `UML-7.6-CONSTRAINT-CONDITION` — Constraint, OpaqueExpression, condition của Extend
- `UML-7.7-DEPENDENCY-TRACE-REFINE` — Dependency, Abstraction, «Trace», «Refine», «Derive»
- `UML-12-PACKAGE-IMPORT` — Package và «import» trong sơ đồ use case
- `UML-22-STANDARD-STEREOTYPES` — «Subsystem» và stereotype chuẩn liên quan
- `UML-20-INFORMATION-FLOW` — Actor/UseCase trong InformationFlow
- `UML-ANNEX-A-DIAGRAMS` — Loại sơ đồ, frame, heading `uc`
- `UML-ANNEX-B-DI` — UMLUseCaseDiagram và quy tắc trao đổi sơ đồ
- `UML-ANNEX-C-KEYWORDS` — Keyword «actor», «extend», «include», guillemets
- `UML-FLF-SPINE-MAPPING` — Ánh xạ dữ liệu FlintFlow sang metamodel UML
- `UML-MISCONCEPTIONS` — Hiểu lầm phổ biến
- `UML-GLOSSARY` — Thuật ngữ
- `UML-POLICY` — Bộ check đề xuất cho rule engine
- `UML-GAPS` — Chưa xác minh / thay đổi so với revision 2

## UML-5-CONVENTIONS — Quy ước trình bày của đặc tả

**Clause:** §4; §5.1; §5.2; §6.4.1 · **Evidence:** `verified_normative` · **Locator:** trang in 7, 9, 16–17 / PDF 49, 51, 58–59 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- **§4 Terms and Definitions** (trang in 7): đặc tả **không** có mục định nghĩa thuật ngữ hình thức lấy từ tài liệu khác. Vì vậy "định nghĩa" của Actor, UseCase... nằm ở mục *Description* của từng metaclass (§18.2.x.1) và ở phần Semantics.
- **§5.1 Key words** (trang in 9): SHALL, SHALL NOT, SHOULD, SHOULD NOT, MAY, NEED NOT, CAN, CANNOT được hiểu theo ISO/IEC Directives Part 2, Annex H (bản 2011). Hệ quả cho rule engine: câu có "shall"/"must" → yêu cầu; "should" → khuyến nghị; "may" → cho phép.
- **§5.2 Annotations on Example Diagrams**: một số hình ví dụ có chú thích giải thích (màu đỏ trong bản màu) **không** thuộc ký pháp UML.
- **§6.4.1 Specification Format** (trang in 16–17): mỗi sub clause chia thành Abstract Syntax, Semantics, Notation, Examples. Cuối mỗi clause có *Classifier Descriptions* và *Association Descriptions* sinh tự động từ metamodel, liệt kê đầy đủ thuộc tính, association end, operation, constraint (kèm OCL).
- Cũng §6.4.1: các ví dụ trong đặc tả chỉ minh họa cú pháp và ngữ nghĩa, không khẳng định sự kiện thực tế. Khác biệt về phông chữ, độ dày nét, kích thước đầu mũi tên giữa các hình "không quan trọng" (not material). Ký pháp văn bản dạng BNF chủ yếu để trình bày, không bắt buộc phải parse được.
- Quy ước màu: nếu công cụ dùng bảng màu khác, "black" hiểu là nét liền/đặc, "white" là không tô.

## UML-18.1.1-SUMMARY — Tóm tắt Clause 18

**Clause:** §18.1.1 · **Evidence:** `verified_normative` · **Locator:** trang in 639 / PDF 681 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- UseCases là phương tiện để **nắm bắt yêu cầu (requirements)** của hệ thống, tức là hệ thống phải làm gì.
- Ba khái niệm chính: **Actor** (tác nhân), **UseCase** (ca sử dụng) và **subject** (chủ thể, hệ thống đang xét).
- Subject của mỗi UseCase đại diện cho hệ thống đang được xem xét mà UseCase áp dụng vào. Người dùng và **mọi hệ thống khác** có thể tương tác với subject được biểu diễn bằng Actor.
- UseCase là một **đặc tả hành vi (specification of behavior)**. Một *instance* của UseCase là một lần xuất hiện của hành vi nảy sinh (emergent behavior) phù hợp với UseCase đó; các instance như vậy thường được mô tả bằng **Interaction** (sequence diagram...).
- Clause 18 thuộc nhóm "supplementary concepts" (Clauses 18–20) theo §6.4.1.

## UML-18.1.2-ABSTRACT-SYNTAX — Metamodel UseCases (Figure 18.1)

**Clause:** §18.1.2, Figure 18.1 · **Evidence:** `verified_normative` · **Locator:** trang in 639 / PDF 681 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

Figure 18.1 gồm 5 metaclass của Clause 18 và các metaclass nền từ clause khác.

| Metaclass | Kế thừa trực tiếp (generalization) | Vai trò |
| --- | --- | --- |
| Actor | BehavioredClassifier | Vai trò tương tác với subject |
| UseCase | BehavioredClassifier | Tập hành vi subject cung cấp |
| Extend | NamedElement, DirectedRelationship | Quan hệ mở rộng: extension → extendedCase |
| Include | DirectedRelationship, NamedElement | Quan hệ bao hàm: includingCase → addition |
| ExtensionPoint | RedefinableElement | Điểm trong hành vi UC có thể được mở rộng |

Các association end trong Figure 18.1 (multiplicity ghi theo hình):

| Từ | End | Đến | Multiplicity | Ghi chú |
| --- | --- | --- | --- | --- |
| UseCase | `extend` | Extend | `*` | composite, subsets ownedMember; UC **mở rộng** sở hữu Extend |
| Extend | `extension` | UseCase | `1` | subsets namespace, source |
| Extend | `extendedCase` | UseCase | `1` | subsets target |
| Extend | `extensionLocation` | ExtensionPoint | `1..*` `{ordered}` | bắt buộc ít nhất 1 điểm |
| Extend | `condition` | Constraint | `0..1` | composite, subsets ownedElement |
| UseCase | `include` | Include | `*` | composite; UC **bao hàm** sở hữu Include |
| Include | `includingCase` | UseCase | `1` | subsets namespace, source |
| Include | `addition` | UseCase | `1` | subsets target |
| UseCase | `extensionPoint` | ExtensionPoint | `*` | composite |
| ExtensionPoint | `useCase` | UseCase | `1` | UC sở hữu điểm |
| Classifier | `ownedUseCase` | UseCase | `*` | composite; ngược lại `classifier` `0..1` |
| UseCase | `subject` | Classifier | `*` | ngược lại `Classifier::useCase` `*` |

Ý nghĩa thực tế: (1) Extend và Include **là phần tử mô hình thuộc sở hữu của UseCase nguồn**, không phải đường vẽ tự do; (2) Extend **bắt buộc** tham chiếu ≥ 1 ExtensionPoint; (3) subject và owner là **hai association khác nhau**.

## UML-18.1.3.1-USECASE-SEMANTICS — Ngữ nghĩa Use Case

**Clause:** §18.1.3.1 (phần Use Cases) · **Evidence:** `verified_normative` · **Locator:** trang in 639–640 / PDF 681–682 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Định nghĩa và vị trí trong metamodel**
- Một UseCase có thể áp dụng cho **bất kỳ số lượng subject nào**. Khi áp dụng cho một subject, nó đặc tả một tập hành vi do subject thực hiện, tạo ra một **kết quả quan sát được (observable result) có giá trị** cho Actor hoặc các stakeholder khác của subject.
- UseCase là một loại **BehavioredClassifier**, khai báo một tập hành vi được cung cấp (offered Behaviors). Mỗi UseCase đặc tả hành vi subject có thể thực hiện **cùng với một hoặc nhiều Actor**.
- UseCase định nghĩa hành vi được cung cấp **mà không tham chiếu cấu trúc bên trong** của subject. Hành vi gồm tương tác Actor–subject, có thể làm đổi trạng thái subject và giao tiếp với môi trường.
- UseCase có thể gồm các biến thể của hành vi cơ bản, kể cả **hành vi ngoại lệ (exceptional behavior)** và **xử lý lỗi (error handling)**.

**Subject và tính hoàn chỉnh**
- Subject có thể là một hệ thống hoặc **bất kỳ phần tử nào có hành vi**, ví dụ Component hay Class.
- Mỗi UseCase đặc tả **một đơn vị chức năng hữu ích (unit of useful functionality)** subject cung cấp cho người dùng, tức một cách tương tác cụ thể với subject.
- Chức năng này **phải luôn được hoàn tất** để UseCase hoàn tất. UseCase được coi là hoàn tất khi, sau khi chạy, subject ở trạng thái không chờ thêm input/hành động nào và UseCase có thể được khởi động lại, **hoặc** subject ở trạng thái lỗi.
- UseCase dùng được cho cả đặc tả **yêu cầu (bên ngoài)** lên subject và đặc tả **chức năng** subject cung cấp. UseCase cũng có thể nêu yêu cầu subject đặt lên **môi trường**, bằng cách định nghĩa Actor nên tương tác với subject thế nào.

**Quan hệ với Actor và UseCase khác**
- UseCase *có thể* (may) có Actor liên kết. Association mô tả cách instance của Classifier hiện thực UseCase tương tác với người dùng đóng một vai trò của Actor.
- **Hai UseCase đặc tả cùng một subject không thể có association với nhau**, vì mỗi UseCase tự mô tả một cách dùng hoàn chỉnh của subject. Quy định này được hình thức hóa thành constraint `no_association_to_use_case` (§18.2.5.6).
- Mô tả hành vi (Interaction, Activity, StateMachine, pre/postcondition, văn bản tự nhiên): xem `UML-18-USECASE-BEHAVIOR-DESCRIPTION`. Ownership/subject: xem `UML-18-SUBJECT-OWNERSHIP`. Multiplicity trên association: xem `UML-18-ACTOR-USECASE-ASSOCIATION`.

**Hệ quả cho việc đánh giá (diễn giải của nhóm)**
- Một UC dạng bước giao diện ("Click Save Button") khó thỏa yêu cầu "đơn vị chức năng hữu ích, có kết quả quan sát được, có giá trị". Đây là căn cứ ngữ nghĩa cho check độ chi tiết. UML **không** có luật đặt tên use case.
- Ngoại lệ và xử lý lỗi được phép nằm **trong** cùng một UseCase. Không bắt buộc tách thành UC riêng hay extend riêng.

## UML-18.1.3.1-ACTOR-SEMANTICS — Ngữ nghĩa Actor

**Clause:** §18.1.3.1 (phần Actors); §18.2.1.1 · **Evidence:** `verified_normative` · **Locator:** trang in 640, 647 / PDF 682, 689 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- Định nghĩa (§18.2.1.1): "An Actor specifies a role played by a user or any other system that interacts with the subject."
- Actor mô hình hóa **một loại vai trò** do một thực thể đóng khi tương tác với subject của các UseCase liên kết (ví dụ trao đổi tín hiệu và dữ liệu).
- Actor có thể đại diện vai trò của **người dùng, phần cứng bên ngoài (external hardware) hoặc hệ thống khác**.
- NOTE của chuẩn: Actor không nhất thiết là một thực thể vật lý cụ thể mà là **một vai trò** liên quan đến việc đặc tả UseCase. Một instance vật lý có thể đóng nhiều Actor, và một Actor có thể được nhiều instance khác nhau đóng.
- NOTE thứ hai: chữ "role" ở đây dùng **không chính thức**, không mang định nghĩa kỹ thuật "role" ở chỗ khác của đặc tả (vd. role trong Collaboration).
- Actor là **BehavioredClassifier** (§18.2.1.3), nên có thể có ownedBehavior, tham gia Generalization, là abstract...
- Ràng buộc trên Actor (tên bắt buộc, chỉ association binary với UseCase/Component/Class): xem `UML-18.2.1-ACTOR`.

**Điều chuẩn KHÔNG nói** (đã tìm toàn văn để xác nhận):
- Không có khái niệm "primary actor"/"secondary actor"/"supporting actor". Tìm toàn văn không thấy các cụm này. Đây là khái niệm của phương pháp luận (vd. Cockburn), không phải UML.
- Không có Actor kiểu "time"/"timer". UML chỉ nêu người dùng, phần cứng ngoài, hệ thống khác.
- Clause 18 không có câu tường minh "Actor phải nằm ngoài subject". Chuẩn nói Actor *tương tác với subject* và nhắc tới *môi trường* của subject (§18.1.3.1). Kết luận "actor là thành phần nội bộ thì sai" là **suy luận phương pháp luận**, nên để mức `needs_review`, không phải lỗi UML.

## UML-18-SUBJECT-OWNERSHIP — Subject, owner, nhiều subject

**Clause:** §18.1.3.1; §18.1.4; §18.2.5.4; §18.3.8; §9.2.3.1; §9.9.4.6; §9.10.28 · **Evidence:** `verified_normative` · **Locator:** trang in 640, 641–642, 649, 652, 100, 133, 162 / PDF 682, 683–684, 691, 694, 142, 175, 204 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Hai quan hệ khác nhau**

| Khái niệm | Metamodel | Multiplicity | Ý nghĩa |
| --- | --- | --- | --- |
| Subject | `UseCase::subject : Classifier [0..*]` ↔ `Classifier::useCase : UseCase [0..*]` (A_subject_useCase, §18.3.8) | UC có 0..* subject; Classifier là subject của 0..* UC | Các subject mà UC **áp dụng vào**; mỗi subject (hoặc các part của nó) hiện thực **mọi** UC áp dụng cho nó (§18.2.5.4) |
| Owner | `Classifier::ownedUseCase : UseCase [0..*]` (composite) ↔ `classifier [0..1]` (A_ownedUseCase_classifier, §9.10.28); hoặc Package sở hữu như packagedElement | UC có tối đa 1 owner | Namespace **chứa** UC |

- §18.1.3.1: UseCase có thể thuộc sở hữu của **Package hoặc Classifier**. Classifier sở hữu thường là subject của các UC nó sở hữu, nhưng **không nhất thiết**, xem Figure 18.10/18.11.
- §9.2.3.1 (trang in 100): "A Classifier may own UseCases."
- §18.1.5 (trang in 645): UseCase **không cần** thuộc sở hữu của subject. Ví dụ: các UC áp dụng cho subsystem ATMsystem nhưng nằm trong nhiều package khác nhau.

**Subject có thể là gì**
- Hệ thống hoặc bất kỳ phần tử có hành vi, như **Component hoặc Class** (§18.1.3.1). Về metamodel, kiểu của `subject` là Classifier.
- Ví dụ chuẩn: subject là Component mang stereotype chuẩn «Subsystem» (Figure 18.2, xem `UML-22-STANDARD-STEREOTYPES`).

**Nhiều subject**
- `subject [0..*]` cho phép một UC áp dụng cho nhiều subject, hoặc không có subject nào được mô hình hóa.
- §18.1.4: cùng một UC trong mô hình **có thể được vẽ thành nhiều ellipse riêng** trong nhiều hình chữ nhật subject. Đó vẫn là một phần tử mô hình, không phải các UC trùng tên.

**Ký pháp và nguy cơ nhầm lẫn**
- Hình chữ nhật subject (system boundary) **không hàm ý subject sở hữu** các UC bên trong, chỉ nói UC áp dụng cho classifier đó (§18.1.4).
- Chuẩn cảnh báo rõ: dễ nhầm giữa UC nằm trong **boundary rectangle của subject** và UC nằm trong **compartment của classifier sở hữu** (compartment "owned use cases", Figure 18.9).
- Hình chữ nhật subject khác ký pháp Classifier thường: **không có header, không có compartment** (§18.1.4).

## UML-18-USECASE-BEHAVIOR-DESCRIPTION — Mô tả hành vi use case

**Clause:** §18.1.1; §18.1.3.1; §18.1.4; §18.1.5 (Figure 18.12); §10.5.1; §13.2.3.4; §9.2.4.1 · **Evidence:** `verified_normative` · **Locator:** trang in 639–640, 642, 646, 174, 288–289, 102 / PDF 681–682, 684, 688, 216, 330–331, 144 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Các kỹ thuật mô tả được chuẩn liệt kê (§18.1.3.1)**

| Kỹ thuật | Cơ chế metamodel | Ghi chú |
| --- | --- | --- |
| Interaction (sequence/communication...) | `ownedBehavior` | §18.1.1: instance của UC "thường" được mô tả bằng Interaction |
| Activity | `ownedBehavior` | Có thể dùng activity diagram |
| StateMachine | `ownedBehavior` | Ví dụ Figure 18.12 |
| Pre-condition, post-condition | Constraint trên Behavior | "where appropriate" |
| Văn bản tự nhiên (natural language text) | Comment/OpaqueBehavior... (chuẩn không chỉ định) | "where appropriate" |
| Collaboration | Gián tiếp: Collaboration dùng UC và Actor làm kiểu cho các part | Mô tả gián tiếp |

- Chọn kỹ thuật nào tùy bản chất hành vi và người đọc; các kỹ thuật **có thể kết hợp** (§18.1.3.1).
- Hành vi chi tiết được ghi theo kỹ thuật đã chọn, **trong một sơ đồ hoặc tài liệu văn bản riêng** (§18.1.4). Sơ đồ use case không phải nơi chứa luồng chi tiết.

**ownedBehavior và classifierBehavior (BehavioredClassifier, §10.5.1)**
- `ownedBehavior : Behavior [0..*]` (composite): các Behavior thuộc sở hữu của BehavioredClassifier.
- `classifierBehavior : Behavior [0..1]` subsets ownedBehavior: Behavior đặc tả hành vi của **chính** classifier.
- Constraint `class_behavior`: nếu có classifierBehavior thì Behavior đó không có `specification`.
- Specializations của BehavioredClassifier: **Actor, UseCase**, Class, Collaboration (§10.5.1.4).
- §13.2.3.4: BehavioredClassifier có thể có nhiều ownedBehavior, **tối đa một** được coi là hành vi của chính nó. Behavior là ownedBehavior thì có BehavioredClassifier đó làm **context** và có thể tham chiếu feature của context. Ngữ nghĩa cụ thể của classifierBehavior tùy loại classifier sở hữu. Chuẩn **không** quy định riêng classifierBehavior cho UseCase.

**Ký pháp**
- Compartment chứa ownedBehavior của một BehavioredClassifier có tên **"owned behaviors"** (§9.2.4.1). Figure 18.12 vẽ UC `MakeCall` ở dạng classifier rectangle có compartment "owned behaviors" chứa «statemachine» `Call`, kèm state machine diagram `stm Call` (Dialing → Ringing → Talking).
- UC có thể hiển thị attribute và operation trong compartment bên trong ellipse, giống classifier rectangle (§18.1.4).

**Hệ quả cho FlintFlow (diễn giải của nhóm):** đặc tả use case dạng bảng/văn bản (main flow, alternative flow, pre/postcondition) là một kỹ thuật mô tả **hợp lệ** theo UML ("natural language text", "pre-conditions, post-conditions"). UML **không** quy định template đặc tả use case. Mọi template (các trường, cách đánh số luồng) là quy ước của nhóm hoặc nguồn khác.

## UML-18-ACTOR-USECASE-ASSOCIATION — Association Actor–UseCase, multiplicity, navigability

**Clause:** §18.1.3.1; §18.1.5 (Figure 18.2); §18.2.1.4; §18.2.5.6; §11.5.3.1; §11.5.4; §7.5.4.1 · **Evidence:** `verified_normative` · **Locator:** trang in 640, 643, 647, 650, 199–200, 201–203, 34–35 / PDF 682, 685, 689, 692, 241–242, 243–245, 76–77 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Multiplicity trên association Actor–UseCase (§18.1.3.1)**

| Vị trí multiplicity | Ý nghĩa khi > 1 | Chuẩn có định nghĩa cách tham gia? |
| --- | --- | --- |
| Đầu Actor (actor end) | Nhiều instance Actor cùng tham gia **một** UC | Không. Có thể đồng thời (vd. hai người cùng phóng tên lửa) hoặc nối tiếp (một người bắt đầu, người khác kết thúc) |
| Đầu UseCase (use case end) | Một Actor có thể tham gia **nhiều** UC cùng loại | Không. Actor có thể khởi tạo nhiều UC song song hoặc ở các thời điểm khác nhau |

Ví dụ Figure 18.2 (trang in 643):
- Customer/Administrator: `1` ở đầu actor, `0..1` ở đầu UC. Chuẩn diễn giải là actor có thể tham gia hoặc không tham gia các UC liên kết (0..1), và mỗi UC phải có một Actor khởi tạo (1).
- Bank: `1` ở đầu Bank, `0..*` ở đầu Deposit/Register ATM. Hai UC này cần Bank tham gia, và Bank có thể tham gia nhiều UC cùng lúc.

Lưu ý: "khởi tạo" (initiate) ở đây là **diễn giải của ví dụ** dựa trên multiplicity. UML **không** có ký pháp hay thuộc tính riêng cho "actor khởi tạo".

**Ràng buộc metamodel**
- Association có Actor tham gia **phải binary**, và đầu bên kia chỉ được là UseCase, Component hoặc Class (§18.2.1.4). **Không có association Actor–Actor.**
- Association có UseCase tham gia **phải binary** (§18.2.5.6). UC–UC cùng subject bị cấm (§18.2.5.6).

**Association nói chung (§11.5)**
- Association khai báo có thể có **link** giữa các instance có kiểu **tương thích (conform)** với kiểu ở các đầu (§11.5.3.1). Vì vậy instance của actor con (qua Generalization) cũng tham gia được link của actor cha. Đây là suy ra từ type conformance §9.2.3.2, xem `UML-9.2-GENERALIZATION`.
- Binary association vẽ bằng **đường liền**. Tên association đặt gần đường. Mũi tên tam giác đặc cạnh tên chỉ **hướng đọc**, chỉ để tài liệu hóa, không có ngữ nghĩa chung (§11.5.4).
- **Navigability**: đầu mũi tên mở ở đầu association = đầu đó navigable; dấu `x` nhỏ = không navigable (§11.5.4). Navigable nghĩa là truy cập hiệu quả từ đầu kia lúc runtime (§11.5.3.1), **không** nói ai khởi tạo tương tác.
- Công cụ có thể ẩn mũi tên/dấu x theo từng sơ đồ. Khi ẩn toàn bộ, **không suy ra được** gì về navigability (§11.5.4, trang in 203).
- NOTE §11.5.4 (trang in 202): **nếu sơ đồ không hiển thị multiplicity thì không được rút ra kết luận gì** về multiplicity trong mô hình.

**Ký pháp multiplicity (§7.5.4.1)**
- Dạng `<lower>..<upper>`; `*` = không giới hạn trên. Ở association end, ghi **không có ngoặc vuông**, đặt gần đầu đường.
- `1` tương đương `1..1`; `*` tương đương `0..*`. Có thể kèm `{ordered}`, `{unique}`...

## UML-18.1.3.2-EXTEND-SEMANTICS — Ngữ nghĩa Extend và ExtensionPoint

**Clause:** §18.1.3.2 · **Evidence:** `verified_normative` · **Locator:** trang in 640–641 / PDF 682–683 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Khái niệm**
- **Extend** (mở rộng) là quan hệ **từ UC mở rộng (extension)** tới **UC được mở rộng (extendedCase)**. Nó đặc tả cách thức và thời điểm hành vi của UC mở rộng được chèn vào hành vi của UC được mở rộng.
- Việc mở rộng xảy ra tại **một hoặc nhiều extension point** định nghĩa **trong UC được mở rộng**.
- Mục đích: dùng khi có hành vi bổ sung cần thêm, **có thể có điều kiện (possibly conditionally)**, vào hành vi của một hoặc nhiều UC.

**Tính độc lập**
- UC được mở rộng (base) được định nghĩa **độc lập** với UC mở rộng và **có nghĩa độc lập**.
- Ngược lại, UC mở rộng thường định nghĩa hành vi **không nhất thiết có nghĩa khi đứng riêng**. Nó là tập các phần tăng hành vi theo mô-đun, bổ sung cho một lần chạy của UC được mở rộng trong điều kiện cụ thể.
- NOTE: cùng một UC mở rộng có thể extend **nhiều** UC, và một UC mở rộng **cũng có thể bị extend**.

**Cấu trúc metamodel**
- Extend là **DirectedRelationship** (source = UC mở rộng, target = UC được mở rộng) và **NamedElement** (có thể có tên trong ngữ cảnh UC sở hữu).
- **Extend thuộc sở hữu của UC mở rộng (extension).**

**ExtensionPoint**
- Xác định một điểm trong hành vi của UC nơi hành vi đó có thể được mở rộng bằng Extend.
- **Mỗi ExtensionPoint có tên duy nhất trong một UseCase.**
- Cách định nghĩa vị trí của ExtensionPoint **cố ý không được quy định**, vì UC có thể viết bằng văn bản tự nhiên, bảng, cây...
- Trực giác theo chuẩn: UC dạng văn bản gồm các đoạn hành vi chạy nối tiếp. Extension point là chỗ chèn giữa các đoạn. UC mở rộng gồm một hoặc nhiều đoạn được chèn vào đúng chỗ. `extensionLocation` là đặc tả tất cả các ExtensionPoint nơi phần bổ sung được ghép vào.

**Ngữ nghĩa thực thi của condition**
- Nếu **condition vắng mặt**, hoặc đúng **tại thời điểm đạt tới ExtensionPoint đầu tiên** khi chạy UC được mở rộng, thì **mọi** đoạn hành vi tương ứng của UC mở rộng cũng được chạy. Nếu condition sai thì không.
- Từng đoạn chạy khi đạt tới ExtensionPoint tương ứng. Xong một đoạn, việc thực thi tiếp tục với hành vi của UC được mở rộng **sau** ExtensionPoint đó.
- Dù có nhiều UC tham gia, **chỉ có một lần thực thi hành vi duy nhất** (single behavior execution).

**Hệ quả (diễn giải của nhóm)**
- "Extend luôn có điều kiện/tùy chọn" là **không chính xác**: Extend không có condition là mở rộng **vô điều kiện** (cũng xem §18.2.2.4).
- Condition được đánh giá **một lần**, tại ExtensionPoint đầu tiên, không đánh giá lại tại từng điểm.

## UML-18.1.3.3-INCLUDE-SEMANTICS — Ngữ nghĩa Include

**Clause:** §18.1.3.3 · **Evidence:** `verified_normative` · **Locator:** trang in 641 / PDF 683 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- **Include** (bao hàm) là DirectedRelationship giữa hai UC: hành vi của **UC được include (addition)** được chèn vào hành vi của **UC bao hàm (includingCase)**.
- Include cũng là NamedElement, có thể có tên trong ngữ cảnh UC sở hữu (includingCase). **Include thuộc sở hữu của UC bao hàm.**
- UC bao hàm **có thể phụ thuộc** vào thay đổi do UC được include tạo ra. UC được include **phải có sẵn** thì hành vi của UC bao hàm mới được mô tả đầy đủ.
- Mục đích: dùng khi **hai hoặc nhiều UC có phần hành vi chung**. Phần chung được tách thành UC riêng và được mọi UC gốc có phần đó include.
- Vì mục đích chính là tái sử dụng, phần còn lại trong UC gốc **thường không hoàn chỉnh** nếu thiếu phần được include. Điều này phản ánh trong **chiều quan hệ**: UC gốc phụ thuộc vào addition, không phải ngược lại.
- Toàn bộ hành vi của UC được include chạy **tại một vị trí duy nhất** trước khi UC bao hàm tiếp tục. Văn bản in ghi "a single location in the included UseCase". Theo logic của đoạn, vị trí này nằm trong UC **bao hàm**; nhóm ghi nhận đây có thể là lỗi biên tập, không tự sửa văn bản chuẩn.
- Include cho phép **phân rã phân cấp (hierarchical composition)** cũng như **tái sử dụng** UC.

**So sánh nhanh Include và Extend** (tổng hợp từ §18.1.3.2–18.1.3.3, §18.2.2, §18.2.4)

| Tiêu chí | Include | Extend |
| --- | --- | --- |
| Chiều quan hệ (source → target) | UC bao hàm → UC được include | UC mở rộng → UC được mở rộng |
| Ai sở hữu quan hệ | UC bao hàm (source) | UC mở rộng (source) |
| UC gốc có hoàn chỉnh khi thiếu phần kia? | Thường không | Có; UC được mở rộng định nghĩa độc lập |
| Điều kiện | Không có thuộc tính condition | `condition [0..1]`; vắng = vô điều kiện |
| Vị trí chèn | Một vị trí duy nhất | Tại các ExtensionPoint (`1..*`, có thứ tự) |
| Ràng buộc chu trình | Cấm: `cannot_include_self` | Không có constraint tường minh |
| Mục đích chính | Tái sử dụng phần chung, phân rã | Thêm hành vi bổ sung (có thể có điều kiện) |

## UML-18.1.4-NOTATION — Ký pháp Clause 18

**Clause:** §18.1.4 · **Evidence:** `verified_normative` · **Locator:** trang in 641–642 / PDF 683–684 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**UseCase**
- Vẽ bằng **ellipse**, tên ở **trong** ellipse hoặc ngay **dưới** ellipse. Có thể đặt keyword stereotype tùy chọn **trên** tên.
- Attribute và operation có thể hiển thị trong compartment bên trong ellipse, nội dung như classifier rectangle.
- ExtensionPoint có thể liệt kê trong compartment có tiêu đề **"extension points"**, mỗi điểm theo cú pháp `<extension point> ::= <name> [: <explanation>]`. Phần `explanation` tùy chọn, có thể là văn bản không chính thức hoặc định nghĩa chính xác hơn của vị trí (tên State trong StateMachine, Activity, precondition, postcondition...).
- **Ký pháp thay thế**: classifier rectangle với **icon ellipse nhỏ ở góc trên phải**; khi đó "extension points" là compartment tùy chọn. Phù hợp khi có nhiều extension point hoặc feature (Figure 18.5).
- UC có thể có Association và Dependency tới Classifier khác (vd. biểu diễn input/output, sự kiện, hành vi).
- Hành vi chi tiết vẽ/ghi ở sơ đồ hoặc tài liệu riêng theo kỹ thuật mô tả đã chọn.

**Subject (system boundary)**
- Có thể vẽ bằng **hình chữ nhật**, tên ở **góc trên trái**, các ellipse UC nằm bên trong.
- Nếu subject là Classifier mang stereotype chuẩn thì **SHALL** hiển thị keyword stereotype trong guillemets phía trên tên (vd. «Subsystem»).
- Nếu metaclass của subject mơ hồ thì **SHALL** hiển thị keyword ứng với metaclass (theo §9.2.4) phía trên tên. Khi có nhiều keyword/stereotype, áp dụng quy tắc §9.2.4.
- Hình chữ nhật subject **không có header hay compartment** như Classifier thường, và **không hàm ý sở hữu** (xem `UML-18-SUBJECT-OWNERSHIP`).

**Actor**
- Hình **"stick man"**, tên đặt gần, thường trên hoặc dưới icon (Figure 18.6).
- Hoặc **classifier rectangle với keyword «actor»**, các compartment theo ký pháp thường (Figure 18.7).
- Hoặc **icon khác** thể hiện loại Actor, vd. icon riêng cho Actor không phải người (Figure 18.8).

**Ownership bằng compartment**
- UC thuộc sở hữu của Classifier có thể vẽ lồng trong một compartment riêng của Classifier rectangle (Figure 18.9). Đây là compartment ownedMembers tùy chọn theo §9.2.4, tên "owned use cases".

**Extend**
- **Mũi tên nét đứt, đầu mở**, từ **UC mở rộng** tới **UC được mở rộng**, nhãn keyword **«extend»**.
- **Condition** và tham chiếu **ExtensionPoint** được hiển thị **tùy chọn** trong một **note symbol** (§7.2.4) gắn vào mũi tên (Figure 18.3).

**Include**
- **Mũi tên nét đứt, đầu mở**, từ **UC gốc (bao hàm)** tới **UC được include**, nhãn keyword **«include»** (Figure 18.4).

## UML-18-NOTATION-SUMMARY — Bảng tổng hợp graphic nodes / graphic paths

**Clause:** tổng hợp từ §18.1.4, §9.2.4, §11.5.4, §7.2.4, §7.7.4, §7.4.4.3, §12.2.4, Annex B Tables B.1–B.2 · **Evidence:** `verified_normative` (từng dòng có locator; bảng do nhóm tổng hợp vì UML 2.5.1 không có bảng nodes/paths riêng cho use case diagram) · **Locator:** trang in 641–642, 101–102, 201–203, 22, 39, 29, 248, 717, 723 / PDF 683–684, 143–144, 243–245, 64, 81, 71, 290, 759, 765 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

Lưu ý: UML 2.5.1 **không còn** các bảng "graphic nodes/graphic paths" theo từng loại sơ đồ như UML 2.4.x. Tương đương gần nhất là Annex B Table B.1 (UML Shapes) và Table B.2 (UML Edges).

**Graphic nodes**

| Node | Ký pháp | Phần tử mô hình | Locator |
| --- | --- | --- | --- |
| UseCase (dạng icon) | Ellipse, tên trong/dưới; compartment "extension points" tùy chọn | UseCase | §18.1.4; Table B.1 (UMLClassifierShape, isIcon=true) |
| UseCase (dạng rectangle) | Classifier rectangle + icon ellipse góc trên phải | UseCase | §18.1.4, Fig. 18.5; Table B.1 (isIcon=false) |
| Actor (stick man) | Hình người, tên gần icon | Actor | §18.1.4, Fig. 18.6; Table B.1 (UMLShape, isIcon=true) |
| Actor (rectangle) | Rectangle + «actor» | Actor | §18.1.4, Fig. 18.7; Table B.1 (UMLKeywordLabel) |
| Actor (icon tùy chọn) | Icon thể hiện loại actor (vd. máy tính) | Actor | §18.1.4, Fig. 18.8; B.4.2 (icon từ Stereotype) |
| Subject / system boundary | Rectangle, tên góc trên trái, không header/compartment; keyword stereotype/metaclass khi cần | Classifier là subject | §18.1.4, Fig. 18.2 |
| Classifier sở hữu UC | Classifier rectangle với compartment "owned use cases" | Classifier::ownedUseCase | §18.1.4, Fig. 18.9 |
| Package | Hình thư mục (tab + rectangle) | Package | §12.2.4, Fig. 18.11 |
| Note (Comment) | Rectangle gấp góc trên phải, nối phần tử bằng nét đứt | Comment | §7.2.4 |
| Note chứa condition/extension point của Extend | Note gắn mũi tên «extend» | Extend (condition, extensionLocation) | §18.1.4, Fig. 18.3; B.4.2 |

**Graphic paths**

| Path | Ký pháp | Chiều | Phần tử mô hình | Locator |
| --- | --- | --- | --- | --- |
| Association | Đường liền; tùy chọn: multiplicity, tên end, mũi tên mở (navigable), `x` (non-navigable) | Không có chiều ngữ nghĩa | Association (binary) | §11.5.4; Table B.2 |
| Extend | Nét đứt, đầu mở, «extend» | UC mở rộng → UC được mở rộng | Extend | §18.1.4; Table B.2 (Fig. 18.3) |
| Include | Nét đứt, đầu mở, «include» | UC bao hàm → UC được include | Include | §18.1.4; Table B.2 (Fig. 18.4) |
| Generalization | Đường liền, đầu **tam giác rỗng** | Cụ thể → tổng quát (đầu tam giác ở classifier tổng quát) | Generalization | §9.2.4.2; Table B.2 |
| Dependency | Nét đứt, đầu mở, keyword/stereotype tùy chọn | Client → supplier | Dependency/Abstraction/Usage | §7.7.4 |
| PackageImport | Nét đứt, đầu mở, «import» (public) hoặc «access» (private) | Namespace nhập → package được nhập | PackageImport | §7.4.4.3; Fig. 18.11 |
| Đường nối note | Nét đứt, không mũi tên | — | Comment::annotatedElement | §7.2.4 |

Phân biệt bằng mắt: Extend, Include, Dependency và PackageImport đều là **nét đứt đầu mở**, chỉ khác **keyword**. Annex C nêu rõ keyword dùng để phân biệt các quan hệ có cùng hình thức đồ họa (xem `UML-ANNEX-C-KEYWORDS`). Generalization là **nét liền, tam giác rỗng**; Realization là **nét đứt, tam giác rỗng** (§7.7.4).

## UML-18.1.5-EXAMPLES — Các ví dụ Figure 18.2–18.12

**Clause:** §18.1.5 · **Evidence:** `verified_normative` (đã xem ảnh từng trang) · **Locator:** trang in 643–646 / PDF 685–688 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Figure | Nội dung | Điểm cần học |
| --- | --- | --- |
| 18.2 | Frame `package ATMtopPkg`; subject «Subsystem» ATMSystem chứa Withdraw, Transfer, Deposit, Register ATM, Read Log; actor Customer, Administrator (trái), Bank (phải) | Chuẩn gọi đây là **"Class diagram"** của một Package. Subject là Component có stereotype «Subsystem», nên không cần ghi metaclass. Multiplicity `1`/`0..1`/`0..*` (xem `UML-18-ACTOR-USECASE-ASSOCIATION`) |
| 18.3 | "Perform ATM Transaction" có compartment `extension points: selection`; "On-line Help" extend nó; note: `condition: {customer selected HELP}`, `extension point: selection` | Mẫu chuẩn của Extend với condition và extension point trong note. NOTE: UC "Perform ATM Transaction" được định nghĩa độc lập với "On-Line Help" |
| 18.4 | Withdraw `«include»` → Card Identification | Mẫu chuẩn của Include; Card Identification được định nghĩa độc lập |
| 18.5 | UC `OrderStationery` vẽ dạng classifier rectangle với icon ellipse, compartment "extension points" gồm 8 điểm dạng `created: in Created state`... | Cú pháp `<name> : <explanation>`; explanation tham chiếu State |
| 18.6 | Actor Customer dạng stick man | Ký pháp Actor 1 |
| 18.7 | Rectangle `«actor» Customer` | Ký pháp Actor 2 |
| 18.8 | Actor `User` dạng icon máy tính | Ký pháp Actor 3 (icon tùy chọn) |
| 18.9 | Class `DepartmentStore` có compartment "owned use cases" chứa `Make Purchase` | Ownership bằng compartment, **khác** boundary của subject |
| 18.10 | Cùng các UC/Actor như 18.2 nhưng không có frame package | Các UC áp dụng cho subsystem ATMsystem |
| 18.11 | Package `TransactionUseCases` (Card Identification, Perform ATM Transaction, On-line Help + extend); `ATM Services` «import» TransactionUseCases; trong ATM Services: Withdraw, Transfer, Deposit **generalize** Perform ATM Transaction (tam giác rỗng); Withdraw và Transfer «include» Card Identification; `Administration` chứa Read Log, Register ATM | (1) UC **không cần** thuộc sở hữu của subject. (2) Ví dụ chuẩn duy nhất trong Clause 18 về **Generalization giữa UseCase**. (3) UC được nhập qua «import» vẽ **mờ/xám** (§12.2.4 cho phép tô màu khác hoặc làm mờ phần tử được import) |
| 18.12 | UC `MakeCall` (rectangle) có compartment "owned behaviors" chứa «statemachine» Call; bên phải là `stm Call` | UC mô tả bằng StateMachine qua ownedBehavior |

## UML-18.2.1-ACTOR — Actor [Class]

**Clause:** §18.2.1 · **Evidence:** `verified_normative` · **Locator:** trang in 647 / PDF 689 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Mục | Nội dung |
| --- | --- |
| Description (§18.2.1.1) | "An Actor specifies a role played by a user or any other system that interacts with the subject." |
| Diagrams (§18.2.1.2) | Use Cases |
| Generalizations (§18.2.1.3) | BehavioredClassifier |
| Attributes / Association ends riêng | Không có. Kế thừa từ BehavioredClassifier/Classifier: `name`, `isAbstract`, `generalization`, `ownedBehavior`, `classifierBehavior`, `useCase`... |
| Operations | Không có operation riêng |

**Constraints (§18.2.1.4)**

| Tên | Diễn giải | OCL tóm lược |
| --- | --- | --- |
| `associations` | Actor chỉ được có Association tới **UseCase, Component và Class**, và các Association này **phải binary** | Mọi Association có Actor ở một memberEnd thì có đúng 2 memberEnd, và đầu đối diện là UseCase hoặc Class không phải Behavior |
| `must_have_name` | Actor **phải có tên** | `name->notEmpty()` |

Ghi chú khi cài rule:
- Component là subclass của Class trong UML, nên câu chữ "UseCases, Components, and Classes" khớp với OCL "Class nhưng không phải Behavior".
- OCL loại trừ Behavior: Actor không được association với một Activity/StateMachine...
- Hệ quả (suy ra trực tiếp): **Actor–Actor association bị cấm** (Actor không phải UseCase và không phải Class). Association Actor–Interface, Actor–DataType cũng bị cấm.
- Quan hệ hợp lệ giữa hai Actor là **Generalization** (`UML-9.2-GENERALIZATION`).
- OCL `name->notEmpty()` chỉ đòi có giá trị tên. Việc chặn chuỗi rỗng hoặc toàn khoảng trắng là **chính sách nhóm**. NamedElement phân biệt "không có tên" và "tên rỗng" (§7.4.3.2).

## UML-18.2.2-EXTEND — Extend [Class]

**Clause:** §18.2.2 · **Evidence:** `verified_normative` · **Locator:** trang in 647–648 / PDF 689–690 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Mục | Nội dung |
| --- | --- |
| Description (§18.2.2.1) | Quan hệ từ UC mở rộng tới UC được mở rộng, đặc tả cách thức và thời điểm hành vi của UC mở rộng được chèn vào hành vi của UC được mở rộng |
| Diagrams | Use Cases |
| Generalizations (§18.2.2.3) | NamedElement, DirectedRelationship |

**Association ends (§18.2.2.4)**

| End | Kiểu | Mult. | Subsets / opposite | Ý nghĩa |
| --- | --- | --- | --- | --- |
| ♦ `condition` | Constraint | `0..1` | subsets Element::ownedElement; opposite A_condition_extend::extend | Điều kiện phải đúng khi đạt ExtensionPoint đầu tiên thì mở rộng mới xảy ra. **Không có constraint ⇒ mở rộng vô điều kiện** |
| `extendedCase` | UseCase | `1..1` | subsets DirectedRelationship::target | UC bị mở rộng |
| `extension` | UseCase | `1..1` | subsets NamedElement::namespace, DirectedRelationship::source; opposite UseCase::extend | UC mở rộng, **sở hữu** Extend |
| `extensionLocation` | ExtensionPoint | `1..*` `{ordered}` | opposite A_extensionLocation_extension::extension | Danh sách có thứ tự các ExtensionPoint **thuộc UC được mở rộng**. Đoạn hành vi thứ n của UC mở rộng gắn với điểm thứ n. Thực tế thường chỉ có 1 đoạn, nên danh sách thường có 1 phần tử |

(♦ = composite, tức Extend sở hữu condition.)

**Constraints (§18.2.2.5)**

| Tên | Diễn giải | OCL tóm lược |
| --- | --- | --- |
| `extension_points` | Các ExtensionPoint được Extend tham chiếu **phải thuộc UC đang bị mở rộng** | Mọi `xp` trong extensionLocation nằm trong `extendedCase.extensionPoint` |

Ghi chú:
- Extend **không** có constraint cấm tự extend chính nó hoặc cấm chu trình extend. Check chu trình extend là chính sách nhóm.
- Operations: không có.

## UML-18.2.3-EXTENSIONPOINT — ExtensionPoint [Class]

**Clause:** §18.2.3 · **Evidence:** `verified_normative` · **Locator:** trang in 648 / PDF 690 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Mục | Nội dung |
| --- | --- |
| Description (§18.2.3.1) | Xác định một điểm trong hành vi của UC nơi hành vi đó có thể được mở rộng bởi hành vi của UC (mở rộng) khác, theo một Extend |
| Diagrams | Use Cases |
| Generalizations (§18.2.3.3) | RedefinableElement (nên ExtensionPoint có thể được redefine trong UC con) |
| Association end (§18.2.3.4) | `useCase : UseCase [1..1]` subsets NamedElement::namespace; opposite UseCase::extensionPoint. Là UC **sở hữu** điểm này |
| Constraint (§18.2.3.5) | `must_have_name`: ExtensionPoint **phải có tên** (`name->notEmpty()`) |

Bổ sung từ §18.1.3.2: tên ExtensionPoint **duy nhất trong một UseCase**. Ký pháp `<name> [: <explanation>]` (§18.1.4).

## UML-18.2.4-INCLUDE — Include [Class]

**Clause:** §18.2.4 · **Evidence:** `verified_normative` · **Locator:** trang in 648–649 / PDF 690–691 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Mục | Nội dung |
| --- | --- |
| Description (§18.2.4.1) | "An Include relationship specifies that a UseCase contains the behavior defined in another UseCase." |
| Diagrams | Use Cases |
| Generalizations (§18.2.4.3) | DirectedRelationship, NamedElement |

**Association ends (§18.2.4.4)**

| End | Kiểu | Mult. | Subsets / opposite | Ý nghĩa |
| --- | --- | --- | --- | --- |
| `addition` | UseCase | `1..1` | subsets DirectedRelationship::target; opposite A_addition_include::include | UC được include |
| `includingCase` | UseCase | `1..1` | subsets NamedElement::namespace, DirectedRelationship::source; opposite UseCase::include | UC include addition và **sở hữu** Include |

- Constraints riêng của Include: **không có**. Ràng buộc chống chu trình đặt trên UseCase (`cannot_include_self`, §18.2.5.6).
- Include **không có** association end `condition`. Về metamodel, include không mang điều kiện.

## UML-18.2.5-USECASE — UseCase [Class]

**Clause:** §18.2.5 · **Evidence:** `verified_normative` · **Locator:** trang in 649–650 / PDF 691–692 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Mục | Nội dung |
| --- | --- |
| Description (§18.2.5.1) | UseCase đặc tả một tập hành động (actions) do các subject của nó thực hiện, tạo ra kết quả quan sát được có giá trị cho một hoặc nhiều Actor hoặc stakeholder khác **của mỗi subject** |
| Diagrams | Use Cases, Classifiers |
| Generalizations (§18.2.5.3) | BehavioredClassifier |

**Association ends (§18.2.5.4)**

| End | Kiểu | Mult. | Subsets / opposite | Ý nghĩa |
| --- | --- | --- | --- | --- |
| ♦ `extend` | Extend | `0..*` | subsets A_source_directedRelationship::directedRelationship, Namespace::ownedMember; opposite Extend::extension | Các Extend UC này sở hữu (UC này là phía mở rộng) |
| ♦ `extensionPoint` | ExtensionPoint | `0..*` | subsets Namespace::ownedMember; opposite ExtensionPoint::useCase | Các ExtensionPoint UC này sở hữu |
| ♦ `include` | Include | `0..*` | subsets ...::directedRelationship, Namespace::ownedMember; opposite Include::includingCase | Các Include UC này sở hữu (UC này là phía bao hàm) |
| `subject` | Classifier | `0..*` | opposite Classifier::useCase | Các subject UC áp dụng vào; mỗi subject hoặc các part của nó hiện thực mọi UC áp dụng cho nó |

**Operations (§18.2.5.5)**
- `allIncludedUseCases() : UseCase [0..*]`: bao đóng bắc cầu (transitive closure) của mọi UC được UC này include trực tiếp hoặc gián tiếp. Body: hợp của `include.addition` với `allIncludedUseCases()` của từng addition, dạng Set.

**Constraints (§18.2.5.6)**

| Tên | Diễn giải | OCL tóm lược |
| --- | --- | --- |
| `binary_associations` | UseCase chỉ được tham gia Association **binary** | Association có UC ở memberEnd ⇒ đúng 2 memberEnd |
| `no_association_to_use_case` | UseCase **không được có Association tới UseCase đặc tả cùng subject** | Với Association có > 1 UC ở các đầu, tập subject thu được phải có > 1 phần tử |
| `cannot_include_self` | UC không được include các UC include nó trực tiếp hoặc gián tiếp. Nghĩa là **cấm tự include và cấm chu trình include** | `not allIncludedUseCases()->includes(self)` |
| `must_have_name` | UseCase **phải có tên** | `name->notEmpty()` |

Ghi chú cho rule engine (diễn giải của nhóm): biểu thức OCL của `no_association_to_use_case` đếm kích thước của tập subject gom từ các UC (`collect`). Nếu cài máy móc, kết quả có thể lệch với câu chữ: hai UC không có subject nào bị coi là vi phạm, hai UC chung một subject có thể lọt. Rule engine nên bám **câu chữ**: lỗi khi hai UC được nối bằng association và **có chung ít nhất một subject**; `needs_review` khi không xác định được subject.

## UML-18.3-ASSOCIATIONS — Association Descriptions của Clause 18

**Clause:** §18.3.1–18.3.8 · **Evidence:** `verified_normative` · **Locator:** trang in 650–652 / PDF 692–694 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| § | Association | Owned ends / Member ends | Diagrams |
| --- | --- | --- | --- |
| 18.3.1 | A_addition_include | Owned end `include : Include [0..*]` subsets A_target_directedRelationship::directedRelationship (opposite Include::addition) | Use Cases |
| 18.3.2 | A_condition_extend | Owned end `extend : Extend [0..1]` subsets Element::owner (opposite Extend::condition) | Use Cases |
| 18.3.3 | A_extend_extension | Member ends UseCase::extend, Extend::extension | Use Cases |
| 18.3.4 | A_extendedCase_extend | Owned end `extend : Extend [0..*]` subsets A_target_directedRelationship::directedRelationship (opposite Extend::extendedCase) | Use Cases |
| 18.3.5 | A_extensionLocation_extension | Owned end `extension : Extend [0..*]` (opposite Extend::extensionLocation) | Use Cases |
| 18.3.6 | A_extensionPoint_useCase | Member ends UseCase::extensionPoint, ExtensionPoint::useCase | Use Cases |
| 18.3.7 | A_include_includingCase | Member ends UseCase::include, Include::includingCase | Use Cases |
| 18.3.8 | A_subject_useCase | Member ends UseCase::subject, Classifier::useCase | Use Cases, Classifiers |

Hệ quả:
- Một UC có thể là `extendedCase` của nhiều Extend (`[0..*]`) và là `addition` của nhiều Include (`[0..*]`).
- Một ExtensionPoint có thể được nhiều Extend tham chiếu.
- Một Constraint làm condition cho tối đa một Extend.

## UML-9.2-GENERALIZATION — Generalization áp dụng cho Actor/UseCase

**Clause:** §9.2.3.2; §9.2.4.2; §9.2.5 (Figure 9.2); §9.9.4.7–9.9.4.8; §9.9.7; §18.1.5 (Figure 18.11) · **Evidence:** `verified_normative` · **Locator:** trang in 100, 102–103, 135–136, 138–139, 646 / PDF 142, 144–145, 177–178, 180–181, 688 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Ngữ nghĩa (§9.2.3.2, §9.9.7.1)**
- Generalization là quan hệ phân loại giữa Classifier **cụ thể (specific)** và Classifier **tổng quát (general)**. Mỗi instance của classifier cụ thể cũng là instance (gián tiếp) của classifier tổng quát. Classifier cụ thể **thừa kế** feature của classifier tổng quát. Generalization **thuộc sở hữu của classifier cụ thể**.
- Constraint áp cho instance của classifier tổng quát cũng áp cho instance của classifier cụ thể.
- Thành viên được thừa kế (inheritedMembers): mặc định là các member không private.
- **Type conformance**: một Classifier tương thích với chính nó và mọi generalization của nó.
- NOTE: khái niệm parent (generalization) **không liên quan** tới owner (sở hữu).
- `isSubstitutable : Boolean [0..1] = true` (§9.9.7.4). Nếu true, execution trace của classifier cụ thể là **siêu tập** execution trace của classifier tổng quát.

**Association ends của Generalization (§9.9.7.5)**: `general : Classifier [1..1]` (target), `specific : Classifier [1..1]` (source, owner), `generalizationSet [0..*]`.

**Constraints liên quan trên Classifier (§9.9.4.8)**

| Tên | Diễn giải |
| --- | --- |
| `no_cycles_in_generalization` | Hệ phân cấp generalization phải có hướng và **không có chu trình**; không classifier nào vừa là tổng quát vừa là cụ thể (bắc cầu) của cùng một classifier: `not allParents()->includes(self)` |
| `specialize_type` | Classifier chỉ được specialize classifier có kiểu hợp lệ: `parents()->forAll(c | self.maySpecializeType(c))` |
| `non_final_parents` | Parent không được có `isFinalSpecialization = true` |

`maySpecializeType(c)` (§9.9.4.7, trang in 135): mặc định classifier chỉ được specialize classifier **cùng loại hoặc loại tổng quát hơn** (`self.oclIsKindOf(c.oclType())`).

**Áp dụng cho sơ đồ use case (suy ra từ các constraint trên)**
- Actor → Actor: hợp lệ.
- UseCase → UseCase: hợp lệ; ví dụ chuẩn duy nhất trong Clause 18 là Figure 18.11 (Withdraw/Transfer/Deposit → Perform ATM Transaction).
- **Actor → UseCase hoặc UseCase → Actor: vi phạm `specialize_type`**, vì Actor không phải kind of UseCase và ngược lại.
- Tự generalize hoặc chu trình: vi phạm `no_cycles_in_generalization`.
- Actor con có thể tham gia các UC của actor cha. Đây là **suy ra** từ type conformance (§9.2.3.2) cộng với ngữ nghĩa link của Association (§11.5.3.1). Clause 18 **không** có câu tường minh "actor con thừa kế use case của actor cha".
- UML **không** giới hạn generalization theo "loại actor" (người/hệ thống/thời gian). Các khái niệm này không có trong metamodel.

**Ký pháp (§9.2.4.2)**
- Đường với **đầu tam giác rỗng**, đầu tam giác chỉ vào classifier **tổng quát**.
- Nhiều generalization chung một classifier tổng quát có thể vẽ thành các đường riêng ("separate target style") hoặc chung một đầu tam giác ("shared target style"), xem Figure 9.2 (trang in 103).
- Generalization **khác** Include/Extend: đây là quan hệ phân loại, không phải chèn hành vi, không phải thứ tự thực hiện.

## UML-9.2-CLASSIFIER-NOTATION-ABSTRACT — Classifier, isAbstract, ký pháp mặc định

**Clause:** §9.2.3.2; §9.2.4.1; §9.9.4.5 · **Evidence:** `verified_normative` · **Locator:** trang in 100, 101–102, 132 / PDF 142, 143–144, 174 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**isAbstract**
- `isAbstract : Boolean [1..1] = false` (§9.9.4.5). Khi true, classifier chỉ được instantiate thông qua một specialization của nó. Classifier abstract dùng làm đích của Association hoặc Generalization.
- §9.2.3.2: classifier abstract **không có instance trực tiếp**; mọi instance của nó phải là instance của một specialization.
- Actor và UseCase thừa kế `isAbstract` (qua BehavioredClassifier → Classifier). UC abstract hoặc Actor abstract là hợp lệ trong UML.

**Ký pháp classifier mặc định (§9.2.4.1)**
- Rectangle nét liền chứa tên, các compartment phân cách bằng đường ngang. Tên **nên (should)** căn giữa, in đậm.
- Với ngôn ngữ phân biệt hoa thường, tên Classifier **nên (should)** bắt đầu bằng chữ hoa. Đây là khuyến nghị, không phải yêu cầu.
- Khi dùng ký pháp mặc định, keyword ứng với metaclass **shall** được hiển thị trong guillemets phía trên tên (không cần với Class). Vì vậy Actor dạng rectangle phải có «actor».
- Nhiều keyword/stereotype: mỗi cái một cặp guillemets, hoặc chung một cặp và phân cách bằng dấu phẩy.
- **Tên classifier abstract in nghiêng** nếu phông cho phép. Thay thế hoặc bổ sung: ghi `{abstract}` sau hoặc dưới tên.
- Compartment có thể ẩn. Khi ẩn, **không được suy luận** gì về sự có mặt hay vắng mặt phần tử trong đó.
- Compartment chứa classifier lồng nhau lấy tên theo property, số nhiều nếu multiplicity > 1. Ví dụ: "owned behaviors", "owned use cases" (§9.2.4.1; §18.1.5).
- Tên compartment nên căn giữa, bắt đầu chữ thường, không chứa dấu câu.

## UML-7.4-NAMING — NamedElement, tên và tính phân biệt

**Clause:** §7.4.3.2; §7.8.9 (NamedElement); §7.8.10 (Namespace) · **Evidence:** `verified_normative` · **Locator:** trang in 28, 48–49, 51 / PDF 70, 90–91, 93 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- `NamedElement::name : String [0..1]`: tên **tùy chọn ở mức chung** (§7.8.9). NOTE §7.4.3.2: **không có tên** khác với **tên rỗng**.
- Vì tên tùy chọn ở mức chung, Clause 18 thêm `must_have_name` riêng cho Actor, UseCase, ExtensionPoint. Extend và Include **không** có must_have_name, nên đặt tên cho quan hệ là tùy chọn.
- **Tính phân biệt (distinguishable)** (§7.4.3.2): mặc định hai member trong cùng Namespace phân biệt được nếu **khác tên**, hoặc cùng tên nhưng **metaclass khác nhau và không cái nào là subclass của cái kia**. Query `isDistinguishableFrom()` ở §7.8.9.
- Constraint Namespace `members_distinguishable` (§7.8.10): mọi member của Namespace phải phân biệt được với nhau.
- Hệ quả (suy ra):
  - Hai UseCase **trùng tên trong cùng package/namespace** vi phạm `members_distinguishable`. Tương tự với hai Actor trùng tên.
  - Actor "Librarian" và UseCase "Librarian" trong cùng package **không** vi phạm (Actor và UseCase là hai metaclass không kế thừa nhau). Tuy vậy nhóm vẫn có thể cảnh báo vì dễ gây nhầm.
  - So sánh tên trong UML là so sánh chuỗi. So sánh không phân biệt hoa thường là **chính sách nhóm**.
- Hai ExtensionPoint trùng tên trong một UC cũng vi phạm (§18.1.3.2: tên duy nhất trong UC).

## UML-7.2-COMMENT-NOTE — Comment / note symbol

**Clause:** §7.2.3.2; §7.2.4 · **Evidence:** `verified_normative` · **Locator:** trang in 22 / PDF 64 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- Mọi Element có thể sở hữu Comment. Comment **không thêm ngữ nghĩa**, chỉ chứa thông tin hữu ích cho người đọc (§7.2.3.2).
- Ký pháp: **rectangle gấp góc trên phải ("note symbol")** chứa body của Comment. Nối với mỗi annotatedElement bằng **một đường nét đứt riêng**. Đường nối có thể ẩn nếu ngữ cảnh đã rõ hoặc không quan trọng (§7.2.4).
- Trong sơ đồ use case, note symbol còn dùng để hiển thị **condition và extension point của Extend** (§18.1.4). Khi đó note biểu diễn thông tin mô hình của Extend, không phải Comment thuần. Annex B.4.2 quy định note này có hai UMLLabel tham chiếu condition và extensionLocation.
- Note cũng là cách chung để hiển thị Constraint (§7.6.4, xem section tiếp theo).
- Chú thích giải thích trong hình ví dụ của đặc tả (§5.2) **không** phải note UML.

## UML-7.6-CONSTRAINT-CONDITION — Constraint, OpaqueExpression, condition của Extend

**Clause:** §7.6.3; §7.6.4; §7.8.3; §8.6.16 · **Evidence:** `verified_normative` · **Locator:** trang in 36–37, 41–42, 86–87 / PDF 78–79, 83–84, 128–129 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Constraint (§7.8.3)**
- Là điều kiện hoặc hạn chế, viết bằng ngôn ngữ tự nhiên hoặc ngôn ngữ máy đọc được, để khai báo một phần ngữ nghĩa của Element.
- `specification : ValueSpecification [1..1]` (composite): điều kiện phải đúng khi được đánh giá. `constrainedElement [0..*] {ordered}`; `context : Namespace [0..1]`.
- Constraints:
  - `boolean_value`: specification phải cho giá trị Boolean.
  - `no_side_effects`: đánh giá không được có side effect.
  - `not_apply_to_self`: Constraint không áp lên chính nó.
- Diagrams của Constraint gồm cả **Use Cases** (§7.8.3.2), vì nó là kiểu của `Extend::condition`.

**Ngữ nghĩa (§7.6.3)**: Constraint đánh giá bằng specification. True thì thỏa; false thì realization của mô hình **không hợp lệ** tại thời điểm đó. Context quyết định **khi nào** đánh giá. Với Extend, thời điểm này do §18.1.3.2 quy định: khi đạt ExtensionPoint đầu tiên.

**Ký pháp (§7.6.4)**
- Đặc tả do người dùng định nghĩa thường là chuỗi văn bản (OCL, ngôn ngữ lập trình hoặc **ngôn ngữ tự nhiên**), biểu diễn bằng **OpaqueExpression** có `language` và `body`.
- Dạng văn bản: `{ [<name> :] <boolean-expression> }`.
- Thường đặt trong note symbol và nối với các constrainedElement bằng nét đứt.
- Ví dụ chuẩn của Extend: `condition: {customer selected HELP}` (Figure 18.3) là condition viết bằng ngôn ngữ tự nhiên trong ngoặc nhọn.

**OpaqueExpression (§8.6.16)**: ValueSpecification tính giá trị dựa trên một Behavior hoặc câu lệnh văn bản ở ngôn ngữ khác UML. `body : String [0..*]`, `language : String [0..*]` ghép theo thứ tự. Nếu không ghi language, cách hiểu suy từ body hoặc ngữ cảnh.

**Hệ quả cho FlintFlow (diễn giải của nhóm)**
- Condition của Extend có thể là câu tiếng Anh/Việt tự nhiên; UML không đòi OCL.
- Condition phải là **mệnh đề Boolean** (đúng/sai được). "Khi cần" hay "tùy chọn" không phải điều kiện kiểm được, nên để `needs_review`.

## UML-7.7-DEPENDENCY-TRACE-REFINE — Dependency, Abstraction, «Trace», «Refine», «Derive»

**Clause:** §7.7.3; §7.7.4; §7.8.1; §22.3 Table 22.1; §18.1.4 · **Evidence:** `verified_normative` · **Locator:** trang in 38–39, 40, 680–682, 642 / PDF 80–81, 82, 722–724, 684 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- **Dependency** (§7.7.3.1): ngữ nghĩa của client **không đầy đủ** nếu thiếu supplier. Dependency **không có ý nghĩa runtime**; ngữ nghĩa nằm ở các NamedElement tham gia, không ở instance.
- **Usage** (§7.7.3.2): client cần supplier để hiện thực/vận hành đầy đủ; ký pháp «use».
- **Abstraction** (§7.7.3.3, §7.8.1): Dependency giữa các phần tử biểu diễn **cùng một khái niệm** ở các mức trừu tượng hoặc góc nhìn khác nhau. `mapping : OpaqueExpression [0..1]` mô tả ánh xạ. Abstraction có các stereotype định nghĩa sẵn «Derive», «Refine», «Trace» trong Standard Profile.
- **Realization** (§7.7.3.4): Abstraction chuyên biệt giữa đặc tả (supplier) và hiện thực (client); ký pháp nét đứt, tam giác rỗng ở phía phần tử được hiện thực (§7.7.4).
- **Ký pháp Dependency** (§7.7.4): mũi tên **nét đứt**, client ở đuôi, supplier ở đầu mũi tên; có thể có keyword/stereotype và tên.

Stereotype chuẩn trên Abstraction (Table 22.1):

| Stereotype | Áp dụng cho | Diễn giải | Trang in / PDF |
| --- | --- | --- | --- |
| «Trace» | Abstraction | Quan hệ trace giữa các phần tử biểu diễn **cùng khái niệm ở các mô hình khác nhau**; chủ yếu để **theo dõi yêu cầu và thay đổi** giữa các mô hình; chiều thường có thể bỏ qua; mapping hiếm khi tính được | 682 / 724 |
| «Refine» | Abstraction | Quan hệ tinh chỉnh giữa các phần tử ở **mức ngữ nghĩa khác nhau** (vd. analysis và design); mapping có thể một hoặc hai chiều | 681 / 723 |
| «Derive» | Abstraction | Client **tính được** từ supplier; mapping đặc tả phép tính | 680 / 722 |

Áp dụng cho use case:
- §18.1.4 cho phép UC có **Dependency** tới Classifier khác, vd. để biểu diễn input/output, sự kiện, hành vi.
- UML 2.5.1 **không** có ví dụ cụ thể «trace»/«refine» giữa UseCase và requirement/class. Dùng «trace» từ phần tử thiết kế tới UC (hoặc ngược lại) là **cách áp dụng hợp lệ về metamodel** (Abstraction giữa NamedElements), nhưng quy ước chiều và ý nghĩa cụ thể là của nhóm.
- **Không** dùng Dependency trơn (hoặc «trace») thay cho «include»/«extend». Hai quan hệ này là metaclass riêng (Include/Extend), không phải stereotype của Dependency.

## UML-12-PACKAGE-IMPORT — Package và «import» trong sơ đồ use case

**Clause:** §12.2.4; §7.4.4.3; §18.1.5 (Figure 18.11) · **Evidence:** `verified_normative` · **Locator:** trang in 248, 29, 646 / PDF 290, 71, 688 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- **Package** (§12.2.4): rectangle lớn có "tab" nhỏ ở trên bên trái (biểu tượng thư mục). Nếu member vẽ bên trong thì tên package nên đặt ở tab; nếu không thì đặt trong rectangle lớn.
- Công cụ có thể tô màu khác hoặc làm mờ các phần tử có mặt nhờ PackageImport/ElementImport, để phân biệt với packagedElement. Đó là lý do Card Identification và Perform ATM Transaction **vẽ xám** trong package ATM Services ở Figure 18.11.
- **PackageImport/ElementImport** (§7.4.4.3): mũi tên **nét đứt đầu mở** từ namespace nhập tới package/phần tử được nhập. Keyword «import» nếu visibility public, «access» nếu private.
- Áp dụng: UC có thể được tổ chức trong nhiều package (Figure 18.11) trong khi vẫn cùng áp dụng cho một subject. Package **không phải** subject. Subject là Classifier có hành vi (§18.1.3.1).

## UML-22-STANDARD-STEREOTYPES — «Subsystem» và stereotype chuẩn liên quan

**Clause:** §22.1; §22.3 (Table 22.1); §18.1.4; §18.1.5 · **Evidence:** `verified_normative` · **Locator:** trang in 679–682, 642–643 / PDF 721–724, 684–685 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- §22.1: Standard Profile định nghĩa tập stereotype chuẩn. Công cụ tuân thủ **shall** hỗ trợ mọi stereotype trong đó.
- **«Subsystem»** áp dụng cho **Component**. Là đơn vị phân rã phân cấp cho hệ thống lớn, thường được instantiate gián tiếp; định nghĩa khác nhau tùy lĩnh vực và phương pháp; có thể có phần specification và realization (Table 22.1, trang in 682).
- §18.1.4: subject là Classifier có stereotype chuẩn thì **phải** hiển thị keyword stereotype trên tên subject. §18.1.5: vì «Subsystem» ngầm định subject là Component, **không cần** ghi thêm metaclass.
- Liên quan khác (Table 22.1): «Specification» và «Realization» (áp cho Classifier), «Trace»/«Refine»/«Derive» (áp cho Abstraction; xem `UML-7.7-DEPENDENCY-TRACE-REFINE`).
- Standard Profile **không** có stereotype nào dành riêng cho UseCase hay Actor (đã rà Table 22.1). «actor», «extend», «include» là **keyword** (Annex C), không phải stereotype.

## UML-20-INFORMATION-FLOW — Actor/UseCase trong InformationFlow

**Clause:** §20.2.1.5 · **Evidence:** `verified_normative` · **Locator:** trang in 673 / PDF 715 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- Constraint `sources_and_targets_kind` của InformationFlow liệt kê các loại được làm nguồn/đích của luồng thông tin, trong đó có **Actor** và **UseCase** (cùng Node, Artifact, Class, Component, Port, Property, Interface, Package, ActivityNode, ActivityPartition, Behavior, InstanceSpecification không phải link).
- Ý nghĩa cho FlintFlow (diễn giải): nhãn luồng dữ liệu giữa actor và hệ thống (vd. sơ đồ ngữ cảnh) có thể mô hình bằng InformationFlow trong UML. Đây **không** phải phần của Clause 18 và không thay cho Association Actor–UseCase.

## UML-ANNEX-A-DIAGRAMS — Loại sơ đồ, frame, heading `uc`

**Clause:** Annex A (normative), Figures A.1–A.5 · **Evidence:** `verified_normative` (đã xem ảnh Figure A.1, A.5) · **Locator:** trang in 683–685 / PDF 725–727 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

**Quan hệ mô hình và sơ đồ**
- Mô hình UML gồm các phần tử (package, class, association...). Sơ đồ là **biểu diễn đồ họa một phần** mô hình, gồm graphical nodes nối bằng paths.
- Một phần tử không vẽ trên sơ đồ **không có nghĩa** là không tồn tại trong mô hình.

**Frame và heading**
- Mỗi sơ đồ có **contents area**. **Tùy chọn** có **frame** (rectangle) và **heading** (Figure A.1).
- Frame chủ yếu dùng khi phần tử được vẽ có phần tử biên (port, entry/exit point). Có thể bỏ frame và để biên vùng vẽ của công cụ thay thế; khi bỏ frame thì bỏ luôn heading.
- Heading là chuỗi trong name tag (rectangle cắt góc) ở góc trên trái, cú pháp `[<kind>]<name>[<parameters>]`. Heading thể hiện kind, name, parameters của **namespace bao quanh hoặc phần tử sở hữu** các phần tử vẽ trong contents area.
- Loại sơ đồ do **graphical symbols chính** trong contents area quyết định.

**Frame kind**
- Tên dài: activity, class, component, deployment, interaction, package, state machine, **use case**.
- Viết tắt: act, cmp, dep, sd, pkg, stm, **uc**. Danh sách viết tắt **không** có dạng viết tắt cho class.
- Ví dụ (nhóm tự đặt): `uc FlintFlow System`, hoặc `use case FlintFlow System`.

**Phân loại (Figure A.5)**
- Hai nhóm: **Structure Diagram** và **Behavior Diagram**. **Use Case Diagram thuộc nhánh Behavior Diagram**, cùng cấp với Activity Diagram, State Machine Diagram, Interaction Diagram.
- Danh sách cuối Annex A: "Use Case Diagram – Use Cases", tức constructs của sơ đồ use case mô tả ở Clause 18.
- NOTE: phân loại này **không cấm trộn** các loại sơ đồ; ranh giới giữa các loại không được áp đặt chặt.
- Figure 18.2 có frame `package ATMtopPkg` và được chuẩn gọi là "class diagram", dù chứa actor và use case. Đây là minh họa cho NOTE trên: tên loại sơ đồ không phải luật cứng.

## UML-ANNEX-B-DI — UMLUseCaseDiagram và quy tắc trao đổi sơ đồ

**Clause:** Annex B (normative): B.1, B.4.2, B.6 (Tables B.1, B.2), B.7.37 · **Evidence:** `verified_normative` · **Locator:** trang in 687, 697–698, 717, 723, 740 / PDF 729, 739–740, 759, 765, 782 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- **B.1**: UML DI trao đổi phần đồ họa mà người mô hình kiểm soát được (vị trí shape, điểm gấp đường). Hình dạng và kiểu nét do UML quy định thì **không** trao đổi. Figure B.1 lấy chính một instance **UseCase** làm ví dụ: UMLShape tham chiếu tới UseCase.
- **B.7.37 UMLUseCaseDiagram [Class]**: generalizations **UMLBehaviorDiagram, UMLDiagramWithAssociations**. Constraint `no_modelElement`: UMLUseCaseDiagram **không có modelElement**, khác với các behavior diagram khác vốn gắn với một Behavior.
- **B.4.2** quy định khi trao đổi nội dung UMLUseCaseDiagram:
  - UseCase là UMLClassifierShape, vẽ **oval** khi `isIcon = true`, **rectangle** khi false.
  - Actor là UMLClassifierShape, vẽ **stick figure** khi `isIcon = true`, **rectangle** khi false.
  - Icon Actor do người mô hình định nghĩa có thể đặc tả bằng **icon của Stereotype**.
  - Extend và Include là **UMLEdge** có Extend/Include làm modelElement.
  - Note của Extend là UMLShape có Extend làm modelElement, gồm đúng hai UMLLabel: condition và extensionLocations, theo cú pháp UML. Đường nối note với phần tử khác là **nét đứt** và không có modelElement.
- **Table B.1 (UML Shapes)**, trang in 717: các dòng UseCase (isIcon=true: Fig. 18.2, 18.3, 18.11; isIcon=false: Fig. 18.5, 18.12), Actor icon (Fig. 18.2, 18.6), Actor rectangle với UMLKeywordLabel (Fig. 18.7), note của Extend; tham chiếu §18.1.4 và B.4.2.
- **Table B.2 (UML Edges)**, trang in 723: UMLEdge (Extend) với UMLKeywordLabel (Fig. 18.3); UMLEdge (Include) với UMLKeywordLabel (Fig. 18.4).

Hệ quả cho FlintFlow: khi xuất sơ đồ (PlantUML/draw.io), chỉ cần giữ được **mô hình** (UC, Actor, quan hệ) và **ký pháp đúng**. UML DI là chuẩn trao đổi giữa công cụ, không bắt buộc với sơ đồ dạng ảnh.

## UML-ANNEX-C-KEYWORDS — Keyword «actor», «extend», «include», guillemets

**Clause:** Annex C (normative), Table C.1 · **Evidence:** `verified_normative` · **Locator:** trang in 745–747 / PDF 787–789 · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

- Keyword là **từ dành riêng** của ký pháp UML, dùng cho ba mục đích:
  1. Phân biệt metaclass có cùng hình dạng (vd. «interface»).
  2. **Phân biệt các quan hệ có cùng hình thức đồ họa.** Chuẩn lấy ví dụ: nét đứt dùng cho nhiều quan hệ, gồm Dependency và quan hệ giữa UC với UC mở rộng.
  3. Thể hiện giá trị thuộc tính.
- Keyword **luôn** nằm trong guillemets «…». NOTE: không thay guillemets bằng `<<`/`>>`, **trừ khi** bộ ký tự không có guillemets.
- Không phải mọi từ trong guillemets là keyword; từ trong guillemets cũng không nhất thiết là stereotype.
- Dùng keyword chuẩn làm tên stereotype tự định nghĩa là **không khuyến khích** (dễ gây nhầm).

| Keyword | Metamodel element | Ngữ nghĩa | Vị trí trên hình |
| --- | --- | --- | --- |
| `actor` | Actor | Actor | box header (rectangle) |
| `extend` | Extend | Extend | nhãn đường nét đứt |
| `include` | Include | Include | nhãn đường nét đứt |
| `import` | PackageImport/ElementImport | visibility = public | nhãn đường nét đứt |

Hệ quả: keyword đúng là `include` và `extend` (số ít, chữ thường). Các biến thể «uses», «includes», «extends» **không** phải keyword UML 2.5.1. Riêng «uses» là cách gọi trong các phiên bản UML trước; đây là kiến thức nền, không kiểm trong tài liệu này.

## UML-FLF-SPINE-MAPPING — Ánh xạ dữ liệu FlintFlow sang metamodel UML

**Clause:** — · **Evidence:** `project_observation` (đọc `flintflow_be/src/modules/spine/spine.schema.ts`, `actor-generalization.ts`, `deterministic-check.ts`, `diagram/renderers/usecase.renderer.ts` ngày 2026-10-14) · **Locator:** file nội bộ · **Nguồn:** repo FlintFlow

| Trường spine FlintFlow | Khái niệm UML 2.5.1 | Mức tương ứng |
| --- | --- | --- |
| `actors[].id/name` | Actor, `name` | Đủ |
| `actors[].kind ∈ {human, system, time}` | Không có trong UML (UML chỉ nêu người dùng, phần cứng ngoài, hệ thống khác) | Quy ước nhóm; `time` không có trong UML |
| `actors[].parent_id` | Generalization Actor → Actor | Đủ cho đơn kế thừa; UML cho phép đa kế thừa (`general [0..*]` qua nhiều Generalization) |
| `use_cases[].id/name/description` | UseCase, `name`; mô tả dạng văn bản tự nhiên | Đủ (description ~ "natural language text") |
| `use_cases[].actor_ids` | Association binary Actor–UseCase | Không có multiplicity hay navigability |
| `use_cases[].includes[]` | Include: phần tử chứa = `includingCase`, phần tử trong mảng = `addition` | Đúng chiều; renderer vẽ `uc ..> included : <<include>>` |
| `use_cases[].extends[]` | Extend: phần tử chứa = `extension`, phần tử trong mảng = `extendedCase` | Đúng chiều; renderer vẽ `uc ..> base : <<extend>>`. **Thiếu** `extensionLocation` (bắt buộc 1..* trong UML) và `condition` |
| (không có) | UseCase Generalization | Chưa hỗ trợ |
| (không có) | ExtensionPoint | Chưa hỗ trợ |
| Tên hệ thống trên `rectangle "<system>"` | Subject (system boundary) | Chỉ một subject, không có keyword/metaclass |

Rule hiện có liên quan (để đối chiếu với `UML-POLICY`):
- `dead_reference`
- `usecase_relation_invalid` (red): tự tham chiếu, vòng include, vòng extend, cùng cặp vừa include vừa extend.
- `usecase_floating` (yellow)
- `usecase_auth_relation` (yellow)
- `actor_generalization_invalid` (yellow): kind không phải human, tự trỏ, vòng.
- Kiểm tên: U1–U8, A2, A7 (`checkUseCaseName`, `checkActorName`).

## UML-MISCONCEPTIONS — Hiểu lầm phổ biến

**Clause:** tổng hợp · **Evidence:** `verified_normative` cho cột "Theo UML 2.5.1"; cách phát biểu hiểu lầm do nhóm tổng hợp · **Locator:** theo từng dòng · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| # | Hiểu lầm | Theo UML 2.5.1 | Căn cứ |
| --- | --- | --- | --- |
| 1 | "Extend luôn có điều kiện / luôn tùy chọn" | `condition [0..1]`; không có condition thì mở rộng **vô điều kiện**. Mục đích ghi là "possibly conditionally" | §18.2.2.4; §18.1.3.2 |
| 2 | "Include có thể có điều kiện" | Include **không có** condition; hành vi addition được chèn và chạy ở một vị trí; UC gốc phụ thuộc addition | §18.2.4.4; §18.1.3.3 |
| 3 | "Mũi tên extend đi từ UC gốc tới UC mở rộng" | Ngược lại: từ **UC mở rộng** tới **UC được mở rộng** | §18.1.4 |
| 4 | "Mũi tên include đi từ UC được include về UC gốc" | Ngược lại: từ **UC gốc** tới **UC được include** | §18.1.4 |
| 5 | "UC gốc của extend không hoàn chỉnh nếu thiếu extension" | UC được mở rộng định nghĩa **độc lập** và có nghĩa độc lập; chính UC mở rộng mới thường không có nghĩa khi đứng riêng | §18.1.3.2 |
| 6 | "Include/extend thể hiện thứ tự màn hình, luồng điều khiển" | Chúng đặc tả **chèn hành vi** (một lần thực thi duy nhất). Luồng chi tiết mô tả bằng Interaction/Activity/StateMachine/văn bản ở tài liệu riêng | §18.1.3.2–18.1.3.3; §18.1.4 |
| 7 | "Generalization giữa UC cũng là include" | Generalization là quan hệ phân loại (tam giác rỗng, nét liền), thừa kế feature. Include là chèn hành vi (nét đứt, «include») | §9.2.3.2; §9.2.4.2; §18.1.3.3 |
| 8 | "Mọi UC phải nối trực tiếp với actor" | UC **may** có Actor liên kết; metamodel không bắt buộc. UC được include hoặc mở rộng có thể chỉ tiếp cận qua UC khác. Về ngữ nghĩa UC được thực hiện "in collaboration with one or more Actors", nên UC hoàn toàn lơ lửng đáng cảnh báo | §18.1.3.1 |
| 9 | "Actor phải là người" | Actor có thể là vai trò của **người, phần cứng ngoài, hệ thống khác** | §18.1.3.1 |
| 10 | "Actor = một người cụ thể / một chức danh trong tổ chức" | Actor là **vai trò**. Một thực thể đóng nhiều Actor; một Actor do nhiều thực thể đóng | §18.1.3.1 NOTE |
| 11 | "Actor nội bộ (DB, module) bị UML cấm" | UML không có câu tường minh. Actor là thực thể **tương tác với subject**; xét "ngoài/trong" theo subject là phán đoán phương pháp luận (`needs_review`) | §18.1.3.1; §18.2.1.1 |
| 12 | "Hai actor nối bằng đường association để thể hiện cộng tác" | **Cấm**: association của Actor chỉ tới UseCase/Component/Class. Quan hệ Actor–Actor hợp lệ là Generalization | §18.2.1.4 |
| 13 | "Nối hai UC bằng đường liền để thể hiện liên quan" | **Cấm** khi hai UC cùng subject | §18.2.5.6; §18.1.3.1 |
| 14 | "Hình chữ nhật boundary nghĩa là hệ thống sở hữu UC" | Boundary chỉ nói UC **áp dụng** cho subject; sở hữu là quan hệ khác (owner có thể là package) | §18.1.4; §18.1.3.1 |
| 15 | "UC chỉ thuộc một hệ thống" | `subject [0..*]`; cùng UC có thể vẽ trong nhiều boundary | §18.2.5.4; §18.1.4 |
| 16 | "Extend không vẽ extension point thì mô hình thiếu" | Hiển thị extension point/condition trên hình là **tùy chọn**. Nhưng trong **mô hình**, Extend bắt buộc có ≥ 1 extensionLocation | §18.1.4; §18.2.2.4 |
| 17 | "Không ghi multiplicity nghĩa là 1" | Không hiển thị multiplicity thì **không suy ra** được gì | §11.5.4 NOTE |
| 18 | "Mũi tên trên association actor→UC nghĩa là actor khởi tạo" | Đầu mũi tên mở trên association = **navigability**, không phải "ai khởi tạo". UML không có ký pháp "initiator" | §11.5.3.1; §11.5.4 |
| 19 | "Use case diagram là structure diagram" | Use Case Diagram thuộc **Behavior Diagram** (Figure A.5); ranh giới các loại sơ đồ không cứng | Annex A |
| 20 | "Phải có frame `uc` thì mới đúng UML" | Frame và heading **tùy chọn** | Annex A |
| 21 | "Viết `<<include>>` là sai" | Chuẩn dùng guillemets «»; `<<` `>>` chỉ chấp nhận khi bộ ký tự không có guillemets. Với công cụ văn bản như PlantUML, đầu ra hiển thị guillemets nên chấp nhận được | Annex C |
| 22 | "«includes», «uses», «extends» đều được" | Keyword chuẩn là `include`, `extend` | Annex C Table C.1; §18.1.4 |
| 23 | "Primary/secondary actor là khái niệm UML" | Không xuất hiện trong UML 2.5.1 (đã tìm toàn văn). Đây là khái niệm phương pháp luận | toàn văn |
| 24 | "Tự extend/vòng extend vi phạm UML" | Không có constraint tường minh. Chỉ include có `cannot_include_self`. Chặn vòng extend là chính sách nhóm | §18.2.2.5; §18.2.5.6 |
| 25 | "Actor con không thừa kế gì" | Instance actor con là instance actor cha (type conformance), nên tham gia được link của cha; đây là suy ra, chuẩn không có câu riêng cho Actor | §9.2.3.2; §11.5.3.1 |
| 26 | "Actor có thể specialize UseCase (hoặc ngược lại)" | Vi phạm `specialize_type`/`maySpecializeType` | §9.9.4.7–9.9.4.8 |
| 27 | "UML có template đặc tả use case (main flow, alt flow...)" | UML chỉ nói UC có thể mô tả bằng pre/postcondition và văn bản tự nhiên; **không** có template | §18.1.3.1 |

## UML-GLOSSARY — Thuật ngữ

**Clause:** tổng hợp · **Evidence:** `verified_normative` · **Locator:** theo từng dòng · **Nguồn:** [OMG UML 2.5.1 PDF](https://www.omg.org/spec/UML/2.5.1/PDF)

| Thuật ngữ (EN) | Nghĩa Việt / diễn giải | Locator |
| --- | --- | --- |
| Actor | Tác nhân: vai trò do người dùng hoặc hệ thống khác đóng khi tương tác với subject | §18.2.1.1, trang in 647 |
| UseCase | Ca sử dụng: tập hành động subject thực hiện, cho kết quả quan sát được có giá trị với Actor/stakeholder | §18.2.5.1, trang in 649 |
| Subject | Chủ thể: Classifier (hệ thống, Component, Class...) mà UC áp dụng vào | §18.1.1; §18.2.5.4 |
| System boundary | Cách gọi không chính thức của hình chữ nhật subject | §18.1.4, trang in 641 |
| Extend | Quan hệ mở rộng: UC mở rộng → UC được mở rộng, chèn tại extension point | §18.2.2, trang in 647 |
| extension / extendedCase | UC mở rộng (source, sở hữu Extend) / UC được mở rộng (target) | §18.2.2.4 |
| ExtensionPoint | Điểm mở rộng: vị trí có tên trong hành vi UC có thể được mở rộng | §18.2.3, trang in 648 |
| extensionLocation | Danh sách có thứ tự (1..*) các ExtensionPoint mà Extend dùng | §18.2.2.4, trang in 648 |
| condition (của Extend) | Constraint 0..1, đánh giá khi đạt ExtensionPoint đầu tiên; vắng = vô điều kiện | §18.2.2.4; §18.1.3.2 |
| Include | Quan hệ bao hàm: UC gốc → UC được include; chèn toàn bộ hành vi addition | §18.2.4, trang in 648 |
| addition / includingCase | UC được include (target) / UC bao hàm (source, sở hữu Include) | §18.2.4.4 |
| allIncludedUseCases() | Bao đóng bắc cầu các UC được include | §18.2.5.5, trang in 649 |
| BehavioredClassifier | Classifier có thể sở hữu Behavior; lớp cha của Actor và UseCase | §10.5.1, trang in 174 |
| ownedBehavior | Các Behavior thuộc sở hữu (Interaction, Activity, StateMachine...) | §10.5.1.5 |
| classifierBehavior | ownedBehavior đặc tả hành vi của chính classifier (0..1) | §10.5.1.5; §13.2.3.4 |
| ownedUseCase | UC thuộc sở hữu của một Classifier | §9.9.4.6, trang in 133 |
| Generalization | Tổng quát hóa: quan hệ phân loại cụ thể → tổng quát, có thừa kế | §9.9.7, trang in 138 |
| isAbstract | Classifier trừu tượng, không có instance trực tiếp; tên in nghiêng hoặc `{abstract}` | §9.9.4.5; §9.2.4.1 |
| Association | Liên kết: quan hệ ngữ nghĩa giữa các instance có kiểu; với Actor/UC phải binary | §11.5.3.1; §18.2.1.4 |
| Multiplicity | Bội số: khoảng cardinality hợp lệ `lower..upper` | §7.5.3.2; §7.5.4.1 |
| Navigability | Tính điều hướng: đầu association truy cập hiệu quả được từ đầu kia | §11.5.3.1; §11.5.4 |
| Comment / note symbol | Chú thích không ngữ nghĩa; rectangle gấp góc | §7.2.3.2; §7.2.4 |
| Constraint | Ràng buộc: điều kiện Boolean khai báo ngữ nghĩa | §7.8.3, trang in 41 |
| OpaqueExpression | Biểu thức dạng văn bản ở ngôn ngữ khác UML (gồm ngôn ngữ tự nhiên) | §8.6.16, trang in 86 |
| Dependency | Phụ thuộc client → supplier, không ngữ nghĩa runtime | §7.7.3.1, trang in 38 |
| Abstraction / «Trace» / «Refine» | Phụ thuộc giữa các biểu diễn của cùng khái niệm; trace giữa mô hình; refine giữa mức ngữ nghĩa | §7.7.3.3; Table 22.1 |
| «Subsystem» | Stereotype chuẩn trên Component: đơn vị phân rã hệ thống lớn | Table 22.1, trang in 682 |
| Keyword | Từ dành riêng trong guillemets, phân biệt metaclass/quan hệ cùng hình dạng | Annex C, trang in 745 |
| Frame / heading | Khung sơ đồ tùy chọn; heading `[<kind>]<name>[<parameters>]` | Annex A, trang in 683 |
| `uc` | Viết tắt frame kind "use case" | Annex A, trang in 684 |
| UMLUseCaseDiagram | Lớp UML DI cho sơ đồ use case; không có modelElement | B.7.37, trang in 740 |

## UML-POLICY — Bộ check đề xuất cho rule engine

**Clause:** — · **Evidence:** `proposed_policy` · **Locator:** — · **Nguồn:** nhóm FlintFlow, căn cứ các section ở trên

Quy ước mức:
- `error`: vi phạm metamodel hoặc ký pháp UML 2.5.1 (có constraint/câu "shall"/định nghĩa ký pháp), hoặc lỗi toàn vẹn dữ liệu.
- `warning`: khuyến nghị của chuẩn ("should") hoặc quy ước nhóm.
- `needs_review`: cần người/LLM phán đoán; UML không đủ để kết luận.

Các ví dụ trong bảng là **ví dụ (nhóm tự đặt)**.

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ (section ID) | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| UC-01 | Actor phải có tên (không rỗng, không toàn khoảng trắng) | Rule: `trim(name) == ""` | error | UML-18.2.1-ACTOR; UML-7.4-NAMING | `Librarian` | `""`, `"  "` |
| UC-02 | UseCase phải có tên | Rule: `trim(name) == ""` | error | UML-18.2.5-USECASE | `Borrow Book` | `""` |
| UC-03 | Mọi tham chiếu (`actor_ids`, `includes`, `extends`, `parent_id`) trỏ tới id tồn tại | Rule: tra bảng id (hiện có `dead_reference`) | error | UML-18.2.2-EXTEND (ends 1..1); UML-18.2.4-INCLUDE; UML-FLF-SPINE-MAPPING | `includes: ["UC03"]`, UC03 tồn tại | `includes: ["UC99"]`, UC99 không tồn tại |
| UC-04 | Đầu mút đúng metaclass: include/extend chỉ nối UC–UC; `actor_ids` chỉ chứa Actor; generalization không trộn Actor với UseCase | Rule: kiểm kiểu của id đích | error | UML-18.2.2-EXTEND; UML-18.2.4-INCLUDE; UML-9.2-GENERALIZATION (`specialize_type`) | UC01 includes UC02 | UC01 includes A01 (actor); actor `parent_id` trỏ tới một UC |
| UC-05 | Không tự include, không chu trình include (trực tiếp hoặc gián tiếp) | Rule: SCC/Tarjan trên đồ thị `includes` (hiện có trong `usecase_relation_invalid`) | error | UML-18.2.5-USECASE (`cannot_include_self`) | UC01→UC02→UC03 | UC01→UC02→UC01; UC01→UC01 |
| UC-06 | Không tự extend, không chu trình extend | Rule: SCC trên đồ thị `extends` | warning (quy ước nhóm; UML không có constraint; FLF hiện đặt red) | UML-18.2.2-EXTEND; UML-18.1.3.2-EXTEND-SEMANTICS (UC được mở rộng định nghĩa độc lập) | UC05 extends UC01 | UC05 extends UC01 và UC01 extends UC05 |
| UC-07 | Một cặp UC không vừa include vừa extend nhau | Rule: giao hai tập cặp | warning (quy ước nhóm; FLF hiện đặt red) | UML-18.1.3.3-INCLUDE-SEMANTICS (bảng so sánh) | Checkout include Calculate Total | Checkout include Apply Coupon **và** Apply Coupon extend Checkout |
| UC-08 | Extend có thông tin extension point (và condition nếu có) trong mô hình | Rule: `extends` khác rỗng ⇒ kiểm có EP; nếu schema chưa có trường EP thì LLM kiểm description của UC gốc có nêu điểm chèn | error nếu schema có EP; needs_review với schema hiện tại | UML-18.2.2-EXTEND (`extensionLocation 1..*`); UML-18.1.4-NOTATION (hiển thị tùy chọn) | Edit SRS có EP `editing`; Show Help extends Edit SRS tại `editing`, condition `{user pressed F1}` | Extend không có EP nào trong mô hình |
| UC-09 | ExtensionPoint được Extend tham chiếu phải thuộc UC được mở rộng | Rule: `xp ∈ extendedCase.extensionPoints` | error | UML-18.2.2-EXTEND (`extension_points`) | EP `editing` thuộc Edit SRS | Extend tới Edit SRS nhưng dùng EP `payment` của Checkout |
| UC-10 | ExtensionPoint có tên, tên duy nhất trong một UC | Rule: rỗng/trùng trong cùng UC | error | UML-18.2.3-EXTENSIONPOINT; UML-18.1.3.2-EXTEND-SEMANTICS | `selection`, `confirmation` | Hai EP cùng tên `selection` trong một UC |
| UC-11 | Không có association Actor–Actor hay Actor với phần tử không phải UseCase/Component/Class | Rule: kiểm kiểu hai đầu association | error | UML-18.2.1-ACTOR (`associations`) | Librarian — Borrow Book | Librarian — Member (đường liền) |
| UC-12 | Không có association UC–UC cùng subject | Rule: association có cả hai đầu là UC và chung subject | error | UML-18.2.5-USECASE (`no_association_to_use_case`) | Checkout «include» Pay | Checkout ——— Pay (đường liền) |
| UC-13 | Association có Actor/UC phải binary (không n-ary/diamond) | Rule: số memberEnd = 2 | error | UML-18.2.1-ACTOR; UML-18.2.5-USECASE (`binary_associations`) | Customer — Withdraw | Diamond nối Customer, Bank, Withdraw |
| UC-14 | Generalization không tự trỏ, không chu trình (Actor và UC) | Rule: phát hiện vòng trên `parent_id` (hiện có trong `actor_generalization_invalid`) | error | UML-9.2-GENERALIZATION (`no_cycles_in_generalization`) | Member → User | A → B → A; A → A |
| UC-15 | Generalization actor chỉ giữa actor cùng `kind` (human↔human) | Rule: so `kind` (hiện có trong `actor_generalization_invalid`) | warning (quy ước nhóm; UML không có `kind`) | UML-9.2-GENERALIZATION; UML-FLF-SPINE-MAPPING | Librarian → Staff (cùng human) | Payment Gateway (system) → User (human) |
| UC-16 | Không trùng tên Actor–Actor, UC–UC trong cùng namespace | Rule: trùng chính xác ⇒ error; trùng khi bỏ hoa thường/khoảng trắng ⇒ warning (U8/A7) | error (trùng chính xác) / warning (khác hoa thường) | UML-7.4-NAMING (`members_distinguishable`) | `Borrow Book`, `Return Book` | Hai UC `Borrow Book`; `Borrow book` và `Borrow Book` |
| UC-17 | Mỗi Actor tham gia ít nhất một UC (trực tiếp, hoặc qua actor con/cha có UC) | Rule: actor không xuất hiện trong `actor_ids` nào và không có quan hệ generalization dẫn tới UC | warning | UML-18.1.3.1-ACTOR-SEMANTICS (Actor tương tác với subject của các UC liên kết) | Librarian gắn Borrow Book | Auditor không gắn UC nào |
| UC-18 | UC không lơ lửng: có actor, hoặc được include, hoặc extend UC khác, hoặc là UC con trong generalization | Rule (hiện có `usecase_floating`) | warning | UML-18.1.3.1-USECASE-SEMANTICS ("in collaboration with one or more Actors"); UML-MISCONCEPTIONS #8 | Validate ISBN được Borrow Book include | Generate Report không actor, không quan hệ |
| UC-19 | Include dùng cho phần **bắt buộc, dùng chung**; Extend dùng cho phần **bổ sung tại điểm xác định** (có thể có điều kiện). Không dùng include kiểu "nếu... thì" | LLM đọc description/flow của hai UC | needs_review | UML-18.1.3.2-EXTEND-SEMANTICS; UML-18.1.3.3-INCLUDE-SEMANTICS | Place Order include Validate Cart (luôn chạy) | Place Order include Apply Coupon trong khi mô tả ghi "nếu khách có mã" |
| UC-20 | UC là đơn vị chức năng hoàn chỉnh, có kết quả quan sát được có giá trị; không phải bước UI/kỹ thuật | Rule: blacklist (U3/U5: Button, Screen, Click...) + LLM | warning | UML-18.1.3.1-USECASE-SEMANTICS; UML-18.2.5-USECASE | `Register Account` | `Click Save Button`, `Open Login Screen`, `Call API` |
| UC-21 | Actor không phải thành phần nội bộ của subject (database, module, chính "System") | LLM: so tên/mô tả actor với các thành phần của hệ thống | needs_review | UML-18.1.3.1-ACTOR-SEMANTICS (chuẩn không nêu tường minh) | `Payment Gateway` (hệ thống ngoài) | `Database`, `Backend Module` của chính hệ thống |
| UC-22 | Actor đặt tên theo **vai trò**, không theo cá nhân hoặc tên chung chung (A2) | Rule: blacklist (`User`, `System`, `Person`...) trừ actor cha + LLM phát hiện tên riêng | warning | UML-18.1.3.1-ACTOR-SEMANTICS (NOTE role) | `Librarian`, `Member` | `Nguyễn Văn A`, `User` (khi không phải actor cha) |
| UC-23 | Sơ đồ render đúng chiều: include gốc→được include; extend mở rộng→được mở rộng; generalization con→cha, tam giác rỗng ở cha | Rule trên output renderer (PlantUML/draw.io) so với mô hình | error | UML-18.1.4-NOTATION; UML-9.2-GENERALIZATION; UML-18-NOTATION-SUMMARY | `A ..> B : <<include>>` với A includes B | `B ..> A : <<include>>` với A includes B |
| UC-24 | Nhãn quan hệ dùng keyword chuẩn `include`/`extend`; include/extend vẽ nét đứt đầu mở; association vẽ nét liền | Rule: regex nhãn và kiểu nét trên output | error (sai kiểu nét hoặc sai keyword) / warning (`<<…>>` thay guillemets) | UML-ANNEX-C-KEYWORDS; UML-18.1.4-NOTATION | `«include»` nét đứt | `«uses»`, `«includes»`; include vẽ nét liền |
| UC-25 | Tên Actor/UC nên viết hoa chữ đầu (theo khuyến nghị "should" cho tên Classifier); quy tắc chi tiết U1/U4/U6 là quy ước nhóm | Rule (hiện có U1, U4, U6) | warning | UML-9.2-CLASSIFIER-NOTATION-ABSTRACT (should); UML-FLF-SPINE-MAPPING | `Borrow Book` | `borrow book.` |

Không đưa vào check (UML không quy định):
- Actor đặt trái/phải.
- Số UC tối đa trên một hình.
- Màu sắc.
- Bắt buộc có boundary/frame. Boundary và frame là tùy chọn (`UML-18.1.4-NOTATION`, `UML-ANNEX-A-DIAGRAMS`).
- Bắt buộc mọi extend có condition.
- Bắt buộc mọi UC có include/extend.

Các chính sách bố cục này, nếu áp dụng, phải dẫn nguồn riêng (template FPT, sách phương pháp luận).

## UML-GAPS — Chưa xác minh / thay đổi so với revision 2

**Clause:** — · **Evidence:** `pending` cho các mục chưa xác minh · **Locator:** — · **Nguồn:** —

**Chưa xác minh hoặc chưa đọc**
- Chưa đọc kỹ §11.6 Components và §11.7 Collaborations. Cách Collaboration "dùng UseCase và Actor làm kiểu cho part" (§18.1.3.1) mới chỉ ghi ở mức câu của Clause 18. Bổ sung: đọc §11.7 (trang in 215–219 theo mục lục).
- Chưa đọc Clause 17 Interactions về cách gắn sequence diagram vào UC. Chuẩn chỉ nói instance của UC "thường" được mô tả bằng Interaction. Bổ sung khi cần check "mỗi UC có sequence diagram".
- Chưa đối chiếu XMI máy đọc (`UML.xmi`, `StandardProfile.xmi` ở URL trong trang bìa) để xác nhận tên property chính xác. Nên đối chiếu nếu rule engine import/export XMI.
- Câu "single location in the included UseCase" (§18.1.3.3) có vẻ là lỗi biên tập. Chưa kiểm danh sách issue/errata của OMG (issues.omg.org) để xác nhận.
- Nhận xét về OCL của `no_association_to_use_case` và `associations` (Actor) là phân tích của nhóm, chưa có nguồn OMG xác nhận.
- Ghi chú "«uses» là cách gọi ở phiên bản UML cũ" là kiến thức nền, chưa kiểm trong đặc tả cũ.

**Thay đổi so với revision 2**
- **Đính chính UC-05 (rev 2)**: rev 2 coi "Extend thiếu extension point" là chỉ cần review. Theo §18.2.2.4, `extensionLocation` là `1..*`, nên trong **mô hình** UML đây là thiếu bắt buộc. Rev 3 đặt error khi schema có EP, `needs_review` với schema FlintFlow hiện tại (chưa có trường EP).
- **Bổ sung ràng buộc rev 2 bỏ sót**:
  - Actor–Actor association bị cấm (§18.2.1.4).
  - Actor↔UseCase generalization bị cấm (`specialize_type`).
  - Tên ExtensionPoint duy nhất trong UC.
  - Trùng tên trong namespace (`members_distinguishable`).
  - Extend thuộc sở hữu của UC mở rộng, Include thuộc sở hữu của UC bao hàm.
- **Làm rõ**: tự extend/chu trình extend và "cùng cặp vừa include vừa extend" **không** phải lỗi UML. Rule `usecase_relation_invalid` của FlintFlow đang gộp chúng với vòng include ở mức red; rev 3 đề xuất tách mức.
- **Làm rõ**: câu rev 2 "việc xác định 'ngoài hệ thống' phụ thuộc subject" là suy luận. UML 2.5.1 không có câu "actor phải ở ngoài subject".
- **Locator rev 2**: các số trang của rev 2 (Actor 639–640/647, UseCase 639–640/649–650, Include 641–642/648–650, Extend 640–642/647–648, Generalization 100/102; PDF = trang in + 42) đều **khớp** khi kiểm lại. Rev 3 ghi hẹp hơn theo từng tiểu mục.
- **Frontmatter rev 2** thiếu trường `revision` và có `checked_on` cũ; rev 3 đã cập nhật.
