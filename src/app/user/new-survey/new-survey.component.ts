import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/common-component/modal/modal.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  fieldConfigs = [];
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  addField() {
    this.modalService.showPrompt().subscribe(message => {
      this.fieldConfigs.push(message);
    })
  }
}
