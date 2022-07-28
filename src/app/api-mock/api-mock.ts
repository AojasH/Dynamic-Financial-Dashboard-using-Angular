import { createServer } from 'miragejs';

import { overview } from './month-overview-db';
import { transactions } from './transactions-db';

// Mock API in Client Side
export function mockApi() {
	createServer({
		routes() {
			this.namespace = 'api';

			this.get('/overview', () => overview);
			this.get('/transactions', () => transactions);
		},
	});
}
