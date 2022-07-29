import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap, tap } from 'rxjs';

import { Summary } from '../interfaces/summary';
import { Spending } from '../interfaces/spending';
import { Transaction } from '../interfaces/transaction';
import { MonthOverview } from '../interfaces/month-overview';

@Injectable({
	providedIn: 'root',
})
export class FinancesService {
	private transactionsData!: Transaction[];
	private monthOverviewData!: MonthOverview[];

	constructor(private httpClient: HttpClient) {}

	public monthTransactions(): Observable<Transaction[]> {
		if (this.transactionsData) return of(this.transactionsData);

		return this.httpClient
			.get<{ transactions: Transaction[] }>('/api/transactions')
			.pipe(
				map((data) => {
					return data.transactions.sort(
						(a, b) =>
							new Date(a.date).getTime() -
							new Date(b.date).getTime()
					);
				}),
				tap((data) => (this.transactionsData = data))
			);
	}

	public overview(): Observable<MonthOverview[]> {
		if (this.monthOverviewData) return of(this.monthOverviewData);

		return this.httpClient
			.get<{ monthOverviews: MonthOverview[] }>('/api/month-overview')
			.pipe(
				map((x) => x.monthOverviews),
				tap((data) => (this.monthOverviewData = data))
			);
	}

	public getMonthSummary(): Observable<Summary> {
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
		return this.monthTransactions().pipe(
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
					result.sort((a, b) =>
						a.value > b.value ? 1 : b.value > a.value ? -1 : 0
					)
				);
			})
		);
	}
}
