import { Component, OnInit } from '@angular/core';
import { IManor } from '../shared/models/manor.model';
import { ManorService } from '../shared/manor.service';

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
    for (const tenant of this.manor.population.tenants) {
      size += tenant.size;
    }
    return size;
  }

  serfAcres(): number {
    let acres = 0;
    for (const tenant of this.manor.population.tenants) {
      acres += tenant.serf_acres;
    }
    return acres;
  }

  freeAcres(): number {
    let acres = 0;
    for (const tenant of this.manor.population.tenants) {
      acres += tenant.free_acres;
    }
    return acres;
  }

  laborDays(): number {
    let days = 0;
    for (const tenant of this.manor.population.tenants) {
      days += tenant.labor_days;
    }
    return days;
  }

  rent(): number {
    let rent = 0;
    for (const tenant of this.manor.population.tenants) {
      rent += tenant.rent;
    }
    return rent;
  }

  fees(): number {
    let fees = 0;
    for (const tenant of this.manor.population.tenants) {
      fees += tenant.fees;
    }
    return fees;
  }
}
