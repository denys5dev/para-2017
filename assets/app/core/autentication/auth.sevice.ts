// Auth AuthService

import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { NotificationsService } from "angular2-notifications";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { ENTRY_POINT } from "./../env/env";

@Injectable()

export class AuthService {

  private entryPoint = ENTRY_POINT;

  constructor(private _http: Http, private _toastrService: NotificationsService) {
  }

  public addUser(user) {
    return this._http.post(this.entryPoint + "user", user)
      .map((res: Response) => res.json());
  }

  public loginUser(user) {
    return this._http.post(this.entryPoint + "user/login", user)
      .map((res: Response) => res.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }

  public logout() {
    this._toastrService.alert("Bye!", "Logged out");
    localStorage.clear();
  }

  public isLoggedIn() {
    return localStorage.getItem("token") !== null;
  }

  public isAdmin() {
    return localStorage.getItem("role");
  }

  public getUserName() {
    return localStorage.getItem("name");
  }
}
