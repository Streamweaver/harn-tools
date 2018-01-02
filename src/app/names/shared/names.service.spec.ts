import { TestBed, inject } from '@angular/core/testing';

import { NamesService } from './names.service';

describe('NamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService]
    });
  });

  it('should be created', inject([NamesService], (service: NamesService) => {
    expect(service).toBeTruthy();
  }));
});
