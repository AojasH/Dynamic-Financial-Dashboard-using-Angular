import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NewTransactionComponent } from './new-transaction.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [NewTransactionComponent],
	imports: [
		CommonModule,
		NgxSmartModalModule.forRoot(),
		CurrencyMaskModule,
		ReactiveFormsModule,
	],
	exports: [NewTransactionComponent],
	providers: [DatePipe],
})
export class NewTransactionModule {}
