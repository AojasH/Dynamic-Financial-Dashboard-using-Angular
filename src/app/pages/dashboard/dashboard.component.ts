import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	balance: number = 0;
	outgoing: number = 0;
	income: number = 0;

	constructor() {}

	ngOnInit(): void {
		this.calculateBalance();
	}

	calculateBalance() {
		this.income = 2354.7;
		this.outgoing = 1453.23;

		this.balance = this.income - this.outgoing;
	}
}
