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
  woodlandAcres: number;
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
  Lowlands = 'Lowlands',
  Highlands = 'Highlands',
  Coastal = 'Coastal',
  Forest = 'Forest',
}

export const TopologyEffects = {
  [Topology.Lowlands]: {
    woods: 10,
    crops: 45,
    pasture: 45
  },
  [Topology.Highlands]: {
    woods: 20,
    crops: 30,
    pasture: 50
  },
  [Topology.Coastal]: {
    woods: 10,
    crops: 40,
    pasture: 50
  },
  [Topology.Forest]: {
    woods: 50,
    crops: 25,
    pasture: 25
  },
};

export class Manor implements IManor {
  name: string;
  realm: string;
  topology: Topology;
  grossAcres: number;
  woodlandAcres: number;
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
    this.woodlandAcres = 1000;
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
