import {NumberGenerator} from '../../../shared/generators/number-generator';
import {IManor} from '../models/imanor.model';
import {ITenant} from '../models/itenant.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantClass} from './tenant-generator';
import * as rwc from 'random-weighted-choice';

enum Officer {
  Reeve = 'Reeve',
  Woodward = 'Woodward',
  Herder = 'Herder',
  Beadle = 'Beadle'
}

export class TenantOfficerGenerator {
  private _dice: NumberGenerator;
  private _manor: IManor;
  private _officerPool: ITenant[];
  private _beadlePool; ITenant[];

  constructor() {
    this._dice = new NumberGenerator();
  }

  electOfficers(manor: IManor) {
    this._manor = manor;
    this.createPools();
  }

  private createPools() {
    const sortedTenants: ITenant[] = this._manor.tenants.sort((a, b) =>
      a.serf_acres * a.ml - b.serf_acres * b.ml
    );
    this._officerPool = sortedTenants.filter(tenant =>
      tenant.serf_acres > 0 && tenant.office === null && tenant.military === null
    );
    this._beadlePool = sortedTenants.filter(tenant =>
      tenant.serf_acres > 0 && tenant.military !== null
    );
  }

  assignOffice(o: Officer, id: number) {
    for (const tenant of this._manor.tenants) {
      if (tenant.id === id) {
        tenant.office = o;
        tenant.labor_days = 0;
      }
    }
  }
}
