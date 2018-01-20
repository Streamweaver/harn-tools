import { Officer } from './../models/tenant.model';
import { checkSkill } from './../../shared/utilities';
import { NumberGenerator } from '../../../shared/generators/number-generator';
import { HerdType, HerdFactory, Livestock } from '../models/herd.model';
import { Manor } from '../models/manor.model';
import * as rwc from 'random-weighted-choice';

const liveStockTable = [
  { weight: 10, id: HerdType.Cows },
  { weight: 30, id: HerdType.Goats },
  { weight: 40, id: HerdType.Sheep },
  { weight: 20, id: HerdType.Swine }
];

export class HerdGenerator {
  private dice: NumberGenerator;
  private hf: HerdFactory;

  constructor() {
    this.dice = new NumberGenerator();
    this.hf = new HerdFactory();
  }

  /**
   * Initializes herds of each livestock type in the manor at zero.
   * @param {Manor} manor
   */
  initHerds(manor: Manor) {
    for (const herdType of Livestock) {
      this.addParcel(manor, herdType, 0);
    }
  }

  /**
   * Adds oxen at 20% of target acres and returns the number of acres of oxen added
   * @param {Manor} manor
   * @returns {number} Acres of oxen added.
   */
  addOxen(manor: Manor, targetAcres: number): number {
    for (const herd of manor.livestock) {
      if (herd.herdType === HerdType.Oxen && herd.acres > 0) {
        return 0;
      }
    }
    const oxenAcres = Math.floor(targetAcres * 0.2);
    this.addParcel(manor, HerdType.Oxen, oxenAcres);
    return oxenAcres;
  }

  generateHerds(manor: Manor) {
    this.initHerds(manor);
    let acresGrazed = 0;
    for (const herd of manor.livestock) {
      acresGrazed += herd.acres;
    }
    // set target acres to remaining clearedAcres not planted
    let targetAcres = manor.clearedAcres;
    for (const crop of manor.crops) {
      targetAcres -= crop.acres;
    }
    targetAcres -= this.addOxen(manor, targetAcres);
    // We're herding if acresGrazed is less than targetAcres.
    let herding = acresGrazed < targetAcres;
    while (herding) {
      const herdType = rwc(liveStockTable);
      let grazedParcel = this.dice.rollTotal(6, 3);
      // if parcel to be grazed less than target just return remaining acres.
      if (targetAcres - acresGrazed < grazedParcel) {
        grazedParcel = targetAcres - acresGrazed;
        herding = false;
      }
      acresGrazed += grazedParcel;
      this.addParcel(manor, herdType, grazedParcel);
    }
    this.herderCheck(manor);
  }

  herderCheck(manor: Manor) {
    let ml = 0;
    for (const tenant of manor.population.tenants) {
      if (tenant.office === Officer.Herder) {
        ml = tenant.ml;
      }
    }
    for (const herd of manor.livestock) {
      const eml = ml + herd.hardiness;
      herd.checkResult = checkSkill(eml);
    }
  }

  /**
   * Adds acres of herdType to manor, creating herdType if it does not exist.
   * @param {Manor} manor
   * @param {HerdType} herdType
   * @param {number} acres
   */
  addParcel(manor: Manor, herdType: HerdType, acres: number) {
    if (!this.herdExists(manor, herdType)) {
      const herd = this.hf.newHerd(herdType);
      herd.acres = acres;
      manor.livestock.push(herd);
      return;
    }
    for (const herd of manor.livestock) {
      if (herd.herdType === herdType) {
        herd.acres += acres;
      }
    }
  }

  /**
   * Checks if a particular herdType exists in the manor.livestock array.
   * @param {Manor} manor
   * @param {HerdType} herdType
   * @returns {boolean}
   */
  herdExists(manor: Manor, herdType: HerdType): boolean {
    for (const herd of manor.livestock) {
      if (herd.herdType === herdType) {
        return true;
      }
    }
    return false;
  }
}
