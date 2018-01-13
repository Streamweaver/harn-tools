import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdListComponent } from './household-list.component';

describe('HouseholdListComponent', () => {
  let component: HouseholdListComponent;
  let fixture: ComponentFixture<HouseholdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
