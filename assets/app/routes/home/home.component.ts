// HomeComponent

import { Component } from "@angular/core";
import { Animations } from "../../core/animations/roteTransition";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    host: { "[@routeAnimation]": "true" },
    animations: Animations.page
})

export class HomeComponent {

}
