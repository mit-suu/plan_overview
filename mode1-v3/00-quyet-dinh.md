# 00 — Bám BPMN 100 % + bảng đối chiếu từng nút

> **Người dùng chốt 2026-09-22: mode 1 theo flow mới 100 %** (`doc/flintflow-business-flow (1).bpmn`). Không giữ lệch có chủ đích nào. Chỗ nào code hiện tại khác BPMN ⇒ sửa code, không sửa cách hiểu BPMN.

## 1. Flow 1 + 3 + 6 theo BPMN

```
1.1 Upload ─► 1.2 Preflight ─► File accepted? ─ Không ─► 1.1
                              └ Có ─► Has version stamp? ─ Có (re-upload) ─► 1.4 Diff theo block ─► 3.1 (nguồn re-upload)
                                                        └ Không ─► 1.3 Xác nhận bản mới nhất
   ─► 1.5 Tách + neo block (ghi block nào nhắc mã/tên yêu cầu nào) ─► 1.6 Khớp profile ─► [độ tin thấp] 1.7
   ─► (Flow 4) 1.8 AI trích field theo section ─► [độ tin thấp] 1.9 ─► 1.10 Baseline v0 (imported)
   ─► (Flow 4) 1.11 AI semantic check (S-9.2, tối đa vàng) ─► 1.12 Luật code (S-9.1, S-9.2) ─► 1.13 Xem gap list
   ─► Changes needed? ─ Không ─► Gap report delivered (KẾT THÚC)
                      └ Có ─► 3.1

3.1 Log CR (BA; nguồn bắt buộc + người yêu cầu) ─► (Flow 4) 3.2 AI làm rõ ─► Ambiguous? ─ Có ─► 3.3 Trả lời ─► 3.2
   └ Không ─► 3.4 Tìm vị trí (đồ thị Spine, mention đã ghi, từ khoá) ─► 3.5 Khoá block
   ─► (Flow 4) 3.6 AI đề xuất từng vị trí (edit / comment / not related + lý do; skill của step sở hữu field)
   ─► 3.7 Kiểm bằng luật code ─► (Flow 4) 3.8 AI consistency (tối đa vàng) ─► Verified?
        ├ Không ─► AI redone < 2? ─ Có ─► 3.6 ;  Không ─► 3.9 Sửa tay trong step sở hữu HOẶC huỷ
        │                                               ├ sửa ─► 3.7 ;  huỷ ─► 3.10 Đóng CR huỷ (mở khoá) ─► CR cancelled
        └ Có ─► 3.11 Nộp change group ─► 3.12 Lead duyệt/từ chối từng group, kèm lý do
             ├ Có group được duyệt ─► 3.14 Ghi: Track Changes cho group được duyệt, tác giả = CR id,
             │                        bản nháp lên minor (x.1, x.2…), mở mọi khoá, KHÔNG tạo baseline, KHÔNG stamp release
             └ Tất cả bị từ chối ─► Revise CR? ─ Có ─► 3.5 khoá lại ─► 3.6 ;  Không ─► 3.13 Đóng (lý do, mở khoá)

Flow 6 (Lead tự khởi động khi bản nháp ổn định): 6.1 Release ─► cờ đỏ = 0? ─ Không ─► bị chặn
   └ Có ─► 6.2 Gom mọi CR đã ghi từ lần release trước, major kế tiếp, khoá baseline, render bản sạch ─► 6.3 Tải
   CR đang chạy KHÔNG chặn release — vào lần release sau.
Flow 4: trước mỗi lượt AI giữ chỗ credit ước tính; thiếu ⇒ báo Lead nạp, bước dừng tới khi nạp.
Flow 5: AI lỗi sau khi tự thử lại ⇒ trả credit đã giữ, giữ output accepted cuối, ghi lỗi ⇒ người dùng chọn thử lại ngay / để sau.
```

## 2. Hệ quả so với hệ thống đang chạy (v2)

| # | BPMN nói | v2 đang làm | Phải đổi |
|---|---|---|---|
| F1 | Flow 1 **không có workspace chạy step**. Sau 1.13 chỉ có hai đường: dừng ở gap report, hoặc 3.1 CR | Import xong mở `FptWorkspace` (thanh step, chạy step + gate, bật/tắt step, `/changes` áp thẳng, undo, reconcile) | Mode 1 **bỏ chạy step / gate / step-plan PATCH / `/changes` apply / undo / reconcile** sau import. Workspace mode 1 chỉ còn: xem tài liệu, gap report, CR, version, release |
| F2 | Không có baseline v1 trong Flow 1; khoá duy nhất sau v0 là release (6.2) | Nút "Ký baseline v1" | Bỏ ký v1 ở mode 1 |
| F3 | Mục FPT thiếu (gap) ⇒ đi qua CR (nguồn gap) | Chạy step để AI soạn mục thiếu | Mục thiếu **chỉ điền bằng CR nguồn `gap_report`**; C-3 phải ra vị trí cho **mọi** mục FPT trống (hiện còn mục ra `CR_NO_LOCATIONS`) |
| F4 | **3.1 là user task** của BA: nguồn bắt buộc (email, biên bản, gap, re-upload, comment Viewer, **yêu cầu miệng có tên**) + người yêu cầu | Chat / `/changes` / `/undo` **tự tạo** CR nguồn `chat`/`verbal` (T8, V4) | Mọi lối vào (chat, panel xem trước, gap, re-upload, comment Viewer) chỉ **mở form 3.1 điền sẵn**; CR chỉ sinh khi BA bấm tạo. Không tạo CR nguồn `chat` mới — lệnh trong chat là "yêu cầu miệng" (`verbal`) có tên người yêu cầu |
| F5 | Panel "Sửa tài liệu có xem trước" không có trong BPMN | Áp thẳng Spine | Panel ở mode 1 = **cách soạn nội dung 3.1**: xem trước diff để BA diễn đạt đúng ⇒ "Tạo CR" mở form 3.1 kèm lệnh + bản xem trước đính kèm. Sau đó CR đi **đủ 3.2 → 3.14** (không bỏ bước AI nào). Bản xem trước chỉ là gợi ý: đích của nó bổ sung vào 3.4, op của nó là gợi ý cho 3.6 |
| F6 | 3.5 "Khoá block", 3.7 "old text còn khớp block đã khoá" | Khoá theo path Spine, so giá trị tại path | Giữ đơn vị khoá là phần tử Spine **render ra block đó** (block của tài liệu render — tài liệu render từ Spine theo 6.2), C-5 so giá trị ⇔ so text block. Hiển thị trên UI theo **block** (tiêu đề mục + đoạn/bảng), không hiện path trần |
| F7 | 3.9 sửa tay **trong step sở hữu field** | Sửa trên ô vị trí của CR | Thêm chế độ "sửa trong step sở hữu": mở form/skill của step đó ở chế độ CR, kết quả ghi vào **đề xuất** của vị trí (không ghi Spine), rồi quay lại 3.7 |
| F8 | Revise CR ⇒ quay lại **3.5 khoá lại** rồi 3.6 | `reviseCr` khoá lại đúng phần tử rồi `proposing` | **Đã khớp** (kiểm 2026-09-22) — không đổi |
| F9 | 3.12 mỗi quyết định **kèm lý do** | Lý do chỉ bắt buộc khi từ chối (`change-request.dto.ts:153`) | Bắt buộc cả khi duyệt |
| F10 | 3.14 ghi **Track Changes**, tác giả = CR id | Cắt (T6); `variant=tracked` trả bản sạch | Làm T6 + T7 |
| F11 | 1.11 AI semantic check sau v0 | Cần kiểm | Kiểm, thiếu thì thêm |
| F12 | Lane: BA (Analyst/Lead) làm 3.1–3.11; **Lead** duyệt 3.12, release 6.1; Viewer chỉ comment + tải bản release; Flow 10 kiểm quyền mọi request | G1: người tạo project = Lead tự duyệt; **BE chưa có module tổ chức/role** (Flow 7–10 chưa làm) | Phase 4 — phụ thuộc Flow 8–10. Trước khi có: giữ G1 và ghi rõ là **chặn bởi việc chưa làm**, không phải lệch |

**Mode 2/3 không đổi.** Mọi nhánh mới rẽ theo `project.mode === "import"`.

## 3. Cách hiểu thuật ngữ (không phải lệch)

- **Block** (1.5, 3.5, 3.7, 1.4): khối của tài liệu. Tài liệu hiện render từ Spine (6.2: "render bản sạch từ snapshot"), nên block ↔ phần tử Spine sinh ra nó. Khoá / so khớp làm trên phần tử, hiển thị theo block.
- **Version**: v0 = `0.0` (import), CR ghi ⇒ `0.1`, `0.2`…, release đầu = `1.0` (6.2 "major kế tiếp").

## 4. Ai làm gì sau import (bảng tra nhanh)

| Hành động | v2 | v3 (BPMN) |
|---|---|---|
| Xem tài liệu, tải bản nháp (watermark) / bản gốc | Có | Có (Analyst/Lead; Viewer chỉ bản release — F12) |
| Xem trước lệnh sửa (panel) | Có | Có — chỉ để soạn 3.1 |
| Áp lệnh sửa / undo / hoà giải | Có | **Không** |
| Chat ra lệnh sửa | Áp thẳng hoặc tự tạo CR | Thẻ "Tạo CR" ⇒ form 3.1 điền sẵn |
| Chạy step / gate / bật-tắt step | Có | **Không** |
| Waive cờ | Có | **Không** — cờ đỏ chỉ đóng bằng CR (BPMN không có waive; mode 1 vốn không waive — G5) |
| Tạo CR từ gap report / re-upload | Có | Có (form 3.1 điền sẵn) |
| Ký baseline v1 | Có | **Không** |
| Release | Sau v1 | Khi cờ đỏ = 0 (Lead) |
