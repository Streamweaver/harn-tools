import { ITenant } from './tenant.model';
import { Officer } from './tenant.model';
import { IHouseholdMember } from './housemember.model';

export class Population {
  tenants: ITenant[];
  household: IHouseholdMember[];

  constructor() {
    this.tenants = [];
    this.household = [];
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

  tenantLaborPool(): number {
    return this.tenants.length * 500;
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

  householdTotal(): number {
    let total = 0;
    for (const member of this.household) {
      total += member.each * member.count;
    }
    return total;
  }
}
