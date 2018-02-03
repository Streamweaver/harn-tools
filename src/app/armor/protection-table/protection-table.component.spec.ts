import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionTableComponent } from './protection-table.component';

describe('ProtectionTableComponent', () => {
  let component: ProtectionTableComponent;
  let fixture: ComponentFixture<ProtectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
