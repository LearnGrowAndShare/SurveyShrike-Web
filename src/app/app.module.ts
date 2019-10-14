import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonComponentModule } from './common-component/common-component.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


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
    CommonComponentModule,
    HttpClientModule,
    NgxSpinnerModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: [environment.api],
          sendAccessToken: true
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
