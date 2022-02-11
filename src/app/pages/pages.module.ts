import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestmentsComponent } from './investments/investments.component';
import { CardsModule } from '../components/cards/cards.module';

@NgModule({
	declarations: [DashboardComponent, InvestmentsComponent, ConfigComponent],
	imports: [CommonModule, CardsModule],
	exports: [
		DashboardComponent,
		InvestmentsComponent,
		ConfigComponent,
		CardsModule,
	],
})
export class PagesModule {}
