import { lsRead } from 'src/app/helpers/localStorage.helper';
import { Transaction } from 'src/app/interfaces/transaction';

export function transactionsController(): Transaction[] {
	const data = 'transactions';
	const transactions: Transaction[] = lsRead(data);

	return transactions.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
}
