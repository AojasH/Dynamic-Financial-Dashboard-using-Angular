import { createServer } from 'miragejs';

import { lsSave } from '../app/helpers/localStorage.helper';

import { monthOverviewsSeed } from './controllers/month-overview/month-overview.data';
import { transactionsSeed } from './controllers/transactions/transactions.data';
import { summarySeed } from './controllers/expense-summary/expense-summary.data';
import { paymentOptionsSeed } from './controllers/payment-options/payment-options.data';
import { expenseCategoriesSeed } from './controllers/expense-categories/expense-categories.data';

import { monthOverviewController } from './controllers/month-overview/month-overview.controller';
import { monthSpendingController } from './controllers/month-spending/month-spending.controller';
import { transactionsController } from './controllers/transactions/transactions.controller';
import { expenseSummaryController } from './controllers/expense-summary/expense-summary.controller';
import { monthSummaryController } from './controllers/month-summary/month-summary.controller';
import { paymentOptionsController } from './controllers/payment-options/payment-options.controller';
import { expenseCategoriesController } from './controllers/expense-categories/expense-categories.controller';

// Mock API in Client Side
export function mockApi() {
	populateLocalStorage();

	createServer({
		routes() {
			this.namespace = 'api';

			this.get('/expense-summary', () => expenseSummaryController());
			this.get('/month-overview', () => monthOverviewController());
			this.get('/month-spending', () => monthSpendingController());
			this.get('/month-summary', () => monthSummaryController());
			this.get('/transactions', () => transactionsController());
			this.get('/payment-options', () => paymentOptionsController());
			this.get('/expense-categories', () =>
				expenseCategoriesController()
			);
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
