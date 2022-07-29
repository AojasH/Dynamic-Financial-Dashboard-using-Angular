import { createServer, Model } from 'miragejs';
import { monthOverviewController } from './controllers/month_overview/controller';

import { transactionsController } from './controllers/transactions/controller';

import { monthOverviews } from './controllers/month_overview/data';
import { transactions } from './controllers/transactions/data';

// Mock API in Client Side
export function mockApi() {
	populateLocalStorage();

	createServer({
		models: {
			monthOverview: Model,
			transaction: Model,
		},

		fixtures: {
			transactions: JSON.parse(
				localStorage.getItem('transactions') ?? '[]'
			),
			monthOverviews: JSON.parse(
				localStorage.getItem('monthOverview') ?? '[]'
			),
		},

		routes() {
			this.namespace = 'api';

			this.get('/month-overview', () => monthOverviewController(this));
			this.get('/transactions', () => transactionsController(this));

			this.post('/transactions', (schema, request) => {
				const data: any = {};

				schema.create('transaction', data);

				return schema.all('transaction');
			});
		},
	});
}

function populateLocalStorage() {
	const transactionsLS = localStorage.getItem('transactions');
	const monthOverviewLS = localStorage.getItem('monthOverview');

	if (!transactionsLS)
		localStorage.setItem('transactions', JSON.stringify(transactions));
	if (!monthOverviewLS)
		localStorage.setItem('monthOverview', JSON.stringify(monthOverviews));
}
