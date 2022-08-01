import { lsRead } from 'src/app/helpers/localStorage.helper';
import { PaymentOption } from 'src/app/interfaces/payment-options';

export function paymentOptionsController(): PaymentOption[] {
	const data = 'paymentOptions';
	const paymentOptions: PaymentOption[] = lsRead(data);

	return paymentOptions;
}
