import { NumberGenerator } from '../../../shared/generators/number-generator';
import { Manor, Topology } from '../models/manor.model';
import { ITenant, TenantType } from '../models/tenant.model';
import * as rwc from 'random-weighted-choice';

const CLASSTABLE = [
  { weight: 10, id: TenantType.CRAFTSMAN },
  { weight: 15, id: TenantType.FARMER },
  { weight: 35, id: TenantType.VILLEIN },
  { weight: 20, id: TenantType.HALFVILLEIN },
  { weight: 10, id: TenantType.COTTAR },
  { weight: 10, id: TenantType.SLAVE }
];

export class TenantGenerator {
  private _dice = new NumberGenerator();

  constructor() {}

  /**
   * Begins the generation process for manor passed.
   *
   * @param {Manor} manor
   */
  generateTenants(manor: Manor) {
    const tenantCapacity = manor.clearedAcres / 40 * manor.landQuality;
    const tenantsNeeded = tenantCapacity - manor.population.tenants.length;
    for (let i = 0; i < tenantsNeeded; i++) {
      manor.population.tenants.push(this._generateTenant(manor));
    }
  }

  /**
   * Yields a single tenant for addition to the manor.
   *
   * @returns {ITenant}
   * @private
   */
  private _generateTenant(manor: Manor): ITenant {
    const tenant: ITenant = {
      occupation: null,
      craft: null,
      military: null,
      office: null,
      size: 0,
      ml: 0,
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0,
      notes: []
    };
    this._generateTenantClass(manor, tenant);
    this._generateTenantSize(tenant);
    this._generateML(tenant);
    this._generateTenantSerfAcres(tenant);
    this._generateTenantFreeAcres(tenant);
    this._assessLaborDays(tenant);
    this._assignSpecialTrade(manor, tenant);
    this._assessRent(tenant);
    this._assessFees(tenant);
    return tenant;
  }

  private _generateTenantClass(manor: Manor, t: ITenant) {
    let tClass = rwc(CLASSTABLE);
    if (!manor.policies.isSlaveState && tClass === TenantType.SLAVE) {
      tClass = TenantType.COTTAR;
    }
    t.occupation = tClass;
  }

  private _generateTenantSize(t: ITenant) {
    let size = this._dice.rollDie(6);
    if (t.occupation === TenantType.VILLEIN) {
      size = size + 2;
    } else if (t.occupation !== TenantType.COTTAR) {
      size = size + 1;
    }
    t.size = size;
  }

  private _generateML(t: ITenant) {
    t.ml = 25 + this._dice.rollTotal(6, 3) * 5;
  }

  private _generateTenantSerfAcres(t: ITenant) {
    switch (t.occupation) {
      case TenantType.VILLEIN:
        t.serf_acres = this._dice.rollDie(20) + 20;
        break;
      case TenantType.HALFVILLEIN:
        t.serf_acres = this._dice.rollDie(10) + 10;
        break;
      case TenantType.COTTAR:
        t.serf_acres = this._dice.rollDie(6) - 1;
        break;
      default:
        t.serf_acres = 0;
        break;
    }
  }

  private _generateTenantFreeAcres(t: ITenant) {
    switch (t.occupation) {
      case TenantType.CRAFTSMAN:
        t.free_acres = this._dice.rollDie(6) * 5;
        break;
      case TenantType.FARMER:
        t.free_acres = this._dice.rollDie(6) * 5;
        break;
      case TenantType.VILLEIN:
        t.free_acres =
          this._dice.rollDie(25) % 5 === 0 ? this._dice.rollDie(6) * 5 : 0;
        break;
      default:
        t.free_acres = 0;
    }
  }

  /**
   * Assigns fisherman and trappers in coastal and woodland manors.
   *
   * @param {ITenant} t
   * @private
   */
  private _assignSpecialTrade(manor: Manor, t: ITenant): void {
    if (
      t.occupation === TenantType.CRAFTSMAN ||
      t.occupation === TenantType.PRIEST
    ) {
      return;
    }
    if (t.free_acres + t.serf_acres > 39) {
      return;
    }
    const ta = t.free_acres + t.serf_acres;
    const chanceMod = ta >= 20 ? Math.floor((ta - 15) / 5) : 0;
    if (this._dice.rollTotal(6, 3) - chanceMod > 10) {
      if (manor.topology === Topology.Coastal) {
        t.occupation = TenantType.FISHERMAN;
      } else if (manor.topology === Topology.Forest) {
        t.occupation = TenantType.TRAPPER;
      }
    }
  }

  private _assessRent(t: ITenant) {
    const base = t.occupation === TenantType.SLAVE ? 0 : 60;
    t.rent = base + 6 * t.free_acres;
  }

  private _assessFees(t: ITenant) {
    if (t.occupation === TenantType.SLAVE) {
      t.fees = 0;
      return;
    }
    t.fees = 6 + t.free_acres + t.serf_acres;
    if (t.occupation === TenantType.FISHERMAN) {
      const activityRate = 40 - t.serf_acres - t.free_acres;
      t.fees += 24;
      t.notes.push('Fishing fee 24d added, ' + activityRate + '(2d6)d/yr');
    } else if (t.occupation === TenantType.TRAPPER) {
      const activityRate = 40 - t.serf_acres - t.free_acres;
      t.fees += 24;
      t.notes.push('Trapper fee 24d added, ' + activityRate + '(2d6)d/yr');
    }
  }

  private _assessLaborDays(t: ITenant) {
    t.labor_days =
      t.occupation === TenantType.SLAVE ? 200 * t.size : 4 * t.serf_acres;
  }
}
