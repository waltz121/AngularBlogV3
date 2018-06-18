import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { UserComponent } from './users/users.component';
import { LoginComponent } from './Login/login.component';
import { UserRegistrationComponent } from './users-registration/users-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users-registration', component: UserRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
