import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdListComponent } from './herd-list.component';

describe('HerdListComponent', () => {
  let component: HerdListComponent;
  let fixture: ComponentFixture<HerdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
