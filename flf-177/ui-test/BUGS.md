# FlintFlow — danh sách lỗi gặp khi test UI B-0 → S-9 (2026-09-22)

- **Dự án test:** "Phòng khám Minh An - đặt lịch" (`6ab24325bb1ddd00ca2a403d`), template FlintFlow, chế độ Kèm cặp.
- **Môi trường:** BE nhánh `bugfix/FLF-177-usecase-include-extend` @ `4bdf119`, FE :3000, PlantUML :8080, tài khoản `hiep.tester@flintflow.io.vn`.
- **Nguồn:** [REPORT.md](REPORT.md) (lượt B-0 → S-3), [s9run/REPORT-UX.md](s9run/REPORT-UX.md) và [s9run/ux-notes.md](s9run/ux-notes.md) (lượt S-3.6 → S-9 và baseline). Ảnh chụp nằm trong 2 thư mục đó.

**Mức độ:**
- **P0:** hỏng dữ liệu, hoặc chặn luồng mà user không tự gỡ được.
- **P1:** sai nội dung, hoặc user phải lách mới đi tiếp được.
- **P2:** sai hiển thị hoặc gây hiểu nhầm.

## Tổng hợp

| ID | Mức | Khu vực | Lỗi |
|---|---|---|---|
| BUG-01 | P0 | Baseline / FE | Mode FlintFlow không có nút ký baseline trên UI |
| BUG-02 | P0 | Op-engine / Request revision | Revision ghi đè function của màn khác (FN005, FN006) |
| BUG-03 | P0 | S-5 queue | Hàng đợi S-5 bỏ sót màn S01 và S07, không quay lại được |
| BUG-04 | P0 | Step runner | Crash S-4.1 `NOT_IMPLEMENTED: values is not iterable` |
| BUG-05 | P0 | Step runner | Khoá step kẹt 15–20 phút sau reload (`STEP_NOT_RUNNABLE`) |
| BUG-06 | P1 | FE / Spine | `SPINE_VERSION_CONFLICT` "another session" dù chỉ có 1 tab |
| BUG-07 | P1 | FE | Reload làm mất gate hoặc câu hỏi đang mở, phải chạy lại và tốn credit |
| BUG-08 | P1 | Edit tool | Không thêm được phần tử mới (`duplicate_id`, `path_not_resolved`, `op_not_allowed`) |
| BUG-09 | P1 | Chat tự do | Chat nói "đã thêm/đã chốt" nhưng không ghi gì, còn bịa step S-3.8 |
| BUG-10 | P1 | B-0.1 elicit | B-0.1 không hỏi tên hệ thống |
| BUG-11 | P1 | Deterministic check | `non_english_content` báo sai trên `project.name` khi đã có `system_name` |
| BUG-12 | P1 | S-3 | Thiếu UC nhắc lịch 24h (time actor) và UC xử lý no-show |
| BUG-13 | P1 | Assumption | 27 giả định bị giấu tới S-9.1, một số trái với câu trả lời của user |
| BUG-14 | P1 | Assumption | Sửa giả định không lan sang NFR sinh ra từ nó (N08 vẫn ≥ 99.5%) |
| BUG-15 | P1 | Export | §I Record of Changes có 425 dòng, 128 dòng tiếng Việt |
| BUG-16 | P1 | Reconcile | "Hoà giải một lượt" không gỡ được cờ `stale_at_baseline` |
| BUG-17 | P1 | Diagram | Cờ đỏ `diagram_stale` không có nút vẽ lại |
| BUG-18 | P1 | Auth | Token 15 phút không tự refresh ở một số lời gọi |
| BUG-19 | P1 | Elicit | Gợi ý đáp án mâu thuẫn với dữ liệu đã chốt |
| BUG-20 | P1 | S-9.4 | MoSCoW tự gán mà không hỏi (nhắc lịch SMS = COULD) |
| BUG-21 | P2 | Elicit | Hỏi lặp giữa các step (uptime 3 lần, giữ chỗ 3 lần) |
| BUG-22 | P2 | Elicit | Hỏi lạc chủ đề ở S-3.2 → S-3.6 (tách function, mã màn) |
| BUG-23 | P2 | Elicit | Câu hỏi lộ khái niệm nội bộ ("screen ảo @loop") |
| BUG-24 | P2 | Chat | Context chat lẫn giữa các màn ở S-5 |
| BUG-25 | P2 | UI lỗi | Lỗi hiện nguyên mã kỹ thuật, tiếng Anh, không nói lý do |
| BUG-26 | P2 | Nhãn trạng thái | Nhãn mâu thuẫn: Accepted và Chưa hoàn thiện; Export 2 cờ và thực tế 10 |
| BUG-27 | P2 | Edit tool | Nút "Xác nhận" vẫn hiện cạnh "Không có thay đổi nào"; áp dụng xong không có thông báo |
| BUG-28 | P2 | Elicit | Ghi sai câu trả lời ("huỷ sau 2h ⇒ mất cọc" thành luật no-show) |
| BUG-29 | P2 | Assumption | Model tự bịa `confirmed_at` cho assumption |
| BUG-30 | P2 | Gợi ý tên | Gợi ý tên hệ thống chỉ có 2 tên, 1 tên vi phạm luật "không thêm System/App" |
| BUG-31 | P2 | FE polling | FE gọi `GET /document?source=draft:0` liên tục, trả 409 (78 lỗi console) |
| BUG-32 | P2 | Status | "Chờ bạn trả lời N câu hỏi" đứng yên 1–2 phút sau khi đã trả lời |
| BUG-33 | P2 | Pricing | Bảng giá có vẻ sai: 100 credit = 4.000₫, 500 credit = 199.000₫ |
| BUG-34 | P2 | Verification | Panel xếp cờ vàng lên trước cờ đỏ |
| BUG-35 | P2 | Id | Function có 2 kiểu id: `FN01..` (S-4.4) và `FN001..` (theo màn) |

---

## P0 — hỏng dữ liệu hoặc chặn luồng

### BUG-01 · Mode FlintFlow không có nút ký baseline
- **Các bước:** đi hết tới S-9.5, rồi Accept gate.
- **Mong đợi:** có baseline v1.0, hoặc ít nhất có nút "Ký baseline".
- **Thực tế:** `/gate` trả 200 nhưng `baselines: []`. Nút "Ký baseline v1" chỉ có trong `Mode1PlanPanel` (mode import). Tôi phải gọi `POST /projects/:id/baseline` bằng tay.
- **Vị trí:** `flintflow_fe/app/projects/[id]/page.tsx:101`, `Mode1PlanPanel.tsx:144`.
- **Ghi chú:** khi bị `BASELINE_BLOCKED`, UI cũng không có chỗ hiện danh sách cờ đang chặn.

### BUG-02 · Revision ghi đè function của màn khác
- **Các bước:** ở S-5.4@S04, Request revision "thêm 2 function Reschedule/Cancel cho S04".
- **Mong đợi:** thêm FN mới với id mới.
- **Thực tế:** gate hiện **0 ops**, nhưng trong Spine thì **FN005 "Check In Patient"** (màn Lễ tân) thành "Reschedule Appointment" và **FN006 "Write Visit Notes"** (màn Bác sĩ) thành "Cancel". Hai chức năng biến mất mà không có cảnh báo. Tôi phải khôi phục bằng tay qua edit tool.
- **Nguyên nhân nghi ngờ:** model tự đánh id kế tiếp, trùng id đã có, nên `set` đè lên thay vì `add`. Cùng lớp lỗi với `duplicate_id: A03` ở BUG-08. Số op hiển thị cũng không khớp với số op thực ghi.

### BUG-03 · Hàng đợi S-5 bỏ sót màn S01 và S07
- **Các bước:** chạy S-5 lần lượt từng màn.
- **Thực tế:**
  - Sau S06, luồng nhảy sang `nonscreen` rồi S-6.1.
  - `screen_queue = [S02,S03,S04,S05,S06,S01,S07]` nhưng `screen_cursor = null`.
  - S01 (Auth) và S07 (Admin Console) vẫn là `placeholder`.
  - 10 step S-5.x@S01/@S07 vẫn `pending`, và panel Tiến độ hiện chúng nhưng **disabled**.
  - Tài liệu §3.2.1 và §3.6.1 chỉ có tiêu đề.
  - Không có cờ nào bắt màn placeholder, và Tiến độ không cảnh báo.
- **Nguyên nhân nghi ngờ:** ở S-4.1, model tự đặt 2 màn này là placeholder (AS08/AS09) mà không báo user.

### BUG-04 · Crash S-4.1 `NOT_IMPLEMENTED: values is not iterable`
- **Các bước:** ở S-4.1, trả lời 4 câu, trong đó câu 1 có thêm "cần UC nhắc lịch + no-show".
- **Thực tế:** step lỗi `Lỗi NOT_IMPLEMENTED: values is not iterable`, UI chỉ có nút "Đóng".
- **Vị trí:** `flintflow_be/src/modules/spine/reference-fields.ts:160`: `many()` lặp qua mảng `undefined` khi model `add` phần tử thiếu `includes`, `extends`, `function_ids`, `flow_to` hoặc `business_rule_ids`. TypeError xảy ra trước khi schema/invariant kịp bắt và bị quy thành 501, thay vì thành lỗi validate để model retry.

### BUG-05 · Khoá step kẹt 15–20 phút
- **Các bước:** bị conflict (BUG-06), reload, rồi bấm "Chạy bước này".
- **Thực tế:** `STEP_NOT_RUNNABLE: This step isn't ready to run or review yet`. Network trả "Step đang được xử lý ở một request khác". Phải chờ khoảng 20 phút.
- **Nguyên nhân:** `runningSteps` trong `step-runner.service.ts` là khoá in-process, không được giải phóng khi SSE đóng, và chỉ hết khi tới `ANSWER_WAIT_TIMEOUT_MS` (15 phút). UI không có nút huỷ lượt đang chạy.

## P1 — sai nội dung hoặc phải lách

### BUG-06 · `SPINE_VERSION_CONFLICT` "another session" lặp lại (5 lần, chỉ có 1 tab)
- **Khi nào xảy ra:**
  - sau lỗi step (BUG-04);
  - sau khi Accept S-5.5@S05;
  - khi dùng edit tool sau khi runner vừa ghi;
  - sau khi waive.
- **Nguyên nhân nghi ngờ:** FE (runner và panel sửa) giữ `base_version` cũ, không refetch sau khi ghi hoặc sau lỗi. Thông báo đổ lỗi cho "another session" là sai, và cách gỡ duy nhất là reload, dẫn tới BUG-07.

### BUG-07 · Reload làm mất gate đang mở
- **Thực tế:** reload khi đang ở gate thì gate mất, step về `pending` và phải chạy lại, tốn credit. Câu hỏi elicit đang mở cũng mất.

### BUG-08 · Edit tool không thêm được phần tử mới
- **Thực tế:** 3 lần thêm use case đều lỗi:
  - `duplicate_id: A03`;
  - `path_not_resolved: use_cases[id=UC-REMIND]`;
  - `path_not_resolved: use_cases[id=UC18]`.

  Khi sửa `validations` của function thì lỗi `op_not_allowed … validations`. Lệnh sửa cũng bị xoá khi đóng/mở panel.
- **Nguyên nhân nghi ngờ:** skill `apply-change-op` chỉ dạy `set` trên phần tử đã có. Nó không có `add`, không cấp id mới và không add/remove được phần tử trong mảng có id. Projection cũng không cho model thấy danh sách id.
- **Hệ quả:** phát hiện thiếu UC hoặc function ở step sau thì **không có đường nào bổ sung**. Tôi thử 4 lần thêm UC nhắc lịch/no-show qua chat, edit tool, S-4.1 và S-5.4, không lần nào được.

### BUG-09 · Chat tự do nói đã làm nhưng không ghi gì
- Chat trả lời "Tôi sẽ bổ sung UC18, UC19", "tổng 19 UC", "đã chốt 7 actor" trong khi Spine vẫn 17 UC và 6 actor.
- Chat tự bịa "Bước tiếp theo là S-3.8 – NFR", một step không tồn tại.
- Ô chat có placeholder "…hoặc lệnh yêu cầu chỉnh sửa" nhưng không sửa được gì.

### BUG-10 · B-0.1 không hỏi tên hệ thống
- 5 vòng elicit và 1 vòng hỏi của runner, không vòng nào hỏi tên. Gate ghi `system_name = null`.
- **Nguyên nhân:**
  - `content_guidance: ""` nên elicit không nhận guidance của content skill;
  - `elicit-loop/SKILL.md:75` chỉ **ghi** `system_name` khi user nói, không có lệnh **hỏi**;
  - draft `product-brief` không tạo câu hỏi hay assumption nào.

### BUG-11 · `non_english_content` báo sai trên `project.name`
- `deterministic-check.ts:701` vẫn quét `project.name` dù `system_name` đã được đặt. Cờ FL031 mở từ v5 tới lúc ký baseline, và tôi phải waive.
- `remediation_step: S-2.1` bảo user đổi tên project sang tiếng Anh, ngược với phương án B.

### BUG-12 · Thiếu UC nhắc lịch 24h và UC no-show
- SMS nhắc trước 24h là cơ chế chính để giảm no-show, nhưng không có UC nào cho nó và không có time actor (vi phạm SKILL dòng 38). S-3.3 cũng không bắt được.
- S-4.4 tạo được function nền FN01–FN04 (nhắc SMS, nhả giữ chỗ, no-show, webhook), nhưng các **function này không có UC nào**.

### BUG-13 · Giả định bị giấu tới S-9.1
- Ở S-9.1, 27 giả định chưa xác nhận hiện ra cùng lúc (cờ đỏ 2 → 35). Trước đó không gate nào hiện giả định.
- Có giả định **trái với câu trả lời của user**:
  - AS28: uptime 99.5%, trong khi user trả lời 99% ba lần;
  - AS34: 500 người dùng đồng thời;
  - AS36: "chỉ in-app, không email", trong khi email xác nhận là yêu cầu gốc.
- AS08/AS09 là model tự quyết để trống màn Auth và Admin.
- Verification panel không có nút Xác nhận/Bác bỏ, chỉ có Waive.
- Ở S-9.1, phản đối "để trống S01/S07" lại sinh ra thêm 2 giả định đỏ AS37/AS38 mà không có đường xử lý.

### BUG-14 · Sửa giả định không lan sang dữ liệu phụ thuộc
- AS28 đã sửa thành 99% nhưng NFR N08 vẫn ghi ≥ 99.5%, và NFR này không bị đánh dấu stale. Baseline xuất ra có số sai.

### BUG-15 · §I Record of Changes 425 dòng
- Mỗi version Spine thành một dòng, kể cả "step-runner: elicit turn" và "Waive …". Có 128 dòng tiếng Việt trong một tài liệu tiếng Anh. Không gửi khách được.

### BUG-16 · Reconcile không gỡ được `stale_at_baseline`
- "Hoà giải một lượt" với 6 section stale trả "Không có thay đổi nào" và nút Xác nhận bị disabled, nên cờ đỏ vẫn còn.

### BUG-17 · `diagram_stale` không có nút vẽ lại
- Luồng bình thường tự sinh cờ đỏ này: S-5.4 sửa sau khi S-5.3 đã vẽ, tạo 2 cờ cho D06 và D08. UI không có nút render lại.

### BUG-18 · Token hết hạn sau 15 phút không tự refresh
- `exp - iat = 900`. Một số lời gọi không refresh nên fetch trả `data: null`, và UI trống cho tới khi reload.

### BUG-19 · Gợi ý đáp án mâu thuẫn với dữ liệu đã chốt
- Gợi ý cọc 30%/50%/100.000đ, trong khi đã chốt 50.000đ cố định từ B-0.1.
- Gợi ý "tối đa 3 lịch/ngày", trong khi đã chốt "1 lịch đang chờ".
- Gợi ý "cọc không hoàn khi huỷ", trong khi đã chốt hoàn 100% nếu huỷ trước 2h.
- ERD gợi ý Invoice, Room, Service, là các thực thể không có trong phạm vi.
- **Nguyên nhân nghi ngờ:** context của elicit không có `business_rules` hay `nfrs` đã chốt.

### BUG-20 · MoSCoW tự gán mà không hỏi
- S-9.4 gán FN01 nhắc lịch SMS = **COULD**, FN004 thanh toán cọc = SHOULD, FN03 no-show = SHOULD. Gate không hiện bảng ưu tiên. Request revision sửa được.

## P2 — hiển thị hoặc gây hiểu nhầm

| ID | Lỗi | Chi tiết |
|---|---|---|
| BUG-21 | Hỏi lặp | Uptime hỏi ở S-1.4, S-6.1 và S-7.2. Giữ chỗ 15' hỏi ở S-4.4, S-5.2 và S-5.4. S-5.4 hỏi lại message đã chốt ở S-5.2 của cùng màn, và lần sau còn đòi message tiếng Việt. S-8.1 hỏi định dạng bảng thuật ngữ dù template đã cố định. |
| BUG-22 | Hỏi lạc chủ đề | S-3.2 → S-3.6 hỏi tách function, đặt mã màn, gom màn (việc của S-4/S-5), hỏi gần như cùng một câu ở 4 step, và gate S-3.2/3.4/3.5 có 0 op. |
| BUG-23 | Lộ khái niệm nội bộ | S-5.2@nonscreen hỏi về "screen ảo @loop" và "ghi vào permissions cho screen @loop". |
| BUG-24 | Context chat lẫn giữa màn | S-5.3@S05 hiện lại nguyên đoạn chat của S04 về FN005/FN006. Chat không phân đoạn theo step, nên ở S-8 vẫn thấy lịch sử từ S-5. |
| BUG-25 | Lỗi hiện nguyên mã kỹ thuật | Các mã `NOT_IMPLEMENTED`, `STEP_NOT_RUNNABLE: This step isn't ready…`, `duplicate_id`, `path_not_resolved`, `op_not_allowed` hiện thẳng ra, bằng tiếng Anh, không nói lý do và không có hướng gỡ. |
| BUG-26 | Nhãn trạng thái mâu thuẫn | Feature "Accepted" nhưng function bên dưới "Draft · Chưa hoàn thiện" (§3.7 có cả hai). Export báo "2 cờ đỏ sẽ in vào §I" trong khi thực tế có 10. Panel SRS gắn nhãn "stale"/"Cũ" mà không giải thích. |
| BUG-27 | Edit tool | Nút "Xác nhận" vẫn hiện cạnh "Không có thay đổi nào". Xác nhận xong không có thông báo "đã áp dụng". |
| BUG-28 | Ghi sai câu trả lời | B-0.1: câu "huỷ/đổi sau hạn 2h ⇒ mất cọc" bị ghi thành luật no-show. |
| BUG-29 | Bịa `confirmed_at` | Model điền `confirmed_at` cho assumption (2025-01-15, 2026-09-16). |
| BUG-30 | Gợi ý tên hệ thống | Chỉ có 2 gợi ý, và "Minh An Clinic Appointment System" vi phạm luật "không thêm System/App". Panel SRS vẫn hiện `project.name` tiếng Việt ở header. |
| BUG-31 | Polling 409 | Khi chưa ghép tài liệu, FE gọi `GET /document?source=draft:0` liên tục, sinh 78 lỗi 409 trong console. |
| BUG-32 | Status đứng yên | Sau khi đã trả lời, "Chờ bạn trả lời 3 câu hỏi" vẫn đứng 1–2 phút cho tới event kế tiếp. Nút "Chạy bước này" biến mất khi đang chạy, nên user tưởng bị treo. |
| BUG-33 | Bảng giá | Gói 100 credit = 4.000₫, gói 500 credit = 199.000₫, có vẻ nhập sai. Gói Free 100 credit/tháng, trong khi cả dự án tốn khoảng 404 credit. |
| BUG-34 | Thứ tự cờ | Verification panel xếp cờ vàng lên trước cờ đỏ. |
| BUG-35 | Id không nhất quán | Function nền ở S-4.4 dùng `FN01..FN04`, còn function theo màn dùng `FN001..`. |

## Hạn chế của lượt test
- B-0.2 → S-3.6 ở lượt đầu dùng script chọn gợi ý đầu tiên, nên vài đáp án không thực tế. Từ S-3.6 trở đi tôi trả lời tay như một BA.
- Mới test một dự án, một template (FlintFlow) và một chế độ (Kèm cặp). Chưa test mode import, chế độ khác, nhiều tab hay nhiều user.
- Chưa kiểm export PDF, CSV user story hay technical summary.
