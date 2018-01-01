import { Itenant } from './itenant.model';
import {NumberGenerator } from '../../shared/generators/number-generator';
import * as rwc from 'random-weighted-choice';

enum TenantClass {
  CRAFTSMAN = 'Craftsman', // Guilded Freeman
  FARMER = 'Farmer', // Unguilded Freeman
  YEOMAN = 'Yeoman', // Unguilded Freeman
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

enum CRAFTSMAN {
  MILLER = 'Miller',
  METALSMITH = 'Metalsmith',
  WOODCRAFTER = 'Woodcrafter',
  SALTER = 'Salter',
  HIDEWORDER = 'Hideworker',
  TIMBERWRIGHT = 'Timberwright',
  CHARCOALER = 'Charcoaler',
  SHIPWRIGHT = 'Shipwright',
  INNKEEPER = 'Innkeeper',
  OSTLER = 'Ostler',
  POTTER = 'Potter',
  APOTHECARY = 'Apothecary',
  GLASSWORKER = 'Glassworker',
  WEAPONSMITH = 'Weaponsmith',
  ARMOURER = 'Armourer'
}

const CRAFTSMAN_FEES = {
  [CRAFTSMAN.MILLER]: 240,
  [CRAFTSMAN.METALSMITH]: 144,
  [CRAFTSMAN.WOODCRAFTER]: 120,
  [CRAFTSMAN.SALTER]: 120,
  [CRAFTSMAN.HIDEWORDER]: 144,
  [CRAFTSMAN.TIMBERWRIGHT]: 216,
  [CRAFTSMAN.CHARCOALER]: 180,
  [CRAFTSMAN.SHIPWRIGHT]: 144,
  [CRAFTSMAN.INNKEEPER]: 216,
  [CRAFTSMAN.OSTLER]: 180,
  [CRAFTSMAN.POTTER]: 120,
  [CRAFTSMAN.APOTHECARY]: 120,
  [CRAFTSMAN.GLASSWORKER]: 120,
  [CRAFTSMAN.WEAPONSMITH]: 220,
  [CRAFTSMAN.ARMOURER]: 220
};

const CRAFTSMANTABLE = [
  {weight: 25, id: CRAFTSMAN.MILLER},
  {weight: 20, id: CRAFTSMAN.METALSMITH},
  {weight: 15, id: CRAFTSMAN.WOODCRAFTER},
  {weight: 10, id: CRAFTSMAN.SALTER},
  {weight: 5, id: CRAFTSMAN.HIDEWORDER},
  {weight: 5, id: CRAFTSMAN.TIMBERWRIGHT},
  {weight: 5, id: CRAFTSMAN.CHARCOALER},
  {weight: 5, id: CRAFTSMAN.SHIPWRIGHT},
  {weight: 5, id: CRAFTSMAN.INNKEEPER},
  {weight: 2, id: CRAFTSMAN.OSTLER},
  {weight: 2, id: CRAFTSMAN.POTTER},
  {weight: 2, id: CRAFTSMAN.APOTHECARY},
  {weight: 2, id: CRAFTSMAN.GLASSWORKER},
  {weight: 1, id: CRAFTSMAN.WEAPONSMITH},
  {weight: 1, id: CRAFTSMAN.ARMOURER}
];

const FREEMEN = [TenantClass.CRAFTSMAN, TenantClass.FARMER, TenantClass.YEOMAN];

export class TenantGenerator {
  private _tenantClass: TenantClass;
  private _isSlaveState: boolean;
  private _dice = new NumberGenerator();
  private _freeRent: number;
  private _serfLabor: number;

  constructor() {}

  generateTenant(freeRent: number, serfLabor: number, isSlaveState: boolean): Itenant {
    this._freeRent = freeRent;
    this._serfLabor = serfLabor;
    this._isSlaveState = isSlaveState;
    const tenant: Itenant = {
      occupation: null,
      craft: null,
      size: 0,
      ml: 0,
      serf_acres: 0,
      free_acres: 0,
      labor_days: 0,
      rent: 0,
      fees: 0,
      note: ''
    };
    this._generateTenantClass(tenant);
    this._generateTenantCraft(tenant);
    this._generateTenantSize(tenant);
    this._generateML(tenant);
    this._generateTenantSerfAcres(tenant);
    this._generateTenantFreeAcres(tenant);
    this._assessLaborDays(tenant);
    this._assessRent(tenant);
    this._assessFees(tenant);
    return tenant;
  }

  private _generateTenantClass(t: Itenant) {
    let tClass = rwc(CLASSTABLE);
    if (!this._isSlaveState && tClass === TenantClass.SLAVE) {
      tClass = TenantClass.COTTAR;
    }
    t.occupation = tClass;
  }

  private _generateTenantCraft(t: Itenant) {
    t.craft = (t.occupation === TenantClass.CRAFTSMAN) ? t.craft = rwc(CRAFTSMANTABLE) : null;
  }

  private _generateTenantSize(t: Itenant) {
    let size = this._dice.rollDie(6);
    if (t.occupation === TenantClass.VILLEIN) {
      size = size + 2;
    } else if (t.occupation !== TenantClass.COTTAR) {
      size = size + 1;
    }
    t.size = size;
  }

  private _generateML(t: Itenant) {
    t.ml = 25 + this._dice.rollTotal(6, 3) * 5;
  }

  private _generateTenantSerfAcres(t: Itenant) {
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

  private _generateTenantFreeAcres(t: Itenant) {
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

  private _assessRent(t: Itenant) {
    const base = (t.occupation === TenantClass.SLAVE) ? 0 : 60;
    t.rent = (t.occupation === TenantClass.YEOMAN) ? base + t.free_acres : base + 6 * t.free_acres;
  }

  private _assessFees(t: Itenant) {
    t.fees = (t.occupation === TenantClass.SLAVE) ? 0 : 6 + t.free_acres + t.serf_acres;
    if (t.craft) {
      t.fees = t.fees + CRAFTSMAN_FEES[t.craft];
      t.note = 'Includes ' + CRAFTSMAN_FEES[t.craft] + ' guild fee.';
    }
  }

  private _assessLaborDays(t: Itenant) {
    t.labor_days = (t.occupation === TenantClass.SLAVE) ? 200 * t.size : 4 * t.serf_acres;
  }
}
