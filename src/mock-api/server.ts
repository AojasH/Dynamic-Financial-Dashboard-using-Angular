import { createServer } from 'miragejs';

import { lsSave } from '../app/helpers/localStorage.helper';

import { monthOverviewsSeed } from './controllers/month-overview/month-overview.data';
import { transactionsSeed } from './controllers/transactions/transactions.data';
import { summarySeed } from './controllers/expense-summary/expense-summary.data';

import { monthOverviewController } from './controllers/month-overview/month-overview.controller';
import { monthSpendingController } from './controllers/month-spending/month-spending.controller';
import { transactionsController } from './controllers/transactions/transactions.controller';
import { expenseSummaryController } from './controllers/expense-summary/expense-summary.controller';
import { monthSummaryController } from './controllers/month-summary/month-summary.controller';

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
		},
	});
}

function populateLocalStorage() {
	const transactionsLS = localStorage.getItem('transactions');
	const monthOverviewLS = localStorage.getItem('monthOverview');
	const summaryLS = localStorage.getItem('summary');

	if (!transactionsLS) lsSave(transactionsSeed);
	if (!monthOverviewLS) lsSave(monthOverviewsSeed);
	if (!summaryLS) lsSave(summarySeed);
}
