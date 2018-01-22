import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiefBudgetComponent} from './fief-budget.component';

xdescribe('FiefBudgetComponent', () => {
  let component: FiefBudgetComponent;
  let fixture: ComponentFixture<FiefBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiefBudgetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiefBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
