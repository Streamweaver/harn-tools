import { NumberGenerator } from '../../../shared/generators/number-generator';
import { Manor, Topology } from '../models/manor.model';
import { ITenant, Officer, TenantType } from '../models/tenant.model';

export class TenantOfficerGenerator {
  private _dice: NumberGenerator;
  private _manor: Manor;

  constructor() {
    this._dice = new NumberGenerator();
  }

  /**
   * Initiates selection of each of the officer types in the manor.
   * @param {Manor} manor
   */
  electOfficers(manor: Manor) {
    this._manor = manor;
    this._selectSerfOfficer(Officer.Reeve);
    this._selectSerfOfficer(Officer.Woodward);
    this._selectSerfOfficer(Officer.Herder);
    if (this._manor.topology === Topology.Coastal) {
      this._selectSerfOfficer(Officer.FishWarden);
    }
    if (this._manor.topology === Topology.Forest) {
      this._selectSerfOfficer(Officer.ForestWarden);
    }
    this._selectBeadle();
    const glebeChance = this._manor.population.glebeRevenue();
    if (this._dice.rollDie(100) < glebeChance) {
      this._selectGlebe();
    } else {
      this._manor.notes.push('No active Glebe');
    }
  }

  /**
   * Iterates through the serf officer pool to determine which to assign offices.
   * It may further modify the serf officer pool depending on office and topology
   * so you don't end up with things like Fisherman being the Herder.
   * @param {Officer} o
   * @private
   */
  private _selectSerfOfficer(o: Officer) {
    let selected = false;
    let tenants = this._serfOfficerPool();
    if (
      o === Officer.Herder ||
      o === Officer.Beadle ||
      o === Officer.Woodward
    ) {
      tenants = tenants.filter(t => t.occupation !== TenantType.FISHERMAN);
    }
    if (o === Officer.Reeve) {
      tenants = tenants.filter(
        t => t.occupation !== TenantType.FISHERMAN || TenantType.TRAPPER
      );
    }
    if (o === Officer.ForestWarden) {
      tenants = tenants.filter(t => t.occupation === TenantType.TRAPPER);
    }
    if (o === Officer.FishWarden) {
      tenants = tenants.filter(t => t.occupation === TenantType.FISHERMAN);
    }
    do {
      for (const tenant of tenants) {
        if (this._dice.rollDie(100) < 81) {
          selected = this._officeAssigned(o, tenant);
          break;
        }
      }
      tenants = this._serfOfficerPool();
    } while (!selected && tenants.length > 0);
  }

  /**
   * Assigns the office of Beadle from the pool of yeoman, or passes it to a Serf
   * if no yeoman available or selected.
   * @private
   */
  private _selectBeadle() {
    let selected = false;
    let tenants = this._beadlePool();
    do {
      for (const tenant of tenants) {
        if (this._dice.rollDie(100) < 81) {
          selected = this._officeAssigned(Officer.Beadle, tenant);
          break;
        }
      }
      if (!selected) {
        this._selectSerfOfficer(Officer.Beadle);
      }
      tenants = this._beadlePool();
    } while (!selected && tenants.length > 0);
  }

  /**
   * Picks the first tenant that isn't an officer, craftsman or yeoman and assign them
   * as the Glebe, modifying all data as appropriate for the position.
   * @private
   */
  private _selectGlebe() {
    for (const tenant of this._manor.population.tenants) {
      if (
        tenant.craft === null &&
        tenant.military === null &&
        tenant.office === null
      ) {
        tenant.office = Officer.Glebe;
        tenant.occupation = TenantType.PRIEST;
        tenant.labor_days = 0;
        tenant.serf_acres = 0;
        tenant.rent = 0;
        tenant.fees = 0;
        tenant.free_acres = this._dice.rollTotal(6, 2) * 5;
        const glebeRevenue = this._manor.population.glebeRevenue();
        tenant.notes = []; // reset all notes.
        tenant.notes.push('Glebe revenues ' + glebeRevenue + 'd');
        break;
      }
    }
  }

  private _getTenantAcres(): number {
    let tenantAcres = 0;
    for (const tenant of this._manor.population.tenants) {
      if (tenant.office !== Officer.Glebe) {
        tenantAcres += tenant.free_acres + tenant.serf_acres;
      }
    }
    return tenantAcres;
  }

  private _serfOfficerPool(): ITenant[] {
    let tenants = this._manor.population.tenants.filter(
      tenant =>
        tenant.serf_acres > 0 &&
        tenant.office === null &&
        tenant.military === null &&
        tenant.occupation !== TenantType.SLAVE
    );
    tenants = tenants.sort((a, b): number => {
      return a.serf_acres ** 2 * a.ml > b.serf_acres ** 2 * b.ml ? -1 : 1;
    });
    return tenants;
  }

  private _beadlePool(): ITenant[] {
    let tenants = this._manor.population.tenants.filter(
      tenant => tenant.office === null && tenant.military !== null
    );
    tenants = tenants.sort((a, b) => {
      const aTotal = (a.free_acres + a.serf_acres) ** 2 * a.ml;
      const bTotal = (b.free_acres + b.serf_acres) ** 2 * b.ml;
      return aTotal > bTotal ? -1 : 1;
    });
    return tenants;
  }

  /**
   * Attempts to assign the office to the tenant, and returns true if assined.  if the office is already filled
   * for some reason, it returns false
   * @param o Officer position to assign
   * @param tenant Tenant to be assigned office.
   */
  private _officeAssigned(o: Officer, tenant: ITenant): boolean {
    if (tenant.office === null) {
      tenant.office = o as string;
      tenant.notes.push('Labor served as officer.');
      tenant.labor_days = 0;
      return true;
    }
    return false;
  }
}
