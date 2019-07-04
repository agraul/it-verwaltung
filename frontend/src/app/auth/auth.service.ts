import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ApiClientService } from '../core/api-client.service';
import { UserLogIn } from '../fe-entities/user-login-entity';

var jwtDecode = require('jwt-decode');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin= false;
  userName= ''

  // store the URL so we can redirect after logging in
  redirectUrl: string;


  constructor(private apiClient: ApiClientService) {

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }


  login(username: string, password: string): Observable<boolean> {
    if (this.requestToken(username, password)) {
      this.userName = username;
      this.isLoggedIn = true;
      return of(true).pipe();
    } else {
      return of(false).pipe();
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  requestToken(usr: string, pwd: string) {
    let creds = new UserLogIn(usr, pwd);
    this.apiClient.logInAndGetToken(creds).then(resp => {
      const token = resp[0].token;
      this.isAdmin = jwtDecode(token).admin;
      localStorage.setItem('token', token);
    });
    return true;
  }
}
