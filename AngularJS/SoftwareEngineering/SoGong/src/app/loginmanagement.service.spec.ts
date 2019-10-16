import { TestBed } from '@angular/core/testing';

import { LoginmanagementService } from './loginmanagement.service';

describe('LoginmanagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginmanagementService = TestBed.get(LoginmanagementService);
    expect(service).toBeTruthy();
  });
});
