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
	public showChart = true;

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.chart?.chart?.resize(0, 0);
	}

	private mainColor = '#ff4b3e';
	private secondColor = '#2b2b2b';

	public barChartType: ChartType = 'bar';
	public barChartPlugins = [DataLabelsPlugin];

	public barChartOptions: ChartConfiguration['options'] = {
		onResize: () => this.changeChartData(),
		responsive: true,
		// We use these empty structures as placeholders for dynamic theming.
		scales: {
			x: {
				ticks: {
					font: {
						family: 'Montserrat, sans-serif',
					},
				},
				grid: {
					display: false,
				},
			},
			y: {
				min: 0,
				ticks: {
					callback: (label) => {
						if (label === 0) return '';

						return `${(label as number) / 1000}K`;
					},
					stepSize: 1000,
					font: {
						family: 'Montserrat, sans-serif',
					},
				},
				alignToPixels: true,
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
				displayColors: false,
				bodyFont: {
					family: 'Montserrat, sans-serif',
				},
			},
		},
		animation: false,
	};

	public barChartData: ChartData<'bar'> = {
		labels: [],
		datasets: [
			{
				data: [],
				backgroundColor: this.secondColor,
				hoverBackgroundColor: this.mainColor,
				borderRadius: 5,
			},
		],
	};

	constructor(
		private currencyPipe: CurrencyPipe,
		private screenSizeService: ScreenSizeService
	) {}

	ngOnInit(): void {
		this.changeChartData();
	}

	resizeChart() {
		console.log('resize');
	}

	changeChartData() {
		if (true) {
			this.barChartData.datasets[0].data = [
				800.41, 1345.41, 2563.41, 475.41, 1785.41, 1100.41, 2450.41,
				1700.41, 1400.41, 1900.41, 800.41, 1453.23,
			];

			this.barChartData.labels = [
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
			this.barChartData.datasets[0].data = [
				1785.41, 1100.41, 2450.41, 1700.41, 1400.41, 1900.41, 800.41,
				1453.23,
			];

			this.barChartData.labels = [
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
