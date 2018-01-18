import {NumberGenerator} from '../../../shared/generators/number-generator';
import {CropType, CropTypes, CropFactory} from '../models/crop.model';
import { Manor } from '../models/manor.model';
import * as rwc from 'random-weighted-choice';

const plantingTable = [
  { weight: 10, id: CropType.Rye },
  { weight: 15, id: CropType.Barley },
  { weight: 15, id: CropType.Oats },
  { weight: 25, id: CropType.Hay },
  { weight: 10, id: CropType.Vegetables },
  { weight: 5, id: CropType.Flax },
  { weight: 5, id: CropType.Wheat },
  { weight: 15, id: CropType.Fruit }
];

export class CropGenerator {
  private dice: NumberGenerator;
  private cf: CropFactory;

  constructor() {
    this.dice = new NumberGenerator();
    this.cf = new CropFactory();
  }

  /**
   * Initilizes a manor with all crops in the enum at zero.
   * @param {Manor} manor
   */
  initCrops (manor: Manor) {
    for (const cropType of CropTypes) {
      if (!this.cropExists(manor, cropType)) {
        manor.crops.push(this.cf.newCrop(cropType));
      }
    }
  }

  /**
   * Checks if a particular crop exists in the crops array.
   * @param {Manor} manor
   * @param {CropType} cropType
   * @returns {boolean}
   */
  cropExists(manor: Manor, cropType: CropType): boolean {
    for (const crop of manor.crops) {
      if (crop.crop === cropType) {
        return true;
      }
    }
    return false;
  }

  generateCrops(manor: Manor) {
    this.initCrops(manor);
    let acresPlanted = 0;
    for (const crop of manor.crops) {
      acresPlanted += crop.acres;
    }
    const targetAcres = Math.floor(manor.clearedAcres / 2); // normally only plant half cleared acres in a year.
    let planting = acresPlanted <= targetAcres;
    while (planting) {
      const cropType = rwc(plantingTable);
      let plantedParcel = this.dice.rollTotal(6, 3);
      if (targetAcres - acresPlanted < plantedParcel) {
        plantedParcel = targetAcres - acresPlanted;
        planting = false;
      }
      acresPlanted += plantedParcel; // Add it to the planted fields total
      this.addParcel(manor, cropType, plantedParcel);
    }
  }

  addParcel(manor: Manor, cropType: CropType, acres: number) {
    for (const crop of manor.crops) {
      if (crop.crop === cropType) {
        crop.acres += acres;
      }
    }
  }
}
