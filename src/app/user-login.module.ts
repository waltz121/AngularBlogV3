import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { LoginComponent } from './Login/login.component';
import { UserRegistrationComponent } from './users-registration/users-registration.component';

//Services
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    UserRegistrationComponent
  ],
  providers: [LoginService],
  exports: [LoginComponent]
})

export class UserLoginModule { }
