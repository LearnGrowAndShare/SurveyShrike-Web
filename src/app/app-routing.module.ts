import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path : 'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) },
  { path : 'survey/:id', component:  SurveyComponent },
  { path : '', component:  HomeComponent },
  { path : '**', component:  HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
