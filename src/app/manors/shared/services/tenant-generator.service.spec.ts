import { TestBed, inject } from '@angular/core/testing';

import { TenantGeneratorService } from './tenant-generator.service';

describe('TenantGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TenantGeneratorService]
    });
  });

  it('should be created', inject([TenantGeneratorService], (service: TenantGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
