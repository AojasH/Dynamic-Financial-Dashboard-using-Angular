import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
	public title!: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(
				() =>
					(this.title =
						activatedRoute.snapshot.firstChild?.data.title)
			);
	}
}
