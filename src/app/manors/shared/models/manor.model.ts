import {IPopulation, Population} from './population.model';
import {TenantType} from './tenant.model';
import {Officer} from './tenant.model';
import {craftsmanFees} from './tenant.model';
import {Craftsman} from './tenant.model';

export class IManor {
  name: string;
  realm: string;
  topology: Topology;
  grossAcres: number;
  clearedAcres: number;
  landQuality: number;
  population: Population;
  freeRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  Notes: string[];
}

export class ManorFactory {
  static getManor(): Manor {
    return new Manor();
  }
}

export enum Topology {
  Lowland = 'Lowlands',
  Highland = 'Highlands',
  Coastal = 'Coastal',
  Forest = 'Forest',
}

export class Manor implements IManor {
  name: string;
  realm: string;
  topology: Topology;
  grossAcres: number;
  clearedAcres: number;
  landQuality: number;
  population: Population;
  freeRent: number;
  baseRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  Notes: string[];

  constructor() {
    this.name = null;
    this.realm = null;
    this.topology = null;
    this.grossAcres = 2000;
    this.clearedAcres = 1000;
    this.landQuality = 1.0;
    this.population = new Population();
    this.freeRent = 6;
    this.baseRent = 60;
    this.serfLabor = 4;
    this.isSlaveState = false;
    this.foAcresPerHH = 1500;
    this.foAcresPerLF = 600;
    this.Notes = [];
  }
}
