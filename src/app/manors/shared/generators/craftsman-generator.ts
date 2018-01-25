import * as rwc from 'random-weighted-choice';
import {Manor, Topology, TopologyEffects} from '../models/manor.model';
import {Craftsman, craftsmanFees, ITenant, TenantType} from '../models/tenant.model';

interface WeightedEntry {
  weight: number;
  id: Craftsman;
}

export const defaultCraftsmanTable: WeightedEntry[] = [
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

  constructor() {
  }

  assignCraftsmen(manor: Manor) {
    let craft: Craftsman;
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.CRAFTSMAN && tenant.craft === null) {
        tenant.craft = this.getCraft(manor);
        this._adjustFees(tenant);
      }
    }
    this._noteMissing(manor);
  }

  /**
   * Gets a random craft based on remaining values in the crafting table
   * or returns default GMDetermine craft if all are taken.
   * @param {Manor} manor
   * @returns {Craftsman}
   */
  private getCraft(manor: Manor): Craftsman {
    const craftsmanTable = this.getCrafterTable(manor);
    if (craftsmanTable.length > 1) {
      return rwc(craftsmanTable);
    }
    return this.firstOpenCraft(manor);
  }

  private _exists(manor: Manor, craft: Craftsman): boolean {
    for (const tenant of manor.population.tenants) {
      if (tenant.craft === craft) {
        return true;
      }
    }
    return false;
  }

  firstOpenCraft(manor: Manor): Craftsman {
    const crafters = this.getCrafters(manor);
    if (crafters.length > 0) {
      return crafters[0];
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

  getCrafterTable(manor: Manor): WeightedEntry[] {
    const weightedTable: WeightedEntry[] = [];
    for (const item of defaultCraftsmanTable) {
      if (manor.topology !== Topology.Coastal && item.id === Craftsman.Shipwright) {
        continue; // Don't add shipwright if not a coastal town.
      }
      if (this._exists(manor, item.id)) {
        continue;
      }
      if (item.id === Craftsman.Timberwright) {
        item.weight = Math.floor(manor.woodlandAcres / manor.grossAcres * 50);
      }
      weightedTable.push(item);
    }
    return weightedTable;
  }

  getCrafters(manor: Manor): Craftsman[] {
    const crafters: Craftsman[] = [];
    for (const item of this.getCrafterTable(manor)) {
      crafters.push(item.id);
    }
    return crafters;
  }
}
