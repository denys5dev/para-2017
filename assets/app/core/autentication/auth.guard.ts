import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate, CanActivateChild, CanDeactivate  } from '@angular/router';
import { AuthService } from './auth.sevice';

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private auth: AuthService, private router: Router){
        
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.isAdmin().toString() == "0"){
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['**']);
            return false;
        }
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.isLoggedIn()){
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['**']);
            return false;
        }
    }
    
    canDeactivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.isLoggedIn()){
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['*']);
            return false;
        }
    }
}