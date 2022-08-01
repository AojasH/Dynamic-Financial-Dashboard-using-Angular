import { lsRead } from 'src/app/helpers/localStorage.helper';
import { ExpenseCategorie } from 'src/app/interfaces/expense-categorie';

export function expenseCategoriesController(): ExpenseCategorie[] {
	const data = 'expenseCategories';
	const expenseCategories: ExpenseCategorie[] = lsRead(data);

	return expenseCategories;
}
