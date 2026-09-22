# Nợ kỹ thuật mode 1 — mang từ v2 sang v3

Nguồn: `../mode1-old/plan-mode1-v2-workspace.md` §0.1 (cập nhật 2026-09-20). Nợ đã đóng ở v2 (T1, T4, T5, T8, T10, T12) không chép lại.

| # | Nợ | Mức | Xử lý ở v3 |
|---|---|---|---|
| T2 | Mất định dạng Word gốc (style, header/footer) | Chấp nhận (D1) | Không làm. Mở rộng sau: `styles.xml` + header/footer file gốc làm khung docx-writer |
| T3 | Ảnh trong `custom_sections` chỉ render placeholder — mất 35/39 ảnh | **Cao** | Phase 5 bước 1 |
| ~~T6~~ | ~~Bản tải "có đánh dấu" chưa có~~ | — | **Xong 2026-09-22** (phase 2.6) — so theo đoạn; giới hạn ghi ở Bàn giao phase 2 |
| ~~T7~~ | ~~Vị trí `comment` của CR chỉ lưu ở CR~~ | — | **Xong 2026-09-22** — comment Word ở tiêu đề mục của bản có đánh dấu |
| T8 | (đã làm ở v2: `/changes`, `/undo`, chat tự tạo CR) | — | **Gỡ** ở phase 1 — BPMN 3.1 là user task, CR chỉ sinh từ form |
| T9 | `DocBlock.locked_by_cr`, `ChangeLocation.block_id` là field chết | Thấp | Ngoài v3 (`npm run migrate:mode1-v2 --clean-data`, cần kiểm DB dev) |
| T11 | Không xem được nội dung version cũ trên UI | Thấp | Ngoài v3 |
| T13 | e2e chưa chạy thật | Trung bình | Phase 6.2 |
| ~~T14~~ | ~~Số mục bị đẩy sâu một cấp~~ | — | **Xong 2026-09-22** (phase 4.5) |
| ~~T15~~ | ~~Mất Record of Changes cũ của khách~~ | — | **Xong 2026-09-22** (phase 4.5) — chỉ project import sau thay đổi |
| **T16** (mới) | Kho bản xem trước nằm trong bộ nhớ ⇒ restart / nhiều instance là mất; phase 2 chỉ dùng làm gợi ý nên mất thì CR vẫn tạo được | Thấp | Chấp nhận; nhiều instance ⇒ Mongo TTL collection |
| **T17** (mới) | Test v1–v4 giả định mode 1 chạy step / sửa tự do / ký v1 / auto CR | — | Sửa ở phase 1–3, không xoá |
| **T18** (mới) | Quyền theo lane (Lead duyệt, Viewer chỉ tải release) chưa có vì BE chưa có tổ chức/role | Chặn | Phase 4.4, chờ Flow 8–10 |

**Chờ người khác (từ v2):** PR BE #69/#70, FE #51/#52 chờ review; FE #52 chờ duyệt devDep `@vitest/coverage-v8`; mở Word 16 xem trang in bản 0.0 (checklist §5 `reports/mode1-v2-t1-render-vs-original.md`).
