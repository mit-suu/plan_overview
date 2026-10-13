---
source_id: fpt-capstone-srs
title: FPT Capstone SRS template - pending official source
version: unconfirmed
publisher: pending_mentor_or_faculty_confirmation
checked_on: 2026-10-13
access: pending_user_upload
evidence: pending
rights_status: pending
---

# Template SRS FPT Capstone — chờ bản chính thức

Người dùng xác nhận ngày 13/10/2026 sẽ upload template sau. Chưa có file/link do mentor/khoa cấp để xác nhận version, nội dung bắt buộc hoặc format. Không dùng bản sinh viên chia sẻ hay code Export Word làm chứng nhận template FPT chính thức.

## FPT-SOURCE — Hồ sơ cần điền khi nhận file

**Evidence:** `pending`.

| Trường | Hiện trạng |
| --- | --- |
| Tên file / URL chính thức | Chờ upload |
| Version / ngày ban hành | Chưa xác định |
| Mentor/khoa cấp; campus; kỳ học | Chưa xác định |
| SHA-256 của file gốc | Chưa tính |
| Phạm vi cho phép chia sẻ/ingest | Chưa xác nhận |
| Người duyệt bảng đối chiếu | Chưa xác định |

## FPT-EXPORT-SOURCES — Bằng chứng triển khai hiện tại

**Evidence:** `project_observation`. **Version:** backend commit `8ab85313ec91b825c5f03a7e2c869019856db547`, working tree đọc ngày 13/10/2026. Các file liệt kê dưới đây không có thay đổi chưa commit tại lúc đọc.

| File trong `flintflow_be` | Phần đã đọc | Vai trò |
| --- | --- | --- |
| `src/modules/spine/section-registry.ts` | `FIXED_DEFS`, `listSections` | Section cố định và feature/function động |
| `src/modules/render/labels.ts` | `GROUP_HEADINGS` | Tên chương/nhóm mục |
| `src/modules/render/assemble.service.ts` | `buildNumberMap`, `buildDocumentParts` | Đánh số, ghép mục, chọn layout |
| `src/modules/render/section-renderer.ts` | Khung `fptFunctionDetail` | Trigger, description, layout, details của function |
| `src/modules/render/docx-writer.ts` | `writeDocx`, `coverPage` | Bìa, mục lục, style, page setup |
| `assets/skills/content/actors-and-usecases/assets/usecase-table-template.md` | Toàn bộ bảng cột | Bảng UC đang sử dụng |

## FPT-STRUCTURE — Bảng so sánh bố cục

**Evidence:** `project_observation` cho cột Export; `pending` cho cột chính thức. Tên dưới đây là tên tiếng Anh trong code, không phải bản trích từ template mentor.

| Mục / nhóm | Export Word hiện tại | Template chính thức / khác biệt |
| --- | --- | --- |
| Bìa + TOC | Tên dự án, loại tài liệu, version, ngày, trạng thái draft/baseline; mục lục heading 1–3 | Chờ so logo, tên nhóm/lớp/campus, các trường và thứ tự |
| I | Record of Changes | Chờ so cột, format ngày, người phụ trách và quy ước A/M/D |
| 1 | Product Overview | Chờ so scope, bối cảnh, giả định, context diagram |
| 2 / 2.1 | User Requirements / Actors | Chờ so bảng actor và các cột |
| 2.2.1 / 2.2.2 | Use Case Diagram / Use Case Descriptions | Chờ so yêu cầu sơ đồ và bảng mô tả |
| 3.1.1–3.1.5 | Screens Flow; Screen Descriptions; Screen Authorization; Non-Screen Functions; Entity Relationship Diagram | Chờ xác nhận đủ mục, tên và thứ tự |
| 3.2, 3.3… | Feature groups; function con đánh số 3.x.y | Chờ so cách nhóm/đánh số và mẫu function |
| 4.1 | External Interfaces | Chờ so trường chi tiết |
| 4.2.1–4.2.4 | Usability; Reliability; Performance; Domain-Specific Attributes | Mục 4.2.4 hiện không bắt buộc trong registry; cần xác nhận |
| 5.1–5.5 | Business Rules; Common Requirements; Application Messages List; Other Requirements; Glossary | Chờ so phạm vi/cột và tính bắt buộc |
| Phụ lục cờ | Writer hỗ trợ flags và ghi chú draft/stale | Cần hỏi có được đưa thông tin này vào bản nộp chính thức không |

## FPT-TABLES — Các điểm đối chiếu cụ thể

**Evidence:** `project_observation`.

Bảng Use Case hiện có 6 cột: ID, Use Case, Actors, Use Case Description, Includes, Extends. Asset nội bộ ghi 4 cột đầu theo mẫu FPT và 2 cột cuối là mở rộng của nhóm; thông tin này vẫn cần so với file chính thức.

Mẫu function hiện gồm Function trigger (Navigation path, Timing frequency), Function description (Actors/Roles, Purpose, Interface, Data processing), Screen layout và Function details (Data, Validation, Business rules, Normal case, Abnormal case). Cần so từng field/subheading và cách xử lý non-screen function; hiện code giữ khung và điền `N/A` khi thiếu nội dung tương ứng.

Writer hiện dùng A4, lề 1 inch, Times New Roman 12 pt cho body; heading 1/2/3 lần lượt 16/14/13 pt. Đây là quan sát code, chưa được kiểm bằng một bản Word render của task này và chưa kết luận đạt format FPT.

Mode 2 không có template import sẽ lắp layout mặc định và đặt `format=fpt`. Mode 1 dùng `TemplateProfile.layout` theo file upload; không áp checklist số heading mặc định FPT lên mọi tài liệu Mode 1.

## FPT-POLICY — Quy trình xác nhận sau upload

**Evidence:** `proposed_policy`.

1. Đọc template gốc và trích theo heading/bảng thành chunk `FPT-*`; lưu locator trang/mục.
2. Điền kết quả từng dòng: khớp, thiếu, thừa, khác hoặc không áp dụng; dẫn cả vị trí template và code/output.
3. Xuất một SRS fixture bằng Export Word, render và so bìa, TOC, heading, bảng, page setup với template.
4. Để mentor xác nhận các phần mở rộng Includes/Extends, phụ lục cờ và khác biệt formatting.
5. Chỉ khi có xác nhận mới chuyển evidence của nội dung FPT sang nguồn đã xác minh và tick phần còn thiếu trong index.

Chưa sửa Export Word trong FLF-215: mọi đề xuất sửa phải dựa vào template chính thức và được giao thành task triển khai tương ứng.
