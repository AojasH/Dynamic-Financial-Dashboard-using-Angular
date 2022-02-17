import {
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/interfaces/chart-options';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-summary-bars',
	templateUrl: './summary-bars.component.html',
	styleUrls: ['./summary-bars.component.scss'],
})
export class SummaryBarsComponent implements OnInit, OnDestroy {
	@ViewChild('chart') chart!: ChartComponent;
	public chartOptions!: Partial<ChartOptions>;

	public chartHeight!: Subscription;

	constructor(
		private currencyPipe: CurrencyPipe,
		private screen: ScreenSizeService
	) {
		this.chartOptions = {
			legend: { show: false },

			states: {
				hover: { filter: { type: 'none' } },
				active: { filter: { type: 'none' } },
			},
			series: [
				{
					name: 'Saída',
					data: [
						785, 1579, 2157, 1456, 1905, 1100, 800, 1600, 1400,
						2000, 1000, 1453.23,
					],
				},
			],
			chart: {
				type: 'bar',
				redrawOnParentResize: true,
				redrawOnWindowResize: true,
				fontFamily: 'Montserrat, sans-serif',
			},
			plotOptions: {
				bar: {
					horizontal: false,
					distributed: true,
					borderRadius: 5,
				},
			},
			dataLabels: {
				enabled: false,
				style: {
					fontFamily: 'Montserrat, sans-serif',
				},
			},
			fill: {
				opacity: 1,
			},
			xaxis: {
				type: 'category',
				categories: [
					'Março/2021',
					'Abril/2021',
					'Maio/2021',
					'Junho/2021',
					'Julho/2021',
					'Agosto/2021',
					'Setembro/2021',
					'Outubro/2021',
					'Novembro/2021',
					'Dezembro/2021',
					'Janeiro/2022',
					'Fevereiro/2022',
				],
			},
			colors: ['#f24646', '#28292d', '#151618', '#7f828a', '#d3d3d3'],
			tooltip: { enabled: true },
		};
	}

	ngOnInit(): void {
		this.chartHeight = this.screen.overviewSubject.subscribe((height) => {
			console.log(height);

			setTimeout(() => {
				if (this.chart)
					this.chart.updateOptions({
						chart: { height: height - 75 - 28.797 },
					});
			}, 200);
		});
	}

	ngOnDestroy(): void {
		this.chartHeight.unsubscribe();
	}
}
