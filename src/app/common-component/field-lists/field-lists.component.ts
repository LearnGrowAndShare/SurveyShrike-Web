import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-lists',
  templateUrl: './field-lists.component.html',
  styleUrls: ['./field-lists.component.scss']
})
export class FieldListsComponent implements OnInit {

  @Input() fieldConfigs;
  
  constructor() { }

  ngOnInit() {
  }

}
