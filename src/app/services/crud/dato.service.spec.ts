import { TestBed } from '@angular/core/testing';

import { DatoService } from './dato.service';

describe('DatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatoService = TestBed.get(DatoService);
    expect(service).toBeTruthy();
  });
});
