import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModule } from 'src/app/components/cards/cards.module';

import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: DashboardComponent }]),
		CardsModule,
	],
	exports: [],
})
export class DashboardModule {}
