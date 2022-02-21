import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

import { colors } from 'src/assets/styles/variables';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-summary-pie',
	templateUrl: './summary-pie.component.html',
	styleUrls: ['./summary-pie.component.scss'],
})
export class SummaryPieComponent implements OnInit, AfterViewInit {
	@ViewChild(BaseChartDirective) chart!: BaseChartDirective;

	public colors = colors.array;

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
		private finances: FinancesService
	) {}

	ngAfterViewInit(): void {}

	ngOnInit(): void {
		this.finances.getMonthlySpending().subscribe((res) => {
			const spendingValue = res.map(({ value }) => {
				return value;
			});

			const spendingTitle = res.map(({ spent }) => {
				return spent;
			});

			this.chartData.datasets[0].data = spendingValue;

			this.chartData.labels = spendingTitle;
		});
	}
}
