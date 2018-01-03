import { NumberGenerator } from '../../../shared/generators/number-generator';
import { IManor } from '../models/imanor.model';
import { ITenant } from '../models/itenant.model';
import * as rwc from 'random-weighted-choice';
import { TenantClass } from './tenant-generator';

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

export class CraftsmanGenerator {
  private _dice = new NumberGenerator();
  private _manor: IManor;

  constructor(manor: IManor) {
    this._manor = manor;
  }

  assignCraftsmen() {
    for (const tenant of this._manor.tenants) {
      if (tenant.occupation === TenantClass.CRAFTSMAN) {
        tenant.craft = rwc(CRAFTSMANTABLE);
        this.adjustFees(tenant);
      }
    }
  }

  adjustFees(t: ITenant) {
    t.fees = t.fees + CRAFTSMAN_FEES[t.craft];
    t.notes.push('Includes ' + CRAFTSMAN_FEES[t.craft] + ' guild fees');
  }
}
