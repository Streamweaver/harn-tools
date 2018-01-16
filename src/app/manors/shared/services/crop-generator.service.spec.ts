import { ManorFactory, Manor } from './../models/manor.model';
import { TestBed, inject } from '@angular/core/testing';
import { CropGeneratorService } from './crop-generator.service';

describe('CropGeneratorService', () => {
  let manor: Manor;

  beforeEach(() => {
    manor = ManorFactory.getManor();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CropGeneratorService]
    });
  });

  afterEach(() => {
    manor = null;
  });

  it(
    'should be created',
    inject([CropGeneratorService], (service: CropGeneratorService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return a crop',
    inject([CropGeneratorService], (service: CropGeneratorService) => {
      expect(service.newCrop()).toBeTruthy();
    })
  );
});
