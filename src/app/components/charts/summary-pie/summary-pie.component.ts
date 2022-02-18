import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
	selector: 'app-summary-pie',
	templateUrl: './summary-pie.component.html',
	styleUrls: ['./summary-pie.component.scss'],
})
export class SummaryPieComponent implements OnInit, AfterViewInit {
	@ViewChild(BaseChartDirective) chart!: BaseChartDirective;

	public chartType: ChartType = 'doughnut';

	public chartData: ChartData<'doughnut'> = {
		labels: ['Compras', 'Comida', 'Carro', 'Transporte', 'Faculdade'],
		datasets: [
			{
				data: [340, 136, 600, 143, 234.23],
				borderWidth: 0,
				backgroundColor: [
					'#2e4284',
					'#425ebd',
					'#c6cfeb',
					'#2e4284',
					'#222222',
				],
				hoverBackgroundColor: [
					'#2e4284',
					'#425ebd',
					'#c6cfeb',
					'#2e4284',
					'#222222',
				],
				hoverBorderColor: [
					'#2e4284',
					'#425ebd',
					'#c6cfeb',
					'#2e4284',
					'#222222',
				],
				hoverOffset: 0,
			},
		],
	};

	public chartOptions: ChartConfiguration['options'] = {
		// cutout: '70%',
		layout: {
			// padding: 25,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				callbacks: {
					label: (ctx) => {
						const spentMoney = this.currencyPipe.transform(
							ctx.parsed,
							'BRL'
						) as string;

						return [ctx.label, spentMoney];
					},
				},
				backgroundColor: '#3c3d43',
				titleFont: { family: 'Work Sans' },
				titleAlign: 'center',
				footerAlign: 'center',
				bodyAlign: 'center',
				displayColors: false,
			},
			datalabels: {
				display: false,
				formatter: (value: number, ctx: any) => {
					const spentMoney = this.currencyPipe.transform(
						value,
						'BRL'
					) as string;

					if (ctx.chart.data.labels) {
						const label = ctx.chart.data.labels[ctx.dataIndex];

						return [label, spentMoney];
					}

					return spentMoney;
				},
				color: 'white',
				backgroundColor: '#26272a',
				borderColor: '#151618',
				borderRadius: 5,
				padding: {
					top: 3,
					left: 7,
					right: 7,
					bottom: 1,
				},
				opacity: 1,
				borderWidth: 1,
				textAlign: 'center',
				font: {
					family: 'Montserrat, sans-serif',
					weight: 600,
				},
			},
		},
	};

	public chartPlugins = [DatalabelsPlugin];

	constructor(
		private currencyPipe: CurrencyPipe,
		private screen: ScreenSizeService
	) {}

	ngAfterViewInit(): void {}

	ngOnInit(): void {}
}
