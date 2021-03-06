// ManufactoryFormComponent

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DashboardService } from "./../dashboard.service";
import "rxjs/Rx";


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

    private companyForm: FormGroup;
    private companies: any[];
    private isEditable: boolean;
    private editableCompany: any;

    constructor(private _dasboardService: DashboardService,
                private _toastrService: NotificationsService) { }

    public ngOnInit(): void {
        this.isEditable = false;

        this._dasboardService.getCompanies().subscribe((res) => {
            this.companies = res.data;
        });

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

    private get() {
        this._dasboardService.getCompanies().subscribe((res) => {
            this.companies = res.data;
        });
    }

    private save() {
        if (this.isEditable) {
            const isConfirm = confirm("Are you sure?");
            if (isConfirm) {
                this._dasboardService.updateCompany(this.editableCompany, this.companyForm.value).subscribe((res) => {

                    this.get();
                    this.isEditable = false;
                });
            }
        } else {
            this._dasboardService.addCompany(this.companyForm.value).subscribe((res) => {
                if (res.data) {
                    this.companies.push(res.data);
                }
            });
        }
        this.isEditable = false;
        this.companyForm.reset();
    }

    private delete(id) {
        const isConfirm = confirm("Are you sure?");
        if (isConfirm) {
            this._dasboardService.deleteCompany(id).subscribe(
                (res) => {
                    this.get();
                },
                (error) => {
                    this._toastrService.error(error.title, error.error.message);
                });
        }
        return;
    }

    private reset() {   
        this.isEditable = false;
    }

    private edit(company) {
        this.isEditable = true;

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
