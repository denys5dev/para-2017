import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { ENTRY_POINT } from './../../core/env/env';

@Injectable()

export class ChatroomService {

    private serverUrl = ENTRY_POINT;
    private socket: any;
    private messages;

    constructor() {
        this.socket = io(this.serverUrl);
    }

    thread() {
        this.socket.emit('Connected', localStorage.getItem('name'));
    }

    getMessage() {
        let obs = new Observable(observer => {
            
            this.socket = io(this.serverUrl);

            this.socket.on('newMsg', (msg) => {
                observer.next(msg);
            });
            return () => {
                this.socket.disconnect();
            }
        });
        return obs;
    }

    sendMsg(message) {
        this.socket.emit('newMsg', message);
    }
}