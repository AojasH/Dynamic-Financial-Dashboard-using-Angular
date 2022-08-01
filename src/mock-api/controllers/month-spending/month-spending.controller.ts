import { Spending } from 'src/app/interfaces/spending';
import { expenseCategoriesSeed } from '../expense-categories/expense-categories.data';
import { getTransactions } from '../transactions/transactions.controller';

export function getMonthSpending(): Spending[] {
	const transactions = getTransactions();

	const result = Object.values(
		transactions.reduce((prev: any, curr) => {
			const expenseCategory = expenseCategoriesSeed.find(
				(x) => x.id == curr.category
			);

			if (!expenseCategory) return;

			const value = curr.value;
			const category = expenseCategory.name;

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
