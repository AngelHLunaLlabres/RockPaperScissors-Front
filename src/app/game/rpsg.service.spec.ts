import { TestBed } from '@angular/core/testing';

import { RpsgService } from './rpsg.service';

describe('RpsgService', () => {
  let service: RpsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
