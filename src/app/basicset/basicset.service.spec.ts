import { TestBed, inject } from '@angular/core/testing';

import { BasicsetService } from './basicset.service';

describe('BasicsetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicsetService]
    });
  });

  it('should be created', inject([BasicsetService], (service: BasicsetService) => {
    expect(service).toBeTruthy();
  }));
});
