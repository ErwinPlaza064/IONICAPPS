import { TestBed } from '@angular/core/testing';

import { RedireccionamientService } from './redireccionamient.service';

describe('RedireccionamientService', () => {
  let service: RedireccionamientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedireccionamientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
