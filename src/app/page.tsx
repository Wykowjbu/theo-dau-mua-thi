import {ArrowRight, BookOpen, CircleCheck, Magnifier, ShieldCheck} from "@gravity-ui/icons";
import {Chip, Surface} from "@heroui/react";
import {IncidentCard} from "@/components/incident-card";
import {InternalButtonLink} from "@/components/internal-link";
import {LegalNotice} from "@/components/legal-notice";
import {incidents} from "@/data/incidents";

export default function HomePage() {
  const featured = incidents.find((item) => item.featured) ?? incidents[0];
  const principles = [
    {icon: <ShieldCheck width={18} height={18} aria-hidden="true" />, label: "Nguồn chính thức được ưu tiên"},
    {icon: <Magnifier width={18} height={18} aria-hidden="true" />, label: "Điều tra không phải kết luận"},
    {icon: <CircleCheck width={18} height={18} aria-hidden="true" />, label: "Mỗi dữ kiện có nguồn dẫn"},
  ];
  return (
    <main id="noi-dung">
      <section className="rule-grid border-b border-border py-16 md:py-24">
        <div className="page-shell grid items-end gap-12 lg:grid-cols-[1.3fr_.7fr]">
          <div><p className="eyebrow mb-5">Hồ sơ dữ kiện thi cử</p><h1 className="display-title max-w-4xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">Biết điều gì đã rõ. Biết điều gì còn đang chờ.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">Theo Dấu Mùa Thi hệ thống hóa sự việc, dẫn lại nguồn và tách biệt xác nhận chính thức, điều tra, đề xuất cùng dữ liệu báo chí.</p><div className="mt-9 flex flex-wrap gap-4"><InternalButtonLink href="/vu-viec">Xem các vụ việc <ArrowRight width={18} height={18} aria-hidden="true" /></InternalButtonLink><InternalButtonLink href="/phuong-phap" variant="outline">Cách chúng tôi phân loại</InternalButtonLink></div></div>
          <Surface className="rounded-3xl p-6"><p className="eyebrow">Nguyên tắc đọc nhanh</p><div className="mt-5 space-y-5">{principles.map(({icon,label}) => <div key={label} className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-accent-soft text-accent-soft-foreground">{icon}</span><span className="font-semibold">{label}</span></div>)}</div></Surface>
        </div>
      </section>
      <section className="page-shell py-16 md:py-20"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="eyebrow mb-3">Hồ sơ nổi bật</p><h2 className="display-title text-4xl">Đang được cập nhật</h2></div><Chip variant="soft"><BookOpen width={14} height={14} aria-hidden="true" /><Chip.Label>1 hồ sơ thật</Chip.Label></Chip></div>{featured && <div className="max-w-3xl"><IncidentCard incident={featured} /></div>}<LegalNotice /></section>
      <section className="border-y border-border bg-foreground py-16 text-background"><div className="page-shell grid gap-8 md:grid-cols-3">{[["01","Dữ kiện","Nội dung đã công bố được tách thành từng mệnh đề có nguồn."],["02","Trạng thái","Nhãn chữ và biểu tượng cho biết mức độ xác thực, không chỉ dựa vào màu."],["03","Lịch sử","Mốc cập nhật và đính chính giúp người đọc thấy thông tin thay đổi ra sao."]].map(([n,title,text]) => <div key={n} className="border-l border-background/25 pl-5"><span className="text-xs font-bold tracking-widest text-background/70">{n}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-background/80">{text}</p></div>)}</div></section>
    </main>
  );
}
