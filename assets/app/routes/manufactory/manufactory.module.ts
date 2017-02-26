import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { ManufactoryService } from './manufactory.service';
import { ManufactoryComponent } from './manufactory.component';
import { CompanysComponent } from './companys/companys.component';
import { GliderModelsComponent } from './gliderModels/gliderModels.component';
import { GliderDetailsComponent } from './gliderDetails/gliderDetails.component';


@NgModule({
    declarations: [
        ManufactoryComponent,
        CompanysComponent,
        GliderModelsComponent,
        GliderDetailsComponent
    ],

    providers: [ManufactoryService],

    imports: [
        SharedModule
    ],

    exports: [
        ManufactoryComponent,
        CompanysComponent,
        GliderModelsComponent,
        GliderDetailsComponent
    ]
})

export class ManufactoryModule { }
