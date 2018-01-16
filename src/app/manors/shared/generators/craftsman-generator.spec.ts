import { Manor, ManorFactory, Topology } from '../models/manor.model';
import { CraftsmanGenerator } from './craftsman-generator';
import { TenantType } from '../models/tenant.model';
import { Craftsman, craftsmanFees } from '../models/tenant.model';

xdescribe('Generator: Craftsman', () => {
  let generator: CraftsmanGenerator;
  let manor: Manor;

  function makeTenants(n: number, tc: TenantType) {
    for (let i = 0; i < n; i++) {
      manor.population.tenants.push({
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

  it('should properly instantiate the generator', function() {
    expect(generator).toBeTruthy();
  });

  it('should have no unassigned craftsmen', function() {
    makeTenants(10, TenantType.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.population.tenants) {
      expect(tenant.craft).not.toBeNull();
    }
  });

  it('should not assign a craft to non-craftsmen', function() {
    makeTenants(10, TenantType.VILLEIN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation === TenantType.VILLEIN) {
        expect(tenant.craft).toBeNull();
      }
    }
  });

  it('should not assign shipwright to non-coastal manors', function() {
    manor.topology = Topology.Lowlands;
    makeTenants(15, TenantType.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.population.tenants) {
      expect(tenant.craft).not.toBe(Craftsman.Shipwright);
    }
  });

  it('should assign shipwright to coastal manors', function() {
    manor.topology = Topology.Coastal;
    makeTenants(15, TenantType.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let shipwrightCount = 0;
    for (const tenant of manor.population.tenants) {
      shipwrightCount += tenant.craft === Craftsman.Shipwright ? 1 : 0;
    }
    expect(shipwrightCount).toBe(1);
  });

  it('should NOT assign GM Determine craftsman if under 15', function() {
    makeTenants(14, TenantType.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let gmdCount = 0;
    for (const tenant of manor.population.tenants) {
      gmdCount += tenant.craft === Craftsman.GMDetermine ? 1 : 0;
    }
    expect(gmdCount).toBe(0);
  });

  it('should assign crafts only once and then all become GM Determine', function() {
    makeTenants(150, TenantType.CRAFTSMAN);
    generator.assignCraftsmen(manor);
    let gmdCount = 0;
    for (const tenant of manor.population.tenants) {
      gmdCount += tenant.craft === Craftsman.GMDetermine ? 1 : 0;
    }
    expect(gmdCount).toBe(136);
  });

  it('should assess appropriate fees', function() {
    makeTenants(10, TenantType.CRAFTSMAN);
    makeTenants(30, TenantType.VILLEIN);
    generator.assignCraftsmen(manor);
    for (const tenant of manor.population.tenants) {
      if (tenant.occupation !== TenantType.CRAFTSMAN) {
        expect(tenant.fees).toBe(0);
      }
      if (tenant.occupation === TenantType.CRAFTSMAN) {
        expect(tenant.fees).toBe(craftsmanFees[tenant.craft]);
      }
    }
  });

  it('should NOT reassign existing crafts', function() {
    makeTenants(10, TenantType.CRAFTSMAN);
    for (const tenant of manor.population.tenants) {
      tenant.craft = Craftsman.Metalsmith;
    }
    generator.assignCraftsmen(manor);
    for (const tenant of manor.population.tenants) {
      expect(tenant.craft).toBe(Craftsman.Metalsmith);
    }
  });

  it('should add notes for missing critical craftsmen', function() {
    makeTenants(10, TenantType.CRAFTSMAN);
    for (const tenant of manor.population.tenants) {
      tenant.craft = Craftsman.Armourer;
    }
    generator.assignCraftsmen(manor);
    expect(manor.notes.length).toBe(3);
  });
});
