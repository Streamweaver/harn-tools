import * as rwc from 'random-weighted-choice';
import {NumberGenerator} from '../../../shared/generators/number-generator';
import {Manor} from '../models/manor.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantType} from '../models/tenant.model';

/**
 * Genreal odds of recruitment of each class type
 * @type {{}
 */
const recruitmentTable = [
  {weight: 50, id: Military.LF},
  {weight: 20, id: Military.MF},
  {weight: 20, id: Military.LB},
  {weight: 10, id: Military.LH},
];

/**
 * Free acres recieved (+1d10) for each class type.
 * @type {{Military: number}}
 */
export const MilitaryAcres = {
  [Military.LF]: 10,
  [Military.MF]: 20,
  [Military.LB]: 40,
  [Military.LH]: 60
};

/**
 * Class to determine the feudal obligation of a manor, and walk through the recruitment of
 * Yeoman based on the minimum obligation.
 */
export class YeomanGenerator {
  private _dice: NumberGenerator;
  private _recruitmentPts: number;

  constructor() {
    this._dice = new NumberGenerator();
  }

  /**
   * Handles recruitment for manor passed to it.
   * @param {Manor} manor
   */
  recruitYeoman(manor: Manor) {
    this._recruitmentPts = this.lightFoodObligation(manor) * MilitaryData[Military.LF].pts; // calculate obligation.
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        this._recruitmentPts -= MilitaryData[tenant.military].pts;
      }
    }
    while (this._recruitableFamers(manor) && this._recruitmentPts > 1) {
      const rank = this._getNextValidSoldier();
      this._draftFarmer(manor, rank);
    }
    this._adjustAcres(manor);
    this._adjustRent(manor);
    this._adjustFees(manor);
    this._noteMilitaryService(manor);
    this._noteFeudalObligation(manor);
  }

  /**
   * Gets
   * @returns {Military}
   * @private
   */
  private _getNextValidSoldier(): Military {
    let rank: Military;
    do {
      rank = rwc(recruitmentTable);
    } while (MilitaryData[rank].pts > this._recruitmentPts || this._recruitmentPts < 2);
    this._recruitmentPts -= MilitaryData[rank].pts;
    return rank;
  }

  private _recruitableFamers(manor: Manor): boolean {
    let recruitableFamers = false;
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.FARMER && tenant.military === null) {
        recruitableFamers = true;
      }
    }
    return recruitableFamers;
  }

  private _draftFarmer(manor: Manor, rank: Military) {
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.FARMER && tenant.military === null) {
        tenant.military = rank as string;
        break;
      }
    }
  }

  /**
   * Recalculates tenant free acres based on any military rank.
   * @private
   */
  private _adjustAcres(manor: Manor) {
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        tenant.free_acres = this._dice.rollDie(10) + MilitaryAcres[tenant.military];
      }
    }
  }

  /**
   * Recalculates any tenant fees based on military rules.
   * Doesn't actually differ from Freeman but leaving incase I change them later.
   * @private
   */
  private _adjustFees(manor: Manor) {
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        tenant.fees = 60 + tenant.free_acres;
      }
    }
  }

  /**
   * Recalculates any tenant rent based on military rules.
   * @private
   */
  private _adjustRent(manor: Manor) {
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        tenant.rent = 60 + tenant.free_acres;
      }
    }
  }

  /**
   * Pushes a comment on the Feudal Obligation into the manor Notes.
   * @private
   */
  private _noteFeudalObligation(manor: Manor) {
    manor.notes.push(
      'Feaudal Obligation: ' + this.heavyHorseObligation(manor) + 'HH/' + this.lightFoodObligation(manor) + 'LF'
    );
  }

  private _noteMilitaryService(manor: Manor) {
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        tenant.notes.push('Military service owed.');
      }
    }
  }

  /**
   * Calculates if a manor reaches minimum heavy horse obligation.
   * @returns {number} returns 1 if it meets it and 0 if not.
   */
  heavyHorseObligation(manor: Manor): number {
    return (manor.grossAcres - manor.policies.foAcresPerHH >= 0) ? 1 : 0;
  }

  /**
   * Calculates the LF obligation remaining after any Heavy Horse obligation is met.
   * @returns {number} of LF equivalent troops.
   */
  lightFoodObligation(manor: Manor): number {
    const foLeft = manor.grossAcres - this.heavyHorseObligation(manor) * manor.policies.foAcresPerHH;
    return Math.floor(foLeft / manor.policies.foAcresPerLF);
  }
}
