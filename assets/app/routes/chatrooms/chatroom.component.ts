import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { ChatroomService } from './chatroom.service';
import { Observable, Subscriber } from 'rxjs';

import * as io from 'socket.io-client';

@Component({
    selector: 'app-chatroom',
    templateUrl: './chatroom.component.html',
    styleUrls: ['./chatroom.component.scss']
})

export class ChatroomComponent implements OnInit, AfterViewChecked, OnDestroy {

    private chatroom = [];
    private msg;
    private arr: Observable<any>;
    socket = io.connect();
    private name;
    private user;
    private messageConnection;

    @ViewChild('chatWindow') chatScroll: ElementRef;

    constructor(private _chatService: ChatroomService) {
    }

    ngOnInit() {
        this.name = localStorage.getItem('name');
        this._chatService.thread();

        this.messageConnection = this._chatService.getMessage().subscribe(res => {
            this.chatroom.push(res);
        });
    }

    ngAfterViewChecked() {
        if (this.chatroom.length > 9) {
            this.chatScroll.nativeElement.scrollTop = this.chatScroll.nativeElement.scrollHeight - this.chatScroll.nativeElement.clientHeight;
        }
    }

    send(message) {
        if (message) {
            this._chatService.sendMsg({ message: message, user: this.name });
            this.msg = '';
        }
    }

    ngOnDestroy() {
        this.messageConnection.unsubscribe();
    }
}