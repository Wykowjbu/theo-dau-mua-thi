"use client";

import {Bars, Xmark} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import {BrandLogo} from "./brand-logo";
import {InternalLink} from "./internal-link";

const links = [
  ["/vu-viec", "Vụ việc"],
  ["/phuong-phap", "Phương pháp"],
  ["/dinh-chinh", "Đính chính"],
  ["/gioi-thieu", "Giới thiệu"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <BrandLogo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Điều hướng chính">
          {links.map(([href, label]) => <InternalLink key={href} href={href} className="text-sm font-semibold">{label}</InternalLink>)}
        </nav>
        <div className="md:hidden">
          <Drawer>
            <Button isIconOnly variant="ghost" aria-label="Mở trình đơn"><Bars width={22} height={22} aria-hidden="true" /></Button>
            <Drawer.Backdrop>
              <Drawer.Content placement="right" className="w-[min(88vw,22rem)]">
                <Drawer.Dialog>
                  <Drawer.CloseTrigger aria-label="Đóng trình đơn"><Xmark width={20} height={20} aria-hidden="true" /></Drawer.CloseTrigger>
                  <Drawer.Header><Drawer.Heading>Điều hướng</Drawer.Heading></Drawer.Header>
                  <Drawer.Body>
                    <nav className="flex flex-col gap-2" aria-label="Điều hướng di động">
                      {links.map(([href, label]) => <InternalLink key={href} href={href} className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-default-hover">{label}</InternalLink>)}
                    </nav>
                  </Drawer.Body>
                  <Drawer.Footer><p className="text-sm text-muted">Theo dõi sự việc, dữ kiện và mức độ xác thực.</p></Drawer.Footer>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
