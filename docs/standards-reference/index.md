---
reference_set: flf-215
revision: 3
checked_on: 2026-10-14
language: vi
status: references_collected_with_evidence_limits
---

# Nguồn chuẩn tham chiếu cho SRS, Actor và Use Case

Yêu cầu: [FLF-215](https://fpt-team-eokn4lpy.atlassian.net/browse/FLF-215). Hạn nộp: 22/10/2026. Bộ tài liệu là ghi chú tổng hợp (diễn giải) của nhóm, dùng làm đầu vào thiết kế RAG + rule engine đánh giá SRS/Actor/Use Case do AI sinh ra. Chưa triển khai engine; các check `proposed_policy` cần nhóm duyệt trước khi bật.

Revision 3 (14/10/2026) làm lại theo yêu cầu leader: mở rộng từ 4 lên 8 nguồn, từ ~500 lên ~5.300 dòng, từ 24 lên 183 check; đọc lại nguồn gốc để sửa locator/kết luận sai của revision 2 (xem [Thay đổi so với revision 2](#thay-đổi-so-với-revision-2)).

## Danh mục nguồn

### Nguồn chính (scope FLF-215)

| Tên nguồn / file | Version | Link / nơi lấy | Điều khoản áp dụng | Mức xác minh | Quy mô |
| --- | --- | --- | --- | --- | --- |
| [BABOK Guide](babok-v3.md) | v3, 2015 (IIBA) | [IIBA BABOK](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/), [Glossary](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/), [Core Standard 2017](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf), task cards RADD v2.0 (2025), mục lục KnowledgeHub, trang Errata | §2.1 BACCM; §2.2–2.5; §3–§8 (30 task: purpose/inputs/outputs); §5.1–5.5 RLCM; §7.1–7.6 RADD; §7.2 9 đặc tính chất lượng; §10.1–10.50 (đủ 50 technique), trọng tâm §10.1, §10.9, §10.30, §10.47, §10.48; Appendix A | `verified_public`: Glossary, Core Standard, task cards, mục lục; `secondary_source` (ghi số nguồn đối chiếu): elements chi tiết của task/technique | 927 dòng, 39 section, BA-01…BA-24 |
| [ISO/IEC/IEEE 29148](iso-29148-2018.md) | Edition 2, 2018-11; confirmed 2024; stage 90.92 "to be revised" từ 2026-02-16 | [ISO 72089](https://www.iso.org/standard/72089.html), [preview 15 trang](https://cdn.standards.iteh.ai/samples/72089/d67a2360308046938cad282e229a39ca/ISO-IEC-IEEE-29148-2018.pdf), trang IEEE SA | §1–§3 (đủ 37 thuật ngữ §3.1); §5.2.4 cú pháp; §5.2.5 9 đặc tính yêu cầu; §5.2.6 5 đặc tính tập; §5.2.7 tiêu chí ngôn ngữ; §5.2.8 thuộc tính; §6 processes; §9.3–9.6 BRS/StRS/SyRS/SRS outline | `verified_public`: front matter, §1–§3, mục lục; `secondary_source` (2–3 nguồn/mục): §4–§9; `locator_only`: Annex | 832 dòng, 38 section, RE-01…RE-25 |
| [OMG UML](uml-2.5.1.md) | 2.5.1, 2017-12; formal/17-12-05 | [OMG](https://www.omg.org/spec/UML/2.5.1/), [PDF chính thức](https://www.omg.org/spec/UML/2.5.1/PDF) | Clause 18 đầy đủ (18.1.1–18.1.5, 18.2.1–18.2.5, 18.3); §7.2, 7.4, 7.6, 7.7; §9.2 Generalization/abstract; §12; Clause 20, 22; Annex A–C | `verified_normative`: đọc trực tiếp thân đặc tả; PDF page = trang in + 42 | 922 dòng, 37 section, UC-01…UC-25 |
| [Template SRS FPT Capstone](fpt-capstone-srs-template.md) | Bản người dùng cấp, SHA-256 `5eeb573dd415…`; bìa Hanoi/August 2019, không ghi edition | `Report3_Software Requirement Specification.docx`, người dùng xác nhận chính thức FPTU ngày 14/10/2026 | I Record of Changes; II.1–II.5.4 (mỗi mục 1 section); T01–T09 đủ dòng ví dụ; 6 hình mẫu; style/numbering; đối chiếu Export Word tại backend `f50b125` | `verified_supplied`: thân tài liệu, bảng, ảnh, OOXML; `project_observation`: so sánh code | 785 dòng, 38 section, FPT-01…FPT-30 |

### Nguồn bổ trợ (thêm ở revision 3)

| Tên nguồn / file | Version | Link / nơi lấy | Lý do bổ sung | Mức xác minh | Quy mô |
| --- | --- | --- | --- | --- | --- |
| [ISO/IEC 25010](iso-iec-25010.md) | 2023, edition 2 (thay 25010:2011); kèm 25019:2023, 25023:2016 | [ISO 78176](https://www.iso.org/standard/78176.html), preview iTeh/VDE | Căn cứ phân loại và đo NFR cho FPT chương 4.2 (9 characteristic, 40 sub-characteristic) | `verified_normative`: Clause 1, 3.1–3.4; `secondary_source`: 3.5–3.9 | 408 dòng, 24 section, NFR-01…NFR-20 |
| [IEEE 830](ieee-830-1998.md) | Std 830-1998, Superseded bởi 29148:2011 | [IEEE SA](https://standards.ieee.org/ieee/830/1222/), IEEE Xplore | Nguồn gốc bố cục SRS Introduction/Overall Description/Specific Requirements; 8 đặc tính SRS tốt; Annex A cách tổ chức mục 3 | `verified_public`: trạng thái/abstract; `secondary_source`: nội dung | 415 dòng, 26 section, SRS-01…SRS-15 |
| [Wiegers — Software Requirements](wiegers-srs-template.md) | 3rd ed. (2013); template công khai 2023; bộ mẫu COS 2002 | [Mẫu sách NXB](https://ptgmedia.pearsoncmg.com/images/9780735679665/samplepages/9780735679665.pdf), softwarereqs.com, Process Impact (Internet Archive) | Ví dụ Cafeteria Ordering System trong template FPT là của Wiegers; use case template, business rule taxonomy, review checklist | `verified_public`: tài liệu tác giả/NXB công bố; `locator_only`: thân chương 8–11 | 458 dòng, 23 section, WG-01…WG-15 |
| [Cockburn — Writing Effective Use Cases](cockburn-use-cases.md) | Sách 2001; bản trích draft #3 (2000) của tác giả | [alistair.cockburn.us (Internet Archive)](https://web.archive.org/web/20031002043657/http://alistair.cockburn.us:80/crystal/books/weuc/weuc0002extract.pdf) | UML không quy định template văn bản use case; Cockburn cho goal level, scope, fully dressed template, extensions, 31 pass/fail tests | `verified_public`: bản trích, template, bài viết; `secondary_source`: bản chép guideline | 440 dòng, 22 section, UCD-01…UCD-20 |

## Danh mục check cho rule engine

Tổng 183 check `proposed_policy`, mỗi check có: cách phát hiện (rule/LLM), mức (`error`/`warning`/`needs_review`), căn cứ (section ID), ví dụ đạt/không đạt. Prefix không trùng nhau giữa các file.

| Prefix | File | Phạm vi | Số check |
| --- | --- | --- | --- |
| `UC-` | uml-2.5.1.md | Tính toàn vẹn và ngữ nghĩa sơ đồ Use Case (tên, endpoint, include/extend, extension point, association, generalization) | 25 |
| `UCD-` | cockburn-use-cases.md | Chất lượng đặc tả use case dạng văn bản (goal level, actor chính, scenario, extensions, guarantees) | 20 |
| `RE-` | iso-29148-2018.md | Chất lượng từng yêu cầu và tập yêu cầu, tiêu chí ngôn ngữ, thuộc tính, outline SRS | 25 |
| `BA-` | babok-v3.md | Phân loại yêu cầu, stakeholder vs actor, traceability, verify vs validate, acceptance criteria | 24 |
| `NFR-` | iso-iec-25010.md | NFR đo được (đơn vị, ngưỡng, điều kiện), phân loại characteristic | 20 |
| `SRS-` | ieee-830-1998.md | Đặc tính SRS tốt, tham chiếu nội bộ, TBD, tổ chức mục yêu cầu cụ thể | 15 |
| `WG-` | wiegers-srs-template.md | Business rule, use case template, review checklist kiểu Wiegers | 15 |
| `FPT-` | fpt-capstone-srs-template.md | Nội dung tối thiểu từng mục template FPT, không chép ví dụ cafeteria | 30 |

Mức `error` chỉ dùng khi căn cứ là `verified_normative`/`verified_supplied` và kiểm được bằng rule. Check dựa trên `secondary_source`, `locator_only` hoặc quy ước nhóm mặc định tối đa `warning`/`needs_review`.

## Nguồn nào quyết định chủ đề nào

| Chủ đề | Nguồn quyết định | Nguồn hỗ trợ | Ghi chú |
| --- | --- | --- | --- |
| Ngữ nghĩa và ký pháp Actor, Use Case, include, extend, generalization | UML 2.5.1 Clause 18, §9.2 | BABOK §10.47, Cockburn CKB-UML | UML không có khái niệm primary/secondary actor và không quy định template văn bản |
| Template mô tả use case (trigger, pre/post, flow, extensions) | Template FPT (bố cục nộp) | Cockburn, Wiegers §8, BABOK §10.47 | FPT chỉ có bảng 4 cột ở 2.2.2; chi tiết luồng nằm ở 3.x function details |
| Actor vs stakeholder | UML §18.1.3.1 + BABOK Glossary/§2.4 | Cockburn CKB-4-ACTORS | Stakeholder không nhất thiết tương tác với hệ thống |
| Phân loại yêu cầu (business/stakeholder/solution/transition) | BABOK §2.3 | ISO 29148 §9.3–9.6 (BRS/StRS/SRS) | Hai taxonomy không trùng 1-1 |
| Chất lượng một câu yêu cầu và tập yêu cầu | ISO 29148 §5.2.5–5.2.7 | BABOK §7.2, IEEE 830 §4.3, Wiegers §11 | Xem mục xung đột bên dưới |
| Bố cục SRS nộp FPT | Template FPT | ISO 29148 §9.6, IEEE 830 §5, Wiegers §10 | FPT thiếu References, Assumptions, Verification so với ISO/IEEE; không tự thêm vào bản nộp nếu chưa chốt |
| NFR (FPT 4.2) | ISO/IEC 25010:2023 | FPT 4.2.1–4.2.4, ISO 29148 §9.6, BABOK §10.30 | Ngưỡng do stakeholder quyết định, không phải số của chuẩn |
| Business rules (FPT 5.1) | Template FPT T08 | Wiegers WGR-9, BABOK §10.9 | |
| Verification / validation | ISO 29148 §6.5–6.6 | BABOK §7.2 vs §7.3 | Verify = đặc tả đúng chất lượng; validate = đáp ứng mục tiêu nghiệp vụ |

## Xung đột và cạm bẫy giữa các nguồn

1. **Danh sách đặc tính yêu cầu khác nhau theo nguồn và edition.** ISO 29148:2018 có 9 đặc tính cho từng yêu cầu (necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming) và 5 cho tập yêu cầu. Bản 2011 dùng danh sách khác (có implementation free, traceable; tập có affordable, bounded). BABOK §7.2 có 9 đặc tính riêng (atomic, complete, consistent, concise, feasible, unambiguous, testable, prioritized, understandable). IEEE 830 có 8 đặc tính cho cả SRS. Nhiều tài liệu trên mạng trộn các danh sách này. Chunk phải giữ `source_id` + `version`; không gộp thành một "chuẩn" chung. Xem ISO-5.2-EDITION-DIFF.
2. **Extend.** UML bắt buộc `extensionLocation 1..*` (extend phải có extension point trong mô hình), còn condition là `0..1`, nên extend có thể vô điều kiện. Tự extend và vòng extend không bị UML cấm; chỉ include có constraint cấm tự include và chu trình.
3. **Hình mẫu không phải luật.** Ví dụ include Login trong FPT, ví dụ COS và mức chi tiết của Cockburn là minh họa, không phải lỗi bắt buộc.
4. **ISO 25010 đổi tên ở bản 2023:** usability → interaction capability, portability → flexibility, thêm safety. Template FPT 4.2.1 vẫn dùng tên "Usability" (tương ứng với interaction capability).
5. **BABOK Core Standard gọi sai tên task 7.5** là "Define Solution Options"; errata xác nhận tên đúng là "Define Design Options".

## Quy ước evidence cho RAG và rule engine

| `evidence` | Ý nghĩa | Cách dùng |
| --- | --- | --- |
| `verified_normative` | Đã đọc phần thân đặc tả gốc | Dẫn chứng trong phạm vi section đã đọc; được làm căn cứ cho `error` |
| `verified_public` | Đã đọc tài liệu công khai do nhà phát hành/tác giả cung cấp (glossary, preview, task card, template) | Dẫn chính tài liệu đó, giữ tên/version của nó |
| `verified_supplied` | Đã đọc file do người dùng cung cấp và xác nhận nguồn | Dẫn tên/hash/locator của đúng snapshot; không suy ra cho mọi campus/kỳ học |
| `secondary_source` | Lấy từ nguồn thứ cấp uy tín (sách, giáo trình, bài báo) có dẫn chuẩn; section ghi tên + link và số nguồn đối chiếu | Dùng để hướng dẫn/cảnh báo; không trình bày như nguyên văn chuẩn; tối đa `warning` |
| `locator_only` | Chỉ biết vị trí qua mục lục | Trả về vị trí cần đọc; không tự sinh nội dung chuẩn |
| `project_observation` | Quan sát code/template nội bộ FlintFlow | So với hành vi dự án; không gắn nhãn chuẩn |
| `proposed_policy` | Check/quy tắc do nhóm đề xuất | Cần nhóm phê duyệt trước khi bật làm lỗi chặn |
| `pending` | Chưa có nguồn | Không dùng để chấm điểm |

Tách chunk tại heading `## <ID> — …`. Mỗi section bắt đầu bằng dòng `**Clause:** · **Evidence:** · **Locator:** · **Nguồn:**` và tự đứng được khi bị cắt riêng. Section `…-POLICY` là chunk riêng với `evidence=proposed_policy`, không kế thừa evidence của section nguồn. Một chunk nên có `chunk_id`, `source_id`, `version`, `clause`, `locator`, `source_url`, `checked_on`, `evidence`, `rights_status`, `rag_allowed` và `text`. Ví dụ:

```json
{
  "chunk_id": "UML-18.2.2-EXTEND",
  "source_id": "omg-uml",
  "version": "2.5.1",
  "clause": "18.2.2",
  "locator": "printed p.647-648; PDF p.689-690",
  "source_url": "https://www.omg.org/spec/UML/2.5.1/PDF",
  "checked_on": "2026-10-14",
  "evidence": "verified_normative",
  "rights_status": "summary_only_review_before_source_ingestion",
  "rag_allowed": "pending_rights_review",
  "text": "Extend bổ sung hành vi tại ít nhất một extension point thuộc UC gốc (extensionLocation 1..*); condition 0..1, vắng condition thì mở rộng vô điều kiện."
}
```

Khi chấm một artifact, lưu `artifact_id`, `check_id`, `chunk_id`, đường dẫn/trang bằng chứng trong artifact, kết quả `pass|fail|needs_review|not_applicable` và lý do. Thiếu bằng chứng, hoặc căn cứ là `locator_only`/`pending`, thì trả `needs_review`, không mặc định đạt hay không đạt.

## Quyền sử dụng

`rights_status` không phải giấy phép. Bộ tài liệu chỉ chứa diễn giải, bảng locator và trích ngắn (≤ 25 từ); không có PDF/DOCX nguồn nào trong repo hoặc RAG.

- **ISO (29148, 25010):** chân trang website ISO cấm dùng nội dung ISO cho machine learning/AI, kể cả "to prompt or otherwise enable AI tools to generate responses", tức là bao gồm RAG. Chunk ISO đặt `rag_allowed: pending_rights_review` cho đến khi nhóm/mentor xác nhận cách hiểu với phần diễn giải. Xem ISO-RIGHTS.
- **IEEE 830:** IEEE bảo lưu quyền text-and-data-mining/huấn luyện AI; file chỉ tóm tắt từ nguồn thứ cấp.
- **BABOK, Wiegers, Cockburn:** sách có bản quyền; chỉ tóm tắt cấu trúc/ý chính. Cockburn cho phép sao chép template khi ghi nguồn.
- **UML:** đặc tả công khai của OMG; vẫn chỉ diễn giải.
- **Template FPT:** DOCX gốc giữ tại máy người dùng cấp, không commit.

## Phát hiện cần nhóm xử lý (ngoài phạm vi FLF-215)

Ghi lại để giao việc riêng. FLF-215 không sửa code.

| Phát hiện | File căn cứ | Đề xuất |
| --- | --- | --- |
| Rule `usecase_relation_invalid` xếp tự extend/vòng extend và "cùng cặp vừa include vừa extend" cùng mức red với vòng include. UML chỉ cấm vòng include | UML-POLICY UC-06, UC-07; UML-FLF-SPINE-MAPPING | Tách mức: vòng include giữ `error`; hai trường hợp kia `warning` |
| Spine chưa có extension point, condition, generalization UC, subject, multiplicity | UML-FLF-SPINE-MAPPING | Cân nhắc bổ sung schema nếu muốn chấm UC-xx mức `error` |
| Export Word: heading lệch một cấp so với template (thiếu tầng "II. Software Requirement Specification"); số chương thiếu dấu chấm; ngắt trang khác template | FPT-COMPARISON | Chốt với nhóm/mentor rồi sửa writer |
| Export Word theo `Project.documentLanguage` (FLF-265): dự án `vi` xuất tiếng Việt; phần chưa dịch lẫn tiếng Anh; sơ đồ có thể lẫn hai ngôn ngữ (timeout 8 s) | FPT-EXPORT-DELTA-REV2 | Xác nhận với mentor có chấp nhận SRS tiếng Việt không |
| Spine `Message` chỉ có `{id, code, text, function_ids}`, thiếu Message Type/Context như T09; 5.1 không in mã BR | FPT-COMPARISON | Bổ sung field/cột nếu nộp đúng template |

## Thay đổi so với revision 2

- **Phạm vi:** thêm 4 nguồn bổ trợ; mỗi nguồn chính tăng từ 70–200 dòng lên 785–927 dòng; check tăng từ 24 lên 183, có thêm cột cách phát hiện/mức/căn cứ/ví dụ.
- **UML:** rev 2 xếp "extend thiếu extension point" ở mức review; thực tế §18.2.2.4 bắt buộc `1..*`. Bổ sung các ràng buộc bị bỏ sót: cấm association Actor–Actor, cấm generalization Actor↔UseCase, tên extension point duy nhất, `members_distinguishable`. Mọi locator rev 2 đúng.
- **ISO 29148:** rev 2 chỉ có locator; rev 3 diễn giải đủ §1–§3 từ preview và §4–§9 từ nguồn thứ cấp. Sửa tên section "ISO-6-TYPES-VERIFICATION" (§6.3/§6.4 là process, không phải phân cấp loại yêu cầu); bổ sung §6.2, §6.6. Cập nhật stage 90.92 (2026-02-16) và điều khoản AI của ISO.
- **BABOK:** rev 2 ghi Core Standard §1.5 ở "trang in 7–8"; đúng là chỉ trang in 7 (PDF 14), trang 8 đã là §1.6. Bổ sung purpose/inputs/outputs của đủ 30 task, BACCM, mục lục 50 technique.
- **FPT:** backend đã đổi từ `8ab8531` sang `f50b125`, nên bảng đối chiếu được cập nhật. Sửa 2 kết luận sai của rev 2: function details đã in "N/A"; Spine thực sự không có Message Type/Context. Đã render ảnh ERD (EMF). Xác minh ví dụ cafeteria là bộ mẫu COS của Karl Wiegers (Process Impact, 2002).

## Việc còn mở

- [ ] Visual QA: render template và một bản export để so pagination, hình, bảng (môi trường chưa có LibreOffice).
- [ ] Đọc thân chuẩn có license (ISO 29148 §4–§9, ISO 25010 §3.5–3.9, BABOK v3, IEEE 830) qua mentor/thư viện, rồi nâng evidence của các section `secondary_source`. Danh sách cụ thể ở section `…-GAPS` của từng file.
- [ ] Nhóm/mentor xác nhận quyền dùng các chunk ISO/IEEE trong RAG (`rag_allowed`).
- [ ] Nhóm duyệt 183 check `proposed_policy` và chọn tập check bật cho MVP rule engine.
- [ ] Chốt cách xử lý các khác biệt Export Word khi nộp báo cáo.
