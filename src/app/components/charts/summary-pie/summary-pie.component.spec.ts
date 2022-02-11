import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPieComponent } from './summary-pie.component';

describe('SummaryPieComponent', () => {
  let component: SummaryPieComponent;
  let fixture: ComponentFixture<SummaryPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
