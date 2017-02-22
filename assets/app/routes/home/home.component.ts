import { Component, OnInit } from '@angular/core';
import { Animations } from '../../core/animations/roteTransition';

import { DashboardService } from './../dashboard/dashboard.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],   
    host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class HomeComponent implements OnInit {

    news: any[];
    
    constructor(private _dashboardService: DashboardService, private _sanitizer: DomSanitizer) {}
    
    ngOnInit() {
        this._dashboardService.getNews()
            .subscribe(res => {
                this.news = res.data;
            });
    }
}