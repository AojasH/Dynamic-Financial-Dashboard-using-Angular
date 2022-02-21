import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLinesComponent } from './overview-line/overview-line.component';
import { SummaryPieComponent } from './summary-pie/summary-pie.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [OverviewLinesComponent, SummaryPieComponent],
	imports: [CommonModule, NgChartsModule],
	exports: [OverviewLinesComponent, SummaryPieComponent],
})
export class ChartsModule {}
