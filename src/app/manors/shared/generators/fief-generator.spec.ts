import {CropFactory, CropType} from '../models/crop.model';
import {HerdFactory, HerdType} from '../models/herd.model';
import {Manor, ManorFactory} from '../models/manor.model';
import {FiefGenerator} from './fief.generator';

describe('Generator: Fief', () => {
  let generator: FiefGenerator;
  let manor: Manor;
  let cropFactory: CropFactory;
  let herdFactory: HerdFactory;

  function addCrop(ct: CropType, acres: number) {
    const crop = cropFactory.newCrop(ct);
    crop.acres = acres;
    manor.crops.push(crop);
  }

  function addHerd(ht: HerdType, acres: number) {
    const herd = herdFactory.newHerd(ht);
    herd.acres = acres;
    manor.livestock.push(herd);
  }

  beforeEach(() => {
    manor = ManorFactory.getManor();
    generator = new FiefGenerator();
    cropFactory = new CropFactory();
    herdFactory = new HerdFactory();
  });

  afterEach(() => {
    herdFactory = null;
    cropFactory = null;
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function () {
    expect(generator).toBeTruthy();
  });

  it('should default to all woodland acres worked', function () {
    manor.woodlandAcres = 5000;
    generator.woodAcresWorked(manor);
    expect(manor.woods.acresWorked).toBe(5000);
    manor.woods.acresWorked = 10;
    generator.woodAcresWorked(manor);
    expect(manor.woods.acresWorked).toBe(10);
  });

  it('should default to all crop seed for all acres', function () {
    addCrop(CropType.Fruit, 100);
    addCrop(CropType.Hay, 300);
    addCrop(CropType.Rye, 200);
    generator.cropSeedStored(manor);
    expect(manor.cropSeed.acresPlanned).toBe(600);
    addCrop(CropType.Vegetables, 500);
    generator.cropSeedStored(manor);
    expect(manor.cropSeed.acresPlanned).toBe(600);
  });

  it('should default to winter feed for all acres', function () {
    addHerd(HerdType.Oxen, 200);
    addHerd(HerdType.Sheep, 500);
    generator.winterFeedStored(manor);
    expect(manor.winterFeed.acresPlanned).toBe(700);
    addHerd(HerdType.Goats, 1000);
    generator.winterFeedStored(manor);
    expect(manor.winterFeed.acresPlanned).toBe(700);
  });

  it('should default to standard fief maintinance', function () {
    generator.fiefMaintenance(manor);
    expect(manor.fiefMaintenance).toBe(manor.clearedAcres);
    const old_acres = manor.clearedAcres;
    manor.clearedAcres = 100;
    generator.fiefMaintenance(manor);
    expect(manor.fiefMaintenance).toBe(old_acres);
  });

  it('should assign assart to maintain current settings', function () {
    const expected = Math.floor(manor.woodlandAcres * 0.02);
    generator.assart(manor);
    expect(manor.assart).toBe(expected);
    manor.woodlandAcres = 10000;
    generator.assart(manor);
    expect(manor.assart).toBe(expected);
  });
});
