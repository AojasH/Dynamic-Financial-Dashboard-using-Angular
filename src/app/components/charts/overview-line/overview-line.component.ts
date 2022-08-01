import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

import { colors } from 'src/styles/variables';
import { FinancesService } from 'src/app/services/finances/finances.service';

@Component({
	selector: 'app-summary-bars',
	templateUrl: './overview-line.component.html',
	styleUrls: ['./overview-line.component.scss'],
})
export class OverviewLinesComponent implements OnInit, OnDestroy {
	@ViewChild(BaseChartDirective) private chart!: BaseChartDirective;

	private financeService$!: Subscription;

	public chartType: ChartType = 'line';
	public chartPlugins = [DataLabelsPlugin];

	public chartOptions: ChartConfiguration['options'] = {
		animation: {
			duration: 0,
		},
		datasets: {
			line: {
				fill: true,
				pointRadius: 0,
				pointHitRadius: 25,
				pointHoverBorderWidth: 3,
				pointHoverRadius: 8,
				pointHoverBorderColor: colors.border,
				pointBorderColor: colors.border,
			},
		},
		elements: {
			line: {
				tension: 0.5,
			},
		},
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			x: {
				ticks: {
					font: {
						family: 'Work Sans',
						size: 16,
					},
					color: colors.text.secondary,
				},
				grid: { display: false },
			},
			y: {
				min: 0,
				ticks: {
					callback: (label) =>
						label < 1000 ? label : `${(label as number) / 1000}K`,
					stepSize: 500,
					font: {
						family: 'Work Sans',
						size: 16,
					},
					padding: 10,
					color: colors.text.secondary,
				},
				alignToPixels: true,
				grid: {
					color: colors.text.secondary,
					borderDash: [4, 8],
					borderWidth: 0,
					lineWidth: 2,
				},
			},
		},
		plugins: {
			legend: { display: false },
			datalabels: { display: false },
			tooltip: {
				enabled: true,
				callbacks: {
					label: (ctx) =>
						this.currencyPipe.transform(ctx.parsed.y, 'BRL') ?? '',
					title: (ctx) =>
						ctx[0].datasetIndex === 1
							? 'Gasto em ' + ctx[0].label
							: 'Entrada em ' + ctx[0].label,
				},
				displayColors: false,
				backgroundColor: colors.border,
				padding: { left: 15, right: 15, top: 5, bottom: 5 },
				bodyFont: { family: 'Work Sans', size: 16 },
				bodyAlign: 'center',
				bodySpacing: 4,
				titleAlign: 'center',
				titleColor: colors.text.secondary,
				titleFont: { family: 'Work Sans', size: 16, weight: 'normal' },
				titleMarginBottom: 2,
			},
		},
	};

	public chartData: ChartData<'line'> = {
		labels: [],
		datasets: [
			{
				data: [],
				backgroundColor: (context) => {
					const chart = context.chart;
					const { ctx, chartArea } = chart;

					if (chartArea) {
						const gradient = ctx.createLinearGradient(
							0,
							chartArea.bottom,
							0,
							chartArea.top
						);

						gradient.addColorStop(1, colors.gradient.income.top);
						gradient.addColorStop(0, colors.gradient.income.bot);

						return gradient;
					}

					return undefined;
				},
				borderColor: colors.primary,
				pointBackgroundColor: colors.primary,
				pointHoverBackgroundColor: colors.primary,
			},
			{
				data: [],
				backgroundColor: (context) => {
					const chart = context.chart;
					const { ctx, chartArea } = chart;

					if (chartArea) {
						const gradient = ctx.createLinearGradient(
							0,
							chartArea.bottom,
							0,
							chartArea.top
						);

						gradient.addColorStop(1, colors.gradient.outcome.top);
						gradient.addColorStop(0, colors.gradient.outcome.bot);

						return gradient;
					}

					return undefined;
				},
				borderColor: colors.secondary,
				pointBackgroundColor: colors.secondary,
				pointHoverBackgroundColor: colors.secondary,
			},
		],
	};

	constructor(
		private currencyPipe: CurrencyPipe,
		private financesService: FinancesService
	) {}

	ngOnInit(): void {
		this.financeService$ = this.financesService
			.monthOverview()
			.subscribe((res) => {
				const months = res.map(({ month }) => month);
				const income = res.map(({ income }) => income);
				const outcome = res.map(({ outcome }) => outcome);

				this.chartData.labels = months;
				this.chartData.datasets[0].data = income;
				this.chartData.datasets[1].data = outcome;
				this.chart?.update();
			});
	}

	ngOnDestroy(): void {
		this.financeService$.unsubscribe();
	}
}
