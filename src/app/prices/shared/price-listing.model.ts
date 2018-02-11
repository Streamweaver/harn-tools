import {ArmorPiece} from '../../armor/shared/armor.model';
import * as _ from 'lodash';

export interface PriceListing {
  id: number;
  name: string;
  weight: number;
  price: number;
  vendor: string;
  notes: string;
}

export class CartItem implements PriceListing {
  id: number;
  name: string;
  weight: number;
  price: number;
  vendor: string;
  notes: string;
  private _quantity: number;

  constructor(init?: Partial<PriceListing>) {
    Object.assign(this, init);
    this._quantity = 1;
  }

  addOne() {
    this._quantity += 1;
  }

  removeOne() {
    this._quantity = this.quantity - 1 < 1 ? 1 : this.quantity - 1;
  }

  get quantity(): number {
    return this._quantity;
  }

  totalPrice(): number {
    if (!this.price) {
      return 0;
    }
    return this.price * this.quantity;
  }

  totalWeight(): number {
    if (!this.weight) {
      return 0;
    }
    return this.weight * this.quantity;
  }

}
