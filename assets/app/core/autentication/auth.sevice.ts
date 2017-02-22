import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';
import { ENTRY_POINT } from './../env/env';

@Injectable()

export class AuthService {


  private entryPoint = ENTRY_POINT;

  constructor(private _http: Http, private _toastrService: NotificationsService) {
  }

  addUser(user) {
    return this._http.post(this.entryPoint + 'user', user)
      .map((res: Response) => res.json());
  }

  loginUser(user) {
    return this._http.post(this.entryPoint + 'user/login', user)
      .map((res: Response) => res.json())
      .catch((error: Response) => {
        return Observable.throw(error.json())
      })
  }

  logout() {
    this._toastrService.alert("Bye!", "Logged out");
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem("role");
  }

  getUserName() {
    return localStorage.getItem("name");
  }

}