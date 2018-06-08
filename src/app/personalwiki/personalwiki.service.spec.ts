import { TestBed, inject } from '@angular/core/testing';

import { PersonalwikiService } from './personalwiki.service';

describe('PersonalwikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalwikiService]
    });
  });

  it('should be created', inject([PersonalwikiService], (service: PersonalwikiService) => {
    expect(service).toBeTruthy();
  }));
});
