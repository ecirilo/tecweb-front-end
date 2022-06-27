import { TestBed } from '@angular/core/testing';

import { BikesServiceService } from './bikes-service.service';

describe('BikesServiceService', () => {
  let service: BikesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
