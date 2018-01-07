import {NumberGenerator} from '../../../shared/generators/number-generator';
import {IManor} from '../models/imanor.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantClass} from './tenant-generator';
import * as rwc from 'random-weighted-choice';

enum Officer {
  Reeve,
  Woodward,
  Herder,
  Beadle
}

export class TenantOfficerGenerator {
  private _dice: NumberGenerator;
  private _manor: IManor;

  constructor() {
    this._dice = new NumberGenerator();
  }

  electOfficers(manor: IManor) {
    this._manor = manor;

  }
}
