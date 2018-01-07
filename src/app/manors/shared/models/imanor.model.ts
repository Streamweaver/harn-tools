import {ITenant} from './itenant.model';

export class IManor {
  name: string;
  realm: string;
  topology: Topology;
  grossAcres: number;
  clearedAcres: number;
  landQuality: number;
  tenants: ITenant[];
  freeRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  Notes: string[];
}

export class ManorFactory {
  static getManor(): IManor {
    return {
      name: null,
      realm: null,
      topology: null,
      grossAcres: 2000,
      clearedAcres: 1000,
      landQuality: 1.0,
      tenants: [],
      freeRent: 6,
      serfLabor: 4,
      isSlaveState: false,
      foAcresPerHH: 1500,
      foAcresPerLF: 600,
      Notes: []
    };
  }
}

export enum Topology {
  Lowland = 'Lowlands',
  Highland = 'Highlands',
  Coastal = 'Coastal',
  Forest = 'Forest',
}
