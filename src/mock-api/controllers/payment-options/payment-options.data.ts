import { PaymentOption } from 'src/app/interfaces/payment-options';

export const paymentOptionsSeed: PaymentOption[] = [
	{
		id: 'money',
		name: 'Dinheiro',
		icon: 'money_icon',
	},
	{
		id: 'pix',
		name: 'PIX',
		icon: 'pix_icon',
	},
	{
		id: 'credit_card_master',
		name: 'Cartão de Crédito Mastercard',
		flag: 'mastercard',
		icon: 'mastercard_icon',
	},
];
