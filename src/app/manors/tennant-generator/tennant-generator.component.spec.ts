import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennantGeneratorComponent } from './tennant-generator.component';

describe('TennantGeneratorComponent', () => {
  let component: TennantGeneratorComponent;
  let fixture: ComponentFixture<TennantGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennantGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennantGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
