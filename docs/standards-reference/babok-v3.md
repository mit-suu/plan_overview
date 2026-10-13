---
source_id: iiba-babok
title: A Guide to the Business Analysis Body of Knowledge
version: v3 (2015)
publisher: IIBA
source_url: https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/
checked_on: 2026-10-13
access: public_glossary_and_task_cards_partial_knowledgehub
rights_status: summary_only_review_before_source_ingestion
---

# BABOK v3 — yêu cầu, Actor và Use Case

Nguồn gốc: [IIBA BABOK](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/). Bản đầy đủ cần quyền truy cập IIBA/thư viện. File này diễn giải ngắn từ nguồn công khai chính chủ, không phải bản sao BABOK.

## BABOK-2-3 — Phân loại yêu cầu

**Clause:** §2.3 và Appendix A. **Evidence:** `verified_public` cho glossary và Core Standard hỗ trợ; `locator_only` cho phần thân §2.3. **Nguồn:** [Glossary IIBA](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/), [Core Standard 2017 §1.5, trang in 7–8, PDF trang 14–15](https://www.iiba.org/globalassets/standards-and-resources/core-standard/iiba-core-standard.pdf), [section §2.3](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/2-business-analysis-key-concepts/2-3-requirements-classification-schema/). Số §1.5 thuộc Core Standard, không phải BABOK v3.

| Loại | Diễn giải |
| --- | --- |
| Business | Mục tiêu/kết quả giải thích lý do thay đổi và cách đánh giá thành công |
| Stakeholder | Nhu cầu của bên liên quan để đạt mục tiêu nghiệp vụ |
| Solution | Năng lực/chất lượng giải pháp đáp ứng nhu cầu stakeholder |
| Functional | Hành vi và thông tin giải pháp cần quản lý |
| Non-functional | Chất lượng hoặc điều kiện để giải pháp hoạt động hiệu quả |
| Transition | Nhu cầu tạm thời để chuyển sang trạng thái mới |

## BABOK-A-ACTOR-UC — Thuật ngữ

**Clause:** Appendix A; kỹ thuật liên quan §10.47. **Evidence:** `verified_public`. **Nguồn:** [Glossary IIBA](https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/glossary/). [§10.47](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/10-techniques/10-47-use-cases-and-scenarios/) xác nhận tên/vị trí kỹ thuật; phần thân chưa đọc.

Actor là người, thiết bị hoặc hệ thống đóng vai trò tương tác với giải pháp. Use Case mô tả tương tác quan sát được để actor đạt mục tiêu cụ thể. Stakeholder có thể chịu ảnh hưởng mà không trực tiếp tương tác; danh sách stakeholder không đồng nhất danh sách actor.

## BABOK-7-RADD — Requirements Analysis and Design Definition

**Clause:** §7.1–7.6. **Evidence:** `verified_public` qua task cards hỗ trợ; không khẳng định đã đọc toàn bộ chương 7. **Nguồn:** [Mục lục KnowledgeHub chương 7](https://www.iiba.org/knowledgehub/business-analysis-body-of-knowledge-babok-guide/7-requirements-analysis-and-design-definition/), [task cards IIBA](https://www.iiba.org/contentassets/be4de45e850d4d30b78e8c4d7ca0c967/all-task-cards-req-analysis-and-design-def.pdf), v2.0, ©2025, PDF trang 1–6.

| BABOK v3 | Diễn giải từ task card tương ứng |
| --- | --- |
| §7.1 Specify and Model Requirements | Làm rõ kết quả elicitation bằng mô tả/mô hình |
| §7.2 Verify Requirements | Kiểm chất lượng và tính sử dụng được của đặc tả |
| §7.3 Validate Requirements | Kiểm sự phù hợp với mục tiêu và giá trị nghiệp vụ |
| §7.4 Define Requirements Architecture | Tổ chức các yêu cầu và quan hệ thành tổng thể |
| §7.5 Define Design Options | Xem xét các phương án đáp ứng nhu cầu |
| §7.6 Analyze Potential Value and Recommend Solution | Đánh giá giá trị để đề xuất phương án |

Các card 2025 dùng nhãn có thêm “and Designs” ở một số task; đó là tài liệu hỗ trợ riêng, không phải edition mới của BABOK v3. Verification và validation là hai câu hỏi khác nhau: đặc tả có chất lượng, và đặc tả có đáp ứng mục tiêu nghiệp vụ.

## BABOK-POLICY — Áp dụng đề xuất cho FlintFlow

**Evidence:** `proposed_policy`. Các ví dụ sau do nhóm xây dựng, không trích chuẩn.

| Check ID | Kiểm tra | Ví dụ / xử lý |
| --- | --- | --- |
| BA-01 | Tách mục tiêu nghiệp vụ khỏi giải pháp | “Giảm thời gian duyệt hồ sơ” là mục tiêu; “gửi thông báo khi duyệt” là hành vi giải pháp |
| BA-02 | Actor có tương tác tại boundary đã chọn | Mentor chỉ duyệt báo cáo ngoài hệ thống: stakeholder; mentor duyệt SRS trong ứng dụng: actor |
| BA-03 | UC có kết quả/mục tiêu rõ | “Xử lý dữ liệu” cần làm rõ; “Phê duyệt SRS baseline” mô tả kết quả cụ thể |
| BA-04 | Có đường truy vết nhu cầu đến chức năng | Đề xuất chuỗi goal → stakeholder need → UC → function → test; không bắt buộc mọi nhu cầu đều là UC |
| BA-05 | Tách review chất lượng và review nghiệp vụ | UC rõ nhưng ngoài release scope vẫn cần review validation |
| BA-06 | Phân loại transition riêng | Nhập dữ liệu ban đầu/đào tạo có thể là transition; xác nhận phạm vi với người dùng |

Đề xuất lưu Actor bằng ID/tên/vai trò/tương tác/bằng chứng boundary; UC bằng ID/mục tiêu/actor/trigger/kết quả và liên kết đặc tả chi tiết. Đây là mô hình dữ liệu nhóm lựa chọn, không phải cấu trúc JSON bắt buộc của BABOK.

## BABOK-ACCESS — Phần cần bổ sung

**Evidence:** `pending` cho việc kiểm tra phần thân §2.3, §7 và §10.47 theo bản v3 có license.

Nếu cần diễn giải chi tiết hoặc viện dẫn trang của BABOK v3, lấy bản hợp lệ qua mentor/thư viện hoặc IIBA; ghi edition và locator sau khi đọc. Glossary/task cards công khai đủ cho các ghi chú đã xác minh phía trên, nhưng không thay thế toàn bộ chương.
