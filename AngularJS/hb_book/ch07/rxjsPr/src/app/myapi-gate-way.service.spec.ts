import { TestBed } from '@angular/core/testing';

import { MyapiGateWayService } from './myapi-gate-way.service';

describe('MyapiGateWayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyapiGateWayService = TestBed.get(MyapiGateWayService);
    expect(service).toBeTruthy();
  });
});
