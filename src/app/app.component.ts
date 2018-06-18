import { Component } from '@angular/core';
import { LoginInfo } from './class/loginInfo';
import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private loginService: LoginService
  ) { }

  title = 'Angular Blog';
  loginInfo: LoginInfo = {
    successLogin: false,
    loginStartTime: new Date(),
    userName: '',
    password: '',
    IsCorrectLogin: false,
    userID: 0
  };

  LogOut(): void {
    this.loginService.currentUserLoginInfo.successLogin = false;
  }
}
