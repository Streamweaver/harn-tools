import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LordsBudgetComponent } from './lords-budget.component';

describe('LordsBudgetComponent', () => {
  let component: LordsBudgetComponent;
  let fixture: ComponentFixture<LordsBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LordsBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LordsBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
