// ManufactoryService

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
import { ENTRY_POINT } from "./../../core/env/env";

@Injectable()

export class ManufactoryService {

    private entryPoint = ENTRY_POINT;

    constructor(private _http: Http) { }

    public getCompanies() {
        return this._http.get(this.entryPoint + "companies")
            .map((res: Response) => res.json());
    }

    public getGlidersByCompany(id: any) {
        return this._http.get(this.entryPoint + "gliders/" + id)
            .map((res: Response) => res.json());
    }

    public getDetailByGlider(id: any) {
        return this._http.get(this.entryPoint + "details/" + id)
            .map((res: Response) => res.json());
    }
}
