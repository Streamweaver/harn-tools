import {HttpClientTestingModule} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {NamesService} from './names.service';

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
