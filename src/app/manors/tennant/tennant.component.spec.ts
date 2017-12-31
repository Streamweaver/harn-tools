import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennantComponent } from './tennant.component';

describe('TennantComponent', () => {
  let component: TennantComponent;
  let fixture: ComponentFixture<TennantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
