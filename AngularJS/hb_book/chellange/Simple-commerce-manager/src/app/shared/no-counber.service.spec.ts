import { TestBed } from '@angular/core/testing';

import { NoCounberService } from './no-counber.service';

describe('NoCounberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoCounberService = TestBed.get(NoCounberService);
    expect(service).toBeTruthy();
  });
});
