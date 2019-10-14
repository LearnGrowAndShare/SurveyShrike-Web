import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }

  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return true;
  }

  logout() {
    this.oauthService.logOut();
  }

}
