import {InternalButtonLink} from "@/components/internal-link";

export default function NotFound() { return <main id="noi-dung" className="page-shell py-24 text-center"><p className="eyebrow">404 · Hồ sơ không tồn tại</p><h1 className="display-title mt-4 text-5xl">Không tìm thấy vụ việc</h1><p className="mx-auto mt-5 max-w-xl text-muted">Đường dẫn có thể đã thay đổi hoặc hồ sơ chưa được công bố.</p><InternalButtonLink href="/vu-viec" className="mt-8">Về danh sách vụ việc</InternalButtonLink></main>; }
