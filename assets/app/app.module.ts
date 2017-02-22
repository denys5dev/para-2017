import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './routes/dashboard/dashboard.module';
import { HomeModule } from './routes/home/home.module';
import { ManufactoryModule } from './routes/manufactory/manufactory.module';
import { RoutesModule } from './routes/routes.module'
import { WeatherModule } from './routes/weather/weather.module'
import { ChatroomModule } from './routes/chatrooms/chatrooms.module';

import { AppComponent } from './app.component';

import { appRoutingProviders } from './routes/routes';

import { SimpleNotificationsModule } from 'angular2-notifications';
//Services
import { JQueryService } from './core/fix/JQuery.service';

@NgModule({
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
    bootstrap: [AppComponent],
    providers: [appRoutingProviders, JQueryService]
})

export class AppModule {

}
