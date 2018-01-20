import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface SectionSummary {
  acres: number;
  labor: number;
  kind: number;
}

export interface TenantSummary extends SectionSummary {
  fees: number;
  rent: number;
}

export class Summaries {


  constructor() {

  }
}

@Injectable()
export class SharedDataService {
  private cropSummaries: BehaviorSubject<SectionSummary>;
  crops: Observable<SectionSummary>;
  private herdSummaries: BehaviorSubject<SectionSummary>;
  herds: Observable<SectionSummary>;
  private tenantSummaries: BehaviorSubject<TenantSummary>;
  tenants: Observable<TenantSummary>;

  constructor() {
    this.cropSummaries = new BehaviorSubject<SectionSummary>({acres: 0, labor: 0, kind: 0});
    this.crops = this.cropSummaries.asObservable();
    this.herdSummaries = new BehaviorSubject<SectionSummary>({acres: 0, labor: 0, kind: 0});
    this.herds = this.herdSummaries.asObservable();
    this.tenantSummaries = new BehaviorSubject<TenantSummary>({acres: 0, labor: 0, kind: 0, fees: 0, rent: 0});
    this.tenants = this.tenantSummaries.asObservable();
  }

  setCropTotals(ct: SectionSummary) {
    this.cropSummaries.next(ct);
  }

  setHerdTotals(ht: SectionSummary) {
    this.herdSummaries.next(ht);
  }

  setTenantTotals(tt: TenantSummary) {
    this.tenantSummaries.next(tt);
  }
}
