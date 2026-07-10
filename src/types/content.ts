export type VerificationStatus =
  | "OFFICIAL_CONFIRMED"
  | "INVESTIGATING"
  | "PENDING_DECISION"
  | "MEDIA_DATA_ANALYSIS"
  | "UNVERIFIED"
  | "DISPUTED"
  | "FALSE_OR_REJECTED"
  | "DEMO";

export type SourceLevel =
  | "LEVEL_1_OFFICIAL"
  | "LEVEL_2_PRIMARY_NEWS"
  | "LEVEL_3_SECONDARY_NEWS"
  | "LEVEL_4_SOCIAL";

export interface Source {
  id: string;
  title: string;
  publisher: string;
  sourceLevel: SourceLevel;
  sourceType: string;
  publishedAt: string;
  accessedAt: string;
  url?: string;
  description: string;
  supportsClaimIds: string[];
  archivedUrl?: string;
  isOfficial: boolean;
  isPrimary: boolean;
  isAccessible: boolean;
  notes?: string;
}

export interface KeyFact {
  id: string;
  statement: string;
  status: VerificationStatus;
  sourceIds: string[];
}

export interface Claim {
  id: string;
  title: string;
  statement: string;
  status: VerificationStatus;
  explanation: string;
  sourceIds: string[];
  firstReportedAt: string;
  lastCheckedAt: string;
  importance: "high" | "medium" | "low";
  caution?: string;
  isSensitive: boolean;
  isStudentRelated: boolean;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  status: VerificationStatus;
  sourceIds: string[];
  eventType: string;
  isMajor: boolean;
}

export interface ReportedMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  description: string;
  status: VerificationStatus;
  sourceIds: string[];
  caution?: string;
  displayPriority: number;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  status: VerificationStatus;
  sourceIds: string[];
  caution: string;
  updatedAt: string;
}

export interface PersonReference {
  id: string;
  name: string;
  role: string;
  legalLabel: string;
  description: string;
  sourceIds: string[];
  showImage: false;
}

export interface Correction {
  id: string;
  date: string;
  type: string;
  before: string;
  after: string;
  reason: string;
  sourceIds: string[];
}

export interface Incident {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  location: string;
  province: string;
  schoolOrTestSite: string;
  examName: string;
  examYear: number;
  subject: string;
  incidentType: string;
  overallStatus: VerificationStatus;
  legalStatus: string;
  featured: boolean;
  isDemo: boolean;
  firstReportedAt: string;
  lastUpdatedAt: string;
  lastVerifiedAt: string;
  summary: string;
  neutralDescription: string;
  keyFacts: KeyFact[];
  reportedMetrics: ReportedMetric[];
  timeline: TimelineItem[];
  claims: Claim[];
  proposals: Proposal[];
  people: PersonReference[];
  sourceIds: string[];
  corrections: Correction[];
  relatedIncidentIds: string[];
  searchKeywords: string[];
  quickReadFactIds: string[];
  quickEvidenceFactIds: string[];
  studentScope: string;
  privacyNotes: string;
  legalDisclaimer: string;
}
