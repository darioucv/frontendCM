import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioscuerpoComponent } from './servicioscuerpo.component';

describe('ServicioscuerpoComponent', () => {
  let component: ServicioscuerpoComponent;
  let fixture: ComponentFixture<ServicioscuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioscuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioscuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
