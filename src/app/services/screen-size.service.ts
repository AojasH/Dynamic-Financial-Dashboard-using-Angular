import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ScreenSizeService {
	constructor() {}

	isScreenDesktop(): boolean {
		return window.matchMedia('(min-width: 992px)').matches;
	}
}
