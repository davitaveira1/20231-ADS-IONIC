import { TestBed } from '@angular/core/testing';

import { VetorObjetosService } from './vetor-objetos.service';

describe('VetorObjetosService', () => {
  let service: VetorObjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetorObjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
