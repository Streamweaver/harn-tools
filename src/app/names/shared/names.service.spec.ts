import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NamesService } from './names.service';

describe('NamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NamesService]
    });
  });

  it('should be created', inject([NamesService], (service: NamesService) => {
    expect(service).toBeTruthy();
  }));
});
