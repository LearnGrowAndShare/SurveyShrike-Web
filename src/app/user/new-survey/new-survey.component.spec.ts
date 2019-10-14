import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurveyComponent } from './new-survey.component';

describe('NewSurveyComponent', () => {
  let component: NewSurveyComponent;
  let fixture: ComponentFixture<NewSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurveyComponent ]
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
