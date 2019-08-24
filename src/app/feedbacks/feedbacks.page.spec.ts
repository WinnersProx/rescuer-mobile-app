import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksPage } from './feedbacks.page';

describe('FeedbacksPage', () => {
  let component: FeedbacksPage;
  let fixture: ComponentFixture<FeedbacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
