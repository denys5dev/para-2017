// News Form

import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators, ControlValueAccessor } from "@angular/forms";


import { DashboardService } from "./../dashboard.service";
import { SimpleTinyComponent } from "./simpleTiny.component";
import { Animations } from "./../../../core/animations/roteTransition";

@Component({
    selector: "app-news",
    templateUrl: "./newsForm.component.html",
    styleUrls: ["./newsForm.component.scss"],
    host: { "[@routeAnimation]": "true" },
    animations: Animations.page
})

export class NewsFormComponent implements OnInit {

    private newsForm: FormGroup;
    private content: any;
    private value: ControlValueAccessor;
    private news: any[];

    constructor(private _fb: FormBuilder, private _dashboardService: DashboardService) {

    }

    public ngOnInit(): void {
        this.newsForm = this._fb.group({
            title: ["", Validators.required],
            body: "",
            // tslint:disable-next-line:new-parens
            date: new Date,
            description: ["", Validators.maxLength(160)],
            image: ""
        });
        this.get();
    }

    private get() {
        this._dashboardService.getNews().subscribe((res) => {
            this.news = res.data;
        });
    }

    private save() {
        this.newsForm.value.body = this.content;
        const isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dashboardService.addNews(this.newsForm.value)
                .subscribe((res) => {
                    this.news.push(res.data);
                    this.newsForm.reset();
                });
        }
    }

    private delete(id) {
        this._dashboardService.deleteNews(id).subscribe((res) => {
            if (res.data) {
                this.get();
            }
        });
    }

    private keyupHandlerFunction(message) {
        this.content = message;
    }
}