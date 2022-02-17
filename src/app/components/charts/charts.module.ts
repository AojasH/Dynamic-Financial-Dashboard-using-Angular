import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryBarsComponent } from './summary-bars/summary-bars.component';
import { SummaryPieComponent } from './summary-pie/summary-pie.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
	declarations: [SummaryBarsComponent, SummaryPieComponent],
	imports: [CommonModule, NgApexchartsModule],
	exports: [SummaryBarsComponent, SummaryPieComponent],
})
export class ChartsModule {}
