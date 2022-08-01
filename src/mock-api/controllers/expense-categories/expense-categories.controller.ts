import { lsRead } from 'src/app/helpers/localStorage.helper';
import { ExpenseCategory } from 'src/app/interfaces/expense-categorie';

export function getExpenseCategories(): ExpenseCategory[] {
	const data = 'expenseCategories';
	const expenseCategories: ExpenseCategory[] = lsRead(data);

	return expenseCategories;
}
