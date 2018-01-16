import { Population } from './population.model';
import {
  ICrop,
  PlantingProfileInterface,
  LivestockInterface
} from './crop.model';
import { NumberGenerator } from '../../../shared/generators/number-generator';
import { AnnualReportInterface } from './annualreport.model';

class Policies {
  baseRent: number;
  freeholderRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  isBailiffRun: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;
  plantingProfile: PlantingProfileInterface[];

  constructor() {
    this.baseRent = 60;
    this.freeholderRent = 6;
    this.serfLabor = 4;
    this.isSlaveState = false;
    this.isBailiffRun = false;
    this.foAcresPerHH = 1200;
    this.foAcresPerLF = 600;
    this.plantingProfile = [];
  }
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
  Forest = 'Forest'
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
  }
};

export class Manor {
  name: string;
  realm: string;
  topology: Topology;
  grossAcres: number;
  woodlandAcres: number;
  clearedAcres: number;
  landQuality: number;
  fiefIndex: number;
  tradeIndex: number;

  policies: Policies;
  population: Population;
  annualReports: AnnualReportInterface[];
  crops: ICrop[];

  Notes: string[];

  private dice: NumberGenerator;

  constructor() {
    this.name = null;
    this.realm = null;
    this.topology = Topology.Lowlands;
    this.grossAcres = 900 + this.dice.rollTotal(6, 3) * 100;
    this.woodlandAcres = Math.floor(
      this.grossAcres * this.dice.rollDie(10 / 100 + 0.05)
    );
    this.clearedAcres = this.grossAcres - this.woodlandAcres;
    this.landQuality = 0.74 + this.dice.rollDie(51) / 100;
    this.setFiefIndex();
    this.tradeIndex = 0.5;

    this.policies = new Policies();
    this.population = new Population();
    this.crops = [];

    this.Notes = [];

    this.dice = new NumberGenerator();
  }

  /**
   * The total Cleared Acres remaining for
   * the fiefholder’s own use. It is equal to Cleared Acres minus Tenant Acres.
   */
  demenseAcres(): number {
    return this.clearedAcres - this.population.tenantAcres();
  }

  /**
   * Sets manor fief index randomly.
   *
   * An index ranging from 0.75 to 1.25 which reflects the quality of capital assets
   * on the fief, such as barns, granaries, roads, bridges, ditches, canals, and duck
   * ponds. It also reflects quality of livestock, seed stocks, etc. FI is generated
   * on the Fief Index table or can be set by the GM within the range given allowing
   * for the effects of war, floods, etc.
   */
  setFiefIndex() {
    this.fiefIndex = parseFloat(
      (this.dice.rollTotal(6, 2) * 0.05 + 0.65).toFixed(2)
    );
  }
}
