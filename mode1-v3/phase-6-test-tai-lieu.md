# Phase 6 — Test theo từng cạnh BPMN, e2e, tài liệu (3 điểm)

> Phần 6.1–6.3 cho Flow 1 + 3 làm ngay sau phase 3; phần Flow 4/5/6 + vision thêm khi phase 4, 5 xong.

## Bàn giao

**Xong 2026-09-22** — PR BE [#76](https://github.com/mit-suu/flintflow_be/pull/76) (`feat/mode1-v3-tests`, trên #75, worktree `../wt-be-flow456`). FE không đổi.

- **6.1** `journey.int.test.ts` viết lại: 1.1 → 1.13 ⇒ chặn mọi lối sửa ngoài CR ⇒ CR `gap_report` (mục 5.4) ⇒ **0.1** + bản đánh dấu (`w:ins` tác giả CR id) ⇒ xem trước ⇒ CR `verbal` + `preview_id` (`found_by: preview`) ⇒ **0.2** ⇒ 0 cờ đỏ ⇒ release **1.0** (bản sạch, stamp `release`) ⇒ khách sửa 1.0, upload lại ⇒ diff `modified` ⇒ CR `reupload`. Các mục FPT trống khác vẫn điền thẳng DB (`fillCoreSections`) cho gọn — đường CR cho từng mục đã phủ ở `write.int`.
- **Bảng cạnh Flow 3 ⇒ test** (`test/integration/…`):

| Cạnh BPMN | Test |
|---|---|
| 3.1 thiếu nguồn / requester / `chat` ⇒ từ chối | `mode1/change-request.service.int` "thiếu source…" + `change-request.dto.test` |
| 3.1 ⇒ Flow 4 ⇒ 3.2; hết credit ⇒ paused ⇒ nạp ⇒ chạy tiếp | `mode1/clarify.int` "hết credit…", `mode1/credit-flow.int` |
| 3.2 mơ hồ ⇒ 3.3 ⇒ 3.2 | `mode1/clarify.int` "vòng 1 mơ hồ…", "trả lời ⇒ chạy lại C-2…" |
| 3.2 rõ ⇒ 3.4 ⇒ 3.5 | `mode1/clarify.int` "CR rõ ngay…", `mode1/impact.int`, `mode1/lock.int` |
| 3.6 ⇒ 3.7 ⇒ 3.8 ⇒ đạt ⇒ 3.11 | `mode1/verify.int` "nhận xét AI gắn…", journey |
| 3.8 hết credit ⇒ paused | `mode1/verify.int` "hết credit ở C-5…" |
| Không đạt, làm lại < 2 ⇒ 3.6; ≥ 2 ⇒ 3.9 | `mode1/verify.int` "AI đề xuất trượt 3 lần…" |
| 3.9 sửa (step sở hữu) ⇒ 3.7 | `mode1/verify.int` "BPMN 3.9 (mode 1 v3)…" + "vị trí sửa tay trượt…" |
| 3.9 huỷ ⇒ 3.10 (mở khoá) | `mode1/verify.int` "BPMN 3.9 ⇒ huỷ ⇒ 3.10…" (**mới**) |
| 3.12 lý do bắt buộc | `mode1/decision.int`, journey |
| Có group được duyệt (một phần / tất cả) ⇒ 3.14 | `mode1/decision.int` "từ chối G02…", `mode1/write.int`, journey |
| Tất cả bị từ chối ⇒ revise ⇒ 3.5 | `mode1/decision.int` "revise: khoá lại…" |
| Tất cả bị từ chối ⇒ không revise ⇒ 3.13 | `mode1/decision.int` "close: rejected…" |
| 3.14 ⇒ bản có đánh dấu, diagram vẽ lại | `mode1/write.int`, `mode1/write-redraw.int`, journey |

- **6.2** e2e `flintflow_fe/e2e/mode1.spec.ts` đã viết lại ở phase 3 và **chạy thật PASS** (2026-09-22, trước phase 4–5). Chưa chạy lại trên code phase 5–6 (dev server đang ở nhánh phase 2; cần credit AI) ⇒ chạy lại sau khi merge chồng PR.
- **6.3** `claude_plan/flow-mode1-upload-srs.md` mới (sơ đồ BPMN, mỗi nút ⇒ endpoint + màn hình, lối vào 3.1, version, giới hạn); bản v2 ở `mode1-old/`. Contract §4.8 soát khớp code (guard ở run/answer/gate/resume, step-plan PATCH, baseline, waive, `/changes`). `docs/ops.md`: project mode 1 cũ đọc được, không migration, yêu cầu `GEMINI_API_KEY`.
- **6.4** Coverage BE `modules/{import,change-request,render}` 97,2 % lines; FE vùng mode 1 97,6 %.
- **Sửa kèm** (lộ ra khi viết journey / ops): helper `routeReplaceCr` không đọc được vị trí có op gợi ý từ bản xem trước; **I-4 kẹt `paused` khi môi trường không có `GEMINI_API_KEY`** ⇒ giờ bỏ qua ảnh (giữ ảnh + cờ vàng).

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
