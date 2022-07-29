import { Component } from '@angular/core';
import { mockApi } from 'src/mock-api/server';
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
