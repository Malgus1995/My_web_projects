import { TestBed } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';

describe('MySpecialLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySpecialLoggerService = TestBed.get(MySpecialLoggerService);
    expect(service).toBeTruthy();
  });
});
