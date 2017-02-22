import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


import { AuthService } from './../core/autentication/auth.sevice';
import { LayoutService } from './layout.service';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        RegistrationComponent,
        LoginComponent
    ],

    providers: [AuthService, LayoutService],

    imports: [
        SharedModule
    ],

    exports: [
        LayoutComponent,
        HeaderComponent,
        RegistrationComponent,
        LoginComponent
    ]
})

export class LayoutModule { }