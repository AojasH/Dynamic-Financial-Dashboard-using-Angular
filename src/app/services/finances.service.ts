import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Summary } from '../interfaces/summary';
import { Spending } from '../interfaces/spending';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FinancesService {
	constructor(private httpClient: HttpClient) {}

	getSummary(): Observable<Summary> {
		return this.getMonthlySpending().pipe(
			switchMap((monthlySpending) => {
				const monthDays = 30;
				const monthWeeks = 4;

				const savings = 12658.45;

				const income = 2351.7;

				const outgoing = monthlySpending.reduce((acc, curr) => {
					return { spent: 'Total', value: acc.value + curr.value };
				}).value;

				const balance = income - outgoing;

				const dailyOutgoing = outgoing / monthDays;
				const weeklyOutgoing = outgoing / monthWeeks;
				const monthOutgoing = outgoing;

				return of({
					income,
					outgoing,
					balance,
					savings,
					dailyOutgoing,
					weeklyOutgoing,
					monthOutgoing,
				});
			})
		);
	}

	getMonthlySpending(): Observable<Spending[]> {
		return this.httpClient.get<Spending[]>(
			'http://localhost:3000/spending'
		);
	}

	getOverview() {
		return of([
			{ month: 'Fev/21', income: 800.41, outcome: 654 },
			{ month: 'Mar/21', income: 1345.41, outcome: 1445.41 },
			{ month: 'Abr/21', income: 2563.41, outcome: 1234.41 },
			{ month: 'Mai/21', income: 475.41, outcome: 800.41 },
			{ month: 'Jun/21', income: 1785.12, outcome: 885.41 },
			{ month: 'Jul/21', income: 1100.32, outcome: 1000.41 },
			{ month: 'Ago/21', income: 2450.92, outcome: 2950.41 },
			{ month: 'Set/21', income: 1700.67, outcome: 1230.41 },
			{ month: 'Nov/21', income: 1400.21, outcome: 1020.41 },
			{ month: 'Dez/21', income: 1900.4, outcome: 1100.41 },
			{ month: 'Jan/22', income: 1800.1, outcome: 800.41 },
			{ month: 'Fev/22', income: 2351.7, outcome: 1767.02 },
		]); // Data must come from backend
	}
}
