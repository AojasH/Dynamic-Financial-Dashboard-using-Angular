import { Component } from '@angular/core';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-summary-card',
	templateUrl: './summary-card.component.html',
	styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent {
	monthSummary$ = this.finances.monthSummary();

	constructor(private finances: FinancesService) {}
}
