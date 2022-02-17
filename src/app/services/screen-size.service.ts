import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScreenSizeService {
	overviewSubject = new Subject<number>();

	constructor() {}

	resize(): Observable<Event> {
		return fromEvent(window, 'resize');
	}

	isScreenDesktop(): boolean {
		return window.matchMedia('(min-width: 992px)').matches;
	}

	overviewHeightCalc(miniCardsHeight: number, summaryCardHeight: number) {
		const overviewHeight = summaryCardHeight - miniCardsHeight;

		this.overviewSubject.next(overviewHeight);
	}

	get overviewHeight() {
		return this.overviewSubject.asObservable();
	}
}
