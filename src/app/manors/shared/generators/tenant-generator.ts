import { NumberGenerator } from '../../../shared/generators/number-generator';
import { IManor } from '../models/imanor.model';
import { ITenant } from '../models/itenant.model';
import * as rwc from 'random-weighted-choice';

export enum TenantClass {
  CRAFTSMAN = 'Craftsman', // Guilded Freeman
  FARMER = 'Farmer', // Unguilded Freeman
  VILLEIN = 'Villein', // Serf
  HALFVILLEIN = 'Half-Villein', // Serf
  COTTAR = 'Cottar', // Serf
  SLAVE = 'Slave/Thrall' // Slave
}

const CLASSTABLE = [
  {weight: 10, id: TenantClass.CRAFTSMAN},
  {weight: 15, id: TenantClass.FARMER},
  {weight: 35, id: TenantClass.VILLEIN},
  {weight: 20, id: TenantClass.HALFVILLEIN},
  {weight: 10, id: TenantClass.COTTAR},
  {weight: 10, id: TenantClass.SLAVE}
];

const FREEMEN = [TenantClass.CRAFTSMAN, TenantClass.FARMER];

export class TenantGenerator {
  private _tenantClass: TenantClass;
  private _dice = new NumberGenerator();
  private _manor: IManor;

  constructor(manor: IManor) {
    this._manor = manor;
  }

  generateTenants() {
    const tenantHouseholds = this._manor.clearedAcres / 40 * this._manor.landQuality;
    for (let i = 0; i < tenantHouseholds; i++) {
      this._manor.tenants.push(this._generateTenant());
    }
  }

  private _generateTenant(): ITenant {
    const tenant: ITenant = {
      occupation: null,
      craft: null,
      military: null,
      size: 0,
      ml: 0,
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0,
      notes: []
    };
    this._generateTenantClass(tenant);
    this._generateTenantSize(tenant);
    this._generateML(tenant);
    this._generateTenantSerfAcres(tenant);
    this._generateTenantFreeAcres(tenant);
    this._assessLaborDays(tenant);
    this._assessRent(tenant);
    this._assessFees(tenant);
    return tenant;
  }

  private _generateTenantClass(t: ITenant) {
    let tClass = rwc(CLASSTABLE);
    if (!this._manor.isSlaveState && tClass === TenantClass.SLAVE) {
      tClass = TenantClass.COTTAR;
    }
    t.occupation = tClass;
  }

  private _generateTenantSize(t: ITenant) {
    let size = this._dice.rollDie(6);
    if (t.occupation === TenantClass.VILLEIN) {
      size = size + 2;
    } else if (t.occupation !== TenantClass.COTTAR) {
      size = size + 1;
    }
    t.size = size;
  }

  private _generateML(t: ITenant) {
    t.ml = 25 + this._dice.rollTotal(6, 3) * 5;
  }

  private _generateTenantSerfAcres(t: ITenant) {
    switch (t.occupation) {
      case TenantClass.VILLEIN:
        t.serf_acres =  this._dice.rollDie(20) + 20;
        break;
      case TenantClass.HALFVILLEIN:
        t.serf_acres = this._dice.rollDie(10) + 10;
        break;
      case TenantClass.COTTAR:
        t.serf_acres = this._dice.rollDie(6) - 1;
        break;
      default:
        t.serf_acres = 0;
        break;
    }
  }

  private _generateTenantFreeAcres(t: ITenant) {
    switch (t.occupation) {
      case TenantClass.CRAFTSMAN:
        t.free_acres = this._dice.rollDie(6) * 5;
        break;
      case TenantClass.FARMER:
        t.free_acres = this._dice.rollDie(6) * 5;
        break;
      case TenantClass.VILLEIN:
        t.free_acres = (this._dice.rollDie(25) % 5 === 0) ? this._dice.rollDie(6) * 5 : 0;
        break;
      default:
        t.free_acres = 0;
    }
  }

  private _assessRent(t: ITenant) {
    const base = (t.occupation === TenantClass.SLAVE) ? 0 : 60;
    t.rent = base + 6 * t.free_acres;
  }

  private _assessFees(t: ITenant) {
    t.fees = (t.occupation === TenantClass.SLAVE) ? 0 : 6 + t.free_acres + t.serf_acres;
  }

  private _assessLaborDays(t: ITenant) {
    t.labor_days = (t.occupation === TenantClass.SLAVE) ? 200 * t.size : 4 * t.serf_acres;
  }
}
