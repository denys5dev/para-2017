import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

import { ICompany } from './../../shared/models/Company';
import { IGlider } from './../../shared/models/Glider';
import { IGliderDetail } from '../../shared/models/IGliderDetail';

import { ENTRY_POINT } from './../../core/env/env';

@Injectable()

export class DashboardService {

    private companys: ICompany[] = [];
    private entryPoint = ENTRY_POINT;
    private userId;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) {

    }

    // COMPANY REST-----------------------------------------------------

    addCompany(company: ICompany) {

        this.userId = localStorage.getItem('userId');

        return this._http.post(this.entryPoint + 'company/' + this.userId, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    getCompanies() {
        return this._http.get(this.entryPoint + 'companies')
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    getCompanyById(id) {
        return this._http.get(this.entryPoint + 'company/' + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    deleteCompany(id) {

        this.userId = localStorage.getItem('userId');
        
        return this._http.delete(this.entryPoint + 'company/' + this.userId, new RequestOptions({
            headers: this.headers,
            body: { companyId: id }
        }))
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    updateCompany(id, company) {
        return this._http.put(this.entryPoint + 'company/' + id, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    // GLIDER MODEL REST----------------------------------------------------------

    addGliderModel(glider: IGlider) {
        return this._http.post(this.entryPoint + 'glider', glider)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    getGlidersModels() {
        return this._http.get(this.entryPoint + 'gliders')
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    deleteGliderModel(id) {
        return this._http.delete(this.entryPoint + 'glider/' + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    updateGliderModel(id, company) {
        return this._http.put(this.entryPoint + 'glider/' + id, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    // DETAILS  REST----------------------------------------------------------

    addDetails(detail: IGliderDetail) {
        return this._http.post(this.entryPoint + 'details', detail)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    getDetails() {
        return this._http.get(this.entryPoint + 'details')
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }
    deleteDetails(id) {
        return this._http.delete(this.entryPoint + 'detail/' + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }
    updateDetails(id, details) {
        return this._http.put(this.entryPoint + 'details/' + id, details)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    //NEWS REST----------------------------------------------------------------

    addNews(news) {
        return this._http.post(this.entryPoint + 'news', news)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    getNews() {
        return this._http.get(this.entryPoint + 'news')
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }

    deleteNews(id) {
        return this._http.delete(this.entryPoint + 'news/' + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            })
    }
}