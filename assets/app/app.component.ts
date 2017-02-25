// AppComponent

import { Component } from "@angular/core";
import { NotificationsService, SimpleNotificationsComponent } from "angular2-notifications";

@Component({
    selector: "root-app",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
})

export class AppComponent {

    constructor(private _service: NotificationsService) {

    }

    // tslint:disable-next-line:member-access
    // tslint:disable-next-line:member-ordering
    public options = { position: ["bottom", "right"], timeOut: 5000, lastOnBottom: true };
}
