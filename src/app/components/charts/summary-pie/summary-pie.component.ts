import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/interfaces/chart-options';

@Component({
	selector: 'app-summary-pie',
	templateUrl: './summary-pie.component.html',
	styleUrls: ['./summary-pie.component.scss'],
})
export class SummaryPieComponent implements OnInit {
	@ViewChild('chart') chart!: ChartComponent;
	public chartOptions!: ChartOptions;

	constructor(private currencyPipe: CurrencyPipe) {
		this.chartOptions = {
			legend: { show: false },
			states: {
				hover: { filter: { type: 'none' } },
				active: { filter: { type: 'none' } },
			},
			series: [340, 136, 600, 143, 234.23],
			chart: {
				type: 'donut',
				// animations: { enabled: false },
			},
			labels: ['Compras', 'Comida', 'Carro', 'Transporte', 'Faculdade'],
			dataLabels: {
				enabled: true,
				formatter: (val, opts) => {
					const data = opts.w.config.series;
					const index = opts.seriesIndex;
					const labels = opts.w.config.labels;

					const label = labels[index];
					const spentMoney = this.currencyPipe.transform(
						data[index],
						'BRL'
					) as string;

					return [`${label}`, `${spentMoney}`] as unknown as string;
				},
				style: {
					fontFamily: 'Montserrat, sans-serif',
					colors: ['#28292d'],
				},
				background: {
					enabled: true,
					foreColor: '#ebebeb',
					borderRadius: 2,
					padding: 4,
					opacity: 0.9,
					borderWidth: 1,
					borderColor: '#151618',
				},
				dropShadow: { enabled: false },
			},
			colors: ['#f24646', '#28292d', '#151618', '#7f828a', '#d3d3d3'],
			tooltip: { enabled: false },
			plotOptions: { pie: { expandOnClick: false } },
		};
	}

	ngOnInit(): void {}
}
