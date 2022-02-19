import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { CurrencyPipe } from '@angular/common';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
	selector: 'app-summary-bars',
	templateUrl: './summary-bars.component.html',
	styleUrls: ['./summary-bars.component.scss'],
})
export class SummaryBarsComponent implements OnInit {
	@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

	private primaryColor = '#2946a9';
	private borderColor = '#3c3d43';
	private textColorSecondary = '#a2a8b5';
	private gradientTop = 'RGBA(41,46,65,1)';
	private gradientBottom = 'RGBA(41,70,169,0)';

	public chartType: ChartType = 'line';
	public chartPlugins = [DataLabelsPlugin];

	public chartOptions: ChartConfiguration['options'] = {
		onResize: () => this.changeChartData(),
		datasets: {
			line: {
				pointHoverBackgroundColor: this.primaryColor,
				pointHoverBorderColor: this.borderColor,
				pointBackgroundColor: this.primaryColor,
				pointBorderColor: this.borderColor,
				pointHoverBorderWidth: 3,
				pointHoverRadius: 10,
				fill: 'origin',
				pointHitRadius: 20,
				pointRadius: 0,
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
					color: this.textColorSecondary,
				},
				grid: {
					display: false,
					color: this.textColorSecondary,
				},
			},
			y: {
				min: 0,
				ticks: {
					callback: (label) => {
						if (label === 0) return '0';

						if (label < 1000) return label;

						return `${(label as number) / 1000}K`;
					},
					stepSize: 1000,
					font: {
						family: 'Work Sans',
						size: 16,
					},
					padding: 10,
					color: this.textColorSecondary,
				},
				alignToPixels: true,
				grid: {
					color: this.textColorSecondary,
					borderDash: [4, 8],
					borderWidth: 0,
					lineWidth: 2,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			datalabels: {
				display: false,
				clamp: true,
				font: {
					family: 'Work Sans',
					size: 16,
				},
			},
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
						return 'Gastos em ' + ctx[0].label;
					},
				},
				backgroundColor: this.borderColor,
				bodyFont: { family: 'Work Sans', size: 16 },
				bodyAlign: 'center',
				bodySpacing: 4,
				padding: { left: 15, right: 15, top: 5, bottom: 5 },
				displayColors: false,
				titleAlign: 'center',
				titleColor: this.textColorSecondary,
				titleFont: { family: 'Work Sans', size: 16, weight: 'normal' },
				titleMarginBottom: 2,
			},
		},
	};

	public chartData: ChartData<'bar'> = {
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

						gradient.addColorStop(1, this.gradientTop);
						gradient.addColorStop(0, this.gradientBottom);

						return gradient;
					}

					return '';
				},
				borderRadius: 5,
				borderColor: this.primaryColor,
			},
		],
	};

	constructor(
		private currencyPipe: CurrencyPipe,
		private screen: ScreenSizeService
	) {}

	ngOnInit(): void {
		this.changeChartData();
	}

	changeChartData() {
		this.chartData.datasets[0].data = [
			800.41, 1345.41, 2563.41, 475.41, 1785.41, 1100.41, 2450.41,
			1700.41, 1400.41, 1900.41, 800.41, 1453.23,
		];

		this.chartData.labels = [
			'Fev/21',
			'Mar/21',
			'Abr/21',
			'Mai/21',
			'Jun/21',
			'Jul/21',
			'Ago/21',
			'Set/21',
			'Nov/21',
			'Dez/21',
			'Jan/22',
			'Fev/22',
		];
	}
}
