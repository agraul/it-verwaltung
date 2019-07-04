import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'it-verwaltung';
  constructor(private auth: AuthService) {}

  showDropdown = false;
  userName = '50cent';

  isLoggedIn(): boolean{
    return this.auth.isLoggedIn;
  }

  setUserName():string{
    if(this.isLoggedIn()){
      this.userName = this.auth.userName;
    }
    return this.userName;
  }

  logOut(){
    this.showDropdown = false;
    this.userName = '';
    this.auth.logout();
  }

  openDropdown(){
    if(this.showDropdown === false){
      this.showDropdown = true;
    }else{
      this.showDropdown = false;
    }
    
  }
}
