import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdMemberComponent } from './household-member.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('HouseholdMemberComponent', () => {
  let component: HouseholdMemberComponent;
  let fixture: ComponentFixture<HouseholdMemberComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [HouseholdMemberComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
