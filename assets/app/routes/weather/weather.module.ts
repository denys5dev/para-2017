import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { WeatherComponent } from './weather.component';

@NgModule({
    declarations: [
        WeatherComponent
    ],

    providers: [],

    imports: [
        SharedModule
    ],

    exports: [
        WeatherComponent
    ]
})

export class WeatherModule { }