import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/interfaces/summary';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-summary-card',
	templateUrl: './summary-card.component.html',
	styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent implements OnInit {
	summary!: Summary;

	constructor(private finances: FinancesService) {}

	ngOnInit(): void {
		this.finances.getSummary().subscribe((res) => (this.summary = res));
	}
}
