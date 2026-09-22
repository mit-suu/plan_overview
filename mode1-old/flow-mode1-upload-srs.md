# Luồng hoạt động — Mode 1: Upload SRS có sẵn rồi sửa

> **Tài liệu mô tả hệ thống đang chạy**, không phải kế hoạch. Kế hoạch xây dựng nằm ở `plan-mode1-v2-workspace.md`.
> Cập nhật: 2026-09-20, khớp code trên nhánh `feat/FLF-188-mode1-v2-tests` (V0–V4 + V6 đã làm; V5 đọc ảnh diagram chưa có).
> Hợp đồng API: `flintflow_be/docs/api/pipeline-contract.md`.

## 0. Một câu tóm tắt

Người dùng đưa vào một file SRS `.docx` đã viết sẵn. Hệ thống **không sửa trực tiếp file đó**. Nó đọc file ra thành dữ liệu có cấu trúc (Spine), rồi từ đó **in lại tài liệu theo đúng thứ tự và tiêu đề mục của chính file gốc**. Từ lúc này Spine là nguồn sự thật: sửa gì cũng sửa vào Spine, tài liệu được in lại.

Có một mốc chia đôi vòng đời: **baseline v1**. Trước nó, sửa tự do như đang soạn thảo. Sau nó, mọi thay đổi phải đi qua **change request** để có dấu vết ai yêu cầu, ai duyệt.

```
        ┌─────────── TRƯỚC baseline v1 ───────────┐   ┌──── SAU baseline v1 ────┐
upload → import → gap report → workspace (step + chat) → ký v1 → CR → 0.1, 0.2… → release 1.0
                                   ↑ sửa tự do                ↑ mọi sửa qua CR
```

## 1. Vì sao không sửa thẳng file .docx

Đây là quyết định D1, đánh đổi có chủ đích:

| | Sửa thẳng file gốc | Render lại từ Spine (đang dùng) |
|---|---|---|
| Định dạng Word gốc | giữ nguyên | **mất** (style, header/footer công ty) |
| Sửa bằng chat / AI | rất khó — phải định vị trong XML | dễ — sửa field, in lại |
| Kiểm tra nhất quán | không làm được | làm được (cờ đỏ soi dữ liệu) |
| Vẽ lại sơ đồ | không | được (PlantUML từ Spine) |
| Truy vết thay đổi | theo Track Changes | theo `changes[]` + change request |

Chấp nhận mất định dạng để đổi lấy khả năng **hiểu và kiểm tra được nội dung**. Bù lại, file gốc vẫn được giữ nguyên vẹn trong kho và tải về được bất cứ lúc nào (nút "Tải file gốc").

## 2. Giai đoạn 1 — Import (đưa file vào hệ thống)

Trạng thái lưu ở `project.import_state`, máy trạng thái ở `import.state.ts`:

```
uploaded → awaiting_latest_confirm → parsing → mapping_review → extracting
        → fields_review → baselining → checking → gap_review → delivered
                                                              ↘ change_requested
uploaded → preflight_rejected   (ngõ cụt)
```

| # | Bước | Endpoint | Việc xảy ra |
|---|---|---|---|
| I‑1 | Upload + preflight | `POST /projects/:id/import` | Kiểm file: có phải `.docx` thật không, zip hỏng không, có mã hoá không, có **stamp của dự án khác** không (chặn nhập nhầm tài liệu của project khác) |
| I‑2 | Xác nhận bản mới nhất | `POST /import/confirm-latest` | Người dùng khẳng định đây là bản cuối. Chống việc làm cả buổi trên một bản cũ |
| I‑3 | Tách block + dò mapping | tự chạy sau I‑2 | Cắt tài liệu thành block (đoạn, bảng, ảnh, heading), dò từng heading khớp với đầu mục nào của mẫu FPT. Không chắc ⇒ `mapping_review` cho người dùng sửa tay (`PATCH /import/mapping`) |
| I‑4 | Trích field bằng AI | `POST /import/extract` (chạy nền) | Với mỗi section, AI đọc block và rút ra **thực thể**: actor, use case, màn hình, function, entity, NFR, business rule… Mỗi mục có `confidence`; thấp thì đánh dấu để người xem lại |
| I‑5 | Xác nhận field | `PATCH /import/fields` | Người dùng duyệt/sửa những gì AI trích. `confirm_all: true` để chấp nhận hết |
| I‑6 | Finalize | `POST /import/finalize` | Ghi tất cả vào Spine, **render tài liệu**, tạo `DocVersion 0.0`, seed kế hoạch step, vẽ diagram nếu PlantUML với tới được |
| I‑7 | Gap report | `GET /gap-report` | Báo cáo: mục nào của mẫu FPT còn thiếu, văn xuôi nào không trích được, hình nào chưa vẽ được |

**Kết quả của giai đoạn này** — `DocVersion 0.0` có hai file:

- `original_ref` — file người dùng upload, nguyên vẹn (thêm stamp + bookmark neo)
- `file_ref` — **bản render lại từ Spine** theo layout của chính file đó

Cả hai tải được từ workspace. Xem `reports/mode1-v2-t1-render-vs-original.md` để biết bản render giống/khác file gốc chỗ nào.

### 2.1 Phần không trích được thì sao

Không phải mọi thứ trong SRS đều map được vào Spine. Ba trường hợp:

- **Heading khớp mẫu FPT nhưng văn xuôi không rút được thực thể** ⇒ giữ nguyên văn vào `custom_sections`, đánh dấu `unmapped_block_ids`, render lại đúng vị trí cũ.
- **Heading không thuộc mẫu FPT** (References, Design constraints, Sequence diagrams của mẫu IEEE…) ⇒ mục tuỳ chọn `custom:*`, giữ nguyên văn, sửa qua chat được, **không báo thiếu**.
- **Khối nằm dưới heading nhóm, không thuộc mục con nào** ⇒ "phần nối", gộp vào đầu mục chủ.

## 3. Giai đoạn 2 — Workspace (trước baseline v1)

Import xong, project mode 1 dùng **chính workspace của mode 2**. Không còn màn riêng.

### 3.1 Kế hoạch step theo template

Đây là điểm khác lớn nhất so với mode 2. Mode 2 chạy hết 60+ step theo thứ tự. Mode 1 **lấy step theo chính file người dùng đưa vào** (`GET /step-plan`):

| Tình huống | Trạng thái step | Hiện ở UI |
|---|---|---|
| Mục có trong file **và** Spine đã có dữ liệu | `accepted` | xong, không cần làm gì |
| Mục có trong file nhưng Spine trống (trích không ra) | `pending` + `missing` | nhãn đỏ **"Thiếu"** |
| Mục của mẫu FPT mà file **không có** | `pending` + `missing` | nhãn đỏ **"Thiếu"** |
| Step không sinh đầu mục nào (Brief `B-*`, `S-1.x`) | `skipped` | ẩn, bật thêm được |

> **Quan trọng:** "đã có nội dung" tính theo **dữ liệu trong Spine**, không theo việc file có chữ dưới đầu mục đó. File có heading "Screen Authorization" nhưng AI không rút ra role/permission nào ⇒ Spine trống ⇒ step vẫn là "Thiếu". Trước đây tính theo chữ trong file nên sinh ra ngõ cụt "step đã chốt mà cờ đỏ vẫn treo".

### 3.2 Hai cách sửa nội dung

**Cách 1 — chạy step.** Bấm "▶ Chạy `<bước>`". AI soạn nội dung cho mục đó và ghi vào Spine bằng op. Luồng một lượt chạy (`POST /steps/:id/run`, SSE):

```
intake → elicit (AI hỏi lại) → answer_needed (người trả lời) → draft (AI soạn)
       → ops_applied (ghi Spine) → render (vẽ diagram) → flags (tính lại cờ) → gate_ready
```

Tới `gate_ready` thì dừng chờ người quyết ở **cổng chốt** (`POST /steps/:id/gate`):

- **Accept** — chốt bước
- **Request revision** — tả lại cần gì, AI soạn lại
- **Regenerate** — soạn lại (tối đa 3 lần/step)
- **Accept as-is** — chấp nhận bản chưa ưng, bắt buộc ghi lý do, mở một cờ vàng

Trần **8 lượt gọi model/step**. Cổng chốt sẽ **nói thẳng nếu lượt chạy không ghi được gì** (`wrote_ops: false`) hoặc mục vẫn trống sau khi chạy (`empty_sections`) — để không rơi vào vòng chạy‑accept‑chạy lại vô ích.

**Cách 2 — gõ trong chat.** Ví dụ *"thêm role Admin và Teacher với quyền xem, sửa"*. Hệ thống dịch câu đó thành op, cho xem trước (`POST /changes/preview`), áp (`POST /changes`), hoàn tác được (`POST /undo`).

Cả hai cách đều ghi qua cùng một cửa (op engine + bất biến), nên không có đường nào lách được kiểm tra.

### 3.3 Cờ — hệ thống tự soi chất lượng

Sau mỗi lượt chạy step và mỗi lần sửa qua chat, hệ thống chạy lại bộ luật tất định trên Spine:

| Cờ đỏ (chặn ký v1) | Nghĩa | Waive được? |
|---|---|---|
| `section_empty` | mục bắt buộc chưa có dữ liệu | có |
| `dead_reference` | tham chiếu trỏ tới id không tồn tại | **không** |
| `render_error` | diagram vẽ lỗi | **không** |
| `diagram_stale` | diagram cũ so với dữ liệu | có |
| `nfr_missing_number` | NFR thiếu số đo (mode 1 hạ xuống vàng) | có |
| `unconfirmed_assumption` | giả định chưa xác nhận (chỉ tính khi ký) | có |

Cờ vàng (`orphan_actor`, `screen_no_function`, `empty_feature`…) **không chặn** gì, chỉ nhắc.

Cột "Kế hoạch & version" liệt kê từng cờ đỏ kèm nút chạy step xử lý được nó, và nút **Waive** (lý do ≥ 20 ký tự) cho cờ waive được. Waive không phải là giấu lỗi: bản ký sẽ mang dấu **`-conditional`** và danh sách waive in vào phụ lục.

Cờ **tự đóng** khi điều kiện hết — không cần bấm gì. Đóng ở lượt recompute cuối mỗi lần chạy step / sửa chat, nên nếu chạy xong mà cờ vẫn treo thì nghĩa là lượt đó **không ghi được dữ liệu nào** vào mục đó.

### 3.4 Ký baseline v1

`POST /baseline`. Đây là mốc bàn giao: Lead xác nhận tài liệu đủ tốt.

1. Quét lại toàn bộ luật **ngay trước khi ghi**, bật thêm các luật chỉ chạy ở mốc này (`unconfirmed_assumption`, `section_stale_at_baseline`, `screen_pending_at_baseline`).
2. Còn cờ đỏ chưa waive ⇒ **từ chối** (`422 BASELINE_BLOCKED`), trả kèm danh sách cờ.
3. Sạch ⇒ chụp snapshot Spine, ghi `baselines[]`, đánh dấu step `S-9.5` accepted, tất cả trong **một** transaction.

Từ giây này, mọi route sửa Spine (`/changes`, `/reconcile`, `/undo`) đều trả `409 CHANGE_REQUIRES_CR`.

## 4. Giai đoạn 3 — Change request (sau baseline v1)

### 4.1 CR bắt đầu từ đâu

- **Từ chat** — gõ lệnh sửa như thường, hệ thống tự tạo CR nguồn `chat` và mời mở ra làm.
- **Từ gap report** — mục còn thiếu mời tạo CR (mục *trống* thì không: trống thì phải chạy step, không có gì để "sửa").
- **Tạo tay** — nguồn `stakeholder_email`, `meeting_minutes`, `viewer_comment`, `verbal`…
- **Từ re-upload** — người dùng đưa lên bản .docx sửa tay bên ngoài, hệ thống diff rồi đề xuất CR.

### 4.2 Vòng đời một CR

```
draft → clarifying ⇄ awaiting_answers → impact_review → proposing → verifying
      → ready_to_submit → in_review → written
                                    ↘ rejected     (mọi trạng thái → cancelled)
```

| Bước | Endpoint | Việc xảy ra |
|---|---|---|
| **C‑2** Làm rõ | `POST …/clarify` | AI đọc mô tả, hỏi lại chỗ mơ hồ. Tối đa vài vòng rồi buộc đi tiếp |
| **C‑3** Tìm vị trí + khoá | `POST …/impact` | Tìm **phần tử Spine** nào bị ảnh hưởng (theo liên kết, theo nhắc tên, theo từ khoá), rồi **khoá** chúng lại để CR khác không đụng. 0 vị trí ⇒ `409 CR_NO_LOCATIONS` kèm gợi ý step cần chạy |
| **C‑4** Đề xuất | `POST …/propose` | Mỗi vị trí, AI kết luận: `edit` (kèm op Spine), `comment` (chỉ ghi chú), hay `not_related` |
| **C‑5** Kiểm | `POST …/verify` | Đối chiếu lại: giá trị tại path có bị đổi sau lúc đề xuất không (`CR_VALUE_CHANGED`), op có lấn ra ngoài phần tử đã khoá không, có sinh cờ đỏ mới không |
| **C‑6** Nộp | `POST …/submit` | Gom vị trí thành **nhóm thay đổi** để duyệt. Mọi vị trí đều `not_related` ⇒ chặn (`CR_NOTHING_TO_APPROVE`) chứ không để CR kẹt ở màn duyệt trống |
| **C‑7** Duyệt | `POST …/groups/:gid/decision` | Duyệt/từ chối **từng nhóm**. Nhóm được duyệt ⇒ **ghi ngay vào Spine** rồi render version minor mới (0.1, 0.2…) |

**Duyệt là ghi ngay, không gom lại ghi sau** (D4). Gom lại sẽ phải khoá lâu, và lúc ghi thì dữ liệu đã khác lúc kiểm.

### 4.3 Khoá

Từ C‑3 tới khi CR ghi xong/đóng/huỷ, các phần tử Spine bị CR giữ. CR khác chạm vào ⇒ `409 PATH_LOCKED` kèm tên CR đang giữ. Đây là cách hai người sửa song song không đè lên nhau.

## 5. Giai đoạn 4 — Release

`POST /release`. Gom mọi CR đã `written` từ lần release trước, đóng số **major** (1.0, 2.0…), tạo **bản sạch**.

Còn cờ đỏ mở ⇒ chặn (`RELEASE_RED_FLAGS_OPEN`).

## 6. Bảng version

| Version | Sinh khi | Nội dung |
|---|---|---|
| `0.0` | import finalize | bản render đầu tiên + file gốc kèm theo |
| `0.1`, `0.2`… | mỗi CR duyệt xong | bản render sau thay đổi |
| `1.0`, `2.0`… | release | bản sạch, đóng baseline |

## 7. Những chỗ dễ hiểu nhầm

**"Tôi sửa file Word rồi upload lại, sao nó không nhận?"**
Upload lại đi qua đường re-upload: hệ thống diff bản mới với bản render hiện tại rồi đề xuất thành CR. Nó không thay thẳng tài liệu, vì làm thế sẽ mất mọi thứ Spine biết về nội dung.

**"Accept step rồi mà cờ đỏ vẫn còn?"**
Accept chỉ đánh dấu bước xong, không đổi dữ liệu, nên không đổi cờ. Cờ được tính lại ở **cuối lượt chạy**, trước lúc bấm Accept. Còn treo nghĩa là lượt chạy đó không ghi được dữ liệu vào mục mà cờ soi — cổng chốt sẽ nói ra điều này.

**"Cờ bảo chạy step X, chạy mãi không hết?"**
Xem `remediation_step` của cờ có phải step **xử lý được** nó không. Ví dụ `unconfirmed_assumption` chỉ đóng được ở **S‑9.2 Assumption Sweep**, chạy lại step đã sinh ra giả định thì vô ích. Nếu mục thật sự không áp dụng cho tài liệu này thì **waive**.

**"Bản tải về thiếu hình."**
Đúng — hiện tại ảnh trong file gốc chỉ render thành placeholder, chỉ diagram do hệ thống vẽ mới có hình. Đo trên một SRS thật: mất 35/39 ảnh. Đây là nợ **T3**, sẽ xử ở V5.

**"Số mục trong bản render khác file gốc."**
Tiêu đề và thứ tự giữ đúng, nhưng số được đánh lại theo cấp. File gốc có mục cấp 1 nằm ngoài chương chính (kiểu `I. Record of Changes` + `II. SRS`) thì mọi thứ bị đẩy sâu thêm một cấp (`3.1.2` thành `1.3.1.2`). Nợ **T14**.

## 8. Đọc tiếp

| Cần gì | Đọc ở đâu |
|---|---|
| Kế hoạch xây dựng, quyết định D1–D6, trạng thái từng phase | `plan-mode1-v2-workspace.md` |
| Hợp đồng API đầy đủ (endpoint, mã lỗi, sự kiện SSE) | `flintflow_be/docs/api/pipeline-contract.md` |
| So bản render với file gốc, số đo thật | `reports/mode1-v2-t1-render-vs-original.md` |
| Cấu trúc Spine, bảng section ↔ step | `flintflow_be/src/modules/spine/section-registry.ts` |
| Luật cờ | `flintflow_be/src/modules/spine/deterministic-check.ts` |
| Hồ sơ luật riêng của mode 1 | `flintflow_be/src/modules/import/mode1-rule-profile.ts` |
