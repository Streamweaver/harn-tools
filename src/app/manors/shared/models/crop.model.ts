export interface PlantingProfile {
  name: string;
  acres: number;
}

export interface Crop extends PlantingProfile {
  yield: number;
  labor: number;
  kind: number;
}

export interface LivestockInterface extends Crop {
  size: number;
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
