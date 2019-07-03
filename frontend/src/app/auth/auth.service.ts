import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { USERS } from '../log-in/log-in.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  users = USERS;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(username: string, password: string): Observable<boolean> {
    if (this.getToken(username, password)) {
      return of(true).pipe(
        delay(100),
        tap(val => (this.isLoggedIn = true))
      );
    } else {
      return of(false).pipe();
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getToken(usr: string, pwd: string) {
    // TODO: Api Call
    return true;
  }
}
