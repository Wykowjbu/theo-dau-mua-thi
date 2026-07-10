import {ChartColumn, CircleExclamation, CircleQuestion, CircleXmark, Clock, FileText, Magnifier, ShieldCheck} from "@gravity-ui/icons";
import {Chip} from "@heroui/react";
import {statusMeta} from "@/data/statuses";
import type {VerificationStatus} from "@/types/content";

const config = {
  OFFICIAL_CONFIRMED: {icon: ShieldCheck, color: "success"},
  INVESTIGATING: {icon: Magnifier, color: "warning"},
  PENDING_DECISION: {icon: Clock, color: "accent"},
  MEDIA_DATA_ANALYSIS: {icon: ChartColumn, color: "default"},
  UNVERIFIED: {icon: CircleQuestion, color: "default"},
  DISPUTED: {icon: CircleExclamation, color: "warning"},
  FALSE_OR_REJECTED: {icon: CircleXmark, color: "danger"},
  DEMO: {icon: FileText, color: "default"},
} as const;

export function StatusChip({status}: {status: VerificationStatus}) {
  const {label, description} = statusMeta[status];
  const {icon: Icon, color} = config[status];
  return (
    <Chip color={color} variant="soft" aria-label={`${label}. ${description}`}>
      <Icon width={14} height={14} aria-hidden="true" />
      <Chip.Label>{label}</Chip.Label>
    </Chip>
  );
}
