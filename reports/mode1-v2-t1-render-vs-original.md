# T1 — So bản render `0.0` với file .docx gốc · Ngày: 2026-09-20

> Plan: `plan-mode1-v2-workspace.md` §0.1 nợ T1, §10 mục 4. Ticket **FLF-188** (V6).
> Kiểm chứng D1: *"Tài liệu render từ Spine theo thứ tự + tiêu đề mục của chính file người dùng upload; mất định dạng Word gốc — chấp nhận."*

## 1. Cách làm

Không phải so bằng mắt trên Word 16 như plan dự kiến ban đầu. Thay vào đó **rút cấu trúc OOXML của cả hai file rồi đối chiếu bằng máy** — đếm được, lặp lại được, và chỉ ra đích danh đoạn nào rơi, thay vì một câu "nhìn chung giống".

- Dữ liệu: dự án thật của người dùng trên DB dev, `projectId = 6aaf6d18a7bf04c98673522e`, SRS `WDP301_Group1_Report3_Software_Requirement_Specification_under_10MB.docx` (5,46 MB, 61 màn, 32 function).
- Hai file lấy từ chính `DocVersion 0.0`: `original_ref` = file người dùng upload, `file_ref` = bản render từ Spine. **Hai bản nằm cùng tên `<projectId>/version/0.0` trong GridFS**, nên phải đọc ref từ `DocVersion`, không được chọn theo tên file (lần đo đầu tôi chọn theo tên nên so nhầm bản gốc với chính nó).
- Rút từ `word/document.xml`: đoạn có chữ, heading (theo `w:pStyle`), bảng (`w:tbl`), ảnh (`a:blip` + `word/media/*`).

**Chưa làm:** mở bằng Word 16 để nhìn trang in (ngắt trang, header/footer, mục lục cập nhật được, ảnh hiển thị đúng chỗ). Phần đó vẫn cần người mở file — xem §5.

## 2. Số đo

| | File gốc | Bản render 0.0 | Chênh |
|---|---|---|---|
| Đoạn có chữ | 1 685 | 1 518 | −167 |
| Heading | 67 | 166 | **+99** |
| Bảng | 10 | 12 | +2 |
| Ảnh (`a:blip`) | 39 | **4** | **−35** |
| File trong `word/media/` | 37 | 5 | −32 |
| Dung lượng | 5,46 MB | 0,26 MB | −95 % |

Đối chiếu chữ (đoạn > 25 ký tự, so sau khi chuẩn hoá):

| Nhóm | Số đoạn | Nghĩa |
|---|---|---|
| Còn nguyên văn | 1 353 | khớp chính xác |
| Dòng mục lục cũ | 31 | render tự sinh lại "Table of Contents" nên không cần dòng cũ — **không phải mất** |
| Đổi dạng / gộp đoạn | 196 | chữ vẫn nằm trong bản render, chỉ khác cách chia đoạn hoặc dấu câu — **không phải mất** |
| **Mất thật** | **105** | không tìm thấy ở bất kỳ đâu trong bản render |

## 3. Kết luận theo từng mặt

### 3.1 Thứ tự và tiêu đề mục — ĐẠT

Cả 66 heading của file gốc đều có mặt trong bản render, **đúng thứ tự gốc**, giữ nguyên chữ tiêu đề (`Screen Authorization`, `Connect Repository`, `Monitor Code Quality`…). Không mục nào bị bỏ, không mục nào bị đổi tên. Đây chính là điều D1 hứa và nó giữ đúng lời.

### 3.2 Đánh số lại — LỆCH MỘT CẤP so với gốc

Render đánh số lại theo cấp, và vì file gốc để `I. Record of Changes` và `II. Software Requirement Specification` ngang cấp 1, toàn bộ nội dung bị **đẩy sâu thêm một cấp**:

| File gốc | Bản render |
|---|---|
| `II. Software Requirement Specification` | `1 Software Requirement Specification` |
| `2.1 Actors` | `1.2.1 Actors` |
| `3.1.2 Screen Descriptions` | `1.3.1.2 Screen Descriptions` |
| `3.2.1 Login with GitHub` | `1.3.2.1 Login with GitHub` |

Hệ quả: số mục sâu tới 4 cấp (`1.3.2.1`) trong khi mẫu FPT chỉ tới 3, và **mọi tham chiếu chéo kiểu "xem mục 3.1.5" trong văn bản đều trỏ sai**. Chữ tiêu đề đúng, chỉ con số lệch. Đây là lỗi nên sửa — xem §4 nợ **T14**.

### 3.3 Heading tăng 67 → 166 — đúng ý đồ, cần biết trước

99 heading thêm vào không phải rác: render sinh "Table of Contents", và với mỗi function nó tách `Normal Flow` / `Abnormal Flow` / `Validations` thành heading riêng (gốc để chung trong bảng). Tài liệu ra **chi tiết hơn bản gốc**, nhưng ai quen bản cũ sẽ thấy lạ.

### 3.4 Ảnh — MẤT 35/39, đây là thiệt hại lớn nhất

Bản render chỉ còn 4 ảnh (các diagram PlantUML vẽ lại). 35 ảnh còn lại của file gốc — sơ đồ use case, ERD, ảnh chụp màn hình, sơ đồ kiến trúc — **biến mất hoàn toàn**, chỉ còn placeholder chữ. Dung lượng tụt 95 % chủ yếu vì cái này.

Đúng là nợ **T3** đã ghi trong plan, nhưng con số 35/39 cho thấy mức nghiêm trọng hơn cách plan mô tả ("khối ảnh trong `custom_sections` chỉ render placeholder"): với SRS thật, ảnh là phần lớn nội dung trực quan. Giao bản render 0.0 cho khách lúc này là giao một tài liệu **thiếu gần hết hình**.

### 3.5 105 đoạn mất thật — thuộc bốn nhóm

1. **Mô tả function không gắn màn** (`Displays all repositories connected to the user's account.`, `Parses changed source files and executes static analysis…`) — I‑4 trích được tên function nhưng không giữ câu mô tả.
2. **Mô tả phần tử màn** (`"Repository Table": Display connected repositories.`, `"Open Repository": Button - Open repository details.`) — rơi khi màn chưa chạy S‑5.
3. **Dòng metadata của use case** (`Actors/Roles: Developer, Admin`, `Purpose: Allow users to authenticate…`) — render dựng lại từ field Spine nên không giữ dòng nguyên văn; nội dung tương đương vẫn có, chỉ khác cách trình bày.
4. **Bảng Record of Changes của file gốc** (`Create and edit Product Overview`, `Add and modified Requirement Appendix`) — mục `fixed:I` là mục tự sinh từ lịch sử CR, nên lịch sử cũ của khách **bị thay bằng lịch sử FlintFlow**. Mất dữ liệu lịch sử của chính khách hàng.

Nhóm 3 chấp nhận được (D1). Nhóm 1, 2, 4 là mất thật.

## 4. Nợ mới ghi nhận

| # | Việc | Mức | Hướng |
|---|---|---|---|
| **T14** | Đánh số lại bị đẩy sâu một cấp khi file gốc có mục ngang hàng với chương chính (`I. Record of Changes` + `II. SRS`) ⇒ `3.1.2` thành `1.3.1.2`, tham chiếu chéo trong văn bản trỏ sai | Trung bình | `render/layout-sections.ts`: mục cấp 1 không sinh đầu mục FPT (Record of Changes) không được tính vào dãy số chương |
| **T15** | Record of Changes của file gốc bị thay bằng lịch sử CR của FlintFlow, mất lịch sử sửa đổi cũ của khách | Trung bình | Giữ các dòng cũ làm phần đầu bảng, CR mới nối tiếp bên dưới |
| **T3** (đã có) | Ảnh: nay có số đo — **35/39 ảnh mất**, không phải thiểu số | Nâng lên **Cao** | V5 bước 6 (`image_ref` ⇒ nhúng lại ảnh gốc) |

## 5. Phần còn lại cần người mở Word

Những thứ không đo được bằng XML, cần mở `0.0` trên Word 16 cạnh file gốc:

- [ ] Mục lục tự sinh có cập nhật được bằng F9 không (render có "Table of Contents" nhưng chưa rõ là field thật hay chữ chết).
- [ ] Ngắt trang, khoảng cách, bảng có tràn lề không.
- [ ] Header/footer, số trang, logo công ty — đã biết là mất (nợ T2, chấp nhận theo D1), chỉ cần xác nhận mức khó chịu.
- [ ] Style heading có vào đúng navigation pane của Word không.

File để so: tải từ workspace mode 1 — nút **Tải file gốc** (bản khách upload) và **Tải bản render (DRAFT)** (bản 0.0) trong cột "Kế hoạch & version".

## 6. Tái lập

Số trong báo cáo này lấy từ một dự án thật trên DB dev bằng script đọc-chỉ-đọc (không lưu vào repo, nằm trong scratchpad phiên làm việc). Muốn đo lại trên SRS khác: đọc `DocVersion` của version `0.0`, lấy `original_ref` và `file_ref`, giải nén `word/document.xml` của cả hai, so heading theo `w:pStyle` và đoạn theo `w:t` — lưu ý bắt đúng thẻ `<w:t>` (regex `<w:t[^>]*>` khớp nhầm cả `<w:tabs>`, `<w:tbl>`, `<w:tc>`).
