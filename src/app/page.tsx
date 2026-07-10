import {ArrowRight, ClockArrowRotateLeft} from "@gravity-ui/icons";
import {Chip} from "@heroui/react";
import {IncidentCard} from "@/components/incident-card";
import {InternalButtonLink} from "@/components/internal-link";
import {LegalNotice} from "@/components/legal-notice";
import {incidents} from "@/data/incidents";

export default function HomePage() {
  const latest = [...incidents].sort((a, b) => b.lastUpdatedAt.localeCompare(a.lastUpdatedAt))[0];
  return (
    <main id="noi-dung" className="page-shell py-8 md:py-12">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4"><div><Chip color="accent" variant="soft"><ClockArrowRotateLeft width={14} height={14} aria-hidden="true" /><Chip.Label>Mới cập nhật</Chip.Label></Chip><h1 className="mt-3 text-lg font-semibold">Đọc nhanh vụ việc mới nhất</h1></div><InternalButtonLink href="/vu-viec" variant="outline">Tất cả vụ việc <ArrowRight width={17} height={17} aria-hidden="true" /></InternalButtonLink></header>
      {latest && <IncidentCard incident={latest} featured />}
      {latest && <LegalNotice text={latest.legalDisclaimer} />}
    </main>
  );
}
