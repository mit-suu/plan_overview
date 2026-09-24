# FLF-177 — Chất lượng sơ đồ Use Case (layout, tên hệ thống, association, auth)

Ticket: **FLF-177** (dùng lại, không tạo ticket mới) · Repo: `flintflow_be` · Branch: `bugfix/FLF-177-usecase-include-extend`

## Trạng thái (cập nhật 2026-09-22 14:00)

| Phase | Nội dung | Trạng thái |
|---|---|---|
| 1 | Renderer: bố cục 2 phía, gom UC theo actor người, tách hình theo UC + số cạnh, giữ cạnh actor system ở UC extend | **Xong — commit `c0dd24d`, đã push** (`origin/bugfix/FLF-177-usecase-include-extend`) |
| 2 | Skill actors-and-usecases: actor thông báo gắn đúng UC; xác định cách truy cập mọi actor người | **Commit `159f8f6`, đã push** — còn đo trước/sau ShipNhanh (chạy thật qua UI) |
| 3 | `project.system_name` (tiếng Anh) cho sơ đồ + docx | **Xong — commit `4bdf119`, đã push** — `npm test` 1522 pass |

### Cập nhật 2026-09-22 (phiên tiếp theo — đã commit `159f8f6`, `4bdf119` và push)
- **Phase 2**: `actors-and-usecases/SKILL.md` 0.6.0 (148/150 dòng — trần test): S-3.1 thêm *Access* (self-registers / invited / identity provider / no sign-in, ghi vào `description`; thiếu ⇒ **một** `assumptions[]` gộp `path: "actors[]"` để user xác nhận ở gate); S-3.2 actor thông báo chỉ gắn UC phát sự kiện + bảng UC tài khoản theo access; S-3.3 theme (3) cấm UC thụ động "Receive…/View Notifications", theme (4) đổi thành *Account access*. `references/actor-rules.md`, `missing-usecase-checklist.md` cập nhật theo. Lệch plan: Elicit không nhận guidance của content skill (`step-runner.service.ts` truyền `content_guidance: ""`) nên "hỏi 1 câu gộp" đi qua assumption ở gate, không phải câu hỏi Elicit. `fixtures/op-cases/s2-s3/s-3.3.json`: UC13 đổi thành "Respond to Failed Credit Purchase".
- **Phase 3**: `system_name: string | null` ở `spine.types.ts`, zod `.default(null)` (theo tiền lệ FLF-171 ⇒ Spine/baseline cũ đọc ra `null`, **không cần migration**), Mongoose, `createEmptySpine`, JSON schema (`npm run schema:export`). Helper `src/modules/spine/system-name.ts`. Renderer use case + context dùng `system_name ?? name`. `source_hash`: context hash tên đang vẽ; usecase chỉ hash `system_name` khi đã đặt ⇒ project cũ **không** bị `diagram_stale` hàng loạt. Docx: đổi một chỗ trong `buildDocumentParts` (`assemble.service.ts`) ⇒ bìa, title, tên file draft/baseline/mode 1 đều dùng tên hệ thống, fallback tên project truyền vào (mode 1 import có `system_name = null` ⇒ không đổi). Cờ vàng `system_name_missing` (có sơ đồ context/usecase mà chưa đặt tên, remediation B-0.1; mode 1 loại trừ); `non_english_content` quét cả `system_name`. Skill `product-brief` 0.3.0 + `b0-intake.md` + `elicit-loop` (ghi `project.system_name` khi user chốt). Fixture 19 màn thêm `system_name: "FlintFlow"`.
- Hợp đồng đóng băng (user cho phép sửa thẳng trên nhánh, không cần PR nhãn): `section-registry.ts` thêm `project_system_name`; `step-registry.json` S-2.5 + S-3.6 đọc `project:name,system_name`; ghi lịch sử ở `docs/api/pipeline-contract.md`.
- Chưa làm: đo trước/sau ShipNhanh (Phase 2) — cần BE/FE/PlantUML + model thật.
- Snapshot `*.snap` bị vitest ghi lại khác xuống dòng mỗi lần chạy — `git checkout` lại, đừng commit.

### ⚠ Đọc trước khi chạy tiếp (người nhận bàn giao)
- **Code đã push** (2026-09-22 14:05): `origin/bugfix/FLF-177-usecase-include-extend` = 2 commit trên `develop` @ `beeaa27`: `bda2a61` (luật include/extend, cờ, eval S-3, script rerender — plan [260920-1518](../../260920-1518-flf-177-use-case-diagram-correctness/plan.md)) và `c0dd24d` (renderer — Phase 1 plan này, gồm cả thay đổi renderer của plan 260920). Người nhận: `git fetch && git checkout bugfix/FLF-177-usecase-include-extend`. Chưa có PR. CI (`ci.yml`) chỉ chạy khi push vào main/master/develop/refactor_codebase_v3 ⇒ branch này không có CI run; chạy test local. Không commit: `AGENTS.md`, `docs/refactor-plan/`, `CLAUDE.local-backup.md` (không thuộc FLF-177).
- File Phase 1 chạm vào (commit `c0dd24d`): `src/modules/diagram/renderers/usecase.renderer.ts`, `src/modules/diagram/renderers/common.ts` (comment), `src/modules/diagram/renderers/renderers.test.ts`, `src/modules/diagram/renderers/__snapshots__/renderers.test.ts.snap`, `assets/skills/renderer/usecase/SKILL.md`.
- Kiểm Phase 1 sau khi checkout: `npm run typecheck` · `npm test -- src/modules/diagram/` (20 test pass) · `npm test` (1521 pass; 2 test `test/integration/mode1*release*` có thể timeout 30s khi máy yếu — chạy riêng lại là pass).
- Tài liệu kèm theo nằm **ngoài repo** (workspace `flintflow/` không phải git) — gửi cùng thư mục plan: `plans/reports/usecase-blackbox/` (diagnosis, báo cáo S01–S05 + S09, ảnh trước/sau ở `raw/layout-experiment/`, backup spine ở `raw/spine-backup-before-rerender/`).
- **DB đã bị ghi**: 6 project test của tài khoản `fixture@flintflow.io` (S01 `6ab189ea…9c75`, S02 `6ab19543…9ef0`, S03 `6ab1a421…a1cf`, S04 `6ab1afe1…a495`, S05 `6ab1be18…a770`, ShipNhanh `6ab20797…ac68`) đã được render lại sơ đồ bằng renderer mới (qua `renderDiagram`, `force`, `step_id: S-3.6`). Backup spine trước khi ghi: `raw/spine-backup-before-rerender/`. Project khác không bị đụng.
- Môi trường cần: BE `npm run dev` (:5000), FE `npm run dev` (:3000), PlantUML server `http://localhost:8080` (`PLANTUML_BASE_URL`), tài khoản test `npm run seed:e2e-user`.

Nguồn: [diagnosis-reported-usecase-bugs.md](../../reports/usecase-blackbox/diagnosis-reported-usecase-bugs.md) · báo cáo black-box S01–S05 trong [reports/usecase-blackbox/](../../reports/usecase-blackbox/) · baseline scope lớn [scenario-09 ShipNhanh](../../reports/usecase-blackbox/scenario-09-shipnhanh-large-scope-baseline.md) · thử layout [raw/layout-experiment/](../../reports/usecase-blackbox/raw/layout-experiment/)

## Quyết định đã chốt (user, 2026-09-22 11:42)
- Tên hệ thống: **phương án B** — field riêng `project.system_name` (tiếng Anh), tách khỏi tên project làm việc.
- SRS và sơ đồ **cố định tiếng Anh**.
- Làm tiếp trên branch FLF-177 (mục đích branch = sửa lỗi sơ đồ use case).
- Thứ tự: Phase 1 renderer trước. Baseline = **1 dự án scope lớn (ShipNhanh, giao hàng)** chạy trước khi sửa.

## Outcome / acceptance
1. Sơ đồ use case đọc được: actor người một phía, actor system/time phía kia; UC gom theo actor chính; hình quá dày được tách.
2. Boundary + context diagram hiển thị tên hệ thống tiếng Anh user đã chốt/được gợi ý, không phải tên project.
3. Actor thông báo nối vào UC phát ra thông báo; không còn UC thụ động "Receive…/View Notifications".
4. Mọi actor người có cách truy cập được xác định (tự đăng ký / được mời / IdP / không đăng nhập); Log In/Register/Reset gắn đúng tập actor.
Non-goals: đổi PlantUML sang engine khác; đổi FE (trừ khi Phase 3 cần hiển thị `system_name`); sửa các lỗi hội thoại khác (hỏi lặp, lộ field nội bộ) — ghi riêng.

## Phases
| # | Phase | Phụ thuộc | File chính |
|---|---|---|---|
| 1 | Renderer layout + dây actor phụ ở UC extend | — | `src/modules/diagram/renderers/usecase.renderer.ts`, `renderers.test.ts` (+snapshot) |
| 2 | Skill: association thông báo + cách truy cập actor | baseline ShipNhanh (số nền) | `assets/skills/content/actors-and-usecases/SKILL.md`, `references/missing-usecase-checklist.md`, `references/actor-rules.md`, `fixtures/s3-eval/` |
| 3 | `project.system_name` (EN) | Phase 1 (renderer dùng field) | `spine.types.ts`, `spine.model.ts`, `assets/schema/srs-spine.schema.json`, `source-hash.ts`, `usecase.renderer.ts`, `context.renderer.ts`, `skills/content/product-brief/references/b0-intake.md` (+SKILL/checklist), `deterministic-check` (cờ vàng), migration script |

### Phase 1 — Renderer
- Cạnh actor người viết `A -- UC` (trái); actor `system`/`time` viết `UC -- A` (phải). Đã chứng minh: phía do **chiều cạnh** quyết định, không do thứ tự khai báo (`s02-split.png` vs `s02-split2.png`).
- Thứ tự UC: `(actor chính = actor_ids[0], id)` — vẫn tất định; cập nhật comment hợp đồng "sắp theo id" trong `common.ts`/renderer cho đúng.
- **Tách hình theo actor người chính** (baseline ShipNhanh: tách theo id xé UC của Driver/Shop Staff/Retail Customer/Accountant qua 2 hình, tiêu đề liệt kê 5 actor system — xem [scenario-09](../../reports/usecase-blackbox/scenario-09-shipnhanh-large-scope-baseline.md)). Khoá nhóm = actor người đầu tiên của cụm (fallback actor bất kỳ); dồn nguyên nhóm actor vào một hình; nhóm quá trần mới cắt theo cụm. Trần theo số UC **và** số cạnh association (đo trên S02/S03/S04/ShipNhanh trước khi chốt). Tiêu đề phần = tên actor người của phần.
- Giữ cạnh actor `system`/`time` ở UC mở rộng/bị include (chỉ bỏ cạnh actor người như hiện tại).
- Validate: unit test mới cho phía/chiều cạnh, thứ tự, ngưỡng tách, cạnh system ở extend; `npm test -- src/modules/diagram/`, `npm run typecheck`; render lại S02/S03/ShipNhanh qua PlantUML local, so ảnh trước/sau. `diagram_stale`: đổi thứ tự text không đổi `source_hash` (hash theo field, không theo text) — xác nhận bằng test hiện có.
- Rủi ro: snapshot đổi hàng loạt (chấp nhận, review diff); Graphviz vẫn có thể chụm dây khi 1 phía quá đông → tách hình là lưới an toàn.

**Kết quả Phase 1 (2026-09-22 ~13:50, commit `c0dd24d`).** Sửa `usecase.renderer.ts` (phía theo chiều cạnh, nhóm theo actor người chính, trần 20 UC + `MAX_ASSOCIATIONS_PER_DIAGRAM = 24` cạnh, giữ cạnh system/time ở UC extend/include), `common.ts` (comment hợp đồng), `assets/skills/renderer/usecase/SKILL.md` (tài liệu output), `renderers.test.ts` (+4 test: phía/khai báo, actor system giữ cạnh, tách theo actor người, tách theo trần cạnh; sửa 2 test cũ; snapshot cập nhật). `npm run typecheck` sạch; `npm test` 1521 pass (2 test integration mode1-release timeout 30s ở 1 lần chạy khi RAM thấp, chạy lại 13/13 pass). Render lại spine thật: CampShare 17UC/31 cạnh → 2 hình (12UC/23 + 5UC/9); PawBook → 2 hình (12/24 + 9/11); ShipNhanh 33UC → 3 hình theo actor (Founder/Dispatcher · Driver/Shop Staff/Retail Customer/Recipient · Support/Accountant), mỗi actor người nằm trọn một hình. Ảnh: `reports/usecase-blackbox/raw/layout-experiment/s0{2,3,9}-after-*.png`. Còn lại do model (Phase 2): Email Service nối 6 UC (CampShare), Driver gắn vào "Approve Driver Verification".

### Phase 2 — Skill (đo trước/sau) — CHƯA BẮT ĐẦU
- Bắt đầu từ: đọc [diagnosis](../../reports/usecase-blackbox/diagnosis-reported-usecase-bugs.md) Lỗi 2 + Lỗi 3 (có dòng skill cụ thể: `actors-and-usecases/SKILL.md` S-3.2 dòng 58–61, S-3.3 theme (3) dòng 77–78 và (4) dòng 78–79; `references/missing-usecase-checklist.md` mục 3–4). Branch đã có thay đổi chưa commit ở chính các file skill này từ FLF-177 trước — sửa tiếp trên đó, không ghi đè.
- Số nền đã có: ShipNhanh baseline ([scenario-09](../../reports/usecase-blackbox/scenario-09-shipnhanh-large-scope-baseline.md)) — không có UC Log In, Reset chỉ gắn Founder, SMS Gateway gắn "Track Order via SMS Link", timer gắn "Accept Suggested Order", thiếu actor ngân hàng.
- Baseline: **chỉ 1 dự án — ShipNhanh** (quyết định user). Số nền = kết quả chạy thật qua UI; nếu dùng `eval:usecase-s3` thì tạo 1 fixture từ brief ShipNhanh. S01–S05 chỉ dùng làm bằng chứng lỗi, không chạy lại.
- S-3.2: actor thông báo thuộc UC mà luồng của nó phát sự kiện (UC đổi trạng thái), không thuộc UC chỉ đọc trạng thái.
- S-3.3 theme (3): viết lại — nhận thông báo không phải UC trừ khi người nhận phải ra quyết định; cấm UC thụ động "Receive…/View Notifications".
- S-3.1: mỗi actor người xác định cách truy cập; thiếu ⇒ hỏi user **1 câu gộp**; Log In/Register/Reset gắn theo kết quả; tài khoản được mời/tạo ⇒ UC "Create/Invite … Account" cho actor quản lý. Theme (4) dựa trên kết quả này. Ghi vào `assumptions[]`/`description`, không thêm field.
- Validate: trước/sau trên cùng dự án ShipNhanh; không hồi quy include/extend (mục tiêu gốc FLF-177).
- Rủi ro: LLM không tuân ⇒ thêm cờ vàng heuristic theo tên (chỉ khi eval cho thấy cần).

### Phase 3 — `project.system_name` — CHƯA BẮT ĐẦU
- Schema: `system_name: string | null` (Mongoose, JSON schema `required` + `additionalProperties:false` ⇒ phải thêm vào cả hai), default `null`; migration: project cũ `null` ⇒ renderer fallback `project.name`.
- Chủ sở hữu ghi: B-0.1 (step đã có quyền ghi `project`). Skill intake: hỏi tên hệ thống; user chưa có/đưa tên tiếng Việt ⇒ gợi ý 2–3 tên tiếng Anh cho user chọn; ghi `project.system_name`.
- Renderer use case + context dùng `system_name ?? name`; `source_hash` usecase **thêm** tên hệ thống (hiện usecase không hash tên — đổi tên không làm stale), context đổi sang `system_name ?? name`.
- Cờ vàng deterministic-check: tới S-2.5 chưa có `system_name`.
- `Project.name` (FE, tên làm việc) giữ nguyên, **không** đồng bộ (tách hẳn hai tên là mục đích phương án B).
- **Docx dùng tên hệ thống** (chốt 12:06): một nguồn tên cho mọi chỗ in trong tài liệu = `system_name ?? project.name`. Đổi ở chỗ gọi `assemble` (đang truyền `Project.name`), không đổi nội bộ `assemble.service`. Ảnh hưởng: bìa (`docx-writer.ts:172`), title "X - Software Requirement Specification" (`:91`), tên file (`buildDocxFileName`, `:146`). Kiểm riêng mode 1 (import SRS có template khách) trước khi áp.
- **FE không làm UI riêng** (chốt 12:06): tên hiện trên bìa trong panel SRS; sửa qua chat (op `set project.system_name`). Chỉ thêm gợi ý/field ở cài đặt project nếu test thấy user nhầm ô tên project là tên tài liệu.
- Validate: test schema/op-engine (set `project.system_name` qua op), renderer, source-hash, docx (bìa/title/tên file dùng tên hệ thống, fallback `project.name`), migration dry-run.
- Backup DB trước migration (quy tắc workspace).

## Câu hỏi còn mở
- (đã chốt 12:06) Docx dùng `system_name`; FE không làm UI riêng.
- Mode 1: trang bìa theo template khách có cần giữ tên khác không — kiểm khi làm Phase 3.