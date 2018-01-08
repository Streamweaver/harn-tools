import {IManor, ManorFactory, Topology} from '../models/manor.model';
import {Craftsman, craftsmanFees, CraftsmanGenerator} from './craftsman-generator';
import {TenantClass} from './tenant-generator';

describe('Generator: Craftsman', () => {
  let generator: CraftsmanGenerator;
  let manor: IManor;

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
    generator = new CraftsmanGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function () {
    expect(generator).toBeTruthy();
  });

  it('should have no unassigned craftsmen', function () {
    makeTenants(10, TenantClass.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.tenants) {
      expect(tenant.craft).not.toBeNull();
    }
  });

  it('should not assign a craft to non-craftsmen', function () {
    makeTenants(10, TenantClass.VILLEIN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.tenants) {
      if (tenant.occupation === TenantClass.VILLEIN) {
        expect(tenant.craft).toBeNull();
      }
    }
  });

  it('should not assign shipwright to non-coastal manors', function () {
    manor.topology = Topology.Lowland;
    makeTenants(15, TenantClass.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.tenants) {
      expect(tenant.craft).not.toBe(Craftsman.Shipwright);
    }
  });

  it('should assign shipwright to coastal manors', function () {
    manor.topology = Topology.Coastal;
    makeTenants(15, TenantClass.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let shipwrightCount = 0;
    for (const tenant of manor.tenants) {
      shipwrightCount += tenant.craft === Craftsman.Shipwright ? 1 : 0;
    }
    expect(shipwrightCount).toBe(1);
  });

  it('should NOT assign GM Determine craftsman if under 15', function () {
    makeTenants(14, TenantClass.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let gmdCount = 0;
    for (const tenant of manor.tenants) {
      gmdCount += tenant.craft === Craftsman.GMDetermine ? 1 : 0;
    }
    expect(gmdCount).toBe(0);
  });

  it('should assign crafts only once and then all become GM Determine', function () {
    makeTenants(150, TenantClass.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let gmdCount = 0;
    for (const tenant of manor.tenants) {
      gmdCount += tenant.craft === Craftsman.GMDetermine ? 1 : 0;
    }
    expect(gmdCount).toBe(136);
  });

  it('should assess appropriate fees', function () {
    makeTenants(10, TenantClass.CRAFTSMAN);
    makeTenants(30, TenantClass.VILLEIN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.tenants) {
      if (tenant.occupation !== TenantClass.CRAFTSMAN) {
        expect(tenant.fees).toBe(0);
      }
      if (tenant.occupation === TenantClass.CRAFTSMAN) {
        expect(tenant.fees).toBe(craftsmanFees[tenant.craft]);
      }
    }
  });

  it('should NOT reassign existing crafts', function () {
    makeTenants(10, TenantClass.CRAFTSMAN);
    for (const tenant of manor.tenants) {
      tenant.craft = Craftsman.Metalsmith;
    }
    generator.assignCraftsmen(manor);
    for (const tenant of manor.tenants) {
      expect(tenant.craft).toBe(Craftsman.Metalsmith);
    }
  });

  it('should add notes for missing critical craftsmen', function () {
    makeTenants(10, TenantClass.CRAFTSMAN);
    for (const tenant of manor.tenants) {
      tenant.craft = Craftsman.Armourer;
    }
    generator.assignCraftsmen(manor);
    expect(manor.Notes.length).toBe(3);
  });
});
