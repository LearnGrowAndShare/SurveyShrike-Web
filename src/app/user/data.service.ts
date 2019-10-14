import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly url;
  private response = [];
  constructor(private http: HttpClient) { 
    this.url = environment.api;
  }

  addSurvey(survey) {
    return this.http.post(this.url + "survey/create", survey)
  }

  getSurvey(survey) {
    return this.http.get(this.url + 'survey/getsummary/' + survey);
  }

  getAllSurvey() {
    return this.http.get(this.url + "survey/getall").pipe((map((x: any) => x.surveys)))
  }


  postSurvey(survey) {

  }

  archiveSurvey(survey) {
    return this.http.delete(this.url + 'survey/delete/' + survey);
  }

  addressServer(survey) {

  }
  
}
