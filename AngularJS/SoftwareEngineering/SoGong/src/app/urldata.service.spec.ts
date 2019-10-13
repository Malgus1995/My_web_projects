import { TestBed } from '@angular/core/testing';

import { URLDataService } from './urldata.service';

describe('URLDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: URLDataService = TestBed.get(URLDataService);
    expect(service).toBeTruthy();
  });
});
