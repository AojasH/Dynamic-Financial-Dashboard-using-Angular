import { lsRead, lsSave } from 'src/app/helpers/localStorage.helper';
import { Transaction } from 'src/app/interfaces/transaction';

const name = 'transactions';

export function getTransactions(): Transaction[] {
	const transactions: Transaction[] = lsRead(name);

	return transactions.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
}

export function newTransaction(transaction: Transaction): Promise<Response> {
	return new Promise((resolve) => {
		const transactions: Transaction[] = lsRead(name);

		transactions.push(transaction);

		lsSave(transactions, name);

		resolve(new Response(null, { status: 200, statusText: 'success' }));
	});
}
