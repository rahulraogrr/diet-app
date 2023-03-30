import { TestBed } from '@angular/core/testing';

import { MemberMasterService } from './member-master.service';

describe('MemberMasterService', () => {
  let service: MemberMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
