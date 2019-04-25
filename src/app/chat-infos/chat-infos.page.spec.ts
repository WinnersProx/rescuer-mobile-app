import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInfosPage } from './chat-infos.page';

describe('ChatInfosPage', () => {
  let component: ChatInfosPage;
  let fixture: ComponentFixture<ChatInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatInfosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
