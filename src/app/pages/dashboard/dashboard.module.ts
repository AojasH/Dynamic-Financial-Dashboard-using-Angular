import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardsModule } from 'src/app/components/cards/cards.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, DashboardRoutingModule, CardsModule],
	exports: [],
})
export class DashboardModule {}
