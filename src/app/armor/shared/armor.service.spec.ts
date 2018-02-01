import { TestBed, inject } from '@angular/core/testing';

import { ArmorService } from './armor.service';

describe('ArmorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmorService]
    });
  });

  it('should be created', inject([ArmorService], (service: ArmorService) => {
    expect(service).toBeTruthy();
  }));
});
