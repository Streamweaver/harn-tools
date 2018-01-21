import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { SectionSummary, TenantSummary } from '../models/summaries.model';

@Injectable()
export class SharedDataService {
  private cropSummaries: BehaviorSubject<SectionSummary>;
  crops: Observable<SectionSummary>;
  private herdSummaries: BehaviorSubject<SectionSummary>;
  herds: Observable<SectionSummary>;
  private tenantSummaries: BehaviorSubject<TenantSummary>;
  tenants: Observable<TenantSummary>;
  private fiefIncomeBehavior: BehaviorSubject<number>;
  fiefIncome: Observable<number>;

  constructor() {
    this.cropSummaries = new BehaviorSubject<SectionSummary>({acres: 0, labor: 0, kind: 0});
    this.crops = this.cropSummaries.asObservable();
    this.herdSummaries = new BehaviorSubject<SectionSummary>({acres: 0, labor: 0, kind: 0});
    this.herds = this.herdSummaries.asObservable();
    this.tenantSummaries = new BehaviorSubject<TenantSummary>({serf_acres: 0, free_acres: 0, labor: 0, size: 0, fees: 0, rent: 0});
    this.tenants = this.tenantSummaries.asObservable();
    this.fiefIncomeBehavior = new BehaviorSubject<number>(0);
    this.fiefIncome = this.fiefIncomeBehavior.asObservable();
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

  setFiefIncome(d: number) {
    this.fiefIncomeBehavior.next(d);
  }
}
