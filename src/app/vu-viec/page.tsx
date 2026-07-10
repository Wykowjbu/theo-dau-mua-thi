import type {Metadata} from "next";
import {IncidentsExplorer} from "@/components/incidents-explorer";
import {incidents} from "@/data/incidents";

export const metadata: Metadata = {title: "Vụ việc", description: "Danh sách hồ sơ sự việc thi cử được phân loại theo mức độ xác thực."};

export default function IncidentsPage() {
  return (
    <main id="noi-dung" className="page-shell py-8 md:py-12">
      <header className="mb-7"><h1 className="display-title text-3xl md:text-4xl">Các vụ việc</h1><p className="mt-2 text-muted">Lọc nhanh theo tỉnh thành hoặc loại vụ việc.</p></header>
      <IncidentsExplorer items={incidents} />
    </main>
  );
}
