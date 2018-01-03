import { Component, OnInit } from '@angular/core';
import { IManor } from '../shared/models/imanor.model';
import { ManorService } from '../shared/manor.service';
import { TenantGenerator } from '../shared/generators/tenant-generator';
import { CraftsmanGenerator } from '../shared/generators/craftsman-generator';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {
  manor: IManor;
  private _tg: TenantGenerator;
  private _cg: CraftsmanGenerator;

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor();
    this._tg = new TenantGenerator(this.manor);
    this._cg = new CraftsmanGenerator(this.manor);
  }

  onResetClick() {
    this.manor.tenants = [];
  }

  onPopulateClick() {
    if (this.manor.tenants.length > 1) {
      this.manorService.resetTenants();
    }
    this._tg.generateTenants();
    this._cg.assignCraftsmen();
    console.log('Generate Click');
  }

  populationSize(): number {
    let size = 0;
    for (const tenant of this.manor.tenants) {
      size += tenant.size;
    }
    return size;
  }

  serfAcres(): number {
    let acres = 0;
    for (const tenant of this.manor.tenants) {
      acres += tenant.serf_acres;
    }
    return acres;
  }

  freeAcres(): number {
    let acres = 0;
    for (const tenant of this.manor.tenants) {
      acres += tenant.free_acres;
    }
    return acres;
  }

  laborDays(): number {
    let days = 0;
    for (const tenant of this.manor.tenants) {
      days += tenant.labor_days;
    }
    return days;
  }

  rent(): number {
    let rent = 0;
    for (const tenant of this.manor.tenants) {
      rent += tenant.rent;
    }
    return rent;
  }

  fees(): number {
    let fees = 0;
    for (const tenant of this.manor.tenants) {
      fees += tenant.fees;
    }
    return fees;
  }
}
