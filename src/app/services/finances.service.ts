import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ExpenseSummary } from '../interfaces/expense-summary';
import { Spending } from '../interfaces/spending';
import { Transaction } from '../interfaces/transaction';
import { MonthOverview } from '../interfaces/month-overview';
import { MonthSummary } from '../interfaces/month-summary';

@Injectable({
	providedIn: 'root',
})
export class FinancesService {
	constructor(private httpClient: HttpClient) {}

	// "Balanço Entrada Saída Poupança" (minicards)
	public expenseSummary(): Observable<ExpenseSummary> {
		return this.httpClient.get<ExpenseSummary>('/api/expense-summary');
	}

	// "Visão Geral" (line chart)
	public monthOverview(): Observable<MonthOverview[]> {
		return this.httpClient.get<MonthOverview[]>('/api/month-overview');
	}

	// "Resumo de Março" (doughnut chart)
	public monthSpending(): Observable<Spending[]> {
		return this.httpClient.get<Spending[]>('/api/month-spending');
	}

	// "Resumo de Março" (categories)
	public monthSummary(): Observable<MonthSummary> {
		return this.httpClient.get<MonthSummary>('/api/month-summary');
	}

	// All Transactions (table)
	public transactions(): Observable<Transaction[]> {
		return this.httpClient.get<Transaction[]>('/api/transactions');
	}
}
