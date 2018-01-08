import {NumberGenerator} from '../../../shared/generators/number-generator';
import {Military} from '../models/military.models';
import {IManor, ManorFactory} from '../models/manor.model';
import {TenantClass} from './tenant-generator';
import {Officer, TenantOfficerGenerator} from './tenant-officer.generator';

describe('Generator: Tenant Officers', () => {
  let generator: TenantOfficerGenerator;
  let manor: IManor;
  let dice: NumberGenerator;

  function makeTenants(n: number, tc: TenantClass) {
    for (let i = 0; i < n; i++) {
      manor.tenants.push({
        id: manor.tenants.length,
        occupation: tc,
        craft: null,
        military: null,
        office: null,
        size: 0,
        ml: dice.rollTotal(6, 4) + 70,
        serf_acres: 0,
        free_acres: 0,
        labor_days: 0,
        rent: 0,
        fees: 0,
        notes: []
      });
    }
  }

  function populateVillage() {
    makeTenants(5, TenantClass.COTTAR);
    makeTenants(5, TenantClass.HALFVILLEIN);
    makeTenants(5, TenantClass.SLAVE);
    makeTenants(5, TenantClass.VILLEIN);
    makeTenants(5, TenantClass.CRAFTSMAN);
    makeTenants(5, TenantClass.FARMER);
    for (const tenant of manor.tenants) {
      if (tenant.occupation === TenantClass.COTTAR || tenant.occupation === TenantClass.HALFVILLEIN || tenant.occupation === TenantClass.VILLEIN) {
        tenant.serf_acres = dice.rollTotal(6, 4) * 5;
        tenant.labor_days = tenant.serf_acres * 5;
        tenant.fees = 60;
        tenant.rent = 60;
      }
      if (tenant.occupation === TenantClass.CRAFTSMAN || tenant.occupation === TenantClass.FARMER) {
        tenant.free_acres = dice.rollTotal(6, 4) * 5;
        tenant.fees = 60;
        tenant.rent = 60;
        if (dice.rollDie(100) < 51 && tenant.occupation === TenantClass.FARMER) {
          tenant.military = Military.LF;
        }
      }
    }
  }

  beforeEach(() => {
    manor = ManorFactory.getManor();
    generator = new TenantOfficerGenerator();
    dice = new NumberGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function () {
    expect(generator).toBeTruthy();
  });

  it('should assign Reeve properly', function () {
    populateVillage();
    generator.electOfficers(manor);
    let reeveCount = 0;
    for (const tenant of manor.tenants) {
      if (tenant.office === Officer.Reeve) {
        reeveCount++;
      }
    }
    expect(reeveCount).toBe(1);
  });

  it('should assign Woodward properly', function () {
    populateVillage();
    generator.electOfficers(manor);
    let officerCount = 0;
    for (const tenant of manor.tenants) {
      if (tenant.office === Officer.Woodward) {
        officerCount++;
        expect(tenant.labor_days).toBe(0);
      }
    }
    expect(officerCount).toBe(1);
  });

  it('should assign Herder properly', function () {
    populateVillage();
    generator.electOfficers(manor);
    let officerCount = 0;
    for (const tenant of manor.tenants) {
      if (tenant.office === Officer.Herder) {
        officerCount++;
        expect(tenant.labor_days).toBe(0);
      }
    }
    expect(officerCount).toBe(1);
  });

  it('should assign Beadle properly', function () {
    populateVillage();
    generator.electOfficers(manor);
    let officerCount = 0;
    for (const tenant of manor.tenants) {
      if (tenant.office === Officer.Beadle) {
        officerCount++;
        expect(tenant.labor_days).toBe(0);
      }
    }
    expect(officerCount).toBe(1);
  });

  it('should NOT assign an office to a craftsman', function () {
    populateVillage();
    generator.electOfficers(manor);
    for (const tenant of manor.tenants) {
      if (tenant.occupation === TenantClass.CRAFTSMAN) {
        expect(tenant.office).toBeNull();
      }
    }
  });

  it('should assign a Glebe poperly', function () {
    populateVillage();
    generator.electOfficers(manor);
    for (const tenant of manor.tenants) {
      if (tenant.occupation === TenantClass.PRIEST) {
        expect(tenant.military).toBeNull();
        expect(tenant.craft).toBeNull();
        expect(tenant.office).toBe(Officer.Glebe);
        expect(tenant.serf_acres).toBe(0);
        expect(tenant.free_acres > 9 && tenant.free_acres < 61).toBeTruthy();
        expect(tenant.fees).toBe(0);
        expect(tenant.rent).toBe(0);
      }
    }
  });
});
