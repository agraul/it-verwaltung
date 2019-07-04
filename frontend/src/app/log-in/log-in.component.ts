import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from './log-in.mock';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent implements OnInit {
  users = USERS;
  userName = '';
  passWord = '';
  showValidationMessage = false;

  constructor(private router: Router, private authentication: AuthService) {}

  ngOnInit() {}

  public secureAndSend(username: string, password: string): void {
      this.authentication.login(username, password).then(resp => { 
        if (resp) {
        this.router.navigateByUrl(this.authentication.redirectUrl ? this.router.parseUrl(this.authentication.redirectUrl) : '/rooms');
        } else {
          console.log("falsches PW");
      
          this.showValidationMessage = true;
        }
      });
    }
  }
