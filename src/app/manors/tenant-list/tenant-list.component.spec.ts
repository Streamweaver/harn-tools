import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Mock} from 'protractor/built/driverProviders';

import { TenantListComponent } from './tenant-list.component';
import { ManorService } from '../shared/manor.service';
import { MockManorService } from '../shared/testing/mockmanorservice';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TenantListComponent', () => {
  let component: TenantListComponent;
  let fixture: ComponentFixture<TenantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantListComponent ],
      providers: [{provide: ManorService, useClass: MockManorService}],
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
