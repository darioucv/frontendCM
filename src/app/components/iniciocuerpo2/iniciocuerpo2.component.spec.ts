import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iniciocuerpo2Component } from './iniciocuerpo2.component';

describe('Iniciocuerpo2Component', () => {
  let component: Iniciocuerpo2Component;
  let fixture: ComponentFixture<Iniciocuerpo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iniciocuerpo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iniciocuerpo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
