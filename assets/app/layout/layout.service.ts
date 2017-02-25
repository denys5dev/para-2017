// LayoutService

import { Injectable } from "@angular/core";

@Injectable()

export class LayoutService {

    private isOpenDialog: boolean = false;
    private isOpneLoginModad: boolean = false;

    public openJoinModal(flag) {
        this.isOpenDialog = flag;
    }
    public openLoginModal(flag) {
        this.isOpneLoginModad = flag;
    }

    public closeJoinModal(flag) {
        this.isOpenDialog = flag;
    }
    public closeLoginModal(flag) {
        this.isOpneLoginModad = flag;
    }

    public isOpenJoinModal(): boolean {
        return this.isOpenDialog;
    }

    public isOpenLoginModal(): boolean {
        return this.isOpneLoginModad;
    }

}
