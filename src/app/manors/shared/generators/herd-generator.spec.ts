import { Livestock, HerdType } from '../models/herd.model';
import { HerdGenerator } from './herd.generator';
import { Manor, ManorFactory } from '../models/manor.model';

describe('Generator: Crops', () => {
  let generator: HerdGenerator;
  let manor: Manor;

  beforeEach(() => {
    manor = ManorFactory.getManor();
    generator = new HerdGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function() {
    expect(generator).toBeTruthy();
  });

  it('should properly init all crops', function() {
    generator.initHerds(manor);
    expect(manor.livestock.length).toBe(Livestock.length);
  });

  it('should properly detect if a cropType is present or missing', function() {
    generator.initHerds(manor);
    Livestock.forEach((ct, idx) => {
      expect(generator.herdExists(manor, ct)).toBeTruthy();
      if (ct === HerdType.Goats) {
        manor.livestock.splice(idx, 1);
      }
    });
    expect(generator.herdExists(manor, HerdType.Goats)).not.toBeTruthy();
  });

  it('should add a parcel properly and create one if it does not exist', function() {
    expect(manor.livestock.length).toBe(0);
    generator.addParcel(manor, HerdType.Goats, 10);
    generator.addParcel(manor, HerdType.Sheep, 50);
    generator.addParcel(manor, HerdType.Goats, 20);
    expect(manor.livestock.length).toBe(2);
    for (const herd of manor.livestock) {
      if (herd.herdType === HerdType.Goats) {
        expect(herd.acres).toBe(30);
      }
    }
  });
});
