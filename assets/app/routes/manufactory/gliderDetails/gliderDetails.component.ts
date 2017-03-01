// GliderDetailsComponent

import { Component, OnInit, OnDestroy, Compiler } from "@angular/core";
import { Animations } from "../../../core/animations/roteTransition";
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";

import { ManufactoryService } from "../manufactory.service";

@Component({
	selector: "gliderDetails",
	templateUrl: "gliderDetails.component.html",
	styleUrls: ["./gliderDetails.component.scss"],
	host: { "[@routeAnimation]": "true" }, animations: Animations.page
})

export class GliderDetailsComponent implements OnInit, OnDestroy {

	private details: any[];
	private glider;
	private url: any;
	private sub: any;

	constructor(private _manufactorySercive: ManufactoryService,
				         private _router: Router,
				         private _route: ActivatedRoute,
				         private _sanitizer: DomSanitizer) { }

	public ngOnInit() {
		this.sub = this._route.params
			// tslint:disable-next-line:no-string-literal
			.map((params) => params["id"])
			.subscribe((id) => {
				this._manufactorySercive.getDetailByGlider(id).subscribe((res) => {
					this.details = res.data.sizes;
					this.glider = res.data;
					this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.glider.video);
				});
			});
	}

	public ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
