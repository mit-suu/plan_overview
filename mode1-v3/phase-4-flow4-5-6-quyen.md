# Phase 4 — Flow 4 / 5 / 6 + quyền theo lane (5 điểm, một phần bị chặn)

> Đối chiếu: F12 (`00-quyet-dinh.md`) + các nút Flow 4, 5, 6 của BPMN. Nhánh `feat/mode1-v3-flow456` (BE + FE).

## Bàn giao

Chưa bắt đầu.

## 4.1 Flow 4 — giữ chỗ credit trước mỗi lượt AI (kiểm + vá)

| Nút BPMN | Phải có | Kiểm ở |
|---|---|---|
| 4.1 | Giữ chỗ **chi phí ước tính** trong ví **tổ chức** trước mỗi lượt AI của mode 1 (1.8, 1.11, 3.2, 3.6, 3.8, 3.9-skill, vision) | `pipeline/meter.service.ts` `withMeteredAi`, `modules/credits` |
| Thiếu ⇒ 4.2 | Báo Lead nạp; bước dừng (`paused: credits`), nạp xong chạy tiếp | notification + CR `resume` |

Ví hiện theo **user** hay **tổ chức**? BE chưa có module tổ chức ⇒ ghi lại, không tự dựng (xem 4.4).

## 4.2 Flow 5 — lỗi AI

5.1 trả lại credit đã giữ + giữ output accepted cuối + ghi log; 5.2 người dùng chọn thử lại ngay / để sau (`paused: resume_later`). Kiểm từng bước AI ở 4.1 đều đi đúng đường này (L8 đã sửa mã lỗi provider; kiểm thêm có trả credit).

## 4.3 Flow 6 — release

| Nút | Phải có | Hiện trạng |
|---|---|---|
| 6.1 | Lead quyết release; cờ đỏ ≠ 0 ⇒ chặn | `release.service.ts:45` `RELEASE_RED_FLAGS_OPEN` — có |
| 6.2 | Gom mọi CR `written` từ lần trước, major kế tiếp, baseline `release`, render sạch; **CR đang chạy không chặn** | có — kiểm lại CR đang giữ khoá không làm release lỗi |
| 6.3 | File + tên có project id + version; Analyst/Lead tải bản nháp minor có watermark; **Viewer chỉ tải bản release** | kiểm tên file; quyền Viewer ⇒ 4.4 |

## 4.4 Quyền theo lane — **bị chặn bởi Flow 7–10**

BPMN: BA (Analyst/Lead) làm 1.x và 3.1–3.11; **Lead** duyệt 3.12 và release 6.1; Viewer comment (⇒ nguồn CR `viewer_comment`) + tải bản release; Flow 10 kiểm quyền trước mọi request.

BE hiện **không có module tổ chức / role** (khảo sát 2026-09-22: `src/modules` không có organization; quyền = chủ project). Vì vậy:
- Chưa làm được đúng lane. Giữ **G1** (người tạo project là Lead, tự duyệt) **tạm thời** và ghi rõ trong tài liệu nộp là "chờ Flow 8–10".
- Khi nhóm làm xong Flow 8–10: middleware kiểm role cho 3.12, 6.1 (Lead), chặn Viewer khỏi 3.1–3.11 + bản nháp, thêm lối "comment Viewer ⇒ form 3.1 nguồn `viewer_comment`".
- Cần hỏi nhóm: ai làm Flow 7–10, lịch khi nào — ghi vào mục Bàn giao.

## 4.5 Bản render của 6.2 khớp file gốc (nợ T14, T15 — 1 điểm, không bị chặn)

- **T14** `render/layout-sections.ts`: mục cấp 1 không sinh đầu mục FPT (vd `I. Record of Changes` trước `II. SRS`) không tính vào dãy số chương ⇒ `3.1.2` không thành `1.3.1.2`. Test theo layout SRS 61 màn của T1.
- **T15** giữ các dòng Record of Changes cũ của khách (I-4 lưu lại; không đụng `spine.schema.ts`, nếu buộc phải đụng thì vào contract-change), S-8.3 in dòng cũ trước, lịch sử CR nối sau.

## DoD

Bảng 4.1–4.3 kiểm xong, lỗ đã vá, mỗi dòng có test; 4.4 ghi trạng thái chờ + danh sách việc sẵn sàng làm khi có role; 4.5 số mục + Record of Changes khớp file gốc.
