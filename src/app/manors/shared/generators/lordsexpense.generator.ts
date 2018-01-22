import { Manor } from './../models/manor.model';
import { NumberGenerator } from '../../../shared/generators/number-generator';

export class LordsExpenseGenerator {
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  generateExpenses(manor: Manor) {
    this.politicalExpenses(manor);
    this.tithe(manor);
    this.laborHired(manor);
    this.feudalPayments(manor);
    this.laborHired(manor);
  }

  /**
   * Sets Political Expenses to the minimum required to keep the manor.  Does nothign if value is above zero.
   * @param {Manor} manor
   */
  politicalExpenses(manor: Manor) {
    if (manor.politicalExpenses !== 0) {
      return;
    }
    manor.politicalExpenses = manor.grossAcres;
  }

  tithe(manor: Manor) {
    if (manor.tithe !== 0) {
      return;
    }
    manor.tithe = Math.floor(manor.totalIncome * 0.1);
  }

  feudalPayments(manor: Manor) {
    if (manor.feudalPayments !== 0) {
      return;
    }
    let payment = 3 * manor.grossAcres;
    if (manor.policies.isPayingScootage) {
      console.log('Paying Scootage!');
      payment = 5 * manor.grossAcres;
    }
    if (manor.policies.isBailiffRun) {
      console.log('Paying as Bailiff');
      payment = Math.floor(manor.totalIncome / 3);
    }
    manor.feudalPayments = payment;
  }

  laborHired(manor: Manor) {
    if (manor.laborHired !== 0) {
      return;
    }
    const lh = manor.demenseAcres() * 8 - manor.population.tenantLaborDays();
    manor.laborHired = lh > 0 ? lh : 0;
  }
}
