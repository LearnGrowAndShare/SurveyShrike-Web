import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [];
  private response = [];
  constructor() { }

  addSurvey(survey) {
    this.data = [];
    this.data.push(survey);
  
  }

  getSurvey(survey) {
    
  }

  getAllSurvey(survey) {

  }


  postSurvey(survey) {

  }

  archiveSurvey(survey) {

  }

  addressServer(survey) {
    this.response = [];
  }
  
}
