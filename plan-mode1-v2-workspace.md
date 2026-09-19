# Plan v2 — Mode 1: Upload SRS → workspace như mode 2 (step theo template, sửa qua chat, CR sau baseline, đọc diagram từ ảnh)

> **Thay thế hướng của** `plan-mode1-import-edit-srs.md` (v1: file .docx gốc là nguồn sự thật, sửa bằng Track Changes, chat chỉ hỏi đáp). v1 giữ làm lịch sử; phần code P0–P4 dùng lại theo §3.
> **Nguồn:** yêu cầu người dùng 2026-09-19; `doc/flintflow-business-workflow.bpmn`, `doc/flintflow-business-flow (1).bpmn` (Flow 1, 2 — nhánh mode 3 "2.5 Select steps by profile", Flow 3, 4, 5, 6); `context/business-flow.md` §1, §4.3, §5 (luật lọc step 1–5), §7.4; khảo sát code BE/FE nhánh `bugfix/FLF-179-…` ngày 2026-09-19.
> **Ticket:** chưa có — tạo trước khi code (CLAUDE.md). Đề xuất một Story `[BE][FE] Mode 1 v2: import → workspace theo template`, mỗi phase một Task con.

## 0. Trạng thái & bàn giao

**Cập nhật: 2026-09-19.** Plan mới viết xong, **chờ người dùng duyệt** các quyết định ở §1 (đặc biệt D3) trước khi mở V1.

| Phase | Trạng thái |
|---|---|
| V0 Chốt quyết định + contract-change | Chưa |
| V1 BE: import → Spine + kế hoạch step | Chưa |
| V2 BE: render theo template người dùng | Chưa |
| V3 FE: workspace mode 2 cho project mode 1 | Chưa |
| V4 BE+FE: CR trên Spine, điều khiển bằng chat | Chưa |
| V5 BE: đọc ảnh diagram → Spine → vẽ lại | Chưa |
| V6 Test + e2e | Chưa |

Nhánh code hiện có (chưa push, chưa merge): P1 #53, P2 #54, việc A #55, P3 FE, `-import-route-id`, `-e2e-fixes`, P4, FLF-178, FLF-179. **V1 tách từ nhánh FLF-179** (đã gồm mọi thứ trên).

---

## 1. Quyết định (người dùng chốt 2026-09-19)

| # | Quyết định | Thay cho v1 |
|---|---|---|
| D1 | **Spine là nguồn sự thật.** Tài liệu render từ Spine bằng assemble/docx-writer như mode 2, **theo thứ tự + tiêu đề mục của chính file người dùng upload** (file đó đóng vai template). Mất định dạng Word gốc — chấp nhận. | G2 (file gốc là nguồn sự thật) |
| D2 | **Step lấy theo template người dùng** — áp luật lọc step của mode 3 (`business-flow.md` §5) lên profile dựng từ file upload. Step có section trong template ⇒ có trong workspace; step đã có nội dung từ import ⇒ `accepted`; step có section nhưng chưa có nội dung ⇒ `pending` (chạy để AI soạn cho đủ); step **không** có section trong template ⇒ **ẩn**, người dùng **bật thêm** được. | Mode 1 không chạy step (§4.3 business-flow) |
| D3 | **Sửa như workspace mode 2 cho tới baseline v1**: chạy step + gate, sửa qua chat (`/changes` preview → áp → undo). Import tạo baseline `imported` (v0) chỉ để đối chiếu gap; **bản làm việc vẫn sửa tự do** tới khi Lead sign-off **baseline v1** (như Flow 2). **Sau v1 mọi sửa đi qua CR (Flow 3, BR-03)**, CR khởi tạo từ chat. *(Suy từ yêu cầu "khi sửa cũng như workspace" + nguyên tắc "sau baseline mọi thay đổi qua C-\*" — **cần người dùng xác nhận**.)* | G9 (chat chỉ hỏi đáp), BR-03 áp ngay sau import |
| D4 | **CR = một commit**: duyệt (3.12) xong **ghi ngay** (3.14), không gom ghi sau — tránh khoá lâu, C-5 kiểm trên dữ liệu cũ, C-3 tìm vị trí trên dữ liệu cũ. | giữ như v1 |
| D5 | **Diagram từ ảnh**: model có vision đọc ảnh use case / ERD / screen flow / context trong file ⇒ trích phần tử Spine (actor, use case + include/extend, entity + quan hệ, màn + flow_to) ⇒ vẽ lại bằng renderer PlantUML có sẵn ⇒ sửa được qua chat. Loại không có renderer (sequence, activity, class…) ⇒ giữ ảnh gốc làm nội dung tĩnh của section. | mới |

**Giữ nguyên từ v1:** G1 (người tạo project = Lead, tự duyệt), G4 đánh số version (`0.0` import, minor khi ghi CR, major khi release), G5 không waive, Flow 4/5 (credit, lỗi AI), preflight I-1 + stamp, re-upload diff (1.4), release (Flow 6).

**Bỏ:** Track Changes trên file gốc, bookmark `_ff_`/`_fft_` làm neo nội dung, khoá theo block docx, `DocBlock` làm nguồn văn bản sau import, watermark trên file gốc (watermark chuyển sang bản render).

---

## 2. Luồng mới (ánh xạ BPMN)

```
Tạo project mode 1 (UC-13)
 └─ 1.1 Upload .docx ─► 1.2 Preflight (I-1) ─► [stamp dự án này sau v1] 1.4 Diff ⇒ CR nguồn re-upload
    ─► 1.3 Xác nhận bản mới nhất ─► 1.5 Tách block (I-2) ─► 1.6 Khớp profile (I-3) ─► 1.7 Xác nhận mapping
    ─► [Flow 4] 1.8 Trích field (I-4, text) + 1.8b Đọc ảnh diagram (vision, D5) ─► 1.9 Xác nhận field
    ─► 1.10 Baseline v0 `imported` ─► [MỚI ≈ 2.5] Chọn step theo profile (luật 1–5)
    ─► 1.11–1.12 Check ─► 1.13 Gap report (theo profile: section bắt buộc trống ⇒ cờ đỏ "cần viết tay")
    ─► WORKSPACE (≈ Flow 2 từ 2.12): step pending chạy draft + gate; sửa qua chat (/changes); bật step ẩn
       ─► 2.15 Fill template (assemble theo layout người dùng) ─► 2.16–2.17 Check ─► 2.18 Sửa cờ
       ─► 2.20–2.21 Sign-off ─► baseline v1
    ─► sau v1: lệnh sửa trong chat ⇒ CR (3.1 nguồn "chat", người yêu cầu = user) ─► 3.2…3.14 (ghi ngay khi duyệt)
    ─► Flow 6 Release ⇒ major, bản sạch
```

---

## 3. Dùng lại / sửa / bỏ code đã có

| Khối (nhánh hiện tại) | Số phận |
|---|---|
| `docx-ooxml` (package, blocks, properties, accept-all, watermark, comments, track-changes) | **Giữ** cho import (I-1/I-2), stamp, watermark bản render. Track-changes/comments dùng lại ở V4 để tạo bản tải về "có đánh dấu thay đổi" (diff giữa 2 bản render). Thêm đọc nhị phân `word/media/*` (V5) |
| `import/` preflight, parse, profile-match, extract (I-4 nền, pause/resume), fields review, gap report | **Giữ.** Sửa: finalize (V1), gap report theo profile (V1), extract thêm nhánh ảnh (V5) |
| `import/spine-builder.ts` | **Giữ**, mở rộng: seed `steps[]`, `progress`, `screens.detail_status`, `custom_sections` (V1) |
| `TemplateProfile` (heading_map, table_map, required_sections) | **Giữ**, thêm `layout[]` (thứ tự, tiêu đề, cấp, section_id) và `step_plan` (V1) |
| `doc-version/` (versioning, versions list, release, download) | **Giữ khung**; nguồn file đổi: mỗi version = bản **render** từ snapshot Spine (không còn sửa file gốc) |
| `DocBlock` sau import, `block-diff`, `reupload` | Chỉ còn dùng cho **diff re-upload** (1.4) và truy vết nguồn trích (`source_block_ids`). Không dùng làm nội dung tài liệu |
| `change-request/` (state machine, clarify, impact, propose, verify, decision, write, lock) | **Giữ state machine + luồng**, **đổi đơn vị**: vị trí = path/section Spine thay vì block docx; khoá theo path; C-5 so giá trị tại path thay cho old text của block; C-7 = `applyTransaction` + render version mới (V4) |
| `mode1-guard` (chặn chat/`/changes`) | **Sửa**: chỉ chặn khi đã có baseline v1 (không phải v0) — và thay 409 bằng tạo CR từ chat (V4) |
| FE `Mode1Workspace`, `DocBlockView`, `VersionCompare` theo block, CR workspace | `Mode1Workspace` **thay bằng** `FptWorkspace` sau import; wizard import **giữ**; CR workspace **giữ** (hiện proposal theo path); `DocBlockView` **bỏ** (dùng `DocumentPane`) |
| Test P4 | Test import/ooxml/state machine giữ; test write/lock/verify CR viết lại ở V6 |

---

## 4. Phase V0 — Chốt + contract-change (2 điểm)

- Người dùng xác nhận D3.
- PR `contract-change` (4/4) cho:
  1. `spine.schema.ts`: `steps[].status` thêm `skipped`; thêm `custom_sections[]` `{ id, heading, level, blocks: [{kind: paragraph|list|table|image, text|rows|image_ref}], source: "import" | "manual" }` — nội dung các mục **không có field Spine** (luật 5 + phần văn xuôi I-4 không trích được) để render lại nguyên văn và sửa qua chat.
  2. `rendered-document.types.ts`: section có thể mang `custom: true`; id `custom:<n>`.
  3. `import-change-contract.md`: `GET/PATCH /projects/:id/step-plan`; CR `source.kind` thêm `chat`; vị trí CR `{ path | section_id }` thay `block_id`; bỏ endpoint blocks theo version (hoặc đổi thành trả `RenderedDocument` của version).
  4. `step-registry` không đổi file JSON; thêm hàm lọc.

**DoD V0:** quyết định ghi vào §1; contract-change merge; FE types + mock cập nhật.

## 5. Phase V1 — BE: import → Spine + kế hoạch step (8 điểm)

1. **Layout từ file upload** (`profile-match.service.ts`, `template-profile.model.ts`): `layout[]` = danh sách heading theo thứ tự tài liệu `{ order, heading_text, level, section_id | "custom:<n>" }`. Heading `unmapped` ⇒ `custom:<n>`.
2. **Chọn step theo profile** — module mới `src/modules/pipeline/step-plan.ts` (hàm thuần), luật `business-flow.md` §5:
   1. Step có field render vào section có trong `layout` ⇒ `applied`.
   2. Thêm step có field mà step đã chọn **đọc** (`reads`) — lặp tới điểm dừng; ⇒ `applied`, chỉ lưu Spine.
   3. Step không ra section (B-\*, S-1.x, S-5.1, S-5.5, S-8.4, S-9.x): S-8.4/S-9.x luôn `applied`; **B-\*, S-1.x mặc định `hidden`** với mode 1 (đã có tài liệu, không cần brief) — bật được.
   4. Thứ tự theo id step.
   5. Section bắt buộc trong profile không có field ⇒ `custom_sections` giữ nội dung import; trống ⇒ cờ đỏ "cần viết tay".
   Còn lại ⇒ `hidden`. Lưu `TemplateProfile.step_plan: { step_id, state: applied|hidden|enabled, reason }[]`.
3. **Finalize** (`finalize.service.ts`, `spine-builder.ts`), một txn `by: import`:
   - op thực thể như hiện tại (+ `custom_sections` từ block unmapped và `unmapped_block_ids` của I-4 — tránh mất văn xuôi khi render từ Spine);
   - `steps[]`: step `applied` có ≥ 1 field được trích ⇒ `accepted` (`last_seq` = seq cuối của lô); `applied` chưa có nội dung ⇒ `pending`; `hidden` ⇒ `skipped`;
   - `screens[].detail_status` = `signed_off` nếu có function đã trích, ngược lại `placeholder` (không mở vòng S-5 cho màn trống — người dùng bật lại được);
   - `progress.current_step = nextStep(step_plan)`;
   - `renderAll` diagram + `assemble` (V2) ⇒ bản làm việc; baseline `imported` (v0) + `DocVersion 0.0` = file **render**, lưu kèm file gốc (`original_ref`) để tải lại.
4. **Step engine tôn trọng plan** (`step-registry.ts` `orderedSteps/nextStep/totalSteps`, `section-status.ts` `progressByStep`, `gate.service.ts` `phaseFullyAccepted`, `pipeline.controller.ts GET /steps`): bỏ step `skipped`; tổng step = số step applied/enabled.
5. **Bật/tắt step**: `PATCH /step-plan` `{ step_id, enabled }` — bật ⇒ `pending` (chạy được, render section FPT tương ứng vào cuối chương gần nhất trong layout); tắt step chưa có nội dung ⇒ `skipped`. Không cho tắt step đã có dữ liệu (409).
6. **Flag profile theo mode**: mọi `recompute` (step-runner, change.service, reconcile) chọn `MODE1_RULE_PROFILE` khi `project.mode = import`; tầng 1 "hình thức" so với `required_sections` của profile thay cho FPT.
7. **Guard**: `mode1-guard` chỉ áp khi đã có baseline `v1`/release (không phải `imported`).
8. Gap report: nhóm theo `layout` người dùng; thêm danh sách step `pending` (chưa có nội dung) và step `hidden`.

**DoD V1:** import SRS mẫu ⇒ `GET /steps` chỉ trả step applied, đúng trạng thái accepted/pending; `nextStep` đúng; chạy một step pending qua `/run` + gate được; `/changes` preview/apply/undo chạy trên project mode 1 trước v1; test luật lọc 1–5 (bảng ví dụ `business-flow.md` §7.4 làm fixture).

## 6. Phase V2 — BE: render theo template người dùng (5 điểm)

- `assemble.service.ts`: nhận `layout` (từ profile khi `mode = import`, FPT khi không có) — thay `buildNumberMap`/`GROUP_HEADINGS` cứng bằng layout: đánh số + tiêu đề **theo heading người dùng**; section `custom:*` render từ `custom_sections`; section FPT của step được bật thêm mà layout không có ⇒ chèn sau mục cùng nhóm gần nhất, tiêu đề FPT.
- `section-renderer.ts`: `headingAndLevel` lấy từ layout; `blocksFor` giữ nguyên theo section id (nội dung theo Spine field).
- Ngôn ngữ: giữ theo `profile.language` (tiêu đề cột bảng mặc định theo ngôn ngữ).
- Diagram nhúng như mode 2 (`diagramImages`).
- `doc-version`: tạo version = `assemble` từ snapshot + `docx-writer` + stamp (`writeStamp`) + watermark DRAFT khi chưa release.

**DoD V2:** SRS mẫu import xong ⇒ `/document` và bản tải về có đúng thứ tự + tiêu đề như file gốc; mục không có field giữ nguyên văn; so sánh thủ công với file gốc trên Word 16.

## 7. Phase V3 — FE: workspace mode 2 cho project mode 1 (5 điểm)

- `app/projects/[id]/page.tsx`: mode `import` + import xong ⇒ `FptWorkspace` (thêm tab Version/Release + CR); chưa xong ⇒ wizard `/import` (giữ).
- `lib/constants/step-registry.ts`, `StepProgressBar`, `PhaseNavBar`, `PhaseHeader`: dựng từ danh sách step BE trả (không cứng 51/56, ẩn phase rỗng).
- Panel "Step theo template": danh sách step ẩn + nút **Bật** (gọi `PATCH /step-plan`), ghi lý do ẩn.
- `DocumentPane`: section `custom:*`, nhãn "Chưa có nội dung — chạy step X" cho section của step pending; bỏ nút "xem tại S-8.2" với mode 1.
- Chat: trước v1 ⇒ luồng `/changes` như mode 2 (`DiffPreviewModal`); sau v1 ⇒ V4.
- Gỡ `Mode1Workspace`, `DocBlockView`; giữ `VersionsPanel`, `GapReportView`, CR workspace.

**DoD V3:** e2e: import ⇒ workspace hiện đúng step; chạy step pending; bật step ẩn; sửa qua chat + undo; tải bản render.

## 8. Phase V4 — CR trên Spine, điều khiển bằng chat (8 điểm)

- **3.1 từ chat**: sau v1, lệnh sửa trong chat ⇒ BE tạo CR (`source.kind = chat`, `requester` = user, `description` = lệnh) thay cho 409; chat hiện thẻ CR, chạy tiếp 3.2… trong thẻ hoặc CR workspace.
- **C-3 vị trí = path/section Spine**: tái dùng `impact.service` (đồ thị Spine) + tìm từ khoá trong `RenderedDocument` hiện tại (thay DocBlock). `found_by` giữ.
- **Khoá**: khoá theo `path` (và section `custom:*`) thay block; cùng quy tắc giành–trả, giữ khi paused, mở khi ghi/đóng/huỷ.
- **C-4** gọi skill step sở hữu field (giữ); output = op Spine (+ text cho `custom_sections`).
- **C-5** thay "old text khớp block" bằng "giá trị tại path không đổi kể từ khi khoá" (so `before` với Spine hiện tại) + `planTransaction` chạy khô + luật; AI consistency vàng (giữ).
- **C-7 ghi ngay khi duyệt (D4)**: `applyTransaction` (by = CR id, reason) ⇒ `assemble` ⇒ version minor mới; bản tải về "có đánh dấu" = diff theo section giữa render cũ và mới, ghi `w:ins/w:del` bằng `docx-ooxml` (author = CR id). Thứ tự ghi an toàn như FLF-178 (Spine là bước ghi cuối, dọn version/file khi lỗi).
- Re-upload (1.4): diff theo block giữa file upload và **bản render** version mới nhất ⇒ "Tạo CR từ khác biệt" (giữ).
- Release (Flow 6): giữ; bản sạch = render snapshot release.

**DoD V4:** chat sau v1 ⇒ CR ⇒ duyệt một phần ⇒ version 0.x mới render đúng; hai CR chạm cùng path ⇒ `BLOCK_LOCKED` (đổi tên `PATH_LOCKED`?); release 1.0.

## 9. Phase V5 — Đọc ảnh diagram → Spine → vẽ lại (7 điểm)

Khảo sát: provider hiện gửi **chỉ text**; model đang dùng (GLM-5.3-Flash) **không có vision**; block `image` không giữ rel id; `DocxPackage` chưa đọc nhị phân.

1. **Đọc ảnh**: `package.ts` thêm `binary(name)`; `blocks.ts` lưu `image_ref` (`a:blip/@r:embed` ⇒ `word/media/*`), bắt cả ảnh trong đoạn có chữ; ghép caption kề (±1 block) để đoán loại diagram.
2. **Định dạng**: png/jpeg gửi thẳng; emf/wmf cần chuyển đổi (LibreOffice headless) — chưa có trên máy, hoãn: emf/wmf ⇒ giữ ảnh tĩnh + cờ vàng "không đọc được".
3. **Tầng AI**: `AiActionInput.images?: { mime, data }[]`; đường gọi dùng AI SDK `generateText` với message parts `image` (đã có `getAiSdkModel`) cho provider có vision (Gemini / Anthropic / OpenAI — chọn một, cấu hình key); `ActionType` mới `IMPORT_EXTRACT_DIAGRAM`, giá credit riêng (credit hiện tính theo lượt, không theo token); `withMeteredAi` nhận ảnh.
4. **Skill** `assets/skills/action/import-extract-diagram/`: phân loại ảnh (usecase | erd | screen_flow | context | other) + trích theo schema thực thể (`actors`, `use_cases` với `includes/extends`, `entities.relations`, `screens.flow_to`); `extract-targets` thêm `flow_to`, `includes/extends`.
5. **Trong I-4**: mỗi section, sau bảng tất định, trước lô text ⇒ ảnh của section ⇒ gọi vision ⇒ `itemsFromAi` (origin `vision`, `source_block_ids` = block ảnh); gộp/khử trùng theo tên với dữ liệu từ text; độ tin mặc định ≤ 0.7 ⇒ luôn qua 1.9 xác nhận.
6. **Vẽ lại**: finalize gọi `renderAll`; section chứa ảnh đã đọc được ⇒ render diagram mới thay ảnh; loại `other` ⇒ ảnh gốc giữ trong `custom_sections` (`image_ref`).

**DoD V5:** SRS có ảnh use case + ERD (png) ⇒ Spine có actor/UC/entity tương ứng ⇒ tài liệu render diagram PlantUML thay ảnh; sửa "thêm actor Admin vào UC-02" qua chat ⇒ diagram vẽ lại; đo token/chi phí ghi `docs/measurements.md`.

## 10. Phase V6 — Test (5 điểm)

Unit: `step-plan` (luật 1–5, ví dụ §7.4), layout, assemble theo layout, finalize seed steps, guard theo v1, CR theo path (lock/verify/write), vision parser. Integration: import ⇒ workspace ⇒ step ⇒ chat ⇒ sign-off v1 ⇒ CR ⇒ release. FE: StepProgressBar động, panel bật step, DocumentPane custom. E2E trình duyệt trên BE thật (sửa `e2e/mode1.spec.ts`). Coverage ≥ 80% cho module mới/sửa.

## 11. Effort & thứ tự

| Phase | Điểm | Phụ thuộc |
|---|---|---|
| V0 | 2 | — |
| V1 | 8 | V0 |
| V2 | 5 | V1 |
| V3 | 5 | V1 (mock), V2 |
| V4 | 8 | V1, V2 |
| V5 | 7 | V1 (song song V2–V4) |
| V6 | 5 | tất cả |
| **Tổng** | **40** | |

Cắt nếu trễ: V5 xuống "chỉ usecase + ERD, png"; V4 bản tải về "có đánh dấu" để sau (chỉ bản render sạch + danh sách thay đổi).

## 12. Rủi ro

| Rủi ro | Giảm thiểu |
|---|---|
| Render từ Spine làm mất văn xuôi không trích được | `custom_sections` giữ nguyên văn phần unmapped + `unmapped_block_ids`; gap report liệt kê; so với file gốc ở DoD V2 |
| Mất định dạng Word gốc (style, header/footer công ty) | Chấp nhận (D1). Mở rộng sau: dùng `styles.xml` + header/footer của file gốc làm khung cho docx-writer |
| Luật lọc step sai với template lạ | `step_plan` hiển thị lý do + bật/tắt tay; test theo ví dụ §7.4 |
| Model vision đọc sai diagram | Độ tin ≤ 0.7 bắt buộc xác nhận; giữ ảnh gốc khi loại `other`; đo trên SRS thật |
| Thêm provider có vision (key, chi phí) | Một provider, ActionType riêng, giá credit riêng |
| Đổi hợp đồng đóng băng (Spine, RenderedDocument, contract mode 1) | Gom một PR `contract-change` ở V0 |
| Code CR theo block (P2) phải viết lại theo path | Giữ state machine, controller, DTO; thay lớp vị trí/khoá/verify/write |
