import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DashboardService } from "./../dashboard.service";
import "rxjs/Rx";

import { JQueryService } from "./../../../core/fix/JQuery.service";

import { Animations } from "./../../../core/animations/roteTransition";
import { NotificationsService } from "angular2-notifications";

@Component({
    selector: "add-maufactory",
    templateUrl: "./manufactoryForm.component.html",
    styleUrls: ["./manufactoryForm.component.scss"],
    host: { "[@routeAnimation]": "true" },
    animations: Animations.page
})

export class ManufactoryFormComponent implements OnInit {

    companyForm: FormGroup;
    companies: any[];
    isEditable: boolean;
    editableCompany: any;


    constructor(private _dasboardService: DashboardService, private _jqueryService: JQueryService, private _toastrService: NotificationsService) {

    }

    ngOnInit(): void {
        this.isEditable = false;

        this._dasboardService.getCompanies().subscribe(res => {
            this.companies = res.data;
        })

        this.companyForm = new FormGroup({
            name: new FormControl(),
            adress: new FormControl(),
            city: new FormControl(),
            country: new FormControl(),
            email: new FormControl(),
            web: new FormControl(),
            phone: new FormControl(),
            logo: new FormControl()
        });
    }

    get() {
        this._dasboardService.getCompanies().subscribe(res => {
            this.companies = res.data;
        })
    }

    save() {
        if (this.isEditable) {
            let isConfirm = confirm("Are you sure?");
            if (isConfirm) {
                this._dasboardService.updateCompany(this.editableCompany, this.companyForm.value).subscribe(res => {

                    this._jqueryService.clearMdLabel();

                    this.get();
                    this.isEditable = false;
                })
            }
        } else {
            this._dasboardService.addCompany(this.companyForm.value).subscribe(res => {
                if (res.data) {
                    this.companies.push(res.data);
                }
                this._jqueryService.clearMdLabel();
            });
        }
        this.isEditable = false;
        this.companyForm.reset();
    }

    delete(id) {
        let isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dasboardService.deleteCompany(id).subscribe(
                res => {
                    this.get();
                },
                error => {
                    this._toastrService.error(error.title, error.error.message);
                });
        }
        return;
    }

    reset() {
        this._jqueryService.clearMdLabel();
        this.isEditable = false;
    }

    edit(company) {
        this.isEditable = true;

        this._jqueryService.addMdLabelFocus();

        this.editableCompany = company._id;

        this.companyForm.patchValue({
            name: company.name,
            adress: company.adress,
            city: company.city,
            country: company.country,
            email: company.email,
            web: company.web,
            phone: company.phone,
            logo: company.logo
        });

    }
}