import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciocuerpoComponent } from './iniciocuerpo.component';

describe('IniciocuerpoComponent', () => {
  let component: IniciocuerpoComponent;
  let fixture: ComponentFixture<IniciocuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciocuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciocuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
