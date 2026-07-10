import type {Metadata} from "next";
import {Link} from "@heroui/react";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import {SiteFooter} from "@/components/site-footer";
import {SiteHeader} from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://theodaumuathi.vn"),
  title: {default: "Theo Dấu Mùa Thi", template: "%s | Theo Dấu Mùa Thi"},
  description: "Theo dõi sự việc, dữ kiện và mức độ xác thực trong hoạt động thi cử tại Việt Nam.",
};

const inter = Inter({subsets: ["latin", "vietnamese"], variable: "--font-inter", display: "swap"});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="vi" dir="ltr" className={`${inter.variable} light`} data-theme="light"><body><Providers><Link href="#noi-dung" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-lg bg-accent px-4 py-3 text-accent-foreground focus:translate-y-0">Đi đến nội dung</Link><SiteHeader />{children}<SiteFooter /></Providers></body></html>;
}
