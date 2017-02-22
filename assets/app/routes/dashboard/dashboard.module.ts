import { SimpleTinyComponent } from './newsForm/simpleTiny.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { DashboardComponent } from './dashboard.component';
import { ManufactoryFormComponent } from './manufactoryForm/manufactoryForm.component';
import { ModelFormComponent } from './modelForm/modelForm.component';
import { NewsFormComponent } from './newsForm/newsForm.component';
import { GliderFormComponent } from './gliderForm/gliderForm.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor'

import { DashboardService } from './dashboard.service';

@NgModule({
    declarations: [
       DashboardComponent,
       ManufactoryFormComponent,
       ModelFormComponent,
       GliderFormComponent,
       NewsFormComponent,
       SimpleTinyComponent
    ],
    providers: [ DashboardService ],

    imports: [
        SharedModule,
        DateValueAccessorModule
    ],

    exports: [
       DashboardComponent,
       ManufactoryFormComponent,
       ModelFormComponent,
       GliderFormComponent,
       NewsFormComponent,
       SimpleTinyComponent
    ]
})

export class DashboardModule { }