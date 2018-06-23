import { TestBed, inject } from '@angular/core/testing';

import { StatusdataService } from './indexmodule.service';

describe('IndexmoduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusdataService]
    });
  });

  it('should be created', inject([StatusdataService], (service: StatusdataService) => {
    expect(service).toBeTruthy();
  }));
});
