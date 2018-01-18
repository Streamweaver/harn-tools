import { Officer } from './../models/tenant.model';
import { checkSkill } from './../../shared/utilities';
import { NumberGenerator } from '../../../shared/generators/number-generator';
import { CropType, CropTypes, CropFactory } from '../models/crop.model';
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
  initCrops(manor: Manor) {
    for (const cropType of CropTypes) {
      this.addParcel(manor, cropType, 0);
    }
  }

  /**
   * Checks if a particular cropType exists in the crops array.
   * @param {Manor} manor
   * @param {CropType} cropType
   * @returns {boolean}
   */
  cropExists(manor: Manor, cropType: CropType): boolean {
    for (const crop of manor.crops) {
      if (crop.cropType === cropType) {
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
    let planting = acresPlanted < targetAcres;
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
    this.reeveCheck(manor);
  }

  /**
   * Generates a check result by the reeve for a given crop.
   * @param manor
   */
  reeveCheck(manor: Manor) {
    let ml = 0;
    for (const tenant of manor.population.tenants) {
      if (tenant.office === Officer.Reeve) {
        ml = tenant.ml;
      }
    }
    for (const crop of manor.crops) {
      crop.checkResult = checkSkill(ml + crop.hardiness);
    }
  }

  /**
   * Adds acres of cropType to manor, creating cropType if it does not exist.
   * @param manor
   * @param cropType
   * @param acres
   */
  addParcel(manor: Manor, cropType: CropType, acres: number) {
    if (!this.cropExists(manor, cropType)) {
      const crop = this.cf.newCrop(cropType);
      crop.acres = acres;
      manor.crops.push(crop);
      return;
    }
    for (const crop of manor.crops) {
      if (crop.cropType === cropType) {
        crop.acres += acres;
      }
    }
  }
}
