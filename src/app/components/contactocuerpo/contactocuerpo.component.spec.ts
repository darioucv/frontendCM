import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactocuerpoComponent } from './contactocuerpo.component';

describe('ContactocuerpoComponent', () => {
  let component: ContactocuerpoComponent;
  let fixture: ComponentFixture<ContactocuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactocuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactocuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
