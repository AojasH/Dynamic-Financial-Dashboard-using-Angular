import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseCategory } from 'src/app/interfaces/expense-categorie';
import { PaymentOption } from 'src/app/interfaces/payment-options';
import { Transaction } from 'src/app/interfaces/transaction';

@Injectable({
	providedIn: 'root',
})
export class NewTransactionService {
	constructor(private httpClient: HttpClient) {}
	public expenseCategories(): Observable<ExpenseCategory[]> {
		return this.httpClient.get<ExpenseCategory[]>(
			'/api/expense-categories'
		);
	}

	public paymentOptions(): Observable<PaymentOption[]> {
		return this.httpClient.get<PaymentOption[]>('/api/payment-options');
	}

	public addNewTransaction(transaction: Transaction): Observable<Response> {
		return this.httpClient.post<Response>(
			'/api/transactions/new',
			transaction
		);
	}
}
