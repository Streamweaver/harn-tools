import {Component, Input, OnInit} from '@angular/core';
import {Manor} from '../shared/models/manor.model';
import {TenantSummary} from '../shared/models/summaries.model';
import {SharedDataService} from '../shared/services/shared-data.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {
  @Input('manor') manor: Manor;
  tenantTotals: TenantSummary;
  showGenerationInput: boolean;

  constructor(private dataService: SharedDataService) {
  }

  ngOnInit() {
    this.dataService.tenants.subscribe(tt => this.tenantTotals = tt);
    this.dataService.showGenerationInput.subscribe(g => this.showGenerationInput = g);
  }

  updateTotals() {
    const tenantTotals: TenantSummary = {serf_acres: 0, free_acres: 0, labor: 0, size: 0, fees: 0, rent: 0};
    for (const tenant of this.manor.population.tenants) {
      tenantTotals.serf_acres += tenant.serf_acres;
      tenantTotals.free_acres += tenant.free_acres;
      tenantTotals.size += tenant.size;
      tenantTotals.labor += tenant.labor_days;
      tenantTotals.fees += tenant.fees;
      tenantTotals.rent += tenant.rent;
    }
    this.dataService.setTenantTotals(tenantTotals);
  }
}
