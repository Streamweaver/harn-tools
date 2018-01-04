import { NumberGenerator } from '../../../shared/generators/number-generator';
import { IManor } from '../models/imanor.model';
import { ITenant } from '../models/itenant.model';
import * as rwc from 'random-weighted-choice';
import { TenantClass } from './tenant-generator';

enum Craftsman {
  Miller = 'Miller',
  Metalsmith = 'Metalsmith',
  Woodcrafter = 'Woodcrafter',
  Salter = 'Salter',
  Hideworker = 'Hideworker',
  Timberwright = 'Timberwright',
  Charcoaler = 'Charcoaler',
  Shipwright = 'Shipwright',
  Innkeeper = 'Innkeeper',
  Ostler = 'Ostler',
  Potter = 'Potter',
  Apothecary = 'Apothecary',
  Glassworker = 'Glassworker',
  Weaponsmith = 'Weaponsmith',
  Armourer = 'Armourer'
}

const craftsmanFees = {
  [Craftsman.Miller]: 240,
  [Craftsman.Metalsmith]: 144,
  [Craftsman.Woodcrafter]: 120,
  [Craftsman.Salter]: 120,
  [Craftsman.Hideworker]: 144,
  [Craftsman.Timberwright]: 216,
  [Craftsman.Charcoaler]: 180,
  [Craftsman.Shipwright]: 144,
  [Craftsman.Innkeeper]: 216,
  [Craftsman.Ostler]: 180,
  [Craftsman.Potter]: 120,
  [Craftsman.Apothecary]: 120,
  [Craftsman.Glassworker]: 120,
  [Craftsman.Weaponsmith]: 220,
  [Craftsman.Armourer]: 220
};

const craftsmanTable = [
  {weight: 25, id: Craftsman.Miller},
  {weight: 20, id: Craftsman.Metalsmith},
  {weight: 15, id: Craftsman.Woodcrafter},
  {weight: 10, id: Craftsman.Salter},
  {weight: 5, id: Craftsman.Hideworker},
  {weight: 5, id: Craftsman.Timberwright},
  {weight: 5, id: Craftsman.Charcoaler},
  {weight: 5, id: Craftsman.Shipwright},
  {weight: 5, id: Craftsman.Innkeeper},
  {weight: 2, id: Craftsman.Ostler},
  {weight: 2, id: Craftsman.Potter},
  {weight: 2, id: Craftsman.Apothecary},
  {weight: 2, id: Craftsman.Glassworker},
  {weight: 1, id: Craftsman.Weaponsmith},
  {weight: 1, id: Craftsman.Armourer}
];

export class CraftsmanGenerator {
  private _dice = new NumberGenerator();
  private _manor: IManor;

  constructor(manor: IManor) {
    this._manor = manor;
  }

  assignCraftsmen() {
  let craft: Craftsman;
    for (const tenant of this._manor.tenants) {
      if (tenant.occupation === TenantClass.CRAFTSMAN) {
        craft = this.getCraft();
        if (!this._exists(craft)) {
          tenant.craft = craft;
        } else {
          tenant.craft = this._firstOpenCraft();
        }
        this._adjustFees(tenant);
      }
    }
  }

  private getCraft(): Craftsman {
    let craft = rwc(craftsmanTable);
    while (this._allowedIfShipwright(craft)) {
      craft = rwc(craftsmanTable);
    }
    return craft;
  }

  private _exists(craft: string): boolean {
    for (const tenant of this._manor.tenants) {
      if (tenant.craft === craft) { return true; }
    }
    return false;
  }

  private _firstOpenCraft(): string {
    for (const item in Craftsman) {
      if (!Number(item)) {
        if (!this._exists(item) && this._allowedIfShipwright(item)) {
          return item;
        }
      }
    }
    return this.getCraft();
  }

  private _allowedIfShipwright(craft: string): boolean {
    return (this._manor.isCoastal && craft === Craftsman[Craftsman.Shipwright]);
  }



  private _adjustFees(t: ITenant) {
    t.fees = t.fees + craftsmanFees[t.craft];
    t.notes.push('Includes ' + craftsmanFees[t.craft] + ' guild fees');
  }

}
