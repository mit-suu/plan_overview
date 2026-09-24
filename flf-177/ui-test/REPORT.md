# FLF-177 — Kiểm thử qua UI, B-0 → S-3 (2026-09-22)

**Kết luận nhanh:** hai phần bố cục sơ đồ và tên hệ thống trên sơ đồ/docx **đạt**. Cách truy cập của actor ở S-3 **đạt**, actor thông báo **đạt một phần**. Có **3 lỗi cần sửa**:

1. B-0.1 không tự hỏi tên hệ thống.
2. Cờ vàng `non_english_content` báo sai trên `project.name`.
3. Thiếu UC nhắc lịch 24h có time actor.

## Môi trường

| | |
|---|---|
| BE | `flintflow_be` — **đã chuyển từ `develop` sang `bugfix/FLF-177-usecase-include-extend` @ `4bdf119`** trước khi test. Lúc nhận việc, BE đang chạy ở `develop`, không có commit FLF-177 nào. `tsx watch` tự khởi động lại lúc 15:57:10; `/health` ok (mongo, plantuml). Working tree sạch. |
| FE / PlantUML | :3000 / :8080 |
| Tài khoản | hiep.tester@flintflow.io.vn |
| Dự án | "Phòng khám Minh An - đặt lịch" (tên tiếng Việt, cố ý), template FlintFlow ("No template yet"). id `6ab24325bb1ddd00ca2a403d` |
| Chế độ | coaching, gate ở mọi step |
| Trạng thái cuối | B-0.1 → S-3.5 đã Accept. **S-3.6 đang dừng ở gate, chưa Accept.** Đã ghép bản nháp v0.142 và tải docx. |

Cách trả lời: B-0.1 do tôi trả lời tay. Từ B-0.2 trở đi, script chọn **gợi ý đầu tiên** cho mọi câu hỏi (log ở `run-log.md` và phần cuối file này). Vài đáp án vì thế không thực tế, ví dụ "giữ dữ liệu vô thời hạn". Việc này không ảnh hưởng tới ba điểm cần kiểm.

## 1. Tên hệ thống — B-0.1 và sơ đồ ngữ cảnh S-2.5

| Kiểm | Kết quả | Bằng chứng |
|---|---|---|
| B-0.1 hỏi tên hệ thống ngay | ❌ **Không hỏi.** Có 5 vòng elicit và 1 vòng hỏi của runner, không vòng nào nhắc tới tên. Gate đầu tiên ghi `system_name = null`. | `03-b01-gate.png` |
| Có gợi ý tên tiếng Anh sau khi user yêu cầu (Request revision) | ⚠️ Có gợi ý, nhưng chỉ **2 tên**: "Minh An Booking" và "Minh An Clinic Appointment System". Tên thứ hai vi phạm luật "không thêm System/App". | `04-b01-system-name-suggestions.png` |
| Chỉ ghi khi user đã chọn | ✅ Chọn "Minh An Booking" ⇒ `project.system_name = "Minh An Booking"`, `project.name` giữ nguyên | spine json |
| Dùng tên hệ thống trong câu hỏi về sau | ✅ S-2.1 hỏi: "hệ thống nào bên ngoài sẽ tương tác với **Minh An Booking**?" | run-log |
| Boundary sơ đồ ngữ cảnh S-2.5 | ✅ `rectangle "Minh An Booking"` | `s25-D01-context.png`, `11-ui-S2.5-context-diagram.png` |
| Cờ `system_name_missing` | ✅ Không bật, vì tên đã chốt trước S-2.5 | |
| Docx (bìa / title / header / tên file) | ✅ Tên file `minh-an-booking-v0.142-draft.docx`, bìa "Minh An Booking", header "Minh An Booking - SRS v0.142", core title đúng. Tên tiếng Việt không xuất hiện ở đâu. | file docx |
| Tên hiện trên UI | ⚠️ Panel SRS không có bìa. Header ghi "SRS — Phòng khám Minh An - đặt lịch" (`project.name`). Plan có ghi "tên hiện trên bìa trong panel SRS", nhưng thực tế user chỉ thấy tên hệ thống **bên trong ảnh sơ đồ** và trong docx. | `10-srs-panel-assembled.png` |

**Lỗi 1 — B-0.1 không hỏi tên (nghiêm trọng nhất).** Nguyên nhân khớp với "lệch plan" đã ghi trong guide:
- Elicit không nhận guidance của content skill (`content_guidance: ""`).
- `elicit-loop/SKILL.md:75` chỉ **ghi** `system_name` khi user nói rõ, không có lệnh **hỏi**.
- Draft `product-brief` cũng không đặt câu hỏi hay assumption nào.

Hệ quả: user không yêu cầu thì tên sẽ trống tới S-2.5, và chỉ lộ ra qua cờ vàng.

**Lỗi 2 — `non_english_content` báo sai trên `project.name`.** `deterministic-check.ts:701` vẫn quét `name` dù `system_name` đã đặt. Cờ FL031 mở từ version 5 và vẫn mở ở v142. `remediation_step: S-2.1` gợi ý user đổi tên project sang tiếng Anh, ngược với phương án B. Khi `system_name` đã có, `project.name` không còn in ra tài liệu nên không nên quét.

## 2. S-3 — cách truy cập của actor và UC thông báo

Actor: A01 VNPay (system), A02 SMS/Email Notification Service (system), A03 Patient, A04 Receptionist, A05 Doctor, A06 Administrator. Không có time actor.

| Kiểm | Kết quả |
|---|---|
| Mỗi actor người có Access trong `description` | ✅ Patient "self-registers with SMS OTP" · Receptionist/Doctor "clinic-created account" · Administrator "provisioned account" |
| Thiếu thông tin ⇒ **một** assumption gộp `path: "actors[]"` | ✅ AS07 (unconfirmed): admin đầu tiên được cấp ngoài hệ thống; admin mời Receptionist/Doctor; patient tự đăng ký |
| Register / Log In / Reset gắn đúng tập actor | ✅ Register Account: chỉ Patient (+A02 gửi OTP). Log In và Reset Password: cả 4 actor người |
| UC tạo tài khoản cho actor được mời | ✅ UC14 Manage Staff Accounts (Administrator) |
| Actor thông báo chỉ gắn UC phát sự kiện | ✅ A02 gắn Register (OTP), Book (email xác nhận), Reschedule, Cancel; không gắn UC chỉ đọc |
| Không có UC thụ động "Receive…/View Notifications" | ✅ Không có |
| Việc chạy theo lịch ⇒ có time actor (SKILL dòng 38) | ❌ **Lỗi 3:** SMS nhắc lịch trước 24h là cơ chế chính cho mục tiêu giảm no-show, nhưng **không có UC nào** (kiểu "Send Appointment Reminder") và không có time actor. Cũng không có UC xử lý no-show / giữ cọc. S-3.3 (rà UC còn thiếu) chỉ thêm UC16 Manage Appointments và UC17 Review Activity Log. |
| Assumption AS07 được đưa ra cho user xác nhận ở gate | ⚠️ Gate S-3.1 không hiện câu hỏi hay thẻ nào cho AS07. Sau Accept nó vẫn `unconfirmed`. |

Bảng use case (17 UC) và puml nằm trong `spine-at-S-3.6-gate.json`.

## 3. Bố cục sơ đồ use case (S-3.6)

| Kiểm | Kết quả |
|---|---|
| Actor người bên trái, actor system bên phải | ✅ VNPay và SMS nằm bên phải. Mọi cạnh người là `A -- UC`, cạnh system là `UC -- A`. |
| Tách hình theo actor người | ✅ 17 UC ⇒ 2 hình: D02 "Patient / Receptionist / Doctor" (11 UC) và D02-2 "Administrator" (6 UC). Mỗi actor người có UC chính nằm trọn một hình. |
| UC gom theo actor chính | ✅ Thứ tự trong puml: Patient → Receptionist → Doctor. Trên ảnh, Log In / Reset Password (dùng chung 4 actor) bị Graphviz đẩy xuống giữa nhóm Receptionist và Doctor. |
| Giữ cạnh system ở UC include | ✅ UC07 Pay Booking Deposit (bị include) vẫn giữ cạnh VNPay |
| Dễ đọc | ⚠️ Chấp nhận được, nhưng còn mấy chỗ: cạnh VNPay–Cancel Appointment vòng xuống dưới đáy hình, ra ngoài boundary; actor SMS bị đặt dưới góc chứ không nằm bên phải; nhiều cạnh chéo quanh Log In / Reset. Tiêu đề hình 1 không nhắc Administrator dù Administrator có mặt trong hình (qua Log In/Reset). |

Ảnh: `s36-D02-usecase.png`, `s36-D02-2-usecase.png` (PlantUML local), `12-ui-S3.6-usecase-1.png`, `13-ui-S3.6-usecase-2.png` (trên UI).

## Quan sát khác (ngoài phạm vi FLF-177)

- Elicit ở S-3.2 → S-3.5 hỏi lạc chủ đề: tách function, đặt mã màn, gom màn (việc của S-4/S-5), và hỏi lặp gần như cùng một câu ở 4 step. Gate S-3.2, S-3.4 và S-3.5 không ghi op nào (không có dòng "Đã ghi"). S-3.1 đã tạo sẵn 15 UC.
- B-0.1 ghi nhận sai một câu trả lời: "huỷ/đổi sau hạn 2h ⇒ mất cọc" bị ghi thành luật no-show.
- Model tự bịa `confirmed_at` cho assumption (2025-01-15, 2026-09-16).
- Nút "Chạy bước này" biến mất khi runner chạy. Status "Chờ bạn trả lời 3 câu hỏi" vẫn đứng yên khoảng 1–2 phút sau khi đã trả lời, đến khi có event mới. User dễ tưởng bị treo.
- Console: 78 lỗi, tất cả là `409` của `GET /document?source=draft:0` khi chưa ghép tài liệu (FE gọi liên tục). Không có lỗi nào khác.
- Credit: bắt đầu với 1.000 credit; số tiêu hao chưa đo.

## File trong thư mục này

- `00…04-*.png`: B-0.1 (chạy step, gate, gợi ý tên).
- `gate-<step>.png`: ảnh gate của từng step từ B-0.1 đến S-3.6.
- `10…14-*.png`: panel SRS sau khi ghép, sơ đồ trên UI, hộp thoại Export.
- `s25-*`, `s36-*`: puml và png của sơ đồ ngữ cảnh và use case.
- `spine-at-S-3.1-gate.json`, `spine-at-S-3.6-gate.json`: Spine đầy đủ tại hai thời điểm.
- `minh-an-booking-v0.142-draft.docx`: bản nháp đã tải.
- `run-log.md`: câu hỏi và đáp án đã chọn tới S-1.4. Phần S-2.1 → S-3.6 ở bên dưới.
- `scripts/`: script Playwright dùng để chạy tự động.

### Log S-2.1 → S-3.6 (auto, chọn gợi ý đầu)
```
S-2.1 Q hệ thống ngoài tương tác với Minh An Booking? => VNPay ; NCC cụ thể? => TBD        gate 28đ/1v
S-2.2 gate · S-2.3 Q actor? => Bệnh nhân… ; hệ thống ngoài? => VNPay + SMS/email  gate 2 ops v102, 26đ/3v
S-2.4 Q slot? => 15 phút ; no-show giới hạn? => không ; hoàn cọc? => tự động 1–3 ngày  gate 7 ops v108
S-2.5 gate (vẽ D01) 26đ/3v
S-3.1 Q 4 vai? => đúng ; UC bắt buộc? => Bệnh nhân… ; màn? => 7 màn        gate 24 ops v117, 21đ/20v
S-3.2 Q tách function? => 1/UC ; gom màn? => theo actor ; ngôn ngữ? => EN   gate (0 ops)
S-3.3 Q function/màn…                                                         gate 2 ops v127, 21đ/23v
S-3.4 Q màn/mã màn… => SCR-P01…                                              gate (0 ops)
S-3.5 Q tách function/gom màn…                                                gate (0 ops)
S-3.6 gate (vẽ D02, D02-2) 20đ/23v — CHƯA ACCEPT
```
