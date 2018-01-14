import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveManorComponent } from './reactive-manor.component';

describe('ReactiveManorComponent', () => {
  let component: ReactiveManorComponent;
  let fixture: ComponentFixture<ReactiveManorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveManorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveManorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
