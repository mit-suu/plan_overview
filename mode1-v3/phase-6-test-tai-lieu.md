# Phase 6 — Test theo từng cạnh BPMN, e2e, tài liệu (3 điểm)

> Phần 6.1–6.3 cho Flow 1 + 3 làm ngay sau phase 3; phần Flow 4/5/6 + vision thêm khi phase 4, 5 xong.

## Bàn giao

Chưa bắt đầu.

## Việc

### 6.1 Integration BE đi một mạch

Viết lại `test/integration/mode1/journey.int.test.ts` đúng thứ tự nút BPMN trên **một** project:
1.1 upload ⇒ 1.2 ⇒ 1.3 ⇒ 1.5 ⇒ 1.6 ⇒ 1.8 ⇒ 1.10 v0 ⇒ 1.11 ⇒ 1.12 ⇒ 1.13 gap
⇒ 3.1 (nguồn `gap_report`, mục thiếu) ⇒ 3.2 ⇒ 3.4 ⇒ 3.5 ⇒ 3.6 ⇒ 3.7 ⇒ 3.8 ⇒ 3.11 ⇒ 3.12 (lý do) ⇒ 3.14 ⇒ **0.1** có bản đánh dấu
⇒ preview lệnh sửa ⇒ 3.1 (`verbal`, kèm `preview_id`) ⇒ … ⇒ 3.14 ⇒ **0.2**
⇒ 6.1 (cờ đỏ = 0) ⇒ 6.2 ⇒ **1.0** bản sạch có stamp
⇒ upload lại file 1.0 có stamp ⇒ 1.4 diff ⇒ 3.1 (nguồn `reupload`).

Và một bảng test phủ **mỗi cạnh** của Flow 3 (danh sách ở phase 2 mục Test).

### 6.2 e2e trình duyệt

`flintflow_fe/e2e/mode1.spec.ts` viết lại theo luồng trên (bỏ chặng chạy step + ký v1 của V6). Chạy thật:

```
E2E_MODE1=1 E2E_MODE1_DOCX=<đường dẫn SRS .docx không stamp> npx playwright test e2e/mode1.spec.ts
```

Cần FE `:3000` + BE `:5000` + credit AI. Ảnh chụp từng bước ra `test-results/mode1/`.

### 6.3 Tài liệu

- **`claude_plan/flow-mode1-upload-srs.md` mới** theo v3 (bản cũ ở `mode1-old/`): sơ đồ §1 của `00-quyet-dinh.md`, bảng "ai làm gì" §4, mỗi nút BPMN ⇒ endpoint + màn hình.
- `flintflow_be/docs/api/import-change-contract.md` §4.8 — kiểm khớp code.
- `flintflow_be/docs/ops.md`: project mode 1 cũ (có v1, có CR nguồn `chat`) vẫn đọc được; không migration.

### 6.4 Coverage

BE `modules/{import,change-request,render}` ≥ 80 % lines; FE vùng mode 1 ≥ 80 %.

## DoD

Journey + bảng cạnh Flow 3 + e2e xanh trên BE thật; tài liệu luồng mới thay bản cũ.
