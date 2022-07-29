import { Server } from 'miragejs';

export function monthOverviewController(server: Server) {
	return server.schema.all('monthOverview');
}
