import { Component, OnInit } from '@angular/core';
import { TenantGenerator } from '../shared/tenant-generator';
import { Itenant } from '../shared/itenant.model';
import { ManorService } from '../shared/manor.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  private _tg = new TenantGenerator();
  private _isPopulated: boolean;
  tenants: Itenant[];
  tenantTotals: {
    size: number;
    serf_acres: number;
    free_acres: number;
    labor_days: number;
    rent: number;
    fees: number;
  };
  clearedAcres: number;
  landQuality: number;
  isSlaveState: boolean;
  freeRent: number;
  serfLabor: number;

  constructor() {}

  ngOnInit() {
    this._reset();
  }

  private _reset() {
    this.tenants = [];
    this.tenantTotals = {
      size: 0,
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0
    };
    this.clearedAcres = 500;
    this.landQuality = 0.8;
    this.isSlaveState = false;
    this.freeRent = 6;
    this.serfLabor = 4;
    this._isPopulated = false;
  }

  onPopulateClick() {
    const numHouseholds = this.clearedAcres / 40 * this.landQuality;
    this._populateTenants(numHouseholds);
    this._sortTenants();
    this.calculateTotals();
    this._isPopulated = true;
  }

  onResetClick() {
    this._reset();
  }

  calculateTotals() {
    for (const tenant of this.tenants) {
      this.tenantTotals.size += tenant.size;
      this.tenantTotals.serf_acres += tenant.serf_acres;
      this.tenantTotals.free_acres += tenant.free_acres;
      this.tenantTotals.labor_days += tenant.labor_days;
      this.tenantTotals.rent += tenant.rent;
      this.tenantTotals.fees += tenant.fees;
    }
  }

  private _populateTenants(n: number) {
    while (this.tenants.length < n) {
      this.tenants.push(this._tg.generateTenant(this.freeRent, this.serfLabor, this.isSlaveState));
    }
  }

  private _sortTenants() {
    this.tenants.sort((a, b): number => {
      if (a.occupation > b.occupation) { return -1; }
      if (a.occupation < b.occupation) { return 1; }
      return 0;
    });
  }
}
