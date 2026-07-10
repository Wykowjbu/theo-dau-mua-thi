import {FileMagnifier, ScalesBalanced, ShieldCheck} from "@gravity-ui/icons";
import {Card} from "@heroui/react";
import type {Metadata} from "next";
import {LegalNotice} from "@/components/legal-notice";

export const metadata: Metadata = {title: "Giới thiệu", description: "Giới thiệu mục tiêu và nguyên tắc của Theo Dấu Mùa Thi."};

export default function AboutPage() {
  const principles = [
    {icon: <FileMagnifier width={24} height={24} className="text-accent" aria-hidden="true" />, title: "Hệ thống hóa", text: "Tập hợp thông tin công khai thành hồ sơ có cấu trúc, ngày cập nhật và nguồn dẫn."},
    {icon: <ShieldCheck width={24} height={24} className="text-accent" aria-hidden="true" />, title: "Phân biệt", text: "Tách xác nhận chính thức, điều tra, đề xuất và số liệu báo chí."},
    {icon: <ScalesBalanced width={24} height={24} className="text-accent" aria-hidden="true" />, title: "Thận trọng", text: "Không suy đoán động cơ, không kết tội và không công khai dữ liệu học sinh."},
  ];
  return <main id="noi-dung" className="page-shell py-12 md:py-16"><header className="max-w-3xl"><p className="eyebrow mb-4">Về dự án</p><h1 className="display-title text-5xl md:text-6xl">Theo Dấu Mùa Thi</h1><p className="mt-5 text-xl leading-9 text-muted">Theo dõi sự việc, dữ kiện và mức độ xác thực.</p></header><section className="mt-12 grid gap-5 md:grid-cols-3">{principles.map(({icon,title,text}) => <Card key={title}><Card.Header>{icon}<Card.Title>{title}</Card.Title></Card.Header><Card.Content><p className="prose-copy">{text}</p></Card.Content></Card>)}</section><section className="mt-14 max-w-3xl"><h2 className="display-title text-3xl">Website này không phải là gì?</h2><p className="mt-5 prose-copy">Theo Dấu Mùa Thi không phải báo điện tử, cơ quan báo chí, cơ quan điều tra, cơ quan xác minh độc lập, trang thông tin của Bộ Giáo dục và Đào tạo hay cơ quan công an. Website chỉ tổng hợp và phân loại thông tin từ các nguồn được dẫn lại.</p><LegalNotice /></section></main>;
}
