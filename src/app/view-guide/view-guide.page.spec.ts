import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuidePage } from './view-guide.page';

describe('ViewGuidePage', () => {
  let component: ViewGuidePage;
  let fixture: ComponentFixture<ViewGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
