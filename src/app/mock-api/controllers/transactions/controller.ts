import { Server } from 'miragejs';

export function transactionsController(server: Server) {
	return server.schema.all('transaction');
}
