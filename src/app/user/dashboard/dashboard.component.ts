import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { take } from 'rxjs/operators';
import { ModalService } from 'src/app/common-component/modal/modal.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  surveys;
  constructor(private dataService: DataService, private modalService: ModalService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.GetData();
  }


  archive(id) {
    this.spinner.show();
    this.dataService.archiveSurvey(id).pipe(take(1))
  .subscribe(() => {
    this.spinner.hide();
    this.GetData();
  }, (err) => {
    this.modalService.showModal("error", "Could not delete the survey.");
  }) 
 }

 
 private GetData() {
  this.spinner.show();
  this.dataService.getAllSurvey().pipe(take(1)).subscribe(x => {
    this.spinner.hide();
    this.surveys = x;
    
  });
  ;
}
}
