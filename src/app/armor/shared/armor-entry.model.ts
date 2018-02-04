import {ArmorLocation, ArmorType} from './armor.enum';

export interface Armor {
  name: string;
  type: ArmorType;
  baseWeight: number;
  basePrice: number;
  coverage: { [location: string]: boolean };
}
