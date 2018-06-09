import { TestBed, inject } from '@angular/core/testing';

import { PersonalsettingService } from './personalsetting.service';

describe('PersonalsettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalsettingService]
    });
  });

  it('should be created', inject([PersonalsettingService], (service: PersonalsettingService) => {
    expect(service).toBeTruthy();
  }));
});
