import {Component, DebugElement} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TenantClass} from '../shared/generators/tenant-generator';
import { Craftsman } from '../shared/generators/craftsman-generator';
import { Military } from '../shared/models/military.models';
import { ITenant, TenantArray } from '../shared/models/tenant.model';
import {By} from '@angular/platform-browser';

import { TenantComponent } from './tenant.component';

describe('TenantComponent', () => {
  let component: TestTenantListComponent;
  let fixture: ComponentFixture<TestTenantListComponent>;
  let titleTd: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantComponent, TestTenantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTenantListComponent);
    component = fixture.componentInstance;
    titleTd = fixture.debugElement.query(By.css(`td`));
    fixture.detectChanges();
  });

  it('should create a valid component', () => {
    expect(component).toBeTruthy();
  });
});

// approach detailed on the angular.io page
// https://angular.io/guide/testing#test-a-component-inside-a-test-host-component
@Component({
  template: `
    <tr app-tenant *ngFor="let tenant of tenants" [tenant]="tenant"></tr>`
})
class TestTenantListComponent {
  tenants: TenantArray;
}
