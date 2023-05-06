import { TestBed } from '@angular/core/testing';

import { ServicoBdService } from './servico-bd.service';

describe('ServicoBdService', () => {
  let service: ServicoBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
