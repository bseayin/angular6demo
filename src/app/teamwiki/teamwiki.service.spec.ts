import { TestBed, inject } from '@angular/core/testing';

import { TeamwikiService } from './teamwiki.service';

describe('TeamwikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamwikiService]
    });
  });

  it('should be created', inject([TeamwikiService], (service: TeamwikiService) => {
    expect(service).toBeTruthy();
  }));
});
