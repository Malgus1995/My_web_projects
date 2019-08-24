import { TestBed } from '@angular/core/testing';

import { InMemoryUserService } from './in-memory-user.service';

describe('InMemoryUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryUserService = TestBed.get(InMemoryUserService);
    expect(service).toBeTruthy();
  });
});
