# BÁO CÁO P4 (Mode 1: upload SRS có sẵn rồi sửa) — Unit test · Ngày: 2026-09-19

> Plan: `plan-mode1-import-edit-srs.md` §8. Ticket FLF-172. Chỉ viết test, **không sửa code sản phẩm**; lỗi thật tìm thấy được ghi bằng `it.fails` (test mô tả hành vi đúng, sẽ đỏ khi lỗi được sửa ⇒ đổi thành `it`).

## 1. Trạng thái
- **DoD 3/4** — còn "CI xanh trên PR tổng" (chưa push).
- Nhánh (chưa push):

| Repo | Nhánh | Tách từ | Commit |
|---|---|---|---|
| BE | `feat/FLF-172-mode1-p4-tests` | `feat/FLF-172-mode1-e2e-fixes` | `34ce12e` docx-ooxml · `608a4d8` import · `9813c27` change request · `18819c9` release/metered/guard |
| FE | `feat/FLF-172-mode1-p4-tests` | `feat/FLF-172-mode1-p3-ui` | `536577a` |

## 2. Đã làm

### 2.1 BE
Lệch plan về chỗ đặt: project `unit` của vitest **không có Mongo** (test khác dựa vào `readyState !== 1`), nên mỗi tên file plan tách thành phần hàm thuần colocate `src/modules/**/<tên>.test.ts` và phần cần DB ở `test/integration/mode1/<tên>.int.test.ts` (Mongo in-memory + provider AI giả). Fixture .docx sinh bằng `make-docx.ts` / `srs-fixture.ts`, không cần `test/fixtures/docx/`.

| Plan | Unit (`src/`) | Integration (`test/integration/mode1/`) |
|---|---|---|
| 8.1 `package, blocks, track-changes, comments, properties, accept-all, watermark` | có sẵn, bổ sung +34 ca | — |
| 8.2 `preflight` | bổ sung +5 (zip bomb, TC trong ô bảng, `CR-003` trộn tác giả lạ…) | `preflight.int` (3 nhánh stamp) |
| `import.state` | có sẵn, 100% cạnh | — |
| `parse` | bổ sung (số block theo loại, id ổn định) — 1 `it.fails` | — |
| `mentions` | mới, 13 — 1 `it.fails` | — |
| `profile-match` | bổ sung +7 (VI, sai chính tả, khác số mục, ngưỡng 0.8) | — |
| `extract.service` | mới, 15 | `extract.service.int` 10 (bảng không gọi AI, retry ≤ 2, < 0.7 ⇒ review, paused + cursor, resume bỏ `done`, lỗi AI hoàn hold) |
| `finalize` | mới, 5 | `finalize.int` 10 (1 txn `by: import`, FieldAnchor, 0.0, baseline `imported`, lỗi giữa chừng không để file mồ côi) |
| `check.service` | mới, 9 | `check.service.int` 5 |
| `gap-report` | mới, 4 (docx đọc lại được) | `gap-report.int` 6 |
| `reupload` | mới, 8 | `reupload.int` 6 |
| 8.3 `change-request.state` | có sẵn, 100% cạnh (gồm `revise`, `manual_fix`, huỷ khi paused) | — |
| `change-request.service` | — | 11 (cr_id không trùng khi tạo đồng thời 10 CR) |
| `clarify` | mới, 6 | 10 |
| `impact` | mới, 10 | 5 |
| `lock` | — | 11 (hai CR giành cùng lúc: mỗi CR giữ đủ hoặc không giữ gì) |
| `propose` | — | 11 |
| `verify` | mới, 11 | 9 |
| `decision` | — | 8 |
| `write` | — | 10 — 1 `it.fails` |
| `versioning` | bổ sung mốc biên (`0.99→0.100`, `99.99→100.0`) | — |
| `release` | `doc-file.store.test` 7 | `release.int` 10 |
| `metered-ai` | mới, 13 | `metered-ai.int` 6 |
| `chat-guard` | `mode1-guard.test` 7 | `chat-guard.int` 8 (mode 1 ⇒ 409 + prefill; mode 2 không đổi) |

Helper mới: `test/helpers/mode1-{import,cr,release}-p4.ts` (không sửa helper cũ).

### 2.2 FE
16 file mới trong `app/projects/[id]/_components/mode1/` (116 test): `UploadStep, PreflightIssues, MappingReviewTable, FieldsReview, ExtractProgress, PausedBanner, GapReport, DocBlockView, VersionCompare, ReuploadDiffView, ChangeRequestForm, ImpactList, ProposalCard, ChangeGroupPanel, VerifyResult, VersionsPanel`. Bổ sung: `CreateProjectDialog.test.tsx` (2 → 7), `ChatPane.test.tsx` (3 → 5, thẻ tạo CR khi 409 qua `useWorkspace` thật), `lib/api/endpoints.test.ts` (58 → 95, mọi endpoint mode 1). Test gộp của P3 giữ nguyên.

## 3. Kiểm chứng
| Lệnh | Kết quả |
|---|---|
| BE `npm run typecheck`, `typecheck:test` | xanh |
| BE unit + integration (`vitest --project unit --project integration --coverage`) | 142 file, **1376 xanh**, 3 expected fail (`it.fails` §4), 14 skip có sẵn trước P4 (trước P4: 1072) |
| BE coverage dòng | `docx-ooxml` **98,4%**, `import` **97,7%**, `change-request` **99,4%**, `doc-version` **100%** (trước P4: 98 / 97 / 92,7 / 89,7) |
| FE `npm test` | 55 file, **426 xanh** (trước P4: 39 / 266) |
| FE `typecheck` | xanh |
| FE `lint` | 0 lỗi, 10 cảnh báo — đều có sẵn |

FE chưa đo coverage: máy không có `@vitest/coverage-v8` ở FE (DoD chỉ yêu cầu coverage cho 4 module BE).

## 4. Lỗi sản phẩm tìm thấy (chưa sửa — cần quyết định)
| # | Mức | Chỗ | Lỗi | Test |
|---|---|---|---|---|
| 1 | **Trung bình** | `change-request/write.service.ts` ~545–582 | C-7 không nguyên tử: `applyTransaction` + `recompute` chạy ngoài transaction; lỗi sau đó (vd `DocVersion.create`) ⇒ CR vẫn `in_review`, không có 0.1, **nhưng Spine đã đổi** (+1 version, có Change `by: CR-001`). Huỷ/đóng CR sau đó ⇒ Spine lệch tài liệu mãi | `write.int.test.ts` `it.fails` |
| 2 | **Trung bình** | `import/parse.service.ts` `assignBlockIds` | Block **bảng** không có bookmark neo ⇒ parse lại bản đã lưu nhận id mới (0.0 `B0005` → 0.1 `B0049`). DocBlock bảng ở version mới mất `section_id`; FieldAnchor của thực thể trích từ bảng (actor/UC/BR) trỏ vào id không còn | `parse.test.ts` `it.fails` |
| 3 | Thấp | `import/mentions.ts:23` | `FR-3.2.1` bị bắt thành `FR-3.2`, trong khi I-4 đặt id function theo số mục nhiều cấp ⇒ nguồn `mention` của C-3 trượt | `mentions.test.ts` `it.fails` |
| 4 | Thấp | `import/metered-ai.ts:39–50` | `finalizeCall` lỗi **sau khi** ví đã bị trừ ⇒ nhánh catch đánh usage `refunded`, bỏ kết quả AI, ví không hoàn; chạy lại bị trừ lần hai | ca unit ghi hành vi hiện tại |
| 5 | Thấp | `change-request/verify.service.ts:336` | Chuyển `verifying` trước khi kiểm; old text lệch ⇒ 409 và CR kẹt ở `verifying` (propose/PATCH không nhận trạng thái này, verify/resume lại 409) — chỉ còn huỷ. Khó xảy ra vì block đang bị chính CR khoá | ghi ở test 409, không khoá cứng |
| 6 | Thấp | `import/extract.service.ts` `runExtraction` nhánh `!result.ok` | Lưu `doc.paused` trước `draft.status = failed` ⇒ poll có thể thấy paused mà section còn `pending`; làm `mode1-extract.int.test.ts:113` thỉnh thoảng đỏ khi máy tải nặng | — |

Ghi nhận khác: `mode1-guard.ts` `assertChangesAllowed` không nơi nào gọi (code chết); mock FE `mocks/mode1/handlers.ts:357` dùng `\b` sau chữ có dấu nên "Xoá…"/"Bỏ…" không bị mock chặn 409; FE `UploadStep` không lọc đuôi file khi kéo thả (chủ ý — BE kiểm magic bytes).

## 5. Lệch so với plan
- Test cần DB ở `test/integration/mode1/` thay vì `npm run test:unit` (lý do §2.1). DoD mục 1 hiểu là `test:unit` + `test:integration`.
- `finalize` "steps sở hữu = accepted": code (theo P0 §3.1) để `steps[]` rỗng và loại luật dựa trên step bằng `MODE1_RULE_PROFILE` — test kiểm mục đích (không cờ step), không kiểm câu chữ.
- "Old text lệch ⇒ đỏ": code chặn bằng 409 `CR_OLD_TEXT_MISMATCH` thay vì trả vi phạm đỏ — test theo code.
- Chưa test: lô C-4 > 12 vị trí (fixture không đủ), `resume_later` riêng cho C-4/C-5 (đã phủ ở C-2 và metered-ai), nhánh `new_red_flag` của `checkSpineOps` (khó chạm với hồ sơ mode 1).

## 6. DoD P4
- [x] Mọi file ở 8.1–8.4 có mặt và xanh (BE unit + integration, FE `npm test`).
- [x] Coverage dòng ≥ 80% cho `docx-ooxml`, `import`, `change-request`, `doc-version`.
- [x] State machine import + CR: 100% cạnh có test.
- [ ] CI xanh trên PR tổng; báo cáo dán vào PR — chờ push.

## 7. Bước tiếp theo
1. Người dùng quyết: sửa lỗi #1, #2 (trung bình) trong nhánh riêng (đề xuất `bugfix/FLF-<số>-…` hoặc tiếp FLF-172) — sửa xong đổi `it.fails` → `it`.
2. Push các nhánh P3 + e2e-fixes + P4 (BE, FE), mở PR xếp chồng, chờ CI.
