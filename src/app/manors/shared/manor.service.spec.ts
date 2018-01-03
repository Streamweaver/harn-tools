import { TestBed, inject } from '@angular/core/testing';

import { ManorService } from './manor.service';

describe('ManorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManorService]
    });
  });

  it('should be created', inject([ManorService], (service: ManorService) => {
    expect(service).toBeTruthy();
  }));
});
