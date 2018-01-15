import { IManor, ManorFactory } from '../models/manor.model';
import { MilitaryData } from '../models/military.models';
import { TenantType } from '../models/tenant.model';
import { YeomanGenerator, MilitaryAcres } from './yeoman-generator';

describe('Generator: Yeoman', () => {
  let generator: YeomanGenerator;
  let manor: IManor;

  function makeTenants(n: number, tc: TenantType) {
    for (let i = 0; i < n; i++) {
      manor.population.tenants.push({
        occupation: tc as string,
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
    generator = new YeomanGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function() {
    expect(generator).toBeTruthy();
  });

  it('should calculate Heavy Horse oblgation properly', function() {
    manor.grossAcres = 5000;
    manor.foAcresPerHH = 10;
    generator.recruitYeoman(manor);
    expect(generator.heavyHorseObligation()).toBe(1);
  });

  it('should calculate Light Foot requirement properly', function() {
    manor.grossAcres = 1500;
    manor.foAcresPerHH = 500;
    manor.foAcresPerLF = 200;
    generator.recruitYeoman(manor);
    expect(generator.lightFoodObligation()).toBe(5);
  });

  it('should add a note about the Feudal Obligation', function() {
    generator.recruitYeoman(manor);
    expect(manor.Notes.length).toBe(1);
  });

  it('should NOT recruit non-farmers', function() {
    makeTenants(5, TenantType.FARMER);
    makeTenants(5, TenantType.COTTAR);
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 500;
    generator.recruitYeoman(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.COTTAR) {
        expect(tenant.military).toBeNull();
      }
    }
  });

  it('should recruit no more than the feudal obligation', function() {
    makeTenants(100, TenantType.FARMER);
    manor.grossAcres = 2000;
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 500;
    generator.recruitYeoman(manor);
    let recruitmentPts = 0;
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        recruitmentPts = recruitmentPts + MilitaryData[tenant.military].pts;
      }
    }
    expect(recruitmentPts > 6 && recruitmentPts < 9).toBeTruthy();
  });

  it('should NOT fail if there are no farmers', function() {
    makeTenants(200, TenantType.COTTAR);
    generator.recruitYeoman(manor);
    expect(generator).toBeTruthy();
  });

  it('should generate the proper range of acres for military classes', function() {
    makeTenants(100, TenantType.FARMER);
    manor.grossAcres = 2000;
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 20;
    generator.recruitYeoman(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        const h = MilitaryAcres[tenant.military] + 10;
        const l = MilitaryAcres[tenant.military] + 1;
        expect(tenant.free_acres >= l && tenant.free_acres <= h).toBeTruthy();
      }
    }
  });

  it('should assess correct rent for military classes', function() {
    makeTenants(100, TenantType.FARMER);
    manor.grossAcres = 2000;
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 20;
    generator.recruitYeoman(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        expect(tenant.rent).toBe(tenant.free_acres + 60);
      }
    }
  });

  it('should assess correct fees for military classes', function() {
    makeTenants(100, TenantType.FARMER);
    manor.grossAcres = 2000;
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 20;
    generator.recruitYeoman(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        expect(tenant.fees).toBe(tenant.free_acres + 60);
      }
    }
  });

  it('should add a note to tenant about their military service', function() {
    makeTenants(5, TenantType.FARMER);
    makeTenants(5, TenantType.COTTAR);
    manor.grossAcres = 2000;
    manor.foAcresPerHH = 0;
    manor.foAcresPerLF = 500;
    generator.recruitYeoman(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.military !== null) {
        expect(tenant.notes.length).toBe(1);
      } else {
        expect(tenant.notes.length).toBe(0);
      }
    }
  });
});
