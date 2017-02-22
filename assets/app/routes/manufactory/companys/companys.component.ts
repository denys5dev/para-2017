import { Component, OnInit } from '@angular/core';

import { ICompany } from '../../../shared/models/Company';
import { Animations } from '../../../core/animations/roteTransition';
import { ManufactoryService } from '../manufactory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-manufactories',
    templateUrl: './companys.component.html',
    styleUrls: ['./companys.component.scss'],
    host: { '[@routeAnimation]': 'true' },
    animations: Animations.page
})

export class CompanysComponent implements OnInit {

    companies: ICompany[];

    constructor(private _manufactoryService: ManufactoryService, private _router: Router,private _route: ActivatedRoute ) {
    }

    ngOnInit() {
        this._manufactoryService.getCompanies().subscribe(res => {
            this.companies = res.data;
        })
    }

    goToModels(id) {
        this._router.navigate(['../company/'+ id ], { relativeTo: this._route});
    }

}