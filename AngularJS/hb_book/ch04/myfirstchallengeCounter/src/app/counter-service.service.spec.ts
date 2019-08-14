import { TestBed } from '@angular/core/testing';

import { CounterServiceService } from './counter-service.service';

describe('CounterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterServiceService = TestBed.get(CounterServiceService);
    expect(service).toBeTruthy();
  });
});
