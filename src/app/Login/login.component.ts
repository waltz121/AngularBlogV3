import { Component, OnInit, Input } from '@angular/core';
import { LoginInfo } from '../class/loginInfo';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  @Input() loginInfo: LoginInfo;

  title = 'Login'

  isNotRegistered = false;

  ngOnInit() {
  }

  LogIn(): void {

    //this.loginInfo.successLogin = true;

    this.loginService.Login(this.loginInfo)
      .subscribe(vm =>
        this.afterLogin(vm)
      );
  }

  afterLogin(vm: LoginInfo): void {
    this.loginInfo = vm;
    this.loginService.currentUserLoginInfo = vm;
  };

  Register(): void {
    this.isNotRegistered = true;
  }

  ExitRegisterForm(): void {
    this.isNotRegistered = false;
  }
}
