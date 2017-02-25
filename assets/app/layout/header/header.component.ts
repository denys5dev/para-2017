// HeaderComponent

import { Component, Output, EventEmitter, OnInit, animate, keyframes, transition, style, trigger, state, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./../../core/autentication/auth.sevice";

import { LayoutService } from "./../layout.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    animations: [
        trigger("contextMenu", [
            state("closed", style({
                opacity: 0
            })),
            state("open", style({
                opacity: 1
            })),
            transition("closed  => *", [
                animate(400)
            ])
        ])
    ],
    host: {
        "(document:click)": "onClick($event)",
    },
})

export class HeaderComponent {

    // tslint:disable-next-line:member-access
    @Output() openDialog = new EventEmitter<any>();
    // tslint:disable-next-line:member-access
    @Output() loginDialog = new EventEmitter<any>();

    private isAuth: boolean;
    private userMenu = false;
    private animateState = "closed";

    constructor(private _auth: AuthService, private _layoutService: LayoutService, private _router: Router, private _eref: ElementRef) { }

    private onClick(event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.userMenu = false;
            this.animateState = "closed";
        }
    }

    private logout() {
        this._router.navigate(["/"]);
        this._auth.logout();
        this.userMenu = false;
        this.animateState = "closed";
    }

    private showMenu() {
        this.userMenu = !this.userMenu;
        this.animateState = (this.animateState === "closed" ? "open" : "closed");
    }
}
