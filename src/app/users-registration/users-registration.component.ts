import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormModel } from '../class/FormModel/userRegistrationFormModel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-userRegistration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {


  constructor(
    private loginService: LoginService
  ) { }

  title = 'User Registration'

  userRegistrationFM: UserRegistrationFormModel = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    created: new Date(),
    updated: new Date(),
    status: "",
    email: ""
  };

  userRegistrationFMArray: UserRegistrationFormModel[];

  submit(): void {


    this.loginService.registerUser(this.userRegistrationFM)
      .subscribe(fm => this.userRegistrationFMArray.push(fm));
  }

  ngOnInit() {
  }
}
