import { CheckResult } from '../../../shared/generators/number-generator';

export class Crop {
  cropType: CropType;
  acres: number;
  baseYield: number;
  baseLabor: number;
  checkResult: CheckResult;
  hardiness: number;

  constructor(
    cropType: CropType,
    baseYield: number,
    baseLabor: number,
    hardiness: number
  ) {
    this.cropType = cropType;
    this.acres = 0;
    this.baseYield = baseYield;
    this.baseLabor = baseLabor;
    this.checkResult = CheckResult.CF;
    this.hardiness = hardiness;
  }
}

export class CropFactory {
  newCrop(ct: CropType): Crop {
    return new Crop(
      ct,
      CropData[ct].baseYield,
      CropData[ct].baseLabor,
      CropData[ct].hardiness
    );
  }
}

export class Herd {
  head: HerdType;
  size: number;
  acres: number;
  yield: number;
  labor: number;
  kind: number;
  checkResult: CheckResult;

  constructor(
    head: HerdType,
    size: number,
    acres: number,
    yld: number,
    labor: number,
    kind: number,
    checkResult: CheckResult
  ) {
    this.head = head;
    this.size = size;
    this.acres = acres;
    this.yield = yld;
    this.labor = labor;
    this.kind = kind;
    this.checkResult = checkResult;
  }
}

export enum HerdType {
  Oxen = 'Oxen',
  Cows = 'Cows',
  Goats = 'Goats',
  Sheep = 'Sheep',
  Swine = 'Swine'
}

export enum CropType {
  Rye = 'Rye',
  Barley = 'Barley',
  Oats = 'Oats',
  Hay = 'Hay',
  Vegetables = 'Vegetables',
  Flax = 'Flax',
  Wheat = 'Wheat',
  Fruit = 'Fruit'
}

export const CropTypes = [
  CropType.Rye,
  CropType.Barley,
  CropType.Oats,
  CropType.Hay,
  CropType.Vegetables,
  CropType.Flax,
  CropType.Wheat,
  CropType.Fruit
];

interface CropDataInterface {
  [key: string]: {
    hardiness: number;
    baseLabor: number;
    baseYield: number;
  };
}
export const CropData: CropDataInterface = {
  [CropType.Rye]: {
    hardiness: 10,
    baseLabor: 5,
    baseYield: 45
  },
  [CropType.Barley]: {
    hardiness: 20,
    baseLabor: 6,
    baseYield: 48
  },
  [CropType.Oats]: {
    hardiness: 15,
    baseLabor: 5,
    baseYield: 42
  },
  [CropType.Hay]: {
    hardiness: 20,
    baseLabor: 5,
    baseYield: 40
  },
  [CropType.Vegetables]: {
    hardiness: 0,
    baseLabor: 8,
    baseYield: 80
  },
  [CropType.Flax]: {
    hardiness: -10,
    baseLabor: 6,
    baseYield: 66
  },
  [CropType.Wheat]: {
    hardiness: -20,
    baseLabor: 6,
    baseYield: 72
  },
  [CropType.Fruit]: {
    hardiness: -30,
    baseLabor: 7,
    baseYield: 90
  }
};
