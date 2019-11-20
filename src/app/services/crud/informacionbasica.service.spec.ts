import { TestBed } from '@angular/core/testing';

import { InformacionbasicaService } from './informacionbasica.service';

describe('InformacionbasicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformacionbasicaService = TestBed.get(InformacionbasicaService);
    expect(service).toBeTruthy();
  });
});
