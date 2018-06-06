import { TestBed, inject } from '@angular/core/testing';

import { MemberlistService } from './membermg.service';

describe('MembermgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberlistService]
    });
  });

  it('should be created', inject([MemberlistService], (service: MemberlistService) => {
    expect(service).toBeTruthy();
  }));
});
