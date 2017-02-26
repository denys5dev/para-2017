// Home Module

import { NgModule } from "@angular/core";
import { SharedModule } from "./../../shared/shared.module";

import { HomeComponent } from "./home.component";
import { NewsDetailComponent } from "./news/newsDetail.component";
import { NewsComponent } from "./newsMain/news.component";

import { SafeHtmlPipe } from "./../../shared/pipes/saveHtml.pipe";

@NgModule({
    declarations: [
        HomeComponent,
        NewsDetailComponent,
        NewsComponent,
        SafeHtmlPipe
    ],

    providers: [],

    imports: [
        SharedModule
    ],

    exports: [
        HomeComponent,
        NewsDetailComponent,
        NewsComponent,
        SafeHtmlPipe

    ]
})

export class HomeModule { }
