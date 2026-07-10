# Theo Dấu Mùa Thi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng website Next.js production-ready giúp người đọc phân biệt dữ kiện, trạng thái xác thực và nguồn của các sự việc thi cử.

**Architecture:** App Router và Server Components cho các route nội dung; một Client Component nhỏ xử lý tìm kiếm/lọc. Dữ liệu typed nằm ngoài component, nguồn được liên kết bằng `sourceId`, và các primitive tương tác dùng HeroUI v3.

**Tech Stack:** Next.js 16, React 19, TypeScript strict, Tailwind CSS 4, HeroUI 3, Gravity UI Icons.

---

- [ ] Khởi tạo cấu hình và kiểm thử dữ liệu/tìm kiếm trước.
- [ ] Tạo mô hình dữ liệu, nguồn và hồ sơ Tuyên Quang.
- [ ] Tạo layout, điều hướng, trang chủ, danh sách và trang chi tiết.
- [ ] Tạo các trang phương pháp, đính chính, giới thiệu và trạng thái lỗi/tải.
- [ ] Kiểm tra responsive, accessibility, lint, test và production build.
