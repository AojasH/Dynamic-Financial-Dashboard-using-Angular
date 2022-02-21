import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/interfaces/summary';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	summary!: Summary;

	constructor(private finances: FinancesService) {}

	ngOnInit(): void {
		this.finances.getSummary().subscribe((res) => {
			this.summary = res;
		});
	}
}
