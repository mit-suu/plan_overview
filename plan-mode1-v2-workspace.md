# Plan v2 — Mode 1: Upload SRS → workspace như mode 2 (step theo template, sửa qua chat, CR sau baseline, đọc diagram từ ảnh)

> **Thay thế hướng của** `plan-mode1-import-edit-srs.md` (v1: file .docx gốc là nguồn sự thật, sửa bằng Track Changes, chat chỉ hỏi đáp). v1 giữ làm lịch sử; phần code P0–P4 dùng lại theo §3.
> **Nguồn:** yêu cầu người dùng 2026-09-19; `doc/flintflow-business-workflow.bpmn`, `doc/flintflow-business-flow (1).bpmn` (Flow 1, 2 — nhánh mode 3 "2.5 Select steps by profile", Flow 3, 4, 5, 6); `context/business-flow.md` §1, §4.3, §5 (luật lọc step 1–5), §7.4; khảo sát code BE/FE nhánh `bugfix/FLF-179-…` ngày 2026-09-19.
> **Ticket:** chưa có — tạo trước khi code (CLAUDE.md). Đề xuất một Story `[BE][FE] Mode 1 v2: import → workspace theo template`, mỗi phase một Task con.

## 0. Trạng thái & bàn giao

**Cập nhật: 2026-09-19.** D1–D6 đã chốt (D3 người dùng xác nhận). Jira: Story **FLF-181**, V0 FLF-182 · V1 FLF-183 · V2 FLF-184 · V3 FLF-185 · V4 FLF-186 · V5 FLF-187 · V6 FLF-188 (assignee Tran Tuan Anh).

| Phase | Trạng thái |
|---|---|
| V0 Chốt quyết định + contract-change | **Code xong, PR mở** — BE [#62](https://github.com/mit-suu/flintflow_be/pull/62), FE [#36](https://github.com/mit-suu/flintflow_fe/pull/36) (`feat/FLF-182-mode1-v2-contract`); **chờ nhóm duyệt 4/4 contract-change** |
| V1 BE: import → Spine + kế hoạch step | **Xong** — BE [#63](https://github.com/mit-suu/flintflow_be/pull/63) `feat/FLF-183-mode1-v2-step-plan` (3 commit, 1415 test xanh). Chuyển sang V2: gap report nhóm theo layout, văn xuôi I-4 không trích được ⇒ `custom_sections`, render diagram khi finalize. Cờ thiếu đầu mục FPT = luật có sẵn `section_empty` giữ đỏ (không tạo luật mới) |
| V2 BE: render theo template người dùng | **Xong** — BE [#64](https://github.com/mit-suu/flintflow_be/pull/64) `feat/FLF-184-mode1-v2-render` (3 commit, 1433 test xanh; FLF-184 In Review). Assemble theo layout (`render/layout-sections.ts`): thứ tự + tiêu đề gốc, số đánh lại theo cấp, mục FPT thiếu chèn cạnh anh em cùng nhóm / dưới heading nhóm, `custom:*` nguyên văn, nhãn VI theo `profile.language`. Văn xuôi I-4 không trích được (`ExtractionDraft.unmapped_block_ids`) + khối dưới heading nhóm ⇒ "phần nối" (mục riêng tiêu đề rỗng, gộp vào đầu section chủ). Finalize: vẽ diagram khi PlantUML có mặt, `DocVersion 0.0` = render + stamp, file gốc ở `original_ref` (`download?variant=original`, `has_original_file`), ghép sẵn bản làm việc. Gap report: `missing_fpt_sections[]` đứng đầu + `layout[]`. Contract §4.5 (chỉ thêm field). **Còn nợ:** so thủ công bản tải trên Word 16 (xem §0.1). Phần "tạm tới V4" (#13 blocks, re-upload diff, CR ghi file) đã chuyển sang đọc file render ở V4 |
| V3 FE: workspace mode 2 cho project mode 1 | **Xong** — FE [#38](https://github.com/mit-suu/flintflow_fe/pull/38) `feat/FLF-185-mode1-v2-workspace` (tách từ V0 FE `feat/FLF-182-mode1-v2-contract`; 3 commit, 431 test xanh, lint/build OK; FLF-185 In Review). `page.tsx`: mode 1 import xong ⇒ `FptWorkspace mode1`, chưa xong ⇒ `/import`. Thanh step đỏ "Thiếu" (plan `missing` + chưa accepted), ẩn phase rỗng. Cột "Kế hoạch & version" (`Mode1WorkspaceTools`/`Mode1PlanPanel`/`useStepPlan`): thiếu mục FPT, Bật/Tắt step ẩn, **Ký baseline v1** (`POST /baseline`, khoá khi còn cờ đỏ), VersionsPanel + tải file gốc, link gap report/CR. DocumentPane: `custom:*`, heading nhóm, gợi ý "chạy step X". Gỡ `Mode1Workspace`, `DocBlockView` (tách `Revisions`). **Còn nợ:** e2e trình duyệt trên BE thật (V6); sau v1 chat vẫn là thẻ tạo CR điền sẵn (V4) |
| V4 BE+FE: CR trên Spine, điều khiển bằng chat | **Xong** — BE [#65](https://github.com/mit-suu/flintflow_be/pull/65), FE [#39](https://github.com/mit-suu/flintflow_fe/pull/39), nhánh `feat/FLF-186-mode1-v2-cr-spine` (BE tách từ V2, FE tách từ V3; FLF-186 In Review). **Contract-change §4.6 chờ 4/4.** Vị trí CR = phần tử Spine (`spine-location.ts`), khoá theo path (`SpineLock`, `PATH_LOCKED`), C-4 = op Spine, C-5 so giá trị tại path (`CR_VALUE_CHANGED`) + op chỉ chạm phần tử đã khoá, PATCH vị trí `new_value`/`spine_ops`, C-7 ghi Spine (by = CR) + render version minor (Spine ghi cuối — FLF-178), release = render snapshot, blocks/so sánh/re-upload đọc file render (diff khớp theo text), chat sau v1 tạo CR nguồn `chat` (409 kèm `change_request`). BE 1423 / FE 432 test xanh. **Cắt (§11):** bản tải "có đánh dấu" theo section để sau; `comment` chỉ lưu ở CR |
| V5 BE: đọc ảnh diagram → Spine → vẽ lại | Chưa |
| V6 Test + e2e | Chưa |

**2026-09-20: toàn bộ chuỗi PR đã merge vào `develop`** (BE tới [#66](https://github.com/mit-suu/flintflow_be/pull/66), FE tới [#44](https://github.com/mit-suu/flintflow_fe/pull/44)) — contract-change V0 + V4 §4.6 coi như đã duyệt. Local `develop` hai repo đã reset về `origin/develop` (local chỉ có merge cũ, `git cherry` = 0 commit riêng, không mất gì); **không có conflict phải sửa** — nhóm đã xử lý khi merge. Kiểm lại trên develop: BE typecheck sạch + **1479 test xanh**; FE typecheck sạch (phải xoá `.next` cũ vì còn type của trang đã bỏ), lint 0 lỗi, **568 test xanh**. Upstream có đụng file mode 1 nhưng chỉ đổi bảng màu (FLF-189/190/191 thiết kế lại) và auth (`logoutAndRedirect` thay `clearAuthToken` + `router.push`) — logic mode 1 còn nguyên. Việc mới của nhóm cần biết: FLF-173 `Project.mode` thay `sourceMode`, FLF-174 xác thực OTP, FLF-175 landing sáng, FLF-189→191 thiết kế lại dashboard/auth.

Lịch sử PR xếp chồng (push 2026-09-19, **đã merge 2026-09-20**) — BE: #53 P1 → #54 P2 → #55 việc A → [#57](https://github.com/mit-suu/flintflow_be/pull/57) route `/:id` → [#58](https://github.com/mit-suu/flintflow_be/pull/58) e2e-fixes → [#59](https://github.com/mit-suu/flintflow_be/pull/59) P4 → [#60](https://github.com/mit-suu/flintflow_be/pull/60) FLF-178 → [#61](https://github.com/mit-suu/flintflow_be/pull/61) FLF-179 → [#62](https://github.com/mit-suu/flintflow_be/pull/62) V0 → [#63](https://github.com/mit-suu/flintflow_be/pull/63) V1 → [#64](https://github.com/mit-suu/flintflow_be/pull/64) V2 → [#65](https://github.com/mit-suu/flintflow_be/pull/65) V4. FE: #30 P1 → [#33](https://github.com/mit-suu/flintflow_fe/pull/33) P3 → [#34](https://github.com/mit-suu/flintflow_fe/pull/34) P4 → [#35](https://github.com/mit-suu/flintflow_fe/pull/35) FLF-179 → [#36](https://github.com/mit-suu/flintflow_fe/pull/36) V0 → [#38](https://github.com/mit-suu/flintflow_fe/pull/38) V3 → [#39](https://github.com/mit-suu/flintflow_fe/pull/39) V4. **V1 nhánh `feat/FLF-183-mode1-v2-step-plan` tách từ V0; V2 `feat/FLF-184-mode1-v2-render` tách từ V1** (người dùng chọn làm tiếp trên nhánh chưa merge).

### 0.1 Nợ tồn đọng (cập nhật 2026-09-20, sau khi merge develop)

**Chờ người khác / chờ quyết định**

| # | Việc | Ai / điều kiện | Ghi chú |
|---|---|---|---|
| ~~N1~~ | ~~Duyệt contract-change V0~~ | — | **Xong** — merge 2026-09-20 |
| ~~N2~~ | ~~Duyệt contract-change V4 §4.6~~ | — | **Xong** — merge 2026-09-20 |
| ~~N3~~ | ~~Merge chuỗi PR BE #53→#65, FE #30→#39~~ | — | **Xong** — đều đã vào `develop` |
| ~~N4~~ | ~~Push nhánh plan `docs/FLF-172-mode1-p0-p2`~~ | — | **Xong** 2026-09-20 — 28 commit đã lên remote, nhánh theo dõi `origin/docs/FLF-172-mode1-p0-p2`. Lưu ý: repo đã đổi tên `mit-suu/claude_plan` → **`mit-suu/plan_overview`** (URL cũ còn redirect nên push vẫn chạy; nên đổi `git remote set-url` khi tiện). Chưa mở PR về `main` |
| ~~N5~~ | ~~Dọn nhánh đã merge~~ | — | **Local xong** 2026-09-20 (BE 23 nhánh, FE 14 nhánh; chỉ còn `develop`, `main` — kiểm `git cherry` = 0 trước khi xoá). **Remote giữ nguyên theo quyết định của người dùng** — 23 nhánh mode 1 trên origin đều nằm trọn trong develop, không còn PR mở, xoá được nhưng không cần |

**Nợ kỹ thuật (đã biết, chưa làm)**

| # | Nợ | Từ phase | Mức | Hướng xử lý |
|---|---|---|---|---|
| T1 | Chưa so thủ công bản tải (render 0.0) trên Word 16 với file gốc | V2 | Trung bình | Làm cùng V6 với 2–3 SRS thật; ghi kết quả vào `reports/` |
| T2 | Mất định dạng Word gốc (style, header/footer) | V2 | Chấp nhận (D1) | Mở rộng sau: lấy `styles.xml` + header/footer file gốc làm khung docx-writer |
| T3 | Khối ảnh trong `custom_sections` chỉ render placeholder | V2 | Trung bình | V5 bước 6 (`image_ref` ⇒ nhúng ảnh gốc) |
| ~~T4~~ | ~~Diagram chỉ vẽ ở finalize khi PlantUML reachable; không có ⇒ không vẽ, không báo~~ | V2 | — | **Xong 2026-09-20** — gap report thêm `unrendered_diagrams[]` + ô tổng (chỉ loại có dữ liệu: context/usecase/screen_flow/erd), FE hiện mục "Hình chưa vẽ được". Không sinh cờ, không chặn ký v1 |
| ~~T5~~ | ~~Phần nối (`custom:<id>` tiêu đề rỗng) hiện trơ mã, người dùng khó thấy vị trí~~ | V2/V4 | — | **Xong 2026-09-20** — `continuationOwnerSection(layout, id)`; `section_title` của vị trí CR + tiêu đề group thành `Phần nối của "<mục chủ>"` |
| T6 | Bản tải "có đánh dấu" (w:ins/w:del theo section) — cắt khỏi V4; `variant=tracked` hiện trả bản render | V4 | Trung bình | Task riêng sau V6: diff theo section giữa hai render ⇒ `docx-ooxml` (author = CR id) |
| T7 | Vị trí `comment` của CR chỉ lưu ở CR, không ghi vào file | V4 | Thấp | Đi cùng T6 (comment OOXML) |
| ~~T8~~ | ~~`/changes`, `/undo` sau v1 chỉ trả 409 prefill~~ | V4 | — | **Xong 2026-09-20** — `/changes`, `/reconcile`, `/undo` tạo CR nguồn `verbal` kèm `meta.change_request`; `/changes/preview` (chỉ xem) giữ prefill. Contract §4.7 |
| T9 | `DocBlock` giờ chỉ còn dùng để truy vết import (`source_block_ids`); `DocBlock.locked_by_cr`, `ChangeLocation.block_id` là field chết | V4 | Thấp | Dọn + migration dữ liệu cho project cũ (P2–P4 đã có CR theo block) — task riêng, cần kiểm DB dev |
| ~~T10~~ | ~~`mention` gắn trùng với `spine_link` trên cùng phần tử~~ | V4 | — | **Xong 2026-09-20** — đã link bằng field tới đích nào thì không gắn thêm `mention` cho chính đích đó (đích khác vẫn có) |
| T11 | UI xem nội dung một version đã bỏ (V3), chỉ còn tải; `VersionCompare` dùng block đọc từ file render | V3/V4 | Thấp | Nếu cần: modal xem block của version qua `GET …/versions/:v/blocks` |
| ~~T12~~ | ~~Test trượt: BE I-4 pause/resume; FE `page.test.tsx`~~ | V1/V3 | — | **Xong 2026-09-20** — nguyên nhân là **chờ theo đồng hồ khi máy tải nặng**, không phải logic (3 lượt suite BE trên cây sạch đều xanh; FE test chạy riêng 0,33 s, cả suite > 5 s). BE: helper `extractAndWait` chờ đúng job (`waitForExtraction`) rồi mới đọc. FE: `asyncUtilTimeout` 15 s đặt một chỗ ở `test/setup.ts`, bỏ timeout rải rác |
| T13 | Chưa có e2e trình duyệt trên BE thật cho luồng v2 | V3 | Cao | V6 |

### 0.2 Kế hoạch phiên tiếp theo

Thứ tự đề xuất: **V5 → V6** (V6 cần V5 để test vision parser; nếu nhóm chưa cấp key provider có vision thì làm V6 trước, V5 sau).

**Trước khi code**
1. Đọc §0 + §0.1; `git fetch` + `git pull` `develop` cả hai repo (chuỗi PR đã merge 2026-09-20).
   **⚠ Nhánh `chore/mode1-v2-tech-debt` (BE 4 commit, FE 2 commit — dọn nợ T4/T5/T8/T10/T12) tính tới 2026-09-20 vẫn CHƯA push, CHƯA PR.** Kiểm `git log --oneline develop..chore/mode1-v2-tech-debt` ở cả hai repo trước khi làm gì:
   - Nhánh đó còn commit riêng ⇒ **hỏi người dùng**: push + mở PR về `develop` rồi tách V5 từ `develop`, hay tách V5 thẳng từ `chore/mode1-v2-tech-debt` (xếp chồng như đợt V1–V4).
   - **Đừng** tách V5 từ `develop` rồi bỏ mặc nhánh kia: V5 sửa lại đúng những file vừa đụng (`import/gap-report.service.ts`, `import/step-plan.ts`, `finalize.service.ts`, FE `GapReportView.tsx` + `types/import.ts`) ⇒ merge sau sẽ conflict.
   - Nhánh đó đã trống (đã merge) ⇒ tách V5 từ `develop` như thường.
2. Hỏi người dùng: đọc ảnh diagram bằng cách nào — xem §0.3 (provider vision là phương án chính, **chặn V5 bước 3**, nhưng có phương án thay thế).
3. FE (nếu phải đụng UI): develop đã thiết kế lại (FLF-189→191) — dùng bảng màu/nút mới của dashboard, không copy màu cũ trong component mode 1.

### 0.3 Đọc ảnh diagram — các cách làm (chốt trước V5 bước 3)

Model đang dùng (GLM-5.3-Flash qua Modal, endpoint tương thích OpenAI ở `MODAL_BASE_URL`) **không có vision**. Năm cách, chọn một (A/B là cách làm thật, E luôn nên làm kèm):

| | Cách | Việc phải làm | Đánh đổi |
|---|---|---|---|
| **A** | **Tự dựng model đọc ảnh trên Modal** (giống cách đang chạy GLM): Qwen2.5-VL, InternVL, Llama-3.2-Vision, GLM-4.5V… | Deploy endpoint tương thích OpenAI, thêm `MODAL_VISION_BASE_URL` + tên model; `getAiSdkModel` nhánh `modal` dùng lại được nguyên (`createOpenAI`), ảnh gửi dạng `image_url` của OpenAI | Không cần key vendor mới, dữ liệu không ra ngoài, chi phí theo GPU-giây. Nhưng phải dựng + nuôi endpoint, GPU nặng hơn model text, có cold start, và đọc sơ đồ **kém chính xác hơn** model lớn ⇒ càng phải giữ ngưỡng tin ≤ 0.7 + bước 1.9 xác nhận |
| **B** | **Provider thương mại có sẵn adapter**: Gemini / Anthropic / OpenAI | Chỉ cần key (`GEMINI_API_KEY` / `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` đã có trong `.env.example`; `gemini.provider.ts`, `anthropic.provider.ts`, `openai.provider.ts` đã có sẵn) | Nhanh nhất, đọc sơ đồ tốt nhất. Tốn tiền theo token và SRS của khách đi ra ngoài |
| **C** | **Không dùng AI — đọc XML của Word** | Sơ đồ **vẽ bằng shape / SmartArt trong Word** có chữ nằm trong OOXML (`a:graphic`, `wps:txbx`) ⇒ trích tên actor / UC tất định | Miễn phí, chính xác tuyệt đối khi áp dụng được. Nhưng ảnh chèn (png/jpeg/emf — trường hợp phổ biến) thì chịu |
| **D** | **OCR cục bộ** (Tesseract) | Lấy chữ trong ảnh | Chỉ ra chữ rời, không hiểu quan hệ (ai gọi UC nào, entity nối với nhau ra sao) ⇒ gần như luôn phải sửa tay |
| **E** | **Bỏ phần đọc ảnh** | Giữ ảnh gốc trong bản render (`image_ref`, đóng T3) + để người dùng tự nhập thực thể từ ảnh ở màn 1.9 | Rẻ nhất, không chặn V6, nhưng mất đúng giá trị chính của V5 |

**Khuyến nghị:** làm **E trước** (nhúng ảnh gốc — đằng nào cũng cần cho ảnh loại `other` và emf/wmf, lại đóng luôn T3), rồi chọn A hay B tuỳ ưu tiên: A nếu muốn tự chủ chi phí + dữ liệu và đã quen Modal, B nếu muốn xong nhanh với chất lượng cao nhất. C đáng thử thêm như một lớp tất định chạy trước AI, không thay thế được.

**V5 (FLF-187) — BE, nhánh `feat/FLF-187-mode1-v2-vision` tách từ `develop`**
1. `DocxPackage.binary(name)` + `blocks.ts` lưu `image_ref` (kể cả ảnh trong đoạn có chữ) + caption kề ±1 — unit test với fixture docx có ảnh png.
2. `AiActionInput.images`, đường gọi AI SDK có message part `image`, `ActionType.IMPORT_EXTRACT_DIAGRAM` + giá credit, `withMeteredAi` nhận ảnh — provider theo cách đã chốt ở §0.3.
3. Skill `import-extract-diagram` (phân loại + trích theo schema) + `extract-targets` thêm `flow_to`, `includes/extends`.
4. I-4: gọi vision theo section, `origin: vision`, gộp khử trùng theo tên, độ tin ≤ 0.7.
5. Finalize: section có ảnh đọc được ⇒ diagram render thay ảnh; `other`/emf/wmf ⇒ giữ ảnh gốc qua `image_ref` (đóng T3) + cờ vàng.
6. DoD §9 + đo token ghi `docs/measurements.md`. FE chỉ cần nếu 1.9 phải hiện nguồn "từ ảnh" (kiểm `origin` đã hiển thị chưa).

**V6 (FLF-188) — BE + FE**
1. Sửa `e2e/mode1.spec.ts` theo luồng v2: import ⇒ gap review ⇒ workspace ⇒ chạy step ⇒ chat sửa ⇒ ký v1 ⇒ chat tạo CR ⇒ duyệt ⇒ version 0.x ⇒ release 1.0 (đóng T13).
2. ~~Xử lý test trượt T12~~ — xong 2026-09-20 (xem §0.1).
3. Coverage ≥ 80% cho module mới/sửa (`render/layout-sections`, `import/step-plan`, `change-request/*`, `mode1/*` FE).
4. So thủ công bản tải trên Word 16 (T1), ghi `reports/`.

**Sau V6 (task mới, cần tạo ticket):** T6+T7 bản tải có đánh dấu; T9 dọn DocBlock + migration.

**Lỗi tìm được khi người dùng chạy thật 2026-09-20 (đã sửa, cùng nhánh `chore/mode1-v2-tech-debt`, không ticket theo yêu cầu):**
| # | Triệu chứng | Nguyên nhân | Sửa |
|---|---|---|---|
| L1 | CR bấm "AI đề xuất" chạy mãi; log `GLM_EMPTY_OUTPUT finish_reason=length max_tokens=10240` | `max_tokens` là ngân sách chung cho suy nghĩ + trả lời; lô C-4 12 vị trí × JSON dài ⇒ GLM suy nghĩ hết ngân sách; retry 3 lần y hệt | `glm.provider` nới ngân sách gấp đôi một lần (trần 24576) khi `length`; `GLM_EMPTY_OUTPUT` không còn là lỗi tạm; `PROPOSE_BATCH` 12→4 + lô lỗi tự chia đôi; skill `cr-propose` 4096→6144 |
| L2 | Reload giữa lúc chạy step ⇒ `STEP_NOT_RUNNABLE: đang được xử lý ở một request khác` | Tầng AI không nhận `AbortSignal` ⇒ lượt gọi model của tab cũ chạy hết mới nhả khoá step | `AbortSignal` đi suốt `runStep → executeAiAction → callLLM → provider` (GLM qua SDK, OpenAI/Anthropic/Gemini qua axios); lỗi huỷ không retry; `GET /steps` thêm `running`; FE khoá nút + tự thử lại 3×1,5 s. **Còn hở:** `/gate` không SSE nên không huỷ được |
| L3 | "Tìm vị trí ảnh hưởng & khoá" bấm không có gì (CR từ gap report) | C-2 trả đích là **mã section** (`fixed:3.1.1`…) + từ khoá là tiêu đề mục; C-3 bỏ im lặng ⇒ 0 vị trí, CR đứng ở `impact_review`. Gốc: gap report mời tạo CR cho **mục còn thiếu** — mục trống không có phần tử để sửa (theo D6 phải chạy step) | C-3 nhận đích mã section (mọi phần tử section đó); 0 vị trí ⇒ `409 CR_NO_LOCATIONS` kèm `empty_sections[{section_id,title,step_id}]`; FE: gap report tách khối "mục thiếu → chạy step", prefill CR bỏ `section_empty`/mục thiếu, thông báo lỗi chỉ step. **Chưa làm (cần chốt):** phương án B — vị trí kiểu "mục trống" (`arr[]`) để C-4 đề xuất *thêm mới* |
| L5 | C-3 chết `E11000 … index projectId_1_cr_id_1_block_id_1 dup key { block_id: null }` | DB đã chạy P2–P4 còn **index unique cũ theo block**; mongoose không xoá index cũ. Vị trí V4 không có `block_id` ⇒ từ vị trí thứ hai là trùng `null`. Index mới `(projectId, cr_id, path)` cũng chưa có trong DB | Script `npm run migrate:mode1-v2` (`src/scripts/migrate-mode1-v2-indexes.ts`): mặc định chỉ xoá index chết (an toàn, đã chạy trên DB dev); `--clean-data` mới xoá 31 vị trí bản cũ + field chết. Unique theo `path` chỉ tạo được sau `--clean-data`. Ghi ở `docs/ops.md` §4. **Đây là phần đầu của nợ T9** |
| L6 | Màn "Duyệt" không có nút duyệt (CR-001 của user) | CR ở `in_review` với **0 change group**: mọi vị trí kết luận `not_related`, mà `regroup` chỉ gom `edit`/`comment` ⇒ không có gì để duyệt. FE chỉ hiện chữ, không lối ra ⇒ CR kẹt vĩnh viễn (`revise`/`close` có nhưng không nút) | BE `submitCr` chặn từ đầu: `409 CR_NOTHING_TO_APPROVE` kèm `meta.location_count`, CR giữ `ready_to_submit`. FE: `in_review` + 0 nhóm ⇒ hiện **Đóng CR / Sửa lại CR** như nhánh "mọi nhóm bị từ chối". Contract §4.7 |
| L4 | Báo "tạo CR 404" | Không tái hiện được: DB có CR-001…004, API GET/POST đều 200/401 đúng, route FE có. Nghi dev server chạy code cũ sau khi đổi nhánh | Khuyên restart cả hai dev server; thực ra triệu chứng thật là L3 |

**Đã dọn 2026-09-20** (nhánh `chore/mode1-v2-tech-debt` hai repo, không ticket theo yêu cầu người dùng; BE 4 commit, FE 2 commit; BE 1483 test xanh, FE 568 test xanh): T4, T5, T8, T10, T12. Contract thêm §4.7 (chỉ thêm field / nới rộng). Còn lại: T1, T2 (chấp nhận), T3 (V5), T6+T7, T9, T11, T13 (V6).

---

## 1. Quyết định (người dùng chốt 2026-09-19)

| # | Quyết định | Thay cho v1 |
|---|---|---|
| D1 | **Spine là nguồn sự thật.** Tài liệu render từ Spine bằng assemble/docx-writer như mode 2, **theo thứ tự + tiêu đề mục của chính file người dùng upload** (file đó đóng vai template). Mất định dạng Word gốc — chấp nhận. | G2 (file gốc là nguồn sự thật) |
| D2 | **Step lấy theo template người dùng** — áp luật lọc step của mode 3 (`business-flow.md` §5) lên profile dựng từ file upload. Step có section trong template ⇒ có trong workspace; step đã có nội dung từ import ⇒ `accepted`; step có section nhưng chưa có nội dung ⇒ `pending` (chạy để AI soạn cho đủ). Step **không** có section trong template ⇒ xử lý theo **mức quan trọng của section** (D6). | Mode 1 không chạy step (§4.3 business-flow) |
| D6 | **Mọi đầu mục của mẫu FPT là cốt lõi; mục ngoài mẫu FPT là tuỳ chọn** (người dùng chốt 2026-09-19, thay bản 3 mức cùng ngày — bảng §1.1). Mục FPT mà file không có (hoặc chỉ có heading) ⇒ không ẩn, step `pending` hiện **"Thiếu"**, **cờ đỏ chặn sign-off v1** tới khi chạy step (AI soạn) hoặc viết tay. Mục ngoài FPT (vd References, Design constraints, Sequence diagrams của mẫu IEEE) ⇒ **mục riêng tuỳ chọn**: giữ nguyên văn, sửa qua chat, không báo thiếu. Step không sinh đầu mục (Brief B-*, S-1.x) ⇒ ẩn, bật thêm được. | registry FPT: `required` 18/20 |
| D3 | **Sửa như workspace mode 2 cho tới baseline v1**: chạy step + gate, sửa qua chat (`/changes` preview → áp → undo). Import tạo baseline `imported` (v0) chỉ để đối chiếu gap; **bản làm việc vẫn sửa tự do** tới khi Lead sign-off **baseline v1** (như Flow 2). **Sau v1 mọi sửa đi qua CR (Flow 3, BR-03)**, CR khởi tạo từ chat. *(Suy từ yêu cầu "khi sửa cũng như workspace" + nguyên tắc "sau baseline mọi thay đổi qua C-\*" — **cần người dùng xác nhận**.)* | G9 (chat chỉ hỏi đáp), BR-03 áp ngay sau import |
| D4 | **CR = một commit**: duyệt (3.12) xong **ghi ngay** (3.14), không gom ghi sau — tránh khoá lâu, C-5 kiểm trên dữ liệu cũ, C-3 tìm vị trí trên dữ liệu cũ. | giữ như v1 |
| D5 | **Diagram từ ảnh**: model có vision đọc ảnh use case / ERD / screen flow / context trong file ⇒ trích phần tử Spine (actor, use case + include/extend, entity + quan hệ, màn + flow_to) ⇒ vẽ lại bằng renderer PlantUML có sẵn ⇒ sửa được qua chat. Loại không có renderer (sequence, activity, class…) ⇒ giữ ảnh gốc làm nội dung tĩnh của section. | mới |

### 1.1 Mức quan trọng của section (D6)

Khai báo một chỗ: `src/modules/import/section-importance.ts` — mọi section FPT (`fixed:*`, `feature:*`, `function:*`) = `core`; `custom:*` = `optional`. Không đổi cờ `required` của registry FPT (mode 2 giữ nguyên).

| Mức | Section FPT (step sở hữu) | Template không có mục này |
|---|---|---|
| **core** — mọi đầu mục mẫu FPT | Product Overview · Actors · Use Case Diagram · Use Case Descriptions · Screens Flow · Screen Descriptions · Screen Authorization · Non-Screen Functions · ERD · External Interfaces · Usability · Reliability · Performance · Domain-Specific Attributes · Business Rules · Common Requirements · Application Messages · Other Requirements · Glossary · Record of Changes · feature/function (chương 3) | Không ẩn. Step `pending`, nhãn đỏ "Thiếu". **Cờ đỏ `section_empty`** (luật có sẵn, hồ sơ mode 1 giữ đỏ — FLF-183), chặn sign-off v1. Riêng Record of Changes (sinh từ lịch sử CR) và Glossary (S-8.1) là mục suy dẫn: hệ thống tự điền, chỉ báo thiếu nếu S-8.1 chưa chạy |
| **optional** — mục ngoài mẫu FPT | Heading của file không khớp section FPT nào (`custom:*`) | Giữ nguyên văn (kể cả bảng, ảnh) trong `custom_sections`, render đúng vị trí, sửa qua chat. Không cờ thiếu |
| (ẩn) — step không sinh đầu mục | Brief B-*, S-1.x | Ẩn (`skipped`), bật thêm được |

Mục FPT có trong file nhưng **trống** (chỉ có heading) ⇒ như mục thiếu: step `pending` + cờ đỏ.

### 1.2 Ví dụ: file theo mẫu IEEE 830

profile-match cần thêm từ điển heading IEEE → section FPT (V1). Ánh xạ đề xuất (độ tin thấp ⇒ người dùng xác nhận ở 1.7):

| Heading IEEE | ⇒ | Mức |
|---|---|---|
| 1.1 Purpose, 1.2 Scope, 2.1 Product perspective | `fixed:1` Product Overview | core |
| 1.3 Definitions, acronyms & abbreviations | `fixed:5.5` Glossary | core |
| 2.3 User characteristics | `fixed:2.1` Actors | core |
| 2.2 Product functions, 3.2 Specific requirements | chương 3: feature/function | core |
| 2.1.2 / 3.1.1 User interfaces | `fixed:3.1.2` Screen Descriptions | core |
| 2.1.1, 2.1.3–2.1.5, 3.1.2–3.1.4 System/Hardware/Software/Communication interfaces | `fixed:4.1` External Interfaces | core |
| 3.3 Performance requirements | `fixed:4.2.3` Performance | core |
| 3.5.1 Reliability, 3.5.2 Availability | `fixed:4.2.2` Reliability | core |
| 3.5.3 Security, 3.5.4 Maintainability | `fixed:4.2.4` Domain-Specific Attributes | core |
| 2.5 Assumptions and dependencies, 3.6 Other requirements | `fixed:5.4` Other Requirements | core |
| 1.4 References, 1.5 Overview, 2.1.6 Memory constraints, 2.1.7 Operations, 2.1.8 Site adaptation, 2.4 Constraints, 2.6 Apportioning, 3.2.1 Sequence diagrams, 3.2.2 Classes…, 3.4 Design constraints, 4.2 Appendixes | mục riêng `custom:*` | optional |
| 4.1 Table of contents and index | bỏ (parser loại TOC) | — |

**Mục FPT không có trong file IEEE ⇒ "Thiếu" + cờ đỏ:** Use Case Diagram, Use Case Descriptions, Screens Flow, Screen Authorization, ERD, Usability, Business Rules, Common Requirements, Application Messages (Record of Changes tự sinh). ⇒ SRS IEEE phải chạy các step này (AI soạn từ Spine đã trích) trước khi sign-off v1.

**Nhiều heading → một section** (vd 1.1 Purpose + 1.2 Scope → `fixed:1`): nội dung của cả hai được trích vào Spine; khi render (V2), section FPT xuất dưới heading **đầu tiên**, các heading sau giữ tiêu đề gốc và nội dung nguyên văn như mục riêng để không mất cấu trúc tài liệu. Chốt chi tiết ở V2.

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

### 2.1 Hành trình người dùng (ví dụ)

File `SRS_Lumen.docx`: 1 Giới thiệu · 2 Actors (bảng) · 3 Use Cases (bảng + **ảnh use case diagram**) · 4 Chức năng (4.1 Đăng ký, 4.2 Đăng nhập) · 5 NFR (5.3 Bảo mật chỉ có tiêu đề) · Phụ lục A Biên bản họp. **Không có** Business Rules, Screen Flow, Record of Changes.

**Giai đoạn 1 — Upload + tách (wizard, một lần)**

| Bước | Người dùng | Hệ thống |
|---|---|---|
| Upload | Kéo thả | Preflight (định dạng, mật khẩu, Track Changes lạ, stamp) |
| Xác nhận | "Bản mới nhất?" → Có | — |
| Mapping | Sửa dòng độ tin thấp; "Phụ lục A → mục riêng" | Tách block, khớp heading/cột, **ghi thứ tự + tiêu đề mục làm layout** |
| Trích | Thanh tiến độ | Bảng: tất định. Văn xuôi: AI theo mục. **Ảnh: vision ⇒ actor, UC, include/extend** |
| Xem field | Chỉ field độ tin thấp (kể cả từ ảnh) | — |
| Chọn step | Thanh step (bảng dưới) | Luật lọc §5 V1 + mức quan trọng §1.1 |
| Gap report | "Thiếu mục FPT" (đỏ) · mục riêng ngoài FPT | Baseline v0 `imported` + check |

| Step | Trạng thái | Lý do |
|---|---|---|
| Giới thiệu, Actors, Use Cases, chức năng 4.1/4.2, NFR | ✅ Đã xong | Có mục + có nội dung |
| Use case diagram (S-3.6) | ✅ Đã xong | Vẽ lại PlantUML từ dữ liệu đọc được trong ảnh |
| 5.3 Bảo mật | ⏳ Chờ chạy | Có mục, chưa có nội dung |
| **Business Rules (S-7.1)** | 🔴 **Thiếu** — chờ chạy | Core, template không có ⇒ cờ đỏ, chặn v1 |
| **Screen Flow (S-4.2)** | 🔴 **Thiếu** — chờ chạy | Đầu mục FPT ⇒ cờ đỏ |
| Record of Changes | ⚙ Tự sinh | Mục FPT suy dẫn từ lịch sử CR |
| Brief B-* | 🙈 Ẩn | Không sinh đầu mục, bật thêm được |
| Phụ lục A | 📝 Mục riêng | Không có field Spine, giữ nguyên văn |

**Giai đoạn 2 — Workspace trước baseline v1 (sửa tự do như mode 2 — D3)**
Màn = workspace mode 2 (chat trái, tài liệu phải, thanh step trên — chỉ step áp dụng). Tài liệu luôn render từ Spine theo layout file gốc.
- **Chạy step thiếu:** "Chạy" ở S-7.1 ⇒ AI hỏi phần thiếu ⇒ nháp ⇒ Accept / Revise.
- **Sửa bằng chat:** *"Đổi thời gian phản hồi NFR-01 từ 2 giây thành 1 giây"* ⇒ xem trước (`nfrs[NFR-01].threshold: 2 s → 1 s`, mục ảnh hưởng) ⇒ Áp dụng ⇒ tài liệu render lại ⇒ Undo được. Lệnh kéo theo phụ thuộc (*"Đổi actor Student thành Learner"*) ⇒ xem trước liệt kê UC/bảng/diagram liên quan, diagram vẽ lại.
- **Bật step ẩn:** "Bật" Brief nếu muốn AI phân tích lại ý tưởng. Không bỏ qua được step của đầu mục FPT.
- **Mục riêng:** *"Phụ lục A: thêm dòng họp ngày 20/09"* ⇒ xem trước ⇒ áp dụng.
- Cờ đỏ = 0 (mọi đầu mục FPT có nội dung) ⇒ **sign-off ⇒ baseline v1**.

**Giai đoạn 3 — Sau v1: mỗi lệnh sửa trong chat là một CR (commit)**
*"Khoá tài khoản sau 5 lần đăng nhập sai"* ⇒ CR-001 (nguồn chat) ⇒ AI hỏi lại nếu mơ hồ ⇒ vị trí theo Spine (`functions[4.2].validations`, NFR bảo mật, mục 5.3) **bị khoá** ⇒ đề xuất từng chỗ (sửa / chỉ comment / không liên quan + lý do) ⇒ kiểm (giá trị chưa bị đổi, luật Spine; AI chỉ vàng) ⇒ duyệt từng nhóm ⇒ **ghi ngay**: Spine đổi, render lại, version 1.1 nháp, mở khoá. Tải: bản sạch hoặc bản có Track Changes 1.0→1.1 (tác giả CR-001).

**Giai đoạn 4 — Release + upload lại**
Release (cờ đỏ = 0) ⇒ gom CR đã ghi ⇒ 2.0, bản sạch có stamp. File người ngoài sửa ⇒ upload ⇒ stamp của dự án ⇒ diff theo block với bản render mới nhất, không tạo version ⇒ "Tạo CR từ khác biệt".

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
   6. **(D6)** Step sở hữu section FPT mà file không có (hoặc trống) ⇒ `applied` + `missing: true` (không bao giờ `hidden`); B-*, S-1.x ⇒ `hidden`.
   Lưu `TemplateProfile.step_plan: { step_id, state: applied|hidden|enabled, missing: boolean, reason }[]`.
   Cờ: dùng luật có sẵn `section_empty`, hồ sơ luật mode 1 **không hạ** xuống vàng nữa (đỏ, luật code, không waive — G5); tự đóng khi section có dữ liệu. *(Thay cho tên `core_section_missing` dự kiến ban đầu — FLF-183.)*
   Thêm từ điển heading IEEE 830 vào `section-catalog.ts` (§1.2).
3. **Finalize** (`finalize.service.ts`, `spine-builder.ts`), một txn `by: import`:
   - op thực thể như hiện tại (+ `custom_sections` từ block unmapped và `unmapped_block_ids` của I-4 — tránh mất văn xuôi khi render từ Spine);
   - `steps[]`: step `applied` có ≥ 1 field được trích ⇒ `accepted` (`last_seq` = seq cuối của lô); `applied` chưa có nội dung ⇒ `pending`; `hidden` ⇒ `skipped`;
   - `screens[].detail_status` = `signed_off` nếu có function đã trích, ngược lại `placeholder` (không mở vòng S-5 cho màn trống — người dùng bật lại được);
   - `progress.current_step = nextStep(step_plan)`;
   - `renderAll` diagram + `assemble` (V2) ⇒ bản làm việc; baseline `imported` (v0) + `DocVersion 0.0` = file **render**, lưu kèm file gốc (`original_ref`) để tải lại.
4. **Step engine tôn trọng plan** (`step-registry.ts` `orderedSteps/nextStep/totalSteps`, `section-status.ts` `progressByStep`, `gate.service.ts` `phaseFullyAccepted`, `pipeline.controller.ts GET /steps`): bỏ step `skipped`; tổng step = số step applied/enabled.
5. **Bật/tắt step**: `PATCH /step-plan` `{ step_id, enabled }` — bật step hidden ⇒ `pending`; tắt step đã bật chưa có nội dung ⇒ `skipped`. **Không cho tắt step của đầu mục FPT** (409 `CORE_STEP_REQUIRED`) và step đã có dữ liệu (409).
6. **Flag profile theo mode**: mọi `recompute` (step-runner, change.service, reconcile) chọn `MODE1_RULE_PROFILE` khi `project.mode = import`; tầng 1 "hình thức" so với `required_sections` của profile thay cho FPT.
7. **Guard**: `mode1-guard` chỉ áp khi đã có baseline `v1`/release (không phải `imported`).
8. Gap report: nhóm theo `layout` người dùng; danh sách **"Thiếu mục FPT"** (đỏ) đứng đầu; mục riêng ngoài FPT liệt kê riêng (không cờ).

**DoD V1:** import SRS mẫu thiếu Business Rules + Screen Flow ⇒ S-7.1, S-4.2 `pending` + cờ đỏ chặn sign-off, không tắt được; mục "Phụ lục A" ⇒ `custom:*` giữ nguyên văn, không cờ; file theo mẫu IEEE (§1.2) ⇒ ánh xạ đúng bảng, đúng danh sách thiếu. `GET /steps` trả step applied, đúng trạng thái accepted/pending; `nextStep` đúng; chạy một step pending qua `/run` + gate được; `/changes` preview/apply/undo chạy trên project mode 1 trước v1; test luật lọc 1–5 (bảng ví dụ `business-flow.md` §7.4 làm fixture).

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
- Thanh step: step của đầu mục FPT còn thiếu hiện nhãn đỏ **"Thiếu"**; panel **"Step ẩn"** (Brief: nút Bật) — gọi `PATCH /step-plan`.
- Nút sign-off khoá khi còn cờ đỏ `section_empty`, liệt kê đầu mục FPT còn thiếu.
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
