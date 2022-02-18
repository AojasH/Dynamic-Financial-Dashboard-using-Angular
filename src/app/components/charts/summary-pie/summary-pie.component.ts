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
					'#e8e7e0',
					'#f2f2ef',
					'#9a9a90',
					'#4a4a4a',
					'#222222',
				],
				hoverBackgroundColor: [
					'#e8e7e0',
					'#f2f2ef',
					'#9a9a90',
					'#4a4a4a',
					'#222222',
				],
				hoverBorderColor: [
					'#e8e7e0',
					'#f2f2ef',
					'#9a9a90',
					'#4a4a4a',
					'#222222',
				],
				hoverOffset: 0,
			},
		],
	};

	public chartOptions: ChartConfiguration['options'] = {
		layout: {
			// padding: 15,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: { enabled: false },
			datalabels: {
				display: false,
				formatter: (value, ctx) => {
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
