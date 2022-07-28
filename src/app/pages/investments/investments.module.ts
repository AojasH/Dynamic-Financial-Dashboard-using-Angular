import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { InvestmentsComponent } from './investments.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: InvestmentsComponent }]),
	],
})
export class InvestmentsModule {}
