# Luồng hoạt động — Mode 1: Upload SRS có sẵn rồi sửa (v3, bám BPMN)

> **Mô tả hệ thống đang chạy**, không phải kế hoạch. Kế hoạch: `mode1-v3/` (README là trạng thái). Bản v2 cũ: `mode1-old/flow-mode1-upload-srs.md`.
> Nguồn luồng: `doc/flintflow-business-flow (1).bpmn` — **Flow 1** (import), **Flow 3** (change request), **Flow 6** (release), Flow 4/5 (credit, lỗi AI) đi kèm mọi lượt AI. Người dùng chốt 2026-09-22: bám BPMN 100 %.
> Cập nhật 2026-09-22, khớp code BE PR #72–#75 + FE #55–#56 (nhánh `feat/mode1-v3-*`, `feat/FLF-187-*`). Hợp đồng API: `flintflow_be/docs/api/import-change-contract.md` §4.8–4.10.

## 0. Một câu tóm tắt

Người dùng đưa vào một SRS `.docx` đã viết sẵn. Hệ thống đọc file thành dữ liệu có cấu trúc (**Spine**) và in lại tài liệu từ Spine theo đúng thứ tự, tiêu đề mục của file gốc. **Import xong (baseline v0 = `0.0`) thì mọi thay đổi đều đi qua change request (CR)** — không còn chạy step, ký v1, waive cờ hay áp thẳng lệnh sửa.

```
upload ─► import (1.1–1.10) ─► check + gap report (1.11–1.13) ─┬─► dừng: giao gap report
                                                                └─► CR (3.1–3.14) ─► 0.1, 0.2… ─► release 1.0 (6.1–6.3)
                                   file 1.0 khách sửa, upload lại ─► diff (1.4) ─► CR nguồn re-upload ─┘
```

## 1. Sơ đồ theo nút BPMN

```
1.1 Upload ─► 1.2 Preflight ─► File accepted? ─ Không ─► 1.1
                              └ Có ─► Has version stamp? ─ Có (re-upload) ─► 1.4 Diff theo block ─► 3.1 (nguồn re-upload)
                                                        └ Không ─► 1.3 Xác nhận bản mới nhất
   ─► 1.5 Tách + neo block ─► 1.6 Khớp profile ─► [độ tin thấp] 1.7
   ─► (Flow 4) 1.8 AI trích field theo section (chữ: GLM; ảnh diagram: Gemini) ─► [độ tin thấp / từ ảnh] 1.9
   ─► 1.10 Baseline v0 (imported, bản 0.0)
   ─► (Flow 4) 1.11 AI semantic check (chỉ cờ vàng) ─► 1.12 Luật code (cờ đỏ/vàng) ─► 1.13 Gap report
   ─► Changes needed? ─ Không ─► giao gap report (KẾT THÚC) ;  Có ─► 3.1

3.1 Log CR (BA; nguồn + người yêu cầu bắt buộc) ─► (Flow 4) 3.2 AI làm rõ ─► Mơ hồ? ─ Có ─► 3.3 Trả lời ─► 3.2
   └ Không ─► 3.4 Tìm vị trí ─► 3.5 Khoá ─► (Flow 4) 3.6 AI đề xuất từng vị trí (edit / comment / not related)
   ─► 3.7 Kiểm bằng luật code ─► (Flow 4) 3.8 AI consistency (chỉ vàng) ─► Đạt?
        ├ Không ─► AI làm lại < 2 lần? ─ Có ─► 3.6 ;  Không ─► 3.9 Sửa trong step sở hữu HOẶC huỷ
        │                                                     ├ sửa ─► 3.7 ;  huỷ ─► 3.10 Đóng CR huỷ (mở khoá)
        └ Có ─► 3.11 Nộp change group ─► 3.12 Lead duyệt/từ chối từng group, kèm lý do
             ├ Có group được duyệt ─► 3.14 Ghi Spine + bản minor (0.x) + bản có đánh dấu (tác giả = CR id), mở khoá
             └ Tất cả bị từ chối ─► Revise? ─ Có ─► 3.5 khoá lại ─► 3.6 ;  Không ─► 3.13 Đóng (lý do, mở khoá)

6.1 Release (Lead) ─► cờ đỏ = 0? ─ Không ─► bị chặn ;  Có ─► 6.2 major kế tiếp (1.0, 2.0…), bản sạch có stamp ─► 6.3 Tải
   CR đang chạy không chặn release — vào lần sau.
Flow 4: mỗi lượt AI giữ credit trước; thiếu ⇒ báo Lead nạp (notification credit_topup_needed), bước dừng `paused: credits`;
        nạp xong ⇒ bước tự chạy tiếp.
Flow 5: AI lỗi sau khi tự thử lại ⇒ hoàn credit đã giữ, `paused: resume_later`, người dùng bấm thử lại.
```

## 2. Mỗi nút ⇒ endpoint + màn hình

Prefix `/api/v1/projects/:id`. Màn hình FE ở `flintflow_fe/app/projects/[id]/_components/mode1/`.

### Flow 1 — import

| Nút | Endpoint | Màn hình | Ghi chú |
|---|---|---|---|
| 1.1 Upload | `POST /import` (multipart) | `ImportWizard` › `UploadStep` | Project phải `mode: import`; đã có baseline ⇒ `IMPORT_INVALID_STATE` (dùng `/reupload`) |
| 1.2 Preflight | (trong `POST /import`) | `PreflightIssues` | Mã hoá / .doc / Track Changes lạ / stamp dự án khác ⇒ 422 kèm vị trí |
| 1.3 Xác nhận bản mới nhất | `POST /import/confirm-latest` | `ImportWizard` | |
| 1.4 Diff re-upload | `POST /reupload` | `ReuploadDiffView` › "Tạo CR" | Chỉ file có stamp của chính dự án (`IMPORT_REUPLOAD_NO_STAMP` nếu không); không ghi Spine |
| 1.5–1.6 Tách block + khớp profile | (trong `confirm-latest`) | — | Block giữ `image_ref` của ảnh |
| 1.7 Map độ tin thấp | `PATCH /import/mapping` | `MappingReviewTable` | |
| 1.8 Trích field | `POST /import/extract` (chạy nền), `GET /import`, `POST /import/resume` | `ExtractProgress`, `PausedBanner` | Bảng khớp cột ⇒ tất định; ảnh ở mục diagram ⇒ Gemini (`import_extract_diagram`); chữ ⇒ GLM |
| 1.9 Xác nhận field | `PATCH /import/fields` | `FieldsReview` | Độ tin < 0.7 hoặc đọc từ ảnh (nhãn "từ ảnh") — **chỗ sửa duy nhất ngoài CR** |
| 1.10 Baseline v0 | `POST /import/finalize` | — | Một txn `by: import`; bản `0.0` = render từ Spine (+ file gốc tải được `variant=original`); ảnh diagram đọc được ⇒ PlantUML thay, ảnh khác giữ nguyên |
| 1.11–1.12 Check | (trong finalize; `POST /import/resume` nếu dừng) | — | Cờ AI `import_semantic`, cờ ảnh `import_image_unread` (vàng), luật S-9 |
| 1.13 Gap report | `GET /gap-report`, `GET /step-plan` (chỉ đọc) | `GapReportView`, `Mode1FlagsPanel` | Mục FPT trống ⇒ cờ đỏ `section_empty` ⇒ nút "Tạo CR" (nguồn `gap_report`) |

### Flow 3 — change request

| Nút | Endpoint | Màn hình | Ghi chú |
|---|---|---|---|
| 3.1 Log CR | `POST /change-requests` | `ChangeRequestForm`, `CrPrefillCard`, `CreateCrPreviewModal` | Nguồn: `stakeholder_email`, `meeting_minutes`, `gap_report`, `reupload`, `viewer_comment`, `verbal` + `requester` bắt buộc; `preview_id` đính kèm bản xem trước (seed) |
| 3.2 Làm rõ | `POST …/clarify` | `ClarifyPanel` | |
| 3.3 Trả lời | `POST …/answers` | `ClarifyPanel` | Tối đa 3 vòng hỏi |
| 3.4 Tìm vị trí | `POST …/impact` | `ImpactList` | Đồ thị Spine + mention + từ khoá + đích của bản xem trước (`found_by: preview`); mục FPT trống ⇒ vị trí `arr[]` |
| 3.5 Khoá | (trong impact / revise) | — | Khoá theo phần tử Spine; CR khác chạm ⇒ 409 `PATH_LOCKED` |
| 3.6 Đề xuất | `POST …/propose`, `PATCH …/locations/:locId` (sửa tay) | `ProposalCard` | Skill của step sở hữu phần tử |
| 3.7–3.8 Kiểm | `POST …/verify` | `VerifyResult` | Trượt ⇒ AI làm lại (≤ 2) ⇒ `manual_fix` |
| 3.9 Sửa trong step sở hữu / huỷ | `POST …/locations/:locId/owner-step-draft`, `POST …/cancel` | `ProposalCard` ("Sửa trong step …") | Chỉ ghi đề xuất, quay lại 3.7 |
| 3.10 Đóng CR huỷ | `POST …/cancel` | `ReasonDialog` | Mở hết khoá |
| 3.11 Nộp | `POST …/submit` | `CrWorkspace` | Gom group theo section |
| 3.12 Duyệt | `POST …/groups/:gid/decision` | `ChangeGroupPanel` | Lý do bắt buộc cả khi duyệt |
| Revise | `POST …/revise` | `ChangeGroupPanel` | Mọi group bị từ chối ⇒ khoá lại (3.5) ⇒ 3.6 |
| 3.13 Đóng từ chối | `POST …/close` | `ReasonDialog` | |
| 3.14 Ghi | (khi quyết group cuối) | `CrTimeline`, `VersionsPanel` | Spine `by = CR id`, bản minor + `variant=tracked` (`w:ins`/`w:del` tác giả CR id), diagram vẽ lại |
| Hết credit / lỗi AI | `POST …/resume` | `PausedBanner` | Flow 4/5 |

### Flow 6 — release + tải

| Nút | Endpoint | Màn hình | Ghi chú |
|---|---|---|---|
| 6.1–6.2 Release | `POST /release` | `Mode1WorkspaceTools` | Còn cờ đỏ ⇒ bị chặn; bản sạch, stamp `release` |
| 6.3 Tải | `GET /versions`, `GET /versions/:v/download?variant=auto\|tracked\|original`, `GET /versions/compare` | `VersionsPanel`, `VersionCompare` | Tên file `<tên>_<projectId>_v<ver>[_tracked][_DRAFT].docx` |

### Lối vào 3.1 (chỉ mở form điền sẵn — không tự tạo CR)

| Lối vào | Cách | Nguồn điền sẵn |
|---|---|---|
| Panel "Sửa tài liệu có xem trước" | `POST /changes/preview` (chỉ đọc, `meta.requires_cr`) ⇒ "Tạo CR" | `verbal` + `preview_id` |
| Chat ra lệnh sửa | `POST /changes` ⇒ 409 `CHANGE_REQUIRES_CR` + `meta.prefill` ⇒ thẻ "Tạo CR" | `verbal` |
| Gap report / cờ đỏ | "Tạo CR" ở `GapReportView` / `Mode1FlagsPanel` | `gap_report` + mục |
| Upload lại | `ReuploadDiffView` ⇒ "Tạo CR" | `reupload` + id diff |

## 3. Ai làm gì sau import

| Hành động | Mode 1 v3 |
|---|---|
| Xem tài liệu, tải bản nháp (watermark) / bản gốc / bản có đánh dấu | Có |
| Xem trước lệnh sửa (panel) | Có — chỉ để soạn 3.1 |
| Áp lệnh sửa / undo / hoà giải | **Không** (`CHANGE_REQUIRES_CR`) |
| Chạy step / gate / bật-tắt step | **Không** (`MODE1_NO_STEPS`) |
| Waive cờ | **Không** (`MODE1_NO_WAIVE`) — cờ đỏ chỉ đóng bằng CR |
| Ký baseline v1 | **Không** (`MODE1_NO_SIGNOFF`) |
| Tạo CR từ gap report / re-upload / chat / panel | Có — form 3.1 điền sẵn, BA bấm tạo |
| Release | Khi cờ đỏ = 0 |

**Quyền theo lane (BA / Lead / Viewer — Flow 7–10) chưa có**: BE chưa có tổ chức/role. Hiện người tạo project làm mọi vai (G1). Đây là việc chưa làm (phase 4 mục 4.4), không phải lệch có chủ đích.

## 4. Version

| Mốc | Version | Sinh ra bởi | File |
|---|---|---|---|
| Import xong | `0.0` | 1.10 | bản render + file gốc (`original`) |
| Mỗi CR ghi | `0.1`, `0.2`… | 3.14 | bản render + bản có đánh dấu (`tracked`) |
| Release | `1.0`, `2.0`… | 6.2 | bản sạch, stamp `release` |

Stamp (`docProps/custom.xml`: `flintflow_project_id`, `flintflow_version`, `flintflow_source`) cho phép 1.2 nhận ra file của chính dự án khi upload lại.

## 5. Giới hạn đang biết

- Đọc ảnh chỉ cho ảnh ở mục diagram (1, 2.1, 2.2.1, 2.2.2, 3.1.1, 3.1.5), PNG/JPEG; EMF/WMF giữ ảnh gốc + cờ vàng. Key Gemini free tier hết quota ngày nhanh ⇒ môi trường thật cần key trả phí (`flintflow_be/docs/measurements.md`).
- Định dạng Word gốc (style, header/footer) không giữ — tài liệu in lại từ Spine (D1); file gốc luôn tải được.
- Project mode 1 cũ (có baseline v1, CR nguồn `chat`) vẫn đọc được — không migration (`flintflow_be/docs/ops.md`).

## 6. Kiểm chứng

- BE: `test/integration/mode1/journey.int.test.ts` đi một mạch 1.1 → 1.13 ⇒ CR `gap_report` (0.1 + bản đánh dấu) ⇒ CR từ bản xem trước (0.2) ⇒ release 1.0 ⇒ upload lại ⇒ CR `reupload`. Mỗi cạnh Flow 3 có test riêng (bảng ở `mode1-v3/phase-6-test-tai-lieu.md`).
- FE e2e: `flintflow_fe/e2e/mode1.spec.ts` (`E2E_MODE1=1 E2E_MODE1_DOCX=<docx không stamp>`), chạy thật PASS 2026-09-22.
