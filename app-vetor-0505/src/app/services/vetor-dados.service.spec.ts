import { TestBed } from '@angular/core/testing';

import { VetorDadosService } from './vetor-dados.service';

describe('VetorDadosService', () => {
  let service: VetorDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetorDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
