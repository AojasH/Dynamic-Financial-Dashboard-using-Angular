import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-summary-pie',
	templateUrl: './summary-pie.component.html',
	styleUrls: ['./summary-pie.component.scss'],
})
export class SummaryPieComponent implements OnInit {

	constructor(private currencyPipe: CurrencyPipe) {}

	ngOnInit(): void {}
}
