import {Manor, ManorFactory} from '../models/manor.model';
import {CropType, CropTypes} from './../models/crop.model';
import {CropGenerator} from './crop.generator';

describe('Generator: Crops', () => {
  let generator: CropGenerator;
  let manor: Manor;

  beforeEach(() => {
    manor = ManorFactory.getManor();
    generator = new CropGenerator();
  });

  afterEach(() => {
    generator = null;
    manor = null;
  });

  it('should properly instantiate the generator', function () {
    expect(generator).toBeTruthy();
  });

  it('should properly init all crops', function () {
    generator.initCrops(manor);
    expect(manor.crops.length).toBe(CropTypes.length);
  });

  it('should properly detect if a cropType is present or missing', function () {
    generator.initCrops(manor);
    CropTypes.forEach((ct, idx) => {
      expect(generator.cropExists(manor, ct)).toBeTruthy();
      if (ct === CropType.Rye) {
        manor.crops.splice(idx, 1);
      }
    });
    expect(generator.cropExists(manor, CropType.Rye)).not.toBeTruthy();
  });

  it('should add a parcel properly and create one if it does not exist', function () {
    expect(manor.crops.length).toBe(0);
    generator.addParcel(manor, CropType.Barley, 10);
    generator.addParcel(manor, CropType.Flax, 50);
    generator.addParcel(manor, CropType.Barley, 20);
    expect(manor.crops.length).toBe(2);
    for (const crop of manor.crops) {
      if (crop.cropType === CropType.Barley) {
        expect(crop.acres).toBe(30);
      }
    }
  });
});
