import { Component, OnInit } from '@angular/core';
import { NotificationsService, SimpleNotificationsComponent } from 'angular2-notifications'

@Component({
    selector: 'root-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

    constructor(private _service: NotificationsService) {

    }
    ngOnInit() {
        
    }

    public options = {
        position: ["bottom", "right"],
        timeOut: 5000,
        lastOnBottom: true
    }
}
