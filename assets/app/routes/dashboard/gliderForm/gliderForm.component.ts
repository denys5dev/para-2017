import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from './../dashboard.service';
import 'rxjs/Rx';

import { Animations } from './../../../core/animations/roteTransition';

@Component({
    selector: 'app-glider',
    templateUrl: './gliderForm.component.html',
    styleUrls: ['./gliderForm.component.scss'],
    host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class GliderFormComponent implements OnInit {

    details: any[];
    gliders: any[];
    detailForm: FormGroup;
    isEditable: boolean;
    editableDetail: any;

    constructor(private _dasboardService: DashboardService) {

    }

    ngOnInit() {

        this.get();

        this._dasboardService.getGlidersModels().subscribe(res => {
            this.gliders = res.data;
        });

        this.detailForm = new FormGroup({
            size: new FormControl(),
            modelId: new FormControl(),
            price: new FormControl(),
            certification: new FormControl(),
            projectArea: new FormControl(),
            faltArea: new FormControl(),
            projectSpan: new FormControl(),
            flatSpan: new FormControl(),
            projectAspectRatio: new FormControl(),
            flatAspectRatio: new FormControl(),
            rootChord: new FormControl(),
            gliderWeight: new FormControl(),
            numberOfCells: new FormControl(),
            inFlightWeight: new FormControl(),
            nakedPilotWeight: new FormControl(),
            type: new FormControl(),
            upperSufcace: new FormControl(),
            underSurface: new FormControl(),
            trims: new FormControl(),
            speed: new FormControl(),
            manual: new FormControl(),
            certificationReport: new FormControl()
        });
    }

    get() {
        this._dasboardService.getDetails()
            .subscribe(res => {
                this.details = res.data;
            });
    }

    save() {
        if (this.isEditable) {
            let isConfirm = confirm("Are you sure?");
            if (isConfirm) {
                this._dasboardService.updateDetails(this.editableDetail, this.detailForm.value).subscribe(res => {
                    this.get()
                })
            }
        } else {
            this._dasboardService.addDetails(this.detailForm.value)
                .subscribe(res => {
                    this.get();
                });
        }
        this.isEditable = false;
        this.detailForm.reset();
    }

    delete(id) {
        let isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dasboardService.deleteDetails(id).subscribe(res => {
                this.get();
            })
        }
        return;
    }

    edit(detail) {
        this.isEditable = true;


        this.editableDetail = detail._id;

        this.detailForm.patchValue({
            size: detail.size,
            modelId: detail.modelId,
            price: detail.price,
            certification: detail.certification,
            projectArea: detail.projectArea,
            faltArea: detail.faltArea,
            projectSpan: detail.projectSpan,
            flatSpan: detail.flatSpan,
            projectAspectRatio: detail.projectAspectRatio,
            flatAspectRatio: detail.flatAspectRatio,
            rootChord: detail.rootChord,
            gliderWeight: detail.gliderWeight,
            numberOfCells: detail.numberOfCells,
            inFlightWeight: detail.inFlightWeight,
            nakedPilotWeight: detail.nakedPilotWeight,
            type: detail.type,
            upperSufcace: detail.upperSufcace,
            underSurface: detail.underSurface,
            trims: detail.trims,
            speed: detail.speed,
            manual: detail.manual,
            certificationReport: detail.certificationReport
        })
    }

    reset() {
        this.isEditable = false;
    }

}
