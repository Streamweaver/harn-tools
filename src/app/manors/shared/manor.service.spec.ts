import { TestBed, inject } from '@angular/core/testing';
import { ManorFactory } from './models/imanor.model';

import { ManorService } from './manor.service';

describe('ManorService', () => {
  let service: ManorService;

  beforeEach(() => {
    service = new ManorService();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManorService]
    });
  });

  afterEach(() => {
    service = null;
  });

  it('should be created', inject([ManorService], (service: ManorService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a new manor', inject([ManorService], (service: ManorService) => {
    expect(service.getManor()).toBeTruthy();
  }));

});
