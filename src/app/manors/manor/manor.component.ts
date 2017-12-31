import { Component, OnInit } from '@angular/core';
import { TenantGenerator } from '../shared/tenant-generator';
import { Itenant } from '../shared/itenant.model';
import { ManorService } from '../shared/manors.service';

@Component({
  selector: 'app-manor',
  templateUrl: './manor.component.html',
  styleUrls: ['./manor.component.scss']
})
export class ManorComponent implements OnInit {
  tenants: Itenant[];
  tenantTotals: {
    serf_acres: number;
    free_acres: number;
    labor_days: number;
    rent: number;
    fees: number;
  };

  constructor(
    private _manorService: ManorService,
  ) {
    this.tenantTotals = {
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0
    }
  }

  ngOnInit() {
    this.tenants = this._manorService.getTenants();
    this.calculateTotals();
  }

  onPopulateClick() {
    console.log('POPULATE NOW');
    this._manorService.populateTenants(50);
    this.calculateTotals();
  }

  calculateTotals() {
    for (const tenant of this.tenants) {
      this.tenantTotals.serf_acres += tenant.serf_acres;
      this.tenantTotals.free_acres += tenant.free_acres;
      this.tenantTotals.labor_days += tenant.labor_days;
      this.tenantTotals.rent += tenant.rent;
      this.tenantTotals.fees += tenant.fees;
    }
  }
}
