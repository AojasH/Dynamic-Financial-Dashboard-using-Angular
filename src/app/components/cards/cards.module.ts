import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniCardComponent } from './mini-card/mini-card.component';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';

import { ChartsModule } from '../charts/charts.module';

@NgModule({
	declarations: [
		MiniCardComponent,
		OverviewCardComponent,
		SummaryCardComponent,
	],
	imports: [CommonModule, ChartsModule],
	exports: [MiniCardComponent, OverviewCardComponent, SummaryCardComponent],
})
export class CardsModule {}
