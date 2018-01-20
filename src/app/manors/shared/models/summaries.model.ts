export interface SectionSummary {
  acres: number;
  labor: number;
  kind: number;
}

export interface TenantSummary extends SectionSummary {
  fees: number;
  rent: number;
}
