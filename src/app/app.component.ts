import { Component } from '@angular/core';
import { createServer } from 'miragejs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor() {
		// Mock API in Client Side
		createServer({
			routes() {
				this.namespace = 'api';

				this.get('/spending', () => {
					return {
						spending: [
							{ spent: 'Carro', value: 700 },
							{ spent: 'Comida', value: 136 },
							{ spent: 'Roupa', value: 340 },
							{ spent: 'Faculdade', value: 467.32 },
							{ spent: 'Combustível', value: 123.7 },
						],
					};
				});

				this.get('/overview', () => {
					return {
						overview: [
							{ month: 'Fev/21', income: 800.41, outcome: 654 },
							{
								month: 'Mar/21',
								income: 1345.41,
								outcome: 1445.41,
							},
							{
								month: 'Abr/21',
								income: 2563.41,
								outcome: 1234.41,
							},
							{
								month: 'Mai/21',
								income: 475.41,
								outcome: 800.41,
							},
							{
								month: 'Jun/21',
								income: 1785.12,
								outcome: 885.41,
							},
							{
								month: 'Jul/21',
								income: 1100.32,
								outcome: 1000.41,
							},
							{
								month: 'Ago/21',
								income: 2450.92,
								outcome: 2950.41,
							},
							{
								month: 'Set/21',
								income: 1700.67,
								outcome: 1230.41,
							},
							{
								month: 'Nov/21',
								income: 1400.21,
								outcome: 1020.41,
							},
							{
								month: 'Dez/21',
								income: 1900.4,
								outcome: 1100.41,
							},
							{
								month: 'Jan/22',
								income: 1800.1,
								outcome: 800.41,
							},
							{
								month: 'Fev/22',
								income: 2351.7,
								outcome: 1767.02,
							},
						],
					};
				});
			},
		});
	}
}
