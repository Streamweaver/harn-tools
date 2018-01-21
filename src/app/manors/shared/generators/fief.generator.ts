import { Manor } from './../models/manor.model';
import { NumberGenerator } from '../../../shared/generators/number-generator';

export class FiefGenerator {
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  generateFief(manor: Manor) {
    this.woodAcresWorked(manor);
    this.cropSeedStored(manor);
    this.winterFeedStored(manor);
    this.fiefMaintenance(manor);
    this.assart(manor);
  }

  woodAcresWorked(manor: Manor) {
    manor.woods.acresWorked = manor.woodlandAcres;
  }

  cropSeedStored(manor: Manor) {
    manor.crops.forEach(c => (manor.cropSeed.acresPlanned += c.acres));
  }

  winterFeedStored(manor: Manor) {
    manor.livestock.forEach(h => (manor.winterFeed.acresPlanned += h.acres));
  }

  fiefMaintenance(manor: Manor) {
    manor.fiefMaintenance = manor.clearedAcres;
  }

  assart(manor: Manor) {
    manor.assart = Math.floor(manor.woodlandAcres * 0.02);
  }
}
