import {IManor, ManorFactory} from '../models/imanor.model';
import {YeomanGenerator} from './yeoman-generator';
import {TenantClass} from './tenant-generator';

describe('Generator: Yeoman', () => {
  let generator: YeomanGenerator;
  let manor: IManor;

  function makeTenants(n: number, tc: TenantClass) {
    for (let i = 0; i < n; i++) {
      manor.tenants.push({
        occupation: tc,
        craft: null,
        military: null,
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
    generator = new YeomanGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function () {
    expect(generator).toBeTruthy();
  });

  it('should calculate Heavy Horse oblgation properly', function () {
    manor.grossAcres = 5000;
    manor.foAcresPerHH = 10;
    generator.recruitYeoman(manor);
    expect(generator.heavyHorseObligation()).toBe(1);
  });

  it('should calculate Light Foot requirement properly', function () {
    manor.grossAcres = 1500;
    manor.foAcresPerHH = 500;
    manor.foAcresPerLF = 200;
    generator.recruitYeoman(manor);
    expect(generator.lightFoodObligation()).toBe(5);
  });

  it('should add a note about the Feudal Obligation', function () {
    generator.recruitYeoman(manor);
    expect(manor.Notes.length).toBe(1);
  });

  it('should recruit only from Farmers', function () {

  });
});
