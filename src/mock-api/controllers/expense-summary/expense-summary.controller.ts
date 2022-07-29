import { ExpenseSummary } from 'src/app/interfaces/expense-summary';
import { lsRead } from 'src/app/helpers/localStorage.helper';
import { monthSpendingController } from '../month-spending/month-spending.controller';

export function expenseSummaryController(): ExpenseSummary {
	const monthSpending = monthSpendingController();
	const expenseSummary: ExpenseSummary = lsRead('summary');

	const outgoing = monthSpending.reduce((acc, curr) => acc + curr.value, 0);
	const balance = expenseSummary.income - outgoing;

	return { ...expenseSummary, outgoing, balance };
}
