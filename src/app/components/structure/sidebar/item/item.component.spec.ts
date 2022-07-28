import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemComponent } from './item.component';

describe('ItemComponent', () => {
	let component: SidebarItemComponent;
	let fixture: ComponentFixture<SidebarItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SidebarItemComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SidebarItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
