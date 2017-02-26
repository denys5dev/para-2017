// News

import { Component, OnInit } from "@angular/core";
import { Animations } from "../../../core/animations/roteTransition";

import { DashboardService } from "../../dashboard/dashboard.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { News } from "../../../shared/models/News";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./news.component.html",
    styleUrls: ["./news.component.scss"],
    host: { "[@routeAnimation]": "true" },
    animations: Animations.page
})

export class NewsComponent implements OnInit {

    private news: News[];

    constructor(private _dashboardService: DashboardService, 
                private _sanitizer: DomSanitizer, 
                private _router: Router, 
                private _route: ActivatedRoute) {}

    public ngOnInit() {
        this._dashboardService.getNews()
            .subscribe((res) => {
                this.news = res.data;
            });
    }
    private showDetails(id) {
        this._router.navigate(["../news/" + id], { relativeTo: this._route});
    }
}
