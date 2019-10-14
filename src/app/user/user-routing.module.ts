import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';



  const routes: Routes = [
    { path : 'new', component: NewSurveyComponent },
    { path : 'survey/:id', component:  SurveyDetailsComponent },
    { path : '', component:  DashboardComponent },
    { path : '**', component:  DashboardComponent }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
