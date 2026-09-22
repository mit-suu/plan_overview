# Phase 5 — Đọc ảnh diagram + giữ ảnh gốc (7 điểm)

> Chuyển nguyên từ V5 của plan v2 (FLF-187 vẫn là ticket của việc này, đang To Do). Chi tiết lựa chọn cách đọc ảnh (A–E) ở `../mode1-old/plan-mode1-v2-workspace.md` §0.3 — **đã chốt: text GLM trên Modal, ảnh Gemini**; `GEMINI_API_KEY` có trong `.env`, `gemini.provider.ts` nhận `AbortSignal`.
> Nhánh BE `feat/FLF-187-mode1-v2-vision` (giữ tên cũ vì đã có ticket). Không phụ thuộc phase 1–4, làm song song được, nhưng đụng `import/gap-report.service.ts`, `import/step-plan.ts`, `finalize.service.ts` ⇒ tách từ nhánh mới nhất đang mở để tránh conflict.

## Bàn giao

**Xong 2026-09-22** — PR BE [#75](https://github.com/mit-suu/flintflow_be/pull/75) (`feat/FLF-187-mode1-v2-vision`, trên #74, worktree `../wt-be-flow456`), FE [#56](https://github.com/mit-suu/flintflow_fe/pull/56) (trên #55). FLF-187 ⇒ In Review. Contract §4.10 (contract-change, gom với §4.8–4.9).

- **1 (T3)**: `DocxPackage.binary`, `OoxmlBlock/DocBlock.image_ref`; ảnh dưới mục FPT ⇒ phần nối nguyên văn; render nhúng lại ảnh gốc qua `render/import-media.ts` (id `media:<part>` đi chung đường ảnh diagram, cache gói theo `file_ref`); `docx-writer` nhận JPEG; EMF ⇒ chỗ giữ ảnh + chú thích. Caption kề: `captionOf` (±1 block) dùng cho prompt vision.
- **2**: `LlmCallOptions.images` (Gemini `inline_data`; provider khác ⇒ `AI_PROVIDER_NO_VISION`), `ExecuteAiActionOptions.images`, `withMeteredAi(…, { images })`, `ActionType.IMPORT_EXTRACT_DIAGRAM` 2 credit. Đặt ở options thay vì `AiActionInput` (input là biến prompt).
- **3**: skill `import-extract-diagram` (`gemini-3.5-flash`, `maxTokens` 8192 — 4096 bị cắt ở ảnh 19 UC); `screens.flow_to` thêm vào schema excerpt (`includes/extends` đã có).
- **4**: chỉ ảnh ở `DIAGRAM_SECTIONS` (`fixed:1, 2.1, 2.2.1, 2.2.2, 3.1.1, 3.1.5`) — ảnh chụp màn ở mục khác không gửi (tiết kiệm credit). `origin: vision`, trần 0.7, `needsConfirm` ⇒ luôn qua 1.9 (dùng chung cho extract / summary / gap report / finalize). Chữ thắng ảnh khi trùng phần tử; `REF_LIST_FIELDS` gộp hợp (cả `collectEntities` xuyên section). Draft lưu `diagram_images[{block_id, kind}]`.
- **5**: ảnh đọc được ⇒ bỏ khỏi phần nối (PlantUML từ Spine thay); không đọc được ⇒ giữ + cờ vàng `import_image_unread` (thêm vào `MODEL_OWNED_RULES`).
- **6**: FE 1.9 nhãn "từ ảnh" + nhắc sau v0 chỉ sửa qua CR.
- **7**: `flintflow_be/docs/measurements.md` — 12 lượt Gemini thật trên ảnh SRS Report3: ~2,2k tokens_in/ảnh, phân loại đúng context/use case/other. **Còn nợ**: đo ERD + luồng màn (key free tier hết quota ngày); môi trường thật cần key trả phí.

Test: BE 1548, FE 682 xanh. DoD phần "sau v0 thêm actor qua panel xem trước ⇒ CR ⇒ diagram vẽ lại" dùng đường phase 2/3 đã có e2e — chưa chạy lại e2e với SRS có ảnh (đưa vào phase 6).

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
