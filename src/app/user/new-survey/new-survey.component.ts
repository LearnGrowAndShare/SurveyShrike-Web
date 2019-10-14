import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/common-component/modal/modal.service';
import { DataService } from '../data.service';
import {take} from 'rxjs/operators' ;
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  fieldConfigs = [];
  title = "";

  formTypes = {'Input' : 0, 
                'Multiline' : 1,
                'Dropdown': 2, 
                "Select": 3,
                "Radio": 4,
                "File": 5,
               }
  constructor(private modalService: ModalService, private dataService: DataService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  setTitle(value) {
    this.title = value;
  }

  addField() {
    this.modalService.showPrompt().subscribe(message => {
      this.fieldConfigs.push(message);
    })
  }

  saveData() {
    if (!this.title) {
      this.modalService.showModal("error", "Title is required.");
    } else if (this.fieldConfigs && this.fieldConfigs.length == 0) {
      this.modalService.showModal("warning", "You can still save the form, but Please add atleast one field to make this survey meaningful.")
    } else {
      var survey = {
        "title": this.title,
        "formFields": []
        }
        if ( this.fieldConfigs &&  this.fieldConfigs.length > 0) {
          this.fieldConfigs.forEach((item, index) => {
            survey.formFields.push(
              {
                "title": item.title,
                "formTypes": File[item.fieldType],
                "formConfiguration": JSON.stringify({index: index, items: item.fieldConfigs})
              })
          });
        }
          this.spinner.show();
         this.dataService.addSurvey(survey).pipe(take(1)).subscribe(x => {
          this.spinner.hide();  
          this.router.navigateByUrl('/user');
            
         }, (err) => {
          this.modalService.showModal("error", "Could not create survey.");
         });
      };
    }
 
}
