import { TestBed } from '@angular/core/testing';

import { GeolcationService } from './geolcation.service';

describe('GeolcationService', () => {
  let service: GeolcationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolcationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
