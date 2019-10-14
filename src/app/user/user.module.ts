
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { CommonComponentModule } from '../common-component/common-component.module';




@NgModule({
  declarations: [
    DashboardComponent,
    SurveyDetailsComponent,
    NewSurveyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class UserModule { }
