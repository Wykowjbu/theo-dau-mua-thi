import {FileMagnifier} from "@gravity-ui/icons";
import {InternalLink} from "./internal-link";

export function BrandLogo() {
  return (
    <InternalLink href="/" className="group flex items-center gap-3 no-underline" aria-label="Theo Dấu Mùa Thi — Trang chủ">
      <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground shadow-sm transition-colors group-hover:bg-accent-hover">
        <FileMagnifier width={21} height={21} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[.68rem] font-bold uppercase tracking-[.2em] text-muted">Theo dấu</span>
        <span className="block font-bold leading-tight text-foreground">Mùa Thi</span>
      </span>
    </InternalLink>
  );
}
