import { Transaction } from '../../../interfaces/transaction';

export const transactions: Transaction[] = [
	{
		name: 'iFood',
		date: new Date('03/21/2022'),
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
		date: new Date('03/21/2022'),
		category: 'Comida',
		value: 238.16,
		method: {
			name: 'PIX',
			icon: 'pix_icon',
		},
	},
	{
		name: 'Financiamento Carro',
		date: new Date('03/01/2022'),
		category: 'Carro',
		value: 700,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Uber',
		date: new Date('03/14/2022'),
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
		date: new Date('03/14/2022'),
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
		date: new Date('03/01/2022'),
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
		date: new Date('03/01/2022'),
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
		date: new Date('03/11/2022'),
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
		date: new Date('03/12/2022'),
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
		date: new Date('03/12/2022'),
		category: 'Carro',
		value: 18,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Faculdade',
		date: new Date('03/01/2022'),
		category: 'Educação',
		value: 1200,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
	{
		name: 'Poupança',
		date: new Date('03/01/2022'),
		category: 'Investimentos',
		value: 500,
		method: {
			name: 'Dinheiro',
			icon: 'money_icon',
		},
	},
];
