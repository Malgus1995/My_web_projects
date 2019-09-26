import { TestBed } from '@angular/core/testing';

import { AddRemoveService } from './add-remove.service';

describe('AddRemoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRemoveService = TestBed.get(AddRemoveService);
    expect(service).toBeTruthy();
  });
});
