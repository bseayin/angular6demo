import { TestBed, inject } from '@angular/core/testing';

import { DiscussmoduleService } from './discussmodule.service';

describe('DiscussmoduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussmoduleService]
    });
  });

  it('should be created', inject([DiscussmoduleService], (service: DiscussmoduleService) => {
    expect(service).toBeTruthy();
  }));
});
