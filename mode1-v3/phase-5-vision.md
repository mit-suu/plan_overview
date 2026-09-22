# Phase 5 — Đọc ảnh diagram + giữ ảnh gốc (7 điểm)

> Chuyển nguyên từ V5 của plan v2 (FLF-187 vẫn là ticket của việc này, đang To Do). Chi tiết lựa chọn cách đọc ảnh (A–E) ở `../mode1-old/plan-mode1-v2-workspace.md` §0.3 — **đã chốt: text GLM trên Modal, ảnh Gemini**; `GEMINI_API_KEY` có trong `.env`, `gemini.provider.ts` nhận `AbortSignal`.
> Nhánh BE `feat/FLF-187-mode1-v2-vision` (giữ tên cũ vì đã có ticket). Không phụ thuộc phase 1–4, làm song song được, nhưng đụng `import/gap-report.service.ts`, `import/step-plan.ts`, `finalize.service.ts` ⇒ tách từ nhánh mới nhất đang mở để tránh conflict.

## Bàn giao

Chưa bắt đầu.

## Liên quan tới Flow 1 / 3

Đọc ảnh là một phần của **1.8** (AI trích field theo section), đi qua Flow 4 + 5 như mọi lượt AI. Dữ liệu vào Spine trước v0 ⇒ không cần CR. Sửa thực thể đọc sai **sau** v0 ⇒ chỉ qua CR (form 3.1). Màn 1.9 (độ tin ≤ 0.7) là chỗ sửa duy nhất ngoài CR — nhấn mạnh trên UI 1.9.

## Việc (thứ tự: E trước, rồi B)

1. **Giữ ảnh gốc (đóng T3 — mất 35/39 ảnh ở T1):** `DocxPackage.binary(name)`; `blocks.ts` lưu `image_ref` (`a:blip/@r:embed` ⇒ `word/media/*`), bắt cả ảnh trong đoạn có chữ, caption kề ±1 block. `custom_sections` block `image` render ảnh thật thay placeholder (`docx-writer`). Test fixture docx có png.
2. **Tầng AI nhận ảnh:** `AiActionInput.images?: { mime, data }[]`; đường AI SDK message part `image`; `ActionType.IMPORT_EXTRACT_DIAGRAM` + giá credit riêng; `withMeteredAi` nhận ảnh. Provider Gemini.
3. **Skill** `assets/skills/action/import-extract-diagram/`: phân loại (usecase | erd | screen_flow | context | other) + trích theo schema; `extract-targets` thêm `flow_to`, `includes/extends`.
4. **I-4:** mỗi section — sau bảng tất định, trước lô text — gọi vision cho ảnh của section; `origin: vision`, `source_block_ids` = block ảnh; gộp khử trùng theo tên; độ tin ≤ 0.7 ⇒ luôn qua 1.9.
5. **Finalize:** section có ảnh đọc được ⇒ diagram PlantUML thay ảnh; `other` / emf / wmf ⇒ giữ ảnh gốc qua `image_ref` + cờ vàng "không đọc được".
6. FE 1.9: hiện nhãn "từ ảnh" cho field `origin: vision` (kiểm đã có chưa).
7. Đo token/chi phí trên SRS thật ⇒ `flintflow_be/docs/measurements.md`.

## DoD

SRS có ảnh use case + ERD (png) ⇒ Spine có actor/UC/entity ⇒ tài liệu render PlantUML thay ảnh; ảnh loại khác giữ nguyên trong bản render (đo lại bằng cách của T1: số ảnh bản render ≈ bản gốc); sau v0 "thêm actor Admin vào UC-02" qua panel xem trước ⇒ form 3.1 ⇒ CR 3.2…3.14 ⇒ diagram vẽ lại.
