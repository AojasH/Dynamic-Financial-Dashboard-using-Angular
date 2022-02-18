import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
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

	public isLoading = false;

	private mainColor = '#ff4b3e';
	private secondColor = '#2b2b2b';

	public chartType: ChartType = 'line';
	public chartPlugins = [DataLabelsPlugin];

	public chartOptions: ChartConfiguration['options'] = {
		color: '#a2a8b5',
		onResize: () => this.changeChartData(),
		datasets: {
			line: {
				pointBackgroundColor: '#2946a9',
				pointBorderColor: '#3c3d43',
				fill: 'origin',
			},
		},
		elements: {
			line: {
				tension: 0.5,
			},
		},
		maintainAspectRatio: false,
		responsive: true,
		// We use these empty structures as placeholders for dynamic theming.
		scales: {
			x: {
				ticks: {
					font: {
						family: 'Montserrat, sans-serif',
					},
					color: '#a2a8b5',
				},
				grid: {
					display: false,
					color: '#a2a8b5',
				},
			},
			y: {
				min: 0,
				ticks: {
					callback: (label) => {
						if (label === 0) return '';

						if (label < 1000) return label;

						return `R$ ${(label as number) / 1000}K`;
					},
					stepSize: 1000,
					font: {
						family: 'Montserrat, sans-serif',
					},
					color: '#a2a8b5',
				},
				alignToPixels: true,
				grid: {
					color: '#838793',
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
					family: 'Montserrat, sans-serif',
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
					title: () => '',
				},
				displayColors: true,
				bodyFont: {
					family: 'Montserrat, sans-serif',
				},
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

						gradient.addColorStop(0, 'RGBA(41,70,169,0)');
						gradient.addColorStop(1, '#2a2e41');

						return gradient;
					}

					return '';
				},
				hoverBackgroundColor: this.mainColor,
				borderRadius: 5,
				borderColor: '#2946a9',
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
		if (this.screen.isScreenDesktop()) {
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
		} else {
			this.chartData.datasets[0].data = [
				1785.41, 1100.41, 2450.41, 1700.41, 1400.41, 1900.41, 800.41,
				1453.23,
			];

			this.chartData.labels = [
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
}
