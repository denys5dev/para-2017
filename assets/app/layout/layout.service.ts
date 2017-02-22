import { Injectable } from '@angular/core';

@Injectable()

export class LayoutService {

    isOpenDialog: boolean = false;
    isOpneLoginModad: boolean = false;

    constructor() {
    }

    openJoinModal(flag) {
        this.isOpenDialog = flag;
    }
    openLoginModal(flag) {
        this.isOpneLoginModad = flag;
    }

    closeJoinModal(flag) {
        this.isOpenDialog = flag;
    }
    closeLoginModal(flag) {
        this.isOpneLoginModad = flag;
    }

    isOpenJoinModal(): boolean {
        return this.isOpenDialog;
    }

     isOpenLoginModal(): boolean {
        return this.isOpneLoginModad;
    }

}