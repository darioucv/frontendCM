import { TestBed } from '@angular/core/testing';

import { TiposervicioService } from './tiposervicio.service';

describe('TiposervicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposervicioService = TestBed.get(TiposervicioService);
    expect(service).toBeTruthy();
  });
});
