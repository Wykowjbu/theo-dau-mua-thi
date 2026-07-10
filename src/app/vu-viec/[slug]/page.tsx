import {ArrowLeft, Calendar, ChartColumn, Clock, ClockArrowRotateLeft, Link as LinkIcon, MapPin, ScalesBalanced, ShieldCheck} from "@gravity-ui/icons";
import {Alert, Breadcrumbs, Card, Chip, Link as HeroLink, Separator, Surface} from "@heroui/react";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {InternalLink} from "@/components/internal-link";
import {LegalNotice} from "@/components/legal-notice";
import {StatusChip} from "@/components/status-chip";
import {incidents} from "@/data/incidents";
import {sourceLevelMeta} from "@/data/statuses";
import {sources} from "@/data/sources";
import {formatDate} from "@/lib/date";

type Props = {params: Promise<{slug: string}>};

export function generateStaticParams() { return incidents.map(({slug}) => ({slug})); }

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const incident = incidents.find((item) => item.slug === slug);
  return incident ? {title: incident.shortTitle, description: incident.neutralDescription} : {title: "Không tìm thấy vụ việc"};
}

export default async function IncidentDetailPage({params}: Props) {
  const {slug} = await params;
  const incident = incidents.find((item) => item.slug === slug);
  if (!incident) notFound();
  const incidentSources = sources.filter((source) => incident.sourceIds.includes(source.id));
  const evidenceFacts = incident.keyFacts.filter((fact) => incident.quickEvidenceFactIds.includes(fact.id));
  const allegationFacts = incident.keyFacts.filter((fact) => !incident.quickEvidenceFactIds.includes(fact.id));

  return (
    <main id="noi-dung" className="pb-16">
      <header className="border-b border-border bg-surface py-8 md:py-12">
        <div className="page-shell">
          <Breadcrumbs className="mb-8"><Breadcrumbs.Item href="/">Trang chủ</Breadcrumbs.Item><Breadcrumbs.Item href="/vu-viec">Vụ việc</Breadcrumbs.Item><Breadcrumbs.Item>{incident.shortTitle}</Breadcrumbs.Item></Breadcrumbs>
          <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end"><div><StatusChip status={incident.overallStatus} /><h1 className="display-title mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">{incident.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{incident.summary}</p></div><Surface className="rounded-2xl p-5"><p className="eyebrow">Thông tin hồ sơ</p><dl className="mt-4 space-y-3 text-sm"><div className="flex gap-3"><MapPin width={17} height={17} aria-hidden="true" /><div><dt className="text-muted">Địa điểm</dt><dd className="font-semibold">{incident.location}</dd></div></div><div className="flex gap-3"><Calendar width={17} height={17} aria-hidden="true" /><div><dt className="text-muted">Kỳ thi</dt><dd className="font-semibold">{incident.examName}</dd></div></div><div className="flex gap-3"><ClockArrowRotateLeft width={17} height={17} aria-hidden="true" /><div><dt className="text-muted">Kiểm tra lần cuối</dt><dd className="font-semibold">{formatDate(incident.lastVerifiedAt)}</dd></div></div></dl></Surface></div>
        </div>
      </header>

      <div className="page-shell grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="space-y-14">
          <section aria-labelledby="facts"><div className="mb-6 flex items-center gap-3"><ShieldCheck className="text-accent" width={24} height={24} aria-hidden="true" /><h2 id="facts" className="display-title text-3xl">Dữ kiện chính</h2></div><div className="space-y-4">{allegationFacts.map((fact, index) => <Card key={fact.id} variant="secondary"><Card.Content className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-bold text-accent-soft-foreground">{index + 1}</span><div><p className="leading-7">{fact.statement}</p><div className="mt-3"><StatusChip status={fact.status} /></div></div></Card.Content></Card>)}</div></section>

          {evidenceFacts.length > 0 && <section aria-labelledby="evidence"><div className="mb-6 flex items-center gap-3"><ChartColumn className="text-accent" width={24} height={24} aria-hidden="true" /><h2 id="evidence" className="display-title text-3xl">Những gì được cung cấp</h2></div><div className="space-y-4">{evidenceFacts.map((fact) => <Card key={fact.id} variant="secondary"><Card.Content><p className="leading-7">{fact.statement}</p><div className="mt-3"><StatusChip status={fact.status} /></div></Card.Content></Card>)}</div></section>}

          <section aria-labelledby="status"><div className="mb-6 flex items-center gap-3"><ScalesBalanced className="text-accent" width={24} height={24} aria-hidden="true" /><h2 id="status" className="display-title text-3xl">Tình trạng pháp lý và đề xuất</h2></div><Card><Card.Header><Chip color="warning" variant="soft"><ScalesBalanced width={14} height={14} aria-hidden="true" /><Chip.Label>Tình trạng pháp lý</Chip.Label></Chip><Card.Title>{incident.legalStatus}</Card.Title></Card.Header><Card.Content><p className="prose-copy">Việc khởi tố là bước trong quá trình tố tụng và không đồng nghĩa với kết luận một cá nhân có tội.</p></Card.Content></Card>{incident.proposals.map((proposal) => <Card key={proposal.id} className="mt-4" variant="secondary"><Card.Header><StatusChip status={proposal.status} /><Card.Title>{proposal.title}</Card.Title></Card.Header><Card.Content><p className="prose-copy">{proposal.description}</p><Alert status="warning" className="mt-4"><Alert.Content><Alert.Description>{proposal.caution}</Alert.Description></Alert.Content></Alert></Card.Content></Card>)}</section>

          <section aria-labelledby="metrics"><h2 id="metrics" className="display-title mb-6 text-3xl">Số liệu được dẫn lại</h2><div className="grid gap-4 sm:grid-cols-2">{incident.reportedMetrics.sort((a,b) => a.displayPriority-b.displayPriority).map((metric) => <Card key={metric.id}><Card.Header><StatusChip status={metric.status} /><Card.Title className="text-4xl">{metric.value} <span className="text-base font-normal">{metric.unit}</span></Card.Title><Card.Description>{metric.label}</Card.Description></Card.Header><Card.Content><p className="text-sm leading-6 text-muted">{metric.description}</p>{metric.caution && <p className="mt-3 text-sm font-semibold text-warning-soft-foreground">Lưu ý: {metric.caution}</p>}</Card.Content></Card>)}</div></section>

          <section aria-labelledby="timeline"><div className="mb-6 flex items-center gap-3"><Clock className="text-accent" width={24} height={24} aria-hidden="true" /><h2 id="timeline" className="display-title text-3xl">Dòng thời gian</h2></div><ol className="relative ml-3 border-l-2 border-border pl-7">{incident.timeline.map((item) => <li key={item.id} className="relative pb-9 last:pb-0"><span className="absolute -left-[2.15rem] top-1 size-3 rounded-full border-2 border-background bg-accent ring-2 ring-accent" /><time className="eyebrow">{formatDate(item.date)}</time><h3 className="mt-2 text-lg font-bold">{item.title}</h3><p className="mt-2 leading-7 text-muted">{item.description}</p><div className="mt-3"><StatusChip status={item.status} /></div></li>)}</ol></section>

          <section aria-labelledby="sources"><div className="mb-6 flex items-center gap-3"><LinkIcon className="text-accent" width={24} height={24} aria-hidden="true" /><h2 id="sources" className="display-title text-3xl">Nguồn tham khảo</h2></div><div className="space-y-4">{incidentSources.map((source) => <Card key={source.id} variant="secondary"><Card.Header><Chip variant="soft"><Chip.Label>{sourceLevelMeta[source.sourceLevel]}</Chip.Label></Chip><Card.Title>{source.title}</Card.Title><Card.Description>{source.publisher} · {formatDate(source.publishedAt)}</Card.Description></Card.Header><Card.Content><p className="text-sm leading-6 text-muted">{source.description}</p>{source.notes && <p className="mt-3 text-sm font-semibold text-warning-soft-foreground">{source.notes}</p>}</Card.Content><Card.Footer>{source.url ? <HeroLink href={source.url} target="_blank" rel="noopener noreferrer">Mở nguồn gốc <LinkIcon width={15} height={15} aria-hidden="true" /></HeroLink> : <Chip color="warning" variant="soft"><Chip.Label>Chưa có URL bài gốc</Chip.Label></Chip>}</Card.Footer></Card>)}</div></section>
          <LegalNotice text={incident.legalDisclaimer} />
        </div>

        <aside className="h-fit lg:sticky lg:top-28"><Surface className="rounded-2xl p-5"><p className="eyebrow">Trong hồ sơ</p><nav className="mt-4 flex flex-col items-start text-sm font-semibold" aria-label="Mục lục hồ sơ">{[["#facts","Dữ kiện chính"],["#status","Tình trạng pháp lý"],["#metrics","Số liệu"],["#timeline","Dòng thời gian"],["#sources","Nguồn tham khảo"]].map(([href,label],i) => <span className="w-full" key={href}><HeroLink href={href} className="py-3">{label}</HeroLink>{i < 4 && <Separator />}</span>)}</nav></Surface><InternalLink href="/vu-viec" className="mt-5 inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft width={16} height={16} aria-hidden="true" />Tất cả vụ việc</InternalLink></aside>
      </div>
    </main>
  );
}
