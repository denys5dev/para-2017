import { Component, OnInit } from '@angular/core';

import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications';
import 'rxjs/Rx';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

    public title: string = 'just a title';
    public content: string = 'just content';
    public type: string = 'success';

    constructor() { }

    ngOnInit() {

    }
    

}
