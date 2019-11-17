import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativepanelComponent } from './administrativepanel.component';

describe('AdministrativepanelComponent', () => {
  let component: AdministrativepanelComponent;
  let fixture: ComponentFixture<AdministrativepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
