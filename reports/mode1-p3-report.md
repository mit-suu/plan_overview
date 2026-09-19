# BÁO CÁO P3 (Mode 1: upload SRS có sẵn rồi sửa) — UI FE · Ngày: 2026-09-19

> Plan: `plan-mode1-import-edit-srs.md` §7. Ticket FLF-172. Nhánh FE `feat/FLF-172-mode1-p3-ui` tách từ `feat/FLF-172-mode1-p1-schema` (FE PR #30 chưa merge).

## 1. Trạng thái
- Trạng thái: **Code xong 3.1–3.15 trên mock msw**; DoD 3/4 (còn đi trọn luồng trên trình duyệt với BE thật).
- Nhánh FE `feat/FLF-172-mode1-p3-ui`, 4 commit, **chưa push**:

| Commit | Nội dung |
|---|---|
| `d9e7d59` | Lớp API mode 1, mock I-4 chạy nền, wizard import (3.2–3.6, 3.15) |
| `cc27916` | Gap report, tài liệu theo block, so sánh version, re-upload, version/release, workspace mode 1, chat 409 (3.7–3.9, 3.12, 3.13) |
| `7670213` | Change request: danh sách + form, workspace CR (3.10–3.11) |
| `ad8783f` | Tạo dự án chọn mode, thẻ dự án mode 1 (3.1, 3.14) |

## 2. Đã làm
| # | Màn | File chính | Ghi chú |
|---|---|---|---|
| 3.1 | Tạo dự án chọn mode (3 thẻ, template khách hàng "Sắp có") | `app/home/_components/CreateProjectDialog.tsx` | Mode 1 tạo xong vào thẳng `/import` |
| 3.2–3.3 | Kéo thả .docx, lỗi preflight kèm vị trí + cách sửa, xác nhận bản mới nhất | `UploadStep`, `PreflightIssues`, `ConfirmLatestModal` | Chặn > 10MB ở FE |
| 3.4 | Xác nhận mapping heading → section, cột bảng → field, lọc độ tin thấp | `MappingReviewTable` | Danh mục section: `lib/constants/fpt-sections.ts` |
| 3.5 | Tiến độ trích theo section, credit, banner paused dùng chung | `ExtractProgress`, `PausedBanner` | **Poll `GET /import` 2s** theo hành vi chạy nền (#6/#10 trả ngay). `extract_cursor = null` + chưa bấm ⇒ nút "Bắt đầu trích" (không tự tiêu credit) |
| 3.6 | Xem lại field độ tin thấp, sửa giá trị | `FieldsReview` | Giữ kiểu gốc khi còn parse được JSON |
| 3.7 | Gap report + tải .docx + "Cần sửa → tạo CR" (nguồn `gap_report`, điền sẵn cờ đỏ/section thiếu) | `gap-report/page.tsx`, `GapReportView` | |
| 3.8 | Tài liệu theo block (bảng vẽ từ block `table`, Track Changes kèm tác giả CR, huy hiệu khoá → CR), chọn version, so sánh | `DocBlockView`, `VersionCompare`, `BlockDiffList` | |
| 3.9 | Re-upload ⇒ diff theo block, "Tạo CR từ khác biệt" (nguồn `reupload`) | `ReuploadDiffView` | |
| 3.10 | Danh sách CR (lọc mở/đóng) + form (nguồn, người yêu cầu bắt buộc) | `change-requests/page.tsx`, `ChangeRequestList`, `ChangeRequestForm` | Prefill qua query `?new=1&…` (`prefill.ts`) |
| 3.11 | Workspace CR: timeline, làm rõ hỏi–đáp, vị trí (tag `found_by`), đề xuất (diff, lý do, comment), sửa tay, kết quả kiểm (đỏ/vàng, số lần làm lại), duyệt group (từ chối cần lý do ≥ 10), sửa lại / đóng / huỷ, paused | `change-requests/[crId]/page.tsx`, `CrWorkspace`, `ClarifyPanel`, `ImpactList`, `ProposalCard`, `VerifyResult`, `ChangeGroupPanel`, `CrTimeline`, `ReasonDialog` | Nút hành động chọn theo `status` BE trả; "AI làm lại" khi verify trượt (cùng luật `needsProposal` của BE) |
| 3.12 | Danh sách version, tải bản gốc / draft (Track Changes + DRAFT) / sạch, Release (khoá khi còn cờ đỏ, 422 hiện danh sách cờ) | `VersionsPanel` | |
| 3.13 | Chat mode 1 chỉ hỏi đáp; `409 CHANGE_REQUIRES_CR` ⇒ thẻ "Tạo change request" điền sẵn | `CrPrefillCard`, `useWorkspace`, `ChatPane` | |
| 3.14 | Thẻ dự án mode 1: nhãn "Upload SRS", trạng thái import / số CR đang mở | `components/ProjectCard.tsx`, `app/home/page.tsx` | |
| 3.15 | Lớp API | `lib/api/import.ts`, `change-requests.ts`, `versions.ts`, `files.ts` | |
| — | Khung trang mode 1 (header + tab, tab cần baseline bị khoá tới khi import xong) | `Mode1Shell`, `hooks/mode1/*` | `/projects/:id` rẽ theo `project.mode`: mode 1 ⇒ `Mode1Workspace`, mode 2 ⇒ workspace cũ nguyên vẹn |

Mock: #6/#10 trả ngay `extracting`, mỗi lần poll #4 trích thêm một section (hết credit ⇒ paused); thêm `GET /spine`, `GET /flags` cho project mode 1 và `GET /billing/balance`; `mocks/mode1/flows.ts` dựng sẵn kịch bản qua API thật.

## 3. File ngoài vùng mode 1 đã sửa
| File | Thay đổi | Lý do |
|---|---|---|
| `lib/api/client.ts` | `ApiClientError.meta` (tham số thứ 4, tuỳ chọn) | Cần `issues[]`, `locked[]`, `prefill`, `flags[]` từ envelope lỗi |
| `lib/ai-stream.ts` | Lỗi HTTP ném `ApiClientError` (code + meta), thông điệp giữ nguyên | Chat nhận `CHANGE_REQUIRES_CR` |
| `lib/api/projects.ts` | `createProject(name, mode?)` — không truyền mode thì body như cũ | 3.1 |
| `app/projects/[projectId]/page.tsx` | Default export thành bộ rẽ theo `mode`; thân workspace cũ đổi tên `FptWorkspace`, không đổi logic | 3.8 |
| `hooks/useWorkspace.ts` | `crPrefill` thay `alert` khi 409 `CHANGE_REQUIRES_CR` | 3.13 |
| `_components/ChatPane.tsx` | Prop tuỳ chọn `title`, `emptyState` (mặc định như cũ) | 3.13 |
| `app/home/page.tsx`, `components/ProjectCard.tsx` | Dialog tạo dự án mới, số CR mở | 3.1, 3.14 |

## 4. Lệch so với plan
- `ExportPanel`/`DocumentPane` **không** mở rộng: mode 1 có workspace riêng, tải về nằm ở `VersionsPanel` — tránh đụng workspace mode 2.
- Field review chỉ hiện **mã** block nguồn: trước finalize chưa có version `0.0` nên `GET /versions/:v/blocks` chưa đọc được text.
- `lib/constants/fpt-sections.ts` là bản sao chỉ đọc `FIXED_SECTIONS` + heading nhóm của BE (FE chưa có registry section). Đổi registry BE phải đổi file này.
- Hợp đồng API không đổi.

## 5. Kiểm chứng
| Lệnh | Kết quả |
|---|---|
| `npm run typecheck` | xanh |
| `npm run lint` | 0 lỗi, 10 cảnh báo — đều có sẵn trước P3 |
| `npm test` | 39 file, **266 xanh** (thêm 28 test: wizard 4, tài liệu/version/gap 9, workspace 2, CR 7, tạo dự án 2, thẻ 3, mock 1) |
| `npm run build` | xanh, 5 route mới |

## 6. DoD P3
- [ ] Đi trọn luồng trên trình duyệt với BE thật — **chưa làm** (xem §7).
- [x] Paused/lỗi AI có banner + nút tiếp tục; lỗi API hiện thông báo, không màn trắng *(kiểm trên mock: import hết credit, CR hết credit, 409 BLOCK_LOCKED, 422 release)*.
- [x] Workspace mode 2 không đổi hành vi *(test cũ xanh; thân workspace không đổi — nên xác nhận thêm khi chạy trình duyệt)*.
- [x] typecheck, lint, build xanh; nhãn UI tiếng Việt.

## 7. Bị chặn / cần quyết định
| Vấn đề | Đề xuất |
|---|---|
| E2E trình duyệt với BE thật cần BE nhánh `-async-extract` + Mongo + tài khoản đăng nhập + credit AI thật; `flintflow_be/.env` có thể trỏ DB dùng chung | Người dùng chọn DB (local/in-memory hay DB dev) và tài khoản rồi chạy; hoặc chạy sau khi BE #53–#55 merge |
| Push nhánh + mở PR FE (xếp chồng trên #30) | Chờ người dùng cho phép |

## 8. Bước tiếp theo
1. Push `feat/FLF-172-mode1-p3-ui`, mở PR `[FLF-172] Mode 1 P3 — UI` base `feat/FLF-172-mode1-p1-schema`.
2. Chạy luồng §1 trên trình duyệt với BE thật (DoD P3 mục 1).
3. P4: phần FE còn thiếu theo §8.4 (`PausedBanner`, `MappingReviewTable`, `FieldsReview` riêng lẻ, `lib/api/endpoints.test.ts` thêm endpoint mới).
