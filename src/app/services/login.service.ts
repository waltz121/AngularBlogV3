import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserRegistrationFormModel } from '../class/FormModel/userRegistrationFormModel';
import { LoginInfo } from '../class/loginInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  currentUserLoginInfo: LoginInfo = {
    successLogin: false,
    loginStartTime: new Date(),
    userName: '',
    password: '',
    IsCorrectLogin: false,
    userID: 0
  };

  registerUser(fm: UserRegistrationFormModel): Observable<UserRegistrationFormModel> {
    const url = "http://localhost:7450/api/Login/saveUserInfo";

    return this.http.post<UserRegistrationFormModel>(url, fm, httpOptions);
  }

  Login(vm: LoginInfo): Observable<LoginInfo> {
    const url = "http://localhost:7450/api/Login/IsCorrectLogin?username=" + vm.userName
      + "&password=" + vm.password;

    return this.http.get<LoginInfo>(url);
  }
}
