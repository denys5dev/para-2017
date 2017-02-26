// DashboardService

import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

import { Company } from "./../../shared/models/Company";
import { Glider } from "./../../shared/models/Glider";
import { GliderDetail } from "../../shared/models/GliderDetail";
import { News } from "./../../shared/models/News"

import { ENTRY_POINT } from "./../../core/env/env";

@Injectable()

export class DashboardService {

    private companys: Company[] = [];
    private entryPoint = ENTRY_POINT;
    private userId;
    private headers = new Headers({ "Content-Type": "application/json" });

    constructor(private _http: Http) {

    }

    // COMPANY REST-----------------------------------------------------

    public addCompany(company: Company) {

        this.userId = localStorage.getItem("userId");

        return this._http.post(this.entryPoint + "company/" + this.userId, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getCompanies() {
        return this._http.get(this.entryPoint + "companies")
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getCompanyById(id) {
        return this._http.get(this.entryPoint + "company/" + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public deleteCompany(id) {

        this.userId = localStorage.getItem("userId");

        return this._http.delete(this.entryPoint + "company/" + this.userId, new RequestOptions({
            headers: this.headers,
            body: { companyId: id }
        }))
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public updateCompany(id, company) {
        return this._http.put(this.entryPoint + "company/" + id, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    // GLIDER MODEL REST----------------------------------------------------------

    public addGliderModel(glider: Glider) {
        return this._http.post(this.entryPoint + "glider", glider)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getGlidersModels() {
        return this._http.get(this.entryPoint + "gliders")
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public deleteGliderModel(id) {
        return this._http.delete(this.entryPoint + "glider/" + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public updateGliderModel(id, company) {
        return this._http.put(this.entryPoint + "glider/" + id, company)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    // DETAILS  REST----------------------------------------------------------

    public addDetails(detail: GliderDetail) {
        return this._http.post(this.entryPoint + "details", detail)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getDetails() {
        return this._http.get(this.entryPoint + "details")
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }
    public deleteDetails(id) {
        return this._http.delete(this.entryPoint + "detail/" + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }
    public updateDetails(id, details) {
        return this._http.put(this.entryPoint + "details/" + id, details)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    // NEWS REST----------------------------------------------------------------

    public addNews(news: News) {
        return this._http.post(this.entryPoint + "news", news)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getNews() {
        return this._http.get(this.entryPoint + "news")
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public getNewsById(id) {
        return this._http.get(this.entryPoint + "news/" + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    public deleteNews(id) {
        return this._http.delete(this.entryPoint + "news/" + id)
            .map((res: Response) => res.json())
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }
}
