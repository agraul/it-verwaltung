import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public secureAndSend() :void{
    var logInCreds = false;

    logInCreds = true;

    if(logInCreds === true){
      this.router.navigate(['/app-room-overview']);
    }
  }

}
