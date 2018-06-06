import { TestBed, inject } from '@angular/core/testing';

import { TeamWikiService } from './teamwiki.service';

describe('TeamwikiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamWikiService]
    });
  });

  it('should be created', inject([TeamWikiService], (service: TeamWikiService) => {
    expect(service).toBeTruthy();
  }));
});
