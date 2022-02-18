import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBarsComponent } from './summary-bars/summary-bars.component';
import { SummaryPieComponent } from './summary-pie/summary-pie.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [SummaryBarsComponent, SummaryPieComponent],
	imports: [CommonModule, NgChartsModule],
	exports: [SummaryBarsComponent, SummaryPieComponent],
})
export class ChartsModule {}
