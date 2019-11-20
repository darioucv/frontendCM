import { TestBed } from '@angular/core/testing';

import { EmpresadatosService } from './empresadatos.service';

describe('EmpresadatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpresadatosService = TestBed.get(EmpresadatosService);
    expect(service).toBeTruthy();
  });
});
