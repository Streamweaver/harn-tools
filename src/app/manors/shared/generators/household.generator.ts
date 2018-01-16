import { NumberGenerator } from './../../../shared/generators/number-generator';
import { HouseholdMember, Noble, Servant, Stable } from './../models/housemember.model';
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
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  generateHousehold(manor: Manor) {
    this.generateBaseHousehold(manor);
    this.generateExtraServants(manor);
  }

  private generateBaseHousehold(manor: Manor) {
    if (manor.population.household.length > 0) {
      return; // don't generate if members exist.
    }
    this.addHouseMember(
      manor,
      this.generateHouseMember(Noble.Fiefholder, 3000, 1, null)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Noble.Spouse, 2000, 1, 70)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Noble.LadyInWaiting, 1500, 1, 70)
    );
    const numOffspring = this.dice.rollThresholds(6, 3);
    this.addHouseMember(
      manor,
      this.generateHouseMember(Noble.Offspring, 1000, numOffspring, 70)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Servant.Chamberlain, 800, 1, 50)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Servant.Cook, 500, 1, 50)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Servant.Alewife, 400, 1, 50)
    );
    this.addHouseMember(
      manor,
      this.generateHouseMember(Servant.Domestic, 300, 3 + numOffspring, 50)
    );
  }

  private generateStables(manor: Manor) {}

  private generateCraftsmen(manor: Manor) {}

  private generateExtraServants (manor: Manor) {

  }

  addHouseMember(manor: Manor, member: HouseholdMember) {
    if (member.count !== 0) {
      manor.population.household.push(member);
    }
  }

  generateHouseMember(
    title: string,
    each: number,
    count: number,
    loyaltybase: number
  ): HouseholdMember {
    return {
      title: title,
      ml: this.dice.rollTotal(6, 3) * 5 + 25,
      each: each,
      count: count,
      loyalty:
        loyaltybase !== null ? this.dice.rollTotal(6, 5) + loyaltybase : null
    };
  }
}
