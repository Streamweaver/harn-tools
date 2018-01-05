import { NumberGenerator } from '../../../shared/generators/number-generator';
import { IManor } from '../models/imanor.model';
import { ITenant } from '../models/itenant.model';
import * as rwc from 'random-weighted-choice';
import { TenantClass } from './tenant-generator';
import { MilitaryData } from '../models/military.models';
import { Military } from '../models/military.models';

export class YeomanGenerator {
  private _manor: IManor;

  constructor(manor: IManor) {
    this._manor = manor;
  }

  assessFeudalObligation() {
    this._manor.feudalObligationHH = this._heavyHorseObligation();
    this._manor.feudalObligationLF = this._lightFoodObligation();
  }

  private _heavyHorseObligation(): number {
    return (this._manor.grossAcres - this._manor.foAcresPerHH >= 0) ? 1 : 0;
  }

  private _lightFoodObligation(): number {
    const foLeft = this._manor.grossAcres - this._heavyHorseObligation() * this._manor.foAcresPerHH;
    return Math.floor(foLeft / this._manor.foAcresPerLF);
  }

  private _lightFootMuster(): number {
    let pts = 0;
    for (const tenant of this._manor.tenants) {
      if(tenant.military !== null) {
        pts += MilitaryData[tenant.military].pts;
      }
    }
    return pts / MilitaryData[Military.LF].pts;
  }
}
