import {ITenant} from './itenant.model';

export class IManor {
  grossAcres: number;
  clearedAcres: number;
  landQuality: number;
  tenants: ITenant[];
  freeRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  isCoastal: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  Notes: string[];
}

export class ManorFactory {
  static getManor(): IManor {
    return {
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
      Notes: []
    };
  }
}
