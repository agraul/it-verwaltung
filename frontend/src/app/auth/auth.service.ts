import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiClientService } from '../core/api-client.service';
import { UserLogIn } from '../fe-entities/user-login-entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  userName = '';

  // store the URL so we can redirect after logging in
  redirectUrl: string;


  constructor(private apiClient: ApiClientService) {

  }

  public getToken(): string {
    return localStorage.getItem('token');
  }


  login(username: string, password: string): Promise<boolean> {
    return this.requestToken(username, password).then(resp => {
      if(resp) {
      this.userName = username;
      this.isLoggedIn = true;
      return true;
      } else {
        return false;
      }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  requestToken(usr: string, pwd: string): Promise<boolean> {
    const jwtDecode = require('jwt-decode');
    let creds = new UserLogIn(usr, pwd);
    return this.apiClient.logInAndGetToken(creds).then(resp => {
      const token = resp[0].token;
      this.isAdmin = jwtDecode(token).admin;
      localStorage.setItem('token', token);
      return true;
    },
    () => {return false});
  }
}
