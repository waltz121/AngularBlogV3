//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { UserComponent } from './users/users.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    UserComponent
  ]
})

export class UserEditorModule { }
