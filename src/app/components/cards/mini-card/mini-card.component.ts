import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-mini-card',
	templateUrl: './mini-card.component.html',
	styleUrls: ['./mini-card.component.scss'],
})
export class MiniCardComponent implements OnInit {
	@Input() title: string = '';
	@Input() value: number = 0;
	@Input() icon: string = '';
	@Input() dark: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
