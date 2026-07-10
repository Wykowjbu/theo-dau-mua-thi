import {ArrowRight, Calendar, ChartColumn, MapPin, Person, ScalesBalanced} from "@gravity-ui/icons";
import {Card} from "@heroui/react";
import {formatDate} from "@/lib/date";
import type {Incident} from "@/types/content";
import {StatusChip} from "./status-chip";
import {InternalLink} from "./internal-link";

export function IncidentCard({incident, featured = false}: {incident: Incident; featured?: boolean}) {
  const metric = incident.reportedMetrics[0];
  const quickFacts = incident.keyFacts.filter((fact) => incident.quickReadFactIds.includes(fact.id));
  return (
    <Card className="h-full" variant={featured ? "tertiary" : "default"}>
      <Card.Header className="gap-3"><div className="flex flex-wrap items-center gap-3"><StatusChip status={incident.overallStatus} /><span className="text-sm text-muted">Cập nhật {formatDate(incident.lastUpdatedAt)}</span></div><Card.Title className={`display-title leading-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>{incident.shortTitle}</Card.Title><Card.Description>{incident.schoolOrTestSite}</Card.Description></Card.Header>
      <Card.Content className="space-y-6">
        <dl className={`grid gap-4 ${featured ? "md:grid-cols-2" : ""}`}>
          <div><dt className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"><MapPin width={15} height={15} aria-hidden="true" />Ở đâu?</dt><dd className="font-semibold">{incident.province}</dd></div>
          <div><dt className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"><Calendar width={15} height={15} aria-hidden="true" />Môn và kỳ thi</dt><dd className="font-semibold">{incident.subject} · {incident.examName}</dd></div>
          {metric && <div><dt className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"><ChartColumn width={15} height={15} aria-hidden="true" />Điểm số được chú ý</dt><dd><strong>{metric.value}</strong> {metric.label.toLocaleLowerCase("vi")}. <span className="text-warning-soft-foreground">{metric.caution}</span></dd></div>}
          <div><dt className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"><Person width={15} height={15} aria-hidden="true" />Thí sinh nào?</dt><dd>{incident.studentScope}</dd></div>
        </dl>
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted"><ScalesBalanced width={15} height={15} aria-hidden="true" />{incident.overallStatus === "UNVERIFIED" ? "Cáo buộc cần kiểm chứng" : "Cách vi phạm được công bố"}</p>
          <ul className="list-disc space-y-2 pl-5">{quickFacts.map((fact) => <li key={fact.id}><mark className="rounded bg-danger-soft px-1 font-bold leading-7 text-danger-soft-foreground">{fact.statement}</mark></li>)}</ul>
        </div>
        <p className="border-l-2 border-warning pl-4 text-sm leading-6"><strong>Pháp lý:</strong> {incident.legalStatus}. Khởi tố không phải là bản án kết tội.</p>
      </Card.Content>
      <Card.Footer><InternalLink href={`/vu-viec/${incident.slug}`} className="inline-flex items-center gap-2 font-bold">Đọc nguồn và diễn biến <ArrowRight width={17} height={17} aria-hidden="true" /></InternalLink></Card.Footer>
    </Card>
  );
}
