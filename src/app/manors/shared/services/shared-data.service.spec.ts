import { TestBed, inject } from '@angular/core/testing';

import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataService]
    });
  });

  it('should be created', inject([SharedDataService], (service: SharedDataService) => {
    expect(service).toBeTruthy();
  }));
});
