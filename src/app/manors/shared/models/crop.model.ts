import { ICrop } from './crop.model';

export interface ICrop {
  name: string;
  yield: number;
  acres: number;
  labor: number;
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
    dYield: number;
  }[];
}
export const CropData = {
  [CropType.Rye]: {
    hr: 10,
    labor: 5,
    dYield: 45
  },
  [CropType.Barley]: {
    hr: 20,
    labor: 6,
    dYield: 48
  },
  [CropType.Oats]: {
    hr: 15,
    labor: 5,
    dYield: 42
  },
  [CropType.Hay]: {
    hr: 20,
    labor: 5,
    dYield: 40
  },
  [CropType.Vegetables]: {
    hr: 0,
    labor: 8,
    dYield: 80
  },
  [CropType.Flax]: {
    hr: -10,
    labor: 6,
    dYield: 66
  },
  [CropType.Wheat]: {
    hr: -20,
    labor: 6,
    dYield: 72
  },
  [CropType.Fruit]: {
    hr: -30,
    labor: 7,
    dYield: 90
  }
};

export class Crop implements ICrop {
  name: string;
  yield: number;
  acres: number;
  labor: number;
}
