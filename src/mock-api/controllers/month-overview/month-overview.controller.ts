import { lsRead } from 'src/app/helpers/localStorage.helper';
import { MonthOverview } from 'src/app/interfaces/month-overview';
import { getExpenseSummary } from '../expense-summary/expense-summary.controller';

const name = 'monthOverview';

export function getMonthOverview(): MonthOverview[] {
	const data: MonthOverview[] = lsRead(name);

	const expenseSummary = getExpenseSummary();

	data.push({
		month: 'Mar/22',
		income: expenseSummary.income,
		outcome: expenseSummary.outgoing,
	});

	return data;
}
