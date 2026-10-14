---
source_id: iso-iec-25010
title: Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model
version: ISO/IEC 25010:2023, edition 2 (2023-11); đối chiếu ISO/IEC 25010:2011 (edition 1, withdrawn)
publisher: ISO / IEC (JTC 1/SC 7)
source_url: https://www.iso.org/standard/78176.html
checked_on: 2026-10-14
access: official_catalogue + official_preview_pages (iTeh sample, VDE preview) + secondary_sources
rights_status: summary_only_restricted_review_before_ai_ingestion
revision: 3
---

# ISO/IEC 25010 — Mô hình chất lượng sản phẩm (Product quality model)

Nguồn bổ trợ cho chương 4 "Non-Functional Requirements" của template SRS FPT (xem [fpt-capstone-srs-template.md](fpt-capstone-srs-template.md)). Đã đọc: trang catalogue ISO của 25010:2023 và 25019:2023 (tải bằng trình duyệt ngày 14/10/2026); preview chính thức gồm bìa, mục lục, Foreword, Introduction, Clause 1–2 và Clause 3.1–3.4.4 của bản IS 2023 ([iTeh sample, 11 trang PDF](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)), thêm 3.4.5–3.4.8 từ preview bản FDIS; preview của 25019:2023, 25023:2016, 25022:2016, 25002:2024 và 25010:2011. Clause 3.5–3.9 (reliability → safety), Clause 4–5 và Annex A–D của bản 2023 **chưa đọc phần thân**; định nghĩa các mục này lấy từ nguồn thứ cấp và được đánh dấu `secondary_source`. Số trang ghi "tr." là trang in; "PDF p." đếm từ 1 trong file preview tương ứng.

## Mục lục

- Nhận diện và bối cảnh: `ISO25010-EDITIONS`, `ISO25010-SQUARE-FAMILY`, `ISO25010-1-SCOPE`, `ISO25010-STRUCTURE-2023`
- Thay đổi 2011 → 2023: `ISO25010-2023-CHANGES`, `ISO25010-2011-MODEL`
- Mô hình 2023 (9 characteristic): `ISO25010-MODEL-OVERVIEW`, `ISO25010-3.1-FUNCTIONAL-SUITABILITY`, `ISO25010-3.2-PERFORMANCE-EFFICIENCY`, `ISO25010-3.3-COMPATIBILITY`, `ISO25010-3.4-INTERACTION-CAPABILITY`, `ISO25010-3.5-RELIABILITY`, `ISO25010-3.6-SECURITY`, `ISO25010-3.7-MAINTAINABILITY`, `ISO25010-3.8-FLEXIBILITY`, `ISO25010-3.9-SAFETY`
- Quality in use và đo lường: `ISO25010-QIU-25019`, `ISO25010-25023-MEASURES`
- Áp dụng: `ISO25010-NFR-WRITING`, `ISO25010-FPT-MAPPING`
- Tra cứu và rule: `ISO25010-POLICY`, `ISO25010-GLOSSARY`, `ISO25010-GAPS`

## ISO25010-EDITIONS — Edition, trạng thái và các chuẩn tách ra năm 2023

**Clause:** catalogue, Foreword · **Evidence:** `verified_public` · **Locator:** trang catalogue ISO 78176, 78177, 35747; Foreword 25010:2023 tr. iv (PDF p.4 preview iTeh) · **Nguồn:** [ISO 78176](https://www.iso.org/standard/78176.html), [ISO 78177](https://www.iso.org/standard/78177.html), [ISO 35747](https://www.iso.org/standard/35747.html)

| Tài liệu | Edition / ngày | Trạng thái tại 14/10/2026 | Ghi chú đã kiểm |
| --- | --- | --- | --- |
| ISO/IEC 9126-1:2001 | — | Bị thay bởi 25010:2011 | Foreword 25010:2011 ghi 25010:2011 thay 9126-1:2001 |
| ISO/IEC 25010:2011 | Edition 1 | Withdrawn | Gồm 2 mô hình: quality in use (5 characteristic) và product quality (8 characteristic) — Scope 2011 tr. 1 |
| **ISO/IEC 25010:2023** | **Edition 2, 2023-11** | **Published, stage 60.60**; 22 trang; JTC 1/SC 7; ICS 35.080 | Chỉ còn **product quality model**, 9 characteristic |
| ISO/IEC 25019:2023 | Edition 1, 2023-11 | Published, 31 trang | Quality-in-use model, 3 characteristic |
| ISO/IEC 25002:2024 | Edition 1, 2024-03 | (đọc preview) | Quality model overview and usage |
| ISO/IEC 25023:2016 | Edition 1, 2016-06 | Published nhưng stage **90.92 "to be revised"**; bản kế tiếp đang soạn là **ISO/IEC DIS 25000-23.2** "Part 23: Measurement of product quality" | Measures cho product quality theo mô hình **2011** |

Foreword 25010:2023 nêu rõ: edition 2 của 25010 **cùng với** edition 1 của 25002 và edition 1 của 25019 hủy và thay thế 25010:2011. Hệ quả cho FlintFlow: khi trích "ISO 25010" cho NFR phải ghi năm; tên "usability", "portability", "maturity" là thuật ngữ **2011**; "quality in use" không còn nằm trong 25010:2023 mà ở 25019:2023.

## ISO25010-SQUARE-FAMILY — Vị trí trong họ SQuaRE

**Clause:** Introduction · **Evidence:** `verified_public` · **Locator:** 25010:2023 tr. vi–viii (PDF p.6–8 preview VDE/iTeh) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)

SQuaRE (Systems and software Quality Requirements and Evaluation — Yêu cầu và đánh giá chất lượng hệ thống/phần mềm) là dải chuẩn ISO/IEC 25000–25099, chia theo division:

| Division | Vai trò (diễn giải) | Chuẩn liên quan tới FlintFlow |
| --- | --- | --- |
| 2500n — Quality management | Mô hình, thuật ngữ chung; hướng dẫn quản lý yêu cầu/đặc tả/đánh giá chất lượng | 25000 (Guide), 25001, **25002** (cách dùng quality model) |
| 2501n — Quality model | Các mô hình chất lượng chi tiết | **25010** (product), TS 25011 (IT service), 25012 (data), **25019** (quality-in-use) |
| 2502n — Quality measurement | Khung đo, định nghĩa toán học của measure, quality measure element (QME) | 25020, 25021, **25022** (đo quality in use), **25023** (đo product quality), 25024 (đo data quality) |
| 2503n — Quality requirements | Giúp đặc tả quality requirement dựa trên model + measure | 25030 |
| 2504n — Quality evaluation | Yêu cầu/hướng dẫn đánh giá sản phẩm | 25040, 25041 |
| 25050–25099 — Extension | RUSP, CIF usability report, chất lượng cho cloud, AI… | 25059 (AI) — ngoài phạm vi |

Introduction cũng nêu SQuaRE dùng cùng ISO/IEC/IEEE 12207 và 15288 (quy trình đặc tả, đánh giá quality requirement); 25030 mô tả cách dùng quality model cho quality requirement, 25040 cho đánh giá. Bộ standards-reference của FlintFlow chỉ có 25010 (file này); 25030/25040 là `pending`.

## ISO25010-1-SCOPE — Phạm vi và mục đích sử dụng mô hình

**Clause:** 1 · **Evidence:** `verified_normative` (đọc phần thân Clause 1 trong preview) · **Locator:** tr. 1 (PDF p.9 preview iTeh) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf); abstract trùng nội dung trên [ISO 78176](https://www.iso.org/standard/78176.html)

- Mô hình áp dụng cho **ICT product** và software product. "Product" theo NOTE 1 là ICT product thuộc một information system, gồm subsystem, software, firmware, hardware, data, hạ tầng truyền thông…
- Mô hình gồm **9 characteristic**, mỗi characteristic chia thành **subcharacteristic**; đây là mô hình tham chiếu để **đặc tả, đo và đánh giá** chất lượng.
- Người dùng mô hình: developer, acquirer, nhân sự QA/QC, evaluator độc lập.
- Các hoạt động hưởng lợi (Clause 1 liệt kê): elicit và định nghĩa requirement; **kiểm tra độ đầy đủ (comprehensiveness) của requirement definition**; xác định mục tiêu thiết kế; xác định mục tiêu test; tiêu chí QC; **acceptance criteria**; thiết lập measure cho các characteristic.
- Clause 2: không có normative reference. NOTE 2 trỏ Annex C về cách dùng mô hình để đo.

Áp dụng cho FlintFlow: hai hoạt động in đậm là căn cứ trực tiếp để rule engine dùng 9 characteristic làm **checklist độ phủ** chương 4 SRS và yêu cầu mỗi NFR có tiêu chí chấp nhận. Mô hình **không** quy định ngưỡng số; ngưỡng là quyết định của dự án (xem `ISO25010-25023-MEASURES`).

## ISO25010-STRUCTURE-2023 — Bố cục văn bản edition 2023

**Clause:** Contents · **Evidence:** `locator_only` (mục lục đã đọc; phần thân Clause 4–5, Annex chưa đọc) · **Locator:** tr. iii (PDF p.3 preview) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)

| Mục | Tiêu đề | Trang in |
| --- | --- | --- |
| 1 / 2 / 3 | Scope / Normative references / Terms and definitions (định nghĩa 9 characteristic và subcharacteristic) | 1 / 1 / 1–8 |
| 4 | Product quality model — 4.1 Product quality model structure; 4.2 Targets of the product quality model | 9; 9; 10 |
| 5 | Relationship to the quality-in-use model | 11 |
| Annex A (informative) | Comparison with the product quality model in ISO/IEC 25010:2011 | 13 |
| Annex B (informative) | Example of mapping to dependability | 15 |
| Annex C (informative) | Using the quality model for measurement | 17 |
| Annex D (informative) | Quality from different stakeholders' perspectives | 19 |
| Bibliography | — | 21 |

Khác bản 2011: năm 2011 định nghĩa nằm ở Clause 4 (4.1 quality in use tr. 8; 4.2 product quality tr. 10) và khung mô hình ở Clause 3; năm 2023 định nghĩa chuyển lên Clause 3, mỗi characteristic là một mục 3.x. Vì vậy locator "25010 §4.2.x" trong tài liệu cũ là đánh số **2011**.

## ISO25010-2023-CHANGES — Thay đổi chính 2011 → 2023

**Clause:** Foreword · **Evidence:** `verified_public` (Foreword trong preview chính thức) + `secondary_source` cho cột "Ghi chú áp dụng" · **Locator:** tr. iv–v (PDF p.4–5 preview iTeh/VDE) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf); Annex A (tr. 13) có bảng so sánh đầy đủ nhưng **chưa đọc**

Foreword liệt kê các thay đổi (diễn giải):

| # | Thay đổi | Ghi chú áp dụng cho SRS |
| --- | --- | --- |
| 1 | Chỉ giữ product quality model; phần còn lại chuyển sang 25002 (tổng quan, cách dùng) và 25019 (quality in use) | NFR "người dùng hài lòng", "giảm rủi ro kinh tế" thuộc quality in use → tra 25019 |
| 2 | Đối tượng mở rộng ra nhiều loại ICT product và information system | Hạ tầng, data, phần cứng cũng là đối tượng NFR |
| 3 | Thêm characteristic **Safety** với 5 subcharacteristic: operational constraint, risk identification, fail safe, hazard warning, safe integration | Phần mềm web thông thường thường ghi "không áp dụng" có lý do |
| 4 | **Usability → Interaction capability**; **Portability → Flexibility** | FPT 4.2.1 dùng tên cũ "Usability" — vẫn hợp lệ nếu ghi rõ ánh xạ |
| 5 | Thêm subcharacteristic: **inclusivity**, **self-descriptiveness** (interaction capability), **resistance** (security), **scalability** (flexibility) | Scalability trước đây hay bị viết lẫn vào performance |
| 6 | **User interface aesthetics → user engagement**; **maturity → faultlessness** | MTBF/failure rate (25023 xếp dưới maturity) nay ứng với faultlessness |
| 7 | **Accessibility** tách thành **inclusivity** và **user assistance** | NFR WCAG/khuyết tật → user assistance; đa ngôn ngữ, đa văn hóa → inclusivity |
| 8 | Nhiều tên/định nghĩa được chỉnh cho chính xác hơn | Định nghĩa 2023 dùng mẫu "capability of a product to…" thay cho "degree to which…" của 2011 (quan sát từ 3.1–3.4 đã đọc) |

Quan sát thêm (đọc trực tiếp 3.4 Note 1–2): interaction capability tập trung vào **thuộc tính sản phẩm** cho phép tương tác; còn **usability** theo 25019 là **kết quả sử dụng** (effectiveness, efficiency, satisfaction trong context of use). Interaction capability là điều kiện tiên quyết của usability. Vì vậy một NFR "người dùng mới hoàn thành đặt hàng trong 3 phút" là usability (quality in use) đo trên người dùng thật; "mọi trường nhập có nhãn và gợi ý định dạng" là interaction capability (thuộc tính sản phẩm).

## ISO25010-2011-MODEL — Mô hình 2011 (để đọc tài liệu cũ và template FPT)

**Clause:** 25010:2011 Clause 1, Introduction; cấu trúc subcharacteristic theo mục lục 25023:2016 và 25022:2016 · **Evidence:** `verified_public` · **Locator:** 25010:2011 tr. v, 1; 25023:2016 tr. iii–iv (PDF p.3–4 preview VDE); 25022:2016 tr. iii (PDF p.3 preview VDE) · **Nguồn:** [preview VDE 25010:2011](https://www.vde-verlag.de/iec-normen/preview-pdf/info_isoiec25010%7Bed1.0%7Den.pdf), [preview iTeh 25023:2016](https://cdn.standards.iteh.ai/samples/35747/34b91bc957f647ce8bbb2093907d7bc0/ISO-IEC-25023-2016.pdf), [preview VDE 25022:2016](https://www.vde-verlag.de/iec-normen/preview-pdf/info_isoiec25022%7Bed1.0%7Den.pdf)

Product quality model 2011 (8 characteristic; cấu trúc lấy từ mục lục Clause 8.2–8.9 của 25023:2016, vốn liệt kê measure "theo thứ tự trong 25010"):

| Characteristic 2011 | Subcharacteristic 2011 | Tương ứng 2023 |
| --- | --- | --- |
| Functional suitability | completeness, correctness, appropriateness | Giữ nguyên |
| Performance efficiency | time behaviour, resource utilization, capacity | Giữ nguyên |
| Compatibility | co-existence, interoperability | Giữ nguyên |
| **Usability** | appropriateness recognizability, learnability, operability, user error protection, **user interface aesthetics**, **accessibility** | Interaction capability; aesthetics → user engagement; accessibility → inclusivity + user assistance; thêm self-descriptiveness |
| Reliability | **maturity**, availability, fault tolerance, recoverability | maturity → faultlessness |
| Security | confidentiality, integrity, non-repudiation, accountability, authenticity | Thêm resistance |
| Maintainability | modularity, reusability, analysability, modifiability, testability | Giữ nguyên (theo nguồn thứ cấp) |
| **Portability** | adaptability, installability, replaceability | Flexibility; thêm scalability |
| — | — | Thêm Safety |

Quality in use model 2011 (5 characteristic, theo Clause 1 và mục lục 25022:2016): effectiveness; efficiency; satisfaction (usefulness, trust, pleasure, comfort); freedom from risk (economic, health and safety, environmental risk mitigation); context coverage (context completeness, flexibility). Bản 2011 cũng ghi so với 9126-1: thêm security, compatibility thành characteristic; thêm functional completeness, capacity, user error protection, accessibility, availability, modularity, reusability; bỏ các subcharacteristic "compliance".

## ISO25010-MODEL-OVERVIEW — Tổng quan 9 characteristic (2023)

**Clause:** 1; 3.1–3.9 · **Evidence:** `verified_normative` cho số lượng 9 characteristic (Clause 1) và 3.1–3.4; `secondary_source` cho danh sách subcharacteristic 3.5–3.9 (đối chiếu 2 nguồn: iso25000.com, arc42) · **Locator:** tr. 1–8 · **Nguồn:** [preview iTeh](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf); [iso25000.com — ISO/IEC 25010 (trang 1–2)](https://iso25000.com/en/iso-25000-standards/iso-25010); [arc42 Quality — ISO 25010](https://quality.arc42.org/standards/iso-25010)

| Clause | Characteristic (Việt) | Subcharacteristic | Số |
| --- | --- | --- | --- |
| 3.1 | Functional suitability (phù hợp chức năng) | functional completeness, functional correctness, functional appropriateness | 3 |
| 3.2 | Performance efficiency (hiệu quả hiệu năng) | time behaviour, resource utilization, capacity | 3 |
| 3.3 | Compatibility (tương thích) | co-existence, interoperability | 2 |
| 3.4 | Interaction capability (khả năng tương tác) | appropriateness recognizability, learnability, operability, user error protection, user engagement, inclusivity, user assistance, self-descriptiveness | 8 |
| 3.5* | Reliability (độ tin cậy) | faultlessness, availability, fault tolerance, recoverability | 4 |
| 3.6* | Security (bảo mật) | confidentiality, integrity, non-repudiation, accountability, authenticity, resistance | 6 |
| 3.7* | Maintainability (khả năng bảo trì) | modularity, reusability, analysability, modifiability, testability | 5 |
| 3.8 | Flexibility (linh hoạt) | adaptability, scalability, installability, replaceability | 4 |
| 3.9* | Safety (an toàn) | operational constraint, risk identification, fail safe, hazard warning, safe integration | 5 |

\* Số clause 3.5–3.7 và 3.9 **suy ra** từ thứ tự trong Foreword/nguồn thứ cấp; 3.8 = flexibility và 3.8.1 = adaptability được xác nhận qua tham chiếu chéo trong Note 3 của 3.4.7 (preview FDIS). Thứ tự subcharacteristic 3.5–3.9 theo iso25000.com. Tổng 40 subcharacteristic.

Lưu ý khác biệt nguồn thứ cấp: arc42 xếp "testability" dưới Flexibility; iso25000.com xếp dưới Maintainability (như 2011). Foreword 2023 không nêu việc di chuyển testability, nên file này theo iso25000.com và ghi điểm này vào `ISO25010-GAPS`.

## ISO25010-3.1-FUNCTIONAL-SUITABILITY — Functional suitability

**Clause:** 3.1, 3.1.1–3.1.3 · **Evidence:** `verified_normative` · **Locator:** tr. 2 (PDF p.10 preview iTeh) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)

Định nghĩa (diễn giải): khả năng sản phẩm cung cấp chức năng đáp ứng nhu cầu nêu rõ và ngầm định (stated and implied needs) của người dùng dự kiến khi dùng trong điều kiện xác định. Note 1: không chỉ đáp ứng nhu cầu mà còn cả functional specification.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016) |
| --- | --- | --- | --- |
| 3.1.1 Functional completeness | Bộ chức năng bao phủ mọi tác vụ đã đặc tả và mục tiêu người dùng | 100% UC mức "Must" trong §2.2 có function tương ứng ở §3 trước release 1 | Functional coverage (§8.2.1) |
| 3.1.2 Functional correctness | Cho kết quả chính xác; Note 1: precision là một thuộc tính của correctness | Tổng điểm hiển thị khớp công thức BR-05 cho 100% bộ 200 test case chuẩn, sai số làm tròn ≤ 0,01 | Functional correctness (§8.2.2) |
| 3.1.3 Functional appropriateness | Chức năng giúp hoàn thành tác vụ; ví dụ của chuẩn: đủ bước cần thiết, không bước thừa; tương ứng "suitability for the task" của ISO 9241-110 | Luồng "Nộp bài" hoàn tất trong ≤ 4 bước tính từ màn danh sách bài tập | Functional appropriateness of usage objective / of system (§8.2.3, tên theo Karnouskos et al. 2018) |

Lỗi thường gặp: viết lại functional requirement trong chương 4 ("hệ thống phải cho phép đăng nhập"). Functional suitability ở NFR chỉ nên nêu **mức độ** đầy đủ/chính xác (tỉ lệ, sai số), còn hành vi cụ thể thuộc chương 3.

## ISO25010-3.2-PERFORMANCE-EFFICIENCY — Performance efficiency

**Clause:** 3.2, 3.2.1–3.2.3 · **Evidence:** `verified_normative` · **Locator:** tr. 2 (PDF p.10) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)

Định nghĩa (diễn giải): khả năng thực hiện chức năng trong tham số thời gian và throughput xác định và dùng tài nguyên hiệu quả trong điều kiện xác định. Note: tài nguyên gồm CPU, bộ nhớ, lưu trữ, thiết bị mạng; có thể gồm phần mềm khác, cấu hình, năng lượng, vật tư.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.3) |
| --- | --- | --- | --- |
| 3.2.1 Time behaviour | Response time và throughput khi thực hiện chức năng đạt yêu cầu | p95 thời gian trả kết quả tra cứu ≤ 2 s với 100 người dùng đồng thời, dữ liệu 50 000 bản ghi, môi trường staging 2 vCPU/4 GB | Mean response time, response time adequacy, mean turnaround time, turnaround time adequacy, mean throughput (§8.3.1) |
| 3.2.2 Resource utilization | Dùng không quá lượng tài nguyên quy định | Worker sinh tài liệu dùng ≤ 512 MB RAM trung bình khi xử lý 1 SRS 100 trang | Mean processor / memory / I/O devices utilization, bandwidth utilization (§8.3.2) |
| 3.2.3 Capacity | Giới hạn tối đa của một tham số đạt yêu cầu; Note: số item lưu, số người dùng đồng thời, băng thông, throughput giao dịch, kích thước CSDL | Hỗ trợ ≥ 500 phiên đồng thời với tỉ lệ lỗi HTTP 5xx < 1% | Transaction processing capacity, user access capacity, user access increase adequacy (§8.3.3) |

Ghi chú: chuẩn tách "nhanh" (time behaviour), "tốn ít" (resource utilization) và "chứa được bao nhiêu" (capacity). Khả năng **co giãn** khi tải tăng/giảm thuộc **flexibility → scalability** (3.8), không thuộc capacity.

## ISO25010-3.3-COMPATIBILITY — Compatibility

**Clause:** 3.3, 3.3.1–3.3.2 · **Evidence:** `verified_normative` · **Locator:** tr. 2–3 (PDF p.10–11) · **Nguồn:** [preview iTeh 25010:2023](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf)

Định nghĩa (diễn giải): khả năng trao đổi thông tin với sản phẩm khác và/hoặc thực hiện chức năng khi dùng chung môi trường, tài nguyên.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.4) |
| --- | --- | --- | --- |
| 3.3.1 Co-existence | Hoạt động hiệu quả khi chia sẻ môi trường/tài nguyên mà không gây hại sản phẩm khác | Khi chạy cùng máy chủ với dịch vụ X, latency p95 của X tăng không quá 10% | Co-existence measures (§8.4.1; tên measure cụ thể chưa đối chiếu) |
| 3.3.2 Interoperability | Trao đổi thông tin và dùng được thông tin đã trao đổi; Note: thông tin là dữ liệu có nghĩa, trao đổi gồm cả biến đổi dữ liệu | Xuất SRS sang .docx mở được trong Word 2016+ và LibreOffice 7+ không lỗi cấu trúc với 100% file trong bộ mẫu 20 file | Data formats exchangeability, data exchange protocol sufficiency, external interface adequacy (§8.4.2) |

Liên hệ FPT: interoperability thường được mô tả ở FPT §4.1 External Interfaces (giao thức, định dạng); NFR chất lượng tương ứng đặt ở §4.2.4.

## ISO25010-3.4-INTERACTION-CAPABILITY — Interaction capability (thay Usability)

**Clause:** 3.4, 3.4.1–3.4.8 · **Evidence:** `verified_normative` (3.4–3.4.4, preview IS) + `verified_public` (3.4.5–3.4.8, preview bản FDIS; tên và định nghĩa khớp iso25000.com) · **Locator:** IS tr. 3 (PDF p.11); FDIS tr. 4 (PDF p.12) · **Nguồn:** [preview iTeh IS](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf), [preview iTeh FDIS](https://cdn.standards.iteh.ai/samples/78176/da352588834f46f2a1235f00d1fc23db/ISO-IEC-FDIS-25010.pdf)

Định nghĩa (diễn giải): khả năng sản phẩm được người dùng xác định tương tác, trao đổi thông tin qua user interface để hoàn thành tác vụ. Note 1–2: tập trung vào thuộc tính cho phép tương tác; usability (25019) là kết quả sử dụng; interaction capability là tiền đề của usability. Note 3: "interaction" theo ISO TR 25060.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.5, mô hình 2011) |
| --- | --- | --- | --- |
| 3.4.1 Appropriateness recognizability | Người dùng nhận ra sản phẩm phù hợp nhu cầu (qua ấn tượng ban đầu, demo, tutorial, trang chủ) | Trang chủ nêu 3 chức năng chính; ≥ 80% người thử (n ≥ 10) mô tả đúng mục đích sản phẩm sau 30 s xem | Description completeness, demonstration coverage, entry point self-descriptiveness (§8.5.1) |
| 3.4.2 Learnability | Người dùng xác định học được chức năng xác định trong thời gian xác định | Sinh viên chưa dùng hệ thống tạo được project và sinh SRS đầu tiên trong ≤ 15 phút, không cần trợ giúp | User guidance completeness, entry fields defaults, error messages understandability, self-explanatory user interface (§8.5.2) |
| 3.4.3 Operability | Có chức năng/thuộc tính giúp dễ vận hành, điều khiển; liên quan controllability, error robustness của ISO 9241-110 | Mọi thao tác xóa có undo trong 10 s; 100% thông báo lỗi chỉ ra trường lỗi | Operational consistency, message clarity, functional customizability, UI customizability, monitoring capability, undo capability, … (§8.5.3) |
| 3.4.4 User error protection | Ngăn lỗi thao tác | Form nộp chặn file > 20 MB và sai định dạng trước khi upload; 0 trường hợp mất dữ liệu do nhập sai trong UAT | Avoidance of user operation error, user entry error correction, user error recoverability (§8.5.4) |
| 3.4.5 User engagement | Trình bày chức năng/thông tin hấp dẫn, khuyến khích tương tác tiếp; Note: màu sắc hài hòa, UI trực quan | Điểm UEQ/SUS khảo sát cuối sprint ≥ 70 (thang SUS) với ≥ 15 người | Appearance aesthetics of UI (§8.5.5, tên 2011 "UI aesthetics") |
| 3.4.6 Inclusivity | Dùng được bởi người có nền tảng khác nhau (tuổi, khả năng, văn hóa, ngôn ngữ, giới, kinh tế, học vấn, địa lý…) | Toàn bộ UI có tiếng Việt và tiếng Anh; chuyển ngôn ngữ không cần tải lại trang | Supported languages adequacy (§8.5.6, 2011 xếp dưới accessibility) |
| 3.4.7 User assistance | Dùng được bởi người có dải đặc điểm, năng lực rộng nhất để đạt mục tiêu trong context of use; Note: khác biệt ngôn ngữ, khuyết tật thị giác/thính giác/vận động | Các màn chính đạt WCAG 2.1 mức AA theo công cụ kiểm tự động, 0 lỗi mức A | Accessibility for users with disabilities (§8.5.6) |
| 3.4.8 Self-descriptiveness | Hiển thị thông tin cần thiết đúng chỗ để khả năng và cách dùng hiển nhiên, không cần tương tác thừa hay tài liệu ngoài | Mỗi bước wizard có mô tả ≤ 2 câu và ví dụ; ≥ 90% người thử hoàn tất wizard không mở trang trợ giúp | Chưa có measure riêng trong 25023:2016 (subcharacteristic mới) |

## ISO25010-3.5-RELIABILITY — Reliability

**Clause:** 3.5* (suy ra) · **Evidence:** `secondary_source` (đối chiếu 2 nguồn: iso25000.com, arc42; khớp Foreword về faultlessness) · **Locator:** tr. 3–8 (khoảng Clause 3, số trang cụ thể pending) · **Nguồn:** [iso25000.com trang 2](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=5), [arc42](https://quality.arc42.org/standards/iso-25010)

Định nghĩa (diễn giải theo iso25000.com): mức hệ thống/sản phẩm/thành phần thực hiện chức năng xác định trong điều kiện xác định trong một khoảng thời gian xác định.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.6) |
| --- | --- | --- | --- |
| Faultlessness (2011: maturity) | Thực hiện chức năng không lỗi khi vận hành bình thường | MTBF của dịch vụ sinh tài liệu ≥ 720 giờ trong 3 tháng chạy thử | MTBF, failure rate, fault correction, test coverage (§8.6.1 "maturity") |
| Availability | Vận hành và truy cập được khi cần | Uptime ≥ 99,5%/tháng trong khung 7:00–23:00 (GMT+7), không tính bảo trì đã báo trước ≥ 24 h | System availability, mean down time (§8.6.2) |
| Fault tolerance | Hoạt động như dự kiến dù có lỗi phần cứng/phần mềm | Khi dịch vụ LLM ngoài trả lỗi/timeout, hệ thống giữ bản nháp và cho thử lại; 0 mất dữ liệu trong 50 lần tiêm lỗi | Failure avoidance, redundancy of components, mean fault notification time (§8.6.3) |
| Recoverability | Sau gián đoạn/hỏng, khôi phục dữ liệu bị ảnh hưởng và trạng thái mong muốn | RTO ≤ 4 h, RPO ≤ 24 h; backup hằng ngày được khôi phục thử mỗi tháng | Mean recovery time, backup data completeness (§8.6.4) |

Liên hệ FPT §4.2.2: template gợi ý availability, MTBF, MTTR, accuracy, defect rate theo mức. Accuracy về kết quả tính toán thuộc **functional correctness** (3.1.2) hơn là reliability; defect rate/KLOC là chỉ số gần faultlessness (xem `ISO25010-FPT-MAPPING`).

## ISO25010-3.6-SECURITY — Security

**Clause:** 3.6* (suy ra) · **Evidence:** `secondary_source` (đối chiếu 2 nguồn; "resistance" khớp Foreword) · **Locator:** pending · **Nguồn:** [iso25000.com trang 2](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=5), [arc42](https://quality.arc42.org/standards/iso-25010)

Định nghĩa (diễn giải): mức sản phẩm chống lại mẫu tấn công của tác nhân độc hại và bảo vệ thông tin, dữ liệu để người/hệ thống khác có quyền truy cập phù hợp với loại và mức ủy quyền.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.7) |
| --- | --- | --- | --- |
| Confidentiality | Dữ liệu chỉ truy cập được bởi người được phép | 100% API trả dữ liệu project kiểm quyền thành viên; test phân quyền 0 lỗi IDOR | Access controllability, data encryption correctness, strength of cryptographic algorithms (§8.7.1) |
| Integrity | Trạng thái hệ thống, dữ liệu được bảo vệ khỏi sửa/xóa trái phép do cố ý hoặc lỗi | Mọi thay đổi baseline SRS ghi phiên bản, không ghi đè; checksum khớp 100% khi khôi phục | Data integrity, internal data corruption prevention, buffer overflow prevention (§8.7.2) |
| Non-repudiation | Chứng minh được hành động/sự kiện đã xảy ra | Phê duyệt baseline lưu người duyệt, thời điểm, hash nội dung, không sửa được | Digital signature usage (§8.7.3) |
| Accountability | Truy vết hành động về đúng thực thể | Audit log mọi thao tác ghi, giữ ≥ 180 ngày | User audit trail completeness, system log retention (§8.7.4) |
| Authenticity | Chứng minh danh tính chủ thể/tài nguyên đúng như khai báo | Đăng nhập qua SSO; khóa tài khoản 15 phút sau 5 lần sai | Authentication mechanism sufficiency, authentication rules conformity (§8.7.5) |
| Resistance (mới 2023) | Duy trì hoạt động khi đang bị tấn công | Dưới 1 000 req/s từ một IP, rate limit giữ p95 người dùng hợp lệ ≤ 3 s | Chưa có trong 25023:2016 |

## ISO25010-3.7-MAINTAINABILITY — Maintainability

**Clause:** 3.7* (suy ra) · **Evidence:** `secondary_source` (iso25000.com; arc42 khác ở testability — xem GAPS) · **Locator:** pending · **Nguồn:** [iso25000.com trang 2](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=5)

Định nghĩa (diễn giải): mức hiệu lực và hiệu quả khi sửa sản phẩm để cải tiến, sửa lỗi hoặc thích nghi với thay đổi môi trường và yêu cầu.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.8) |
| --- | --- | --- | --- |
| Modularity | Gồm thành phần rời rạc, đổi một phần ít ảnh hưởng phần khác | Không có import vòng giữa các module domain (kiểm bằng công cụ phân tích phụ thuộc) | Coupling of components, cyclomatic complexity adequacy (§8.8.1) |
| Reusability | Dùng làm tài sản trong nhiều hệ thống hoặc để xây tài sản khác | Thư viện render diagram dùng chung cho Export Word và UI | Reusability of assets, coding rules conformity (§8.8.2) |
| Analysability | Đánh giá tác động thay đổi, chẩn đoán lỗi/nguyên nhân, tìm phần cần sửa | 100% lỗi 5xx có correlation ID tra được trong log | System log completeness, diagnosis function effectiveness/sufficiency (§8.8.3) |
| Modifiability | Sửa được hiệu quả mà không gây lỗi hay giảm chất lượng | Thêm một loại diagram mới không sửa quá 3 module hiện có | Modification efficiency, modification correctness, modification capability (§8.8.4) |
| Testability | Đặt được tiêu chí test và chạy test để kiểm tiêu chí | Line coverage module rule engine ≥ 80% trong CI | Test function completeness, autonomous testability, test restartability (§8.8.5) |

## ISO25010-3.8-FLEXIBILITY — Flexibility (thay Portability)

**Clause:** 3.8 (xác nhận qua tham chiếu chéo trong FDIS 3.4.7 Note 3), 3.8.1 adaptability · **Evidence:** `secondary_source` (định nghĩa, đối chiếu 2 nguồn) + `verified_public` (số clause) · **Locator:** FDIS tr. 4 (PDF p.12) cho số clause · **Nguồn:** [iso25000.com trang 2](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=5), [arc42](https://quality.arc42.org/standards/iso-25010), [preview FDIS](https://cdn.standards.iteh.ai/samples/78176/da352588834f46f2a1235f00d1fc23db/ISO-IEC-FDIS-25010.pdf)

Định nghĩa (diễn giải): mức sản phẩm thích nghi được với thay đổi về requirement, context of use hoặc môi trường hệ thống.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR đo được (nhóm tự đặt) | Measure gợi ý (25023:2016 §8.9 "portability") |
| --- | --- | --- | --- |
| 3.8.1 Adaptability | Thích nghi/chuyển được sang phần cứng, phần mềm, môi trường vận hành/sử dụng khác | Frontend chạy đúng trên Chrome, Edge, Firefox 2 phiên bản mới nhất và màn hình rộng ≥ 360 px | Hardware / system software / operational environment adaptability (§8.9.1) |
| Scalability (mới 2023) | Xử lý được tải tăng/giảm hoặc điều chỉnh capacity theo biến động | Khi tải tăng từ 100 lên 1 000 người dùng, thêm instance tự động trong ≤ 5 phút, p95 ≤ 3 s | Chưa có trong 25023:2016 |
| Installability | Cài đặt/gỡ thành công trong môi trường xác định | Dựng môi trường dev bằng một lệnh docker compose trong ≤ 15 phút | Installation time efficiency, ease of installation (§8.9.2) |
| Replaceability | Thay thế được sản phẩm khác cùng mục đích trong cùng môi trường | Đổi nhà cung cấp LLM chỉ cần đổi cấu hình adapter, không sửa code nghiệp vụ | Usage similarity, product quality equivalence, functional inclusiveness (§8.9.3) |

## ISO25010-3.9-SAFETY — Safety (mới 2023)

**Clause:** 3.9* (suy ra) · **Evidence:** `verified_public` (tên 5 subcharacteristic trong Foreword) + `secondary_source` (định nghĩa, iso25000.com) · **Locator:** Foreword tr. iv; định nghĩa pending · **Nguồn:** [preview iTeh](https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf), [iso25000.com trang 2](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=5)

Định nghĩa (diễn giải): mức sản phẩm, trong điều kiện xác định, tránh trạng thái gây nguy hiểm cho tính mạng, sức khỏe, tài sản hoặc môi trường.

| Subcharacteristic | Định nghĩa diễn giải | Ví dụ NFR (nhóm tự đặt) |
| --- | --- | --- |
| Operational constraint | Giới hạn hoạt động trong tham số/trạng thái an toàn khi gặp nguy cơ | Hệ thống điều khiển ngừng lệnh nếu cảm biến vượt ngưỡng |
| Risk identification | Nhận diện chuỗi sự kiện/thao tác có thể gây rủi ro không chấp nhận được | Cảnh báo khi người dùng thao tác xóa hàng loạt dữ liệu không khôi phục được |
| Fail safe | Tự chuyển sang chế độ an toàn hoặc trạng thái an toàn khi hỏng | Khi mất kết nối CSDL, chuyển chế độ chỉ đọc |
| Hazard warning | Cảnh báo rủi ro đủ sớm để phản ứng kịp | Thông báo trước khi hết hạn nộp |
| Safe integration | Giữ an toàn trong và sau khi tích hợp thành phần khác | Plugin mới chạy sandbox, không truy cập dữ liệu ngoài phạm vi |

Với hệ thống web như FlintFlow, Safety thường "không áp dụng" theo nghĩa an toàn con người; ghi rõ lý do thay vì bỏ trống. Lưu ý: 25023:2016 không có measure cho Safety; 25023:2016 §6.2 NOTE 1 trỏ sang chuẩn của IEC TC 65 và ISO/IEC JTC 1/SC 27 cho đo safety/security chuyên sâu.

## ISO25010-QIU-25019 — Quality in use: tách sang ISO/IEC 25019:2023

**Clause:** 25019:2023 Foreword, 1, 3.1.15; 25010:2023 3.4 Note 1, Clause 5 · **Evidence:** `verified_public` (catalogue, Foreword, Scope, định nghĩa 3.1.15 trong preview) + `secondary_source` cho danh sách subcharacteristic (đối chiếu 2 nguồn) · **Locator:** 25019 tr. iv, 1, 4 (PDF p.4, 9, 12 preview iTeh); mục 3.2 tr. 7 chưa đọc · **Nguồn:** [ISO 78177](https://www.iso.org/standard/78177.html), [preview iTeh 25019](https://cdn.standards.iteh.ai/samples/78177/7c8fe3ed9fdc4c06a8c9a14a8cdae2ec/ISO-IEC-25019-2023.pdf), [arc42 — ISO 25019](https://quality.arc42.org/standards/iso-25019), [O'Donoghue et al., arXiv:2506.03507 (2025), §IV-C](https://arxiv.org/html/2506.03507v1)

Đã xác minh (bản chính thức): 25019:2023 định nghĩa quality-in-use model gồm **3 characteristic** chia thành sub-characteristic, ảnh hưởng tới stakeholder khi sản phẩm được dùng trong context of use xác định. Context of use là **điều kiện tiên quyết**; context đổi thì phải đặc tả lại. Foreword: phân loại stakeholder chịu ảnh hưởng; mối quan tâm của từng stakeholder gộp thành characteristic; **bỏ "context coverage"** (characteristic của 2011). Định nghĩa 3.1.15 (diễn giải): quality-in-use là mức hệ thống/sản phẩm, khi dùng trong context of use xác định, thỏa hoặc vượt nhu cầu stakeholder để đạt mục tiêu/kết quả có lợi; Note 3: với direct user thể hiện là "effect", với stakeholder khác là "influence".

Danh sách characteristic/sub-characteristic (thứ cấp, 2 nguồn khớp nhau):

| Characteristic | Sub-characteristic | Ví dụ NFR (nhóm tự đặt) |
| --- | --- | --- |
| Beneficialness (lợi ích) | usability, accessibility, suitability | "≥ 85% sinh viên hoàn tất SRS hợp lệ đầu tiên trong buổi thử 60 phút" (usability: effectiveness, efficiency, satisfaction) |
| Freedom from risk (không rủi ro) | freedom from economic risk; environmental and societal risk; health risk; human life risk | "Không có sự cố mất dữ liệu đồ án trong học kỳ" |
| Acceptability (chấp nhận) | experience, trustworthiness, compliance | "≥ 70% người dùng khảo sát tin tưởng nội dung AI sau review" |

Quan hệ với 25010: 25010:2023 Clause 5 "Relationship to the quality-in-use model" (tr. 11, chưa đọc). Theo 3.4 Note 1–2 (đã đọc): product quality (vd interaction capability) là tiền đề, quality in use là kết quả. Đo quality in use: 25022:2016 vẫn theo mô hình 2011 (effectiveness, efficiency, satisfaction, freedom from risk, context coverage).

Áp dụng: FPT §4.2.1 "Usability" có gợi ý "thời gian đào tạo", "thời gian tác vụ" — đây là chỉ số đo trên người dùng thật, gần **usability trong quality in use**; còn thuộc tính UI (nhãn, gợi ý, undo) là **interaction capability**. Rule engine chấp nhận cả hai dưới 4.2.1 nhưng nên gắn nhãn đúng mô hình.

## ISO25010-25023-MEASURES — Đo lường theo ISO/IEC 25023:2016

**Clause:** 25023:2016 Clause 1, 2, 6.2, 7, 8.1 · **Evidence:** `verified_public` (đọc phần thân Clause 1–8.1 trong preview iTeh) + `secondary_source` cho tên measure trong §8.x (Karnouskos et al. 2018) · **Locator:** tr. 1–7 (PDF p.9–15 preview iTeh 25023) · **Nguồn:** [preview iTeh 25023:2016](https://cdn.standards.iteh.ai/samples/35747/34b91bc957f647ce8bbb2093907d7bc0/ISO-IEC-25023-2016.pdf); [Karnouskos, Sinha, Leitão, Ribeiro, Strasser — "The Applicability of ISO/IEC 25023 Measures…", IECON 2018 (arXiv:2108.02921)](https://arxiv.org/abs/2108.02921)

Điểm chính đã đọc (diễn giải):

- **Phạm vi:** định nghĩa quality measure để đánh giá định lượng các characteristic/subcharacteristic **của 25010** (normative reference là **25010:2011**). 25023:2016 thay ISO/IEC TR 9126-2 và TR 9126-3.
- **Không gán ngưỡng:** chuẩn **không** gán khoảng giá trị cho mức xếp hạng hay mức tuân thủ, vì ngưỡng phụ thuộc loại hệ thống, integrity level, nhu cầu người dùng. ⇒ Ngưỡng NFR là quyết định của dự án.
- **Conformance (Clause 2):** đặc tả quality requirement tuân thủ 25023 thì **shall** chọn characteristic/subcharacteristic theo 25010; với mỗi cái đã chọn **should** dùng mọi measure Generic (G), loại bỏ phải có lý do; Specific (S) là tùy chọn; sửa measure phải ghi lý do; measure bổ sung định nghĩa theo 25021.
- **Định dạng ID (Clause 7):** ID gồm (1) mã chữ: chữ hoa cho characteristic + chữ hoa và thường cho subcharacteristic, vd **"PTb"** = Performance efficiency / Time behaviour; (2) số thứ tự; (3) **G** (Generic) hoặc **S** (Specific). Mỗi measure có Name, Description, Measurement function.
- **Chuẩn hóa:** phần lớn measure có giá trị trong khoảng 0,0–1,0, gần 1,0 tốt hơn; ngoại lệ có NOTE. Một số measure tính tương đối với **target value** lấy từ requirement (NOTE 2 §6.2).
- **Diễn giải (NOTE 3 §6.2):** measure như mean response time khó hiểu khi đứng riêng; nên so với **conformance** (yêu cầu cụ thể, ví dụ của chuẩn: response time tối đa 0,5 s) hoặc **benchmark** (không chậm hơn hệ thống cũ).
- **Internal / external / quality in use:** internal measure đo sản phẩm trung gian không thực thi (requirement, design, code) bằng review/inspection/công cụ; external đo hành vi khi chạy; quality in use đo khi dùng thật hoặc mô phỏng (§6.2).

Ánh xạ khi dùng với 25010:2023 (nhóm đề xuất): dùng §8.5 cho interaction capability (aesthetics → user engagement; accessibility → user assistance + inclusivity), §8.6.1 maturity cho faultlessness, §8.9 cho flexibility. Self-descriptiveness, resistance, scalability, safety **chưa có** measure trong 25023:2016 → dự án tự định nghĩa measure và ghi lý do (theo Clause 2 e). Bản kế tiếp ISO/IEC DIS 25000-23.2 có thể đổi tên/ID; chưa đọc.

## ISO25010-NFR-WRITING — Cách viết NFR theo mô hình (khuôn nhóm đề xuất)

**Clause:** dựa trên 25010:2023 Clause 1 và 25023:2016 Clause 2, 6.2 · **Evidence:** `proposed_policy` · **Locator:** — · **Nguồn:** đề xuất của nhóm dựa trên các section trên

Một NFR đo được nên có 7 trường. Ví dụ (nhóm tự đặt) cho FlintFlow:

| Trường | Ý nghĩa | Ví dụ |
| --- | --- | --- |
| ID | Định danh ổn định | `NFR-PERF-01` |
| Characteristic / subcharacteristic | Theo 25010:2023 (ghi năm) | Performance efficiency / time behaviour |
| Đối tượng | Chức năng/UC/màn/API cụ thể | UC-05 "Generate SRS", API `POST /projects/{id}/srs` |
| Measure | Đại lượng và cách tính; tham chiếu 25023 nếu có | Thời gian từ lúc gửi tới khi nhận trạng thái "done", p95 |
| Ngưỡng + đơn vị | Giá trị chấp nhận | ≤ 60 s |
| Điều kiện đo | Tải, dữ liệu, môi trường, khung giờ | 20 yêu cầu đồng thời, brief ≤ 5 000 từ, staging 2 vCPU/4 GB |
| Phương pháp kiểm chứng | test / analysis / inspection / demonstration | Load test k6, 3 lần chạy, lấy kết quả xấu nhất |

Câu hoàn chỉnh: "NFR-PERF-01 (25010:2023 time behaviour): Với 20 yêu cầu đồng thời và brief ≤ 5 000 từ trên môi trường staging 2 vCPU/4 GB, p95 thời gian sinh SRS của UC-05 phải ≤ 60 s, kiểm bằng load test."

Từ cấm/cần làm rõ (nhóm đề xuất, khớp tinh thần "verifiable" của 29148/IEEE 830): nhanh, mượt, thân thiện, dễ dùng, an toàn, ổn định, hiện đại, tối ưu, "càng… càng tốt", "khoảng", "tùy", "hầu hết" — chỉ chấp nhận khi đi kèm số và điều kiện.

## ISO25010-FPT-MAPPING — Ánh xạ sang chương 4 template FPT

**Clause:** FPT II.4.1, II.4.2.1–II.4.2.4 ↔ 25010:2023 3.1–3.9, 25019 · **Evidence:** `proposed_policy` (ánh xạ do nhóm đề xuất; nội dung FPT là `verified_supplied` trong file FPT) · **Locator:** FPT P083–P105 · **Nguồn:** [fpt-capstone-srs-template.md](fpt-capstone-srs-template.md) (`FPT-4.2.1-USABILITY`, `FPT-4.2.2-RELIABILITY`, `FPT-4.2.3-PERFORMANCE`, `FPT-4.2.4-OPEN-ATTRIBUTE`)

Bối cảnh: file FPT ghi nhận gợi ý chỉ tiêu 4.2.1–4.2.3 có khả năng xuất phát từ Supplementary Specification Template của RUP (nhóm FURPS+), không từ 25010. Vì vậy cần ánh xạ thay vì đổi tên mục FPT.

| Mục FPT | Gợi ý trong template | Ánh xạ 25010:2023 (và 25019) | Ghi chú |
| --- | --- | --- | --- |
| 4.1 External Interfaces | Giao tiếp người dùng, phần cứng, phần mềm ngoài | Compatibility → interoperability (3.3.2); một phần interaction capability | Mô tả giao diện là đặc tả; chất lượng giao diện (vd tỉ lệ trao đổi thành công) là NFR |
| 4.2.1 Usability | Thời gian đào tạo, thời gian tác vụ, so với hệ thống quen thuộc, chuẩn usability | Interaction capability (3.4.1–3.4.8) + usability trong quality in use (25019, beneficialness) | Thời gian đào tạo ≈ learnability; thời gian tác vụ ≈ efficiency khi dùng (quality in use) |
| 4.2.2 Reliability | Availability, MTBF, MTTR, accuracy, max defect rate, defect theo mức | Reliability (3.5): availability; faultlessness (MTBF, defect rate); recoverability (MTTR); accuracy → functional correctness (3.1.2) | Template bắt định nghĩa "critical bug" nếu dùng phân loại lỗi |
| 4.2.3 Performance | Response time (trung bình/tối đa), throughput, capacity, resource utilization | Performance efficiency (3.2.1–3.2.3) | Khớp gần 1-1 với 3 subcharacteristic |
| 4.2.4 … (mở) | Không có hướng dẫn | Security (3.6), Maintainability (3.7), Flexibility (3.8, gồm scalability), Compatibility (3.3), Safety (3.9), Functional suitability (3.1) | Đề xuất mỗi characteristic còn lại một mục con 4.2.4.x hoặc một dòng "không áp dụng + lý do" |

Thứ tự kiểm độ phủ đề xuất: với mỗi SRS, liệt kê 9 characteristic; mỗi cái phải có ≥ 1 NFR hoặc một dòng "không áp dụng" có lý do. Đây là quy tắc nhóm, **không** phải yêu cầu của ISO hay FPT.

## ISO25010-POLICY — Checklist NFR cho rule engine

**Clause:** — · **Evidence:** `proposed_policy` · **Locator:** cột Căn cứ · **Nguồn:** đề xuất của nhóm dựa trên các section trên

Ví dụ trong bảng là **ví dụ (nhóm tự đặt)**. Mức: `error` chặn baseline, `warning` cần sửa, `needs_review` cần người xem. "Rule" = kiểm bằng code/regex; "LLM" = kiểm bằng model kèm trích dẫn chunk.

| Check ID | Kiểm tra | Cách phát hiện (rule/LLM) | Mức | Căn cứ (section ID) | Ví dụ đạt | Ví dụ không đạt |
| --- | --- | --- | --- | --- | --- | --- |
| NFR-01 | Mỗi NFR có ID duy nhất | Rule: ID khớp `^NFR-[A-Z]+-\d+$`, không trùng | error | ISO25010-NFR-WRITING | NFR-PERF-01 | Hai NFR cùng ID hoặc không ID |
| NFR-02 | Mỗi NFR gắn đúng 1 characteristic (và subcharacteristic nếu có) theo 25010:2023 | Rule: field `characteristic` thuộc danh sách 9 tên; LLM: kiểm khớp nội dung | error | ISO25010-MODEL-OVERVIEW | "Security / authenticity: khóa tài khoản sau 5 lần sai" | Gắn "Performance" cho yêu cầu mã hóa mật khẩu |
| NFR-03 | NFR có giá trị số và đơn vị | Rule: regex số + đơn vị (s, ms, %, giờ, MB, req/s, người dùng, bước, phút) | error | ISO25010-25023-MEASURES | "p95 ≤ 2 s" | "Hệ thống phải phản hồi nhanh" |
| NFR-04 | NFR nêu điều kiện đo (tải, dữ liệu, môi trường hoặc khung thời gian) | LLM: tìm điều kiện; Rule hỗ trợ: từ khóa "đồng thời", "với", "trong môi trường", "mỗi tháng" | warning | ISO25010-NFR-WRITING; 25023 NOTE 3 §6.2 | "…với 100 người dùng đồng thời trên staging" | "Thời gian phản hồi ≤ 2 s" (không điều kiện) |
| NFR-05 | NFR chỉ rõ đối tượng (UC/function/API/màn) | Rule: chứa ID UC/function hoặc tên màn; LLM khi mơ hồ | warning | ISO25010-NFR-WRITING; FPT-4.2.3-PERFORMANCE | "UC-05 Generate SRS…" | "Mọi chức năng phải nhanh" |
| NFR-06 | Không dùng từ mơ hồ nếu không kèm số | Rule: danh sách từ cấm (nhanh, thân thiện, dễ dùng, ổn định, an toàn, tối ưu, hiện đại…) mà không có số trong cùng câu | error | ISO25010-NFR-WRITING | "≥ 90% người thử hoàn tất wizard không mở trợ giúp" | "Giao diện thân thiện, dễ dùng" |
| NFR-07 | Có phương pháp kiểm chứng | Rule: field `verification_method` ∈ {test, analysis, inspection, demonstration}; LLM: phương pháp khả thi | warning | ISO25010-1-SCOPE (acceptance criteria) | "Load test k6" | Không có cách kiểm |
| NFR-08 | Phủ đủ 9 characteristic: mỗi cái có ≥ 1 NFR hoặc "không áp dụng + lý do" | Rule: đếm theo field `characteristic`; thiếu ⇒ cờ | warning | ISO25010-FPT-MAPPING; ISO25010-1-SCOPE | Safety: "không áp dụng — không điều khiển thiết bị vật lý" | Không nhắc Security |
| NFR-09 | Không dùng tên 2011 mà không ghi năm (usability, portability, maturity, UI aesthetics, accessibility) | Rule: tìm từ khóa; nếu không có "2011" hoặc ánh xạ ⇒ cờ | needs_review | ISO25010-2023-CHANGES | "Usability (FPT 4.2.1; 25010:2023 interaction capability)" | "Theo ISO 25010, portability gồm…" |
| NFR-10 | Scalability không xếp vào capacity/performance | LLM: nội dung nói về co giãn khi tải đổi ⇒ phải là flexibility/scalability | warning | ISO25010-3.2-PERFORMANCE-EFFICIENCY; ISO25010-3.8-FLEXIBILITY | "Flexibility/scalability: tự thêm instance trong ≤ 5 phút" | "Performance/capacity: hệ thống tự scale" |
| NFR-11 | Accuracy của kết quả tính toán xếp functional correctness, không phải reliability | LLM phân loại | needs_review | ISO25010-3.1-FUNCTIONAL-SUITABILITY; ISO25010-FPT-MAPPING | "Functional correctness: sai số ≤ 0,01" | "Reliability: điểm tính đúng" |
| NFR-12 | Availability ghi % và khung thời gian/cửa sổ bảo trì | Rule: có `%` và (giờ phục vụ hoặc "bảo trì" hoặc "/tháng") | error | ISO25010-3.5-RELIABILITY; FPT-4.2.2-RELIABILITY | "≥ 99,5%/tháng, 7:00–23:00, trừ bảo trì báo trước 24 h" | "Hệ thống luôn sẵn sàng" |
| NFR-13 | Nếu đặt chỉ tiêu lỗi theo mức nghiêm trọng thì định nghĩa "critical" | Rule: có "critical/nghiêm trọng" ⇒ phải có định nghĩa trong SRS | error | FPT-4.2.2-RELIABILITY | "Critical = mất dữ liệu hoặc không đăng nhập được" | "0 lỗi critical" không định nghĩa |
| NFR-14 | Response time ghi rõ thống kê (trung bình, max, p95/p99) | Rule: có "trung bình/average/max/p9x" | warning | ISO25010-3.2-PERFORMANCE-EFFICIENCY; FPT-4.2.3-PERFORMANCE | "trung bình ≤ 1 s, max ≤ 3 s" | "≤ 1 s" |
| NFR-15 | NFR không lặp nguyên functional requirement | LLM: so với chương 3; câu mô tả hành vi không có measure ⇒ cờ | warning | ISO25010-3.1-FUNCTIONAL-SUITABILITY | "100% UC Must có function" | "Hệ thống phải cho phép đăng nhập" (ở chương 4) |
| NFR-16 | NFR usability đo trên người dùng ghi cỡ mẫu và nhóm người dùng | Rule: có "n ≥", "người thử", tên actor; LLM | warning | ISO25010-QIU-25019; ISO25010-3.4-INTERACTION-CAPABILITY | "≥ 80% của 10 sinh viên mới" | "Người dùng học nhanh" |
| NFR-17 | NFR security gắn subcharacteristic cụ thể và tác nhân/dữ liệu được bảo vệ | LLM: xác định confidentiality/integrity/… và đối tượng | warning | ISO25010-3.6-SECURITY | "Confidentiality: chỉ thành viên project đọc được SRS" | "Hệ thống phải bảo mật" |
| NFR-18 | Ngưỡng không ghi là "theo ISO" (ISO không quy định ngưỡng) | Rule: cụm "ISO yêu cầu/quy định ≤ …" ⇒ cờ | needs_review | ISO25010-25023-MEASURES | "Ngưỡng do PO duyệt ngày …" | "ISO 25010 quy định response time ≤ 2 s" |
| NFR-19 | Recoverability nêu RTO/RPO hoặc MTTR bằng thời gian | Rule: có "RTO/RPO/MTTR/khôi phục" + đơn vị thời gian | warning | ISO25010-3.5-RELIABILITY | "RTO ≤ 4 h, RPO ≤ 24 h" | "Có backup" |
| NFR-20 | Measure tự định nghĩa (ngoài 25023) có mô tả cách tính | LLM: NFR dùng chỉ số lạ phải có công thức/nguồn | needs_review | ISO25010-25023-MEASURES (Clause 2 d–e) | "Tỉ lệ = số wizard hoàn tất không trợ giúp / tổng" | "Điểm UX ≥ 8" không giải thích |

## ISO25010-GLOSSARY — Thuật ngữ

**Clause:** 3, Foreword · **Evidence:** `verified_normative` cho mục có locator 25010 3.1–3.4 / 25019 3.1.15; `secondary_source` cho mục còn lại · **Locator:** cột Locator · **Nguồn:** như các section trên

| Thuật ngữ | Diễn giải | Locator |
| --- | --- | --- |
| Product quality model | Mô hình 9 characteristic về thuộc tính chất lượng của ICT/software product | 25010:2023 Clause 1 |
| Quality characteristic / subcharacteristic | Nhóm thuộc tính chất lượng; subcharacteristic là khía cạnh riêng của một characteristic | 25010:2023 Clause 3; 25019 3.1.20 |
| Stated and implied needs | Nhu cầu được nêu và nhu cầu ngầm định của người dùng dự kiến | 25010:2023 3.1 |
| Interaction capability (khả năng tương tác) | Thuộc tính sản phẩm cho phép người dùng tương tác qua UI; thay usability (2011) | 25010:2023 3.4 |
| Usability (2023, trong 25019) | Kết quả sử dụng: effectiveness, efficiency, satisfaction trong context of use | 25010:2023 3.4 Note 1; 25019 |
| Faultlessness | Không lỗi khi vận hành bình thường; thay maturity | Foreword; iso25000.com |
| Flexibility (linh hoạt) | Thích nghi thay đổi requirement, context of use, môi trường; thay portability | Foreword; iso25000.com |
| Scalability | Xử lý tải tăng/giảm hoặc điều chỉnh capacity | iso25000.com |
| Resistance | Duy trì hoạt động khi bị tấn công | iso25000.com |
| Quality-in-use | Mức sản phẩm khi dùng trong context of use thỏa/vượt nhu cầu stakeholder để đạt mục tiêu có lợi | 25019 3.1.15 |
| Context of use | Tổ hợp người dùng, mục tiêu và tác vụ, tài nguyên, môi trường | 25019 3.1.4 |
| Quality measure / QME | Measure dẫn xuất từ ≥ 2 QME; QME là measure theo thuộc tính và phương pháp đo | 25023 4.8–4.9 |
| Generic (G) / Specific (S) measure | G dùng khi phù hợp (nên dùng hết, loại phải có lý do); S dùng khi liên quan tình huống cụ thể | 25023 Clause 2, 7 |
| Internal / external measure | Đo sản phẩm trung gian không thực thi / đo hành vi khi chạy | 25023 4.1–4.2, 6.2 |
| Target value | Giá trị mục tiêu trong requirement để chuẩn hóa measure | 25023 NOTE 2 §6.2 |

## ISO25010-GAPS — Chưa xác minh và cách bổ sung

**Clause:** — · **Evidence:** `pending` · **Locator:** — · **Nguồn:** —

1. **Phần thân 3.5–3.9 của 25010:2023** (reliability, security, maintainability, flexibility, safety): chưa đọc; định nghĩa đang dựa iso25000.com + arc42. Số clause 3.5, 3.6, 3.7, 3.9 là suy ra. Cần bản đầy đủ (thư viện/mentor) để nâng lên `verified_normative`.
2. **Testability** thuộc maintainability (iso25000.com) hay flexibility (arc42): hai nguồn thứ cấp lệch nhau; Foreword không nhắc di chuyển. Tạm theo iso25000.com; cần đọc Clause 3.7–3.8 hoặc Annex A.
3. **Clause 4–5, Annex A–D của 25010:2023** (cấu trúc mô hình, quan hệ với quality in use, bảng so sánh 2011, dependability, đo lường, stakeholder): mới có `locator_only`.
4. **25019:2023 mục 3.2 (tr. 7) và Clause 4**: danh sách sub-characteristic lấy từ 2 nguồn thứ cấp (arc42, O'Donoghue et al. 2025); trang arc42 trích dẫn một mã arXiv không khớp nội dung (2305.05261 là bài thiên văn) nên chỉ tin phần danh sách đã đối chiếu.
5. **Tên và ID measure 25023:2016 §8.x**: chỉ ID "PTb" được xác nhận trong thân chuẩn; tên measure lấy từ Karnouskos et al. 2018 (một nguồn); tên measure co-existence chưa đối chiếu. Số §8.x lấy từ mục lục chính thức. Bản DIS 25000-23.2 (thay 25023) chưa đọc — có thể đổi theo mô hình 2023.
6. **Quyền sử dụng:** ISO giữ bản quyền, catalogue nêu hạn chế dùng nội dung cho AI; file này chỉ chứa diễn giải và định nghĩa ngắn. Không ingest PDF preview vào RAG trước khi xác nhận quyền.
7. **Ngưỡng ví dụ** trong file (2 s, 99,5%, 60 s…) là ví dụ nhóm tự đặt, cần PO/mentor duyệt trước khi dùng làm giá trị mặc định của generator.
