import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnnualReportComponent } from './annnual-report.component';

describe('AnnnualReportComponent', () => {
  let component: AnnnualReportComponent;
  let fixture: ComponentFixture<AnnnualReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnnualReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnnualReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
