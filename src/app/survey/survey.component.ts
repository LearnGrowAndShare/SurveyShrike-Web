import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'], 
  providers: [SurveyService]
})
export class SurveyComponent  {
  data;
  posted = false;
  formTypes = {0: 'Input' , 
  1: 'Multiline' ,
  2: 'Dropdown', 
  3: "Select",
  4: "Radio",
  5: "File"
 }
  constructor(private dataService: SurveyService, private spinner: NgxSpinnerService,  private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
        this.spinner.show();
          this.dataService.getSurvey(params['id'])
              .subscribe(data => {
                this.data = data;
                if (this.data.forms) {
                  this.data.forms.forEach((element, i) => {
                    this.data.forms[i].fieldType = this.formTypes[element.formTypes];
                  });
                }
                this.spinner.hide()
              }
              );
      }
      })
   
    }


    onSave(data) {
      var postData = {
        formFields: []
      }

      if (Object.keys(data) != null && Object.keys(data).length > 0) {
        Object.keys(data).forEach((x : any)=> {
          postData.formFields.push( {
            "formId": +x,
            "response": data[x]
          });
        });
        
        this.spinner.show();
        this.dataService.postSurvey(postData).pipe(take(1)).subscribe(() => {
          this.spinner.hide();
          this.posted  = true;
        }); 
      } else {

      }
      
    }
}
