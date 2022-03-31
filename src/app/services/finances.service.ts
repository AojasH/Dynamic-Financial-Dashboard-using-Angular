import { Injectable } from '@angular/core';
import { Observable, of, pluck, switchMap, tap } from 'rxjs';
import { Summary } from '../interfaces/summary';
import {
	ApiOverview,
	ApiTransaction,
	Overview,
	Spending,
	Transaction,
} from '../api-mock/api-mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FinancesService {
	private transactionsData!: Transaction[];
	private overviewData!: Overview[];

	constructor(private httpClient: HttpClient) {}

	public transactions(): Observable<Transaction[]> {
		if (this.transactionsData) return of(this.transactionsData);

		return this.httpClient.get<ApiTransaction>('/api/transactions').pipe(
			pluck('transactions'),
			tap((data) => (this.transactionsData = data))
		);
	}

	public summary(): Observable<Summary> {
		return this.monthlySpending().pipe(
			switchMap((monthlySpending: Spending[]) => {
				const monthDays = 31;
				const monthWeeks = 5;

				const savings = 12658.45;

				const income = 3351.7;

				const outgoing = monthlySpending.reduce((acc, curr) => {
					return {
						category: 'Total',
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

	public monthlySpending(): Observable<Spending[]> {
		return this.transactions().pipe(
			switchMap((data) => {
				const result = Object.values(
					data.reduce((prev: any, curr: any) => {
						const category = curr.category;
						const value = curr.value;

						return (
							prev[category]
								? (prev[category].value += value)
								: (prev[category] = { category, value }),
							prev
						);
					}, {})
				) as Spending[];

				return of(
					result.sort((a: any, b: any) =>
						a.value > b.value ? 1 : b.value > a.value ? -1 : 0
					)
				);
			})
		);
	}

	public overview(): Observable<Overview[]> {
		if (this.overviewData) return of(this.overviewData);

		return this.httpClient.get<ApiOverview>('/api/overview').pipe(
			pluck('overview'),
			tap((data) => (this.overviewData = data))
		);
	}
}
