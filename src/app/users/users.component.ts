import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UsersInfo } from '../class/usersInfo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UserComponent implements OnInit {

  title = 'Users Main Body';

  ngOnInit() {
    this.initData();
  }

  users: UsersInfo[];
  user: UsersInfo = {
    name: "",
    lastname: "",
    birthdate: new Date(),
    created: new Date(),
    updated: new Date(),
    status: "",
    email: ""
  }

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'FirstName', field: 'name' },
    { headerName: 'LastName', field: 'lastname' },
    { headerName: 'Birthdate', field: 'birthdate' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Status', field: 'status' }
  ];

  private gridApi: any;
  private gridColumnApi: any;
  private frameworkComponents: any;
  private context: any;

  constructor(
    private userService: UserService
  ) {
    this.context = { componentParent: this };
  }

  initData(): void {
    this.userService.getAllUsers()
      .subscribe((data) => {
        this.users = data;
      });
  }

  OnGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }
}
