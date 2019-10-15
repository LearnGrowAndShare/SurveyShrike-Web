import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailsComponent } from './survey-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SurveyDetailsComponent', () => {
  let component: SurveyDetailsComponent;
  let fixture: ComponentFixture<SurveyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDetailsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
