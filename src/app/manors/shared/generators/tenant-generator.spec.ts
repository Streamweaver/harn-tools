import { TenantGenerator } from './tenant-generator';
import { Manor, ManorFactory, Topology } from '../models/manor.model';
import { TenantType } from '../models/tenant.model';

describe('Generator: Tenant', () => {
  let generator: TenantGenerator;
  let manor: Manor;

  beforeEach(() => {
    manor = ManorFactory.getManor();
    manor.clearedAcres = 10000;
    generator = new TenantGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly initiate the generator', () => {
    generator.generateTenants(manor);
    expect(generator).toBeTruthy();
  });

  it('should generate tenants', () => {
    generator.generateTenants(manor);
    expect(manor.population.tenants.length).toBe(250);
  });

  it('should NOT genereate slaves', () => {
    generator.generateTenants(manor);
    let hasSlave = false;
    for (const tenant of manor.population.tenants) {
      hasSlave = tenant.occupation === TenantType.SLAVE ? true : hasSlave;
    }
    expect(hasSlave).toBe(false);
  });

  it('should genereate slaves', () => {
    manor.isSlaveState = true;
    manor.clearedAcres = 10000;
    generator.generateTenants(manor);
    let hasSlave = false;
    for (const tenant of manor.population.tenants) {
      hasSlave = tenant.occupation === TenantType.SLAVE ? true : hasSlave;
    }
    expect(hasSlave).toBe(true);
  });

  it('should genereate fisherman', () => {
    manor.topology = Topology.Coastal;
    manor.clearedAcres = 10000;
    generator.generateTenants(manor);
    let hasFishermen = false;
    for (const tenant of manor.population.tenants) {
      hasFishermen =
        tenant.occupation === TenantType.FISHERMAN ? true : hasFishermen;
    }
    expect(hasFishermen).toBe(true);
  });

  it('should genereate trappers', () => {
    manor.topology = Topology.Forest;
    manor.clearedAcres = 10000;
    generator.generateTenants(manor);
    let hasTrapper = false;
    for (const tenant of manor.population.tenants) {
      hasTrapper = tenant.occupation === TenantType.TRAPPER ? true : hasTrapper;
    }
    expect(hasTrapper).toBe(true);
  });

  it('should NOT set craft', () => {
    generator.generateTenants(manor);
    for (const tenant of manor.population.tenants) {
      expect(tenant.craft).toBeNull();
    }
  });

  it('should NOT set Military', () => {
    generator.generateTenants(manor);
    let hasMilitary = false;
    for (const tenant of manor.population.tenants) {
      hasMilitary = tenant.military !== null ? true : hasMilitary;
    }
    expect(hasMilitary).toBe(false);
  });

  it('should properly set ML', () => {
    generator.generateTenants(manor);
    for (const tenant of manor.population.tenants) {
      expect(tenant.ml > 39 && tenant.ml < 116).toBeTruthy();
    }
  });

  function checkSerfAcres(o: TenantType, gt: number, lt: number) {
    it('should create proper serf acers for ' + o, () => {
      for (const tenant of manor.population.tenants) {
        if (tenant.occupation === (o as string)) {
          expect(tenant.serf_acres).toBeGreaterThan(gt);
          expect(tenant.serf_acres).toBeLessThan(lt);
        }
      }
    });
  }
  checkSerfAcres(TenantType.VILLEIN, 20, 41);
  checkSerfAcres(TenantType.HALFVILLEIN, 10, 21);
  checkSerfAcres(TenantType.COTTAR, -1, 6);
  checkSerfAcres(TenantType.CRAFTSMAN, -1, 1);
  checkSerfAcres(TenantType.FARMER, -1, 1);

  function checkFreeAcres(o: TenantType, gt: number, lt: number) {
    it('should create proper serf acers for ' + o, () => {
      for (const tenant of manor.population.tenants) {
        if (tenant.occupation === o) {
          expect(tenant.free_acres).toBeGreaterThan(gt);
          expect(tenant.free_acres).toBeLessThan(lt);
        }
      }
    });
  }
  checkFreeAcres(TenantType.VILLEIN, -1, 31);
  checkFreeAcres(TenantType.HALFVILLEIN, -1, 1);
  checkFreeAcres(TenantType.COTTAR, -1, 1);
  checkFreeAcres(TenantType.CRAFTSMAN, 4, 31);
  checkFreeAcres(TenantType.FARMER, 4, 31);

  it('should create free acres for some villeins', () => {
    generator.generateTenants(manor);
    manor.clearedAcres = 100000;
    let totalFree = 0;
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.VILLEIN) {
        totalFree += tenant.free_acres;
      }
    }
    expect(totalFree).toBeGreaterThan(0);
  });

  it('should assess proper fees above 5 for everyone but slaves', () => {
    manor.isSlaveState = true;
    generator.generateTenants(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation !== TenantType.SLAVE) {
        expect(tenant.fees).toBeGreaterThan(5);
      } else {
        expect(tenant.fees).toBe(0);
      }
    }
  });

  it('should assess proper rents above 60 for everyone but slaves', () => {
    manor.isSlaveState = true;
    generator.generateTenants(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation !== TenantType.SLAVE) {
        expect(tenant.rent).toBeGreaterThan(59);
      } else {
        expect(tenant.rent).toBe(0);
      }
    }
  });

  it('should generate labor days for anyone with serf acres properly', () => {
    manor.isSlaveState = true;
    generator.generateTenants(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation !== TenantType.SLAVE) {
        expect(tenant.labor_days).toBe(4 * tenant.serf_acres);
      } else {
        expect(tenant.labor_days).toBe(200 * tenant.size);
      }
    }
  });
});
