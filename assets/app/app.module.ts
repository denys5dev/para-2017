// AppModule

import { NgModule, Compiler } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "./layout/layout.module";
import { DashboardModule } from "./routes/dashboard/dashboard.module";
import { HomeModule } from "./routes/home/home.module";
import { ManufactoryModule } from "./routes/manufactory/manufactory.module";
import { RoutesModule } from "./routes/routes.module";
import { WeatherModule } from "./routes/weather/weather.module";
import { ChatroomModule } from "./routes/chatrooms/chatrooms.module";

import { appRoutingProviders } from "./routes/routes";
import { JitCompiler } from "@angular/compiler";
import { SimpleNotificationsModule } from "angular2-notifications";


import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RoutesModule,
        LayoutModule,
        DashboardModule,
        HomeModule,
        ManufactoryModule,
        WeatherModule,
        ChatroomModule,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [appRoutingProviders, {
        provide: Compiler,
        useExisting: JitCompiler }]
})

export class AppModule {

}
