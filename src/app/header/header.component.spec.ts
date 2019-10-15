import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let OAuthServiceMock = {
    initLoginFlow: jasmine.createSpy('initLoginFlow'),
    configure: jasmine.createSpy('configure'),
    tokenValidationHandler: jasmine.createSpy('tokenValidationHandler'),
    loadDiscoveryDocumentAndTryLogin: jasmine.createSpy('loadDiscoveryDocumentAndTryLogin'),
    getIdentityClaims :  jasmine.createSpy('getIdentityClaims')
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{provide: OAuthService, useValue: OAuthServiceMock}],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
