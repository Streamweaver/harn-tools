import { Component, OnInit } from '@angular/core';
import { IManor } from '../shared/models/manor.model';
import { ManorService } from '../shared/manor.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {
  manor: IManor;

  constructor(private manorService: ManorService) {}

  ngOnInit() {
    this.manor = this.manorService.getManor();
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
