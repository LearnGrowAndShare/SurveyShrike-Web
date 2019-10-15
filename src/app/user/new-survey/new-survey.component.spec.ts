import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurveyComponent } from './new-survey.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalService } from 'src/app/common-component/modal/modal.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewSurveyComponent', () => {
  let component: NewSurveyComponent;
  let fixture: ComponentFixture<NewSurveyComponent>;
  const ModalServiceSpy = {
    showModal: jasmine.createSpy('showModal')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurveyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: ModalService, useValue: ModalServiceSpy}],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
