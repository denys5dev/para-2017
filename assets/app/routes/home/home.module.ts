
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { HomeComponent } from './home.component';

import { SafeHtmlPipe } from './../../shared/pipes/saveHtml.pipe';


@NgModule({
    declarations: [
        HomeComponent,
        SafeHtmlPipe
    ],

    providers: [],

    imports: [
        SharedModule
    ],

    exports: [
        HomeComponent,
        SafeHtmlPipe

    ]
})

export class HomeModule { }