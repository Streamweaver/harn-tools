import {NumberGenerator} from '../../../shared/generators/number-generator';
import {IManor} from '../models/manor.model';
import {ITenant} from '../models/tenant.model';
import {Military, MilitaryData} from '../models/military.models';
import {TenantClass} from './tenant-generator';
import * as rwc from 'random-weighted-choice';

export enum Officer {
  Reeve = 'Reeve',
  Woodward = 'Woodward',
  Herder = 'Herder',
  Beadle = 'Beadle',
  Glebe = 'Glebe'
}

export class TenantOfficerGenerator {
  private _dice: NumberGenerator;
  private _manor: IManor;

  constructor() {
    this._dice = new NumberGenerator();
  }

  electOfficers(manor: IManor) {
    this._manor = manor;
    this._selectSerfOfficer(Officer.Reeve);
    this._selectSerfOfficer(Officer.Woodward);
    this._selectSerfOfficer(Officer.Herder);
    this._selectBeadle();
    const glebeChance = this._manor.tenants.length * 5 > 96 ? 96 : this._manor.tenants.length * 5;
    if (this._dice.rollDie(100) < glebeChance) {
      this._selectGlebe();
    } else {
      this._manor.Notes.push('No active Glebe');
    }
  }

  private _selectSerfOfficer(o: Officer) {
    let selected = false;
    let tenants = this._serfOfficerPool();
    do {
      for (const tenant of tenants) {
        if (this._dice.rollDie(100) < 81) {
          selected = this._officeAssigned(o, tenant.id);
          break;
        }
      }
      tenants = this._serfOfficerPool();
    }
    while (!selected && tenants.length > 0);
  }

  private _selectBeadle() {
    let selected = false;
    let tenants = this._beadlePool();
    do {
      for (const tenant of tenants) {
        if (this._dice.rollDie(100) < 81) {
          selected = this._officeAssigned(Officer.Beadle, tenant.id);
          break;
        }
      }
      if (!selected) {
        this._selectSerfOfficer(Officer.Beadle);
      }
      tenants = this._beadlePool();
    }
    while (!selected && tenants.length > 0);
  }

  private _selectGlebe() {
    for (const tenant of this._manor.tenants) {
      if (tenant.craft === null && tenant.military === null && tenant.office === null) {
        tenant.office = Officer.Glebe;
        tenant.occupation = TenantClass.PRIEST;
        tenant.labor_days = 0;
        tenant.serf_acres = 0;
        tenant.rent = 0;
        tenant.fees = 0;
        tenant.free_acres = this._dice.rollTotal(6, 2) * 5;
        const glebeRevenue = this._getTenantAcres() * 5 + tenant.free_acres * 60;
        tenant.notes.push('Glebe revenues ' + glebeRevenue + 'd');
        break;
      }
    }

  }

  private _getTenantAcres(): number {
    let tenantAcres = 0;
    for (const tenant of this._manor.tenants) {
      if (tenant.office !== Officer.Glebe) {
        tenantAcres += tenant.free_acres + tenant.serf_acres;
      }
    }
    return tenantAcres;
  }

  private _serfOfficerPool(): ITenant[] {
    let tenants = this._manor.tenants.filter(tenant =>
      tenant.serf_acres > 0
      && tenant.office === null
      && tenant.military === null
      && tenant.occupation !== TenantClass.SLAVE
    );
    tenants = tenants.sort((a, b): number => {
      return (a.serf_acres ** 2 * a.ml > b.serf_acres ** 2 * b.ml) ? -1 : 1;
    });
    return tenants;
  }

  private _beadlePool(): ITenant[] {
    let tenants = this._manor.tenants.filter(tenant =>
      tenant.office === null && tenant.military !== null
    );
    tenants = tenants.sort((a, b) => {
      const aTotal = (a.free_acres + a.serf_acres) ** 2 * a.ml;
      const bTotal = (b.free_acres + b.serf_acres) ** 2 * b.ml;
      return aTotal > bTotal ? -1 : 1;
      }
    )
    return tenants;
  }

  private _officeAssigned(o: Officer, id: number): boolean {
    for (const tenant of this._manor.tenants) {
      if (tenant.id === id && tenant.office === null) {
        tenant.office = o;
        if (tenant.labor_days > 0) {
          tenant.notes.push('Labor served as officer.');
        }
        tenant.labor_days = 0;
        return true;
      }
    }
    return false;
  }
}
