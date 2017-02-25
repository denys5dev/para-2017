import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManufactoryService } from '../manufactory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Glider } from '../../../shared/models/Glider';
import { Animations } from '../../../core/animations/roteTransition';

@Component({
	selector: 'app-glider-models',
	templateUrl: 'gliderModels.component.html',
	styleUrls: ['./gliderModels.component.scss'],
	host: { '[@routeAnimation]': 'true' },
	animations: Animations.page
})

export class GliderModelsComponent implements OnInit, OnDestroy {

	gliders: any[]
	private sub: any;

	constructor(private _manufactorySercive: ManufactoryService, private _router: Router, private _route: ActivatedRoute) {

	}

	ngOnInit() {
		this.sub = this._route.params
			.map(params => params['id'])
			.subscribe(id => {
				this._manufactorySercive.getGlidersByCompany(id).subscribe(res => {
					this.gliders = res.data.gliders;
				})
			});
	}

	goToDetail(id) {
		this._router.navigate(['../../detail/'+ id ], { relativeTo: this._route});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}