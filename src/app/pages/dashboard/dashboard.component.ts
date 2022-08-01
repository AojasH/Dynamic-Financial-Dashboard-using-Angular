import { Component } from '@angular/core';
import { FinancesService } from 'src/app/services/finances/finances.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
	public $expenseSummary = this.financesService.expenseSummary();
	constructor(private financesService: FinancesService) {}
}
