import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SurveyService } from '../survey.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  const surveyServiceMock = {
    getSurvey: jasmine.createSpy('getSurvey')
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [{provide: SurveyService, userValue: surveyServiceMock}],
      imports: [HttpClientModule, RouterTestingModule]
       
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
