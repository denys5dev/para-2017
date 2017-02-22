import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ControlValueAccessor } from '@angular/forms';


import { DashboardService } from './../dashboard.service';
import { SimpleTinyComponent } from './simpleTiny.component';
import { Animations } from './../../../core/animations/roteTransition';

@Component({
    selector: 'app-news',
    templateUrl: './newsForm.component.html',
    styleUrls: ['./newsForm.component.scss'],
    host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class NewsFormComponent implements OnInit {

    newsForm: FormGroup;
    content: any;
    value: ControlValueAccessor;
    news: any[];

    constructor(private _fb: FormBuilder, private _dashboardService: DashboardService) {

    }

    ngOnInit(): void {
        this.newsForm = this._fb.group({
            title: ['', Validators.required],
            body: '',
            date: new Date
        });
        this.get()
    }

    get() {
        this._dashboardService.getNews().subscribe(res => {
            this.news = res.data;
        })
    }

    save() {
        this.newsForm.value.body = this.content;
        let isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dashboardService.addNews(this.newsForm.value)
                .subscribe(res => {
                    this.news.push(res.data);
                    this.newsForm.reset();
                })
        }

    }

    delete(id) {
        this._dashboardService.deleteNews(id).subscribe(res => {
            if (res.data) {
                this.get();
            }
        })
    }

    keyupHandlerFunction(message) {
        this.content = message;
    }
}