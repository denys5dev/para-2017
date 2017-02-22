import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from './../../core/autentication/auth.sevice';

import { JQueryService } from './../../core/fix/JQuery.service';

import { LayoutService } from './../layout.service';
import { NotificationsService } from 'angular2-notifications'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {


    loginForm: FormGroup;

    constructor(
        private _jqueryService: JQueryService, 
        private _auth: AuthService, private router: Router, 
        private _layoutService: LayoutService, 
        private _toastrService: NotificationsService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }

    reset() {
        this.loginForm.reset();
        this._jqueryService.clearMdLabel();
    }

    login() {
        this._auth.loginUser(this.loginForm.value).subscribe(
            res => {
                if (res.token) {
                    //save token
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('userId', res.userId);
                    localStorage.setItem('role', res.role);
                    localStorage.setItem('name', res.userName);
                    // auth manipulation
                    this.loginForm.reset();
                    this.router.navigateByUrl('/');
                    this._layoutService.closeLoginModal(false);
                    this._toastrService.success('Welcome', localStorage.getItem('name'));
                }
            },
            error => {
                this._toastrService.error(error.title, error.error.message);
                this.loginForm.reset();
            });
    }

}