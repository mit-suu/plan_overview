# FlintFlow — chạy thật S-3.6 → S-9 và xuất baseline, góc nhìn một BA (2026-09-22)

Dự án: "Phòng khám Minh An - đặt lịch" (`6ab24325bb1ddd00ca2a403d`), template FlintFlow, chế độ Kèm cặp, BE ở nhánh `bugfix/FLF-177-usecase-include-extend`.
Cách chạy: tôi đóng vai BA thật — tự đọc và trả lời từng câu hỏi (không chọn bừa gợi ý đầu), kiểm tra nội dung ở các gate quan trọng, dùng Request revision và công cụ sửa khi thấy sai. Ghi chú chi tiết theo thời gian ở `ux-notes.md`.

## Kết quả

- **Baseline `v1.0-conditional` đã ký và đã xuất**: `minh-an-booking-v1.0-conditional.docx` (84 trang, 11 hình, bìa "Minh An Booking").
- **Không ký được bằng UI.** Ở mode template FlintFlow không có nút ký baseline: Accept gate S-9.5 chỉ đánh dấu step xong, `baselines[]` vẫn rỗng. Tôi phải gọi `POST /projects/:id/baseline` trực tiếp, rồi tải file qua Export → Word baseline trên UI.
- Phải **waive 11 cờ** mới ký được (10 cờ đỏ và cờ vàng `non_english_content` báo sai). Chất lượng thật của baseline:
  - Màn **Auth (S01)** và **Admin Console (S07)** không có đặc tả: 3.2.1 và 3.6.1 trong docx chỉ có tiêu đề.
  - **Không có use case** cho nhắc lịch SMS và cho xử lý no-show (chỉ có function).
  - NFR uptime ghi ≥ 99.5% trong khi user đã chốt 99%.
- Số đo:

  | | |
  |---|---|
  | Tổng số step | 91 (51 cố định + 8 nhóm × 5) |
  | Credit dùng cho cả dự án | 404 (1.000 → 596) |
  | Thời gian từ S-3.6 đến lúc có baseline | khoảng 1 giờ 40 phút, trong đó khoảng 20 phút chờ khoá step |
  | Số lần buộc phải reload | 5 |

## Lỗi chặn luồng hoặc làm hỏng dữ liệu (xếp theo mức nghiêm trọng)

| # | Lỗi | Bằng chứng / nguyên nhân nghi ngờ |
|---|---|---|
| 1 | **Mode FlintFlow không có đường ký baseline trên UI.** Gate S-9.5 chỉ gọi `/gate`. Nút "Ký baseline v1" chỉ có trong `Mode1PlanPanel` (mode import). | `app/projects/[id]/page.tsx:101`, `Mode1PlanPanel.tsx:144`; gate S-9.5 trả 200, `baselines: []` |
| 2 | **Revision ghi đè function của màn khác.** Request revision "thêm 2 function Reschedule/Cancel cho S04" hiển thị 0 ops, nhưng thực tế đổi **FN005 Check In Patient → Reschedule** và **FN006 Write Visit Notes → Cancel**. Hai chức năng của Lễ tân và Bác sĩ biến mất mà không có cảnh báo. | Model tự đánh id tiếp theo trùng id đã có, nên `set` đè thay vì `add`. Cùng lớp lỗi với `duplicate_id A03` ở công cụ sửa. |
| 3 | **Hàng đợi S-5 bỏ sót màn.** Sau S06 luồng nhảy sang `nonscreen` rồi S-6. S01 và S07 còn `placeholder`, 10 step `pending`. Panel Tiến độ hiện các step này nhưng **disabled**. | Nguyên nhân: model tự đặt 2 màn này là placeholder ở S-4.1 (AS08/AS09), nhưng user không được báo và không có cách quay lại. Không có cờ nào bắt màn placeholder. |
| 4 | **Crash S-4.1** `NOT_IMPLEMENTED: values is not iterable`. | `reference-fields.ts:160` `many()` lặp qua mảng `undefined` khi model `add` phần tử thiếu mảng. TypeError bị quy thành 501 thay vì thành lỗi validate để retry. |
| 5 | **Khoá step kẹt khoảng 15–20 phút.** `STEP_NOT_RUNNABLE` ("đang được xử lý ở một request khác") sau khi reload. | `runningSteps` là khoá in-process không có TTL riêng; phải chờ `ANSWER_WAIT_TIMEOUT_MS`. |
| 6 | **`SPINE_VERSION_CONFLICT` "another session" xuất hiện 5 lần** dù chỉ có một tab. | Xảy ra sau lỗi, sau khi Accept, sau khi dùng công cụ sửa hoặc waive: FE giữ `base_version` cũ. Cách gỡ duy nhất là reload, và reload thì mất gate đang mở. |
| 7 | **Không có đường bổ sung thứ bị thiếu phát hiện muộn.** Yêu cầu thêm UC nhắc lịch/no-show 4 lần đều không vào: chat nói "đã bổ sung 19 UC" nhưng Spine vẫn 17 UC; công cụ sửa báo `path_not_resolved`; S-3.6 có `writes: []`; S-4.1 bỏ qua; S-5.4 không thêm được function. | `apply-change-op` chỉ dạy `set` cho phần tử đã có: không có `add`, không cấp id mới, không sửa phần tử trong mảng có id (`op_not_allowed … validations`). |
| 8 | **Giả định bị giấu tới S-9.1.** 27 giả định chưa xác nhận hiện ra cùng lúc (cờ đỏ 2 → 35). Một số **trái với câu user đã trả lời**: uptime 99.5%, 500 người dùng đồng thời, "chỉ in-app, không email". | Suốt quy trình không gate nào cho xem hay xác nhận giả định. Verification panel không có nút Xác nhận/Bác bỏ, chỉ có Waive. |
| 9 | Sửa giả định không lan sang dữ liệu đã sinh ra từ nó: AS28 đã sửa thành 99% nhưng NFR N08 vẫn ≥ 99.5%. | |
| 10 | **§I Record of Changes có 425 dòng**: mỗi version Spine là một dòng, kể cả "step-runner: elicit turn" và "Waive …"; 128 dòng tiếng Việt. Không gửi khách được. | |

## Nhận xét UX theo góc nhìn BA

**Điểm tốt**
- Câu hỏi ở S-5.2 và S-5.4 cụ thể, sát màn hình, có gợi ý đáp án tốt. S-6.2 → S-7.1 chạy 5 step liền không cần hỏi (suy từ dữ liệu đã có) — đây là trải nghiệm tốt nhất của cả quy trình.
- Khi công cụ sửa chạy được thì preview diff rất tốt: bảng Before/After, phạm vi ảnh hưởng, "đang bị tham chiếu bởi".
- Waive bắt buộc ghi lý do ≥ 20 ký tự, và lý do được in vào baseline.
- Model tự phát hiện FN006 mang nhầm luồng huỷ lịch và hỏi lại (S-5.2@S06).
- Request revision ở S-4.3 (quyền) và S-9.4 (MoSCoW) sửa đúng ngay lần đầu.

**Điểm gây khó**
1. **Gate không cho biết đã chốt cái gì.** Mọi gate chỉ hiện "Đã ghi N thay đổi · X cờ đỏ". Muốn biết 7 màn là gì, ma trận quyền ra sao hay ưu tiên MoSCoW thế nào, tôi phải tự mở dữ liệu. MoSCoW tự gán FN01 (nhắc lịch SMS, cơ chế chính để giảm no-show) là COULD mà không hỏi, và gate cũng không hiện điều đó.
2. **Hai kiểu hội thoại lẫn nhau.** Chat tự do và runner của step trông giống nhau nhưng một bên có ghi dữ liệu, một bên không:
   - Chat tự do nói "đã chốt 7 actor", "tổng 19 UC" nhưng không ghi gì.
   - Chat còn tự bịa "bước tiếp theo là S-3.8 NFR", một step không tồn tại.
   - Ô chat có placeholder "…lệnh yêu cầu chỉnh sửa" nhưng không sửa được; công cụ sửa thật nằm ở icon bút chì bên phải.
3. **Gợi ý đáp án không bám dữ liệu đã chốt.**
   - Cọc 30%/50%/100.000đ trong khi đã chốt 50.000đ cố định.
   - "Tối đa 3 lịch/ngày" trong khi đã chốt "1 lịch đang chờ".
   - "Cọc không hoàn khi huỷ" trong khi đã chốt hoàn 100% nếu huỷ trước 2 tiếng.
   - ERD gợi ý Invoice/Room/Service, là các thực thể không có trong phạm vi.

   User vội chọn gợi ý sẽ tạo ra mâu thuẫn trong tài liệu.
4. **Hỏi lặp.**
   - Uptime bị hỏi 3 lần (S-1.4, S-6.1, S-7.2).
   - Giữ chỗ 15 phút bị hỏi 3 lần (S-4.4, S-5.2, S-5.4).
   - Message ở S-5.4 hỏi lại nội dung đã chốt ở S-5.2 của cùng màn, lần sau còn đòi tiếng Việt.
5. **Lộ khái niệm nội bộ và lỗi kỹ thuật.**
   - Câu hỏi nhắc tới "screen ảo @loop" và "permissions cho screen @loop".
   - Lỗi hiện nguyên mã: `duplicate_id`, `path_not_resolved`, `op_not_allowed`, `STEP_NOT_RUNNABLE: This step isn't ready…` (tiếng Anh, không nói lý do).
   - Nút "Xác nhận" vẫn hiện cạnh dòng "Không có thay đổi nào".
6. **Nhãn trạng thái mâu thuẫn.**
   - Feature ở tài liệu "Accepted" trong khi function bên dưới "Draft · Chưa hoàn thiện".
   - Export báo "2 cờ đỏ sẽ in vào §I" trong khi thực tế có 10.
   - Panel SRS gắn "stale"/"Cũ" mà không giải thích.
   - Verification panel xếp cờ vàng lên trước cờ đỏ.
   - Cờ đỏ `diagram_stale` xuất hiện trong luồng bình thường (S-5.4 sửa sau khi S-5.3 đã vẽ) và user không có nút vẽ lại.
7. **Wireframe S-5.3 không phải wireframe.** Nó là bảng 2 cột Function | Description, step không hỏi gì về bố cục. ERD không có thuộc tính vì schema `entities` không có field thuộc tính.
8. **Phiên đăng nhập 15 phút.** Một số lời gọi không tự refresh, nên fetch trả `data: null`.
9. **Chi phí.** Cả dự án tốn khoảng 400 credit, trong khi gói Free cho 100 credit/tháng, nên user Free không làm xong nổi một dự án. Bảng giá cũng có vẻ sai: gói 100 credit giá 4.000₫, còn gói 500 credit giá 199.000₫.

## Hướng cải thiện (theo thứ tự nên làm)

1. **Sửa 3 lỗi hỏng dữ liệu và chặn luồng trước**:
   - Thêm nút "Ký baseline" cho mode FlintFlow: đặt trong gate S-9.5 hoặc để Accept S-9.5 gọi `POST /baseline`; khi bị `BASELINE_BLOCKED` thì hiện danh sách cờ kèm link.
   - Cấp id phía server: model chỉ gửi `add` không kèm id, code cấp id tiếp theo. Thêm luật "`set` vào id đã tồn tại mà không có trong projection thì từ chối". Làm vậy là xử lý được cả `duplicate_id` lẫn chuyện ghi đè FN005/FN006.
   - Hàng đợi S-5 không được bỏ qua màn `placeholder` nếu user chưa đồng ý. Thêm cờ đỏ `screen_placeholder` và cho phép mở lại step pending từ panel Tiến độ.
2. **Ổn định phiên làm việc**:
   - Tự lấy lại `base_version` và thử lại một lần khi gặp 409 do chính client gây ra, và bỏ câu "another session".
   - Khoá step có TTL và giải phóng khi SSE đóng; khi lỗi thì hiện nút "Huỷ lượt đang chạy".
   - Refresh token im lặng.
   - Gate và câu hỏi đang mở phải khôi phục được sau khi reload (lưu phía BE, FE đọc lại).
3. **Cho sửa được thứ bị thiếu ở bất kỳ đâu**:
   - `apply-change-op` hỗ trợ `add` và `remove` phần tử trong mảng có id; projection cho model thấy danh sách id của collection đích.
   - Thêm lệnh "Thêm use case / function / màn" có form nhỏ, không cần qua model.
   - Gộp ô chat và công cụ sửa: khi chat nhận ra ý định sửa thì chuyển sang luồng preview diff. Chat tự do không được nói "đã thêm/đã chốt" nếu không có op nào được ghi.
4. **Gate phải có nội dung**:
   - Hiện tóm tắt những gì đã ghi, ví dụ "Thêm 7 màn: …", "Ma trận quyền 7 × 5", "MoSCoW: 7 must / 3 should / 1 could", kèm link "xem trong tài liệu".
   - Hiện **giả định mới sinh ra ngay tại gate** với 2 nút Xác nhận / Sửa. Không để dồn 27 cái tới S-9.1.
   - Tự accept các step không có gì để duyệt (S-5.1, S-5.3 khi 0 op, S-8.3); chỉ dừng khi có op hoặc có cờ mới.
5. **Câu hỏi bám dữ liệu và không lặp lại**:
   - Đưa `business_rules`, `nfrs` và các câu trả lời đã chốt liên quan vào context của elicit.
   - Gợi ý đầu tiên phải là giá trị đã chốt, ví dụ "Giữ 50.000đ như đã chốt".
   - Lưu các câu đã hỏi theo từng chủ đề (uptime, giữ chỗ, message) để không hỏi lại.
   - Không nhắc khái niệm nội bộ trong câu hỏi.
6. **Giảm số điểm dừng**: khi đã chốt trước với user thì gom S-5.1 → S-5.5 thành một gate cho mỗi màn, và gom S-6/S-7 thành một gate cho mỗi phase. 91 điểm dừng là quá nhiều.
7. **Chất lượng đầu ra**:
   - §I Record of Changes chỉ ghi một dòng cho mỗi baseline hoặc thay đổi có nghĩa (lấy `reason` do user viết), bằng tiếng Anh.
   - Sửa giả định thì đánh dấu stale các NFR/business rule sinh ra từ giả định đó.
   - Wireframe cần có khung thật (danh sách, nút, trường nhập).
   - ERD cần có thuộc tính chính.
   - Nhãn trạng thái phải nhất quán giữa feature và function, và giữa Export và Verification.

## File trong thư mục

- `ux-notes.md`: ghi chú theo thứ tự thời gian, đầy đủ hơn báo cáo này.
- `minh-an-booking-v1.0-conditional.docx`: baseline đã xuất.
- Ảnh chụp màn hình:
  - `01…27-*.png`: các trạng thái đáng chú ý (sửa lỗi, khoá step, panel Tiến độ bị disabled, Verification, Export).
  - `D03.png`: luồng màn hình.
  - `D04.png`: ERD.
  - `D05.png`: wireframe dạng bảng.
- `spine-latest.json`: Spine tại S-5 (version 25x).
