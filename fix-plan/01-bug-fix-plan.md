# 01 — Kế hoạch sửa 35 lỗi

Chi tiết từng lỗi (bước tái hiện, bằng chứng) nằm trong [BUGS.md](../flf-177-ui-test/BUGS.md). File này gom lỗi thành **9 gói việc** theo nguyên nhân gốc, vì nhiều lỗi chung một gốc: sửa gốc một lần là đóng được nhiều lỗi.

Đường dẫn viết tắt:
- `BE` = `flintflow_be/src`
- `FE` = `flintflow_fe`
- `SK` = `flintflow_be/assets/skills`

## Bảng phân gói

| Gói | Lỗi | Mức cao nhất | Đợt |
|---|---|---|---|
| WP-1 Chặn luồng | 01, 03, 04 | P0 | S1 |
| WP-2 Id do server cấp và ghi đúng | 02, 08, 35 | P0 | S1 |
| WP-3 Bổ sung muộn và quay lại step | 09, 12 | P1 | S2 |
| WP-4 Ổn định phiên | 05, 06, 07, 18, 31, 32 | P0 | S1 |
| WP-5 Gate có nội dung, giả định, cờ | 13, 16, 17, 20, 27, 34 | P1 | S2 |
| WP-6 Chất lượng tài liệu xuất | 14, 15, 26, 28, 29 | P1 | S3 |
| WP-7 Elicit bám dữ liệu, không lặp | 10, 19, 21, 22, 23, 24, 30 | P1 | S3–S4 |
| WP-8 Thông báo lỗi cho người | 25 | P2 | S2 (làm cùng WP-4) |
| WP-9 Lẻ | 11, 33 | P1 | S1 (việc nhỏ) |

---

## WP-1 · Chặn luồng (S1)

### BUG-01 · Ký baseline trong mode FlintFlow
- **Sửa:** chọn một trong hai cách.
  - (a) **BE:** khi `gate(accept)` ở S-9.5 (step `det`), runner gọi luôn service tạo baseline với `base_version` hiện tại.
  - (b) **FE:** GateCard của S-9.5 có nút chính "Ký baseline v1.0", nút này gọi `exportApi.createBaseline`. `FE/lib/api` đã có sẵn hàm này.

  **Đề xuất (a)**, để hành vi giống nhau với mọi client.
- **Khi bị `BASELINE_BLOCKED`:** trả về danh sách cờ đang chặn (id, mô tả, step xử lý). Gate hiện danh sách đó kèm link "→ step" và nút Waive ngay tại chỗ.
- **File:** `BE/modules/pipeline/s9/run-s9-step.ts`, `BE/modules/pipeline/gate.service.ts`, `FE/app/projects/[id]/_components/GateCard.tsx`, `FE/app/projects/[id]/page.tsx:101`. Tham khảo `Mode1PlanPanel.tsx:144`.
- **Xong khi:** ký được bằng UI mà không gọi API tay. Test e2e cho S-9.5 accept kiểm `baselines.length === 1`.

### BUG-03 · Hàng đợi S-5 bỏ sót màn placeholder
- **Sửa:**
  1. Cursor S-5 chỉ đi tiếp khi mọi màn trong `screen_queue` đều đã `accepted`, hoặc đã được user đánh dấu **"để sau, có lý do"**. Model không được tự quyết.
  2. Thêm cờ đỏ `screen_placeholder` trong `deterministic-check.ts` cho mỗi screen còn `placeholder` khi đã qua S-5.
  3. Panel Tiến độ cho mở các step `pending` thuộc vòng S-5 đã bị bỏ qua.
  4. Nếu model muốn để trống màn (kiểu AS08/AS09), nó phải **hỏi user ở gate S-4.1**, không được âm thầm tạo assumption.
- **File:** `BE/modules/pipeline/step-runner.service.ts` (`loopCursorOps`, `nextStepOf`), `BE/modules/pipeline/pipeline-progress.ts`, `BE/modules/spine/deterministic-check.ts`, component panel Tiến độ ở FE.
- **Xong khi:** kịch bản 7 màn chạy đủ 7 × 5 step S-5. Nếu chủ động bỏ S07 thì có cờ `screen_placeholder` và mở lại được step đó từ panel.

### BUG-04 · Crash `values is not iterable`
- **Sửa, 2 lớp:**
  1. **Chặn gốc:** chuẩn hoá phần tử `add` trước khi áp. Các mảng tham chiếu mà model bỏ trống (`includes`, `extends`, `function_ids`, `flow_to`, `business_rule_ids`, …) được mặc định thành `[]` theo schema, bằng default của zod trong `op-validator.ts`.
  2. **Phòng thủ:** `many()` ở `BE/modules/spine/reference-fields.ts:160` dùng `values ?? []`. Mọi TypeError trong lúc áp op phải được quy thành lỗi validate để `runDraftPhase` retry, không để rơi thành `NOT_IMPLEMENTED` 501.
- **Xong khi:** unit test `add use_case` không có `includes` thì áp thành công. Test `draft-to-ops` có TypeError thì kết quả là retry, không phải 501.

## WP-2 · Id do server cấp và ghi đúng (S1)

**Gốc chung của BUG-02, BUG-08 và BUG-35:** model tự đặt id cho phần tử mới. Id tự đặt dễ trùng id đã có (A03, FN005), nên `set` ghi đè thay vì `add`. Hoặc id không tồn tại (UC18) thì `path_not_resolved`.

- **Sửa:**
  1. **Server cấp id.** Op `add` vào collection có id thì model **không gửi id**, hoặc gửi id tạm dạng `$new1`. `op-engine` cấp id kế tiếp theo đúng format của collection. Nếu ops sau trong cùng transaction tham chiếu `$new1`, server thay bằng id thật.
  2. **Luật chống đè.** Một `set` nhắm vào phần tử **không có trong projection mà step được xem** thì bị từ chối với `op_out_of_scope`. Riêng Request revision: nếu một `set` đổi tên hoặc owner của phần tử thuộc màn khác thì bắt buộc hiện ra ở diff preview.
  3. **Thống nhất format id**, ví dụ mọi function đều là `FN001`, kể cả function nền ở S-4.4. Viết migration cho `FN01..FN04`.
  4. **Số "Đã ghi N" lấy từ số op thực áp**, không lấy từ số op model khai.
  5. **Skill `apply-change-op`** dạy thêm `add` và `remove` phần tử trong mảng có id. Projection cho edit tool kèm danh sách id của collection đích.
- **File:** `BE/modules/spine/op-engine*`, `BE/modules/pipeline/op-validator.ts`, `BE/modules/pipeline/draft-to-ops.ts`, `BE/modules/pipeline/context-projection.ts`, `SK/action/apply-change-op/SKILL.md`, cùng các skill draft có sinh `add`.
- **Xong khi:**
  - Replay đúng yêu cầu "thêm 2 function Reschedule/Cancel cho S04" thì ra **FN mới**, FN005/FN006 giữ nguyên.
  - Edit tool "thêm UC Send Appointment Reminder" thì thành công, ra UC18.
  - Test: `add` không id sẽ được cấp id; `set` ngoài projection sẽ bị từ chối.

## WP-3 · Bổ sung muộn và quay lại step (S2)

### BUG-09 · Chat tự do nói đã làm nhưng không ghi
- **Sửa:**
  1. Nếu elicit/chat nhận ra **ý định sửa** (thêm, xoá, đổi), nó chuyển sang luồng edit tool (preview diff) thay vì trả lời bằng lời.
  2. Thêm luật trong `SK/action/elicit-loop/SKILL.md`: **cấm** nói "đã thêm/đã chốt/đã cập nhật" khi lượt đó không có op. Thay vào đó phải nói "Tôi ghi nhận; sẽ áp dụng ở step X" hoặc "Bấm để áp dụng ngay".
  3. Mỗi tin nhắn AI có badge: **"Đã ghi vào tài liệu (N)"** hoặc **"Chỉ trao đổi"**.
  4. Cấm nhắc tên step không có trong registry: đưa danh sách step thật vào prompt.
- **Xong khi:** trong chat, mọi câu có "đã thêm/đã chốt" đều đi kèm op thật (kiểm bằng log).

### BUG-12 · Thiếu UC nhắc lịch (time actor) và UC no-show
- **Sửa:**
  1. S-3.1/S-3.3: skill phải quét `business_rules` và mục tiêu tìm việc **chạy theo lịch**, và nếu có thì tạo time actor cùng UC tương ứng.
  2. Thêm check tất định `function_without_uc` (cờ vàng): function nền không được UC nào tham chiếu, kiểu FN01–FN04.
  3. Khi đã có WP-2, user tự thêm được UC.
- **File:** `SK/…/use-case*` (skill của S-3.1 và S-3.3), `BE/modules/spine/deterministic-check.ts`.

## WP-4 · Ổn định phiên (S1)

### BUG-05 · Khoá step kẹt 15–20 phút
- **Hiện trạng code:** `runningSteps` (`step-runner.service.ts`) được giải phóng trong `finally`. Abort chỉ được kiểm **giữa** các lượt gọi model (`assertNotAborted`) và khi chờ answer. Khi SSE đóng lúc model đang soạn (có thể nhiều attempt), khoá vẫn giữ tới khi lượt gọi xong. **Cần xác minh thêm** vì sao lần test kẹt tới khoảng 20 phút.
- **Sửa:**
  1. Truyền `AbortSignal` vào `executeAiAction` để huỷ HTTP tới provider.
  2. Khoá có **TTL + heartbeat**: lưu `run_state` trong Mongo, không dùng Set in-process, với `locked_until` được gia hạn mỗi 10 giây khi còn chạy. Khoá quá hạn thì được chiếm lại.
  3. Thêm endpoint `POST /steps/:id/cancel` và nút **"Huỷ lượt đang chạy"** trên UI.
  4. Lượt mới gặp khoá của lượt cũ đã mất SSE thì tự huỷ lượt cũ rồi chạy.
- **Lưu ý:** khoá in-process còn sai khi BE chạy nhiều instance. Chuyển sang Mongo là sửa luôn chỗ đó.

### BUG-06 · `SPINE_VERSION_CONFLICT` "another session"
- **Sửa:**
  1. FE luôn lấy `spine_version` mới sau mỗi `ops_applied`, `gate`, waive, edit hoặc lỗi. Đưa phần này vào một store duy nhất (hiện runner và panel sửa mỗi bên giữ một bản).
  2. Nếu 409 xảy ra mà **ops đang chờ không đụng path nào đã đổi**, client tự rebase: refetch rồi gửi lại một lần.
  3. Thông báo khi thật sự có xung đột phải nói rõ ai hoặc cái gì đã đổi, ví dụ "Step S-5.4 vừa ghi FN007", và bỏ câu "another session".

### BUG-07 · Reload làm mất gate hoặc câu hỏi đang mở
- **Sửa:** lưu `run_state` ở BE, dùng chung collection với BUG-05, gồm `stage`, `questions`, `gate_payload`, `started_at` và `last_event_at`. Thêm `GET /projects/:id/steps/:stepId/run-state`, và `useStepRunner` gọi nó khi mount. Có `gate_payload` thì dựng lại GateCard; có `questions` thì dựng lại form.
- **Xong khi:** reload ở mọi trạng thái (đang hỏi, đang soạn, đang ở gate) đều quay về đúng chỗ, không phải chạy lại và không tốn credit.

### BUG-18 · Token 15 phút không tự refresh
- **Sửa:** gom mọi fetch qua một client có interceptor 401: refresh rồi retry một lần. Rà các chỗ đang gọi `fetch` trực tiếp, đặc biệt SSE `/run` và `/document`. Riêng SSE, refresh chủ động trước khi mở stream nếu token còn dưới 2 phút.

### BUG-31 · Polling 409 `/document?source=draft:0`
- **Sửa:** chưa ghép tài liệu thì FE không gọi, dựa vào `progress` hoặc cờ `has_working_draft`. BE trả 200 kèm `{ state: "not_assembled" }` thay vì 409.

### BUG-32 · Status đứng yên sau khi trả lời
- **Sửa:** submit xong là đổi ngay sang "Đã nhận 3 câu trả lời · đang soạn…". BE phát event `answer_received`. Chi tiết ở [03-live-status-flow.md](03-live-status-flow.md).

## WP-5 · Gate có nội dung, giả định, cờ (S2)

**Tiền đề của file 02.** Dùng chung phần sinh `summary` với file 03.

- **Gate summary:** từ các `changes` của step, sinh tóm tắt đọc được và gom theo collection:
  - "+3 use case: Send Reminder, Mark No-show, …";
  - "Sửa 1: FN005 tên …";
  - "Xoá 0".

  Mỗi dòng có link "xem trong tài liệu". Các step có bảng (ma trận quyền, MoSCoW) thì hiện luôn bảng thu gọn.
- **BUG-13 · Giả định tại gate:** gate hiện **giả định mới sinh ra trong step** với 3 nút: **Đúng**, **Sửa** (ô nhập) và **Bỏ**. Chưa xử lý thì vẫn Accept được, nhưng có dòng cảnh báo "3 giả định chưa xác nhận". Verification panel cũng thêm 3 nút này cạnh Waive. Chốt chặn: một giả định trái với câu trả lời đã có trong transcript thì bị đánh dấu **"mâu thuẫn"**. Cách phát hiện là so với decisions ledger ở WP-7.
- **BUG-20 · MoSCoW:** S-9.4 hỏi user các mục mà AI kém chắc chắn, và **luôn** hiện bảng ưu tiên ở gate.
- **BUG-16 · Reconcile `stale_at_baseline`:** khi không có nội dung cần đổi, reconcile vẫn phải cho "Xác nhận không đổi" để gỡ cờ.
- **BUG-17 · `diagram_stale`:** cờ có nút **"Vẽ lại"** gọi render. Ngoài ra, khi một step sửa dữ liệu nguồn của hình đã vẽ, runner tự render lại ở cuối step.
- **BUG-27:** không hiện nút "Xác nhận" khi diff rỗng. Xác nhận xong thì hiện toast "Đã áp dụng N thay đổi (v…)".
- **BUG-34:** xếp cờ đỏ trước cờ vàng, rồi theo step.
- **File:** `BE/modules/pipeline/gate.service.ts`, `pipeline.dto.ts` (thêm `summary` vào `gate_ready`), `FE/…/GateCard.tsx`, Verification panel.

## WP-6 · Chất lượng tài liệu xuất (S3)

- **BUG-14 · Sửa giả định không lan:** mỗi NFR, business rule hay function sinh từ giả định có `source_assumption_ids`. Sửa hoặc bác bỏ giả định thì đánh dấu các phần tử đó `stale`, tạo cờ `derived_from_changed_assumption` và gợi ý "Cập nhật N08 theo AS28?".
- **BUG-15 · Record of Changes:** §I chỉ ghi các baseline và các thay đổi có `reason` do user viết (revision, edit tool, waive). Bỏ các dòng "step-runner: …". Mỗi baseline là một dòng, dịch sang tiếng Anh lúc ghép. Thêm test: RoC của kịch bản mẫu dưới 30 dòng.
- **BUG-26 · Nhãn trạng thái:** trạng thái của feature phải tính từ function con: có con chưa xong thì là "Partially drafted". Export đếm cờ từ cùng nguồn với Verification panel.
- **BUG-28 · Ghi sai câu trả lời:** gate B-0.1 hiện luôn business rule vừa ghi (dựa vào WP-5) để user thấy và sửa ngay. Skill cần ví dụ phân biệt "huỷ muộn" với "no-show".
- **BUG-29 · Bịa `confirmed_at`:** model không được ghi `confirmed_at`. Server chỉ đặt giá trị này khi user bấm "Đúng" ở WP-5, và `op-validator` chặn path đó.

## WP-7 · Elicit bám dữ liệu, không lặp (S3–S4)

Chi tiết cơ chế ở [02-reduce-stops-plan.md](02-reduce-stops-plan.md), phần R3 và R4.

- **BUG-10 · B-0.1 không hỏi tên hệ thống:** truyền `content_guidance` thật vào elicit (đang hardcode `""` ở `step-runner.service.ts` trong lời gọi `elicitExecutor`). Thêm lệnh "hỏi `system_name` nếu còn null" trong `SK/action/elicit-loop/SKILL.md:75`. Test: gate đầu của B-0.1 có câu hỏi tên.
- **BUG-19 · Gợi ý trái dữ liệu đã chốt:** đưa `business_rules`, `nfrs` và decisions ledger vào context elicit. Luật: nếu chủ đề đã có giá trị chốt, gợi ý đầu tiên phải là "Giữ <giá trị> như đã chốt".
- **BUG-21 · Hỏi lặp:** decisions ledger (topic → giá trị, step, thời điểm), sẽ nói ở file 02.
- **BUG-22 · Hỏi lạc chủ đề:** mỗi step có `allowed_topics` hoặc `out_of_scope_topics` trong step spec. Elicit không được hỏi ngoài phạm vi; câu nào thuộc step sau thì ghi vào ledger ở dạng "để hỏi ở S-4".
- **BUG-23 · Lộ khái niệm nội bộ:** thêm vào glossary cấm của elicit-loop: `@loop`, `screen ảo`, `projection`, `spine`, `op`. Viết test regex trên output mẫu.
- **BUG-24 · Context chat lẫn giữa màn:** `transcriptTail` lọc theo `step_id` và theo màn của vòng S-5. Khung chat UI phân đoạn theo step bằng header "S-5.2 · Màn S05".
- **BUG-30 · Gợi ý tên hệ thống:** gợi ý 3–5 tên và lọc hậu kỳ để bỏ tên có đuôi System/App. Header panel SRS dùng `system_name ?? name`.

## WP-8 · Thông báo lỗi cho người (S2)

- **BUG-25:** dùng một bảng `error code → thông điệp tiếng Việt + hành động`, đặt ở FE `lib/errors.ts`. Ví dụ:

  | Mã | Hiện cho user | Hành động |
  |---|---|---|
  | `STEP_NOT_RUNNABLE` (đang chạy) | "Bước này đang chạy ở lượt trước (bắt đầu 14:02)." | [Huỷ lượt cũ và chạy lại] |
  | `STEP_NOT_RUNNABLE` (chưa tới lượt) | "Cần xong bước S-4.2 trước." | [Đi tới S-4.2] |
  | `SPINE_VERSION_CONFLICT` | "Tài liệu vừa được cập nhật bởi bước S-5.4. Đã tải bản mới." | tự rebase (WP-4) |
  | `NOT_IMPLEMENTED` hoặc lỗi 5xx | "AI trả kết quả không hợp lệ, đã thử lại 2 lần không được." | [Thử lại] [Báo lỗi] |
  | `path_not_resolved`, `duplicate_id`, `op_not_allowed` | "Không tìm thấy mục cần sửa / mục đã tồn tại. Hãy nói rõ tên mục." | [Sửa lệnh] |

  Mã kỹ thuật chỉ hiện trong phần "Chi tiết" thu gọn.

## WP-9 · Lẻ (S1)

- **BUG-11:** `deterministic-check.ts:701` bỏ qua `project.name` khi `system_name` đã được đặt. Đổi `remediation_step` để trỏ về chỗ đặt `system_name`.
- **BUG-33:** kiểm lại seed bảng giá (100 credit = 4.000₫?). Cân đối gói Free với chi phí thật của một dự án (khoảng 400 credit, và mục tiêu còn khoảng 250 sau file 02).

## Test cần thêm

Hiện chưa có test bắt các lỗi trên:

- e2e một dự án 7 màn chạy **hết S-5** (bắt BUG-03). Các e2e hiện có (`skills/*.e2e.test.ts`) chưa đi hết vòng S-5.
- e2e S-9.5 accept tạo ra baseline (BUG-01).
- Unit test op-engine: `add` không id, `set` ngoài projection, mảng tham chiếu `undefined` (BUG-02, 04, 08).
- Test FE: reload ở từng trạng thái runner (BUG-07); 409 thì tự rebase (BUG-06).
- Snapshot RoC dưới 30 dòng (BUG-15).
