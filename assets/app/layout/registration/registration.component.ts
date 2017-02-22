import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './../../core/autentication/auth.sevice';

import { JQueryService } from './../../core/fix/JQuery.service';

import { LayoutService } from './../layout.service';
import { NotificationsService } from 'angular2-notifications'

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;

    constructor(
        private _jqueryService: JQueryService, 
        private _auth: AuthService, 
        private _layoutService: LayoutService,
        private _toastrService: NotificationsService) {
    }

    ngOnInit() {

        this.registrationForm = new FormGroup({
            name: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl()
        })
    }

    reset() {
        this.registrationForm.reset();
        this._jqueryService.clearMdLabel();
    }

    save() {
        this._auth.addUser(this.registrationForm.value)
            .subscribe(res => {
                if (res.data) {
                    this._auth.loginUser(this.registrationForm.value)
                        .subscribe(res => {
                            if (res.token) {
                                //add token
                                localStorage.setItem('token', res.token);
                                localStorage.setItem('userId', res.userId);
                                localStorage.setItem('name', res.userName);
                                //form manipulation
                                this._layoutService.closeJoinModal(false);
                                this.registrationForm.reset();
                                this._toastrService.info("Welcome", "Please check you mailbox");
                            }
                        });
                }
            });
    }

}