import {BookOpen, CircleExclamation, FileText, ShieldCheck} from "@gravity-ui/icons";
import {Card, Separator} from "@heroui/react";
import type {Metadata} from "next";
import {StatusChip} from "@/components/status-chip";
import {statusMeta} from "@/data/statuses";
import type {VerificationStatus} from "@/types/content";

export const metadata: Metadata = {title: "Phương pháp", description: "Cách Theo Dấu Mùa Thi thu thập nguồn và phân loại mức độ xác thực."};

const steps = [
  ["Tiếp nhận", "Ghi nhận sự việc từ nguồn công khai, không tự tạo cáo buộc hoặc thu thập dữ liệu định danh học sinh."],
  ["Đối chiếu", "Ưu tiên nguồn của cơ quan có thẩm quyền, sau đó mới tới báo chí dẫn nguồn trực tiếp và nguồn tổng hợp."],
  ["Phân loại", "Tách từng dữ kiện, đề xuất, số liệu và tình trạng pháp lý để tránh biến nghi vấn thành kết luận."],
  ["Cập nhật", "Ghi ngày kiểm tra gần nhất; bổ sung lịch sử đính chính khi thông tin thay đổi."],
];

export default function MethodPage() {
  return <main id="noi-dung" className="page-shell py-12 md:py-16"><header className="max-w-3xl"><p className="eyebrow mb-4">Minh bạch biên tập</p><h1 className="display-title text-5xl md:text-6xl">Phương pháp</h1><p className="mt-5 text-lg leading-8 text-muted">Mục tiêu không phải quyết định thay cơ quan có thẩm quyền, mà giúp người đọc nhận ra nguồn nào nói gì và thông tin đang ở giai đoạn nào.</p></header>
    <section className="mt-14" aria-labelledby="process"><div className="mb-6 flex items-center gap-3"><BookOpen width={24} height={24} className="text-accent" aria-hidden="true" /><h2 id="process" className="display-title text-3xl">Quy trình bốn bước</h2></div><div className="grid gap-4 md:grid-cols-2">{steps.map(([title,text],index) => <Card key={title}><Card.Header><span className="eyebrow">Bước {index + 1}</span><Card.Title>{title}</Card.Title></Card.Header><Card.Content><p className="prose-copy">{text}</p></Card.Content></Card>)}</div></section>
    <section className="mt-14" aria-labelledby="labels"><div className="mb-6 flex items-center gap-3"><ShieldCheck width={24} height={24} className="text-accent" aria-hidden="true" /><h2 id="labels" className="display-title text-3xl">Hệ thống trạng thái</h2></div><Card variant="secondary"><Card.Content className="space-y-0">{(Object.keys(statusMeta) as VerificationStatus[]).map((status,index) => <div key={status}>{index > 0 && <Separator />}<div className="grid gap-3 py-5 md:grid-cols-[16rem_1fr] md:items-center"><StatusChip status={status} /><p className="text-sm leading-6 text-muted">{statusMeta[status].description}</p></div></div>)}</Card.Content></Card></section>
    <section className="mt-14 grid gap-5 md:grid-cols-2"><Card><Card.Header><FileText width={22} height={22} className="text-accent" aria-hidden="true" /><Card.Title>Thứ tự ưu tiên nguồn</Card.Title></Card.Header><Card.Content><ol className="list-decimal space-y-3 pl-5 text-muted"><li>Cơ quan có thẩm quyền công bố trực tiếp</li><li>Báo chí dẫn nguồn trực tiếp</li><li>Báo chí tổng hợp</li><li>Mạng xã hội hoặc nguồn chưa xác minh</li></ol></Card.Content></Card><Card><Card.Header><CircleExclamation width={22} height={22} className="text-warning" aria-hidden="true" /><Card.Title>Giới hạn</Card.Title></Card.Header><Card.Content><p className="prose-copy">Website không tự điều tra, không xác định trách nhiệm pháp lý và không dùng mạng xã hội làm căn cứ duy nhất cho trạng thái “đã xác nhận chính thức”.</p></Card.Content></Card></section>
  </main>;
}
