import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/interfaces/transaction';
import { FinancesService } from 'src/app/services/finances.service';

@Component({
	selector: 'app-transactions-card',
	templateUrl: './transactions-card.component.html',
	styleUrls: ['./transactions-card.component.scss'],
})
export class TransactionsCardComponent implements OnInit {
	public transactions$!: Observable<Transaction[]>;

	constructor(private finances: FinancesService) {}

	ngOnInit(): void {
		this.transactions$ = this.finances.transactions();
	}
}
