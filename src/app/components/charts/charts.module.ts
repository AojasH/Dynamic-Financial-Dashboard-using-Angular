import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewLinesComponent } from './overview-line/overview-line.component';
import { SummaryDoughnutComponent } from './summary-doughnut/summary-doughnut.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [OverviewLinesComponent, SummaryDoughnutComponent],
	imports: [CommonModule, NgChartsModule],
	exports: [OverviewLinesComponent, SummaryDoughnutComponent],
})
export class ChartsModule {}
