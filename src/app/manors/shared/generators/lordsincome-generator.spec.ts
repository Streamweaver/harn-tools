import {Manor, ManorFactory} from '../models/manor.model';
import {LordsIncomeGenerator} from './lordsincome.generator';
import {Officer} from '../models/tenant.model';
import { CheckResult } from '../../../shared/generators/number-generator';

describe('Generator: Lords income', () => {
  let generator: LordsIncomeGenerator;
  let manor: Manor;

  function makeTenants(n: number) {
    for (let i = 0; i < n; i++) {
      manor.population.tenants.push({
        occupation: 'TEST TENANT',
        craft: null,
        military: null,
        office: null,
        size: 0,
        ml: 70,
        serf_acres: 10,
        free_acres: 5,
        labor_days: 5,
        rent: 0,
        fees: 0,
        notes: []
      });
    }
  }

  beforeEach(() => {
    generator = new LordsIncomeGenerator();
    manor = ManorFactory.getManor();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should instantiate the generator properly', function () {
    expect(generator).toBeTruthy();
  });

  it('should generate default taxes only if set to zero', function () {
    manor.tradeIndex = 1.0;
    for (let i = 0; i < 1000; i++) {
      manor.taxIncome = 0;
      generator.taxes(manor);
      expect(manor.taxIncome).toBeLessThanOrEqual(4320);
      expect(manor.taxIncome).toBeGreaterThanOrEqual(720);
    }
    manor.tradeIndex = 0;
    generator.taxes(manor);
    expect(manor.taxIncome).not.toBe(0);
  });

  it('should assign amercements and generate beadle skill check only if not set to zero', function () {
    makeTenants(99);
    manor.population.tenants.push({
      occupation: 'BEADLE',
      craft: null,
      military: null,
      office: Officer.Beadle,
      size: 0,
      ml: 50,
      serf_acres: 10,
      free_acres: 5,
      labor_days: 5,
      rent: 0,
      fees: 0,
      notes: []
    });
    let notCF = false;
    for (let i = 0; i < 10000; i++) {
      manor.amercements.amount = 0;
      generator.amercements(manor);
      if (manor.amercements.beadleCheck !== CheckResult.CF) {
        notCF = true;  // At least one non CF in 1000 I would think!
      }
      expect(manor.amercements.amount).toBeLessThanOrEqual(570); // w CF check.
      expect(manor.amercements.amount).toBeGreaterThanOrEqual(80);
    }
    expect(notCF).toBeTruthy();
  });
});
