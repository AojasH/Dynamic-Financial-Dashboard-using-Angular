import { MonthSummary } from 'src/app/interfaces/month-summary';
import { getExpenseSummary } from '../expense-summary/expense-summary.controller';

export function getMonthSummary(): MonthSummary {
	const { outgoing } = getExpenseSummary();

	const monthDays = 31;
	const monthWeeks = 5;

	const dailyOutgoing = outgoing / monthDays;
	const weeklyOutgoing = outgoing / monthWeeks;
	const monthOutgoing = outgoing;

	return { dailyOutgoing, weeklyOutgoing, monthOutgoing };
}
