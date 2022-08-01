import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from 'src/app/components/cards/cards.module';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'src/app/components/button/button.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NewTransactionModule } from 'src/app/components/modals/new-transaction/new-transaction.module';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: DashboardComponent }]),
		CardsModule,
		ButtonModule,
		NewTransactionModule,
	],
	exports: [],
})
export class DashboardModule {}
