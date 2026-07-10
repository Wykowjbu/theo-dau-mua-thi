import type {Metadata} from "next";
import {IncidentsExplorer} from "@/components/incidents-explorer";
import {incidents} from "@/data/incidents";

export const metadata: Metadata = {title: "Vụ việc", description: "Danh sách hồ sơ sự việc thi cử được phân loại theo mức độ xác thực."};

export default function IncidentsPage() {
  return (
    <main id="noi-dung" className="page-shell py-12 md:py-16">
      <header className="mb-10 max-w-3xl"><p className="eyebrow mb-4">Kho hồ sơ</p><h1 className="display-title text-5xl md:text-6xl">Vụ việc</h1><p className="mt-5 text-lg leading-8 text-muted">Tìm theo địa phương, môn thi hoặc trạng thái. Mỗi hồ sơ tách dữ kiện chính thức khỏi phân tích và nội dung còn chờ quyết định.</p></header>
      <IncidentsExplorer items={incidents} />
    </main>
  );
}
