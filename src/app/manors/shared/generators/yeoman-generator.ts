import {IManor} from '../models/imanor.model';
import {ITenant} from '../models/itenant.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantClass} from './tenant-generator';

const recruitmentTable = [
  {weight: 50, id: Military.LF},
  {weight: 20, id: Military.MF},
  {weight: 20, id: Military.LB},
  {weight: 10, id: Military.LH},
];

const militaryAcres = {
  [Military.LF]: 10,
  [Military.MF]: 20,
  [Military.LB]: 40,
  [Military.LH]: 60
};

export class YeomanGenerator {
  private _manor: IManor;

  constructor() {
  }

  recruitYeoman(manor: IManor) {
    this._manor = manor;
    this._noteFeudalObligation();
    let recruitedPts = this.lightFoodObligation() * 2;
    while (recruitedPts > 0) {

    }
  }

  private _getNextValidSoldier(): Military {

  }

  private _adjustAcres() {}

  private _adjustFees() {}

  private _adjustRent() {}

  private _noteFeudalObligation() {
    this._manor.Notes.push(
      'Feaudal Obligation: ' + this.heavyHorseObligation() + 'HH/' + this.lightFoodObligation() + 'LF'
    );
  }

  heavyHorseObligation(): number {
    return (this._manor.grossAcres - this._manor.foAcresPerHH >= 0) ? 1 : 0;
  }

  lightFoodObligation(): number {
    const foLeft = this._manor.grossAcres - this.heavyHorseObligation() * this._manor.foAcresPerHH;
    return Math.floor(foLeft / this._manor.foAcresPerLF);
  }

  private _lightFootMuster(): number {
    let pts = 0;
    for (const tenant of this._manor.tenants) {
      if (tenant.military !== null) {
        pts += MilitaryData[tenant.military].pts;
      }
    }
    return pts / MilitaryData[Military.LF].pts;
  }
}
