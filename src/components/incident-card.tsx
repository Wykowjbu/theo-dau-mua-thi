import {ArrowRight, Calendar, MapPin} from "@gravity-ui/icons";
import {Card} from "@heroui/react";
import {formatDate} from "@/lib/date";
import type {Incident} from "@/types/content";
import {StatusChip} from "./status-chip";
import {InternalLink} from "./internal-link";

export function IncidentCard({incident}: {incident: Incident}) {
  return (
    <Card className="h-full" variant="default">
      <Card.Header className="gap-4"><StatusChip status={incident.overallStatus} /><Card.Title className="display-title text-2xl leading-tight">{incident.shortTitle}</Card.Title><Card.Description>{incident.examName}</Card.Description></Card.Header>
      <Card.Content className="space-y-5">
        <p className="line-clamp-4 leading-7 text-muted">{incident.neutralDescription}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"><span className="flex items-center gap-2"><MapPin width={16} height={16} aria-hidden="true" />{incident.location}</span><span className="flex items-center gap-2"><Calendar width={16} height={16} aria-hidden="true" />Cập nhật {formatDate(incident.lastUpdatedAt)}</span></div>
      </Card.Content>
      <Card.Footer><InternalLink href={`/vu-viec/${incident.slug}`} className="inline-flex items-center gap-2 font-bold">Xem hồ sơ dữ kiện <ArrowRight width={17} height={17} aria-hidden="true" /></InternalLink></Card.Footer>
    </Card>
  );
}
