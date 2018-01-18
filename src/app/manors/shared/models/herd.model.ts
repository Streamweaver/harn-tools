import { CheckResult } from '../../../shared/generators/number-generator';

export class Herd {
  herdType: HerdType;
  acres: number;
  graze: number;
  baseYield: number;
  baseLabor: number;
  checkResult: CheckResult;
  hardiness: number;

  constructor(
    herdType: HerdType,
    graze: number,
    baseYield: number,
    baseLabor: number,
    hardiness: number,
    checkResult: CheckResult
  ) {
    this.herdType = herdType;
    this.acres = 0;
    this.graze = graze;
    this.baseYield = baseYield;
    this.baseLabor = baseLabor;
    this.hardiness = hardiness;
    this.checkResult = checkResult;
  }
}

export class HerdFactory {
  newHerd(ht: HerdType): Herd {
    return new Herd(
      ht,
      HerdData[ht].graze,
      HerdData[ht].baseYield,
      HerdData[ht].baseLabor,
      HerdData[ht].hardiness,
      CheckResult.CF
    );
  }
}

export enum HerdType {
  Oxen = 'Oxen',
  Cows = 'Cows',
  Goats = 'Goats',
  Sheep = 'Sheep',
  Swine = 'Swine',
  Horses = 'Horses' // not really used by have data.
}

export const Livestock = [
  HerdType.Oxen,
  HerdType.Cows,
  HerdType.Goats,
  HerdType.Sheep,
  HerdType.Swine
];

interface HerdDataInterface {
  [key: string]: {
    graze: number,
    baseLabor: number,
    baseYield: number,
    hardiness: number
  };
}

export const HerdData: HerdDataInterface = {
  [HerdType.Oxen]: {
    graze: 0.5,
    baseLabor: 17,
    baseYield: 130,
    hardiness: 0
  },
  [HerdType.Cows]: {
    graze: 0.5,
    baseLabor: 20,
    baseYield: 188,
    hardiness: -5
  },
  [HerdType.Goats]: {
    graze: 2,
    baseLabor: 5,
    baseYield: 40,
    hardiness: 10
  },
  [HerdType.Sheep]: {
    graze: 3,
    baseLabor: 3,
    baseYield: 33,
    hardiness: -10
  },
  [HerdType.Swine]: {
    graze: 10,
    baseLabor: 4,
    baseYield: 15,
    hardiness: 5
  },
  [HerdType.Horses]: {
    graze: 1,
    baseLabor: 4,
    baseYield: 0,
    hardiness: 5
  }
};
