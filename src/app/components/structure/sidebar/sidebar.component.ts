import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	public isSidebarExpanded!: boolean;

	constructor(private screenSizeService: ScreenSizeService) {}

	@HostListener('window:resize', ['$event'])
	onResize() {
		// Resize sidebar on screen size change mobile <-> desktop
		this.toggleSidebar();
	}

	public ngOnInit(): void {
		this.toggleSidebar();
	}

	public toggleSidebar(event?: MouseEvent): void {
		const isScreenDesktop = this.screenSizeService.isScreenDesktop();

		if (event?.type === 'click' && !isScreenDesktop) {
			this.isSidebarExpanded = !this.isSidebarExpanded;
			return;
		}

		isScreenDesktop
			? (this.isSidebarExpanded = true)
			: (this.isSidebarExpanded = false);
	}
}
