import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('miniCards') miniCardsElement!: ElementRef;
	@ViewChild('summaryCard') summaryCardElement!: ElementRef;

	resizeSubs!: Subscription;

	balance: number = 0;
	outgoing: number = 0;
	income: number = 0;

	constructor(private screen: ScreenSizeService) {}

	ngAfterViewInit(): void {
		setTimeout(() => this.setOverviewHeight(), 100);

		this.resizeSubs = this.screen
			.resize()
			.subscribe(() => this.setOverviewHeight());
	}

	setOverviewHeight() {
		const miniCardsHeight =
			this.miniCardsElement.nativeElement.offsetHeight;
		const summaryCardHeight =
			this.summaryCardElement.nativeElement.offsetHeight;

		this.screen.overviewHeightCalc(miniCardsHeight, summaryCardHeight);
	}

	ngOnInit(): void {
		this.calculateBalance();
	}

	ngOnDestroy(): void {
		this.resizeSubs.unsubscribe();
	}

	calculateBalance() {
		this.income = 2354.7;
		this.outgoing = 1453.23;

		this.balance = this.income - this.outgoing;
	}
}
