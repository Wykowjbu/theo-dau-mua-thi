import {BrandLogo} from "./brand-logo";
import {InternalLink} from "./internal-link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><BrandLogo /><p className="mt-5 max-w-md text-sm leading-7 text-muted">Theo Dấu Mùa Thi tổng hợp và phân loại thông tin liên quan đến các sự việc trong hoạt động thi cử tại Việt Nam dựa trên nguồn được dẫn lại và mức độ xác thực.</p></div>
        <div><p className="eyebrow mb-4">Nội dung</p><div className="flex flex-col items-start gap-3 text-sm"><InternalLink href="/vu-viec">Vụ việc</InternalLink><InternalLink href="/phuong-phap">Phương pháp</InternalLink><InternalLink href="/dinh-chinh">Đính chính</InternalLink></div></div>
        <div><p className="eyebrow mb-4">Minh bạch</p><div className="flex flex-col items-start gap-3 text-sm"><InternalLink href="/gioi-thieu">Giới thiệu</InternalLink><span>Cập nhật lần cuối 11/07/2026</span><span>theodaumuathi.vn</span></div></div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted">Website tổng hợp nguồn, không phải cơ quan báo chí hay cơ quan điều tra.</div>
    </footer>
  );
}
