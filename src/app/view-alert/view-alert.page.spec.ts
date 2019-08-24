import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlertPage } from './view-alert.page';

describe('ViewAlertPage', () => {
  let component: ViewAlertPage;
  let fixture: ComponentFixture<ViewAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
