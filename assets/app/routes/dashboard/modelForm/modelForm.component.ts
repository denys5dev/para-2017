import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from './../dashboard.service';
import { JQueryService } from './../../../core/fix/JQuery.service';

import { Animations } from './../../../core/animations/roteTransition';

@Component({
    selector: 'add-model',
    templateUrl: '/modelForm.component.html',
    styleUrls: ['./modelForm.component.scss'],
    host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class ModelFormComponent implements OnInit {

    modelForm: FormGroup;
    companies: any[];
    gliders: any[];
    isEditable: boolean;
    editableModel: any;

    constructor(private _dasboardService: DashboardService, private _jqueryService: JQueryService) {

    }

    ngOnInit(): void {
        this.isEditable = false;

        this.modelForm = new FormGroup({
            company: new FormControl,
            model: new FormControl,
            photo: new FormControl,
            video: new FormControl,
            about: new FormControl,
            year: new FormControl
        });

        this._dasboardService.getCompanies().subscribe(res => {
            this.companies = res.data;
        })
        this._dasboardService.getGlidersModels().subscribe(res => {
            this.gliders = res.data;
        })
    }

    get() {
        this._dasboardService.getGlidersModels().subscribe(res => {
            this.gliders = res.data;
        });
    }

    reset() {
        this._jqueryService.clearMdLabel();
        this.isEditable = false;
    }

    save() {
        if (this.isEditable) {
            let isConfirm = confirm("Are you sure?");
            if (isConfirm) {
                this._dasboardService.updateGliderModel(this.editableModel, this.modelForm.value).subscribe(res => {

                    this._jqueryService.clearMdLabel();

                    this.get();
                    this.isEditable = false;
                })
            }
        } else {
            this._dasboardService.addGliderModel(this.modelForm.value).subscribe(res => {
                if (res.data) {
                    this.gliders.push(res.data);
                }
                this._jqueryService.clearMdLabel()
            });
        }
        this.isEditable = false;
        this.modelForm.reset();
    }

    delete(id) {
        let isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dasboardService.deleteGliderModel(id).subscribe(res => {
                this.get();
            })
        }
        return;
    }

    edit(glider) {
        this.isEditable = true;
        this._jqueryService.addMdLabelFocus();

        this.editableModel = glider._id;

        this.modelForm.patchValue({
            model: glider.model,
            year: glider.year,
            about: glider.about,
            photo: glider.photo,
            video: glider.video,
            company: glider.companyId
        });
    }
}