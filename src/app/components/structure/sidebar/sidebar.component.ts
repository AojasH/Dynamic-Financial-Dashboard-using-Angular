import { Component, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	public isSidebarExpanded!: boolean;

	@HostListener('window:resize', ['$event'])
	private onResize(): void {
		// Resize sidebar on screen size change mobile <-> desktop
		this.toggleSidebar();
	}

	public ngOnInit(): void {
		this.toggleSidebar();
	}

	public toggleSidebar(event?: MouseEvent): void {
		const isBigScreen = window.matchMedia('(min-width: 992px)').matches;

		if (event?.type === 'click' && !isBigScreen) {
			this.isSidebarExpanded = !this.isSidebarExpanded;
			return;
		}

		isBigScreen
			? (this.isSidebarExpanded = true)
			: (this.isSidebarExpanded = false);
	}
}
