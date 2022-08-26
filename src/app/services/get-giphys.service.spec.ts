import { TestBed } from '@angular/core/testing';

import { GetGiphysService } from './get-giphys.service';

describe('GetGiphysService', () => {
  let service: GetGiphysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGiphysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
