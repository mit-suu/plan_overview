# Phase 2 — BE: Flow 3 đủ từng nút (5 điểm)

> Đối chiếu: F4–F10 (`00-quyet-dinh.md`). Nhánh BE `feat/mode1-v3-flow3` (tách từ phase 1).
> Máy trạng thái hiện tại (`change-request.state.ts`) đã có gần đủ nút; phase này vá chỗ lệch.

## Bàn giao

Chưa bắt đầu.

## Việc

### 2.1 3.1 — tạo CR chỉ qua form, nguồn + người yêu cầu bắt buộc (F4)

- `POST /change-requests` là **cửa duy nhất** tạo CR (bỏ `crFromInstruction` / `crFromChat` tự tạo — phase 1 đã gỡ lời gọi, phase này xoá hẳn `chat-cr.service.ts` nếu không còn ai dùng).
- DTO: `source.kind` bắt buộc; `requester` bắt buộc, không rỗng; `verbal` ⇒ `requester` phải là tên người (không nhận chuỗi mặc định "Người dùng"). `chat` **không nhận cho CR mới** (giữ trong enum để đọc CR cũ) — lệnh từ chat là `verbal` với `ref: "chat:<id>"`.
- Đính kèm bản xem trước (F5): body thêm `preview_id?`. Có ⇒ BE lấy `StoredPreview` (`spine/change.service.ts:89`, thêm field `instruction`, `userId`), lưu vào CR `seed: { instruction, ops, targets }` (`targets` = phần tử bị op chạm). Preview hết hạn ⇒ tạo CR **không** seed + `meta.seed_dropped: true` (không chặn 3.1).

### 2.2 3.2 → 3.6 dùng seed như gợi ý, không bỏ nút (F5)

- 3.2 `clarify.service.ts`: prompt kèm `seed.instruction` + tóm tắt op ⇒ thường kết luận "không mơ hồ" ngay, nhưng **vẫn chạy**.
- 3.4 `cr-impact.service.ts`: đích = đích C-2 ∪ `seed.targets`; `found_by` thêm `"preview"` cho vị trí đến từ seed; đồ thị Spine + mention + từ khoá chạy như cũ (vị trí liên quan vẫn được tìm).
- 3.6 `propose.service.ts`: vị trí có op seed ⇒ đưa op đó vào prompt làm "đề xuất ban đầu của người yêu cầu"; AI vẫn kết luận edit / comment / not related như mọi vị trí.

### 2.3 3.5 khoá lại khi Revise (F8)

`decision.service.ts` revise: `in_review → impact_review` (thay `proposing`) ⇒ khoá lại đúng các vị trí (chụp lại giá trị gốc cho 3.7) ⇒ `proposing`. Máy trạng thái thêm cạnh `in_review → impact_review` (contract-change). Vị trí `not_related` lần trước giữ kết luận nếu người dùng không đổi.

### 2.4 3.9 sửa trong step sở hữu (F7)

- Endpoint `POST /change-requests/:crId/locations/:locId/owner-step-draft` `{ answers | fields }` ⇒ chạy **skill của `owner_step`** ở chế độ CR: context = Spine hiện tại + phần tử bị khoá; output op **chỉ ghi vào `proposal.spine_ops`** của vị trí (không ghi Spine), `manual: true`; rồi `manual_fix → verifying` (3.7).
- Tận dụng đường gọi skill của C-4 (`propose.service.ts` đã dùng skill step sở hữu) — khác ở chỗ đầu vào là nội dung người dùng nhập theo form của step.
- `PATCH …/locations/:id` (sửa JSON tay) giữ làm đường phụ cho vị trí không có `owner_step`.

### 2.5 3.12 lý do bắt buộc cả khi duyệt (F9)

`change-request.dto.ts:153` — bỏ ngoại lệ `decision === "approved"`; min length giữ `DECISION_REASON_MIN_LENGTH`.

### 2.6 3.14 Track Changes (F10 — nợ T6 + T7)

1. `render/tracked-diff.ts` (mới, thuần): so `RenderedDocument` version trước ↔ sau theo section ⇒ `{ section_id, block_index, before, after }` mức đoạn / ô bảng.
2. `docx-ooxml/track-changes.ts` (có từ v1): `w:ins` / `w:del`, `w:author = CR-00x`, `w:date = decided_at`; chỉ group **được duyệt**.
3. `comment` (T7): `docx-ooxml/comments.ts`, tác giả = CR id.
4. Bản nháp minor lưu **kèm** bản có đánh dấu; `download?variant=tracked` trả nó. Release (6.2) chỉ bản sạch — "Track Changes không bao giờ accept trong file".
5. Kiểm 3.14 **không** tạo baseline, **không** stamp release (chỉ watermark DRAFT), mở **mọi** khoá của CR.

### 2.7 Contract (gom với phase 1)

Endpoint 3.9; `preview_id` + `seed` của CR; `found_by: "preview"`; cạnh revise mới; lý do duyệt bắt buộc; `variant=tracked` thật.

## Test

| File | Ca |
|---|---|
| `change-request.dto.test.ts` | thiếu nguồn / requester ⇒ 400; `chat` ⇒ 400; approve không lý do ⇒ 400 |
| `impact.test.ts` | seed targets vào vị trí, `found_by` có `preview`; vị trí liên quan vẫn ra |
| `propose` | op seed có trong prompt; AI vẫn được gọi |
| `decision` | revise ⇒ `impact_review` ⇒ khoá lại, giá trị gốc chụp lại |
| `owner-step-draft` | ghi vào proposal, Spine không đổi, về `verifying` |
| `tracked-diff.test.ts` + integration | ghi CR ⇒ tải tracked có `w:ins` tác giả CR id; release ⇒ bản sạch |
| integration đi đủ nhánh BPMN | ambiguous ⇒ 3.3 ⇒ 3.2; verify trượt ⇒ redo 2 lần ⇒ 3.9 ⇒ 3.7; 3.9 huỷ ⇒ 3.10 mở khoá; tất cả bị từ chối ⇒ revise ⇒ 3.5; tất cả bị từ chối ⇒ không revise ⇒ 3.13; một phần duyệt ⇒ 3.14 |

## DoD

Mỗi cạnh của Flow 3 trong BPMN có một test integration đi qua; tải bản 0.1 có đánh dấu, mở Word thấy thay đổi đứng tên CR.
