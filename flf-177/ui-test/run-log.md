# Log chạy tự động (auto.js) — câu hỏi, đáp án đã chọn (luôn chọn gợi ý đầu tiên), gate

## B-0.1 (chạy tay)
- 5 vòng elicit (nền tảng, hiện trạng, tích hợp, quy mô, no-show, ghi chú bác sĩ, dữ liệu cũ, hoàn cọc, số lịch, báo cáo, 30 ngày, slot đầy, huỷ trễ) — KHÔNG có câu hỏi tên hệ thống.
- "Chạy bước này" → runner hỏi 3 câu (cọc khi đổi lịch, số lịch mở, cọc khi lễ tân đặt hộ) → gate: 11 ops (v4), 30 đỏ / 1 vàng. `project.system_name = null`.
- Request revision "chưa có tên tiếng Anh, gợi ý 2-3 tên" → câu hỏi tên: "Minh An Booking" | "Minh An Clinic Appointment System" | "Để tôi tự đặt tên khác" → chọn "Minh An Booking" → gate 14 ops (v10). Spine: `system_name = "Minh An Booking"`, `name` giữ nguyên.

## B-0.2 → S-1.4 (auto)
- B-0.2: gate ngay (form_factor đã ghi ở B-0.1). B-0.3 → B-1.6: accept (log lần chạy đầu bị mất do lỗi click Accept disabled; ảnh gate còn đủ).
- B-2.1 Q: no-show cơ sở 15%? => Đúng. Gate 2 ops (v60), 28 đỏ/1 vàng
- B-2.2 gate 2 ops (v65)
- B-2.3 Q: VNPay hoàn tiền API? => sẽ kiểm tra; SMS? => lấy báo giá. Gate 5 ops (v70)
- S-1.1 Q: VNPay hoàn tự động => Đúng; SMS => có NCC quen; giả định khác => BN dùng smartphone. Gate 4 ops (v75)
- S-1.2 gate (0 ops)
- S-1.3 Q: BN tự đăng ký SĐT+OTP => Đúng; ca bác sĩ do QTV nhập, slot 30' ; cloud. Gate 5 ops (v84)
- S-1.4 Q: baseline 15%; lưu dữ liệu => "Giữ vô thời hạn" (gợi ý đầu, không thực tế — do auto-pick); uptime 99%; OTP 5'/3 lần. Gate 7 ops (v89)
