# BÁO CÁO P0 (Mode 1: upload SRS có sẵn rồi sửa): kiểm tra hiện trạng + spike OOXML · Ngày: 2026-09-18

> Plan: `plan-mode1-import-edit-srs.md` §4. P0 không viết code sản phẩm; không sửa file nào trong `flintflow_be` / `flintflow_fe`.
> Mã spike (nháp, không merge) + ảnh chứng cứ nằm ở `reports/mode1-p0/`.
> Plan ghi đường dẫn `flintflow/plans/reports/`, nhưng thư mục này không có trên máy nên báo cáo đặt ở `claude_plan/reports/`.

## 1. Trạng thái
- Trạng thái: **Xong** (DoD 5/6; 1 mục LibreOffice hoãn sang DoD P2 theo quyết định nhóm, xem mục 6)
- Nhánh: không tạo nhánh (P0 chỉ kiểm tra). BE `develop` @ `ff323bd`, FE `develop` @ `5013747`
- Kết luận: **Go** (nhóm chốt 2026-09-18, gồm G1–G9 với G3 mới dùng bookmark). Không có rủi ro OOXML nào chặn mode 1. LibreOffice **chưa kiểm vì máy hiện chỉ có Word**; không bỏ, đã chuyển thành mục DoD P2.

## 2. Đã làm
| Bước | Mô tả | Kết quả |
|---|---|---|
| 4.1 | Chạy lại toàn bộ test BE + FE trên `develop` | Xong, tất cả xanh (§6) |
| 4.1 | Đối chiếu bảng §8 `plan-overview.md` với code | Xong. Bảng đang lệch với thực tế (§8.1) |
| 4.2 | Kiểm 12 khối tái dùng | Xong (§3) |
| 4.3 bước 1 | Độ ổn định của paraId | Xong. **Kết luận khác giả định G3** |
| 4.3 bước 2–3 | Track Changes (đoạn văn, ô bảng, list item) + comment, author `CR-00x` | Xong trên Word 16. LibreOffice hoãn (máy chỉ có Word) |
| 4.3 bước 4 | Đọc/ghi stamp trên file không do FlintFlow tạo | Xong |
| 4.3 bước 5 | Accept all bằng code | Xong. Text trùng khớp 100% với Accept all của Word |
| 4.3 bước 6 | Nhận diện file mật khẩu, `.doc`, `.doc` đổi đuôi, Track Changes/comment của tác giả lạ, file không phải zip | Xong (6/6 ca đúng) |
| 4.3 bước 7 | Watermark DRAFT cho file nhiều section | Xong trên Word. G8 giữ nguyên, không phải hạ phương án |
| 4.3 bước 8 | Đo token I-4 + 1 CR bằng provider thật | Xong: 5 lượt gọi thật, có ngoại suy cho SRS đầy đủ |

## 3. Bảng 4.2: khối tái dùng (12/12 dòng)

Nguồn: hai lượt đọc code riêng, kèm chạy test liên quan. Nhóm spine + chat: 22 file, 270/270 xanh. Nhóm pipeline, render, upload, notification, credit: 10 file, 101/101 xanh.

| # | Khối | Kết luận | Chi tiết (file:dòng trên `develop`) | Dùng ở |
|---|---|---|---|---|
| 1 | Op engine, khoá lạc quan | **Dùng lại nguyên** (lớp gọi cần mở rộng) | `planTransaction(spine, txn, options)` (`spine/op-engine.ts:272`) là hàm thuần: áp op, cascade, 8 bất biến, `spineSchema`, không ghi DB. Có sẵn `previewTransaction` (`:498`) trả `violations`. `by` chỉ cần là `string` không rỗng (`op.types.ts:58`, `change.model.ts:20`), nên `"import"` và `"CR-001"` hợp lệ. Hai điểm cần mở rộng: `change.service` cứng `by: userId` (`change.service.ts:329-336`); `/changes` chặn gốc `steps\|flags\|baselines…` (`:54`). ⇒ Import và C-7 gọi thẳng `applyTransaction` | I-4, C-5, C-7 |
| 2 | Impact | **Cần mở rộng** | `impactOf(spine, paths, opts)` (`impact.service.ts:112`) trả `fields[]`, `sections[{id, relation}]`, `diagrams[]`, `referrers[]`. Chỉ theo quan hệ khoá, không bắt được văn xuôi. Chưa có lớp ánh xạ section/field → block. Cần thêm `FieldAnchor` và bảng `section_id → block_ids` ghi lúc import. Số mục feature/function do assemble tự tính (`assemble.service.ts:72-75`) nên có thể lệch với số trong doc gốc; phải khớp theo heading thật | C-3 |
| 3 | Change 3 nhánh | **Cần mở rộng** | `post_baseline` bắt buộc `reason` (`change.service.ts:464-466`). Guard `CHANGE_REQUIRES_CR` nên đặt **ở service**, đầu `preview` (`:367`) và `apply` (`:438`), vì chat gọi thẳng service (`project/chat-session.service.ts:80-102`). **`undo` phải guard riêng**: `findUndoTarget` (`undo.service.ts:85`) không lọc theo `by`, nên sẽ revert lô `import`/`CR-001` trên Spine trong khi docx không đổi theo. `Project` chưa có trường `mode` (`project.model.ts:5-13`) | G9, C-7 |
| 4 | Flags / check | **Cần mở rộng** (thêm `excludeRules`/`mode` vào `runDeterministicCheck` `:454` và `flagsService.recompute` `flags.service.ts:156`) | 16 luật. Danh sách luật cần loại trừ hoặc chỉnh cho mode 1 ở §3.1 | 1.12, C-5, 6.1 |
| 5 | Section registry | **Cần mở rộng** | `SectionDef {id, title_en, required, derived, level, order, parent?}` (`section-registry.ts:18-29`). Có 20 mục cố định; số mục chỉ nằm trong id `fixed:<số>`. Chỉ có tiêu đề tiếng Anh, không có tiếng Việt hay alias. Heading nhóm (`2`, `3.1`, …) nằm ở `GROUP_HEADINGS` (`assemble.service.ts:142-150`) và chưa export. I-3 cần thêm alias VN/EN, export heading nhóm, và khớp mờ theo số + tên | I-3 |
| 6 | Baseline | **Cần mở rộng** | Snapshot dùng được (`baseline.service.ts:115-122`). `version` là string tự do nên `0.0` / `1.0` hợp lệ. **Không gọi `signOff` được cho v0** vì 3 lý do: (i) `array_empty` không waive được, sẽ chặn cứng Spine import thưa với lỗi 422 `BASELINE_BLOCKED` (`:107`); (ii) hàm tự ép `S-9.5` accepted (`:135-147`); (iii) đánh số `v1.N[-conditional]` (`:57`). ⇒ Tách `snapshotBaseline(projectId, userId, version, opts)` để mode 1 gọi; `nextBaselineId` dùng lại. Chú ý bản nháp render mode 2 là `v0.${spine_version}` (`assemble.service.ts:601`), dễ nhầm với `0.x` của mode 1 | 1.10, 6.2 |
| 7 | Credit / meter | **Dùng lại nguyên** | Có `reserveCall(projectId, userId, stepId, callKind)` (`meter.service.ts:85`), `finalizeCall` (`:105`), `releaseCall` (`:124`). `step_id` là String tự do (`usage.model.ts:12`), nên `I-4:3.1` và `C-2:CR-001` hợp lệ; gọi ngoài runner được. Credit ở ví do `executeAiAction` tự reserve/deduct/release. Giá **theo lượt gọi, không theo token**; action chưa khai báo giá thì mặc định 2 (`credit-reservation.service.ts:60`). Trần 8 lượt / 3 regenerate chỉ runner áp, nên mode 1 phải tự gọi `countCalls` | Flow 4 |
| 8 | Resume / LLM failure | Retry: **dùng lại nguyên**. Resume: **không dùng** | `executeWithInRequestRetry(fn, 2, [1000, 3000])` (`shared/ai/retry.service.ts:41-66`): retry 429, ≥500, timeout, `PARSE_FAILED`, `SCHEMA_MISMATCH`; không retry 402/403 hay thiếu credit. Chỉ `executeAiAction` có retry; **`executeAiActionStream` không có**. `resumeProject` (`resume.service.ts:28`) dựa trên `steps[]` của Spine, nên mode 1 phải resume theo trạng thái Import/CR (đúng như plan §5.2/5.4) | Flow 5, UC-61, UC-75 |
| 9 | Consistency pass | **Không dùng** cho 3.8 | `runConsistencyPass(spine, sections)` (`render/consistency-pass.ts:111`) **không gọi AI**: nhánh LLM là stub trả `[]` (`:106-108`). Phần tất định gồm dead-ref (quét toàn Spine), trùng số mục, thuật ngữ chưa có trong glossary. ⇒ `CR_CONSISTENCY` phải viết mới. `ActionType.CONSISTENCY_PASS` có sẵn nhưng không nơi nào gọi | 3.8 |
| 10 | Upload | **Cần mở rộng**; mode 1 dùng service riêng | File gốc lưu trên **Cloudinary** (`shared/utils/cloudinary.ts:21-41`). Multer để 10MB trong bộ nhớ; chỉ cần mime **hoặc** đuôi khớp, không kiểm magic bytes. Luồng hiện tại **tự gọi `SUMMARIZE_DOCUMENT` và trừ 2 credit** (`project-document.service.ts:148-177`), nên mode 1 không được đi qua. Store GridFS (`diagram/diagram-file.store.ts`) gắn cứng với diagram (bucket `diagram-files`, định dạng svg/png). ⇒ Tổng quát thành `createGridFsStore(bucket)` với bucket `source-docs`. mammoth chỉ lấy text thô, không đủ để tách block | 1.1 |
| 11 | Stamp | Ghi: **dùng lại nguyên**. Đọc: **viết mới** | `docx-writer.ts:96-100` ghi `flintflow_project_id`, `flintflow_version`, `flintflow_source` vào `docProps/custom.xml`; ngoài ra `subject = flintflow_version:<v>`. Chưa có code production nào đọc lại. Spike đã có `readStamp`/`writeStamp` bằng jszip + xmldom (§4.4) | I-1, 6.2 |
| 12 | Notification | **Dùng lại nguyên** | `notify(userId, {type, title, body, link?, meta?})` (`notification.service.ts:24`). `type` là String, không có enum trong DB. Thêm literal `change_request_decided` vào union `NotificationType` (`notification.model.ts:7-14`) để có gợi ý kiểu | 3.12 |

Phụ: `jszip` 3.10.1 (kéo vào qua `docx`, `mammoth`) và `@xmldom/xmldom` 0.8.13 (qua `mammoth`) đã có trong `node_modules`, cả hai kèm sẵn `.d.ts`. P1 cần khai báo trực tiếp trong `dependencies` với đúng phiên bản này.

### 3.1 Luật cờ cho `mode1-rule-profile.ts` (16 luật, `deterministic-check.ts:29-46`)
| Luật | Mức | Bắn sai trên Spine import? | Đề xuất |
|---|---|---|---|
| `array_empty` | đỏ, **không waive** | **Có, nghiêm trọng**: SRS thật hay thiếu roles/entities/common_req, sẽ chặn baseline v0 và release | **Loại trừ** (đưa vào gap report dạng "mục thiếu") |
| `section_empty` | đỏ | Có (doc thiếu mục, hoặc AI trích thiếu) | **Chỉnh**: chỉ đỏ khi doc cũng không có heading tương ứng; còn lại vàng |
| `nfr_missing_number` | đỏ | Có (SRS thật hay không có số đo) | **Hạ xuống vàng** |
| `section_stale_at_baseline` | đỏ, chỉ lúc ký | Không bắn (không có step accepted), nhưng vô nghĩa | **Loại trừ** |
| `section_awaiting_reaccept` | đỏ, chỉ lúc ký | Chỉ khi có reconcile; mode 1 không dùng | **Loại trừ** |
| `screen_pending_at_baseline` | đỏ, chỉ lúc ký | Có, nếu extractor để `detail_status: pending` | **Loại trừ**, hoặc import đặt `signed_off` |
| `non_english_content` | vàng | **Có, hàng loạt** với SRS tiếng Việt | **Loại trừ** |
| `usecase_no_function` | vàng | Có (doc hiếm liên kết UC với function) | Tắt hoặc gộp thành 1 dòng gap report |
| `dead_reference`, `render_error`, `diagram_stale`, `unconfirmed_assumption` | đỏ | Không | Giữ |
| `orphan_actor`, `screen_no_function`, `empty_feature`, `role_no_actor` | vàng | Có (trích một phần) nhưng mang nghĩa đúng | Giữ, gom nhóm trong gap report |

Thêm: `section-status`, `readiness.accepted_pct`, `progressByStep` (`section-status.ts:96-131`) đều vô nghĩa ở mode 1 vì không có step. FE nên ẩn hoặc thay bằng trạng thái import/CR.

## 4. Kết quả spike OOXML (4.3)

Công cụ: jszip + xmldom (lấy từ `node_modules` của BE), Word 16 điều khiển qua COM (`spike/word.ps1`), xuất PDF bằng Word rồi render ảnh bằng `pdf-parse`.

File đầu vào:
- `doc/sample-baseline.docx` và `doc/sample-draft.docx`: do `docx` lib sinh, chưa từng qua Word.
- `real-3.2.docx`: bản `.docx` do Word soạn của nhóm, gồm mục 3.2–3.11 (danh sách UC).

**Hạn chế:** không tìm thấy trên máy một SRS thật **đầy đủ** dạng `.docx`. SRS đầy đủ của nhóm chỉ có bản `.md` (`doc/Report3_…docx.md`), nên chỉ dùng được để ngoại suy token.

### 4.1 Bước 1: paraId (G3)
| File | Có paraId gốc? | Mở rồi lưu bằng Word (lần 2) | Sửa trong Word (sửa chữ, chèn đoạn, xoá đoạn, sửa ô) |
|---|---|---|---|
| sample-baseline (docx lib) | **Không (0/71)** | Word tự sinh paraId; lưu lại giữ 81/81 | 81/81 giữ; đoạn bị sửa chữ **vẫn giữ paraId** |
| sample-draft (docx lib) | **Không (0/97)** | 110/110 | 110/110 |
| real-3.2 (Word) | Có (87/87) | 87/87 | 86/87 (đoạn bị xoá) |

Thí nghiệm thêm:
- FlintFlow **tự gán** paraId lên file do docx lib sinh, rồi mở và lưu bằng Word: giữ **0/71**, Word sinh lại toàn bộ.
- Gán đè paraId lên file vốn do Word lưu: giữ 81/81.
- **Bookmark ẩn `_ff_B0001…`**: giữ **100%** qua mở/lưu Word trên cả 3 nguồn file. Bookmark chỉ mất khi đoạn chứa nó bị xoá, đúng hành vi mong muốn. Khoảng 15% (12/81) bị Word dời ra ngoài `<w:p>` (đoạn rỗng, ô bảng), nên bộ giải neo phải gắn bookmark với đoạn kế tiếp.
- ⇒ **G3 đổi**: neo chính là bookmark ẩn `_ff_<blockId>`, ghi vào bản lưu lúc import (bản lưu vốn đã được ghi stamp). Neo phụ: `w14:paraId` (nếu có), `text_hash`, `heading_path`. Chỉ dựa paraId thì hỏng với mọi file không do Word lưu lần cuối, **kể cả file do chính FlintFlow mode 2 xuất ra**.

### 4.2 Hai phát hiện ảnh hưởng I-2 / I-3 (chưa có trong plan)
1. **styleId của heading phụ thuộc ngôn ngữ Word.** Word tiếng Việt lưu lại đổi `Heading1` → `u1`, `Title` → `Tiu`, `TOC1` → `Mucluc1`. Vì vậy phải nhận heading qua `w:name` (`heading 1`) và `outlineLvl` trong `styles.xml` (đi theo `basedOn`), không so styleId. Đoạn mục lục (TOC) phải loại khỏi danh sách block vì trùng text với heading.
2. **SRS thật của nhóm không dùng style heading**: 87/87 đoạn đều không có `pStyle`; heading chỉ là đoạn thường dạng `3.2.1  Register account`. ⇒ I-3 cần nhánh dự phòng: nhận heading theo mẫu số mục `^\d+(\.\d+)*\s` + độ thụt lề. Nhánh này để độ tin thấp để rơi vào bước xác nhận mapping (1.7).

### 4.3 Bước 2–3: Track Changes + comment (Word 16 ✔, LibreOffice hoãn)
- `applyEdit` diff theo từ: tách run tại hai biên, bọc phần cũ bằng `w:del` (đổi `w:t` → `w:delText`), chèn `w:ins` mang `rPr` của run gốc.
- Word đọc được **6/6 revision** author `CR-001` trên file mẫu (đoạn văn nhiều run có in nghiêng, ô bảng, list item có numbering) và **2/2** trên file thật (đoạn gồm 8 run).
- Comment: tạo mới `comments.xml` + rels + `[Content_Types].xml` trên file chưa có comment. Word hiển thị đúng author `CR-00x` và phạm vi comment.
- **Reject all** trong Word cho text trùng 100% với bản gốc; **Accept all** trong Word cho text trùng 100% với bản sạch sinh bằng code (cả 2 file).
- Ảnh: `mode1-p0/img/track-changes-word-baseline.png`, `track-changes-word-real.png`.
- Ghi chú cho P2:
  - Word hiển thị nhãn comment bằng `w:initials` + số thứ tự (`CR002` + `1` ⇒ `[CR0021]`), nên đặt initials `CR` hoặc `FF`.
  - Diff theo từ đôi khi thô hơn Word: `one lesson` → `three lessons` thành một cặp del/ins. Chấp nhận được.

### 4.4 Bước 4: stamp
- Đọc stamp: file do FlintFlow sinh đọc ra `{project_id, version: "v0.3", source: "baseline"}`; file Word thật cho `null`.
- Ghi stamp: file chưa có `custom.xml` được tạo mới kèm rels + content type. Word mở được và nhận 3 custom property.
- Lưu ý: stamp của file mode 2 dùng version `v0.3`, khác định dạng `0.x` của mode 1. Nếu người dùng upload file xuất từ project mode 2 khác thì preflight đi vào nhánh "stamp của project khác", đúng theo luồng 1.2.

### 4.5 Bước 5: accept-all bằng code
- Bỏ `w:del`/`moveFrom`, bóc `w:ins`/`moveTo`, bỏ `*PrChange` và comment có author `^CR-\d+$`.
- Bản sạch không còn `w:ins`/`w:del`/`commentReference`. Word mở không lỗi, 0 revision, 0 comment.

### 4.6 Bước 6: nhận diện ở preflight (`spike/s3.cjs`)
| File | Kết quả |
|---|---|
| `.docx` có mật khẩu | `FILE_ENCRYPTED`. Header OLE `D0CF11E0` + có stream `EncryptionInfo` |
| `.doc` | `LEGACY_DOC`. OLE + stream `WordDocument` |
| `.doc` đổi đuôi `.docx` | `LEGACY_DOC`. Nhận theo magic bytes, không theo đuôi |
| Track Changes + comment của tác giả lạ | 2 issue `FOREIGN_TRACK_CHANGE`, `FOREIGN_COMMENT`, kèm vị trí (`block_ord` + đoạn text) |
| File có Track Changes author `CR-001` | `accepted` |
| File không phải zip | `NOT_DOCX` |

Lưu ý: tên tác giả Word ghi vào revision là **tài khoản Office** đang đăng nhập (`tuananh tran`), không phải `Application.UserName`. Không ảnh hưởng luật, vì mọi author không khớp `^CR-\d+$` đều bị từ chối.

### 4.7 Bước 7: watermark DRAFT (G8 giữ nguyên)
- Cách làm: chèn shape VML textpath (giống watermark mặc định của Word) vào **mọi header part được tham chiếu**. Nếu section đầu thiếu header (`default` / `first` nếu có `titlePg` / `even` nếu bật `evenAndOddHeaders`) thì tạo header mới.
- Kiểm trên file 3 section: section 1 header riêng; section 2 có header riêng và header trang đầu riêng; section 3 kế thừa header của section 2. Thêm 1 file không có header nào. DRAFT hiện trên mọi trang (ảnh `watermark-*.png`).

### 4.8 Bước 8: token (provider thật `glm` / `zai-org/GLM-5.3-Flash` trên Modal, giống các skill hiện tại)
Prompt dùng để đo là **bản nháp** (`spike/measure.mts`); skill thật sẽ viết ở P2.

| Lượt gọi | tokens_in | tokens_out | Ước lượng in (ký tự/4) | Thời gian | JSON hợp lệ |
|---|---:|---:|---:|---:|---|
| I-4, sample 2.1 Actors (bảng 3 dòng) | 296 | 128 | 262 | 6,0 s | ✔ |
| I-4, sample 2.2.2 Use Case (2 UC) | 322 | 493 | 313 | 4,9 s | ✔ |
| I-4, real 3.2 (16 dòng UC, 461 ký tự) | 725 | **2 206** | 619 | 10,1 s | ✔ |
| C-2 clarify (CR "đăng xuất mọi thiết bị") | 375 | 220 | 260 | 4,4 s | ✔ (`ambiguous: true`, 3 câu hỏi hợp lý) |
| C-4 propose (3 vị trí) | 183 | 133 | 149 | 1,5 s | ✔ (1 edit, 2 not_related) |

**Ngoại suy cho SRS đầy đủ của nhóm** (`Report3_…docx.md`: bỏ ảnh còn 269 793 ký tự ≈ 39k từ; 31 heading cấp 1–3, 113 heading cấp 1–4; 441 dòng bảng):
- Tokens in ≈ 67k (ký tự/4) × 1,17 (hệ số thật/ước lượng đo được) + phần đầu prompt mỗi section ≈ **85–110k**.
- Tokens out: output dạng `path`/`value` từng field đang **phình 0,4–3×** so với input, nên ước ≈ 80–150k. Với `maxTokens: 4096` mỗi lượt thì cần **≥ 25–35 lượt**.
- Credit tính theo lượt: nếu `IMPORT_EXTRACT_FIELDS` giá 4 như `DRAFT` thì ≈ 100–140 credit, cộng check ngữ nghĩa, **vượt 100 credit của gói free**.
- 1 CR đơn giản (C-2 + C-4) ≈ 900 tokens in / 350 tokens out; nếu cùng mức giá 3 thì tốn 6 credit, chưa tính C-5.

**Đề xuất để 1 lần import ≤ 100 credit:**
1. Output theo **đối tượng thực thể** (`{entity: "use_cases", items: [{...}]}`), không theo từng path. Ước giảm tokens out 2–3 lần.
2. Trích **deterministic** các bảng khớp cột (G7). Report3 có 441 dòng bảng, phần lớn là bảng UC và NFR.
3. **Gộp section nhỏ** tới ngưỡng khoảng 6k tokens in mỗi lượt; tách section lớn theo ngân sách output.
4. Giá `IMPORT_EXTRACT_FIELDS` = 2 mỗi lô.

Ước sau tối ưu: khoảng 12–15 lượt × 2–4 ≈ **30–60 credit**. Đây là ước lượng; cần đo lại bằng skill thật ở DoD P2.

Chưa ghi vào `flintflow_be/docs/measurements.md` vì P0 không sửa repo BE. Người đo tiếp ở P2 sẽ chép bảng này sang, trên nhánh của task.

## 5. Hợp đồng / interface bị ảnh hưởng
- P0 không đụng hợp đồng.
- Những thứ P1 sẽ cần, đã có trong plan §5: contract-change `baselineSchema.type` và `doc_version`; `Project.mode`; `ActionType` mới.
- Bổ sung từ P0:
  - hook `excludeRules`/`mode` cho `runDeterministicCheck` + `flagsService.recompute`;
  - tách `snapshotBaseline` khỏi `signOff`;
  - `createGridFsStore(bucket)` tổng quát;
  - `DocBlock.anchor` thêm `bookmark` (theo G3 mới).

## 6. Kiểm chứng (output thật)
| Lệnh | Kết quả |
|---|---|
| BE `npm run typecheck` | exit 0 |
| BE `npm run typecheck:test` | exit 0 |
| BE `npm run test:unit` | **75 file xanh, 1 skip; 784 test xanh, 14 skip** (798) — 15,3 s |
| BE `npm run test:integration` | **12 file / 61 test xanh** — 18,9 s |
| BE `npm run build` | exit 0 |
| FE `npm ci` | **Lỗi EPERM**: `next-swc.win32-x64-msvc.node` đang bị `npm run dev` (FE dev server đang chạy trên máy) khoá. Đã khôi phục bằng `npm install` (không đổi `package-lock.json`, `git status` sạch) |
| FE `npm run typecheck` | exit 0 |
| FE `npm run lint` | exit 0 — **0 lỗi, 10 cảnh báo** (biến không dùng, `<img>`, font) |
| FE `npm test` | **33 file / 222 test xanh** |
| FE `npm run build` | exit 0 (`Compiled successfully`) |
| Spike | `spike/s1.cjs` (paraId), `s1b.cjs` (bookmark), `s2.cjs` (Track Changes, comment, stamp, accept-all), `s3.cjs` (preflight, watermark), `measure.mts` (token), `word.ps1` (Word COM). Kiểm bằng Word 16 qua COM + ảnh PDF |

DoD P0:
- [x] BE + FE: typecheck, lint, unit, integration, build xanh trên `develop`. Cảnh báo lint không phải lỗi. `npm ci` chỉ lỗi do file bị khoá cục bộ, không phải lỗi lockfile.
- [x] Bảng 4.2 đủ 12 dòng có kết luận.
- [x] Spike 4.3 bước 1–7 có kết quả; Track Changes + comment mở đúng ở Word.
- [ ] Như trên, trên LibreOffice. Hoãn vì máy hiện chỉ có Word; chuyển sang DoD P2, không bỏ.
- [x] Đã đo token I-4 và 1 CR. Import 1 SRS đầy đủ ước **vượt** ngân sách gói free (100 credit), đã ghi đề xuất ở §4.8.
- [x] Nhóm chốt Go và G1–G9 (2026-09-18), G3 theo phương án bookmark.

## 7. Bị chặn / cần quyết định
| Vấn đề | Cần ai | Đề xuất | Mức khẩn |
|---|---|---|---|
| ~~G3 đổi~~ **Đã chốt 2026-09-18**: neo chính là bookmark ẩn `_ff_<blockId>`, paraId làm neo phụ | Cả nhóm | P1: `doc-block.model` thêm `anchor.bookmark` | Xong |
| Kiểm LibreOffice (Track Changes, comment, watermark, bookmark ẩn) | Người có máy cài LibreOffice | Hoãn, không bỏ: đã thêm vào DoD P2. Có thể kiểm sớm bằng file trong `mode1-p0/spike` (chạy lại `s2.cjs`, `s3.cjs`) | Trung bình (chặn đóng P2) |
| Heading không có style (SRS thật) + styleId bản địa hoá | C (I-2/I-3) | Thêm vào phạm vi 2B: phân giải style qua `styles.xml`, nhánh dự phòng theo số mục (độ tin thấp ⇒ 1.7) | Trung bình |
| Chi phí import vượt gói free | B + người định giá | Áp 4 đề xuất §4.8; quyết giá `IMPORT_EXTRACT_FIELDS` ở P1 (5.7) | Trung bình |
| Chưa có SRS `.docx` thật đầy đủ để đo | Nhóm | Xuất Report3 ra `.docx` bằng Word (từ bản gốc của nhóm), đưa vào `doc/` để dùng cho DoD P2 | Thấp |

## 8. Phát hiện ngoài phạm vi (không sửa, chỉ ghi)
| Vị trí | Vấn đề | Thuộc | Đã ghi `docs/spec-gaps.md`? |
|---|---|---|---|
| `claude_plan/plan-overview.md` §8 | Bảng ghi T17–T24 "Chưa làm", nhưng `develop` đã có commit của các task này: `t17` (3 commit, route changes/reconcile/undo/traceability, `edf50f8`), `t18` (4), `t19` (1, `a26466c`), `t20` (BE 2, FE 1), `t21` (BE 3, FE 2; `modules/specification`, `modules/verification` đã bị xoá), `t23` (FE 2), `t24` (5), T22 (`measure-tokens.ts`, mục T22 trong `docs/measurements.md`). M4 đã chạy ngày 2026-09-16 (`docs/measurements.md` §M4) | Người giữ plan tổng | Không (báo người giữ plan cập nhật) |
| `flintflow_be/src/modules/spine/undo.service.ts:85` | `findUndoTarget` không lọc theo `by`; mode 1 cần guard | P2 2G | Không |
| `flintflow_be/src/modules/project/project-document.service.ts:148-177` | Upload tự trừ 2 credit (`SUMMARIZE_DOCUMENT`) mỗi file | Ngoài plan | Không |
| `flintflow_be/src/shared/ai/ai-action.service.ts:223` | `executeAiActionStream` không có retry | Ngoài plan | Không |
| `flintflow_be/src/modules/render/consistency-pass.ts:106-108` | Nhánh LLM là stub; `ActionType.CONSISTENCY_PASS` không được gọi | Ngoài plan | Không |
| `flintflow_be/src/shared/ai/retry.service.ts`, `diagram/diagram-file.store.ts` | Chưa có test riêng | Ngoài plan | Không |

## 9. Bước tiếp theo
- Việc còn lại của P0: không còn (LibreOffice đã chuyển sang DoD P2). Ngoài lề: người giữ plan tổng cập nhật §8 `plan-overview.md`.
- P1 bổ sung so với plan:
  - `anchor.bookmark` trong `doc-block`;
  - hook `excludeRules` cho check;
  - `snapshotBaseline` tách khỏi `signOff`;
  - giá `IMPORT_EXTRACT_FIELDS`;
  - output schema I-4 theo thực thể (§4.8).
- Dependency: thêm `jszip@3.10.1`, `@xmldom/xmldom@0.8.13` vào `dependencies` của BE (P1 DoD).
- Chạy lại spike: chép `mode1-p0/spike/*` vào một thư mục, tạo `in/` (chép `doc/sample-*.docx` + 1 SRS Word) và `out/`, rồi `node s1.cjs`, `node s2.cjs`, `node s3.cjs`. `word.ps1` cần Word cài trên Windows. `measure.mts` chạy từ `flintflow_be` bằng `npx tsx <đường dẫn>/measure.mts [--real]`.
