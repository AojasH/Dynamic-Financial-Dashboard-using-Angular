import { Injectable } from '@angular/core';
import { Observable, of, pluck, switchMap } from 'rxjs';
import { Summary } from '../interfaces/summary';
import { ApiOverview, ApiSpending, Spending } from '../interfaces/api-mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FinancesService {
	constructor(private httpClient: HttpClient) {}

	getSummary(): Observable<Summary> {
		return this.getMonthlySpending().pipe(
			pluck('spending'),
			switchMap((monthlySpending: Spending[]) => {
				const monthDays = 30;
				const monthWeeks = 4;

				const savings = 12658.45;

				const income = 2351.7;

				const outgoing = monthlySpending.reduce((acc, curr) => {
					return {
						spent: 'Total',
						value: acc.value + curr.value,
					};
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

	getMonthlySpending(): Observable<ApiSpending> {
		return this.httpClient.get<ApiSpending>('/api/spending');
	}

	getOverview(): Observable<ApiOverview> {
		return this.httpClient.get<ApiOverview>('/api/overview');
	}
}
