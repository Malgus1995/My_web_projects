import { TestBed } from '@angular/core/testing';

import { SpecialServiceService } from './special-service.service';

describe('SpecialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialServiceService = TestBed.get(SpecialServiceService);
    expect(service).toBeTruthy();
  });
});
