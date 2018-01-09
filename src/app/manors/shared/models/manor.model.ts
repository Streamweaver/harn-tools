import {IPopulation, Population} from './population.model';
import {TenantClass} from '../generators/tenant-generator';
import {Officer} from '../generators/tenant-officer.generator';
import {craftsmanFees, Craftsman} from '../generators/craftsman-generator';

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

  setTenantFees() {
      for (const t of this.population.tenants) { // TODO check these base amounts.
        t.fees = (t.occupation === TenantClass.SLAVE) ? 0 : 6 + t.free_acres + t.serf_acres; // from tenant gen
        if (t.craft !== null) {
          t.fees += craftsmanFees[t.craft];
        }
        if (t.craft === Craftsman.GMDetermine) { // from craftsman generator
          t.notes.push('Guild fees not set yet'); // TODO find way to make note idempotent
        } else {
          t.notes.push('Guild fees of ' + craftsmanFees[t.craft] + 'd included');
        }
        if (t.military !== null) {
          t.fees = 60 + t.free_acres;
        }
        if(t.office === Officer.Glebe) {
          t.fees = 0;
        }
      }
  }

  setTenantRent() {
    for (const tenant of this.population.tenants) {
      const base = (tenant.occupation === TenantClass.SLAVE) ? 0 : this.baseRent;
      tenant.rent = base + this.freeRent * tenant.free_acres;
      if (tenant.military !== null) {  // Adjust for military.
        tenant.rent = 60 + tenant.free_acres;
      }
      if (tenant.office === Officer.Glebe) { // Glebe's pay no rent.
        tenant.rent = 0;
      }
    }
  }
}
