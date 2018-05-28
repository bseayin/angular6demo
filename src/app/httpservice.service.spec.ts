import { TestBed, inject } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';

describe('HttpserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpserviceService]
    });
  });

  it('should be created', inject([HttpserviceService], (service: HttpserviceService) => {
    expect(service).toBeTruthy();
  }));
});
