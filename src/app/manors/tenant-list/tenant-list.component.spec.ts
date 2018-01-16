import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantListComponent } from './tenant-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('TenantListComponent', () => {
  let component: TenantListComponent;
  let fixture: ComponentFixture<TenantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
