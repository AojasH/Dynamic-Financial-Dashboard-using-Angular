import { Component, OnInit } from '@angular/core';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-transactions-card',
	templateUrl: './transactions-card.component.html',
	styleUrls: ['./transactions-card.component.scss'],
})
export class TransactionsCardComponent implements OnInit {
	public $transactions = this.finances.transactions();

	constructor(private finances: FinancesService) {}

	ngOnInit(): void {}
}
