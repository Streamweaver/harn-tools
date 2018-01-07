import * as rwc from 'random-weighted-choice';
import {IManor, Topology} from '../models/imanor.model';
import {ITenant} from '../models/itenant.model';
import {TenantClass} from './tenant-generator';

export enum Craftsman {
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
  Armourer = 'Armourer',
  GMDetermine = 'GM Determine'
}

export const craftsmanFees = {
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
  [Craftsman.Armourer]: 220,
  [Craftsman.GMDetermine]: 0
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
  private _manor: IManor;

  constructor() {}

  assignCraftsmen(manor: IManor) {
    this._manor = manor;
    let craft: Craftsman;
    for (const tenant of this._manor.tenants) {
      if (tenant.occupation === TenantClass.CRAFTSMAN && tenant.craft === null) {
        craft = this.getCraft();
        if (!this._exists(craft)) {
          tenant.craft = craft;
        } else {
          tenant.craft = this._firstOpenCraft();
        }
        this._adjustFees(tenant);
      }
    }
    this._noteMissing();
  }

  private getCraft(): Craftsman {
    let craft;
    do {
      craft = rwc(craftsmanTable);
    }
    while (!this._validCraftForManor(craft));
    return craft;
  }

  private _validCraftForManor(craft: string): boolean {
    return  !(this._manor.topology === Topology.Coastal) && craft === Craftsman.Shipwright ? false : true;
  }

  private _exists(craft: string): boolean {
    for (const tenant of this._manor.tenants) {
      if (tenant.craft === craft) {
        return true;
      }
    }
    return false;
  }

  private _firstOpenCraft(): string {
    for (const item in Craftsman) {
      if (!Number(item)) {
        if (!this._exists(item) && this._validCraftForManor(item)) {
          return Craftsman[item];
        }
      }
    }
    return Craftsman.GMDetermine;
  }

  private _adjustFees(t: ITenant) {
    t.fees = t.fees + craftsmanFees[t.craft];
    if (t.craft === Craftsman.GMDetermine) {
      t.notes.push('Determine craft and reassess fees');
    } else {
      t.notes.push('Includes ' + craftsmanFees[t.craft] + ' guild fees');
    }
  }

  private _noteMissing() {
    if (!this._exists(Craftsman.Miller)) {
      this._manor.Notes.push('No Miller!');
    }
    if (!this._exists(Craftsman.Metalsmith)) {
      this._manor.Notes.push('No Metalsmith!');
    }
    if (!this._exists(Craftsman.Woodcrafter)) {
      this._manor.Notes.push('No Woodcrafter!');
    }
  }
}
