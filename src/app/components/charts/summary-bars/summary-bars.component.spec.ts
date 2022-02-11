import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBarsComponent } from './summary-bars.component';

describe('SummaryBarsComponent', () => {
	let component: SummaryBarsComponent;
	let fixture: ComponentFixture<SummaryBarsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SummaryBarsComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SummaryBarsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
