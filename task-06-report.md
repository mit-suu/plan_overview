# BÁO CÁO TASK T06 — Admin read-only 10.1–10.3 (users, metrics, AI cost) · Wave 1 · Người: D · Ngày: 2026-09-14

## 1. Trạng thái
- Trạng thái: Đang làm
- Nhánh: chưa tạo (thư mục làm việc chưa phải git repo) · Commit cuối: không có · PR: chưa mở
- % ước lượng hoàn thành: 90% · Effort đã dùng / ước lượng: ~5 / 6 điểm

## 2. Đã làm (theo bước trong file task)
| Bước | Mô tả ngắn | Kết quả |
|---|---|---|
| 1 | Service aggregate Mongo (users + wallet/projectsCount/lastLoginAt từ Session, metrics, ai-cost gộp AiActionLog token × CreditTransaction deduct, USD ước tính); index `AiActionLog {createdAt:1}` | Xong |
| 2 | Controller + zod validation (page/limit/role/isActive/q; from/to/groupBy, khoảng ≤ 366 ngày, ngày theo Asia/Ho_Chi_Minh) + route `authMiddleware, adminMiddleware`; mount `/api/v1/admin`; `GET /admin/feedback` stub `[]` | Xong |
| 3 | FE: `lib/api/admin.ts`, layout có sidebar admin, trang metrics (thẻ số + bảng AI 7 ngày), users (phân trang, lọc), users/[id] (chi tiết + 20 giao dịch), ai-cost (lọc ngày, groupBy, dòng tổng), feedback (stub), `/admin` → `/admin/metrics`; proxy redirect admin → `/admin/metrics` | Xong |
| 4 | Theo yêu cầu người điều phối: gỡ hẳn `/admin/prompt-templates` (trang FE, link sidebar, hàm API FE, route + controller BE; giữ `prompt-template.model.ts` vì AI service còn dùng). Đăng nhập admin chuyển tới `/admin/metrics` | Xong |
| 5 | Swagger tag `Admin` (JSDoc trong `admin.route.ts`) | Xong |

## 3. File đã thay đổi (đối chiếu bảng vùng sở hữu trong coding-rules.md mục 2)
| File | Loại (tạo/sửa/xoá) | Trong vùng sở hữu? | Ghi chú |
|---|---|---|---|
| flintflow_be/src/modules/admin/admin.validation.ts | tạo | S | |
| flintflow_be/src/modules/admin/admin.service.ts | tạo | S | Bảng giá USD tạm `PROVIDER_USD_PER_1K`, TODO(T04) |
| flintflow_be/src/modules/admin/admin.controller.ts | tạo | S | |
| flintflow_be/src/modules/admin/admin.route.ts | tạo | S | Swagger tag Admin |
| flintflow_be/src/modules/admin/admin.test.ts | tạo | S | 10 test |
| flintflow_be/src/modules/admin/ai-action-log.model.ts | sửa (+2 dòng index) | Xem mục 4 | Bước 1 file task yêu cầu; người điều phối đồng ý trong phiên |
| flintflow_be/src/app.ts | sửa (+2 dòng import/mount) | S* | |
| flintflow_fe/lib/api/admin.ts | tạo | S | |
| flintflow_fe/app/admin/layout.tsx | sửa | S | |
| flintflow_fe/app/admin/page.tsx | tạo | S | redirect `/admin/metrics` |
| flintflow_fe/app/admin/_components/AdminSidebar.tsx | tạo | S | |
| flintflow_fe/app/admin/_components/AdminPage.tsx | tạo | S | TopBar, ErrorBanner, LoadingBlock, StatCard |
| flintflow_fe/app/admin/metrics/page.tsx | tạo | S | |
| flintflow_fe/app/admin/ai-cost/page.tsx | tạo | S | |
| flintflow_fe/app/admin/users/page.tsx | tạo | S | |
| flintflow_fe/app/admin/users/[id]/page.tsx | tạo | S | |
| flintflow_fe/app/admin/feedback/page.tsx | tạo | S | |
| flintflow_fe/app/admin/prompt-templates/page.tsx | xoá | S | |
| flintflow_fe/proxy.ts | sửa (1 redirect + comment) | S* | |
| flintflow_fe/app/(auth)/login/page.tsx | sửa (2 redirect → `/admin/metrics`) | Xem mục 4 | |
| flintflow_be/src/modules/admin/prompt-template.route.ts | xoá | Xem mục 4 | |
| flintflow_be/src/modules/admin/prompt-template.controller.ts | xoá | Xem mục 4 | |
| claude_plan/task-06-admin-readonly.md, claude_plan/plan-overview.md (dòng T06) | sửa | S | |
Tổng: 20 file · Dòng: không có `git diff --stat` (chưa phải git repo)

## 4. Thay đổi ngoài vùng sở hữu (phải rỗng, hoặc có XREQ được granted)
| File | Lý do | Issue XREQ | Ai granted |
|---|---|---|---|
| flintflow_be/src/modules/admin/ai-action-log.model.ts | Thêm `aiActionLogSchema.index({ createdAt: 1 })` theo bước 1 file task (metrics/ai-cost lọc theo thời gian toàn hệ thống) | Chưa mở issue | Người điều phối xác nhận trong phiên 2026-09-14 |
| flintflow_be/src/modules/admin/prompt-template.{route,controller}.ts (xoá) + mount trong app.ts | Người điều phối yêu cầu gỡ `/admin/prompt-templates` khỏi dự án. Vùng T03: T03 bước "POST/PUT/PATCH trả 410" không còn áp dụng | Chưa mở issue — cần báo T03 | Người điều phối, trong phiên 2026-09-14 |
| flintflow_fe/app/(auth)/login/page.tsx | Redirect admin trỏ tới trang đã xoá | Chưa mở issue | Người điều phối, trong phiên 2026-09-14 |

## 5. Hợp đồng / interface bị ảnh hưởng
- Có đụng hợp đồng đóng băng không: Không
- Interface mới:
  - `GET /api/v1/admin/users?page&limit&role&isActive&q` → `AdminUser[]` (walletBalance, projectsCount, lastLoginAt), meta phân trang
  - `GET /api/v1/admin/users/:id` → user + `wallet{balance,reserved}` + `recentTransactions[20]`
  - `GET /api/v1/admin/metrics` → `usersTotal, usersNew7d, projectsTotal, projectsActive7d, baselinesTotal (0 tới T19), aiCallsToday, aiCalls7d, aiFailRate7d`
  - `GET /api/v1/admin/ai-cost?from&to&groupBy=day|actionType|provider|user` → `rows[{key,label,calls,failedCalls,promptTokens,completionTokens,credits,estimatedUsd}]`, `totals`. Credit không lưu provider nên với groupBy=provider credit nằm ở dòng `unattributed`.
  - `GET /api/v1/admin/feedback` → `[]`
  - FE `lib/api/admin.ts`: `fetchAdminUsers, fetchAdminUser, fetchAdminMetrics, fetchAiCost, fetchAdminFeedback, fetchActivePromptTemplate, fetchPromptTemplateHistory`

## 6. Kiểm chứng (dán output thật, không mô tả)
- `npm run typecheck` BE: pass (không có lỗi) · FE: pass (không có lỗi)
- `npx vitest run src/modules/admin`: `Test Files 1 passed (1) · Tests 10 passed (10) · Duration 1.50s`
- `npm test` BE toàn bộ (sau khi gỡ prompt-templates): `Test Files 9 passed (9) · Tests 78 passed (78) · Duration 1.42s`. (Lần chạy trước có 7 test billing fail do T04; lần này đã xanh.)
- `npx eslint app/admin lib/api/admin.ts proxy.ts` (FE): pass (không output)
- `npm run lint` FE toàn repo: fail `✖ 80 problems (34 errors, 46 warnings)`, đều ở file ngoài T06 (có từ trước)
- Test chạy thủ công: chưa chạy BE/FE trên trình duyệt hay DB dev
- DoD trong file task: 3/4 đã tick; chưa tick: "ai-cost khớp tổng CreditTransaction{type:deduct} trên DB dev" vì chưa chạy trên DB dev

## 7. Bị chặn / cần quyết định
| Vấn đề | Cần ai | Đề xuất của tôi | Mức khẩn |
|---|---|---|---|
| Bảng giá USD tạm `PROVIDER_USD_PER_1K` trong admin.service | C (T04) | Khi T04 thêm `plan.config.providerUsdPer1k` thì admin.service đọc từ đó (cập nhật tại M1) | Thấp |

## 8. Phát hiện ngoài phạm vi (KHÔNG sửa, chỉ ghi)
| Vị trí (file:dòng) | Vấn đề | Thuộc task nào | Đã ghi docs/spec-gaps.md? |
|---|---|---|---|
| flintflow_be/src/shared/ai/prompt-assets.ts:17 | Comment còn nhắc override qua `/admin/prompt-templates` (endpoint đã gỡ) | T03 | Không |
| claude_plan/task-03-skill-assets.md:19, :50 | Bước/DoD "PUT /admin/prompt-templates trả 410" không còn đối tượng | T03 | Không |

## 9. Bước tiếp theo
- Việc còn lại của task này: chạy BE trên DB dev, so `GET /admin/ai-cost` totals.credits với `db.credittransactions.aggregate([{$match:{type:"deduct",createdAt:{$gte:from,$lt:to}}},{$group:{_id:null,s:{$sum:"$amount"}}}])`; kiểm UI các trang admin trên trình duyệt; tạo nhánh `feat/t06-admin-readonly` và mở PR
- Ảnh hưởng tới merge point M1: Không (chỉ cần build index `createdAt` trên DB khi deploy; Mongoose autoIndex tự tạo ở dev)
- Đề xuất: không có dependency mới
