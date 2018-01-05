import { TenantGenerator } from './tenant-generator';
import { ManorFixture } from '../models/testing/manor.fixture';
import { IManor } from '../models/imanor.model';
import { TenantClass } from './tenant-generator';

describe('Generator: Tenant', () => {
  let generator: TenantGenerator;
  let manor: IManor;

  beforeEach(() => {
    manor = ManorFixture;
    manor.clearedAcres = 10000;
    generator = new TenantGenerator(manor);
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly create the method', () => {
    expect(generator).toBeTruthy();
  });

  it('should generate tenants', () => {
    generator.generateTenants();
    expect(manor.tenants.length).toBe(250);
  });

  it('should NOT genereate slaves', () => {
    let hasSlave = false;
    for (const tenant of manor.tenants) {
      hasSlave = tenant.occupation === TenantClass.SLAVE ? true : hasSlave;
    }
    expect(hasSlave).toBe(false);
  });

  it('should genereate slaves', () => {
    manor.isSlaveState = true;
    let hasSlave = true;
    for (const tenant of manor.tenants) {
      hasSlave = tenant.occupation === TenantClass.SLAVE ? false : hasSlave;
    }
    expect(hasSlave).toBe(true);
  });

  it('should NOT set craft', () => {
    for (const tenant of manor.tenants) {
      expect(tenant.craft).toBeNull();
    }

  });

  it('should NOT set Military', () => {
    let hasMilitary = false;
    for (const tenant of manor.tenants) {
      hasMilitary = tenant.military !== null ? true : hasMilitary;
    }
    expect(hasMilitary).toBe(false);
  });

  it('should properly set ML', () => {
    for (const tenant of manor.tenants) {
      expect(tenant.ml > 39 && tenant.ml < 116).toBeTruthy();
    }
  });

  function checkSerfAcres(o: TenantClass, gt: number, lt: number) {
    it('should create proper serf acers for ' + o, () => {
      for (const tenant of manor.tenants) {
        if (tenant.occupation === o) {
          expect(tenant.serf_acres).toBeGreaterThan(gt);
          expect(tenant.serf_acres).toBeLessThan(lt);
        }
      }
    });
  }
  checkSerfAcres(TenantClass.VILLEIN, 20, 41);
  checkSerfAcres(TenantClass.HALFVILLEIN, 10, 21);
  checkSerfAcres(TenantClass.COTTAR, -1, 6);
  checkSerfAcres(TenantClass.CRAFTSMAN, -1, 1);
  checkSerfAcres(TenantClass.FARMER, -1, 1);

  function checkFreeAcres(o: TenantClass, gt: number, lt: number) {
    it('should create proper serf acers for ' + o, () => {
      for (const tenant of manor.tenants) {
        if (tenant.occupation === o) {
          expect(tenant.free_acres).toBeGreaterThan(gt);
          expect(tenant.free_acres).toBeLessThan(lt);
        }
      }
    });
  }
  checkFreeAcres(TenantClass.VILLEIN, -1, 31);
  checkFreeAcres(TenantClass.HALFVILLEIN, -1, 1);
  checkFreeAcres(TenantClass.COTTAR, -1, 1);
  checkFreeAcres(TenantClass.CRAFTSMAN, 4, 31);
  checkFreeAcres(TenantClass.FARMER, 4, 31);

  it('should create free acres for some villeins', () => {
      manor.clearedAcres = 100000;
      let totalFree = 0;
      for (const tenant of manor.tenants) {
        if (tenant.occupation === TenantClass.VILLEIN) {
          totalFree += tenant.free_acres;
        }
      }
      expect(totalFree).toBeGreaterThan(0);
  });

  it('should assess proper fees above 5 for everyone but slaves', () => {
    manor.isSlaveState = true;
    for (const tenant of manor.tenants) {
      if(tenant.occupation !== TenantClass.SLAVE) {
        expect(tenant.fees).toBeGreaterThan(5);
      } else {
        expect(tenant.fees).toBe(0);
      }
    }
  });

  it('should assess proper rents above 60 for everyone but slaves', () => {
    manor.isSlaveState = true;
    for (const tenant of manor.tenants) {
      if(tenant.occupation !== TenantClass.SLAVE) {
        expect(tenant.rent).toBeGreaterThan(59);
      } else {
        expect(tenant.rent).toBe(0);
      }
    }
  });

  it('should generate labor days for anyone with serf acres properly', () => {
    manor.isSlaveState = true;
    for (const tenant of manor.tenants) {
      if (tenant.occupation !== TenantClass.SLAVE) {
        expect(tenant.labor_days).toBe(4 * tenant.serf_acres);
      } else {
        expect(tenant.labor_days).toBe(200 * tenant.size);
      }
    }
  });
});
