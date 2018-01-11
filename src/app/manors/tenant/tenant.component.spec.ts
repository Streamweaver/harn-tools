import {Component, DebugElement} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TenantComponent } from './tenant.component';
import { ITenant } from '../shared/models/tenant.model';

xdescribe('TenantComponent', () => {
  let component: TenantComponent;
  let fixture: ComponentFixture<TenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a valid component', () => {
    expect(component).toBeTruthy();
  });
});

// approach detailed on the angular.io page
// https://angular.io/guide/testing#test-a-component-inside-a-test-host-component

