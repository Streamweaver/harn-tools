import {Component, DebugElement} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TenantClass} from '../shared/generators/tenant-generator';
import { Craftsman } from '../shared/generators/craftsman-generator';
import { Military } from '../shared/models/military.models';
import { Population } from '../shared/models/population.model';
import { MockManorService } from '../shared/testing/mockmanorservice';
import {By} from '@angular/platform-browser';

import { TenantComponent } from './tenant.component';
import { IManor } from '../shared/models/manor.model';

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
    <tr app-tenant *ngFor="let tenant of manor.population.tenants" [tenant]="tenant"></tr>`
})
class TestTenantListComponent {
  manor: IManor;
}
