import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  surveys = [{id: 1, title: "Event for my self"}, 
            {id: 1, title: "Event for my self test"}]
  constructor() { }

  ngOnInit() {
  }

  archive(id) {

  }
}
