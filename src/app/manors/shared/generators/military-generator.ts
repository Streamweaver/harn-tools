import { NumberGenerator } from '../../../shared/generators/number-generator';
import { IManor } from '../models/imanor.model';
import { ITenant } from '../models/itenant.model';
import * as rwc from 'random-weighted-choice';
import { TenantClass } from './tenant-generator';

export enum Military {
  LF,
  MF,
  SB,
  LB,
  LH,
  MH,
  HH
}

/*
COST Notes from Manor 12
LF = 2pts
MF = 3pts
SB = 4pts
LB = 6pts
LH = 6pts
 */

export class MilitaryGenerator {
  private _manor: IManor;

  constructor(manor: IManor) {
    this._manor = manor;
  }

  assessFeudalObligation() {
    this._manor.feudalObligationHH = this._assessFeudalObligationHF();
    this._manor.feudalObligationLF = this._assessFeudalObligationLF();
  }

  private _assessFeudalObligationHF(): number {
    return (this._manor.grossAcres - this._manor.foAcresPerHH >= 0) ? 1 : 0;
  }

  private _assessFeudalObligationLF(): number {
    const foLeft = this._manor.grossAcres - this._assessFeudalObligationHF() * this._manor.foAcresPerHH;
    return Math.floor(foLeft / this._manor.foAcresPerLF);
  }
}
