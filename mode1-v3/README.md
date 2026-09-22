# Plan v3 — Mode 1: upload SRS có sẵn rồi sửa — bám BPMN 2026-09-22 100 %

> **Thay thế** `../mode1-old/plan-mode1-v2-workspace.md` (v2) và `../mode1-old/plan-mode1-import-edit-srs.md` (v1). Hai file đó cùng `../mode1-old/flow-mode1-upload-srs.md` chỉ còn là lịch sử + mô tả hệ thống đang chạy tới 2026-09-22.
> **Nguồn:** `doc/flintflow-business-flow (1).bpmn` (sửa 2026-09-22 — Flow 1, 3, 6), yêu cầu người dùng 2026-09-22, `coding-rules.md`, khảo sát code hai repo trên nhánh `feat/FLF-188-mode1-v2-tests`.
> **Ticket:** không làm ticket (người dùng chọn 2026-09-22). Nhánh đặt `feat/mode1-v3-<phase>`, commit `mode1-v3: <việc>`.

**File này là nguồn sự thật về trạng thái.** Làm xong bước nào thì sửa bảng dưới + mục "Bàn giao" của chính phase đó.

## Các file

| File | Nội dung |
|---|---|
| [00-quyet-dinh.md](00-quyet-dinh.md) | Flow 1/3/4/5/6 của BPMN, bảng F1–F12 "BPMN nói gì · v2 đang làm gì · phải đổi gì", ai làm gì sau import |
| [phase-1-be-flow1.md](phase-1-be-flow1.md) | BE: Flow 1 kết thúc ở gap report hoặc 3.1 — khoá mọi đường sửa ngoài CR, bỏ chạy step / ký v1 / waive, cờ đỏ nào cũng đóng được bằng CR, kiểm 1.11 |
| [phase-2-be-flow3.md](phase-2-be-flow3.md) | BE: Flow 3 đủ từng nút — 3.1 chỉ qua form (nguồn + người yêu cầu), bản xem trước làm gợi ý cho 3.2/3.4/3.6, 3.5 khoá lại khi revise, 3.9 sửa trong step sở hữu, lý do khi duyệt, 3.14 Track Changes |
| [phase-3-fe-mode1.md](phase-3-fe-mode1.md) | FE: màn mode 1 không còn thanh step; panel "Sửa tài liệu có xem trước" ⇒ **Tạo CR** mở form 3.1; CR workspace theo nút; release |
| [phase-4-flow4-5-6-quyen.md](phase-4-flow4-5-6-quyen.md) | Flow 4 credit, Flow 5 lỗi AI, Flow 6 release, quyền theo lane (chờ Flow 8–10), số mục + Record of Changes |
| [phase-5-vision.md](phase-5-vision.md) | Đọc ảnh diagram trong 1.8 (FLF-187) + nhúng lại ảnh gốc (T3) |
| [phase-6-test-tai-lieu.md](phase-6-test-tai-lieu.md) | Test đi một mạch + mỗi cạnh Flow 3, e2e, tài liệu luồng mới |
| [no-ky-thuat.md](no-ky-thuat.md) | Nợ mang từ v2 sang, xếp vào phase nào |

## Trạng thái

**Cập nhật: 2026-09-22.** Plan viết lại theo yêu cầu "theo flow mới 100 %" — không còn lệch BPMN có chủ đích; chỗ duy nhất chưa khớp là quyền theo lane (bị chặn vì BE chưa có tổ chức/role). Phase 1, 2 (BE) xong 2026-09-22 — xem mục Bàn giao của từng phase. Tiếp: phase 3 (FE).

| Phase | Việc | Điểm | Phụ thuộc | Trạng thái |
|---|---|---|---|---|
| 1 | BE: Flow 1 ⇒ gap report / 3.1, khoá sửa ngoài CR | 4 | PR #69/#70 (BE) | **Xong** — `feat/mode1-v3-flow1` 4 commit, chưa push; PR mở chung với phase 3 |
| 2 | BE: Flow 3 đủ nút + Track Changes | 5 | 1 | **Xong** — `feat/mode1-v3-flow3` 5 commit, chưa push |
| 3 | FE: màn mode 1 theo flow, panel xem trước ⇒ form 3.1 | 5 | 1, 2 (mock được) + PR #51/#52 (FE) | Chưa |
| 4 | Flow 4/5/6 + quyền lane + T14/T15 | 5 | 1; 4.4 chờ Flow 8–10 | Chưa |
| 5 | Vision + ảnh gốc | 7 | — (song song) | Chưa |
| 6 | Test + e2e + tài liệu | 3 | 1–4 | Chưa |
| | **Tổng** | **29** | | |

Thứ tự đề xuất: **1 → 2 → 3** (có luôn yêu cầu gốc: tạo CR từ panel xem trước) → 6 (phần Flow 1 + 3) → 4 → 5.

## Bối cảnh khi bắt đầu (2026-09-22)

- Mode 1 v2 (V0–V4, FLF-181…186) **đã merge `develop`** 2026-09-20.
- Còn 4 PR mở, xếp chồng: BE [#69](https://github.com/mit-suu/flintflow_be/pull/69) `chore/mode1-v2-tech-debt` → `develop`, [#70](https://github.com/mit-suu/flintflow_be/pull/70) `feat/FLF-188-mode1-v2-tests` → #69; FE [#51](https://github.com/mit-suu/flintflow_fe/pull/51), [#52](https://github.com/mit-suu/flintflow_fe/pull/52) tương tự. FE #52 chờ duyệt devDep `@vitest/coverage-v8`.
- **Tách nhánh v3 từ `feat/FLF-188-mode1-v2-tests`** (hai repo) nếu 4 PR trên chưa merge — phase 1 và 3 sửa đúng các file hai nhánh đó vừa đụng (`changes.controller.ts`, `mode1-guard.ts`, `Mode1PlanPanel.tsx`, `ChangePanel.tsx`…). Merge rồi thì tách từ `develop`.
- AI: text GLM trên Modal, ảnh Gemini (`GEMINI_API_KEY` có trong `.env`). Modal đã hết 429.
- FE: `app/projects/**` chưa i18n hoá ⇒ UI mode 1 vẫn viết thẳng tiếng Việt, không thêm key `messages/*.json` (luật `flintflow_fe/CLAUDE.md`). Nếu nhóm i18n hoá vùng này thì luật đổi.
- Khung workspace đã đổi ở FLF-197 (`WorkspaceHeader`, `WorkspaceToolRail`, rail tiến độ dọc) — panel "Sửa tài liệu có xem trước" mở từ icon bút chì ở `WorkspaceToolRail.tsx`.

## Quy ước

- Trả lời + tài liệu tiếng Việt. Commit không thêm trailer co-author.
- Đổi hợp đồng đóng băng (`pipeline-contract.md`, `import-change-contract.md`, `spine.schema.ts`…) ⇒ PR nhãn `contract-change`, 4/4 duyệt (`coding-rules.md` §1.2, §5.4). Phase 1 + 2 gom **một** contract-change (nhiều mã 409 mới, `preview_id`/`seed` của CR, cạnh revise mới, lý do duyệt bắt buộc, chat không tự tạo CR).
- File mới kèm test; mock provider AI trong test.
- PR tạo bằng GitHub API (máy không có `gh`), token lấy qua `git credential fill`.
