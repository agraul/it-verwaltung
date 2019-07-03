import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
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
  showValidationMessage= false;

  constructor(
    private router: Router,
    private authentication: AuthService,
  ) { }

  ngOnInit() {
  }

  public secureAndSend(username: string, password: string): void{
   console.log(this.authentication.login(username, password).subscribe((resp)=> {return resp;}));
    
    var retVal = false;
          if(this.authentication.login(username, password).subscribe((resp)=> {return resp;}).closed === false){
            this.router.navigate(['/rooms']);
            retVal = false;
          }
        else{
          this.showValidationMessage = true;
        }
    
  }
  }
