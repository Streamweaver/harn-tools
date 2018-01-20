import { Population } from './population.model';
import { Crop } from './crop.model';
import { Herd } from './herd.model';
import {CheckResult, NumberGenerator} from '../../../shared/generators/number-generator';

export interface SectionSummary {
  acres: number;
  labor: number;
  kind: number;
}

export interface TenantSummary extends SectionSummary {
  fees: number;
  rent: number;
}

export class Policies {
  baseRent: number;
  freeholderRent: number;
  serfLabor: number;
  isSlaveState: boolean;
  isBailiffRun: boolean;
  foAcresPerHH: number;
  foAcresPerLF: number;

  constructor() {
    this.baseRent = 60;
    this.freeholderRent = 6;
    this.serfLabor = 4;
    this.isSlaveState = false;
    this.isBailiffRun = true;
    this.foAcresPerHH = 1500;
    this.foAcresPerLF = 600;
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
  year: number;
  topology: Topology;
  grossAcres: number;
  woodlandAcres: number;
  clearedAcres: number;
  landQuality: number;
  fiefIndex: number;
  tradeIndex: number;
  weatherIndex: number;

  policies: Policies;
  population: Population;

  crops: Crop[];
  livestock: Herd[];

  woods: {
    basicYield: number;
    acresWorked: number;
    checkResult: CheckResult
  };
  waste: number;
  winterFeed: {
    acresPlanned: number;
    checkResult: CheckResult;
  };
  fiefMaintenance: number;  // Percent of effort 0 - 200 increments of 20.
  assart: number;


  notes: string[];

  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
    this.name = null;
    this.realm = null;
    this.year = null;
    this.topology = Topology.Lowlands;
    this.grossAcres = 900 + this.dice.rollTotal(6, 3) * 100;
    this.woodlandAcres = Math.floor(
      this.grossAcres * (this.dice.rollDie(10) / 100 + 0.05)
    );
    this.clearedAcres = this.grossAcres - this.woodlandAcres;
    this.landQuality = parseFloat((0.74 + this.dice.rollDie(51) / 100).toFixed(2));
    this.setFiefIndex();
    this.setWeatherIndex();
    this.tradeIndex = 0.5;

    this.policies = new Policies();
    this.population = new Population();
    this.crops = [];

    this.livestock = [];
    this.woods = { basicYield: 18, acresWorked: 0, checkResult: CheckResult.CF};
    this.waste = 0;
    this.winterFeed = {acresPlanned: 0, checkResult: CheckResult.CF};
    this.fiefMaintenance = 0;
    this.assart = 0;

    this.notes = [];
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

  setWeatherIndex() {
    let roll = this.dice.rollTotal(6, 3);
    roll = roll > 10 ? roll - 1 : roll;
    this.weatherIndex = parseFloat(((50 + roll * 5) / 100).toFixed(2));
  }
}
