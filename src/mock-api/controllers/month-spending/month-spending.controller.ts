import { Spending } from 'src/app/interfaces/spending';
import { transactionsController } from '../transactions/transactions.controller';

export function monthSpendingController(): Spending[] {
	const transactions = transactionsController();

	const result = Object.values(
		transactions.reduce((prev: any, curr: any) => {
			const category = curr.category;
			const value = curr.value;

			return (
				prev[category]
					? (prev[category].value += value)
					: (prev[category] = { category, value }),
				prev
			);
		}, {})
	) as Spending[];

	return result.sort((a, b) =>
		a.value > b.value ? 1 : b.value > a.value ? -1 : 0
	);
}
