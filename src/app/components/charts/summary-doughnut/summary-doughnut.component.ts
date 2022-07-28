import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

import { colors } from 'src/styles/variables';
import { FinancesService } from 'src/app/services/finances.service';
import { ChartConfigurationExtended } from 'src/app/interfaces/chart-fix';

@Component({
	selector: 'app-summary-doughnut',
	templateUrl: './summary-doughnut.component.html',
	styleUrls: ['./summary-doughnut.component.scss'],
})
export class SummaryDoughnutComponent implements OnInit, OnDestroy {
	@ViewChild(BaseChartDirective) private chart!: BaseChartDirective;

	private financesService$!: Subscription;

	public colors: string[] = colors.array;

	public chartType: ChartType = 'doughnut';

	public chartData: ChartData<'doughnut'> = {
		labels: [],
		datasets: [
			{
				data: [],
				borderWidth: 0,
				backgroundColor: colors.array,
				hoverBackgroundColor: colors.array,
				hoverBorderColor: colors.array,
				hoverOffset: 0,
			},
		],
	};

	public chartOptions: ChartConfigurationExtended['options'] = {
		animation: { duration: 0 },
		maintainAspectRatio: false,
		cutout: '70%',
		plugins: {
			legend: { display: false },
			tooltip: {
				enabled: true,
				callbacks: {
					label: (ctx) =>
						this.currencyPipe.transform(ctx.parsed, 'BRL') ?? '',
					title: (ctx) => ctx[0].label,
				},
				backgroundColor: colors.border,
				titleAlign: 'center',
				titleColor: colors.text.secondary,
				titleFont: { family: 'Work Sans', size: 16, weight: 'normal' },
				titleMarginBottom: 2,
				bodyFont: { family: 'Work Sans', size: 16 },
				bodyAlign: 'center',
				bodySpacing: 4,
				padding: { left: 15, right: 15, top: 5, bottom: 5 },
				displayColors: false,
			},
			datalabels: {
				display: false,
			},
		},
	};

	public chartPlugins = [DatalabelsPlugin];

	constructor(
		private currencyPipe: CurrencyPipe,
		private financesService: FinancesService
	) {}

	public ngOnInit(): void {
		this.financesService$ = this.financesService
			.monthlySpending()
			.subscribe((res) => {
				const spendingValue = res.map(({ value }) => value);
				const spendingLabels = res.map(({ category }) => category);

				this.chartData.datasets[0].data = spendingValue;
				this.chartData.labels = spendingLabels;

				if (this.chart) this.chart.update();
			});
	}

	public ngOnDestroy(): void {
		this.financesService$.unsubscribe();
	}
}
