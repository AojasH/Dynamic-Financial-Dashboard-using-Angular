import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Transaction } from 'src/app/interfaces/transaction';
import { FinancesService } from 'src/app/services/finances/finances.service';
import { NewTransactionService } from 'src/app/services/new-transaction/new-transaction.service';

@Component({
	selector: 'app-new-transaction',
	templateUrl: './new-transaction.component.html',
	styleUrls: ['./new-transaction.component.scss'],
})
export class NewTransactionComponent {
	public $paymentOptions = this.newTransactionService.paymentOptions();
	public $expenseCategories = this.newTransactionService.expenseCategories();

	public newTransactionForm = this.formBuilder.group({
		name: [null, Validators.required],
		date: [
			this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
			Validators.required,
		],
		category: [null, Validators.required],
		value: [null, Validators.required],
		method: [null, Validators.required],
	});

	constructor(
		private newTransactionService: NewTransactionService,
		private ngxSmartModalService: NgxSmartModalService,
		private formBuilder: FormBuilder,
		private datePipe: DatePipe,
		private financesService: FinancesService
	) {}

	public open(): void {
		this.ngxSmartModalService.open('addTransactionModal');
	}

	public onSubmit(): void {
		const { name, date, category, value, method } =
			this.newTransactionForm.value;

		const data: Transaction = {
			name: name!,
			date: new Date(date!),
			category: category!,
			value: value!,
			method: method!,
		};

		this.newTransactionService.addNewTransaction(data).subscribe((res) => {
			if (res.status === 200) {
				this.financesService.updateValues();
				this.newTransactionForm.reset();
			}
		});
	}
}
