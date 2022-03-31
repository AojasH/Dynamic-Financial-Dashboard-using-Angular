import { Component } from '@angular/core';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
	public $summary = this.finances.summary();

	constructor(private finances: FinancesService) {}
}
