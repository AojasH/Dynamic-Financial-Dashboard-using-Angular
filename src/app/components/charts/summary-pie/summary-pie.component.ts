import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
	selector: 'app-summary-pie',
	templateUrl: './summary-pie.component.html',
	styleUrls: ['./summary-pie.component.scss'],
})
export class SummaryPieComponent implements OnInit, AfterViewInit {
	@ViewChild(BaseChartDirective) chart!: BaseChartDirective;

	public colors = ['#2e4284', '#425ebd', '#8E9ED7', '#c6cfeb', '#1e2b56'];
	private primaryColor = '#2946a9';
	private borderColor = '#3c3d43';
	private textColorSecondary = '#a2a8b5';
	private gradientTop = 'RGBA(41,46,65,1)';
	private gradientBottom = 'RGBA(41,70,169,0)';

	public chartType: ChartType = 'doughnut';

	public chartData: ChartData<'doughnut'> = {
		labels: ['Compras', 'Comida', 'Carro', 'Transporte', 'Faculdade'],
		datasets: [
			{
				data: [340, 136, 600, 143, 234.23],
				borderWidth: 0,
				backgroundColor: this.colors,
				hoverBackgroundColor: this.colors,
				hoverOffset: 0,
			},
		],
	};

	public chartOptions: ChartConfiguration['options'] = {
		maintainAspectRatio: false,

		cutout: '70%',
		plugins: {
			legend: { display: false },
			tooltip: {
				enabled: true,
				callbacks: {
					label: (ctx: any) => {
						const spentMoney = this.currencyPipe.transform(
							ctx.parsed,
							'BRL'
						) as string;

						return spentMoney;
					},
					title: (ctx: any) => {
						return ctx[0].label;
					},
				},
				backgroundColor: this.borderColor,
				titleAlign: 'center',
				titleColor: this.textColorSecondary,
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

	constructor(private currencyPipe: CurrencyPipe) {}

	ngAfterViewInit(): void {}

	ngOnInit(): void {}
}
