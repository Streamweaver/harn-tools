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
    console.log('Unit Obligation: ' + this._manor.clearedAcres / 600);
  }
}
