import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TenantListComponent} from '../tenant-list/tenant-list.component';
import { ManorComponent } from './manor.component';
import { ManorService } from '../shared/manor.service';
import { MockManorService } from '../shared/testing/mockmanorservice';

describe('ManorComponent', () => {
  let component: ManorComponent;
  let fixture: ComponentFixture<ManorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ManorComponent, TenantListComponent ],
      providers: [{provide: ManorService, useClass: MockManorService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
