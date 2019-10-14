import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonComponentModule } from './common-component/common-component.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
