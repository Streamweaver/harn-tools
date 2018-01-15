import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdListComponent } from './household-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('HouseholdListComponent', () => {
  let component: HouseholdListComponent;
  let fixture: ComponentFixture<HouseholdListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [HouseholdListComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
