import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersInfo } from '../class/usersInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsersInfo[]> {
    const url = "http://localhost:7450/api/User/getAllUsers";

    return this.http.get<UsersInfo[]>(url);
  }

}
