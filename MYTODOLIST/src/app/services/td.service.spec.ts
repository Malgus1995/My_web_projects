import { TestBed } from '@angular/core/testing';

import { TdService } from './td.service';

describe('TdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TdService = TestBed.get(TdService);
    expect(service).toBeTruthy();
  });
});
