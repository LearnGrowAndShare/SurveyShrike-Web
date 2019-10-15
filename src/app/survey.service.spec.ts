import { TestBed } from '@angular/core/testing';

import { SurveyService } from './survey.service';
import { HttpClientModule } from '@angular/common/http';

describe('SurveyService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [SurveyService], imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: SurveyService = TestBed.get(SurveyService);
    expect(service).toBeTruthy();
  });
});
