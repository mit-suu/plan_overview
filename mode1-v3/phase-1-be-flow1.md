# Phase 1 — BE: Flow 1 kết thúc ở gap report hoặc 3.1 (4 điểm)

> Đối chiếu: F1, F2, F3, F4, F11 (`00-quyet-dinh.md`). Nhánh BE `feat/mode1-v3-flow1`.
> Mode 2/3 không đổi — rẽ theo `mode === "import"`.

## Bàn giao

Chưa bắt đầu.

## Việc

### 1.1 Kiểm lại từng nút 1.1–1.13 (0,5 điểm — đọc code, ghi bảng vào mục Bàn giao)

| Nút | Chỗ nhìn | Điều phải đúng |
|---|---|---|
| 1.2 Preflight | `import/preflight*` | định dạng, mật khẩu, Track Changes / comment không phải của FlintFlow, stamp |
| 1.3 / 1.4 | wizard + `import/reupload*`, `doc-version/block-diff.ts` | có stamp của project ⇒ diff theo block với **bản render mới nhất**, không tạo version, đi tiếp **3.1 nguồn `reupload`** (form điền sẵn — F4) |
| 1.5 | `docx-ooxml/blocks.ts`, `import/parse*` | ghi **block nào nhắc mã/tên yêu cầu nào** (3.4 dùng "recorded mentions") |
| 1.8 | `import/extract*` | AI theo section, có độ tin |
| 1.10 | `finalize.service.ts` | baseline `imported`, `DocVersion 0.0` |
| **1.11** | `import/check.service.ts` | **AI semantic check** (S-9.2, `IMPORT_SEMANTIC_RULE`, tối đa vàng) chạy sau v0, qua Flow 4 (giữ credit) + Flow 5 (lỗi ⇒ thử lại / để sau). Thiếu ⇒ thêm |
| 1.12 | `check.service.ts` + `MODE1_RULE_PROFILE` | S-9.1, S-9.2 luật code ⇒ cờ đỏ + gap list |
| 1.13 | `gap-report.service.ts` | gap list; mỗi mục có lối "Tạo CR" (nguồn `gap_report`) |

### 1.2 Khoá mọi đường ghi Spine ngoài CR sau v0 (F1, F2)

`import/mode1-guard.ts`:
- `changesRequireCr`: mode 1 + có baseline bất kỳ (kể cả `imported`) ⇒ `true`.
- Hàm mới `assertMode1NoDirectWrite(projectId, what)` ⇒ `409 MODE1_WRITE_REQUIRES_CR` kèm `meta.prefill` (không tạo CR — F4).

Áp vào (mode 1, sau v0):

| Endpoint | File | Sau v3 |
|---|---|---|
| `POST /changes`, `/reconcile`, `/undo` | `spine/changes.controller.ts` | 409 + prefill. **Bỏ** `crFromInstruction` tự tạo CR (T8) |
| `POST /changes/preview` | như trên | **cho chạy** (chỉ đọc; F5) + `meta.requires_cr: true` |
| `POST /steps/:id/run`, `POST /gate`, `PATCH /step-plan` | `pipeline/pipeline.controller.ts`, `gate.service.ts`, import controller | 409 `MODE1_NO_STEPS` "Mode 1: sửa tài liệu qua change request" |
| `POST /baseline` (ký v1) | `pipeline/s9/baseline.controller.ts` | 409 `MODE1_NO_SIGNOFF` |
| waive cờ | `spine/flags*` | 409 `MODE1_NO_WAIVE` (G5 đã nói mode 1 không waive; L11d đã mở nút waive — gỡ) |
| chat lệnh sửa | `project/chat-session.controller.ts:73, :101` | không `crFromChat`; trả 409 `CHANGE_REQUIRES_CR` + `meta.prefill` `{ title, description, source: { kind: "verbal", ref: "chat:<id>" } }` |

Mã lỗi mới vào `import/mode1.errors.ts`.

Nội bộ vẫn ghi Spine được: import/finalize, CR 3.14, release 6.2, render diagram sau ghi (không phải thay đổi nội dung).

### 1.3 Dọn phần "mode 1 chạy step" (F1)

- `finalize.service.ts`: vẫn tính `step_plan` (cần cho `owner_step` của vị trí CR — 3.6 "skill của step sở hữu field" — và cho gap report), nhưng **không** mở `progress.current_step`, không đặt `pending` để chạy. Kiểm `GET /steps` mode 1 trả gì — FE phase 3 sẽ không gọi nữa.
- `flags.service.ts`: `remediation_step` của cờ ở mode 1 không còn ý nghĩa "chạy step" ⇒ trả thêm `remediation: "change_request"` + `section_id` để FE mở form 3.1 nguồn `gap_report`.

### 1.4 Mọi cờ đỏ mode 1 phải đóng được bằng CR (F3)

Không còn step, không waive ⇒ cờ nào CR không đóng được là release bị khoá vĩnh viễn. Duyệt từng luật đỏ trong `MODE1_RULE_PROFILE` (hiện: `section_empty`, `dead_reference`, `render_error`, `diagram_stale`, `unconfirmed_assumption` + luật mặc định không bị loại):

| Luật | CR đóng bằng cách nào | Việc |
|---|---|---|
| `section_empty` | C-3 đích = section trống ⇒ vị trí thêm mới | `spine-location.ts` `SECTION_FILL_ARRAYS` thiếu `fixed:1` (phần tử `project`), `fixed:3.1.1` (`screens[].flow_to`), mục diagram / suy dẫn ⇒ đổi thành `SECTION_FILL_PATHS` (mảng **hoặc** field object) để **mọi** mục FPT core có vị trí; mục suy dẫn (Record of Changes, diagram) không được sinh `section_empty` đỏ |
| `unconfirmed_assumption` | C-4 sửa `status` giả định ⇒ `confirmed` (L11c: trước đây chỉ S-9.2 đổi được) | kiểm C-5 cho phép op này |
| `dead_reference` | C-4 sửa/xoá tham chiếu | kiểm |
| `diagram_stale` / `render_error` | 3.14 ghi xong render lại diagram | kiểm 3.14 có render lại + recompute |

Test cho từng dòng: dựng Spine có cờ ⇒ CR ⇒ ghi ⇒ cờ đóng.

### 1.5 Contract (PR `contract-change`, gom với phase 2)

`import-change-contract.md` §4.8 + `pipeline-contract.md`: các 409 mới ở bảng 1.2; preview `meta.requires_cr`; chat không tạo CR nữa (bỏ `meta.change_request` của T8/V4); `remediation` của cờ; `SECTION_FILL_PATHS`.

## Test

- `mode1-guard.test.ts`: v0 ⇒ `true`; chưa baseline ⇒ `false`; mode 2 ⇒ `false`.
- Integration `mode1/flow1.int.test.ts` (mới): import ⇒ gap report; sau v0 lần lượt `/changes`, `/undo`, `/reconcile`, `/run`, `/gate`, `PATCH /step-plan`, `/baseline`, waive, chat lệnh sửa ⇒ đúng 409 + prefill, **không có CR nào được tạo**; `/changes/preview` 200.
- Bảng 1.4: mỗi luật một ca.
- Test cũ giả định chạy step / sửa tự do / ký v1 / auto CR ở mode 1 sẽ đỏ ⇒ sửa theo v3, liệt kê vào Bàn giao, không xoá (coding-rules §3.9).

## DoD

Sau v0 không còn đường nào đổi nội dung Spine ngoài CR 3.14 và release; cờ đỏ nào cũng có lối đóng bằng CR; 1.11 chạy.
