import {ProtectionValue} from './armor.data';

export interface Armor {
  name: string;
  type: string;
  baseWeight: number;
  basePrice: number;
  skull: boolean;
  face: boolean;
  neck: boolean;
  shoulders: boolean;
  upperArms: boolean;
  elbows: boolean;
  forearms: boolean;
  hands: boolean;
  thoraxFront: boolean;
  thoraxBack: boolean;
  abdomenFront: boolean;
  abdomenBack: boolean;
  hips: boolean;
  groin: boolean;
  thighs: boolean;
  knees: boolean;
  calves: boolean;
  feet: boolean;
}

export class ArmorPiece implements Armor {
  name: string;
  type: string;
  baseWeight: number;
  basePrice: number;
  skull: boolean;
  face: boolean;
  neck: boolean;
  shoulders: boolean;
  upperArms: boolean;
  elbows: boolean;
  forearms: boolean;
  hands: boolean;
  thoraxFront: boolean;
  thoraxBack: boolean;
  abdomenFront: boolean;
  abdomenBack: boolean;
  hips: boolean;
  groin: boolean;
  thighs: boolean;
  knees: boolean;
  calves: boolean;
  feet: boolean;
  private _quality: number;

  constructor(init?: Partial<ArmorPiece>) {
    Object.assign(this, init);
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
      ProtectionValue[this.type]['blunt'],
      ProtectionValue[this.type]['edge'],
      ProtectionValue[this.type]['point'],
      ProtectionValue[this.type]['fire']
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

  protection(aspect: string): number {
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
