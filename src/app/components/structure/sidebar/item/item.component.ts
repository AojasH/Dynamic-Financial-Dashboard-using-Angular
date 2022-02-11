import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
	@Input() text: string = '';
	@Input() icon: string = '';
	@Input() active: boolean = false;
	@Input() isSidebarExpanded: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
