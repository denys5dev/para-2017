import { OrderBy } from './pipes/orderBy.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdIconRegistry } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule, MaterialModule, MdSelectModule } from '@angular/material';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdProgressCircleModule } from '@angular2-material/progress-circle'
import { MdProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule,
        MdCheckboxModule,
        MdSelectModule,
        MdProgressCircleModule,
        MdProgressBarModule,
        MaterialModule.forRoot()
    ],
    providers: [
        MdIconRegistry,
        
    ],
    declarations: [
        OrderBy
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdToolbarModule,
        MdInputModule,
        MdListModule,
        MdGridListModule,
        MdCheckboxModule,
        MdSelectModule,
        MdProgressCircleModule,
        MdProgressBarModule,
        OrderBy
    ]
})
export class SharedModule { }