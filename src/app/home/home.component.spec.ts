import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  let OAuthServiceMock = {
    initLoginFlow: jasmine.createSpy('initLoginFlow'),
    configure: jasmine.createSpy('configure'),
    tokenValidationHandler: jasmine.createSpy('tokenValidationHandler'),
    loadDiscoveryDocumentAndTryLogin: jasmine.createSpy('loadDiscoveryDocumentAndTryLogin'),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{provide: OAuthService, useValue: OAuthServiceMock}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
