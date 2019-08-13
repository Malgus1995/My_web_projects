import { TestBed } from '@angular/core/testing';

import { WelcomeSupportService } from './welcome-support.service';

describe('WelcomeSupportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeSupportService = TestBed.get(WelcomeSupportService);
    expect(service).toBeTruthy();
  });
});
