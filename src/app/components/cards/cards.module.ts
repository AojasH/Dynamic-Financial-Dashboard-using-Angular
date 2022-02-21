import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountUpModule } from 'ngx-countup';

import { MiniCardComponent } from './mini-card/mini-card.component';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';

import { ChartsModule } from '../charts/charts.module';
import { TransactionsCardComponent } from './transactions-card/transactions-card.component';

@NgModule({
	declarations: [
		MiniCardComponent,
		OverviewCardComponent,
		SummaryCardComponent,
		TransactionsCardComponent,
	],
	imports: [CommonModule, ChartsModule, CountUpModule],
	exports: [
		MiniCardComponent,
		OverviewCardComponent,
		SummaryCardComponent,
		TransactionsCardComponent,
	],
})
export class CardsModule {}
