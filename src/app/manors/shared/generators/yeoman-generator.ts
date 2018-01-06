import {IManor} from '../models/imanor.model';
import {ITenant} from '../models/itenant.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantClass} from './tenant-generator';
import * as rwc from 'random-weighted-choice';

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
  private _recruitmentPts: number;

  constructor() {}

  recruitYeoman(manor: IManor) {
    this._manor = manor;
    this._noteFeudalObligation();
    this._recruitmentPts = this.lightFoodObligation() * 2;
    while (this._recruitableFamers() && this._recruitmentPts > 1) {
      const rank = this._getNextValidSoldier();
      this._draftFarmer(rank);
    }
  }

  private _getNextValidSoldier(): Military {
    let rank: Military;
    do {
      rank = rwc(recruitmentTable);
    } while (MilitaryData[rank].pts < this._recruitmentPts)
    this._recruitmentPts = this._recruitmentPts - MilitaryData[rank].pts;
    return rank;
  }

  private _recruitableFamers(): boolean {
    let recruitableFamers = false;
    for (const tenant of this._manor.tenants) {
      if (tenant.occupation === TenantClass.FARMER && tenant.military === null) {
        recruitableFamers = true;
      }
    }
    return recruitableFamers;
  }

  private _draftFarmer(rank: Military) {
    for (const tenant of this._manor.tenants) {
      if (tenant.occupation === TenantClass.FARMER && tenant.military === null) {
        tenant.military = rank;
      }
    }
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
