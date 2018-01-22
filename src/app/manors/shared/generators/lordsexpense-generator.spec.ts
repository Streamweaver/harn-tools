import {LordsExpenseGenerator} from './lordsexpense.generator';
import {Manor, ManorFactory} from '../models/manor.model';

describe('Generator: Lords expense', () => {
  let generator: LordsExpenseGenerator;
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
    generator = new LordsExpenseGenerator();
    manor = ManorFactory.getManor();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should instantiate the generator properly', function () {
    expect(generator).toBeTruthy();
  });

  it('should set min political expese only if set to zero', function () {
    generator.politicalExpenses(manor);
    expect(manor.politicalExpenses).toBe(manor.grossAcres);
    manor.grossAcres = 1000000;
    generator.politicalExpenses(manor);
    expect(manor.politicalExpenses).not.toBe(manor.grossAcres);
  });

  it('should tithe ten percent of total income by default if not set', function() {
    manor.totalIncome = 1805;
    generator.tithe(manor);
    expect(manor.tithe).toBe(180);
    manor.totalIncome = 2805;
    generator.tithe(manor);
    expect(manor.tithe).toBe(180);
  });

  it('should set fuedal payments to 3d per gross acre by default', function() {
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).toBe(manor.grossAcres * 3);
    manor.grossAcres = 100000;
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).not.toBe(100000 * 3);
  });

  it('should set feudal payments to 5d per gross acre for scootage', function() {
    manor.policies.isPayingScootage = true;
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).toBe(manor.grossAcres * 5);
    manor.policies.isPayingScootage = false;
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).toBe(manor.grossAcres * 5);
  });

  it('should set feudal payments to 1/3 income for bailiffs', function () {
    manor.policies.isBailiffRun = true;
    manor.totalIncome = 3000;
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).toBe(1000);
    manor.policies.isBailiffRun = false;
    generator.feudalPayments(manor);
    expect(manor.feudalPayments).toBe(1000);
  });

  it('should fund the appropriate labor if under', function () {
    manor.clearedAcres = 1000;
    makeTenants(50); // 250 Demesne acres. 750 total acres. 250 labor days.
    generator.laborHired(manor);
    expect(manor.laborHired).toBe(1750);
    manor.clearedAcres = 5000;
    makeTenants(100);
    generator.laborHired(manor);
    expect(manor.laborHired).toBe(1750);
    manor.laborHired = 0;
    generator.laborHired(manor);
    expect(manor.laborHired).toBe(21250);
  });

  it('should hire no labor if has an excess', function () {
    manor.clearedAcres = 1000;
    makeTenants(5000);
    generator.laborHired(manor);
    expect(manor.laborHired).toBe(0);
  });
});
