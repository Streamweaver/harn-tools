import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManorComponent } from './manor.component';

describe('ManorComponent', () => {
  let component: ManorComponent;
  let fixture: ComponentFixture<ManorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManorComponent ]
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
