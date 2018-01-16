import { NumberGenerator } from './../../../shared/generators/number-generator';
import { IManor } from './../models/manor.model';
import { Injectable } from '@angular/core';
import { ICrop, CropType, CropData } from './../models/crop.model';
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

@Injectable()
export class CropGeneratorService {
  private dice: NumberGenerator;

  constructor() {
    this.dice = new NumberGenerator();
  }

  /**
   * Randomly generates crop parcels to determin total acres of
   * each crop type planted, then adds them to the manor.
   * @param manor Manor to add crops to.
   */
  generateCrops(manor: IManor) {
    manor.crops = [];
    const plantedFields: { [key: string]: number } = {};
    let acresPlanted = 0;
    let planting = true;
    while (planting) {
      const cropType = rwc(plantingTable);
      let plantedParcel = this.dice.rollTotal(6, 3);
      if (manor.clearedAcres - acresPlanted < plantedParcel) {
        plantedParcel = manor.clearedAcres - acresPlanted;
        planting = false;
      }
      acresPlanted += plantedParcel;
      // Add it to the planted fields total
      if (plantedFields[cropType] > 0) {
        plantedFields[cropType] += plantedParcel;
      } else {
        plantedFields[cropType] = plantedParcel;
      }
    }
    for (const k in plantedFields) {
      if (plantedFields[k]) {
        this.addCrop(manor, CropType[k], plantedFields[k]);
      }
    }
  }

  /**
   * Adds a cropType to Manor for acres value provided and calculates
   * Yield, Labor and Kind.
   * @param manor Manor to add crops to.
   * @param cropType Crop type to add.
   * @param acres Number of acres of crop to add.
   */
  addCrop(manor: IManor, cropType: CropType, acres: number) {
    // find drop and add to it or create a new entry.
    const crop = this.newCrop();
    crop.name = cropType as string;
    crop.acres = acres;
    crop.yield = parseFloat(
      (manor.fiefIndex * manor.landQuality * manor.weatherIndex * 1).toFixed(2)
    );
    crop.labor = CropData[cropType].labor * crop.acres;
    manor.crops.push(crop);
  }

  newCrop(): ICrop {
    return {
      name: 'New Crop',
      yield: 0,
      acres: 0,
      labor: 0
    };
  }
}
