import { MonthSummary } from 'src/app/interfaces/month-summary';
import { expenseSummaryController } from '../expense-summary/expense-summary.controller';

export function monthSummaryController(): MonthSummary {
	const { outgoing } = expenseSummaryController();

	const monthDays = 31;
	const monthWeeks = 5;

	const dailyOutgoing = outgoing / monthDays;
	const weeklyOutgoing = outgoing / monthWeeks;
	const monthOutgoing = outgoing;

	return { dailyOutgoing, weeklyOutgoing, monthOutgoing };
}
