import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurveyService {
  private readonly url;
  private response = [];
  constructor(private http: HttpClient) { 
    this.url = environment.api;
  }

  postSurvey(response) {
    return this.http.post(this.url + 'Reponse/Create' , response);
  }

  getSurvey(survey) {
    return this.http.get(this.url + 'survey/get/' + survey);
  }
}
