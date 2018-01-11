import {ITenant} from './tenant.model';
import {Officer} from './tenant.model';

export interface IPopulation {
  tenants: ITenant[];
}

export class Population implements IPopulation {
  tenants: ITenant[];

  constructor() {
    this.tenants = [];
  }

  tenantSize(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.size;
    }
    return total;
  }

  tenantAcres(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.serf_acres + tenant.free_acres;
    }
    return total;
  }

  tenantFreeAcres(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.free_acres;
    }
    return total;
  }

  tenantSerfAcres(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.serf_acres;
    }
    return total;
  }

  tenantLaborDays(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.labor_days;
    }
    return total;
  }

  tenantFees(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.fees;
    }
    return total;
  }

  tenantRent(): number {
    let total = 0;
    for (const tenant of this.tenants) {
      total += tenant.rent;
    }
    return total;
  }

  glebeRevenue(): number {
    let glebeAcres = 0;
    let totalAcres = 0; // doing again since this saves another for loop.
    for (const tenant of this.tenants) {
      totalAcres += tenant.serf_acres + tenant.free_acres;
      if (tenant.office === Officer.Glebe) {
        glebeAcres += tenant.free_acres;
      }
    }
    totalAcres = totalAcres - glebeAcres;
    return totalAcres * 5 + glebeAcres * 60;
  }
}
