# Phase 3 — FE: màn mode 1 theo Flow 1 / 3 / 6 (5 điểm)

> Đối chiếu: F1–F10 (`00-quyet-dinh.md`). Nhánh FE `feat/mode1-v3-ui` (tách từ `feat/FLF-188-mode1-v2-tests` nếu #51/#52 chưa merge).
> Mock trước trong `mocks/mode1/handlers.ts` để làm song song phase 1–2.
> `app/projects/**` chưa i18n ⇒ chữ tiếng Việt viết thẳng. Màu/nút theo thiết kế mới (FLF-189→191, FLF-197).

## Bàn giao

**2026-09-22 — xong phần chính.** Nhánh FE `feat/mode1-v3-ui` (tách từ `feat/FLF-188-mode1-v2-tests`), 1 commit `f275a9b` (46 file), **chưa push**. FE **680 test xanh** (105 file), typecheck sạch, lint 0 lỗi, `next build` chạy.

| Việc | Kết quả |
|---|---|
| 3.1 khung | `page.tsx` mode 1: ẩn rail tiến độ, nút "Chạy bước", gate/ElicitPanel, gợi ý "chạy step" ở tài liệu; ẩn panel ghi Spine thẳng (Tên riêng, Hàng đợi màn, Brief); VerificationPane không có waive. `Mode1PlanPanel` ⇒ **`Mode1FlagsPanel`** (cờ đỏ chặn release, mỗi cờ nút **Tạo CR** nguồn gap report); `Mode1WorkspaceTools` chỉ còn cờ + link + version. Gỡ `useStepPlan` (hết người dùng) |
| 3.2 panel xem trước | `ChangePanel requiresCr` (mode 1): ẩn Hoà giải / Undo, dòng giải thích; diff dùng **`CreateCrPreviewModal`** — nút **Tạo CR** ⇒ `/change-requests?new=1&…&preview_id=…` (form 3.1 có sẵn, nguồn gợi ý "Yêu cầu miệng", người yêu cầu để trống cho BA điền). Tách component riêng để panel mode 2 không phụ thuộc router. Form hiện khung "Bản xem trước đính kèm", gửi `preview_id` |
| 3.3 lối vào khác | Chat: `CrPrefillCard` chỉ còn thẻ mời mở form (bỏ nhánh "đã tạo CR"), nguồn/ref lấy từ `meta.prefill.source`. Gap report: khối mục thiếu có nút **Tạo CR bổ sung mục thiếu** (bỏ "chạy step"). Nguồn trong form đúng 6 nguồn BPMN (`NEW_CR_SOURCE_KINDS`), "verbal" đổi nhãn "Yêu cầu miệng (ghi rõ người yêu cầu)" |
| 3.4 CR workspace | Vị trí hiện theo mục (path ở tooltip) ở `ProposalCard` + `ChangeGroupPanel`; `manual_fix` ⇒ nút chính **"Sửa trong step <step>"** (`owner-step-draft`), sửa JSON thành "Sửa trực tiếp"; duyệt group cũng mở ô lý do (≥ 10 ký tự); CR có seed hiện khung "Bản xem trước đính kèm"; ghi xong nhắc tải bản có đánh dấu |
| 3.5 release / tải | `VersionsPanel`: bản nháp sau CR có **Tải bản có đánh dấu** (`has_tracked_file`, tên `…_tracked_DRAFT.docx`); release chỉ bản sạch |
| Khác | `errors.ts` câu tiếng Việt cho `MODE1_NO_*`, `IMPORT_REUPLOAD_NO_STAMP`, `CR_NO_OWNER_STEP`, `PREVIEW_EXPIRED`; `CR_NO_LOCATIONS` không còn khuyên chạy step. Types + mock MSW theo contract §4.8–4.9 |

**Chưa làm / để phase sau:**
- **3.6 Flow 4/5 trên UI** — chưa rà từng màn (PausedBanner của CR có sẵn; 3.9 lỗi AI hiện qua hộp lỗi vì `manual_fix` không pause). Làm cùng phase 4.
- Khối release chưa ghi câu "CR đang chạy không chặn release".
- `e2e/mode1.spec.ts` vẫn theo luồng v2 (chạy step, ký v1) ⇒ viết lại ở phase 6.
- Chưa chạy thử trên trình duyệt với BE thật.

**Mở PR:** BE `feat/mode1-v3-flow1` + `feat/mode1-v3-flow3` và FE `feat/mode1-v3-ui` cùng lúc (BE phase 1 đổi hành vi mà FE cũ không theo). Hợp đồng §4.8–4.9 là contract-change ⇒ cần 4/4 duyệt.

## Việc

### 3.1 Khung workspace mode 1 (F1, F2)

`app/projects/[id]/page.tsx`: mode 1 import xong **không** dựng thanh step / gate / nút "Chạy bước" / rail tiến độ. Còn lại:
- trái: chat (hỏi đáp + lệnh sửa ⇒ thẻ "Tạo CR");
- giữa: `DocumentPane` (tài liệu render);
- `WorkspaceToolRail`: **Sửa tài liệu có xem trước** (bút chì), Gap report, Change request, Version & release.

Gỡ khỏi mode 1: `StepProgressBar`, `GateCard`, `WorkspaceHeader` nút chạy (giữ cho mode 2), khối "Ký baseline v1" + bật/tắt step + nút "Chạy/Mở lại <step>" + nút Waive trong `Mode1PlanPanel`. `Mode1PlanPanel` còn: cờ đỏ (mỗi cờ nút **"Tạo CR"** ⇒ form 3.1 nguồn `gap_report`, đích = `section_id`), cờ vàng (chỉ đọc), khối Release.

### 3.2 Panel "Sửa tài liệu có xem trước" ⇒ 3.1 (F5) — yêu cầu gốc của người dùng

`ChangePanel.tsx` + `useChanges` + `DiffPreviewModal`:
- Ô lệnh ⇒ "Xem trước thay đổi" như cũ (diff).
- Mode 1: nút xác nhận đổi thành **"Tạo CR"** ⇒ mở **form 3.1** (`ChangeRequestForm.tsx`) điền sẵn: tiêu đề = dòng đầu lệnh, mô tả = lệnh, **nguồn** (bắt buộc, mặc định "Yêu cầu miệng"), **người yêu cầu** (bắt buộc, không tự điền "Người dùng"), kèm `preview_id` + khung "Bản xem trước đính kèm" (tóm tắt diff).
- Tạo xong ⇒ chuyển tới `change-requests/[crId]`; CR chạy 3.2 → 3.14 như mọi CR.
- Ẩn "Undo op cuối", "Hoà giải một lượt" ở mode 1. Dòng phụ dưới tiêu đề: "Xem trước để soạn change request — tài liệu chỉ đổi sau khi CR được duyệt".
- `PREVIEW_EXPIRED` khi tạo ⇒ CR vẫn tạo (không seed), báo "Bản xem trước đã hết hạn, CR tạo không kèm gợi ý".

### 3.3 Mọi lối vào khác cũng mở form 3.1 (F4)

- Chat: BE trả `CHANGE_REQUIRES_CR` + `prefill` ⇒ `CrPrefillCard` nút "Tạo CR" ⇒ form 3.1 (bỏ nhánh "CR đã tạo sẵn" của V4).
- Gap report (`GapReportView`): mỗi mục thiếu / cờ ⇒ form 3.1 nguồn `gap_report`.
- Re-upload có stamp (1.4) ⇒ màn diff ⇒ "Tạo CR từ khác biệt" ⇒ form 3.1 nguồn `reupload`.
- Chọn nguồn trong form: email stakeholder, biên bản họp, gap report, re-upload, comment Viewer, yêu cầu miệng — đúng 6 nguồn BPMN (không có "chat").

### 3.4 CR workspace theo từng nút (F6–F9)

`app/projects/[id]/change-requests/[crId]/page.tsx` + `mode1/*`:
- Vị trí hiển thị theo **block** (tiêu đề mục + trích đoạn/bảng trước–sau), path chỉ ở tooltip (F6). Nhãn `found_by: preview` ⇒ "Từ bản xem trước".
- 3.9 (`manual_fix`): nút chính **"Sửa trong step <tên step>"** ⇒ form của step sở hữu (dùng lại form/ô nhập của step mode 2 nếu tách được) ⇒ `owner-step-draft` ⇒ về kiểm 3.7; nút phụ "Sửa trực tiếp" (vị trí không có step); nút "Huỷ CR" (3.10, lý do).
- 3.12: ô lý do bắt buộc cả khi **duyệt**.
- Tất cả bị từ chối ⇒ "Sửa lại CR" (về 3.5 — hiện "Đang khoá lại vị trí…") hoặc "Đóng CR" (3.13).
- 3.14 xong ⇒ thẻ "Đã ghi — bản nháp 0.x" + tải **bản có đánh dấu** / bản sạch.

### 3.5 Release (Flow 6)

Khối Release (trong `VersionsPanel` hoặc `Mode1PlanPanel`): cờ đỏ = 0 ⇒ nút "Release"; > 0 ⇒ khoá + danh sách cờ (mỗi cờ "Tạo CR"). Ghi rõ "CR đang chạy không chặn release — sẽ vào lần release sau". Tải: bản release (sạch, stamp) · bản nháp minor (watermark DRAFT) · bản có đánh dấu · file gốc.

### 3.6 Flow 4 / 5 trên UI

Mọi bước AI (1.8, 1.11, 3.2, 3.6, 3.8, 3.9-skill) hết credit ⇒ "Đang dừng tới khi nạp credit" + (Lead) link nạp; lỗi AI ⇒ hai nút **"Thử lại ngay"** / **"Để sau"**. Kiểm các màn CR + wizard import đều có.

## Test (vitest + `renderWithIntl`)

- `page.test.tsx`: mode 1 không có thanh step / nút chạy / ký v1; mode 2 không đổi.
- `ChangePanel.test.tsx`: mode 1 "Tạo CR" ⇒ form 3.1 có `preview_id`; thiếu nguồn / người yêu cầu ⇒ không gửi; ẩn Undo/Hoà giải.
- `ChangeRequestForm.test.tsx`: đúng 6 nguồn; requester bắt buộc.
- `Mode1PlanPanel.test.tsx`: cờ đỏ ⇒ "Tạo CR" nguồn gap; không waive.
- CR: 3.9 "Sửa trong step"; lý do duyệt bắt buộc; revise hiện khoá lại.
- Coverage vùng mode 1 ≥ 80 %.

## DoD

Trên project mode 1 vừa import: bút chì ⇒ gõ lệnh ⇒ xem diff ⇒ Tạo CR ⇒ điền nguồn + người yêu cầu ⇒ CR chạy 3.2…3.14 ⇒ tài liệu đổi, 0.1 có bản đánh dấu. Không còn chỗ nào của mode 1 cho sửa thẳng, chạy step, waive hay ký v1.
