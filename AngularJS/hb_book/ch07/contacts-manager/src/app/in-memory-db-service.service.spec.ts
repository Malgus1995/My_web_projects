import { TestBed } from '@angular/core/testing';

import { InMemoryDbServiceService } from './in-memory-db-service.service';

describe('InMemoryDbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDbServiceService = TestBed.get(InMemoryDbServiceService);
    expect(service).toBeTruthy();
  });
});
