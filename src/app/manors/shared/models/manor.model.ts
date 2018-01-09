import {IPopulation, Population} from './population.model';

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
  static getManor(): IManor {
    return new Manor();
  }
}

export enum Topology {
  Lowland = 'Lowlands',
  Highland = 'Highlands',
  Coastal = 'Coastal',
  Forest = 'Forest',
}

class Manor implements IManor {
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

  constructor() {
    this.name = null;
    this.realm = null;
    this.topology = null;
    this.grossAcres = 2000;
    this.clearedAcres = 1000;
    this.landQuality = 1.0;
    this.population = new Population();
    this.freeRent = 6;
    this.serfLabor = 4;
    this.isSlaveState = false;
    this.foAcresPerHH = 1500;
    this.foAcresPerLF = 600;
    this.Notes = [];
  }
}
