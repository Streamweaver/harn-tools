import {NumberGenerator} from '../../../shared/generators/number-generator';
import {Officer} from '../models/tenant.model';
import {beadleResultIndex, checkSkill} from '../utilities';
import {Manor} from './../models/manor.model';

export class LordsIncomeGenerator {
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  generateIncome(manor: Manor) {
    this.taxes(manor);
    this.amercements(manor);
  }

  /**
   * Sets manor taxes to the random value from the book if it is set to 0.  Does nothing if above zero.
   * @param {Manor} manor
   */
  taxes(manor: Manor) {
    if (manor.taxIncome !== 0) {
      return;
    }
    manor.taxIncome = Math.floor(
      this.dice.rollTotal(6, 3) * 240 * manor.tradeIndex
    );
  }

  /**
   * Sets Amercements by the amount from the book including modification by the beadle check.  Does nothing if value
   * is above 0.
   * @param {Manor} manor
   */
  amercements(manor: Manor) {
    if (manor.amercements.amount !== 0) {
      return;
    }
    for (const tenant of manor.population.tenants) {
      if (tenant.office === Officer.Beadle) {
        manor.amercements.beadleCheck = checkSkill(tenant.ml);
      }
    }
    manor.amercements.amount = Math.floor(
      this.dice.rollDie(6) *
      manor.population.tenants.length *
      beadleResultIndex(manor.amercements.beadleCheck));
  }
}
