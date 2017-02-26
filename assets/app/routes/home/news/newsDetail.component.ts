// News

import { Component, OnInit, OnDestroy } from "@angular/core";
import { DashboardService } from "./../../dashboard/dashboard.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Animations } from "../../../core/animations/roteTransition";

@Component({
    selector: "news-detail",
    templateUrl: "newsDetail.component.html",
    styleUrls: ["./newsDetail.component.scss"],
    host: { "[@routeAnimation]": "true" },
    animations: Animations.page
})

export class NewsDetailComponent implements OnInit, OnDestroy {

    private sub;
    private newsDetail;

    constructor(private _dashboardService: DashboardService,
                private _router: Router, 
                private _route: ActivatedRoute) { }

    public ngOnInit() {
        this.sub = this._route.params
            // tslint:disable-next-line:no-string-literal
            .map((params) => params["id"])
            .subscribe((id) => {
                this._dashboardService.getNewsById(id).subscribe((res) => {
                    this.newsDetail = res.data;
                });
            });
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
