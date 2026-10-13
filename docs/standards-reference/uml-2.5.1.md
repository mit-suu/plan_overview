---
source_id: omg-uml
title: OMG Unified Modeling Language
version: 2.5.1 (2017-12)
document_id: formal/17-12-05
publisher: OMG
source_url: https://www.omg.org/spec/UML/2.5.1/PDF
checked_on: 2026-10-13
access: public_normative_pdf
rights_status: summary_only_review_before_source_ingestion
---

# UML 2.5.1 — Actor, Use Case và quan hệ

Nguồn: [trang version chính thức](https://www.omg.org/spec/UML/2.5.1/), [PDF đặc tả](https://www.omg.org/spec/UML/2.5.1/PDF). Đã đọc trực tiếp chương 18 liên quan. Mỗi ghi chú dưới đây là diễn giải, không phải trích toàn văn. Trang in = số chân trang đặc tả; PDF page = chỉ số trang từ 1 trong file 796 trang.

## UML-18-ACTOR — Vai trò Actor

**Clause:** §18.1.3.1; §18.2.1. **Evidence:** `verified_normative`. **Locator:** trang in 639–640, 647; PDF trang 681–682, 689. Nguồn: PDF OMG phía trên.

Actor mô hình hóa vai trò của thực thể tương tác với subject. Vai trò có thể do người, phần cứng ngoài hoặc hệ thống khác đảm nhiệm. Một người có thể đóng nhiều vai trò, và một vai trò có nhiều người đảm nhiệm. Actor phải có tên. Việc xác định “ngoài hệ thống” phụ thuộc subject đang xét.

## UML-18-USECASE — Hành vi và kết quả

**Clause:** §18.1.3.1; §18.2.5. **Evidence:** `verified_normative`. **Locator:** trang in 639–640, 649–650; PDF trang 681–682, 691–692.

Use Case mô tả hành vi subject cung cấp, tạo kết quả quan sát được có giá trị cho actor hoặc stakeholder. Mô tả tập trung vào hành vi ngoài, có thể gồm luồng biến thể, ngoại lệ, pre/postconditions và văn bản. Use Case phải có tên; việc áp dụng cho subject không đồng nghĩa subject sở hữu nó.

## UML-18-INCLUDE — Chèn hành vi

**Clause:** §18.1.3.3; §18.1.4; §18.2.4; §18.2.5.6. **Evidence:** `verified_normative`. **Locator:** trang in 641–642, 648–650; PDF trang 683–684, 690–692.

`include` chèn hành vi UC được gọi vào UC gọi; dùng để tái sử dụng/phân rã hành vi. Mũi tên nét đứt có đầu mở đi từ UC gọi đến UC được include, nhãn `«include»`. Không được include chính mình trực tiếp hoặc qua chu trình.

## UML-18-EXTEND — Bổ sung tại extension point

**Clause:** §18.1.3.2; §18.1.4; §18.2.2–18.2.3. **Evidence:** `verified_normative`. **Locator:** trang in 640–642, 647–648; PDF trang 682–684, 689–690.

`extend` bổ sung hành vi tại extension point của UC gốc; UC gốc có nghĩa độc lập. Mũi tên nét đứt có đầu mở đi từ UC mở rộng đến UC gốc, nhãn `«extend»`. Extension point phải thuộc UC gốc và có tên. Condition có thể vắng mặt: khi đó mở rộng không có điều kiện, nên “extend luôn tùy chọn/có điều kiện” không phải quy tắc đúng trong mọi trường hợp. Hiển thị condition/extension point trên hình là tùy chọn, khác với thông tin của mô hình.

## UML-18-NOTATION — Ký pháp và association

**Clause:** §18.1.4–18.1.5; §18.2.1.4; §18.2.5.6. **Evidence:** `verified_normative`. **Locator:** trang in 641–645, 647, 650; PDF trang 683–687, 689, 692.

Use Case thường là ellipse; có ký pháp classifier rectangle thay thế. Actor có thể dùng hình người, rectangle `«actor»` hoặc icon thích hợp. Boundary có thể biểu diễn bằng rectangle tên subject chứa các UC; hình chứa không khẳng định quyền sở hữu.

Association UC–UC cùng subject bị cấm. Association của Actor/UC phải thỏa ràng buộc binary tương ứng. Không suy association là thứ tự chạy hoặc sơ đồ điều khiển luồng.

## UML-9-GENERALIZATION — Tổng quát hóa

**Clause:** §9.2.3.2; §9.2.4.2, áp dụng cho Actor/UseCase là classifier. **Evidence:** `verified_normative`. **Locator:** trang in 100, 102; PDF trang 142, 144.

Generalization đi từ classifier cụ thể đến classifier tổng quát. Ký pháp là đường với đầu tam giác rỗng trỏ về classifier tổng quát. Đây là quan hệ phân loại, không phải include/extend hoặc thứ tự thực hiện.

## UML-POLICY — Kiểm tra đề xuất cho FlintFlow

**Evidence:** `proposed_policy`; các ví dụ và mức xử lý dưới đây là quy ước nhóm.

| Check ID | Điều kiện / kết quả | Căn cứ |
| --- | --- | --- |
| UC-01 | Actor/UC thiếu tên → báo lỗi dữ liệu | UML-18-ACTOR; UML-18-USECASE |
| UC-02 | Endpoint quan hệ không tồn tại → báo lỗi dữ liệu | Kiểm tính toàn vẹn ID của FlintFlow |
| UC-03 | Include tự thân hoặc có chu trình → báo lỗi | UML-18-INCLUDE |
| UC-04 | Mũi tên include/extend ngược endpoint mô hình → báo lỗi | UML-18-INCLUDE; UML-18-EXTEND |
| UC-05 | Extend thiếu extension point trong mô hình → review nguồn dữ liệu; điểm phải thuộc UC gốc | UML-18-EXTEND; không kết luận từ việc hình không hiển thị điểm |
| UC-06 | UC không nối actor trực tiếp → kiểm mục đích và chuỗi include/extend, không mặc định lỗi UML | UC tái sử dụng có thể được tiếp cận qua UC khác |
| UC-07 | Actor là chính database/module nội bộ → review boundary | Có thể là actor nếu thực sự là hệ thống ngoài ở boundary khác |
| UC-08 | UC có tên kiểu “Click Button” → đề nghị làm rõ mục tiêu | Quy ước mức độ chi tiết của FlintFlow, không phải luật đặt tên UML |

Ví dụ do nhóm xây dựng: `Checkout → Calculate Total : include`; `Show Context Help → Edit SRS : extend`. Ví dụ extend cần định nghĩa điểm `editing` trong UC gốc; nếu nhóm dùng condition `user_requested_help`, đó là dữ liệu mô hình do nhóm lựa chọn.

Không yêu cầu mọi UC đều nối actor trực tiếp, mọi UC đều có include/extend, mọi actor là người, hoặc mọi extend có condition. Không dùng include/extend để suy thứ tự các màn hình. Các chính sách bố cục như actor trái/phải, số UC tối đa trên hình, màu sắc hoặc bắt buộc vẽ boundary thuộc FlintFlow/template, cần ghi nguồn riêng.
