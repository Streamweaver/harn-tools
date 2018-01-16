import { NumberGenerator } from './../../../shared/generators/number-generator';
import { IHouseholdMember } from './../models/housemember.model';
import { Manor } from './../models/manor.model';

/**
 * Determines the number of household nobles based on the effective acres.  Manors held
 * by baliffs should have a lower effective acres as they are not on the level of a real
 * fiefholder.  Numbers extrapolated from table on Manor 17.  Bailiff and family assessed
 * at 2/3rd the 'value' of a fiefholder based on data on Manor 18.
 * NOTE: Min servant count is Nobles + 3, craftsmen count Nobles - 5;
 * @param eAcres Number of effective acres to use for generation - 300 to 600 for bailiffs.
 */
function numberOfHouseholdNobles(eAcres: number): number {
  let size = eAcres / 300 + 1;
  size = size < 5 ? 5 : size;
  return size;
}

export class HouseholdGenerator {
  private _manor: Manor;
  private _dice: NumberGenerator;

  constructor() {
    this._dice = new NumberGenerator();
  }

  generateHousehold(m: Manor) {
    this._manor = m;
    this._manor.population.household = [];
    this._generateFamily();
  }

  private _generateFamily() {
    this._manor.population.household.push(
      this.generateHouseMember('Fiefholder', 3000, 1, null)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Spouse', 2000, 1, 70)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Lady-In-Waiting', 1500, 1, 70)
    );
    const numOffspring = this._dice.rollThresholds(6, 3);
    this._manor.population.household.push(
      this.generateHouseMember('Offspring', 1000, numOffspring, 70)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Chamberlin', 800, 1, 50)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Cook', 500, 1, 50)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Alewife', 400, 1, 50)
    );
    this._manor.population.household.push(
      this.generateHouseMember('Domestics', 300, 3 + numOffspring, 50)
    );
  }

  generateHouseMember(
    title: string,
    each: number,
    count: number,
    loyaltybase: number
  ): IHouseholdMember {
    return {
      title: title,
      ml: this._dice.rollTotal(6, 3) * 5 + 25,
      each: each,
      count: count,
      loyalty:
        loyaltybase !== null ? this._dice.rollTotal(6, 5) + loyaltybase : null
    };
  }
}
