import { createServer } from 'miragejs';

import { lsSave } from '../app/helpers/localStorage.helper';

import { monthOverviewsSeed } from './controllers/month-overview/month-overview.data';
import { transactionsSeed } from './controllers/transactions/transactions.data';
import { summarySeed } from './controllers/expense-summary/expense-summary.data';
import { paymentOptionsSeed } from './controllers/payment-options/payment-options.data';
import { expenseCategoriesSeed } from './controllers/expense-categories/expense-categories.data';

import { getMonthOverview } from './controllers/month-overview/month-overview.controller';
import { getMonthSpending } from './controllers/month-spending/month-spending.controller';
import {
	getTransactions,
	newTransaction,
} from './controllers/transactions/transactions.controller';
import { getExpenseSummary } from './controllers/expense-summary/expense-summary.controller';
import { getMonthSummary } from './controllers/month-summary/month-summary.controller';
import { getPaymentOptions } from './controllers/payment-options/payment-options.controller';
import { getExpenseCategories } from './controllers/expense-categories/expense-categories.controller';

// Mock API in Client Side
export function mockApi() {
	populateLocalStorage();

	createServer({
		routes() {
			this.namespace = 'api';

			this.get('/expense-summary', () => getExpenseSummary());
			this.get('/month-overview', () => getMonthOverview());
			this.get('/month-spending', () => getMonthSpending());
			this.get('/month-summary', () => getMonthSummary());
			this.get('/transactions', () => getTransactions());
			this.get('/payment-options', () => getPaymentOptions());
			this.get('/expense-categories', () => getExpenseCategories());

			this.post('/transactions/new', async (schema, request) => {
				const res = await newTransaction(
					JSON.parse(request.requestBody)
				);

				return res;
			});
		},
	});
}

function populateLocalStorage() {
	const itens = {
		transactions: transactionsSeed,
		monthOverview: monthOverviewsSeed,
		summary: summarySeed,
		paymentOptions: paymentOptionsSeed,
		expenseCategories: expenseCategoriesSeed,
	};

	for (const item in itens) {
		const key = item as keyof typeof itens;

		const lsData = localStorage.getItem(item);

		if (!lsData) lsSave(itens[key], item);
	}
}
