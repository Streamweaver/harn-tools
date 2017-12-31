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
  MASON = 'Mason',
  OSTLER = 'Ostler',
  POTTER = 'Potter',
  APOTHECARY = 'Apothecary',
  GLASSWORKER = 'Glassworker',
  WEAPONSMITH = 'Weaponsmith',
  ARMOURER = 'Armourer'
}

const FREEMEN = [TenantClass.CRAFTSMAN, TenantClass.FARMER, TenantClass.YEOMAN];

const CLASSTABLE = [
  {weight: 10, id: TenantClass.CRAFTSMAN},
  {weight: 15, id: TenantClass.FARMER},
  {weight: 35, id: TenantClass.VILLEIN},
  {weight: 20, id: TenantClass.HALFVILLEIN},
  {weight: 10, id: TenantClass.COTTAR},
  {weight: 10, id: TenantClass.SLAVE}
]

export class TenantGenerator {
  private tenant: Itenant;
  private tenantClass: TenantClass;
  private isSlaveState = true;
  private dice = new NumberGenerator();

  constructor() {
    this.isSlaveState = true;
  }

  newTenant(): Itenant {
    const occupation = this._generateTenantClass();
    const size = this._generateTenantSize(occupation);
    const ml = 25 + this.dice.rollTotal(6, 3) * 5;
    const serf_acres = this._generateTenantSerfAcres(occupation)
    const free_acres = this._generateTenantFreeAcres(occupation);
    const labor_days = 0;
    const rent = this._assessRent(occupation, free_acres);
    const fees = 0;
    return {
      occupation: occupation,
      size: size,
      ml: ml,
      serf_acres: serf_acres,
      free_acres: free_acres,
      labor_days: labor_days,
      rent: rent,
      fees: fees,
      note: 'stubb generation'
    };
  }

  toggleSlavery() {
    this.isSlaveState = !this.isSlaveState;
  }

  private _generateTenantClass(): TenantClass {
    let tClass = rwc(CLASSTABLE);
    if (!this.isSlaveState && tClass == TenantClass.SLAVE) {
      tClass = TenantClass.COTTAR;
    }
    return tClass;
  }

  private _generateTenantSize(tc: TenantClass): number {
    let size = this.dice.rollDie(6);
    if (tc === TenantClass.VILLEIN) {
      size = size + 2;
    } else if (tc !== TenantClass.COTTAR) {
      size = size + 1;
    }
    return size;
  }

  private _generateTenantSerfAcres(tc: TenantClass): number {
    switch(tc) {
      case TenantClass.VILLEIN: return  this.dice.rollDie(20) + 20;
      case TenantClass.HALFVILLEIN: return this.dice.rollDie(10) + 10;
      case TenantClass.COTTAR: return this.dice.rollDie(6) - 1;
      default: return 0;
    }
  }

  private _generateTenantFreeAcres(tc: TenantClass): number {
    switch (tc) {
      case TenantClass.CRAFTSMAN: return this.dice.rollDie(6) * 5;
      case TenantClass.FARMER: return this.dice.rollDie(6) * 5;
      case TenantClass.VILLEIN:
        if (this.dice.rollDie(25) % 5 === 0) {
          return this.dice.rollDie(6) * 5;
        };
        return 0;
      default: return 0;
    }
  }

  private _assessRent(tc: TenantClass, free_acres: number): number {
    const base = (tc === TenantClass.SLAVE) ? 0 : 60;
    return (tc === TenantClass.YEOMAN ? base + free_acres : base + 6 * free_acres);
  }

  private _assessFees(tc: TenantClass, acres: number) {

  }

  private isFree(tc: TenantClass) {
    if (FREEMEN.indexOf(tc) > -1 ) {
      return true;
    }
    return false;
  }
}
