import { TestBed } from '@angular/core/testing';

import { NotieceDataService } from './notiece-data.service';

describe('NotieceDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotieceDataService = TestBed.get(NotieceDataService);
    expect(service).toBeTruthy();
  });
});
