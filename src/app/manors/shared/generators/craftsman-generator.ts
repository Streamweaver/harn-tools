import * as rwc from 'random-weighted-choice';
import {Manor, Topology} from '../models/manor.model';
import {Craftsman, craftsmanFees, ITenant, TenantType} from '../models/tenant.model';

export const craftsmanTable = [
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

const villageCraftsman = [
  Craftsman.Miller,
  Craftsman.Metalsmith,
  Craftsman.Woodcrafter,
  Craftsman.Salter,
  Craftsman.Hideworker,
  Craftsman.Timberwright,
  Craftsman.Charcoaler,
  Craftsman.Shipwright,
  Craftsman.Innkeeper,
  Craftsman.Ostler,
  Craftsman.Potter,
  Craftsman.Apothecary,
  Craftsman.Glassworker,
  Craftsman.Weaponsmith,
  Craftsman.Armourer
]

export class CraftsmanGenerator {

  constructor() {
  }

  assignCraftsmen(manor: Manor) {
    let craft: Craftsman;
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.CRAFTSMAN && tenant.craft === null) {
        craft = this.getCraft(manor);
        if (!this._exists(manor, craft)) {
          tenant.craft = craft;
        } else {
          tenant.craft = this._firstOpenCraft(manor);
        }
        this._adjustFees(tenant);
      }
    }
    this._noteMissing(manor);
  }

  private getCraft(manor: Manor): Craftsman {
    let craft;
    do {
      craft = rwc(craftsmanTable);
    }
    while (!this._validCraftForManor(manor, craft));
    return craft;
  }

  private _validCraftForManor(manor: Manor, craft: string): boolean {
    const isInlandSailor = manor.topology !== Topology.Coastal && craft === Craftsman.Shipwright;
    return  !isInlandSailor;
  }

  private _exists(manor: Manor, craft: string): boolean {
    for (const tenant of manor.population.tenants) {
      if (tenant.craft === craft) {
        return true;
      }
    }
    return false;
  }

  private _firstOpenCraft(manor: Manor): string {
    for (const craft in villageCraftsman) {
      if (!this._exists(manor, craft) && this._validCraftForManor(manor, craft)) {
        return craft;
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

  private _noteMissing(manor: Manor) {
    if (!this._exists(manor, Craftsman.Miller)) {
      manor.notes.push('No Miller!');
    }
    if (!this._exists(manor, Craftsman.Metalsmith)) {
      manor.notes.push('No Metalsmith!');
    }
    if (!this._exists(manor, Craftsman.Woodcrafter)) {
      manor.notes.push('No Woodcrafter!');
    }
  }
}
