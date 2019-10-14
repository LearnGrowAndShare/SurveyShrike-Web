import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email = "";
  constructor(private oauthService: OAuthService, private http: HttpClient) { }

  ngOnInit() {
    
  }

  public get name() {
    let claims: any = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    this.email = claims.email;
    return true;
  }

  logout() {
    const idToken = this.oauthService.getIdToken();
    this.http.get(environment.id_server + "/api/authenticate/logout?logoutid=" + idToken).subscribe(x => {
      this.oauthService.logOut();
    });
  }

}
