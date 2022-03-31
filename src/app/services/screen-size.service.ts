import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScreenSizeService {
	constructor() {}

	resize(): Observable<Event> {
		return fromEvent(window, 'resize');
	}

	isScreenDesktop(): boolean {
		return window.matchMedia('(min-width: 992px)').matches;
	}
}
