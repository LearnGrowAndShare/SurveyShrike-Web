import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {
  data;
  constructor(private dataService: DataService, private spinner: NgxSpinnerService,  private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
        this.spinner.show();
          this.dataService.getSurvey(params['id'])
              .subscribe(data => {
                this.data = data;
                this.spinner.hide()
              }
              );
      }
      })

   }

  ngOnInit() {

  }

}
