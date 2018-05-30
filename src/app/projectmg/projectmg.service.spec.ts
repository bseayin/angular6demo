import { TestBed, inject } from '@angular/core/testing';

import { ProjectmgService } from './projectmg.service';

describe('ProjectmgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectmgService]
    });
  });

  it('should be created', inject([ProjectmgService], (service: ProjectmgService) => {
    expect(service).toBeTruthy();
  }));
});
