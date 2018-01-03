import { Injectable } from '@angular/core';
import { IManor } from './models/imanor.model';
import { ITenant } from './models/itenant.model';


@Injectable()
export class ManorService {
  manor: IManor;

  constructor() {
    this.manor = {
      clearedAcres: 1000,
      landQuality: 1.0,
      tenants: [],
      isSlaveState: false,
      freeRent: 6,
      serfLabor: 4
    };
  }

  resetManor() {
    this.manor = {
      clearedAcres: 1000,
      landQuality: 1.0,
      tenants: [],
      isSlaveState: false,
      freeRent: 6,
      serfLabor: 4
    };
  }

  resetTenants() {
    this.manor.tenants = [];
  }

  getManor(): IManor {
    return this.manor;
  }
}
