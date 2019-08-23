import { TestBed } from '@angular/core/testing';

import { CheckListDataService } from './check-list-data.service';

describe('CheckListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckListDataService = TestBed.get(CheckListDataService);
    expect(service).toBeTruthy();
  });
});
