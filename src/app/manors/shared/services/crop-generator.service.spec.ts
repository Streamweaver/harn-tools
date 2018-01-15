import { TestBed, inject } from '@angular/core/testing';

import { CropGeneratorService } from './crop-generator.service';

describe('CropGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CropGeneratorService]
    });
  });

  it('should be created', inject([CropGeneratorService], (service: CropGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
