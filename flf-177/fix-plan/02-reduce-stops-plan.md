# 02 — Giảm số lần phải chat và Accept

**Mục tiêu:** dự án 7 màn đi từ **91 điểm dừng xuống khoảng 19**, bỏ hết câu hỏi lặp, và giảm thời gian ngồi canh màn hình.

**Tiền đề:** làm xong [WP-5 Gate có nội dung](01-bug-fix-plan.md#wp-5--gate-có-nội-dung-giả-định-cờ-s2) trước. Nếu gom gate mà gate không hiện nội dung, user sẽ duyệt một khối lớn mà vẫn không biết bên trong có gì.

## 1. Hiện trạng

Theo `assets/step-registry.json`, có 51 step cố định cộng 5 step cho mỗi màn ở S-5. **Mọi step đều dừng ở gate.**

| Phase | Số step | Điểm dừng hiện tại | Trong lượt test |
|---|---|---|---|
| B-0 Ý tưởng | 4 | 4 | B-0.1 hỏi 5 vòng |
| B-1 Brief | 6 | 6 | |
| B-2 Rà brief | 3 | 3 | |
| S-1 Phân tích | 4 | 4 | S-1.4 hỏi uptime lần 1 |
| S-2 Tổng quan | 5 | 5 | |
| S-3 Use case | 6 | 6 | S-3.2, 3.4, 3.5 có 0 op và hỏi lạc chủ đề |
| S-4 Màn hình | 5 | 5 | |
| S-5 Chi tiết màn | 5 × N | 40 (7 màn + nonscreen) | S-5.1 và S-5.3 gần như luôn trống |
| S-6 NFR | 5 | 5 | S-6.2 → S-6.5 không hỏi gì |
| S-7 Quy tắc chung | 4 | 4 | S-7.1 không hỏi |
| S-8 Ghép | 4 | 4 | S-8.2 và S-8.3 là step tất định |
| S-9 Kiểm tra và ký | 5 | 5 | |
| **Tổng** | | **91** | |

## 2. Năm cơ chế

### R1 · Tự Accept step "yên lặng"

Một step được coi là **yên lặng** khi thoả **đủ** các điều kiện sau:
- không có câu hỏi nào cho user, hoặc mọi câu đã được trả lời từ decisions ledger (R4);
- không tạo **cờ đỏ mới**;
- không tạo **giả định mới** mâu thuẫn với ledger;
- không có lỗi render hình;
- không phải step được đánh dấu `always_gate`: B-0.1, S-4.1, S-9.4, S-9.5.

Step yên lặng có 0 op nội dung (S-5.1, S-5.3 rỗng, S-8.3) thì luôn tự Accept, không cần user.

**Cài đặt:**
- Sau khi runner tính xong `gate_ready`, gọi `isQuiet(result)`.
- Nếu đúng và `review_mode` cho phép thì gọi thẳng `gate.service` với action accept (`by: system`, `reason: "auto-accept: quiet step"`), phát event `auto_accepted` (xem file 03), rồi chạy step kế tiếp (R2).
- User vẫn mở lại được step đó bằng Revision từ panel Tiến độ.

### R2 · Chạy liền theo phase, gate cuối phase

- Thêm endpoint `POST /projects/:id/phases/:phase/run` (SSE). Endpoint này chạy lần lượt các step của phase trên cùng một stream.
- Chuỗi **dừng sớm** khi gặp một trong các trường hợp: có câu hỏi, có step không yên lặng, có lỗi, hoặc hết credit.
- Cuối phase có **một gate phase** gồm:
  - tóm tắt của từng step (dùng `summary` của WP-5);
  - danh sách giả định mới;
  - chênh lệch cờ (+2 đỏ / −1 vàng);
  - ảnh hình vừa vẽ;
  - hai nút: **Accept cả phase** và **Sửa** (dẫn tới edit tool với preview diff, nhờ WP-2 sửa được mọi phần tử).
- Accept phase thì BE accept từng step bên trong, để giữ nguyên `first_seq/last_seq` phục vụ revert.
- Với S-5, gate đặt ở **cuối mỗi màn** (S-5.5 "Chốt màn"). Gate hiện mô tả màn, function, validation và wireframe của màn đó.

### R3 · Gom câu hỏi lên đầu phase

- Đầu mỗi phase có một lượt **"phỏng vấn phase"**: một lời gọi elicit nhận hợp `empty_fields` của mọi step trong phase, cùng decisions ledger. Lời gọi này trả **tối đa 8 câu** trong một form.
- Mỗi câu có nhãn **Bắt buộc** hoặc **Có mặc định**. Câu có mặc định thì hiện sẵn giá trị đề xuất, và user chỉ cần sửa câu nào không đồng ý.
- Câu trả lời ghi vào ledger. Các step trong phase dùng ledger, và chỉ hỏi thêm khi phát sinh điều mới thật sự, ví dụ khi phát hiện mâu thuẫn.
- **Kết quả mong muốn:** user trả lời một lần đầu phase rồi có thể **rời máy** (file 03 phần 5 báo khi xong).

### R4 · Decisions ledger: sổ quyết định, chống hỏi lặp

- Thêm collection mới trong Spine:

  ```
  decisions[]: {
    id,
    topic_key,
    question,
    answer,
    step_id,
    at,
    superseded_by?
  }
  ```

- `topic_key` gồm một danh sách chuẩn (`uptime`, `concurrent_users`, `slot_hold_minutes`, `deposit_amount`, `cancel_window`, `notification_channels`, `ui_languages`, `data_retention`, …) và cho phép key tự do.
- Mỗi câu hỏi model sinh ra phải có `topic_key`. **Validator ở server** bỏ các câu có `topic_key` đã có trong ledger, trừ khi model đánh dấu `conflict: true` kèm lý do.
- Gợi ý đầu tiên của câu thuộc chủ đề đã chốt phải là **"Giữ <giá trị> như đã chốt"**.
- Giả định (assumption) tạo ra phải được đối chiếu với ledger. Giả định trái ledger thì server tự sửa theo ledger hoặc đánh dấu mâu thuẫn. Việc này chặn trường hợp như AS28 (uptime 99.5%).
- Ledger hiện trong UI như một tab **"Đã chốt"**, cho user xem và sửa. Sửa một quyết định thì kích hoạt lan truyền stale (WP-6, BUG-14).

### R5 · Ba chế độ duyệt

User chọn ở B-0.4 "Cách làm việc" và đổi được bất cứ lúc nào:

| Chế độ | Dừng ở đâu | Dành cho |
|---|---|---|
| **Chặt** | Mọi step (như hiện tại, nhưng có R4 chống lặp) | BA muốn kiểm từng bước, hoặc dùng để demo hay dạy học |
| **Cân bằng** (mặc định) | R1 + R2: gate cuối phase, gate cuối mỗi màn, và các step `always_gate` | Đa số user |
| **Nhanh** | Chỉ dừng khi có câu **bắt buộc**, cờ đỏ mới hoặc lỗi. Câu có mặc định thì model ghi thành giả định và gom lại ở gate phase | User đã có tài liệu nguồn đầy đủ |

## 3. Kết quả ước tính (dự án 7 màn, chế độ Cân bằng)

| Phase | Hiện tại | Sau | Gate còn lại |
|---|---|---|---|
| B-0 | 4 | 1 | B-0.1 (ý tưởng và tên hệ thống). B-0.2 → 0.4 đi theo phỏng vấn phase |
| B-1 + B-2 | 9 | 1 | Duyệt brief |
| S-1 | 4 | 1 | Xung đột và thông tin còn thiếu |
| S-2 | 5 | 1 | Tổng quan và sơ đồ ngữ cảnh |
| S-3 | 6 | 2 | Danh sách actor và UC; sơ đồ và mô tả UC |
| S-4 | 5 | 2 | Màn, luồng và quyền (S-4.1 `always_gate`); ERD |
| S-5 | 40 | 7 | Mỗi màn một gate. Nonscreen tự Accept nếu yên lặng |
| S-6 + S-7 | 9 | 1 | NFR và quy tắc chung |
| S-8 | 4 | 1 | Tài liệu đã ghép |
| S-9 | 5 | 2 | Cờ và giả định còn lại cùng MoSCoW; ký baseline |
| **Tổng** | **91** | **19** | |

- **Câu hỏi:** bỏ khoảng 8 câu hỏi lặp (R4), khoảng 10 câu lạc chủ đề (WP-7) và phần hỏi rải rác. Số lần phải gõ hay trả lời giảm còn khoảng 11–12 form, mỗi phase một form cộng mỗi màn một form.
- **Credit:** bớt các lượt elicit thừa (khoảng 1 lời gọi mỗi step × 91) và các lượt chạy lại do reload. Ước tính giảm khoảng 35–40%.

## 4. Rủi ro và cách chặn

| Rủi ro | Cách chặn |
|---|---|
| Tự Accept giấu một lỗi của AI | Gate phase luôn liệt kê cả step đã tự Accept kèm tóm tắt. Mọi auto-accept có log và mở lại được. Step có cờ đỏ mới thì không bao giờ tự Accept. |
| Gate phase quá dài | Tóm tắt thu gọn theo step, chỉ mở rộng step có thay đổi lớn hoặc có cờ. Có nút "Chỉ xem phần cần chú ý". |
| Sửa ở gate phase làm hỏng step sau trong cùng phase | Sửa đi qua edit tool (diff và impact analysis). Phần tử bị ảnh hưởng thì đánh stale, và runner chạy lại đúng step liên quan chứ không chạy lại cả phase. |
| Model bỏ `topic_key` hoặc gán sai | Validator bắt buộc có `topic_key`. Server so thêm độ giống của câu hỏi (so chuỗi đơn giản) với ledger làm lưới an toàn. |
| Phỏng vấn phase hỏi quá nhiều | Tối đa 8 câu, ưu tiên câu bắt buộc. Câu còn lại dùng mặc định và thành giả định hiện ở gate. |

## 5. Thứ tự cài đặt

1. **R4 ledger**: làm song song với WP-7 vì cùng sửa elicit.
2. **R1 auto-accept** cho step 0 op. Đây là việc nhỏ nhất mà giảm được khoảng 20 điểm dừng ngay.
3. **R2 chuỗi phase + gate phase.** Cần WP-5 (summary) và file 03 (UI tiến trình khi chạy liền).
4. **R3 phỏng vấn phase.**
5. **R5 chế độ duyệt**: đặt sau feature flag `review_mode` và bật "Cân bằng" cho dự án mới.

**File chính:**
- `BE/modules/pipeline/step-runner.service.ts`, `gate.service.ts`, `pipeline.route.ts` (endpoint phase), `pipeline.dto.ts`;
- `assets/step-registry.json` (thêm `always_gate`, `allowed_topics`);
- `SK/action/elicit-loop/SKILL.md` (thêm `topic_key`);
- schema Spine (thêm `decisions[]`);
- FE: `useStepRunner.ts`, `GateCard.tsx` và một component gate phase mới.
