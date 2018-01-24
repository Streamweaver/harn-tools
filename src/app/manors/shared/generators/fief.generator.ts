import {NumberGenerator} from '../../../shared/generators/number-generator';
import {Manor} from './../models/manor.model';

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
    if (manor.woods.acresWorked !== 0) {
      return;
    }
    manor.woods.acresWorked = manor.woodlandAcres;
  }

  cropSeedStored(manor: Manor) {
    if (manor.cropSeed.acresPlanned !== 0) {
      return;
    }
    manor.crops.forEach(c => (manor.cropSeed.acresPlanned += c.acres));
  }

  winterFeedStored(manor: Manor) {
    if (manor.winterFeed.acresPlanned !== 0) {
      return;
    }
    let springHerdAcres = 0;
    manor.livestock.forEach(h => (springHerdAcres += h.acres));
    manor.winterFeed.acresPlanned = Math.floor(springHerdAcres / 2);
  }

  fiefMaintenance(manor: Manor) {
    if (manor.fiefMaintenance !== 0) {
      return;
    }
    manor.fiefMaintenance = manor.clearedAcres;
  }

  assart(manor: Manor) {
    if (manor.assart !== 0) {
      return;
    }
    manor.assart = Math.floor(manor.woodlandAcres * 0.02);
  }
}
