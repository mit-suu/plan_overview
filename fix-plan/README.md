# FlintFlow — kế hoạch sửa sau lượt test UI (2026-09-22)

Đầu vào:
- [../flf-177-ui-test/BUGS.md](../flf-177-ui-test/BUGS.md): 35 lỗi, chia mức P0/P1/P2;
- [../flf-177-ui-test/s9run/REPORT-UX.md](../flf-177-ui-test/s9run/REPORT-UX.md): nhận xét UX.

| File | Nội dung |
|---|---|
| [01-bug-fix-plan.md](01-bug-fix-plan.md) | 35 lỗi gom thành 9 gói việc (WP), mỗi gói có file cần sửa, cách sửa và tiêu chí xong |
| [02-reduce-stops-plan.md](02-reduce-stops-plan.md) | Giảm số lần phải chat và Accept, từ 91 điểm dừng xuống khoảng 15–20 |
| [03-live-status-flow.md](03-live-status-flow.md) | Luồng cho user thấy FlintFlow đang làm gì, còn bao lâu và đã được gì, để user không phải ngồi chờ trong mù mờ |

## Ba vấn đề gốc, và file plan nào giải quyết

| Vấn đề gốc | Giải quyết ở |
|---|---|
| User không biết cái gì đã được ghi thật (chat nói đã làm nhưng không ghi, gate chỉ có con số) | 01 (WP-2, WP-5) + 03 |
| Không sửa hay bổ sung được thứ phát hiện thiếu muộn | 01 (WP-2, WP-3) |
| Hệ thống mong manh (409, khoá step, reload mất gate) và chờ mà không biết đang chờ gì | 01 (WP-4) + 03 |
| Chat và Accept quá nhiều | 02 |

## Thứ tự làm đề xuất

Bốn đợt (sprint) S1–S4 dưới đây đều có kích thước ngang nhau, mỗi đợt khoảng 1 tuần cho 1–2 dev. Đây chỉ là ước lượng thô, chưa được đội xác nhận.

```
S1  WP-1 Chặn luồng P0 ──┐
    WP-4 Ổn định phiên ──┼─► S2  WP-5 Gate có nội dung ─► S3  02: auto-accept + gom gate ─► S4  02: gom câu hỏi
    WP-2 Cấp id / add ───┘        03: live status (P1)          03: live status (P2)              WP-7/8/9 dọn P2
                                  WP-3 Bổ sung muộn             WP-6 Chất lượng output
```

**Nguyên tắc sắp thứ tự:**
- **Lỗi hỏng dữ liệu và chặn luồng làm trước tiên.** Lỗi làm mất dữ liệu là lỗi làm mất user.
- **Làm gate có nội dung (WP-5) trước khi gom gate (02).** Nếu gom gate mà gate vẫn chỉ hiện "Đã ghi 31 thay đổi", user sẽ phải duyệt một khối lớn hơn mà vẫn không biết bên trong có gì.
- **Live status (03) dùng chung dữ liệu tóm tắt với WP-5.** Phần sinh `summary` từ op viết một lần và dùng ở cả hai chỗ.

## Mốc đo sau mỗi đợt

Chạy lại đúng kịch bản "Phòng khám Minh An" (7 màn):

| Chỉ số | Hiện tại | Mục tiêu sau S4 |
|---|---|---|
| Số lần bấm Accept | 91 | ≤ 20 |
| Số lần buộc reload | 5 | 0 |
| Số phút kẹt khoá | ~20 | 0 |
| Cờ đỏ lộ ra lần đầu ở S-9.1 | 35 | ≤ 5 (còn lại đã xử lý ở gate trước đó) |
| Số cờ phải waive để ký | 11 | ≤ 3 |
| Số câu hỏi bị hỏi lặp | ≥ 8 | 0 |
| Ký baseline không cần gọi API | ❌ | ✅ |
| Credit cho cả dự án | 404 | ≤ 250 (bớt lượt chạy lại và hỏi thừa) |
