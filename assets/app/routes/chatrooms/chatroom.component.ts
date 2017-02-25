// ChatroomComponent

import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from "@angular/core";
import { ChatroomService } from "./chatroom.service";
import { Observable, Subscriber } from "rxjs";

import * as io from "socket.io-client";

@Component({
    selector: "app-chatroom",
    templateUrl: "./chatroom.component.html",
    styleUrls: ["./chatroom.component.scss"]
})

export class ChatroomComponent implements OnInit, AfterViewChecked, OnDestroy {

    // tslint:disable-next-line:member-access
    @ViewChild("chatWindow") chatScroll: ElementRef;

    private chatroom = [];
    private msg;
    private arr: Observable<any>;
    private socket = io.connect();
    private name;
    private user;
    private messageConnection;

    constructor(private _chatService: ChatroomService) {
    }

    public ngOnInit() {
        this.name = localStorage.getItem("name");
        this._chatService.thread();

        this.messageConnection = this._chatService.getMessage().subscribe((res) => {
            this.chatroom.push(res);
        });
    }

    public ngAfterViewChecked() {
        if (this.chatroom.length > 9) {
            this.chatScroll.nativeElement.scrollTop
                = this.chatScroll.nativeElement.scrollHeight - this.chatScroll.nativeElement.clientHeight;
        }
    }

    public ngOnDestroy() {
        this.messageConnection.unsubscribe();
    }

    private send(message) {
        if (message) {
            // tslint:disable-next-line:object-literal-shorthand
            this._chatService.sendMsg( { message: message, user: this.name } );
            this.msg = "";
        }
    }
}
