// AuthGuard

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router,  RouterStateSnapshot } from "@angular/router";
import { CanActivate, CanActivateChild, CanDeactivate  } from "@angular/router";
import { AuthService } from "./auth.sevice";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {
    }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isAdmin().toString() === "0") {
            return true;
        } else {
            this.router.navigate(["**"]);
            return false;
        }
    }

    public canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(["**"]);
            return false;
        }
    }

    public canDeactivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(["*"]);
            return false;
        }
    }
}
