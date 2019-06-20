import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlertPage } from './new-alert.page';

describe('NewAlertPage', () => {
  let component: NewAlertPage;
  let fixture: ComponentFixture<NewAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
