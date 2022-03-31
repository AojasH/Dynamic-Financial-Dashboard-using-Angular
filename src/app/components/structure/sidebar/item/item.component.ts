import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class SidebarItemComponent {
	@Input() public text: string = '';
	@Input() public icon: string = '';
	@Input() public active: boolean = false;
	@Input() public isSidebarExpanded: boolean = false;
}
