import { CheckResult } from '../../../shared/generators/number-generator';

export class Crop {
  crop: CropType;
  acres: number;
  baseYield: number;
  yield: number;
  baseLabor: number;
  labor: number;
  checkResult: CheckResult;
  hardiness: number;

  constructor(crop: CropType, acres: number, baseYield: number, baseLabor: number, checkResult: CheckResult, hardiness: number) {
    this.crop = crop;
    this.acres = acres;
    this.baseYield = baseYield;
    this.yield = 0;
    this.baseLabor = baseLabor;
    this.labor = 0;
    this.checkResult = checkResult;
    this.hardiness = hardiness;
  }
}

export class CropFactory {
  newCrop(ct: CropType): Crop {
    return new Crop(ct, 0, CropData[ct].yield, CropData[ct].labor, CheckResult.CF, CropData[ct].hr);
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

  constructor(head: HerdType, size: number, acres: number, yld: number, labor: number, kind: number, checkResult: CheckResult) {
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

interface ICropData {
  [key: string]: {
    hr: number;
    labor: number;
    yield: number;
  };
}
export const CropData: ICropData = {
  [CropType.Rye]: {
    hr: 10,
    labor: 5,
    yield: 45
  },
  [CropType.Barley]: {
    hr: 20,
    labor: 6,
    yield: 48
  },
  [CropType.Oats]: {
    hr: 15,
    labor: 5,
    yield: 42
  },
  [CropType.Hay]: {
    hr: 20,
    labor: 5,
    yield: 40
  },
  [CropType.Vegetables]: {
    hr: 0,
    labor: 8,
    yield: 80
  },
  [CropType.Flax]: {
    hr: -10,
    labor: 6,
    yield: 66
  },
  [CropType.Wheat]: {
    hr: -20,
    labor: 6,
    yield: 72
  },
  [CropType.Fruit]: {
    hr: -30,
    labor: 7,
    yield: 90
  }
};
