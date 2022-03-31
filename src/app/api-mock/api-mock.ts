import { createServer } from 'miragejs';

export interface Transaction {
	name: string;
	date?: {
		day: number;
		month: number;
		year: number;
	};
	category?: string;
	value: number;
	method?: {
		name: string;
		flag?: string;
		icon: string;
	};
}

export interface Spending {
	category: string;
	value: number;
}

export interface Overview {
	month: string;
	income: number;
	outcome: number;
}

export interface ApiTransaction {
	transactions: Transaction[];
}

export interface ApiSpending {
	spending: Spending[];
}

export interface ApiOverview {
	overview: Overview[];
}

const overview: Overview[] = [
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
	{
		month: 'Mar/22',
		income: 3351.7,
		outcome: 2986.74,
	},
];

const transactions: Transaction[] = [
	{
		name: 'iFood',
		date: {
			day: 21,
			month: 3,
			year: 2022,
		},
		category: 'Comida',
		value: 57.86,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Restaurante Lorem Ipsum',
		date: {
			day: 21,
			month: 3,
			year: 2022,
		},
		category: 'Comida',
		value: 238.16,
		method: {
			name: 'PIX',
			icon: 'pix_icon',
		},
	},
	{
		name: 'Financiamento Carro',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Carro',
		value: 700,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Uber',
		date: {
			day: 14,
			month: 3,
			year: 2022,
		},
		category: 'Transporte',
		value: 11.9,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Uber',
		date: {
			day: 14,
			month: 3,
			year: 2022,
		},
		category: 'Transporte',
		value: 10.94,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Xbox Game Pass',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Jogos',
		value: 29.99,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Spotify',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Streaming',
		value: 29.99,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Netflix',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Streaming',
		value: 39.9,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Combustível',
		date: {
			day: 12,
			month: 3,
			year: 2022,
		},
		category: 'Carro',
		value: 150,
		method: {
			name: 'Cartão de Crédito',
			flag: 'mastercard',
			icon: 'mastercard_icon',
		},
	},
	{
		name: 'Estacionamento',
		date: {
			day: 12,
			month: 3,
			year: 2022,
		},
		category: 'Carro',
		value: 18,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Faculdade',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Educação',
		value: 1200,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Poupança',
		date: {
			day: 1,
			month: 3,
			year: 2022,
		},
		category: 'Investimentos',
		value: 500,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
];

// Mock API in Client Side
export function mockApi() {
	createServer({
		routes() {
			this.namespace = 'api';

			this.get('/overview', () => {
				return { overview };
			});

			this.get('/transactions', () => {
				return { transactions };
			});
		},
	});
}
