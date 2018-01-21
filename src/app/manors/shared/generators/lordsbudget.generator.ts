import { Manor } from './../models/manor.model';
import { NumberGenerator } from '../../../shared/generators/number-generator';
import { Officer } from '../models/tenant.model';
import { checkSkill, beadleResultIndex } from '../utilities';

export class LordsBudgetGenerator {
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  generateBudget(manor: Manor) {
    this.taxes(manor);
    this.amercements(manor);
    this.politicalExpenses(manor);
  }

  taxes(manor: Manor) {
    manor.taxIncome = Math.floor(
      this.dice.rollTotal(6, 3) * 240 * manor.tradeIndex
    );
  }

  amercements(manor: Manor) {
    for (const tenant of manor.population.tenants) {
      if (tenant.office === Officer.Beadle) {
        manor.amercements.beadleCheck = checkSkill(tenant.ml);
      }
    }
    manor.amercements.amount =
      this.dice.rollDie(6) *
      manor.population.tenants.length *
      beadleResultIndex(manor.amercements.beadleCheck);
  }

  politicalExpenses(manor: Manor) {
    manor.politicalExpenses = manor.grossAcres;
  }
}
