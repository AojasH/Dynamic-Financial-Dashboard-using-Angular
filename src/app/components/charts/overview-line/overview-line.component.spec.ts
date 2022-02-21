import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewLinesComponent } from './overview-line.component';

describe('SummaryBarsComponent', () => {
	let component: OverviewLinesComponent;
	let fixture: ComponentFixture<OverviewLinesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OverviewLinesComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OverviewLinesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
