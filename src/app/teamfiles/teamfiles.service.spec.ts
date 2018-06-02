import { TestBed, inject } from '@angular/core/testing';

import { TeamfilesService } from './teamfiles.service';

describe('TeamfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamfilesService]
    });
  });

  it('should be created', inject([TeamfilesService], (service: TeamfilesService) => {
    expect(service).toBeTruthy();
  }));
});
