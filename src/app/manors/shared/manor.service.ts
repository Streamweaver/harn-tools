import { Injectable } from '@angular/core';
import { IManor } from './models/imanor.model';
import { ITenant } from './models/itenant.model';


@Injectable()
export class ManorService {
  manor: IManor;

  constructor() {
    this.resetManor();
  }

  resetManor() {
    this.manor = {
      grossAcres: 2000,
      clearedAcres: 1000,
      landQuality: 1.0,
      tenants: [],
      freeRent: 6,
      serfLabor: 4,
      isSlaveState: false,
      isCoastal: false,
      foAcresPerHH: 1500,
      foAcresPerLF: 600,
      feudalObligationHH: 0,
      feudalObligationLF: 0
    };
  }

  resetTenants() {
    this.manor.tenants = [];
  }

  getManor(): IManor {
    return this.manor;
  }
}
