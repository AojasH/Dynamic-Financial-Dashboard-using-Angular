import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';

import { colors } from 'src/styles/variables';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-summary-bars',
	templateUrl: './overview-line.component.html',
	styleUrls: ['./overview-line.component.scss'],
})
export class OverviewLinesComponent implements OnInit {
	@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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
					callback: (label) => {
						if (label < 1000) return label;

						return `${(label as number) / 1000}K`;
					},
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
					label: (context) => {
						const value = context.raw as number;

						return this.currencyPipe.transform(
							value,
							'BRL'
						) as string;
					},
					title: (ctx) => {
						if (ctx[0].datasetIndex === 1)
							return 'Gasto em ' + ctx[0].label;

						return 'Entrada em ' + ctx[0].label;
					},
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

					return '';
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

					return '';
				},
				borderColor: colors.secondary,
				pointBackgroundColor: colors.secondary,
				pointHoverBackgroundColor: colors.secondary,
			},
		],
	};

	constructor(
		private currencyPipe: CurrencyPipe,
		private finance: FinancesService
	) {}

	ngOnInit(): void {
		this.finance.getOverview().subscribe((res) => {
			const months = res.map(({ month }) => {
				return month;
			});

			const income = res.map(({ income }) => {
				return income;
			});

			const outcome = res.map(({ outcome }) => {
				return outcome;
			});

			this.chartData.labels = months;
			this.chartData.datasets[0].data = income;
			this.chartData.datasets[1].data = outcome;
		});
	}
}
