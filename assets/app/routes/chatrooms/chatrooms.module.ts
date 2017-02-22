import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ChatroomComponent } from './chatroom.component';

import { ChatroomService } from './chatroom.service';

@NgModule({
    declarations: [
        ChatroomComponent
    ],

    providers: [ChatroomService],

    imports: [
        SharedModule
    ],

    exports: [
        ChatroomComponent
    ]
})

export class ChatroomModule {

}