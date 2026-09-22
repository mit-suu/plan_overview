# Phase 4 — Flow 4 / 5 / 6 + quyền theo lane (5 điểm, một phần bị chặn)

> Đối chiếu: F12 (`00-quyet-dinh.md`) + các nút Flow 4, 5, 6 của BPMN. Nhánh `feat/mode1-v3-flow456` (BE + FE).

## Bàn giao

**2026-09-22 — xong phần không bị chặn.** Nhánh BE `feat/mode1-v3-flow456` (tách từ `feat/mode1-v3-flow3`, làm trong worktree `../wt-be-flow456` để không đụng server dev đang chạy e2e), 3 commit, **chưa push**. BE **1532 test xanh**.

**Rà 4.1–4.3 (đọc code):**

| Nút | Hiện trạng | Xử lý |
|---|---|---|
| 4.1 giữ credit trước lượt AI | Có — `executeAiAction` giữ chỗ trước, trừ sau khi parse đúng, hoàn khi lỗi; mọi lượt AI mode 1 (I-4, 1.11, C-2, C-4, C-5, 3.9) đều qua `withMeteredAi`. Giá theo loại action, không ước theo độ dài prompt | Giữ |
| 4.1 ví **tổ chức** | Ví theo **user** (`CreditWallet.userId`), không có tổ chức | **Chặn** — chờ Flow 8–10 (4.4) |
| 4.2 báo Lead nạp | Không có — chỉ có `low_credit` / kết quả thanh toán | **Đã làm**: `notifyTopUpNeeded` (`credit_topup_needed`, link `/home/billing`) gửi chủ project (Lead theo G1) |
| 4.5 ⇒ 4.1 chạy tiếp sau khi nạp | Không — bước đứng `paused: credits` tới khi bấm resume | **Đã làm**: thanh toán thành công ⇒ `resumeAfterTopUp` chạy tiếp mọi import/CR mode 1 dừng vì hết credit (nền, lần lượt). Bước `resume_later` (lỗi AI) không tự chạy — đó là "để sau" của Flow 5 |
| 5.x lỗi AI | Tự thử lại 2 lần (1 s, 3 s), hết lượt thì hoàn credit, log `AiActionLog`, giữ kết quả đã có (I-4 theo cursor, C-4 giữ vị trí đã đề xuất); "thử lại / để sau" = nút resume / bỏ đó | Giữ. 3.9 (`owner-step-draft`) lỗi AI trả 402/502 (`manual_fix` không pause được) — bấm lại là thử lại |
| 6.1–6.2 release | Có — cờ đỏ (kèm luật S-9) chặn; gom CR đã ghi; major kế tiếp; baseline `release`; bản sạch; CR đang chạy **không** chặn | Giữ |
| 6.1 chỉ Lead release | Không kiểm vai trò | **Chặn** — 4.4 |
| 6.3 tên file có project ID | Tên dùng tên project | **Đã làm**: `<tên>_<projectId>_v<ver>[_tracked][_DRAFT].docx` |
| 6.3 Viewer chỉ tải bản release | Không có Viewer | **Chặn** — 4.4 |

**4.5 render khớp file gốc:** T14 (phần La Mã `II. SRS` không còn đẩy số chương sâu thêm một cấp; La Mã làm chính số chương vẫn như cũ) và T15 (`TemplateProfile.legacy_record_of_changes` — dòng Record of Changes của khách đọc lúc import, in đầu bảng §I, lịch sử FlintFlow nối tiếp) — **xong**, có test. Project import trước thay đổi này không có dòng cũ (phải import lại).

**Còn lại:** 4.4 quyền theo lane — chờ nhóm làm Flow 7–10 (cần hỏi ai làm, khi nào). Contract: thêm vào lô contract-change (`has_tracked_file` đã có; `legacy_record_of_changes` trong DTO profile nếu lộ ra API; tên file tải; loại thông báo `credit_topup_needed`).

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
