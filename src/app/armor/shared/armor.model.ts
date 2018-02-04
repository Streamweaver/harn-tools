import {ProtectionValue} from './armor.data';
import {ArmorProtection, ArmorType} from './armor.enum';

export interface CoverageLocation {
  [location: string]: boolean;
}

export interface Armor {
  name: string;
  type: ArmorType;
  baseWeight: number;
  basePrice: number;
  coverage: CoverageLocation;
}

export class ArmorPiece implements Armor {
  name: string;
  type: ArmorType;
  baseWeight: number;
  basePrice: number;
  coverage: CoverageLocation;
  private _quality: number;

  constructor(
    name: string,
    type: ArmorType,
    baseWeight: number,
    basePrice: number,
    coverage: CoverageLocation
  ) {
    this.name = name;
    this.type = type;
    this.baseWeight = baseWeight;
    this.basePrice = basePrice;
    this.coverage = coverage;
    this.quality = 1;
  }

  get quality(): number {
    return this._quality;
  }

  set quality(n: number) {
    this._quality = n;
  }

  increaseQuality() {
    if (this.quality === 1 + this.maxQuality()) {
      return;
    }
    if (this.quality === -1) {
      this.quality = 1;
    } else {
      this.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.quality === -1 * this.maxQuality()) {
      return;
    }
    if (this.quality === 1) {
      this.quality = -1;
    } else {
      this.quality -= 1;
    }
  }

  private maxQuality(): number {
    return Math.max(
      ProtectionValue[this.type][ArmorProtection.Blunt],
      ProtectionValue[this.type][ArmorProtection.Edge],
      ProtectionValue[this.type][ArmorProtection.Pierce],
      ProtectionValue[this.type][ArmorProtection.Fire]
    );
  }

  price(): number {
    let price = this.basePrice * this.quality;
    if (this.quality >= 0 && this.quality <= 1) {
      price = this.basePrice;
    }
    if (this.quality > 1) {
      price = this.basePrice * 2 * (this.quality - 1);
    }
    if (this.quality < 0) {
      price = this.basePrice / (Math.abs(this.quality) + 1);
    }
    return parseFloat(price.toFixed(1));
  }

  protection(aspect: ArmorProtection): number {
    const base = ProtectionValue[this.type][aspect];
    const mod = this.qualityMod();
    const adjusted = mod + base < 0 ? 0 : mod + base;
    return Math.min(adjusted, base * 2);
  }

  private qualityMod(): number {
    if (this.quality === 0) {
      return 0;
    }
    if (this.quality < 0) {
      return this.quality;
    }
    return this.quality - 1;
  }
}
