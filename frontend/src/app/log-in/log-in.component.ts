import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { USERS } from './log-in.mock';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  public secureAndSend(username: string, password: string): void{
    var retVal = false;
    for(var i = 0;i<this.users.length; i++){
      if(this.users[i].benutzername === username){
        if(this.users[i].passwort === password){
          this.router.navigate(['/rooms']);
          retVal = false;
        }else{
          this.showValidationMessage = true;
        }
    }else {
      this.showValidationMessage = true;
    }
  }
  }

}
