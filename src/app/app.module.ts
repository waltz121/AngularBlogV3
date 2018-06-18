//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

//Component

import { BlogComponent } from './blog/blog.component';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

//Other Modules
import { AppRoutingModule } from './app-routing.module';
import { UserLoginModule } from './user-login.module';
import { UserEditorModule } from './user-editor.module';

//Services
import { BlogService } from './services/blog.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

//Grid Utilities
import { BlogEditRenderer } from './utils/blog-edit-renderer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UserLoginModule,
    UserEditorModule,
    AgGridModule.withComponents([
      BlogEditRenderer
    ])
  ],
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditRenderer
  ],
  providers: [BlogService, LoginService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
