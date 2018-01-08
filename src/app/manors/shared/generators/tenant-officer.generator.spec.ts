import {IManor, ManorFactory} from './../models/imanor.model';
import {TenantClass} from './tenant-generator';
import {TenantOfficerGenerator} from './tenant-officer.generator';
import {NumberGenerator} from '../../../shared/generators/number-generator';

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
        ml: 0,
        serf_acres: 0,
        free_acres: 0,
        labor_days: 0,
        rent: 0,
        fees: 0,
        notes: []
      });
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

  it('should assign officers properly', function () {
    makeTenants(10, TenantClass.FARMER);
    for (const tenant of manor.tenants) {
      tenant.ml = dice.rollDie(30) + 70;
      tenant.serf_acres = dice.rollTotal(6, 3) * 5;
    }
    generator.electOfficers(manor);
  });
});
