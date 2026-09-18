# Task 05 — Word export writer (docx) + watermark DRAFT

**Wave:** 1 · **Người phụ trách:** A · **Effort:** 5 điểm · **Trạng thái:** [ ] Chưa làm  [ ] Đang làm  [x] Xong

## Mục tiêu
Có bộ ghi `.docx` độc lập với Spine: nhận `RenderedDocument` và xuất file Word đúng khung FPT, watermark DRAFT, đánh dấu tại chỗ section stale, chèn ảnh diagram, dấu version trong file và tên file. Assemble (T15) sẽ sinh `RenderedDocument`; task này định nghĩa interface đó.

## Lệch hướng audit cần đóng
F2 (không có export Word, không có lib docx), C8 phần BE (export không bị chặn bởi chất lượng).

## File / module liên quan
### Hiện có (đọc / sửa / xoá)
- Đọc: `context/Product-Brief-to-SRS-Phases.md` §6.5 (Export), business-flow §6 (dấu version trong file và tên file).
- Sửa: `flintflow_be/package.json` thêm `docx` (^9), `image-size`.
- Sửa: `flintflow_be/src/app.ts` mount `/api/v1/export`.
### Tạo mới
- `flintflow_be/src/modules/render/rendered-document.types.ts` — `RenderedDocument {projectName, version: string, source: "draft"|"baseline", watermark?: "DRAFT", generatedAt, sections: RenderedSection[], recordOfChanges: RocRow[], flagsAppendix?: {redOpen: FlagRow[], staleCount: number, waived: FlagRow[]}}`; `RenderedSection {id, number, heading, level, status?: draft|accepted|stale|derived, awaiting_reaccept?, blocks: Block[]}`; `Block = Paragraph{runs} | Heading | BulletList | NumberedList | Table{header, rows} | Image{png: Buffer|base64, caption} | PageBreak`.
- `flintflow_be/src/modules/render/markdown-to-blocks.ts` — markdown giới hạn (heading, đoạn, `**bold**`, `*italic*`, bullet, numbered, bảng GFM, code inline) thành `Block[]`.
- `flintflow_be/src/modules/render/docx-writer.ts` — `writeDocx(doc: RenderedDocument): Promise<Buffer>`: trang bìa (tên, version, ngày), mục lục (TOC field), heading theo `level`, bảng có border, ảnh scale theo chiều rộng trang, watermark DRAFT (header text xoay 45°, màu xám nhạt, mọi section), section `stale`/`awaiting_reaccept` có shading vàng + dòng ghi chú, `recordOfChanges` thành bảng §I, `flagsAppendix` in sau §I khi `source=draft`; `core.properties` `title`, `subject=flintflow_version:<version>`, custom property `flintflow_project_id`.
- `flintflow_be/src/modules/render/export.controller.ts` + `export.route.ts` — `POST /export/word/preview` (auth; body `RenderedDocument`; trả `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, header `Content-Disposition` `<project>-<version>[-draft].docx`). Route thật `GET /projects/:id/export/word` do T15 thêm.
- `flintflow_be/src/modules/render/docx-writer.test.ts` + `fixtures/rendered-document-sample.json`.

## Các bước implement
1. Viết types và JSON mẫu tay (5 chương FPT, 1 bảng, 1 ảnh PNG base64 nhỏ, §I 3 dòng, 2 cờ đỏ).
2. `markdown-to-blocks` + test.
3. `docx-writer`: dựng theo thứ tự trên; watermark bằng `Header` + `TextRun` xoay trong `docx` (nếu lib không hỗ trợ xoay, dùng chữ mờ lặp ở header/footer và ghi rõ trong README).
4. Route preview + test đọc lại file bằng unzip kiểm tra `word/document.xml` chứa "DRAFT".
5. README ngắn trong `modules/render/`.

## Dependency
- Phụ thuộc: không.
- Chặn: T15.
- Chạy song song với: T01, T02, T03, T04, T06, T07.

## Output kỳ vọng
- `writeDocx` dùng được độc lập; file mở được bằng Word/LibreOffice.

## Tiêu chí hoàn thành (DoD)
- [x] Test sinh docx từ JSON mẫu; kiểm `document.xml` có heading 5 chương, watermark, bảng §I. (Watermark VML nằm ở `word/header1.xml`; `document.xml` có nhãn `WORKING DRAFT` ở trang bìa.)
- [x] Mở thủ công bằng LibreOffice không cảnh báo hỏng file (ghi kết quả vào PR). — Kiểm 2026-09-15 bằng **Microsoft Word 16.0 (build 16.0.20326)** thay LibreOffice (máy chưa cài). Sinh `writeDocx` từ `fixtures/rendered-document-sample.json` trên BE `develop` `17602c8`, bản `draft` và bản `baseline` (bỏ `watermark`, `flagsAppendix`). Mở qua COM `Documents.Open` với `OpenAndRepair=false`: cả 2 file mở không lỗi, không hộp thoại sửa file.
  - Draft: 4 trang, 4 bảng, 1 ảnh, 1 TOC; header có 1 WordArt "DRAFT" xoay 315° (−45°), xám nhạt, hiện trên mọi trang; bìa có "WORKING DRAFT - NOT BASELINED"; §I Record of Changes 3 dòng; "Working Draft Status" với 2 cờ đỏ và 1 cờ waived; 2.2.2 `[STALE]` và 3.1.2 `[AWAITING RE-ACCEPT]` có shading vàng; heading 5 chương đúng số.
  - Baseline: 4 trang, 2 bảng, không watermark, bìa "BASELINE", không có phụ lục cờ.
  - Property: `title` = "Lumen Học Trực Tuyến - Software Requirement Specification", `subject` = `flintflow_version:v0.3`, custom `flintflow_project_id`, `flintflow_version`, `flintflow_source`.
  - Chỉ còn lỗi trình bày nhỏ, không chặn: cột Date/Version/"A*, M, D" của bảng §I hẹp nên bị xuống dòng; heading không có khoảng cách phía trên.
- [x] Tên file và property version đúng định dạng.

## Ghi chú / rủi ro
- Chỉ Word vòng một; PDF/Handoff hoãn (Phases §9.1).
- Interface `RenderedDocument` là hợp đồng với T15/T16: đổi phải báo C và D.
