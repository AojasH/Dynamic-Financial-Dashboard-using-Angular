import { PaymentOption } from './payment-options';

export interface Transaction {
	name: string;
	date: Date;
	category: string;
	value: number;
	method: PaymentOption;
}
