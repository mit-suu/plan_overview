# BÁO CÁO P2 (Mode 1: upload SRS có sẵn rồi sửa) — Logic BE · Ngày: 2026-09-18

> Plan: `plan-mode1-import-edit-srs.md` §6. Ticket FLF-171. Nền nhánh: phương án **A** (tách từ `feat/FLF-171-mode1-p1-schema`, PR #50 chưa merge).

## 1. Trạng thái
- Trạng thái: **Xong phần code 2A–2G**; DoD 9/10 (còn kiểm LibreOffice — máy chưa có).
- Nhánh BE (xếp chồng, **chưa push**):

| Nhánh | Cụm | Commit cuối |
|---|---|---|
| `feat/FLF-171-mode1-p2-ooxml` | 2A | `c523cdb` |
| `feat/FLF-171-mode1-p2-import` | 2B + 2D | `d6be175` |
| `feat/FLF-171-mode1-p2-extract` | 2C | `555f4bb` |
| `feat/FLF-171-mode1-p2-change-request` | 2E | `ba2f067` |
| `feat/FLF-171-mode1-p2-release-guard` | 2F + 2G, sửa trần input I-4, số đo | `982b59e` |

- Diff so với nhánh P1: 90+ file, ~+8 900 / −134 dòng. FE không đổi (P3).

## 2. Đã làm
| Cụm | Nội dung | Kết quả |
|---|---|---|
| 2A | `modules/docx-ooxml/`: gói zip + part/rels/content types, tách block (heading theo `w:name`/`outlineLvl` qua `basedOn`, dự phòng mẫu số mục, bỏ TOC), neo bookmark `_ff_<id>` (kể cả bookmark Word dời ra ngoài `w:p`), Track Changes diff theo từ (LCS, giữ `rPr`, không lồng `w:ins`), comment, stamp, accept-all (gộp dấu đoạn bị xoá, bỏ hàng bảng bị xoá), watermark DRAFT | Xong. Word 16: 9/9 revision `CR-001`, comment đúng; Accept all của Word = bản sạch sinh bằng code; Reject all = bản gốc; bookmark giữ 100% sau Word mở/lưu; watermark hiện trên trang |
| 2B | Preflight (magic bytes, mã hoá, `.doc`, zip bomb, Track Changes/comment tác giả lạ kèm vị trí), 3 nhánh stamp, lưu GridFS `source-docs`, parse + gán `block_id` tất định, mention mã UC/FR/NFR/BR/SCR, khớp profile (EN/VI, số mục, feature/function tạm `feature:@B…`), cột bảng → field, `PATCH mapping` | Xong |
| 2C | I-4: bảng khớp đủ cột trích tất định, còn lại AI theo section (lô ≤ 24k ký tự), pause credit / lỗi AI + resume từ cursor; xác nhận field; finalize: 1 txn `by: import`, section tạm → id thật, `FieldAnchor`, mention theo tên, version `0.0` (stamp + bookmark), baseline `imported`; check: AI semantic (vàng, `import_semantic`) + recompute theo hồ sơ luật mode 1; gap report JSON + .docx (tải lần đầu ⇒ `delivered`) | Xong |
| 2D | Engine diff block (bookmark → paraId → LCS `text_hash`, `moved` theo dãy tăng dài nhất), `/reupload` không tạo version | Xong |
| 2E | CR C-1…C-7: tạo (counter nguyên tử, BR-03), làm rõ ≤ 3 vòng, C-3 ba nguồn + khoá "giành rồi trả" (409 `BLOCK_LOCKED`), C-4 theo lô owner step + skill nội dung, C-5 code (old text, op dry-run, cờ đỏ mới) + AI vàng, redo ≤ 2 ⇒ `manual_fix`, sửa tay, nộp, duyệt từng group (từ chối mở khoá ngay), ghi Track Changes + comment ⇒ minor mới, revise/close/cancel/resume; notification `change_request_decided` | Xong |
| 2F | Versions: danh sách, block + `revisions[]`, so sánh, tải về (draft: watermark + `_DRAFT`, release: bản sạch / `tracked`); release: chặn khi còn đỏ, gom CR, bản sạch, major mới, baseline `release`; CR sau release ghi lên bản sạch | Xong |
| 2G | `withMeteredAi` (usage `I-4:<section>`, `I-1.11`, `C-2/4/5:<cr>`); guard G9 cho chat (JSON + stream), `/changes`, `/changes/preview`, `/reconcile`, `/undo` ⇒ 409 `CHANGE_REQUIRES_CR` + `prefill` | Xong |
| P1 → P2 | Tách `snapshotBaseline` khỏi `signOff`; `RuleProfile` (loại/hạ luật) cho check + recompute; `purgeProjectData` dọn 11 collection + file mode 1 | Xong |
| Skill | Viết đầy đủ 5 skill (`import-extract`, `import-semantic-check`, `cr-clarify`, `cr-propose`, `cr-consistency`), bỏ `stub` | Xong |

## 3. File ngoài 4 module mode 1 đã sửa
| File | Thay đổi | Lý do |
|---|---|---|
| `src/app.ts` | mount 3 route (import, change-request, doc-version) | Endpoint contract §1 |
| `src/modules/pipeline/s9/baseline.service.ts` | tách `snapshotBaseline`, export `nextBaselineId`; `signOff` dùng lại | P1 → P2 (P0 §3 dòng 6) |
| `src/modules/spine/deterministic-check.ts` | `RuleProfile` + `applyRuleProfile`; `MODEL_OWNED_RULES` thêm `import_semantic`, `cr_consistency` | Hồ sơ luật mode 1 (P0 §3.1) |
| `src/modules/spine/flags.service.ts` | `RecomputeOptions.ruleProfile` | như trên |
| `src/modules/spine/changes.controller.ts` | guard mode 1 trước khi đọc body | G9 |
| `src/modules/project/chat-session.controller.ts` | guard lệnh sửa ở project mode 1 | G9 |
| `src/modules/project/project.service.ts` (+ test) | dọn dữ liệu mode 1 khi xoá cứng | P1 → P2 |
| `src/shared/middlewares/error-handler.ts` | giữ `meta` của `ApiError` trong envelope | `CHANGE_REQUIRES_CR` cần `meta.prefill` |
| `src/shared/ai/prompt-assets.test.ts` | 5 skill mode 1 không còn là stub | Đã viết nội dung |
| `docs/measurements.md` | thêm mục FLF-171 P2 | DoD |

Các thay đổi trên nằm ngoài vùng sở hữu theo `coding-rules.md` nhưng là việc plan P2 giao đích danh; cần chủ vùng (spine, pipeline, project, shared) review.

## 4. Hợp đồng
- **Không đổi** `import-change-contract.md` hay zod DTO đã đóng băng. Model `ChangeRequest` thêm field nội bộ `targets` (không có trong DTO).
- Interface mới cho task khác: `snapshotBaseline`, `RuleProfile`, `docFileStore()`, `withMeteredAi`, thư viện `docx-ooxml`.

## 5. Kiểm chứng
| Lệnh | Kết quả |
|---|---|
| `npm run typecheck`, `typecheck:test`, `build` | xanh |
| `npm run test:unit` | 97 file, **984 xanh**, 14 skip (skip có sẵn từ trước) |
| `npm run test:integration` | 16 file, **83 xanh** (mới: `mode1-import`, `mode1-extract`, `mode1-change-request`, `mode1-release`) |
| Word 16 (COM) | xem 2A ở §2 |
| Provider thật | §6 |

## 6. Chạy thật (DoD mục 1)
SRS Report3 của nhóm (md → .docx, 3 450 block), GLM-5.3-Flash, Mongo in-memory: 98 section trích xong / 0 lỗi; Spine 81 UC, 70 function, 150 màn, 41 NFR, 36 BR, 100 message; 0 đỏ / 169 vàng; CR "session timeout" đi tới `ready_to_submit`. Import **157 credit** (77 lượt I-4 + 1 semantic), CR 33 credit. Chi tiết `flintflow_be/docs/measurements.md`.

## 7. Bị chặn / cần quyết định
| Vấn đề | Đề xuất | Mức |
|---|---|---|
| Kiểm LibreOffice (DoD P2 cuối) | Người có LibreOffice mở file `0.1`/`1.0` do test sinh | Trung bình |
| Import SRS đầy đủ tốn 157 credit > gói free 100 | Gộp section nhỏ vào một lượt; trích tất định bảng dọc (đặc tả UC/function) | Trung bình |
| `/import/extract` đồng bộ ~5,6 phút trên SRS đầy đủ | Chuyển thành job nền: trả `extracting` ngay, FE poll `GET /import` (không đổi contract) | Cao trước khi lên production |
| C-3 chạm trần 80 vị trí khi từ khoá rộng | Xếp hạng vị trí (spine_link > mention > keyword), trần theo nguồn | Thấp |
| Lượt đầu chạy thật: một section ~2,9 triệu token (ảnh base64 trong text) | **Đã sửa**: trần 24k ký tự/lượt, 6k/block | Xong |
| Push 5 nhánh + mở PR | Chờ người dùng cho phép | — |

### 7.1 Việc hoãn — làm ở phiên sau (người dùng chốt 2026-09-18)

**Việc A — I-4 chạy nền (job + polling), ưu tiên cao trước production**
- Hiện tại: `POST /import/extract` và `/import/resume` chạy đồng bộ, SRS đầy đủ mất ~5,6 phút trong một request (nguy cơ timeout proxy/trình duyệt).
- Cách làm: controller đặt trạng thái rồi trả ngay `extractResponseSchema` với `import.status = "extracting"`; `runExtraction` chạy nền (hàng đợi in-process có khoá theo `import_id`, chống chạy trùng; khởi động lại server ⇒ job dở được tiếp tục bằng `/import/resume` nhờ `extract_cursor`). FE poll `GET /import` (đã có `extraction.sections`). Áp tương tự cho `finalize` (bước check AI) nếu chậm.
- Contract không đổi (response vẫn là `extractResponseSchema`); chỉ đổi nghĩa "trả khi chạy xong" ⇒ "trả ngay, xem tiến độ qua GET". Cần báo FE (P3).
- Test: tích hợp — extract trả ngay, poll tới `fields_review`; hai request extract cùng lúc chỉ một job chạy.

**Việc B — Giảm credit import ≤ 100 (gói free), làm cả hai hướng**
1. Gộp section nhỏ: `runExtraction` gom các section liên tiếp (cùng nhóm mục tiêu, tổng ≤ `AI_BATCH_CHARS`) vào một lượt gọi; prompt liệt kê nhiều `section_id`, output mỗi item mang `section_id` (hoặc tách theo `source_block_ids`). Hiện 77 lượt cho 98 section ⇒ ước còn ~30–40 lượt.
2. Trích tất định bảng dọc (đặc tả UC/function dạng "nhãn | giá trị": `Use Case ID`, `Actor`, `Trigger`, `Normal Flow`…): từ điển nhãn → field trong `table-header-dictionary.ts`, nhận bảng 2 cột có ≥ 3 nhãn khớp; function section có bảng dọc thì không gọi AI.
- Đo lại bằng script chạy thật (`claude_plan/reports/mode1-p0/...` — script nháp P2 ở scratchpad đã mất; viết lại theo mô tả ở `docs/measurements.md` mục FLF-171 P2). Mục tiêu: import Report3 ≤ 100 credit, tokens_in giảm, không giảm số thực thể trích được.

## 8. Phát hiện ngoài phạm vi
- `ApiError` có `meta` trước đây bị error handler bỏ — đã sửa chung (§3).
- Chuyển PDF → .docx bằng Word COM treo (file 16 MB), đã dừng tiến trình Word của phiên này.

## 9. Bước tiếp theo
1. Người dùng cho phép ⇒ push 5 nhánh, mở 5 PR xếp chồng (`[FLF-171] …`).
2. P3 (FE) nối API thật; P4 test bổ sung theo §8 plan (phần lớn test BE đã có ở P2).
3. Quyết định job nền cho I-4 và phương án giảm credit.
