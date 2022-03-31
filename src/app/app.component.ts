import { Component } from '@angular/core';
import { mockApi } from './api-mock/api-mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	constructor() {
		mockApi();
	}
}
