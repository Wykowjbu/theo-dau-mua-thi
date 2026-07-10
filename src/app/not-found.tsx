import {InternalButtonLink} from "@/components/internal-link";

export default function NotFound() { return <main id="noi-dung" className="page-shell py-24 text-center"><p className="eyebrow">404 · Không tìm thấy trang</p><h1 className="display-title mt-4 text-5xl">Dấu vết dừng ở đây</h1><p className="mx-auto mt-5 max-w-xl text-muted">Trang bạn tìm không tồn tại hoặc đường dẫn đã thay đổi.</p><InternalButtonLink href="/" className="mt-8">Về trang chủ</InternalButtonLink></main>; }
